// Kanji Kachi - Web Edition Engine
// Right Sidebar Navigation (Quizlet Style) with Sumi & Paper Palette

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
    aiTokens: {
      day: null,
      used: 0,
      limit: 12000
    },
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

  // AI Token Quota Helpers (UTC+7 Vietnam Timezone)
  function getVietnamDateStr() {
    const now = new Date();
    const utc7 = new Date(now.getTime() + 7 * 3600 * 1000);
    return utc7.toISOString().slice(0, 10);
  }

  function getAiTokenQuota() {
    const today = getVietnamDateStr();
    if (!state.aiTokens || typeof state.aiTokens !== 'object' || state.aiTokens.day !== today) {
      state.aiTokens = {
        day: today,
        used: 0,
        limit: 12000
      };
      saveState();
    }
    return state.aiTokens;
  }

  function consumeAiTokens(amount) {
    const quota = getAiTokenQuota();
    quota.used = Math.min(quota.limit, (quota.used || 0) + amount);
    saveState();
    updateAiTokenUi();
    return quota.limit - quota.used;
  }

  function updateAiTokenUi() {
    const quota = getAiTokenQuota();
    const remaining = Math.max(0, quota.limit - quota.used);
    const nf = new Intl.NumberFormat('vi-VN');
    const remainingFormatted = nf.format(remaining);
    const limitFormatted = nf.format(quota.limit);

    // Chat header badge
    const chatBadge = document.getElementById('chat-token-badge');
    if (chatBadge) {
      chatBadge.textContent = `${remainingFormatted} token`;
      if (remaining <= 500) {
        chatBadge.className = "px-2 py-0.5 rounded-full bg-vermilion-soft text-secondary text-[10px] font-bold";
      } else {
        chatBadge.className = "px-2 py-0.5 rounded-full bg-matcha-soft text-tertiary text-[10px] font-bold";
      }
    }

    // Profile card text & progress bar
    const profileCount = document.getElementById('profile-ai-tokens-count');
    if (profileCount) {
      profileCount.textContent = `${remainingFormatted} / ${limitFormatted} token`;
    }

    const profileBar = document.getElementById('profile-ai-tokens-bar');
    if (profileBar) {
      const pct = Math.max(0, Math.min(100, Math.round((remaining / quota.limit) * 100)));
      profileBar.style.width = pct + '%';
    }
  }

  // ================= 2. DOM REFERENCES =================
  const views = {
    home: document.getElementById('view-home'),
    vocab: document.getElementById('view-vocab'),
    practice: document.getElementById('view-practice'),
    profile: document.getElementById('view-profile')
  };

  const sidebarNavBtns = {
    home: document.getElementById('sb-nav-home'),
    practice: document.getElementById('sb-nav-practice'),
    vocab: document.getElementById('sb-nav-vocab'),
    profile: document.getElementById('sb-nav-profile')
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

  // ================= 4. RIGHT SIDEBAR TOGGLE =================
  function toggleRightSidebar() {
    const sidebar = document.getElementById('app-sidebar-right');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (!sidebar || !backdrop) return;

    if (sidebar.classList.contains('translate-x-full')) {
      sidebar.classList.remove('translate-x-full');
      backdrop.classList.remove('hidden');
    } else {
      sidebar.classList.add('translate-x-full');
      backdrop.classList.add('hidden');
    }
  }

  // ================= 5. TAB NAVIGATION =================
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

    // Update Right Sidebar Nav Items
    Object.keys(sidebarNavBtns).forEach(name => {
      const btn = sidebarNavBtns[name];
      if (!btn) return;
      const icon = btn.querySelector('.nav-icon');
      if (name === tabName) {
        btn.classList.add('nav-item-active');
        btn.classList.remove('text-ink-muted');
        btn.classList.add('text-primary');
        if (icon) {
          icon.classList.remove('text-ink-dim');
          icon.classList.add('text-secondary');
        }
      } else {
        btn.classList.remove('nav-item-active');
        btn.classList.add('text-ink-muted');
        btn.classList.remove('text-primary');
        if (icon) {
          icon.classList.add('text-ink-dim');
          icon.classList.remove('text-secondary');
        }
      }
    });

    // Auto-close right sidebar on mobile
    const sidebar = document.getElementById('app-sidebar-right');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar && !sidebar.classList.contains('translate-x-full') && window.innerWidth < 1024) {
      sidebar.classList.add('translate-x-full');
      if (backdrop) backdrop.classList.add('hidden');
    }

    // Scroll main viewport to top
    const scrollPane = document.getElementById('app-scroll-content');
    if (scrollPane) scrollPane.scrollTop = 0;

    if (tabName === 'home') renderHomeScreen();
    if (tabName === 'vocab') renderVocabScreen();
    if (tabName === 'profile') renderProfileScreen();
  }

  // ================= 6. DAILY KANJI SPOTLIGHT & HOME SCREEN =================
  let currentSpotlightWord = null;

  function initDailySpotlight() {
    const allItems = window.KANJI_DATA || [];
    if (!allItems.length) return;

    // Filter sentence candidates matching mobile app HomeScreen.kt
    const sentenceCandidates = allItems.filter(item => {
      const k = item.kanji || '';
      return k.includes('です') || k.includes('ます') || k.includes('ください') || k.includes('は') || k.includes('が');
    });
    const candidates = sentenceCandidates.length > 0 ? sentenceCandidates : allItems;

    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const diff = now - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const daySeed = now.getFullYear() * 1000 + dayOfYear;

    // Deterministic pseudo-random index based on daySeed
    const idx = Math.abs((daySeed * 9301 + 49297) % 233280) % candidates.length;
    currentSpotlightWord = candidates[idx];

    renderDailySpotlight();
  }

  function renderDailySpotlight() {
    if (!currentSpotlightWord) return;
    const kanjiEl = document.getElementById('spotlight-kanji');
    const readingEl = document.getElementById('spotlight-reading');
    const meaningEl = document.getElementById('spotlight-meaning');
    const watermarkEl = document.getElementById('spotlight-watermark');

    if (kanjiEl) kanjiEl.textContent = currentSpotlightWord.kanji;
    if (readingEl) {
      const reading = currentSpotlightWord.displayReading || currentSpotlightWord.reading || '';
      readingEl.textContent = `Cách đọc: ${reading}`;
    }
    if (meaningEl) meaningEl.textContent = currentSpotlightWord.meaning || '';
    if (watermarkEl) {
      const firstChar = (currentSpotlightWord.kanji || '日')[0];
      watermarkEl.textContent = firstChar;
    }
  }

  function speakSpotlight() {
    if (currentSpotlightWord) {
      speakJapanese(currentSpotlightWord.kanji || currentSpotlightWord.reading);
    }
  }

  function practiceSpotlight() {
    if (!currentSpotlightWord) return;
    switchTab('practice');
    if (currentSpotlightWord.topicId) {
      setPracticeLevel(currentSpotlightWord.level || 'N5');
      practiceConfig.selectedTopicIds.clear();
      practiceConfig.selectedTopicIds.add(currentSpotlightWord.topicId);
      renderPracticeTopicList();
      startPracticeSession();
    } else {
      startPracticeSession([currentSpotlightWord]);
    }
  }

  function renderHomeScreen() {
    updateDailyStreak();
    initDailySpotlight();

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

  // Universal Global Search
  function onGlobalSearch(query) {
    if (query.trim()) {
      switchTab('vocab');
      setVocabSubView('list');
      const input = document.getElementById('vocab-search-input');
      if (input) input.value = query;
      renderVocabTopicsList(currentVocabLevel, query);
    }
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

  // ================= 9. JUMP GRID MODAL (⊞ CHỌN CÂU) =================
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

    updateAiTokenUi();

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

  // ================= 12. AI CHAT GIA SƯ KANJI =================
  let isAiGenerating = false;

  function toggleAiChat(forceOpen) {
    const box = document.getElementById('ai-chat-box');
    if (!box) return;

    const isHidden = box.classList.contains('hidden');
    const shouldOpen = forceOpen !== undefined ? forceOpen : isHidden;

    if (shouldOpen) {
      box.classList.remove('hidden');
      updateAiTokenUi();
      const input = document.getElementById('ai-chat-input');
      if (input) {
        setTimeout(() => input.focus(), 100);
      }
      scrollAiChatToBottom();
    } else {
      box.classList.add('hidden');
    }
  }

  function scrollAiChatToBottom() {
    const msgContainer = document.getElementById('ai-chat-messages');
    if (msgContainer) {
      msgContainer.scrollTop = msgContainer.scrollHeight;
    }
  }

  function submitAiChat() {
    const input = document.getElementById('ai-chat-input');
    if (!input) return;
    const text = input.value.trim();
    if (!text || isAiGenerating) return;

    input.value = '';
    handleUserAiQuery(text);
  }

  function sendPresetPrompt(promptText) {
    if (isAiGenerating) return;
    toggleAiChat(true);

    let contextWord = null;
    const arenaActive = !document.getElementById('practice-arena-screen').classList.contains('hidden');
    if (arenaActive && practiceDeck[currentIndex]) {
      contextWord = practiceDeck[currentIndex];
    } else if (currentSpotlightWord) {
      contextWord = currentSpotlightWord;
    }

    let fullPrompt = promptText;
    if (contextWord && (promptText.includes('Từ này') || promptText.includes('chữ Hán này'))) {
      const reading = contextWord.displayReading || contextWord.reading || '';
      fullPrompt = `Về từ "${contextWord.kanji}" (${reading} - ${contextWord.meaning}): ${promptText}`;
    }

    handleUserAiQuery(fullPrompt);
  }

  function appendAiMessage(role, htmlContent) {
    const container = document.getElementById('ai-chat-messages');
    if (!container) return;

    const msgWrapper = document.createElement('div');
    if (role === 'user') {
      msgWrapper.className = 'flex justify-end';
      msgWrapper.innerHTML = `
        <div class="ai-bubble-user text-xs">
          ${escapeHtml(htmlContent)}
        </div>
      `;
    } else {
      msgWrapper.className = 'flex items-start gap-2.5';
      msgWrapper.innerHTML = `
        <div class="w-7 h-7 rounded-lg bg-primary text-washi flex items-center justify-center flex-shrink-0 text-xs shadow-sm font-bold">
          勝
        </div>
        <div class="ai-bubble-bot text-xs space-y-1.5 leading-relaxed">
          ${htmlContent}
        </div>
      `;
    }
    container.appendChild(msgWrapper);
    scrollAiChatToBottom();
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function handleUserAiQuery(query) {
    const quota = getAiTokenQuota();
    const remaining = quota.limit - quota.used;

    if (remaining <= 0) {
      appendAiMessage('user', query);
      appendAiMessage('bot', `
        <p class="font-bold text-secondary">Hạn mức token hôm nay đã hết!</p>
        <p class="text-ink-muted">Bạn đã sử dụng hết 12.000 token AI hôm nay. Hạn mức sẽ được tự động làm mới vào lúc <strong>00:00 (UTC+7)</strong>. Hãy tiếp tục luyện tập phản xạ và từ vựng nhé!</p>
      `);
      return;
    }

    appendAiMessage('user', query);
    isAiGenerating = true;
    const sendBtn = document.getElementById('ai-chat-send-btn');
    if (sendBtn) sendBtn.disabled = true;

    // Show typing indicator
    const container = document.getElementById('ai-chat-messages');
    const typingIndicator = document.createElement('div');
    typingIndicator.id = 'ai-typing-indicator';
    typingIndicator.className = 'flex items-start gap-2.5';
    typingIndicator.innerHTML = `
      <div class="w-7 h-7 rounded-lg bg-primary text-washi flex items-center justify-center flex-shrink-0 text-xs shadow-sm font-bold">
        勝
      </div>
      <div class="ai-bubble-bot text-xs py-2 px-3 text-ink-muted flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-secondary animate-bounce"></span>
        <span class="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.15s]"></span>
        <span class="w-2 h-2 rounded-full bg-tertiary animate-bounce [animation-delay:0.3s]"></span>
        <span class="ml-1 text-[11px]">Gia sư AI đang soạn câu trả lời...</span>
      </div>
    `;
    container.appendChild(typingIndicator);
    scrollAiChatToBottom();

    setTimeout(() => {
      // Remove typing indicator
      const ind = document.getElementById('ai-typing-indicator');
      if (ind) ind.remove();

      const responseHtml = generateIntelligentTutorResponse(query);
      appendAiMessage('bot', responseHtml);

      // Consume tokens (~120 - 240 tokens per answer)
      const tokenCost = Math.min(remaining, Math.floor(120 + Math.random() * 80 + query.length * 1.5));
      consumeAiTokens(tokenCost);

      isAiGenerating = false;
      if (sendBtn) sendBtn.disabled = false;
    }, 600);
  }

  function generateIntelligentTutorResponse(query) {
    const qLower = query.toLowerCase();

    // 1. Check if query mentions a specific Kanji or word in our dataset
    const allWords = window.KANJI_DATA || [];
    let matchedWord = null;

    // Exact Kanji match
    for (const item of allWords) {
      if (query.includes(item.kanji) || (item.reading && qLower.includes(item.reading.toLowerCase()))) {
        matchedWord = item;
        break;
      }
    }

    // Meaning search match
    if (!matchedWord) {
      for (const item of allWords) {
        if (item.meaning && qLower.includes(item.meaning.toLowerCase())) {
          matchedWord = item;
          break;
        }
      }
    }

    if (matchedWord) {
      const topic = TOPICS.find(t => t.id === matchedWord.topicId);
      const topicName = topic ? topic.title : 'Từ vựng JLPT';
      const reading = matchedWord.displayReading || matchedWord.reading || '';

      return `
        <p class="font-bold text-sm text-primary">Giải nghĩa Hán tự: <span class="font-serif text-lg text-secondary">${matchedWord.kanji}</span></p>
        <div class="bg-surface-alt p-2.5 rounded-xl border border-border-subtle my-1.5 space-y-1">
          <div>• <strong>Cách đọc Hiragana:</strong> <code>${reading}</code></div>
          <div>• <strong>Ý nghĩa tiếng Việt:</strong> ${matchedWord.meaning}</div>
          <div>• <strong>Cấp độ:</strong> ${matchedWord.level} (${topicName})</div>
        </div>
        <p><strong>💡 Mẹo nhớ & Phân tích cấu trúc:</strong></p>
        <p class="text-ink-muted">Chữ <strong class="text-primary">${matchedWord.kanji}</strong> thường xuất hiện trong các bài đọc hiểu và hội thoại hàng ngày. Hãy liên kết hình ảnh các nét bộ phận hoặc âm đọc với từ ghép thực tế để phản xạ tức thì.</p>
        <p><strong>📝 Câu ví dụ thực tế:</strong></p>
        <div class="border-l-2 border-secondary pl-2.5 py-0.5 space-y-0.5">
          <p class="font-medium text-primary">${matchedWord.kanji}があります。</p>
          <p class="text-ink-muted text-[11px]">Có ${matchedWord.meaning.toLowerCase()}.</p>
        </div>
      `;
    }

    // 2. Grammar query
    if (qLower.includes('ngữ pháp') || qLower.includes('grammar') || qLower.includes('mẫu câu') || qLower.includes('cấu trúc')) {
      return `
        <p class="font-bold text-sm text-primary">📖 Điểm ngữ pháp trọng tâm JLPT N5:</p>
        <div class="space-y-2 mt-1">
          <div>
            <p><strong>1. Trợ từ は (wa) & が (ga):</strong></p>
            <p class="text-ink-muted"><code>A は B です</code> (A là B - giới thiệu chủ đề chung). <code>が</code> dùng nhấn mạnh chính chủ thể hoặc câu có tính từ/hiện tượng tự nhiên.</p>
          </div>
          <div>
            <p><strong>2. Trợ từ を (o) & に (ni):</strong></p>
            <p class="text-ink-muted"><code>V をします</code> (tác động lên tân ngữ). <code>に</code> chỉ thời điểm cụ thể hoặc điểm đến (ví dụ: 7時に起きます).</p>
          </div>
          <div>
            <p><strong>3. Thể Te (〜てください):</strong></p>
            <p class="text-ink-muted">Dùng khi nhờ vả lịch sự: <code>ちょっと待ってください</code> (Xin vui lòng đợi một chút).</p>
          </div>
        </div>
      `;
    }

    // 3. How to study / Mẹo nhớ Kanji
    if (qLower.includes('mẹo nhớ') || qLower.includes('cách học') || qLower.includes('nhớ lâu') || qLower.includes('hiệu quả')) {
      return `
        <p class="font-bold text-sm text-primary">🧠 Bí quyết nhớ sâu 1.061 Hán tự N5 & N4:</p>
        <ul class="space-y-1.5 text-ink-muted mt-1">
          <li><strong>1. Học qua 214 Bộ thủ:</strong> Mỗi chữ Hán đều cấu thành từ các bộ nét căn bản (như bộ Thủy 氵, Mộc 木, Nhân 亻). Hiểu bộ thủ sẽ giúp bạn đoán nghĩa chữ mới cực nhanh!</li>
          <li><strong>2. Luyện phản xạ gõ Romaji ➔ Hiragana:</strong> Não bộ ghi nhớ tốt hơn khi bạn chủ động gõ từng âm thay vì chỉ nhìn thụ động.</li>
          <li><strong>3. Ôn ngắt quãng (Spaced Repetition):</strong> Luyện 15-20 câu mỗi ngày cùng Kanji Kachi, tập trung vào các câu trắc nghiệm phản xạ.</li>
        </ul>
      `;
    }

    // 4. Default helpful tutor response
    return `
      <p class="font-semibold text-primary">Gia sư Kanji AI đã nhận câu hỏi của bạn!</p>
      <p class="text-ink-muted mt-1 leading-relaxed">Về câu hỏi <em>"${escapeHtml(query)}"</em>: Để làm chủ phần này trong JLPT N5/N4, bạn hãy chú ý kết hợp giữa <strong>mặt chữ Hán</strong>, <strong>cách phát âm Tokyo</strong> và <strong>ngữ cảnh câu ví dụ</strong>.</p>
      <div class="bg-surface-alt p-2.5 rounded-xl border border-border-subtle my-2">
        <p class="font-bold text-primary">💡 Lời khuyên ôn luyện hôm nay:</p>
        <p class="text-ink-muted text-[11px] mt-0.5">Hãy chuyển sang tab <strong>Luyện phản xạ</strong> để gõ thử các từ trong chủ đề tương ứng. Chỉ cần 10 phút là bạn sẽ nhớ sâu ngay!</p>
      </div>
      <p class="text-ink-muted text-[11px]">Bạn có muốn xem câu ví dụ hoặc phân tích chi tiết một chữ Hán cụ thể nào không?</p>
    `;
  }

  // ================= 13. GLOBAL KEYBOARD SHORTCUTS =================
  function initKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      const jumpGridOpen = !document.getElementById('modal-jump-grid').classList.contains('hidden');
      const settingsOpen = !document.getElementById('modal-settings').classList.contains('hidden');

      if (e.key === 'Escape') {
        if (jumpGridOpen) closeJumpGrid();
        if (settingsOpen) closeSettings();
        toggleAiChat(false);
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
      if (e.code === 'Space' && document.activeElement.id !== 'arena-hiragana-input' && document.activeElement.id !== 'ai-chat-input') {
        e.preventDefault();
        speakCurrentWord();
        return;
      }

      // 1, 2, 3, 4: Multiple choice selections
      const choicesSection = document.getElementById('arena-choices-section');
      const choicesVisible = choicesSection && !choicesSection.classList.contains('hidden');

      if (choicesVisible && document.activeElement.id !== 'ai-chat-input') {
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
    startPracticeSession();
  }

  // ================= 14. INITIALIZATION =================
  function init() {
    initVoices();
    initKeyboardShortcuts();
    updateHeaderTTSButton();
    updateAiTokenUi();
    setPracticeLevel('N5');
    renderHomeScreen();
  }

  document.addEventListener('DOMContentLoaded', init);

  // Expose global methods
  window.app = {
    switchTab,
    toggleRightSidebar,
    onGlobalSearch,
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
    startForgottenPractice,
    // New Features
    speakSpotlight,
    practiceSpotlight,
    toggleAiChat,
    submitAiChat,
    sendPresetPrompt
  };

})();
