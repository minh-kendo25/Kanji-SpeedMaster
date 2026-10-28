// KanjiFlash Learning Application

// Romaji to Hiragana Mapping
const ROMAJI_TABLE = [
  // 4 chars
  ['ttsu', 'っつ'], ['cchi', 'っち'], ['sshi', 'っし'],
  ['nnya', 'んにゃ'], ['nnyu', 'んにゅ'], ['nnyo', 'んにょ'],
  // 3 chars
  ['nna', 'んな'], ['nni', 'んに'], ['nnu', 'んぬ'], ['nne', 'んね'], ['nno', 'んの'],
  ['kya', 'きゃ'], ['kyu', 'きゅ'], ['kyo', 'きょ'],
  ['sha', 'しゃ'], ['shu', 'しゅ'], ['sho', 'しょ'], ['she', 'しぇ'],
  ['sya', 'しゃ'], ['syu', 'しゅ'], ['syo', 'しょ'],
  ['cha', 'ちゃ'], ['chu', 'ちゅ'], ['cho', 'ちょ'], ['che', 'ちぇ'],
  ['tya', 'ちゃ'], ['tyu', 'ちゅ'], ['tyo', 'ちょ'],
  ['nya', 'にゃ'], ['nyu', 'にゅ'], ['nyo', 'にょ'],
  ['hya', 'ひゃ'], ['hyu', 'ひゅ'], ['hyo', 'ひょ'],
  ['mya', 'みゃ'], ['myu', 'みゅ'], ['myo', 'みょ'],
  ['rya', 'りゃ'], ['ryu', 'りゅ'], ['ryo', 'りょ'],
  ['gya', 'ぎゃ'], ['gyu', 'ぎゅ'], ['gyo', 'ぎょ'],
  ['jya', 'じゃ'], ['jyu', 'じゅ'], ['jyo', 'じょ'],
  ['bya', 'びゃ'], ['byu', 'びゅ'], ['byo', 'びょ'],
  ['pya', 'ぴゃ'], ['pyu', 'ぴゅ'], ['pyo', 'ぴょ'],
  ['tsu', 'つ'], ['shi', 'し'], ['chi', 'ち'],
  ['dzu', 'づ'], ['dzi', 'ぢ'],
  ['xtsu', 'っ'], ['ltsu', 'っ'],
  // 2 chars
  ['ka', 'か'], ['ki', 'き'], ['ku', 'く'], ['ke', 'け'], ['ko', 'こ'],
  ['sa', 'さ'], ['si', 'し'], ['su', 'す'], ['se', 'せ'], ['so', 'そ'],
  ['ta', 'た'], ['ti', 'ち'], ['tu', 'つ'], ['te', 'て'], ['to', 'と'],
  ['na', 'な'], ['ni', 'に'], ['nu', 'ぬ'], ['ne', 'ね'], ['no', 'の'],
  ['ha', 'は'], ['hi', 'ひ'], ['fu', 'ふ'], ['hu', 'ふ'], ['he', 'へ'], ['ho', 'ほ'],
  ['ma', 'ま'], ['mi', 'み'], ['mu', 'む'], ['me', 'め'], ['mo', 'も'],
  ['ya', 'や'], ['yu', 'ゆ'], ['yo', 'よ'],
  ['ra', 'ら'], ['ri', 'り'], ['ru', 'る'], ['re', 'れ'], ['ro', 'ろ'],
  ['wa', 'わ'], ['wo', 'を'],
  ['ga', 'が'], ['gi', 'ぎ'], ['gu', 'ぐ'], ['ge', 'げ'], ['go', 'ご'],
  ['za', 'ざ'], ['zi', 'じ'], ['zu', 'ず'], ['ze', 'ぜ'], ['zo', 'ぞ'],
  ['ja', 'じゃ'], ['ju', 'じゅ'], ['jo', 'じょ'], ['je', 'じぇ'],
  ['da', 'だ'], ['di', 'ぢ'], ['du', 'づ'], ['de', 'で'], ['do', 'ど'],
  ['ba', 'ば'], ['bi', 'び'], ['bu', 'ぶ'], ['be', 'べ'], ['bo', 'ぼ'],
  ['pa', 'ぱ'], ['pi', 'ぴ'], ['pu', 'ぷ'], ['pe', 'ぺ'], ['po', 'ぽ'],
  ['fa', 'ふぁ'], ['fi', 'ふぃ'], ['fe', 'ふぇ'], ['fo', 'ふぉ'],
  ['nn', 'ん'], ["n'", 'ん'],
  ['xa', 'ぁ'], ['xi', 'ぃ'], ['xu', 'ぅ'], ['xe', 'ぇ'], ['xo', 'ぉ'],
  ['la', 'ぁ'], ['li', 'ぃ'], ['lu', 'ぅ'], ['le', 'ぇ'], ['lo', 'ぉ'],
  // 1 char
  ['a', 'あ'], ['i', 'い'], ['u', 'う'], ['e', 'え'], ['o', 'お'],
  ['-', 'ー']
];

const ROMAJI_MAP = Object.fromEntries(ROMAJI_TABLE);

function convertRomajiToHiragana(text) {
  let res = '';
  let i = 0;
  const s = text.toLowerCase();
  while (i < s.length) {
    if (i + 4 <= s.length && ROMAJI_MAP[s.slice(i, i + 4)]) {
      res += ROMAJI_MAP[s.slice(i, i + 4)];
      i += 4;
      continue;
    }
    if (i + 3 <= s.length && ROMAJI_MAP[s.slice(i, i + 3)]) {
      res += ROMAJI_MAP[s.slice(i, i + 3)];
      i += 3;
      continue;
    }
    if (i + 1 < s.length && s[i] === s[i + 1] && /[bcdfghjklmpqrstvwxyz]/.test(s[i]) && s[i] !== 'n') {
      res += 'っ';
      i += 1;
      continue;
    }
    if (i + 2 <= s.length && ROMAJI_MAP[s.slice(i, i + 2)]) {
      res += ROMAJI_MAP[s.slice(i, i + 2)];
      i += 2;
      continue;
    }
    if (s[i] === 'm' && i + 1 < s.length && /[bp]/.test(s[i + 1])) {
      res += 'ん';
      i += 1;
      continue;
    }
    if (s[i] === 'n') {
      const next = s[i + 1];
      if (!next || (!/[aeiouy]/.test(next) && next !== 'n')) {
        res += 'ん';
        i += 1;
        continue;
      }
    }
    if (ROMAJI_MAP[s[i]]) {
      res += ROMAJI_MAP[s[i]];
      i += 1;
      continue;
    }
    res += s[i];
    i += 1;
  }
  return res;
}

function katakanaToHiragana(text) {
  return text.replace(/[\u30a1-\u30f6]/g, match => {
    return String.fromCharCode(match.charCodeAt(0) - 0x60);
  });
}

function normalizeJapanese(text) {
  if (!text) return '';
  let str = text.trim();
  str = str.replace(/[〜~:：\s]/g, '');
  str = katakanaToHiragana(str);
  return str.toLowerCase();
}

// Application State
let activePool = [...KANJI_DATA];
let currentPoolIndex = 0;
let currentItem = null;
let currentChoices = [];

let readingCorrect = false;
let choiceCorrect = false;
let isTransitioning = false;
let hadErrorOnCurrent = false;
let transitionTimer = null;

let streak = 0;
let maxStreak = 0;
let correctCount = 0;
const itemStatuses = new Map(); // id -> 'correct' | 'wrong'

// User Preferences (saved in localStorage)
let mcMode = localStorage.getItem('kanjiflash_mc_mode') || 'after_higa'; // 'after_higa' | 'disabled' | 'both'
let soundEnabled = localStorage.getItem('kanjiflash_sound') !== 'false';
let romajiAutoConvert = localStorage.getItem('kanjiflash_romaji') !== 'false';
let isShuffled = false;

// Audio Context
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playSound(type) {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'success') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08); // A5
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc.start(now);
      osc.stop(now + 0.28);
    } else if (type === 'half-correct') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(659.25, now); // E5
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'error') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.setValueAtTime(160, now + 0.08);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.start(now);
      osc.stop(now + 0.22);
    }
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

// Speech Synthesis
function speakJapanese(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ja-JP';
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

// UI Elements
const kanjiDisplay = document.getElementById('kanjiDisplay');
const hiraganaInput = document.getElementById('hiraganaInput');
const inputStatusIcon = document.getElementById('inputStatusIcon');
const choicesSection = document.getElementById('choicesSection');
const choicesGrid = document.getElementById('choicesGrid');
const quizCard = document.getElementById('quizCard');
const hintText = document.getElementById('hintText');
const categoryTag = document.getElementById('categoryTag');

const progressCounter = document.getElementById('progressCounter');
const progressStatItem = document.getElementById('progressStatItem');
const progressFill = document.getElementById('progressFill');
const streakCounter = document.getElementById('streakCounter');
const accuracyCounter = document.getElementById('accuracyCounter');

// Action buttons
const prevBtn = document.getElementById('prevBtn');
const hintBtn = document.getElementById('hintBtn');
const skipBtn = document.getElementById('skipBtn');
const ttsBtn = document.getElementById('ttsBtn');

// Header buttons
const openGridHeaderBtn = document.getElementById('openGridHeaderBtn');
const settingsBtn = document.getElementById('settingsBtn');
const soundToggleBtn = document.getElementById('soundToggleBtn');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const shuffleToggleBtn = document.getElementById('shuffleToggleBtn');
const romajiCheckbox = document.getElementById('romajiCheckbox');

// Numbers Modal Elements
const allNumbersModal = document.getElementById('allNumbersModal');
const closeGridModal = document.getElementById('closeGridModal');
const modalNumberInput = document.getElementById('modalNumberInput');
const modalGoBtn = document.getElementById('modalGoBtn');
const modalTotalLabel = document.getElementById('modalTotalLabel');
const numbersGridContainer = document.getElementById('numbersGridContainer');

// Settings Modal Elements
const settingsModal = document.getElementById('settingsModal');
const closeSettingsModal = document.getElementById('closeSettingsModal');
const saveSettingsBtn = document.getElementById('saveSettingsBtn');
const settingsRomajiCheckbox = document.getElementById('settingsRomajiCheckbox');
const settingsSoundCheckbox = document.getElementById('settingsSoundCheckbox');
const radioModeAfterHiga = document.querySelector('input[name="mcModeRadio"][value="after_higa"]');
const radioModeDisabled = document.querySelector('input[name="mcModeRadio"][value="disabled"]');
const radioModeBoth = document.querySelector('input[name="mcModeRadio"][value="both"]');

// Build Full Numbers Grid
function initNumbersGrid() {
  numbersGridContainer.innerHTML = '';
  for (let i = 0; i < activePool.length; i++) {
    const btn = document.createElement('button');
    btn.className = 'grid-num-btn';
    btn.dataset.index = i;
    btn.textContent = i + 1;
    btn.title = `Câu ${i + 1}: ${activePool[i].kanji}`;
    btn.addEventListener('click', () => {
      jumpToQuestion(i);
      allNumbersModal.classList.remove('open');
    });
    numbersGridContainer.appendChild(btn);
  }
}

// Generate 4 Choices
function generateChoices(correctItem) {
  const choices = [correctItem.meaning];
  const allMeanings = [...new Set(KANJI_DATA.map(d => d.meaning))].filter(m => m !== correctItem.meaning);

  while (choices.length < 4 && allMeanings.length > 0) {
    const idx = Math.floor(Math.random() * allMeanings.length);
    const m = allMeanings.splice(idx, 1)[0];
    choices.push(m);
  }

  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [choices[i], choices[j]] = [choices[j], choices[i]];
  }

  return choices;
}

// Render Question
function loadQuestion(index) {
  if (transitionTimer) {
    clearTimeout(transitionTimer);
    transitionTimer = null;
  }

  if (index >= activePool.length) {
    alert(`🎉 Chúc mừng bạn đã hoàn thành bộ ${activePool.length} từ!\nĐúng: ${correctCount}\nChuỗi cao nhất: ${maxStreak}`);
    currentPoolIndex = 0;
  } else if (index < 0) {
    currentPoolIndex = 0;
  } else {
    currentPoolIndex = index;
  }

  currentItem = activePool[currentPoolIndex];
  currentChoices = generateChoices(currentItem);

  readingCorrect = false;
  choiceCorrect = false;
  isTransitioning = false;
  hadErrorOnCurrent = false;

  // Update UI Elements
  kanjiDisplay.textContent = currentItem.kanji;
  categoryTag.textContent = `Từ số ${currentPoolIndex + 1} / ${activePool.length}`;
  hintText.textContent = '';

  // Reset Input Box (Unlocked for the new question)
  hiraganaInput.readOnly = false;
  hiraganaInput.value = '';
  hiraganaInput.classList.remove('correct', 'wrong');
  inputStatusIcon.classList.remove('visible');
  quizCard.classList.remove('success-flash');

  // Handle Multiple Choice Visibility based on mcMode
  if (mcMode === 'disabled') {
    choicesSection.style.display = 'none';
    choiceCorrect = true; // Auto-pass multiple choice when disabled
  } else if (mcMode === 'after_higa') {
    choicesSection.style.display = 'none';
    choicesSection.classList.remove('slide-in');
    choiceCorrect = false;
  } else {
    // 'both' mode
    choicesSection.style.display = 'flex';
    choicesSection.classList.remove('slide-in');
    choiceCorrect = false;
  }

  // Update Buttons
  prevBtn.disabled = (currentPoolIndex === 0);

  // Render 4 choices
  choicesGrid.innerHTML = '';
  currentChoices.forEach((choice, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.dataset.index = idx;
    btn.dataset.meaning = choice;
    btn.innerHTML = `<span class="choice-key">${idx + 1}</span> <span class="choice-text">${choice}</span>`;
    btn.addEventListener('click', () => handleChoiceSelect(idx, btn));
    choicesGrid.appendChild(btn);
  });

  // Sync Navigator
  updateNavigator();

  // Focus Input
  setTimeout(() => {
    if (!hiraganaInput.readOnly) {
      hiraganaInput.focus();
    }
  }, 40);
}

// Update Navigator & Grid Badges
function updateNavigator() {
  progressCounter.textContent = `${currentPoolIndex + 1} / ${activePool.length}`;
  const pct = Math.round(((currentPoolIndex) / activePool.length) * 100);
  progressFill.style.width = `${pct}%`;

  streakCounter.textContent = streak;
  const attempts = currentPoolIndex + (hadErrorOnCurrent ? 1 : 0);
  const acc = attempts > 0 ? Math.round((correctCount / attempts) * 100) : 100;
  accuracyCounter.textContent = `${acc}%`;

  modalTotalLabel.textContent = activePool.length;

  // Update buttons in grid modal
  const gridBtns = numbersGridContainer.querySelectorAll('.grid-num-btn');
  gridBtns.forEach((btn, idx) => {
    const item = activePool[idx];
    const status = itemStatuses.get(item.id);

    btn.classList.toggle('active', idx === currentPoolIndex);
    btn.classList.toggle('status-correct', status === 'correct');
    btn.classList.toggle('status-wrong', status === 'wrong');
  });
}

// Navigation Actions
function prevQuestion() {
  if (transitionTimer) {
    clearTimeout(transitionTimer);
    transitionTimer = null;
  }
  isTransitioning = false;

  if (currentPoolIndex > 0) {
    loadQuestion(currentPoolIndex - 1);
  }
}

function nextQuestionManual() {
  if (transitionTimer) {
    clearTimeout(transitionTimer);
    transitionTimer = null;
  }
  isTransitioning = false;

  if (currentPoolIndex < activePool.length - 1) {
    loadQuestion(currentPoolIndex + 1);
  }
}

function jumpToQuestion(targetIndex) {
  if (transitionTimer) {
    clearTimeout(transitionTimer);
    transitionTimer = null;
  }
  isTransitioning = false;

  const validIndex = Math.max(0, Math.min(targetIndex, activePool.length - 1));
  loadQuestion(validIndex);
}

// Check Hiragana Input
function checkReadingInput() {
  const rawVal = hiraganaInput.value;
  if (!rawVal.trim()) {
    readingCorrect = false;
    hiraganaInput.classList.remove('correct', 'wrong');
    inputStatusIcon.classList.remove('visible');
    return;
  }

  const normalizedInput = normalizeJapanese(rawVal);
  const acceptable = currentItem.readings.map(r => normalizeJapanese(r));
  const isMatch = acceptable.includes(normalizedInput);

  if (isMatch) {
    if (!readingCorrect) {
      readingCorrect = true;
      hiraganaInput.classList.add('correct');
      hiraganaInput.classList.remove('wrong');
      inputStatusIcon.textContent = '✅';
      inputStatusIcon.classList.add('visible');
      playSound('half-correct');

      // LOCK BOX & UNFOCUS so pressing 1, 2, 3, 4 won't be eaten by text IME!
      hiraganaInput.readOnly = true;
      hiraganaInput.blur();

      if (mcMode === 'disabled') {
        choiceCorrect = true;
        checkCompletion();
      } else if (mcMode === 'after_higa') {
        // Reveal choices now with slide animation
        choicesSection.style.display = 'flex';
        choicesSection.classList.add('slide-in');
      } else {
        checkCompletion();
      }
    }
  } else {
    readingCorrect = false;
    hiraganaInput.classList.remove('correct');
    inputStatusIcon.classList.remove('visible');
  }
}

// Choice Select
function handleChoiceSelect(index, btnElement) {
  if (isTransitioning) return;

  const selectedMeaning = currentChoices[index];
  const isCorrect = (selectedMeaning === currentItem.meaning);

  if (isCorrect) {
    choiceCorrect = true;
    document.querySelectorAll('.choice-btn').forEach(b => {
      b.classList.remove('wrong');
      if (b.dataset.meaning === currentItem.meaning) {
        b.classList.add('correct');
      }
    });
    playSound('half-correct');
    checkCompletion();
  } else {
    hadErrorOnCurrent = true;
    itemStatuses.set(currentItem.id, 'wrong');
    streak = 0;
    updateNavigator();
    btnElement.classList.add('wrong');
    playSound('error');
    setTimeout(() => {
      btnElement.classList.remove('wrong');
    }, 450);
  }
}

// Check Completion
function checkCompletion() {
  if (readingCorrect && choiceCorrect && !isTransitioning) {
    isTransitioning = true;
    quizCard.classList.add('success-flash');
    playSound('success');

    if (!hadErrorOnCurrent) {
      streak++;
      if (streak > maxStreak) maxStreak = streak;
      correctCount++;
      itemStatuses.set(currentItem.id, 'correct');
    }

    updateNavigator();

    if (transitionTimer) clearTimeout(transitionTimer);
    transitionTimer = setTimeout(() => {
      currentPoolIndex++;
      loadQuestion(currentPoolIndex);
    }, 380);
  }
}

// Helper to match key to choice index 0, 1, 2, 3
function getChoiceIndex(e) {
  if (e.code === 'Digit1' || e.code === 'Numpad1' || e.key === '1') return 0;
  if (e.code === 'Digit2' || e.code === 'Numpad2' || e.key === '2') return 1;
  if (e.code === 'Digit3' || e.code === 'Numpad3' || e.key === '3') return 2;
  if (e.code === 'Digit4' || e.code === 'Numpad4' || e.key === '4') return 3;

  // Also support A, B, C, D
  if (e.code === 'KeyA' || e.key.toLowerCase() === 'a') return 0;
  if (e.code === 'KeyB' || e.key.toLowerCase() === 'b') return 1;
  if (e.code === 'KeyC' || e.key.toLowerCase() === 'c') return 2;
  if (e.code === 'KeyD' || e.key.toLowerCase() === 'd') return 3;

  return -1;
}

// Keyboard Shortcuts
window.addEventListener('keydown', (e) => {
  // If modal is open
  if (allNumbersModal.classList.contains('open') || settingsModal.classList.contains('open')) {
    if (e.key === 'Escape') {
      allNumbersModal.classList.remove('open');
      settingsModal.classList.remove('open');
      if (!hiraganaInput.readOnly) hiraganaInput.focus();
    }
    return;
  }

  // Ctrl+Z or Alt+ArrowLeft to go back (Quay lại câu trước)
  if ((e.ctrlKey && e.key.toLowerCase() === 'z') || (e.altKey && e.key === 'ArrowLeft')) {
    e.preventDefault();
    prevQuestion();
    return;
  }

  // Alt+ArrowRight to go next
  if (e.altKey && e.key === 'ArrowRight') {
    e.preventDefault();
    nextQuestionManual();
    return;
  }

  // Ctrl+G to toggle Numbers Grid
  if (e.ctrlKey && e.key.toLowerCase() === 'g') {
    e.preventDefault();
    openGridModal();
    return;
  }

  // 1-4 for multiple choice selection
  const choiceIdx = getChoiceIndex(e);
  if (choiceIdx !== -1) {
    // If multiple choice is allowed and visible
    if (mcMode !== 'disabled' && (mcMode !== 'after_higa' || readingCorrect)) {
      e.preventDefault();
      // Ensure input is blurred so no characters are typed
      hiraganaInput.blur();
      const btns = document.querySelectorAll('.choice-btn');
      if (btns[choiceIdx]) {
        btns[choiceIdx].click();
      }
      return;
    }
  }

  // Enter to focus input if not focused and not readOnly
  if (e.key === 'Enter') {
    if (!hiraganaInput.readOnly && document.activeElement !== hiraganaInput) {
      hiraganaInput.focus();
    }
  }
});

// Navigation Button Listeners
prevBtn.addEventListener('click', prevQuestion);

// Full Numbers Grid Modal Handlers
function openGridModal() {
  modalNumberInput.value = currentPoolIndex + 1;
  modalNumberInput.max = activePool.length;
  allNumbersModal.classList.add('open');
  setTimeout(() => {
    modalNumberInput.focus();
    modalNumberInput.select();
  }, 100);
}

openGridHeaderBtn.addEventListener('click', openGridModal);
progressStatItem.addEventListener('click', openGridModal);

closeGridModal.addEventListener('click', () => {
  allNumbersModal.classList.remove('open');
  if (!hiraganaInput.readOnly) hiraganaInput.focus();
});

allNumbersModal.addEventListener('click', (e) => {
  if (e.target === allNumbersModal) {
    allNumbersModal.classList.remove('open');
    if (!hiraganaInput.readOnly) hiraganaInput.focus();
  }
});

function handleModalNumberJump() {
  const num = parseInt(modalNumberInput.value, 10);
  if (!isNaN(num) && num >= 1 && num <= activePool.length) {
    allNumbersModal.classList.remove('open');
    jumpToQuestion(num - 1);
  } else {
    alert(`Vui lòng nhập số từ 1 đến ${activePool.length}`);
    modalNumberInput.focus();
  }
}

modalGoBtn.addEventListener('click', handleModalNumberJump);
modalNumberInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleModalNumberJump();
});

// Settings Modal Handlers
function openSettings() {
  // Update radio states
  if (mcMode === 'disabled') radioModeDisabled.checked = true;
  else if (mcMode === 'both') radioModeBoth.checked = true;
  else radioModeAfterHiga.checked = true;

  updateOptionCardStyles();

  settingsRomajiCheckbox.checked = romajiAutoConvert;
  settingsSoundCheckbox.checked = soundEnabled;

  settingsModal.classList.add('open');
}

function updateOptionCardStyles() {
  document.querySelectorAll('.setting-option-card').forEach(card => {
    const radio = card.querySelector('input[type="radio"]');
    card.classList.toggle('active', radio && radio.checked);
  });
}

document.querySelectorAll('input[name="mcModeRadio"]').forEach(r => {
  r.addEventListener('change', updateOptionCardStyles);
});

function applySettings() {
  const selectedRadio = document.querySelector('input[name="mcModeRadio"]:checked');
  if (selectedRadio) {
    mcMode = selectedRadio.value;
    localStorage.setItem('kanjiflash_mc_mode', mcMode);
  }

  romajiAutoConvert = settingsRomajiCheckbox.checked;
  romajiCheckbox.checked = romajiAutoConvert;
  localStorage.setItem('kanjiflash_romaji', romajiAutoConvert);

  soundEnabled = settingsSoundCheckbox.checked;
  localStorage.setItem('kanjiflash_sound', soundEnabled);
  soundToggleBtn.textContent = soundEnabled ? '🔊' : '🔇';

  settingsModal.classList.remove('open');

  // Re-apply to current question
  loadQuestion(currentPoolIndex);
}

settingsBtn.addEventListener('click', openSettings);
closeSettingsModal.addEventListener('click', () => {
  settingsModal.classList.remove('open');
  if (!hiraganaInput.readOnly) hiraganaInput.focus();
});
saveSettingsBtn.addEventListener('click', applySettings);

settingsModal.addEventListener('click', (e) => {
  if (e.target === settingsModal) {
    settingsModal.classList.remove('open');
    if (!hiraganaInput.readOnly) hiraganaInput.focus();
  }
});

// Hint Button
hintBtn.addEventListener('click', () => {
  if (!currentItem) return;
  const primary = currentItem.displayReading;
  if (!hintText.textContent) {
    hintText.textContent = `💡 Cách đọc bắt đầu bằng:「${primary.charAt(0)}...」`;
  } else {
    hintText.textContent = `💡 Cách đọc đầy đủ:「${currentItem.readings.join(' / ')}」`;
  }
  if (!hiraganaInput.readOnly) hiraganaInput.focus();
});

// Skip Button
skipBtn.addEventListener('click', () => {
  if (!currentItem || isTransitioning) return;
  hadErrorOnCurrent = true;
  itemStatuses.set(currentItem.id, 'wrong');
  streak = 0;
  updateNavigator();

  hintText.textContent = `📖 Đáp án: ${currentItem.displayReading} — ${currentItem.meaning}`;
  document.querySelectorAll('.choice-btn').forEach(b => {
    if (b.dataset.meaning === currentItem.meaning) {
      b.classList.add('correct');
    }
  });
  hiraganaInput.value = currentItem.displayReading;
  hiraganaInput.classList.add('correct');
  hiraganaInput.readOnly = true;
  hiraganaInput.blur();

  if (mcMode === 'after_higa') {
    choicesSection.style.display = 'flex';
  }

  isTransitioning = true;
  if (transitionTimer) clearTimeout(transitionTimer);
  transitionTimer = setTimeout(() => {
    currentPoolIndex++;
    loadQuestion(currentPoolIndex);
  }, 1200);
});

// Live typing with Romaji conversion
hiraganaInput.addEventListener('input', () => {
  if (romajiAutoConvert && !hiraganaInput.readOnly) {
    const start = hiraganaInput.selectionStart;
    const oldVal = hiraganaInput.value;
    const converted = convertRomajiToHiragana(oldVal);
    if (converted !== oldVal) {
      hiraganaInput.value = converted;
      const diff = converted.length - oldVal.length;
      hiraganaInput.setSelectionRange(start + diff, start + diff);
    }
  }
  checkReadingInput();
});

// TTS and Kanji Click
ttsBtn.addEventListener('click', () => {
  if (currentItem) speakJapanese(currentItem.kanji);
});
kanjiDisplay.addEventListener('click', () => {
  if (currentItem) speakJapanese(currentItem.kanji);
});

// Sound Toggle
soundToggleBtn.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  localStorage.setItem('kanjiflash_sound', soundEnabled);
  soundToggleBtn.textContent = soundEnabled ? '🔊' : '🔇';
  soundToggleBtn.title = soundEnabled ? 'Bật âm thanh' : 'Tắt âm thanh';
});

// Shuffle Toggle
shuffleToggleBtn.addEventListener('click', () => {
  isShuffled = !isShuffled;
  shuffleToggleBtn.classList.toggle('active', isShuffled);
  shuffleToggleBtn.title = isShuffled ? 'Đang xáo trộn ngẫu nhiên' : 'Thứ tự mặc định';

  if (isShuffled) {
    for (let i = activePool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [activePool[i], activePool[j]] = [activePool[j], activePool[i]];
    }
  } else {
    activePool = [...KANJI_DATA];
  }
  initNumbersGrid();
  currentPoolIndex = 0;
  loadQuestion(currentPoolIndex);
});

// Romaji Toggle
romajiCheckbox.addEventListener('change', () => {
  romajiAutoConvert = romajiCheckbox.checked;
  localStorage.setItem('kanjiflash_romaji', romajiAutoConvert);
  if (!hiraganaInput.readOnly) hiraganaInput.focus();
});

// Theme Toggle
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  themeToggleBtn.textContent = newTheme === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('kanjiflash_theme', newTheme);
});

// Load saved theme
const savedTheme = localStorage.getItem('kanjiflash_theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggleBtn.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
romajiCheckbox.checked = romajiAutoConvert;
soundToggleBtn.textContent = soundEnabled ? '🔊' : '🔇';

// Initialize App
initNumbersGrid();
loadQuestion(0);
