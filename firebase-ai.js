// Kanji Kachi - Firebase AI Logic Web Integration
// Uses the official Firebase JS SDK (firebase/ai) connected to project: kanji-kachi

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAI, getGenerativeModel, GoogleAIBackend } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-ai.js";

const firebaseConfig = {
  apiKey: "AIzaSyBXObJstIR-UdhFft2R26u_OmPDjkfPG5c",
  authDomain: "kanji-kachi.firebaseapp.com",
  projectId: "kanji-kachi",
  storageBucket: "kanji-kachi.firebasestorage.app",
  messagingSenderId: "591503748281",
  appId: "1:591503748281:web:df40f93e56a8281a8eff68",
  measurementId: "G-PS80608ZFE"
};

let firebaseApp = null;
let aiService = null;
let initError = null;

try {
  firebaseApp = initializeApp(firebaseConfig);
  aiService = getAI(firebaseApp, { backend: new GoogleAIBackend() });
} catch (err) {
  console.error("[Firebase AI Logic] Initialization failed:", err);
  initError = err;
}

const FALLBACK_MODELS = [
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite"
];

/**
 * Send a chat query to Firebase AI Logic with conversation history and system instruction.
 * @param {string} query - Current user prompt
 * @param {Array<{role: string, text: string}>} history - Previous messages
 * @param {string} systemInstruction - Tutor persona instructions
 * @returns {Promise<{text: string, totalTokens: number, model: string}>}
 */
async function ask(query, history = [], systemInstruction = "") {
  if (initError || !aiService) {
    throw initError || new Error("Firebase AI Logic chưa được khởi tạo.");
  }

  // Build Gemini-compatible multi-turn contents (last 6 messages + current query)
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
