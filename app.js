// Kanji Kachi - Desktop Web Engine (Quizlet Inspired)
// Complete Practice Reflex, Flashcards, and Universal Library

(function () {
  'use strict';

  // ================= 1. LOCAL STORAGE & STATE =================
  const STORAGE_KEY = 'kanji_kachi_web_v3';

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
      romajiAutoConvert: true,
      isDarkTheme: true
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

  // Update Daily Streak
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

  // ================= 2. DOM ELEMENT REFERENCES =================
  const views = {
    home: document.getElementById('view-home'),
    vocab: document.getElementById('view-vocab'),
    practice: document.getElementById('view-practice'),
    profile: document.getElementById('view-profile')
  };

  const navBtns = {
    home: document.getElementById('nav-btn-home'),
    practice: document.getElementById('nav-btn-practice'),
    vocab: document.getElementById('nav-btn-vocab')
  };

  // ================= 3. TTS VOICE & CHIMES =================
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
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        osc.start(now);
        osc.stop(now + 0.3);
      } else {
        osc.frequency.setValueAtTime(220, now); // A3
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.26);
      }
    } catch (e) {
      // AudioContext blocked before user interaction, silent fail
    }
  }

  // ================= 4. THEME & MOBILE SIDEBAR =================
  function initTheme() {
    if (state.preferences.isDarkTheme) {
      document.body.classList.remove('theme-light');
      const icon = document.getElementById('icon-theme');
      if (icon) icon.textContent = 'light_mode';
    } else {
      document.body.classList.add('theme-light');
      const icon = document.getElementById('icon-theme');
      if (icon) icon.textContent = 'dark_mode';
    }
  }

  function toggleTheme() {
    state.preferences.isDarkTheme = !state.preferences.isDarkTheme;
    saveState();
    initTheme();
  }

  function toggleMobileSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (!sidebar || !backdrop) return;

    if (sidebar.classList.contains('-translate-x-full')) {
      sidebar.classList.remove('-translate-x-full');
      backdrop.classList.remove('hidden');
    } else {
      sidebar.classList.add('-translate-x-full');
      backdrop.classList.add('hidden');
    }
  }

  // ================= 5. TAB SWITCHER =================
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

    // Update active nav button
    Object.keys(navBtns).forEach(name => {
      const btn = navBtns[name];
      if (!btn) return;
      if (name === tabName) {
        btn.classList.add('nav-item-active');
        btn.classList.remove('text-app-text-muted');
        btn.classList.add('text-app-text');
      } else {
        btn.classList.remove('nav-item-active');
        btn.classList.add('text-app-text-muted');
        btn.classList.remove('text-app-text');
      }
    });

    // Update topbar section breadcrumb
    const topTitle = document.getElementById('topbar-section-title');
    if (topTitle) {
      const map = {
        home: 'Trang chủ',
        practice: 'Luyện phản xạ Hán tự',
        vocab: 'Thư viện từ vựng',
        profile: 'Cá nhân & Cài đặt'
      };
      topTitle.textContent = map[tabName] || 'Kanji Kachi';
    }

    // Close mobile sidebar if open
    const sidebar = document.getElementById('app-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar && !sidebar.classList.contains('-translate-x-full') && window.innerWidth < 1024) {
      sidebar.classList.add('-translate-x-full');
      if (backdrop) backdrop.classList.add('hidden');
    }

    // Scroll main viewport to top
    const scrollPane = document.getElementById('app-scroll-content');
    if (scrollPane) scrollPane.scrollTop = 0;

    if (tabName === 'home') renderHomeScreen();
    if (tabName === 'vocab') renderVocabScreen();
    if (tabName === 'profile') renderProfileScreen();
  }

  // ================= 6. HOME SCREEN LOGIC =================
  function renderHomeScreen() {
    updateDailyStreak();

    // Stats
    const streakEl = document.getElementById('home-streak-count');
    if (streakEl) streakEl.textContent = state.streak;

    const sideStreak = document.getElementById('sidebar-streak-num');
    if (sideStreak) sideStreak.textContent = state.streak;

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

    const sideUnrem = document.getElementById('sidebar-unremembered-count');
    if (sideUnrem) sideUnrem.textContent = state.forgottenIds.length;

    // Render Quizlet-style Topic Cards Grid
    const topicsGrid = document.getElementById('home-topics-grid');
    if (topicsGrid) {
      // Show first 6 topics or all
      const sampleTopics = TOPICS.slice(0, 9);
      topicsGrid.innerHTML = sampleTopics.map(t => {
        const isN5 = t.level === 'N5';
        const badgeColor = isN5 ? 'text-app-accent bg-blue-500/10' : 'text-app-red bg-red-500/10';
        return `
          <div class="bg-app-card p-4 sm:p-5 rounded-2xl border border-app-border hover:border-app-accent/60 transition-all cursor-pointer shadow-sm flex flex-col justify-between group" onclick="app.startTopicPractice('${t.id}')">
            <div class="space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded text-[10px] font-bold ${badgeColor}">${t.level}</span>
                <span class="text-[11px] text-app-text-dim font-medium">${t.count} chữ</span>
              </div>
              <h3 class="font-serif font-bold text-sm sm:text-base text-app-text group-hover:text-app-accent transition-colors truncate">
                ${t.title}
              </h3>
              <p class="text-[11px] text-app-text-muted">Chủ đề từ vựng trọng tâm trong giáo trình Marugoto & Minna.</p>
            </div>

            <div class="mt-4 pt-3 border-t border-app-border flex items-center justify-between">
              <span class="text-xs font-bold text-app-text-muted group-hover:text-app-accent flex items-center gap-1 transition-colors">
                <span>Rèn luyện</span>
                <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
              <button class="w-7 h-7 rounded-full hover:bg-app-input text-app-text-dim hover:text-app-text flex items-center justify-center transition-colors" onclick="event.stopPropagation(); app.startTopicFlashcards('${t.id}')" title="Lật thẻ Flashcard">
                <span class="material-symbols-outlined text-[16px]">style</span>
              </button>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // ================= 7. VOCABULARY & FLASHCARDS LOGIC =================
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
      listBtn.className = "px-4 py-1.5 text-xs font-semibold rounded-lg bg-app-input text-app-text shadow-sm transition-all flex items-center gap-1.5";
      fcBtn.className = "px-4 py-1.5 text-xs font-semibold rounded-lg text-app-text-muted hover:text-app-text transition-all flex items-center gap-1.5";
      listSub.classList.remove('hidden');
      fcSub.classList.add('hidden');
    } else {
      fcBtn.className = "px-4 py-1.5 text-xs font-semibold rounded-lg bg-app-input text-app-text shadow-sm transition-all flex items-center gap-1.5";
      listBtn.className = "px-4 py-1.5 text-xs font-semibold rounded-lg text-app-text-muted hover:text-app-text transition-all flex items-center gap-1.5";
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
        btn.className = "px-4 py-2 rounded-xl bg-app-accent text-white text-xs font-bold flex items-center gap-2 transition-all shadow-sm";
      } else {
        btn.className = "px-4 py-2 rounded-xl bg-app-card border border-app-border text-app-text-muted hover:text-app-text text-xs font-semibold transition-all";
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
          <span class="text-xs font-bold text-app-text-muted block">Tìm thấy ${filtered.length} từ vựng:</span>
          <div class="bg-app-card rounded-2xl p-2 border border-app-border divide-y divide-app-border shadow-sm">
            ${filtered.length > 0 ? filtered.map(renderVocabRow).join('') : '<p class="p-6 text-xs text-center text-app-text-dim">Không tìm thấy từ vựng nào khớp với từ khóa tìm kiếm.</p>'}
          </div>
        </div>
      `;
      return;
    }

    container.innerHTML = topics.map(topic => {
      const topicItems = items.filter(it => it.topicId === topic.id);
      return `
        <div class="bg-app-card rounded-2xl border border-app-border overflow-hidden shadow-sm">
          <div class="p-4 flex items-center justify-between cursor-pointer hover:bg-app-card-hover transition-colors select-none" onclick="app.toggleTopicAccordion('${topic.id}')">
            <div class="flex items-center gap-3">
              <span class="w-2 h-2 rounded-full ${topic.level === 'N5' ? 'bg-app-accent' : (topic.level === 'N4' ? 'bg-app-red' : 'bg-emerald-500')}"></span>
              <div>
                <span class="text-xs sm:text-sm font-bold text-app-text block">${topic.title}</span>
                <span class="text-[11px] text-app-text-dim">${topicItems.length} Hán tự</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button class="px-3 py-1 rounded-lg bg-app-input hover:bg-app-accent hover:text-white text-xs font-bold text-app-text transition-colors" onclick="event.stopPropagation(); app.startTopicPractice('${topic.id}')">
                Luyện tập
              </button>
              <button class="w-7 h-7 rounded-full hover:bg-app-input text-app-text-dim hover:text-app-text flex items-center justify-center transition-colors" onclick="event.stopPropagation(); app.startTopicFlashcards('${topic.id}')" title="Thẻ Flashcard">
                <span class="material-symbols-outlined text-[18px]">style</span>
              </button>
              <span id="acc-icon-${topic.id}" class="material-symbols-outlined text-app-text-dim text-[20px] transition-transform">expand_more</span>
            </div>
          </div>
          <div id="acc-content-${topic.id}" class="hidden divide-y divide-app-border border-t border-app-border bg-app-bg/40">
            ${topicItems.map(renderVocabRow).join('')}
          </div>
        </div>
      `;
    }).join('');
  }

  function renderVocabRow(item) {
    const isForgotten = state.forgottenIds.includes(item.id);
    return `
      <div class="p-3.5 flex items-center justify-between hover:bg-app-card-hover transition-colors">
        <div class="flex items-center gap-4">
          <span class="kanji-glyph text-3xl font-normal text-app-text w-12 text-center select-none">${item.kanji}</span>
          <div class="flex flex-col">
            <span class="text-xs font-bold text-app-red font-sans">${item.displayReading}</span>
            <span class="text-xs sm:text-sm text-app-text font-medium">${item.meaning}</span>
            ${item.examples ? `<span class="text-[11px] text-app-text-dim italic mt-0.5">${item.examples}</span>` : ''}
          </div>
        </div>
        <div class="flex items-center gap-1">
          <button class="w-8 h-8 rounded-full flex items-center justify-center text-app-text-dim hover:text-app-text hover:bg-app-input transition-colors" onclick="app.speakWordText('${item.kanji}')" title="Nghe phát âm">
            <span class="material-symbols-outlined text-[18px]">volume_up</span>
          </button>
          <button class="w-8 h-8 rounded-full flex items-center justify-center ${isForgotten ? 'text-amber-500' : 'text-app-text-dim'} hover:text-amber-500 hover:bg-app-input transition-colors" onclick="app.toggleBookmarkId(${item.id})" title="Đánh dấu sổ tay">
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

  // Universal Global Search in Topbar
  function onGlobalSearch(query) {
    const clearBtn = document.getElementById('global-search-clear');
    if (clearBtn) {
      if (query) clearBtn.classList.remove('hidden');
      else clearBtn.classList.add('hidden');
    }
    if (query.trim()) {
      switchTab('vocab');
      setVocabSubView('list');
      const input = document.getElementById('vocab-search-input');
      if (input) input.value = query;
      renderVocabTopicsList(currentVocabLevel, query);
    }
  }

  function clearGlobalSearch() {
    const input = document.getElementById('global-search-input');
    if (input) input.value = '';
    const clearBtn = document.getElementById('global-search-clear');
    if (clearBtn) clearBtn.classList.add('hidden');
    clearVocabSearch();
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

  // ================= 8. PRACTICE SETUP & ARENA LOGIC =================
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
        btn.className = "flex-1 py-3 rounded-xl bg-app-accent text-white text-xs font-bold transition-all shadow-sm";
      } else {
        btn.className = "flex-1 py-3 rounded-xl bg-app-card border border-app-border text-app-text-muted hover:text-app-text text-xs font-bold transition-all";
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
        <label class="flex items-center justify-between p-3.5 rounded-xl border ${isChecked ? 'border-app-accent bg-app-input' : 'border-app-border bg-app-card'} cursor-pointer transition-all shadow-sm" onclick="app.togglePracticeTopic('${t.id}')">
          <div class="flex items-center gap-3">
            <input type="checkbox" ${isChecked ? 'checked' : ''} class="accent-blue-500 cursor-pointer" onclick="event.stopPropagation(); app.togglePracticeTopic('${t.id}')">
            <span class="text-xs font-bold text-app-text truncate max-w-[200px]">${t.title}</span>
          </div>
          <span class="text-[11px] text-app-text-dim">${t.count} chữ</span>
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
        btn.classList.remove('bg-app-input');
        btn.classList.add('bg-app-red');
        thumb.classList.add('translate-x-6');
      } else {
        btn.classList.remove('bg-app-red');
        btn.classList.add('bg-app-input');
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
        inputEl.classList.remove('border-emerald-500', 'bg-emerald-500/10', 'border-app-red', 'bg-red-500/10');
        inputEl.classList.add('border-app-border', 'bg-app-card');
        inputEl.focus();
      }
      if (inputStatus) inputStatus.innerHTML = '<span class="material-symbols-outlined text-[24px]">keyboard</span>';
      if (inputMsg) inputMsg.innerHTML = 'Hệ thống tự động chuyển đổi: <code class="bg-app-input px-1.5 py-0.5 rounded text-[11px] text-app-text">sakana</code> ➔ <code class="bg-app-input px-1.5 py-0.5 rounded text-[11px] text-emerald-400">さかな</code>';
    }

    // Generate choices
    generateMultipleChoices(word);

    // MC section visibility
    const choicesSection = document.getElementById('arena-choices-section');
    if (choicesSection) {
      if (practiceConfig.method === 'higa_only' || state.preferences.mcMode === 'disabled') {
        choicesSection.classList.add('hidden');
      } else if (state.preferences.mcMode === 'after_higa' && practiceConfig.method !== 'mc_only') {
        choicesSection.classList.add('hidden'); // wait until Hiragana is correct
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
      btn.className = "flex items-center justify-between p-4 rounded-xl bg-app-card border border-app-border hover:border-app-accent transition-all text-left shadow-sm group cursor-pointer";
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
      // Correct Hiragana reading!
      isInputLocked = true;
      inputEl.disabled = true;
      inputEl.classList.remove('border-app-border', 'bg-app-card');
      inputEl.classList.add('border-emerald-500', 'bg-emerald-500/10');
      
      const inputStatus = document.getElementById('arena-input-status-icon');
      if (inputStatus) {
        inputStatus.innerHTML = '<span class="material-symbols-outlined text-emerald-500 text-[24px]">check_circle</span>';
      }

      const inputMsg = document.getElementById('arena-input-message');
      if (inputMsg) {
        inputMsg.innerHTML = `<span class="text-emerald-400 font-bold">Chính xác! (${currentWord.displayReading})</span>`;
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
      btn.classList.remove('bg-app-card', 'border-app-border');
      btn.classList.add('bg-emerald-500/20', 'border-emerald-500');
      playAudioChime(true);
      markQuestionResult(true);
      setTimeout(() => advanceNextWord(), 380);
    } else {
      btn.classList.remove('bg-app-card', 'border-app-border');
      btn.classList.add('bg-red-500/20', 'border-app-red', 'animate-shake');
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
          <div class="bg-app-input p-3 rounded-xl border border-app-border flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="kanji-glyph text-2xl font-normal text-app-text">${w.kanji}</span>
              <div>
                <span class="text-xs font-bold text-app-red block">${w.displayReading}</span>
                <span class="text-xs text-app-text font-medium truncate max-w-[130px] block">${w.meaning}</span>
              </div>
            </div>
            <button class="w-8 h-8 rounded-full flex items-center justify-center text-app-text-dim hover:text-app-text hover:bg-app-card" onclick="app.speakWordText('${w.kanji}')">
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
      icon.parentElement.classList.add('text-amber-500');
    } else {
      icon.textContent = 'bookmark_border';
      icon.parentElement.classList.remove('text-amber-500');
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

  // ================= 9. JUMP GRID MODAL (⊞ CHỌN CÂU) =================
  function openJumpGrid() {
    const modal = document.getElementById('modal-jump-grid');
    const grid = document.getElementById('jump-grid-container');
    if (!modal || !grid) return;

    grid.innerHTML = practiceDeck.map((word, i) => {
      const status = questionStatus[i] || 'unvisited';
      let colorClass = 'bg-app-input text-app-text-muted border-app-border';
      if (status === 'correct') {
        colorClass = 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 font-bold';
      } else if (status === 'wrong' || state.forgottenIds.includes(word.id)) {
        colorClass = 'bg-red-500/20 text-app-red border-red-500/40 font-bold';
      }

      if (i === currentIndex) {
        colorClass += ' ring-2 ring-app-accent';
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

  // ================= 10. SETTINGS MODAL (⚙️ CÀI ĐẶT) =================
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
        sBtn.classList.remove('bg-app-input');
        sBtn.classList.add('bg-app-accent');
        sThumb.classList.add('translate-x-6');
      } else {
        sBtn.classList.remove('bg-app-accent');
        sBtn.classList.add('bg-app-input');
        sThumb.classList.remove('translate-x-6');
      }
    }

    const rBtn = document.getElementById('toggle-romaji-btn');
    const rThumb = document.getElementById('toggle-romaji-thumb');
    if (rBtn && rThumb) {
      if (state.preferences.romajiAutoConvert) {
        rBtn.classList.remove('bg-app-input');
        rBtn.classList.add('bg-app-accent');
        rThumb.classList.add('translate-x-6');
      } else {
        rBtn.classList.remove('bg-app-accent');
        rBtn.classList.add('bg-app-input');
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

  // ================= 11. PROFILE SCREEN LOGIC =================
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

  // ================= 12. GLOBAL KEYBOARD SHORTCUTS =================
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

  // Navigation Shortcut Helpers
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
      btn.classList.add('bg-app-red');
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

  // ================= 13. INITIALIZATION =================
  function init() {
    initTheme();
    initVoices();
    initKeyboardShortcuts();
    updateHeaderTTSButton();
    setPracticeLevel('N5');
    renderHomeScreen();
  }

  document.addEventListener('DOMContentLoaded', init);

  // Expose methods to global app namespace for inline HTML calls
  window.app = {
    switchTab,
    toggleTheme,
    toggleMobileSidebar,
    onGlobalSearch,
    clearGlobalSearch,
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
