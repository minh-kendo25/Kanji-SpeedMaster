// Kanji Kachi - Web Edition Multilingual Legal & Support Content (VI, EN, FR, ES & KO)

window.KANJI_LEGAL_CONTENT = {
  vi: {
    about: {
      title: "Về Kanji Kachi",
      markdown: `
### KANJI KACHI (漢字勝ち)
**Phiên bản:** Web Edition v2.0
**Mã bản dựng:** 2026.11
**Đơn vị phát triển:** The Ocean Dev (Kanji Kachi Team)

### 1. Ý nghĩa & Tầm nhìn
「漢字勝ち」(Kanji Kachi) mang thông điệp **"Chiến thắng và Chinh phục Hán tự"**. Nền tảng ra đời nhằm giải quyết rào cản lớn nhất của người học tiếng Nhật: nhớ mặt chữ Kanji nhưng hay quên cách đọc Hiragana (Onyomi, Kunyomi) và ý nghĩa trong ngữ cảnh thực tế.

### 2. Phương pháp học tập
- **Học thẻ ghi nhớ (Flashcard 3D):** Lật thẻ trực quan theo từng chủ đề, nghe phát âm Tokyo Neural bản xứ và tự đánh giá Đã nhớ / Chưa nhớ.
- **Luyện phản xạ (Kiểm tra):** 3 chế độ kiểm tra tốc độ cao (Gõ Hiragana, Trắc nghiệm nhanh, Phản xạ toàn diện) giúp liên kết trực tiếp giữa mặt chữ, âm đọc và ý nghĩa.
- **Gia sư Kanji AI:** Trợ lý AI đọc hiểu trực tiếp từ bạn đang học trên màn hình để giải thích cách dùng, ví dụ câu và ngữ pháp tức thì.
- **Lộ trình rõ ràng:** 350 từ vựng N5 (8 chủ đề), 711 từ vựng N4 (11 chủ đề) và 214 Bộ thủ Khang Hy.

### 3. Công nghệ phát triển (Web Edition)
- **Giao diện Web:** HTML5, Tailwind CSS và JavaScript ES Modules theo ngôn ngữ thiết kế Modern Sumi & Washi (hỗ trợ Sáng/Tối & Đa ngôn ngữ VI/EN/FR/ES/KO).
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
- Yêu cầu xóa vĩnh viễn tài khoản, gửi phản hồi hoặc CSKH tại cổng hỗ trợ: \`https://theoceandev.com/apps/kanji-kachi\` hoặc qua email: **theocean2505@gmail.com**.
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
Toàn bộ mã nguồn, giao diện UI/UX phong cách Modern Sumi & Washi và cấu trúc hệ thống thuộc quyền sở hữu của **The Ocean Dev**.

### 5. Hành vi bị nghiêm cấm
- Sao chép, thu thập dữ liệu tự động (bot, scraper) hoặc can thiệp trái phép vào hệ thống Firebase / API.
- Lạm dụng Gia sư Kanji AI vào mục đích ngoài học tập tiếng Nhật hoặc gây quá tải hệ thống.

### 6. Miễn trừ trách nhiệm & Liên hệ
Kanji Kachi được cung cấp trên nguyên tắc **"nguyên trạng" (AS IS)**. Mọi thắc mắc vui lòng truy cập \`https://theoceandev.com/apps/kanji-kachi\` hoặc gửi về: **theocean2505@gmail.com**.
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

### 4. Liên hệ, Phản hồi & CSKH
- **Cổng hỗ trợ & Xóa tài khoản:** \`https://theoceandev.com/apps/kanji-kachi\`
- **Email liên hệ:** theocean2505@gmail.com
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
**Developer:** The Ocean Dev (Kanji Kachi Team)

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
- For account deletion, feedback, or support, visit our portal at \`https://theoceandev.com/apps/kanji-kachi\` or email: **theocean2505@gmail.com**.
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
All source code, UI/UX design (Modern Sumi & Washi theme), branding, and software architecture belong to **The Ocean Dev**.

### 5. Prohibited Conduct
- Automated scraping, bots, reverse engineering, or unauthorized interference with Firebase / API infrastructure.
- Abusing Kanji AI Tutor for non-study spam or quota circumvention.

### 6. Disclaimer & Contact
Kanji Kachi is provided **"AS IS"**. For any questions or support, visit \`https://theoceandev.com/apps/kanji-kachi\` or contact: **theocean2505@gmail.com**.
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

### 4. Feedback, Support & Account Deletion
- **Support Portal:** \`https://theoceandev.com/apps/kanji-kachi\`
- **Contact Email:** theocean2505@gmail.com
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
  },

  fr: {
    about: {
      title: "À propos de Kanji Kachi",
      markdown: `
### KANJI KACHI (漢字勝ち)
**Version :** Web Edition v2.0
**Build :** 2026.11
**Développeur :** The Ocean Dev (Équipe Kanji Kachi)

### 1. Vision & Signification
「漢字勝ち」 (*Kanji Kachi*) signifie **« Conquérir les Kanji »**. La plateforme résout le plus grand obstacle des apprenants du japonais : reconnaître les Kanji tout en retenant leurs lectures exactes en Hiragana (Onyomi, Kunyomi) et leur sens en contexte réel.

### 2. Méthode d'apprentissage
- **Cartes mémoire 3D :** Cartes interactives par thème avec audio japonais natif Tokyo Neural et suivi Maîtrisé / À revoir.
- **Pratique réflexe (Quiz) :** 3 modes de vitesse (Saisie Hiragana, QCM rapide, Réflexe complet) pour ancrer instantanément la lecture et le sens.
- **Tuteur Kanji IA :** Assistant IA contextuel qui lit le Kanji affiché à l'écran pour expliquer l'usage, les exemples et la grammaire instantanément.
- **Parcours structuré :** 350 mots JLPT N5 (8 thèmes), 711 mots JLPT N4 (11 thèmes) et 214 Radicaux de Kangxi.

### 3. Architecture technique (Édition Web)
- **Interface Web :** HTML5, Tailwind CSS et modules JavaScript ES conçus selon l'esthétique Modern Sumi & Washi (Mode clair/sombre & Multilingue VI/EN/FR).
- **Synchronisation Cloud :** Google Firebase Authentication & Cloud Firestore assurant une synchronisation bidirectionnelle en temps réel entre le Web et l'application mobile.
- **IA & Sécurité :** Firebase AI Logic (Gemini) protégé par Firebase App Check (Google Cloud Fraud Defense) et des en-têtes de sécurité HTTP renforcés (CSP, HSTS).
`
    },
    privacy: {
      title: "Politique de confidentialité",
      markdown: `
### POLITIQUE DE CONFIDENTIALITÉ
**Dernière mise à jour :** 26 novembre 2026
**S'applique à :** Plateforme Web et Application mobile Kanji Kachi

### 1. Notre engagement
Kanji Kachi (« nous ») s'engage à protéger votre vie privée et vos données personnelles.

### 2. Données collectées
- **Informations de compte (Google Sign-In) :** Adresse e-mail, nom d'affichage, photo de profil et identifiant Firebase UID via le protocole sécurisé OAuth 2.0.
- **Progression d'étude :** Identifiants des Kanji maîtrisés et à revoir, dernier mot étudié et quota quotidien de jetons IA afin de synchroniser votre progression entre le Web et le mobile.
- **Données JAMAIS collectées :** AUCUN accès aux contacts, SMS, position GPS, microphone, caméra, pièces d'identité ou cartes bancaires.

### 3. Stockage & Sécurité
- Stockage local sur navigateur (\`localStorage\`) associé à une synchronisation chiffrée sur Google Cloud Firestore (HTTPS/TLS en transit et chiffrement au repos).
- **Règles de sécurité Firestore strictes :** Seul le propriétaire authentifié d'un UID peut lire ou modifier ses propres données.

### 4. Services tiers
- **Google Firebase (Google LLC) :** Authentification, Cloud Firestore, Firebase AI Logic (Gemini) et Firebase App Check (Google Cloud Fraud Defense).
- **Google AdSense (Google LLC) :** Affiche des annonces sur le Web. Kanji Kachi ne partage jamais votre e-mail ni votre progression avec AdSense.

### 5. Vos droits & Contact
- Vous pouvez réinitialiser toute votre progression à tout moment depuis l'onglet **Profil**.
- Pour toute demande de suppression définitive de compte, retour ou assistance, consultez \`https://theoceandev.com/apps/kanji-kachi\` ou écrivez à : **theocean2505@gmail.com**.
`
    },
    terms: {
      title: "Conditions d'utilisation",
      markdown: `
### CONDITIONS D'UTILISATION
**Dernière mise à jour :** 26 novembre 2026
**S'applique à :** Utilisateurs du Web et de l'Application mobile Kanji Kachi

### 1. Acceptation des conditions
En accédant à **Kanji Kachi** et en l'utilisant, vous acceptez les présentes Conditions d'utilisation ainsi que notre Politique de confidentialité.

### 2. Licence personnelle
Nous vous accordons une licence personnelle, non exclusive et non commerciale pour étudier la langue japonaise sur Kanji Kachi.

### 3. Compte & Sécurité
- Vous êtes responsable de la sécurité de votre compte Google (pensez à vous déconnecter sur un ordinateur partagé).
- La synchronisation cloud et le quota quotidien du Tuteur Kanji IA sont rattachés à votre compte authentifié.

### 4. Propriété intellectuelle
L'ensemble du code source, du design UI/UX (thème Modern Sumi & Washi), de la marque et de l'architecture logicielle appartient à **The Ocean Dev**.

### 5. Comportements interdits
- Extraction automatisée (bots, scrapers), rétro-ingénierie ou interférence non autorisée avec l'infrastructure Firebase / API.
- Utilisation abusive du Tuteur Kanji IA en dehors de l'apprentissage du japonais ou contournement des quotas.

### 6. Clause de non-responsabilité & Contact
Kanji Kachi est fourni **« EN L'ÉTAT » (AS IS)**. Pour toute question ou assistance, visitez \`https://theoceandev.com/apps/kanji-kachi\` ou écrivez à : **theocean2505@gmail.com**.
`
    },
    support: {
      title: "Centre d'aide & FAQ",
      markdown: `
### CENTRE D'AIDE & FAQ

### 1. Comment synchroniser ma progression entre le Web et l'application mobile ?
Cliquez simplement sur **« Se connecter avec Google »** sur le Web avec **exactement le même compte Gmail** que celui utilisé sur l'application mobile Kanji Kachi. Vos mots maîtrisés et vos listes de révision se synchronisent automatiquement en temps réel via Google Cloud Firestore !

### 2. Comment fonctionne le quota de jetons du Tuteur Kanji IA ?
La connexion Google est requise pour utiliser le Tuteur IA. Chaque compte reçoit **12 000 jetons gratuits par jour**, réinitialisés automatiquement à **00:00 (UTC+7)**. Cliquez sur **View Token** sous la zone de saisie pour voir le compte à rebours.

### 3. Comment fonctionne la prononciation japonaise ?
Kanji Kachi Web utilise par défaut l'audio natif **Tokyo Neural (\`Nanami\`)** pour une prononciation claire et homogène sous Windows, Android et iOS. Vous pouvez ajuster la vitesse (\`0.5x–1.5x\`) et le volume dans les **Paramètres**.

### 4. Assistance, retours & suppression de compte
- **Portail d'assistance :** \`https://theoceandev.com/apps/kanji-kachi\`
- **E-mail de contact :** theocean2505@gmail.com
- **Délai de réponse :** Sous 24 à 48 heures ouvrées.
`
    },
    licenses: {
      title: "Licences Open Source",
      markdown: `
### LICENCES OPEN SOURCE

### 1. Google Firebase JS SDK (v12)
- **Licence :** Apache License, Version 2.0 — Copyright (c) Google LLC.

### 2. Tailwind CSS
- **Licence :** MIT License — Copyright (c) Tailwind Labs, Inc.

### 3. Noto Serif & Plus Jakarta Sans Typography
- **Licence :** SIL Open Font License, Version 1.1 (OFL) — Google Fonts / Adobe Systems.

### 4. Material Symbols Outlined Icons
- **Licence :** Apache License, Version 2.0 — Copyright (c) Google LLC.
`
    }
  },

  es: {
    about: {
      title: "Acerca de Kanji Kachi",
      markdown: `
### KANJI KACHI (漢字勝ち)
**Versión:** Web Edition v2.0
**Compilación:** 2026.11
**Desarrollador:** The Ocean Dev (Equipo Kanji Kachi)

### 1. Visión y Significado
「漢字勝ち」 (*Kanji Kachi*) significa **«Conquistar los Kanji»**. La plataforma resuelve la mayor dificultad al aprender japonés: reconocer visualmente los Kanji y recordar al instante sus lecturas exactas en Hiragana (Onyomi, Kunyomi) y su significado en contexto real.

### 2. Método de aprendizaje
- **Tarjetas 3D (Flashcards):** Tarjetas interactivas por tema con audio nativo Tokyo Neural y seguimiento Dominadas / Por repasar.
- **Práctica réflex (Examen):** 3 modos de velocidad (Escribir Hiragana, Test rápido, Reflejo completo) para conectar al instante escritura, lectura y sentido.
- **Tutor Kanji con IA:** Asistente inteligente contextual que lee el Kanji en pantalla para explicar uso, ejemplos y gramática al momento.
- **Ruta estructurada:** 350 palabras JLPT N5 (8 temas), 711 palabras JLPT N4 (11 temas) y 214 Radicales de Kangxi.

### 3. Arquitectura técnica (Edición Web)
- **Interfaz Web:** HTML5, Tailwind CSS y módulos JavaScript ES con estética Modern Sumi & Washi (Modo claro/oscuro y Multilingüe VI/EN/FR/ES).
- **Sincronización en la nube:** Google Firebase Authentication y Cloud Firestore con sincronización bidireccional en tiempo real entre Web y Móvil.
- **IA y Seguridad:** Firebase AI Logic (Gemini) protegido mediante Firebase App Check (Google Cloud Fraud Defense) y cabeceras HTTP de seguridad (CSP, HSTS).
`
    },
    privacy: {
      title: "Política de privacidad",
      markdown: `
### POLÍTICA DE PRIVACIDAD
**Última actualización:** 26 de noviembre de 2026
**Se aplica a:** Plataforma Web y Aplicación móvil Kanji Kachi

### 1. Nuestro compromiso
Kanji Kachi («nosotros») se compromete a proteger tu privacidad e información personal.

### 2. Datos que recopilamos
- **Información de cuenta (Google Sign-In):** Correo electrónico, nombre visible, foto de perfil e identificador Firebase UID mediante OAuth 2.0 seguro.
- **Progreso de estudio:** Identificadores de Kanji dominados y por repasar, última palabra estudiada y cuota diaria de tokens de IA para sincronizar Web y Móvil.
- **Datos que NUNCA recopilamos:** SIN acceso a contactos, SMS, ubicación GPS, micrófono, cámara, documentos de identidad ni tarjetas bancarias.

### 3. Almacenamiento y Seguridad
- Almacenamiento local del navegador (\`localStorage\`) combinado con sincronización cifrada en Google Cloud Firestore (HTTPS/TLS en tránsito y cifrado en reposo).
- **Reglas estrictas en Firestore:** Solo el titular autenticado de un UID puede leer o modificar su propio documento de progreso.

### 4. Servicios de terceros
- **Google Firebase (Google LLC):** Autenticación, Cloud Firestore, Firebase AI Logic (Gemini) y Firebase App Check.
- **Google AdSense (Google LLC):** Muestra anuncios en la Web. Kanji Kachi nunca comparte tu correo ni tu progreso de estudio con AdSense.

### 5. Tus derechos y Contacto
- Puedes restablecer todo tu progreso en cualquier momento desde la pestaña **Perfil**.
- Para eliminar tu cuenta definitivamente, enviar comentarios o recibir asistencia, visita \`https://theoceandev.com/apps/kanji-kachi\` o escribe a: **theocean2505@gmail.com**.
`
    },
    terms: {
      title: "Términos de servicio",
      markdown: `
### TÉRMINOS DE SERVICIO
**Última actualización:** 26 de noviembre de 2026
**Se aplica a:** Usuarios de la Web y Aplicación móvil Kanji Kachi

### 1. Aceptación de los términos
Al acceder y utilizar **Kanji Kachi**, aceptas quedar sujeto a estos Términos de servicio y a nuestra Política de privacidad.

### 2. Licencia personal
Te otorgamos una licencia personal, no exclusiva y no comercial para estudiar japonés en Kanji Kachi.

### 3. Cuenta y Seguridad
- Eres responsable de mantener segura tu cuenta de Google (cierra sesión en ordenadores compartidos).
- La sincronización en la nube y la cuota diaria del Tutor Kanji con IA están vinculadas a tu cuenta autenticada.

### 4. Propiedad intelectual
Todo el código fuente, el diseño UI/UX (tema Modern Sumi & Washi), la marca y la arquitectura pertenecen a **The Ocean Dev**.

### 5. Conductas prohibidas
- Extracción automatizada (bots, scrapers), ingeniería inversa o interferencia no autorizada con Firebase / API.
- Uso abusivo del Tutor Kanji con IA ajeno al estudio del japonés o evasión de cuotas.

### 6. Exención de responsabilidad y Contacto
Kanji Kachi se ofrece **«TAL CUAL» (AS IS)**. Para cualquier consulta o soporte, visita \`https://theoceandev.com/apps/kanji-kachi\` o escribe a: **theocean2505@gmail.com**.
`
    },
    support: {
      title: "Centro de ayuda y FAQ",
      markdown: `
### CENTRO DE AYUDA Y PREGUNTAS FRECUENTES

### 1. ¿Cómo sincronizo mi progreso entre la Web y la App móvil?
Solo haz clic en **«Iniciar sesión con Google»** en la Web usando **exactamente la misma cuenta de Gmail** que usas en la aplicación móvil Kanji Kachi. ¡Tus palabras aprendidas y listas de repaso se sincronizan automáticamente en tiempo real mediante Google Cloud Firestore!

### 2. ¿Cómo funciona la cuota de tokens del Tutor Kanji con IA?
Se requiere iniciar sesión con Google para usar el Tutor IA. Cada cuenta recibe **12 000 tokens gratuitos al día**, renovándose automáticamente a las **00:00 (UTC+7)**. Haz clic en **View Token** debajo del chat para ver la cuenta regresiva.

### 3. ¿Cómo funciona la pronunciación japonesa?
Kanji Kachi Web utiliza de forma predeterminada el audio nativo **Tokyo Neural (\`Nanami\`)** para ofrecer una pronunciación nítida y uniforme en Windows, Android e iOS. Puedes ajustar la velocidad (\`0.5x–1.5x\`) y el volumen en **Ajustes**.

### 4. Soporte, comentarios y eliminación de cuenta
- **Portal de soporte:** \`https://theoceandev.com/apps/kanji-kachi\`
- **Correo de contacto:** theocean2505@gmail.com
- **Tiempo de respuesta:** Entre 24 y 48 horas hábiles.
`
    },
    licenses: {
      title: "Licencias de código abierto",
      markdown: `
### LICENCIAS DE CÓDIGO ABIERTO

### 1. Google Firebase JS SDK (v12)
- **Licencia:** Apache License, Version 2.0 — Copyright (c) Google LLC.

### 2. Tailwind CSS
- **Licencia:** MIT License — Copyright (c) Tailwind Labs, Inc.

### 3. Noto Serif & Plus Jakarta Sans Typography
- **Licencia:** SIL Open Font License, Version 1.1 (OFL) — Google Fonts / Adobe Systems.

### 4. Material Symbols Outlined Icons
- **Licencia:** Apache License, Version 2.0 — Copyright (c) Google LLC.
`
    }
  },

  ko: {
    about: {
      title: "Kanji Kachi 소개",
      markdown: `
### KANJI KACHI (漢字勝ち)
**버전:** Web Edition v2.0
**빌드:** 2026.11
**개발팀:** The Ocean Dev (Kanji Kachi Team)

### 1. 의미와 비전
「漢字勝ち」 (*Kanji Kachi*)는 **«한자를 정복하다»**라는 뜻입니다. 한자 모양은 익숙하지만 실제 문맥에서 정확한 히라가나 읽기(음독·훈독)와 의미를 바로 떠올리지 못하는 일본어 학습자의 고민을 해결합니다.

### 2. 학습 방법론
- **3D 플래시카드:** 주제별 직관적인 카드 학습과 Tokyo Neural 원어민 발음, 암기/복습 상태 관리.
- **순발력 연습 (퀴즈):** 3가지 스피드 훈련 모드(히라가나 타이핑, 4지선다 퀴즈, 종합 순발력)로 한자·읽기·의미를 즉각 연결합니다.
- **AI 한자 튜터:** 현재 화면의 한자를 자동으로 인식하여 쓰임새, 예문, 문법을 즉시 설명합니다.
- **체계적 로드맵:** JLPT N5 단어 350개(8개 주제), N4 단어 711개(11개 주제), 강희자전 214부수 완비.

### 3. 기술 아키텍처 (Web Edition)
- **웹 UI:** Modern Sumi & Washi 디자인 시스템 기반 HTML5, Tailwind CSS 및 ES 모듈 (라이트/다크 모드 및 5개 국어 지원).
- **클라우드 동기화:** Google Firebase Authentication & Cloud Firestore로 웹과 모바일 앱 간 실시간 양방향 동기화 제공.
- **AI 및 보안:** Firebase App Check (Google Cloud Fraud Defense) 및 보안 HTTP 헤더(CSP, HSTS)가 적용된 Firebase AI Logic (Gemini).
`
    },
    privacy: {
      title: "개인정보 처리방침",
      markdown: `
### 개인정보 처리방침
**최종 수정일:** 2026년 11월 26일
**적용 대상:** Kanji Kachi 웹 플랫폼 및 모바일 앱

### 1. 개인정보 보호 약속
Kanji Kachi("당사")는 이용자의 개인정보와 프라이버시를 안전하게 보호합니다.

### 2. 수집하는 정보
- **계정 정보 (Google 로그인):** 안전한 OAuth 2.0을 통한 이메일 주소, 표시 이름, 프로필 사진 URL 및 Firebase UID.
- **학습 진도 데이터:** 웹과 앱 간 동기화를 위한 암기 단어 ID, 복습 필요 단어 ID, 최근 학습 항목 및 일일 AI 토큰 사용량.
- **절대 수집하지 않는 항목:** 연락처, SMS, GPS 위치, 마이크, 카메라, 신분증 번호, 결제 카드 정보는 절대 수집하지 않습니다.

### 3. 보관 및 보안
- 브라우저 로컬 저장소(\`localStorage\`)와 암호화된 Google Cloud Firestore 동기화(전송 중 HTTPS/TLS 및 저장 시 암호화).
- **엄격한 Firestore 보안 규칙:** 인증된 본인 UID 소유자만 자신의 학습 문서를 읽고 쓸 수 있습니다.

### 4. 제3자 서비스
- **Google Firebase (Google LLC):** 로그인 인증, Cloud Firestore, Firebase AI Logic (Gemini) 및 Firebase App Check.
- **Google AdSense (Google LLC):** 웹 광고 제공. Kanji Kachi는 사용자의 이메일이나 학습 기록을 AdSense에 공유하지 않습니다.

### 5. 이용자 권리 및 문의
- **프로필** 탭에서 언제든지 모든 학습 진도를 초기화할 수 있습니다.
- 계정 영구 삭제 요청, 피드백 및 고객지원은 \`https://theoceandev.com/apps/kanji-kachi\` 또는 이메일 **theocean2505@gmail.com** 으로 연락해 주세요.
`
    },
    terms: {
      title: "서비스 이용약관",
      markdown: `
### 서비스 이용약관
**최종 수정일:** 2026년 11월 26일
**적용 대상:** Kanji Kachi 웹 및 모바일 앱 이용자

### 1. 약관 동의
**Kanji Kachi**에 접속하고 이용함으로써 귀하는 본 서비스 이용약관 및 개인정보 처리방침에 동의하게 됩니다.

### 2. 개인 이용 라이선스
당사는 일본어 학습 목적을 위한 개인적, 비독점적, 비상업적 이용 권한을 부여합니다.

### 3. 계정 및 보안
- 개인 Google 계정의 보안 유지 책임은 본인에게 있습니다 (공용 PC에서는 사용 후 로그아웃해 주세요).
- 클라우드 동기화 및 일일 AI 튜터 토큰 한도는 로그인된 계정에 귀속됩니다.

### 4. 지식재산권
모든 소스 코드, UI/UX 디자인(Modern Sumi & Washi 테마), 브랜드 및 시스템 구조의 권리는 **The Ocean Dev**에 있습니다.

### 5. 금지 행위
- 자동화 봇·스크래퍼를 통한 무단 수집, 역설계, Firebase/API 인프라 방해 행위.
- 일본어 학습 외 목적으로 AI 한자 튜터를 악용하거나 한도를 우회하는 행위.

### 6. 면책 및 문의
Kanji Kachi는 **"있는 그대로(AS IS)"** 제공됩니다. 문의 사항은 \`https://theoceandev.com/apps/kanji-kachi\` 또는 **theocean2505@gmail.com** 으로 보내 주세요.
`
    },
    support: {
      title: "고객센터 & FAQ",
      markdown: `
### 고객센터 & 자주 묻는 질문 (FAQ)

### 1. 웹과 모바일 앱 간 학습 기록은 어떻게 동기화하나요?
모바일 앱에서 사용 중인 **동일한 Gmail 계정**으로 웹에서도 **"Google로 로그인"**을 클릭하기만 하면 됩니다. 외운 단어와 복습 목록이 Google Cloud Firestore를 통해 실시간 양방향 동기화됩니다!

### 2. AI 한자 튜터 토큰 한도는 어떻게 작동하나요?
AI 튜터를 이용하려면 Google 로그인이 필요합니다. 계정당 **매일 12,000 무료 토큰**이 제공되며 **00:00 (UTC+7)**에 자동 충전됩니다. 채팅 입력창 아래 **View Token**을 눌러 남은 토큰을 확인하세요.

### 3. 일본어 발음 재생은 어떻게 작동하나요?
Kanji Kachi 웹은 기본적으로 **Tokyo Neural 원어민 음성(\`Nanami\`)**을 사용하여 Windows, Android, iOS 어디서나 선명하고 일관된 발음을 들려줍니다. **설정**에서 속도(\`0.5x–1.5x\`)와 볼륨을 조절할 수 있습니다.

### 4. 문의, 피드백 및 계정 삭제
- **고객지원 포털:** \`https://theoceandev.com/apps/kanji-kachi\`
- **문의 이메일:** theocean2505@gmail.com
- **답변 소요 시간:** 영업일 기준 24~48시간 이내.
`
    },
    licenses: {
      title: "오픈소스 라이선스",
      markdown: `
### 오픈소스 라이선스

### 1. Google Firebase JS SDK (v12)
- **라이선스:** Apache License, Version 2.0 — Copyright (c) Google LLC.

### 2. Tailwind CSS
- **라이선스:** MIT License — Copyright (c) Tailwind Labs, Inc.

### 3. Noto Serif & Plus Jakarta Sans Typography
- **라이선스:** SIL Open Font License, Version 1.1 (OFL) — Google Fonts / Adobe Systems.

### 4. Material Symbols Outlined Icons
- **라이선스:** Apache License, Version 2.0 — Copyright (c) Google LLC.
`
    }
  }
};


window.getLegalContent = function (docKey, lang) {
  const valid = ['vi', 'en', 'fr', 'es', 'ko'];
  const activeLang = valid.includes(lang) ? lang : (window.getAppLang ? window.getAppLang() : 'en');
  const bundle = (window.KANJI_LEGAL_CONTENT && window.KANJI_LEGAL_CONTENT[activeLang]) || (window.KANJI_LEGAL_CONTENT && window.KANJI_LEGAL_CONTENT.en) || (window.KANJI_LEGAL_CONTENT && window.KANJI_LEGAL_CONTENT.vi) || {};
  return bundle[docKey] || null;
};
