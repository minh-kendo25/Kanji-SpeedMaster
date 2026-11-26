// Kanji Kachi - Web Edition Bilingual Legal & Support Content (VI & EN)

window.KANJI_LEGAL_CONTENT = {
  vi: {
    about: {
      title: "Về Kanji Kachi",
      markdown: `
### KANJI KACHI (漢字勝ち)
**Phiên bản:** Web Edition v2.0
**Mã bản dựng:** 2026.11
**Nhà phát triển:** Phạm Hoàng Bảo Minh

### 1. Ý nghĩa & Tầm nhìn
「漢字勝ち」(Kanji Kachi) mang thông điệp **"Chiến thắng và Chinh phục Hán tự"**. Nền tảng ra đời nhằm giải quyết rào cản lớn nhất của người học tiếng Nhật: nhớ mặt chữ Kanji nhưng hay quên cách đọc Hiragana (Onyomi, Kunyomi) và ý nghĩa trong ngữ cảnh thực tế.

### 2. Phương pháp học tập
- **Học thẻ ghi nhớ (Flashcard 3D):** Lật thẻ trực quan theo từng chủ đề, nghe phát âm Tokyo Neural bản xứ và tự đánh giá Đã nhớ / Chưa nhớ.
- **Luyện phản xạ (Kiểm tra):** 3 chế độ kiểm tra tốc độ cao (Gõ Hiragana, Trắc nghiệm nhanh, Phản xạ toàn diện) giúp liên kết trực tiếp giữa mặt chữ, âm đọc và ý nghĩa.
- **Gia sư Kanji AI:** Trợ lý AI đọc hiểu trực tiếp từ bạn đang học trên màn hình để giải thích cách dùng, ví dụ câu và ngữ pháp tức thì.
- **Lộ trình rõ ràng:** 350 từ vựng N5 (8 chủ đề), 711 từ vựng N4 (11 chủ đề) và 214 Bộ thủ Khang Hy.

### 3. Công nghệ phát triển (Web Edition)
- **Giao diện Web:** HTML5, Tailwind CSS và JavaScript ES Modules theo ngôn ngữ thiết kế Modern Sumi & Washi (hỗ trợ Sáng/Tối & Song ngữ Việt/Anh).
- **Đồng bộ đám mây:** Google Firebase Authentication & Cloud Firestore đồng bộ thời gian thực 2 chiều giữa Web và Ứng dụng di động Kanji Kachi.
- **Trí tuệ nhân tạo & Bảo mật:** Firebase AI Logic (Gemini) tích hợp bảo vệ Firebase App Check (Google Cloud Fraud Defense) cùng các tiêu chuẩn bảo mật HTTP (CSP, HSTS).
`
    },
    privacy: {
      title: "Chính sách quyền riêng tư",
      markdown: `
### CHÍNH SÁCH QUYỀN RIÊNG TƯ (PRIVACY POLICY)
**Cập nhật lần cuối:** 26/11/2026
**Áp dụng cho:** Nền tảng Web và Ứng dụng Kanji Kachi

### 1. Cam kết chung về quyền riêng tư
Kanji Kachi ("chúng tôi") cam kết bảo vệ sự riêng tư và bảo mật thông tin cá nhân của người dùng ("bạn").

### 2. Dữ liệu chúng tôi thu thập
- **Thông tin tài khoản (Google Sign-In):** Địa chỉ Email, Tên hiển thị, Ảnh đại diện và Mã định danh Firebase UID qua giao thức OAuth 2.0 an toàn.
- **Dữ liệu tiến trình học tập:** Danh sách ID từ vựng đã ghi nhớ, từ cần ôn lại, từ học gần nhất và hạn mức token AI theo ngày để đồng bộ giữa Web và App điện thoại.
- **TUYỆT ĐỐI KHÔNG thu thập:** KHÔNG truy cập danh bạ, tin nhắn, GPS, micro, camera, số CCCD/CMND hay thẻ ngân hàng.

### 3. Bảo mật & Lưu trữ
- Dữ liệu cục bộ lưu trên trình duyệt (\`localStorage\`) và đồng bộ lên Google Cloud Firestore (mã hóa HTTPS/TLS & Encryption at Rest).
- **Firestore Security Rules:** Chỉ duy nhất tài khoản sở hữu UID tương ứng mới có quyền đọc/ghi dữ liệu của chính mình.

### 4. Dịch vụ bên thứ ba
- **Google Firebase (Google LLC):** Xác thực Google Sign-In, Cloud Firestore, Firebase AI Logic (Gemini) và Firebase App Check (Google Cloud Fraud Defense).
- **Google AdSense (Google LLC):** Hiển thị quảng cáo trên nền tảng Web. Kanji Kachi không gửi email hay tiến độ học cho AdSense.

### 5. Quyền của người dùng & Liên hệ
- Bạn có thể đặt lại toàn bộ tiến độ bất cứ lúc nào trong trang **Cá nhân**.
- Yêu cầu xóa vĩnh viễn dữ liệu trong vòng 48 giờ qua email: **phamhoangbaominh2005@gmail.com** (Phạm Hoàng Bảo Minh).
`
    },
    terms: {
      title: "Điều khoản dịch vụ",
      markdown: `
### ĐIỀU KHOẢN DỊCH VỤ (TERMS OF SERVICE)
**Cập nhật lần cuối:** 26/11/2026
**Áp dụng cho:** Người sử dụng nền tảng Web & Ứng dụng Kanji Kachi

### 1. Chấp thuận điều khoản
Bằng việc truy cập và sử dụng **Kanji Kachi**, bạn đồng ý tuân thủ các Điều khoản dịch vụ và Chính sách quyền riêng tư này.

### 2. Quyền sử dụng cá nhân
Chúng tôi cấp cho bạn quyền sử dụng cá nhân, phi thương mại phục vụ mục đích học tập tiếng Nhật trên trình duyệt Web và thiết bị cá nhân.

### 3. Tài khoản & Bảo mật
- Bạn chịu trách nhiệm bảo mật tài khoản Google cá nhân (hãy chủ động đăng xuất nếu dùng máy tính công cộng).
- Mọi lượt sử dụng Gia sư Kanji AI và đồng bộ dữ liệu gắn liền với tài khoản của bạn.

### 4. Quyền sở hữu trí tuệ
Toàn bộ mã nguồn, giao diện UI/UX phong cách Modern Sumi & Washi và cấu trúc hệ thống thuộc quyền sở hữu của tác giả **Phạm Hoàng Bảo Minh**.

### 5. Hành vi bị nghiêm cấm
- Sao chép, thu thập dữ liệu tự động (bot, scraper) hoặc can thiệp trái phép vào hệ thống Firebase / API.
- Lạm dụng Gia sư Kanji AI vào mục đích ngoài học tập tiếng Nhật hoặc gây quá tải hệ thống.

### 6. Miễn trừ trách nhiệm & Liên hệ
Kanji Kachi được cung cấp trên nguyên tắc **"nguyên trạng" (AS IS)**. Mọi thắc mắc vui lòng gửi về: **phamhoangbaominh2005@gmail.com**.
`
    },
    support: {
      title: "Trung tâm hỗ trợ & FAQ",
      markdown: `
### TRUNG TÂM HỖ TRỢ & GIẢI ĐÁP (FAQ)

### 1. Làm thế nào để đồng bộ dữ liệu giữa Web và App điện thoại?
Chỉ cần bấm **"Đăng nhập Google"** trên Web bằng **đúng tài khoản Gmail** bạn đang dùng trên ứng dụng Kanji Kachi điện thoại. Toàn bộ từ đã nhớ và từ cần ôn lại sẽ tự động đồng bộ 2 chiều qua Google Cloud Firestore!

### 2. Hạn mức Token Gia sư Kanji AI hoạt động như thế nào?
Bạn cần đăng nhập Google để sử dụng Gia sư AI. Mỗi tài khoản có **12.000 token miễn phí mỗi ngày**, tự động làm mới vào **00:00 (UTC+7)**. Bấm **View Token** dưới khung chat để xem đếm ngược làm mới.

### 3. Giọng phát âm tiếng Nhật hoạt động thế nào?
Kanji Kachi Web sử dụng **giọng Tokyo Neural bản xứ (\`Nanami\`)** làm mặc định, chạy đồng nhất trên cả Windows, Android và iOS. Bạn có thể chỉnh tốc độ (\`0.5x–1.5x\`) và âm lượng trong **Cài đặt**.

### 4. Liên hệ & Góp ý
- **Email hỗ trợ:** phamhoangbaominh2005@gmail.com
- **Thời gian phản hồi:** Trong vòng 24 – 48 giờ làm việc.
`
    },
    licenses: {
      title: "Giấy phép mã nguồn mở",
      markdown: `
### GIẤY PHÉP MÃ NGUỒN MỞ (OPEN SOURCE LICENSES)

### 1. Google Firebase JS SDK (v12)
- **Giấy phép:** Apache License, Version 2.0 — Copyright (c) Google LLC.

### 2. Tailwind CSS
- **Giấy phép:** MIT License — Copyright (c) Tailwind Labs, Inc.

### 3. Noto Serif & Plus Jakarta Sans Typography
- **Giấy phép:** SIL Open Font License, Version 1.1 (OFL) — Google Fonts / Adobe Systems.

### 4. Material Symbols Outlined Icons
- **Giấy phép:** Apache License, Version 2.0 — Copyright (c) Google LLC.
`
    }
  },

  en: {
    about: {
      title: "About Kanji Kachi",
      markdown: `
### KANJI KACHI (漢字勝ち)
**Version:** Web Edition v2.0
**Build:** 2026.11
**Developer:** Pham Hoang Bao Minh

### 1. Vision & Meaning
「漢字勝ち」 (*Kanji Kachi*) means **"Conquering Kanji"**. The platform solves the biggest hurdle for Japanese learners: recognizing Kanji characters while remembering their exact Hiragana readings (Onyomi, Kunyomi) and meanings in real contexts.

### 2. Learning Method
- **3D Flashcards:** Interactive topic-based flashcards with native Tokyo Neural audio and Remembered / Review tracking.
- **Reflex Practice (Quiz):** 3 speed-drill modes (Type Hiragana, Quick Multiple Choice, Full Reflex) to wire instant reading and meaning recall.
- **Kanji AI Tutor:** Context-aware AI assistant that reads the Kanji currently on your screen to explain usage, examples, and grammar instantly.
- **Structured Path:** 350 JLPT N5 words (8 topics), 711 JLPT N4 words (11 topics), and 214 Kangxi Radicals.

### 3. Technology Stack (Web Edition)
- **Web UI:** HTML5, Tailwind CSS, and JavaScript ES Modules crafted in the Modern Sumi & Washi design system (Light/Dark Mode & Bilingual VI/EN).
- **Cloud Sync:** Google Firebase Authentication & Cloud Firestore providing real-time 2-way sync between Web and Mobile App.
- **AI & Security:** Firebase AI Logic (Gemini) protected by Firebase App Check (Google Cloud Fraud Defense) and hardened HTTP Security Headers (CSP, HSTS).
`
    },
    privacy: {
      title: "Privacy Policy",
      markdown: `
### PRIVACY POLICY
**Last Updated:** November 26, 2026
**Applies to:** Kanji Kachi Web & Mobile App

### 1. Our Commitment
Kanji Kachi ("we") is committed to protecting your privacy and personal information.

### 2. Information We Collect
- **Account Information (Google Sign-In):** Email address, display name, profile photo URL, and Firebase UID via secure OAuth 2.0.
- **Study Progress:** Remembered Kanji IDs, review-needed IDs, last studied item, and daily AI token usage so your progress stays synced across Web and Mobile.
- **We NEVER collect:** Contacts, SMS, GPS location, microphone, camera, national IDs, or payment card details.

### 3. Storage & Security
- Local browser storage (\`localStorage\`) paired with encrypted Google Cloud Firestore sync (HTTPS/TLS in transit & Encryption at Rest).
- **Strict Firestore Security Rules:** Only the authenticated owner of a UID can read or write their own progress document.

### 4. Third-Party Services
- **Google Firebase (Google LLC):** Authentication, Cloud Firestore, Firebase AI Logic (Gemini), and Firebase App Check (Google Cloud Fraud Defense).
- **Google AdSense (Google LLC):** Displays web advertisements. Kanji Kachi never shares your email or study progress with AdSense.

### 5. Your Rights & Contact
- You may reset all study progress anytime from the **Profile** page.
- Request permanent cloud data deletion within 48 hours via email: **phamhoangbaominh2005@gmail.com** (Data Controller: Pham Hoang Bao Minh).
`
    },
    terms: {
      title: "Terms of Service",
      markdown: `
### TERMS OF SERVICE
**Last Updated:** November 26, 2026
**Applies to:** Users of Kanji Kachi Web & Mobile App

### 1. Acceptance of Terms
By accessing and using **Kanji Kachi**, you agree to be bound by these Terms of Service and our Privacy Policy.

### 2. Personal License
We grant you a personal, non-exclusive, non-commercial license to use Kanji Kachi for Japanese language study.

### 3. Account & Security
- You are responsible for keeping your Google account secure (please sign out on shared computers).
- Cloud sync and daily AI Tutor token quotas are tied to your authenticated account.

### 4. Intellectual Property
All source code, UI/UX design (Modern Sumi & Washi theme), branding, and software architecture belong to **Pham Hoang Bao Minh**.

### 5. Prohibited Conduct
- Automated scraping, bots, reverse engineering, or unauthorized interference with Firebase / API infrastructure.
- Abusing Kanji AI Tutor for non-study spam or quota circumvention.

### 6. Disclaimer & Contact
Kanji Kachi is provided **"AS IS"**. For any questions, contact: **phamhoangbaominh2005@gmail.com**.
`
    },
    support: {
      title: "Help Center & FAQ",
      markdown: `
### HELP CENTER & FAQ

### 1. How do I sync my progress between Web and Mobile App?
Simply click **"Sign in with Google"** on the Web using the **exact same Gmail account** you use on the Kanji Kachi mobile app. Your remembered words and review lists sync automatically in real time via Google Cloud Firestore!

### 2. How does the Kanji AI Tutor token quota work?
Google Sign-In is required to use the AI Tutor. Each account receives **12,000 free tokens per day**, automatically resetting at **00:00 (UTC+7)**. Click **View Token** below the chat input to check your remaining quota and countdown.

### 3. How does Japanese pronunciation work?
Kanji Kachi Web uses native **Tokyo Neural audio (\`Nanami\`)** by default for crisp, consistent pronunciation across Windows, Android, and iOS. You can adjust speed (\`0.5x–1.5x\`) and volume in **Settings**.

### 4. Feedback & Support
- **Email:** phamhoangbaominh2005@gmail.com
- **Response time:** Within 24–48 business hours.
`
    },
    licenses: {
      title: "Open Source Licenses",
      markdown: `
### OPEN SOURCE LICENSES

### 1. Google Firebase JS SDK (v12)
- **License:** Apache License, Version 2.0 — Copyright (c) Google LLC.

### 2. Tailwind CSS
- **License:** MIT License — Copyright (c) Tailwind Labs, Inc.

### 3. Noto Serif & Plus Jakarta Sans Typography
- **License:** SIL Open Font License, Version 1.1 (OFL) — Google Fonts / Adobe Systems.

### 4. Material Symbols Outlined Icons
- **License:** Apache License, Version 2.0 — Copyright (c) Google LLC.
`
    }
  }
};


window.getLegalContent = function (docKey, lang) {
  const activeLang = lang === 'en' ? 'en' : (lang === 'vi' ? 'vi' : (window.getAppLang ? window.getAppLang() : 'vi'));
  const bundle = (window.KANJI_LEGAL_CONTENT && window.KANJI_LEGAL_CONTENT[activeLang]) || (window.KANJI_LEGAL_CONTENT && window.KANJI_LEGAL_CONTENT.vi) || {};
  return bundle[docKey] || null;
};
