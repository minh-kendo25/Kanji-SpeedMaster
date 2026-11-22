// Kanji Kachi - Web Edition Engine
// Authentic Modern Sumi & Paper Theme (#1E232A, #E84A36, #4A7C59, #FDFBF7)

(function () {
  'use strict';

  // ================= 1. LOCAL STORAGE & STATE =================
  const STORAGE_KEY = 'kanji_kachi_state_clean_v1';

  const defaultState = {
    streak: 1,
    lastPracticeDate: null,
    totalPracticed: 0,
    correctCount: 0,
    rememberedIds: [],
    forgottenIds: [],
    preferences: {
      mcMode: 'after_higa', // 'after_higa' | 'disabled' | 'both'
      soundEnabled: true,
      romajiAutoConvert: true
    }
  };

  let state = loadState();

  function loadState() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        return Object.assign({}, defaultState, JSON.parse(data));
      }
    } catch (e) {
      console.warn('Could not load localStorage:', e);
    }
    return Object.assign({}, defaultState);
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
  }

  function updateDailyStreak() {
    const today = new Date().toISOString().slice(0, 10);
    if (!state.lastPracticeDate) {
      state.streak = 1;
      state.lastPracticeDate = today;
    } else if (state.lastPracticeDate !== today) {
      const last = new Date(state.lastPracticeDate);
      const now = new Date(today);
      const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        state.streak += 1;
      } else if (diffDays > 1) {
        state.streak = 1;
      }
      state.lastPracticeDate = today;
    }
    saveState();
  }

  // ================= 2. DOM REFERENCES =================
  const views = {
    home: document.getElementById('view-home'),
    vocab: document.getElementById('view-vocab'),
    practice: document.getElementById('view-practice'),
    profile: document.getElementById('view-profile')
  };

  const desktopNavBtns = {
    home: document.getElementById('nav-btn-home'),
    practice: document.getElementById('nav-btn-practice'),
    vocab: document.getElementById('nav-btn-vocab'),
    profile: document.getElementById('nav-btn-profile')
  };

  const mobileNavBtns = {
    home: document.getElementById('m-nav-home'),
    practice: document.getElementById('m-nav-practice'),
    vocab: document.getElementById('m-nav-vocab'),
    profile: document.getElementById('m-nav-profile')
  };

  // ================= 3. TTS VOICE & SOUND =================
  let jaVoice = null;

  function initVoices() {
    if ('speechSynthesis' in window) {
      const updateVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        jaVoice = voices.find(v => v.lang.startsWith('ja') || v.lang.includes('JP')) || null;
      };
      updateVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = updateVoices;
      }
    }
  }

  function speakJapanese(text) {
    if (!state.preferences.soundEnabled) return;
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.95;
      if (jaVoice) utterance.voice = jaVoice;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('TTS error:', e);
    }
  }

  function playAudioChime(isCorrect) {
    if (!state.preferences.soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      const now = ctx.currentTime;
      if (isCorrect) {
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.08);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        osc.start(now);
        osc.stop(now + 0.3);
      } else {
        osc.frequency.setValueAtTime(220, now);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.26);
      }
    } catch (e) {
      // AudioContext blocked before gesture, safe ignore
    }
  }

  // ================= 4. TAB NAVIGATION =================
  function switchTab(tabName) {
    Object.keys(views).forEach(name => {
      if (views[name]) {
        if (name === tabName) {
          views[name].classList.remove('hidden');
        } else {
          views[name].classList.add('hidden');
        }
      }
    });

    // Update Desktop Nav Tabs
    Object.keys(desktopNavBtns).forEach(name => {
      const btn = desktopNavBtns[name];
      if (!btn) return;
      if (name === tabName) {
        btn.classList.add('nav-tab-active');
        btn.classList.remove('text-ink-muted');
      } else {
        btn.classList.remove('nav-tab-active');
        btn.classList.add('text-ink-muted');
      }
    });

    // Update Mobile Nav Sub-bar
    Object.keys(mobileNavBtns).forEach(name => {
      const btn = mobileNavBtns[name];
      if (!btn) return;
      if (name === tabName) {
        btn.className = "flex-1 py-1 text-center text-xs font-bold text-primary border-b-2 border-secondary";
      } else {
        btn.className = "flex-1 py-1 text-center text-xs font-semibold text-ink-muted hover:text-primary";
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (tabName === 'home') renderHomeScreen();
    if (tabName === 'vocab') renderVocabScreen();
    if (tabName === 'profile') renderProfileScreen();
  }

  // ================= 5. HOME SCREEN LOGIC =================
  function renderHomeScreen() {
    updateDailyStreak();

    // Stats
    const streakEl = document.getElementById('home-streak-count');
    if (streakEl) streakEl.textContent = state.streak;

    const headStreak = document.getElementById('header-streak-num');
    if (headStreak) headStreak.textContent = state.streak;

    const practicedEl = document.getElementById('stat-total-practiced');
    if (practicedEl) practicedEl.textContent = state.totalPracticed;

    const accEl = document.getElementById('stat-accuracy');
    if (accEl) {
      const acc = state.totalPracticed > 0 
        ? Math.round((state.correctCount / state.totalPracticed) * 100)
        : 100;
      accEl.textContent = `${acc}%`;
    }

    const unremEl = document.getElementById('stat-unremembered');
    if (unremEl) unremEl.textContent = state.forgottenIds.length;

    // Forgotten Card
    const forgottenCard = document.getElementById('home-card-review-forgotten');
    const forgottenLabel = document.getElementById('home-unremembered-label');
    if (forgottenCard && forgottenLabel) {
      if (state.forgottenIds.length > 0) {
        forgottenCard.classList.remove('hidden');
        forgottenLabel.textContent = state.forgottenIds.length;
      } else {
        forgottenCard.classList.add('hidden');
      }
    }

    // Grid of Topics
    const grid = document.getElementById('home-topics-grid');
    if (grid) {
      const sampleTopics = TOPICS.slice(0, 9);
      grid.innerHTML = sampleTopics.map(t => {
        const isN5 = t.level === 'N5';
        const badgeColor = isN5 ? 'text-primary bg-surface-alt' : 'text-secondary bg-vermilion-soft';
        return `
          <div class="bg-surface-card p-4 sm:p-5 rounded-2xl border border-border-subtle hover:border-primary transition-all cursor-pointer shadow-sm flex flex-col justify-between group" onclick="app.startTopicPractice('${t.id}')">
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-bold ${badgeColor}">${t.level}</span>
                <span class="text-[11px] text-ink-muted font-medium">${t.count} chữ</span>
              </div>
              <h3 class="font-serif font-bold text-sm sm:text-base text-primary group-hover:text-secondary transition-colors truncate">
                ${t.title}
              </h3>
              <p class="text-[11px] text-ink-muted leading-relaxed">Bộ từ vựng Hán tự trọng tâm trong giáo trình Marugoto & Minna.</p>
            </div>

            <div class="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between">
              <span class="text-xs font-bold text-primary group-hover:text-secondary flex items-center gap-1 transition-colors">
                <span>Rèn luyện</span>
                <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
              <button class="w-7 h-7 rounded-full hover:bg-surface-alt text-ink-dim hover:text-primary flex items-center justify-center transition-colors" onclick="event.stopPropagation(); app.startTopicFlashcards('${t.id}')" title="Thẻ Flashcard 3D">
                <span class="material-symbols-outlined text-[16px]">style</span>
              </button>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // ================= 6. VOCABULARY & FLASHCARDS LOGIC =================
  let currentVocabLevel = 'N5';
  let currentVocabSubView = 'list';
  let flashcardDeck = [];
  let flashcardIndex = 0;
  let flashcardFlipped = false;

  function renderVocabScreen() {
    filterVocabLevel(currentVocabLevel);
  }

  function setVocabSubView(mode) {
    currentVocabSubView = mode;
    const listBtn = document.getElementById('vocab-tab-list');
    const fcBtn = document.getElementById('vocab-tab-flashcard');
    const listSub = document.getElementById('vocab-subview-list');
    const fcSub = document.getElementById('vocab-subview-flashcard');

    if (mode === 'list') {
      listBtn.className = "px-4 py-1.5 text-xs font-semibold rounded-lg bg-surface-card text-primary shadow-sm transition-all flex items-center gap-1.5";
      fcBtn.className = "px-4 py-1.5 text-xs font-semibold rounded-lg text-ink-muted hover:text-primary transition-all flex items-center gap-1.5";
      listSub.classList.remove('hidden');
      fcSub.classList.add('hidden');
    } else {
      fcBtn.className = "px-4 py-1.5 text-xs font-semibold rounded-lg bg-surface-card text-primary shadow-sm transition-all flex items-center gap-1.5";
      listBtn.className = "px-4 py-1.5 text-xs font-semibold rounded-lg text-ink-muted hover:text-primary transition-all flex items-center gap-1.5";
      fcSub.classList.remove('hidden');
      listSub.classList.add('hidden');
      setupFlashcardsForLevel(currentVocabLevel);
    }
  }

  function filterVocabLevel(level) {
    currentVocabLevel = level;
    ['N5', 'N4', 'RADICALS'].forEach(lvl => {
      const btn = document.getElementById('lvl-filter-' + lvl.toLowerCase());
      if (!btn) return;
      if (lvl === level) {
        btn.className = "px-4 py-2 rounded-xl bg-primary text-washi text-xs font-bold flex items-center gap-2 transition-all shadow-sm";
      } else {
        btn.className = "px-4 py-2 rounded-xl bg-surface-card border border-border-subtle text-ink-muted hover:text-primary text-xs font-semibold transition-all";
      }
    });

    if (currentVocabSubView === 'list') {
      renderVocabTopicsList(level);
    } else {
      setupFlashcardsForLevel(level);
    }
  }

  function renderVocabTopicsList(level, searchQuery = '') {
    const container = document.getElementById('vocab-topics-container');
    if (!container) return;

    let topics = TOPICS.filter(t => t.level === level);
    let items = level === 'RADICALS' ? RADICALS_DATA : KANJI_DATA.filter(k => k.level === level);

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      const filtered = items.filter(it => 
        it.kanji.toLowerCase().includes(q) ||
        it.meaning.toLowerCase().includes(q) ||
        (it.readings && it.readings.some(r => r.toLowerCase().includes(q))) ||
        (it.displayReading && it.displayReading.toLowerCase().includes(q))
      );

      container.innerHTML = `
        <div class="space-y-2">
          <span class="text-xs font-bold text-ink-muted block">Tìm thấy ${filtered.length} từ vựng:</span>
          <div class="bg-surface-card rounded-2xl p-2 border border-border-subtle divide-y divide-border-subtle shadow-sm">
            ${filtered.length > 0 ? filtered.map(renderVocabRow).join('') : '<p class="p-6 text-xs text-center text-ink-dim">Không tìm thấy từ vựng nào khớp với từ khóa tìm kiếm.</p>'}
          </div>
        </div>
      `;
      return;
    }

    container.innerHTML = topics.map(topic => {
      const topicItems = items.filter(it => it.topicId === topic.id);
      return `
        <div class="bg-surface-card rounded-2xl border border-border-subtle overflow-hidden shadow-sm">
          <div class="p-4 flex items-center justify-between cursor-pointer hover:bg-surface-alt transition-colors select-none" onclick="app.toggleTopicAccordion('${topic.id}')">
            <div class="flex items-center gap-3">
              <span class="w-2 h-2 rounded-full ${topic.level === 'N5' ? 'bg-primary' : (topic.level === 'N4' ? 'bg-secondary' : 'bg-tertiary')}"></span>
              <div>
                <span class="text-xs sm:text-sm font-bold text-primary block">${topic.title}</span>
                <span class="text-[11px] text-ink-muted">${topicItems.length} Hán tự</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button class="px-3 py-1 rounded-lg bg-surface-alt hover:bg-primary hover:text-washi text-xs font-bold text-primary transition-colors" onclick="event.stopPropagation(); app.startTopicPractice('${topic.id}')">
                Luyện tập
              </button>
              <button class="w-7 h-7 rounded-full hover:bg-surface-alt text-ink-dim hover:text-primary flex items-center justify-center transition-colors" onclick="event.stopPropagation(); app.startTopicFlashcards('${topic.id}')" title="Thẻ Flashcard 3D">
                <span class="material-symbols-outlined text-[18px]">style</span>
              </button>
              <span id="acc-icon-${topic.id}" class="material-symbols-outlined text-ink-dim text-[20px] transition-transform">expand_more</span>
            </div>
          </div>
          <div id="acc-content-${topic.id}" class="hidden divide-y divide-border-subtle border-t border-border-subtle bg-washi/40">
            ${topicItems.map(renderVocabRow).join('')}
          </div>
        </div>
      `;
    }).join('');
  }

  function renderVocabRow(item) {
    const isForgotten = state.forgottenIds.includes(item.id);
    return `
      <div class="p-3.5 flex items-center justify-between hover:bg-surface-alt transition-colors">
        <div class="flex items-center gap-4">
          <span class="kanji-glyph text-3xl font-normal text-primary w-12 text-center select-none">${item.kanji}</span>
          <div class="flex flex-col">
            <span class="text-xs font-bold text-secondary font-sans">${item.displayReading}</span>
            <span class="text-xs sm:text-sm text-primary font-medium">${item.meaning}</span>
            ${item.examples ? `<span class="text-[11px] text-ink-muted italic mt-0.5">${item.examples}</span>` : ''}
          </div>
        </div>
        <div class="flex items-center gap-1">
          <button class="w-8 h-8 rounded-full flex items-center justify-center text-ink-dim hover:text-primary hover:bg-surface-alt transition-colors" onclick="app.speakWordText('${item.kanji}')" title="Nghe phát âm">
            <span class="material-symbols-outlined text-[18px]">volume_up</span>
          </button>
          <button class="w-8 h-8 rounded-full flex items-center justify-center ${isForgotten ? 'text-secondary' : 'text-ink-dim'} hover:text-secondary hover:bg-surface-alt transition-colors" onclick="app.toggleBookmarkId(${item.id})" title="Đánh dấu sổ tay">
            <span class="material-symbols-outlined text-[18px]">${isForgotten ? 'bookmark' : 'bookmark_border'}</span>
          </button>
        </div>
      </div>
    `;
  }

  function toggleTopicAccordion(topicId) {
    const content = document.getElementById(`acc-content-${topicId}`);
    const icon = document.getElementById(`acc-icon-${topicId}`);
    if (!content) return;
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      if (icon) icon.style.transform = 'rotate(180deg)';
    } else {
      content.classList.add('hidden');
      if (icon) icon.style.transform = 'rotate(0deg)';
    }
  }

  function onVocabSearch(query) {
    const clearBtn = document.getElementById('vocab-search-clear');
    if (clearBtn) {
      if (query) clearBtn.classList.remove('hidden');
      else clearBtn.classList.add('hidden');
    }
    renderVocabTopicsList(currentVocabLevel, query);
  }

  function clearVocabSearch() {
    const input = document.getElementById('vocab-search-input');
    if (input) input.value = '';
    onVocabSearch('');
  }

  // Flashcards Setup
  function setupFlashcardsForLevel(level) {
    const select = document.getElementById('flashcard-topic-select');
    if (!select) return;

    const topics = TOPICS.filter(t => t.level === level);
    select.innerHTML = topics.map(t => `<option value="${t.id}">${t.title} (${t.count} chữ)</option>`).join('');

    if (topics.length > 0) {
      onFlashcardTopicChange(topics[0].id);
    }
  }

  function onFlashcardTopicChange(topicId) {
    const isRadical = topicId.startsWith('rad_');
    const source = isRadical ? RADICALS_DATA : KANJI_DATA;
    flashcardDeck = source.filter(it => it.topicId === topicId);
    flashcardIndex = 0;
    flashcardFlipped = false;
    renderFlashcardCard();
  }

  function renderFlashcardCard() {
    const inner = document.getElementById('flashcard-inner');
    if (inner && flashcardFlipped) {
      inner.classList.remove('rotate-y-180');
      flashcardFlipped = false;
    }

    if (flashcardDeck.length === 0) return;
    const item = flashcardDeck[flashcardIndex];

    const kanjiEl = document.getElementById('fc-kanji');
    const levelBadge = document.getElementById('fc-level-badge');
    const counterEl = document.getElementById('fc-counter');
    const topicHint = document.getElementById('fc-topic-hint');

    const backKanji = document.getElementById('fc-back-kanji');
    const backReading = document.getElementById('fc-back-reading');
    const backMeaning = document.getElementById('fc-back-meaning');
    const backExamples = document.getElementById('fc-back-examples');

    if (kanjiEl) kanjiEl.textContent = item.kanji;
    if (levelBadge) levelBadge.textContent = item.level;
    if (counterEl) counterEl.textContent = `${flashcardIndex + 1} / ${flashcardDeck.length}`;
    if (topicHint) {
      const topic = TOPICS.find(t => t.id === item.topicId);
      topicHint.textContent = topic ? topic.title : '';
    }

    if (backKanji) backKanji.textContent = item.kanji;
    if (backReading) backReading.textContent = item.displayReading;
    if (backMeaning) backMeaning.textContent = item.meaning;
    if (backExamples) backExamples.textContent = item.examples ? `Ví dụ: ${item.examples}` : '';
  }

  function flipFlashcard() {
    const inner = document.getElementById('flashcard-inner');
    if (!inner) return;
    flashcardFlipped = !flashcardFlipped;
    if (flashcardFlipped) {
      inner.classList.add('rotate-y-180');
      if (flashcardDeck[flashcardIndex]) {
        speakJapanese(flashcardDeck[flashcardIndex].kanji);
      }
    } else {
      inner.classList.remove('rotate-y-180');
    }
  }

  function nextFlashcard() {
    if (flashcardDeck.length === 0) return;
    flashcardIndex = (flashcardIndex + 1) % flashcardDeck.length;
    renderFlashcardCard();
  }

  function prevFlashcard() {
    if (flashcardDeck.length === 0) return;
    flashcardIndex = (flashcardIndex - 1 + flashcardDeck.length) % flashcardDeck.length;
    renderFlashcardCard();
  }

  function markFlashcardForgotten() {
    if (flashcardDeck.length === 0) return;
    const item = flashcardDeck[flashcardIndex];
    toggleBookmarkId(item.id);
    nextFlashcard();
  }

  function speakFlashcardWord() {
    if (flashcardDeck[flashcardIndex]) {
      speakJapanese(flashcardDeck[flashcardIndex].kanji);
    }
  }

  // ================= 7. PRACTICE SETUP & ARENA LOGIC =================
  let practiceConfig = {
    level: 'N5',
    method: 'higa_and_meaning',
    onlyUnremembered: false,
    selectedTopicIds: new Set()
  };

  let practiceDeck = [];
  let currentIndex = 0;
  let questionStatus = {};
  let hadErrorOnCurrent = false;
  let revealedHint = false;
  let isInputLocked = false;
  let currentStreak = 0;
  let maxStreak = 0;
  let currentRoundCorrect = 0;
  let currentRoundWrongIds = new Set();
  let currentChoices = [];

  function setPracticeLevel(level) {
    practiceConfig.level = level;
    ['N5', 'N4', 'RADICALS'].forEach(lvl => {
      const btn = document.getElementById('p-lvl-' + lvl.toLowerCase());
      if (!btn) return;
      if (lvl === level) {
        btn.className = "flex-1 py-3 rounded-xl bg-primary text-washi text-xs font-bold transition-all shadow-sm";
      } else {
        btn.className = "flex-1 py-3 rounded-xl bg-surface-card border border-border-subtle text-ink-muted hover:text-primary text-xs font-bold transition-all shadow-sm";
      }
    });

    practiceConfig.selectedTopicIds.clear();
    const topics = TOPICS.filter(t => t.level === level);
    topics.forEach(t => practiceConfig.selectedTopicIds.add(t.id));
    renderPracticeTopicList();
  }

  function renderPracticeTopicList() {
    const list = document.getElementById('practice-topics-list');
    if (!list) return;

    const topics = TOPICS.filter(t => t.level === practiceConfig.level);
    const selectedCount = document.getElementById('practice-selected-count');
    if (selectedCount) selectedCount.textContent = practiceConfig.selectedTopicIds.size;

    list.innerHTML = topics.map(t => {
      const isChecked = practiceConfig.selectedTopicIds.has(t.id);
      return `
        <label class="flex items-center justify-between p-3.5 rounded-xl border ${isChecked ? 'border-primary bg-surface-alt' : 'border-border-subtle bg-surface-card'} cursor-pointer transition-all shadow-sm" onclick="app.togglePracticeTopic('${t.id}')">
          <div class="flex items-center gap-3">
            <input type="checkbox" ${isChecked ? 'checked' : ''} class="accent-primary cursor-pointer" onclick="event.stopPropagation(); app.togglePracticeTopic('${t.id}')">
            <span class="text-xs font-bold text-primary truncate max-w-[200px]">${t.title}</span>
          </div>
          <span class="text-[11px] text-ink-muted">${t.count} chữ</span>
        </label>
      `;
    }).join('');
  }

  function togglePracticeTopic(topicId) {
    if (practiceConfig.selectedTopicIds.has(topicId)) {
      practiceConfig.selectedTopicIds.delete(topicId);
    } else {
      practiceConfig.selectedTopicIds.add(topicId);
    }
    renderPracticeTopicList();
  }

  function toggleAllPracticeTopics() {
    const topics = TOPICS.filter(t => t.level === practiceConfig.level);
    if (practiceConfig.selectedTopicIds.size === topics.length) {
      practiceConfig.selectedTopicIds.clear();
    } else {
      topics.forEach(t => practiceConfig.selectedTopicIds.add(t.id));
    }
    renderPracticeTopicList();
  }

  function setPracticeMethod(method) {
    practiceConfig.method = method;
  }

  function toggleOnlyUnremembered() {
    practiceConfig.onlyUnremembered = !practiceConfig.onlyUnremembered;
    const thumb = document.getElementById('thumb-only-unremembered');
    const btn = document.getElementById('btn-toggle-only-unremembered');
    if (thumb && btn) {
      if (practiceConfig.onlyUnremembered) {
        btn.classList.remove('bg-border-strong');
        btn.classList.add('bg-secondary');
        thumb.classList.add('translate-x-6');
      } else {
        btn.classList.remove('bg-secondary');
        btn.classList.add('bg-border-strong');
        thumb.classList.remove('translate-x-6');
      }
    }
  }

  function startPracticeSession(customDeck = null) {
    if (customDeck) {
      practiceDeck = customDeck;
    } else {
      const isRadical = practiceConfig.level === 'RADICALS';
      const source = isRadical ? RADICALS_DATA : KANJI_DATA;
      
      let candidateItems = source.filter(it => practiceConfig.selectedTopicIds.has(it.topicId));
      if (candidateItems.length === 0) {
        candidateItems = source.filter(it => it.level === practiceConfig.level);
      }

      if (practiceConfig.onlyUnremembered) {
        candidateItems = candidateItems.filter(it => state.forgottenIds.includes(it.id));
        if (candidateItems.length === 0) {
          alert('Sổ tay chưa có từ nào! Đang bắt đầu với tất cả các từ trong chủ đề.');
          candidateItems = source.filter(it => practiceConfig.selectedTopicIds.has(it.topicId));
        }
      }

      practiceDeck = [...candidateItems].sort(() => Math.random() - 0.5);
    }

    if (practiceDeck.length === 0) {
      alert('Vui lòng chọn ít nhất một chủ đề để bắt đầu rèn luyện.');
      return;
    }

    currentIndex = 0;
    questionStatus = {};
    hadErrorOnCurrent = false;
    revealedHint = false;
    isInputLocked = false;
    currentStreak = 0;
    maxStreak = 0;
    currentRoundCorrect = 0;
    currentRoundWrongIds.clear();

    document.getElementById('practice-setup-screen').classList.add('hidden');
    document.getElementById('practice-summary-screen').classList.add('hidden');
    document.getElementById('practice-arena-screen').classList.remove('hidden');

    loadArenaWord(currentIndex);
  }

  function loadArenaWord(index) {
    if (index < 0 || index >= practiceDeck.length) return;
    currentIndex = index;
    const word = practiceDeck[index];

    hadErrorOnCurrent = false;
    revealedHint = false;
    isInputLocked = false;

    // Header counter and title
    const counterEl = document.getElementById('arena-counter');
    if (counterEl) counterEl.textContent = `Câu ${index + 1} / ${practiceDeck.length}`;

    const topicEl = document.getElementById('arena-topic-title');
    if (topicEl) {
      const topic = TOPICS.find(t => t.id === word.topicId);
      topicEl.textContent = topic ? topic.title : 'Luyện phản xạ Hán tự';
    }

    const pBar = document.getElementById('arena-progress-bar');
    if (pBar) {
      const p = Math.round(((index + 1) / practiceDeck.length) * 100);
      pBar.style.width = p + '%';
    }

    // Level chip
    const lvlChip = document.getElementById('arena-level-chip');
    if (lvlChip) lvlChip.textContent = word.level || 'N5';

    // Bookmark icon
    updateArenaBookmarkIcon(word.id);

    // Main Kanji
    const kanjiEl = document.getElementById('arena-kanji');
    if (kanjiEl) kanjiEl.textContent = word.kanji;

    // Hint box
    const hintBox = document.getElementById('arena-hint-box');
    if (hintBox) hintBox.textContent = '';

    // Reading display pill
    const readingPill = document.getElementById('arena-reading-display');
    if (readingPill) readingPill.textContent = 'Bấm để nghe phát âm';

    // Input box reset
    const inputSection = document.getElementById('arena-input-section');
    const inputEl = document.getElementById('arena-hiragana-input');
    const inputStatus = document.getElementById('arena-input-status-icon');
    const inputMsg = document.getElementById('arena-input-message');

    if (practiceConfig.method === 'mc_only') {
      inputSection.classList.add('hidden');
    } else {
      inputSection.classList.remove('hidden');
      if (inputEl) {
        inputEl.value = '';
        inputEl.disabled = false;
        inputEl.classList.remove('border-tertiary', 'bg-matcha-soft', 'border-secondary', 'bg-vermilion-soft');
        inputEl.classList.add('border-border-subtle', 'bg-surface-card');
        inputEl.focus();
      }
      if (inputStatus) inputStatus.innerHTML = '<span class="material-symbols-outlined text-[24px]">keyboard</span>';
      if (inputMsg) inputMsg.innerHTML = 'Hệ thống tự động chuyển đổi: <code class="bg-surface-alt px-1.5 py-0.5 rounded text-[11px] text-primary">sakana</code> ➔ <code class="bg-surface-alt px-1.5 py-0.5 rounded text-[11px] text-tertiary font-bold">さかな</code>';
    }

    // Generate choices
    generateMultipleChoices(word);

    // MC section visibility
    const choicesSection = document.getElementById('arena-choices-section');
    if (choicesSection) {
      if (practiceConfig.method === 'higa_only' || state.preferences.mcMode === 'disabled') {
        choicesSection.classList.add('hidden');
      } else if (state.preferences.mcMode === 'after_higa' && practiceConfig.method !== 'mc_only') {
        choicesSection.classList.add('hidden');
      } else {
        choicesSection.classList.remove('hidden');
      }
    }

    // Auto TTS if enabled
    if (state.preferences.soundEnabled) {
      speakJapanese(word.kanji);
    }
  }

  function generateMultipleChoices(currentWord) {
    const isRadical = currentWord.isRadical;
    const pool = isRadical ? RADICALS_DATA : KANJI_DATA;
    
    const distractors = pool
      .filter(it => it.id !== currentWord.id && it.meaning !== currentWord.meaning)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(it => it.meaning);

    currentChoices = [...distractors, currentWord.meaning].sort(() => Math.random() - 0.5);

    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`choice-btn-${i}`);
      if (!btn) continue;
      const textSpan = btn.querySelector('.choice-text');
      if (textSpan) textSpan.textContent = currentChoices[i] || '';
      btn.className = "flex items-center justify-between p-4 rounded-xl bg-surface-card border border-border-subtle hover:border-primary transition-all text-left shadow-sm group cursor-pointer";
      btn.disabled = false;
    }
  }

  function onArenaInput(val) {
    if (isInputLocked) return;
    const inputEl = document.getElementById('arena-hiragana-input');
    if (!inputEl) return;

    let converted = val;
    if (state.preferences.romajiAutoConvert && typeof RomajiConverter !== 'undefined') {
      converted = RomajiConverter.convert(val);
      if (converted !== val) {
        inputEl.value = converted;
      }
    }

    const currentWord = practiceDeck[currentIndex];
    if (!currentWord) return;

    const normInput = RomajiConverter.normalize(converted);
    const validReadings = (currentWord.readings || [currentWord.displayReading]).map(r => RomajiConverter.normalize(r));
    
    if (validReadings.includes(normInput)) {
      // Correct reading!
      isInputLocked = true;
      inputEl.disabled = true;
      inputEl.classList.remove('border-border-subtle', 'bg-surface-card');
      inputEl.classList.add('border-tertiary', 'bg-matcha-soft');
      
      const inputStatus = document.getElementById('arena-input-status-icon');
      if (inputStatus) {
        inputStatus.innerHTML = '<span class="material-symbols-outlined text-tertiary text-[24px]">check_circle</span>';
      }

      const inputMsg = document.getElementById('arena-input-message');
      if (inputMsg) {
        inputMsg.innerHTML = `<span class="text-tertiary font-bold">Chính xác! (${currentWord.displayReading})</span>`;
      }

      playAudioChime(true);

      if (state.preferences.mcMode === 'disabled' || practiceConfig.method === 'higa_only') {
        markQuestionResult(true);
        setTimeout(() => advanceNextWord(), 350);
      } else {
        const choicesSection = document.getElementById('arena-choices-section');
        if (choicesSection) {
          choicesSection.classList.remove('hidden');
        }
      }
    }
  }

  function onArenaInputKeyDown(e) {
    if (e.key === 'Enter') {
      if (isInputLocked) {
        advanceNextWord();
      }
    }
  }

  function onSelectChoice(index) {
    const currentWord = practiceDeck[currentIndex];
    if (!currentWord) return;

    const chosenMeaning = currentChoices[index];
    const btn = document.getElementById(`choice-btn-${index}`);
    if (!btn) return;

    if (chosenMeaning === currentWord.meaning) {
      btn.classList.remove('bg-surface-card', 'border-border-subtle');
      btn.classList.add('bg-matcha-soft', 'border-tertiary');
      playAudioChime(true);
      markQuestionResult(true);
      setTimeout(() => advanceNextWord(), 380);
    } else {
      btn.classList.remove('bg-surface-card', 'border-border-subtle');
      btn.classList.add('bg-vermilion-soft', 'border-secondary', 'animate-shake');
      playAudioChime(false);
      hadErrorOnCurrent = true;
      markQuestionResult(false);
      setTimeout(() => {
        btn.classList.remove('animate-shake');
      }, 400);
    }
  }

  function markQuestionResult(isCorrect) {
    const word = practiceDeck[currentIndex];
    if (!word) return;

    state.totalPracticed += 1;

    if (isCorrect && !hadErrorOnCurrent) {
      questionStatus[currentIndex] = 'correct';
      currentStreak += 1;
      currentRoundCorrect += 1;
      if (currentStreak > maxStreak) maxStreak = currentStreak;

      if (!state.rememberedIds.includes(word.id)) {
        state.rememberedIds.push(word.id);
      }
      state.forgottenIds = state.forgottenIds.filter(id => id !== word.id);
      state.correctCount += 1;
    } else {
      questionStatus[currentIndex] = 'wrong';
      currentStreak = 0;
      currentRoundWrongIds.add(word.id);

      if (!state.forgottenIds.includes(word.id)) {
        state.forgottenIds.push(word.id);
      }
    }

    const streakBadge = document.getElementById('arena-streak-badge');
    const streakNum = document.getElementById('arena-streak-num');
    if (streakBadge && streakNum) {
      if (currentStreak >= 2) {
        streakBadge.classList.remove('hidden');
        streakNum.textContent = currentStreak;
      } else {
        streakBadge.classList.add('hidden');
      }
    }

    saveState();
  }

  function advanceNextWord() {
    if (currentIndex + 1 < practiceDeck.length) {
      loadArenaWord(currentIndex + 1);
    } else {
      finishPracticeSession();
    }
  }

  function prevWord() {
    if (currentIndex > 0) {
      loadArenaWord(currentIndex - 1);
    }
  }

  function skipWord() {
    hadErrorOnCurrent = true;
    markQuestionResult(false);
    advanceNextWord();
  }

  function finishPracticeEarly() {
    if (confirm('Bạn có chắc muốn kết thúc bài thi và xem kết quả tổng kết?')) {
      finishPracticeSession();
    }
  }

  function finishPracticeSession() {
    document.getElementById('practice-arena-screen').classList.add('hidden');
    document.getElementById('practice-summary-screen').classList.remove('hidden');

    const totalEl = document.getElementById('summary-total');
    const correctEl = document.getElementById('summary-correct');
    const streakEl = document.getElementById('summary-max-streak');

    if (totalEl) totalEl.textContent = practiceDeck.length;
    if (correctEl) correctEl.textContent = currentRoundCorrect;
    if (streakEl) streakEl.textContent = `${maxStreak} 🔥`;

    const unrememberedSec = document.getElementById('summary-unremembered-section');
    const unrememberedList = document.getElementById('summary-unremembered-list');
    const retryBtn = document.getElementById('summary-btn-retry-unremembered');
    const retryCount = document.getElementById('summary-unremembered-count');

    if (currentRoundWrongIds.size > 0) {
      if (unrememberedSec) unrememberedSec.classList.remove('hidden');
      if (retryBtn) retryBtn.classList.remove('hidden');
      if (retryCount) retryCount.textContent = currentRoundWrongIds.size;

      const wrongWords = practiceDeck.filter(w => currentRoundWrongIds.has(w.id));
      if (unrememberedList) {
        unrememberedList.innerHTML = wrongWords.map(w => `
          <div class="bg-surface-alt p-3 rounded-xl border border-border-subtle flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="kanji-glyph text-2xl font-normal text-primary">${w.kanji}</span>
              <div>
                <span class="text-xs font-bold text-secondary block">${w.displayReading}</span>
                <span class="text-xs text-primary font-medium truncate max-w-[130px] block">${w.meaning}</span>
              </div>
            </div>
            <button class="w-8 h-8 rounded-full flex items-center justify-center text-ink-dim hover:text-primary hover:bg-surface-card" onclick="app.speakWordText('${w.kanji}')">
              <span class="material-symbols-outlined text-[18px]">volume_up</span>
            </button>
          </div>
        `).join('');
      }
    } else {
      if (unrememberedSec) unrememberedSec.classList.add('hidden');
      if (retryBtn) retryBtn.classList.add('hidden');
    }
  }

  function retryUnrememberedSummary() {
    const wrongWords = practiceDeck.filter(w => currentRoundWrongIds.has(w.id));
    if (wrongWords.length > 0) {
      startPracticeSession(wrongWords);
    }
  }

  function restartSamePractice() {
    startPracticeSession(practiceDeck);
  }

  function exitPracticeSession() {
    if (confirm('Bạn có muốn thoát về màn hình chọn chủ đề không?')) {
      document.getElementById('practice-arena-screen').classList.add('hidden');
      document.getElementById('practice-summary-screen').classList.add('hidden');
      document.getElementById('practice-setup-screen').classList.remove('hidden');
    }
  }

  function hintFirstChar() {
    const currentWord = practiceDeck[currentIndex];
    if (!currentWord) return;
    hadErrorOnCurrent = true;
    revealedHint = true;

    const hintBox = document.getElementById('arena-hint-box');
    const firstChar = currentWord.displayReading.charAt(0);
    if (hintBox) {
      hintBox.textContent = `💡 Gợi ý chữ cái đầu: "${firstChar}..." (Toàn bộ âm: ${currentWord.displayReading})`;
    }
  }

  function speakCurrentWord() {
    const currentWord = practiceDeck[currentIndex];
    if (currentWord) {
      speakJapanese(currentWord.kanji);
      const pill = document.getElementById('arena-reading-display');
      if (pill) pill.textContent = currentWord.displayReading;
    }
  }

  function speakWordText(text) {
    speakJapanese(text);
  }

  function toggleCurrentBookmark() {
    const currentWord = practiceDeck[currentIndex];
    if (currentWord) {
      toggleBookmarkId(currentWord.id);
      updateArenaBookmarkIcon(currentWord.id);
    }
  }

  function updateArenaBookmarkIcon(id) {
    const icon = document.getElementById('arena-icon-bookmark');
    if (!icon) return;
    if (state.forgottenIds.includes(id)) {
      icon.textContent = 'bookmark';
      icon.parentElement.classList.add('text-secondary');
    } else {
      icon.textContent = 'bookmark_border';
      icon.parentElement.classList.remove('text-secondary');
    }
  }

  function toggleBookmarkId(id) {
    if (state.forgottenIds.includes(id)) {
      state.forgottenIds = state.forgottenIds.filter(i => i !== id);
    } else {
      state.forgottenIds.push(id);
    }
    saveState();
    if (!views.vocab.classList.contains('hidden')) renderVocabScreen();
    if (!views.home.classList.contains('hidden')) renderHomeScreen();
    if (!views.profile.classList.contains('hidden')) renderProfileScreen();
  }

  // ================= 8. JUMP GRID MODAL (⊞ CHỌN CÂU) =================
  function openJumpGrid() {
    const modal = document.getElementById('modal-jump-grid');
    const grid = document.getElementById('jump-grid-container');
    if (!modal || !grid) return;

    grid.innerHTML = practiceDeck.map((word, i) => {
      const status = questionStatus[i] || 'unvisited';
      let colorClass = 'bg-surface-alt text-ink-muted border-border-subtle';
      if (status === 'correct') {
        colorClass = 'bg-matcha-soft text-tertiary border-tertiary font-bold';
      } else if (status === 'wrong' || state.forgottenIds.includes(word.id)) {
        colorClass = 'bg-vermilion-soft text-secondary border-secondary font-bold';
      }

      if (i === currentIndex) {
        colorClass += ' ring-2 ring-primary';
      }

      return `
        <button class="py-2.5 rounded-xl border text-xs font-semibold flex flex-col items-center justify-center transition-transform hover:scale-105 ${colorClass}" onclick="app.jumpToQuestion(${i})">
          <span>${i + 1}</span>
          <span class="kanji-glyph text-xs font-normal opacity-85">${word.kanji}</span>
        </button>
      `;
    }).join('');

    modal.classList.remove('hidden');
  }

  function closeJumpGrid() {
    const modal = document.getElementById('modal-jump-grid');
    if (modal) modal.classList.add('hidden');
  }

  function jumpToQuestion(index) {
    closeJumpGrid();
    loadArenaWord(index);
  }

  // ================= 9. SETTINGS MODAL (⚙️ CÀI ĐẶT) =================
  function openSettings() {
    const modal = document.getElementById('modal-settings');
    if (!modal) return;

    const rAfter = document.getElementById('radio-mc-after');
    const rDis = document.getElementById('radio-mc-disabled');
    const rBoth = document.getElementById('radio-mc-both');

    if (rAfter && rDis && rBoth) {
      if (state.preferences.mcMode === 'disabled') rDis.checked = true;
      else if (state.preferences.mcMode === 'both') rBoth.checked = true;
      else rAfter.checked = true;
    }

    updateSettingsToggleUI();
    modal.classList.remove('hidden');
  }

  function closeSettings() {
    const modal = document.getElementById('modal-settings');
    if (modal) modal.classList.add('hidden');
    saveState();
    
    if (!document.getElementById('practice-arena-screen').classList.contains('hidden')) {
      const choicesSection = document.getElementById('arena-choices-section');
      if (choicesSection) {
        if (state.preferences.mcMode === 'disabled' || practiceConfig.method === 'higa_only') {
          choicesSection.classList.add('hidden');
        } else if (state.preferences.mcMode === 'after_higa' && !isInputLocked) {
          choicesSection.classList.add('hidden');
        } else {
          choicesSection.classList.remove('hidden');
        }
      }
    }
  }

  function setSettingMcMode(mode) {
    state.preferences.mcMode = mode;
    saveState();
  }

  function toggleSoundSetting() {
    state.preferences.soundEnabled = !state.preferences.soundEnabled;
    saveState();
    updateSettingsToggleUI();
    updateHeaderTTSButton();
  }

  function toggleRomajiSetting() {
    state.preferences.romajiAutoConvert = !state.preferences.romajiAutoConvert;
    saveState();
    updateSettingsToggleUI();
  }

  function updateSettingsToggleUI() {
    const sBtn = document.getElementById('toggle-sound-btn');
    const sThumb = document.getElementById('toggle-sound-thumb');
    if (sBtn && sThumb) {
      if (state.preferences.soundEnabled) {
        sBtn.classList.remove('bg-border-strong');
        sBtn.classList.add('bg-primary');
        sThumb.classList.add('translate-x-6');
      } else {
        sBtn.classList.remove('bg-primary');
        sBtn.classList.add('bg-border-strong');
        sThumb.classList.remove('translate-x-6');
      }
    }

    const rBtn = document.getElementById('toggle-romaji-btn');
    const rThumb = document.getElementById('toggle-romaji-thumb');
    if (rBtn && rThumb) {
      if (state.preferences.romajiAutoConvert) {
        rBtn.classList.remove('bg-border-strong');
        rBtn.classList.add('bg-primary');
        rThumb.classList.add('translate-x-6');
      } else {
        rBtn.classList.remove('bg-primary');
        rBtn.classList.add('bg-border-strong');
        rThumb.classList.remove('translate-x-6');
      }
    }
  }

  function toggleSound() {
    toggleSoundSetting();
  }

  function updateHeaderTTSButton() {
    const icon = document.getElementById('header-icon-tts');
    if (icon) {
      icon.textContent = state.preferences.soundEnabled ? 'volume_up' : 'volume_off';
    }
  }

  // ================= 10. PROFILE SCREEN LOGIC =================
  function renderProfileScreen() {
    const streakBadge = document.getElementById('profile-streak-badge');
    if (streakBadge) streakBadge.textContent = state.streak;

    const totalWords = KANJI_DATA.length;
    const learned = Math.min(state.rememberedIds.length, totalWords);
    const percent = Math.min(100, Math.round((learned / totalWords) * 100));

    const learnedCountEl = document.getElementById('profile-learned-count');
    if (learnedCountEl) learnedCountEl.textContent = learned;

    const goalBar = document.getElementById('profile-goal-bar');
    if (goalBar) goalBar.style.width = percent + '%';

    const goalPercent = document.getElementById('profile-goal-percent');
    if (goalPercent) goalPercent.textContent = percent + '%';

    const starredCount = document.getElementById('profile-starred-count');
    if (starredCount) starredCount.textContent = `${state.forgottenIds.length} chữ đã lưu`;

    const mcLabel = document.getElementById('profile-mc-mode-label');
    if (mcLabel) {
      if (state.preferences.mcMode === 'disabled') {
        mcLabel.textContent = 'Tắt trắc nghiệm (Chỉ gõ Hiragana)';
      } else if (state.preferences.mcMode === 'both') {
        mcLabel.textContent = 'Hiện cả hai cùng lúc';
      } else {
        mcLabel.textContent = 'Hiện trắc nghiệm sau khi viết đúng';
      }
    }
  }

  function resetAllProgress() {
    if (confirm('CẢNH BÁO: Thao tác này sẽ đặt lại chuỗi streak và toàn bộ từ đã thuộc. Bạn có chắc chắn không?')) {
      state = Object.assign({}, defaultState);
      saveState();
      renderHomeScreen();
      renderProfileScreen();
      alert('Đã đặt lại tiến độ thành công!');
    }
  }

  // ================= 11. GLOBAL KEYBOARD SHORTCUTS =================
  function initKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      const jumpGridOpen = !document.getElementById('modal-jump-grid').classList.contains('hidden');
      const settingsOpen = !document.getElementById('modal-settings').classList.contains('hidden');

      if (e.key === 'Escape') {
        if (jumpGridOpen) closeJumpGrid();
        if (settingsOpen) closeSettings();
        return;
      }

      if (jumpGridOpen || settingsOpen) return;

      const arenaActive = !document.getElementById('practice-arena-screen').classList.contains('hidden');
      if (!arenaActive) return;

      // Ctrl + Z: Quay lại
      if (e.ctrlKey && (e.key === 'z' || e.key === 'Z')) {
        e.preventDefault();
        prevWord();
        return;
      }

      // Ctrl + G: Jump Grid
      if (e.ctrlKey && (e.key === 'g' || e.key === 'G')) {
        e.preventDefault();
        openJumpGrid();
        return;
      }

      // Space: Pronounce
      if (e.code === 'Space' && document.activeElement.id !== 'arena-hiragana-input') {
        e.preventDefault();
        speakCurrentWord();
        return;
      }

      // 1, 2, 3, 4: Multiple choice selections
      const choicesSection = document.getElementById('arena-choices-section');
      const choicesVisible = choicesSection && !choicesSection.classList.contains('hidden');

      if (choicesVisible) {
        if (['1', '2', '3', '4'].includes(e.key)) {
          if (isInputLocked || practiceConfig.method === 'mc_only') {
            e.preventDefault();
            const choiceIndex = parseInt(e.key, 10) - 1;
            onSelectChoice(choiceIndex);
          }
        }
      }
    });
  }

  // Shortcuts Helpers
  function startPracticeFromHome(level) {
    switchTab('practice');
    setPracticeLevel(level.toUpperCase());
  }

  function startFlashcardsFromHome(level) {
    switchTab('vocab');
    setVocabSubView('flashcard');
    filterVocabLevel(level.toUpperCase());
  }

  function startTopicPractice(topicId) {
    switchTab('practice');
    const topic = TOPICS.find(t => t.id === topicId);
    if (topic) {
      setPracticeLevel(topic.level);
      practiceConfig.selectedTopicIds.clear();
      practiceConfig.selectedTopicIds.add(topicId);
      renderPracticeTopicList();
      startPracticeSession();
    }
  }

  function startTopicFlashcards(topicId) {
    const topic = TOPICS.find(t => t.id === topicId);
    if (topic) {
      switchTab('vocab');
      setVocabSubView('flashcard');
      filterVocabLevel(topic.level);
      const select = document.getElementById('flashcard-topic-select');
      if (select) {
        select.value = topicId;
        onFlashcardTopicChange(topicId);
      }
    }
  }

  function startForgottenPractice() {
    switchTab('practice');
    practiceConfig.onlyUnremembered = true;
    const thumb = document.getElementById('thumb-only-unremembered');
    const btn = document.getElementById('btn-toggle-only-unremembered');
    if (thumb && btn) {
      btn.classList.add('bg-secondary');
      thumb.classList.add('translate-x-6');
    }
    const isRadical = practiceConfig.level === 'RADICALS';
    const source = isRadical ? RADICALS_DATA : KANJI_DATA;
    const forgottenWords = source.filter(it => state.forgottenIds.includes(it.id));
    if (forgottenWords.length > 0) {
      startPracticeSession(forgottenWords);
    } else {
      alert('Sổ tay chưa có từ nào! Hãy luyện tập và đánh dấu các từ bạn cần ôn lại nhé.');
    }
  }

  // ================= 12. INITIALIZATION =================
  function init() {
    initVoices();
    initKeyboardShortcuts();
    updateHeaderTTSButton();
    setPracticeLevel('N5');
    renderHomeScreen();
  }

  document.addEventListener('DOMContentLoaded', init);

  // Expose global app methods
  window.app = {
    switchTab,
    renderHomeScreen,
    renderVocabScreen,
    renderProfileScreen,
    setVocabSubView,
    filterVocabLevel,
    toggleTopicAccordion,
    onVocabSearch,
    clearVocabSearch,
    flipFlashcard,
    nextFlashcard,
    prevFlashcard,
    markFlashcardForgotten,
    speakFlashcardWord,
    setPracticeLevel,
    togglePracticeTopic,
    toggleAllPracticeTopics,
    setPracticeMethod,
    toggleOnlyUnremembered,
    startPracticeSession,
    onArenaInput,
    onArenaInputKeyDown,
    onSelectChoice,
    advanceNextWord,
    prevWord,
    skipWord,
    finishPracticeEarly,
    finishPracticeSession,
    retryUnrememberedSummary,
    restartSamePractice,
    exitPracticeSession,
    hintFirstChar,
    speakCurrentWord,
    speakWordText,
    toggleCurrentBookmark,
    toggleBookmarkId,
    openJumpGrid,
    closeJumpGrid,
    jumpToQuestion,
    openSettings,
    closeSettings,
    setSettingMcMode,
    toggleSoundSetting,
    toggleRomajiSetting,
    toggleSound,
    resetAllProgress,
    startPracticeFromHome,
    startFlashcardsFromHome,
    startTopicPractice,
    startTopicFlashcards,
    startForgottenPractice
  };

})();
