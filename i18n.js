// Kanji Kachi - Bilingual i18n Dictionary & Runtime (VI / EN)
(function () {
  'use strict';

  const STORAGE_KEY = 'kanji_kachi_state_clean_v1';

  const DICT = {
    vi: {
      // Sidebar & Navigation
      nav_home: 'Trang chủ',
      nav_practice: 'Luyện phản xạ',
      nav_vocab: 'Từ vựng & Flashcard',
      nav_profile: 'Cá nhân',
      nav_start_here: 'Bắt đầu tại đây',
      nav_flashcards: 'Thẻ ghi nhớ (Flashcard)',
      nav_ai_tutor: 'Gia sư Kanji AI',
      nav_roadmap: 'Lộ trình của bạn',
      nav_n5: 'Kanji N5 (Sơ cấp)',
      nav_n4: 'Kanji N4 (Sơ trung cấp)',
      nav_radicals: '214 Bộ thủ Khang Hy',
      sb_download_title: 'TẢI XUỐNG & LIÊN KẾT',
      sb_beta_badge: 'Beta',
      sb_beta_note: 'App đang thử nghiệm · Sắp ra mắt',
      sb_beta_alert: 'Ứng dụng di động Kanji Kachi trên Google Play hiện đang trong giai đoạn thử nghiệm kín (Closed Beta) và sẽ sớm ra mắt công khai. Bạn có thể học trên Web và đăng nhập Google để tự động đồng bộ tiến độ ngay khi App phát hành!',

      // Top Header
      search_placeholder: 'Tìm kiếm Hán tự, Hiragana hoặc nghĩa...',
      auth_signin: 'Đăng nhập',

      // Home View
      home_eyebrow: 'Rèn luyện chánh niệm',
      home_heading: 'Hôm nay bạn muốn rèn luyện gì?',
      home_sub: '15 phút gõ và phản xạ mỗi ngày để nhớ sâu 1.061 Hán tự N5 & N4.',
      spotlight_eyebrow: 'CÂU KANJI HÔM NAY',
      spotlight_reading: 'Cách đọc: {0}',
      spotlight_meta: 'Tự động chọn ngẫu nhiên mỗi ngày • JLPT N5/N4',
      spotlight_ask_ai: 'Hỏi AI',
      spotlight_practice_word: 'Luyện tập từ này',
      card_flashcard_eyebrow: 'Học mới & ghi nhớ',
      card_flashcard_title: 'Học Hán tự (Flashcard 3D)',
      card_flashcard_desc: 'Lật thẻ 3D trực quan, nghe phát âm chuẩn Tokyo, đánh dấu Đã nhớ / Chưa nhớ và tự đồng bộ với App.',
      card_flashcard_cta: 'Bắt đầu học Flashcard',
      card_practice_eyebrow: 'Kiểm tra tốc độ',
      card_practice_title: 'Luyện phản xạ (Kiểm tra)',
      card_practice_desc: '3 chế độ bài thi giống App: Gõ Hiragana, Trắc nghiệm 4 đáp án hoặc Phản xạ toàn diện.',
      card_practice_cta: 'Vào phòng luyện tập',
      home_topics_title: 'Chủ đề Hán tự · Học & Luyện tập',
      home_topics_sub: 'Chọn chủ đề để học bằng Flashcard hoặc làm bài kiểm tra phản xạ ngay.',
      home_view_all_topics: 'Xem toàn bộ chủ đề',
      home_guide_eyebrow: 'Cẩm nang tự học JLPT',
      home_guide_title: 'Phương pháp chinh phục 1.061 Hán tự N5/N4 & 214 Bộ thủ',
      home_guide_desc: 'Tìm hiểu cách phân biệt Onyomi – Kunyomi, bảng 12 bộ thủ Khang Hy cốt lõi, các cặp Kanji dễ nhầm lẫn trong đề thi JLPT và lộ trình luyện phản xạ 15 phút mỗi ngày.',
      home_guide_cta: 'Đọc cẩm nang',
      footer_guide: 'Cẩm nang Kanji',
      footer_about: 'Giới thiệu',
      footer_terms: 'Điều khoản dịch vụ',
      footer_privacy: 'Chính sách quyền riêng tư',
      footer_contact: 'Liên hệ & Hỗ trợ',

      // Vocab & Flashcards
      vocab_title: 'Thư viện Từ vựng & Flashcard',
      vocab_sub: 'Tra cứu 1.061 chữ Hán N5/N4 & 214 Bộ thủ hoặc học bằng thẻ 3D.',
      vocab_words_count: '{0} từ',
      vocab_btn_cards: 'Học thẻ',
      vocab_btn_practice: 'Luyện tập',
      search_found: 'Tìm thấy {0} từ phù hợp',
      topic_words: '{0} từ',
      vocab_section_radicals: '214 Bộ thủ Khang Hy',
      vocab_section_level: 'Trình độ JLPT {0}',
      vocab_count_radicals: '{0} nhóm bộ thủ',
      vocab_count_topics: '{0} chủ đề',
      vocab_learned_count: 'Đã thuộc {0}/{1}',
      examples_prefix: 'Ví dụ: {0}',
      back: 'Quay lại',
      fc_tap_flip: 'Chạm thẻ để xem nghĩa & cách đọc',
      fc_back_label: 'Mặt sau · Ý nghĩa & Cách đọc',
      fc_rate_note: 'Đánh giá mức độ ghi nhớ của bạn để tự động lưu lên mây',
      fc_forgot: 'Chưa nhớ (Ôn lại)',
      fc_remembered: 'Đã nhớ',
      fc_done_title: 'Hoàn thành bộ thẻ!',
      fc_stat_total: 'Tổng số thẻ',
      fc_stat_remembered: 'Đã thuộc',
      fc_stat_forgotten: 'Chưa nhớ',
      fc_missed_list: 'Từ cần ôn lại trong lượt này',
      fc_restart_all: 'Ôn lại hết từ đầu',
      fc_pick_other: 'Chọn chủ đề khác',

      // Practice Hub & Arena
      pr_eyebrow: 'Phòng luyện phản xạ',
      pr_choose_mode: 'Chọn chế độ rèn luyện',
      pr_choose_sub: 'Luyện gõ Hiragana và phản xạ nghĩa chuẩn tốc độ thi JLPT.',
      pr_higa_title: 'Gõ Hiragana',
      pr_higa_desc: 'Nhìn chữ Hán, gõ nhanh cách đọc Hiragana (hỗ trợ tự động đổi Romaji).',
      pr_select_mode: 'Chọn chế độ này',
      pr_mc_title: 'Trắc nghiệm 4 đáp án',
      pr_mc_desc: 'Nhìn chữ Hán, chọn nhanh nghĩa đúng trong 4 phương án (phím 1-4).',
      pr_recommended: 'Khuyên dùng',
      pr_combo_title: 'Phản xạ toàn diện',
      pr_combo_desc: 'Kết hợp gõ đúng cách đọc Hiragana rồi chọn tiếp nghĩa tiếng Việt/Anh.',
      pr_pick_level_topic: 'Chọn cấp độ & chủ đề luyện tập',
      mode_higa: 'Gõ Hiragana',
      mode_mc: 'Trắc nghiệm 4 nghĩa',
      mode_combo: 'Phản xạ toàn diện',
      question_counter: 'Câu {0} / {1}',
      tap_listen: 'Nhấn để nghe',
      correct_reading: 'Đáp án đúng: {0}',
      hint_first_char: 'Gợi ý: Bắt đầu bằng "{0}" ({1})',
      pr_done_title: 'Hoàn thành bài rèn luyện!',
      pr_done_sub: 'Bạn đã hoàn thành lượt luyện tập với kết quả xuất sắc.',
      pr_pick_other: 'Chọn bài khác',

      // Profile & Auth
      profile_google_sync_btn: 'Đăng nhập Google để đồng bộ App & Web',
      profile_logout: 'Đăng xuất',
      profile_default_name: 'Học viên Kanji Kachi',
      profile_short_name: 'Học viên',
      profile_guest_email: 'Chưa đăng nhập · Dữ liệu đang lưu tạm trên trình duyệt',
      profile_synced_badge: 'Đã đồng bộ App & Web',
      profile_unsynced_badge: 'Chưa đồng bộ',
      profile_guest_label: 'Khách (chưa đăng nhập)',
      profile_ai_today: 'Token AI Gia sư hôm nay',
      profile_ai_limit: 'Hạn mức: 12.000 token / ngày',
      profile_ai_reset: 'Làm mới lúc 00:00 (UTC+7)',
      profile_token_gate_desc: 'Vui lòng đăng nhập Google để sử dụng Gia sư Kanji AI và theo dõi hạn mức 12.000 token/ngày.',
      profile_settings_row: 'Cài đặt giọng nói & tiện ích',
      profile_settings_sub: 'Giao diện sáng/tối, tốc độ & âm lượng giọng Tokyo Neural',
      profile_reset_row: 'Đặt lại toàn bộ tiến độ',
      profile_reset_sub: 'Xóa sạch từ đã thuộc, từ cần ôn lại và bắt đầu lại từ đầu',
      profile_info_header: 'Thông tin & Trợ giúp',
      profile_support_title: 'Trung tâm hỗ trợ & FAQ',
      profile_support_sub: 'Hướng dẫn đồng bộ App ⇄ Web, phát âm, liên hệ',
      profile_about_title: 'Về Kanji Kachi',
      profile_about_sub: 'Ý nghĩa, phương pháp học & thông tin nhà phát triển',
      profile_terms_title: 'Điều khoản dịch vụ',
      profile_terms_sub: 'Quy định sử dụng nền tảng Kanji Kachi',
      profile_privacy_title: 'Chính sách quyền riêng tư',
      profile_privacy_sub: 'Cam kết bảo vệ dữ liệu tài khoản & quyền riêng tư',
      profile_licenses_title: 'Giấy phép mã nguồn mở',
      profile_licenses_sub: 'Các thư viện và phông chữ được sử dụng',

      // Jump Grid Modal
      grid_title: 'Bảng danh sách câu hỏi',
      grid_correct: 'Đã đúng',
      grid_wrong: 'Sai/Đánh dấu',
      grid_unvisited: 'Chưa làm',
      grid_close: 'Đóng bảng chọn',

      // Settings Modal
      settings_title: 'Cài đặt luyện tập',
      settings_utils: 'Tiện ích học tập',
      settings_dark_title: 'Giao diện tối (Dark Mode)',
      settings_dark_sub: 'Tông mực Sumi đêm êm dịu bảo vệ mắt',
      settings_autospeak_title: 'Tự động phát âm khi chuyển từ',
      settings_autospeak_sub: 'Giọng Tokyo Neural chuẩn (kèm dự phòng trình duyệt)',
      settings_romaji_title: 'Tự động chuyển Romaji ➔ Hiragana',
      settings_romaji_sub: "Gõ 'sakana' tự chuyển 'さかな'",
      settings_voice_title: 'Cài đặt giọng nói',
      settings_test_voice: 'Nghe thử',
      settings_speed: 'Tốc độ đọc (Chậm ⇄ Nhanh)',
      settings_speed_slow: '0.5x Chậm',
      settings_speed_normal: '1.0x Chuẩn',
      settings_speed_fast: '1.5x Nhanh',
      settings_volume: 'Âm lượng giọng đọc (Nhỏ ⇄ To)',
      settings_vol_mute: '0% Tắt',
      settings_vol_mid: '50% Vừa',
      settings_vol_max: '100% To nhất',
      settings_jp_voice: 'Giọng đọc tiếng Nhật',
      settings_save_close: 'Lưu & Đóng cài đặt',
      voice_default_neural: 'Giọng Tokyo Neural · Nanami (Mặc định)',
      voice_device_prefix: 'Giọng máy',

      // AI Tutor & Token Modal
      tutor_title: 'Gia sư Kanji AI',
      tutor_sub: 'Giải nghĩa, âm Hán & ngữ pháp',
      tutor_login_title: 'Đăng nhập để dùng Gia sư AI',
      tutor_login_desc: 'Vui lòng đăng nhập bằng tài khoản Google để trò chuyện với Gia sư Kanji AI và nhận 12.000 token miễn phí/ngày.',
      tutor_login_btn: 'Đăng nhập bằng Google',
      tutor_welcome_title: 'Konnichiwa! Mình là Gia sư Kanji AI ✨',
      tutor_welcome_desc: 'Hôm nay bạn muốn hiểu thêm gì về 1.061 Hán tự N5/N4, bộ thủ hay ví dụ câu? Hãy chọn gợi ý bên dưới hoặc gõ câu hỏi nhé!',
      tutor_viewing: 'Đang xem:',
      tutor_chip_usage: '💡 Cách dùng',
      tutor_chip_example: '📝 Câu ví dụ',
      tutor_chip_grammar: '📖 Ngữ pháp',
      preset_usage: 'Từ này thường được dùng trong tình huống nào?',
      preset_example: 'Cho mình một câu ví dụ với từ này, kèm nghĩa tiếng Việt.',
      preset_grammar: 'Giải thích một cấu trúc ngữ pháp liên quan và đặt câu.',
      tutor_placeholder: 'Hỏi gia sư Kanji (vd: cách dùng chữ 桜, ngữ pháp です)...',
      tutor_placeholder_word: 'Hỏi về "{0}"...',
      token_modal_title: 'Hạn mức Token AI',
      token_remaining_today: 'Còn lại hôm nay',
      token_used: 'Đã sử dụng',
      token_account: 'Tài khoản',
      token_reset_note: 'Tự động nạp lại 12.000 token lúc 00:00 (UTC+7)',
      ai_reset_countdown: 'Làm mới sau {0} giờ {1} phút',
      ai_token_login_alert: 'Vui lòng đăng nhập Google để xem hạn mức Token AI của bạn.',
      ai_rate_limit: 'Vui lòng đợi {0} giây trước khi gửi câu hỏi tiếp theo.',
      ai_typing: 'Gia sư AI đang soạn câu trả lời...',
      ai_quota_out_title: 'Hạn mức token hôm nay đã hết!',
      ai_quota_out_desc: 'Bạn đã sử dụng hết 12.000 token AI hôm nay. Hạn mức sẽ tự động làm mới vào lúc 00:00 (UTC+7).',
      ai_error_title: 'Gia sư AI tạm thời gián đoạn kết nối',
      ai_error_retry: 'Vui lòng thử gửi lại câu hỏi sau vài giây nhé!',

      // Consent Modal & Generic
      consent_title: 'Chào mừng đến với Kanji Kachi',
      consent_sub: 'Vui lòng xác nhận điều khoản trước khi bắt đầu',
      consent_terms: 'Điều khoản dịch vụ',
      consent_privacy: 'Chính sách quyền riêng tư',
      consent_agree_label: 'Tôi đã đọc và đồng ý với Điều khoản dịch vụ và Chính sách quyền riêng tư của Kanji Kachi.',
      consent_dont_show: 'Không hiển thị lại thông báo này ở các lần truy cập sau.',
      consent_start: 'Đồng ý & Bắt đầu học',
      close: 'Đóng',
      confirm_finish_early: 'Bạn có chắc muốn kết thúc bài thi và xem kết quả tổng kết?',
      confirm_exit_practice: 'Bạn có muốn thoát về màn hình chọn chủ đề không?',
      confirm_reset_progress: 'CẢNH BÁO: Thao tác này sẽ đặt lại toàn bộ từ đã thuộc và từ cần ôn lại. Bạn có chắc chắn không?',
      alert_reset_done: 'Đã đặt lại tiến độ thành công!',
      confirm_signout: 'Bạn có chắc muốn đăng xuất khỏi tài khoản Google?'
    },

    en: {
      // Sidebar & Navigation
      nav_home: 'Home',
      nav_practice: 'Reflex Practice',
      nav_vocab: 'Vocab & Flashcards',
      nav_profile: 'Profile',
      nav_start_here: 'Start Here',
      nav_flashcards: 'Flashcards',
      nav_ai_tutor: 'AI Kanji Tutor',
      nav_roadmap: 'Your Roadmap',
      nav_n5: 'JLPT N5 (Beginner)',
      nav_n4: 'JLPT N4 (Elementary)',
      nav_radicals: '214 Kangxi Radicals',
      sb_download_title: 'DOWNLOAD & LINKS',
      sb_beta_badge: 'Beta',
      sb_beta_note: 'Closed Beta · Coming Soon',
      sb_beta_alert: 'The Kanji Kachi mobile app on Google Play is currently in Closed Beta testing and will be released publicly soon. Sign in with Google on the Web to sync your progress automatically once the app launches!',

      // Top Header
      search_placeholder: 'Search Kanji, Hiragana, or meaning...',
      auth_signin: 'Sign in',

      // Home View
      home_eyebrow: 'Mindful Practice',
      home_heading: 'What would you like to practice today?',
      home_sub: '15 minutes of typing and reflex drills a day to master 1,061 JLPT N5 & N4 Kanji.',
      spotlight_eyebrow: "TODAY'S KANJI",
      spotlight_reading: 'Reading: {0}',
      spotlight_meta: 'Daily curated pick • JLPT N5/N4',
      spotlight_ask_ai: 'Ask AI',
      spotlight_practice_word: 'Practice this word',
      card_flashcard_eyebrow: 'Learn & Memorize',
      card_flashcard_title: 'Study Kanji (3D Flashcards)',
      card_flashcard_desc: 'Flip 3D cards, listen to authentic Tokyo pronunciation, track Mastered / Needs Review, and sync with the mobile app.',
      card_flashcard_cta: 'Start Flashcards',
      card_practice_eyebrow: 'Speed Drills',
      card_practice_title: 'Reflex Practice (Quiz)',
      card_practice_desc: '3 study modes matching the app: Type Hiragana, 4-Choice Quiz, or Full Reflex Combo.',
      card_practice_cta: 'Enter Practice Arena',
      home_topics_title: 'Kanji Topics · Study & Practice',
      home_topics_sub: 'Pick a topic to study with 3D Flashcards or start a reflex quiz immediately.',
      home_view_all_topics: 'View all topics',
      home_guide_eyebrow: 'JLPT Self-Study Guide',
      home_guide_title: 'How to Master 1,061 N5/N4 Kanji & 214 Kangxi Radicals',
      home_guide_desc: 'Learn how Onyomi & Kunyomi work, explore the 12 core Kangxi radicals, avoid commonly confused JLPT Kanji pairs, and follow a 15-minute daily reflex routine.',
      home_guide_cta: 'Read Study Guide',
      footer_guide: 'Kanji Guide',
      footer_about: 'About',
      footer_terms: 'Terms of Service',
      footer_privacy: 'Privacy Policy',
      footer_contact: 'Contact & Support',

      // Vocab & Flashcards
      vocab_title: 'Vocabulary & Flashcards Library',
      vocab_sub: 'Browse 1,061 JLPT N5/N4 Kanji & 214 Radicals or study with 3D Flashcards.',
      vocab_words_count: '{0} words',
      vocab_btn_cards: 'Flashcards',
      vocab_btn_practice: 'Practice',
      search_found: 'Found {0} matching words',
      topic_words: '{0} words',
      vocab_section_radicals: '214 Kangxi Radicals',
      vocab_section_level: 'JLPT {0} Level',
      vocab_count_radicals: '{0} radical groups',
      vocab_count_topics: '{0} topics',
      vocab_learned_count: 'Mastered {0}/{1}',
      examples_prefix: 'Examples: {0}',
      back: 'Back',
      fc_tap_flip: 'Tap card to reveal meaning & reading',
      fc_back_label: 'Back · Meaning & Reading',
      fc_rate_note: 'Rate your recall to automatically save & cloud-sync',
      fc_forgot: 'Needs Review',
      fc_remembered: 'Mastered',
      fc_done_title: 'Deck Completed!',
      fc_stat_total: 'Total Cards',
      fc_stat_remembered: 'Mastered',
      fc_stat_forgotten: 'Needs Review',
      fc_missed_list: 'Words to review from this session',
      fc_restart_all: 'Restart Full Deck',
      fc_pick_other: 'Choose Another Topic',

      // Practice Hub & Arena
      pr_eyebrow: 'Reflex Practice Arena',
      pr_choose_mode: 'Choose a practice mode',
      pr_choose_sub: 'Train instant Hiragana typing and meaning recall for JLPT speed.',
      pr_higa_title: 'Type Hiragana',
      pr_higa_desc: 'See the Kanji and type its Hiragana reading quickly (auto Romaji conversion).',
      pr_select_mode: 'Select this mode',
      pr_mc_title: '4-Choice Quiz',
      pr_mc_desc: 'See the Kanji and pick the right meaning from 4 choices (keys 1-4).',
      pr_recommended: 'Recommended',
      pr_combo_title: 'Full Reflex Combo',
      pr_combo_desc: 'Type the Hiragana reading first, then confirm its meaning.',
      pr_pick_level_topic: 'Select level & topics to practice',
      mode_higa: 'Type Hiragana',
      mode_mc: '4-Choice Quiz',
      mode_combo: 'Full Reflex Combo',
      question_counter: 'Question {0} / {1}',
      tap_listen: 'Tap to listen',
      correct_reading: 'Correct reading: {0}',
      hint_first_char: 'Hint: Starts with "{0}" ({1})',
      pr_done_title: 'Practice Complete!',
      pr_done_sub: 'Great job finishing this reflex training session.',
      pr_pick_other: 'Pick Another Drill',

      // Profile & Auth
      profile_google_sync_btn: 'Sign in with Google to sync App & Web',
      profile_logout: 'Sign out',
      profile_default_name: 'Kanji Kachi Learner',
      profile_short_name: 'Learner',
      profile_guest_email: 'Not signed in · Progress saved locally in browser',
      profile_synced_badge: 'Synced App & Web',
      profile_unsynced_badge: 'Not synced',
      profile_guest_label: 'Guest (not signed in)',
      profile_ai_today: "Today's AI Tutor Tokens",
      profile_ai_limit: 'Daily quota: 12,000 tokens / day',
      profile_ai_reset: 'Resets at 00:00 (UTC+7)',
      profile_token_gate_desc: 'Please sign in with Google to use the AI Kanji Tutor and track your 12,000 daily tokens.',
      profile_settings_row: 'Voice & Study Settings',
      profile_settings_sub: 'Light/Dark theme, Tokyo Neural voice speed & volume',
      profile_reset_row: 'Reset All Progress',
      profile_reset_sub: 'Clear mastered & review lists and start fresh',
      profile_info_header: 'Info & Support',
      profile_support_title: 'Help Center & FAQ',
      profile_support_sub: 'App ⇄ Web sync guide, audio troubleshooting, contact',
      profile_about_title: 'About Kanji Kachi',
      profile_about_sub: 'Mission, methodology & developer info',
      profile_terms_title: 'Terms of Service',
      profile_terms_sub: 'Kanji Kachi platform terms of use',
      profile_privacy_title: 'Privacy Policy',
      profile_privacy_sub: 'How we protect your account data & privacy',
      profile_licenses_title: 'Open Source Licenses',
      profile_licenses_sub: 'Libraries and fonts used in this app',

      // Jump Grid Modal
      grid_title: 'Question Navigator',
      grid_correct: 'Correct',
      grid_wrong: 'Missed / Flagged',
      grid_unvisited: 'Unanswered',
      grid_close: 'Close Navigator',

      // Settings Modal
      settings_title: 'Study Settings',
      settings_utils: 'Learning Utilities',
      settings_dark_title: 'Dark Mode',
      settings_dark_sub: 'Calm Sumi-ink dark palette for comfortable reading',
      settings_autospeak_title: 'Auto-pronounce on next word',
      settings_autospeak_sub: 'Tokyo Neural Japanese audio (with browser TTS fallback)',
      settings_romaji_title: 'Auto-convert Romaji ➔ Hiragana',
      settings_romaji_sub: "Typing 'sakana' converts to 'さかな'",
      settings_voice_title: 'Voice Settings',
      settings_test_voice: 'Test Voice',
      settings_speed: 'Speech Speed (Slow ⇄ Fast)',
      settings_speed_slow: '0.5x Slow',
      settings_speed_normal: '1.0x Normal',
      settings_speed_fast: '1.5x Fast',
      settings_volume: 'Voice Volume (Mute ⇄ Max)',
      settings_vol_mute: '0% Mute',
      settings_vol_mid: '50% Medium',
      settings_vol_max: '100% Max',
      settings_jp_voice: 'Japanese Voice',
      settings_save_close: 'Save & Close',
      voice_default_neural: 'Tokyo Neural · Nanami (Default)',
      voice_device_prefix: 'Device voice',

      // AI Tutor & Token Modal
      tutor_title: 'AI Kanji Tutor',
      tutor_sub: 'Meanings, radicals & grammar',
      tutor_login_title: 'Sign in to use AI Tutor',
      tutor_login_desc: 'Sign in with your Google account to chat with the AI Kanji Tutor and receive 12,000 free tokens/day.',
      tutor_login_btn: 'Sign in with Google',
      tutor_welcome_title: "Konnichiwa! I'm your AI Kanji Tutor ✨",
      tutor_welcome_desc: 'What would you like to explore about the 1,061 JLPT N5/N4 Kanji, radicals, or example sentences? Pick a quick prompt below or type your question!',
      tutor_viewing: 'Viewing:',
      tutor_chip_usage: '💡 Usage',
      tutor_chip_example: '📝 Example',
      tutor_chip_grammar: '📖 Grammar',
      preset_usage: 'In what situations is this word commonly used?',
      preset_example: 'Give me a natural example sentence using this word, with an English translation.',
      preset_grammar: 'Explain a related JLPT grammar pattern and provide an example sentence.',
      tutor_placeholder: 'Ask AI Kanji Tutor (e.g., usage of 桜, grammar です)...',
      tutor_placeholder_word: 'Ask about "{0}"...',
      token_modal_title: 'AI Token Quota',
      token_remaining_today: 'Remaining today',
      token_used: 'Used',
      token_account: 'Account',
      token_reset_note: 'Auto-refills 12,000 tokens daily at 00:00 (UTC+7)',
      ai_reset_countdown: 'Resets in {0}h {1}m',
      ai_token_login_alert: 'Please sign in with Google to view your AI Token quota.',
      ai_rate_limit: 'Please wait {0}s before sending another question.',
      ai_typing: 'AI Tutor is writing a response...',
      ai_quota_out_title: 'Daily token quota reached!',
      ai_quota_out_desc: 'You have used all 12,000 AI tokens for today. Your quota will automatically reset at 00:00 (UTC+7).',
      ai_error_title: 'AI Tutor temporarily disconnected',
      ai_error_retry: 'Please try sending your question again in a few seconds!',

      // Consent Modal & Generic
      consent_title: 'Welcome to Kanji Kachi',
      consent_sub: 'Please review and accept our terms before starting',
      consent_terms: 'Terms of Service',
      consent_privacy: 'Privacy Policy',
      consent_agree_label: 'I have read and agree to the Terms of Service and Privacy Policy of Kanji Kachi.',
      consent_dont_show: "Don't show this notice again on future visits.",
      consent_start: 'Agree & Start Learning',
      close: 'Close',
      confirm_finish_early: 'Are you sure you want to finish early and view your results?',
      confirm_exit_practice: 'Return to the topic selection screen?',
      confirm_reset_progress: 'WARNING: This will clear all mastered and review-needed words. Are you sure?',
      alert_reset_done: 'Progress has been reset!',
      confirm_signout: 'Are you sure you want to sign out of your Google account?'
    }
  };

  function getAppLang() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && (parsed.lang === 'en' || parsed.lang === 'vi')) {
          return parsed.lang;
        }
      }
    } catch (e) {}
    return 'vi';
  }

  function t(key, ...args) {
    const lang = getAppLang();
    const table = DICT[lang] || DICT.vi;
    let str = Object.prototype.hasOwnProperty.call(table, key)
      ? table[key]
      : (Object.prototype.hasOwnProperty.call(DICT.vi, key) ? DICT.vi[key] : key);
    if (args && args.length > 0) {
      args.forEach((arg, idx) => {
        str = str.replace(new RegExp(`\\{${idx}\\}`, 'g'), String(arg ?? ''));
      });
    }
    return str;
  }

  function applyStaticI18n(lang) {
    const activeLang = lang === 'en' ? 'en' : (lang === 'vi' ? 'vi' : getAppLang());
    document.documentElement.lang = activeLang;

    const langLabel = document.getElementById('header-lang-label');
    if (langLabel) langLabel.textContent = activeLang.toUpperCase();

    document.title = activeLang === 'en'
      ? 'Kanji Kachi (漢字勝ち) · JLPT N5 & N4 Kanji Reflex Trainer'
      : 'Kanji Kachi (漢字勝ち) · Luyện phản xạ Hán tự N5 & N4';

    const table = DICT[activeLang] || DICT.vi;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && Object.prototype.hasOwnProperty.call(table, key)) {
        el.textContent = table[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && Object.prototype.hasOwnProperty.call(table, key)) {
        el.placeholder = table[key];
      }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (key && Object.prototype.hasOwnProperty.call(table, key)) {
        el.title = table[key];
      }
    });
  }

  function localizedMeaning(item) {
    if (!item) return '';
    return getAppLang() === 'en' ? (item.meaningEn || item.meaning || '') : (item.meaning || '');
  }

  function localizedTopicTitle(topic) {
    if (!topic) return '';
    return getAppLang() === 'en' ? (topic.titleEn || topic.title || '') : (topic.title || '');
  }

  function localizedReading(item) {
    if (!item) return '';
    const raw = item.displayReading || item.reading || '';
    if (getAppLang() === 'en' && raw.startsWith('Bộ ')) {
      return raw.replace(/^Bộ\s+/i, 'Radical ');
    }
    return raw;
  }

  window.KANJI_I18N = DICT;
  window.getAppLang = getAppLang;
  window.t = t;
  window.applyStaticI18n = applyStaticI18n;
  window.localizedMeaning = localizedMeaning;
  window.localizedTopicTitle = localizedTopicTitle;
  window.localizedReading = localizedReading;
})();
