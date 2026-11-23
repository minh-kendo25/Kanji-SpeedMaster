// Kanji Kachi - Web Edition Legal & Support Content
// Adapted from mobile app ProfileLegalContent.kt for Web (Google AdSense, Firebase AI Logic, App Check Fraud Defense, Web-App Cloud Sync)

window.KANJI_LEGAL_CONTENT = {
  about: {
    title: "Về Kanji Kachi",
    markdown: `
### KANJI KACHI (漢字勝ち)
**Phiên bản:** Web Edition v2.0
**Mã bản dựng:** 2026.11
**Nhà phát triển:** Phạm Hoàng Bảo Minh

### 1. Ý nghĩa & Tầm nhìn
「漢字勝ち」(Kanji Kachi) mang thông điệp **"Chiến thắng và Chinh phục Hán tự"**. Nền tảng ra đời nhằm giải quyết rào cản lớn nhất của người Việt học tiếng Nhật: nhớ mặt chữ Kanji nhưng hay quên cách đọc Hiragana (Onyomi, Kunyomi) và ý nghĩa trong ngữ cảnh thực tế.

### 2. Phương pháp học tập
- **Học thẻ ghi nhớ (Flashcard 3D):** Lật thẻ trực quan theo từng chủ đề, nghe phát âm tiếng Nhật và tự đánh giá Đã nhớ / Chưa nhớ.
- **Luyện phản xạ (Kiểm tra):** 3 chế độ kiểm tra tốc độ cao (Gõ Hiragana, Trắc nghiệm nhanh, Phản xạ toàn diện) giúp liên kết trực tiếp giữa mặt chữ, âm đọc và nghĩa tiếng Việt.
- **Gia sư Kanji AI:** Trợ lý AI đọc hiểu trực tiếp từ bạn đang học trên màn hình để giải thích cách dùng, ví dụ câu và ngữ pháp tức thì.
- **Lộ trình rõ ràng:** 350 thẻ từ vựng N5 (8 chủ đề), 711 thẻ từ vựng N4 (11 chủ đề) và 214 Bộ thủ Khang Hy.

### 3. Công nghệ phát triển (Web Edition)
- **Giao diện Web:** HTML5, Tailwind CSS và JavaScript ES Modules theo ngôn ngữ thiết kế Modern Sumi & Washi (hỗ trợ Sáng & Tối).
- **Đồng bộ đám mây:** Google Firebase Authentication & Cloud Firestore đồng bộ thời gian thực 2 chiều giữa Web và Ứng dụng di động Kanji Kachi.
- **Trí tuệ nhân tạo & Bảo mật:** Firebase AI Logic (Gemini) tích hợp bảo vệ Firebase App Check (Google Cloud Fraud Defense).
`
  },

  privacy: {
    title: "Chính sách quyền riêng tư",
    markdown: `
### CHÍNH SÁCH QUYỀN RIÊNG TƯ (PRIVACY POLICY)
**Cập nhật lần cuối:** 22/11/2026
**Áp dụng cho:** Nền tảng Web và Ứng dụng Kanji Kachi

### 1. Cam kết chung về quyền riêng tư
Kanji Kachi ("chúng tôi") cam kết bảo vệ sự riêng tư và bảo mật thông tin cá nhân của người dùng ("bạn"). Chính sách này giải thích cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ dữ liệu khi bạn truy cập và sử dụng Kanji Kachi.

### 2. Dữ liệu chúng tôi thu thập
- **Thông tin tài khoản (Google Sign-In):** Khi bạn đăng nhập bằng Google (OAuth 2.0), chúng tôi nhận các thông tin cơ bản: Địa chỉ Email, Tên hiển thị, Ảnh đại diện và Mã định danh Firebase UID.
- **Dữ liệu tiến trình học tập:** Danh sách ID từ vựng đã ghi nhớ (Từ vựng & Luyện tập), danh sách từ cần ôn lại, từ học gần nhất, thời gian hoạt động và hạn mức token AI theo ngày để đồng bộ giữa Web và App điện thoại.
- **Những dữ liệu chúng tôi TUYỆT ĐỐI KHÔNG thu thập:** KHÔNG truy cập danh bạ, tin nhắn, vị trí GPS, micro, camera, số CCCD/CMND hay thông tin thẻ ngân hàng.

### 3. Mục đích sử dụng dữ liệu
- Xác thực tài khoản an toàn và duy trì phiên đăng nhập.
- Tự động đồng bộ tiến độ học tập thời gian thực giữa trình duyệt Web và ứng dụng di động qua Google Cloud Firestore.
- Quản lý hạn mức sử dụng Gia sư Kanji AI công bằng theo từng tài khoản.

### 4. Lưu trữ & Bảo mật
- **Lưu trữ cục bộ & Đám mây:** Dữ liệu tạm được lưu trên trình duyệt (\`localStorage\`) và đồng bộ lên Cloud Firestore (mã hóa HTTPS/TLS khi truyền tải và Encryption at Rest trên hạ tầng Google).
- **Phân quyền nghiêm ngặt (Security Rules):** Chỉ duy nhất tài khoản sở hữu UID tương ứng mới có quyền đọc và ghi dữ liệu học tập của chính mình.

### 5. Dịch vụ bên thứ ba
- **Google Firebase (Google LLC):** Cung cấp xác thực Google Sign-In, cơ sở dữ liệu Cloud Firestore, Firebase AI Logic (Gemini) xử lý câu hỏi Gia sư Kanji và Firebase App Check (Google Cloud Fraud Defense / reCAPTCHA Enterprise) chống bot và spam.
- **Google AdSense (Google LLC):** Hiển thị quảng cáo trên nền tảng Web. Google có thể sử dụng cookie, địa chỉ IP hoặc dữ liệu tương tác để phân phát và đo lường quảng cáo. Kanji Kachi không gửi email hay tiến độ học tập cho AdSense.

### 6. Quyền của người dùng & Liên hệ
- Bạn có thể đặt lại toàn bộ tiến độ học tập bất cứ lúc nào trong trang **Cá nhân**.
- Bạn có quyền yêu cầu xóa vĩnh viễn toàn bộ dữ liệu tài khoản trên máy chủ đám mây trong vòng 48 giờ qua email: **theocean2505@gmail.com** (Người chịu trách nhiệm dữ liệu: **Phạm Hoàng Bảo Minh**).
`
  },

  terms: {
    title: "Điều khoản dịch vụ",
    markdown: `
### ĐIỀU KHOẢN DỊCH VỤ (TERMS OF SERVICE)
**Cập nhật lần cuối:** 22/11/2026
**Áp dụng cho:** Người sử dụng nền tảng Web & Ứng dụng Kanji Kachi

### 1. Chấp thuận điều khoản
Bằng việc truy cập và sử dụng **Kanji Kachi**, bạn đồng ý tuân thủ các Điều khoản dịch vụ và Chính sách quyền riêng tư này. Nếu không đồng ý với bất kỳ điều khoản nào, vui lòng ngừng sử dụng dịch vụ.

### 2. Quyền sử dụng cá nhân
Chúng tôi cấp cho bạn quyền sử dụng cá nhân, không độc quyền, phục vụ mục đích học tập tiếng Nhật phi thương mại trên trình duyệt Web và thiết bị cá nhân.

### 3. Tài khoản & Bảo mật
- Bạn tự chịu trách nhiệm bảo mật tài khoản Google khi sử dụng trên thiết bị cá nhân hoặc máy tính công cộng (vui lòng đăng xuất khi dùng máy chung).
- Mọi dữ liệu đồng bộ và lượt sử dụng Gia sư Kanji AI gắn liền với tài khoản của bạn.

### 4. Quyền sở hữu trí tuệ
- Toàn bộ mã nguồn, giao diện UI/UX phong cách Modern Sumi & Washi, biểu tượng và cấu trúc hệ thống thuộc quyền sở hữu của tác giả **Phạm Hoàng Bảo Minh**.
- Nội dung học thuật gồm 1.061 từ vựng JLPT N5 & N4 cùng 214 Bộ thủ Khang Hy được biên soạn phục vụ mục đích học tập.

### 5. Các hành vi bị nghiêm cấm
- Sao chép, thu thập dữ liệu tự động (bot, scraper) hoặc can thiệp trái phép vào hệ thống Firebase / API.
- Lạm dụng Gia sư Kanji AI vào mục đích ngoài học tập tiếng Nhật hoặc gây quá tải hệ thống.
- Sử dụng nền tảng vào bất kỳ mục đích vi phạm pháp luật Việt Nam và quốc tế.

### 6. Miễn trừ trách nhiệm & Tính sẵn sàng
- Kanji Kachi được cung cấp trên nguyên tắc **"nguyên trạng" (AS IS)**. Kết quả thi JLPT thực tế phụ thuộc vào nỗ lực ôn luyện của từng học viên.
- Câu trả lời từ Gia sư Kanji AI mang tính tham khảo hỗ trợ học tập và có thể thỉnh thoảng cần đối chiếu thêm với giáo trình chuẩn.
- Chúng tôi không chịu trách nhiệm đối với gián đoạn ngoài tầm kiểm soát từ nhà mạng hoặc hạ tầng máy chủ đám mây.

### 7. Luật điều chỉnh & Liên hệ
Các điều khoản này được điều chỉnh theo pháp luật nước Cộng hòa Xã hội Chủ nghĩa Việt Nam. Mọi thắc mắc vui lòng gửi về: **theocean2505@gmail.com**.
`
  },

  support: {
    title: "Trung tâm hỗ trợ & FAQ",
    markdown: `
### TRUNG TÂM HỖ TRỢ & GIẢI ĐÁP (FAQ)

### 1. Làm thế nào để đồng bộ dữ liệu giữa Web và App điện thoại?
Chỉ cần bấm **"Đăng nhập Google"** trên Web bằng **đúng tài khoản Gmail** bạn đang dùng trên ứng dụng Kanji Kachi điện thoại. Toàn bộ danh sách từ đã nhớ, từ cần ôn lại và tiến độ sẽ tự động đồng bộ 2 chiều theo thời gian thực qua Google Cloud Firestore!

### 2. Hạn mức Token Gia sư Kanji AI hoạt động như thế nào?
Mỗi tài khoản có **12.000 token AI miễn phí mỗi ngày**, tự động làm mới vào **00:00 (UTC+7)**. Bạn có thể bấm nút **View Token** ngay dưới khung chat để xem thanh tiến độ và thời gian đếm ngược đến lúc làm mới.

### 3. Tại sao không nghe được phát âm tiếng Nhật trên trình duyệt?
Kanji Kachi Web sử dụng **Web Speech API** (giọng đọc tiếng Nhật tích hợp sẵn trên trình duyệt/hệ điều hành). Hãy đảm bảo nút loa trên thanh Header đang bật và thiết bị của bạn có cài gói giọng đọc tiếng Nhật (\`ja-JP\`).

### 4. Làm sao để học lại từ đầu nếu muốn ôn lại từ 0%?
Vào trang **Cá nhân** ➔ bấm **"Đặt lại toàn bộ tiến độ"**. Toàn bộ từ đã đánh dấu sẽ được đưa về ban đầu.

### 5. Báo lỗi từ vựng hoặc góp ý tính năng mới?
Mọi đóng góp xin gửi về:
- **Email hỗ trợ:** theocean2505@gmail.com
- **Thời gian phản hồi:** Trong vòng 24 – 48 giờ làm việc.
`
  },

  licenses: {
    title: "Giấy phép mã nguồn mở",
    markdown: `
### GIẤY PHÉP MÃ NGUỒN MỞ (OPEN SOURCE LICENSES)
Kanji Kachi Web Edition chân thành ghi nhận các thư viện và công nghệ mã nguồn mở:

### 1. Google Firebase JS SDK (v12)
- **Giấy phép:** Apache License, Version 2.0 — Copyright (c) Google LLC.
- Bao gồm: \`firebase/app\`, \`firebase/auth\`, \`firebase/firestore\`, \`firebase/ai\`, \`firebase/app-check\`.

### 2. Tailwind CSS
- **Giấy phép:** MIT License — Copyright (c) Tailwind Labs, Inc.

### 3. Noto Serif & Plus Jakarta Sans Typography
- **Giấy phép:** SIL Open Font License, Version 1.1 (OFL) — Google Fonts / Adobe Systems.

### 4. Material Symbols Outlined Icons
- **Giấy phép:** Apache License, Version 2.0 — Copyright (c) Google LLC.
`
  }
};
