// Kanji Kachi - Firebase Web Integration
// Includes: Firebase AI Logic + App Check (reCAPTCHA v3) + Google Auth + Firestore Real-Time Sync

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { initializeAppCheck, ReCaptchaV3Provider } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app-check.js";
import { getAI, getGenerativeModel, GoogleAIBackend } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-ai.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  onSnapshot,
  setDoc,
  arrayUnion,
  arrayRemove
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBXObJstIR-UdhFft2R26u_OmPDjkfPG5c",
  authDomain: "kanji-kachi.firebaseapp.com",
  projectId: "kanji-kachi",
  storageBucket: "kanji-kachi.firebasestorage.app",
  messagingSenderId: "591503748281",
  appId: "1:591503748281:web:df40f93e56a8281a8eff68",
  measurementId: "G-PS80608ZFE"
};

const RECAPTCHA_V3_SITE_KEY = "6LfPhSwuAAAAAHfup9qNZQ4KN_iIX2krlTFQREVV";

let firebaseApp = null;
let aiService = null;
let authService = null;
let dbService = null;
let initError = null;

try {
  firebaseApp = initializeApp(firebaseConfig);
  initializeAppCheck(firebaseApp, {
    provider: new ReCaptchaV3Provider(RECAPTCHA_V3_SITE_KEY),
    isTokenAutoRefreshEnabled: true
  });
  aiService = getAI(firebaseApp, { backend: new GoogleAIBackend() });
  authService = getAuth(firebaseApp);
  dbService = getFirestore(firebaseApp);
} catch (err) {
  console.error("[Firebase] Initialization failed:", err);
  initError = err;
}

// ================= 1. FIREBASE AI LOGIC =================
const FALLBACK_MODELS = [
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite"
];

async function ask(query, history = [], systemInstruction = "") {
  if (initError || !aiService) {
    throw initError || new Error("Firebase AI Logic chưa được khởi tạo.");
  }

  const contents = [];
  const recentHistory = Array.isArray(history) ? history.slice(-6) : [];
  for (const msg of recentHistory) {
    if (!msg || !msg.text) continue;
    contents.push({
      role: msg.role === "bot" ? "model" : "user",
      parts: [{ text: msg.text }]
    });
  }
  contents.push({
    role: "user",
    parts: [{ text: query }]
  });

  let lastError = null;

  for (const modelName of FALLBACK_MODELS) {
    try {
      const model = getGenerativeModel(aiService, {
        model: modelName,
        systemInstruction: systemInstruction || undefined,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 900
        }
      });

      const result = await model.generateContent({ contents });
      const response = result.response;
      const text = typeof response.text === "function" ? response.text() : "";

      if (!text) {
        throw new Error("AI không trả về nội dung phản hồi.");
      }

      const usage = response.usageMetadata;
      const totalTokens = (usage && usage.totalTokenCount)
        ? usage.totalTokenCount
        : Math.floor(150 + text.length / 3);

      return {
        text,
        totalTokens,
        model: modelName
      };
    } catch (err) {
      lastError = err;
      console.warn(`[Firebase AI Logic] Model ${modelName} failed:`, err.message || err);
    }
  }

  throw lastError || new Error("Không thể kết nối tới Firebase AI Logic.");
}

window.kanjiFirebaseAI = {
  isReady: () => Boolean(aiService && !initError),
  ask
};

// ================= 2. GOOGLE AUTH & FIRESTORE SYNC (MATCHING MOBILE APP SCHEMA) =================
// Schema in mobile app FirestoreSyncManager.kt -> collection "users", doc(uid):
// {
//   userId, email, displayName, profileDisplayName, lastActiveTimestamp,
//   lastStudiedKanjiId, practiceRememberedIds, vocabRememberedIds,
//   vocabStudiedTopicIds, reviewNeededIds
// }

let currentUser = null;
let unsubscribeProgress = null;
const authListeners = new Set();
const progressListeners = new Set();

function notifyAuth(user) {
  authListeners.forEach(cb => {
    try { cb(user); } catch (e) { console.error(e); }
  });
}

function notifyProgress(data) {
  progressListeners.forEach(cb => {
    try { cb(data); } catch (e) { console.error(e); }
  });
}

if (authService) {
  onAuthStateChanged(authService, (user) => {
    currentUser = user ? {
      uid: user.uid,
      email: user.email || "",
      displayName: user.displayName || "Người học Kanji",
      photoURL: user.photoURL || ""
    } : null;

    notifyAuth(currentUser);

    if (unsubscribeProgress) {
      unsubscribeProgress();
      unsubscribeProgress = null;
    }

    if (currentUser && dbService) {
      const userRef = doc(dbService, "users", currentUser.uid);
      unsubscribeProgress = onSnapshot(userRef, (snap) => {
        if (snap.exists()) {
          notifyProgress(snap.data());
        } else {
          notifyProgress(null);
        }
      }, (err) => {
        console.warn("[Firestore Sync] Snapshot listener error:", err);
      });
    }
  });
}

async function signInWithGoogle() {
  if (!authService) throw new Error("Firebase Auth chưa sẵn sàng.");
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  const cred = await signInWithPopup(authService, provider);
  return cred.user;
}

async function signOutUser() {
  if (!authService) return;
  if (unsubscribeProgress) {
    unsubscribeProgress();
    unsubscribeProgress = null;
  }
  await signOut(authService);
}

/**
 * Sync progress delta to Firestore users/{uid} using the exact same fields as the Android/iOS app.
 */
async function syncProgress(payload) {
  if (!currentUser || !dbService) return false;
  const userRef = doc(dbService, "users", currentUser.uid);

  const updates = {
    userId: currentUser.uid,
    email: currentUser.email,
    displayName: currentUser.displayName,
    lastActiveTimestamp: Date.now()
  };

  if (payload.reset) {
    updates.practiceRememberedIds = payload.practiceRememberedIds || [];
    updates.vocabRememberedIds = payload.vocabRememberedIds || [];
    updates.reviewNeededIds = payload.reviewNeededIds || [];
    updates.vocabStudiedTopicIds = payload.vocabStudiedTopicIds || [];
    updates.lastStudiedKanjiId = null;
    await setDoc(userRef, updates, { merge: true });
    return true;
  }

  const additions = {};
  const removals = {};

  const applyListDelta = (field, addArr, removeArr) => {
    if (Array.isArray(addArr) && addArr.length > 0) {
      additions[field] = arrayUnion(...addArr);
    }
    if (Array.isArray(removeArr) && removeArr.length > 0) {
      removals[field] = arrayRemove(...removeArr);
    }
  };

  applyListDelta("practiceRememberedIds", payload.addPracticeRemembered, payload.removePracticeRemembered);
  applyListDelta("vocabRememberedIds", payload.addVocabRemembered, payload.removeVocabRemembered);
  applyListDelta("reviewNeededIds", payload.addReviewNeeded, payload.removeReviewNeeded);
  applyListDelta("vocabStudiedTopicIds", payload.addVocabTopics, payload.removeVocabTopics);

  if (payload.lastStudiedKanjiId !== undefined) {
    additions.lastStudiedKanjiId = payload.lastStudiedKanjiId;
  }

  await setDoc(userRef, { ...updates, ...additions }, { merge: true });
  if (Object.keys(removals).length > 0) {
    await setDoc(userRef, removals, { merge: true });
  }
  return true;
}

window.kanjiFirebaseSync = {
  isReady: () => Boolean(authService && dbService && !initError),
  getCurrentUser: () => currentUser,
  signInWithGoogle,
  signOutUser,
  syncProgress,
  onAuthChange: (cb) => {
    authListeners.add(cb);
    cb(currentUser);
    return () => authListeners.delete(cb);
  },
  onCloudProgress: (cb) => {
    progressListeners.add(cb);
    return () => progressListeners.delete(cb);
  }
};
