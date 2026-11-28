// Kanji Kachi - Complete Vocabulary and Radicals Dataset
// Total Kanji: 1061 (N5: 350, N4: 711)
// Total Radicals: 214 (214 Bộ thủ Khang Hy)
// Total Dataset Items: 1275

const TOPICS = [
  {
    "id": "n5_01",
    "level": "N5",
    "title": "Số đếm & Tiền tệ",
    "titleEn": "Numbers & Currency",
    "titleFr": "Nombres et Monnaie",
    "titleEs": "Números y Moneda",
    "titleKo": "숫자 및 화폐",
    "count": 39
  },
  {
    "id": "n5_02",
    "level": "N5",
    "title": "Thời gian & Lịch",
    "titleEn": "Time & Calendar",
    "titleFr": "Temps et Calendrier",
    "titleEs": "Tiempo y Calendario",
    "titleKo": "시간 및 달력",
    "count": 72
  },
  {
    "id": "n5_03",
    "level": "N5",
    "title": "Con người & Gia đình",
    "titleEn": "People & Family",
    "titleFr": "Personnes et Famille",
    "titleEs": "Personas y Familia",
    "titleKo": "사람 및 가족",
    "count": 36
  },
  {
    "id": "n5_04",
    "level": "N5",
    "title": "Phương hướng & Vị trí",
    "titleEn": "Directions & Positions",
    "titleFr": "Directions et Positions",
    "titleEs": "Direcciones y Posiciones",
    "titleKo": "방향 및 위치",
    "count": 37
  },
  {
    "id": "n5_05",
    "level": "N5",
    "title": "Giao thông & Di chuyển",
    "titleEn": "Transport & Movement",
    "titleFr": "Transports et Déplacements",
    "titleEs": "Transporte y Desplazamiento",
    "titleKo": "교통 및 이동",
    "count": 30
  },
  {
    "id": "n5_06",
    "level": "N5",
    "title": "Trường học & Giao tiếp",
    "titleEn": "School & Communication",
    "titleFr": "École et Communication",
    "titleEs": "Escuela y Comunicación",
    "titleKo": "학교 및 의사소통",
    "count": 43
  },
  {
    "id": "n5_07",
    "level": "N5",
    "title": "Ẩm thực & Mua sắm",
    "titleEn": "Food & Shopping",
    "titleFr": "Alimentation et Achats",
    "titleEs": "Comida y Compras",
    "titleKo": "음식 및 쇼핑",
    "count": 38
  },
  {
    "id": "n5_08",
    "level": "N5",
    "title": "Thiên nhiên, Màu sắc & Cơ thể",
    "titleEn": "Nature, Colors & Body",
    "titleFr": "Nature, Couleurs et Corps",
    "titleEs": "Naturaleza, Colores y Cuerpo",
    "titleKo": "자연, 색깔 및 신체",
    "count": 55
  },
  {
    "id": "n4_01",
    "level": "N4",
    "title": "Gia đình mở rộng, Xã hội & Nghề nghiệp",
    "titleEn": "Extended Family, Society & Work",
    "titleFr": "Famille élargie, Société et Travail",
    "titleEs": "Familia, Sociedad y Trabajo",
    "titleKo": "가족, 사회 및 직업",
    "count": 59
  },
  {
    "id": "n4_02",
    "level": "N4",
    "title": "Bốn mùa, Buổi trong ngày & Thời tiết",
    "titleEn": "Seasons, Times of Day & Weather",
    "titleFr": "Saisons, Moments et Météo",
    "titleEs": "Estaciones, Día y Clima",
    "titleKo": "사계절, 하루 및 날씨",
    "count": 54
  },
  {
    "id": "n4_03",
    "level": "N4",
    "title": "Ẩm thực, Nấu nướng & Nhà hàng",
    "titleEn": "Cooking, Dining & Restaurants",
    "titleFr": "Cuisine, Repas et Restaurants",
    "titleEs": "Cocina, Comidas y Restaurantes",
    "titleKo": "요리, 식사 및 식당",
    "count": 62
  },
  {
    "id": "n4_04",
    "level": "N4",
    "title": "Sở thích, Văn hóa & Thể thao",
    "titleEn": "Hobbies, Culture & Sports",
    "titleFr": "Loisirs, Culture et Sports",
    "titleEs": "Aficiones, Cultura y Deportes",
    "titleKo": "취미, 문화 및 스포츠",
    "count": 59
  },
  {
    "id": "n4_05",
    "level": "N4",
    "title": "Đô thị, Giao thông & Du lịch",
    "titleEn": "City, Transit & Travel",
    "titleFr": "Ville, Transports et Voyages",
    "titleEs": "Ciudad, Transporte y Viajes",
    "titleKo": "도시, 교통 및 여행",
    "count": 80
  },
  {
    "id": "n4_06",
    "level": "N4",
    "title": "Sức khỏe, Cơ thể & Bệnh viện",
    "titleEn": "Health, Body & Hospital",
    "titleFr": "Santé, Corps et Hôpital",
    "titleEs": "Salud, Cuerpo y Hospital",
    "titleKo": "건강, 신체 및 병원",
    "count": 47
  },
  {
    "id": "n4_07",
    "level": "N4",
    "title": "Trường học, Thi cử & Tư duy",
    "titleEn": "School, Exams & Thinking",
    "titleFr": "École, Examens et Réflexion",
    "titleEs": "Escuela, Exámenes y Pensamiento",
    "titleKo": "학교, 시험 및 사고",
    "count": 61
  },
  {
    "id": "n4_08",
    "level": "N4",
    "title": "Mua sắm, Đồ vật & Tính chất",
    "titleEn": "Shopping, Objects & Qualities",
    "titleFr": "Achats, Objets et Qualités",
    "titleEs": "Compras, Objetos y Cualidades",
    "titleKo": "쇼핑, 사물 및 성질",
    "count": 81
  },
  {
    "id": "n4_09",
    "level": "N4",
    "title": "Lễ hội, Lịch sử & Tự nhiên mở rộng",
    "titleEn": "Festivals, History & Nature",
    "titleFr": "Festivals, Histoire et Nature",
    "titleEs": "Festivales, Historia y Naturaleza",
    "titleKo": "축제, 역사 및 자연",
    "count": 50
  },
  {
    "id": "n4_10",
    "level": "N4",
    "title": "Động từ hành động & Sinh hoạt hằng ngày",
    "titleEn": "Action Verbs & Daily Life",
    "titleFr": "Verbes d'action et Quotidien",
    "titleEs": "Verbos de Acción y Vida Diaria",
    "titleKo": "동작 동사 및 일상생활",
    "count": 88
  },
  {
    "id": "n4_11",
    "level": "N4",
    "title": "Cảm xúc, An toàn & Khái niệm cốt lõi",
    "titleEn": "Emotions, Safety & Core Concepts",
    "titleFr": "Émotions, Sécurité et Concepts clés",
    "titleEs": "Emociones, Seguridad y Conceptos Clave",
    "titleKo": "감정, 안전 및 핵심 개념",
    "count": 70
  },
  {
    "id": "rad_1_stroke",
    "level": "RADICALS",
    "title": "Bộ 1 nét (6 bộ)",
    "titleEn": "1-Stroke Radicals (6)",
    "titleFr": "Clés à 1 trait (6)",
    "titleEs": "Radicales de 1 trazo (6)",
    "titleKo": "1획 부수 (6개)",
    "range": [
      1001,
      1006
    ],
    "count": 6
  },
  {
    "id": "rad_2_stroke",
    "level": "RADICALS",
    "title": "Bộ 2 nét (23 bộ)",
    "titleEn": "2-Stroke Radicals (23)",
    "titleFr": "Clés à 2 traits (23)",
    "titleEs": "Radicales de 2 trazos (23)",
    "titleKo": "2획 부수 (23개)",
    "range": [
      1007,
      1029
    ],
    "count": 23
  },
  {
    "id": "rad_3_stroke",
    "level": "RADICALS",
    "title": "Bộ 3 nét (31 bộ)",
    "titleEn": "3-Stroke Radicals (31)",
    "titleFr": "Clés à 3 traits (31)",
    "titleEs": "Radicales de 3 trazos (31)",
    "titleKo": "3획 부수 (31개)",
    "range": [
      1030,
      1060
    ],
    "count": 31
  },
  {
    "id": "rad_4_stroke",
    "level": "RADICALS",
    "title": "Bộ 4 nét (34 bộ)",
    "titleEn": "4-Stroke Radicals (34)",
    "titleFr": "Clés à 4 traits (34)",
    "titleEs": "Radicales de 4 trazos (34)",
    "titleKo": "4획 부수 (34개)",
    "range": [
      1061,
      1094
    ],
    "count": 34
  },
  {
    "id": "rad_5_stroke",
    "level": "RADICALS",
    "title": "Bộ 5 nét (23 bộ)",
    "titleEn": "5-Stroke Radicals (23)",
    "titleFr": "Clés à 5 traits (23)",
    "titleEs": "Radicales de 5 trazos (23)",
    "titleKo": "5획 부수 (23개)",
    "range": [
      1095,
      1117
    ],
    "count": 23
  },
  {
    "id": "rad_6_stroke",
    "level": "RADICALS",
    "title": "Bộ 6 nét (29 bộ)",
    "titleEn": "6-Stroke Radicals (29)",
    "titleFr": "Clés à 6 traits (29)",
    "titleEs": "Radicales de 6 trazos (29)",
    "titleKo": "6획 부수 (29개)",
    "range": [
      1118,
      1146
    ],
    "count": 29
  },
  {
    "id": "rad_7_stroke",
    "level": "RADICALS",
    "title": "Bộ 7 nét (20 bộ)",
    "titleEn": "7-Stroke Radicals (20)",
    "titleFr": "Clés à 7 traits (20)",
    "titleEs": "Radicales de 7 trazos (20)",
    "titleKo": "7획 부수 (20개)",
    "range": [
      1147,
      1166
    ],
    "count": 20
  },
  {
    "id": "rad_8_stroke",
    "level": "RADICALS",
    "title": "Bộ 8 nét (9 bộ)",
    "titleEn": "8-Stroke Radicals (9)",
    "titleFr": "Clés à 8 traits (9)",
    "titleEs": "Radicales de 8 trazos (9)",
    "titleKo": "8획 부수 (9개)",
    "range": [
      1167,
      1175
    ],
    "count": 9
  },
  {
    "id": "rad_9_10_stroke",
    "level": "RADICALS",
    "title": "Bộ 9 - 10 nét (19 bộ)",
    "titleEn": "9–10 Stroke Radicals (19)",
    "titleFr": "Clés à 9–10 traits (19)",
    "titleEs": "Radicales de 9–10 trazos (19)",
    "titleKo": "9~10획 부수 (19개)",
    "range": [
      1176,
      1194
    ],
    "count": 19
  },
  {
    "id": "rad_11_17_stroke",
    "level": "RADICALS",
    "title": "Bộ 11 - 17 nét (20 bộ)",
    "titleEn": "11–17 Stroke Radicals (20)",
    "titleFr": "Clés à 11–17 traits (20)",
    "titleEs": "Radicales de 11–17 trazos (20)",
    "titleKo": "11~17획 부수 (20개)",
    "range": [
      1195,
      1214
    ],
    "count": 20
  }
];

const KANJI_DATA = [
  {
    "id": 2001,
    "kanji": "一",
    "displayReading": "いち",
    "readings": [
      "いち"
    ],
    "meaning": "Số 1",
    "meaningEn": "Number 1",
    "meaningFr": "Chiffre 1",
    "meaningEs": "Número 1",
    "meaningKo": "숫자 1",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 57,
    "kanji": "一つ",
    "displayReading": "ひとつ",
    "readings": [
      "ひとつ"
    ],
    "meaning": "Một cái",
    "meaningEn": "One thing",
    "meaningFr": "Un objet",
    "meaningEs": "Un objeto",
    "meaningKo": "한 개",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2003,
    "kanji": "二",
    "displayReading": "に",
    "readings": [
      "に"
    ],
    "meaning": "Số 2",
    "meaningEn": "Number 2",
    "meaningFr": "Chiffre 2",
    "meaningEs": "Número 2",
    "meaningKo": "숫자 2",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 61,
    "kanji": "二つ",
    "displayReading": "ふたつ",
    "readings": [
      "ふたつ"
    ],
    "meaning": "Hai cái",
    "meaningEn": "Two things",
    "meaningFr": "Deux objets",
    "meaningEs": "Dos objetos",
    "meaningKo": "두 개",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2005,
    "kanji": "三",
    "displayReading": "さん",
    "readings": [
      "さん"
    ],
    "meaning": "Số 3",
    "meaningEn": "Number 3",
    "meaningFr": "Chiffre 3",
    "meaningEs": "Número 3",
    "meaningKo": "숫자 3",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 65,
    "kanji": "三つ",
    "displayReading": "みっつ",
    "readings": [
      "みっつ"
    ],
    "meaning": "Ba cái",
    "meaningEn": "Three things",
    "meaningFr": "Trois objets",
    "meaningEs": "Tres objetos",
    "meaningKo": "세 개",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2007,
    "kanji": "四",
    "displayReading": "よん・し",
    "readings": [
      "よん",
      "し"
    ],
    "meaning": "Số 4",
    "meaningEn": "Number 4",
    "meaningFr": "Chiffre 4",
    "meaningEs": "Número 4",
    "meaningKo": "숫자 4",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 68,
    "kanji": "四つ",
    "displayReading": "よっつ",
    "readings": [
      "よっつ"
    ],
    "meaning": "Bốn cái",
    "meaningEn": "Four things",
    "meaningFr": "Quatre objets",
    "meaningEs": "Cuatro objetos",
    "meaningKo": "네 개",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2009,
    "kanji": "五",
    "displayReading": "ご",
    "readings": [
      "ご"
    ],
    "meaning": "Số 5",
    "meaningEn": "Number 5",
    "meaningFr": "Chiffre 5",
    "meaningEs": "Número 5",
    "meaningKo": "숫자 5",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 74,
    "kanji": "五つ",
    "displayReading": "いつつ",
    "readings": [
      "いつつ"
    ],
    "meaning": "Năm cái",
    "meaningEn": "Five things",
    "meaningFr": "Cinq objets",
    "meaningEs": "Cinco objetos",
    "meaningKo": "다섯 개",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2011,
    "kanji": "六",
    "displayReading": "ろく",
    "readings": [
      "ろく"
    ],
    "meaning": "Số 6",
    "meaningEn": "Number 6",
    "meaningFr": "Chiffre 6",
    "meaningEs": "Número 6",
    "meaningKo": "숫자 6",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 77,
    "kanji": "六つ",
    "displayReading": "むっつ",
    "readings": [
      "むっつ"
    ],
    "meaning": "Sáu cái",
    "meaningEn": "Six things",
    "meaningFr": "Six objets",
    "meaningEs": "Seis objetos",
    "meaningKo": "여섯 개",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2013,
    "kanji": "七",
    "displayReading": "なな・しち",
    "readings": [
      "なな",
      "しち"
    ],
    "meaning": "Số 7",
    "meaningEn": "Number 7",
    "meaningFr": "Chiffre 7",
    "meaningEs": "Número 7",
    "meaningKo": "숫자 7",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 80,
    "kanji": "七つ",
    "displayReading": "ななつ",
    "readings": [
      "ななつ"
    ],
    "meaning": "Bảy cái",
    "meaningEn": "Seven things",
    "meaningFr": "Sept objets",
    "meaningEs": "Siete objetos",
    "meaningKo": "일곱 개",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2015,
    "kanji": "八",
    "displayReading": "はち",
    "readings": [
      "はち"
    ],
    "meaning": "Số 8",
    "meaningEn": "Number 8",
    "meaningFr": "Chiffre 8",
    "meaningEs": "Número 8",
    "meaningKo": "숫자 8",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 84,
    "kanji": "八つ",
    "displayReading": "やっつ",
    "readings": [
      "やっつ"
    ],
    "meaning": "Tám cái",
    "meaningEn": "Eight things",
    "meaningFr": "Huit objets",
    "meaningEs": "Ocho objetos",
    "meaningKo": "여덟 개",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2017,
    "kanji": "九",
    "displayReading": "きゅう・く",
    "readings": [
      "きゅう",
      "く"
    ],
    "meaning": "Số 9",
    "meaningEn": "Number 9",
    "meaningFr": "Chiffre 9",
    "meaningEs": "Número 9",
    "meaningKo": "숫자 9",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 88,
    "kanji": "九つ",
    "displayReading": "ここのつ",
    "readings": [
      "ここのつ"
    ],
    "meaning": "Chín cái",
    "meaningEn": "Nine things",
    "meaningFr": "Neuf objets",
    "meaningEs": "Nueve objetos",
    "meaningKo": "아홉 개",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 92,
    "kanji": "十",
    "displayReading": "じゅう",
    "readings": [
      "じゅう"
    ],
    "meaning": "Số 10",
    "meaningEn": "Number 10",
    "meaningFr": "Nombre 10",
    "meaningEs": "Número 10",
    "meaningKo": "숫자 10",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 122,
    "kanji": "百",
    "displayReading": "ひゃく",
    "readings": [
      "ひゃく"
    ],
    "meaning": "Một trăm (100)",
    "meaningEn": "One hundred (100)",
    "meaningFr": "Cent (100)",
    "meaningEs": "Cien (100)",
    "meaningKo": "백 (100)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 123,
    "kanji": "三百",
    "displayReading": "さんびゃく",
    "readings": [
      "さんびゃく"
    ],
    "meaning": "Ba trăm (300)",
    "meaningEn": "Three hundred (300)",
    "meaningFr": "Trois cents (300)",
    "meaningEs": "Trescientos (300)",
    "meaningKo": "삼백 (300)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2022,
    "kanji": "六百",
    "displayReading": "ろっぴゃく",
    "readings": [
      "ろっぴゃく"
    ],
    "meaning": "Sáu trăm (600)",
    "meaningEn": "Six hundred (600)",
    "meaningFr": "Six cents (600)",
    "meaningEs": "Seiscientos (600)",
    "meaningKo": "육백 (600)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 87,
    "kanji": "八百",
    "displayReading": "はっぴゃく",
    "readings": [
      "はっぴゃく"
    ],
    "meaning": "Tám trăm (800)",
    "meaningEn": "Eight hundred (800)",
    "meaningFr": "Huit cents (800)",
    "meaningEs": "Ochocientos (800)",
    "meaningKo": "팔백 (800)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 124,
    "kanji": "千",
    "displayReading": "せん",
    "readings": [
      "せん"
    ],
    "meaning": "Một nghìn (1.000)",
    "meaningEn": "One thousand (1,000)",
    "meaningFr": "Mille (1 000)",
    "meaningEs": "Mil (1 000)",
    "meaningKo": "천 (1,000)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 125,
    "kanji": "三千",
    "displayReading": "さんぜん",
    "readings": [
      "さんぜん"
    ],
    "meaning": "Ba nghìn (3.000)",
    "meaningEn": "Three thousand (3,000)",
    "meaningFr": "Trois mille (3 000)",
    "meaningEs": "Tres mil (3 000)",
    "meaningKo": "삼천 (3,000)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2026,
    "kanji": "八千",
    "displayReading": "はっせん",
    "readings": [
      "はっせん"
    ],
    "meaning": "Tám nghìn (8.000)",
    "meaningEn": "Eight thousand (8,000)",
    "meaningFr": "Huit mille (8 000)",
    "meaningEs": "Ocho mil (8 000)",
    "meaningKo": "팔천 (8,000)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 121,
    "kanji": "一万",
    "displayReading": "いちまん",
    "readings": [
      "いちまん"
    ],
    "meaning": "Mười nghìn (10.000)",
    "meaningEn": "Ten thousand (10,000)",
    "meaningFr": "Dix mille (10 000)",
    "meaningEs": "Diez mil (10 000)",
    "meaningKo": "만 (10,000)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 126,
    "kanji": "十万",
    "displayReading": "じゅうまん",
    "readings": [
      "じゅうまん"
    ],
    "meaning": "Một trăm nghìn (100.000)",
    "meaningEn": "One hundred thousand (100,000)",
    "meaningFr": "Cent mille (100 000)",
    "meaningEs": "Cien mil (100 000)",
    "meaningKo": "십만 (100,000)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2029,
    "kanji": "百万",
    "displayReading": "ひゃくまん",
    "readings": [
      "ひゃくまん"
    ],
    "meaning": "Một triệu (1.000.000)",
    "meaningEn": "One million (1,000,000)",
    "meaningFr": "Un million (1 000 000)",
    "meaningEs": "Un millón (1 000 000)",
    "meaningKo": "백만 (1,000,000)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 127,
    "kanji": "円",
    "displayReading": "えん",
    "readings": [
      "えん"
    ],
    "meaning": "Yên (tiền Nhật)",
    "meaningEn": "Yen (Japanese currency)",
    "meaningFr": "Yen (monnaie japonaise)",
    "meaningEs": "Yen (moneda japonesa)",
    "meaningKo": "엔 (일본 화폐)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 128,
    "kanji": "百円",
    "displayReading": "ひゃくえん",
    "readings": [
      "ひゃくえん"
    ],
    "meaning": "100 yên",
    "meaningEn": "100 yen",
    "meaningFr": "100 yens",
    "meaningEs": "100 yenes",
    "meaningKo": "100엔",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2032,
    "kanji": "千円",
    "displayReading": "せんえん",
    "readings": [
      "せんえん"
    ],
    "meaning": "1.000 yên",
    "meaningEn": "1,000 yen",
    "meaningFr": "1 000 yens",
    "meaningEs": "1 000 yenes",
    "meaningKo": "1,000엔",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2033,
    "kanji": "一万円",
    "displayReading": "いちまんえん",
    "readings": [
      "いちまんえん"
    ],
    "meaning": "10.000 yên",
    "meaningEn": "10,000 yen",
    "meaningFr": "10 000 yens",
    "meaningEs": "10 000 yenes",
    "meaningKo": "10,000엔",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 41,
    "kanji": "お金",
    "displayReading": "おかね",
    "readings": [
      "おかね"
    ],
    "meaning": "Tiền",
    "meaningEn": "Money",
    "meaningFr": "Argent, monnaie",
    "meaningEs": "Dinero",
    "meaningKo": "돈",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2035,
    "kanji": "半",
    "displayReading": "はん",
    "readings": [
      "はん"
    ],
    "meaning": "Một nửa, rưỡi",
    "meaningEn": "Half",
    "meaningFr": "Demi, moitié",
    "meaningEs": "Medio, mitad",
    "meaningKo": "반, 절반",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 32,
    "kanji": "半分",
    "displayReading": "はんぶん",
    "readings": [
      "はんぶん"
    ],
    "meaning": "Một nửa",
    "meaningEn": "Half (portion)",
    "meaningFr": "La moitié",
    "meaningEs": "La mitad",
    "meaningKo": "절반",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 97,
    "kanji": "半年",
    "displayReading": "はんとし",
    "readings": [
      "はんとし"
    ],
    "meaning": "Nửa năm",
    "meaningEn": "Half a year",
    "meaningFr": "Une demi-année (6 mois)",
    "meaningEs": "Medio año (6 meses)",
    "meaningKo": "반년 (6개월)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2038,
    "kanji": "半日",
    "displayReading": "はんにち",
    "readings": [
      "はんにち"
    ],
    "meaning": "Nửa ngày",
    "meaningEn": "Half a day",
    "meaningFr": "Une demi-journée",
    "meaningEs": "Medio día",
    "meaningKo": "반나절",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 94,
    "kanji": "十分",
    "displayReading": "じゅうぶん",
    "readings": [
      "じゅうぶん"
    ],
    "meaning": "Đầy đủ",
    "meaningEn": "Enough, sufficient",
    "meaningFr": "Suffisant, assez",
    "meaningEs": "Suficiente, bastante",
    "meaningKo": "충분함, 넉넉함",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2040,
    "kanji": "日",
    "displayReading": "ひ・にち",
    "readings": [
      "ひ",
      "にち"
    ],
    "meaning": "Ngày, mặt trời",
    "meaningEn": "Day, sun",
    "meaningFr": "Jour, soleil",
    "meaningEs": "Día, sol",
    "meaningKo": "날, 해",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2041,
    "kanji": "月",
    "displayReading": "つき・げつ",
    "readings": [
      "つき",
      "げつ"
    ],
    "meaning": "Tháng, mặt trăng",
    "meaningEn": "Month, moon",
    "meaningFr": "Mois, lune",
    "meaningEs": "Mes, luna",
    "meaningKo": "달, 월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 37,
    "kanji": "火",
    "displayReading": "ひ",
    "readings": [
      "ひ"
    ],
    "meaning": "Lửa",
    "meaningEn": "Fire",
    "meaningFr": "Feu",
    "meaningEs": "Fuego",
    "meaningKo": "불",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 10,
    "kanji": "水",
    "displayReading": "みず",
    "readings": [
      "みず"
    ],
    "meaning": "Nước",
    "meaningEn": "Water",
    "meaningFr": "Eau",
    "meaningEs": "Agua",
    "meaningKo": "물",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 39,
    "kanji": "木",
    "displayReading": "き",
    "readings": [
      "き"
    ],
    "meaning": "Cây, gỗ",
    "meaningEn": "Tree, wood",
    "meaningFr": "Arbre, bois",
    "meaningEs": "Árbol, madera",
    "meaningKo": "나무",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2045,
    "kanji": "金",
    "displayReading": "かね・きん",
    "readings": [
      "かね",
      "きん"
    ],
    "meaning": "Tiền, vàng",
    "meaningEn": "Money, gold",
    "meaningFr": "Argent, or",
    "meaningEs": "Dinero, oro",
    "meaningKo": "돈, 금",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 43,
    "kanji": "土",
    "displayReading": "つち",
    "readings": [
      "つち"
    ],
    "meaning": "Đất",
    "meaningEn": "Earth, soil",
    "meaningFr": "Terre, sol",
    "meaningEs": "Tierra, suelo",
    "meaningKo": "흙, 땅",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2047,
    "kanji": "曜日",
    "displayReading": "ようび",
    "readings": [
      "ようび"
    ],
    "meaning": "Thứ trong tuần",
    "meaningEn": "Day of the week",
    "meaningFr": "Jour de la semaine",
    "meaningEs": "Día de la semana",
    "meaningKo": "요일",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 33,
    "kanji": "月曜日",
    "displayReading": "げつようび",
    "readings": [
      "げつようび"
    ],
    "meaning": "Thứ Hai",
    "meaningEn": "Monday",
    "meaningFr": "Lundi",
    "meaningEs": "Lunes",
    "meaningKo": "월요일",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 36,
    "kanji": "火曜日",
    "displayReading": "かようび",
    "readings": [
      "かようび"
    ],
    "meaning": "Thứ Ba",
    "meaningEn": "Tuesday",
    "meaningFr": "Mardi",
    "meaningEs": "Martes",
    "meaningKo": "화요일",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 11,
    "kanji": "水曜日",
    "displayReading": "すいようび",
    "readings": [
      "すいようび"
    ],
    "meaning": "Thứ Tư",
    "meaningEn": "Wednesday",
    "meaningFr": "Mercredi",
    "meaningEs": "Miércoles",
    "meaningKo": "수요일",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 38,
    "kanji": "木曜日",
    "displayReading": "もくようび",
    "readings": [
      "もくようび"
    ],
    "meaning": "Thứ Năm",
    "meaningEn": "Thursday",
    "meaningFr": "Jeudi",
    "meaningEs": "Jueves",
    "meaningKo": "목요일",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 40,
    "kanji": "金曜日",
    "displayReading": "きんようび",
    "readings": [
      "きんようび"
    ],
    "meaning": "Thứ Sáu",
    "meaningEn": "Friday",
    "meaningFr": "Vendredi",
    "meaningEs": "Viernes",
    "meaningKo": "금요일",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 42,
    "kanji": "土曜日",
    "displayReading": "どようび",
    "readings": [
      "どようび"
    ],
    "meaning": "Thứ Bảy",
    "meaningEn": "Saturday",
    "meaningFr": "Samedi",
    "meaningEs": "Sábado",
    "meaningKo": "토요일",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 44,
    "kanji": "日曜日",
    "displayReading": "にちようび",
    "readings": [
      "にちようび"
    ],
    "meaning": "Chủ Nhật",
    "meaningEn": "Sunday",
    "meaningFr": "Dimanche",
    "meaningEs": "Domingo",
    "meaningKo": "일요일",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 59,
    "kanji": "一日",
    "displayReading": "ついたち",
    "readings": [
      "ついたち"
    ],
    "meaning": "Ngày mùng 1",
    "meaningEn": "1st day of the month",
    "meaningFr": "Le 1er du mois",
    "meaningEs": "Día 1 del mes",
    "meaningKo": "초하루 (1일)",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2056,
    "kanji": "一日",
    "displayReading": "いちにち",
    "readings": [
      "いちにち"
    ],
    "meaning": "Một ngày",
    "meaningEn": "One day",
    "meaningFr": "Une journée",
    "meaningEs": "Un día",
    "meaningKo": "하루 (1일간)",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 63,
    "kanji": "二日",
    "displayReading": "ふつか",
    "readings": [
      "ふつか"
    ],
    "meaning": "Ngày mùng 2 / 2 ngày",
    "meaningEn": "2nd day / 2 days",
    "meaningFr": "Le 2 du mois / 2 jours",
    "meaningEs": "Día 2 del mes / 2 días",
    "meaningKo": "2일 / 이틀",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 66,
    "kanji": "三日",
    "displayReading": "みっか",
    "readings": [
      "みっか"
    ],
    "meaning": "Ngày mùng 3 / 3 ngày",
    "meaningEn": "3rd day / 3 days",
    "meaningFr": "Le 3 du mois / 3 jours",
    "meaningEs": "Día 3 del mes / 3 días",
    "meaningKo": "3일 / 사흘",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 69,
    "kanji": "四日",
    "displayReading": "よっか",
    "readings": [
      "よっか"
    ],
    "meaning": "Ngày mùng 4 / 4 ngày",
    "meaningEn": "4th day / 4 days",
    "meaningFr": "Le 4 du mois / 4 jours",
    "meaningEs": "Día 4 del mes / 4 días",
    "meaningKo": "4일 / 나흘",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 75,
    "kanji": "五日",
    "displayReading": "いつか",
    "readings": [
      "いつか"
    ],
    "meaning": "Ngày mùng 5 / 5 ngày",
    "meaningEn": "5th day / 5 days",
    "meaningFr": "Le 5 du mois / 5 jours",
    "meaningEs": "Día 5 del mes / 5 días",
    "meaningKo": "5일 / 닷새",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 78,
    "kanji": "六日",
    "displayReading": "むいか",
    "readings": [
      "むいか"
    ],
    "meaning": "Ngày mùng 6 / 6 ngày",
    "meaningEn": "6th day / 6 days",
    "meaningFr": "Le 6 du mois / 6 jours",
    "meaningEs": "Día 6 del mes / 6 días",
    "meaningKo": "6일 / 엿새",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 81,
    "kanji": "七日",
    "displayReading": "なのか",
    "readings": [
      "なのか"
    ],
    "meaning": "Ngày mùng 7 / 7 ngày",
    "meaningEn": "7th day / 7 days",
    "meaningFr": "Le 7 du mois / 7 jours",
    "meaningEs": "Día 7 del mes / 7 días",
    "meaningKo": "7일 / 이레",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 85,
    "kanji": "八日",
    "displayReading": "ようか",
    "readings": [
      "ようか"
    ],
    "meaning": "Ngày mùng 8 / 8 ngày",
    "meaningEn": "8th day / 8 days",
    "meaningFr": "Le 8 du mois / 8 jours",
    "meaningEs": "Día 8 del mes / 8 días",
    "meaningKo": "8일 / 여드레",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 89,
    "kanji": "九日",
    "displayReading": "ここのか",
    "readings": [
      "ここのか"
    ],
    "meaning": "Ngày mùng 9 / 9 ngày",
    "meaningEn": "9th day / 9 days",
    "meaningFr": "Le 9 du mois / 9 jours",
    "meaningEs": "Día 9 del mes / 9 días",
    "meaningKo": "9일 / 아흐레",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 95,
    "kanji": "十日",
    "displayReading": "とおか",
    "readings": [
      "とおか"
    ],
    "meaning": "Ngày mùng 10 / 10 ngày",
    "meaningEn": "10th day / 10 days",
    "meaningFr": "Le 10 du mois / 10 jours",
    "meaningEs": "Día 10 del mes / 10 días",
    "meaningKo": "10일 / 열흘",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2066,
    "kanji": "二十日",
    "displayReading": "はつか",
    "readings": [
      "はつか"
    ],
    "meaning": "Ngày 20 / 20 ngày",
    "meaningEn": "20th day / 20 days",
    "meaningFr": "Le 20 du mois / 20 jours",
    "meaningEs": "Día 20 del mes / 20 días",
    "meaningKo": "20일 / 스무날 / 스무 살",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 34,
    "kanji": "一月",
    "displayReading": "いちがつ",
    "readings": [
      "いちがつ"
    ],
    "meaning": "Tháng 1",
    "meaningEn": "January",
    "meaningFr": "Janvier",
    "meaningEs": "Enero",
    "meaningKo": "1월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2068,
    "kanji": "二月",
    "displayReading": "にがつ",
    "readings": [
      "にがつ"
    ],
    "meaning": "Tháng 2",
    "meaningEn": "February",
    "meaningFr": "Février",
    "meaningEs": "Febrero",
    "meaningKo": "2월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 67,
    "kanji": "三月",
    "displayReading": "さんがつ",
    "readings": [
      "さんがつ"
    ],
    "meaning": "Tháng 3",
    "meaningEn": "March",
    "meaningFr": "Mars",
    "meaningEs": "Marzo",
    "meaningKo": "3월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 70,
    "kanji": "四月",
    "displayReading": "しがつ",
    "readings": [
      "しがつ"
    ],
    "meaning": "Tháng 4",
    "meaningEn": "April",
    "meaningFr": "Avril",
    "meaningEs": "Abril",
    "meaningKo": "4월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 76,
    "kanji": "五月",
    "displayReading": "ごがつ",
    "readings": [
      "ごがつ"
    ],
    "meaning": "Tháng 5",
    "meaningEn": "May",
    "meaningFr": "Mai",
    "meaningEs": "Mayo",
    "meaningKo": "5월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 79,
    "kanji": "六月",
    "displayReading": "ろくがつ",
    "readings": [
      "ろくがつ"
    ],
    "meaning": "Tháng 6",
    "meaningEn": "June",
    "meaningFr": "Juin",
    "meaningEs": "Junio",
    "meaningKo": "6월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 82,
    "kanji": "七月",
    "displayReading": "しちがつ",
    "readings": [
      "しちがつ"
    ],
    "meaning": "Tháng 7",
    "meaningEn": "July",
    "meaningFr": "Juillet",
    "meaningEs": "Julio",
    "meaningKo": "7월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 86,
    "kanji": "八月",
    "displayReading": "はちがつ",
    "readings": [
      "はちがつ"
    ],
    "meaning": "Tháng 8",
    "meaningEn": "August",
    "meaningFr": "Août",
    "meaningEs": "Agosto",
    "meaningKo": "8월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 90,
    "kanji": "九月",
    "displayReading": "くがつ",
    "readings": [
      "くがつ"
    ],
    "meaning": "Tháng 9",
    "meaningEn": "September",
    "meaningFr": "Septembre",
    "meaningEs": "Septiembre",
    "meaningKo": "9월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2076,
    "kanji": "十月",
    "displayReading": "じゅうがつ",
    "readings": [
      "じゅうがつ"
    ],
    "meaning": "Tháng 10",
    "meaningEn": "October",
    "meaningFr": "Octobre",
    "meaningEs": "Octubre",
    "meaningKo": "10월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2077,
    "kanji": "十一月",
    "displayReading": "じゅういちがつ",
    "readings": [
      "じゅういちがつ"
    ],
    "meaning": "Tháng 11",
    "meaningEn": "November",
    "meaningFr": "Novembre",
    "meaningEs": "Noviembre",
    "meaningKo": "11월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2078,
    "kanji": "十二月",
    "displayReading": "じゅうにがつ",
    "readings": [
      "じゅうにがつ"
    ],
    "meaning": "Tháng 12",
    "meaningEn": "December",
    "meaningFr": "Décembre",
    "meaningEs": "Diciembre",
    "meaningKo": "12월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 101,
    "kanji": "一ヶ月",
    "displayReading": "いっかげつ",
    "readings": [
      "いっかげつ"
    ],
    "meaning": "Một tháng (khoảng thời gian)",
    "meaningEn": "One month (duration)",
    "meaningFr": "Un mois (durée)",
    "meaningEs": "Un mes (duración)",
    "meaningKo": "1개월 (한 달간)",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2080,
    "kanji": "年",
    "displayReading": "とし・ねん",
    "readings": [
      "とし",
      "ねん"
    ],
    "meaning": "Năm",
    "meaningEn": "Year",
    "meaningFr": "Année",
    "meaningEs": "Año",
    "meaningKo": "해, 년",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2081,
    "kanji": "時",
    "displayReading": "とき・じ",
    "readings": [
      "とき",
      "じ"
    ],
    "meaning": "Khi, lúc, giờ",
    "meaningEn": "Time, hour, o'clock",
    "meaningFr": "Heure, moment",
    "meaningEs": "Hora, momento",
    "meaningKo": "시, 때",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 26,
    "kanji": "時間",
    "displayReading": "じかん",
    "readings": [
      "じかん"
    ],
    "meaning": "Thời gian, tiếng đồng hồ",
    "meaningEn": "Time, hours",
    "meaningFr": "Temps, durée (heures)",
    "meaningEs": "Tiempo, horas (duración)",
    "meaningKo": "시간",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 27,
    "kanji": "何時",
    "displayReading": "なんじ",
    "readings": [
      "なんじ"
    ],
    "meaning": "Mấy giờ",
    "meaningEn": "What time",
    "meaningFr": "Quelle heure",
    "meaningEs": "Qué hora",
    "meaningKo": "몇 시",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 72,
    "kanji": "四時",
    "displayReading": "よじ",
    "readings": [
      "よじ"
    ],
    "meaning": "4 giờ",
    "meaningEn": "4 o'clock",
    "meaningFr": "4 heures",
    "meaningEs": "Las 4 en punto",
    "meaningKo": "4시",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 31,
    "kanji": "三時半",
    "displayReading": "さんじはん",
    "readings": [
      "さんじはん"
    ],
    "meaning": "3 giờ rưỡi",
    "meaningEn": "3:30",
    "meaningFr": "3 heures et demie",
    "meaningEs": "Las 3 y media",
    "meaningKo": "3시 반",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2086,
    "kanji": "分",
    "displayReading": "ふん・ぷん",
    "readings": [
      "ふん",
      "ぷん"
    ],
    "meaning": "Phút",
    "meaningEn": "Minute",
    "meaningFr": "Minute",
    "meaningEs": "Minuto",
    "meaningKo": "분",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 93,
    "kanji": "十分",
    "displayReading": "じゅっぷん",
    "readings": [
      "じゅっぷん",
      "じっぷん"
    ],
    "meaning": "10 phút",
    "meaningEn": "10 minutes",
    "meaningFr": "10 minutes",
    "meaningEs": "10 minutos",
    "meaningKo": "10분",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 29,
    "kanji": "分かる",
    "displayReading": "わかる",
    "readings": [
      "わかる"
    ],
    "meaning": "Hiểu",
    "meaningEn": "Understand",
    "meaningFr": "Comprendre",
    "meaningEs": "Entender, comprender",
    "meaningKo": "알다, 이해하다",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2089,
    "kanji": "間",
    "displayReading": "あいだ・ま",
    "readings": [
      "あいだ",
      "ま"
    ],
    "meaning": "Khoảng giữa, khoảng thời gian",
    "meaningEn": "Between, interval",
    "meaningFr": "Entre, intervalle",
    "meaningEs": "Entre, intervalo",
    "meaningKo": "사이, 간격",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 64,
    "kanji": "二日間",
    "displayReading": "ふつかかん",
    "readings": [
      "ふつかかん"
    ],
    "meaning": "Trong vòng 2 ngày",
    "meaningEn": "Two days (duration)",
    "meaningFr": "Pendant 2 jours",
    "meaningEs": "Durante 2 días",
    "meaningKo": "이틀 동안",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 190,
    "kanji": "今",
    "displayReading": "いま",
    "readings": [
      "いま"
    ],
    "meaning": "Bây giờ",
    "meaningEn": "Now",
    "meaningFr": "Maintenant",
    "meaningEs": "Ahora",
    "meaningKo": "지금",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 46,
    "kanji": "今日",
    "displayReading": "きょう",
    "readings": [
      "きょう"
    ],
    "meaning": "Hôm nay",
    "meaningEn": "Today",
    "meaningFr": "Aujourd'hui",
    "meaningEs": "Hoy",
    "meaningKo": "오늘",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 35,
    "kanji": "今月",
    "displayReading": "こんげつ",
    "readings": [
      "こんげつ"
    ],
    "meaning": "Tháng này",
    "meaningEn": "This month",
    "meaningFr": "Ce mois-ci",
    "meaningEs": "Este mes",
    "meaningKo": "이번 달",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 96,
    "kanji": "今年",
    "displayReading": "ことし",
    "readings": [
      "ことし"
    ],
    "meaning": "Năm nay",
    "meaningEn": "This year",
    "meaningFr": "Cette année",
    "meaningEs": "Este año",
    "meaningKo": "올해, 금년",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 191,
    "kanji": "今週",
    "displayReading": "こんしゅう",
    "readings": [
      "こんしゅう"
    ],
    "meaning": "Tuần này",
    "meaningEn": "This week",
    "meaningFr": "Cette semaine",
    "meaningEs": "Esta semana",
    "meaningKo": "이번 주",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 45,
    "kanji": "毎日",
    "displayReading": "まいにち",
    "readings": [
      "まいにち"
    ],
    "meaning": "Mỗi ngày",
    "meaningEn": "Every day",
    "meaningFr": "Tous les jours",
    "meaningEs": "Todos los días",
    "meaningKo": "매일",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2097,
    "kanji": "毎週",
    "displayReading": "まいしゅう",
    "readings": [
      "まいしゅう"
    ],
    "meaning": "Mỗi tuần",
    "meaningEn": "Every week",
    "meaningFr": "Chaque semaine",
    "meaningEs": "Cada semana",
    "meaningKo": "매주",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 102,
    "kanji": "毎月",
    "displayReading": "まいつき",
    "readings": [
      "まいつき"
    ],
    "meaning": "Mỗi tháng",
    "meaningEn": "Every month",
    "meaningFr": "Chaque mois",
    "meaningEs": "Cada mes",
    "meaningKo": "매월, 매달",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 98,
    "kanji": "毎年",
    "displayReading": "まいとし・まいねん",
    "readings": [
      "まいとし",
      "まいねん"
    ],
    "meaning": "Mỗi năm",
    "meaningEn": "Every year",
    "meaningFr": "Chaque année",
    "meaningEs": "Cada año",
    "meaningKo": "매년, 해마다",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 271,
    "kanji": "午前",
    "displayReading": "ごぜん",
    "readings": [
      "ごぜん"
    ],
    "meaning": "Buổi sáng (trước trưa)",
    "meaningEn": "Morning, AM",
    "meaningFr": "Matin (AM)",
    "meaningEs": "Mañana (a. m.)",
    "meaningKo": "오전",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 272,
    "kanji": "午後",
    "displayReading": "ごご",
    "readings": [
      "ごご"
    ],
    "meaning": "Buổi chiều (sau trưa)",
    "meaningEn": "Afternoon, PM",
    "meaningFr": "Après-midi (PM)",
    "meaningEs": "Tarde (p. m.)",
    "meaningKo": "오후",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 270,
    "kanji": "前",
    "displayReading": "まえ",
    "readings": [
      "まえ"
    ],
    "meaning": "Trước, phía trước",
    "meaningEn": "Before, in front",
    "meaningFr": "Avant, devant",
    "meaningEs": "Antes, delante",
    "meaningKo": "앞, 이전",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 344,
    "kanji": "後",
    "displayReading": "あと",
    "readings": [
      "あと"
    ],
    "meaning": "Sau",
    "meaningEn": "After, later",
    "meaningFr": "Après, plus tard",
    "meaningEs": "Después, más tarde",
    "meaningKo": "뒤, 나중",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 345,
    "kanji": "後ろ",
    "displayReading": "うしろ",
    "readings": [
      "うしろ"
    ],
    "meaning": "Phía sau",
    "meaningEn": "Behind, back",
    "meaningFr": "Derrière",
    "meaningEs": "Detrás",
    "meaningKo": "뒤쪽",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 347,
    "kanji": "最後",
    "displayReading": "さいご",
    "readings": [
      "さいご"
    ],
    "meaning": "Cuối cùng",
    "meaningEn": "Last, final",
    "meaningFr": "La fin, le dernier",
    "meaningEs": "El final, el último",
    "meaningKo": "마지막",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 337,
    "kanji": "先",
    "displayReading": "さき",
    "readings": [
      "さき"
    ],
    "meaning": "Trước, phía trước",
    "meaningEn": "Ahead, previous",
    "meaningFr": "Avant, devant, bout",
    "meaningEs": "Antes, adelante, punta",
    "meaningKo": "앞, 끝, 먼저",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 343,
    "kanji": "先に",
    "displayReading": "さきに",
    "readings": [
      "さきに"
    ],
    "meaning": "Trước, làm trước",
    "meaningEn": "First, ahead",
    "meaningFr": "En premier, d'avance",
    "meaningEs": "Primero, de antemano",
    "meaningKo": "먼저, 미리",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 339,
    "kanji": "先週",
    "displayReading": "せんしゅう",
    "readings": [
      "せんしゅう"
    ],
    "meaning": "Tuần trước",
    "meaningEn": "Last week",
    "meaningFr": "La semaine dernière",
    "meaningEs": "La semana pasada",
    "meaningKo": "지난주",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 340,
    "kanji": "先月",
    "displayReading": "せんげつ",
    "readings": [
      "せんげつ"
    ],
    "meaning": "Tháng trước",
    "meaningEn": "Last month",
    "meaningFr": "Le mois dernier",
    "meaningEs": "El mes pasado",
    "meaningKo": "지난달",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 341,
    "kanji": "先日",
    "displayReading": "せんじつ",
    "readings": [
      "せんじつ"
    ],
    "meaning": "Hôm trước",
    "meaningEn": "The other day",
    "meaningFr": "L'autre jour",
    "meaningEs": "El otro día",
    "meaningKo": "요전 날, 일전",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 83,
    "kanji": "七夕",
    "displayReading": "たなばた",
    "readings": [
      "たなばた"
    ],
    "meaning": "Lễ Thất Tịch",
    "meaningEn": "Tanabata (Star Festival)",
    "meaningFr": "Tanabata (fête des étoiles)",
    "meaningEs": "Tanabata (festival de las estrellas)",
    "meaningKo": "칠석",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2112,
    "kanji": "人",
    "displayReading": "ひと",
    "readings": [
      "ひと"
    ],
    "meaning": "Người",
    "meaningEn": "Person",
    "meaningFr": "Personne",
    "meaningEs": "Persona",
    "meaningKo": "사람",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 58,
    "kanji": "一人",
    "displayReading": "ひとり",
    "readings": [
      "ひとり"
    ],
    "meaning": "Một người",
    "meaningEn": "One person, alone",
    "meaningFr": "Une personne, seul",
    "meaningEs": "Una persona, solo",
    "meaningKo": "한 사람, 혼자",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 62,
    "kanji": "二人",
    "displayReading": "ふたり",
    "readings": [
      "ふたり"
    ],
    "meaning": "Hai người",
    "meaningEn": "Two people",
    "meaningFr": "Deux personnes",
    "meaningEs": "Dos personas",
    "meaningKo": "두 사람",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 71,
    "kanji": "四人",
    "displayReading": "よにん",
    "readings": [
      "よにん"
    ],
    "meaning": "Bốn người",
    "meaningEn": "Four people",
    "meaningFr": "Quatre personnes",
    "meaningEs": "Cuatro personas",
    "meaningKo": "네 사람",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 91,
    "kanji": "九人",
    "displayReading": "きゅうにん",
    "readings": [
      "きゅうにん"
    ],
    "meaning": "Chín người",
    "meaningEn": "Nine people",
    "meaningFr": "Neuf personnes",
    "meaningEs": "Nueve personas",
    "meaningKo": "아홉 사람",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 154,
    "kanji": "人々",
    "displayReading": "ひとびと",
    "readings": [
      "ひとびと"
    ],
    "meaning": "Mọi người",
    "meaningEn": "People, everyone",
    "meaningFr": "Les gens",
    "meaningEs": "La gente, las personas",
    "meaningKo": "사람들",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 155,
    "kanji": "人間",
    "displayReading": "にんげん",
    "readings": [
      "にんげん"
    ],
    "meaning": "Con người, nhân loại",
    "meaningEn": "Human being",
    "meaningFr": "Être humain",
    "meaningEs": "Ser humano",
    "meaningKo": "인간",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2119,
    "kanji": "大人",
    "displayReading": "おとな",
    "readings": [
      "おとな"
    ],
    "meaning": "Người lớn",
    "meaningEn": "Adult",
    "meaningFr": "Adulte",
    "meaningEs": "Adulto",
    "meaningKo": "어른, 성인",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2120,
    "kanji": "父",
    "displayReading": "ちち",
    "readings": [
      "ちち"
    ],
    "meaning": "Bố (của mình)",
    "meaningEn": "Father (humble)",
    "meaningFr": "Mon père",
    "meaningEs": "Mi padre",
    "meaningKo": "나의 아버지",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2121,
    "kanji": "お父さん",
    "displayReading": "おとうさん",
    "readings": [
      "おとうさん"
    ],
    "meaning": "Bố",
    "meaningEn": "Father",
    "meaningFr": "Père (poli)",
    "meaningEs": "Padre (cortés)",
    "meaningKo": "아버지 (높임말)",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 145,
    "kanji": "父親",
    "displayReading": "ちちおや",
    "readings": [
      "ちちおや"
    ],
    "meaning": "Người cha",
    "meaningEn": "Father (formal)",
    "meaningFr": "Père (formel)",
    "meaningEs": "Padre (formal)",
    "meaningKo": "부친 (격식)",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2123,
    "kanji": "母",
    "displayReading": "はは",
    "readings": [
      "はは"
    ],
    "meaning": "Mẹ (của mình)",
    "meaningEn": "Mother (humble)",
    "meaningFr": "Ma mère",
    "meaningEs": "Mi madre",
    "meaningKo": "나의 어머니",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2124,
    "kanji": "お母さん",
    "displayReading": "おかあさん",
    "readings": [
      "おかあさん"
    ],
    "meaning": "Mẹ",
    "meaningEn": "Mother",
    "meaningFr": "Mère (poli)",
    "meaningEs": "Madre (cortés)",
    "meaningKo": "어머니 (높임말)",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 146,
    "kanji": "母親",
    "displayReading": "ははおや",
    "readings": [
      "ははおや"
    ],
    "meaning": "Người mẹ",
    "meaningEn": "Mother (formal)",
    "meaningFr": "Mère (formel)",
    "meaningEs": "Madre (formal)",
    "meaningKo": "모친 (격식)",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2126,
    "kanji": "子",
    "displayReading": "こ",
    "readings": [
      "こ"
    ],
    "meaning": "Trẻ em, con cái",
    "meaningEn": "Child",
    "meaningFr": "Enfant",
    "meaningEs": "Niño, hijo",
    "meaningKo": "아이",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2127,
    "kanji": "子供",
    "displayReading": "こども",
    "readings": [
      "こども"
    ],
    "meaning": "Trẻ con",
    "meaningEn": "Children",
    "meaningFr": "Enfants",
    "meaningEs": "Niños",
    "meaningKo": "아이들",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2128,
    "kanji": "男",
    "displayReading": "おとこ",
    "readings": [
      "おとこ"
    ],
    "meaning": "Đàn ông, nam giới",
    "meaningEn": "Man, male",
    "meaningFr": "Homme",
    "meaningEs": "Hombre",
    "meaningKo": "남자",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 149,
    "kanji": "男の人",
    "displayReading": "おとこのひと",
    "readings": [
      "おとこのひと"
    ],
    "meaning": "Người đàn ông",
    "meaningEn": "Man (adult male)",
    "meaningFr": "Un homme",
    "meaningEs": "Un hombre",
    "meaningKo": "남자 사람",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2130,
    "kanji": "男の子",
    "displayReading": "おとこのこ",
    "readings": [
      "おとこのこ"
    ],
    "meaning": "Bé trai",
    "meaningEn": "Boy",
    "meaningFr": "Garçon",
    "meaningEs": "Niño, chico",
    "meaningKo": "남자아이",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 150,
    "kanji": "男子",
    "displayReading": "だんし",
    "readings": [
      "だんし"
    ],
    "meaning": "Nam sinh, con trai",
    "meaningEn": "Male student, boy",
    "meaningFr": "Jeune garçon, élève masculin",
    "meaningEs": "Muchacho, alumno varón",
    "meaningKo": "남학생, 남자",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2132,
    "kanji": "女",
    "displayReading": "おんな",
    "readings": [
      "おんな"
    ],
    "meaning": "Phụ nữ, nữ giới",
    "meaningEn": "Woman, female",
    "meaningFr": "Femme",
    "meaningEs": "Mujer",
    "meaningKo": "여자",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 151,
    "kanji": "女の人",
    "displayReading": "おんなのひと",
    "readings": [
      "おんなのひと"
    ],
    "meaning": "Người phụ nữ",
    "meaningEn": "Woman (adult female)",
    "meaningFr": "Une femme",
    "meaningEs": "Una mujer",
    "meaningKo": "여자 사람",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 148,
    "kanji": "女の子",
    "displayReading": "おんなのこ",
    "readings": [
      "おんなのこ"
    ],
    "meaning": "Bé gái",
    "meaningEn": "Girl",
    "meaningFr": "Fille",
    "meaningEs": "Niña, chica",
    "meaningKo": "여자아이",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 152,
    "kanji": "女子",
    "displayReading": "じょし",
    "readings": [
      "じょし"
    ],
    "meaning": "Nữ sinh, con gái",
    "meaningEn": "Female student, girl",
    "meaningFr": "Jeune fille, élève féminine",
    "meaningEs": "Muchacha, alumna",
    "meaningKo": "여학생, 여자",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 369,
    "kanji": "友",
    "displayReading": "とも",
    "readings": [
      "とも"
    ],
    "meaning": "Bạn",
    "meaningEn": "Friend",
    "meaningFr": "Ami",
    "meaningEs": "Amigo",
    "meaningKo": "친구",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 370,
    "kanji": "友達",
    "displayReading": "ともだち",
    "readings": [
      "ともだち"
    ],
    "meaning": "Bạn bè",
    "meaningEn": "Friend, friends",
    "meaningFr": "Ami, camarade",
    "meaningEs": "Amigo, compañero",
    "meaningKo": "친구, 벗",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 371,
    "kanji": "友人",
    "displayReading": "ゆうじん",
    "readings": [
      "ゆうじん"
    ],
    "meaning": "Người bạn, bạn thân",
    "meaningEn": "Friend (formal)",
    "meaningFr": "Ami (formel)",
    "meaningEs": "Amigo (formal)",
    "meaningKo": "우인, 친구 (격식)",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2139,
    "kanji": "名",
    "displayReading": "な",
    "readings": [
      "な"
    ],
    "meaning": "Tên",
    "meaningEn": "Name",
    "meaningFr": "Nom, prénom",
    "meaningEs": "Nombre",
    "meaningKo": "이름",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2140,
    "kanji": "名前",
    "displayReading": "なまえ",
    "readings": [
      "なまえ"
    ],
    "meaning": "Tên, họ tên",
    "meaningEn": "Full name, name",
    "meaningFr": "Nom complet",
    "meaningEs": "Nombre completo",
    "meaningKo": "성명",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2141,
    "kanji": "名字",
    "displayReading": "みょうじ",
    "readings": [
      "みょうじ"
    ],
    "meaning": "Họ",
    "meaningEn": "Family name, surname",
    "meaningFr": "Nom de famille",
    "meaningEs": "Apellido",
    "meaningKo": "성씨",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2142,
    "kanji": "私",
    "displayReading": "わたし",
    "readings": [
      "わたし"
    ],
    "meaning": "Tôi",
    "meaningEn": "I, me",
    "meaningFr": "Je, moi",
    "meaningEs": "Yo",
    "meaningKo": "나, 저",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 156,
    "kanji": "何",
    "displayReading": "なに・なん",
    "readings": [
      "なに",
      "なん"
    ],
    "meaning": "Cái gì",
    "meaningEn": "What",
    "meaningFr": "Quoi, que",
    "meaningEs": "Qué",
    "meaningKo": "무엇",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 157,
    "kanji": "何人",
    "displayReading": "なんにん",
    "readings": [
      "なんにん"
    ],
    "meaning": "Mấy người",
    "meaningEn": "How many people",
    "meaningFr": "Combien de personnes",
    "meaningEs": "Cuántas personas",
    "meaningKo": "몇 명",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 158,
    "kanji": "何人",
    "displayReading": "なにじん",
    "readings": [
      "なにじん"
    ],
    "meaning": "Người nước nào",
    "meaningEn": "What nationality",
    "meaningFr": "Quelle nationalité",
    "meaningEs": "Qué nacionalidad",
    "meaningKo": "어느 나라 사람",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 30,
    "kanji": "自分",
    "displayReading": "じぶん",
    "readings": [
      "じぶん"
    ],
    "meaning": "Bản thân, chính mình",
    "meaningEn": "Oneself",
    "meaningFr": "Soi-même",
    "meaningEs": "Uno mismo",
    "meaningKo": "자신, 자기",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 153,
    "kanji": "人生",
    "displayReading": "じんせい",
    "readings": [
      "じんせい"
    ],
    "meaning": "Cuộc đời, cuộc sống",
    "meaningEn": "Human life",
    "meaningFr": "La vie humaine",
    "meaningEs": "La vida humana",
    "meaningKo": "인생",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2148,
    "kanji": "上",
    "displayReading": "うえ",
    "readings": [
      "うえ"
    ],
    "meaning": "Bên trên",
    "meaningEn": "Above, up",
    "meaningFr": "Au-dessus, haut",
    "meaningEs": "Arriba, encima",
    "meaningKo": "위",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2149,
    "kanji": "上がる",
    "displayReading": "あがる",
    "readings": [
      "あがる"
    ],
    "meaning": "Đi lên, tăng lên",
    "meaningEn": "Go up, rise",
    "meaningFr": "Monter, augmenter",
    "meaningEs": "Subir, aumentar",
    "meaningKo": "오르다",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2150,
    "kanji": "上げる",
    "displayReading": "あげる",
    "readings": [
      "あげる"
    ],
    "meaning": "Đưa lên, tặng",
    "meaningEn": "Raise, give",
    "meaningFr": "Lever, offrir",
    "meaningEs": "Levantar, dar",
    "meaningKo": "올리다, 드리다",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2151,
    "kanji": "下",
    "displayReading": "した",
    "readings": [
      "した"
    ],
    "meaning": "Bên dưới",
    "meaningEn": "Below, down",
    "meaningFr": "Au-dessous, bas",
    "meaningEs": "Abajo, debajo",
    "meaningKo": "아래, 밑",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2152,
    "kanji": "下がる",
    "displayReading": "さがる",
    "readings": [
      "さがる"
    ],
    "meaning": "Đi xuống, giảm xuống",
    "meaningEn": "Go down, drop",
    "meaningFr": "Descendre, baisser",
    "meaningEs": "Bajar, descender",
    "meaningKo": "내려가다",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2153,
    "kanji": "下げる",
    "displayReading": "さげる",
    "readings": [
      "さげる"
    ],
    "meaning": "Hạ xuống",
    "meaningEn": "Lower, hang down",
    "meaningFr": "Baisser, abaisser",
    "meaningEs": "Bajar (algo)",
    "meaningKo": "내리다",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 306,
    "kanji": "左",
    "displayReading": "ひだり",
    "readings": [
      "ひだり"
    ],
    "meaning": "Bên trái",
    "meaningEn": "Left",
    "meaningFr": "Gauche",
    "meaningEs": "Izquierda",
    "meaningKo": "왼쪽",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 308,
    "kanji": "左側",
    "displayReading": "ひだりがわ",
    "readings": [
      "ひだりがわ"
    ],
    "meaning": "Phía bên trái",
    "meaningEn": "Left side",
    "meaningFr": "Côté gauche",
    "meaningEs": "Lado izquierdo",
    "meaningKo": "좌측",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 303,
    "kanji": "右",
    "displayReading": "みぎ",
    "readings": [
      "みぎ"
    ],
    "meaning": "Bên phải",
    "meaningEn": "Right",
    "meaningFr": "Droite",
    "meaningEs": "Derecha",
    "meaningKo": "오른쪽",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 305,
    "kanji": "右側",
    "displayReading": "みぎがわ",
    "readings": [
      "みぎがわ"
    ],
    "meaning": "Phía bên phải",
    "meaningEn": "Right side",
    "meaningFr": "Côté droit",
    "meaningEs": "Lado derecho",
    "meaningKo": "우측",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 309,
    "kanji": "左右",
    "displayReading": "さゆう",
    "readings": [
      "さゆう"
    ],
    "meaning": "Trái phải",
    "meaningEn": "Left and right",
    "meaningFr": "Gauche et droite",
    "meaningEs": "Izquierda y derecha",
    "meaningKo": "좌우",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 175,
    "kanji": "中",
    "displayReading": "なか",
    "readings": [
      "なか"
    ],
    "meaning": "Bên trong, ở giữa",
    "meaningEn": "Inside, middle",
    "meaningFr": "À l'intérieur, milieu",
    "meaningEs": "Dentro, medio",
    "meaningKo": "안, 가운데",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 60,
    "kanji": "一日中",
    "displayReading": "いちにちじゅう",
    "readings": [
      "いちにちじゅう"
    ],
    "meaning": "Suốt cả ngày",
    "meaningEn": "All day long",
    "meaningFr": "Toute la journée",
    "meaningEs": "Todo el día",
    "meaningKo": "하루 종일",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2161,
    "kanji": "内",
    "displayReading": "うち",
    "readings": [
      "うち"
    ],
    "meaning": "Bên trong",
    "meaningEn": "Inside, within",
    "meaningFr": "Dedans, intérieur",
    "meaningEs": "Adentro, interior",
    "meaningKo": "안쪽, 집 안",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2162,
    "kanji": "案内",
    "displayReading": "あんない",
    "readings": [
      "あんない"
    ],
    "meaning": "Hướng dẫn",
    "meaningEn": "Guidance, information",
    "meaningFr": "Guide, renseignements",
    "meaningEs": "Guía, información",
    "meaningKo": "안내",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 167,
    "kanji": "外",
    "displayReading": "そと",
    "readings": [
      "そと"
    ],
    "meaning": "Bên ngoài",
    "meaningEn": "Outside",
    "meaningFr": "Dehors, extérieur",
    "meaningEs": "Afuera, exterior",
    "meaningKo": "밖, 바깥",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 165,
    "kanji": "外国",
    "displayReading": "がいこく",
    "readings": [
      "がいこく"
    ],
    "meaning": "Nước ngoài",
    "meaningEn": "Foreign country",
    "meaningFr": "Pays étranger",
    "meaningEs": "País extranjero",
    "meaningKo": "외국",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 168,
    "kanji": "外国人",
    "displayReading": "がいこくじん",
    "readings": [
      "がいこくじん"
    ],
    "meaning": "Người nước ngoài",
    "meaningEn": "Foreigner",
    "meaningFr": "Étranger (personne)",
    "meaningEs": "Extranjero (persona)",
    "meaningKo": "외국인",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 103,
    "kanji": "東",
    "displayReading": "ひがし",
    "readings": [
      "ひがし"
    ],
    "meaning": "Phía Đông",
    "meaningEn": "East",
    "meaningFr": "Est",
    "meaningEs": "Este",
    "meaningKo": "동쪽",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 104,
    "kanji": "東口",
    "displayReading": "ひがしぐち",
    "readings": [
      "ひがしぐち"
    ],
    "meaning": "Cửa Đông",
    "meaningEn": "East exit",
    "meaningFr": "Sortie Est",
    "meaningEs": "Salida Este",
    "meaningKo": "동쪽 출구",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 106,
    "kanji": "東南アジア",
    "displayReading": "とうなんあじあ",
    "readings": [
      "とうなんあじあ"
    ],
    "meaning": "Đông Nam Á",
    "meaningEn": "Southeast Asia",
    "meaningFr": "Asie du Sud-Est",
    "meaningEs": "Sudeste Asiático",
    "meaningKo": "동남아시아",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 107,
    "kanji": "西",
    "displayReading": "にし",
    "readings": [
      "にし"
    ],
    "meaning": "Phía Tây",
    "meaningEn": "West",
    "meaningFr": "Ouest",
    "meaningEs": "Oeste",
    "meaningKo": "서쪽",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 108,
    "kanji": "西口",
    "displayReading": "にしぐち",
    "readings": [
      "にしぐち"
    ],
    "meaning": "Cửa Tây",
    "meaningEn": "West exit",
    "meaningFr": "Sortie Ouest",
    "meaningEs": "Salida Oeste",
    "meaningKo": "서쪽 출구",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 109,
    "kanji": "関西",
    "displayReading": "かんさい",
    "readings": [
      "かんさい"
    ],
    "meaning": "Vùng Kansai",
    "meaningEn": "Kansai region",
    "meaningFr": "Région du Kansai",
    "meaningEs": "Región de Kansai",
    "meaningKo": "간사이 지방",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 110,
    "kanji": "南",
    "displayReading": "みなみ",
    "readings": [
      "みなみ"
    ],
    "meaning": "Phía Nam",
    "meaningEn": "South",
    "meaningFr": "Sud",
    "meaningEs": "Sur",
    "meaningKo": "남쪽",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 111,
    "kanji": "南口",
    "displayReading": "みなみぐち",
    "readings": [
      "みなみぐち"
    ],
    "meaning": "Cửa Nam",
    "meaningEn": "South exit",
    "meaningFr": "Sortie Sud",
    "meaningEs": "Salida Sur",
    "meaningKo": "남쪽 출구",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 112,
    "kanji": "北",
    "displayReading": "きた",
    "readings": [
      "きた"
    ],
    "meaning": "Phía Bắc",
    "meaningEn": "North",
    "meaningFr": "Nord",
    "meaningEs": "Norte",
    "meaningKo": "북쪽",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 113,
    "kanji": "北口",
    "displayReading": "きたぐち",
    "readings": [
      "きたぐち"
    ],
    "meaning": "Cửa Bắc",
    "meaningEn": "North exit",
    "meaningFr": "Sortie Nord",
    "meaningEs": "Salida Norte",
    "meaningKo": "북쪽 출구",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 114,
    "kanji": "北海道",
    "displayReading": "ほっかいどう",
    "readings": [
      "ほっかいどう"
    ],
    "meaning": "Hokkaido",
    "meaningEn": "Hokkaido",
    "meaningFr": "Hokkaido",
    "meaningEs": "Hokkaido",
    "meaningKo": "홋카이도",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 115,
    "kanji": "口",
    "displayReading": "くち",
    "readings": [
      "くち"
    ],
    "meaning": "Miệng, cửa ra vào",
    "meaningEn": "Mouth, entrance",
    "meaningFr": "Bouche, ouverture",
    "meaningEs": "Boca, abertura",
    "meaningKo": "입, 출입구",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 118,
    "kanji": "人口",
    "displayReading": "じんこう",
    "readings": [
      "じんこう"
    ],
    "meaning": "Dân số",
    "meaningEn": "Population",
    "meaningFr": "Population",
    "meaningEs": "Población",
    "meaningKo": "인구",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2179,
    "kanji": "出る",
    "displayReading": "でる",
    "readings": [
      "でる"
    ],
    "meaning": "Đi ra",
    "meaningEn": "Go out, exit",
    "meaningFr": "Sortir",
    "meaningEs": "Salir",
    "meaningKo": "나가다, 나오다",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2180,
    "kanji": "出す",
    "displayReading": "だす",
    "readings": [
      "だす"
    ],
    "meaning": "Đưa ra, gửi ra",
    "meaningEn": "Take out, submit",
    "meaningFr": "Sortir (qqch), envoyer",
    "meaningEs": "Sacar, enviar",
    "meaningKo": "내다, 보내다",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 116,
    "kanji": "出口",
    "displayReading": "でぐち",
    "readings": [
      "でぐち"
    ],
    "meaning": "Lối ra",
    "meaningEn": "Exit",
    "meaningFr": "Sortie",
    "meaningEs": "Salida",
    "meaningKo": "출구",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2182,
    "kanji": "入る",
    "displayReading": "はいる",
    "readings": [
      "はいる"
    ],
    "meaning": "Đi vào",
    "meaningEn": "Enter, go in",
    "meaningFr": "Entrer",
    "meaningEs": "Entrar",
    "meaningKo": "들어가다, 들어오다",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2183,
    "kanji": "入れる",
    "displayReading": "いれる",
    "readings": [
      "いれる"
    ],
    "meaning": "Cho vào, bỏ vào",
    "meaningEn": "Put in, insert",
    "meaningFr": "Mettre dedans, insérer",
    "meaningEs": "Meter, introducir",
    "meaningKo": "넣다",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2184,
    "kanji": "入口",
    "displayReading": "いりぐち",
    "readings": [
      "いりぐち"
    ],
    "meaning": "Lối vào",
    "meaningEn": "Entrance",
    "meaningFr": "Entrée",
    "meaningEs": "Entrada",
    "meaningKo": "입구",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 129,
    "kanji": "行く",
    "displayReading": "いく",
    "readings": [
      "いく"
    ],
    "meaning": "Đi",
    "meaningEn": "Go",
    "meaningFr": "Aller",
    "meaningEs": "Ir",
    "meaningKo": "가다",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 2186,
    "kanji": "行う",
    "displayReading": "おこなう",
    "readings": [
      "おこなう"
    ],
    "meaning": "Tiến hành, tổ chức",
    "meaningEn": "Perform, carry out",
    "meaningFr": "Effectuer, organiser",
    "meaningEs": "Realizar, llevar a cabo",
    "meaningKo": "행하다, 실시하다",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 133,
    "kanji": "来る",
    "displayReading": "くる",
    "readings": [
      "くる"
    ],
    "meaning": "Đến",
    "meaningEn": "Come",
    "meaningFr": "Venir",
    "meaningEs": "Venir",
    "meaningKo": "오다",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 134,
    "kanji": "来週",
    "displayReading": "らいしゅう",
    "readings": [
      "らいしゅう"
    ],
    "meaning": "Tuần sau",
    "meaningEn": "Next week",
    "meaningFr": "La semaine prochaine",
    "meaningEs": "La próxima semana",
    "meaningKo": "다음 주",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 2189,
    "kanji": "来月",
    "displayReading": "らいげつ",
    "readings": [
      "らいげつ"
    ],
    "meaning": "Tháng sau",
    "meaningEn": "Next month",
    "meaningFr": "Le mois prochain",
    "meaningEs": "El próximo mes",
    "meaningKo": "다음 달",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 135,
    "kanji": "来年",
    "displayReading": "らいねん",
    "readings": [
      "らいねん"
    ],
    "meaning": "Năm sau",
    "meaningEn": "Next year",
    "meaningFr": "L'année prochaine",
    "meaningEs": "El próximo año",
    "meaningKo": "내년",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 2191,
    "kanji": "帰る",
    "displayReading": "かえる",
    "readings": [
      "かえる"
    ],
    "meaning": "Trở về",
    "meaningEn": "Return home",
    "meaningFr": "Rentrer chez soi",
    "meaningEs": "Volver a casa",
    "meaningKo": "돌아가다, 귀가하다",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 2192,
    "kanji": "帰国",
    "displayReading": "きこく",
    "readings": [
      "きこく"
    ],
    "meaning": "Về nước",
    "meaningEn": "Return to one's country",
    "meaningFr": "Rentrer dans son pays",
    "meaningEs": "Regresar a su país",
    "meaningKo": "귀국",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 138,
    "kanji": "休む",
    "displayReading": "やすむ",
    "readings": [
      "やすむ"
    ],
    "meaning": "Nghỉ ngơi",
    "meaningEn": "Rest, take a break",
    "meaningFr": "Se reposer",
    "meaningEs": "Descansar",
    "meaningKo": "쉬다",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 139,
    "kanji": "休み",
    "displayReading": "やすみ",
    "readings": [
      "やすみ"
    ],
    "meaning": "Ngày nghỉ",
    "meaningEn": "Holiday, day off",
    "meaningFr": "Repos, vacances",
    "meaningEs": "Descanso, vacaciones",
    "meaningKo": "휴식, 휴일, 방학",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 2195,
    "kanji": "駅",
    "displayReading": "えき",
    "readings": [
      "えき"
    ],
    "meaning": "Nhà ga",
    "meaningEn": "Train station",
    "meaningFr": "Gare",
    "meaningEs": "Estación de tren",
    "meaningKo": "역",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 2196,
    "kanji": "駅前",
    "displayReading": "えきまえ",
    "readings": [
      "えきまえ"
    ],
    "meaning": "Trước nhà ga",
    "meaningEn": "In front of the station",
    "meaningFr": "Devant la gare",
    "meaningEs": "Frente a la estación",
    "meaningKo": "역 앞",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 2197,
    "kanji": "駅員",
    "displayReading": "えきいん",
    "readings": [
      "えきいん"
    ],
    "meaning": "Nhân viên nhà ga",
    "meaningEn": "Station staff",
    "meaningFr": "Employé de gare",
    "meaningEs": "Empleado de estación",
    "meaningKo": "역무원",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 2198,
    "kanji": "車",
    "displayReading": "くるま",
    "readings": [
      "くるま"
    ],
    "meaning": "Ô tô, xe hơi",
    "meaningEn": "Car, automobile",
    "meaningFr": "Voiture",
    "meaningEs": "Coche, automóvil",
    "meaningKo": "차, 자동차",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 2199,
    "kanji": "電車",
    "displayReading": "でんしゃ",
    "readings": [
      "でんしゃ"
    ],
    "meaning": "Tàu điện",
    "meaningEn": "Electric train",
    "meaningFr": "Train électrique",
    "meaningEs": "Tren eléctrico",
    "meaningKo": "전철",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 212,
    "kanji": "電気",
    "displayReading": "でんき",
    "readings": [
      "でんき"
    ],
    "meaning": "Điện, đèn điện",
    "meaningEn": "Electricity, light",
    "meaningFr": "Électricité, lumière",
    "meaningEs": "Electricidad, luz",
    "meaningKo": "전기, 불빛",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 294,
    "kanji": "道",
    "displayReading": "みち",
    "readings": [
      "みち"
    ],
    "meaning": "Con đường",
    "meaningEn": "Road, way",
    "meaningFr": "Chemin, route",
    "meaningEs": "Camino, vía",
    "meaningKo": "길",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 296,
    "kanji": "道路",
    "displayReading": "どうろ",
    "readings": [
      "どうろ"
    ],
    "meaning": "Đường giao thông",
    "meaningEn": "Road, street",
    "meaningFr": "Route, chaussée",
    "meaningEs": "Carretera, calzada",
    "meaningKo": "도로",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 295,
    "kanji": "茶道",
    "displayReading": "さどう",
    "readings": [
      "さどう"
    ],
    "meaning": "Trà đạo",
    "meaningEn": "Tea ceremony",
    "meaningFr": "Cérémonie du thé",
    "meaningEs": "Ceremonia del té",
    "meaningKo": "다도",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 297,
    "kanji": "書道",
    "displayReading": "しょどう",
    "readings": [
      "しょどう"
    ],
    "meaning": "Thư pháp",
    "meaningEn": "Calligraphy",
    "meaningFr": "Calligraphie",
    "meaningEs": "Caligrafía",
    "meaningKo": "서예",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 298,
    "kanji": "通る",
    "displayReading": "とおる",
    "readings": [
      "とおる"
    ],
    "meaning": "Đi qua",
    "meaningEn": "Pass through",
    "meaningFr": "Passer par",
    "meaningEs": "Pasar por",
    "meaningKo": "지나가다, 통과하다",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 299,
    "kanji": "通り",
    "displayReading": "とおり",
    "readings": [
      "とおり"
    ],
    "meaning": "Con phố, đại lộ",
    "meaningEn": "Street, avenue",
    "meaningFr": "Rue, avenue",
    "meaningEs": "Calle, avenida",
    "meaningKo": "거리, 대로",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 302,
    "kanji": "通う",
    "displayReading": "かよう",
    "readings": [
      "かよう"
    ],
    "meaning": "Đi lại thường xuyên",
    "meaningEn": "Commute",
    "meaningFr": "Faire la navette, fréquenter",
    "meaningEs": "Ir y venir regularmente",
    "meaningKo": "다니다, 통학·통근하다",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 300,
    "kanji": "交通",
    "displayReading": "こうつう",
    "readings": [
      "こうつう"
    ],
    "meaning": "Giao thông",
    "meaningEn": "Traffic, transportation",
    "meaningFr": "Circulation, transports",
    "meaningEs": "Tráfico, transporte",
    "meaningKo": "교통",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 301,
    "kanji": "普通",
    "displayReading": "ふつう",
    "readings": [
      "ふつう"
    ],
    "meaning": "Bình thường, tàu thường",
    "meaningEn": "Normal, local train",
    "meaningFr": "Ordinaire, train omnibus",
    "meaningEs": "Normal, tren local",
    "meaningKo": "보통, 완행열차",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 290,
    "kanji": "乗る",
    "displayReading": "のる",
    "readings": [
      "のる"
    ],
    "meaning": "Lên xe, đi phương tiện",
    "meaningEn": "Ride, get on",
    "meaningFr": "Monter dans (un véhicule)",
    "meaningEs": "Subir a (un vehículo)",
    "meaningKo": "(탈것에) 타다",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 292,
    "kanji": "乗り物",
    "displayReading": "のりもの",
    "readings": [
      "のりもの"
    ],
    "meaning": "Phương tiện giao thông",
    "meaningEn": "Vehicle",
    "meaningFr": "Moyen de transport",
    "meaningEs": "Medio de transporte",
    "meaningKo": "탈것, 교통수단",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 293,
    "kanji": "乗馬",
    "displayReading": "じょうば",
    "readings": [
      "じょうば"
    ],
    "meaning": "Cưỡi ngựa",
    "meaningEn": "Horseback riding",
    "meaningFr": "Équitation",
    "meaningEs": "Equitación",
    "meaningKo": "승마",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 130,
    "kanji": "銀行",
    "displayReading": "ぎんこう",
    "readings": [
      "ぎんこう"
    ],
    "meaning": "Ngân hàng",
    "meaningEn": "Bank",
    "meaningFr": "Banque",
    "meaningEs": "Banco",
    "meaningKo": "은행",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 131,
    "kanji": "旅行",
    "displayReading": "りょこう",
    "readings": [
      "りょこう"
    ],
    "meaning": "Du lịch",
    "meaningEn": "Travel, trip",
    "meaningFr": "Voyage",
    "meaningEs": "Viaje",
    "meaningKo": "여행",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 329,
    "kanji": "学ぶ",
    "displayReading": "まなぶ",
    "readings": [
      "まなぶ"
    ],
    "meaning": "Học hỏi",
    "meaningEn": "Learn, study",
    "meaningFr": "Apprendre, étudier",
    "meaningEs": "Aprender, estudiar",
    "meaningKo": "배우다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 331,
    "kanji": "学校",
    "displayReading": "がっこう",
    "readings": [
      "がっこう"
    ],
    "meaning": "Trường học",
    "meaningEn": "School",
    "meaningFr": "École",
    "meaningEs": "Escuela, colegio",
    "meaningKo": "학교",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 20,
    "kanji": "小学校",
    "displayReading": "しょうがっこう",
    "readings": [
      "しょうがっこう"
    ],
    "meaning": "Trường tiểu học",
    "meaningEn": "Elementary school",
    "meaningFr": "École primaire",
    "meaningEs": "Escuela primaria",
    "meaningKo": "초등학교",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 336,
    "kanji": "中学校",
    "displayReading": "ちゅうがっこう",
    "readings": [
      "ちゅうがっこう"
    ],
    "meaning": "Trường trung học cơ sở",
    "meaningEn": "Junior high school",
    "meaningFr": "Collège",
    "meaningEs": "Escuela secundaria",
    "meaningKo": "중학교",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 249,
    "kanji": "高校",
    "displayReading": "こうこう",
    "readings": [
      "こうこう"
    ],
    "meaning": "Trường trung học phổ thông",
    "meaningEn": "High school",
    "meaningFr": "Lycée",
    "meaningEs": "Instituto, bachillerato",
    "meaningKo": "고등학교",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 18,
    "kanji": "大学",
    "displayReading": "だいがく",
    "readings": [
      "だいがく"
    ],
    "meaning": "Trường đại học",
    "meaningEn": "University",
    "meaningFr": "Université",
    "meaningEs": "Universidad",
    "meaningKo": "대학교",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 330,
    "kanji": "学生",
    "displayReading": "がくせい",
    "readings": [
      "がくせい"
    ],
    "meaning": "Học sinh, sinh viên",
    "meaningEn": "Student",
    "meaningFr": "Étudiant, élève",
    "meaningEs": "Estudiante, alumno",
    "meaningKo": "학생",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 332,
    "kanji": "大学生",
    "displayReading": "だいがくせい",
    "readings": [
      "だいがくせい"
    ],
    "meaning": "Sinh viên đại học",
    "meaningEn": "University student",
    "meaningFr": "Étudiant d'université",
    "meaningEs": "Estudiante universitario",
    "meaningKo": "대학생",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 250,
    "kanji": "高校生",
    "displayReading": "こうこうせい",
    "readings": [
      "こうこうせい"
    ],
    "meaning": "Học sinh cấp 3",
    "meaningEn": "High school student",
    "meaningFr": "Lycéen",
    "meaningEs": "Estudiante de bachillerato",
    "meaningKo": "고등학생",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 338,
    "kanji": "先生",
    "displayReading": "せんせい",
    "readings": [
      "せんせい"
    ],
    "meaning": "Giáo viên, bác sĩ",
    "meaningEn": "Teacher, doctor",
    "meaningFr": "Professeur, médecin",
    "meaningEs": "Profesor, maestro, médico",
    "meaningKo": "선생님, 의사",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 2225,
    "kanji": "生まれる",
    "displayReading": "うまれる",
    "readings": [
      "うまれる"
    ],
    "meaning": "Được sinh ra",
    "meaningEn": "Be born",
    "meaningFr": "Naître",
    "meaningEs": "Nacer",
    "meaningKo": "태어나다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 2226,
    "kanji": "生きる",
    "displayReading": "いきる",
    "readings": [
      "いきる"
    ],
    "meaning": "Sống",
    "meaningEn": "Live, be alive",
    "meaningFr": "Vivre",
    "meaningEs": "Vivir",
    "meaningKo": "살다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 2227,
    "kanji": "生む",
    "displayReading": "うむ",
    "readings": [
      "うむ"
    ],
    "meaning": "Sinh nở",
    "meaningEn": "Give birth",
    "meaningFr": "Donner naissance",
    "meaningEs": "Dar a luz, producir",
    "meaningKo": "낳다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 350,
    "kanji": "誕生日",
    "displayReading": "たんじょうび",
    "readings": [
      "たんじょうび"
    ],
    "meaning": "Sinh nhật",
    "meaningEn": "Birthday",
    "meaningFr": "Anniversaire",
    "meaningEs": "Cumpleaños",
    "meaningKo": "생일",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 142,
    "kanji": "本",
    "displayReading": "ほん",
    "readings": [
      "ほん"
    ],
    "meaning": "Sách",
    "meaningEn": "Book",
    "meaningFr": "Livre",
    "meaningEs": "Libro",
    "meaningKo": "책",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 2230,
    "kanji": "本屋",
    "displayReading": "ほんや",
    "readings": [
      "ほんや"
    ],
    "meaning": "Hiệu sách",
    "meaningEn": "Bookstore",
    "meaningFr": "Librairie",
    "meaningEs": "Librería",
    "meaningKo": "서점, 책방",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 141,
    "kanji": "日本",
    "displayReading": "にほん",
    "readings": [
      "にほん"
    ],
    "meaning": "Nhật Bản",
    "meaningEn": "Japan",
    "meaningFr": "Japon",
    "meaningEs": "Japón",
    "meaningKo": "일본",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 143,
    "kanji": "本当",
    "displayReading": "ほんとう",
    "readings": [
      "ほんとう"
    ],
    "meaning": "Thật sự",
    "meaningEn": "Truth, really",
    "meaningFr": "Vérité, vraiment",
    "meaningEs": "Verdad, de verdad",
    "meaningKo": "정말, 진짜",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 172,
    "kanji": "語る",
    "displayReading": "かたる",
    "readings": [
      "かたる"
    ],
    "meaning": "Kể chuyện",
    "meaningEn": "Tell, narrate",
    "meaningFr": "Raconter",
    "meaningEs": "Contar, narrar",
    "meaningKo": "이야기하다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 170,
    "kanji": "日本語",
    "displayReading": "にほんご",
    "readings": [
      "にほんご"
    ],
    "meaning": "Tiếng Nhật",
    "meaningEn": "Japanese language",
    "meaningFr": "Langue japonaise",
    "meaningEs": "Idioma japonés",
    "meaningKo": "일본어",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 171,
    "kanji": "英語",
    "displayReading": "えいご",
    "readings": [
      "えいご"
    ],
    "meaning": "Tiếng Anh",
    "meaningEn": "English language",
    "meaningFr": "Langue anglaise",
    "meaningEs": "Idioma inglés",
    "meaningKo": "영어",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 2236,
    "kanji": "外国語",
    "displayReading": "がいこくご",
    "readings": [
      "がいこくご"
    ],
    "meaning": "Ngoại ngữ",
    "meaningEn": "Foreign language",
    "meaningFr": "Langue étrangère",
    "meaningEs": "Idioma extranjero",
    "meaningKo": "외국어",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 147,
    "kanji": "母国語",
    "displayReading": "ぼこくご",
    "readings": [
      "ぼこくご"
    ],
    "meaning": "Tiếng mẹ đẻ",
    "meaningEn": "Native language",
    "meaningFr": "Langue maternelle",
    "meaningEs": "Lengua materna",
    "meaningKo": "모국어",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 357,
    "kanji": "文",
    "displayReading": "ぶん",
    "readings": [
      "ぶん"
    ],
    "meaning": "Câu văn",
    "meaningEn": "Sentence, text",
    "meaningFr": "Phrase",
    "meaningEs": "Oración, frase",
    "meaningKo": "문장",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 358,
    "kanji": "文章",
    "displayReading": "ぶんしょう",
    "readings": [
      "ぶんしょう"
    ],
    "meaning": "Đoạn văn, bài văn",
    "meaningEn": "Passage, essay",
    "meaningFr": "Texte, paragraphe",
    "meaningEs": "Texto, párrafo",
    "meaningKo": "글, 문장",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 359,
    "kanji": "作文",
    "displayReading": "さくぶん",
    "readings": [
      "さくぶん"
    ],
    "meaning": "Bài tập làm văn",
    "meaningEn": "Composition, essay",
    "meaningFr": "Rédaction",
    "meaningEs": "Redacción, ensayo",
    "meaningKo": "작문",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 360,
    "kanji": "文化",
    "displayReading": "ぶんか",
    "readings": [
      "ぶんか"
    ],
    "meaning": "Văn hóa",
    "meaningEn": "Culture",
    "meaningFr": "Culture",
    "meaningEs": "Cultura",
    "meaningKo": "문화",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 52,
    "kanji": "読む",
    "displayReading": "よむ",
    "readings": [
      "よむ"
    ],
    "meaning": "Đọc",
    "meaningEn": "Read",
    "meaningFr": "Lire",
    "meaningEs": "Leer",
    "meaningKo": "읽다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 2243,
    "kanji": "読書",
    "displayReading": "どくしょ",
    "readings": [
      "どくしょ"
    ],
    "meaning": "Đọc sách",
    "meaningEn": "Reading books",
    "meaningFr": "Lecture",
    "meaningEs": "Lectura",
    "meaningKo": "독서",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 53,
    "kanji": "見る",
    "displayReading": "みる",
    "readings": [
      "みる"
    ],
    "meaning": "Nhìn, xem",
    "meaningEn": "See, watch, look",
    "meaningFr": "Voir, regarder",
    "meaningEs": "Ver, mirar",
    "meaningKo": "보다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 54,
    "kanji": "見せる",
    "displayReading": "みせる",
    "readings": [
      "みせる"
    ],
    "meaning": "Cho xem",
    "meaningEn": "Show",
    "meaningFr": "Montrer",
    "meaningEs": "Mostrar, enseñar",
    "meaningKo": "보여 주다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 2246,
    "kanji": "見える",
    "displayReading": "みえる",
    "readings": [
      "みえる"
    ],
    "meaning": "Nhìn thấy",
    "meaningEn": "Be visible",
    "meaningFr": "Être visible",
    "meaningEs": "Verse, ser visible",
    "meaningKo": "보이다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 55,
    "kanji": "聞く",
    "displayReading": "きく",
    "readings": [
      "きく"
    ],
    "meaning": "Nghe, hỏi",
    "meaningEn": "Listen, ask",
    "meaningFr": "Écouter, demander",
    "meaningEs": "Escuchar, preguntar",
    "meaningKo": "듣다, 묻다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 2248,
    "kanji": "聞こえる",
    "displayReading": "きこえる",
    "readings": [
      "きこえる"
    ],
    "meaning": "Nghe thấy",
    "meaningEn": "Be audible",
    "meaningFr": "Être audible",
    "meaningEs": "Oírse, ser audible",
    "meaningKo": "들리다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 22,
    "kanji": "新聞",
    "displayReading": "しんぶん",
    "readings": [
      "しんぶん"
    ],
    "meaning": "Tờ báo",
    "meaningEn": "Newspaper",
    "meaningFr": "Journal",
    "meaningEs": "Periódico",
    "meaningKo": "신문",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 56,
    "kanji": "書く",
    "displayReading": "かく",
    "readings": [
      "かく"
    ],
    "meaning": "Viết",
    "meaningEn": "Write",
    "meaningFr": "Écrire",
    "meaningEs": "Escribir",
    "meaningKo": "쓰다, 적다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 2251,
    "kanji": "辞書",
    "displayReading": "じしょ",
    "readings": [
      "じしょ"
    ],
    "meaning": "Từ điển",
    "meaningEn": "Dictionary",
    "meaningFr": "Dictionnaire",
    "meaningEs": "Diccionario",
    "meaningKo": "사전",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 47,
    "kanji": "言う",
    "displayReading": "いう",
    "readings": [
      "いう"
    ],
    "meaning": "Nói",
    "meaningEn": "Say",
    "meaningFr": "Dire",
    "meaningEs": "Decir",
    "meaningKo": "말하다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 48,
    "kanji": "言葉",
    "displayReading": "ことば",
    "readings": [
      "ことば"
    ],
    "meaning": "Từ ngữ, ngôn ngữ",
    "meaningEn": "Word, language",
    "meaningFr": "Mot, langue",
    "meaningEs": "Palabra, idioma",
    "meaningKo": "말, 단어",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 49,
    "kanji": "話す",
    "displayReading": "はなす",
    "readings": [
      "はなす"
    ],
    "meaning": "Nói chuyện",
    "meaningEn": "Speak, talk",
    "meaningFr": "Parler",
    "meaningEs": "Hablar",
    "meaningKo": "이야기하다, 말하다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 2255,
    "kanji": "話",
    "displayReading": "はなし",
    "readings": [
      "はなし"
    ],
    "meaning": "Câu chuyện",
    "meaningEn": "Story, talk",
    "meaningFr": "Histoire, discussion",
    "meaningEs": "Historia, charla",
    "meaningKo": "이야기",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 51,
    "kanji": "会話",
    "displayReading": "かいわ",
    "readings": [
      "かいわ"
    ],
    "meaning": "Hội thoại",
    "meaningEn": "Conversation",
    "meaningFr": "Conversation",
    "meaningEs": "Conversación",
    "meaningKo": "회화, 대화",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 50,
    "kanji": "電話",
    "displayReading": "でんわ",
    "readings": [
      "でんわ"
    ],
    "meaning": "Điện thoại",
    "meaningEn": "Telephone",
    "meaningFr": "Téléphone",
    "meaningEs": "Teléfono",
    "meaningKo": "전화",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 12,
    "kanji": "食べる",
    "displayReading": "たべる",
    "readings": [
      "たべる"
    ],
    "meaning": "Ăn",
    "meaningEn": "Eat",
    "meaningFr": "Manger",
    "meaningEs": "Comer",
    "meaningKo": "먹다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 13,
    "kanji": "食べ物",
    "displayReading": "たべもの",
    "readings": [
      "たべもの"
    ],
    "meaning": "Đồ ăn",
    "meaningEn": "Food",
    "meaningFr": "Nourriture",
    "meaningEs": "Comida, alimento",
    "meaningKo": "음식, 먹을거리",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 14,
    "kanji": "食事",
    "displayReading": "しょくじ",
    "readings": [
      "しょくじ"
    ],
    "meaning": "Bữa ăn, việc ăn uống",
    "meaningEn": "Meal",
    "meaningFr": "Repas",
    "meaningEs": "Comida (acto de comer)",
    "meaningKo": "식사",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 15,
    "kanji": "飲む",
    "displayReading": "のむ",
    "readings": [
      "のむ"
    ],
    "meaning": "Uống",
    "meaningEn": "Drink",
    "meaningFr": "Boire",
    "meaningEs": "Beber",
    "meaningKo": "마시다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 16,
    "kanji": "飲み物",
    "displayReading": "のみもの",
    "readings": [
      "のみもの"
    ],
    "meaning": "Đồ uống",
    "meaningEn": "Beverage, drink",
    "meaningFr": "Boisson",
    "meaningEs": "Bebida",
    "meaningKo": "음료, 마실 것",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 1,
    "kanji": "魚",
    "displayReading": "さかな",
    "readings": [
      "さかな"
    ],
    "meaning": "Cá",
    "meaningEn": "Fish",
    "meaningFr": "Poisson",
    "meaningEs": "Pescado, pez",
    "meaningKo": "물고기, 생선",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 2264,
    "kanji": "生魚",
    "displayReading": "なまざかな",
    "readings": [
      "なまざかな"
    ],
    "meaning": "Cá sống",
    "meaningEn": "Raw fish",
    "meaningFr": "Poisson cru",
    "meaningEs": "Pescado crudo",
    "meaningKo": "날생선",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 2,
    "kanji": "焼き魚",
    "displayReading": "やきざかな",
    "readings": [
      "やきざかな"
    ],
    "meaning": "Cá nướng",
    "meaningEn": "Grilled fish",
    "meaningFr": "Poisson grillé",
    "meaningEs": "Pescado a la parrilla",
    "meaningKo": "생선구이",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 3,
    "kanji": "魚屋",
    "displayReading": "さかなや",
    "readings": [
      "さかなや"
    ],
    "meaning": "Tiệm cá",
    "meaningEn": "Fish shop",
    "meaningFr": "Poissonnerie",
    "meaningEs": "Pescadería",
    "meaningKo": "생선 가게",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 4,
    "kanji": "金魚",
    "displayReading": "きんぎょ",
    "readings": [
      "きんぎょ"
    ],
    "meaning": "Cá vàng",
    "meaningEn": "Goldfish",
    "meaningFr": "Poisson rouge",
    "meaningEs": "Pez dorado",
    "meaningKo": "금붕어",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 5,
    "kanji": "肉",
    "displayReading": "にく",
    "readings": [
      "にく"
    ],
    "meaning": "Thịt",
    "meaningEn": "Meat",
    "meaningFr": "Viande",
    "meaningEs": "Carne",
    "meaningKo": "고기",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 6,
    "kanji": "牛肉",
    "displayReading": "ぎゅうにく",
    "readings": [
      "ぎゅうにく"
    ],
    "meaning": "Thịt bò",
    "meaningEn": "Beef",
    "meaningFr": "Bœuf (viande)",
    "meaningEs": "Carne de res",
    "meaningKo": "소고기",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 7,
    "kanji": "焼き肉",
    "displayReading": "やきにく",
    "readings": [
      "やきにく"
    ],
    "meaning": "Thịt nướng",
    "meaningEn": "Grilled meat (yakiniku)",
    "meaningFr": "Viande grillée (yakiniku)",
    "meaningEs": "Carne asada (yakiniku)",
    "meaningKo": "불고기, 야키니쿠",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 8,
    "kanji": "卵",
    "displayReading": "たまご",
    "readings": [
      "たまご"
    ],
    "meaning": "Trứng",
    "meaningEn": "Egg",
    "meaningFr": "Œuf",
    "meaningEs": "Huevo",
    "meaningKo": "달걀, 알",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 9,
    "kanji": "生卵",
    "displayReading": "なまたまご",
    "readings": [
      "なまたまご"
    ],
    "meaning": "Trứng sống",
    "meaningEn": "Raw egg",
    "meaningFr": "Œuf cru",
    "meaningEs": "Huevo crudo",
    "meaningKo": "날달걀",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 354,
    "kanji": "生ビール",
    "displayReading": "なまビール",
    "readings": [
      "なまビール"
    ],
    "meaning": "Bia tươi",
    "meaningEn": "Draft beer",
    "meaningFr": "Bière pression",
    "meaningEs": "Cerveza de barril",
    "meaningKo": "생맥주",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 2274,
    "kanji": "お茶",
    "displayReading": "おちゃ",
    "readings": [
      "おちゃ"
    ],
    "meaning": "Trà",
    "meaningEn": "Green tea, tea",
    "meaningFr": "Thé vert, thé",
    "meaningEs": "Té verde, té",
    "meaningKo": "차, 녹차",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 2275,
    "kanji": "紅茶",
    "displayReading": "こうちゃ",
    "readings": [
      "こうちゃ"
    ],
    "meaning": "Hồng trà, trà đen",
    "meaningEn": "Black tea",
    "meaningFr": "Thé noir",
    "meaningEs": "Té negro",
    "meaningKo": "홍차",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 119,
    "kanji": "買う",
    "displayReading": "かう",
    "readings": [
      "かう"
    ],
    "meaning": "Mua",
    "meaningEn": "Buy",
    "meaningFr": "Acheter",
    "meaningEs": "Comprar",
    "meaningKo": "사다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 120,
    "kanji": "買い物",
    "displayReading": "かいもの",
    "readings": [
      "かいもの"
    ],
    "meaning": "Mua sắm",
    "meaningEn": "Shopping",
    "meaningFr": "Courses, achats",
    "meaningEs": "Compras",
    "meaningKo": "쇼핑, 장보기",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 238,
    "kanji": "店",
    "displayReading": "みせ",
    "readings": [
      "みせ"
    ],
    "meaning": "Cửa hàng",
    "meaningEn": "Shop, store",
    "meaningFr": "Magasin, boutique",
    "meaningEs": "Tienda",
    "meaningKo": "가게, 상점",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 239,
    "kanji": "店員",
    "displayReading": "てんいん",
    "readings": [
      "てんいん"
    ],
    "meaning": "Nhân viên cửa hàng",
    "meaningEn": "Store clerk",
    "meaningFr": "Vendeur, employé",
    "meaningEs": "Dependiente, vendedor",
    "meaningKo": "점원",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 248,
    "kanji": "高い",
    "displayReading": "たかい",
    "readings": [
      "たかい"
    ],
    "meaning": "Cao, đắt",
    "meaningEn": "Tall, high, expensive",
    "meaningFr": "Haut, cher",
    "meaningEs": "Alto, caro",
    "meaningKo": "높다, 비싸다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 253,
    "kanji": "安い",
    "displayReading": "やすい",
    "readings": [
      "やすい"
    ],
    "meaning": "Rẻ",
    "meaningEn": "Cheap, inexpensive",
    "meaningFr": "Bon marché, pas cher",
    "meaningEs": "Barato, económico",
    "meaningKo": "싸다, 저렴하다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 241,
    "kanji": "多い",
    "displayReading": "おおい",
    "readings": [
      "おおい"
    ],
    "meaning": "Nhiều",
    "meaningEn": "Many, much",
    "meaningFr": "Nombreux, beaucoup",
    "meaningEs": "Muchos, abundante",
    "meaningKo": "많다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 242,
    "kanji": "多分",
    "displayReading": "たぶん",
    "readings": [
      "たぶん"
    ],
    "meaning": "Có lẽ",
    "meaningEn": "Probably, maybe",
    "meaningFr": "Peut-être",
    "meaningEs": "Quizás, tal vez",
    "meaningKo": "아마도",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 243,
    "kanji": "多数",
    "displayReading": "たすう",
    "readings": [
      "たすう"
    ],
    "meaning": "Số đông",
    "meaningEn": "Majority, large number",
    "meaningFr": "Majorité, grand nombre",
    "meaningEs": "Mayoría, gran número",
    "meaningKo": "다수",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 245,
    "kanji": "少ない",
    "displayReading": "すくない",
    "readings": [
      "すくない"
    ],
    "meaning": "Ít",
    "meaningEn": "Few, little",
    "meaningFr": "Peu nombreux",
    "meaningEs": "Pocos, escaso",
    "meaningKo": "적다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 246,
    "kanji": "少し",
    "displayReading": "すこし",
    "readings": [
      "すこし"
    ],
    "meaning": "Một chút",
    "meaningEn": "A little, slightly",
    "meaningFr": "Un peu",
    "meaningEs": "Un poco",
    "meaningKo": "조금, 약간",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 247,
    "kanji": "少年",
    "displayReading": "しょうねん",
    "readings": [
      "しょうねん"
    ],
    "meaning": "Thiếu niên",
    "meaningEn": "Boy, youth",
    "meaningFr": "Jeune garçon",
    "meaningEs": "Chico joven, muchacho",
    "meaningKo": "소년",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 21,
    "kanji": "新しい",
    "displayReading": "あたらしい",
    "readings": [
      "あたらしい"
    ],
    "meaning": "Mới",
    "meaningEn": "New",
    "meaningFr": "Nouveau, neuf",
    "meaningEs": "Nuevo",
    "meaningKo": "새롭다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 23,
    "kanji": "古い",
    "displayReading": "ふるい",
    "readings": [
      "ふるい"
    ],
    "meaning": "Cũ",
    "meaningEn": "Old (objects)",
    "meaningFr": "Vieux, ancien (objet)",
    "meaningEs": "Viejo, antiguo (objeto)",
    "meaningKo": "오래되다, 낡다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 24,
    "kanji": "中古",
    "displayReading": "ちゅうこ",
    "readings": [
      "ちゅうこ"
    ],
    "meaning": "Đồ cũ, hàng đã qua sử dụng",
    "meaningEn": "Secondhand, used",
    "meaningFr": "Occasion, seconde main",
    "meaningEs": "Segunda mano, usado",
    "meaningKo": "중고",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 17,
    "kanji": "大きい",
    "displayReading": "おおきい",
    "readings": [
      "おおきい"
    ],
    "meaning": "To, lớn",
    "meaningEn": "Big, large",
    "meaningFr": "Grand, gros",
    "meaningEs": "Grande",
    "meaningKo": "크다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 19,
    "kanji": "小さい",
    "displayReading": "ちいさい",
    "readings": [
      "ちいさい"
    ],
    "meaning": "Nhỏ, bé",
    "meaningEn": "Small, little",
    "meaningFr": "Petit",
    "meaningEs": "Pequeño",
    "meaningKo": "작다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 2293,
    "kanji": "長い",
    "displayReading": "ながい",
    "readings": [
      "ながい"
    ],
    "meaning": "Dài",
    "meaningEn": "Long",
    "meaningFr": "Long",
    "meaningEs": "Largo",
    "meaningKo": "길다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 334,
    "kanji": "校長",
    "displayReading": "こうちょう",
    "readings": [
      "こうちょう"
    ],
    "meaning": "Hiệu trưởng",
    "meaningEn": "School principal",
    "meaningFr": "Directeur d'école",
    "meaningEs": "Director de escuela",
    "meaningKo": "교장 선생님",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 2295,
    "kanji": "社長",
    "displayReading": "しゃちょう",
    "readings": [
      "しゃちょう"
    ],
    "meaning": "Giám đốc công ty",
    "meaningEn": "Company president",
    "meaningFr": "Président d'entreprise (PDG)",
    "meaningEs": "Presidente de empresa",
    "meaningKo": "사장님",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 200,
    "kanji": "山",
    "displayReading": "やま",
    "readings": [
      "やま"
    ],
    "meaning": "Núi",
    "meaningEn": "Mountain",
    "meaningFr": "Montagne",
    "meaningEs": "Montaña",
    "meaningKo": "산",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 201,
    "kanji": "富士山",
    "displayReading": "ふじさん",
    "readings": [
      "ふじさん"
    ],
    "meaning": "Núi Phú Sĩ",
    "meaningEn": "Mount Fuji",
    "meaningFr": "Mont Fuji",
    "meaningEs": "Monte Fuji",
    "meaningKo": "후지산",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 202,
    "kanji": "火山",
    "displayReading": "かざん",
    "readings": [
      "かざん"
    ],
    "meaning": "Núi lửa",
    "meaningEn": "Volcano",
    "meaningFr": "Volcan",
    "meaningEs": "Volcán",
    "meaningKo": "화산",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 203,
    "kanji": "川",
    "displayReading": "かわ",
    "readings": [
      "かわ"
    ],
    "meaning": "Sông",
    "meaningEn": "River",
    "meaningFr": "Rivière",
    "meaningEs": "Río",
    "meaningKo": "강, 내",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 204,
    "kanji": "小川",
    "displayReading": "おがわ",
    "readings": [
      "おがわ"
    ],
    "meaning": "Suối nhỏ, sông nhỏ",
    "meaningEn": "Stream, brook",
    "meaningFr": "Ruisseau",
    "meaningEs": "Arroyo, riachuelo",
    "meaningKo": "시냇물",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 206,
    "kanji": "大川",
    "displayReading": "おおかわ",
    "readings": [
      "おおかわ"
    ],
    "meaning": "Sông lớn",
    "meaningEn": "Big river",
    "meaningFr": "Grand fleuve",
    "meaningEs": "Río grande",
    "meaningKo": "큰 강",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 205,
    "kanji": "河川",
    "displayReading": "かせん",
    "readings": [
      "かせん"
    ],
    "meaning": "Sông ngòi",
    "meaningEn": "Rivers",
    "meaningFr": "Cours d'eau, rivières",
    "meaningEs": "Ríos",
    "meaningKo": "하천",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 197,
    "kanji": "海",
    "displayReading": "うみ",
    "readings": [
      "うみ"
    ],
    "meaning": "Biển",
    "meaningEn": "Sea, ocean",
    "meaningFr": "Mer, océan",
    "meaningEs": "Mar, océano",
    "meaningKo": "바다",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 199,
    "kanji": "海岸",
    "displayReading": "かいがん",
    "readings": [
      "かいがん"
    ],
    "meaning": "Bờ biển",
    "meaningEn": "Coast, seashore",
    "meaningFr": "Côte, rivage",
    "meaningEs": "Costa, playa",
    "meaningKo": "해안, 바닷가",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 169,
    "kanji": "海外",
    "displayReading": "かいがい",
    "readings": [
      "かいがい"
    ],
    "meaning": "Nước ngoài, hải ngoại",
    "meaningEn": "Overseas, abroad",
    "meaningFr": "Outre-mer, à l'étranger",
    "meaningEs": "En el extranjero, ultramar",
    "meaningKo": "해외",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 193,
    "kanji": "花",
    "displayReading": "はな",
    "readings": [
      "はな"
    ],
    "meaning": "Hoa",
    "meaningEn": "Flower",
    "meaningFr": "Fleur",
    "meaningEs": "Flor",
    "meaningKo": "꽃",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 194,
    "kanji": "花見",
    "displayReading": "はなみ",
    "readings": [
      "はなみ"
    ],
    "meaning": "Ngắm hoa",
    "meaningEn": "Flower viewing (hanami)",
    "meaningFr": "Contemplation des fleurs (hanami)",
    "meaningEs": "Contemplar los cerezos (hanami)",
    "meaningKo": "꽃구경 (하나미)",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 195,
    "kanji": "花火",
    "displayReading": "はなび",
    "readings": [
      "はなび"
    ],
    "meaning": "Pháo hoa",
    "meaningEn": "Fireworks",
    "meaningFr": "Feu d'artifice",
    "meaningEs": "Fuegos artificiales",
    "meaningKo": "불꽃놀이",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 196,
    "kanji": "花瓶",
    "displayReading": "かびん",
    "readings": [
      "かびん"
    ],
    "meaning": "Bình hoa",
    "meaningEn": "Flower vase",
    "meaningFr": "Vase à fleurs",
    "meaningEs": "Florero, jarrón",
    "meaningKo": "꽃병",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 208,
    "kanji": "天気",
    "displayReading": "てんき",
    "readings": [
      "てんき"
    ],
    "meaning": "Thời tiết",
    "meaningEn": "Weather",
    "meaningFr": "Temps (météo)",
    "meaningEs": "Tiempo atmosférico, clima",
    "meaningKo": "날씨",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 209,
    "kanji": "天候",
    "displayReading": "てんこう",
    "readings": [
      "てんこう"
    ],
    "meaning": "Khí hậu",
    "meaningEn": "Weather, climate",
    "meaningFr": "Climat, météo",
    "meaningEs": "Clima",
    "meaningKo": "기후",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 210,
    "kanji": "元気",
    "displayReading": "げんき",
    "readings": [
      "げんき"
    ],
    "meaning": "Khỏe mạnh",
    "meaningEn": "Healthy, energetic",
    "meaningFr": "En forme, bonne santé",
    "meaningEs": "Animado, con buena salud",
    "meaningKo": "건강함, 활기참",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 213,
    "kanji": "空気",
    "displayReading": "くうき",
    "readings": [
      "くうき"
    ],
    "meaning": "Không khí",
    "meaningEn": "Air, atmosphere",
    "meaningFr": "Air, atmosphère",
    "meaningEs": "Aire, atmósfera",
    "meaningKo": "공기, 분위기",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 218,
    "kanji": "雨",
    "displayReading": "あめ",
    "readings": [
      "あめ"
    ],
    "meaning": "Mưa",
    "meaningEn": "Rain",
    "meaningFr": "Pluie",
    "meaningEs": "Lluvia",
    "meaningKo": "비",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 220,
    "kanji": "大雨",
    "displayReading": "おおあめ",
    "readings": [
      "おおあめ"
    ],
    "meaning": "Mưa to",
    "meaningEn": "Heavy rain",
    "meaningFr": "Forte pluie",
    "meaningEs": "Lluvia fuerte",
    "meaningKo": "폭우, 큰비",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 221,
    "kanji": "雨水",
    "displayReading": "あまみず",
    "readings": [
      "あまみず"
    ],
    "meaning": "Nước mưa",
    "meaningEn": "Rainwater",
    "meaningFr": "Eau de pluie",
    "meaningEs": "Agua de lluvia",
    "meaningKo": "빗물",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 233,
    "kanji": "空",
    "displayReading": "そら",
    "readings": [
      "そら"
    ],
    "meaning": "Bầu trời",
    "meaningEn": "Sky",
    "meaningFr": "Ciel",
    "meaningEs": "Cielo",
    "meaningKo": "하늘",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 235,
    "kanji": "青空",
    "displayReading": "あおぞら",
    "readings": [
      "あおぞら"
    ],
    "meaning": "Bầu trời xanh",
    "meaningEn": "Blue sky",
    "meaningFr": "Ciel bleu",
    "meaningEs": "Cielo azul",
    "meaningKo": "푸른 하늘",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 234,
    "kanji": "空港",
    "displayReading": "くうこう",
    "readings": [
      "くうこう"
    ],
    "meaning": "Sân bay",
    "meaningEn": "Airport",
    "meaningFr": "Aéroport",
    "meaningEs": "Aeropuerto",
    "meaningKo": "공항",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 236,
    "kanji": "空っぽ",
    "displayReading": "からっぽ",
    "readings": [
      "からっぽ"
    ],
    "meaning": "Trống rỗng",
    "meaningEn": "Empty",
    "meaningFr": "Vide",
    "meaningEs": "Vacío",
    "meaningKo": "비어 있음",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2321,
    "kanji": "手",
    "displayReading": "て",
    "readings": [
      "て"
    ],
    "meaning": "Bàn tay",
    "meaningEn": "Hand",
    "meaningFr": "Main",
    "meaningEs": "Mano",
    "meaningKo": "손",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 304,
    "kanji": "右手",
    "displayReading": "みぎて",
    "readings": [
      "みぎて"
    ],
    "meaning": "Tay phải",
    "meaningEn": "Right hand",
    "meaningFr": "Main droite",
    "meaningEs": "Mano derecha",
    "meaningKo": "오른손",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 307,
    "kanji": "左手",
    "displayReading": "ひだりて",
    "readings": [
      "ひだりて"
    ],
    "meaning": "Tay trái",
    "meaningEn": "Left hand",
    "meaningFr": "Main gauche",
    "meaningEs": "Mano izquierda",
    "meaningKo": "왼손",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2324,
    "kanji": "上手",
    "displayReading": "じょうず",
    "readings": [
      "じょうず"
    ],
    "meaning": "Giỏi, khéo",
    "meaningEn": "Skillful, good at",
    "meaningFr": "Doué, habile",
    "meaningEs": "Hábil, bueno en",
    "meaningKo": "잘함, 능숙함",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2325,
    "kanji": "下手",
    "displayReading": "へた",
    "readings": [
      "へた"
    ],
    "meaning": "Kém, vụng",
    "meaningEn": "Unskillful, poor at",
    "meaningFr": "Maladroit, peu doué",
    "meaningEs": "Torpe, malo en",
    "meaningKo": "서투름, 못함",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2326,
    "kanji": "足",
    "displayReading": "あし",
    "readings": [
      "あし"
    ],
    "meaning": "Chân",
    "meaningEn": "Foot, leg",
    "meaningFr": "Pied, jambe",
    "meaningEs": "Pie, pierna",
    "meaningKo": "발, 다리",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2327,
    "kanji": "足りる",
    "displayReading": "たりる",
    "readings": [
      "たりる"
    ],
    "meaning": "Đủ",
    "meaningEn": "Be enough, suffice",
    "meaningFr": "Suffire",
    "meaningEs": "Bastar, ser suficiente",
    "meaningKo": "충분하다, 족하다",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2328,
    "kanji": "目",
    "displayReading": "め",
    "readings": [
      "め"
    ],
    "meaning": "Con mắt",
    "meaningEn": "Eye",
    "meaningFr": "Œil",
    "meaningEs": "Ojo",
    "meaningKo": "눈",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2329,
    "kanji": "目的",
    "displayReading": "もくてき",
    "readings": [
      "もくてき"
    ],
    "meaning": "Mục đích",
    "meaningEn": "Purpose, goal",
    "meaningFr": "But, objectif",
    "meaningEs": "Objetivo, propósito",
    "meaningKo": "목적",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2330,
    "kanji": "耳",
    "displayReading": "みみ",
    "readings": [
      "みみ"
    ],
    "meaning": "Cái tai",
    "meaningEn": "Ear",
    "meaningFr": "Oreille",
    "meaningEs": "Oreja, oído",
    "meaningKo": "귀",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2331,
    "kanji": "心",
    "displayReading": "こころ",
    "readings": [
      "こころ"
    ],
    "meaning": "Trái tim, tấm lòng",
    "meaningEn": "Heart, mind",
    "meaningFr": "Cœur, esprit",
    "meaningEs": "Corazón, mente",
    "meaningKo": "마음",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 254,
    "kanji": "安心",
    "displayReading": "あんしん",
    "readings": [
      "あんしん"
    ],
    "meaning": "Yên tâm",
    "meaningEn": "Relief, peace of mind",
    "meaningFr": "Soulagement, tranquillité",
    "meaningEs": "Alivio, tranquilidad",
    "meaningKo": "안심",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2333,
    "kanji": "心配",
    "displayReading": "しんぱい",
    "readings": [
      "しんぱい"
    ],
    "meaning": "Lo lắng",
    "meaningEn": "Worry, anxiety",
    "meaningFr": "Inquiétude, souci",
    "meaningEs": "Preocupación",
    "meaningKo": "걱정, 근심",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2334,
    "kanji": "中心",
    "displayReading": "ちゅうしん",
    "readings": [
      "ちゅうしん"
    ],
    "meaning": "Trung tâm",
    "meaningEn": "Center, core",
    "meaningFr": "Centre",
    "meaningEs": "Centro",
    "meaningKo": "중심",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 325,
    "kanji": "白",
    "displayReading": "しろ",
    "readings": [
      "しろ"
    ],
    "meaning": "Màu trắng",
    "meaningEn": "White (noun)",
    "meaningFr": "Blanc (nom)",
    "meaningEs": "Blanco (sust.)",
    "meaningKo": "하양 (명사)",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 326,
    "kanji": "白い",
    "displayReading": "しろい",
    "readings": [
      "しろい"
    ],
    "meaning": "Trắng",
    "meaningEn": "White (adj)",
    "meaningFr": "Blanc (adj.)",
    "meaningEs": "Blanco (adj.)",
    "meaningKo": "하얗다",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 327,
    "kanji": "白色",
    "displayReading": "しろいろ",
    "readings": [
      "しろいろ"
    ],
    "meaning": "Màu trắng (danh từ)",
    "meaningEn": "White color",
    "meaningFr": "Couleur blanche",
    "meaningEs": "Color blanco",
    "meaningKo": "흰색",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 310,
    "kanji": "赤",
    "displayReading": "あか",
    "readings": [
      "あか"
    ],
    "meaning": "Màu đỏ",
    "meaningEn": "Red (noun)",
    "meaningFr": "Rouge (nom)",
    "meaningEs": "Rojo (sust.)",
    "meaningKo": "빨강 (명사)",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 311,
    "kanji": "赤い",
    "displayReading": "あかい",
    "readings": [
      "あかい"
    ],
    "meaning": "Đỏ",
    "meaningEn": "Red (adj)",
    "meaningFr": "Rouge (adj.)",
    "meaningEs": "Rojo (adj.)",
    "meaningKo": "빨갛다",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 312,
    "kanji": "赤ちゃん",
    "displayReading": "あかちゃん",
    "readings": [
      "あかちゃん"
    ],
    "meaning": "Em bé",
    "meaningEn": "Baby, infant",
    "meaningFr": "Bébé",
    "meaningEs": "Bebé",
    "meaningKo": "아기",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 313,
    "kanji": "赤信号",
    "displayReading": "あかしんごう",
    "readings": [
      "あかしんごう"
    ],
    "meaning": "Đèn đỏ giao thông",
    "meaningEn": "Red traffic light",
    "meaningFr": "Feu rouge",
    "meaningEs": "Semáforo en rojo",
    "meaningKo": "빨간불 (신호)",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 314,
    "kanji": "青",
    "displayReading": "あお",
    "readings": [
      "あお"
    ],
    "meaning": "Màu xanh lam",
    "meaningEn": "Blue (noun)",
    "meaningFr": "Bleu (nom)",
    "meaningEs": "Azul (sust.)",
    "meaningKo": "파랑 (명사)",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 315,
    "kanji": "青い",
    "displayReading": "あおい",
    "readings": [
      "あおい"
    ],
    "meaning": "Xanh lam",
    "meaningEn": "Blue (adj)",
    "meaningFr": "Bleu (adj.)",
    "meaningEs": "Azul (adj.)",
    "meaningKo": "파랗다",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 316,
    "kanji": "青色",
    "displayReading": "あおいろ",
    "readings": [
      "あおいろ"
    ],
    "meaning": "Màu xanh lam (danh từ)",
    "meaningEn": "Blue color",
    "meaningFr": "Couleur bleue",
    "meaningEs": "Color azul",
    "meaningKo": "파란색",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 318,
    "kanji": "青信号",
    "displayReading": "あおしんごう",
    "readings": [
      "あおしんごう"
    ],
    "meaning": "Đèn xanh giao thông",
    "meaningEn": "Green traffic light",
    "meaningFr": "Feu vert",
    "meaningEs": "Semáforo en verde",
    "meaningKo": "파란불 (청신호)",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 319,
    "kanji": "黒",
    "displayReading": "くろ",
    "readings": [
      "くろ"
    ],
    "meaning": "Màu đen",
    "meaningEn": "Black (noun)",
    "meaningFr": "Noir (nom)",
    "meaningEs": "Negro (sust.)",
    "meaningKo": "검정 (명사)",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 320,
    "kanji": "黒い",
    "displayReading": "くろい",
    "readings": [
      "くろい"
    ],
    "meaning": "Đen",
    "meaningEn": "Black (adj)",
    "meaningFr": "Noir (adj.)",
    "meaningEs": "Negro (adj.)",
    "meaningKo": "검다",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 321,
    "kanji": "黒色",
    "displayReading": "くろいろ",
    "readings": [
      "くろいろ"
    ],
    "meaning": "Màu đen (danh từ)",
    "meaningEn": "Black color",
    "meaningFr": "Couleur noire",
    "meaningEs": "Color negro",
    "meaningKo": "검은색",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 322,
    "kanji": "黒板",
    "displayReading": "こくばん",
    "readings": [
      "こくばん"
    ],
    "meaning": "Bảng đen",
    "meaningEn": "Blackboard",
    "meaningFr": "Tableau noir",
    "meaningEs": "Pizarra",
    "meaningKo": "칠판",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 323,
    "kanji": "黒猫",
    "displayReading": "くろねこ",
    "readings": [
      "くろねこ"
    ],
    "meaning": "Mèo đen",
    "meaningEn": "Black cat",
    "meaningFr": "Chat noir",
    "meaningEs": "Gato negro",
    "meaningKo": "검은 고양이",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2351,
    "kanji": "兄",
    "displayReading": "あに",
    "readings": [
      "あに"
    ],
    "meaning": "Anh trai (của mình)",
    "meaningEn": "Older brother (humble)",
    "meaningFr": "Mon grand frère",
    "meaningEs": "Mi hermano mayor",
    "meaningKo": "나의 형·오빠",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2352,
    "kanji": "お兄さん",
    "displayReading": "おにいさん",
    "readings": [
      "おにいさん"
    ],
    "meaning": "Anh trai",
    "meaningEn": "Older brother",
    "meaningFr": "Grand frère (poli)",
    "meaningEs": "Hermano mayor (cortés)",
    "meaningKo": "형·오빠 (높임말)",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2353,
    "kanji": "兄弟",
    "displayReading": "きょうだい",
    "readings": [
      "きょうだい"
    ],
    "meaning": "Anh chị em",
    "meaningEn": "Siblings",
    "meaningFr": "Frères et sœurs",
    "meaningEs": "Hermanos",
    "meaningKo": "형제자매",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2354,
    "kanji": "姉",
    "displayReading": "あね",
    "readings": [
      "あね"
    ],
    "meaning": "Chị gái (của mình)",
    "meaningEn": "Older sister (humble)",
    "meaningFr": "Ma grande sœur",
    "meaningEs": "Mi hermana mayor",
    "meaningKo": "나의 누나·언니",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2355,
    "kanji": "お姉さん",
    "displayReading": "おねえさん",
    "readings": [
      "おねえさん"
    ],
    "meaning": "Chị gái",
    "meaningEn": "Older sister",
    "meaningFr": "Grande sœur (poli)",
    "meaningEs": "Hermana mayor (cortés)",
    "meaningKo": "누나·언니 (높임말)",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2356,
    "kanji": "姉妹",
    "displayReading": "しまい",
    "readings": [
      "しまい"
    ],
    "meaning": "Chị em gái",
    "meaningEn": "Sisters",
    "meaningFr": "Sœurs",
    "meaningEs": "Hermanas",
    "meaningKo": "자매",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2357,
    "kanji": "弟",
    "displayReading": "おとうと",
    "readings": [
      "おとうと"
    ],
    "meaning": "Em trai",
    "meaningEn": "Younger brother",
    "meaningFr": "Petit frère",
    "meaningEs": "Hermano menor",
    "meaningKo": "남동생",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2358,
    "kanji": "妹",
    "displayReading": "いもうと",
    "readings": [
      "いもうと"
    ],
    "meaning": "Em gái",
    "meaningEn": "Younger sister",
    "meaningFr": "Petite sœur",
    "meaningEs": "Hermana menor",
    "meaningKo": "여동생",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2359,
    "kanji": "家",
    "displayReading": "いえ・うち",
    "readings": [
      "いえ",
      "うち"
    ],
    "meaning": "Nhà, gia đình",
    "meaningEn": "House, home",
    "meaningFr": "Maison, foyer",
    "meaningEs": "Casa, hogar",
    "meaningKo": "집",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2360,
    "kanji": "家族",
    "displayReading": "かぞく",
    "readings": [
      "かぞく"
    ],
    "meaning": "Gia đình",
    "meaningEn": "Family",
    "meaningFr": "Famille",
    "meaningEs": "Familia",
    "meaningKo": "가족",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2361,
    "kanji": "親",
    "displayReading": "おや",
    "readings": [
      "おや"
    ],
    "meaning": "Cha mẹ",
    "meaningEn": "Parent",
    "meaningFr": "Parent",
    "meaningEs": "Progenitor (padre o madre)",
    "meaningKo": "부모",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2362,
    "kanji": "両親",
    "displayReading": "りょうしん",
    "readings": [
      "りょうしん"
    ],
    "meaning": "Bố mẹ, song thân",
    "meaningEn": "Both parents",
    "meaningFr": "Les deux parents",
    "meaningEs": "Padres (ambos)",
    "meaningKo": "양친, 부모님",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2363,
    "kanji": "親切",
    "displayReading": "しんせつ",
    "readings": [
      "しんせつ"
    ],
    "meaning": "Thân thiện, tốt bụng",
    "meaningEn": "Kind, friendly",
    "meaningFr": "Aimable, gentil",
    "meaningEs": "Amable, cariñoso",
    "meaningKo": "친절함",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2364,
    "kanji": "親友",
    "displayReading": "しんゆう",
    "readings": [
      "しんゆう"
    ],
    "meaning": "Bạn thân",
    "meaningEn": "Close friend",
    "meaningFr": "Meilleur ami",
    "meaningEs": "Mejor amigo",
    "meaningKo": "절친한 친구",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2365,
    "kanji": "住む",
    "displayReading": "すむ",
    "readings": [
      "すむ"
    ],
    "meaning": "Sinh sống, cư trú",
    "meaningEn": "Live, reside",
    "meaningFr": "Habiter, vivre",
    "meaningEs": "Vivir, residir",
    "meaningKo": "살다, 거주하다",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2366,
    "kanji": "住所",
    "displayReading": "じゅうしょ",
    "readings": [
      "じゅうしょ"
    ],
    "meaning": "Địa chỉ",
    "meaningEn": "Address",
    "meaningFr": "Adresse",
    "meaningEs": "Dirección, domicilio",
    "meaningKo": "주소",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 263,
    "kanji": "仕事",
    "displayReading": "しごと",
    "readings": [
      "しごと"
    ],
    "meaning": "Công việc",
    "meaningEn": "Work, job",
    "meaningFr": "Travail, métier",
    "meaningEs": "Trabajo, empleo",
    "meaningKo": "일, 직업",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2368,
    "kanji": "仕方",
    "displayReading": "しかた",
    "readings": [
      "しかた"
    ],
    "meaning": "Cách làm, phương pháp",
    "meaningEn": "Way, method",
    "meaningFr": "Manière de faire",
    "meaningEs": "Manera de hacer",
    "meaningKo": "하는 방법",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2369,
    "kanji": "働く",
    "displayReading": "はたらく",
    "readings": [
      "はたらく"
    ],
    "meaning": "Làm việc, lao động",
    "meaningEn": "Work, labor",
    "meaningFr": "Travailler",
    "meaningEs": "Trabajar",
    "meaningKo": "일하다",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 137,
    "kanji": "会社",
    "displayReading": "かいしゃ",
    "readings": [
      "かいしゃ"
    ],
    "meaning": "Công ty",
    "meaningEn": "Company",
    "meaningFr": "Entreprise, société",
    "meaningEs": "Empresa, compañía",
    "meaningKo": "회사",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2371,
    "kanji": "社員",
    "displayReading": "しゃいん",
    "readings": [
      "しゃいん"
    ],
    "meaning": "Nhân viên công ty",
    "meaningEn": "Company employee",
    "meaningFr": "Employé d'entreprise",
    "meaningEs": "Empleado de empresa",
    "meaningKo": "회사원",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2372,
    "kanji": "会社員",
    "displayReading": "かいしゃいん",
    "readings": [
      "かいしゃいん"
    ],
    "meaning": "Nhân viên văn phòng",
    "meaningEn": "Office worker",
    "meaningFr": "Employé de bureau",
    "meaningEs": "Oficinista, empleado",
    "meaningKo": "사원, 직원",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2373,
    "kanji": "社会",
    "displayReading": "しゃかい",
    "readings": [
      "しゃかい"
    ],
    "meaning": "Xã hội",
    "meaningEn": "Society",
    "meaningFr": "Société",
    "meaningEs": "Sociedad",
    "meaningKo": "사회",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2374,
    "kanji": "全員",
    "displayReading": "ぜんいん",
    "readings": [
      "ぜんいん"
    ],
    "meaning": "Toàn thể nhân viên / mọi người",
    "meaningEn": "Everyone, all members",
    "meaningFr": "Tout le monde, tous les membres",
    "meaningEs": "Todos los miembros",
    "meaningKo": "전원, 모두",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2375,
    "kanji": "夫",
    "displayReading": "おっと",
    "readings": [
      "おっと"
    ],
    "meaning": "Chồng",
    "meaningEn": "Husband",
    "meaningFr": "Mari",
    "meaningEs": "Esposo, marido",
    "meaningKo": "남편",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2376,
    "kanji": "大丈夫",
    "displayReading": "だいじょうぶ",
    "readings": [
      "だいじょうぶ"
    ],
    "meaning": "Không sao, ổn",
    "meaningEn": "All right, okay",
    "meaningFr": "Ça va, sans problème",
    "meaningEs": "Bien, sin problema",
    "meaningKo": "괜찮음, 문제없음",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2377,
    "kanji": "妻",
    "displayReading": "つま",
    "readings": [
      "つま"
    ],
    "meaning": "Vợ",
    "meaningEn": "Wife",
    "meaningFr": "Épouse, femme",
    "meaningEs": "Esposa, mujer",
    "meaningKo": "아내",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2378,
    "kanji": "夫妻",
    "displayReading": "ふさい",
    "readings": [
      "ふさい"
    ],
    "meaning": "Vợ chồng",
    "meaningEn": "Husband and wife (formal)",
    "meaningFr": "Monsieur et Madame (couple)",
    "meaningEs": "Señor y señora (matrimonio)",
    "meaningKo": "부부 (높임말)",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2379,
    "kanji": "夫婦",
    "displayReading": "ふうふ",
    "readings": [
      "ふうふ"
    ],
    "meaning": "Hai vợ chồng",
    "meaningEn": "Married couple",
    "meaningFr": "Couple marié",
    "meaningEs": "Matrimonio, pareja casada",
    "meaningKo": "부부",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2380,
    "kanji": "結ぶ",
    "displayReading": "むすぶ",
    "readings": [
      "むすぶ"
    ],
    "meaning": "Buộc, nối, kết lại",
    "meaningEn": "Tie, bind, connect",
    "meaningFr": "Nouer, relier",
    "meaningEs": "Atar, unir",
    "meaningKo": "묶다, 맺다",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2381,
    "kanji": "結婚",
    "displayReading": "けっこん",
    "readings": [
      "けっこん"
    ],
    "meaning": "Kết hôn",
    "meaningEn": "Marriage",
    "meaningFr": "Mariage",
    "meaningEs": "Matrimonio, boda",
    "meaningKo": "결혼",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2382,
    "kanji": "結果",
    "displayReading": "けっか",
    "readings": [
      "けっか"
    ],
    "meaning": "Kết quả",
    "meaningEn": "Result, outcome",
    "meaningFr": "Résultat",
    "meaningEs": "Resultado",
    "meaningKo": "결과",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2383,
    "kanji": "歳",
    "displayReading": "さい",
    "readings": [
      "さい"
    ],
    "meaning": "Tuổi",
    "meaningEn": "Years of age",
    "meaningFr": "Ans (âge)",
    "meaningEs": "Años de edad",
    "meaningKo": "살, 세 (나이)",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2384,
    "kanji": "二十歳",
    "displayReading": "はたち",
    "readings": [
      "はたち"
    ],
    "meaning": "20 tuổi",
    "meaningEn": "20 years old",
    "meaningFr": "20 ans",
    "meaningEs": "20 años de edad",
    "meaningKo": "스무 살 (20세)",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2385,
    "kanji": "世界",
    "displayReading": "せかい",
    "readings": [
      "せかい"
    ],
    "meaning": "Thế giới",
    "meaningEn": "World",
    "meaningFr": "Le monde",
    "meaningEs": "El mundo",
    "meaningKo": "세계",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2386,
    "kanji": "世話",
    "displayReading": "せわ",
    "readings": [
      "せわ"
    ],
    "meaning": "Sự chăm sóc, giúp đỡ",
    "meaningEn": "Care, help",
    "meaningFr": "Soin, aide",
    "meaningEs": "Cuidado, ayuda",
    "meaningKo": "보살핌, 신세",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2387,
    "kanji": "彼",
    "displayReading": "かれ",
    "readings": [
      "かれ"
    ],
    "meaning": "Anh ấy, bạn trai",
    "meaningEn": "He, boyfriend",
    "meaningFr": "Lui, petit ami",
    "meaningEs": "Él, novio",
    "meaningKo": "그, 남자친구",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2388,
    "kanji": "彼女",
    "displayReading": "かのじょ",
    "readings": [
      "かのじょ"
    ],
    "meaning": "Cô ấy, bạn gái",
    "meaningEn": "She, girlfriend",
    "meaningFr": "Elle, petite amie",
    "meaningEs": "Ella, novia",
    "meaningKo": "그녀, 여자친구",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 164,
    "kanji": "国",
    "displayReading": "くに",
    "readings": [
      "くに"
    ],
    "meaning": "Đất nước, quốc gia",
    "meaningEn": "Country, nation",
    "meaningFr": "Pays",
    "meaningEs": "País",
    "meaningKo": "나라, 국가",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 166,
    "kanji": "中国",
    "displayReading": "ちゅうごく",
    "readings": [
      "ちゅうごく"
    ],
    "meaning": "Trung Quốc",
    "meaningEn": "China",
    "meaningFr": "Chine",
    "meaningEs": "China",
    "meaningKo": "중국",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2391,
    "kanji": "韓国",
    "displayReading": "かんこく",
    "readings": [
      "かんこく"
    ],
    "meaning": "Hàn Quốc",
    "meaningEn": "South Korea",
    "meaningFr": "Corée du Sud",
    "meaningEs": "Corea del Sur",
    "meaningKo": "한국",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2392,
    "kanji": "米国",
    "displayReading": "べいこく",
    "readings": [
      "べいこく"
    ],
    "meaning": "Nước Mỹ",
    "meaningEn": "United States",
    "meaningFr": "États-Unis",
    "meaningEs": "Estados Unidos",
    "meaningKo": "미국",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 173,
    "kanji": "英国",
    "displayReading": "えいこく",
    "readings": [
      "えいこく"
    ],
    "meaning": "Nước Anh",
    "meaningEn": "United Kingdom",
    "meaningFr": "Royaume-Uni",
    "meaningEs": "Reino Unido",
    "meaningKo": "영국",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2394,
    "kanji": "国際",
    "displayReading": "こくさい",
    "readings": [
      "こくさい"
    ],
    "meaning": "Quốc tế",
    "meaningEn": "International",
    "meaningFr": "International",
    "meaningEs": "Internacional",
    "meaningKo": "국제",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 174,
    "kanji": "英雄",
    "displayReading": "えいゆう",
    "readings": [
      "えいゆう"
    ],
    "meaning": "Anh hùng",
    "meaningEn": "Hero",
    "meaningFr": "Héros",
    "meaningEs": "Héroe",
    "meaningKo": "영웅",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2396,
    "kanji": "主婦",
    "displayReading": "しゅふ",
    "readings": [
      "しゅふ"
    ],
    "meaning": "Nội trợ",
    "meaningEn": "Housewife",
    "meaningFr": "Femme au foyer",
    "meaningEs": "Ama de casa",
    "meaningKo": "주부",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2397,
    "kanji": "主人公",
    "displayReading": "しゅじんこう",
    "readings": [
      "しゅじんこう"
    ],
    "meaning": "Nhân vật chính",
    "meaningEn": "Main character, protagonist",
    "meaningFr": "Personnage principal",
    "meaningEs": "Protagonista",
    "meaningKo": "주인공",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 342,
    "kanji": "先輩",
    "displayReading": "せんぱい",
    "readings": [
      "せんぱい"
    ],
    "meaning": "Tiền bối",
    "meaningEn": "Senior (senpai)",
    "meaningFr": "Aîné, tuteur (senpai)",
    "meaningEs": "Compañero veterano (senpai)",
    "meaningKo": "선배",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2399,
    "kanji": "後輩",
    "displayReading": "こうはい",
    "readings": [
      "こうはい"
    ],
    "meaning": "Hậu bối",
    "meaningEn": "Junior (kohai)",
    "meaningFr": "Cadet (kohai)",
    "meaningEs": "Compañero menor (kohai)",
    "meaningKo": "후배",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2400,
    "kanji": "課長",
    "displayReading": "かちょう",
    "readings": [
      "かちょう"
    ],
    "meaning": "Trưởng phòng ban / tổ trưởng",
    "meaningEn": "Section manager",
    "meaningFr": "Chef de service",
    "meaningEs": "Jefe de sección",
    "meaningKo": "과장",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2401,
    "kanji": "残業",
    "displayReading": "ざんぎょう",
    "readings": [
      "ざんぎょう"
    ],
    "meaning": "Làm thêm giờ, tăng ca",
    "meaningEn": "Overtime work",
    "meaningFr": "Heures supplémentaires",
    "meaningEs": "Horas extras",
    "meaningKo": "잔업, 야근",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2402,
    "kanji": "出張",
    "displayReading": "しゅっちょう",
    "readings": [
      "しゅっちょう"
    ],
    "meaning": "Đi công tác",
    "meaningEn": "Business trip",
    "meaningFr": "Voyage d'affaires",
    "meaningEs": "Viaje de negocios",
    "meaningKo": "출장",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2403,
    "kanji": "就職",
    "displayReading": "しゅうしょく",
    "readings": [
      "しゅうしょく"
    ],
    "meaning": "Xin việc, đi làm",
    "meaningEn": "Finding employment",
    "meaningFr": "Trouver un emploi",
    "meaningEs": "Conseguir empleo",
    "meaningKo": "취직",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2404,
    "kanji": "引っ越し",
    "displayReading": "ひっこし",
    "readings": [
      "ひっこし"
    ],
    "meaning": "Chuyển nhà",
    "meaningEn": "Moving house",
    "meaningFr": "Déménagement",
    "meaningEs": "Mudanza",
    "meaningKo": "이사",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2405,
    "kanji": "挨拶",
    "displayReading": "あいさつ",
    "readings": [
      "あいさつ"
    ],
    "meaning": "Chào hỏi",
    "meaningEn": "Greeting",
    "meaningFr": "Salutation",
    "meaningEs": "Saludo",
    "meaningKo": "인사",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2406,
    "kanji": "相談",
    "displayReading": "そうだん",
    "readings": [
      "そうだん"
    ],
    "meaning": "Trao đổi, bàn bạc, tư vấn",
    "meaningEn": "Consultation, discussion",
    "meaningFr": "Consultation, discussion",
    "meaningEs": "Consulta, consejo",
    "meaningKo": "상담, 상의",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2407,
    "kanji": "連絡",
    "displayReading": "れんらく",
    "readings": [
      "れんらく"
    ],
    "meaning": "Liên lạc",
    "meaningEn": "Contact, notification",
    "meaningFr": "Contact, message",
    "meaningEs": "Contacto, aviso",
    "meaningKo": "연락",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2408,
    "kanji": "紹介",
    "displayReading": "しょうかい",
    "readings": [
      "しょうかい"
    ],
    "meaning": "Giới thiệu",
    "meaningEn": "Introduction",
    "meaningFr": "Présentation",
    "meaningEs": "Presentación",
    "meaningKo": "소개",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2409,
    "kanji": "結婚式",
    "displayReading": "けっこんしき",
    "readings": [
      "けっこんしき"
    ],
    "meaning": "Lễ cưới",
    "meaningEn": "Wedding ceremony",
    "meaningFr": "Cérémonie de mariage",
    "meaningEs": "Ceremonia de boda",
    "meaningKo": "결혼식",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 274,
    "kanji": "朝",
    "displayReading": "あさ",
    "readings": [
      "あさ"
    ],
    "meaning": "Buổi sáng",
    "meaningEn": "Morning",
    "meaningFr": "Matin",
    "meaningEs": "Mañana (parte del día)",
    "meaningKo": "아침",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 276,
    "kanji": "今朝",
    "displayReading": "けさ",
    "readings": [
      "けさ"
    ],
    "meaning": "Sáng nay",
    "meaningEn": "This morning",
    "meaningFr": "Ce matin",
    "meaningEs": "Esta mañana",
    "meaningKo": "오늘 아침",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 275,
    "kanji": "毎朝",
    "displayReading": "まいあさ",
    "readings": [
      "まいあさ"
    ],
    "meaning": "Mỗi sáng",
    "meaningEn": "Every morning",
    "meaningFr": "Chaque matin",
    "meaningEs": "Cada mañana",
    "meaningKo": "매일 아침",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 279,
    "kanji": "昼",
    "displayReading": "ひる",
    "readings": [
      "ひる"
    ],
    "meaning": "Buổi trưa, ban ngày",
    "meaningEn": "Noon, daytime",
    "meaningFr": "Midi, journée",
    "meaningEs": "Mediodía, de día",
    "meaningKo": "낮, 점심",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 281,
    "kanji": "昼休み",
    "displayReading": "ひるやすみ",
    "readings": [
      "ひるやすみ"
    ],
    "meaning": "Giờ nghỉ trưa",
    "meaningEn": "Lunch break",
    "meaningFr": "Pause déjeuner",
    "meaningEs": "Descanso del mediodía",
    "meaningKo": "점심시간",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 282,
    "kanji": "昼寝",
    "displayReading": "ひるね",
    "readings": [
      "ひるね"
    ],
    "meaning": "Ngủ trưa",
    "meaningEn": "Afternoon nap",
    "meaningFr": "Sieste",
    "meaningEs": "Siesta",
    "meaningKo": "낮잠",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 284,
    "kanji": "夜",
    "displayReading": "よる",
    "readings": [
      "よる"
    ],
    "meaning": "Buổi tối, ban đêm",
    "meaningEn": "Night, evening",
    "meaningFr": "Nuit, soir",
    "meaningEs": "Noche",
    "meaningKo": "밤",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2417,
    "kanji": "今夜",
    "displayReading": "こんや",
    "readings": [
      "こんや"
    ],
    "meaning": "Tối nay",
    "meaningEn": "Tonight",
    "meaningFr": "Ce soir, cette nuit",
    "meaningEs": "Esta noche",
    "meaningKo": "오늘 밤",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 285,
    "kanji": "夜景",
    "displayReading": "やけい",
    "readings": [
      "やけい"
    ],
    "meaning": "Cảnh đêm",
    "meaningEn": "Night view",
    "meaningFr": "Vue nocturne",
    "meaningEs": "Vista nocturna",
    "meaningKo": "야경",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 286,
    "kanji": "夜勤",
    "displayReading": "やきん",
    "readings": [
      "やきん"
    ],
    "meaning": "Làm ca đêm",
    "meaningEn": "Night shift",
    "meaningFr": "Travail de nuit",
    "meaningEs": "Turno de noche",
    "meaningKo": "야간 근무",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2420,
    "kanji": "晩",
    "displayReading": "ばん",
    "readings": [
      "ばん"
    ],
    "meaning": "Buổi tối",
    "meaningEn": "Evening, night",
    "meaningFr": "Soir",
    "meaningEs": "Noche, velada",
    "meaningKo": "저녁, 밤",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2421,
    "kanji": "今晩",
    "displayReading": "こんばん",
    "readings": [
      "こんばん"
    ],
    "meaning": "Tối nay",
    "meaningEn": "This evening",
    "meaningFr": "Ce soir",
    "meaningEs": "Esta noche",
    "meaningKo": "오늘 저녁",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2422,
    "kanji": "毎晩",
    "displayReading": "まいばん",
    "readings": [
      "まいばん"
    ],
    "meaning": "Mỗi tối",
    "meaningEn": "Every evening",
    "meaningFr": "Chaque soir",
    "meaningEs": "Cada noche",
    "meaningKo": "매일 저녁",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2423,
    "kanji": "昨日",
    "displayReading": "きのう",
    "readings": [
      "きのう"
    ],
    "meaning": "Hôm qua",
    "meaningEn": "Yesterday",
    "meaningFr": "Hier",
    "meaningEs": "Ayer",
    "meaningKo": "어제",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2424,
    "kanji": "昨年",
    "displayReading": "さくねん",
    "readings": [
      "さくねん"
    ],
    "meaning": "Năm ngoái (trang trọng)",
    "meaningEn": "Last year (formal)",
    "meaningFr": "L'an dernier (formel)",
    "meaningEs": "El año pasado (formal)",
    "meaningKo": "작년 (격식)",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 99,
    "kanji": "去年",
    "displayReading": "きょねん",
    "readings": [
      "きょねん"
    ],
    "meaning": "Năm ngoái",
    "meaningEn": "Last year",
    "meaningFr": "L'année dernière",
    "meaningEs": "El año pasado",
    "meaningKo": "작년",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2426,
    "kanji": "過去",
    "displayReading": "かこ",
    "readings": [
      "かこ"
    ],
    "meaning": "Quá khứ",
    "meaningEn": "The past",
    "meaningFr": "Le passé",
    "meaningEs": "El pasado",
    "meaningKo": "과거",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 177,
    "kanji": "春",
    "displayReading": "はる",
    "readings": [
      "はる"
    ],
    "meaning": "Mùa xuân",
    "meaningEn": "Spring",
    "meaningFr": "Printemps",
    "meaningEs": "Primavera",
    "meaningKo": "봄",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 178,
    "kanji": "春休み",
    "displayReading": "はるやすみ",
    "readings": [
      "はるやすみ"
    ],
    "meaning": "Kỳ nghỉ xuân",
    "meaningEn": "Spring break",
    "meaningFr": "Vacances de printemps",
    "meaningEs": "Vacaciones de primavera",
    "meaningKo": "봄방학",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 179,
    "kanji": "青春",
    "displayReading": "せいしゅん",
    "readings": [
      "せいしゅん"
    ],
    "meaning": "Tuổi thanh xuân",
    "meaningEn": "Youth, springtime of life",
    "meaningFr": "La jeunesse",
    "meaningEs": "Juventud",
    "meaningKo": "청춘",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 181,
    "kanji": "夏",
    "displayReading": "なつ",
    "readings": [
      "なつ"
    ],
    "meaning": "Mùa hè",
    "meaningEn": "Summer",
    "meaningFr": "Été",
    "meaningEs": "Verano",
    "meaningKo": "여름",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 140,
    "kanji": "夏休み",
    "displayReading": "なつやすみ",
    "readings": [
      "なつやすみ"
    ],
    "meaning": "Kỳ nghỉ hè",
    "meaningEn": "Summer vacation",
    "meaningFr": "Vacances d'été",
    "meaningEs": "Vacaciones de verano",
    "meaningKo": "여름방학",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 183,
    "kanji": "初夏",
    "displayReading": "しょか",
    "readings": [
      "しょか"
    ],
    "meaning": "Đầu hè",
    "meaningEn": "Early summer",
    "meaningFr": "Début de l'été",
    "meaningEs": "Principios de verano",
    "meaningKo": "초여름",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 184,
    "kanji": "秋",
    "displayReading": "あき",
    "readings": [
      "あき"
    ],
    "meaning": "Mùa thu",
    "meaningEn": "Autumn, fall",
    "meaningFr": "Automne",
    "meaningEs": "Otoño",
    "meaningKo": "가을",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 185,
    "kanji": "秋風",
    "displayReading": "あきかぜ",
    "readings": [
      "あきかぜ"
    ],
    "meaning": "Gió thu",
    "meaningEn": "Autumn breeze",
    "meaningFr": "Brise d'automne",
    "meaningEs": "Brisa de otoño",
    "meaningKo": "가을바람",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 186,
    "kanji": "秋分",
    "displayReading": "しゅうぶん",
    "readings": [
      "しゅうぶん"
    ],
    "meaning": "Thu phân",
    "meaningEn": "Autumnal equinox",
    "meaningFr": "Équinoxe d'automne",
    "meaningEs": "Equinoccio de otoño",
    "meaningKo": "추분",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 187,
    "kanji": "冬",
    "displayReading": "ふゆ",
    "readings": [
      "ふゆ"
    ],
    "meaning": "Mùa đông",
    "meaningEn": "Winter",
    "meaningFr": "Hiver",
    "meaningEs": "Invierno",
    "meaningKo": "겨울",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 188,
    "kanji": "冬休み",
    "displayReading": "ふゆやすみ",
    "readings": [
      "ふゆやすみ"
    ],
    "meaning": "Kỳ nghỉ đông",
    "meaningEn": "Winter vacation",
    "meaningFr": "Vacances d'hiver",
    "meaningEs": "Vacaciones de invierno",
    "meaningKo": "겨울방학",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 189,
    "kanji": "冬至",
    "displayReading": "とうじ",
    "readings": [
      "とうじ"
    ],
    "meaning": "Đông chí",
    "meaningEn": "Winter solstice",
    "meaningFr": "Solstice d'hiver",
    "meaningEs": "Solsticio de invierno",
    "meaningKo": "동지",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 73,
    "kanji": "四季",
    "displayReading": "しき",
    "readings": [
      "しき"
    ],
    "meaning": "Bốn mùa",
    "meaningEn": "Four seasons",
    "meaningFr": "Les quatre saisons",
    "meaningEs": "Las cuatro estaciones",
    "meaningKo": "사계절",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2440,
    "kanji": "季節",
    "displayReading": "きせつ",
    "readings": [
      "きせつ"
    ],
    "meaning": "Mùa, thời tiết theo mùa",
    "meaningEn": "Season",
    "meaningFr": "Saison",
    "meaningEs": "Estación del año",
    "meaningKo": "계절",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 214,
    "kanji": "晴れ",
    "displayReading": "はれ",
    "readings": [
      "はれ"
    ],
    "meaning": "Trời nắng, trời quang",
    "meaningEn": "Sunny, clear weather",
    "meaningFr": "Beau temps, ensoleillé",
    "meaningEs": "Soleado, buen tiempo",
    "meaningKo": "맑음",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2442,
    "kanji": "晴れる",
    "displayReading": "はれる",
    "readings": [
      "はれる"
    ],
    "meaning": "Hửng nắng, quang đãng",
    "meaningEn": "Clear up (weather)",
    "meaningFr": "S'éclaircir (météo)",
    "meaningEs": "Despejarse el cielo",
    "meaningKo": "(날씨가) 개다, 맑아지다",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 216,
    "kanji": "晴天",
    "displayReading": "せいてん",
    "readings": [
      "せいてん"
    ],
    "meaning": "Trời quang mây tạnh",
    "meaningEn": "Clear sky, fine weather",
    "meaningFr": "Ciel dégagé",
    "meaningEs": "Cielo despejado",
    "meaningKo": "쾌청함",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 223,
    "kanji": "雲",
    "displayReading": "くも",
    "readings": [
      "くも"
    ],
    "meaning": "Mây",
    "meaningEn": "Cloud",
    "meaningFr": "Nuage",
    "meaningEs": "Nube",
    "meaningKo": "구름",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 225,
    "kanji": "雨雲",
    "displayReading": "あまぐも",
    "readings": [
      "あまぐも"
    ],
    "meaning": "Mây mưa",
    "meaningEn": "Rain cloud",
    "meaningFr": "Nuage de pluie",
    "meaningEs": "Nube de lluvia",
    "meaningKo": "비구름",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 226,
    "kanji": "雲海",
    "displayReading": "うんかい",
    "readings": [
      "うんかい"
    ],
    "meaning": "Biển mây",
    "meaningEn": "Sea of clouds",
    "meaningFr": "Mer de nuages",
    "meaningEs": "Mar de nubes",
    "meaningKo": "운해 (구름바다)",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2447,
    "kanji": "曇り",
    "displayReading": "くもり",
    "readings": [
      "くもり"
    ],
    "meaning": "Trời có mây, âm u",
    "meaningEn": "Cloudy weather",
    "meaningFr": "Temps nuageux",
    "meaningEs": "Nublado",
    "meaningKo": "흐림",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 228,
    "kanji": "風",
    "displayReading": "かぜ",
    "readings": [
      "かぜ"
    ],
    "meaning": "Gió",
    "meaningEn": "Wind",
    "meaningFr": "Vent",
    "meaningEs": "Viento",
    "meaningKo": "바람",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 230,
    "kanji": "台風",
    "displayReading": "たいふう",
    "readings": [
      "たいふう"
    ],
    "meaning": "Bão",
    "meaningEn": "Typhoon",
    "meaningFr": "Typhon",
    "meaningEs": "Tifón",
    "meaningKo": "태풍",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 222,
    "kanji": "梅雨",
    "displayReading": "つゆ",
    "readings": [
      "つゆ"
    ],
    "meaning": "Mùa mưa",
    "meaningEn": "Rainy season",
    "meaningFr": "Saison des pluies",
    "meaningEs": "Temporada de lluvias",
    "meaningKo": "장마",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2451,
    "kanji": "雪",
    "displayReading": "ゆき",
    "readings": [
      "ゆき"
    ],
    "meaning": "Tuyết",
    "meaningEn": "Snow",
    "meaningFr": "Neige",
    "meaningEs": "Nieve",
    "meaningKo": "눈 (날씨)",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2452,
    "kanji": "大雪",
    "displayReading": "おおゆき",
    "readings": [
      "おおゆき"
    ],
    "meaning": "Tuyết rơi dày",
    "meaningEn": "Heavy snow",
    "meaningFr": "Forte neige",
    "meaningEs": "Fuerte nevada",
    "meaningKo": "폭설, 큰눈",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2453,
    "kanji": "暑い",
    "displayReading": "あつい",
    "readings": [
      "あつい"
    ],
    "meaning": "Nóng (thời tiết)",
    "meaningEn": "Hot (weather)",
    "meaningFr": "Chaud (météo)",
    "meaningEs": "Caluroso (clima)",
    "meaningKo": "덥다",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2454,
    "kanji": "寒い",
    "displayReading": "さむい",
    "readings": [
      "さむい"
    ],
    "meaning": "Lạnh (thời tiết)",
    "meaningEn": "Cold (weather)",
    "meaningFr": "Froid (météo)",
    "meaningEs": "Frío (clima)",
    "meaningKo": "춥다",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2455,
    "kanji": "暖かい",
    "displayReading": "あたたかい",
    "readings": [
      "あたたかい"
    ],
    "meaning": "Ấm áp",
    "meaningEn": "Warm",
    "meaningFr": "Doux, tiède (météo)",
    "meaningEs": "Cálido, templado (clima)",
    "meaningKo": "따뜻하다 (날씨)",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2456,
    "kanji": "暖房",
    "displayReading": "だんぼう",
    "readings": [
      "だんぼう"
    ],
    "meaning": "Máy sưởi, hệ thống sưởi",
    "meaningEn": "Heater, heating",
    "meaningFr": "Chauffage",
    "meaningEs": "Calefacción",
    "meaningKo": "난방",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2457,
    "kanji": "涼しい",
    "displayReading": "すずしい",
    "readings": [
      "すずしい"
    ],
    "meaning": "Mát mẻ",
    "meaningEn": "Cool, refreshing",
    "meaningFr": "Frais, rafraîchissant",
    "meaningEs": "Fresco, agradable",
    "meaningKo": "시원하다, 선선하다",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2458,
    "kanji": "冷たい",
    "displayReading": "つめたい",
    "readings": [
      "つめたい"
    ],
    "meaning": "Lạnh (đồ vật, chạm vào)",
    "meaningEn": "Cold (to touch)",
    "meaningFr": "Froid (au toucher)",
    "meaningEs": "Frío (al tacto)",
    "meaningKo": "차갑다 (촉감)",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2459,
    "kanji": "冷房",
    "displayReading": "れいぼう",
    "readings": [
      "れいぼう"
    ],
    "meaning": "Điều hòa làm mát",
    "meaningEn": "Air conditioning",
    "meaningFr": "Climatisation",
    "meaningEs": "Aire acondicionado",
    "meaningKo": "냉방",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2460,
    "kanji": "冷蔵庫",
    "displayReading": "れいぞうこ",
    "readings": [
      "れいぞうこ"
    ],
    "meaning": "Tủ lạnh",
    "meaningEn": "Refrigerator",
    "meaningFr": "Réfrigérateur",
    "meaningEs": "Refrigerador, nevera",
    "meaningKo": "냉장고",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2461,
    "kanji": "明るい",
    "displayReading": "あかるい",
    "readings": [
      "あかるい"
    ],
    "meaning": "Sáng sủa, tươi sáng",
    "meaningEn": "Bright, cheerful",
    "meaningFr": "Lumineux, joyeux",
    "meaningEs": "Luminoso, alegre",
    "meaningKo": "밝다, 명랑하다",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2462,
    "kanji": "明日",
    "displayReading": "あした・あす",
    "readings": [
      "あした",
      "あす"
    ],
    "meaning": "Ngày mai",
    "meaningEn": "Tomorrow",
    "meaningFr": "Demain",
    "meaningEs": "Mañana (día siguiente)",
    "meaningKo": "내일",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2463,
    "kanji": "暗い",
    "displayReading": "くらい",
    "readings": [
      "くらい"
    ],
    "meaning": "Tối tăm",
    "meaningEn": "Dark",
    "meaningFr": "Sombre, obscur",
    "meaningEs": "Oscuro",
    "meaningKo": "어둡다",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2464,
    "kanji": "料理",
    "displayReading": "りょうり",
    "readings": [
      "りょうり"
    ],
    "meaning": "Món ăn, nấu ăn",
    "meaningEn": "Cooking, dish",
    "meaningFr": "Cuisine, plat",
    "meaningEs": "Cocina, plato",
    "meaningKo": "요리",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2465,
    "kanji": "材料",
    "displayReading": "ざいりょう",
    "readings": [
      "ざいりょう"
    ],
    "meaning": "Nguyên liệu",
    "meaningEn": "Ingredient, material",
    "meaningFr": "Ingrédient, matériau",
    "meaningEs": "Ingrediente, material",
    "meaningKo": "재료",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2466,
    "kanji": "料金",
    "displayReading": "りょうきん",
    "readings": [
      "りょうきん"
    ],
    "meaning": "Phí, cước phí",
    "meaningEn": "Fee, charge",
    "meaningFr": "Tarif, frais",
    "meaningEs": "Tarifa, precio",
    "meaningKo": "요금",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2467,
    "kanji": "ご飯",
    "displayReading": "ごはん",
    "readings": [
      "ごはん"
    ],
    "meaning": "Cơm, bữa ăn",
    "meaningEn": "Cooked rice, meal",
    "meaningFr": "Riz cuit, repas",
    "meaningEs": "Arroz cocido, comida",
    "meaningKo": "밥, 식사",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 277,
    "kanji": "朝ご飯",
    "displayReading": "あさごはん",
    "readings": [
      "あさごはん"
    ],
    "meaning": "Bữa sáng",
    "meaningEn": "Breakfast",
    "meaningFr": "Petit-déjeuner",
    "meaningEs": "Desayuno",
    "meaningKo": "아침밥",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 280,
    "kanji": "昼ご飯",
    "displayReading": "ひるごはん",
    "readings": [
      "ひるごはん"
    ],
    "meaning": "Bữa trưa",
    "meaningEn": "Lunch",
    "meaningFr": "Déjeuner",
    "meaningEs": "Almuerzo",
    "meaningKo": "점심밥",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2470,
    "kanji": "晩ご飯",
    "displayReading": "ばんごはん",
    "readings": [
      "ばんごはん"
    ],
    "meaning": "Bữa tối",
    "meaningEn": "Dinner",
    "meaningFr": "Dîner",
    "meaningEs": "Cena",
    "meaningKo": "저녁밥",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 278,
    "kanji": "朝食",
    "displayReading": "ちょうしょく",
    "readings": [
      "ちょうしょく"
    ],
    "meaning": "Bữa sáng (trang trọng)",
    "meaningEn": "Breakfast (formal)",
    "meaningFr": "Petit-déjeuner (formel)",
    "meaningEs": "Desayuno (formal)",
    "meaningKo": "아침 식사 (조식)",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 283,
    "kanji": "昼食",
    "displayReading": "ちゅうしょく",
    "readings": [
      "ちゅうしょく"
    ],
    "meaning": "Bữa trưa (trang trọng)",
    "meaningEn": "Lunch (formal)",
    "meaningFr": "Déjeuner (formel)",
    "meaningEs": "Almuerzo (formal)",
    "meaningKo": "점심 식사 (중식)",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 288,
    "kanji": "夕食",
    "displayReading": "ゆうしょく",
    "readings": [
      "ゆうしょく"
    ],
    "meaning": "Bữa tối (trang trọng)",
    "meaningEn": "Dinner (formal)",
    "meaningFr": "Dîner (formel)",
    "meaningEs": "Cena (formal)",
    "meaningKo": "저녁 식사 (석식)",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 289,
    "kanji": "夜食",
    "displayReading": "やしょく",
    "readings": [
      "やしょく"
    ],
    "meaning": "Bữa ăn khuya",
    "meaningEn": "Midnight snack",
    "meaningFr": "Repas de fin de soirée",
    "meaningEs": "Cena tardía",
    "meaningKo": "야식",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2475,
    "kanji": "外食",
    "displayReading": "がいしょく",
    "readings": [
      "がいしょく"
    ],
    "meaning": "Ăn ngoài hàng",
    "meaningEn": "Eating out",
    "meaningFr": "Manger au restaurant",
    "meaningEs": "Comer fuera de casa",
    "meaningKo": "외식",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2476,
    "kanji": "野菜",
    "displayReading": "やさい",
    "readings": [
      "やさい"
    ],
    "meaning": "Rau củ",
    "meaningEn": "Vegetables",
    "meaningFr": "Légumes",
    "meaningEs": "Verduras",
    "meaningKo": "채소, 야채",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 353,
    "kanji": "生野菜",
    "displayReading": "なまやさい",
    "readings": [
      "なまやさい"
    ],
    "meaning": "Rau sống",
    "meaningEn": "Raw vegetables",
    "meaningFr": "Crudités, légumes crus",
    "meaningEs": "Verduras crudas",
    "meaningKo": "생채소",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2478,
    "kanji": "果物",
    "displayReading": "くだもの",
    "readings": [
      "くだもの"
    ],
    "meaning": "Trái cây, hoa quả",
    "meaningEn": "Fruit",
    "meaningFr": "Fruits",
    "meaningEs": "Fruta",
    "meaningKo": "과일",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2479,
    "kanji": "牛",
    "displayReading": "うし",
    "readings": [
      "うし"
    ],
    "meaning": "Con bò",
    "meaningEn": "Cow",
    "meaningFr": "Vache, bœuf",
    "meaningEs": "Vaca, res",
    "meaningKo": "소",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2480,
    "kanji": "牛乳",
    "displayReading": "ぎゅうにゅう",
    "readings": [
      "ぎゅうにゅう"
    ],
    "meaning": "Sữa bò",
    "meaningEn": "Milk",
    "meaningFr": "Lait de vache",
    "meaningEs": "Leche de vaca",
    "meaningKo": "우유",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2481,
    "kanji": "豚",
    "displayReading": "ぶた",
    "readings": [
      "ぶた"
    ],
    "meaning": "Con lợn (heo)",
    "meaningEn": "Pig",
    "meaningFr": "Cochon, porc",
    "meaningEs": "Cerdo",
    "meaningKo": "돼지",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2482,
    "kanji": "豚肉",
    "displayReading": "ぶたにく",
    "readings": [
      "ぶたにく"
    ],
    "meaning": "Thịt lợn",
    "meaningEn": "Pork",
    "meaningFr": "Viande de porc",
    "meaningEs": "Carne de cerdo",
    "meaningKo": "돼지고기",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2483,
    "kanji": "鳥",
    "displayReading": "とり",
    "readings": [
      "とり"
    ],
    "meaning": "Con chim, gà",
    "meaningEn": "Bird, chicken",
    "meaningFr": "Oiseau, volaille",
    "meaningEs": "Pájaro, ave",
    "meaningKo": "새",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2484,
    "kanji": "鳥肉",
    "displayReading": "とりにく",
    "readings": [
      "とりにく"
    ],
    "meaning": "Thịt gà",
    "meaningEn": "Chicken meat",
    "meaningFr": "Viande de poulet",
    "meaningEs": "Carne de pollo",
    "meaningKo": "닭고기",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2485,
    "kanji": "焼き鳥",
    "displayReading": "やきとり",
    "readings": [
      "やきとり"
    ],
    "meaning": "Thịt gà nướng xiên",
    "meaningEn": "Grilled chicken skewers (yakitori)",
    "meaningFr": "Brochettes de poulet (yakitori)",
    "meaningEs": "Brochetas de pollo (yakitori)",
    "meaningKo": "닭꼬치구이 (야키토리)",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2486,
    "kanji": "焼く",
    "displayReading": "やく",
    "readings": [
      "やく"
    ],
    "meaning": "Nướng, rán, đốt",
    "meaningEn": "Grill, bake, roast",
    "meaningFr": "Griller, cuire au four",
    "meaningEs": "Asar, hornear",
    "meaningKo": "굽다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 180,
    "kanji": "春巻き",
    "displayReading": "はるまき",
    "readings": [
      "はるまき"
    ],
    "meaning": "Chả giò, nem rán",
    "meaningEn": "Spring roll",
    "meaningFr": "Rouleau de printemps",
    "meaningEs": "Rollito de primavera",
    "meaningKo": "춘권",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2488,
    "kanji": "作る",
    "displayReading": "つくる",
    "readings": [
      "つくる"
    ],
    "meaning": "Làm, nấu, chế tạo",
    "meaningEn": "Make, cook, create",
    "meaningFr": "Fabriquer, préparer",
    "meaningEs": "Hacer, preparar, fabricar",
    "meaningKo": "만들다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2489,
    "kanji": "切る",
    "displayReading": "きる",
    "readings": [
      "きる"
    ],
    "meaning": "Cắt",
    "meaningEn": "Cut",
    "meaningFr": "Couper",
    "meaningEs": "Cortar",
    "meaningKo": "자르다, 끊다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2490,
    "kanji": "切手",
    "displayReading": "きって",
    "readings": [
      "きって"
    ],
    "meaning": "Tem thư",
    "meaningEn": "Postage stamp",
    "meaningFr": "Timbre-poste",
    "meaningEs": "Sello postal",
    "meaningKo": "우표",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2491,
    "kanji": "切符",
    "displayReading": "きっぷ",
    "readings": [
      "きっぷ"
    ],
    "meaning": "Vé (tàu, xe)",
    "meaningEn": "Ticket",
    "meaningFr": "Billet, ticket",
    "meaningEs": "Billete, boleto",
    "meaningKo": "표, 티켓",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2492,
    "kanji": "大切",
    "displayReading": "たいせつ",
    "readings": [
      "たいせつ"
    ],
    "meaning": "Quan trọng, quý giá",
    "meaningEn": "Important, precious",
    "meaningFr": "Important, précieux",
    "meaningEs": "Importante, valioso",
    "meaningKo": "소중함, 중요함",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2493,
    "kanji": "甘い",
    "displayReading": "あまい",
    "readings": [
      "あまい"
    ],
    "meaning": "Ngọt",
    "meaningEn": "Sweet",
    "meaningFr": "Sucré, doux",
    "meaningEs": "Dulce",
    "meaningKo": "달다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2494,
    "kanji": "辛い",
    "displayReading": "からい",
    "readings": [
      "からい"
    ],
    "meaning": "Cay",
    "meaningEn": "Spicy, hot",
    "meaningFr": "Épicé, piquant",
    "meaningEs": "Picante",
    "meaningKo": "맵다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2495,
    "kanji": "苦い",
    "displayReading": "にがい",
    "readings": [
      "にがい"
    ],
    "meaning": "Đắng",
    "meaningEn": "Bitter",
    "meaningFr": "Amer",
    "meaningEs": "Amargo",
    "meaningKo": "쓰다 (맛)",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2496,
    "kanji": "苦手",
    "displayReading": "にがて",
    "readings": [
      "にがて"
    ],
    "meaning": "Kém, không giỏi, ngại",
    "meaningEn": "Weak at, dislike",
    "meaningFr": "Point faible, ne pas aimer",
    "meaningEs": "Punto débil, no gustar",
    "meaningKo": "서투름, 싫어함",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2497,
    "kanji": "注文",
    "displayReading": "ちゅうもん",
    "readings": [
      "ちゅうもん"
    ],
    "meaning": "Gọi món, đặt hàng",
    "meaningEn": "Order (food, goods)",
    "meaningFr": "Commande (au restaurant)",
    "meaningEs": "Pedido (en restaurante)",
    "meaningKo": "주문",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2498,
    "kanji": "注意",
    "displayReading": "ちゅうい",
    "readings": [
      "ちゅうい"
    ],
    "meaning": "Chú ý, cẩn thận",
    "meaningEn": "Attention, caution",
    "meaningFr": "Attention, prudence",
    "meaningEs": "Atención, cuidado",
    "meaningKo": "주의, 조심",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2499,
    "kanji": "食堂",
    "displayReading": "しょくどう",
    "readings": [
      "しょくどう"
    ],
    "meaning": "Nhà ăn, căng tin",
    "meaningEn": "Cafeteria, dining hall",
    "meaningFr": "Cantine, réfectoire",
    "meaningEs": "Comedor, cafetería",
    "meaningKo": "식당",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 240,
    "kanji": "喫茶店",
    "displayReading": "きっさてん",
    "readings": [
      "きっさてん"
    ],
    "meaning": "Quán cà phê, giải khát",
    "meaningEn": "Coffee shop, cafe",
    "meaningFr": "Salon de thé, café",
    "meaningEs": "Cafetería",
    "meaningKo": "찻집, 카페",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2501,
    "kanji": "酒",
    "displayReading": "さけ",
    "readings": [
      "さけ"
    ],
    "meaning": "Rượu",
    "meaningEn": "Alcohol, sake",
    "meaningFr": "Alcool, saké",
    "meaningEs": "Alcohol, sake",
    "meaningKo": "술",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2502,
    "kanji": "お酒",
    "displayReading": "おさけ",
    "readings": [
      "おさけ"
    ],
    "meaning": "Rượu (lịch sự)",
    "meaningEn": "Alcohol (polite)",
    "meaningFr": "Alcool (poli)",
    "meaningEs": "Bebida alcohólica (cortés)",
    "meaningKo": "술 (높임말)",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2503,
    "kanji": "日本酒",
    "displayReading": "にほんしゅ",
    "readings": [
      "にほんしゅ"
    ],
    "meaning": "Rượu sake Nhật",
    "meaningEn": "Japanese sake",
    "meaningFr": "Saké japonais",
    "meaningEs": "Sake japonés",
    "meaningKo": "일본주 (사케)",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2504,
    "kanji": "味",
    "displayReading": "あじ",
    "readings": [
      "あじ"
    ],
    "meaning": "Mùi vị",
    "meaningEn": "Taste, flavor",
    "meaningFr": "Goût, saveur",
    "meaningEs": "Sabor, gusto",
    "meaningKo": "맛",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2505,
    "kanji": "味噌",
    "displayReading": "みそ",
    "readings": [
      "みそ"
    ],
    "meaning": "Tương miso",
    "meaningEn": "Miso paste",
    "meaningFr": "Pâte miso",
    "meaningEs": "Pasta de miso",
    "meaningKo": "된장 (미소)",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2506,
    "kanji": "和食",
    "displayReading": "わしょく",
    "readings": [
      "わしょく"
    ],
    "meaning": "Ẩm thực Nhật Bản",
    "meaningEn": "Japanese cuisine",
    "meaningFr": "Cuisine japonaise",
    "meaningEs": "Comida japonesa",
    "meaningKo": "일식 (화식)",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 231,
    "kanji": "和風",
    "displayReading": "わふう",
    "readings": [
      "わふう"
    ],
    "meaning": "Phong cách Nhật",
    "meaningEn": "Japanese style",
    "meaningFr": "Style japonais",
    "meaningEs": "Estilo japonés",
    "meaningKo": "일본식",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2508,
    "kanji": "洋食",
    "displayReading": "ようしょく",
    "readings": [
      "ようしょく"
    ],
    "meaning": "Ẩm thực phương Tây",
    "meaningEn": "Western cuisine",
    "meaningFr": "Cuisine occidentale",
    "meaningEs": "Comida occidental",
    "meaningKo": "양식 (서양 요리)",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2509,
    "kanji": "物",
    "displayReading": "もの",
    "readings": [
      "もの"
    ],
    "meaning": "Đồ vật, thứ",
    "meaningEn": "Thing, object",
    "meaningFr": "Objet, chose",
    "meaningEs": "Cosa, objeto",
    "meaningKo": "물건, 것",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 162,
    "kanji": "好物",
    "displayReading": "こうぶつ",
    "readings": [
      "こうぶつ"
    ],
    "meaning": "Món ăn yêu thích",
    "meaningEn": "Favorite food",
    "meaningFr": "Plat préféré",
    "meaningEs": "Comida favorita",
    "meaningKo": "좋아하는 음식",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2511,
    "kanji": "弁当",
    "displayReading": "べんとう",
    "readings": [
      "べんとう"
    ],
    "meaning": "Cơm hộp bento",
    "meaningEn": "Boxed lunch (bento)",
    "meaningFr": "Panier-repas (bento)",
    "meaningEs": "Caja de comida (bento)",
    "meaningKo": "도시락",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2512,
    "kanji": "八百屋",
    "displayReading": "やおや",
    "readings": [
      "やおや"
    ],
    "meaning": "Cửa hàng rau quả",
    "meaningEn": "Greengrocer",
    "meaningFr": "Marchand de fruits et légumes",
    "meaningEs": "Verdulería, frutería",
    "meaningKo": "채소·과일 가게",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2513,
    "kanji": "沸かす",
    "displayReading": "わかす",
    "readings": [
      "わかす"
    ],
    "meaning": "Đun sôi",
    "meaningEn": "Boil (water)",
    "meaningFr": "Faire bouillir",
    "meaningEs": "Hervir (agua)",
    "meaningKo": "(물을) 끓이다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2514,
    "kanji": "煮る",
    "displayReading": "にる",
    "readings": [
      "にる"
    ],
    "meaning": "Ninh, hầm, kho",
    "meaningEn": "Simmer, stew",
    "meaningFr": "Faire mijoter",
    "meaningEs": "Cocer a fuego lento",
    "meaningKo": "삶다, 조리다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2515,
    "kanji": "揚げる",
    "displayReading": "あげる",
    "readings": [
      "あげる"
    ],
    "meaning": "Chiên ngập dầu, rán",
    "meaningEn": "Deep-fry",
    "meaningFr": "Frire",
    "meaningEs": "Freír",
    "meaningKo": "튀기다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2516,
    "kanji": "炒める",
    "displayReading": "いためる",
    "readings": [
      "いためる"
    ],
    "meaning": "Xào",
    "meaningEn": "Stir-fry",
    "meaningFr": "Faire sauter à la poêle",
    "meaningEs": "Saltear",
    "meaningKo": "볶다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2517,
    "kanji": "混ぜる",
    "displayReading": "まぜる",
    "readings": [
      "まぜる"
    ],
    "meaning": "Trộn",
    "meaningEn": "Mix",
    "meaningFr": "Mélanger",
    "meaningEs": "Mezclar",
    "meaningKo": "섞다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2518,
    "kanji": "冷やす",
    "displayReading": "ひやす",
    "readings": [
      "ひやす"
    ],
    "meaning": "Làm lạnh, ướp lạnh",
    "meaningEn": "Chill, cool down",
    "meaningFr": "Refroidir, mettre au frais",
    "meaningEs": "Enfriar",
    "meaningKo": "식히다, 차게 하다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2519,
    "kanji": "温める",
    "displayReading": "あたためる",
    "readings": [
      "あたためる"
    ],
    "meaning": "Hâm nóng",
    "meaningEn": "Warm up, heat up",
    "meaningFr": "Réchauffer",
    "meaningEs": "Calentar",
    "meaningKo": "데우다, 따뜻하게 하다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2520,
    "kanji": "塩",
    "displayReading": "しお",
    "readings": [
      "しお"
    ],
    "meaning": "Muối",
    "meaningEn": "Salt",
    "meaningFr": "Sel",
    "meaningEs": "Sal",
    "meaningKo": "소금",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2521,
    "kanji": "砂糖",
    "displayReading": "さとう",
    "readings": [
      "さとう"
    ],
    "meaning": "Đường",
    "meaningEn": "Sugar",
    "meaningFr": "Sucre",
    "meaningEs": "Azúcar",
    "meaningKo": "설탕",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2522,
    "kanji": "醤油",
    "displayReading": "しょうゆ",
    "readings": [
      "しょうゆ"
    ],
    "meaning": "Nước tương, xì dầu",
    "meaningEn": "Soy sauce",
    "meaningFr": "Sauce soja",
    "meaningEs": "Salsa de soja",
    "meaningKo": "간장",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2523,
    "kanji": "油",
    "displayReading": "あぶら",
    "readings": [
      "あぶら"
    ],
    "meaning": "Dầu ăn",
    "meaningEn": "Cooking oil",
    "meaningFr": "Huile",
    "meaningEs": "Aceite",
    "meaningKo": "기름",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2524,
    "kanji": "米",
    "displayReading": "こめ",
    "readings": [
      "こめ"
    ],
    "meaning": "Gạo",
    "meaningEn": "Uncooked rice",
    "meaningFr": "Riz cru",
    "meaningEs": "Arroz crudo",
    "meaningKo": "쌀",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2525,
    "kanji": "皿",
    "displayReading": "さら",
    "readings": [
      "さら"
    ],
    "meaning": "Cái đĩa",
    "meaningEn": "Plate, dish",
    "meaningFr": "Assiette",
    "meaningEs": "Plato",
    "meaningKo": "접시",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 159,
    "kanji": "好き",
    "displayReading": "すき",
    "readings": [
      "すき"
    ],
    "meaning": "Thích",
    "meaningEn": "Like, fond of",
    "meaningFr": "Aimer, apprécier",
    "meaningEs": "Gustar",
    "meaningKo": "좋아함",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 160,
    "kanji": "大好き",
    "displayReading": "だいすき",
    "readings": [
      "だいすき"
    ],
    "meaning": "Rất thích",
    "meaningEn": "Love, like very much",
    "meaningFr": "Adorer",
    "meaningEs": "Encantar, gustar mucho",
    "meaningKo": "매우 좋아함",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 161,
    "kanji": "好む",
    "displayReading": "このむ",
    "readings": [
      "このむ"
    ],
    "meaning": "Ưa thích, yêu chuộng",
    "meaningEn": "Prefer, be fond of",
    "meaningFr": "Préférer",
    "meaningEs": "Preferir",
    "meaningKo": "선호함",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 163,
    "kanji": "好意",
    "displayReading": "こうい",
    "readings": [
      "こうい"
    ],
    "meaning": "Thiện ý, lòng tốt",
    "meaningEn": "Goodwill, kindness",
    "meaningFr": "Bienveillance",
    "meaningEs": "Buena voluntad, afecto",
    "meaningKo": "호의",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2530,
    "kanji": "趣味",
    "displayReading": "しゅみ",
    "readings": [
      "しゅみ"
    ],
    "meaning": "Sở thích",
    "meaningEn": "Hobby, pastime",
    "meaningFr": "Loisir, passe-temps",
    "meaningEs": "Afición, pasatiempo",
    "meaningKo": "취미",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2531,
    "kanji": "写す",
    "displayReading": "うつす",
    "readings": [
      "うつす"
    ],
    "meaning": "Chụp ảnh, sao chép",
    "meaningEn": "Photograph, copy",
    "meaningFr": "Photographier, copier",
    "meaningEs": "Fotografiar, copiar",
    "meaningKo": "찍다, 베끼다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2532,
    "kanji": "写真",
    "displayReading": "しゃしん",
    "readings": [
      "しゃしん"
    ],
    "meaning": "Bức ảnh",
    "meaningEn": "Photograph",
    "meaningFr": "Photo",
    "meaningEs": "Fotografía, foto",
    "meaningKo": "사진",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2533,
    "kanji": "写真家",
    "displayReading": "しゃしんか",
    "readings": [
      "しゃしんか"
    ],
    "meaning": "Nhiếp ảnh gia",
    "meaningEn": "Photographer",
    "meaningFr": "Photographe",
    "meaningEs": "Fotógrafo",
    "meaningKo": "사진작가",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2534,
    "kanji": "真",
    "displayReading": "ま",
    "readings": [
      "ま"
    ],
    "meaning": "Thật, chính giữa",
    "meaningEn": "True, exact center",
    "meaningFr": "Vrai, pur",
    "meaningEs": "Verdadero, puro",
    "meaningKo": "참됨, 순수함",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2535,
    "kanji": "真ん中",
    "displayReading": "まんなか",
    "readings": [
      "まんなか"
    ],
    "meaning": "Chính giữa",
    "meaningEn": "Right in the middle",
    "meaningFr": "En plein milieu",
    "meaningEs": "Justo en el centro",
    "meaningKo": "한가운데",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2536,
    "kanji": "映画",
    "displayReading": "えいが",
    "readings": [
      "えいが"
    ],
    "meaning": "Phim điện ảnh",
    "meaningEn": "Movie, film",
    "meaningFr": "Film, cinéma",
    "meaningEs": "Película, cine",
    "meaningKo": "영화",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2537,
    "kanji": "映画館",
    "displayReading": "えいがかん",
    "readings": [
      "えいがかん"
    ],
    "meaning": "Rạp chiếu phim",
    "meaningEn": "Movie theater",
    "meaningFr": "Salle de cinéma",
    "meaningEs": "Cine (sala)",
    "meaningKo": "영화관",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2538,
    "kanji": "漫画",
    "displayReading": "まんが",
    "readings": [
      "まんが"
    ],
    "meaning": "Truyện tranh manga",
    "meaningEn": "Manga, comic",
    "meaningFr": "Manga, bande dessinée",
    "meaningEs": "Manga, cómic",
    "meaningKo": "만화",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2539,
    "kanji": "画家",
    "displayReading": "がか",
    "readings": [
      "がか"
    ],
    "meaning": "Họa sĩ",
    "meaningEn": "Painter, artist",
    "meaningFr": "Artiste peintre",
    "meaningEs": "Pintor, artista",
    "meaningKo": "화가",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2540,
    "kanji": "絵",
    "displayReading": "え",
    "readings": [
      "え"
    ],
    "meaning": "Tranh vẽ",
    "meaningEn": "Picture, painting",
    "meaningFr": "Dessin, tableau",
    "meaningEs": "Dibujo, cuadro",
    "meaningKo": "그림",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2541,
    "kanji": "絵本",
    "displayReading": "えほん",
    "readings": [
      "えほん"
    ],
    "meaning": "Sách tranh",
    "meaningEn": "Picture book",
    "meaningFr": "Livre illustré",
    "meaningEs": "Libro ilustrado",
    "meaningKo": "그림책",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2542,
    "kanji": "歌",
    "displayReading": "うた",
    "readings": [
      "うた"
    ],
    "meaning": "Bài hát",
    "meaningEn": "Song",
    "meaningFr": "Chanson",
    "meaningEs": "Canción",
    "meaningKo": "노래",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2543,
    "kanji": "歌う",
    "displayReading": "うたう",
    "readings": [
      "うたう"
    ],
    "meaning": "Hát",
    "meaningEn": "Sing",
    "meaningFr": "Chanter",
    "meaningEs": "Cantar",
    "meaningKo": "노래하다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2544,
    "kanji": "歌手",
    "displayReading": "かしゅ",
    "readings": [
      "かしゅ"
    ],
    "meaning": "Ca sĩ",
    "meaningEn": "Singer",
    "meaningFr": "Chanteur",
    "meaningEs": "Cantante",
    "meaningKo": "가수",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2545,
    "kanji": "演奏",
    "displayReading": "えんそう",
    "readings": [
      "えんそう"
    ],
    "meaning": "Biểu diễn nhạc cụ",
    "meaningEn": "Musical performance",
    "meaningFr": "Interprétation musicale",
    "meaningEs": "Interpretación musical",
    "meaningKo": "연주",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2546,
    "kanji": "運ぶ",
    "displayReading": "はこぶ",
    "readings": [
      "はこぶ"
    ],
    "meaning": "Vận chuyển, mang vác",
    "meaningEn": "Carry, transport",
    "meaningFr": "Transporter, porter",
    "meaningEs": "Transportar, llevar",
    "meaningKo": "운반하다, 나르다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2547,
    "kanji": "運動",
    "displayReading": "うんどう",
    "readings": [
      "うんどう"
    ],
    "meaning": "Vận động, thể thao",
    "meaningEn": "Exercise, sports",
    "meaningFr": "Sport, exercice physique",
    "meaningEs": "Deporte, ejercicio",
    "meaningKo": "운동",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2548,
    "kanji": "動く",
    "displayReading": "うごく",
    "readings": [
      "うごく"
    ],
    "meaning": "Di chuyển, hoạt động",
    "meaningEn": "Move",
    "meaningFr": "Bouger",
    "meaningEs": "Moverse",
    "meaningKo": "움직이다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2549,
    "kanji": "動物",
    "displayReading": "どうぶつ",
    "readings": [
      "どうぶつ"
    ],
    "meaning": "Động vật",
    "meaningEn": "Animal",
    "meaningFr": "Animal",
    "meaningEs": "Animal",
    "meaningKo": "동물",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2550,
    "kanji": "動物園",
    "displayReading": "どうぶつえん",
    "readings": [
      "どうぶつえん"
    ],
    "meaning": "Sở thú",
    "meaningEn": "Zoo",
    "meaningFr": "Zoo",
    "meaningEs": "Zoológico",
    "meaningKo": "동물원",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2551,
    "kanji": "自動",
    "displayReading": "じどう",
    "readings": [
      "じどう"
    ],
    "meaning": "Tự động",
    "meaningEn": "Automatic",
    "meaningFr": "Automatique",
    "meaningEs": "Automático",
    "meaningKo": "자동",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2552,
    "kanji": "走る",
    "displayReading": "はしる",
    "readings": [
      "はしる"
    ],
    "meaning": "Chạy",
    "meaningEn": "Run",
    "meaningFr": "Courir",
    "meaningEs": "Correr",
    "meaningKo": "달리다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2553,
    "kanji": "泳ぐ",
    "displayReading": "およぐ",
    "readings": [
      "およぐ"
    ],
    "meaning": "Bơi",
    "meaningEn": "Swim",
    "meaningFr": "Nager",
    "meaningEs": "Nadar",
    "meaningKo": "헤엄치다, 수영하다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2554,
    "kanji": "水泳",
    "displayReading": "すいえい",
    "readings": [
      "すいえい"
    ],
    "meaning": "Môn bơi lội",
    "meaningEn": "Swimming",
    "meaningFr": "Natation",
    "meaningEs": "Natación",
    "meaningKo": "수영",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2555,
    "kanji": "野球",
    "displayReading": "やきゅう",
    "readings": [
      "やきゅう"
    ],
    "meaning": "Bóng chày",
    "meaningEn": "Baseball",
    "meaningFr": "Baseball",
    "meaningEs": "Béisbol",
    "meaningKo": "야구",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2556,
    "kanji": "遊ぶ",
    "displayReading": "あそぶ",
    "readings": [
      "あそぶ"
    ],
    "meaning": "Chơi, vui chơi",
    "meaningEn": "Play, hang out",
    "meaningFr": "Jouer, s'amuser",
    "meaningEs": "Jugar, divertirse",
    "meaningKo": "놀다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2557,
    "kanji": "習う",
    "displayReading": "ならう",
    "readings": [
      "ならう"
    ],
    "meaning": "Học (từ ai đó)",
    "meaningEn": "Learn (from someone)",
    "meaningFr": "Apprendre (auprès de qqn)",
    "meaningEs": "Aprender (de un profesor)",
    "meaningKo": "배우다, 익히다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 333,
    "kanji": "学習",
    "displayReading": "がくしゅう",
    "readings": [
      "がくしゅう"
    ],
    "meaning": "Học tập",
    "meaningEn": "Learning, study",
    "meaningFr": "Étude, apprentissage",
    "meaningEs": "Estudio, aprendizaje",
    "meaningKo": "학습",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2559,
    "kanji": "復習",
    "displayReading": "ふくしゅう",
    "readings": [
      "ふくしゅう"
    ],
    "meaning": "Ôn tập",
    "meaningEn": "Review, revision",
    "meaningFr": "Révision",
    "meaningEs": "Repaso",
    "meaningKo": "복습",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2560,
    "kanji": "予習",
    "displayReading": "よしゅう",
    "readings": [
      "よしゅう"
    ],
    "meaning": "Chuẩn bị bài trước",
    "meaningEn": "Lesson preparation",
    "meaningFr": "Préparation des cours",
    "meaningEs": "Preparación de clases",
    "meaningKo": "예습",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2561,
    "kanji": "練習",
    "displayReading": "れんしゅう",
    "readings": [
      "れんしゅう"
    ],
    "meaning": "Luyện tập",
    "meaningEn": "Practice, training",
    "meaningFr": "Entraînement, exercice",
    "meaningEs": "Práctica, entrenamiento",
    "meaningKo": "연습",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2562,
    "kanji": "試す",
    "displayReading": "ためす",
    "readings": [
      "ためす"
    ],
    "meaning": "Thử, thử nghiệm",
    "meaningEn": "Try, test",
    "meaningFr": "Essayer, tester",
    "meaningEs": "Probar, intentar",
    "meaningKo": "시험 삼아 해 보다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2563,
    "kanji": "試合",
    "displayReading": "しあい",
    "readings": [
      "しあい"
    ],
    "meaning": "Trận đấu",
    "meaningEn": "Match, game",
    "meaningFr": "Match, compétition",
    "meaningEs": "Partido, competición",
    "meaningKo": "시합, 경기",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2564,
    "kanji": "合う",
    "displayReading": "あう",
    "readings": [
      "あう"
    ],
    "meaning": "Hợp, vừa vặn, khớp",
    "meaningEn": "Fit, match, suit",
    "meaningFr": "Correspondre, aller bien",
    "meaningEs": "Encajar, quedar bien",
    "meaningKo": "맞다, 어울리다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2565,
    "kanji": "間に合う",
    "displayReading": "まにあう",
    "readings": [
      "まにあう"
    ],
    "meaning": "Kịp giờ",
    "meaningEn": "Be in time",
    "meaningFr": "Arriver à temps",
    "meaningEs": "Llegar a tiempo",
    "meaningKo": "시간에 맞추다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2566,
    "kanji": "都合",
    "displayReading": "つごう",
    "readings": [
      "つごう"
    ],
    "meaning": "Sự thuận tiện, hoàn cảnh",
    "meaningEn": "Convenience, circumstances",
    "meaningFr": "Disponibilité, convenance",
    "meaningEs": "Conveniencia, disponibilidad",
    "meaningKo": "형편, 사정",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2567,
    "kanji": "勝つ",
    "displayReading": "かつ",
    "readings": [
      "かつ"
    ],
    "meaning": "Thắng",
    "meaningEn": "Win",
    "meaningFr": "Gagner",
    "meaningEs": "Ganar",
    "meaningKo": "이기다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2568,
    "kanji": "勝負",
    "displayReading": "しょうぶ",
    "readings": [
      "しょうぶ"
    ],
    "meaning": "Thắng thua, trận đấu",
    "meaningEn": "Victory or defeat, match",
    "meaningFr": "Victoire ou défaite, duel",
    "meaningEs": "Victoria o derrota, duelo",
    "meaningKo": "승부, 겨루기",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2569,
    "kanji": "負ける",
    "displayReading": "まける",
    "readings": [
      "まける"
    ],
    "meaning": "Thua",
    "meaningEn": "Lose",
    "meaningFr": "Perdre",
    "meaningEs": "Perder",
    "meaningKo": "지다, 패하다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 362,
    "kanji": "音",
    "displayReading": "おと",
    "readings": [
      "おと"
    ],
    "meaning": "Âm thanh, tiếng động",
    "meaningEn": "Sound, noise",
    "meaningFr": "Son, bruit",
    "meaningEs": "Sonido, ruido",
    "meaningKo": "소리",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 363,
    "kanji": "音楽",
    "displayReading": "おんがく",
    "readings": [
      "おんがく"
    ],
    "meaning": "Âm nhạc",
    "meaningEn": "Music",
    "meaningFr": "Musique",
    "meaningEs": "Música",
    "meaningKo": "음악",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2572,
    "kanji": "楽器",
    "displayReading": "がっき",
    "readings": [
      "がっき"
    ],
    "meaning": "Nhạc cụ",
    "meaningEn": "Musical instrument",
    "meaningFr": "Instrument de musique",
    "meaningEs": "Instrumento musical",
    "meaningKo": "악기",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 365,
    "kanji": "楽しい",
    "displayReading": "たのしい",
    "readings": [
      "たのしい"
    ],
    "meaning": "Vui vẻ",
    "meaningEn": "Fun, enjoyable",
    "meaningFr": "Amusant, agréable",
    "meaningEs": "Divertido, agradable",
    "meaningKo": "즐겁다, 재미있다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2574,
    "kanji": "楽しむ",
    "displayReading": "たのしむ",
    "readings": [
      "たのしむ"
    ],
    "meaning": "Tận hưởng",
    "meaningEn": "Enjoy",
    "meaningFr": "Profiter de, apprécier",
    "meaningEs": "Disfrutar",
    "meaningKo": "즐기다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2575,
    "kanji": "楽",
    "displayReading": "らく",
    "readings": [
      "らく"
    ],
    "meaning": "Thoải mái, nhàn hạ",
    "meaningEn": "Comfortable, easy",
    "meaningFr": "Confortable, facile",
    "meaningEs": "Cómodo, fácil",
    "meaningKo": "편하다, 수월하다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 368,
    "kanji": "旅",
    "displayReading": "たび",
    "readings": [
      "たび"
    ],
    "meaning": "Chuyến đi, du lịch",
    "meaningEn": "Trip, journey",
    "meaningFr": "Voyage, périple",
    "meaningEs": "Viaje, travesía",
    "meaningKo": "여행",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2577,
    "kanji": "旅館",
    "displayReading": "りょかん",
    "readings": [
      "りょかん"
    ],
    "meaning": "Lữ quán kiểu Nhật",
    "meaningEn": "Japanese-style inn (ryokan)",
    "meaningFr": "Auberge traditionnelle (ryokan)",
    "meaningEs": "Posada tradicional japonesa (ryokan)",
    "meaningKo": "전통 여관 (료칸)",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2578,
    "kanji": "参加",
    "displayReading": "さんか",
    "readings": [
      "さんか"
    ],
    "meaning": "Tham gia",
    "meaningEn": "Participate",
    "meaningFr": "Participer",
    "meaningEs": "Participar",
    "meaningKo": "참가하다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2579,
    "kanji": "応援",
    "displayReading": "おうえん",
    "readings": [
      "おうえん"
    ],
    "meaning": "Cổ vũ, ủng hộ",
    "meaningEn": "Cheer, support",
    "meaningFr": "Encourager, soutenir",
    "meaningEs": "Animar, apoyar",
    "meaningKo": "응원",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2580,
    "kanji": "見学",
    "displayReading": "けんがく",
    "readings": [
      "けんがく"
    ],
    "meaning": "Tham quan học tập",
    "meaningEn": "Field trip, study visit",
    "meaningFr": "Visite d'étude, observation",
    "meaningEs": "Visita educativa, observación",
    "meaningKo": "견학",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2581,
    "kanji": "美術",
    "displayReading": "びじゅつ",
    "readings": [
      "びじゅつ"
    ],
    "meaning": "Mỹ thuật",
    "meaningEn": "Fine arts",
    "meaningFr": "Beaux-arts",
    "meaningEs": "Bellas artes",
    "meaningKo": "미술",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2582,
    "kanji": "芸術",
    "displayReading": "げいじゅつ",
    "readings": [
      "げいじゅつ"
    ],
    "meaning": "Nghệ thuật",
    "meaningEn": "Art",
    "meaningFr": "Art",
    "meaningEs": "Arte",
    "meaningKo": "예술",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2583,
    "kanji": "技術",
    "displayReading": "ぎじゅつ",
    "readings": [
      "ぎじゅつ"
    ],
    "meaning": "Kỹ thuật",
    "meaningEn": "Technology, technique",
    "meaningFr": "Technologie, technique",
    "meaningEs": "Tecnología, técnica",
    "meaningKo": "기술",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2584,
    "kanji": "人形劇",
    "displayReading": "にんぎょうげき",
    "readings": [
      "にんぎょうげき"
    ],
    "meaning": "Múa rối",
    "meaningEn": "Puppet show",
    "meaningFr": "Spectacle de marionnettes",
    "meaningEs": "Teatro de marionetas",
    "meaningKo": "인형극",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 237,
    "kanji": "町",
    "displayReading": "まち",
    "readings": [
      "まち"
    ],
    "meaning": "Thị trấn, khu phố",
    "meaningEn": "Town, neighborhood",
    "meaningFr": "Ville, quartier",
    "meaningEs": "Ciudad, barrio",
    "meaningKo": "동네, 거리, 마을",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 258,
    "kanji": "広い",
    "displayReading": "ひろい",
    "readings": [
      "ひろい"
    ],
    "meaning": "Rộng",
    "meaningEn": "Wide, spacious",
    "meaningFr": "Vaste, spacieux",
    "meaningEs": "Amplio, espacioso",
    "meaningKo": "넓다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 259,
    "kanji": "広場",
    "displayReading": "ひろば",
    "readings": [
      "ひろば"
    ],
    "meaning": "Quảng trường",
    "meaningEn": "Public square, plaza",
    "meaningFr": "Place publique",
    "meaningEs": "Plaza pública",
    "meaningKo": "광장",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 260,
    "kanji": "広告",
    "displayReading": "こうこく",
    "readings": [
      "こうこく"
    ],
    "meaning": "Quảng cáo",
    "meaningEn": "Advertisement",
    "meaningFr": "Publicité",
    "meaningEs": "Anuncio, publicidad",
    "meaningKo": "광고",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2589,
    "kanji": "場",
    "displayReading": "ば",
    "readings": [
      "ば"
    ],
    "meaning": "Nơi, chỗ, hiện trường",
    "meaningEn": "Place, spot, scene",
    "meaningFr": "Lieu, scène",
    "meaningEs": "Lugar, escena",
    "meaningKo": "장소, 현장",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2590,
    "kanji": "場所",
    "displayReading": "ばしょ",
    "readings": [
      "ばしょ"
    ],
    "meaning": "Địa điểm",
    "meaningEn": "Place, location",
    "meaningFr": "Endroit, emplacement",
    "meaningEs": "Lugar, ubicación",
    "meaningKo": "장소, 곳",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2591,
    "kanji": "工場",
    "displayReading": "こうじょう",
    "readings": [
      "こうじょう"
    ],
    "meaning": "Nhà máy, công xưởng",
    "meaningEn": "Factory, plant",
    "meaningFr": "Usine",
    "meaningEs": "Fábrica",
    "meaningKo": "공장",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2592,
    "kanji": "駐車場",
    "displayReading": "ちゅうしゃじょう",
    "readings": [
      "ちゅうしゃじょう"
    ],
    "meaning": "Bãi đỗ xe",
    "meaningEn": "Parking lot",
    "meaningFr": "Parking",
    "meaningEs": "Estacionamiento, parking",
    "meaningKo": "주차장",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2593,
    "kanji": "所",
    "displayReading": "ところ",
    "readings": [
      "ところ"
    ],
    "meaning": "Nơi chốn, chỗ",
    "meaningEn": "Place, spot",
    "meaningFr": "Lieu, endroit",
    "meaningEs": "Sitio, lugar",
    "meaningKo": "곳, 장소",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2594,
    "kanji": "台所",
    "displayReading": "だいどころ",
    "readings": [
      "だいどころ"
    ],
    "meaning": "Nhà bếp",
    "meaningEn": "Kitchen",
    "meaningFr": "Cuisine (pièce)",
    "meaningEs": "Cocina (habitación)",
    "meaningKo": "부엌",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2595,
    "kanji": "近い",
    "displayReading": "ちかい",
    "readings": [
      "ちかい"
    ],
    "meaning": "Gần",
    "meaningEn": "Near, close",
    "meaningFr": "Proche, près",
    "meaningEs": "Cerca, cercano",
    "meaningKo": "가깝다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2596,
    "kanji": "近所",
    "displayReading": "きんじょ",
    "readings": [
      "きんじょ"
    ],
    "meaning": "Hàng xóm, vùng lân cận",
    "meaningEn": "Neighborhood",
    "meaningFr": "Voisinage",
    "meaningEs": "Vecindario",
    "meaningKo": "이웃, 근처",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2597,
    "kanji": "最近",
    "displayReading": "さいきん",
    "readings": [
      "さいきん"
    ],
    "meaning": "Gần đây",
    "meaningEn": "Recently, lately",
    "meaningFr": "Récemment",
    "meaningEs": "Recientemente",
    "meaningKo": "최근",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2598,
    "kanji": "遠い",
    "displayReading": "とおい",
    "readings": [
      "とおい"
    ],
    "meaning": "Xa",
    "meaningEn": "Far, distant",
    "meaningFr": "Loin, éloigné",
    "meaningEs": "Lejos, lejano",
    "meaningKo": "멀다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2599,
    "kanji": "遠慮",
    "displayReading": "えんりょ",
    "readings": [
      "えんりょ"
    ],
    "meaning": "Khách sáo, ngại ngùng",
    "meaningEn": "Reserve, hesitation",
    "meaningFr": "Retenue, discrétion",
    "meaningEs": "Moderación, reserva",
    "meaningKo": "사양, 삼감",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2600,
    "kanji": "横",
    "displayReading": "よこ",
    "readings": [
      "よこ"
    ],
    "meaning": "Bên cạnh, chiều ngang",
    "meaningEn": "Beside, horizontal",
    "meaningFr": "À côté, horizontal",
    "meaningEs": "Al lado, horizontal",
    "meaningKo": "옆, 가로",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2601,
    "kanji": "角",
    "displayReading": "かど",
    "readings": [
      "かど"
    ],
    "meaning": "Góc phố, góc cạnh",
    "meaningEn": "Street corner, angle",
    "meaningFr": "Coin de rue, angle",
    "meaningEs": "Esquina, ángulo",
    "meaningKo": "모퉁이, 모서리",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2602,
    "kanji": "辺",
    "displayReading": "へん・あたり",
    "readings": [
      "へん",
      "あたり"
    ],
    "meaning": "Vùng lân cận, khu vực",
    "meaningEn": "Vicinity, around",
    "meaningFr": "Environs, alentours",
    "meaningEs": "Alrededores, cercanías",
    "meaningKo": "근처, 일대",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2603,
    "kanji": "島",
    "displayReading": "しま",
    "readings": [
      "しま"
    ],
    "meaning": "Hòn đảo",
    "meaningEn": "Island",
    "meaningFr": "Île",
    "meaningEs": "Isla",
    "meaningKo": "섬",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2604,
    "kanji": "橋",
    "displayReading": "はし",
    "readings": [
      "はし"
    ],
    "meaning": "Cây cầu",
    "meaningEn": "Bridge",
    "meaningFr": "Pont",
    "meaningEs": "Puente",
    "meaningKo": "다리 (교량)",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2605,
    "kanji": "渡る",
    "displayReading": "わたる",
    "readings": [
      "わたる"
    ],
    "meaning": "Băng qua (đường, cầu)",
    "meaningEn": "Cross (a road, bridge)",
    "meaningFr": "Traverser (un pont, une rue)",
    "meaningEs": "Cruzar (un puente o calle)",
    "meaningKo": "(다리·길을) 건너다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2606,
    "kanji": "渡す",
    "displayReading": "わたす",
    "readings": [
      "わたす"
    ],
    "meaning": "Trao tay, đưa cho",
    "meaningEn": "Hand over, pass",
    "meaningFr": "Remettre, tendre",
    "meaningEs": "Entregar, pasar",
    "meaningKo": "건네주다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2607,
    "kanji": "曲がる",
    "displayReading": "まがる",
    "readings": [
      "まがる"
    ],
    "meaning": "Rẽ, quẹo, cong",
    "meaningEn": "Turn, bend",
    "meaningFr": "Tourner, se courber",
    "meaningEs": "Girar, doblar",
    "meaningKo": "돌다, 꺾이다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2608,
    "kanji": "曲",
    "displayReading": "きょく",
    "readings": [
      "きょく"
    ],
    "meaning": "Bản nhạc, ca khúc",
    "meaningEn": "Song, musical piece",
    "meaningFr": "Morceau de musique",
    "meaningEs": "Canción, pieza musical",
    "meaningKo": "곡, 악곡",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2609,
    "kanji": "止まる",
    "displayReading": "とまる",
    "readings": [
      "とまる"
    ],
    "meaning": "Dừng lại (tự động từ)",
    "meaningEn": "Stop (intransitive)",
    "meaningFr": "S'arrêter (intransitif)",
    "meaningEs": "Detenerse (intransitivo)",
    "meaningKo": "멈추다, 서다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2610,
    "kanji": "止める",
    "displayReading": "とめる",
    "readings": [
      "とめる"
    ],
    "meaning": "Làm dừng lại, đỗ xe",
    "meaningEn": "Stop, park (transitive)",
    "meaningFr": "Arrêter, garer (transitif)",
    "meaningEs": "Detener, aparcar (transitivo)",
    "meaningKo": "멈추게 하다, 세우다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2611,
    "kanji": "中止",
    "displayReading": "ちゅうし",
    "readings": [
      "ちゅうし"
    ],
    "meaning": "Hủy bỏ, đình chỉ",
    "meaningEn": "Cancellation, suspension",
    "meaningFr": "Annulation, interruption",
    "meaningEs": "Cancelación, suspensión",
    "meaningKo": "중지, 취소",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2612,
    "kanji": "歩く",
    "displayReading": "あるく",
    "readings": [
      "あるく"
    ],
    "meaning": "Đi bộ",
    "meaningEn": "Walk",
    "meaningFr": "Marcher",
    "meaningEs": "Caminar, andar",
    "meaningKo": "걷다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2613,
    "kanji": "散歩",
    "displayReading": "さんぽ",
    "readings": [
      "さんぽ"
    ],
    "meaning": "Đi dạo",
    "meaningEn": "Stroll, take a walk",
    "meaningFr": "Promenade, balade",
    "meaningEs": "Paseo, caminata",
    "meaningKo": "산책",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2614,
    "kanji": "自転車",
    "displayReading": "じてんしゃ",
    "readings": [
      "じてんしゃ"
    ],
    "meaning": "Xe đạp",
    "meaningEn": "Bicycle",
    "meaningFr": "Vélo, bicyclette",
    "meaningEs": "Bicicleta",
    "meaningKo": "자전거",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2615,
    "kanji": "運転",
    "displayReading": "うんてん",
    "readings": [
      "うんてん"
    ],
    "meaning": "Lái xe",
    "meaningEn": "Driving",
    "meaningFr": "Conduite",
    "meaningEs": "Conducción",
    "meaningKo": "운전",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2616,
    "kanji": "運転手",
    "displayReading": "うんてんしゅ",
    "readings": [
      "うんてんしゅ"
    ],
    "meaning": "Tài xế",
    "meaningEn": "Driver",
    "meaningFr": "Chauffeur, conducteur",
    "meaningEs": "Conductor, chófer",
    "meaningKo": "운전사, 기사",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2617,
    "kanji": "降りる",
    "displayReading": "おりる",
    "readings": [
      "おりる"
    ],
    "meaning": "Xuống xe, bước xuống",
    "meaningEn": "Get off (a vehicle)",
    "meaningFr": "Descendre (d'un véhicule)",
    "meaningEs": "Bajar (de un vehículo)",
    "meaningKo": "(탈것에서) 내리다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2618,
    "kanji": "降る",
    "displayReading": "ふる",
    "readings": [
      "ふる"
    ],
    "meaning": "Rơi (mưa, tuyết)",
    "meaningEn": "Fall (rain, snow)",
    "meaningFr": "Tomber (pluie, neige)",
    "meaningEs": "Caer (lluvia, nieve)",
    "meaningKo": "(비·눈이) 내리다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2619,
    "kanji": "出発",
    "displayReading": "しゅっぱつ",
    "readings": [
      "しゅっぱつ"
    ],
    "meaning": "Xuất phát",
    "meaningEn": "Departure",
    "meaningFr": "Départ",
    "meaningEs": "Salida, partida",
    "meaningKo": "출발",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2620,
    "kanji": "発表",
    "displayReading": "はっぴょう",
    "readings": [
      "はっぴょう"
    ],
    "meaning": "Phát biểu, công bố",
    "meaningEn": "Announcement, presentation",
    "meaningFr": "Annonce, présentation",
    "meaningEs": "Presentación, anuncio",
    "meaningKo": "발표",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2621,
    "kanji": "着く",
    "displayReading": "つく",
    "readings": [
      "つく"
    ],
    "meaning": "Đến nơi",
    "meaningEn": "Arrive",
    "meaningFr": "Arriver",
    "meaningEs": "Llegar",
    "meaningKo": "도착하다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2622,
    "kanji": "着る",
    "displayReading": "きる",
    "readings": [
      "きる"
    ],
    "meaning": "Mặc (áo)",
    "meaningEn": "Wear (clothes)",
    "meaningFr": "Porter (un vêtement)",
    "meaningEs": "Ponerse, llevar puesto (ropa)",
    "meaningKo": "(옷을) 입다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2623,
    "kanji": "到着",
    "displayReading": "とうちゃく",
    "readings": [
      "とうちゃく"
    ],
    "meaning": "Sự đến nơi",
    "meaningEn": "Arrival",
    "meaningFr": "Arrivée",
    "meaningEs": "Llegada",
    "meaningKo": "도착",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2624,
    "kanji": "飛ぶ",
    "displayReading": "とぶ",
    "readings": [
      "とぶ"
    ],
    "meaning": "Bay",
    "meaningEn": "Fly",
    "meaningFr": "Voler",
    "meaningEs": "Volar",
    "meaningKo": "날다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2625,
    "kanji": "飛行機",
    "displayReading": "ひこうき",
    "readings": [
      "ひこうき"
    ],
    "meaning": "Máy bay",
    "meaningEn": "Airplane",
    "meaningFr": "Avion",
    "meaningEs": "Avión",
    "meaningKo": "비행기",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2626,
    "kanji": "機会",
    "displayReading": "きかい",
    "readings": [
      "きかい"
    ],
    "meaning": "Cơ hội",
    "meaningEn": "Opportunity, chance",
    "meaningFr": "Occasion, opportunité",
    "meaningEs": "Oportunidad, ocasión",
    "meaningKo": "기회",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2627,
    "kanji": "船",
    "displayReading": "ふね",
    "readings": [
      "ふね"
    ],
    "meaning": "Con tàu, thuyền",
    "meaningEn": "Ship, boat",
    "meaningFr": "Bateau, navire",
    "meaningEs": "Barco, buque",
    "meaningKo": "배, 선박",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2628,
    "kanji": "港",
    "displayReading": "みなと",
    "readings": [
      "みなと"
    ],
    "meaning": "Bến cảng",
    "meaningEn": "Port, harbor",
    "meaningFr": "Port",
    "meaningEs": "Puerto",
    "meaningKo": "항구",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2629,
    "kanji": "宿",
    "displayReading": "やど",
    "readings": [
      "やど"
    ],
    "meaning": "Nhà trọ, nơi lưu trú",
    "meaningEn": "Inn, lodging",
    "meaningFr": "Auberge, logement",
    "meaningEs": "Posada, alojamiento",
    "meaningKo": "숙소, 여관",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2630,
    "kanji": "図書館",
    "displayReading": "としょかん",
    "readings": [
      "としょかん"
    ],
    "meaning": "Thư viện",
    "meaningEn": "Library",
    "meaningFr": "Bibliothèque",
    "meaningEs": "Biblioteca",
    "meaningKo": "도서관",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2631,
    "kanji": "美術館",
    "displayReading": "びじゅつかん",
    "readings": [
      "びじゅつかん"
    ],
    "meaning": "Bảo tàng mỹ thuật",
    "meaningEn": "Art museum",
    "meaningFr": "Musée d'art",
    "meaningEs": "Museo de arte",
    "meaningKo": "미술관",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2632,
    "kanji": "体育館",
    "displayReading": "たいいくかん",
    "readings": [
      "たいいくかん"
    ],
    "meaning": "Nhà thi đấu thể thao",
    "meaningEn": "Gymnasium",
    "meaningFr": "Gymnase",
    "meaningEs": "Gimnasio, pabellón",
    "meaningKo": "체육관",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2633,
    "kanji": "予約",
    "displayReading": "よやく",
    "readings": [
      "よやく"
    ],
    "meaning": "Đặt trước",
    "meaningEn": "Reservation",
    "meaningFr": "Réservation",
    "meaningEs": "Reserva",
    "meaningKo": "예약",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2634,
    "kanji": "予定",
    "displayReading": "よてい",
    "readings": [
      "よてい"
    ],
    "meaning": "Dự định, lịch trình",
    "meaningEn": "Plan, schedule",
    "meaningFr": "Programme, prévu",
    "meaningEs": "Plan, horario previsto",
    "meaningKo": "예정",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2635,
    "kanji": "約束",
    "displayReading": "やくそく",
    "readings": [
      "やくそく"
    ],
    "meaning": "Lời hứa, cuộc hẹn",
    "meaningEn": "Promise, appointment",
    "meaningFr": "Promesse, rendez-vous",
    "meaningEs": "Promesa, cita",
    "meaningKo": "약속",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2636,
    "kanji": "地図",
    "displayReading": "ちず",
    "readings": [
      "ちず"
    ],
    "meaning": "Bản đồ",
    "meaningEn": "Map",
    "meaningFr": "Carte, plan",
    "meaningEs": "Mapa, plano",
    "meaningKo": "지도",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2637,
    "kanji": "地下鉄",
    "displayReading": "ちかてつ",
    "readings": [
      "ちかてつ"
    ],
    "meaning": "Tàu điện ngầm",
    "meaningEn": "Subway",
    "meaningFr": "Métro",
    "meaningEs": "Metro, subterráneo",
    "meaningKo": "지하철",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2638,
    "kanji": "地理",
    "displayReading": "ちり",
    "readings": [
      "ちり"
    ],
    "meaning": "Địa lý",
    "meaningEn": "Geography",
    "meaningFr": "Géographie",
    "meaningEs": "Geografía",
    "meaningKo": "지리",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2639,
    "kanji": "地震",
    "displayReading": "じしん",
    "readings": [
      "じしん"
    ],
    "meaning": "Động đất",
    "meaningEn": "Earthquake",
    "meaningFr": "Tremblement de terre",
    "meaningEs": "Terremoto",
    "meaningKo": "지진",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2640,
    "kanji": "公園",
    "displayReading": "こうえん",
    "readings": [
      "こうえん"
    ],
    "meaning": "Công viên",
    "meaningEn": "Park",
    "meaningFr": "Parc",
    "meaningEs": "Parque",
    "meaningKo": "공원",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2641,
    "kanji": "県",
    "displayReading": "けん",
    "readings": [
      "けん"
    ],
    "meaning": "Tỉnh",
    "meaningEn": "Prefecture",
    "meaningFr": "Préfecture (département)",
    "meaningEs": "Prefectura",
    "meaningKo": "현 (행정구역)",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2642,
    "kanji": "市",
    "displayReading": "し",
    "readings": [
      "し"
    ],
    "meaning": "Thành phố",
    "meaningEn": "City",
    "meaningFr": "Municipalité, ville",
    "meaningEs": "Municipio, ciudad",
    "meaningKo": "시 (도시)",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2643,
    "kanji": "市民",
    "displayReading": "しみん",
    "readings": [
      "しみん"
    ],
    "meaning": "Người dân thành phố",
    "meaningEn": "Citizen",
    "meaningFr": "Citoyen",
    "meaningEs": "Ciudadano",
    "meaningKo": "시민",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2644,
    "kanji": "村",
    "displayReading": "むら",
    "readings": [
      "むら"
    ],
    "meaning": "Ngôi làng",
    "meaningEn": "Village",
    "meaningFr": "Village",
    "meaningEs": "Aldea, pueblo",
    "meaningKo": "마을, 촌",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2645,
    "kanji": "田舎",
    "displayReading": "いなか",
    "readings": [
      "いなか"
    ],
    "meaning": "Nông thôn, quê",
    "meaningEn": "Countryside, hometown",
    "meaningFr": "Campagne, province",
    "meaningEs": "Campo, zona rural",
    "meaningKo": "시골, 고향",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 105,
    "kanji": "東京",
    "displayReading": "とうきょう",
    "readings": [
      "とうきょう"
    ],
    "meaning": "Tokyo",
    "meaningEn": "Tokyo",
    "meaningFr": "Tokyo",
    "meaningEs": "Tokio",
    "meaningKo": "도쿄",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 144,
    "kanji": "京都",
    "displayReading": "きょうと",
    "readings": [
      "きょうと"
    ],
    "meaning": "Kyoto",
    "meaningEn": "Kyoto",
    "meaningFr": "Kyoto",
    "meaningEs": "Kioto",
    "meaningKo": "교토",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2648,
    "kanji": "首都",
    "displayReading": "しゅと",
    "readings": [
      "しゅと"
    ],
    "meaning": "Thủ đô",
    "meaningEn": "Capital city",
    "meaningFr": "Capitale",
    "meaningEs": "Capital",
    "meaningKo": "수도",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2649,
    "kanji": "銀",
    "displayReading": "ぎん",
    "readings": [
      "ぎん"
    ],
    "meaning": "Bạc",
    "meaningEn": "Silver",
    "meaningFr": "Argent (métal)",
    "meaningEs": "Plata",
    "meaningKo": "은 (금속)",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2650,
    "kanji": "お土産",
    "displayReading": "おみやげ",
    "readings": [
      "おみやげ"
    ],
    "meaning": "Quà lưu niệm",
    "meaningEn": "Souvenir",
    "meaningFr": "Souvenir (cadeau)",
    "meaningEs": "Recuerdo, suvenir",
    "meaningKo": "기념품, 선물",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2651,
    "kanji": "交通費",
    "displayReading": "こうつうひ",
    "readings": [
      "こうつうひ"
    ],
    "meaning": "Chi phí đi lại",
    "meaningEn": "Transportation fee",
    "meaningFr": "Frais de transport",
    "meaningEs": "Gastos de transporte",
    "meaningKo": "교통비",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2652,
    "kanji": "乗り換え",
    "displayReading": "のりかえ",
    "readings": [
      "のりかえ"
    ],
    "meaning": "Chuyển tuyến tàu/xe",
    "meaningEn": "Transfer (trains/buses)",
    "meaningFr": "Correspondance (train/bus)",
    "meaningEs": "Transbordo (tren/autobús)",
    "meaningKo": "환승, 갈아타기",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2653,
    "kanji": "高速道路",
    "displayReading": "こうそくどうろ",
    "readings": [
      "こうそくどうろ"
    ],
    "meaning": "Đường cao tốc",
    "meaningEn": "Expressway, highway",
    "meaningFr": "Autoroute",
    "meaningEs": "Autopista",
    "meaningKo": "고속도로",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2654,
    "kanji": "交差点",
    "displayReading": "こうさてん",
    "readings": [
      "こうさてん"
    ],
    "meaning": "Ngã tư, giao lộ",
    "meaningEn": "Intersection",
    "meaningFr": "Carrefour, intersection",
    "meaningEs": "Cruce, intersección",
    "meaningKo": "교차로, 사거리",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2655,
    "kanji": "横断歩道",
    "displayReading": "おうだんほどう",
    "readings": [
      "おうだんほどう"
    ],
    "meaning": "Vạch qua đường cho người đi bộ",
    "meaningEn": "Crosswalk",
    "meaningFr": "Passage piéton",
    "meaningEs": "Paso de peatones",
    "meaningKo": "횡단보도",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2656,
    "kanji": "警察",
    "displayReading": "けいさつ",
    "readings": [
      "けいさつ"
    ],
    "meaning": "Cảnh sát",
    "meaningEn": "Police",
    "meaningFr": "Police",
    "meaningEs": "Policía",
    "meaningKo": "경찰",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2657,
    "kanji": "交番",
    "displayReading": "こうばん",
    "readings": [
      "こうばん"
    ],
    "meaning": "Đồn cảnh sát nhỏ",
    "meaningEn": "Police box (koban)",
    "meaningFr": "Poste de police de quartier (koban)",
    "meaningEs": "Puesto policial de barrio (koban)",
    "meaningKo": "파출소 (코반)",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2658,
    "kanji": "市役所",
    "displayReading": "しやくしょ",
    "readings": [
      "しやくしょ"
    ],
    "meaning": "Ủy ban nhân dân thành phố",
    "meaningEn": "City hall",
    "meaningFr": "Mairie, hôtel de ville",
    "meaningEs": "Ayuntamiento, alcaldía",
    "meaningKo": "시청",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2659,
    "kanji": "博物館",
    "displayReading": "はくぶつかん",
    "readings": [
      "はくぶつかん"
    ],
    "meaning": "Bảo tàng",
    "meaningEn": "Museum",
    "meaningFr": "Musée",
    "meaningEs": "Museo",
    "meaningKo": "박물관",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2660,
    "kanji": "水族館",
    "displayReading": "すいぞくかん",
    "readings": [
      "すいぞくかん"
    ],
    "meaning": "Thủy cung",
    "meaningEn": "Aquarium",
    "meaningFr": "Aquarium",
    "meaningEs": "Acuario",
    "meaningKo": "수족관",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2661,
    "kanji": "入場料",
    "displayReading": "にゅうじょうりょう",
    "readings": [
      "にゅうじょうりょう"
    ],
    "meaning": "Vé vào cổng",
    "meaningEn": "Admission fee",
    "meaningFr": "Prix d'entrée",
    "meaningEs": "Precio de entrada",
    "meaningKo": "입장료",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2662,
    "kanji": "出発時間",
    "displayReading": "しゅっぱつじかん",
    "readings": [
      "しゅっぱつじかん"
    ],
    "meaning": "Giờ khởi hành",
    "meaningEn": "Departure time",
    "meaningFr": "Heure de départ",
    "meaningEs": "Hora de salida",
    "meaningKo": "출발 시각",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2663,
    "kanji": "到着時間",
    "displayReading": "とうちゃくじかん",
    "readings": [
      "とうちゃくじかん"
    ],
    "meaning": "Giờ đến nơi",
    "meaningEn": "Arrival time",
    "meaningFr": "Heure d'arrivée",
    "meaningEs": "Hora de llegada",
    "meaningKo": "도착 시각",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2664,
    "kanji": "世界遺産",
    "displayReading": "せかいいさん",
    "readings": [
      "せかいいさん"
    ],
    "meaning": "Di sản thế giới",
    "meaningEn": "World Heritage",
    "meaningFr": "Patrimoine mondial",
    "meaningEs": "Patrimonio de la Humanidad",
    "meaningKo": "세계유산",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2665,
    "kanji": "体",
    "displayReading": "からだ",
    "readings": [
      "からだ"
    ],
    "meaning": "Cơ thể",
    "meaningEn": "Body",
    "meaningFr": "Corps",
    "meaningEs": "Cuerpo",
    "meaningKo": "몸, 신체",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2666,
    "kanji": "体育",
    "displayReading": "たいいく",
    "readings": [
      "たいいく"
    ],
    "meaning": "Thể dục",
    "meaningEn": "Physical education",
    "meaningFr": "Éducation physique",
    "meaningEs": "Educación física",
    "meaningKo": "체육",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2667,
    "kanji": "体調",
    "displayReading": "たいちょう",
    "readings": [
      "たいちょう"
    ],
    "meaning": "Tình trạng sức khỏe",
    "meaningEn": "Physical condition",
    "meaningFr": "Condition physique",
    "meaningEs": "Estado físico",
    "meaningKo": "컨디션, 몸 상태",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2668,
    "kanji": "体重",
    "displayReading": "たいじゅう",
    "readings": [
      "たいじゅう"
    ],
    "meaning": "Cân nặng",
    "meaningEn": "Body weight",
    "meaningFr": "Poids corporel",
    "meaningEs": "Peso corporal",
    "meaningKo": "체중",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2669,
    "kanji": "頭",
    "displayReading": "あたま",
    "readings": [
      "あたま"
    ],
    "meaning": "Cái đầu",
    "meaningEn": "Head",
    "meaningFr": "Tête",
    "meaningEs": "Cabeza",
    "meaningKo": "머리",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2670,
    "kanji": "頭痛",
    "displayReading": "ずつう",
    "readings": [
      "ずつう"
    ],
    "meaning": "Đau đầu",
    "meaningEn": "Headache",
    "meaningFr": "Mal de tête",
    "meaningEs": "Dolor de cabeza",
    "meaningKo": "두통",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2671,
    "kanji": "顔",
    "displayReading": "かお",
    "readings": [
      "かお"
    ],
    "meaning": "Khuôn mặt",
    "meaningEn": "Face",
    "meaningFr": "Visage",
    "meaningEs": "Cara, rostro",
    "meaningKo": "얼굴",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2672,
    "kanji": "首",
    "displayReading": "くび",
    "readings": [
      "くび"
    ],
    "meaning": "Cái cổ",
    "meaningEn": "Neck",
    "meaningFr": "Cou",
    "meaningEs": "Cuello",
    "meaningKo": "목",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2673,
    "kanji": "声",
    "displayReading": "こえ",
    "readings": [
      "こえ"
    ],
    "meaning": "Giọng nói",
    "meaningEn": "Voice",
    "meaningFr": "Voix",
    "meaningEs": "Voz",
    "meaningKo": "목소리",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2674,
    "kanji": "病気",
    "displayReading": "びょうき",
    "readings": [
      "びょうき"
    ],
    "meaning": "Bệnh tật, ốm",
    "meaningEn": "Illness, sickness",
    "meaningFr": "Maladie",
    "meaningEs": "Enfermedad",
    "meaningKo": "병, 질병",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2675,
    "kanji": "病院",
    "displayReading": "びょういん",
    "readings": [
      "びょういん"
    ],
    "meaning": "Bệnh viện",
    "meaningEn": "Hospital",
    "meaningFr": "Hôpital",
    "meaningEs": "Hospital",
    "meaningKo": "병원",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2676,
    "kanji": "入院",
    "displayReading": "にゅういん",
    "readings": [
      "にゅういん"
    ],
    "meaning": "Nhập viện",
    "meaningEn": "Hospitalization",
    "meaningFr": "Hospitalisation",
    "meaningEs": "Hospitalización",
    "meaningKo": "입원",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2677,
    "kanji": "退院",
    "displayReading": "たいいん",
    "readings": [
      "たいいん"
    ],
    "meaning": "Xuất viện",
    "meaningEn": "Hospital discharge",
    "meaningFr": "Sortie d'hôpital",
    "meaningEs": "Alta hospitalaria",
    "meaningKo": "퇴원",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2678,
    "kanji": "大学院",
    "displayReading": "だいがくいん",
    "readings": [
      "だいがくいん"
    ],
    "meaning": "Cao học, sau đại học",
    "meaningEn": "Graduate school",
    "meaningFr": "École doctorale / Master",
    "meaningEs": "Escuela de posgrado",
    "meaningKo": "대학원",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2679,
    "kanji": "医者",
    "displayReading": "いしゃ",
    "readings": [
      "いしゃ"
    ],
    "meaning": "Bác sĩ",
    "meaningEn": "Doctor",
    "meaningFr": "Médecin",
    "meaningEs": "Médico, doctor",
    "meaningKo": "의사",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2680,
    "kanji": "歯医者",
    "displayReading": "はいしゃ",
    "readings": [
      "はいしゃ"
    ],
    "meaning": "Nha sĩ",
    "meaningEn": "Dentist",
    "meaningFr": "Dentiste",
    "meaningEs": "Dentista",
    "meaningKo": "치과의사",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2681,
    "kanji": "医学",
    "displayReading": "いがく",
    "readings": [
      "いがく"
    ],
    "meaning": "Y học",
    "meaningEn": "Medicine (medical science)",
    "meaningFr": "Médecine (science)",
    "meaningEs": "Medicina (ciencia)",
    "meaningKo": "의학",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2682,
    "kanji": "若者",
    "displayReading": "わかもの",
    "readings": [
      "わかもの"
    ],
    "meaning": "Người trẻ tuổi",
    "meaningEn": "Young person",
    "meaningFr": "Les jeunes",
    "meaningEs": "Jóvenes",
    "meaningKo": "젊은이",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2683,
    "kanji": "作者",
    "displayReading": "さくしゃ",
    "readings": [
      "さくしゃ"
    ],
    "meaning": "Tác giả",
    "meaningEn": "Author, creator",
    "meaningFr": "Auteur",
    "meaningEs": "Autor, escritor",
    "meaningKo": "필자, 저자",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2684,
    "kanji": "痛い",
    "displayReading": "いたい",
    "readings": [
      "いたい"
    ],
    "meaning": "Đau",
    "meaningEn": "Painful, sore",
    "meaningFr": "Douloureux, avoir mal",
    "meaningEs": "Doloroso, doler",
    "meaningKo": "아프다",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2685,
    "kanji": "熱",
    "displayReading": "ねつ",
    "readings": [
      "ねつ"
    ],
    "meaning": "Sốt, nhiệt",
    "meaningEn": "Fever, heat",
    "meaningFr": "Fièvre, chaleur",
    "meaningEs": "Fiebre, calor",
    "meaningKo": "열, 열기",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2686,
    "kanji": "熱心",
    "displayReading": "ねっしん",
    "readings": [
      "ねっしん"
    ],
    "meaning": "Nhiệt tình, chăm chỉ",
    "meaningEn": "Enthusiastic, earnest",
    "meaningFr": "Enthousiaste, assidu",
    "meaningEs": "Entusiasta, dedicado",
    "meaningKo": "열심, 성실함",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 232,
    "kanji": "風邪",
    "displayReading": "かぜ",
    "readings": [
      "かぜ"
    ],
    "meaning": "Cảm lạnh",
    "meaningEn": "Cold (illness)",
    "meaningFr": "Rhume",
    "meaningEs": "Resfriado",
    "meaningKo": "감기",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 364,
    "kanji": "薬",
    "displayReading": "くすり",
    "readings": [
      "くすり"
    ],
    "meaning": "Thuốc",
    "meaningEn": "Medicine (drug)",
    "meaningFr": "Médicament",
    "meaningEs": "Medicina, medicamento",
    "meaningKo": "약",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2689,
    "kanji": "薬局",
    "displayReading": "やっきょく",
    "readings": [
      "やっきょく"
    ],
    "meaning": "Hiệu thuốc",
    "meaningEn": "Pharmacy",
    "meaningFr": "Pharmacie",
    "meaningEs": "Farmacia",
    "meaningKo": "약국",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2690,
    "kanji": "寝る",
    "displayReading": "ねる",
    "readings": [
      "ねる"
    ],
    "meaning": "Ngủ",
    "meaningEn": "Sleep, go to bed",
    "meaningFr": "Dormir, se coucher",
    "meaningEs": "Dormir, acostarse",
    "meaningKo": "자다, 눕다",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2691,
    "kanji": "寝坊",
    "displayReading": "ねぼう",
    "readings": [
      "ねぼう"
    ],
    "meaning": "Ngủ quên",
    "meaningEn": "Oversleep",
    "meaningFr": "Panne d'oreiller",
    "meaningEs": "Quedarse dormido",
    "meaningKo": "늦잠",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2692,
    "kanji": "起きる",
    "displayReading": "おきる",
    "readings": [
      "おきる"
    ],
    "meaning": "Thức dậy, xảy ra",
    "meaningEn": "Wake up, happen",
    "meaningFr": "Se lever, se produire",
    "meaningEs": "Levantarse, ocurrir",
    "meaningKo": "일어나다, 발생하다",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2693,
    "kanji": "起こす",
    "displayReading": "おこす",
    "readings": [
      "おこす"
    ],
    "meaning": "Đánh thức",
    "meaningEn": "Wake someone up",
    "meaningFr": "Réveiller quelqu'un",
    "meaningEs": "Despertar a alguien",
    "meaningKo": "깨우다, 일으키다",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2694,
    "kanji": "早起き",
    "displayReading": "はやおき",
    "readings": [
      "はやおき"
    ],
    "meaning": "Dậy sớm",
    "meaningEn": "Waking up early",
    "meaningFr": "Lève-tôt",
    "meaningEs": "Madrugar",
    "meaningKo": "일찍 일어남",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2695,
    "kanji": "疲れる",
    "displayReading": "つかれる",
    "readings": [
      "つかれる"
    ],
    "meaning": "Mệt mỏi",
    "meaningEn": "Get tired",
    "meaningFr": "Être fatigué",
    "meaningEs": "Cansarse",
    "meaningKo": "피곤하다, 지치다",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2696,
    "kanji": "地元",
    "displayReading": "じもと",
    "readings": [
      "じもと"
    ],
    "meaning": "Địa phương, quê nhà",
    "meaningEn": "Local area, hometown",
    "meaningFr": "Région natale, local",
    "meaningEs": "Tierra natal, zona local",
    "meaningKo": "현지, 고장",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2697,
    "kanji": "死ぬ",
    "displayReading": "しぬ",
    "readings": [
      "しぬ"
    ],
    "meaning": "Chết",
    "meaningEn": "Die",
    "meaningFr": "Mourir",
    "meaningEs": "Morir",
    "meaningKo": "죽다",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2698,
    "kanji": "歯",
    "displayReading": "は",
    "readings": [
      "は"
    ],
    "meaning": "Răng",
    "meaningEn": "Tooth, teeth",
    "meaningFr": "Dent",
    "meaningEs": "Diente, muela",
    "meaningKo": "이, 치아",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2699,
    "kanji": "お腹",
    "displayReading": "おなか",
    "readings": [
      "おなか"
    ],
    "meaning": "Bụng",
    "meaningEn": "Stomach, belly",
    "meaningFr": "Ventre, estomac",
    "meaningEs": "Estómago, barriga",
    "meaningKo": "배, 복부",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2700,
    "kanji": "背",
    "displayReading": "せ",
    "readings": [
      "せ"
    ],
    "meaning": "Lưng, chiều cao",
    "meaningEn": "Back, height",
    "meaningFr": "Dos, taille",
    "meaningEs": "Espalda, estatura",
    "meaningKo": "등, 키",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2701,
    "kanji": "診察",
    "displayReading": "しんさつ",
    "readings": [
      "しんさつ"
    ],
    "meaning": "Khám bệnh",
    "meaningEn": "Medical examination",
    "meaningFr": "Consultation médicale",
    "meaningEs": "Consulta médica",
    "meaningKo": "진찰",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2702,
    "kanji": "注射",
    "displayReading": "ちゅうしゃ",
    "readings": [
      "ちゅうしゃ"
    ],
    "meaning": "Tiêm thuốc",
    "meaningEn": "Injection",
    "meaningFr": "Piqûre, injection",
    "meaningEs": "Inyección",
    "meaningKo": "주사",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2703,
    "kanji": "手術",
    "displayReading": "しゅじゅつ",
    "readings": [
      "しゅじゅつ"
    ],
    "meaning": "Phẫu thuật",
    "meaningEn": "Surgery",
    "meaningFr": "Opération chirurgicale",
    "meaningEs": "Cirugía, operación",
    "meaningKo": "수술",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2704,
    "kanji": "お見舞い",
    "displayReading": "おみまい",
    "readings": [
      "おみまい"
    ],
    "meaning": "Thăm người ốm",
    "meaningEn": "Visiting a sick person",
    "meaningFr": "Visite à un malade",
    "meaningEs": "Visitar a un enfermo",
    "meaningKo": "병문안",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2705,
    "kanji": "怪我",
    "displayReading": "けが",
    "readings": [
      "けが"
    ],
    "meaning": "Vết thương, bị thương",
    "meaningEn": "Injury, wound",
    "meaningFr": "Blessure",
    "meaningEs": "Herida, lesión",
    "meaningKo": "부상, 상처",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2706,
    "kanji": "血",
    "displayReading": "ち",
    "readings": [
      "ち"
    ],
    "meaning": "Máu",
    "meaningEn": "Blood",
    "meaningFr": "Sang",
    "meaningEs": "Sangre",
    "meaningKo": "피, 혈액",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2707,
    "kanji": "骨",
    "displayReading": "ほね",
    "readings": [
      "ほね"
    ],
    "meaning": "Xương",
    "meaningEn": "Bone",
    "meaningFr": "Os",
    "meaningEs": "Hueso",
    "meaningKo": "뼈",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2708,
    "kanji": "指",
    "displayReading": "ゆび",
    "readings": [
      "ゆび"
    ],
    "meaning": "Ngón tay",
    "meaningEn": "Finger, toe",
    "meaningFr": "Doigt",
    "meaningEs": "Dedo",
    "meaningKo": "손가락",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2709,
    "kanji": "肩",
    "displayReading": "かた",
    "readings": [
      "かた"
    ],
    "meaning": "Vai",
    "meaningEn": "Shoulder",
    "meaningFr": "Épaule",
    "meaningEs": "Hombro",
    "meaningKo": "어깨",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2710,
    "kanji": "腰",
    "displayReading": "こし",
    "readings": [
      "こし"
    ],
    "meaning": "Hông, thắt lưng",
    "meaningEn": "Waist, lower back",
    "meaningFr": "Hanche, bas du dos",
    "meaningEs": "Cintura, zona lumbar",
    "meaningKo": "허리",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2711,
    "kanji": "健康",
    "displayReading": "けんこう",
    "readings": [
      "けんこう"
    ],
    "meaning": "Sức khỏe",
    "meaningEn": "Health",
    "meaningFr": "Santé",
    "meaningEs": "Salud",
    "meaningKo": "건강",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 355,
    "kanji": "勉強",
    "displayReading": "べんきょう",
    "readings": [
      "べんきょう"
    ],
    "meaning": "Học tập",
    "meaningEn": "Study",
    "meaningFr": "Études, étudier",
    "meaningEs": "Estudiar, estudio",
    "meaningKo": "공부",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 361,
    "kanji": "化学",
    "displayReading": "かがく",
    "readings": [
      "かがく"
    ],
    "meaning": "Hóa học",
    "meaningEn": "Chemistry",
    "meaningFr": "Chimie",
    "meaningEs": "Química",
    "meaningKo": "화학",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2714,
    "kanji": "科学",
    "displayReading": "かがく",
    "readings": [
      "かがく"
    ],
    "meaning": "Khoa học",
    "meaningEn": "Science",
    "meaningFr": "Science",
    "meaningEs": "Ciencia",
    "meaningKo": "과학",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 367,
    "kanji": "留学",
    "displayReading": "りゅうがく",
    "readings": [
      "りゅうがく"
    ],
    "meaning": "Du học",
    "meaningEn": "Study abroad",
    "meaningFr": "Études à l'étranger",
    "meaningEs": "Estudiar en el extranjero",
    "meaningKo": "유학",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 366,
    "kanji": "留学生",
    "displayReading": "りゅうがくせい",
    "readings": [
      "りゅうがくせい"
    ],
    "meaning": "Du học sinh",
    "meaningEn": "International student",
    "meaningFr": "Étudiant étranger",
    "meaningEs": "Estudiante internacional",
    "meaningKo": "유학생",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 372,
    "kanji": "達人",
    "displayReading": "たつじん",
    "readings": [
      "たつじん"
    ],
    "meaning": "Cao thủ, người thành thạo",
    "meaningEn": "Master, expert",
    "meaningFr": "Maître, expert",
    "meaningEs": "Maestro, experto",
    "meaningKo": "달인, 전문가",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2718,
    "kanji": "教える",
    "displayReading": "おしえる",
    "readings": [
      "おしえる"
    ],
    "meaning": "Dạy, chỉ bảo",
    "meaningEn": "Teach, tell",
    "meaningFr": "Enseigner, indiquer",
    "meaningEs": "Enseñar, indicar",
    "meaningKo": "가르치다, 알려 주다",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2719,
    "kanji": "教室",
    "displayReading": "きょうしつ",
    "readings": [
      "きょうしつ"
    ],
    "meaning": "Phòng học",
    "meaningEn": "Classroom",
    "meaningFr": "Salle de classe",
    "meaningEs": "Aula, salón de clases",
    "meaningKo": "교실",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2720,
    "kanji": "教科書",
    "displayReading": "きょうかしょ",
    "readings": [
      "きょうかしょ"
    ],
    "meaning": "Sách giáo khoa",
    "meaningEn": "Textbook",
    "meaningFr": "Manuel scolaire",
    "meaningEs": "Libro de texto",
    "meaningKo": "교과서",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2721,
    "kanji": "会議室",
    "displayReading": "かいぎしつ",
    "readings": [
      "かいぎしつ"
    ],
    "meaning": "Phòng họp",
    "meaningEn": "Meeting room",
    "meaningFr": "Salle de réunion",
    "meaningEs": "Sala de reuniones",
    "meaningKo": "회의실",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2722,
    "kanji": "問題",
    "displayReading": "もんだい",
    "readings": [
      "もんだい"
    ],
    "meaning": "Vấn đề, câu hỏi đề thi",
    "meaningEn": "Problem, exam question",
    "meaningFr": "Problème, question",
    "meaningEs": "Problema, pregunta",
    "meaningKo": "문제",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2723,
    "kanji": "宿題",
    "displayReading": "しゅくだい",
    "readings": [
      "しゅくだい"
    ],
    "meaning": "Bài tập về nhà",
    "meaningEn": "Homework",
    "meaningFr": "Devoirs à la maison",
    "meaningEs": "Tarea, deberes",
    "meaningKo": "숙제",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2724,
    "kanji": "話題",
    "displayReading": "わだい",
    "readings": [
      "わだい"
    ],
    "meaning": "Chủ đề nói chuyện",
    "meaningEn": "Topic of conversation",
    "meaningFr": "Sujet de conversation",
    "meaningEs": "Tema de conversación",
    "meaningKo": "화제, 이야기 주제",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2725,
    "kanji": "質問",
    "displayReading": "しつもん",
    "readings": [
      "しつもん"
    ],
    "meaning": "Câu hỏi, thắc mắc",
    "meaningEn": "Question",
    "meaningFr": "Question",
    "meaningEs": "Pregunta",
    "meaningKo": "질문",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2726,
    "kanji": "答える",
    "displayReading": "こたえる",
    "readings": [
      "こたえる"
    ],
    "meaning": "Trả lời",
    "meaningEn": "Answer (verb)",
    "meaningFr": "Répondre",
    "meaningEs": "Responder, contestar",
    "meaningKo": "대답하다",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2727,
    "kanji": "答え",
    "displayReading": "こたえ",
    "readings": [
      "こたえ"
    ],
    "meaning": "Câu trả lời, đáp án",
    "meaningEn": "Answer (noun)",
    "meaningFr": "Réponse",
    "meaningEs": "Respuesta",
    "meaningKo": "대답, 정답",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2728,
    "kanji": "試験",
    "displayReading": "しけん",
    "readings": [
      "しけん"
    ],
    "meaning": "Kỳ thi",
    "meaningEn": "Exam, test",
    "meaningFr": "Examen",
    "meaningEs": "Examen",
    "meaningKo": "시험",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2729,
    "kanji": "経験",
    "displayReading": "けいけん",
    "readings": [
      "けいけん"
    ],
    "meaning": "Kinh nghiệm",
    "meaningEn": "Experience",
    "meaningFr": "Expérience",
    "meaningEs": "Experiencia",
    "meaningKo": "경험",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2730,
    "kanji": "漢字",
    "displayReading": "かんじ",
    "readings": [
      "かんじ"
    ],
    "meaning": "Chữ Hán (Kanji)",
    "meaningEn": "Kanji",
    "meaningFr": "Kanji",
    "meaningEs": "Kanji",
    "meaningKo": "한자",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2731,
    "kanji": "文字",
    "displayReading": "もじ",
    "readings": [
      "もじ"
    ],
    "meaning": "Chữ viết, ký tự",
    "meaningEn": "Character, letter",
    "meaningFr": "Caractère, lettre",
    "meaningEs": "Carácter, letra",
    "meaningKo": "글자",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2732,
    "kanji": "字",
    "displayReading": "じ",
    "readings": [
      "じ"
    ],
    "meaning": "Chữ cái, nét chữ",
    "meaningEn": "Letter, character",
    "meaningFr": "Lettre, écriture",
    "meaningEs": "Letra, carácter escrito",
    "meaningKo": "문자, 글자",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2733,
    "kanji": "意味",
    "displayReading": "いみ",
    "readings": [
      "いみ"
    ],
    "meaning": "Ý nghĩa",
    "meaningEn": "Meaning",
    "meaningFr": "Sens, signification",
    "meaningEs": "Significado, sentido",
    "meaningKo": "의미, 뜻",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2734,
    "kanji": "意見",
    "displayReading": "いけん",
    "readings": [
      "いけん"
    ],
    "meaning": "Ý kiến",
    "meaningEn": "Opinion",
    "meaningFr": "Avis, opinion",
    "meaningEs": "Opinión",
    "meaningKo": "의견",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2735,
    "kanji": "知る",
    "displayReading": "しる",
    "readings": [
      "しる"
    ],
    "meaning": "Biết",
    "meaningEn": "Know",
    "meaningFr": "Savoir, connaître",
    "meaningEs": "Saber, conocer",
    "meaningKo": "알다",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2736,
    "kanji": "お知らせ",
    "displayReading": "おしらせ",
    "readings": [
      "おしらせ"
    ],
    "meaning": "Thông báo",
    "meaningEn": "Notice, announcement",
    "meaningFr": "Avis, annonce",
    "meaningEs": "Aviso, notificación",
    "meaningKo": "알림, 공지",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2737,
    "kanji": "思う",
    "displayReading": "おもう",
    "readings": [
      "おもう"
    ],
    "meaning": "Nghĩ, cảm thấy",
    "meaningEn": "Think, feel",
    "meaningFr": "Penser, croire",
    "meaningEs": "Pensar, creer",
    "meaningKo": "생각하다",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2738,
    "kanji": "思い出す",
    "displayReading": "おもいだす",
    "readings": [
      "おもいだす"
    ],
    "meaning": "Nhớ lại",
    "meaningEn": "Recall, remember",
    "meaningFr": "Se souvenir, se rappeler",
    "meaningEs": "Recordar, acordarse",
    "meaningKo": "생각해 내다, 떠올리다",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2739,
    "kanji": "考える",
    "displayReading": "かんがえる",
    "readings": [
      "かんがえる"
    ],
    "meaning": "Suy nghĩ, cân nhắc",
    "meaningEn": "Think, consider",
    "meaningFr": "Réfléchir",
    "meaningEs": "Pensar, reflexionar",
    "meaningKo": "생각하다, 궁리하다",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2740,
    "kanji": "考え",
    "displayReading": "かんがえ",
    "readings": [
      "かんがえ"
    ],
    "meaning": "Suy nghĩ, ý tưởng",
    "meaningEn": "Thought, idea",
    "meaningFr": "Idée, réflexion",
    "meaningEs": "Idea, pensamiento",
    "meaningKo": "생각",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2741,
    "kanji": "覚える",
    "displayReading": "おぼえる",
    "readings": [
      "おぼえる"
    ],
    "meaning": "Ghi nhớ, học thuộc",
    "meaningEn": "Memorize, remember",
    "meaningFr": "Mémoriser, retenir",
    "meaningEs": "Memorizar, aprender",
    "meaningKo": "외우다, 기억하다",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2742,
    "kanji": "忘れる",
    "displayReading": "わすれる",
    "readings": [
      "わすれる"
    ],
    "meaning": "Quên",
    "meaningEn": "Forget",
    "meaningFr": "Oublier",
    "meaningEs": "Olvidar",
    "meaningKo": "잊다",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2743,
    "kanji": "忘れ物",
    "displayReading": "わすれもの",
    "readings": [
      "わすれもの"
    ],
    "meaning": "Đồ để quên",
    "meaningEn": "Lost item, forgotten thing",
    "meaningFr": "Objet oublié",
    "meaningEs": "Objeto olvidado",
    "meaningKo": "분실물, 놓고 간 물건",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2744,
    "kanji": "説明",
    "displayReading": "せつめい",
    "readings": [
      "せつめい"
    ],
    "meaning": "Giải thích",
    "meaningEn": "Explanation",
    "meaningFr": "Explication",
    "meaningEs": "Explicación",
    "meaningKo": "설명",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2745,
    "kanji": "小説",
    "displayReading": "しょうせつ",
    "readings": [
      "しょうせつ"
    ],
    "meaning": "Tiểu thuyết",
    "meaningEn": "Novel",
    "meaningFr": "Roman",
    "meaningEs": "Novela",
    "meaningKo": "소설",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2746,
    "kanji": "研究",
    "displayReading": "けんきゅう",
    "readings": [
      "けんきゅう"
    ],
    "meaning": "Nghiên cứu",
    "meaningEn": "Research",
    "meaningFr": "Recherche",
    "meaningEs": "Investigación",
    "meaningKo": "연구",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2747,
    "kanji": "研究室",
    "displayReading": "けんきゅうしつ",
    "readings": [
      "けんきゅうしつ"
    ],
    "meaning": "Phòng nghiên cứu",
    "meaningEn": "Research lab",
    "meaningFr": "Laboratoire de recherche",
    "meaningEs": "Laboratorio de investigación",
    "meaningKo": "연구실",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2748,
    "kanji": "卒業",
    "displayReading": "そつぎょう",
    "readings": [
      "そつぎょう"
    ],
    "meaning": "Tốt nghiệp",
    "meaningEn": "Graduation",
    "meaningFr": "Remise de diplôme, fin d'études",
    "meaningEs": "Graduación",
    "meaningKo": "졸업",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2749,
    "kanji": "授業",
    "displayReading": "じゅぎょう",
    "readings": [
      "じゅぎょう"
    ],
    "meaning": "Giờ học, tiết học",
    "meaningEn": "Class, lesson",
    "meaningFr": "Cours, leçon",
    "meaningEs": "Clase, lección",
    "meaningKo": "수업",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2750,
    "kanji": "産業",
    "displayReading": "さんぎょう",
    "readings": [
      "さんぎょう"
    ],
    "meaning": "Ngành công nghiệp",
    "meaningEn": "Industry",
    "meaningFr": "Industrie",
    "meaningEs": "Industria",
    "meaningKo": "공업",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2751,
    "kanji": "時計",
    "displayReading": "とけい",
    "readings": [
      "とけい"
    ],
    "meaning": "Đồng hồ",
    "meaningEn": "Clock, watch",
    "meaningFr": "Montre, horloge",
    "meaningEs": "Reloj",
    "meaningKo": "시계",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2752,
    "kanji": "計画",
    "displayReading": "けいかく",
    "readings": [
      "けいかく"
    ],
    "meaning": "Kế hoạch",
    "meaningEn": "Plan",
    "meaningFr": "Projet, plan",
    "meaningEs": "Plan, proyecto",
    "meaningKo": "계획",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2753,
    "kanji": "計算",
    "displayReading": "けいさん",
    "readings": [
      "けいさん"
    ],
    "meaning": "Tính toán",
    "meaningEn": "Calculation",
    "meaningFr": "Calcul",
    "meaningEs": "Cálculo",
    "meaningKo": "계산",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2754,
    "kanji": "日記",
    "displayReading": "にっき",
    "readings": [
      "にっき"
    ],
    "meaning": "Nhật ký",
    "meaningEn": "Diary",
    "meaningFr": "Journal intime",
    "meaningEs": "Diario personal",
    "meaningKo": "일기",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2755,
    "kanji": "記事",
    "displayReading": "きじ",
    "readings": [
      "きじ"
    ],
    "meaning": "Bài báo",
    "meaningEn": "News article",
    "meaningFr": "Article de presse",
    "meaningEs": "Artículo de prensa",
    "meaningKo": "기사",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2756,
    "kanji": "記入",
    "displayReading": "きにゅう",
    "readings": [
      "きにゅう"
    ],
    "meaning": "Điền vào (đơn, giấy tờ)",
    "meaningEn": "Fill in (a form)",
    "meaningFr": "Remplir (un formulaire)",
    "meaningEs": "Rellenar (un formulario)",
    "meaningKo": "기입",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2757,
    "kanji": "受付",
    "displayReading": "うけつけ",
    "readings": [
      "うけつけ"
    ],
    "meaning": "Quầy lễ tân, tiếp nhận",
    "meaningEn": "Reception desk",
    "meaningFr": "Accueil, réception",
    "meaningEs": "Recepción",
    "meaningKo": "접수, 안내 데스크",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2758,
    "kanji": "受ける",
    "displayReading": "うける",
    "readings": [
      "うける"
    ],
    "meaning": "Tham dự (kỳ thi), nhận",
    "meaningEn": "Take (an exam), receive",
    "meaningFr": "Passer (un examen), recevoir",
    "meaningEs": "Hacer (un examen), recibir",
    "meaningKo": "(시험을) 치다, 받다",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2759,
    "kanji": "入学",
    "displayReading": "にゅうがく",
    "readings": [
      "にゅうがく"
    ],
    "meaning": "Nhập học",
    "meaningEn": "School entrance",
    "meaningFr": "Entrée à l'école",
    "meaningEs": "Ingreso escolar",
    "meaningKo": "입학",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2760,
    "kanji": "入学式",
    "displayReading": "にゅうがくしき",
    "readings": [
      "にゅうがくしき"
    ],
    "meaning": "Lễ khai giảng, nhập học",
    "meaningEn": "Entrance ceremony",
    "meaningFr": "Cérémonie de rentrée",
    "meaningEs": "Ceremonia de ingreso",
    "meaningKo": "입학식",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2761,
    "kanji": "卒業式",
    "displayReading": "そつぎょうしき",
    "readings": [
      "そつぎょうしき"
    ],
    "meaning": "Lễ tốt nghiệp",
    "meaningEn": "Graduation ceremony",
    "meaningFr": "Cérémonie de remise des diplômes",
    "meaningEs": "Ceremonia de graduación",
    "meaningKo": "졸업식",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2762,
    "kanji": "合格",
    "displayReading": "ごうかく",
    "readings": [
      "ごうかく"
    ],
    "meaning": "Đỗ (kỳ thi)",
    "meaningEn": "Pass (an exam)",
    "meaningFr": "Réussite (à un examen)",
    "meaningEs": "Aprobar (un examen)",
    "meaningKo": "합격",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2763,
    "kanji": "不合格",
    "displayReading": "ふごうかく",
    "readings": [
      "ふごうかく"
    ],
    "meaning": "Trượt (kỳ thi)",
    "meaningEn": "Fail (an exam)",
    "meaningFr": "Échec (à un examen)",
    "meaningEs": "Suspender, fallar",
    "meaningKo": "불합격, 실패",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2764,
    "kanji": "成績",
    "displayReading": "せいせき",
    "readings": [
      "せいせき"
    ],
    "meaning": "Thành tích, điểm số",
    "meaningEn": "Grades, results",
    "meaningFr": "Résultats scolaires, notes",
    "meaningEs": "Calificaciones, notas",
    "meaningKo": "성적",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2765,
    "kanji": "点数",
    "displayReading": "てんすう",
    "readings": [
      "てんすう"
    ],
    "meaning": "Điểm số",
    "meaningEn": "Score, points",
    "meaningFr": "Score, points",
    "meaningEs": "Puntuación, nota",
    "meaningKo": "점수",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2766,
    "kanji": "翻訳",
    "displayReading": "ほんやく",
    "readings": [
      "ほんやく"
    ],
    "meaning": "Biên dịch",
    "meaningEn": "Written translation",
    "meaningFr": "Traduction écrite",
    "meaningEs": "Traducción escrita",
    "meaningKo": "번역",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2767,
    "kanji": "通訳",
    "displayReading": "つうやく",
    "readings": [
      "つうやく"
    ],
    "meaning": "Phiên dịch",
    "meaningEn": "Interpreting",
    "meaningFr": "Interprétation orale",
    "meaningEs": "Interpretación oral",
    "meaningKo": "통역",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2768,
    "kanji": "専門",
    "displayReading": "せんもん",
    "readings": [
      "せんもん"
    ],
    "meaning": "Chuyên môn, chuyên ngành",
    "meaningEn": "Specialty, major",
    "meaningFr": "Spécialité, domaine",
    "meaningEs": "Especialidad",
    "meaningKo": "전공, 전문",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2769,
    "kanji": "教育",
    "displayReading": "きょういく",
    "readings": [
      "きょういく"
    ],
    "meaning": "Giáo dục",
    "meaningEn": "Education",
    "meaningFr": "Éducation",
    "meaningEs": "Educación",
    "meaningKo": "교육",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2770,
    "kanji": "確認",
    "displayReading": "かくにん",
    "readings": [
      "かくにん"
    ],
    "meaning": "Xác nhận",
    "meaningEn": "Confirmation",
    "meaningFr": "Vérification, confirmation",
    "meaningEs": "Confirmación, verificación",
    "meaningKo": "확인",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2771,
    "kanji": "準備",
    "displayReading": "じゅんび",
    "readings": [
      "じゅんび"
    ],
    "meaning": "Chuẩn bị",
    "meaningEn": "Preparation",
    "meaningFr": "Préparation",
    "meaningEs": "Preparación",
    "meaningKo": "준비",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2772,
    "kanji": "申し込む",
    "displayReading": "もうしこむ",
    "readings": [
      "もうしこむ"
    ],
    "meaning": "Đăng ký",
    "meaningEn": "Apply, sign up",
    "meaningFr": "S'inscrire, postuler",
    "meaningEs": "Solicitar, inscribirse",
    "meaningKo": "신청하다",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2773,
    "kanji": "売る",
    "displayReading": "うる",
    "readings": [
      "うる"
    ],
    "meaning": "Bán",
    "meaningEn": "Sell",
    "meaningFr": "Vendre",
    "meaningEs": "Vender",
    "meaningKo": "팔다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2774,
    "kanji": "売り場",
    "displayReading": "うりば",
    "readings": [
      "うりば"
    ],
    "meaning": "Quầy bán hàng",
    "meaningEn": "Sales counter, section",
    "meaningFr": "Rayon, comptoir de vente",
    "meaningEs": "Mostrador, sección de ventas",
    "meaningKo": "매장, 판매대",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2775,
    "kanji": "自動販売機",
    "displayReading": "じどうはんばいき",
    "readings": [
      "じどうはんばいき"
    ],
    "meaning": "Máy bán hàng tự động",
    "meaningEn": "Vending machine",
    "meaningFr": "Distributeur automatique",
    "meaningEs": "Máquina expendedora",
    "meaningKo": "자동판매기",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2776,
    "kanji": "払う",
    "displayReading": "はらう",
    "readings": [
      "はらう"
    ],
    "meaning": "Trả tiền, thanh toán",
    "meaningEn": "Pay",
    "meaningFr": "Payer",
    "meaningEs": "Pagar",
    "meaningKo": "지불하다, 내다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2777,
    "kanji": "貸す",
    "displayReading": "かす",
    "readings": [
      "かす"
    ],
    "meaning": "Cho mượn",
    "meaningEn": "Lend",
    "meaningFr": "Prêter",
    "meaningEs": "Prestar",
    "meaningKo": "빌려주다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2778,
    "kanji": "借りる",
    "displayReading": "かりる",
    "readings": [
      "かりる"
    ],
    "meaning": "Đi mượn",
    "meaningEn": "Borrow",
    "meaningFr": "Emprunter",
    "meaningEs": "Pedir prestado",
    "meaningKo": "빌리다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2779,
    "kanji": "返す",
    "displayReading": "かえす",
    "readings": [
      "かえす"
    ],
    "meaning": "Trả lại",
    "meaningEn": "Return (something)",
    "meaningFr": "Rendre (quelque chose)",
    "meaningEs": "Devolver",
    "meaningKo": "돌려주다, 반납하다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2780,
    "kanji": "返事",
    "displayReading": "へんじ",
    "readings": [
      "へんじ"
    ],
    "meaning": "Hồi âm, trả lời",
    "meaningEn": "Reply, response",
    "meaningFr": "Réponse",
    "meaningEs": "Respuesta, contestación",
    "meaningKo": "답장, 대답",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2781,
    "kanji": "送る",
    "displayReading": "おくる",
    "readings": [
      "おくる"
    ],
    "meaning": "Gửi đi, tiễn",
    "meaningEn": "Send, see off",
    "meaningFr": "Envoyer, raccompagner",
    "meaningEs": "Enviar, acompañar",
    "meaningKo": "보내다, 배웅하다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2782,
    "kanji": "放送",
    "displayReading": "ほうそう",
    "readings": [
      "ほうそう"
    ],
    "meaning": "Phát sóng",
    "meaningEn": "Broadcast",
    "meaningFr": "Diffusion, émission",
    "meaningEs": "Transmisión, emisión",
    "meaningKo": "방송",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2783,
    "kanji": "届く",
    "displayReading": "とどく",
    "readings": [
      "とどく"
    ],
    "meaning": "Được gửi tới, đến nơi",
    "meaningEn": "Arrive, be delivered",
    "meaningFr": "Être livré, parvenir",
    "meaningEs": "Llegar (un envío), alcanzar",
    "meaningKo": "배달되다, 닿다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2784,
    "kanji": "届ける",
    "displayReading": "とどける",
    "readings": [
      "とどける"
    ],
    "meaning": "Giao hàng, gửi tới",
    "meaningEn": "Deliver, send",
    "meaningFr": "Livrer, apporter",
    "meaningEs": "Entregar, llevar",
    "meaningKo": "전달하다, 배달하다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2785,
    "kanji": "品物",
    "displayReading": "しなもの",
    "readings": [
      "しなもの"
    ],
    "meaning": "Hàng hóa, đồ đạc",
    "meaningEn": "Goods, articles",
    "meaningFr": "Marchandise, article",
    "meaningEs": "Artículo, mercancía",
    "meaningKo": "물품",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2786,
    "kanji": "商品",
    "displayReading": "しょうひん",
    "readings": [
      "しょうひん"
    ],
    "meaning": "Sản phẩm",
    "meaningEn": "Product, merchandise",
    "meaningFr": "Produit",
    "meaningEs": "Producto",
    "meaningKo": "상품",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2787,
    "kanji": "服",
    "displayReading": "ふく",
    "readings": [
      "ふく"
    ],
    "meaning": "Quần áo, trang phục",
    "meaningEn": "Clothes",
    "meaningFr": "Vêtements",
    "meaningEs": "Ropa",
    "meaningKo": "옷",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2788,
    "kanji": "洋服",
    "displayReading": "ようふく",
    "readings": [
      "ようふく"
    ],
    "meaning": "Âu phục, quần áo kiểu Tây",
    "meaningEn": "Western clothes",
    "meaningFr": "Vêtements occidentaux",
    "meaningEs": "Ropa occidental",
    "meaningKo": "양복, 서양식 옷",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2789,
    "kanji": "和服",
    "displayReading": "わふく",
    "readings": [
      "わふく"
    ],
    "meaning": "Trang phục truyền thống Nhật",
    "meaningEn": "Japanese traditional clothes",
    "meaningFr": "Vêtements traditionnels japonais",
    "meaningEs": "Ropa tradicional japonesa",
    "meaningKo": "일본 전통 의상 (화복)",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2790,
    "kanji": "紙",
    "displayReading": "かみ",
    "readings": [
      "かみ"
    ],
    "meaning": "Giấy",
    "meaningEn": "Paper",
    "meaningFr": "Papier",
    "meaningEs": "Papel",
    "meaningKo": "종이",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2791,
    "kanji": "手紙",
    "displayReading": "てがみ",
    "readings": [
      "てがみ"
    ],
    "meaning": "Bức thư",
    "meaningEn": "Letter",
    "meaningFr": "Lettre (courrier)",
    "meaningEs": "Carta",
    "meaningKo": "편지",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2792,
    "kanji": "箱",
    "displayReading": "はこ",
    "readings": [
      "はこ"
    ],
    "meaning": "Cái hộp",
    "meaningEn": "Box",
    "meaningFr": "Boîte",
    "meaningEs": "Caja",
    "meaningKo": "상자",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2793,
    "kanji": "袋",
    "displayReading": "ふくろ",
    "readings": [
      "ふくろ"
    ],
    "meaning": "Cái túi",
    "meaningEn": "Bag",
    "meaningFr": "Sac, sachet",
    "meaningEs": "Bolsa",
    "meaningKo": "봉투, 자루",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2794,
    "kanji": "手袋",
    "displayReading": "てぶくろ",
    "readings": [
      "てぶくろ"
    ],
    "meaning": "Găng tay",
    "meaningEn": "Gloves",
    "meaningFr": "Gants",
    "meaningEs": "Guantes",
    "meaningKo": "장갑",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2795,
    "kanji": "色",
    "displayReading": "いろ",
    "readings": [
      "いろ"
    ],
    "meaning": "Màu sắc",
    "meaningEn": "Color",
    "meaningFr": "Couleur",
    "meaningEs": "Color",
    "meaningKo": "색, 색깔",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2796,
    "kanji": "色々",
    "displayReading": "いろいろ",
    "readings": [
      "いろいろ"
    ],
    "meaning": "Đủ loại, nhiều thứ",
    "meaningEn": "Various",
    "meaningFr": "Divers, variés",
    "meaningEs": "Varios, diversos",
    "meaningKo": "여러 가지, 다양한",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2797,
    "kanji": "景色",
    "displayReading": "けしき",
    "readings": [
      "けしき"
    ],
    "meaning": "Phong cảnh",
    "meaningEn": "Scenery, landscape",
    "meaningFr": "Paysage",
    "meaningEs": "Paisaje",
    "meaningKo": "경치, 풍경",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2798,
    "kanji": "形",
    "displayReading": "かたち",
    "readings": [
      "かたち"
    ],
    "meaning": "Hình dạng",
    "meaningEn": "Shape, form",
    "meaningFr": "Forme",
    "meaningEs": "Forma",
    "meaningKo": "모양, 형태",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2799,
    "kanji": "人形",
    "displayReading": "にんぎょう",
    "readings": [
      "にんぎょう"
    ],
    "meaning": "Búp bê",
    "meaningEn": "Doll",
    "meaningFr": "Poupée",
    "meaningEs": "Muñeca",
    "meaningKo": "인형",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2800,
    "kanji": "重い",
    "displayReading": "おもい",
    "readings": [
      "おもい"
    ],
    "meaning": "Nặng",
    "meaningEn": "Heavy",
    "meaningFr": "Lourd",
    "meaningEs": "Pesado",
    "meaningKo": "무겁다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2801,
    "kanji": "重要",
    "displayReading": "じゅうよう",
    "readings": [
      "じゅうよう"
    ],
    "meaning": "Quan trọng",
    "meaningEn": "Important",
    "meaningFr": "Important",
    "meaningEs": "Importante",
    "meaningKo": "중요함",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2802,
    "kanji": "軽い",
    "displayReading": "かるい",
    "readings": [
      "かるい"
    ],
    "meaning": "Nhẹ",
    "meaningEn": "Light (weight)",
    "meaningFr": "Léger",
    "meaningEs": "Ligero, liviano",
    "meaningKo": "가볍다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2803,
    "kanji": "短い",
    "displayReading": "みじかい",
    "readings": [
      "みじかい"
    ],
    "meaning": "Ngắn",
    "meaningEn": "Short",
    "meaningFr": "Court",
    "meaningEs": "Corto",
    "meaningKo": "짧다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2804,
    "kanji": "短所",
    "displayReading": "たんしょ",
    "readings": [
      "たんしょ"
    ],
    "meaning": "Nhược điểm",
    "meaningEn": "Weak point, flaw",
    "meaningFr": "Défaut, point faible",
    "meaningEs": "Defecto, punto débil",
    "meaningKo": "단점",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2805,
    "kanji": "長所",
    "displayReading": "ちょうしょ",
    "readings": [
      "ちょうしょ"
    ],
    "meaning": "Ưu điểm",
    "meaningEn": "Strong point, merit",
    "meaningFr": "Qualité, point fort",
    "meaningEs": "Virtud, punto fuerte",
    "meaningKo": "장점",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2806,
    "kanji": "太い",
    "displayReading": "ふとい",
    "readings": [
      "ふとい"
    ],
    "meaning": "To, dày, mập",
    "meaningEn": "Thick, fat",
    "meaningFr": "Épais, gros",
    "meaningEs": "Grueso",
    "meaningKo": "굵다, 두껍다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2807,
    "kanji": "太る",
    "displayReading": "ふとる",
    "readings": [
      "ふとる"
    ],
    "meaning": "Tăng cân, béo lên",
    "meaningEn": "Gain weight",
    "meaningFr": "Grossir",
    "meaningEs": "Engordar",
    "meaningKo": "살찌다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2808,
    "kanji": "細い",
    "displayReading": "ほそい",
    "readings": [
      "ほそい"
    ],
    "meaning": "Mảnh, gầy, hẹp",
    "meaningEn": "Thin, slender",
    "meaningFr": "Fin, mince",
    "meaningEs": "Delgado, fino",
    "meaningKo": "가늘다, 얇다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2809,
    "kanji": "細かい",
    "displayReading": "こまかい",
    "readings": [
      "こまかい"
    ],
    "meaning": "Chi tiết, nhỏ lẻ",
    "meaningEn": "Detailed, fine",
    "meaningFr": "Détaillé, menu",
    "meaningEs": "Detallado, menudo",
    "meaningKo": "세세하다, 잔돈",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2810,
    "kanji": "特別",
    "displayReading": "とくべつ",
    "readings": [
      "とくべつ"
    ],
    "meaning": "Đặc biệt",
    "meaningEn": "Special",
    "meaningFr": "Spécial",
    "meaningEs": "Especial",
    "meaningKo": "특별함",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2811,
    "kanji": "特に",
    "displayReading": "とくに",
    "readings": [
      "とくに"
    ],
    "meaning": "Đặc biệt là",
    "meaningEn": "Especially",
    "meaningFr": "Surtout, en particulier",
    "meaningEs": "Especialmente",
    "meaningKo": "특히",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2812,
    "kanji": "別れる",
    "displayReading": "わかれる",
    "readings": [
      "わかれる"
    ],
    "meaning": "Chia tay, tạm biệt",
    "meaningEn": "Part ways, separate",
    "meaningFr": "Se séparer",
    "meaningEs": "Separarse, despedirse",
    "meaningKo": "헤어지다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2813,
    "kanji": "別に",
    "displayReading": "べつに",
    "readings": [
      "べつに"
    ],
    "meaning": "Không có gì đặc biệt",
    "meaningEn": "Not particularly",
    "meaningFr": "Pas particulièrement",
    "meaningEs": "Nada en especial",
    "meaningKo": "별로, 특별히",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2814,
    "kanji": "便利",
    "displayReading": "べんり",
    "readings": [
      "べんり"
    ],
    "meaning": "Tiện lợi",
    "meaningEn": "Convenient",
    "meaningFr": "Pratique, commode",
    "meaningEs": "Práctico, conveniente",
    "meaningKo": "편리함",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2815,
    "kanji": "不便",
    "displayReading": "ふべん",
    "readings": [
      "ふべん"
    ],
    "meaning": "Bất tiện",
    "meaningEn": "Inconvenient",
    "meaningFr": "Peu pratique",
    "meaningEs": "Incómodo, poco práctico",
    "meaningKo": "불편함",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2816,
    "kanji": "郵便局",
    "displayReading": "ゆうびんきょく",
    "readings": [
      "ゆうびんきょく"
    ],
    "meaning": "Bưu điện",
    "meaningEn": "Post office",
    "meaningFr": "Bureau de poste",
    "meaningEs": "Oficina de correos",
    "meaningKo": "우체국",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2817,
    "kanji": "利用",
    "displayReading": "りよう",
    "readings": [
      "りよう"
    ],
    "meaning": "Sử dụng, tận dụng",
    "meaningEn": "Use, utilization",
    "meaningFr": "Utilisation",
    "meaningEs": "Uso, utilización",
    "meaningKo": "이용",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2818,
    "kanji": "早い",
    "displayReading": "はやい",
    "readings": [
      "はやい"
    ],
    "meaning": "Sớm",
    "meaningEn": "Early",
    "meaningFr": "Tôt",
    "meaningEs": "Temprano",
    "meaningKo": "이르다 (시간)",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2819,
    "kanji": "速い",
    "displayReading": "はやい",
    "readings": [
      "はやい"
    ],
    "meaning": "Nhanh",
    "meaningEn": "Fast, quick",
    "meaningFr": "Rapide",
    "meaningEs": "Rápido, veloz",
    "meaningKo": "빠르다 (속도)",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2820,
    "kanji": "高速",
    "displayReading": "こうそく",
    "readings": [
      "こうそく"
    ],
    "meaning": "Tốc độ cao, cao tốc",
    "meaningEn": "High speed, express",
    "meaningFr": "Grande vitesse",
    "meaningEs": "Alta velocidad",
    "meaningKo": "고속, 빠른 속도",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2821,
    "kanji": "遅い",
    "displayReading": "おそい",
    "readings": [
      "おそい"
    ],
    "meaning": "Chậm, muộn",
    "meaningEn": "Slow, late",
    "meaningFr": "Lent, tard",
    "meaningEs": "Lento, tarde",
    "meaningKo": "느리다, 늦다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2822,
    "kanji": "遅れる",
    "displayReading": "おくれる",
    "readings": [
      "おくれる"
    ],
    "meaning": "Bị muộn, trễ",
    "meaningEn": "Be late",
    "meaningFr": "Être en retard",
    "meaningEs": "Llegar tarde, retrasarse",
    "meaningKo": "늦다, 지각하다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2823,
    "kanji": "難しい",
    "displayReading": "むずかしい",
    "readings": [
      "むずかしい"
    ],
    "meaning": "Khó",
    "meaningEn": "Difficult, hard",
    "meaningFr": "Difficile",
    "meaningEs": "Difícil",
    "meaningKo": "어렵다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2824,
    "kanji": "易しい",
    "displayReading": "やさしい",
    "readings": [
      "やさしい"
    ],
    "meaning": "Dễ",
    "meaningEn": "Easy, simple",
    "meaningFr": "Facile",
    "meaningEs": "Fácil",
    "meaningKo": "쉽다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2825,
    "kanji": "正しい",
    "displayReading": "ただしい",
    "readings": [
      "ただしい"
    ],
    "meaning": "Đúng, chính xác",
    "meaningEn": "Correct, right",
    "meaningFr": "Correct, juste",
    "meaningEs": "Correcto, justo",
    "meaningKo": "바르다, 옳다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2826,
    "kanji": "お正月",
    "displayReading": "おしょうがつ",
    "readings": [
      "おしょうがつ"
    ],
    "meaning": "Tết Dương lịch",
    "meaningEn": "New Year",
    "meaningFr": "Nouvel An",
    "meaningEs": "Año Nuevo",
    "meaningKo": "설날, 정월",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2827,
    "kanji": "同じ",
    "displayReading": "おなじ",
    "readings": [
      "おなじ"
    ],
    "meaning": "Giống nhau",
    "meaningEn": "Same",
    "meaningFr": "Identique, même",
    "meaningEs": "Igual, el mismo",
    "meaningKo": "같다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2828,
    "kanji": "違う",
    "displayReading": "ちがう",
    "readings": [
      "ちがう"
    ],
    "meaning": "Khác nhau, sai",
    "meaningEn": "Different, wrong",
    "meaningFr": "Être différent, se tromper",
    "meaningEs": "Ser diferente, equivocarse",
    "meaningKo": "다르다, 틀리다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2829,
    "kanji": "間違い",
    "displayReading": "まちがい",
    "readings": [
      "まちがい"
    ],
    "meaning": "Lỗi sai, sự nhầm lẫn",
    "meaningEn": "Mistake, error",
    "meaningFr": "Erreur, faute",
    "meaningEs": "Error, equivocación",
    "meaningKo": "실수, 틀림",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2830,
    "kanji": "良い",
    "displayReading": "よい・いい",
    "readings": [
      "よい",
      "いい"
    ],
    "meaning": "Tốt",
    "meaningEn": "Good",
    "meaningFr": "Bon, bien",
    "meaningEs": "Bueno, bien",
    "meaningKo": "좋다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2831,
    "kanji": "悪い",
    "displayReading": "わるい",
    "readings": [
      "わるい"
    ],
    "meaning": "Xấu, tệ",
    "meaningEn": "Bad",
    "meaningFr": "Mauvais",
    "meaningEs": "Malo",
    "meaningKo": "나쁘다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 356,
    "kanji": "強い",
    "displayReading": "つよい",
    "readings": [
      "つよい"
    ],
    "meaning": "Mạnh, khỏe",
    "meaningEn": "Strong",
    "meaningFr": "Fort",
    "meaningEs": "Fuerte",
    "meaningKo": "강하다, 세다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2833,
    "kanji": "弱い",
    "displayReading": "よわい",
    "readings": [
      "よわい"
    ],
    "meaning": "Yếu",
    "meaningEn": "Weak",
    "meaningFr": "Faible",
    "meaningEs": "Débil",
    "meaningKo": "약하다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2834,
    "kanji": "若い",
    "displayReading": "わかい",
    "readings": [
      "わかい"
    ],
    "meaning": "Trẻ",
    "meaningEn": "Young",
    "meaningFr": "Jeune",
    "meaningEs": "Joven",
    "meaningKo": "젊다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2835,
    "kanji": "値段",
    "displayReading": "ねだん",
    "readings": [
      "ねだん"
    ],
    "meaning": "Giá cả",
    "meaningEn": "Price",
    "meaningFr": "Prix",
    "meaningEs": "Precio",
    "meaningKo": "가격, 값",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2836,
    "kanji": "財布",
    "displayReading": "さいふ",
    "readings": [
      "さいふ"
    ],
    "meaning": "Ví tiền",
    "meaningEn": "Wallet",
    "meaningFr": "Portefeuille",
    "meaningEs": "Cartera, billetera",
    "meaningKo": "지갑",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2837,
    "kanji": "靴",
    "displayReading": "くつ",
    "readings": [
      "くつ"
    ],
    "meaning": "Giày",
    "meaningEn": "Shoes",
    "meaningFr": "Chaussures",
    "meaningEs": "Zapatos",
    "meaningKo": "신발, 구두",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2838,
    "kanji": "傘",
    "displayReading": "かさ",
    "readings": [
      "かさ"
    ],
    "meaning": "Cái ô (dù)",
    "meaningEn": "Umbrella",
    "meaningFr": "Parapluie",
    "meaningEs": "Paraguas",
    "meaningKo": "우산",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2839,
    "kanji": "眼鏡",
    "displayReading": "めがね",
    "readings": [
      "めがね"
    ],
    "meaning": "Kính mắt",
    "meaningEn": "Eyeglasses",
    "meaningFr": "Lunettes",
    "meaningEs": "Gafas, lentes",
    "meaningKo": "안경",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2840,
    "kanji": "割引",
    "displayReading": "わりびき",
    "readings": [
      "わりびき"
    ],
    "meaning": "Giảm giá, chiết khấu",
    "meaningEn": "Discount",
    "meaningFr": "Réduction, remise",
    "meaningEs": "Descuento",
    "meaningKo": "할인",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2841,
    "kanji": "半額",
    "displayReading": "はんがく",
    "readings": [
      "はんがく"
    ],
    "meaning": "Giảm nửa giá",
    "meaningEn": "Half price",
    "meaningFr": "Moitié prix",
    "meaningEs": "Mitad de precio",
    "meaningKo": "반값",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2842,
    "kanji": "現金",
    "displayReading": "げんきん",
    "readings": [
      "げんきん"
    ],
    "meaning": "Tiền mặt",
    "meaningEn": "Cash",
    "meaningFr": "Argent liquide, espèces",
    "meaningEs": "Dinero en efectivo",
    "meaningKo": "현금",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2843,
    "kanji": "領収書",
    "displayReading": "りょうしゅうしょ",
    "readings": [
      "りょうしゅうしょ"
    ],
    "meaning": "Hóa đơn, biên lai",
    "meaningEn": "Receipt",
    "meaningFr": "Reçu, facture",
    "meaningEs": "Recibo",
    "meaningKo": "영수증",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2844,
    "kanji": "預ける",
    "displayReading": "あずける",
    "readings": [
      "あずける"
    ],
    "meaning": "Gửi giữ (hành lý, tiền)",
    "meaningEn": "Deposit, leave in care",
    "meaningFr": "Confier, déposer",
    "meaningEs": "Dejar en depósito, confiar",
    "meaningKo": "맡기다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2845,
    "kanji": "修理",
    "displayReading": "しゅうり",
    "readings": [
      "しゅうり"
    ],
    "meaning": "Sửa chữa",
    "meaningEn": "Repair",
    "meaningFr": "Réparation",
    "meaningEs": "Reparación",
    "meaningKo": "수리",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2846,
    "kanji": "故障",
    "displayReading": "こしょう",
    "readings": [
      "こしょう"
    ],
    "meaning": "Hỏng hóc (máy móc)",
    "meaningEn": "Breakdown, malfunction",
    "meaningFr": "Panne",
    "meaningEs": "Avería, fallo",
    "meaningKo": "고장",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2847,
    "kanji": "説明書",
    "displayReading": "せつめいしょ",
    "readings": [
      "せつめいしょ"
    ],
    "meaning": "Sách hướng dẫn sử dụng",
    "meaningEn": "Instruction manual",
    "meaningFr": "Mode d'emploi",
    "meaningEs": "Manual de instrucciones",
    "meaningKo": "설명서",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2848,
    "kanji": "家具",
    "displayReading": "かぐ",
    "readings": [
      "かぐ"
    ],
    "meaning": "Đồ nội thất",
    "meaningEn": "Furniture",
    "meaningFr": "Meubles, mobilier",
    "meaningEs": "Muebles",
    "meaningKo": "가구",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2849,
    "kanji": "道具",
    "displayReading": "どうぐ",
    "readings": [
      "どうぐ"
    ],
    "meaning": "Dụng cụ",
    "meaningEn": "Tool",
    "meaningFr": "Outil, ustensile",
    "meaningEs": "Herramienta, utensilio",
    "meaningKo": "도구",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2850,
    "kanji": "鍵",
    "displayReading": "かぎ",
    "readings": [
      "かぎ"
    ],
    "meaning": "Chìa khóa",
    "meaningEn": "Key",
    "meaningFr": "Clé",
    "meaningEs": "Llave",
    "meaningKo": "열쇠",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2851,
    "kanji": "窓",
    "displayReading": "まど",
    "readings": [
      "まど"
    ],
    "meaning": "Cửa sổ",
    "meaningEn": "Window",
    "meaningFr": "Fenêtre",
    "meaningEs": "Ventana",
    "meaningKo": "창문",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2852,
    "kanji": "鏡",
    "displayReading": "かがみ",
    "readings": [
      "かがみ"
    ],
    "meaning": "Cái gương",
    "meaningEn": "Mirror",
    "meaningFr": "Miroir",
    "meaningEs": "Espejo",
    "meaningKo": "거울",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2853,
    "kanji": "布団",
    "displayReading": "ふとん",
    "readings": [
      "ふとん"
    ],
    "meaning": "Chăn đệm kiểu Nhật",
    "meaningEn": "Futon (Japanese bedding)",
    "meaningFr": "Futon (literie japonaise)",
    "meaningEs": "Futón (cama japonesa)",
    "meaningKo": "이불 (후톤)",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2854,
    "kanji": "祭り",
    "displayReading": "まつり",
    "readings": [
      "まつり"
    ],
    "meaning": "Lễ hội",
    "meaningEn": "Festival",
    "meaningFr": "Festival",
    "meaningEs": "Festival",
    "meaningKo": "축제",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2855,
    "kanji": "お祭り",
    "displayReading": "おまつり",
    "readings": [
      "おまつり"
    ],
    "meaning": "Lễ hội (lịch sự)",
    "meaningEn": "Festival (polite)",
    "meaningFr": "Festival (poli)",
    "meaningEs": "Festival (cortés)",
    "meaningKo": "축제 (높임말)",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2856,
    "kanji": "文化祭",
    "displayReading": "ぶんかさい",
    "readings": [
      "ぶんかさい"
    ],
    "meaning": "Lễ hội văn hóa",
    "meaningEn": "Cultural festival",
    "meaningFr": "Festival culturel",
    "meaningEs": "Festival cultural",
    "meaningKo": "문화제, 학교 축제",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2857,
    "kanji": "祝う",
    "displayReading": "いわう",
    "readings": [
      "いわう"
    ],
    "meaning": "Chúc mừng, ăn mừng",
    "meaningEn": "Celebrate",
    "meaningFr": "Fêter, célébrer",
    "meaningEs": "Celebrar, festejar",
    "meaningKo": "축하하다",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2858,
    "kanji": "お祝い",
    "displayReading": "おいわい",
    "readings": [
      "おいわい"
    ],
    "meaning": "Lời chúc / quà mừng",
    "meaningEn": "Celebration, gift",
    "meaningFr": "Félicitations, cadeau",
    "meaningEs": "Felicitación, regalo",
    "meaningKo": "축하, 축하 선물",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2859,
    "kanji": "祝日",
    "displayReading": "しゅくじつ",
    "readings": [
      "しゅくじつ"
    ],
    "meaning": "Ngày lễ quốc gia",
    "meaningEn": "National holiday",
    "meaningFr": "Jour férié",
    "meaningEs": "Día festivo, feriado",
    "meaningKo": "공휴일, 국경일",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2860,
    "kanji": "お礼",
    "displayReading": "おれい",
    "readings": [
      "おれい"
    ],
    "meaning": "Lời cảm ơn, quà cảm ơn",
    "meaningEn": "Gratitude, thank-you gift",
    "meaningFr": "Remerciement",
    "meaningEs": "Agradecimiento",
    "meaningKo": "감사 인사, 사례",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2861,
    "kanji": "失礼",
    "displayReading": "しつれい",
    "readings": [
      "しつれい"
    ],
    "meaning": "Thất lễ, xin phép",
    "meaningEn": "Rudeness, excuse me",
    "meaningFr": "Impolitesse, excusez-moi",
    "meaningEs": "Disculpe, falta de cortesía",
    "meaningKo": "실례",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2862,
    "kanji": "歴史",
    "displayReading": "れきし",
    "readings": [
      "れきし"
    ],
    "meaning": "Lịch sử",
    "meaningEn": "History",
    "meaningFr": "Histoire (science)",
    "meaningEs": "Historia",
    "meaningKo": "역사",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2863,
    "kanji": "昔",
    "displayReading": "むかし",
    "readings": [
      "むかし"
    ],
    "meaning": "Ngày xưa",
    "meaningEn": "Olden days, long ago",
    "meaningFr": "Autrefois",
    "meaningEs": "Antiguamente, hace tiempo",
    "meaningKo": "옛날",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2864,
    "kanji": "昔話",
    "displayReading": "むかしばなし",
    "readings": [
      "むかしばなし"
    ],
    "meaning": "Chuyện cổ tích",
    "meaningEn": "Folktale, old story",
    "meaningFr": "Conte traditionnel",
    "meaningEs": "Cuento tradicional",
    "meaningKo": "옛날이야기",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2865,
    "kanji": "時代",
    "displayReading": "じだい",
    "readings": [
      "じだい"
    ],
    "meaning": "Thời đại",
    "meaningEn": "Era, period",
    "meaningFr": "Époque, ère",
    "meaningEs": "Época, era",
    "meaningKo": "시대",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2866,
    "kanji": "食事代",
    "displayReading": "しょくじだい",
    "readings": [
      "しょくじだい"
    ],
    "meaning": "Tiền ăn",
    "meaningEn": "Meal expense",
    "meaningFr": "Frais de repas",
    "meaningEs": "Gastos de comida",
    "meaningKo": "식비, 밥값",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2867,
    "kanji": "建てる",
    "displayReading": "たてる",
    "readings": [
      "たてる"
    ],
    "meaning": "Xây dựng",
    "meaningEn": "Build, construct",
    "meaningFr": "Construire, bâtir",
    "meaningEs": "Construir, edificar",
    "meaningKo": "짓다, 세우다",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2868,
    "kanji": "建物",
    "displayReading": "たてもの",
    "readings": [
      "たてもの"
    ],
    "meaning": "Tòa nhà, công trình",
    "meaningEn": "Building",
    "meaningFr": "Bâtiment, immeuble",
    "meaningEs": "Edificio",
    "meaningKo": "건물",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2869,
    "kanji": "寺",
    "displayReading": "てら",
    "readings": [
      "てら"
    ],
    "meaning": "Chùa",
    "meaningEn": "Temple",
    "meaningFr": "Temple bouddhiste",
    "meaningEs": "Templo budista",
    "meaningKo": "절, 사찰",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2870,
    "kanji": "お寺",
    "displayReading": "おてら",
    "readings": [
      "おてら"
    ],
    "meaning": "Ngôi chùa",
    "meaningEn": "Buddhist temple",
    "meaningFr": "Temple bouddhiste (poli)",
    "meaningEs": "Templo budista (cortés)",
    "meaningKo": "절, 사찰 (높임말)",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2871,
    "kanji": "神",
    "displayReading": "かみ",
    "readings": [
      "かみ"
    ],
    "meaning": "Thần linh",
    "meaningEn": "God, spirit",
    "meaningFr": "Dieu, divinité",
    "meaningEs": "Dios, deidad",
    "meaningKo": "신",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2872,
    "kanji": "神様",
    "displayReading": "かみさま",
    "readings": [
      "かみさま"
    ],
    "meaning": "Thần linh, Chúa trời",
    "meaningEn": "God (polite)",
    "meaningFr": "Dieu (respectueux)",
    "meaningEs": "Dios (respetuoso)",
    "meaningKo": "하느님, 신 (높임말)",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2873,
    "kanji": "神社",
    "displayReading": "じんじゃ",
    "readings": [
      "じんじゃ"
    ],
    "meaning": "Đền thờ Thần đạo",
    "meaningEn": "Shinto shrine",
    "meaningFr": "Sanctuaire shinto",
    "meaningEs": "Santuario sintoísta",
    "meaningKo": "신사",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2874,
    "kanji": "森",
    "displayReading": "もり",
    "readings": [
      "もり"
    ],
    "meaning": "Rừng rậm",
    "meaningEn": "Dense forest",
    "meaningFr": "Forêt dense",
    "meaningEs": "Bosque denso",
    "meaningKo": "숲, 삼림",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2875,
    "kanji": "森林",
    "displayReading": "しんりん",
    "readings": [
      "しんりん"
    ],
    "meaning": "Rừng cây, lâm nghiệp",
    "meaningEn": "Forest, woods",
    "meaningFr": "Forêt, sylviculture",
    "meaningEs": "Bosque, silvicultura",
    "meaningKo": "삼림",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2876,
    "kanji": "林",
    "displayReading": "はやし",
    "readings": [
      "はやし"
    ],
    "meaning": "Rừng thưa",
    "meaningEn": "Woods, grove",
    "meaningFr": "Bois, bosquet",
    "meaningEs": "Arboleda, bosque",
    "meaningKo": "수풀, 작은 숲",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2877,
    "kanji": "池",
    "displayReading": "いけ",
    "readings": [
      "いけ"
    ],
    "meaning": "Cái ao",
    "meaningEn": "Pond",
    "meaningFr": "Étang",
    "meaningEs": "Estanque",
    "meaningKo": "연못",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2878,
    "kanji": "電池",
    "displayReading": "でんち",
    "readings": [
      "でんち"
    ],
    "meaning": "Pin",
    "meaningEn": "Battery",
    "meaningFr": "Pile, batterie",
    "meaningEs": "Pila, batería",
    "meaningKo": "건전지, 배터리",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2879,
    "kanji": "光",
    "displayReading": "ひかり",
    "readings": [
      "ひかり"
    ],
    "meaning": "Ánh sáng",
    "meaningEn": "Light",
    "meaningFr": "Lumière",
    "meaningEs": "Luz",
    "meaningKo": "빛",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2880,
    "kanji": "光る",
    "displayReading": "ひかる",
    "readings": [
      "ひかる"
    ],
    "meaning": "Tỏa sáng, lấp lánh",
    "meaningEn": "Shine, glitter",
    "meaningFr": "Briller",
    "meaningEs": "Brillar",
    "meaningKo": "빛나다",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2881,
    "kanji": "観光",
    "displayReading": "かんこう",
    "readings": [
      "かんこう"
    ],
    "meaning": "Tham quan, du lịch",
    "meaningEn": "Sightseeing, tourism",
    "meaningFr": "Tourisme",
    "meaningEs": "Turismo",
    "meaningKo": "관광",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2882,
    "kanji": "自然",
    "displayReading": "しぜん",
    "readings": [
      "しぜん"
    ],
    "meaning": "Tự nhiên, thiên nhiên",
    "meaningEn": "Nature, natural",
    "meaningFr": "Nature, naturel",
    "meaningEs": "Naturaleza, natural",
    "meaningKo": "자연",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2883,
    "kanji": "全然",
    "displayReading": "ぜんぜん",
    "readings": [
      "ぜんぜん"
    ],
    "meaning": "Hoàn toàn không",
    "meaningEn": "Not at all, completely",
    "meaningFr": "Pas du tout",
    "meaningEs": "En absoluto, para nada",
    "meaningKo": "전혀",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2884,
    "kanji": "環境",
    "displayReading": "かんきょう",
    "readings": [
      "かんきょう"
    ],
    "meaning": "Môi trường",
    "meaningEn": "Environment",
    "meaningFr": "Environnement",
    "meaningEs": "Medio ambiente, entorno",
    "meaningKo": "환경",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2885,
    "kanji": "星",
    "displayReading": "ほし",
    "readings": [
      "ほし"
    ],
    "meaning": "Ngôi sao",
    "meaningEn": "Star",
    "meaningFr": "Étoile",
    "meaningEs": "Estrella",
    "meaningKo": "별",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2886,
    "kanji": "草",
    "displayReading": "くさ",
    "readings": [
      "くさ"
    ],
    "meaning": "Cỏ",
    "meaningEn": "Grass",
    "meaningFr": "Herbe",
    "meaningEs": "Hierba, césped",
    "meaningKo": "풀",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2887,
    "kanji": "葉",
    "displayReading": "は",
    "readings": [
      "は"
    ],
    "meaning": "Chiếc lá",
    "meaningEn": "Leaf",
    "meaningFr": "Feuille",
    "meaningEs": "Hoja",
    "meaningKo": "잎, 나뭇잎",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2888,
    "kanji": "石",
    "displayReading": "いし",
    "readings": [
      "いし"
    ],
    "meaning": "Hòn đá",
    "meaningEn": "Stone, rock",
    "meaningFr": "Pierre, caillou",
    "meaningEs": "Piedra",
    "meaningKo": "돌",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2889,
    "kanji": "犬",
    "displayReading": "いぬ",
    "readings": [
      "いぬ"
    ],
    "meaning": "Con chó",
    "meaningEn": "Dog",
    "meaningFr": "Chien",
    "meaningEs": "Perro",
    "meaningKo": "개",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2890,
    "kanji": "猫",
    "displayReading": "ねこ",
    "readings": [
      "ねこ"
    ],
    "meaning": "Con mèo",
    "meaningEn": "Cat",
    "meaningFr": "Chat",
    "meaningEs": "Gato",
    "meaningKo": "고양이",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2891,
    "kanji": "馬",
    "displayReading": "うま",
    "readings": [
      "うま"
    ],
    "meaning": "Con ngựa",
    "meaningEn": "Horse",
    "meaningFr": "Cheval",
    "meaningEs": "Caballo",
    "meaningKo": "말 (동물)",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2892,
    "kanji": "虫",
    "displayReading": "むし",
    "readings": [
      "むし"
    ],
    "meaning": "Côn trùng, sâu bọ",
    "meaningEn": "Insect, bug",
    "meaningFr": "Insecte",
    "meaningEs": "Insecto",
    "meaningKo": "벌레, 곤충",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2893,
    "kanji": "咲く",
    "displayReading": "さく",
    "readings": [
      "さく"
    ],
    "meaning": "Nở (hoa)",
    "meaningEn": "Bloom (flowers)",
    "meaningFr": "Fleurir, éclore",
    "meaningEs": "Florecer",
    "meaningKo": "(꽃이) 피다",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2894,
    "kanji": "枯れる",
    "displayReading": "かれる",
    "readings": [
      "かれる"
    ],
    "meaning": "Héo úa, khô héo",
    "meaningEn": "Wither, dry up",
    "meaningFr": "Faner, sécher",
    "meaningEs": "Marchitarse, secarse",
    "meaningKo": "시들다, 마르다",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2895,
    "kanji": "紅葉",
    "displayReading": "こうよう・もみじ",
    "readings": [
      "こうよう",
      "もみじ"
    ],
    "meaning": "Lá đỏ mùa thu",
    "meaningEn": "Autumn foliage",
    "meaningFr": "Feuilles rouges d'automne",
    "meaningEs": "Hojas rojas de otoño",
    "meaningKo": "단풍",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2896,
    "kanji": "桜",
    "displayReading": "さくら",
    "readings": [
      "さくら"
    ],
    "meaning": "Hoa anh đào",
    "meaningEn": "Cherry blossom",
    "meaningFr": "Fleur de cerisier",
    "meaningEs": "Flor de cerezo",
    "meaningKo": "벚꽃",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2897,
    "kanji": "竹",
    "displayReading": "たけ",
    "readings": [
      "たけ"
    ],
    "meaning": "Cây tre",
    "meaningEn": "Bamboo",
    "meaningFr": "Bambou",
    "meaningEs": "Bambú",
    "meaningKo": "대나무",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2898,
    "kanji": "伝統",
    "displayReading": "でんとう",
    "readings": [
      "でんとう"
    ],
    "meaning": "Truyền thống",
    "meaningEn": "Tradition",
    "meaningFr": "Tradition",
    "meaningEs": "Tradición",
    "meaningKo": "전통",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2899,
    "kanji": "習慣",
    "displayReading": "しゅうかん",
    "readings": [
      "しゅうかん"
    ],
    "meaning": "Tập quán, thói quen",
    "meaningEn": "Custom, habit",
    "meaningFr": "Habitude, coutume",
    "meaningEs": "Costumbre, hábito",
    "meaningKo": "습관, 관습",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2900,
    "kanji": "戦争",
    "displayReading": "せんそう",
    "readings": [
      "せんそう"
    ],
    "meaning": "Chiến tranh",
    "meaningEn": "War",
    "meaningFr": "Guerre",
    "meaningEs": "Guerra",
    "meaningKo": "전쟁",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2901,
    "kanji": "政治",
    "displayReading": "せいじ",
    "readings": [
      "せいじ"
    ],
    "meaning": "Chính trị",
    "meaningEn": "Politics",
    "meaningFr": "Politique",
    "meaningEs": "Política",
    "meaningKo": "정치",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2902,
    "kanji": "経済",
    "displayReading": "けいざい",
    "readings": [
      "けいざい"
    ],
    "meaning": "Kinh tế",
    "meaningEn": "Economy",
    "meaningFr": "Économie",
    "meaningEs": "Economía",
    "meaningKo": "경제",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2903,
    "kanji": "法律",
    "displayReading": "ほうりつ",
    "readings": [
      "ほうりつ"
    ],
    "meaning": "Pháp luật",
    "meaningEn": "Law",
    "meaningFr": "Loi, droit",
    "meaningEs": "Ley, derecho",
    "meaningKo": "법률",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 262,
    "kanji": "事",
    "displayReading": "こと",
    "readings": [
      "こと"
    ],
    "meaning": "Việc, chuyện",
    "meaningEn": "Thing, matter",
    "meaningFr": "Chose, affaire",
    "meaningEs": "Cosa, asunto",
    "meaningKo": "일, 것",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 265,
    "kanji": "大事",
    "displayReading": "だいじ",
    "readings": [
      "だいじ"
    ],
    "meaning": "Quan trọng",
    "meaningEn": "Important, serious",
    "meaningFr": "Important",
    "meaningEs": "Importante",
    "meaningKo": "소중함, 중요함",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 266,
    "kanji": "用事",
    "displayReading": "ようじ",
    "readings": [
      "ようじ"
    ],
    "meaning": "Việc bận, việc cần làm",
    "meaningEn": "Errand, business",
    "meaningFr": "Affaire à régler, commission",
    "meaningEs": "Recado, asunto pendiente",
    "meaningKo": "볼일, 용무",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 267,
    "kanji": "事故",
    "displayReading": "じこ",
    "readings": [
      "じこ"
    ],
    "meaning": "Tai nạn",
    "meaningEn": "Accident",
    "meaningFr": "Accident",
    "meaningEs": "Accidente",
    "meaningKo": "사고",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 268,
    "kanji": "火事",
    "displayReading": "かじ",
    "readings": [
      "かじ"
    ],
    "meaning": "Hỏa hoạn",
    "meaningEn": "Fire (disaster)",
    "meaningFr": "Incendie",
    "meaningEs": "Incendio",
    "meaningKo": "화재, 불",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 136,
    "kanji": "会う",
    "displayReading": "あう",
    "readings": [
      "あう"
    ],
    "meaning": "Gặp gỡ",
    "meaningEn": "Meet",
    "meaningFr": "Rencontrer",
    "meaningEs": "Encontrarse, reunirse",
    "meaningKo": "만나다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2910,
    "kanji": "会議",
    "displayReading": "かいぎ",
    "readings": [
      "かいぎ"
    ],
    "meaning": "Cuộc họp",
    "meaningEn": "Meeting, conference",
    "meaningFr": "Réunion",
    "meaningEs": "Reunión",
    "meaningKo": "회의",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2911,
    "kanji": "会場",
    "displayReading": "かいじょう",
    "readings": [
      "かいじょう"
    ],
    "meaning": "Hội trường, địa điểm tổ chức",
    "meaningEn": "Venue, assembly hall",
    "meaningFr": "Lieu de l'événement, salle",
    "meaningEs": "Recinto del evento, sala",
    "meaningKo": "회장, 행사장",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2912,
    "kanji": "始まる",
    "displayReading": "はじまる",
    "readings": [
      "はじまる"
    ],
    "meaning": "Bắt đầu (tự động từ)",
    "meaningEn": "Begin (intransitive)",
    "meaningFr": "Commencer (intransitif)",
    "meaningEs": "Empezar (intransitivo)",
    "meaningKo": "시작되다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2913,
    "kanji": "始める",
    "displayReading": "はじめる",
    "readings": [
      "はじめる"
    ],
    "meaning": "Bắt đầu (tha động từ)",
    "meaningEn": "Start, begin (transitive)",
    "meaningFr": "Commencer (transitif)",
    "meaningEs": "Empezar (transitivo)",
    "meaningKo": "시작하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2914,
    "kanji": "終わる",
    "displayReading": "おわる",
    "readings": [
      "おわる"
    ],
    "meaning": "Kết thúc",
    "meaningEn": "End, finish",
    "meaningFr": "Se terminer, finir",
    "meaningEs": "Terminar, acabar",
    "meaningKo": "끝나다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2915,
    "kanji": "開ける",
    "displayReading": "あける",
    "readings": [
      "あける"
    ],
    "meaning": "Mở (tha động từ)",
    "meaningEn": "Open (transitive)",
    "meaningFr": "Ouvrir (transitif)",
    "meaningEs": "Abrir (transitivo)",
    "meaningKo": "열다 (타동사)",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2916,
    "kanji": "開く",
    "displayReading": "あく・ひらく",
    "readings": [
      "あく",
      "ひらく"
    ],
    "meaning": "Mở ra, tổ chức",
    "meaningEn": "Open (intransitive), hold (an event)",
    "meaningFr": "S'ouvrir, avoir lieu",
    "meaningEs": "Abrirse, celebrarse",
    "meaningKo": "열리다, 개최하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2917,
    "kanji": "閉める",
    "displayReading": "しめる",
    "readings": [
      "しめる"
    ],
    "meaning": "Đóng (tha động từ)",
    "meaningEn": "Close (transitive)",
    "meaningFr": "Fermer (transitif)",
    "meaningEs": "Cerrar (transitivo)",
    "meaningKo": "닫다 (타동사)",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2918,
    "kanji": "閉まる",
    "displayReading": "しまる",
    "readings": [
      "しまる"
    ],
    "meaning": "Đóng lại (tự động từ)",
    "meaningEn": "Close (intransitive)",
    "meaningFr": "Se fermer (intransitif)",
    "meaningEs": "Cerrarse (intransitivo)",
    "meaningKo": "닫히다 (자동사)",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2919,
    "kanji": "立つ",
    "displayReading": "たつ",
    "readings": [
      "たつ"
    ],
    "meaning": "Đứng",
    "meaningEn": "Stand",
    "meaningFr": "Se lever, être debout",
    "meaningEs": "Ponerse de pie",
    "meaningKo": "서다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2920,
    "kanji": "役に立つ",
    "displayReading": "やくにたつ",
    "readings": [
      "やくにたつ"
    ],
    "meaning": "Có ích",
    "meaningEn": "Be useful, helpful",
    "meaningFr": "Être utile",
    "meaningEs": "Ser útil",
    "meaningKo": "도움이 되다, 쓸모 있다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2921,
    "kanji": "座る",
    "displayReading": "すわる",
    "readings": [
      "すわる"
    ],
    "meaning": "Ngồi",
    "meaningEn": "Sit",
    "meaningFr": "S'asseoir",
    "meaningEs": "Sentarse",
    "meaningKo": "앉다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2922,
    "kanji": "待つ",
    "displayReading": "まつ",
    "readings": [
      "まつ"
    ],
    "meaning": "Chờ đợi",
    "meaningEn": "Wait",
    "meaningFr": "Attendre",
    "meaningEs": "Esperar",
    "meaningKo": "기다리다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2923,
    "kanji": "招待",
    "displayReading": "しょうたい",
    "readings": [
      "しょうたい"
    ],
    "meaning": "Mời, lời mời",
    "meaningEn": "Invitation",
    "meaningFr": "Invitation",
    "meaningEs": "Invitación",
    "meaningKo": "초대",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2924,
    "kanji": "持つ",
    "displayReading": "もつ",
    "readings": [
      "もつ"
    ],
    "meaning": "Cầm, mang, sở hữu",
    "meaningEn": "Hold, carry, have",
    "meaningFr": "Tenir, porter, posséder",
    "meaningEs": "Llevar, tener, sostener",
    "meaningKo": "들다, 가지다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 211,
    "kanji": "気持ち",
    "displayReading": "きもち",
    "readings": [
      "きもち"
    ],
    "meaning": "Cảm giác, tâm trạng",
    "meaningEn": "Feeling, mood",
    "meaningFr": "Sentiment, humeur",
    "meaningEs": "Sentimiento, sensación",
    "meaningKo": "기분, 마음",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2926,
    "kanji": "使う",
    "displayReading": "つかう",
    "readings": [
      "つかう"
    ],
    "meaning": "Sử dụng",
    "meaningEn": "Use",
    "meaningFr": "Utiliser",
    "meaningEs": "Usar, utilizar",
    "meaningKo": "쓰다, 사용하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2927,
    "kanji": "大使館",
    "displayReading": "たいしかん",
    "readings": [
      "たいしかん"
    ],
    "meaning": "Đại sứ quán",
    "meaningEn": "Embassy",
    "meaningFr": "Ambassade",
    "meaningEs": "Embajada",
    "meaningKo": "대사관",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2928,
    "kanji": "伝える",
    "displayReading": "つたえる",
    "readings": [
      "つたえる"
    ],
    "meaning": "Truyền đạt, nhắn lại",
    "meaningEn": "Convey, pass on a message",
    "meaningFr": "Transmettre, communiquer",
    "meaningEs": "Transmitir, comunicar",
    "meaningKo": "전하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2929,
    "kanji": "手伝う",
    "displayReading": "てつだう",
    "readings": [
      "てつだう"
    ],
    "meaning": "Giúp đỡ",
    "meaningEn": "Help, assist",
    "meaningFr": "Aider, donner un coup de main",
    "meaningEs": "Ayudar, echar una mano",
    "meaningKo": "돕다, 거들다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2930,
    "kanji": "助ける",
    "displayReading": "たすける",
    "readings": [
      "たすける"
    ],
    "meaning": "Cứu giúp, trợ giúp",
    "meaningEn": "Save, rescue, help",
    "meaningFr": "Sauver, secourir",
    "meaningEs": "Salvar, socorrer",
    "meaningKo": "돕다, 구조하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2931,
    "kanji": "洗う",
    "displayReading": "あらう",
    "readings": [
      "あらう"
    ],
    "meaning": "Rửa, giặt",
    "meaningEn": "Wash",
    "meaningFr": "Laver",
    "meaningEs": "Lavar",
    "meaningKo": "씻다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2932,
    "kanji": "洗濯",
    "displayReading": "せんたく",
    "readings": [
      "せんたく"
    ],
    "meaning": "Giặt giũ",
    "meaningEn": "Laundry",
    "meaningFr": "Lessive",
    "meaningEs": "Colada, lavar la ropa",
    "meaningKo": "세탁, 빨래",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2933,
    "kanji": "掃除",
    "displayReading": "そうじ",
    "readings": [
      "そうじ"
    ],
    "meaning": "Dọn dẹp, quét dọn",
    "meaningEn": "Cleaning",
    "meaningFr": "Ménage, nettoyage",
    "meaningEs": "Limpieza",
    "meaningKo": "청소",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2934,
    "kanji": "集まる",
    "displayReading": "あつまる",
    "readings": [
      "あつまる"
    ],
    "meaning": "Tập trung, tụ họp",
    "meaningEn": "Gather (intransitive)",
    "meaningFr": "Se rassembler (intransitif)",
    "meaningEs": "Reunirse, juntarse",
    "meaningKo": "모이다 (자동사)",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2935,
    "kanji": "集める",
    "displayReading": "あつめる",
    "readings": [
      "あつめる"
    ],
    "meaning": "Sưu tầm, thu thập",
    "meaningEn": "Collect, gather (transitive)",
    "meaningFr": "Rassembler, collectionner",
    "meaningEs": "Reunir, coleccionar",
    "meaningKo": "모으다 (타동사)",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2936,
    "kanji": "決まる",
    "displayReading": "きまる",
    "readings": [
      "きまる"
    ],
    "meaning": "Được quyết định",
    "meaningEn": "Be decided",
    "meaningFr": "Être décidé",
    "meaningEs": "Decidirse, quedar fijado",
    "meaningKo": "정해지다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2937,
    "kanji": "決める",
    "displayReading": "きめる",
    "readings": [
      "きめる"
    ],
    "meaning": "Quyết định",
    "meaningEn": "Decide",
    "meaningFr": "Décider",
    "meaningEs": "Decidir",
    "meaningKo": "정하다, 결정하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2938,
    "kanji": "変わる",
    "displayReading": "かわる",
    "readings": [
      "かわる"
    ],
    "meaning": "Thay đổi (tự động từ)",
    "meaningEn": "Change (intransitive)",
    "meaningFr": "Changer (intransitif)",
    "meaningEs": "Cambiar (intransitivo)",
    "meaningKo": "바뀌다, 변하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2939,
    "kanji": "変える",
    "displayReading": "かえる",
    "readings": [
      "かえる"
    ],
    "meaning": "Thay đổi (tha động từ)",
    "meaningEn": "Change (transitive)",
    "meaningFr": "Changer, modifier (transitif)",
    "meaningEs": "Cambiar (transitivo)",
    "meaningKo": "바꾸다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2940,
    "kanji": "大変",
    "displayReading": "たいへん",
    "readings": [
      "たいへん"
    ],
    "meaning": "Vất vả, rất, nghiêm trọng",
    "meaningEn": "Very, tough, serious",
    "meaningFr": "Très, dur, grave",
    "meaningEs": "Muy, duro, grave",
    "meaningKo": "매우, 힘듦, 큰일",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2941,
    "kanji": "変",
    "displayReading": "へん",
    "readings": [
      "へん"
    ],
    "meaning": "Kỳ lạ, bất thường",
    "meaningEn": "Strange, weird",
    "meaningFr": "Étrange, bizarre",
    "meaningEs": "Extraño, raro",
    "meaningKo": "이상함",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2942,
    "kanji": "直す",
    "displayReading": "なおす",
    "readings": [
      "なおす"
    ],
    "meaning": "Sửa chữa",
    "meaningEn": "Fix, repair",
    "meaningFr": "Réparer, corriger",
    "meaningEs": "Arreglar, corregir",
    "meaningKo": "고치다, 수리하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2943,
    "kanji": "治る",
    "displayReading": "なおる",
    "readings": [
      "なおる"
    ],
    "meaning": "Khỏi bệnh",
    "meaningEn": "Recover, get well",
    "meaningFr": "Guérir",
    "meaningEs": "Curarse, arreglarse",
    "meaningKo": "낫다, 고쳐지다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2944,
    "kanji": "直接",
    "displayReading": "ちょくせつ",
    "readings": [
      "ちょくせつ"
    ],
    "meaning": "Trực tiếp",
    "meaningEn": "Directly",
    "meaningFr": "Directement",
    "meaningEs": "Directamente",
    "meaningKo": "직접",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2945,
    "kanji": "続く",
    "displayReading": "つづく",
    "readings": [
      "つづく"
    ],
    "meaning": "Tiếp tục (tự động từ)",
    "meaningEn": "Continue (intransitive)",
    "meaningFr": "Continuer (intransitif)",
    "meaningEs": "Continuar (intransitivo)",
    "meaningKo": "계속되다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2946,
    "kanji": "続ける",
    "displayReading": "つづける",
    "readings": [
      "つづける"
    ],
    "meaning": "Tiếp tục (tha động từ)",
    "meaningEn": "Continue (transitive)",
    "meaningFr": "Continuer (transitif)",
    "meaningEs": "Continuar (transitivo)",
    "meaningKo": "계속하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2947,
    "kanji": "選ぶ",
    "displayReading": "えらぶ",
    "readings": [
      "えらぶ"
    ],
    "meaning": "Lựa chọn",
    "meaningEn": "Choose, select",
    "meaningFr": "Choisir",
    "meaningEs": "Elegir, seleccionar",
    "meaningKo": "고르다, 선택하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2948,
    "kanji": "選手",
    "displayReading": "せんしゅ",
    "readings": [
      "せんしゅ"
    ],
    "meaning": "Vận động viên, tuyển thủ",
    "meaningEn": "Athlete, player",
    "meaningFr": "Athlète, joueur",
    "meaningEs": "Jugador, atleta",
    "meaningKo": "선수",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2949,
    "kanji": "探す",
    "displayReading": "さがす",
    "readings": [
      "さがす"
    ],
    "meaning": "Tìm kiếm",
    "meaningEn": "Search, look for",
    "meaningFr": "Chercher",
    "meaningEs": "Buscar",
    "meaningKo": "찾다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2950,
    "kanji": "調べる",
    "displayReading": "しらべる",
    "readings": [
      "しらべる"
    ],
    "meaning": "Tra cứu, điều tra",
    "meaningEn": "Look up, investigate",
    "meaningFr": "Rechercher, vérifier",
    "meaningEs": "Investigar, revisar",
    "meaningKo": "조사하다, 찾아보다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2951,
    "kanji": "調子",
    "displayReading": "ちょうし",
    "readings": [
      "ちょうし"
    ],
    "meaning": "Tình trạng, phong độ",
    "meaningEn": "Condition, shape",
    "meaningFr": "État, forme",
    "meaningEs": "Estado, condición",
    "meaningKo": "상태, 컨디션",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2952,
    "kanji": "置く",
    "displayReading": "おく",
    "readings": [
      "おく"
    ],
    "meaning": "Đặt, để",
    "meaningEn": "Put, place",
    "meaningFr": "Poser, placer",
    "meaningEs": "Poner, colocar",
    "meaningKo": "놓다, 두다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2953,
    "kanji": "押す",
    "displayReading": "おす",
    "readings": [
      "おす"
    ],
    "meaning": "Ấn, đẩy",
    "meaningEn": "Push, press",
    "meaningFr": "Pousser, appuyer",
    "meaningEs": "Empujar, presionar",
    "meaningKo": "밀다, 누르다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2954,
    "kanji": "引く",
    "displayReading": "ひく",
    "readings": [
      "ひく"
    ],
    "meaning": "Kéo, tra từ điển",
    "meaningEn": "Pull, look up (in dictionary)",
    "meaningFr": "Tirer, chercher (au dictionnaire)",
    "meaningEs": "Tirar, buscar (en diccionario)",
    "meaningKo": "당기다, (사전을) 찾다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2955,
    "kanji": "呼ぶ",
    "displayReading": "よぶ",
    "readings": [
      "よぶ"
    ],
    "meaning": "Gọi",
    "meaningEn": "Call",
    "meaningFr": "Appeler",
    "meaningEs": "Llamar",
    "meaningKo": "부르다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2956,
    "kanji": "取る",
    "displayReading": "とる",
    "readings": [
      "とる"
    ],
    "meaning": "Lấy, chụp",
    "meaningEn": "Take, get",
    "meaningFr": "Prendre",
    "meaningEs": "Tomar, coger",
    "meaningKo": "집다, 취하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2957,
    "kanji": "撮る",
    "displayReading": "とる",
    "readings": [
      "とる"
    ],
    "meaning": "Chụp ảnh, quay phim",
    "meaningEn": "Take (a photo), shoot (video)",
    "meaningFr": "Prendre (une photo, vidéo)",
    "meaningEs": "Tomar (fotos o vídeos)",
    "meaningKo": "(사진·영상을) 찍다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2958,
    "kanji": "比べる",
    "displayReading": "くらべる",
    "readings": [
      "くらべる"
    ],
    "meaning": "So sánh",
    "meaningEn": "Compare",
    "meaningFr": "Comparer",
    "meaningEs": "Comparar",
    "meaningKo": "비교하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2959,
    "kanji": "消す",
    "displayReading": "けす",
    "readings": [
      "けす"
    ],
    "meaning": "Tắt, xóa",
    "meaningEn": "Turn off, erase",
    "meaningFr": "Éteindre, effacer",
    "meaningEs": "Apagar, borrar",
    "meaningKo": "끄다, 지우다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2960,
    "kanji": "消える",
    "displayReading": "きえる",
    "readings": [
      "きえる"
    ],
    "meaning": "Tắt, biến mất",
    "meaningEn": "Go out, disappear",
    "meaningFr": "S'éteindre, disparaître",
    "meaningEs": "Apagarse, desaparecer",
    "meaningKo": "꺼지다, 사라지다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2961,
    "kanji": "壊れる",
    "displayReading": "こわれる",
    "readings": [
      "こわれる"
    ],
    "meaning": "Bị hỏng, vỡ",
    "meaningEn": "Break (intransitive)",
    "meaningFr": "Se casser (intransitif)",
    "meaningEs": "Romperse, averiarse",
    "meaningKo": "고장 나다, 부서지다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2962,
    "kanji": "壊す",
    "displayReading": "こわす",
    "readings": [
      "こわす"
    ],
    "meaning": "Làm hỏng, phá vỡ",
    "meaningEn": "Break (transitive)",
    "meaningFr": "Casser (transitif)",
    "meaningEs": "Romper (transitivo)",
    "meaningKo": "부수다, 망가뜨리다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2963,
    "kanji": "落とす",
    "displayReading": "おとす",
    "readings": [
      "おとす"
    ],
    "meaning": "Làm rơi",
    "meaningEn": "Drop",
    "meaningFr": "Faire tomber",
    "meaningEs": "Dejar caer",
    "meaningKo": "떨어뜨리다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2964,
    "kanji": "落ちる",
    "displayReading": "おちる",
    "readings": [
      "おちる"
    ],
    "meaning": "Rơi xuống, thi trượt",
    "meaningEn": "Fall, fail (an exam)",
    "meaningFr": "Tomber, échouer (examen)",
    "meaningEs": "Caerse, suspender (examen)",
    "meaningKo": "떨어지다, 낙방하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2965,
    "kanji": "並ぶ",
    "displayReading": "ならぶ",
    "readings": [
      "ならぶ"
    ],
    "meaning": "Xếp hàng",
    "meaningEn": "Line up (intransitive)",
    "meaningFr": "Faire la queue, s'aligner",
    "meaningEs": "Hacer fila, alinearse",
    "meaningKo": "줄 서다, 나란히 서다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2966,
    "kanji": "並べる",
    "displayReading": "ならべる",
    "readings": [
      "ならべる"
    ],
    "meaning": "Sắp xếp, bày biện",
    "meaningEn": "Arrange, line up (transitive)",
    "meaningFr": "Aligner, disposer",
    "meaningEs": "Alinear, colocar en fila",
    "meaningKo": "나란히 놓다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2967,
    "kanji": "飾る",
    "displayReading": "かざる",
    "readings": [
      "かざる"
    ],
    "meaning": "Trang trí",
    "meaningEn": "Decorate",
    "meaningFr": "Décorer",
    "meaningEs": "Decorar",
    "meaningKo": "장식하다, 꾸미다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2968,
    "kanji": "包む",
    "displayReading": "つつむ",
    "readings": [
      "つつむ"
    ],
    "meaning": "Gói, bọc",
    "meaningEn": "Wrap, pack",
    "meaningFr": "Emballer, envelopper",
    "meaningEs": "Envolver, empaquetar",
    "meaningKo": "싸다, 포장하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2969,
    "kanji": "折る",
    "displayReading": "おる",
    "readings": [
      "おる"
    ],
    "meaning": "Gấp, bẻ gãy",
    "meaningEn": "Fold, break",
    "meaningFr": "Plier, casser",
    "meaningEs": "Doblar, partir",
    "meaningKo": "접다, 꺾다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2970,
    "kanji": "片付ける",
    "displayReading": "かたづける",
    "readings": [
      "かたづける"
    ],
    "meaning": "Dọn dẹp, thu gọn",
    "meaningEn": "Tidy up, put away",
    "meaningFr": "Ranger",
    "meaningEs": "Ordenar, recoger",
    "meaningKo": "정리하다, 치우다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2971,
    "kanji": "捨てる",
    "displayReading": "すてる",
    "readings": [
      "すてる"
    ],
    "meaning": "Vứt bỏ",
    "meaningEn": "Throw away",
    "meaningFr": "Jeter",
    "meaningEs": "Tirar, desechar",
    "meaningKo": "버리다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2972,
    "kanji": "拾う",
    "displayReading": "ひろう",
    "readings": [
      "ひろう"
    ],
    "meaning": "Nhặt lên",
    "meaningEn": "Pick up",
    "meaningFr": "Ramasser",
    "meaningEs": "Recoger del suelo",
    "meaningKo": "줍다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2973,
    "kanji": "守る",
    "displayReading": "まもる",
    "readings": [
      "まもる"
    ],
    "meaning": "Bảo vệ, tuân thủ",
    "meaningEn": "Protect, obey",
    "meaningFr": "Protéger, respecter",
    "meaningEs": "Proteger, cumplir",
    "meaningKo": "지키다, 보호하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2974,
    "kanji": "頼む",
    "displayReading": "たのむ",
    "readings": [
      "たのむ"
    ],
    "meaning": "Nhờ vả, gọi món",
    "meaningEn": "Request, ask a favor",
    "meaningFr": "Demander un service, commander",
    "meaningEs": "Pedir un favor, encargar",
    "meaningKo": "부탁하다, 주문하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2975,
    "kanji": "誘う",
    "displayReading": "さそう",
    "readings": [
      "さそう"
    ],
    "meaning": "Rủ rê, mời",
    "meaningEn": "Invite, ask out",
    "meaningFr": "Inviter, proposer",
    "meaningEs": "Invitar, proponer",
    "meaningKo": "권하다, 초대하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2976,
    "kanji": "断る",
    "displayReading": "ことわる",
    "readings": [
      "ことわる"
    ],
    "meaning": "Từ chối",
    "meaningEn": "Refuse, decline",
    "meaningFr": "Refuser",
    "meaningEs": "Rechazar, negarse",
    "meaningKo": "거절하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2977,
    "kanji": "謝る",
    "displayReading": "あやまる",
    "readings": [
      "あやまる"
    ],
    "meaning": "Xin lỗi",
    "meaningEn": "Apologize",
    "meaningFr": "S'excuser",
    "meaningEs": "Disculparse",
    "meaningKo": "사과하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2978,
    "kanji": "褒める",
    "displayReading": "ほめる",
    "readings": [
      "ほめる"
    ],
    "meaning": "Khen ngợi",
    "meaningEn": "Praise",
    "meaningFr": "Complimenter, féliciter",
    "meaningEs": "Elogiar, felicitar",
    "meaningKo": "칭찬하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2979,
    "kanji": "叱る",
    "displayReading": "しかる",
    "readings": [
      "しかる"
    ],
    "meaning": "Mắng, trách phạt",
    "meaningEn": "Scold",
    "meaningFr": "Gronder",
    "meaningEs": "Regañar",
    "meaningKo": "꾸짖다, 혼내다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2980,
    "kanji": "逃げる",
    "displayReading": "にげる",
    "readings": [
      "にげる"
    ],
    "meaning": "Chạy trốn",
    "meaningEn": "Run away, escape",
    "meaningFr": "S'enfuir",
    "meaningEs": "Huir, escapar",
    "meaningKo": "도망가다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2981,
    "kanji": "騒ぐ",
    "displayReading": "さわぐ",
    "readings": [
      "さわぐ"
    ],
    "meaning": "Làm ồn, náo loạn",
    "meaningEn": "Make noise",
    "meaningFr": "Faire du bruit, s'agiter",
    "meaningEs": "Hacer ruido, alborotar",
    "meaningKo": "떠들다, 소란 피우다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2982,
    "kanji": "慣れる",
    "displayReading": "なれる",
    "readings": [
      "なれる"
    ],
    "meaning": "Làm quen, quen thuộc",
    "meaningEn": "Get used to",
    "meaningFr": "S'habituer à",
    "meaningEs": "Acostumbrarse",
    "meaningKo": "익숙해지다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2983,
    "kanji": "育てる",
    "displayReading": "そだてる",
    "readings": [
      "そだてる"
    ],
    "meaning": "Nuôi dưỡng, trồng trọt",
    "meaningEn": "Raise, grow",
    "meaningFr": "Élever, cultiver",
    "meaningEs": "Criar, cultivar",
    "meaningKo": "기르다, 키우다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2984,
    "kanji": "増える",
    "displayReading": "ふえる",
    "readings": [
      "ふえる"
    ],
    "meaning": "Tăng lên",
    "meaningEn": "Increase",
    "meaningFr": "Augmenter",
    "meaningEs": "Aumentar",
    "meaningKo": "늘어나다, 증가하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2985,
    "kanji": "減る",
    "displayReading": "へる",
    "readings": [
      "へる"
    ],
    "meaning": "Giảm xuống",
    "meaningEn": "Decrease",
    "meaningFr": "Diminuer",
    "meaningEs": "Disminuir",
    "meaningKo": "줄어들다, 감소하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2986,
    "kanji": "鳴る",
    "displayReading": "なる",
    "readings": [
      "なる"
    ],
    "meaning": "Kêu, reo (chuông)",
    "meaningEn": "Ring, sound",
    "meaningFr": "Sonner, retentir",
    "meaningEs": "Sonar",
    "meaningKo": "(소리가) 울리다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2987,
    "kanji": "濡れる",
    "displayReading": "ぬれる",
    "readings": [
      "ぬれる"
    ],
    "meaning": "Bị ướt",
    "meaningEn": "Get wet",
    "meaningFr": "Être mouillé",
    "meaningEs": "Mojarse",
    "meaningKo": "젖다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2988,
    "kanji": "乾く",
    "displayReading": "かわく",
    "readings": [
      "かわく"
    ],
    "meaning": "Khô",
    "meaningEn": "Dry (intransitive)",
    "meaningFr": "Sécher",
    "meaningEs": "Secarse",
    "meaningKo": "마르다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2989,
    "kanji": "割れる",
    "displayReading": "われる",
    "readings": [
      "われる"
    ],
    "meaning": "Bị vỡ",
    "meaningEn": "Break, crack (intransitive)",
    "meaningFr": "Se briser",
    "meaningEs": "Romperse (cristal, plato)",
    "meaningKo": "깨지다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2990,
    "kanji": "折れる",
    "displayReading": "おれる",
    "readings": [
      "おれる"
    ],
    "meaning": "Bị gãy",
    "meaningEn": "Break, snap (intransitive)",
    "meaningFr": "Se casser, se plier",
    "meaningEs": "Partirse, doblarse",
    "meaningKo": "부러지다, 접히다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2991,
    "kanji": "汚れる",
    "displayReading": "よごれる",
    "readings": [
      "よごれる"
    ],
    "meaning": "Bị bẩn",
    "meaningEn": "Get dirty",
    "meaningFr": "Se salir",
    "meaningEs": "Ensuciarse",
    "meaningKo": "더러워지다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2992,
    "kanji": "笑う",
    "displayReading": "わらう",
    "readings": [
      "わらう"
    ],
    "meaning": "Cười",
    "meaningEn": "Laugh, smile",
    "meaningFr": "Rire, sourire",
    "meaningEs": "Reír, sonreír",
    "meaningKo": "웃다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 2993,
    "kanji": "泣く",
    "displayReading": "なく",
    "readings": [
      "なく"
    ],
    "meaning": "Khóc",
    "meaningEn": "Cry",
    "meaningFr": "Pleurer",
    "meaningEs": "Llorar",
    "meaningKo": "울다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 2994,
    "kanji": "怒る",
    "displayReading": "おこる",
    "readings": [
      "おこる"
    ],
    "meaning": "Tức giận",
    "meaningEn": "Get angry",
    "meaningFr": "Se fâcher",
    "meaningEs": "Enojarse, enfadarse",
    "meaningKo": "화내다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 2995,
    "kanji": "喜ぶ",
    "displayReading": "よろこぶ",
    "readings": [
      "よろこぶ"
    ],
    "meaning": "Vui mừng",
    "meaningEn": "Be glad, rejoice",
    "meaningFr": "Se réjouir",
    "meaningEs": "Alegrarse",
    "meaningKo": "기뻐하다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 2996,
    "kanji": "悲しい",
    "displayReading": "かなしい",
    "readings": [
      "かなしい"
    ],
    "meaning": "Buồn bã",
    "meaningEn": "Sad",
    "meaningFr": "Triste",
    "meaningEs": "Triste",
    "meaningKo": "슬프다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 2997,
    "kanji": "嬉しい",
    "displayReading": "うれしい",
    "readings": [
      "うれしい"
    ],
    "meaning": "Vui sướng",
    "meaningEn": "Happy, glad",
    "meaningFr": "Heureux, ravi",
    "meaningEs": "Feliz, contento",
    "meaningKo": "기쁘다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 2998,
    "kanji": "寂しい",
    "displayReading": "さびしい",
    "readings": [
      "さびしい"
    ],
    "meaning": "Cô đơn, buồn tẻ",
    "meaningEn": "Lonely",
    "meaningFr": "Seul, solitaire",
    "meaningEs": "Solitario, sentir nostalgia",
    "meaningKo": "외롭다, 쓸쓸하다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 2999,
    "kanji": "怖い",
    "displayReading": "こわい",
    "readings": [
      "こわい"
    ],
    "meaning": "Sợ hãi",
    "meaningEn": "Scary, afraid",
    "meaningFr": "Effrayant, avoir peur",
    "meaningEs": "Dar miedo, aterrador",
    "meaningKo": "무섭다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3000,
    "kanji": "驚く",
    "displayReading": "おどろく",
    "readings": [
      "おどろく"
    ],
    "meaning": "Ngạc nhiên",
    "meaningEn": "Be surprised",
    "meaningFr": "Être surpris",
    "meaningEs": "Sorprenderse",
    "meaningKo": "놀라다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3001,
    "kanji": "忙しい",
    "displayReading": "いそがしい",
    "readings": [
      "いそがしい"
    ],
    "meaning": "Bận rộn",
    "meaningEn": "Busy",
    "meaningFr": "Occupé",
    "meaningEs": "Ocupado",
    "meaningKo": "바쁘다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3002,
    "kanji": "暇",
    "displayReading": "ひま",
    "readings": [
      "ひま"
    ],
    "meaning": "Rảnh rỗi",
    "meaningEn": "Free time, not busy",
    "meaningFr": "Temps libre",
    "meaningEs": "Tiempo libre",
    "meaningKo": "한가함, 여가",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3003,
    "kanji": "危ない",
    "displayReading": "あぶない",
    "readings": [
      "あぶない"
    ],
    "meaning": "Nguy hiểm",
    "meaningEn": "Dangerous",
    "meaningFr": "Dangereux",
    "meaningEs": "Peligroso",
    "meaningKo": "위험하다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3004,
    "kanji": "危険",
    "displayReading": "きけん",
    "readings": [
      "きけん"
    ],
    "meaning": "Sự nguy hiểm",
    "meaningEn": "Danger",
    "meaningFr": "Danger",
    "meaningEs": "Peligro",
    "meaningKo": "위험",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 255,
    "kanji": "安全",
    "displayReading": "あんぜん",
    "readings": [
      "あんぜん"
    ],
    "meaning": "An toàn",
    "meaningEn": "Safety, safe",
    "meaningFr": "Sécurité, sûr",
    "meaningEs": "Seguridad, seguro",
    "meaningKo": "안전",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3006,
    "kanji": "保険",
    "displayReading": "ほけん",
    "readings": [
      "ほけん"
    ],
    "meaning": "Bảo hiểm",
    "meaningEn": "Insurance",
    "meaningFr": "Assurance",
    "meaningEs": "Seguro (póliza)",
    "meaningKo": "보험",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3007,
    "kanji": "必ず",
    "displayReading": "かならず",
    "readings": [
      "かならず"
    ],
    "meaning": "Nhất định, chắc chắn",
    "meaningEn": "Surely, without fail",
    "meaningFr": "Sans faute, certainement",
    "meaningEs": "Sin falta, seguramente",
    "meaningKo": "반드시, 꼭",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3008,
    "kanji": "必要",
    "displayReading": "ひつよう",
    "readings": [
      "ひつよう"
    ],
    "meaning": "Cần thiết",
    "meaningEn": "Necessary",
    "meaningFr": "Nécessaire",
    "meaningEs": "Necesario",
    "meaningKo": "필요",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3009,
    "kanji": "要る",
    "displayReading": "いる",
    "readings": [
      "いる"
    ],
    "meaning": "Cần",
    "meaningEn": "Need",
    "meaningFr": "Avoir besoin de",
    "meaningEs": "Necesitar",
    "meaningKo": "필요하다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3010,
    "kanji": "不安",
    "displayReading": "ふあん",
    "readings": [
      "ふあん"
    ],
    "meaning": "Bất an, lo âu",
    "meaningEn": "Uneasy, anxious",
    "meaningFr": "Anxieux, inquiet",
    "meaningEs": "Inquietud, ansiedad",
    "meaningKo": "불안",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3011,
    "kanji": "無理",
    "displayReading": "むり",
    "readings": [
      "むり"
    ],
    "meaning": "Vô lý, quá sức",
    "meaningEn": "Impossible, unreasonable",
    "meaningFr": "Impossible, déraisonnable",
    "meaningEs": "Imposible, excesivo",
    "meaningKo": "무리, 불가능",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3012,
    "kanji": "無料",
    "displayReading": "むりょう",
    "readings": [
      "むりょう"
    ],
    "meaning": "Miễn phí",
    "meaningEn": "Free of charge",
    "meaningFr": "Gratuit",
    "meaningEs": "Gratis, gratuito",
    "meaningKo": "무료",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3013,
    "kanji": "有名",
    "displayReading": "ゆうめい",
    "readings": [
      "ゆうめい"
    ],
    "meaning": "Nổi tiếng",
    "meaningEn": "Famous",
    "meaningFr": "Célèbre",
    "meaningEs": "Famoso",
    "meaningKo": "유명함",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3014,
    "kanji": "全部",
    "displayReading": "ぜんぶ",
    "readings": [
      "ぜんぶ"
    ],
    "meaning": "Toàn bộ, tất cả",
    "meaningEn": "All, entire",
    "meaningFr": "Tout, la totalité",
    "meaningEs": "Todo, la totalidad",
    "meaningKo": "전부, 모두",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3015,
    "kanji": "部屋",
    "displayReading": "へや",
    "readings": [
      "へや"
    ],
    "meaning": "Căn phòng",
    "meaningEn": "Room",
    "meaningFr": "Chambre, pièce",
    "meaningEs": "Habitación, cuarto",
    "meaningKo": "방",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3016,
    "kanji": "部長",
    "displayReading": "ぶちょう",
    "readings": [
      "ぶちょう"
    ],
    "meaning": "Trưởng phòng",
    "meaningEn": "Department manager",
    "meaningFr": "Directeur de département",
    "meaningEs": "Director de departamento",
    "meaningKo": "부장",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3017,
    "kanji": "今度",
    "displayReading": "こんど",
    "readings": [
      "こんど"
    ],
    "meaning": "Lần này, lần tới",
    "meaningEn": "This time, next time",
    "meaningFr": "Cette fois, la prochaine fois",
    "meaningEs": "Esta vez, la próxima vez",
    "meaningKo": "이번, 다음번",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3018,
    "kanji": "一度",
    "displayReading": "いちど",
    "readings": [
      "いちど"
    ],
    "meaning": "Một lần",
    "meaningEn": "Once, one time",
    "meaningFr": "Une fois",
    "meaningEs": "Una vez",
    "meaningKo": "한 번",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3019,
    "kanji": "温度",
    "displayReading": "おんど",
    "readings": [
      "おんど"
    ],
    "meaning": "Nhiệt độ",
    "meaningEn": "Temperature",
    "meaningFr": "Température",
    "meaningEs": "Temperatura",
    "meaningKo": "온도",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3020,
    "kanji": "一回",
    "displayReading": "いっかい",
    "readings": [
      "いっかい"
    ],
    "meaning": "Một lần",
    "meaningEn": "One time",
    "meaningFr": "Une fois (tour)",
    "meaningEs": "Una vez (turno)",
    "meaningKo": "한 번 (회차)",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3021,
    "kanji": "今回",
    "displayReading": "こんかい",
    "readings": [
      "こんかい"
    ],
    "meaning": "Lần này",
    "meaningEn": "This time",
    "meaningFr": "Cette fois-ci",
    "meaningEs": "Esta ocasión",
    "meaningKo": "이번",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3022,
    "kanji": "次回",
    "displayReading": "じかい",
    "readings": [
      "じかい"
    ],
    "meaning": "Lần tới",
    "meaningEn": "Next time",
    "meaningFr": "La prochaine fois",
    "meaningEs": "La próxima ocasión",
    "meaningKo": "다음번",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3023,
    "kanji": "次",
    "displayReading": "つぎ",
    "readings": [
      "つぎ"
    ],
    "meaning": "Tiếp theo",
    "meaningEn": "Next",
    "meaningFr": "Suivant, prochain",
    "meaningEs": "Siguiente, próximo",
    "meaningKo": "다음",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3024,
    "kanji": "一番",
    "displayReading": "いちばん",
    "readings": [
      "いちばん"
    ],
    "meaning": "Nhất, số một",
    "meaningEn": "Number one, best",
    "meaningFr": "Le numéro un, le meilleur",
    "meaningEs": "El número uno, el mejor",
    "meaningKo": "제일, 가장, 1번",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3025,
    "kanji": "番号",
    "displayReading": "ばんごう",
    "readings": [
      "ばんごう"
    ],
    "meaning": "Số hiệu, con số",
    "meaningEn": "Number",
    "meaningFr": "Numéro",
    "meaningEs": "Número",
    "meaningKo": "번호",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3026,
    "kanji": "電話番号",
    "displayReading": "でんわばんごう",
    "readings": [
      "でんわばんごう"
    ],
    "meaning": "Số điện thoại",
    "meaningEn": "Phone number",
    "meaningFr": "Numéro de téléphone",
    "meaningEs": "Número de teléfono",
    "meaningKo": "전화번호",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3027,
    "kanji": "番組",
    "displayReading": "ばんぐみ",
    "readings": [
      "ばんぐみ"
    ],
    "meaning": "Chương trình truyền hình",
    "meaningEn": "TV program",
    "meaningFr": "Émission télévisée",
    "meaningEs": "Programa de televisión",
    "meaningKo": "방송 프로그램",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3028,
    "kanji": "信号",
    "displayReading": "しんごう",
    "readings": [
      "しんごう"
    ],
    "meaning": "Đèn tín hiệu giao thông",
    "meaningEn": "Traffic light",
    "meaningFr": "Feu de signalisation",
    "meaningEs": "Semáforo, señal",
    "meaningKo": "신호등, 신호",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3029,
    "kanji": "方",
    "displayReading": "かた",
    "readings": [
      "かた"
    ],
    "meaning": "Vị (người), cách thức",
    "meaningEn": "Person (polite), way, method",
    "meaningFr": "Personne (poli), manière",
    "meaningEs": "Persona (cortés), manera",
    "meaningKo": "분 (높임말), 방법",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3030,
    "kanji": "夕方",
    "displayReading": "ゆうがた",
    "readings": [
      "ゆうがた"
    ],
    "meaning": "Chiều tối",
    "meaningEn": "Evening, dusk",
    "meaningFr": "Fin d'après-midi, soirée",
    "meaningEs": "Atardecer",
    "meaningKo": "해 질 녘, 저녁때",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3031,
    "kanji": "方法",
    "displayReading": "ほうほう",
    "readings": [
      "ほうほう"
    ],
    "meaning": "Phương pháp",
    "meaningEn": "Method, way",
    "meaningFr": "Méthode, moyen",
    "meaningEs": "Método, manera",
    "meaningKo": "방법",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3032,
    "kanji": "以上",
    "displayReading": "いじょう",
    "readings": [
      "いじょう"
    ],
    "meaning": "Trở lên, trên",
    "meaningEn": "Or more, above",
    "meaningFr": "Ou plus, au-dessus",
    "meaningEs": "O más, superior a",
    "meaningKo": "이상",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3033,
    "kanji": "以下",
    "displayReading": "いか",
    "readings": [
      "いか"
    ],
    "meaning": "Trở xuống, dưới",
    "meaningEn": "Or less, below",
    "meaningFr": "Ou moins, en dessous",
    "meaningEs": "O menos, inferior a",
    "meaningKo": "이하",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3034,
    "kanji": "以内",
    "displayReading": "いない",
    "readings": [
      "いない"
    ],
    "meaning": "Trong vòng, không quá",
    "meaningEn": "Within, less than",
    "meaningFr": "Dans la limite de, moins de",
    "meaningEs": "Dentro de, menos de",
    "meaningKo": "이내",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3035,
    "kanji": "用意",
    "displayReading": "ようい",
    "readings": [
      "ようい"
    ],
    "meaning": "Chuẩn bị",
    "meaningEn": "Preparation",
    "meaningFr": "Préparatifs",
    "meaningEs": "Preparativos",
    "meaningKo": "채비, 준비",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3036,
    "kanji": "将来",
    "displayReading": "しょうらい",
    "readings": [
      "しょうらい"
    ],
    "meaning": "Tương lai",
    "meaningEn": "Future",
    "meaningFr": "Avenir, futur",
    "meaningEs": "Futuro",
    "meaningKo": "장래, 미래",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3037,
    "kanji": "夢",
    "displayReading": "ゆめ",
    "readings": [
      "ゆめ"
    ],
    "meaning": "Giấc mơ, ước mơ",
    "meaningEn": "Dream",
    "meaningFr": "Rêve",
    "meaningEs": "Sueño",
    "meaningKo": "꿈",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3038,
    "kanji": "希望",
    "displayReading": "きぼう",
    "readings": [
      "きぼう"
    ],
    "meaning": "Hy vọng, nguyện vọng",
    "meaningEn": "Hope, wish",
    "meaningFr": "Espoir, souhait",
    "meaningEs": "Esperanza, deseo",
    "meaningKo": "희망",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3039,
    "kanji": "自由",
    "displayReading": "じゆう",
    "readings": [
      "じゆう"
    ],
    "meaning": "Tự do",
    "meaningEn": "Freedom",
    "meaningFr": "Liberté",
    "meaningEs": "Libertad",
    "meaningKo": "자유",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3040,
    "kanji": "理由",
    "displayReading": "りゆう",
    "readings": [
      "りゆう"
    ],
    "meaning": "Lý do",
    "meaningEn": "Reason",
    "meaningFr": "Raison, motif",
    "meaningEs": "Razón, motivo",
    "meaningKo": "이유",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3041,
    "kanji": "平和",
    "displayReading": "へいわ",
    "readings": [
      "へいわ"
    ],
    "meaning": "Hòa bình",
    "meaningEn": "Peace",
    "meaningFr": "Paix",
    "meaningEs": "Paz",
    "meaningKo": "평화",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3042,
    "kanji": "簡単",
    "displayReading": "かんたん",
    "readings": [
      "かんたん"
    ],
    "meaning": "Đơn giản",
    "meaningEn": "Simple, easy",
    "meaningFr": "Simple, facile",
    "meaningEs": "Sencillo, fácil",
    "meaningKo": "간단함, 쉬움",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3043,
    "kanji": "複雑",
    "displayReading": "ふくざつ",
    "readings": [
      "ふくざつ"
    ],
    "meaning": "Phức tạp",
    "meaningEn": "Complex, complicated",
    "meaningFr": "Complexe, compliqué",
    "meaningEs": "Complejo, complicado",
    "meaningKo": "복잡함",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3044,
    "kanji": "丁寧",
    "displayReading": "ていねい",
    "readings": [
      "ていねい"
    ],
    "meaning": "Lịch sự, cẩn thận",
    "meaningEn": "Polite, careful",
    "meaningFr": "Poli, soigneux",
    "meaningEs": "Educado, cuidadoso",
    "meaningKo": "정중함, 꼼꼼함",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3045,
    "kanji": "静か",
    "displayReading": "しずか",
    "readings": [
      "しずか"
    ],
    "meaning": "Yên tĩnh",
    "meaningEn": "Quiet",
    "meaningFr": "Calme, silencieux",
    "meaningEs": "Tranquilo, silencioso",
    "meaningKo": "조용함",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3046,
    "kanji": "賑やか",
    "displayReading": "にぎやか",
    "readings": [
      "にぎやか"
    ],
    "meaning": "Náo nhiệt, đông vui",
    "meaningEn": "Lively, bustling",
    "meaningFr": "Animé, vivant",
    "meaningEs": "Animado, concurrido",
    "meaningKo": "번화함, 활기참",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3047,
    "kanji": "恥ずかしい",
    "displayReading": "はずかしい",
    "readings": [
      "はずかしい"
    ],
    "meaning": "Xấu hổ, ngại ngùng",
    "meaningEn": "Embarrassed, shy",
    "meaningFr": "Gêné, timide, honteux",
    "meaningEs": "Avergonzado, tímido",
    "meaningKo": "부끄럽다, 창피하다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3048,
    "kanji": "羨ましい",
    "displayReading": "うらやましい",
    "readings": [
      "うらやましい"
    ],
    "meaning": "Ghen tị, ngưỡng mộ",
    "meaningEn": "Envious, jealous",
    "meaningFr": "Envieux, jaloux",
    "meaningEs": "Envidiable, dar envidia",
    "meaningKo": "부럽다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3049,
    "kanji": "素晴らしい",
    "displayReading": "すばらしい",
    "readings": [
      "すばらしい"
    ],
    "meaning": "Tuyệt vời",
    "meaningEn": "Wonderful, splendid",
    "meaningFr": "Magnifique, merveilleux",
    "meaningEs": "Maravilloso, estupendo",
    "meaningKo": "멋지다, 훌륭하다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3050,
    "kanji": "珍しい",
    "displayReading": "めずらしい",
    "readings": [
      "めずらしい"
    ],
    "meaning": "Hiếm có, lạ",
    "meaningEn": "Rare, unusual",
    "meaningFr": "Rare, inhabituel",
    "meaningEs": "Raro, poco común",
    "meaningKo": "드물다, 신기하다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3051,
    "kanji": "厳しい",
    "displayReading": "きびしい",
    "readings": [
      "きびしい"
    ],
    "meaning": "Nghiêm khắc, khắc nghiệt",
    "meaningEn": "Strict, severe",
    "meaningFr": "Sévère, strict",
    "meaningEs": "Estricto, severo",
    "meaningKo": "엄격하다, 심하다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3052,
    "kanji": "優しい",
    "displayReading": "やさしい",
    "readings": [
      "やさしい"
    ],
    "meaning": "Hiền lành, tốt bụng",
    "meaningEn": "Kind, gentle",
    "meaningFr": "Doux, gentil",
    "meaningEs": "Amable, tierno",
    "meaningKo": "다정하다, 상냥하다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3053,
    "kanji": "真面目",
    "displayReading": "まじめ",
    "readings": [
      "まじめ"
    ],
    "meaning": "Chăm chỉ, nghiêm túc",
    "meaningEn": "Serious, earnest",
    "meaningFr": "Sérieux, appliqué",
    "meaningEs": "Serio, aplicado",
    "meaningKo": "성실함, 진지함",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3054,
    "kanji": "適当",
    "displayReading": "てきとう",
    "readings": [
      "てきとう"
    ],
    "meaning": "Phù hợp, qua loa",
    "meaningEn": "Suitable, appropriate",
    "meaningFr": "Adéquat, convenable",
    "meaningEs": "Adecuado, moderado",
    "meaningKo": "적당함",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3055,
    "kanji": "残念",
    "displayReading": "ざんねん",
    "readings": [
      "ざんねん"
    ],
    "meaning": "Đáng tiếc",
    "meaningEn": "Regrettable, unfortunate",
    "meaningFr": "Dommage, regrettable",
    "meaningEs": "Lamentable, qué pena",
    "meaningKo": "아쉬움, 유감",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3056,
    "kanji": "規則",
    "displayReading": "きそく",
    "readings": [
      "きそく"
    ],
    "meaning": "Quy tắc, nội quy",
    "meaningEn": "Rule, regulation",
    "meaningFr": "Règle, règlement",
    "meaningEs": "Regla, norma",
    "meaningKo": "규칙",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3057,
    "kanji": "禁止",
    "displayReading": "きんし",
    "readings": [
      "きんし"
    ],
    "meaning": "Cấm",
    "meaningEn": "Prohibition, ban",
    "meaningFr": "Interdiction",
    "meaningEs": "Prohibición",
    "meaningKo": "금지",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3058,
    "kanji": "非常口",
    "displayReading": "ひじょうぐち",
    "readings": [
      "ひじょうぐち"
    ],
    "meaning": "Lối thoát hiểm",
    "meaningEn": "Emergency exit",
    "meaningFr": "Issue de secours",
    "meaningEs": "Salida de emergencia",
    "meaningKo": "비상구",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3059,
    "kanji": "警察署",
    "displayReading": "けいさつしょ",
    "readings": [
      "けいさつしょ"
    ],
    "meaning": "Sở cảnh sát",
    "meaningEn": "Police station",
    "meaningFr": "Commissariat de police",
    "meaningEs": "Comisaría de policía",
    "meaningKo": "경찰서",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3060,
    "kanji": "消防署",
    "displayReading": "しょうぼうしょ",
    "readings": [
      "しょうぼうしょ"
    ],
    "meaning": "Trạm cứu hỏa",
    "meaningEn": "Fire station",
    "meaningFr": "Caserne de pompiers",
    "meaningEs": "Parque de bomberos",
    "meaningKo": "소방서",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3061,
    "kanji": "救急車",
    "displayReading": "きゅうきゅうしゃ",
    "readings": [
      "きゅうきゅうしゃ"
    ],
    "meaning": "Xe cứu thương",
    "meaningEn": "Ambulance",
    "meaningFr": "Ambulance",
    "meaningEs": "Ambulancia",
    "meaningKo": "구급차",
    "topicId": "n4_11",
    "level": "N4"
  }
];

const RADICALS_DATA = [
  {
    "id": 1001,
    "kanji": "一",
    "displayReading": "Bộ Nhất",
    "displayReadingEn": "Radical 1 · One",
    "displayReadingFr": "Clé 1 · Un",
    "displayReadingEs": "Radical 1 · Uno",
    "displayReadingKo": "부수 1 · 한 일",
    "readings": [
      "Nhất"
    ],
    "meaning": "Một, số một",
    "meaningEn": "One, number one",
    "meaningFr": "Un, chiffre un",
    "meaningEs": "Uno, número uno",
    "meaningKo": "하나, 숫자 1",
    "examples": "一, 七, 三, 上, 下",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1002,
    "kanji": "丨",
    "displayReading": "Bộ Cổn",
    "displayReadingEn": "Radical 2 · Line",
    "displayReadingFr": "Clé 2 · Trait vertical",
    "displayReadingEs": "Radical 2 · Trazo vertical",
    "displayReadingKo": "부수 2 · 뚫을 곤",
    "readings": [
      "Cổn"
    ],
    "meaning": "Nét sổ thẳng",
    "meaningEn": "Vertical stroke",
    "meaningFr": "Trait vertical",
    "meaningEs": "Trazo vertical",
    "meaningKo": "세로획, 뚫다",
    "examples": "中, 串, 豊",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1003,
    "kanji": "丶",
    "displayReading": "Bộ Chủ",
    "displayReadingEn": "Radical 3 · Dot",
    "displayReadingFr": "Clé 3 · Point",
    "displayReadingEs": "Radical 3 · Punto",
    "displayReadingKo": "부수 3 · 점 주",
    "readings": [
      "Chủ"
    ],
    "meaning": "Điểm, chấm",
    "meaningEn": "Dot, point",
    "meaningFr": "Point, goutte",
    "meaningEs": "Punto, gota",
    "meaningKo": "점, 불똥",
    "examples": "主, 丸, 丹",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1004,
    "kanji": "丿",
    "displayReading": "Bộ Phiệt",
    "displayReadingEn": "Radical 4 · Slash",
    "displayReadingFr": "Clé 4 · Trait oblique",
    "displayReadingEs": "Radical 4 · Trazo oblicuo",
    "displayReadingKo": "부수 4 · 삐침 별",
    "readings": [
      "Phiệt"
    ],
    "meaning": "Nét phẩy",
    "meaningEn": "Diagonal slash stroke",
    "meaningFr": "Trait oblique vers la gauche",
    "meaningEs": "Trazo oblicuo hacia la izquierda",
    "meaningKo": "왼쪽 삐침획",
    "examples": "久, 之, 乗",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1005,
    "kanji": "乙 (乚, ⺄)",
    "displayReading": "Bộ Ất",
    "displayReadingEn": "Radical 5 · Second",
    "displayReadingFr": "Clé 5 · Second",
    "displayReadingEs": "Radical 5 · Segundo",
    "displayReadingKo": "부수 5 · 새 을",
    "readings": [
      "Ất"
    ],
    "meaning": "Vị trí thứ 2 trong Thiên Can, uốn cong",
    "meaningEn": "Second Heavenly Stem, bent line",
    "meaningFr": "Deuxième tige céleste, courbe",
    "meaningEs": "Segundo tronco celeste, curva",
    "meaningKo": "천간 을, 굽다, 새",
    "examples": "九, 乱, 乳",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1006,
    "kanji": "亅",
    "displayReading": "Bộ Quyết",
    "displayReadingEn": "Radical 6 · Hook",
    "displayReadingFr": "Clé 6 · Crochet",
    "displayReadingEs": "Radical 6 · Gancho",
    "displayReadingKo": "부수 6 · 갈고리 궐",
    "readings": [
      "Quyết"
    ],
    "meaning": "Nét sổ có móc",
    "meaningEn": "Hooked vertical stroke",
    "meaningFr": "Trait vertical à crochet",
    "meaningEs": "Trazo vertical con gancho",
    "meaningKo": "갈고리 세로획",
    "examples": "了, 予, 事",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1007,
    "kanji": "二",
    "displayReading": "Bộ Nhị",
    "displayReadingEn": "Radical 7 · Two",
    "displayReadingFr": "Clé 7 · Deux",
    "displayReadingEs": "Radical 7 · Dos",
    "displayReadingKo": "부수 7 · 두 이",
    "readings": [
      "Nhị"
    ],
    "meaning": "Số hai",
    "meaningEn": "Number two",
    "meaningFr": "Chiffre deux",
    "meaningEs": "Número dos",
    "meaningKo": "둘, 숫자 2",
    "examples": "二, 五, 井, 亜",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1008,
    "kanji": "亠",
    "displayReading": "Bộ Đầu",
    "displayReadingEn": "Radical 8 · Lid",
    "displayReadingFr": "Clé 8 · Couvercle",
    "displayReadingEs": "Radical 8 · Tapa",
    "displayReadingKo": "부수 8 · 돼지해머리 두",
    "readings": [
      "Đầu"
    ],
    "meaning": "Nắp đậy, phần đầu (không có nghĩa độc lập)",
    "meaningEn": "Lid, cover, head",
    "meaningFr": "Couvercle, sommet",
    "meaningEs": "Tapa, parte superior",
    "meaningKo": "머리, 뚜껑",
    "examples": "亡, 交, 京, 高",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1009,
    "kanji": "人 (亻, 𠆢)",
    "displayReading": "Bộ Nhân",
    "displayReadingEn": "Radical 9 · Person",
    "displayReadingFr": "Clé 9 · Homme",
    "displayReadingEs": "Radical 9 · Persona",
    "displayReadingKo": "부수 9 · 사람 인",
    "readings": [
      "Nhân"
    ],
    "meaning": "Người",
    "meaningEn": "Person, human",
    "meaningFr": "Personne, être humain",
    "meaningEs": "Persona, ser humano",
    "meaningKo": "사람, 인간",
    "examples": "人, 休, 体, 働, 今",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1010,
    "kanji": "儿",
    "displayReading": "Bộ Nhân (nhi)",
    "displayReadingEn": "Radical 10 · Legs",
    "displayReadingFr": "Clé 10 · Jambes",
    "displayReadingEs": "Radical 10 · Piernas",
    "displayReadingKo": "부수 10 · 어진사람 인",
    "readings": [
      "Nhân (nhi)"
    ],
    "meaning": "Người đi, đôi chân",
    "meaningEn": "Walking person, human legs",
    "meaningFr": "Homme qui marche, jambes",
    "meaningEs": "Persona que camina, piernas",
    "meaningKo": "걷는 사람, 다리",
    "examples": "元, 兄, 光, 先",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1011,
    "kanji": "入",
    "displayReading": "Bộ Nhập",
    "displayReadingEn": "Radical 11 · Enter",
    "displayReadingFr": "Clé 11 · Entrer",
    "displayReadingEs": "Radical 11 · Entrar",
    "displayReadingKo": "부수 11 · 들 입",
    "readings": [
      "Nhập"
    ],
    "meaning": "Đi vào",
    "meaningEn": "Enter, go in",
    "meaningFr": "Entrer, pénétrer",
    "meaningEs": "Entrar, penetrar",
    "meaningKo": "들어가다",
    "examples": "入, 全, 両",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1012,
    "kanji": "八 (丷)",
    "displayReading": "Bộ Bát",
    "displayReadingEn": "Radical 12 · Eight",
    "displayReadingFr": "Clé 12 · Huit",
    "displayReadingEs": "Radical 12 · Ocho",
    "displayReadingKo": "부수 12 · 여덟 팔",
    "readings": [
      "Bát"
    ],
    "meaning": "Số tám, chia tách",
    "meaningEn": "Number eight, divide",
    "meaningFr": "Chiffre huit, diviser",
    "meaningEs": "Número ocho, dividir",
    "meaningKo": "여덟, 나누다",
    "examples": "八, 六, 公, 共",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1013,
    "kanji": "冂",
    "displayReading": "Bộ Quynh",
    "displayReadingEn": "Radical 13 · Down box",
    "displayReadingFr": "Clé 13 · Enceinte ouverte",
    "displayReadingEs": "Radical 13 · Recinto abierto",
    "displayReadingKo": "부수 13 · 멀 경",
    "readings": [
      "Quynh"
    ],
    "meaning": "Vùng biên giới, khoảng trống bao quanh",
    "meaningEn": "Wide border, open enclosure",
    "meaningFr": "Frontière lointaine, espace entouré",
    "meaningEs": "Frontera lejana, espacio rodeado",
    "meaningKo": "먼 변방, 둘러싼 공간",
    "examples": "内, 円, 再, 冊",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1014,
    "kanji": "冖",
    "displayReading": "Bộ Mịch",
    "displayReadingEn": "Radical 14 · Cover",
    "displayReadingFr": "Clé 14 · Couvrir",
    "displayReadingEs": "Radical 14 · Cubrir",
    "displayReadingKo": "부수 14 · 민갓머리 멱",
    "readings": [
      "Mịch"
    ],
    "meaning": "Trùm khăn lên, che đậy",
    "meaningEn": "Cover over, cloth cover",
    "meaningFr": "Couvrir d'un voile",
    "meaningEs": "Cubrir con un velo",
    "meaningKo": "덮어 씌우다",
    "examples": "写, 冠, 軍",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1015,
    "kanji": "冫",
    "displayReading": "Bộ Băng",
    "displayReadingEn": "Radical 15 · Ice",
    "displayReadingFr": "Clé 15 · Glace",
    "displayReadingEs": "Radical 15 · Hielo",
    "displayReadingKo": "부수 15 · 이수변 빙",
    "readings": [
      "Băng"
    ],
    "meaning": "Nước đá, lạnh giá",
    "meaningEn": "Ice, cold",
    "meaningFr": "Glace, froid",
    "meaningEs": "Hielo, frío",
    "meaningKo": "얼음, 차갑다",
    "examples": "氷, 冷, 冬, 凍",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1016,
    "kanji": "几",
    "displayReading": "Bộ Kỷ",
    "displayReadingEn": "Radical 16 · Table",
    "displayReadingFr": "Clé 16 · Table basse",
    "displayReadingEs": "Radical 16 · Mesa baja",
    "displayReadingKo": "부수 16 · 안석 궤",
    "readings": [
      "Kỷ"
    ],
    "meaning": "Cái bàn nhỏ, ghế tựa",
    "meaningEn": "Small table, bench",
    "meaningFr": "Petite table, tabouret",
    "meaningEs": "Mesita baja, taburete",
    "meaningKo": "작은 책상, 안석",
    "examples": "机, 凡, 風",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1017,
    "kanji": "凵",
    "displayReading": "Bộ Khảm",
    "displayReadingEn": "Radical 17 · Open box",
    "displayReadingFr": "Clé 17 · Réceptacle",
    "displayReadingEs": "Radical 17 · Receptáculo",
    "displayReadingKo": "부수 17 · 위튼입구 감",
    "readings": [
      "Khảm"
    ],
    "meaning": "Há miệng, hố sâu",
    "meaningEn": "Open mouth, receptacle, pit",
    "meaningFr": "Bouche ouverte, fosse, boîte ouverte",
    "meaningEs": "Boca abierta, foso, caja abierta",
    "meaningKo": "입 벌리다, 구덩이",
    "examples": "出, 凶, 凸, 凹",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1018,
    "kanji": "刀 (刂)",
    "displayReading": "Bộ Đao",
    "displayReadingEn": "Radical 18 · Knife",
    "displayReadingFr": "Clé 18 · Couteau",
    "displayReadingEs": "Radical 18 · Cuchillo",
    "displayReadingKo": "부수 18 · 칼 도",
    "readings": [
      "Đao"
    ],
    "meaning": "Con dao, cắt gọt",
    "meaningEn": "Knife, blade, cut",
    "meaningFr": "Couteau, lame, trancher",
    "meaningEs": "Cuchillo, hoja, cortar",
    "meaningKo": "칼, 베다, 자르다",
    "examples": "刀, 切, 分, 利, 別",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1019,
    "kanji": "力",
    "displayReading": "Bộ Lực",
    "displayReadingEn": "Radical 19 · Power",
    "displayReadingFr": "Clé 19 · Force",
    "displayReadingEs": "Radical 19 · Fuerza",
    "displayReadingKo": "부수 19 · 힘 력",
    "readings": [
      "Lực"
    ],
    "meaning": "Sức mạnh",
    "meaningEn": "Power, strength",
    "meaningFr": "Force, puissance",
    "meaningEs": "Fuerza, potencia",
    "meaningKo": "힘, 권력",
    "examples": "力, 動, 働, 勉, 助",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1020,
    "kanji": "勹",
    "displayReading": "Bộ Bao",
    "displayReadingEn": "Radical 20 · Wrap",
    "displayReadingFr": "Clé 20 · Envelopper",
    "displayReadingEs": "Radical 20 · Envolver",
    "displayReadingKo": "부수 20 · 쌀 포",
    "readings": [
      "Bao"
    ],
    "meaning": "Bao bọc, ôm ấp",
    "meaningEn": "Wrap, embrace",
    "meaningFr": "Envelopper, enlacer",
    "meaningEs": "Envolver, abrazar",
    "meaningKo": "싸다, 감싸 안다",
    "examples": "包, 句, 匂",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1021,
    "kanji": "匕",
    "displayReading": "Bộ Chủy",
    "displayReadingEn": "Radical 21 · Spoon",
    "displayReadingFr": "Clé 21 · Cuillère",
    "displayReadingEs": "Radical 21 · Cuchara",
    "displayReadingKo": "부수 21 · 비수 비",
    "readings": [
      "Chủy"
    ],
    "meaning": "Cái thìa, muỗng",
    "meaningEn": "Spoon, ladle",
    "meaningFr": "Cuillère, louche",
    "meaningEs": "Cuchara, cucharón",
    "meaningKo": "숟가락, 비수",
    "examples": "化, 北, 匙",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1022,
    "kanji": "匚",
    "displayReading": "Bộ Phương",
    "displayReadingEn": "Radical 22 · Right open box",
    "displayReadingFr": "Clé 22 · Coffre",
    "displayReadingEs": "Radical 22 · Cofre",
    "displayReadingKo": "부수 22 · 상자 방",
    "readings": [
      "Phương"
    ],
    "meaning": "Cái hộp, tủ đựng",
    "meaningEn": "Box, cabinet, chest",
    "meaningFr": "Boîte, coffre",
    "meaningEs": "Caja, cofre",
    "meaningKo": "상자, 그릇",
    "examples": "匠, 匹, 区",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1023,
    "kanji": "匸",
    "displayReading": "Bộ Hệ",
    "displayReadingEn": "Radical 23 · Hiding enclosure",
    "displayReadingFr": "Clé 23 · Cacher",
    "displayReadingEs": "Radical 23 · Ocultar",
    "displayReadingKo": "부수 23 · 감출 혜",
    "readings": [
      "Hệ"
    ],
    "meaning": "Che giấu, đậy lại",
    "meaningEn": "Hide, conceal, cover",
    "meaningFr": "Cacher, dissimuler",
    "meaningEs": "Esconder, ocultar",
    "meaningKo": "감추다, 숨기다",
    "examples": "区, 医, 匿",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1024,
    "kanji": "十",
    "displayReading": "Bộ Thập",
    "displayReadingEn": "Radical 24 · Ten",
    "displayReadingFr": "Clé 24 · Dix",
    "displayReadingEs": "Radical 24 · Diez",
    "displayReadingKo": "부수 24 · 열 십",
    "readings": [
      "Thập"
    ],
    "meaning": "Số mười, đầy đủ",
    "meaningEn": "Number ten, complete",
    "meaningFr": "Chiffre dix, complet",
    "meaningEs": "Número diez, completo",
    "meaningKo": "열, 숫자 10, 완전함",
    "examples": "十, 千, 午, 半, 南",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1025,
    "kanji": "卜",
    "displayReading": "Bộ Bốc",
    "displayReadingEn": "Radical 25 · Divination",
    "displayReadingFr": "Clé 25 · Divination",
    "displayReadingEs": "Radical 25 · Adivinación",
    "displayReadingKo": "부수 25 · 점 복",
    "readings": [
      "Bốc"
    ],
    "meaning": "Xem bói",
    "meaningEn": "Divination, fortune-telling",
    "meaningFr": "Divination, présage",
    "meaningEs": "Adivinación, augurio",
    "meaningKo": "점치다, 점괘",
    "examples": "占, 卦, 外",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1026,
    "kanji": "卩 (㔾)",
    "displayReading": "Bộ Tiết",
    "displayReadingEn": "Radical 26 · Seal",
    "displayReadingFr": "Clé 26 · Sceau",
    "displayReadingEs": "Radical 26 · Sello",
    "displayReadingKo": "부수 26 · 병부 절",
    "readings": [
      "Tiết"
    ],
    "meaning": "Đốt tre, con dấu",
    "meaningEn": "Bamboo joint, official seal",
    "meaningFr": "Nœud de bambou, sceau officiel",
    "meaningEs": "Nudo de bambú, sello oficial",
    "meaningKo": "병부, 관인, 무릎 꿇다",
    "examples": "印, 危, 即, 卵",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1027,
    "kanji": "厂",
    "displayReading": "Bộ Hán",
    "displayReadingEn": "Radical 27 · Cliff",
    "displayReadingFr": "Clé 27 · Falaise",
    "displayReadingEs": "Radical 27 · Acantilado",
    "displayReadingKo": "부수 27 · 민엄호 한",
    "readings": [
      "Hán"
    ],
    "meaning": "Sườn núi, vách đá",
    "meaningEn": "Cliff, mountain slope",
    "meaningFr": "Falaise, versant rocheux",
    "meaningEs": "Acantilado, ladera rocosa",
    "meaningKo": "언덕, 기슭, 절벽",
    "examples": "原, 厚, 圧, 歴",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1028,
    "kanji": "厶",
    "displayReading": "Bộ Khư (Tư)",
    "displayReadingEn": "Radical 28 · Private",
    "displayReadingFr": "Clé 28 · Privé",
    "displayReadingEs": "Radical 28 · Privado",
    "displayReadingKo": "부수 28 · 사사 사",
    "readings": [
      "Khư (Tư)"
    ],
    "meaning": "Riêng tư",
    "meaningEn": "Private, personal",
    "meaningFr": "Privé, personnel",
    "meaningEs": "Privado, personal",
    "meaningKo": "사사롭다, 개인",
    "examples": "去, 参, 私",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1029,
    "kanji": "又",
    "displayReading": "Bộ Hựu",
    "displayReadingEn": "Radical 29 · Again",
    "displayReadingFr": "Clé 29 · Encore",
    "displayReadingEs": "Radical 29 · Otra vez",
    "displayReadingKo": "부수 29 · 또 우",
    "readings": [
      "Hựu"
    ],
    "meaning": "Lại nữa, bàn tay phải",
    "meaningEn": "Again, right hand",
    "meaningFr": "À nouveau, main droite",
    "meaningEs": "De nuevo, mano derecha",
    "meaningKo": "또, 다시, 오른손",
    "examples": "又, 友, 反, 取, 受",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1030,
    "kanji": "口",
    "displayReading": "Bộ Khẩu",
    "displayReadingEn": "Radical 30 · Mouth",
    "displayReadingFr": "Clé 30 · Bouche",
    "displayReadingEs": "Radical 30 · Boca",
    "displayReadingKo": "부수 30 · 입 구",
    "readings": [
      "Khẩu"
    ],
    "meaning": "Cái miệng, ăn nói",
    "meaningEn": "Mouth, speech, eating",
    "meaningFr": "Bouche, parole",
    "meaningEs": "Boca, palabra",
    "meaningKo": "입, 말, 출입구",
    "examples": "口, 古, 味, 呼, 問",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1031,
    "kanji": "囗",
    "displayReading": "Bộ Vi",
    "displayReadingEn": "Radical 31 · Enclosure",
    "displayReadingFr": "Clé 31 · Enceinte",
    "displayReadingEs": "Radical 31 · Recinto",
    "displayReadingKo": "부수 31 · 큰입구 위",
    "readings": [
      "Vi"
    ],
    "meaning": "Vây quanh, biên giới",
    "meaningEn": "Enclosure, border, surround",
    "meaningFr": "Enceinte, entourer, frontière",
    "meaningEs": "Recinto cerrado, rodear, frontera",
    "meaningKo": "에워싸다, 테두리",
    "examples": "国, 四, 回, 園, 図",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1032,
    "kanji": "土",
    "displayReading": "Bộ Thổ",
    "displayReadingEn": "Radical 32 · Earth",
    "displayReadingFr": "Clé 32 · Terre",
    "displayReadingEs": "Radical 32 · Tierra",
    "displayReadingKo": "부수 32 · 흙 토",
    "readings": [
      "Thổ"
    ],
    "meaning": "Đất đai",
    "meaningEn": "Earth, soil, land",
    "meaningFr": "Terre, sol",
    "meaningEs": "Tierra, suelo",
    "meaningKo": "흙, 땅, 대지",
    "examples": "土, 地, 場, 坂, 城",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1033,
    "kanji": "士",
    "displayReading": "Bộ Sĩ",
    "displayReadingEn": "Radical 33 · Scholar",
    "displayReadingFr": "Clé 33 · Lettré",
    "displayReadingEs": "Radical 33 · Erudito",
    "displayReadingKo": "부수 33 · 선비 사",
    "readings": [
      "Sĩ"
    ],
    "meaning": "Kẻ sĩ, học giả, chiến binh",
    "meaningEn": "Scholar, gentleman, warrior",
    "meaningFr": "Lettré, érudit, guerrier",
    "meaningEs": "Erudito, letrado, guerrero",
    "meaningKo": "선비, 학자, 무사",
    "examples": "士, 売, 声, 壮",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1034,
    "kanji": "夂",
    "displayReading": "Bộ Trĩ",
    "displayReadingEn": "Radical 34 · Go",
    "displayReadingFr": "Clé 34 · Suivre",
    "displayReadingEs": "Radical 34 · Seguir",
    "displayReadingKo": "부수 34 · 뒤져올 치",
    "readings": [
      "Trĩ"
    ],
    "meaning": "Bước chậm theo sau",
    "meaningEn": "Walk slowly behind",
    "meaningFr": "Marcher lentement derrière",
    "meaningEs": "Caminar despacio detrás",
    "meaningKo": "뒤따라 천천히 걷다",
    "examples": "冬, 各, 条",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1035,
    "kanji": "夊",
    "displayReading": "Bộ Tuy",
    "displayReadingEn": "Radical 35 · Go slowly",
    "displayReadingFr": "Clé 35 · Marcher lentement",
    "displayReadingEs": "Radical 35 · Caminar lento",
    "displayReadingKo": "부수 35 · 천천히걸을 쇠",
    "readings": [
      "Tuy"
    ],
    "meaning": "Đi chậm chạp",
    "meaningEn": "Walk slowly",
    "meaningFr": "Marcher à petits pas",
    "meaningEs": "Caminar a pasos cortos",
    "meaningKo": "발을 끌며 천천히 걷다",
    "examples": "夏, 復, 変",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1036,
    "kanji": "夕",
    "displayReading": "Bộ Tịch",
    "displayReadingEn": "Radical 36 · Evening",
    "displayReadingFr": "Clé 36 · Soir",
    "displayReadingEs": "Radical 36 · Tarde / Noche",
    "displayReadingKo": "부수 36 · 저녁 석",
    "readings": [
      "Tịch"
    ],
    "meaning": "Đêm tối, buổi chiều",
    "meaningEn": "Evening, night",
    "meaningFr": "Soir, crépuscule, nuit",
    "meaningEs": "Atardecer, noche",
    "meaningKo": "저녁, 밤",
    "examples": "夕, 外, 多, 夜, 夢",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1037,
    "kanji": "大",
    "displayReading": "Bộ Đại",
    "displayReadingEn": "Radical 37 · Big",
    "displayReadingFr": "Clé 37 · Grand",
    "displayReadingEs": "Radical 37 · Grande",
    "displayReadingKo": "부수 37 · 큰 대",
    "readings": [
      "Đại"
    ],
    "meaning": "To lớn",
    "meaningEn": "Big, large, great",
    "meaningFr": "Grand, vaste",
    "meaningEs": "Grande, vasto",
    "meaningKo": "크다, 넓다",
    "examples": "大, 天, 太, 夫, 奇",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1038,
    "kanji": "女",
    "displayReading": "Bộ Nữ",
    "displayReadingEn": "Radical 38 · Woman",
    "displayReadingFr": "Clé 38 · Femme",
    "displayReadingEs": "Radical 38 · Mujer",
    "displayReadingKo": "부수 38 · 계집 녀",
    "readings": [
      "Nữ"
    ],
    "meaning": "Phụ nữ, con gái",
    "meaningEn": "Woman, female",
    "meaningFr": "Femme, féminin",
    "meaningEs": "Mujer, femenino",
    "meaningKo": "여자, 여성",
    "examples": "女, 好, 姉, 妹, 始",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1039,
    "kanji": "子",
    "displayReading": "Bộ Tử",
    "displayReadingEn": "Radical 39 · Child",
    "displayReadingFr": "Clé 39 · Enfant",
    "displayReadingEs": "Radical 39 · Niño",
    "displayReadingKo": "부수 39 · 아들 자",
    "readings": [
      "Tử"
    ],
    "meaning": "Con cái, trẻ em",
    "meaningEn": "Child, offspring",
    "meaningFr": "Enfant, descendant",
    "meaningEs": "Niño, hijo, descendiente",
    "meaningKo": "아이, 자식, 자손",
    "examples": "子, 学, 字, 孫, 季",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1040,
    "kanji": "宀",
    "displayReading": "Bộ Miên",
    "displayReadingEn": "Radical 40 · Roof",
    "displayReadingFr": "Clé 40 · Toit",
    "displayReadingEs": "Radical 40 · Techo",
    "displayReadingKo": "부수 40 · 갓머리 면",
    "readings": [
      "Miên"
    ],
    "meaning": "Mái nhà, che chở",
    "meaningEn": "Roof, shelter",
    "meaningFr": "Toit, maison, abri",
    "meaningEs": "Techo, casa, hogar",
    "meaningKo": "지붕, 집",
    "examples": "家, 安, 室, 宿, 守",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1041,
    "kanji": "寸",
    "displayReading": "Bộ Thốn",
    "displayReadingEn": "Radical 41 · Inch",
    "displayReadingFr": "Clé 41 · Pouce",
    "displayReadingEs": "Radical 41 · Pulgada",
    "displayReadingKo": "부수 41 · 마디 촌",
    "readings": [
      "Thốn"
    ],
    "meaning": "Đơn vị đo (tấc), quy tắc",
    "meaningEn": "Inch (unit), rule, measure",
    "meaningFr": "Pouce (mesure), règle",
    "meaningEs": "Pulgada china, medida, regla",
    "meaningKo": "치(길이 단위), 법도",
    "examples": "寸, 寺, 対, 専, 導",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1042,
    "kanji": "小 (⺌, ⺍)",
    "displayReading": "Bộ Tiểu",
    "displayReadingEn": "Radical 42 · Small",
    "displayReadingFr": "Clé 42 · Petit",
    "displayReadingEs": "Radical 42 · Pequeño",
    "displayReadingKo": "부수 42 · 작을 소",
    "readings": [
      "Tiểu"
    ],
    "meaning": "Nhỏ bé",
    "meaningEn": "Small, little",
    "meaningFr": "Petit, menu",
    "meaningEs": "Pequeño, diminuto",
    "meaningKo": "작다, 적다",
    "examples": "小, 少, 尚, 当",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1043,
    "kanji": "尢 (尣)",
    "displayReading": "Bộ Uông",
    "displayReadingEn": "Radical 43 · Lame",
    "displayReadingFr": "Clé 43 · Boiteux",
    "displayReadingEs": "Radical 43 · Cojo",
    "displayReadingKo": "부수 43 · 절름발이 왕",
    "readings": [
      "Uông"
    ],
    "meaning": "Yếu đuối, chân khập khiễng",
    "meaningEn": "Weak, lame leg",
    "meaningFr": "Faible, jambe boiteuse",
    "meaningEs": "Débil, pierna coja",
    "meaningKo": "절름발이, 약하다",
    "examples": "就, 尤",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1044,
    "kanji": "尸",
    "displayReading": "Bộ Thi",
    "displayReadingEn": "Radical 44 · Corpse",
    "displayReadingFr": "Clé 44 · Cadavre",
    "displayReadingEs": "Radical 44 · Cadáver",
    "displayReadingKo": "부수 44 · 주검 시",
    "readings": [
      "Thi"
    ],
    "meaning": "Thây ma, cơ thể nằm",
    "meaningEn": "Corpse, reclining body",
    "meaningFr": "Corps étendu, dépouille",
    "meaningEs": "Cuerpo tendido, restos",
    "meaningKo": "주검, 몸, 지붕",
    "examples": "局, 屋, 届, 居, 層",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1045,
    "kanji": "屮",
    "displayReading": "Bộ Triệt",
    "displayReadingEn": "Radical 45 · Sprout",
    "displayReadingFr": "Clé 45 · Jeune pousse",
    "displayReadingEs": "Radical 45 · Brote",
    "displayReadingKo": "부수 45 · 왼손 좌 / 싹 철",
    "readings": [
      "Triệt"
    ],
    "meaning": "Mầm non mới nhú",
    "meaningEn": "Young sprout, shoot",
    "meaningFr": "Bourgeon, jeune pousse",
    "meaningEs": "Brote, retoño",
    "meaningKo": "새싹, 돋아나다",
    "examples": "屯, 逆",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1046,
    "kanji": "山",
    "displayReading": "Bộ Sơn",
    "displayReadingEn": "Radical 46 · Mountain",
    "displayReadingFr": "Clé 46 · Montagne",
    "displayReadingEs": "Radical 46 · Montaña",
    "displayReadingKo": "부수 46 · 뫼 산",
    "readings": [
      "Sơn"
    ],
    "meaning": "Ngọn núi",
    "meaningEn": "Mountain",
    "meaningFr": "Montagne",
    "meaningEs": "Montaña",
    "meaningKo": "산, 봉우리",
    "examples": "山, 岩, 島, 峠, 岸",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1047,
    "kanji": "巛 (川)",
    "displayReading": "Bộ Xuyên",
    "displayReadingEn": "Radical 47 · River",
    "displayReadingFr": "Clé 47 · Rivière",
    "displayReadingEs": "Radical 47 · Río",
    "displayReadingKo": "부수 47 · 내 천",
    "readings": [
      "Xuyên"
    ],
    "meaning": "Sông ngòi, dòng chảy",
    "meaningEn": "River, stream, flow",
    "meaningFr": "Rivière, cours d'eau",
    "meaningEs": "Río, corriente de agua",
    "meaningKo": "강, 시내, 물줄기",
    "examples": "川, 州, 巡, 巣",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1048,
    "kanji": "工",
    "displayReading": "Bộ Công",
    "displayReadingEn": "Radical 48 · Work",
    "displayReadingFr": "Clé 48 · Travail",
    "displayReadingEs": "Radical 48 · Trabajo",
    "displayReadingKo": "부수 48 · 장인 공",
    "readings": [
      "Công"
    ],
    "meaning": "Người thợ, công việc",
    "meaningEn": "Work, craft, artisan",
    "meaningFr": "Travail, artisan, outil",
    "meaningEs": "Trabajo, artesano, herramienta",
    "meaningKo": "장인, 일, 도구",
    "examples": "工, 左, 差, 巧",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1049,
    "kanji": "己 (已, 巳)",
    "displayReading": "Bộ Kỷ",
    "displayReadingEn": "Radical 49 · Oneself",
    "displayReadingFr": "Clé 49 · Soi-même",
    "displayReadingEs": "Radical 49 · Uno mismo",
    "displayReadingKo": "부수 49 · 몸 기",
    "readings": [
      "Kỷ"
    ],
    "meaning": "Bản thân mình",
    "meaningEn": "Oneself, self",
    "meaningFr": "Soi-même, corps",
    "meaningEs": "Uno mismo, propio cuerpo",
    "meaningKo": "자기, 몸",
    "examples": "己, 巻, 改, 配",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1050,
    "kanji": "巾",
    "displayReading": "Bộ Cân",
    "displayReadingEn": "Radical 50 · Turban",
    "displayReadingFr": "Clé 50 · Étoffe",
    "displayReadingEs": "Radical 50 · Tela",
    "displayReadingKo": "부수 50 · 수건 건",
    "readings": [
      "Cân"
    ],
    "meaning": "Cái khăn, vải vóc",
    "meaningEn": "Cloth, towel, scarf",
    "meaningFr": "Linge, tissu, écharpe",
    "meaningEs": "Paño, tela, pañuelo",
    "meaningKo": "수건, 천, 옷감",
    "examples": "市, 布, 席, 帯, 帰",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1051,
    "kanji": "干",
    "displayReading": "Bộ Can",
    "displayReadingEn": "Radical 51 · Dry",
    "displayReadingFr": "Clé 51 · Sec",
    "displayReadingEs": "Radical 51 · Seco",
    "displayReadingKo": "부수 51 · 방패 간",
    "readings": [
      "Can"
    ],
    "meaning": "Khô ráo, can thiệp, cái khiên",
    "meaningEn": "Dry, interfere, shield",
    "meaningFr": "Sec, bouclier, intervenir",
    "meaningEs": "Seco, escudo, intervenir",
    "meaningKo": "방패, 마르다, 간섭하다",
    "examples": "干, 平, 年, 幸, 幹",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1052,
    "kanji": "幺",
    "displayReading": "Bộ Yêu",
    "displayReadingEn": "Radical 52 · Short thread",
    "displayReadingFr": "Clé 52 · Fil fin",
    "displayReadingEs": "Radical 52 · Hilo fino",
    "displayReadingKo": "부수 52 · 작을 요",
    "readings": [
      "Yêu"
    ],
    "meaning": "Nhỏ nhắn, sợi tơ nhỏ",
    "meaningEn": "Tiny, fine silk thread",
    "meaningFr": "Minuscule, fil de soie fin",
    "meaningEs": "Diminuto, hilo de seda corto",
    "meaningKo": "작다, 가는 실",
    "examples": "幼, 幾, 幻, 幽",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1053,
    "kanji": "广",
    "displayReading": "Bộ Nghiễm",
    "displayReadingEn": "Radical 53 · Dotted cliff",
    "displayReadingFr": "Clé 53 · Toit en pente",
    "displayReadingEs": "Radical 53 · Tejado inclinado",
    "displayReadingKo": "부수 53 · 엄호 엄",
    "readings": [
      "Nghiễm"
    ],
    "meaning": "Mái nhà, tòa nhà",
    "meaningEn": "Slanted roof, building",
    "meaningFr": "Abri sous toit, bâtiment",
    "meaningEs": "Refugio bajo techo, edificio",
    "meaningKo": "돌집, 큰 지붕 건물",
    "examples": "広, 店, 度, 庫, 庭",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1054,
    "kanji": "廴",
    "displayReading": "Bộ Dẫn",
    "displayReadingEn": "Radical 54 · Long stride",
    "displayReadingFr": "Clé 54 · Long pas",
    "displayReadingEs": "Radical 54 · Paso largo",
    "displayReadingKo": "부수 54 · 민책받침 인",
    "readings": [
      "Dẫn"
    ],
    "meaning": "Bước dài",
    "meaningEn": "Long stride, move forward",
    "meaningFr": "Avancer à grands pas",
    "meaningEs": "Avanzar a grandes pasos",
    "meaningKo": "길게 걷다, 나아가다",
    "examples": "建, 延, 廷",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1055,
    "kanji": "廾",
    "displayReading": "Bộ Củng",
    "displayReadingEn": "Radical 55 · Arch",
    "displayReadingFr": "Clé 55 · Mains jointes",
    "displayReadingEs": "Radical 55 · Manos juntas",
    "displayReadingKo": "부수 55 · 스물입발 공",
    "readings": [
      "Củng"
    ],
    "meaning": "Chắp hai tay",
    "meaningEn": "Joined hands",
    "meaningFr": "Joindre les deux mains",
    "meaningEs": "Juntar ambas manos",
    "meaningKo": "두 손으로 받들다",
    "examples": "弁, 弄, 弊",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1056,
    "kanji": "弋",
    "displayReading": "Bộ Dặc",
    "displayReadingEn": "Radical 56 · Shoot",
    "displayReadingFr": "Clé 56 · Tirer à l'arc",
    "displayReadingEs": "Radical 56 · Disparo con arco",
    "displayReadingKo": "부수 56 · 주살 익",
    "readings": [
      "Dặc"
    ],
    "meaning": "Bắn tên, cái cọc",
    "meaningEn": "Shoot arrow, stake",
    "meaningFr": "Flèche à fil, pieu",
    "meaningEs": "Flecha con cuerda, estaca",
    "meaningKo": "주살(줄 달린 화살)",
    "examples": "式, 弐, 鳶",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1057,
    "kanji": "弓",
    "displayReading": "Bộ Cung",
    "displayReadingEn": "Radical 57 · Bow",
    "displayReadingFr": "Clé 57 · Arc",
    "displayReadingEs": "Radical 57 · Arco",
    "displayReadingKo": "부수 57 · 활 궁",
    "readings": [
      "Cung"
    ],
    "meaning": "Cái cung tên",
    "meaningEn": "Bow (weapon)",
    "meaningFr": "Arc (arme)",
    "meaningEs": "Arco (arma)",
    "meaningKo": "활",
    "examples": "弓, 引, 強, 弱, 張",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1058,
    "kanji": "彐 (彑)",
    "displayReading": "Bộ Kệ",
    "displayReadingEn": "Radical 58 · Snout",
    "displayReadingFr": "Clé 58 · Groin",
    "displayReadingEs": "Radical 58 · Hocico",
    "displayReadingKo": "부수 58 · 돼지머리 계",
    "readings": [
      "Kệ"
    ],
    "meaning": "Đầu con nhím / lợn",
    "meaningEn": "Pig's snout / hedgehog head",
    "meaningFr": "Tête de porc / hérisson",
    "meaningEs": "Cabeza de cerdo / erizo",
    "meaningKo": "돼지 머리",
    "examples": "帰, 録, 当, 雪",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1059,
    "kanji": "彡",
    "displayReading": "Bộ Sam",
    "displayReadingEn": "Radical 59 · Bristle",
    "displayReadingFr": "Clé 59 · Poils",
    "displayReadingEs": "Radical 59 · Cerdas / Plumas",
    "displayReadingKo": "부수 59 · 터럭 삼",
    "readings": [
      "Sam"
    ],
    "meaning": "Lông tóc, hoa văn, nét trang trí",
    "meaningEn": "Hair, feathers, pattern",
    "meaningFr": "Poils, plumes, ornement",
    "meaningEs": "Pelo, plumas, adorno",
    "meaningKo": "긴 털, 무늬, 장식",
    "examples": "形, 影, 彩, 彫",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1060,
    "kanji": "彳",
    "displayReading": "Bộ Xích",
    "displayReadingEn": "Radical 60 · Step",
    "displayReadingFr": "Clé 60 · Petit pas",
    "displayReadingEs": "Radical 60 · Paso corto",
    "displayReadingKo": "부수 60 · 두인변 척",
    "readings": [
      "Xích"
    ],
    "meaning": "Bước chân trái, đi lại",
    "meaningEn": "Left step, walk",
    "meaningFr": "Pas du pied gauche, marcher",
    "meaningEs": "Paso con el pie izquierdo, caminar",
    "meaningKo": "조금 걷다, 길",
    "examples": "行, 待, 後, 彼, 役",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1061,
    "kanji": "心 (忄, ⺗)",
    "displayReading": "Bộ Tâm",
    "displayReadingEn": "Radical 61 · Heart",
    "displayReadingFr": "Clé 61 · Cœur",
    "displayReadingEs": "Radical 61 · Corazón",
    "displayReadingKo": "부수 61 · 마음 심",
    "readings": [
      "Tâm"
    ],
    "meaning": "Trái tim, tâm trí, cảm xúc",
    "meaningEn": "Heart, mind, emotion",
    "meaningFr": "Cœur, esprit, émotion",
    "meaningEs": "Corazón, mente, emoción",
    "meaningKo": "마음, 심장, 감정",
    "examples": "心, 思, 忙, 怖, 情",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1062,
    "kanji": "戈",
    "displayReading": "Bộ Qua",
    "displayReadingEn": "Radical 62 · Halberd",
    "displayReadingFr": "Clé 62 · Hallebarde",
    "displayReadingEs": "Radical 62 · Alabarda",
    "displayReadingKo": "부수 62 · 창 과",
    "readings": [
      "Qua"
    ],
    "meaning": "Cây qua (vũ khí cổ)",
    "meaningEn": "Halberd (ancient spear-axe)",
    "meaningFr": "Hallebarde, lance ancienne",
    "meaningEs": "Alabarda, lanza antigua",
    "meaningKo": "창, 무기",
    "examples": "戦, 成, 我, 戒, 戯",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1063,
    "kanji": "戸 (戶)",
    "displayReading": "Bộ Hộ",
    "displayReadingEn": "Radical 63 · Door",
    "displayReadingFr": "Clé 63 · Porte",
    "displayReadingEs": "Radical 63 · Puerta",
    "displayReadingKo": "부수 63 · 지게문 호",
    "readings": [
      "Hộ"
    ],
    "meaning": "Cửa một cánh, hộ gia đình",
    "meaningEn": "Single-leaf door, household",
    "meaningFr": "Porte à un battant, foyer",
    "meaningEs": "Puerta de una hoja, hogar",
    "meaningKo": "외짝 문, 집, 가구",
    "examples": "戸, 所, 戻, 房, 扇",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1064,
    "kanji": "手 (扌, 龵)",
    "displayReading": "Bộ Thủ",
    "displayReadingEn": "Radical 64 · Hand",
    "displayReadingFr": "Clé 64 · Main",
    "displayReadingEs": "Radical 64 · Mano",
    "displayReadingKo": "부수 64 · 손 수",
    "readings": [
      "Thủ"
    ],
    "meaning": "Bàn tay, hành động bằng tay",
    "meaningEn": "Hand, manual action",
    "meaningFr": "Main, action manuelle",
    "meaningEs": "Mano, acción manual",
    "meaningKo": "손, 손동작",
    "examples": "手, 持, 打, 押, 投",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1065,
    "kanji": "支",
    "displayReading": "Bộ Chi",
    "displayReadingEn": "Radical 65 · Branch",
    "displayReadingFr": "Clé 65 · Branche",
    "displayReadingEs": "Radical 65 · Rama",
    "displayReadingKo": "부수 65 · 지탱할 지",
    "readings": [
      "Chi"
    ],
    "meaning": "Cành nhánh, chống đỡ",
    "meaningEn": "Branch, support",
    "meaningFr": "Branche, soutenir",
    "meaningEs": "Rama, sostener",
    "meaningKo": "가지, 지탱하다",
    "examples": "支, 技, 枝",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1066,
    "kanji": "攴 (攵)",
    "displayReading": "Bộ Phộc",
    "displayReadingEn": "Radical 66 · Rap",
    "displayReadingFr": "Clé 66 · Frapper",
    "displayReadingEs": "Radical 66 · Golpear",
    "displayReadingKo": "부수 66 · 칠 복",
    "readings": [
      "Phộc"
    ],
    "meaning": "Đánh khẽ, gõ",
    "meaningEn": "Tap lightly, strike",
    "meaningFr": "Tapoter, frapper légèrement",
    "meaningEs": "Dar golpecitos, golpear",
    "meaningKo": "가볍게 치다, 두드리다",
    "examples": "教, 政, 放, 数, 改",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1067,
    "kanji": "文",
    "displayReading": "Bộ Văn",
    "displayReadingEn": "Radical 67 · Script",
    "displayReadingFr": "Clé 67 · Écriture",
    "displayReadingEs": "Radical 67 · Escritura",
    "displayReadingKo": "부수 67 · 글월 문",
    "readings": [
      "Văn"
    ],
    "meaning": "Văn chương, chữ viết, hoa văn",
    "meaningEn": "Literature, writing, pattern",
    "meaningFr": "Texte, lettres, motif",
    "meaningEs": "Texto, letras, diseño",
    "meaningKo": "글, 문자, 무늬",
    "examples": "文, 対, 紋, 斎",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1068,
    "kanji": "斗",
    "displayReading": "Bộ Đẩu",
    "displayReadingEn": "Radical 68 · Dipper",
    "displayReadingFr": "Clé 68 · Boisseau",
    "displayReadingEs": "Radical 68 · Cucharón",
    "displayReadingKo": "부수 68 · 말 두",
    "readings": [
      "Đẩu"
    ],
    "meaning": "Cái đấu (dụng cụ đong lường)",
    "meaningEn": "Dipper, ladle (measuring unit)",
    "meaningFr": "Louche, mesure à grain",
    "meaningEs": "Cucharón, medida de grano",
    "meaningKo": "말(곡식 단위), 국자",
    "examples": "料, 斜, 斡",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1069,
    "kanji": "斤",
    "displayReading": "Bộ Cân",
    "displayReadingEn": "Radical 69 · Axe",
    "displayReadingFr": "Clé 69 · Hache",
    "displayReadingEs": "Radical 69 · Hacha",
    "displayReadingKo": "부수 69 · 도끼 근",
    "readings": [
      "Cân"
    ],
    "meaning": "Cái rìu, đơn vị cân",
    "meaningEn": "Axe, unit of weight",
    "meaningFr": "Hache, livre (poids)",
    "meaningEs": "Hacha, libra (peso)",
    "meaningKo": "도끼, 근(무게 단위)",
    "examples": "新, 近, 断, 折, 所",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1070,
    "kanji": "方",
    "displayReading": "Bộ Phương",
    "displayReadingEn": "Radical 70 · Square",
    "displayReadingFr": "Clé 70 · Direction",
    "displayReadingEs": "Radical 70 · Dirección",
    "displayReadingKo": "부수 70 · 모 방",
    "readings": [
      "Phương"
    ],
    "meaning": "Phương hướng, vuông vức",
    "meaningEn": "Direction, square",
    "meaningFr": "Direction, carré",
    "meaningEs": "Dirección, cuadrado",
    "meaningKo": "방향, 네모",
    "examples": "方, 旅, 族, 旗, 放",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1071,
    "kanji": "无 (旡)",
    "displayReading": "Bộ Vô",
    "displayReadingEn": "Radical 71 · Not",
    "displayReadingFr": "Clé 71 · Sans",
    "displayReadingEs": "Radical 71 · Sin",
    "displayReadingKo": "부수 71 · 없을 무",
    "readings": [
      "Vô"
    ],
    "meaning": "Không có",
    "meaningEn": "Not, have not",
    "meaningFr": "Ne pas avoir, néant",
    "meaningEs": "No tener, nada",
    "meaningKo": "없다",
    "examples": "既, 無",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1072,
    "kanji": "日",
    "displayReading": "Bộ Nhật",
    "displayReadingEn": "Radical 72 · Sun",
    "displayReadingFr": "Clé 72 · Soleil",
    "displayReadingEs": "Radical 72 · Sol",
    "displayReadingKo": "부수 72 · 날 일",
    "readings": [
      "Nhật"
    ],
    "meaning": "Mặt trời, ngày, thời gian",
    "meaningEn": "Sun, day, time",
    "meaningFr": "Soleil, jour, temps",
    "meaningEs": "Sol, día, tiempo",
    "meaningKo": "해, 날, 시간",
    "examples": "日, 明, 時, 晴, 昨",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1073,
    "kanji": "曰",
    "displayReading": "Bộ Viết",
    "displayReadingEn": "Radical 73 · Say",
    "displayReadingFr": "Clé 73 · Dire",
    "displayReadingEs": "Radical 73 · Decir",
    "displayReadingKo": "부수 73 · 가로 왈",
    "readings": [
      "Viết"
    ],
    "meaning": "Nói rằng",
    "meaningEn": "Say, speak",
    "meaningFr": "Dire, parler",
    "meaningEs": "Decir, hablar",
    "meaningKo": "말하다",
    "examples": "書, 最, 曲, 更",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1074,
    "kanji": "月",
    "displayReading": "Bộ Nguyệt",
    "displayReadingEn": "Radical 74 · Moon",
    "displayReadingFr": "Clé 74 · Lune",
    "displayReadingEs": "Radical 74 · Luna",
    "displayReadingKo": "부수 74 · 달 월",
    "readings": [
      "Nguyệt"
    ],
    "meaning": "Mặt trăng, tháng (hoặc bộ Nhục - thịt)",
    "meaningEn": "Moon, month (or flesh)",
    "meaningFr": "Lune, mois (ou chair)",
    "meaningEs": "Luna, mes (o carne)",
    "meaningKo": "달, 세월 (또는 고기 육)",
    "examples": "月, 朝, 期, 有, 望",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1075,
    "kanji": "木",
    "displayReading": "Bộ Mộc",
    "displayReadingEn": "Radical 75 · Tree",
    "displayReadingFr": "Clé 75 · Arbre",
    "displayReadingEs": "Radical 75 · Árbol",
    "displayReadingKo": "부수 75 · 나무 목",
    "readings": [
      "Mộc"
    ],
    "meaning": "Cây cối, gỗ",
    "meaningEn": "Tree, wood",
    "meaningFr": "Arbre, bois",
    "meaningEs": "Árbol, madera",
    "meaningKo": "나무, 목재",
    "examples": "木, 林, 森, 机, 本",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1076,
    "kanji": "欠",
    "displayReading": "Bộ Khiếm",
    "displayReadingEn": "Radical 76 · Lack",
    "displayReadingFr": "Clé 76 · Bâiller",
    "displayReadingEs": "Radical 76 · Bostezar",
    "displayReadingKo": "부수 76 · 하품 흠",
    "readings": [
      "Khiếm"
    ],
    "meaning": "Khiếm khuyết, ngáp, thiếu thốn",
    "meaningEn": "Lack, yawn, owe",
    "meaningFr": "Manquer, bâiller, devoir",
    "meaningEs": "Faltar, bostezar, deber",
    "meaningKo": "하품하다, 모자라다",
    "examples": "欠, 次, 歌, 飲, 欲",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1077,
    "kanji": "止",
    "displayReading": "Bộ Chỉ",
    "displayReadingEn": "Radical 77 · Stop",
    "displayReadingFr": "Clé 77 · Arrêter",
    "displayReadingEs": "Radical 77 · Detenerse",
    "displayReadingKo": "부수 77 · 그칠 지",
    "readings": [
      "Chỉ"
    ],
    "meaning": "Dừng lại, bàn chân",
    "meaningEn": "Stop, foot",
    "meaningFr": "S'arrêter, empreinte de pied",
    "meaningEs": "Detenerse, huella del pie",
    "meaningKo": "멈추다, 발자국",
    "examples": "止, 正, 歩, 武, 歳",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1078,
    "kanji": "歹 (歺)",
    "displayReading": "Bộ Đãi",
    "displayReadingEn": "Radical 78 · Death",
    "displayReadingFr": "Clé 78 · Os brisé",
    "displayReadingEs": "Radical 78 · Hueso roto",
    "displayReadingKo": "부수 78 · 죽을 사 / 뼈앙상할 알",
    "readings": [
      "Đãi"
    ],
    "meaning": "Xương tàn, chết chóc",
    "meaningEn": "Broken bones, death",
    "meaningFr": "Os brisé, mort, mauvais",
    "meaningEs": "Hueso roto, muerte, malo",
    "meaningKo": "부서진 뼈, 죽음",
    "examples": "死, 残, 殖, 殊",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1079,
    "kanji": "殳",
    "displayReading": "Bộ Thù",
    "displayReadingEn": "Radical 79 · Weapon",
    "displayReadingFr": "Clé 79 · Arme",
    "displayReadingEs": "Radical 79 · Arma",
    "displayReadingKo": "부수 79 · 갖은등글월 수",
    "readings": [
      "Thù"
    ],
    "meaning": "Binh khí dài, đánh đập",
    "meaningEn": "Long polearm, strike",
    "meaningFr": "Bâton de combat, frapper",
    "meaningEs": "Vara de combate, golpear",
    "meaningKo": "창 자루, 치다",
    "examples": "段, 殺, 殿, 設, 役",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1080,
    "kanji": "毋 (母)",
    "displayReading": "Bộ Vô / Mẫu",
    "displayReadingEn": "Radical 80 · Do not",
    "displayReadingFr": "Clé 80 · Ne pas / Mère",
    "displayReadingEs": "Radical 80 · No / Madre",
    "displayReadingKo": "부수 80 · 말 무",
    "readings": [
      "Vô / Mẫu"
    ],
    "meaning": "Chớ, đừng / Người mẹ",
    "meaningEn": "Do not / Mother",
    "meaningFr": "Interdiction / Mère",
    "meaningEs": "Prohibición / Madre",
    "meaningKo": "하지 말다, 금지 / 어머니",
    "examples": "母, 毎, 毒, 貫",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1081,
    "kanji": "比",
    "displayReading": "Bộ Tỷ",
    "displayReadingEn": "Radical 81 · Compare",
    "displayReadingFr": "Clé 81 · Comparer",
    "displayReadingEs": "Radical 81 · Comparar",
    "displayReadingKo": "부수 81 · 견줄 비",
    "readings": [
      "Tỷ"
    ],
    "meaning": "So sánh, kề bên",
    "meaningEn": "Compare, side by side",
    "meaningFr": "Comparer, côte à côte",
    "meaningEs": "Comparar, lado a lado",
    "meaningKo": "비교하다, 나란히 서다",
    "examples": "比, 皆, 昆",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1082,
    "kanji": "毛",
    "displayReading": "Bộ Mao",
    "displayReadingEn": "Radical 82 · Fur",
    "displayReadingFr": "Clé 82 · Fourrure",
    "displayReadingEs": "Radical 82 · Pelaje",
    "displayReadingKo": "부수 82 · 터럭 모",
    "readings": [
      "Mao"
    ],
    "meaning": "Lông, tóc",
    "meaningEn": "Fur, hair",
    "meaningFr": "Poil, fourrure, laine",
    "meaningEs": "Pelo, pelaje, lana",
    "meaningKo": "털, 깃털",
    "examples": "毛, 尾, 筆, 耗",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1083,
    "kanji": "氏",
    "displayReading": "Bộ Thị",
    "displayReadingEn": "Radical 83 · Clan",
    "displayReadingFr": "Clé 83 · Clan",
    "displayReadingEs": "Radical 83 · Clan",
    "displayReadingKo": "부수 83 · 각시 씨",
    "readings": [
      "Thị"
    ],
    "meaning": "Họ, dòng tộc",
    "meaningEn": "Clan, family name",
    "meaningFr": "Clan, nom de famille",
    "meaningEs": "Clan, apellido",
    "meaningKo": "성씨, 가문",
    "examples": "氏, 民, 紙",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1084,
    "kanji": "气",
    "displayReading": "Bộ Khí",
    "displayReadingEn": "Radical 84 · Steam",
    "displayReadingFr": "Clé 84 · Vapeur",
    "displayReadingEs": "Radical 84 · Vapor",
    "displayReadingKo": "부수 84 · 기운 기",
    "readings": [
      "Khí"
    ],
    "meaning": "Hơi, không khí",
    "meaningEn": "Steam, air, breath",
    "meaningFr": "Vapeur, air, souffle",
    "meaningEs": "Vapor, aire, aliento",
    "meaningKo": "기운, 수증기, 공기",
    "examples": "気, 汽, 雰",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1085,
    "kanji": "水 (氵, 氺)",
    "displayReading": "Bộ Thủy",
    "displayReadingEn": "Radical 85 · Water",
    "displayReadingFr": "Clé 85 · Eau",
    "displayReadingEs": "Radical 85 · Agua",
    "displayReadingKo": "부수 85 · 물 수",
    "readings": [
      "Thủy"
    ],
    "meaning": "Nước, chất lỏng",
    "meaningEn": "Water, liquid",
    "meaningFr": "Eau, liquide",
    "meaningEs": "Agua, líquido",
    "meaningKo": "물, 액체",
    "examples": "水, 海, 泳, 洗, 池",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1086,
    "kanji": "火 (灬)",
    "displayReading": "Bộ Hỏa",
    "displayReadingEn": "Radical 86 · Fire",
    "displayReadingFr": "Clé 86 · Feu",
    "displayReadingEs": "Radical 86 · Fuego",
    "displayReadingKo": "부수 86 · 불 화",
    "readings": [
      "Hỏa"
    ],
    "meaning": "Lửa, nhiệt độ",
    "meaningEn": "Fire, heat",
    "meaningFr": "Feu, flamme, chaleur",
    "meaningEs": "Fuego, llama, calor",
    "meaningKo": "불, 열기",
    "examples": "火, 焼, 熱, 燃, 煙",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1087,
    "kanji": "爪 (爫)",
    "displayReading": "Bộ Trảo",
    "displayReadingEn": "Radical 87 · Claw",
    "displayReadingFr": "Clé 87 · Griffe",
    "displayReadingEs": "Radical 87 · Garra",
    "displayReadingKo": "부수 87 · 손톱 조",
    "readings": [
      "Trảo"
    ],
    "meaning": "Móng vuốt",
    "meaningEn": "Claw, nail",
    "meaningFr": "Griffe, ongle",
    "meaningEs": "Garra, uña",
    "meaningKo": "손톱, 발톱",
    "examples": "爪, 愛, 受, 採, 争",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1088,
    "kanji": "父",
    "displayReading": "Bộ Phụ",
    "displayReadingEn": "Radical 88 · Father",
    "displayReadingFr": "Clé 88 · Père",
    "displayReadingEs": "Radical 88 · Padre",
    "displayReadingKo": "부수 88 · 아비 부",
    "readings": [
      "Phụ"
    ],
    "meaning": "Người cha",
    "meaningEn": "Father",
    "meaningFr": "Père",
    "meaningEs": "Padre",
    "meaningKo": "아버지",
    "examples": "父, 釜, 爺",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1089,
    "kanji": "爻",
    "displayReading": "Bộ Hào",
    "displayReadingEn": "Radical 89 · Double X",
    "displayReadingFr": "Clé 89 · Entrecroiser",
    "displayReadingEs": "Radical 89 · Entrecruzar",
    "displayReadingKo": "부수 89 · 점괘 효",
    "readings": [
      "Hào"
    ],
    "meaning": "Hào trong Kinh Dịch, đan xen",
    "meaningEn": "Trigram lines, intertwine",
    "meaningFr": "Lignes croisées, mêler",
    "meaningEs": "Líneas cruzadas, mezclar",
    "meaningKo": "사귀다, 엇갈리다",
    "examples": "爽, 爾",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1090,
    "kanji": "爿 (丬)",
    "displayReading": "Bộ Tường",
    "displayReadingEn": "Radical 90 · Half tree trunk",
    "displayReadingFr": "Clé 90 · Planche",
    "displayReadingEs": "Radical 90 · Tablón",
    "displayReadingKo": "부수 90 · 장수 장 / 조각 널 장",
    "readings": [
      "Tường"
    ],
    "meaning": "Mảnh gỗ, cái giường",
    "meaningEn": "Split wood, bed",
    "meaningFr": "Bois fendu, lit",
    "meaningEs": "Madera partida, cama",
    "meaningKo": "쪼갠 나무, 침상",
    "examples": "壮, 状, 将, 装",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1091,
    "kanji": "片",
    "displayReading": "Bộ Phiến",
    "displayReadingEn": "Radical 91 · Slice",
    "displayReadingFr": "Clé 91 · Tranche",
    "displayReadingEs": "Radical 91 · Lámina",
    "displayReadingKo": "부수 91 · 조각 편",
    "readings": [
      "Phiến"
    ],
    "meaning": "Mảnh, tấm, một phía",
    "meaningEn": "Slice, piece, one side",
    "meaningFr": "Planche, feuillet, morceau",
    "meaningEs": "Tabla, lámina, trozo",
    "meaningKo": "나무 조각, 판",
    "examples": "片, 版, 牌",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1092,
    "kanji": "牙",
    "displayReading": "Bộ Nha",
    "displayReadingEn": "Radical 92 · Fang",
    "displayReadingFr": "Clé 92 · Croc",
    "displayReadingEs": "Radical 92 · Colmillo",
    "displayReadingKo": "부수 92 · 어금니 아",
    "readings": [
      "Nha"
    ],
    "meaning": "Răng nanh",
    "meaningEn": "Fang, tusk",
    "meaningFr": "Croc, défense",
    "meaningEs": "Colmillo",
    "meaningKo": "어금니, 송곳니",
    "examples": "牙, 芽, 邪",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1093,
    "kanji": "牛 (牜)",
    "displayReading": "Bộ Ngưu",
    "displayReadingEn": "Radical 93 · Cow",
    "displayReadingFr": "Clé 93 · Bœuf",
    "displayReadingEs": "Radical 93 · Buey",
    "displayReadingKo": "부수 93 · 소 우",
    "readings": [
      "Ngưu"
    ],
    "meaning": "Con trâu, con bò",
    "meaningEn": "Cow, ox, cattle",
    "meaningFr": "Vache, bœuf, bétail",
    "meaningEs": "Vaca, buey, ganado",
    "meaningKo": "소, 가축",
    "examples": "牛, 物, 特, 牧, 犠",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1094,
    "kanji": "犬 (犭)",
    "displayReading": "Bộ Khuyển",
    "displayReadingEn": "Radical 94 · Dog",
    "displayReadingFr": "Clé 94 · Chien",
    "displayReadingEs": "Radical 94 · Perro",
    "displayReadingKo": "부수 94 · 개 견",
    "readings": [
      "Khuyển"
    ],
    "meaning": "Con chó, loài thú",
    "meaningEn": "Dog, beast",
    "meaningFr": "Chien, fauve",
    "meaningEs": "Perro, fiera",
    "meaningKo": "개, 짐승",
    "examples": "犬, 猫, 独, 犯, 狂",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1095,
    "kanji": "玄",
    "displayReading": "Bộ Huyền",
    "displayReadingEn": "Radical 95 · Profound",
    "displayReadingFr": "Clé 95 · Mystérieux",
    "displayReadingEs": "Radical 95 · Misterioso",
    "displayReadingKo": "부수 95 · 검을 현",
    "readings": [
      "Huyền"
    ],
    "meaning": "Màu đen huyền, huyền bí",
    "meaningEn": "Dark black, mysterious",
    "meaningFr": "Noir profond, mystérieux",
    "meaningEs": "Negro profundo, misterioso",
    "meaningKo": "검다, 현묘하다",
    "examples": "玄, 率, 弦",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1096,
    "kanji": "玉 (王)",
    "displayReading": "Bộ Ngọc",
    "displayReadingEn": "Radical 96 · Jade",
    "displayReadingFr": "Clé 96 · Jade",
    "displayReadingEs": "Radical 96 · Jade",
    "displayReadingKo": "부수 96 · 구슬 옥",
    "readings": [
      "Ngọc"
    ],
    "meaning": "Đá quý, ngọc báu",
    "meaningEn": "Jade, gem, jewel",
    "meaningFr": "Jade, pierre précieuse",
    "meaningEs": "Jade, piedra preciosa",
    "meaningKo": "옥, 보석",
    "examples": "玉, 王, 現, 理, 球",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1097,
    "kanji": "瓜",
    "displayReading": "Bộ Qua",
    "displayReadingEn": "Radical 97 · Melon",
    "displayReadingFr": "Clé 97 · Melon",
    "displayReadingEs": "Radical 97 · Melón",
    "displayReadingKo": "부수 97 · 오이 과",
    "readings": [
      "Qua"
    ],
    "meaning": "Quả dưa",
    "meaningEn": "Melon, gourd",
    "meaningFr": "Melon, courge",
    "meaningEs": "Melón, calabaza",
    "meaningKo": "오이, 참외, 박과",
    "examples": "瓜, 孤, 弧",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1098,
    "kanji": "瓦",
    "displayReading": "Bộ Ngõa",
    "displayReadingEn": "Radical 98 · Tile",
    "displayReadingFr": "Clé 98 · Tuile",
    "displayReadingEs": "Radical 98 · Teja",
    "displayReadingKo": "부수 98 · 기와 와",
    "readings": [
      "Ngõa"
    ],
    "meaning": "Ngói lợp nhà, đồ gốm",
    "meaningEn": "Roof tile, pottery",
    "meaningFr": "Tuile, céramique",
    "meaningEs": "Teja, cerámica",
    "meaningKo": "기와, 도자기",
    "examples": "瓦, 瓶, 瓷",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1099,
    "kanji": "甘",
    "displayReading": "Bộ Cam",
    "displayReadingEn": "Radical 99 · Sweet",
    "displayReadingFr": "Clé 99 · Doux",
    "displayReadingEs": "Radical 99 · Dulce",
    "displayReadingKo": "부수 99 · 달 감",
    "readings": [
      "Cam"
    ],
    "meaning": "Ngọt ngào",
    "meaningEn": "Sweet",
    "meaningFr": "Sucré, doux",
    "meaningEs": "Dulce, sabroso",
    "meaningKo": "달다, 맛있다",
    "examples": "甘, 甚, 某",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1100,
    "kanji": "生",
    "displayReading": "Bộ Sinh",
    "displayReadingEn": "Radical 100 · Life",
    "displayReadingFr": "Clé 100 · Vie",
    "displayReadingEs": "Radical 100 · Vida",
    "displayReadingKo": "부수 100 · 날 생",
    "readings": [
      "Sinh"
    ],
    "meaning": "Sinh sống, sinh ra, tươi sống",
    "meaningEn": "Life, birth, raw",
    "meaningFr": "Naître, vivre, cru",
    "meaningEs": "Nacer, vivir, crudo",
    "meaningKo": "태어나다, 살다, 날것",
    "examples": "生, 産, 星, 性",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1101,
    "kanji": "用",
    "displayReading": "Bộ Dụng",
    "displayReadingEn": "Radical 101 · Use",
    "displayReadingFr": "Clé 101 · Utiliser",
    "displayReadingEs": "Radical 101 · Usar",
    "displayReadingKo": "부수 101 · 쓸 용",
    "readings": [
      "Dụng"
    ],
    "meaning": "Sử dụng, công dụng",
    "meaningEn": "Use, utility",
    "meaningFr": "Utiliser, usage",
    "meaningEs": "Usar, empleo",
    "meaningKo": "쓰다, 사용하다",
    "examples": "用, 庸, 備",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1102,
    "kanji": "田",
    "displayReading": "Bộ Điền",
    "displayReadingEn": "Radical 102 · Field",
    "displayReadingFr": "Clé 102 · Rizière",
    "displayReadingEs": "Radical 102 · Arrozal",
    "displayReadingKo": "부수 102 · 밭 전",
    "readings": [
      "Điền"
    ],
    "meaning": "Ruộng đồng",
    "meaningEn": "Rice field, farmland",
    "meaningFr": "Rizière, champ",
    "meaningEs": "Arrozal, campo de cultivo",
    "meaningKo": "밭, 논",
    "examples": "田, 男, 町, 界, 番",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1103,
    "kanji": "疋 (⺪)",
    "displayReading": "Bộ Sơ (Thất)",
    "displayReadingEn": "Radical 103 · Bolt of cloth",
    "displayReadingFr": "Clé 103 · Rouleau d'étoffe",
    "displayReadingEs": "Radical 103 · Rollo de tela",
    "displayReadingKo": "부수 103 · 짝 필",
    "readings": [
      "Sơ (Thất)"
    ],
    "meaning": "Đơn vị đo vải, bàn chân",
    "meaningEn": "Bolt of cloth, foot",
    "meaningFr": "Rouleau de tissu, pied",
    "meaningEs": "Rollo de tela, pie",
    "meaningKo": "옷감 한 필, 발",
    "examples": "疎, 疑, 楚",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1104,
    "kanji": "疒",
    "displayReading": "Bộ Nạch",
    "displayReadingEn": "Radical 104 · Sickness",
    "displayReadingFr": "Clé 104 · Maladie",
    "displayReadingEs": "Radical 104 · Enfermedad",
    "displayReadingKo": "부수 104 · 병질엄 녁",
    "readings": [
      "Nạch"
    ],
    "meaning": "Bệnh tật, đau ốm",
    "meaningEn": "Sickness, illness",
    "meaningFr": "Maladie, douleur",
    "meaningEs": "Enfermedad, dolor",
    "meaningKo": "병, 질병, 아프다",
    "examples": "病, 痛, 疲, 症, 療",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1105,
    "kanji": "癶",
    "displayReading": "Bộ Bát",
    "displayReadingEn": "Radical 105 · Dotted tent",
    "displayReadingFr": "Clé 105 · Pas écartés",
    "displayReadingEs": "Radical 105 · Pasos abiertos",
    "displayReadingKo": "부수 105 · 필발머리 발",
    "readings": [
      "Bát"
    ],
    "meaning": "Hai bàn chân bước ngược nhau",
    "meaningEn": "Feet stepping apart",
    "meaningFr": "Deux pieds opposés, monter",
    "meaningEs": "Dos pies opuestos, subir",
    "meaningKo": "두 발을 벌리다, 오르다",
    "examples": "発, 登",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1106,
    "kanji": "白",
    "displayReading": "Bộ Bạch",
    "displayReadingEn": "Radical 106 · White",
    "displayReadingFr": "Clé 106 · Blanc",
    "displayReadingEs": "Radical 106 · Blanco",
    "displayReadingKo": "부수 106 · 흰 백",
    "readings": [
      "Bạch"
    ],
    "meaning": "Màu trắng, rõ ràng",
    "meaningEn": "White, clear",
    "meaningFr": "Blanc, clair, pur",
    "meaningEs": "Blanco, claro, puro",
    "meaningKo": "희다, 밝다",
    "examples": "白, 百, 的, 皇, 皆",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1107,
    "kanji": "皮",
    "displayReading": "Bộ Bì",
    "displayReadingEn": "Radical 107 · Skin",
    "displayReadingFr": "Clé 107 · Peau",
    "displayReadingEs": "Radical 107 · Piel",
    "displayReadingKo": "부수 107 · 가죽 피",
    "readings": [
      "Bì"
    ],
    "meaning": "Da, vỏ ngoài",
    "meaningEn": "Skin, hide, bark",
    "meaningFr": "Peau, cuir, écorce",
    "meaningEs": "Piel, cuero, corteza",
    "meaningKo": "가죽, 껍질",
    "examples": "皮, 波, 破, 被",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1108,
    "kanji": "皿",
    "displayReading": "Bộ Mãnh",
    "displayReadingEn": "Radical 108 · Dish",
    "displayReadingFr": "Clé 108 · Plat",
    "displayReadingEs": "Radical 108 · Plato",
    "displayReadingKo": "부수 108 · 그릇 명",
    "readings": [
      "Mãnh"
    ],
    "meaning": "Cái đĩa, bát, đồ đựng",
    "meaningEn": "Dish, plate, vessel",
    "meaningFr": "Assiette, écuelle, récipient",
    "meaningEs": "Plato, cuenco, recipiente",
    "meaningKo": "그릇, 접시",
    "examples": "皿, 血, 盆, 盛, 監",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1109,
    "kanji": "目",
    "displayReading": "Bộ Mục",
    "displayReadingEn": "Radical 109 · Eye",
    "displayReadingFr": "Clé 109 · Œil",
    "displayReadingEs": "Radical 109 · Ojo",
    "displayReadingKo": "부수 109 · 눈 목",
    "readings": [
      "Mục"
    ],
    "meaning": "Con mắt, nhìn ngắm",
    "meaningEn": "Eye, look",
    "meaningFr": "Œil, regarder",
    "meaningEs": "Ojo, mirar",
    "meaningKo": "눈, 보다",
    "examples": "目, 見, 眠, 相, 省",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1110,
    "kanji": "矛",
    "displayReading": "Bộ Mâu",
    "displayReadingEn": "Radical 110 · Spear",
    "displayReadingFr": "Clé 110 · Lance",
    "displayReadingEs": "Radical 110 · Lanza",
    "displayReadingKo": "부수 110 · 창 모",
    "readings": [
      "Mâu"
    ],
    "meaning": "Cây giáo, cây mâu",
    "meaningEn": "Spear, lance",
    "meaningFr": "Lance, pique",
    "meaningEs": "Lanza, pica",
    "meaningKo": "창, 무기",
    "examples": "矛, 柔, 務, 霧",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1111,
    "kanji": "矢",
    "displayReading": "Bộ Thỉ",
    "displayReadingEn": "Radical 111 · Arrow",
    "displayReadingFr": "Clé 111 · Flèche",
    "displayReadingEs": "Radical 111 · Flecha",
    "displayReadingKo": "부수 111 · 화살 시",
    "readings": [
      "Thỉ"
    ],
    "meaning": "Mũi tên",
    "meaningEn": "Arrow, dart",
    "meaningFr": "Flèche",
    "meaningEs": "Flecha",
    "meaningKo": "화살",
    "examples": "矢, 知, 短, 族, 矯",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1112,
    "kanji": "石",
    "displayReading": "Bộ Thạch",
    "displayReadingEn": "Radical 112 · Stone",
    "displayReadingFr": "Clé 112 · Pierre",
    "displayReadingEs": "Radical 112 · Piedra",
    "displayReadingKo": "부수 112 · 돌 석",
    "readings": [
      "Thạch"
    ],
    "meaning": "Đá, tảng đá",
    "meaningEn": "Stone, rock",
    "meaningFr": "Pierre, roche",
    "meaningEs": "Piedra, roca",
    "meaningKo": "돌, 바위",
    "examples": "石, 砂, 研, 破, 確",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1113,
    "kanji": "示 (礻)",
    "displayReading": "Bộ Thị",
    "displayReadingEn": "Radical 113 · Spirit",
    "displayReadingFr": "Clé 113 · Autel",
    "displayReadingEs": "Radical 113 · Altar",
    "displayReadingKo": "부수 113 · 보일 시",
    "readings": [
      "Thị"
    ],
    "meaning": "Thần linh, lễ tế, chỉ bảo",
    "meaningEn": "Spirit, altar, show",
    "meaningFr": "Esprit, rite, montrer",
    "meaningEs": "Espíritu, rito, mostrar",
    "meaningKo": "제단, 신, 보이다",
    "examples": "示, 社, 神, 福, 礼",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1114,
    "kanji": "禸",
    "displayReading": "Bộ Nhựu",
    "displayReadingEn": "Radical 114 · Track",
    "displayReadingFr": "Clé 114 · Empreinte",
    "displayReadingEs": "Radical 114 · Huella",
    "displayReadingKo": "부수 114 · 짐승발자국 유",
    "readings": [
      "Nhựu"
    ],
    "meaning": "Vết chân thú",
    "meaningEn": "Animal footprint",
    "meaningFr": "Trace de pas d'animal",
    "meaningEs": "Rastro de pata animal",
    "meaningKo": "짐승 발자국",
    "examples": "離, 禹, 禽",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1115,
    "kanji": "禾",
    "displayReading": "Bộ Hòa",
    "displayReadingEn": "Radical 115 · Grain",
    "displayReadingFr": "Clé 115 · Céréale",
    "displayReadingEs": "Radical 115 · Cereal",
    "displayReadingKo": "부수 115 · 벼 화",
    "readings": [
      "Hòa"
    ],
    "meaning": "Cây lúa, ngũ cốc",
    "meaningEn": "Grain, rice plant",
    "meaningFr": "Plant de riz, céréale",
    "meaningEs": "Planta de arroz, grano",
    "meaningKo": "벼, 곡식",
    "examples": "秋, 科, 移, 税, 秒",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1116,
    "kanji": "穴",
    "displayReading": "Bộ Huyệt",
    "displayReadingEn": "Radical 116 · Cave",
    "displayReadingFr": "Clé 116 · Grotte",
    "displayReadingEs": "Radical 116 · Cueva",
    "displayReadingKo": "부수 116 · 구멍 혈",
    "readings": [
      "Huyệt"
    ],
    "meaning": "Hang động, cái lỗ",
    "meaningEn": "Cave, hole",
    "meaningFr": "Grotte, trou, cavité",
    "meaningEs": "Cueva, agujero, cavidad",
    "meaningKo": "구멍, 동굴",
    "examples": "穴, 空, 窓, 突, 究",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1117,
    "kanji": "立",
    "displayReading": "Bộ Lập",
    "displayReadingEn": "Radical 117 · Stand",
    "displayReadingFr": "Clé 117 · Debout",
    "displayReadingEs": "Radical 117 · De pie",
    "displayReadingKo": "부수 117 · 설 립",
    "readings": [
      "Lập"
    ],
    "meaning": "Đứng thẳng, thiết lập",
    "meaningEn": "Stand upright, establish",
    "meaningFr": "Se tenir debout, établir",
    "meaningEs": "Estar de pie, establecer",
    "meaningKo": "서다, 세우다",
    "examples": "立, 音, 章, 童, 競",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1118,
    "kanji": "竹 (⺮)",
    "displayReading": "Bộ Trúc",
    "displayReadingEn": "Radical 118 · Bamboo",
    "displayReadingFr": "Clé 118 · Bambou",
    "displayReadingEs": "Radical 118 · Bambú",
    "displayReadingKo": "부수 118 · 대 죽",
    "readings": [
      "Trúc"
    ],
    "meaning": "Cây tre, cây trúc",
    "meaningEn": "Bamboo",
    "meaningFr": "Bambou",
    "meaningEs": "Bambú",
    "meaningKo": "대나무",
    "examples": "竹, 笑, 第, 答, 筆",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1119,
    "kanji": "米",
    "displayReading": "Bộ Mễ",
    "displayReadingEn": "Radical 119 · Rice",
    "displayReadingFr": "Clé 119 · Riz",
    "displayReadingEs": "Radical 119 · Arroz",
    "displayReadingKo": "부수 119 · 쌀 미",
    "readings": [
      "Mễ"
    ],
    "meaning": "Hạt gạo",
    "meaningEn": "Rice grain",
    "meaningFr": "Grain de riz",
    "meaningEs": "Grano de arroz",
    "meaningKo": "쌀, 곡물",
    "examples": "米, 料, 粉, 精, 糖",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1120,
    "kanji": "糸 (糹)",
    "displayReading": "Bộ Mịch",
    "displayReadingEn": "Radical 120 · Silk",
    "displayReadingFr": "Clé 120 · Fil de soie",
    "displayReadingEs": "Radical 120 · Hilo de seda",
    "displayReadingKo": "부수 120 · 실 사",
    "readings": [
      "Mịch"
    ],
    "meaning": "Sợi tơ, dây, sự liên kết",
    "meaningEn": "Silk thread, string, connection",
    "meaningFr": "Fil, soie, lien",
    "meaningEs": "Hilo, seda, cuerda",
    "meaningKo": "실, 비단, 줄",
    "examples": "糸, 紙, 絵, 結, 続",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1121,
    "kanji": "缶",
    "displayReading": "Bộ Phẫu",
    "displayReadingEn": "Radical 121 · Jar",
    "displayReadingFr": "Clé 121 · Jarre",
    "displayReadingEs": "Radical 121 · Tinaja",
    "displayReadingKo": "부수 121 · 장군 부",
    "readings": [
      "Phẫu"
    ],
    "meaning": "Cái bình sành, đồ gốm",
    "meaningEn": "Earthenware jar, pottery",
    "meaningFr": "Jarre en terre cuite",
    "meaningEs": "Vasija de barro",
    "meaningKo": "질그릇, 항아리",
    "examples": "缶, 欠, 陶, 鬱",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1122,
    "kanji": "网 (罒, ⺳)",
    "displayReading": "Bộ Võng",
    "displayReadingEn": "Radical 122 · Net",
    "displayReadingFr": "Clé 122 · Filet",
    "displayReadingEs": "Radical 122 · Red",
    "displayReadingKo": "부수 122 · 그물 망",
    "readings": [
      "Võng"
    ],
    "meaning": "Cái lưới",
    "meaningEn": "Net, web",
    "meaningFr": "Filet",
    "meaningEs": "Red",
    "meaningKo": "그물",
    "examples": "買, 置, 罪, 罰, 署",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1123,
    "kanji": "羊 (⺶, ⺷)",
    "displayReading": "Bộ Dương",
    "displayReadingEn": "Radical 123 · Sheep",
    "displayReadingFr": "Clé 123 · Mouton",
    "displayReadingEs": "Radical 123 · Oveja",
    "displayReadingKo": "부수 123 · 양 양",
    "readings": [
      "Dương"
    ],
    "meaning": "Con cừu, con dê",
    "meaningEn": "Sheep, goat",
    "meaningFr": "Mouton, chèvre",
    "meaningEs": "Oveja, cabra",
    "meaningKo": "양",
    "examples": "羊, 美, 着, 義, 群",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1124,
    "kanji": "羽",
    "displayReading": "Bộ Vũ",
    "displayReadingEn": "Radical 124 · Feather",
    "displayReadingFr": "Clé 124 · Plume",
    "displayReadingEs": "Radical 124 · Pluma",
    "displayReadingKo": "부수 124 · 깃 우",
    "readings": [
      "Vũ"
    ],
    "meaning": "Lông vũ, đôi cánh",
    "meaningEn": "Feather, wings",
    "meaningFr": "Plume, ailes",
    "meaningEs": "Pluma, alas",
    "meaningKo": "깃털, 날개",
    "examples": "羽, 習, 翌, 翻, 翼",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1125,
    "kanji": "老 (耂)",
    "displayReading": "Bộ Lão",
    "displayReadingEn": "Radical 125 · Old",
    "displayReadingFr": "Clé 125 · Vieux",
    "displayReadingEs": "Radical 125 · Anciano",
    "displayReadingKo": "부수 125 · 늙을 로",
    "readings": [
      "Lão"
    ],
    "meaning": "Già cả, người lớn tuổi",
    "meaningEn": "Old, elderly",
    "meaningFr": "Âgé, vieillard",
    "meaningEs": "Viejo, anciano",
    "meaningKo": "늙다, 노인",
    "examples": "老, 考, 者, 孝",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1126,
    "kanji": "而",
    "displayReading": "Bộ Nhi",
    "displayReadingEn": "Radical 126 · And",
    "displayReadingFr": "Clé 126 · Et pourtant",
    "displayReadingEs": "Radical 126 · Y sin embargo",
    "displayReadingKo": "부수 126 · 말이을 이",
    "readings": [
      "Nhi"
    ],
    "meaning": "Mà, râu cằm",
    "meaningEn": "And, beard",
    "meaningFr": "Et pourtant, barbe",
    "meaningEs": "Y sin embargo, barba",
    "meaningKo": "말을 잇다, 수염",
    "examples": "耐, 端, 需",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1127,
    "kanji": "耒",
    "displayReading": "Bộ Lỗi",
    "displayReadingEn": "Radical 127 · Plow",
    "displayReadingFr": "Clé 127 · Charrue",
    "displayReadingEs": "Radical 127 · Arado",
    "displayReadingKo": "부수 127 · 쟁기 뢰",
    "readings": [
      "Lỗi"
    ],
    "meaning": "Cái cày",
    "meaningEn": "Plow",
    "meaningFr": "Charrue, labourer",
    "meaningEs": "Arado, labrar",
    "meaningKo": "쟁기, 밭을 갈다",
    "examples": "耕, 耗, 籍",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1128,
    "kanji": "耳",
    "displayReading": "Bộ Nhĩ",
    "displayReadingEn": "Radical 128 · Ear",
    "displayReadingFr": "Clé 128 · Oreille",
    "displayReadingEs": "Radical 128 · Oreja",
    "displayReadingKo": "부수 128 · 귀 이",
    "readings": [
      "Nhĩ"
    ],
    "meaning": "Cái tai, lắng nghe",
    "meaningEn": "Ear, listen",
    "meaningFr": "Oreille, écouter",
    "meaningEs": "Oreja, escuchar",
    "meaningKo": "귀, 듣다",
    "examples": "耳, 聞, 聴, 職, 聖",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1129,
    "kanji": "聿 (⺻)",
    "displayReading": "Bộ Duật",
    "displayReadingEn": "Radical 129 · Brush",
    "displayReadingFr": "Clé 129 · Pinceau",
    "displayReadingEs": "Radical 129 · Pincel",
    "displayReadingKo": "부수 129 · 붓 율",
    "readings": [
      "Duật"
    ],
    "meaning": "Cây bút viết",
    "meaningEn": "Writing brush",
    "meaningFr": "Pinceau d'écriture",
    "meaningEs": "Pincel de escritura",
    "meaningKo": "붓",
    "examples": "筆, 書, 建, 律, 津",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1130,
    "kanji": "肉 (月)",
    "displayReading": "Bộ Nhục",
    "displayReadingEn": "Radical 130 · Meat",
    "displayReadingFr": "Clé 130 · Chair",
    "displayReadingEs": "Radical 130 · Carne",
    "displayReadingKo": "부수 130 · 고기 육",
    "readings": [
      "Nhục"
    ],
    "meaning": "Thịt, bộ phận cơ thể",
    "meaningEn": "Meat, flesh, body part",
    "meaningFr": "Viande, chair, organe",
    "meaningEs": "Carne, órgano del cuerpo",
    "meaningKo": "고기, 살, 신체 기관",
    "examples": "肉, 腕, 腹, 胸, 育",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1131,
    "kanji": "臣",
    "displayReading": "Bộ Thần",
    "displayReadingEn": "Radical 131 · Minister",
    "displayReadingFr": "Clé 131 · Ministre",
    "displayReadingEs": "Radical 131 · Ministro",
    "displayReadingKo": "부수 131 · 신하 신",
    "readings": [
      "Thần"
    ],
    "meaning": "Bề tôi, quan lại",
    "meaningEn": "Minister, official, retainer",
    "meaningFr": "Ministre, serviteur",
    "meaningEs": "Ministro, súbdito",
    "meaningKo": "신하",
    "examples": "臣, 臨, 堅, 賢",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1132,
    "kanji": "自",
    "displayReading": "Bộ Tự",
    "displayReadingEn": "Radical 132 · Self",
    "displayReadingFr": "Clé 132 · Soi",
    "displayReadingEs": "Radical 132 · Sí mismo",
    "displayReadingKo": "부수 132 · 스스로 자",
    "readings": [
      "Tự"
    ],
    "meaning": "Tự mình, cái mũi",
    "meaningEn": "Self, nose",
    "meaningFr": "Soi-même, nez",
    "meaningEs": "Uno mismo, nariz",
    "meaningKo": "스스로, 코",
    "examples": "自, 息, 臭, 鼻",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1133,
    "kanji": "至",
    "displayReading": "Bộ Chí",
    "displayReadingEn": "Radical 133 · Arrive",
    "displayReadingFr": "Clé 133 · Arriver",
    "displayReadingEs": "Radical 133 · Llegar",
    "displayReadingKo": "부수 133 · 이를 지",
    "readings": [
      "Chí"
    ],
    "meaning": "Đến nơi, cực điểm",
    "meaningEn": "Arrive, reach, extreme",
    "meaningFr": "Arriver, atteindre, sommet",
    "meaningEs": "Llegar, alcanzar, cumbre",
    "meaningKo": "이르다, 도달하다",
    "examples": "至, 到, 致, 室",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1134,
    "kanji": "臼",
    "displayReading": "Bộ Cữu",
    "displayReadingEn": "Radical 134 · Mortar",
    "displayReadingFr": "Clé 134 · Mortier",
    "displayReadingEs": "Radical 134 · Mortero",
    "displayReadingKo": "부수 134 · 절구 구",
    "readings": [
      "Cữu"
    ],
    "meaning": "Cái cối giã gạo",
    "meaningEn": "Mortar (for pounding rice)",
    "meaningFr": "Mortier à piler le riz",
    "meaningEs": "Mortero para moler grano",
    "meaningKo": "절구",
    "examples": "旧, 興, 与, 児",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1135,
    "kanji": "舌",
    "displayReading": "Bộ Thiệt",
    "displayReadingEn": "Radical 135 · Tongue",
    "displayReadingFr": "Clé 135 · Langue",
    "displayReadingEs": "Radical 135 · Lengua",
    "displayReadingKo": "부수 135 · 혀 설",
    "readings": [
      "Thiệt"
    ],
    "meaning": "Cái lưỡi",
    "meaningEn": "Tongue",
    "meaningFr": "Langue",
    "meaningEs": "Lengua",
    "meaningKo": "혀",
    "examples": "舌, 話, 辞, 乱, 舗",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1136,
    "kanji": "舛",
    "displayReading": "Bộ Suyễn",
    "displayReadingEn": "Radical 136 · Oppose",
    "displayReadingFr": "Clé 136 · Opposé",
    "displayReadingEs": "Radical 136 · Opuesto",
    "displayReadingKo": "부수 136 · 어그러질 천",
    "readings": [
      "Suyễn"
    ],
    "meaning": "Sai lầm, trái ngược",
    "meaningEn": "Err, oppose, contrary",
    "meaningFr": "Erreur, s'opposer",
    "meaningEs": "Error, oponerse",
    "meaningKo": "어그러지다, 반대 방향",
    "examples": "舞, 瞬, 隣",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1137,
    "kanji": "舟",
    "displayReading": "Bộ Chu",
    "displayReadingEn": "Radical 137 · Boat",
    "displayReadingFr": "Clé 137 · Bateau",
    "displayReadingEs": "Radical 137 · Barco",
    "displayReadingKo": "부수 137 · 배 주",
    "readings": [
      "Chu"
    ],
    "meaning": "Con thuyền",
    "meaningEn": "Boat, ship",
    "meaningFr": "Barque, navire",
    "meaningEs": "Barca, embarcación",
    "meaningKo": "배, 선박",
    "examples": "舟, 船, 航, 艦, 般",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1138,
    "kanji": "艮",
    "displayReading": "Bộ Cấn",
    "displayReadingEn": "Radical 138 · Stopping",
    "displayReadingFr": "Clé 138 · Arrêt",
    "displayReadingEs": "Radical 138 · Detener",
    "displayReadingKo": "부수 138 · 그칠 간",
    "readings": [
      "Cấn"
    ],
    "meaning": "Dừng lại, quẻ Cấn, cứng đầu",
    "meaningEn": "Stop, stubborn, Gen trigram",
    "meaningFr": "S'arrêter, tenace",
    "meaningEs": "Detenerse, firme",
    "meaningKo": "머무르다, 그치다",
    "examples": "良, 限, 銀, 根, 退",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1139,
    "kanji": "色",
    "displayReading": "Bộ Sắc",
    "displayReadingEn": "Radical 139 · Color",
    "displayReadingFr": "Clé 139 · Couleur",
    "displayReadingEs": "Radical 139 · Color",
    "displayReadingKo": "부수 139 · 빛 색",
    "readings": [
      "Sắc"
    ],
    "meaning": "Màu sắc, dáng vẻ",
    "meaningEn": "Color, appearance",
    "meaningFr": "Couleur, teint, aspect",
    "meaningEs": "Color, rostro, aspecto",
    "meaningKo": "색깔, 빛깔, 기색",
    "examples": "色, 絶, 艶",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1140,
    "kanji": "艸 (艹)",
    "displayReading": "Bộ Thảo",
    "displayReadingEn": "Radical 140 · Grass",
    "displayReadingFr": "Clé 140 · Herbe",
    "displayReadingEs": "Radical 140 · Hierba",
    "displayReadingKo": "부수 140 · 풀 초",
    "readings": [
      "Thảo"
    ],
    "meaning": "Cỏ cây, thực vật",
    "meaningEn": "Grass, plants, herbs",
    "meaningFr": "Herbe, plante",
    "meaningEs": "Hierba, planta",
    "meaningKo": "풀, 식물",
    "examples": "花, 草, 茶, 薬, 葉",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1141,
    "kanji": "虍",
    "displayReading": "Bộ Hô",
    "displayReadingEn": "Radical 141 · Tiger",
    "displayReadingFr": "Clé 141 · Tigre",
    "displayReadingEs": "Radical 141 · Tigre",
    "displayReadingKo": "부수 141 · 범호엄 호",
    "readings": [
      "Hô"
    ],
    "meaning": "Vằn con hổ",
    "meaningEn": "Tiger stripes",
    "meaningFr": "Rayures de tigre",
    "meaningEs": "Rayas de tigre",
    "meaningKo": "호랑이 무늬",
    "examples": "虎, 処, 虚, 慮, 劇",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1142,
    "kanji": "虫",
    "displayReading": "Bộ Trùng",
    "displayReadingEn": "Radical 142 · Insect",
    "displayReadingFr": "Clé 142 · Insecte",
    "displayReadingEs": "Radical 142 · Insecto",
    "displayReadingKo": "부수 142 · 벌레 충",
    "readings": [
      "Trùng"
    ],
    "meaning": "Sâu bọ, côn trùng",
    "meaningEn": "Insect, bug, worm",
    "meaningFr": "Insecte, ver",
    "meaningEs": "Insecto, gusano",
    "meaningKo": "벌레, 곤충",
    "examples": "虫, 蚊, 蛇, 融, 独",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1143,
    "kanji": "血",
    "displayReading": "Bộ Huyết",
    "displayReadingEn": "Radical 143 · Blood",
    "displayReadingFr": "Clé 143 · Sang",
    "displayReadingEs": "Radical 143 · Sangre",
    "displayReadingKo": "부수 143 · 피 혈",
    "readings": [
      "Huyết"
    ],
    "meaning": "Máu",
    "meaningEn": "Blood",
    "meaningFr": "Sang",
    "meaningEs": "Sangre",
    "meaningKo": "피, 혈액",
    "examples": "血, 衆, 脈",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1144,
    "kanji": "行",
    "displayReading": "Bộ Hành",
    "displayReadingEn": "Radical 144 · Walk enclosure",
    "displayReadingFr": "Clé 144 · Marcher",
    "displayReadingEs": "Radical 144 · Caminar",
    "displayReadingKo": "부수 144 · 다닐 행",
    "readings": [
      "Hành"
    ],
    "meaning": "Đi lại, con đường, thực hiện",
    "meaningEn": "Walk, road, carry out",
    "meaningFr": "Aller, carrefour, agir",
    "meaningEs": "Ir, cruce de caminos, actuar",
    "meaningKo": "다니다, 사거리, 행하다",
    "examples": "行, 街, 術, 衛, 衝",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1145,
    "kanji": "衣 (衤)",
    "displayReading": "Bộ Y",
    "displayReadingEn": "Radical 145 · Clothes",
    "displayReadingFr": "Clé 145 · Vêtement",
    "displayReadingEs": "Radical 145 · Ropa",
    "displayReadingKo": "부수 145 · 옷 의",
    "readings": [
      "Y"
    ],
    "meaning": "Quần áo, trang phục",
    "meaningEn": "Clothes, garment",
    "meaningFr": "Vêtement, habit",
    "meaningEs": "Ropa, prenda de vestir",
    "meaningKo": "옷, 의복",
    "examples": "衣, 服, 初, 補, 表",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1146,
    "kanji": "襾 (西, 覀)",
    "displayReading": "Bộ Á",
    "displayReadingEn": "Radical 146 · West",
    "displayReadingFr": "Clé 146 · Couvrir / Ouest",
    "displayReadingEs": "Radical 146 · Cubrir / Oeste",
    "displayReadingKo": "부수 146 · 덮을 아 / 서녘 서",
    "readings": [
      "Á"
    ],
    "meaning": "Che đậy, hướng Tây",
    "meaningEn": "Cover, west",
    "meaningFr": "Recouvrir, ouest",
    "meaningEs": "Cubrir encima, oeste",
    "meaningKo": "덮다, 서쪽",
    "examples": "西, 要, 票, 覆",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1147,
    "kanji": "見",
    "displayReading": "Bộ Kiến",
    "displayReadingEn": "Radical 147 · See",
    "displayReadingFr": "Clé 147 · Voir",
    "displayReadingEs": "Radical 147 · Ver",
    "displayReadingKo": "부수 147 · 볼 견",
    "readings": [
      "Kiến"
    ],
    "meaning": "Nhìn thấy, quan sát",
    "meaningEn": "See, look, observe",
    "meaningFr": "Voir, observer",
    "meaningEs": "Ver, observar",
    "meaningKo": "보다, 관찰하다",
    "examples": "見, 親, 観, 覚, 規",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1148,
    "kanji": "角",
    "displayReading": "Bộ Giác",
    "displayReadingEn": "Radical 148 · Horn",
    "displayReadingFr": "Clé 148 · Corne",
    "displayReadingEs": "Radical 148 · Cuerno",
    "displayReadingKo": "부수 148 · 뿔 각",
    "readings": [
      "Giác"
    ],
    "meaning": "Cái sừng, góc cạnh",
    "meaningEn": "Horn, angle, corner",
    "meaningFr": "Corne, coin, angle",
    "meaningEs": "Cuerno, esquina, ángulo",
    "meaningKo": "뿔, 모서리",
    "examples": "角, 解, 触, 確",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1149,
    "kanji": "言 (訁)",
    "displayReading": "Bộ Ngôn",
    "displayReadingEn": "Radical 149 · Speech",
    "displayReadingFr": "Clé 149 · Parole",
    "displayReadingEs": "Radical 149 · Palabra",
    "displayReadingKo": "부수 149 · 말씀 언",
    "readings": [
      "Ngôn"
    ],
    "meaning": "Lời nói, ngôn ngữ",
    "meaningEn": "Speech, words, language",
    "meaningFr": "Parole, mot, langage",
    "meaningEs": "Palabra, habla, lenguaje",
    "meaningKo": "말, 언어",
    "examples": "言, 語, 話, 読, 記",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1150,
    "kanji": "谷",
    "displayReading": "Bộ Cốc",
    "displayReadingEn": "Radical 150 · Valley",
    "displayReadingFr": "Clé 150 · Vallée",
    "displayReadingEs": "Radical 150 · Valle",
    "displayReadingKo": "부수 150 · 골 곡",
    "readings": [
      "Cốc"
    ],
    "meaning": "Thung lũng, khe núi",
    "meaningEn": "Valley, gorge",
    "meaningFr": "Vallée, ravin",
    "meaningEs": "Valle, barranco",
    "meaningKo": "골짜기, 계곡",
    "examples": "谷, 欲, 浴, 俗, 容",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1151,
    "kanji": "豆",
    "displayReading": "Bộ Đậu",
    "displayReadingEn": "Radical 151 · Bean",
    "displayReadingFr": "Clé 151 · Haricot",
    "displayReadingEs": "Radical 151 · Judía",
    "displayReadingKo": "부수 151 · 콩 두",
    "readings": [
      "Đậu"
    ],
    "meaning": "Hạt đậu, đồ đựng tế lễ",
    "meaningEn": "Bean, sacrificial vessel",
    "meaningFr": "Haricot, vase rituel",
    "meaningEs": "Alubia, frijol, vasija ritual",
    "meaningKo": "콩, 제기(그릇)",
    "examples": "豆, 豊, 頭, 短, 登",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1152,
    "kanji": "豕",
    "displayReading": "Bộ Thỉ",
    "displayReadingEn": "Radical 152 · Pig",
    "displayReadingFr": "Clé 152 · Cochon",
    "displayReadingEs": "Radical 152 · Cerdo",
    "displayReadingKo": "부수 152 · 돼지 시",
    "readings": [
      "Thỉ"
    ],
    "meaning": "Con lợn (heo)",
    "meaningEn": "Pig, hog",
    "meaningFr": "Cochon, sanglier",
    "meaningEs": "Cerdo, jabalí",
    "meaningKo": "돼지, 멧돼지",
    "examples": "豚, 家, 象, 豪, 隊",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1153,
    "kanji": "豸",
    "displayReading": "Bộ Trãi",
    "displayReadingEn": "Radical 153 · Badger",
    "displayReadingFr": "Clé 153 · Blaireau",
    "displayReadingEs": "Radical 153 · Tejón",
    "displayReadingKo": "부수 153 · 발없는벌레 치",
    "readings": [
      "Trãi"
    ],
    "meaning": "Loài thú ăn thịt thân dài",
    "meaningEn": "Badger, long-bodied beast",
    "meaningFr": "Fauve sans cornes, félin",
    "meaningEs": "Fiera sin cuernos, felino",
    "meaningKo": "발 없는 벌레, 맹수",
    "examples": "豹, 貌, 猫, 墾",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1154,
    "kanji": "貝",
    "displayReading": "Bộ Bối",
    "displayReadingEn": "Radical 154 · Shell",
    "displayReadingFr": "Clé 154 · Coquillage",
    "displayReadingEs": "Radical 154 · Concha",
    "displayReadingKo": "부수 154 · 조개 패",
    "readings": [
      "Bối"
    ],
    "meaning": "Vỏ sò, tiền bạc, tài sản",
    "meaningEn": "Cowrie shell, money, wealth",
    "meaningFr": "Cauri, monnaie, richesse",
    "meaningEs": "Concha marina, moneda, riqueza",
    "meaningKo": "조개, 화폐, 재물",
    "examples": "貝, 買, 売, 貯, 財",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1155,
    "kanji": "赤",
    "displayReading": "Bộ Xích",
    "displayReadingEn": "Radical 155 · Red",
    "displayReadingFr": "Clé 155 · Rouge",
    "displayReadingEs": "Radical 155 · Rojo",
    "displayReadingKo": "부수 155 · 붉을 적",
    "readings": [
      "Xích"
    ],
    "meaning": "Màu đỏ",
    "meaningEn": "Red, bare",
    "meaningFr": "Rouge",
    "meaningEs": "Rojo",
    "meaningKo": "붉다, 빨강",
    "examples": "赤, 赦, 赫",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1156,
    "kanji": "走",
    "displayReading": "Bộ Tẩu",
    "displayReadingEn": "Radical 156 · Run",
    "displayReadingFr": "Clé 156 · Courir",
    "displayReadingEs": "Radical 156 · Correr",
    "displayReadingKo": "부수 156 · 달릴 주",
    "readings": [
      "Tẩu"
    ],
    "meaning": "Chạy, di chuyển nhanh",
    "meaningEn": "Run, move fast",
    "meaningFr": "Courir, fuir",
    "meaningEs": "Correr, huir",
    "meaningKo": "달리다",
    "examples": "走, 起, 超, 越, 趣",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1157,
    "kanji": "足 (⻊)",
    "displayReading": "Bộ Túc",
    "displayReadingEn": "Radical 157 · Foot",
    "displayReadingFr": "Clé 157 · Pied",
    "displayReadingEs": "Radical 157 · Pie",
    "displayReadingKo": "부수 157 · 발 족",
    "readings": [
      "Túc"
    ],
    "meaning": "Bàn chân, đầy đủ",
    "meaningEn": "Foot, sufficient",
    "meaningFr": "Pied, jambe, suffire",
    "meaningEs": "Pie, pierna, bastar",
    "meaningKo": "발, 다리, 충분하다",
    "examples": "足, 路, 踊, 跳, 距",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1158,
    "kanji": "身",
    "displayReading": "Bộ Thân",
    "displayReadingEn": "Radical 158 · Body",
    "displayReadingFr": "Clé 158 · Corps",
    "displayReadingEs": "Radical 158 · Cuerpo",
    "displayReadingKo": "부수 158 · 몸 신",
    "readings": [
      "Thân"
    ],
    "meaning": "Thân thể, bản thân",
    "meaningEn": "Body, oneself",
    "meaningFr": "Corps, personne",
    "meaningEs": "Cuerpo, persona",
    "meaningKo": "몸, 신체",
    "examples": "身, 射, 謝, 躯",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1159,
    "kanji": "車",
    "displayReading": "Bộ Xa",
    "displayReadingEn": "Radical 159 · Cart",
    "displayReadingFr": "Clé 159 · Char",
    "displayReadingEs": "Radical 159 · Carro",
    "displayReadingKo": "부수 159 · 수레 차",
    "readings": [
      "Xa"
    ],
    "meaning": "Xe cộ, bánh xe",
    "meaningEn": "Cart, vehicle, wheel",
    "meaningFr": "Voiture, char, roue",
    "meaningEs": "Coche, carro, rueda",
    "meaningKo": "수레, 자동차",
    "examples": "車, 転, 軽, 輪, 軍",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1160,
    "kanji": "辛",
    "displayReading": "Bộ Tân",
    "displayReadingEn": "Radical 160 · Bitter",
    "displayReadingFr": "Clé 160 · Âcre",
    "displayReadingEs": "Radical 160 · Picante / Amargo",
    "displayReadingKo": "부수 160 · 매울 신",
    "readings": [
      "Tân"
    ],
    "meaning": "Cay đắng, vất vả",
    "meaningEn": "Bitter, spicy, hardship",
    "meaningFr": "Épicé, amer, pénible",
    "meaningEs": "Picante, amargo, penoso",
    "meaningKo": "맵다, 괴롭다",
    "examples": "辛, 辞, 弁, 幸, 辟",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1161,
    "kanji": "辰",
    "displayReading": "Bộ Thần",
    "displayReadingEn": "Radical 161 · Morning",
    "displayReadingFr": "Clé 161 · Matin",
    "displayReadingEs": "Radical 161 · Mañana",
    "displayReadingKo": "부수 161 · 별 진",
    "readings": [
      "Thần"
    ],
    "meaning": "Ngôi sao, địa chi Thìn, buổi sớm",
    "meaningEn": "Star, Dragon branch, early morning",
    "meaningFr": "Astre, signe du Dragon, aube",
    "meaningEs": "Astro, signo del Dragón, alba",
    "meaningKo": "별, 때, 용(십이지)",
    "examples": "農, 振, 震, 辱",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1162,
    "kanji": "辵 (辶)",
    "displayReading": "Bộ Sước",
    "displayReadingEn": "Radical 162 · Walk",
    "displayReadingFr": "Clé 162 · Avancer",
    "displayReadingEs": "Radical 162 · Avanzar",
    "displayReadingKo": "부수 162 · 책받침 착",
    "readings": [
      "Sước"
    ],
    "meaning": "Bước đi, di chuyển trên đường",
    "meaningEn": "Walk, move along a road",
    "meaningFr": "Marcher sur la route",
    "meaningEs": "Caminar por el camino",
    "meaningKo": "쉬엄쉬엄 가다, 길",
    "examples": "道, 近, 遠, 進, 運",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1163,
    "kanji": "邑 (阝 phải)",
    "displayReading": "Bộ Ấp",
    "displayReadingEn": "Radical 163 · City",
    "displayReadingFr": "Clé 163 · Cité",
    "displayReadingEs": "Radical 163 · Ciudad",
    "displayReadingKo": "부수 163 · 고을 읍",
    "readings": [
      "Ấp"
    ],
    "meaning": "Vùng đất, làng mạc, đô thị",
    "meaningEn": "City, village, district",
    "meaningFr": "Ville, village, fief",
    "meaningEs": "Ciudad, aldea, territorio",
    "meaningKo": "고을, 마을, 도시",
    "examples": "都, 郡, 部, 郵, 郷",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1164,
    "kanji": "酉",
    "displayReading": "Bộ Dậu",
    "displayReadingEn": "Radical 164 · Wine",
    "displayReadingFr": "Clé 164 · Jarre à vin",
    "displayReadingEs": "Radical 164 · Vasija de vino",
    "displayReadingKo": "부수 164 · 닭 유",
    "readings": [
      "Dậu"
    ],
    "meaning": "Bình rượu, địa chi Dậu",
    "meaningEn": "Wine jar, Rooster branch",
    "meaningFr": "Alcool, fermentation, Coq",
    "meaningEs": "Alcohol, fermentación, Gallo",
    "meaningKo": "술항아리, 술, 닭(십이지)",
    "examples": "酒, 配, 酔, 酸, 医",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1165,
    "kanji": "釆",
    "displayReading": "Bộ Biện",
    "displayReadingEn": "Radical 165 · Distinguish",
    "displayReadingFr": "Clé 165 · Distinguer",
    "displayReadingEs": "Radical 165 · Distinguir",
    "displayReadingKo": "부수 165 · 분별할 변",
    "readings": [
      "Biện"
    ],
    "meaning": "Phân biệt, dấu chân thú",
    "meaningEn": "Distinguish, animal tracks",
    "meaningFr": "Trier, traces d'animaux",
    "meaningEs": "Separar, huellas de animales",
    "meaningKo": "분별하다, 짐승 발자국",
    "examples": "採, 番, 釈, 審",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1166,
    "kanji": "里",
    "displayReading": "Bộ Lý",
    "displayReadingEn": "Radical 166 · Village",
    "displayReadingFr": "Clé 166 · Hameau",
    "displayReadingEs": "Radical 166 · Aldea",
    "displayReadingKo": "부수 166 · 마을 리",
    "readings": [
      "Lý"
    ],
    "meaning": "Làng xóm, đơn vị đo dặm",
    "meaningEn": "Village, unit of distance (ri)",
    "meaningFr": "Village, lieue japonaise",
    "meaningEs": "Pueblo, legua japonesa",
    "meaningKo": "마을, 거리 단위(리)",
    "examples": "里, 重, 野, 量, 黒",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1167,
    "kanji": "金 (釒)",
    "displayReading": "Bộ Kim",
    "displayReadingEn": "Radical 167 · Gold",
    "displayReadingFr": "Clé 167 · Métal",
    "displayReadingEs": "Radical 167 · Metal",
    "displayReadingKo": "부수 167 · 쇠 금",
    "readings": [
      "Kim"
    ],
    "meaning": "Kim loại, vàng, tiền bạc",
    "meaningEn": "Metal, gold, money",
    "meaningFr": "Métal, or, argent",
    "meaningEs": "Metal, oro, dinero",
    "meaningKo": "쇠, 금속, 금, 돈",
    "examples": "金, 鉄, 銀, 鏡, 針",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1168,
    "kanji": "長 (镸)",
    "displayReading": "Bộ Trường",
    "displayReadingEn": "Radical 168 · Long",
    "displayReadingFr": "Clé 168 · Long",
    "displayReadingEs": "Radical 168 · Largo",
    "displayReadingKo": "부수 168 · 긴 장",
    "readings": [
      "Trường"
    ],
    "meaning": "Dài, người đứng đầu, lớn lên",
    "meaningEn": "Long, chief, grow",
    "meaningFr": "Long, chef, grandir",
    "meaningEs": "Largo, jefe, crecer",
    "meaningKo": "길다, 우두머리",
    "examples": "長, 張, 帳, 膨",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1169,
    "kanji": "門",
    "displayReading": "Bộ Môn",
    "displayReadingEn": "Radical 169 · Gate",
    "displayReadingFr": "Clé 169 · Portail",
    "displayReadingEs": "Radical 169 · Portón",
    "displayReadingKo": "부수 169 · 문 문",
    "readings": [
      "Môn"
    ],
    "meaning": "Cổng lớn, cánh cửa",
    "meaningEn": "Gate, door",
    "meaningFr": "Portail, double porte",
    "meaningEs": "Portón, puerta doble",
    "meaningKo": "문, 양쪽 여닫이문",
    "examples": "門, 間, 開, 閉, 聞",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1170,
    "kanji": "阜 (阝 trái)",
    "displayReading": "Bộ Phụ",
    "displayReadingEn": "Radical 170 · Mound",
    "displayReadingFr": "Clé 170 · Tertre",
    "displayReadingEs": "Radical 170 · Montículo",
    "displayReadingKo": "부수 170 · 언덕 부",
    "readings": [
      "Phụ"
    ],
    "meaning": "Gò đất, đồi núi, bậc thang",
    "meaningEn": "Mound, hill, steps",
    "meaningFr": "Colline, talus, rempart",
    "meaningEs": "Colina, terraplén, muralla",
    "meaningKo": "언덕, 둔덕",
    "examples": "院, 階, 陽, 防, 限",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1171,
    "kanji": "隶",
    "displayReading": "Bộ Đãi",
    "displayReadingEn": "Radical 171 · Slave",
    "displayReadingFr": "Clé 171 · Atteindre",
    "displayReadingEs": "Radical 171 · Alcanzar",
    "displayReadingKo": "부수 171 · 미칠 이",
    "readings": [
      "Đãi"
    ],
    "meaning": "Kịp đến, phụ thuộc",
    "meaningEn": "Reach, depend on",
    "meaningFr": "Rattraper, subordonné",
    "meaningEs": "Alcanzar, subordinado",
    "meaningKo": "미치다, 닿다",
    "examples": "隷, 康, 逮",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1172,
    "kanji": "隹",
    "displayReading": "Bộ Chuy",
    "displayReadingEn": "Radical 172 · Short-tailed bird",
    "displayReadingFr": "Clé 172 · Petit oiseau",
    "displayReadingEs": "Radical 172 · Pájaro corto",
    "displayReadingKo": "부수 172 · 새 추",
    "readings": [
      "Chuy"
    ],
    "meaning": "Chim đuôi ngắn",
    "meaningEn": "Short-tailed bird",
    "meaningFr": "Oiseau à queue courte",
    "meaningEs": "Pájaro de cola corta",
    "meaningKo": "꽁지 짧은 새",
    "examples": "集, 雑, 難, 離, 雄",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1173,
    "kanji": "雨 (⻗)",
    "displayReading": "Bộ Vũ",
    "displayReadingEn": "Radical 173 · Rain",
    "displayReadingFr": "Clé 173 · Pluie",
    "displayReadingEs": "Radical 173 · Lluvia",
    "displayReadingKo": "부수 173 · 비 우",
    "readings": [
      "Vũ"
    ],
    "meaning": "Mưa, hiện tượng thời tiết",
    "meaningEn": "Rain, weather phenomena",
    "meaningFr": "Pluie, météo",
    "meaningEs": "Lluvia, clima",
    "meaningKo": "비, 날씨",
    "examples": "雨, 雪, 雲, 電, 霧",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1174,
    "kanji": "青 (靑)",
    "displayReading": "Bộ Thanh",
    "displayReadingEn": "Radical 174 · Blue",
    "displayReadingFr": "Clé 174 · Bleu",
    "displayReadingEs": "Radical 174 · Azul / Verde",
    "displayReadingKo": "부수 174 · 푸를 청",
    "readings": [
      "Thanh"
    ],
    "meaning": "Màu xanh lam/lục, trẻ trung",
    "meaningEn": "Blue, green, young",
    "meaningFr": "Bleu, vert, jeunesse",
    "meaningEs": "Azul, verde, juventud",
    "meaningKo": "푸르다, 파랑, 젊음",
    "examples": "青, 静, 晴, 清, 精",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1175,
    "kanji": "非",
    "displayReading": "Bộ Phi",
    "displayReadingEn": "Radical 175 · Wrong",
    "displayReadingFr": "Clé 175 · Non",
    "displayReadingEs": "Radical 175 · No",
    "displayReadingKo": "부수 175 · 아닐 비",
    "readings": [
      "Phi"
    ],
    "meaning": "Không phải, sai trái",
    "meaningEn": "Wrong, not",
    "meaningFr": "Ne pas être, tort",
    "meaningEs": "No ser, incorrecto",
    "meaningKo": "아니다, 그르다",
    "examples": "非, 悲, 罪, 排, 俳",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1176,
    "kanji": "面",
    "displayReading": "Bộ Diện",
    "displayReadingEn": "Radical 176 · Face",
    "displayReadingFr": "Clé 176 · Visage",
    "displayReadingEs": "Radical 176 · Cara",
    "displayReadingKo": "부수 176 · 낯 면",
    "readings": [
      "Diện"
    ],
    "meaning": "Khuôn mặt, bề mặt",
    "meaningEn": "Face, surface",
    "meaningFr": "Visage, surface",
    "meaningEs": "Cara, rostro, superficie",
    "meaningKo": "얼굴, 표면",
    "examples": "面, 麺, 緬",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1177,
    "kanji": "革",
    "displayReading": "Bộ Cách",
    "displayReadingEn": "Radical 177 · Leather",
    "displayReadingFr": "Clé 177 · Cuir",
    "displayReadingEs": "Radical 177 · Cuero",
    "displayReadingKo": "부수 177 · 가죽 혁",
    "readings": [
      "Cách"
    ],
    "meaning": "Da thú thuộc, cải cách",
    "meaningEn": "Tanned leather, reform",
    "meaningFr": "Cuir brut, réformer",
    "meaningEs": "Cuero crudo, reformar",
    "meaningKo": "다듬은 가죽, 고치다",
    "examples": "革, 靴, 鞄, 覇",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1178,
    "kanji": "韋",
    "displayReading": "Bộ Vi",
    "displayReadingEn": "Radical 178 · Tanned leather",
    "displayReadingFr": "Clé 178 · Cuir souple",
    "displayReadingEs": "Radical 178 · Cuero curtido",
    "displayReadingKo": "부수 178 · 다룸가죽 위",
    "readings": [
      "Vi"
    ],
    "meaning": "Da thuộc mềm, vây quanh",
    "meaningEn": "Soft leather, surround",
    "meaningFr": "Cuir tanné, entourer",
    "meaningEs": "Cuero suave, rodear",
    "meaningKo": "부드러운 가죽, 에워싸다",
    "examples": "韓, 偉, 違, 緯",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1179,
    "kanji": "韭",
    "displayReading": "Bộ Cửu",
    "displayReadingEn": "Radical 179 · Leek",
    "displayReadingFr": "Clé 179 · Ciboule",
    "displayReadingEs": "Radical 179 · Puerro",
    "displayReadingKo": "부수 179 · 부추 구",
    "readings": [
      "Cửu"
    ],
    "meaning": "Rau hẹ",
    "meaningEn": "Leek, chives",
    "meaningFr": "Ciboule, poireau chinois",
    "meaningEs": "Cebolleta, puerro chino",
    "meaningKo": "부추",
    "examples": "韮, 繊",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1180,
    "kanji": "音",
    "displayReading": "Bộ Âm",
    "displayReadingEn": "Radical 180 · Sound",
    "displayReadingFr": "Clé 180 · Son",
    "displayReadingEs": "Radical 180 · Sonido",
    "displayReadingKo": "부수 180 · 소리 음",
    "readings": [
      "Âm"
    ],
    "meaning": "Âm thanh, tiếng động",
    "meaningEn": "Sound, noise",
    "meaningFr": "Son, bruit, musique",
    "meaningEs": "Sonido, ruido, música",
    "meaningKo": "소리, 음악",
    "examples": "音, 暗, 意, 響, 韻",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1181,
    "kanji": "頁",
    "displayReading": "Bộ Hiệt",
    "displayReadingEn": "Radical 181 · Leaf",
    "displayReadingFr": "Clé 181 · Tête / Page",
    "displayReadingEs": "Radical 181 · Cabeza / Página",
    "displayReadingKo": "부수 181 · 머리 혈",
    "readings": [
      "Hiệt"
    ],
    "meaning": "Cái đầu, trang giấy",
    "meaningEn": "Head, page of a book",
    "meaningFr": "Tête, visage, page",
    "meaningEs": "Cabeza, rostro, página",
    "meaningKo": "머리, 얼굴, 페이지",
    "examples": "頭, 顔, 題, 願, 順",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1182,
    "kanji": "風",
    "displayReading": "Bộ Phong",
    "displayReadingEn": "Radical 182 · Wind",
    "displayReadingFr": "Clé 182 · Vent",
    "displayReadingEs": "Radical 182 · Viento",
    "displayReadingKo": "부수 182 · 바람 풍",
    "readings": [
      "Phong"
    ],
    "meaning": "Gió, phong cách",
    "meaningEn": "Wind, style",
    "meaningFr": "Vent, manière",
    "meaningEs": "Viento, estilo",
    "meaningKo": "바람, 풍속",
    "examples": "風, 台, 嵐, 颯",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1183,
    "kanji": "飛",
    "displayReading": "Bộ Phi",
    "displayReadingEn": "Radical 183 · Fly",
    "displayReadingFr": "Clé 183 · Voler",
    "displayReadingEs": "Radical 183 · Volar",
    "displayReadingKo": "부수 183 · 날 비",
    "readings": [
      "Phi"
    ],
    "meaning": "Bay lượn",
    "meaningEn": "Fly, soar",
    "meaningFr": "Voler dans les airs",
    "meaningEs": "Volar por el aire",
    "meaningKo": "날다",
    "examples": "飛, 翻",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1184,
    "kanji": "食 (飠)",
    "displayReading": "Bộ Thực",
    "displayReadingEn": "Radical 184 · Eat",
    "displayReadingFr": "Clé 184 · Manger",
    "displayReadingEs": "Radical 184 · Comer",
    "displayReadingKo": "부수 184 · 밥 식",
    "readings": [
      "Thực"
    ],
    "meaning": "Ăn uống, thức ăn",
    "meaningEn": "Eat, food",
    "meaningFr": "Manger, nourriture",
    "meaningEs": "Comer, comida",
    "meaningKo": "먹다, 밥, 음식",
    "examples": "食, 飲, 飯, 館, 養",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1185,
    "kanji": "首",
    "displayReading": "Bộ Thủ",
    "displayReadingEn": "Radical 185 · Head",
    "displayReadingFr": "Clé 185 · Tête / Cou",
    "displayReadingEs": "Radical 185 · Cabeza / Cuello",
    "displayReadingKo": "부수 185 · 머리 수",
    "readings": [
      "Thủ"
    ],
    "meaning": "Cái đầu, cái cổ, đứng đầu",
    "meaningEn": "Head, neck, leader",
    "meaningFr": "Tête, cou, premier",
    "meaningEs": "Cabeza, cuello, primero",
    "meaningKo": "머리, 목, 으뜸",
    "examples": "首, 道, 導",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1186,
    "kanji": "香",
    "displayReading": "Bộ Hương",
    "displayReadingEn": "Radical 186 · Fragrant",
    "displayReadingFr": "Clé 186 · Parfum",
    "displayReadingEs": "Radical 186 · Fragancia",
    "displayReadingKo": "부수 186 · 향기 향",
    "readings": [
      "Hương"
    ],
    "meaning": "Mùi thơm, hương vị",
    "meaningEn": "Fragrant, aroma",
    "meaningFr": "Parfum, arôme",
    "meaningEs": "Aroma, perfume",
    "meaningKo": "향기",
    "examples": "香, 馨, 馥",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1187,
    "kanji": "馬",
    "displayReading": "Bộ Mã",
    "displayReadingEn": "Radical 187 · Horse",
    "displayReadingFr": "Clé 187 · Cheval",
    "displayReadingEs": "Radical 187 · Caballo",
    "displayReadingKo": "부수 187 · 말 마",
    "readings": [
      "Mã"
    ],
    "meaning": "Con ngựa",
    "meaningEn": "Horse",
    "meaningFr": "Cheval",
    "meaningEs": "Caballo",
    "meaningKo": "말(동물)",
    "examples": "馬, 駅, 駐, 騒, 驚",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1188,
    "kanji": "骨",
    "displayReading": "Bộ Cốt",
    "displayReadingEn": "Radical 188 · Bone",
    "displayReadingFr": "Clé 188 · Os",
    "displayReadingEs": "Radical 188 · Hueso",
    "displayReadingKo": "부수 188 · 뼈 골",
    "readings": [
      "Cốt"
    ],
    "meaning": "Xương cốt",
    "meaningEn": "Bone, skeleton",
    "meaningFr": "Os, squelette",
    "meaningEs": "Hueso, esqueleto",
    "meaningKo": "뼈",
    "examples": "骨, 滑, 髄, 骸",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1189,
    "kanji": "高",
    "displayReading": "Bộ Cao",
    "displayReadingEn": "Radical 189 · Tall",
    "displayReadingFr": "Clé 189 · Haut",
    "displayReadingEs": "Radical 189 · Alto",
    "displayReadingKo": "부수 189 · 높을 고",
    "readings": [
      "Cao"
    ],
    "meaning": "Cao lớn",
    "meaningEn": "Tall, high",
    "meaningFr": "Haut, élevé",
    "meaningEs": "Alto, elevado",
    "meaningKo": "높다",
    "examples": "高, 稿, 橋",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1190,
    "kanji": "髟",
    "displayReading": "Bộ Tiêu",
    "displayReadingEn": "Radical 190 · Hair",
    "displayReadingFr": "Clé 190 · Chevelure",
    "displayReadingEs": "Radical 190 · Cabellera",
    "displayReadingKo": "부수 190 · 터럭 발",
    "readings": [
      "Tiêu"
    ],
    "meaning": "Tóc dài",
    "meaningEn": "Long hair",
    "meaningFr": "Cheveux longs",
    "meaningEs": "Cabello largo",
    "meaningKo": "긴 머리카락",
    "examples": "髪, 髭, 髯",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1191,
    "kanji": "鬥",
    "displayReading": "Bộ Đấu",
    "displayReadingEn": "Radical 191 · Fight",
    "displayReadingFr": "Clé 191 · Combat",
    "displayReadingEs": "Radical 191 · Lucha",
    "displayReadingKo": "부수 191 · 싸울 투",
    "readings": [
      "Đấu"
    ],
    "meaning": "Đánh nhau, tranh đấu",
    "meaningEn": "Fight, struggle",
    "meaningFr": "Lutter, combattre",
    "meaningEs": "Pelear, combatir",
    "meaningKo": "싸우다",
    "examples": "闘, 鬧",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1192,
    "kanji": "鬯",
    "displayReading": "Bộ Sưởng",
    "displayReadingEn": "Radical 192 · Sacrificial wine",
    "displayReadingFr": "Clé 192 · Vin rituel",
    "displayReadingEs": "Radical 192 · Licor ritual",
    "displayReadingKo": "부수 192 · 울창주 창",
    "readings": [
      "Sưởng"
    ],
    "meaning": "Rượu nghệ dùng trong tế lễ",
    "meaningEn": "Herbal sacrificial wine",
    "meaningFr": "Alcool aromatique rituel",
    "meaningEs": "Vino aromático ritual",
    "meaningKo": "향기로운 제사용 술",
    "examples": "鬱",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1193,
    "kanji": "鬲",
    "displayReading": "Bộ Cách",
    "displayReadingEn": "Radical 193 · Cauldron",
    "displayReadingFr": "Clé 193 · Chaudron",
    "displayReadingEs": "Radical 193 · Caldero",
    "displayReadingKo": "부수 193 · 솥 력",
    "readings": [
      "Cách"
    ],
    "meaning": "Cái đỉnh, nồi ba chân",
    "meaningEn": "Three-legged cauldron",
    "meaningFr": "Chaudron tripode",
    "meaningEs": "Caldero de tres patas",
    "meaningKo": "세발솥",
    "examples": "隔, 融, 鬲",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1194,
    "kanji": "鬼",
    "displayReading": "Bộ Quỷ",
    "displayReadingEn": "Radical 194 · Ghost",
    "displayReadingFr": "Clé 194 · Démon",
    "displayReadingEs": "Radical 194 · Demonio",
    "displayReadingKo": "부수 194 · 귀신 귀",
    "readings": [
      "Quỷ"
    ],
    "meaning": "Con quỷ, linh hồn",
    "meaningEn": "Ghost, demon, spirit",
    "meaningFr": "Démon, esprit, fantôme",
    "meaningEs": "Demonio, espíritu, fantasma",
    "meaningKo": "귀신, 도깨비",
    "examples": "鬼, 魂, 魔, 魅, 塊",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1195,
    "kanji": "魚",
    "displayReading": "Bộ Ngư",
    "displayReadingEn": "Radical 195 · Fish",
    "displayReadingFr": "Clé 195 · Poisson",
    "displayReadingEs": "Radical 195 · Pez",
    "displayReadingKo": "부수 195 · 물고기 어",
    "readings": [
      "Ngư"
    ],
    "meaning": "Con cá",
    "meaningEn": "Fish",
    "meaningFr": "Poisson",
    "meaningEs": "Pez, pescado",
    "meaningKo": "물고기, 생선",
    "examples": "魚, 鮮, 鯨, 鯉, 鮭",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1196,
    "kanji": "鳥",
    "displayReading": "Bộ Điểu",
    "displayReadingEn": "Radical 196 · Bird",
    "displayReadingFr": "Clé 196 · Oiseau",
    "displayReadingEs": "Radical 196 · Ave",
    "displayReadingKo": "부수 196 · 새 조",
    "readings": [
      "Điểu"
    ],
    "meaning": "Con chim",
    "meaningEn": "Bird",
    "meaningFr": "Oiseau",
    "meaningEs": "Pájaro, ave",
    "meaningKo": "새",
    "examples": "鳥, 鳴, 島, 鶴, 鶏",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1197,
    "kanji": "鹵",
    "displayReading": "Bộ Lỗ",
    "displayReadingEn": "Radical 197 · Salt",
    "displayReadingFr": "Clé 197 · Sel",
    "displayReadingEs": "Radical 197 · Sal",
    "displayReadingKo": "부수 197 · 소금 鹵(로)",
    "readings": [
      "Lỗ"
    ],
    "meaning": "Đất mặn, muối mỏ",
    "meaningEn": "Salty land, rock salt",
    "meaningFr": "Terre salée, sel gemme",
    "meaningEs": "Tierra salada, sal de roca",
    "meaningKo": "소금, 소금땅",
    "examples": "塩, 鹸",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1198,
    "kanji": "鹿",
    "displayReading": "Bộ Lộc",
    "displayReadingEn": "Radical 198 · Deer",
    "displayReadingFr": "Clé 198 · Cerf",
    "displayReadingEs": "Radical 198 · Ciervo",
    "displayReadingKo": "부수 198 · 사슴 록",
    "readings": [
      "Lộc"
    ],
    "meaning": "Con hươu, con nai",
    "meaningEn": "Deer",
    "meaningFr": "Cerf, daim",
    "meaningEs": "Ciervo, venado",
    "meaningKo": "사슴",
    "examples": "鹿, 麗, 塵, 慶",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1199,
    "kanji": "麥 (麦)",
    "displayReading": "Bộ Mạch",
    "displayReadingEn": "Radical 199 · Wheat",
    "displayReadingFr": "Clé 199 · Blé",
    "displayReadingEs": "Radical 199 · Trigo",
    "displayReadingKo": "부수 199 · 보리 맥",
    "readings": [
      "Mạch"
    ],
    "meaning": "Lúa mạch",
    "meaningEn": "Wheat, barley",
    "meaningFr": "Blé, orge",
    "meaningEs": "Trigo, cebada",
    "meaningKo": "보리, 밀",
    "examples": "麦, 麺, 麹",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1200,
    "kanji": "麻",
    "displayReading": "Bộ Ma",
    "displayReadingEn": "Radical 200 · Hemp",
    "displayReadingFr": "Clé 200 · Chanvre",
    "displayReadingEs": "Radical 200 · Cáñamo",
    "displayReadingKo": "부수 200 · 삼 마",
    "readings": [
      "Ma"
    ],
    "meaning": "Cây gai dầu, tê liệt",
    "meaningEn": "Hemp, numb",
    "meaningFr": "Chanvre, engourdi",
    "meaningEs": "Cáñamo, entumecido",
    "meaningKo": "삼(대마), 마비되다",
    "examples": "麻, 磨, 魔, 摩",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1201,
    "kanji": "黃 (黄)",
    "displayReading": "Bộ Hoàng",
    "displayReadingEn": "Radical 201 · Yellow",
    "displayReadingFr": "Clé 201 · Jaune",
    "displayReadingEs": "Radical 201 · Amarillo",
    "displayReadingKo": "부수 201 · 누를 황",
    "readings": [
      "Hoàng"
    ],
    "meaning": "Màu vàng",
    "meaningEn": "Yellow",
    "meaningFr": "Jaune",
    "meaningEs": "Amarillo",
    "meaningKo": "누렇다, 노란색",
    "examples": "黄, 横, 広",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1202,
    "kanji": "黍",
    "displayReading": "Bộ Thử",
    "displayReadingEn": "Radical 202 · Millet",
    "displayReadingFr": "Clé 202 · Millet",
    "displayReadingEs": "Radical 202 · Mijo",
    "displayReadingKo": "부수 202 · 기장 서",
    "readings": [
      "Thử"
    ],
    "meaning": "Cây kê (lúa nếp)",
    "meaningEn": "Millet",
    "meaningFr": "Millet",
    "meaningEs": "Mijo",
    "meaningKo": "기장(곡식)",
    "examples": "黎, 粘",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1203,
    "kanji": "黑 (黒)",
    "displayReading": "Bộ Hắc",
    "displayReadingEn": "Radical 203 · Black",
    "displayReadingFr": "Clé 203 · Noir",
    "displayReadingEs": "Radical 203 · Negro",
    "displayReadingKo": "부수 203 · 검을 흑",
    "readings": [
      "Hắc"
    ],
    "meaning": "Màu đen",
    "meaningEn": "Black",
    "meaningFr": "Noir, sombre",
    "meaningEs": "Negro, oscuro",
    "meaningKo": "검다, 검은색",
    "examples": "黒, 黙, 点, 墨, 党",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1204,
    "kanji": "黹",
    "displayReading": "Bộ Chỉ",
    "displayReadingEn": "Radical 204 · Embroidery",
    "displayReadingFr": "Clé 204 · Broderie",
    "displayReadingEs": "Radical 204 · Bordado",
    "displayReadingKo": "부수 204 · 바느질할 치",
    "readings": [
      "Chỉ"
    ],
    "meaning": "Thêu thùa, may vá",
    "meaningEn": "Embroidery, needlework",
    "meaningFr": "Broderie, couture",
    "meaningEs": "Bordado, costura",
    "meaningKo": "자수, 바느질",
    "examples": "黻, 黼",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1205,
    "kanji": "黽",
    "displayReading": "Bộ Mãnh",
    "displayReadingEn": "Radical 205 · Frog",
    "displayReadingFr": "Clé 205 · Grenouille",
    "displayReadingEs": "Radical 205 · Rana",
    "displayReadingKo": "부수 205 · 맹꽁이 맹",
    "readings": [
      "Mãnh"
    ],
    "meaning": "Con ếch, cố gắng",
    "meaningEn": "Frog, strive",
    "meaningFr": "Grenouille, s'efforcer",
    "meaningEs": "Rana, esforzarse",
    "meaningKo": "맹꽁이, 개구리, 힘쓰다",
    "examples": "縄, 蠅, 亀",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1206,
    "kanji": "鼎",
    "displayReading": "Bộ Đỉnh",
    "displayReadingEn": "Radical 206 · Tripod",
    "displayReadingFr": "Clé 206 · Trépied",
    "displayReadingEs": "Radical 206 · Trípode",
    "displayReadingKo": "부수 206 · 솥 정",
    "readings": [
      "Đỉnh"
    ],
    "meaning": "Cái đỉnh đồng ba chân",
    "meaningEn": "Three-legged bronze tripod",
    "meaningFr": "Trépied de bronze",
    "meaningEs": "Trípode de bronce",
    "meaningKo": "세발솥",
    "examples": "鼎, 鼐",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1207,
    "kanji": "鼓",
    "displayReading": "Bộ Cổ",
    "displayReadingEn": "Radical 207 · Drum",
    "displayReadingFr": "Clé 207 · Tambour",
    "displayReadingEs": "Radical 207 · Tambor",
    "displayReadingKo": "부수 207 · 북 고",
    "readings": [
      "Cổ"
    ],
    "meaning": "Cái trống, cổ vũ",
    "meaningEn": "Drum, encourage",
    "meaningFr": "Tambour",
    "meaningEs": "Tambor",
    "meaningKo": "북",
    "examples": "鼓, 樹, 喜",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1208,
    "kanji": "鼠",
    "displayReading": "Bộ Thử",
    "displayReadingEn": "Radical 208 · Rat",
    "displayReadingFr": "Clé 208 · Rat",
    "displayReadingEs": "Radical 208 · Rata",
    "displayReadingKo": "부수 208 · 쥐 서",
    "readings": [
      "Thử"
    ],
    "meaning": "Con chuột",
    "meaningEn": "Rat, mouse",
    "meaningFr": "Rat, souris",
    "meaningEs": "Rata, ratón",
    "meaningKo": "쥐",
    "examples": "鼠, 鼬, 竄",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1209,
    "kanji": "鼻",
    "displayReading": "Bộ Tỵ",
    "displayReadingEn": "Radical 209 · Nose",
    "displayReadingFr": "Clé 209 · Nez",
    "displayReadingEs": "Radical 209 · Nariz",
    "displayReadingKo": "부수 209 · 코 비",
    "readings": [
      "Tỵ"
    ],
    "meaning": "Cái mũi",
    "meaningEn": "Nose",
    "meaningFr": "Nez",
    "meaningEs": "Nariz",
    "meaningKo": "코",
    "examples": "鼻, 鼾",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1210,
    "kanji": "齊 (斉)",
    "displayReading": "Bộ Tề",
    "displayReadingEn": "Radical 210 · Even",
    "displayReadingFr": "Clé 210 · Égal",
    "displayReadingEs": "Radical 210 · Igual",
    "displayReadingKo": "부수 210 · 가지런할 제",
    "readings": [
      "Tề"
    ],
    "meaning": "Ngay ngắn, đều đặn",
    "meaningEn": "Even, uniform, neat",
    "meaningFr": "Égal, uniforme, aligné",
    "meaningEs": "Igual, uniforme, alineado",
    "meaningKo": "가지런하다, 같다",
    "examples": "斉, 済, 剤, 斎",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1211,
    "kanji": "齒 (歯)",
    "displayReading": "Bộ Xỉ",
    "displayReadingEn": "Radical 211 · Tooth",
    "displayReadingFr": "Clé 211 · Dent",
    "displayReadingEs": "Radical 211 · Diente",
    "displayReadingKo": "부수 211 · 이 치",
    "readings": [
      "Xỉ"
    ],
    "meaning": "Cái răng",
    "meaningEn": "Tooth",
    "meaningFr": "Dent",
    "meaningEs": "Diente",
    "meaningKo": "이, 치아",
    "examples": "歯, 齢, 噛",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1212,
    "kanji": "龍 (竜)",
    "displayReading": "Bộ Long",
    "displayReadingEn": "Radical 212 · Dragon",
    "displayReadingFr": "Clé 212 · Dragon",
    "displayReadingEs": "Radical 212 · Dragón",
    "displayReadingKo": "부수 212 · 용 룡",
    "readings": [
      "Long"
    ],
    "meaning": "Con rồng",
    "meaningEn": "Dragon",
    "meaningFr": "Dragon",
    "meaningEs": "Dragón",
    "meaningKo": "용",
    "examples": "龍, 竜, 滝, 襲",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1213,
    "kanji": "龜 (亀)",
    "displayReading": "Bộ Quy",
    "displayReadingEn": "Radical 213 · Turtle",
    "displayReadingFr": "Clé 213 · Tortue",
    "displayReadingEs": "Radical 213 · Tortuga",
    "displayReadingKo": "부수 213 · 거북 귀",
    "readings": [
      "Quy"
    ],
    "meaning": "Con rùa",
    "meaningEn": "Turtle, tortoise",
    "meaningFr": "Tortue",
    "meaningEs": "Tortuga",
    "meaningKo": "거북",
    "examples": "亀, 縄",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1214,
    "kanji": "龠",
    "displayReading": "Bộ Dược",
    "displayReadingEn": "Radical 214 · Flute",
    "displayReadingFr": "Clé 214 · Flûte",
    "displayReadingEs": "Radical 214 · Flauta",
    "displayReadingKo": "부수 214 · 피리 약",
    "readings": [
      "Dược"
    ],
    "meaning": "Ống sáo cổ",
    "meaningEn": "Ancient bamboo flute",
    "meaningFr": "Flûte de Pan ancienne",
    "meaningEs": "Flauta antigua",
    "meaningKo": "피리",
    "examples": "躍, 曜, 濯",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  }
];

const ALL_STUDY_ITEMS = [
  {
    "id": 2001,
    "kanji": "一",
    "displayReading": "いち",
    "readings": [
      "いち"
    ],
    "meaning": "Số 1",
    "meaningEn": "Number 1",
    "meaningFr": "Chiffre 1",
    "meaningEs": "Número 1",
    "meaningKo": "숫자 1",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 57,
    "kanji": "一つ",
    "displayReading": "ひとつ",
    "readings": [
      "ひとつ"
    ],
    "meaning": "Một cái",
    "meaningEn": "One thing",
    "meaningFr": "Un objet",
    "meaningEs": "Un objeto",
    "meaningKo": "한 개",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2003,
    "kanji": "二",
    "displayReading": "に",
    "readings": [
      "に"
    ],
    "meaning": "Số 2",
    "meaningEn": "Number 2",
    "meaningFr": "Chiffre 2",
    "meaningEs": "Número 2",
    "meaningKo": "숫자 2",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 61,
    "kanji": "二つ",
    "displayReading": "ふたつ",
    "readings": [
      "ふたつ"
    ],
    "meaning": "Hai cái",
    "meaningEn": "Two things",
    "meaningFr": "Deux objets",
    "meaningEs": "Dos objetos",
    "meaningKo": "두 개",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2005,
    "kanji": "三",
    "displayReading": "さん",
    "readings": [
      "さん"
    ],
    "meaning": "Số 3",
    "meaningEn": "Number 3",
    "meaningFr": "Chiffre 3",
    "meaningEs": "Número 3",
    "meaningKo": "숫자 3",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 65,
    "kanji": "三つ",
    "displayReading": "みっつ",
    "readings": [
      "みっつ"
    ],
    "meaning": "Ba cái",
    "meaningEn": "Three things",
    "meaningFr": "Trois objets",
    "meaningEs": "Tres objetos",
    "meaningKo": "세 개",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2007,
    "kanji": "四",
    "displayReading": "よん・し",
    "readings": [
      "よん",
      "し"
    ],
    "meaning": "Số 4",
    "meaningEn": "Number 4",
    "meaningFr": "Chiffre 4",
    "meaningEs": "Número 4",
    "meaningKo": "숫자 4",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 68,
    "kanji": "四つ",
    "displayReading": "よっつ",
    "readings": [
      "よっつ"
    ],
    "meaning": "Bốn cái",
    "meaningEn": "Four things",
    "meaningFr": "Quatre objets",
    "meaningEs": "Cuatro objetos",
    "meaningKo": "네 개",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2009,
    "kanji": "五",
    "displayReading": "ご",
    "readings": [
      "ご"
    ],
    "meaning": "Số 5",
    "meaningEn": "Number 5",
    "meaningFr": "Chiffre 5",
    "meaningEs": "Número 5",
    "meaningKo": "숫자 5",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 74,
    "kanji": "五つ",
    "displayReading": "いつつ",
    "readings": [
      "いつつ"
    ],
    "meaning": "Năm cái",
    "meaningEn": "Five things",
    "meaningFr": "Cinq objets",
    "meaningEs": "Cinco objetos",
    "meaningKo": "다섯 개",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2011,
    "kanji": "六",
    "displayReading": "ろく",
    "readings": [
      "ろく"
    ],
    "meaning": "Số 6",
    "meaningEn": "Number 6",
    "meaningFr": "Chiffre 6",
    "meaningEs": "Número 6",
    "meaningKo": "숫자 6",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 77,
    "kanji": "六つ",
    "displayReading": "むっつ",
    "readings": [
      "むっつ"
    ],
    "meaning": "Sáu cái",
    "meaningEn": "Six things",
    "meaningFr": "Six objets",
    "meaningEs": "Seis objetos",
    "meaningKo": "여섯 개",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2013,
    "kanji": "七",
    "displayReading": "なな・しち",
    "readings": [
      "なな",
      "しち"
    ],
    "meaning": "Số 7",
    "meaningEn": "Number 7",
    "meaningFr": "Chiffre 7",
    "meaningEs": "Número 7",
    "meaningKo": "숫자 7",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 80,
    "kanji": "七つ",
    "displayReading": "ななつ",
    "readings": [
      "ななつ"
    ],
    "meaning": "Bảy cái",
    "meaningEn": "Seven things",
    "meaningFr": "Sept objets",
    "meaningEs": "Siete objetos",
    "meaningKo": "일곱 개",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2015,
    "kanji": "八",
    "displayReading": "はち",
    "readings": [
      "はち"
    ],
    "meaning": "Số 8",
    "meaningEn": "Number 8",
    "meaningFr": "Chiffre 8",
    "meaningEs": "Número 8",
    "meaningKo": "숫자 8",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 84,
    "kanji": "八つ",
    "displayReading": "やっつ",
    "readings": [
      "やっつ"
    ],
    "meaning": "Tám cái",
    "meaningEn": "Eight things",
    "meaningFr": "Huit objets",
    "meaningEs": "Ocho objetos",
    "meaningKo": "여덟 개",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2017,
    "kanji": "九",
    "displayReading": "きゅう・く",
    "readings": [
      "きゅう",
      "く"
    ],
    "meaning": "Số 9",
    "meaningEn": "Number 9",
    "meaningFr": "Chiffre 9",
    "meaningEs": "Número 9",
    "meaningKo": "숫자 9",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 88,
    "kanji": "九つ",
    "displayReading": "ここのつ",
    "readings": [
      "ここのつ"
    ],
    "meaning": "Chín cái",
    "meaningEn": "Nine things",
    "meaningFr": "Neuf objets",
    "meaningEs": "Nueve objetos",
    "meaningKo": "아홉 개",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 92,
    "kanji": "十",
    "displayReading": "じゅう",
    "readings": [
      "じゅう"
    ],
    "meaning": "Số 10",
    "meaningEn": "Number 10",
    "meaningFr": "Nombre 10",
    "meaningEs": "Número 10",
    "meaningKo": "숫자 10",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 122,
    "kanji": "百",
    "displayReading": "ひゃく",
    "readings": [
      "ひゃく"
    ],
    "meaning": "Một trăm (100)",
    "meaningEn": "One hundred (100)",
    "meaningFr": "Cent (100)",
    "meaningEs": "Cien (100)",
    "meaningKo": "백 (100)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 123,
    "kanji": "三百",
    "displayReading": "さんびゃく",
    "readings": [
      "さんびゃく"
    ],
    "meaning": "Ba trăm (300)",
    "meaningEn": "Three hundred (300)",
    "meaningFr": "Trois cents (300)",
    "meaningEs": "Trescientos (300)",
    "meaningKo": "삼백 (300)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2022,
    "kanji": "六百",
    "displayReading": "ろっぴゃく",
    "readings": [
      "ろっぴゃく"
    ],
    "meaning": "Sáu trăm (600)",
    "meaningEn": "Six hundred (600)",
    "meaningFr": "Six cents (600)",
    "meaningEs": "Seiscientos (600)",
    "meaningKo": "육백 (600)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 87,
    "kanji": "八百",
    "displayReading": "はっぴゃく",
    "readings": [
      "はっぴゃく"
    ],
    "meaning": "Tám trăm (800)",
    "meaningEn": "Eight hundred (800)",
    "meaningFr": "Huit cents (800)",
    "meaningEs": "Ochocientos (800)",
    "meaningKo": "팔백 (800)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 124,
    "kanji": "千",
    "displayReading": "せん",
    "readings": [
      "せん"
    ],
    "meaning": "Một nghìn (1.000)",
    "meaningEn": "One thousand (1,000)",
    "meaningFr": "Mille (1 000)",
    "meaningEs": "Mil (1 000)",
    "meaningKo": "천 (1,000)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 125,
    "kanji": "三千",
    "displayReading": "さんぜん",
    "readings": [
      "さんぜん"
    ],
    "meaning": "Ba nghìn (3.000)",
    "meaningEn": "Three thousand (3,000)",
    "meaningFr": "Trois mille (3 000)",
    "meaningEs": "Tres mil (3 000)",
    "meaningKo": "삼천 (3,000)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2026,
    "kanji": "八千",
    "displayReading": "はっせん",
    "readings": [
      "はっせん"
    ],
    "meaning": "Tám nghìn (8.000)",
    "meaningEn": "Eight thousand (8,000)",
    "meaningFr": "Huit mille (8 000)",
    "meaningEs": "Ocho mil (8 000)",
    "meaningKo": "팔천 (8,000)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 121,
    "kanji": "一万",
    "displayReading": "いちまん",
    "readings": [
      "いちまん"
    ],
    "meaning": "Mười nghìn (10.000)",
    "meaningEn": "Ten thousand (10,000)",
    "meaningFr": "Dix mille (10 000)",
    "meaningEs": "Diez mil (10 000)",
    "meaningKo": "만 (10,000)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 126,
    "kanji": "十万",
    "displayReading": "じゅうまん",
    "readings": [
      "じゅうまん"
    ],
    "meaning": "Một trăm nghìn (100.000)",
    "meaningEn": "One hundred thousand (100,000)",
    "meaningFr": "Cent mille (100 000)",
    "meaningEs": "Cien mil (100 000)",
    "meaningKo": "십만 (100,000)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2029,
    "kanji": "百万",
    "displayReading": "ひゃくまん",
    "readings": [
      "ひゃくまん"
    ],
    "meaning": "Một triệu (1.000.000)",
    "meaningEn": "One million (1,000,000)",
    "meaningFr": "Un million (1 000 000)",
    "meaningEs": "Un millón (1 000 000)",
    "meaningKo": "백만 (1,000,000)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 127,
    "kanji": "円",
    "displayReading": "えん",
    "readings": [
      "えん"
    ],
    "meaning": "Yên (tiền Nhật)",
    "meaningEn": "Yen (Japanese currency)",
    "meaningFr": "Yen (monnaie japonaise)",
    "meaningEs": "Yen (moneda japonesa)",
    "meaningKo": "엔 (일본 화폐)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 128,
    "kanji": "百円",
    "displayReading": "ひゃくえん",
    "readings": [
      "ひゃくえん"
    ],
    "meaning": "100 yên",
    "meaningEn": "100 yen",
    "meaningFr": "100 yens",
    "meaningEs": "100 yenes",
    "meaningKo": "100엔",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2032,
    "kanji": "千円",
    "displayReading": "せんえん",
    "readings": [
      "せんえん"
    ],
    "meaning": "1.000 yên",
    "meaningEn": "1,000 yen",
    "meaningFr": "1 000 yens",
    "meaningEs": "1 000 yenes",
    "meaningKo": "1,000엔",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2033,
    "kanji": "一万円",
    "displayReading": "いちまんえん",
    "readings": [
      "いちまんえん"
    ],
    "meaning": "10.000 yên",
    "meaningEn": "10,000 yen",
    "meaningFr": "10 000 yens",
    "meaningEs": "10 000 yenes",
    "meaningKo": "10,000엔",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 41,
    "kanji": "お金",
    "displayReading": "おかね",
    "readings": [
      "おかね"
    ],
    "meaning": "Tiền",
    "meaningEn": "Money",
    "meaningFr": "Argent, monnaie",
    "meaningEs": "Dinero",
    "meaningKo": "돈",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2035,
    "kanji": "半",
    "displayReading": "はん",
    "readings": [
      "はん"
    ],
    "meaning": "Một nửa, rưỡi",
    "meaningEn": "Half",
    "meaningFr": "Demi, moitié",
    "meaningEs": "Medio, mitad",
    "meaningKo": "반, 절반",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 32,
    "kanji": "半分",
    "displayReading": "はんぶん",
    "readings": [
      "はんぶん"
    ],
    "meaning": "Một nửa",
    "meaningEn": "Half (portion)",
    "meaningFr": "La moitié",
    "meaningEs": "La mitad",
    "meaningKo": "절반",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 97,
    "kanji": "半年",
    "displayReading": "はんとし",
    "readings": [
      "はんとし"
    ],
    "meaning": "Nửa năm",
    "meaningEn": "Half a year",
    "meaningFr": "Une demi-année (6 mois)",
    "meaningEs": "Medio año (6 meses)",
    "meaningKo": "반년 (6개월)",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2038,
    "kanji": "半日",
    "displayReading": "はんにち",
    "readings": [
      "はんにち"
    ],
    "meaning": "Nửa ngày",
    "meaningEn": "Half a day",
    "meaningFr": "Une demi-journée",
    "meaningEs": "Medio día",
    "meaningKo": "반나절",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 94,
    "kanji": "十分",
    "displayReading": "じゅうぶん",
    "readings": [
      "じゅうぶん"
    ],
    "meaning": "Đầy đủ",
    "meaningEn": "Enough, sufficient",
    "meaningFr": "Suffisant, assez",
    "meaningEs": "Suficiente, bastante",
    "meaningKo": "충분함, 넉넉함",
    "topicId": "n5_01",
    "level": "N5"
  },
  {
    "id": 2040,
    "kanji": "日",
    "displayReading": "ひ・にち",
    "readings": [
      "ひ",
      "にち"
    ],
    "meaning": "Ngày, mặt trời",
    "meaningEn": "Day, sun",
    "meaningFr": "Jour, soleil",
    "meaningEs": "Día, sol",
    "meaningKo": "날, 해",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2041,
    "kanji": "月",
    "displayReading": "つき・げつ",
    "readings": [
      "つき",
      "げつ"
    ],
    "meaning": "Tháng, mặt trăng",
    "meaningEn": "Month, moon",
    "meaningFr": "Mois, lune",
    "meaningEs": "Mes, luna",
    "meaningKo": "달, 월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 37,
    "kanji": "火",
    "displayReading": "ひ",
    "readings": [
      "ひ"
    ],
    "meaning": "Lửa",
    "meaningEn": "Fire",
    "meaningFr": "Feu",
    "meaningEs": "Fuego",
    "meaningKo": "불",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 10,
    "kanji": "水",
    "displayReading": "みず",
    "readings": [
      "みず"
    ],
    "meaning": "Nước",
    "meaningEn": "Water",
    "meaningFr": "Eau",
    "meaningEs": "Agua",
    "meaningKo": "물",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 39,
    "kanji": "木",
    "displayReading": "き",
    "readings": [
      "き"
    ],
    "meaning": "Cây, gỗ",
    "meaningEn": "Tree, wood",
    "meaningFr": "Arbre, bois",
    "meaningEs": "Árbol, madera",
    "meaningKo": "나무",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2045,
    "kanji": "金",
    "displayReading": "かね・きん",
    "readings": [
      "かね",
      "きん"
    ],
    "meaning": "Tiền, vàng",
    "meaningEn": "Money, gold",
    "meaningFr": "Argent, or",
    "meaningEs": "Dinero, oro",
    "meaningKo": "돈, 금",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 43,
    "kanji": "土",
    "displayReading": "つち",
    "readings": [
      "つち"
    ],
    "meaning": "Đất",
    "meaningEn": "Earth, soil",
    "meaningFr": "Terre, sol",
    "meaningEs": "Tierra, suelo",
    "meaningKo": "흙, 땅",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2047,
    "kanji": "曜日",
    "displayReading": "ようび",
    "readings": [
      "ようび"
    ],
    "meaning": "Thứ trong tuần",
    "meaningEn": "Day of the week",
    "meaningFr": "Jour de la semaine",
    "meaningEs": "Día de la semana",
    "meaningKo": "요일",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 33,
    "kanji": "月曜日",
    "displayReading": "げつようび",
    "readings": [
      "げつようび"
    ],
    "meaning": "Thứ Hai",
    "meaningEn": "Monday",
    "meaningFr": "Lundi",
    "meaningEs": "Lunes",
    "meaningKo": "월요일",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 36,
    "kanji": "火曜日",
    "displayReading": "かようび",
    "readings": [
      "かようび"
    ],
    "meaning": "Thứ Ba",
    "meaningEn": "Tuesday",
    "meaningFr": "Mardi",
    "meaningEs": "Martes",
    "meaningKo": "화요일",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 11,
    "kanji": "水曜日",
    "displayReading": "すいようび",
    "readings": [
      "すいようび"
    ],
    "meaning": "Thứ Tư",
    "meaningEn": "Wednesday",
    "meaningFr": "Mercredi",
    "meaningEs": "Miércoles",
    "meaningKo": "수요일",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 38,
    "kanji": "木曜日",
    "displayReading": "もくようび",
    "readings": [
      "もくようび"
    ],
    "meaning": "Thứ Năm",
    "meaningEn": "Thursday",
    "meaningFr": "Jeudi",
    "meaningEs": "Jueves",
    "meaningKo": "목요일",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 40,
    "kanji": "金曜日",
    "displayReading": "きんようび",
    "readings": [
      "きんようび"
    ],
    "meaning": "Thứ Sáu",
    "meaningEn": "Friday",
    "meaningFr": "Vendredi",
    "meaningEs": "Viernes",
    "meaningKo": "금요일",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 42,
    "kanji": "土曜日",
    "displayReading": "どようび",
    "readings": [
      "どようび"
    ],
    "meaning": "Thứ Bảy",
    "meaningEn": "Saturday",
    "meaningFr": "Samedi",
    "meaningEs": "Sábado",
    "meaningKo": "토요일",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 44,
    "kanji": "日曜日",
    "displayReading": "にちようび",
    "readings": [
      "にちようび"
    ],
    "meaning": "Chủ Nhật",
    "meaningEn": "Sunday",
    "meaningFr": "Dimanche",
    "meaningEs": "Domingo",
    "meaningKo": "일요일",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 59,
    "kanji": "一日",
    "displayReading": "ついたち",
    "readings": [
      "ついたち"
    ],
    "meaning": "Ngày mùng 1",
    "meaningEn": "1st day of the month",
    "meaningFr": "Le 1er du mois",
    "meaningEs": "Día 1 del mes",
    "meaningKo": "초하루 (1일)",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2056,
    "kanji": "一日",
    "displayReading": "いちにち",
    "readings": [
      "いちにち"
    ],
    "meaning": "Một ngày",
    "meaningEn": "One day",
    "meaningFr": "Une journée",
    "meaningEs": "Un día",
    "meaningKo": "하루 (1일간)",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 63,
    "kanji": "二日",
    "displayReading": "ふつか",
    "readings": [
      "ふつか"
    ],
    "meaning": "Ngày mùng 2 / 2 ngày",
    "meaningEn": "2nd day / 2 days",
    "meaningFr": "Le 2 du mois / 2 jours",
    "meaningEs": "Día 2 del mes / 2 días",
    "meaningKo": "2일 / 이틀",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 66,
    "kanji": "三日",
    "displayReading": "みっか",
    "readings": [
      "みっか"
    ],
    "meaning": "Ngày mùng 3 / 3 ngày",
    "meaningEn": "3rd day / 3 days",
    "meaningFr": "Le 3 du mois / 3 jours",
    "meaningEs": "Día 3 del mes / 3 días",
    "meaningKo": "3일 / 사흘",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 69,
    "kanji": "四日",
    "displayReading": "よっか",
    "readings": [
      "よっか"
    ],
    "meaning": "Ngày mùng 4 / 4 ngày",
    "meaningEn": "4th day / 4 days",
    "meaningFr": "Le 4 du mois / 4 jours",
    "meaningEs": "Día 4 del mes / 4 días",
    "meaningKo": "4일 / 나흘",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 75,
    "kanji": "五日",
    "displayReading": "いつか",
    "readings": [
      "いつか"
    ],
    "meaning": "Ngày mùng 5 / 5 ngày",
    "meaningEn": "5th day / 5 days",
    "meaningFr": "Le 5 du mois / 5 jours",
    "meaningEs": "Día 5 del mes / 5 días",
    "meaningKo": "5일 / 닷새",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 78,
    "kanji": "六日",
    "displayReading": "むいか",
    "readings": [
      "むいか"
    ],
    "meaning": "Ngày mùng 6 / 6 ngày",
    "meaningEn": "6th day / 6 days",
    "meaningFr": "Le 6 du mois / 6 jours",
    "meaningEs": "Día 6 del mes / 6 días",
    "meaningKo": "6일 / 엿새",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 81,
    "kanji": "七日",
    "displayReading": "なのか",
    "readings": [
      "なのか"
    ],
    "meaning": "Ngày mùng 7 / 7 ngày",
    "meaningEn": "7th day / 7 days",
    "meaningFr": "Le 7 du mois / 7 jours",
    "meaningEs": "Día 7 del mes / 7 días",
    "meaningKo": "7일 / 이레",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 85,
    "kanji": "八日",
    "displayReading": "ようか",
    "readings": [
      "ようか"
    ],
    "meaning": "Ngày mùng 8 / 8 ngày",
    "meaningEn": "8th day / 8 days",
    "meaningFr": "Le 8 du mois / 8 jours",
    "meaningEs": "Día 8 del mes / 8 días",
    "meaningKo": "8일 / 여드레",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 89,
    "kanji": "九日",
    "displayReading": "ここのか",
    "readings": [
      "ここのか"
    ],
    "meaning": "Ngày mùng 9 / 9 ngày",
    "meaningEn": "9th day / 9 days",
    "meaningFr": "Le 9 du mois / 9 jours",
    "meaningEs": "Día 9 del mes / 9 días",
    "meaningKo": "9일 / 아흐레",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 95,
    "kanji": "十日",
    "displayReading": "とおか",
    "readings": [
      "とおか"
    ],
    "meaning": "Ngày mùng 10 / 10 ngày",
    "meaningEn": "10th day / 10 days",
    "meaningFr": "Le 10 du mois / 10 jours",
    "meaningEs": "Día 10 del mes / 10 días",
    "meaningKo": "10일 / 열흘",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2066,
    "kanji": "二十日",
    "displayReading": "はつか",
    "readings": [
      "はつか"
    ],
    "meaning": "Ngày 20 / 20 ngày",
    "meaningEn": "20th day / 20 days",
    "meaningFr": "Le 20 du mois / 20 jours",
    "meaningEs": "Día 20 del mes / 20 días",
    "meaningKo": "20일 / 스무날 / 스무 살",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 34,
    "kanji": "一月",
    "displayReading": "いちがつ",
    "readings": [
      "いちがつ"
    ],
    "meaning": "Tháng 1",
    "meaningEn": "January",
    "meaningFr": "Janvier",
    "meaningEs": "Enero",
    "meaningKo": "1월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2068,
    "kanji": "二月",
    "displayReading": "にがつ",
    "readings": [
      "にがつ"
    ],
    "meaning": "Tháng 2",
    "meaningEn": "February",
    "meaningFr": "Février",
    "meaningEs": "Febrero",
    "meaningKo": "2월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 67,
    "kanji": "三月",
    "displayReading": "さんがつ",
    "readings": [
      "さんがつ"
    ],
    "meaning": "Tháng 3",
    "meaningEn": "March",
    "meaningFr": "Mars",
    "meaningEs": "Marzo",
    "meaningKo": "3월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 70,
    "kanji": "四月",
    "displayReading": "しがつ",
    "readings": [
      "しがつ"
    ],
    "meaning": "Tháng 4",
    "meaningEn": "April",
    "meaningFr": "Avril",
    "meaningEs": "Abril",
    "meaningKo": "4월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 76,
    "kanji": "五月",
    "displayReading": "ごがつ",
    "readings": [
      "ごがつ"
    ],
    "meaning": "Tháng 5",
    "meaningEn": "May",
    "meaningFr": "Mai",
    "meaningEs": "Mayo",
    "meaningKo": "5월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 79,
    "kanji": "六月",
    "displayReading": "ろくがつ",
    "readings": [
      "ろくがつ"
    ],
    "meaning": "Tháng 6",
    "meaningEn": "June",
    "meaningFr": "Juin",
    "meaningEs": "Junio",
    "meaningKo": "6월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 82,
    "kanji": "七月",
    "displayReading": "しちがつ",
    "readings": [
      "しちがつ"
    ],
    "meaning": "Tháng 7",
    "meaningEn": "July",
    "meaningFr": "Juillet",
    "meaningEs": "Julio",
    "meaningKo": "7월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 86,
    "kanji": "八月",
    "displayReading": "はちがつ",
    "readings": [
      "はちがつ"
    ],
    "meaning": "Tháng 8",
    "meaningEn": "August",
    "meaningFr": "Août",
    "meaningEs": "Agosto",
    "meaningKo": "8월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 90,
    "kanji": "九月",
    "displayReading": "くがつ",
    "readings": [
      "くがつ"
    ],
    "meaning": "Tháng 9",
    "meaningEn": "September",
    "meaningFr": "Septembre",
    "meaningEs": "Septiembre",
    "meaningKo": "9월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2076,
    "kanji": "十月",
    "displayReading": "じゅうがつ",
    "readings": [
      "じゅうがつ"
    ],
    "meaning": "Tháng 10",
    "meaningEn": "October",
    "meaningFr": "Octobre",
    "meaningEs": "Octubre",
    "meaningKo": "10월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2077,
    "kanji": "十一月",
    "displayReading": "じゅういちがつ",
    "readings": [
      "じゅういちがつ"
    ],
    "meaning": "Tháng 11",
    "meaningEn": "November",
    "meaningFr": "Novembre",
    "meaningEs": "Noviembre",
    "meaningKo": "11월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2078,
    "kanji": "十二月",
    "displayReading": "じゅうにがつ",
    "readings": [
      "じゅうにがつ"
    ],
    "meaning": "Tháng 12",
    "meaningEn": "December",
    "meaningFr": "Décembre",
    "meaningEs": "Diciembre",
    "meaningKo": "12월",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 101,
    "kanji": "一ヶ月",
    "displayReading": "いっかげつ",
    "readings": [
      "いっかげつ"
    ],
    "meaning": "Một tháng (khoảng thời gian)",
    "meaningEn": "One month (duration)",
    "meaningFr": "Un mois (durée)",
    "meaningEs": "Un mes (duración)",
    "meaningKo": "1개월 (한 달간)",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2080,
    "kanji": "年",
    "displayReading": "とし・ねん",
    "readings": [
      "とし",
      "ねん"
    ],
    "meaning": "Năm",
    "meaningEn": "Year",
    "meaningFr": "Année",
    "meaningEs": "Año",
    "meaningKo": "해, 년",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2081,
    "kanji": "時",
    "displayReading": "とき・じ",
    "readings": [
      "とき",
      "じ"
    ],
    "meaning": "Khi, lúc, giờ",
    "meaningEn": "Time, hour, o'clock",
    "meaningFr": "Heure, moment",
    "meaningEs": "Hora, momento",
    "meaningKo": "시, 때",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 26,
    "kanji": "時間",
    "displayReading": "じかん",
    "readings": [
      "じかん"
    ],
    "meaning": "Thời gian, tiếng đồng hồ",
    "meaningEn": "Time, hours",
    "meaningFr": "Temps, durée (heures)",
    "meaningEs": "Tiempo, horas (duración)",
    "meaningKo": "시간",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 27,
    "kanji": "何時",
    "displayReading": "なんじ",
    "readings": [
      "なんじ"
    ],
    "meaning": "Mấy giờ",
    "meaningEn": "What time",
    "meaningFr": "Quelle heure",
    "meaningEs": "Qué hora",
    "meaningKo": "몇 시",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 72,
    "kanji": "四時",
    "displayReading": "よじ",
    "readings": [
      "よじ"
    ],
    "meaning": "4 giờ",
    "meaningEn": "4 o'clock",
    "meaningFr": "4 heures",
    "meaningEs": "Las 4 en punto",
    "meaningKo": "4시",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 31,
    "kanji": "三時半",
    "displayReading": "さんじはん",
    "readings": [
      "さんじはん"
    ],
    "meaning": "3 giờ rưỡi",
    "meaningEn": "3:30",
    "meaningFr": "3 heures et demie",
    "meaningEs": "Las 3 y media",
    "meaningKo": "3시 반",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2086,
    "kanji": "分",
    "displayReading": "ふん・ぷん",
    "readings": [
      "ふん",
      "ぷん"
    ],
    "meaning": "Phút",
    "meaningEn": "Minute",
    "meaningFr": "Minute",
    "meaningEs": "Minuto",
    "meaningKo": "분",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 93,
    "kanji": "十分",
    "displayReading": "じゅっぷん",
    "readings": [
      "じゅっぷん",
      "じっぷん"
    ],
    "meaning": "10 phút",
    "meaningEn": "10 minutes",
    "meaningFr": "10 minutes",
    "meaningEs": "10 minutos",
    "meaningKo": "10분",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 29,
    "kanji": "分かる",
    "displayReading": "わかる",
    "readings": [
      "わかる"
    ],
    "meaning": "Hiểu",
    "meaningEn": "Understand",
    "meaningFr": "Comprendre",
    "meaningEs": "Entender, comprender",
    "meaningKo": "알다, 이해하다",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2089,
    "kanji": "間",
    "displayReading": "あいだ・ま",
    "readings": [
      "あいだ",
      "ま"
    ],
    "meaning": "Khoảng giữa, khoảng thời gian",
    "meaningEn": "Between, interval",
    "meaningFr": "Entre, intervalle",
    "meaningEs": "Entre, intervalo",
    "meaningKo": "사이, 간격",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 64,
    "kanji": "二日間",
    "displayReading": "ふつかかん",
    "readings": [
      "ふつかかん"
    ],
    "meaning": "Trong vòng 2 ngày",
    "meaningEn": "Two days (duration)",
    "meaningFr": "Pendant 2 jours",
    "meaningEs": "Durante 2 días",
    "meaningKo": "이틀 동안",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 190,
    "kanji": "今",
    "displayReading": "いま",
    "readings": [
      "いま"
    ],
    "meaning": "Bây giờ",
    "meaningEn": "Now",
    "meaningFr": "Maintenant",
    "meaningEs": "Ahora",
    "meaningKo": "지금",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 46,
    "kanji": "今日",
    "displayReading": "きょう",
    "readings": [
      "きょう"
    ],
    "meaning": "Hôm nay",
    "meaningEn": "Today",
    "meaningFr": "Aujourd'hui",
    "meaningEs": "Hoy",
    "meaningKo": "오늘",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 35,
    "kanji": "今月",
    "displayReading": "こんげつ",
    "readings": [
      "こんげつ"
    ],
    "meaning": "Tháng này",
    "meaningEn": "This month",
    "meaningFr": "Ce mois-ci",
    "meaningEs": "Este mes",
    "meaningKo": "이번 달",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 96,
    "kanji": "今年",
    "displayReading": "ことし",
    "readings": [
      "ことし"
    ],
    "meaning": "Năm nay",
    "meaningEn": "This year",
    "meaningFr": "Cette année",
    "meaningEs": "Este año",
    "meaningKo": "올해, 금년",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 191,
    "kanji": "今週",
    "displayReading": "こんしゅう",
    "readings": [
      "こんしゅう"
    ],
    "meaning": "Tuần này",
    "meaningEn": "This week",
    "meaningFr": "Cette semaine",
    "meaningEs": "Esta semana",
    "meaningKo": "이번 주",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 45,
    "kanji": "毎日",
    "displayReading": "まいにち",
    "readings": [
      "まいにち"
    ],
    "meaning": "Mỗi ngày",
    "meaningEn": "Every day",
    "meaningFr": "Tous les jours",
    "meaningEs": "Todos los días",
    "meaningKo": "매일",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2097,
    "kanji": "毎週",
    "displayReading": "まいしゅう",
    "readings": [
      "まいしゅう"
    ],
    "meaning": "Mỗi tuần",
    "meaningEn": "Every week",
    "meaningFr": "Chaque semaine",
    "meaningEs": "Cada semana",
    "meaningKo": "매주",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 102,
    "kanji": "毎月",
    "displayReading": "まいつき",
    "readings": [
      "まいつき"
    ],
    "meaning": "Mỗi tháng",
    "meaningEn": "Every month",
    "meaningFr": "Chaque mois",
    "meaningEs": "Cada mes",
    "meaningKo": "매월, 매달",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 98,
    "kanji": "毎年",
    "displayReading": "まいとし・まいねん",
    "readings": [
      "まいとし",
      "まいねん"
    ],
    "meaning": "Mỗi năm",
    "meaningEn": "Every year",
    "meaningFr": "Chaque année",
    "meaningEs": "Cada año",
    "meaningKo": "매년, 해마다",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 271,
    "kanji": "午前",
    "displayReading": "ごぜん",
    "readings": [
      "ごぜん"
    ],
    "meaning": "Buổi sáng (trước trưa)",
    "meaningEn": "Morning, AM",
    "meaningFr": "Matin (AM)",
    "meaningEs": "Mañana (a. m.)",
    "meaningKo": "오전",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 272,
    "kanji": "午後",
    "displayReading": "ごご",
    "readings": [
      "ごご"
    ],
    "meaning": "Buổi chiều (sau trưa)",
    "meaningEn": "Afternoon, PM",
    "meaningFr": "Après-midi (PM)",
    "meaningEs": "Tarde (p. m.)",
    "meaningKo": "오후",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 270,
    "kanji": "前",
    "displayReading": "まえ",
    "readings": [
      "まえ"
    ],
    "meaning": "Trước, phía trước",
    "meaningEn": "Before, in front",
    "meaningFr": "Avant, devant",
    "meaningEs": "Antes, delante",
    "meaningKo": "앞, 이전",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 344,
    "kanji": "後",
    "displayReading": "あと",
    "readings": [
      "あと"
    ],
    "meaning": "Sau",
    "meaningEn": "After, later",
    "meaningFr": "Après, plus tard",
    "meaningEs": "Después, más tarde",
    "meaningKo": "뒤, 나중",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 345,
    "kanji": "後ろ",
    "displayReading": "うしろ",
    "readings": [
      "うしろ"
    ],
    "meaning": "Phía sau",
    "meaningEn": "Behind, back",
    "meaningFr": "Derrière",
    "meaningEs": "Detrás",
    "meaningKo": "뒤쪽",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 347,
    "kanji": "最後",
    "displayReading": "さいご",
    "readings": [
      "さいご"
    ],
    "meaning": "Cuối cùng",
    "meaningEn": "Last, final",
    "meaningFr": "La fin, le dernier",
    "meaningEs": "El final, el último",
    "meaningKo": "마지막",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 337,
    "kanji": "先",
    "displayReading": "さき",
    "readings": [
      "さき"
    ],
    "meaning": "Trước, phía trước",
    "meaningEn": "Ahead, previous",
    "meaningFr": "Avant, devant, bout",
    "meaningEs": "Antes, adelante, punta",
    "meaningKo": "앞, 끝, 먼저",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 343,
    "kanji": "先に",
    "displayReading": "さきに",
    "readings": [
      "さきに"
    ],
    "meaning": "Trước, làm trước",
    "meaningEn": "First, ahead",
    "meaningFr": "En premier, d'avance",
    "meaningEs": "Primero, de antemano",
    "meaningKo": "먼저, 미리",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 339,
    "kanji": "先週",
    "displayReading": "せんしゅう",
    "readings": [
      "せんしゅう"
    ],
    "meaning": "Tuần trước",
    "meaningEn": "Last week",
    "meaningFr": "La semaine dernière",
    "meaningEs": "La semana pasada",
    "meaningKo": "지난주",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 340,
    "kanji": "先月",
    "displayReading": "せんげつ",
    "readings": [
      "せんげつ"
    ],
    "meaning": "Tháng trước",
    "meaningEn": "Last month",
    "meaningFr": "Le mois dernier",
    "meaningEs": "El mes pasado",
    "meaningKo": "지난달",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 341,
    "kanji": "先日",
    "displayReading": "せんじつ",
    "readings": [
      "せんじつ"
    ],
    "meaning": "Hôm trước",
    "meaningEn": "The other day",
    "meaningFr": "L'autre jour",
    "meaningEs": "El otro día",
    "meaningKo": "요전 날, 일전",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 83,
    "kanji": "七夕",
    "displayReading": "たなばた",
    "readings": [
      "たなばた"
    ],
    "meaning": "Lễ Thất Tịch",
    "meaningEn": "Tanabata (Star Festival)",
    "meaningFr": "Tanabata (fête des étoiles)",
    "meaningEs": "Tanabata (festival de las estrellas)",
    "meaningKo": "칠석",
    "topicId": "n5_02",
    "level": "N5"
  },
  {
    "id": 2112,
    "kanji": "人",
    "displayReading": "ひと",
    "readings": [
      "ひと"
    ],
    "meaning": "Người",
    "meaningEn": "Person",
    "meaningFr": "Personne",
    "meaningEs": "Persona",
    "meaningKo": "사람",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 58,
    "kanji": "一人",
    "displayReading": "ひとり",
    "readings": [
      "ひとり"
    ],
    "meaning": "Một người",
    "meaningEn": "One person, alone",
    "meaningFr": "Une personne, seul",
    "meaningEs": "Una persona, solo",
    "meaningKo": "한 사람, 혼자",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 62,
    "kanji": "二人",
    "displayReading": "ふたり",
    "readings": [
      "ふたり"
    ],
    "meaning": "Hai người",
    "meaningEn": "Two people",
    "meaningFr": "Deux personnes",
    "meaningEs": "Dos personas",
    "meaningKo": "두 사람",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 71,
    "kanji": "四人",
    "displayReading": "よにん",
    "readings": [
      "よにん"
    ],
    "meaning": "Bốn người",
    "meaningEn": "Four people",
    "meaningFr": "Quatre personnes",
    "meaningEs": "Cuatro personas",
    "meaningKo": "네 사람",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 91,
    "kanji": "九人",
    "displayReading": "きゅうにん",
    "readings": [
      "きゅうにん"
    ],
    "meaning": "Chín người",
    "meaningEn": "Nine people",
    "meaningFr": "Neuf personnes",
    "meaningEs": "Nueve personas",
    "meaningKo": "아홉 사람",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 154,
    "kanji": "人々",
    "displayReading": "ひとびと",
    "readings": [
      "ひとびと"
    ],
    "meaning": "Mọi người",
    "meaningEn": "People, everyone",
    "meaningFr": "Les gens",
    "meaningEs": "La gente, las personas",
    "meaningKo": "사람들",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 155,
    "kanji": "人間",
    "displayReading": "にんげん",
    "readings": [
      "にんげん"
    ],
    "meaning": "Con người, nhân loại",
    "meaningEn": "Human being",
    "meaningFr": "Être humain",
    "meaningEs": "Ser humano",
    "meaningKo": "인간",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2119,
    "kanji": "大人",
    "displayReading": "おとな",
    "readings": [
      "おとな"
    ],
    "meaning": "Người lớn",
    "meaningEn": "Adult",
    "meaningFr": "Adulte",
    "meaningEs": "Adulto",
    "meaningKo": "어른, 성인",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2120,
    "kanji": "父",
    "displayReading": "ちち",
    "readings": [
      "ちち"
    ],
    "meaning": "Bố (của mình)",
    "meaningEn": "Father (humble)",
    "meaningFr": "Mon père",
    "meaningEs": "Mi padre",
    "meaningKo": "나의 아버지",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2121,
    "kanji": "お父さん",
    "displayReading": "おとうさん",
    "readings": [
      "おとうさん"
    ],
    "meaning": "Bố",
    "meaningEn": "Father",
    "meaningFr": "Père (poli)",
    "meaningEs": "Padre (cortés)",
    "meaningKo": "아버지 (높임말)",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 145,
    "kanji": "父親",
    "displayReading": "ちちおや",
    "readings": [
      "ちちおや"
    ],
    "meaning": "Người cha",
    "meaningEn": "Father (formal)",
    "meaningFr": "Père (formel)",
    "meaningEs": "Padre (formal)",
    "meaningKo": "부친 (격식)",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2123,
    "kanji": "母",
    "displayReading": "はは",
    "readings": [
      "はは"
    ],
    "meaning": "Mẹ (của mình)",
    "meaningEn": "Mother (humble)",
    "meaningFr": "Ma mère",
    "meaningEs": "Mi madre",
    "meaningKo": "나의 어머니",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2124,
    "kanji": "お母さん",
    "displayReading": "おかあさん",
    "readings": [
      "おかあさん"
    ],
    "meaning": "Mẹ",
    "meaningEn": "Mother",
    "meaningFr": "Mère (poli)",
    "meaningEs": "Madre (cortés)",
    "meaningKo": "어머니 (높임말)",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 146,
    "kanji": "母親",
    "displayReading": "ははおや",
    "readings": [
      "ははおや"
    ],
    "meaning": "Người mẹ",
    "meaningEn": "Mother (formal)",
    "meaningFr": "Mère (formel)",
    "meaningEs": "Madre (formal)",
    "meaningKo": "모친 (격식)",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2126,
    "kanji": "子",
    "displayReading": "こ",
    "readings": [
      "こ"
    ],
    "meaning": "Trẻ em, con cái",
    "meaningEn": "Child",
    "meaningFr": "Enfant",
    "meaningEs": "Niño, hijo",
    "meaningKo": "아이",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2127,
    "kanji": "子供",
    "displayReading": "こども",
    "readings": [
      "こども"
    ],
    "meaning": "Trẻ con",
    "meaningEn": "Children",
    "meaningFr": "Enfants",
    "meaningEs": "Niños",
    "meaningKo": "아이들",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2128,
    "kanji": "男",
    "displayReading": "おとこ",
    "readings": [
      "おとこ"
    ],
    "meaning": "Đàn ông, nam giới",
    "meaningEn": "Man, male",
    "meaningFr": "Homme",
    "meaningEs": "Hombre",
    "meaningKo": "남자",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 149,
    "kanji": "男の人",
    "displayReading": "おとこのひと",
    "readings": [
      "おとこのひと"
    ],
    "meaning": "Người đàn ông",
    "meaningEn": "Man (adult male)",
    "meaningFr": "Un homme",
    "meaningEs": "Un hombre",
    "meaningKo": "남자 사람",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2130,
    "kanji": "男の子",
    "displayReading": "おとこのこ",
    "readings": [
      "おとこのこ"
    ],
    "meaning": "Bé trai",
    "meaningEn": "Boy",
    "meaningFr": "Garçon",
    "meaningEs": "Niño, chico",
    "meaningKo": "남자아이",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 150,
    "kanji": "男子",
    "displayReading": "だんし",
    "readings": [
      "だんし"
    ],
    "meaning": "Nam sinh, con trai",
    "meaningEn": "Male student, boy",
    "meaningFr": "Jeune garçon, élève masculin",
    "meaningEs": "Muchacho, alumno varón",
    "meaningKo": "남학생, 남자",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2132,
    "kanji": "女",
    "displayReading": "おんな",
    "readings": [
      "おんな"
    ],
    "meaning": "Phụ nữ, nữ giới",
    "meaningEn": "Woman, female",
    "meaningFr": "Femme",
    "meaningEs": "Mujer",
    "meaningKo": "여자",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 151,
    "kanji": "女の人",
    "displayReading": "おんなのひと",
    "readings": [
      "おんなのひと"
    ],
    "meaning": "Người phụ nữ",
    "meaningEn": "Woman (adult female)",
    "meaningFr": "Une femme",
    "meaningEs": "Una mujer",
    "meaningKo": "여자 사람",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 148,
    "kanji": "女の子",
    "displayReading": "おんなのこ",
    "readings": [
      "おんなのこ"
    ],
    "meaning": "Bé gái",
    "meaningEn": "Girl",
    "meaningFr": "Fille",
    "meaningEs": "Niña, chica",
    "meaningKo": "여자아이",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 152,
    "kanji": "女子",
    "displayReading": "じょし",
    "readings": [
      "じょし"
    ],
    "meaning": "Nữ sinh, con gái",
    "meaningEn": "Female student, girl",
    "meaningFr": "Jeune fille, élève féminine",
    "meaningEs": "Muchacha, alumna",
    "meaningKo": "여학생, 여자",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 369,
    "kanji": "友",
    "displayReading": "とも",
    "readings": [
      "とも"
    ],
    "meaning": "Bạn",
    "meaningEn": "Friend",
    "meaningFr": "Ami",
    "meaningEs": "Amigo",
    "meaningKo": "친구",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 370,
    "kanji": "友達",
    "displayReading": "ともだち",
    "readings": [
      "ともだち"
    ],
    "meaning": "Bạn bè",
    "meaningEn": "Friend, friends",
    "meaningFr": "Ami, camarade",
    "meaningEs": "Amigo, compañero",
    "meaningKo": "친구, 벗",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 371,
    "kanji": "友人",
    "displayReading": "ゆうじん",
    "readings": [
      "ゆうじん"
    ],
    "meaning": "Người bạn, bạn thân",
    "meaningEn": "Friend (formal)",
    "meaningFr": "Ami (formel)",
    "meaningEs": "Amigo (formal)",
    "meaningKo": "우인, 친구 (격식)",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2139,
    "kanji": "名",
    "displayReading": "な",
    "readings": [
      "な"
    ],
    "meaning": "Tên",
    "meaningEn": "Name",
    "meaningFr": "Nom, prénom",
    "meaningEs": "Nombre",
    "meaningKo": "이름",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2140,
    "kanji": "名前",
    "displayReading": "なまえ",
    "readings": [
      "なまえ"
    ],
    "meaning": "Tên, họ tên",
    "meaningEn": "Full name, name",
    "meaningFr": "Nom complet",
    "meaningEs": "Nombre completo",
    "meaningKo": "성명",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2141,
    "kanji": "名字",
    "displayReading": "みょうじ",
    "readings": [
      "みょうじ"
    ],
    "meaning": "Họ",
    "meaningEn": "Family name, surname",
    "meaningFr": "Nom de famille",
    "meaningEs": "Apellido",
    "meaningKo": "성씨",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2142,
    "kanji": "私",
    "displayReading": "わたし",
    "readings": [
      "わたし"
    ],
    "meaning": "Tôi",
    "meaningEn": "I, me",
    "meaningFr": "Je, moi",
    "meaningEs": "Yo",
    "meaningKo": "나, 저",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 156,
    "kanji": "何",
    "displayReading": "なに・なん",
    "readings": [
      "なに",
      "なん"
    ],
    "meaning": "Cái gì",
    "meaningEn": "What",
    "meaningFr": "Quoi, que",
    "meaningEs": "Qué",
    "meaningKo": "무엇",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 157,
    "kanji": "何人",
    "displayReading": "なんにん",
    "readings": [
      "なんにん"
    ],
    "meaning": "Mấy người",
    "meaningEn": "How many people",
    "meaningFr": "Combien de personnes",
    "meaningEs": "Cuántas personas",
    "meaningKo": "몇 명",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 158,
    "kanji": "何人",
    "displayReading": "なにじん",
    "readings": [
      "なにじん"
    ],
    "meaning": "Người nước nào",
    "meaningEn": "What nationality",
    "meaningFr": "Quelle nationalité",
    "meaningEs": "Qué nacionalidad",
    "meaningKo": "어느 나라 사람",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 30,
    "kanji": "自分",
    "displayReading": "じぶん",
    "readings": [
      "じぶん"
    ],
    "meaning": "Bản thân, chính mình",
    "meaningEn": "Oneself",
    "meaningFr": "Soi-même",
    "meaningEs": "Uno mismo",
    "meaningKo": "자신, 자기",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 153,
    "kanji": "人生",
    "displayReading": "じんせい",
    "readings": [
      "じんせい"
    ],
    "meaning": "Cuộc đời, cuộc sống",
    "meaningEn": "Human life",
    "meaningFr": "La vie humaine",
    "meaningEs": "La vida humana",
    "meaningKo": "인생",
    "topicId": "n5_03",
    "level": "N5"
  },
  {
    "id": 2148,
    "kanji": "上",
    "displayReading": "うえ",
    "readings": [
      "うえ"
    ],
    "meaning": "Bên trên",
    "meaningEn": "Above, up",
    "meaningFr": "Au-dessus, haut",
    "meaningEs": "Arriba, encima",
    "meaningKo": "위",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2149,
    "kanji": "上がる",
    "displayReading": "あがる",
    "readings": [
      "あがる"
    ],
    "meaning": "Đi lên, tăng lên",
    "meaningEn": "Go up, rise",
    "meaningFr": "Monter, augmenter",
    "meaningEs": "Subir, aumentar",
    "meaningKo": "오르다",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2150,
    "kanji": "上げる",
    "displayReading": "あげる",
    "readings": [
      "あげる"
    ],
    "meaning": "Đưa lên, tặng",
    "meaningEn": "Raise, give",
    "meaningFr": "Lever, offrir",
    "meaningEs": "Levantar, dar",
    "meaningKo": "올리다, 드리다",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2151,
    "kanji": "下",
    "displayReading": "した",
    "readings": [
      "した"
    ],
    "meaning": "Bên dưới",
    "meaningEn": "Below, down",
    "meaningFr": "Au-dessous, bas",
    "meaningEs": "Abajo, debajo",
    "meaningKo": "아래, 밑",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2152,
    "kanji": "下がる",
    "displayReading": "さがる",
    "readings": [
      "さがる"
    ],
    "meaning": "Đi xuống, giảm xuống",
    "meaningEn": "Go down, drop",
    "meaningFr": "Descendre, baisser",
    "meaningEs": "Bajar, descender",
    "meaningKo": "내려가다",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2153,
    "kanji": "下げる",
    "displayReading": "さげる",
    "readings": [
      "さげる"
    ],
    "meaning": "Hạ xuống",
    "meaningEn": "Lower, hang down",
    "meaningFr": "Baisser, abaisser",
    "meaningEs": "Bajar (algo)",
    "meaningKo": "내리다",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 306,
    "kanji": "左",
    "displayReading": "ひだり",
    "readings": [
      "ひだり"
    ],
    "meaning": "Bên trái",
    "meaningEn": "Left",
    "meaningFr": "Gauche",
    "meaningEs": "Izquierda",
    "meaningKo": "왼쪽",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 308,
    "kanji": "左側",
    "displayReading": "ひだりがわ",
    "readings": [
      "ひだりがわ"
    ],
    "meaning": "Phía bên trái",
    "meaningEn": "Left side",
    "meaningFr": "Côté gauche",
    "meaningEs": "Lado izquierdo",
    "meaningKo": "좌측",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 303,
    "kanji": "右",
    "displayReading": "みぎ",
    "readings": [
      "みぎ"
    ],
    "meaning": "Bên phải",
    "meaningEn": "Right",
    "meaningFr": "Droite",
    "meaningEs": "Derecha",
    "meaningKo": "오른쪽",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 305,
    "kanji": "右側",
    "displayReading": "みぎがわ",
    "readings": [
      "みぎがわ"
    ],
    "meaning": "Phía bên phải",
    "meaningEn": "Right side",
    "meaningFr": "Côté droit",
    "meaningEs": "Lado derecho",
    "meaningKo": "우측",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 309,
    "kanji": "左右",
    "displayReading": "さゆう",
    "readings": [
      "さゆう"
    ],
    "meaning": "Trái phải",
    "meaningEn": "Left and right",
    "meaningFr": "Gauche et droite",
    "meaningEs": "Izquierda y derecha",
    "meaningKo": "좌우",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 175,
    "kanji": "中",
    "displayReading": "なか",
    "readings": [
      "なか"
    ],
    "meaning": "Bên trong, ở giữa",
    "meaningEn": "Inside, middle",
    "meaningFr": "À l'intérieur, milieu",
    "meaningEs": "Dentro, medio",
    "meaningKo": "안, 가운데",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 60,
    "kanji": "一日中",
    "displayReading": "いちにちじゅう",
    "readings": [
      "いちにちじゅう"
    ],
    "meaning": "Suốt cả ngày",
    "meaningEn": "All day long",
    "meaningFr": "Toute la journée",
    "meaningEs": "Todo el día",
    "meaningKo": "하루 종일",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2161,
    "kanji": "内",
    "displayReading": "うち",
    "readings": [
      "うち"
    ],
    "meaning": "Bên trong",
    "meaningEn": "Inside, within",
    "meaningFr": "Dedans, intérieur",
    "meaningEs": "Adentro, interior",
    "meaningKo": "안쪽, 집 안",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2162,
    "kanji": "案内",
    "displayReading": "あんない",
    "readings": [
      "あんない"
    ],
    "meaning": "Hướng dẫn",
    "meaningEn": "Guidance, information",
    "meaningFr": "Guide, renseignements",
    "meaningEs": "Guía, información",
    "meaningKo": "안내",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 167,
    "kanji": "外",
    "displayReading": "そと",
    "readings": [
      "そと"
    ],
    "meaning": "Bên ngoài",
    "meaningEn": "Outside",
    "meaningFr": "Dehors, extérieur",
    "meaningEs": "Afuera, exterior",
    "meaningKo": "밖, 바깥",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 165,
    "kanji": "外国",
    "displayReading": "がいこく",
    "readings": [
      "がいこく"
    ],
    "meaning": "Nước ngoài",
    "meaningEn": "Foreign country",
    "meaningFr": "Pays étranger",
    "meaningEs": "País extranjero",
    "meaningKo": "외국",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 168,
    "kanji": "外国人",
    "displayReading": "がいこくじん",
    "readings": [
      "がいこくじん"
    ],
    "meaning": "Người nước ngoài",
    "meaningEn": "Foreigner",
    "meaningFr": "Étranger (personne)",
    "meaningEs": "Extranjero (persona)",
    "meaningKo": "외국인",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 103,
    "kanji": "東",
    "displayReading": "ひがし",
    "readings": [
      "ひがし"
    ],
    "meaning": "Phía Đông",
    "meaningEn": "East",
    "meaningFr": "Est",
    "meaningEs": "Este",
    "meaningKo": "동쪽",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 104,
    "kanji": "東口",
    "displayReading": "ひがしぐち",
    "readings": [
      "ひがしぐち"
    ],
    "meaning": "Cửa Đông",
    "meaningEn": "East exit",
    "meaningFr": "Sortie Est",
    "meaningEs": "Salida Este",
    "meaningKo": "동쪽 출구",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 106,
    "kanji": "東南アジア",
    "displayReading": "とうなんあじあ",
    "readings": [
      "とうなんあじあ"
    ],
    "meaning": "Đông Nam Á",
    "meaningEn": "Southeast Asia",
    "meaningFr": "Asie du Sud-Est",
    "meaningEs": "Sudeste Asiático",
    "meaningKo": "동남아시아",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 107,
    "kanji": "西",
    "displayReading": "にし",
    "readings": [
      "にし"
    ],
    "meaning": "Phía Tây",
    "meaningEn": "West",
    "meaningFr": "Ouest",
    "meaningEs": "Oeste",
    "meaningKo": "서쪽",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 108,
    "kanji": "西口",
    "displayReading": "にしぐち",
    "readings": [
      "にしぐち"
    ],
    "meaning": "Cửa Tây",
    "meaningEn": "West exit",
    "meaningFr": "Sortie Ouest",
    "meaningEs": "Salida Oeste",
    "meaningKo": "서쪽 출구",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 109,
    "kanji": "関西",
    "displayReading": "かんさい",
    "readings": [
      "かんさい"
    ],
    "meaning": "Vùng Kansai",
    "meaningEn": "Kansai region",
    "meaningFr": "Région du Kansai",
    "meaningEs": "Región de Kansai",
    "meaningKo": "간사이 지방",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 110,
    "kanji": "南",
    "displayReading": "みなみ",
    "readings": [
      "みなみ"
    ],
    "meaning": "Phía Nam",
    "meaningEn": "South",
    "meaningFr": "Sud",
    "meaningEs": "Sur",
    "meaningKo": "남쪽",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 111,
    "kanji": "南口",
    "displayReading": "みなみぐち",
    "readings": [
      "みなみぐち"
    ],
    "meaning": "Cửa Nam",
    "meaningEn": "South exit",
    "meaningFr": "Sortie Sud",
    "meaningEs": "Salida Sur",
    "meaningKo": "남쪽 출구",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 112,
    "kanji": "北",
    "displayReading": "きた",
    "readings": [
      "きた"
    ],
    "meaning": "Phía Bắc",
    "meaningEn": "North",
    "meaningFr": "Nord",
    "meaningEs": "Norte",
    "meaningKo": "북쪽",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 113,
    "kanji": "北口",
    "displayReading": "きたぐち",
    "readings": [
      "きたぐち"
    ],
    "meaning": "Cửa Bắc",
    "meaningEn": "North exit",
    "meaningFr": "Sortie Nord",
    "meaningEs": "Salida Norte",
    "meaningKo": "북쪽 출구",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 114,
    "kanji": "北海道",
    "displayReading": "ほっかいどう",
    "readings": [
      "ほっかいどう"
    ],
    "meaning": "Hokkaido",
    "meaningEn": "Hokkaido",
    "meaningFr": "Hokkaido",
    "meaningEs": "Hokkaido",
    "meaningKo": "홋카이도",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 115,
    "kanji": "口",
    "displayReading": "くち",
    "readings": [
      "くち"
    ],
    "meaning": "Miệng, cửa ra vào",
    "meaningEn": "Mouth, entrance",
    "meaningFr": "Bouche, ouverture",
    "meaningEs": "Boca, abertura",
    "meaningKo": "입, 출입구",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 118,
    "kanji": "人口",
    "displayReading": "じんこう",
    "readings": [
      "じんこう"
    ],
    "meaning": "Dân số",
    "meaningEn": "Population",
    "meaningFr": "Population",
    "meaningEs": "Población",
    "meaningKo": "인구",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2179,
    "kanji": "出る",
    "displayReading": "でる",
    "readings": [
      "でる"
    ],
    "meaning": "Đi ra",
    "meaningEn": "Go out, exit",
    "meaningFr": "Sortir",
    "meaningEs": "Salir",
    "meaningKo": "나가다, 나오다",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2180,
    "kanji": "出す",
    "displayReading": "だす",
    "readings": [
      "だす"
    ],
    "meaning": "Đưa ra, gửi ra",
    "meaningEn": "Take out, submit",
    "meaningFr": "Sortir (qqch), envoyer",
    "meaningEs": "Sacar, enviar",
    "meaningKo": "내다, 보내다",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 116,
    "kanji": "出口",
    "displayReading": "でぐち",
    "readings": [
      "でぐち"
    ],
    "meaning": "Lối ra",
    "meaningEn": "Exit",
    "meaningFr": "Sortie",
    "meaningEs": "Salida",
    "meaningKo": "출구",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2182,
    "kanji": "入る",
    "displayReading": "はいる",
    "readings": [
      "はいる"
    ],
    "meaning": "Đi vào",
    "meaningEn": "Enter, go in",
    "meaningFr": "Entrer",
    "meaningEs": "Entrar",
    "meaningKo": "들어가다, 들어오다",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2183,
    "kanji": "入れる",
    "displayReading": "いれる",
    "readings": [
      "いれる"
    ],
    "meaning": "Cho vào, bỏ vào",
    "meaningEn": "Put in, insert",
    "meaningFr": "Mettre dedans, insérer",
    "meaningEs": "Meter, introducir",
    "meaningKo": "넣다",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 2184,
    "kanji": "入口",
    "displayReading": "いりぐち",
    "readings": [
      "いりぐち"
    ],
    "meaning": "Lối vào",
    "meaningEn": "Entrance",
    "meaningFr": "Entrée",
    "meaningEs": "Entrada",
    "meaningKo": "입구",
    "topicId": "n5_04",
    "level": "N5"
  },
  {
    "id": 129,
    "kanji": "行く",
    "displayReading": "いく",
    "readings": [
      "いく"
    ],
    "meaning": "Đi",
    "meaningEn": "Go",
    "meaningFr": "Aller",
    "meaningEs": "Ir",
    "meaningKo": "가다",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 2186,
    "kanji": "行う",
    "displayReading": "おこなう",
    "readings": [
      "おこなう"
    ],
    "meaning": "Tiến hành, tổ chức",
    "meaningEn": "Perform, carry out",
    "meaningFr": "Effectuer, organiser",
    "meaningEs": "Realizar, llevar a cabo",
    "meaningKo": "행하다, 실시하다",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 133,
    "kanji": "来る",
    "displayReading": "くる",
    "readings": [
      "くる"
    ],
    "meaning": "Đến",
    "meaningEn": "Come",
    "meaningFr": "Venir",
    "meaningEs": "Venir",
    "meaningKo": "오다",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 134,
    "kanji": "来週",
    "displayReading": "らいしゅう",
    "readings": [
      "らいしゅう"
    ],
    "meaning": "Tuần sau",
    "meaningEn": "Next week",
    "meaningFr": "La semaine prochaine",
    "meaningEs": "La próxima semana",
    "meaningKo": "다음 주",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 2189,
    "kanji": "来月",
    "displayReading": "らいげつ",
    "readings": [
      "らいげつ"
    ],
    "meaning": "Tháng sau",
    "meaningEn": "Next month",
    "meaningFr": "Le mois prochain",
    "meaningEs": "El próximo mes",
    "meaningKo": "다음 달",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 135,
    "kanji": "来年",
    "displayReading": "らいねん",
    "readings": [
      "らいねん"
    ],
    "meaning": "Năm sau",
    "meaningEn": "Next year",
    "meaningFr": "L'année prochaine",
    "meaningEs": "El próximo año",
    "meaningKo": "내년",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 2191,
    "kanji": "帰る",
    "displayReading": "かえる",
    "readings": [
      "かえる"
    ],
    "meaning": "Trở về",
    "meaningEn": "Return home",
    "meaningFr": "Rentrer chez soi",
    "meaningEs": "Volver a casa",
    "meaningKo": "돌아가다, 귀가하다",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 2192,
    "kanji": "帰国",
    "displayReading": "きこく",
    "readings": [
      "きこく"
    ],
    "meaning": "Về nước",
    "meaningEn": "Return to one's country",
    "meaningFr": "Rentrer dans son pays",
    "meaningEs": "Regresar a su país",
    "meaningKo": "귀국",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 138,
    "kanji": "休む",
    "displayReading": "やすむ",
    "readings": [
      "やすむ"
    ],
    "meaning": "Nghỉ ngơi",
    "meaningEn": "Rest, take a break",
    "meaningFr": "Se reposer",
    "meaningEs": "Descansar",
    "meaningKo": "쉬다",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 139,
    "kanji": "休み",
    "displayReading": "やすみ",
    "readings": [
      "やすみ"
    ],
    "meaning": "Ngày nghỉ",
    "meaningEn": "Holiday, day off",
    "meaningFr": "Repos, vacances",
    "meaningEs": "Descanso, vacaciones",
    "meaningKo": "휴식, 휴일, 방학",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 2195,
    "kanji": "駅",
    "displayReading": "えき",
    "readings": [
      "えき"
    ],
    "meaning": "Nhà ga",
    "meaningEn": "Train station",
    "meaningFr": "Gare",
    "meaningEs": "Estación de tren",
    "meaningKo": "역",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 2196,
    "kanji": "駅前",
    "displayReading": "えきまえ",
    "readings": [
      "えきまえ"
    ],
    "meaning": "Trước nhà ga",
    "meaningEn": "In front of the station",
    "meaningFr": "Devant la gare",
    "meaningEs": "Frente a la estación",
    "meaningKo": "역 앞",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 2197,
    "kanji": "駅員",
    "displayReading": "えきいん",
    "readings": [
      "えきいん"
    ],
    "meaning": "Nhân viên nhà ga",
    "meaningEn": "Station staff",
    "meaningFr": "Employé de gare",
    "meaningEs": "Empleado de estación",
    "meaningKo": "역무원",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 2198,
    "kanji": "車",
    "displayReading": "くるま",
    "readings": [
      "くるま"
    ],
    "meaning": "Ô tô, xe hơi",
    "meaningEn": "Car, automobile",
    "meaningFr": "Voiture",
    "meaningEs": "Coche, automóvil",
    "meaningKo": "차, 자동차",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 2199,
    "kanji": "電車",
    "displayReading": "でんしゃ",
    "readings": [
      "でんしゃ"
    ],
    "meaning": "Tàu điện",
    "meaningEn": "Electric train",
    "meaningFr": "Train électrique",
    "meaningEs": "Tren eléctrico",
    "meaningKo": "전철",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 212,
    "kanji": "電気",
    "displayReading": "でんき",
    "readings": [
      "でんき"
    ],
    "meaning": "Điện, đèn điện",
    "meaningEn": "Electricity, light",
    "meaningFr": "Électricité, lumière",
    "meaningEs": "Electricidad, luz",
    "meaningKo": "전기, 불빛",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 294,
    "kanji": "道",
    "displayReading": "みち",
    "readings": [
      "みち"
    ],
    "meaning": "Con đường",
    "meaningEn": "Road, way",
    "meaningFr": "Chemin, route",
    "meaningEs": "Camino, vía",
    "meaningKo": "길",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 296,
    "kanji": "道路",
    "displayReading": "どうろ",
    "readings": [
      "どうろ"
    ],
    "meaning": "Đường giao thông",
    "meaningEn": "Road, street",
    "meaningFr": "Route, chaussée",
    "meaningEs": "Carretera, calzada",
    "meaningKo": "도로",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 295,
    "kanji": "茶道",
    "displayReading": "さどう",
    "readings": [
      "さどう"
    ],
    "meaning": "Trà đạo",
    "meaningEn": "Tea ceremony",
    "meaningFr": "Cérémonie du thé",
    "meaningEs": "Ceremonia del té",
    "meaningKo": "다도",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 297,
    "kanji": "書道",
    "displayReading": "しょどう",
    "readings": [
      "しょどう"
    ],
    "meaning": "Thư pháp",
    "meaningEn": "Calligraphy",
    "meaningFr": "Calligraphie",
    "meaningEs": "Caligrafía",
    "meaningKo": "서예",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 298,
    "kanji": "通る",
    "displayReading": "とおる",
    "readings": [
      "とおる"
    ],
    "meaning": "Đi qua",
    "meaningEn": "Pass through",
    "meaningFr": "Passer par",
    "meaningEs": "Pasar por",
    "meaningKo": "지나가다, 통과하다",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 299,
    "kanji": "通り",
    "displayReading": "とおり",
    "readings": [
      "とおり"
    ],
    "meaning": "Con phố, đại lộ",
    "meaningEn": "Street, avenue",
    "meaningFr": "Rue, avenue",
    "meaningEs": "Calle, avenida",
    "meaningKo": "거리, 대로",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 302,
    "kanji": "通う",
    "displayReading": "かよう",
    "readings": [
      "かよう"
    ],
    "meaning": "Đi lại thường xuyên",
    "meaningEn": "Commute",
    "meaningFr": "Faire la navette, fréquenter",
    "meaningEs": "Ir y venir regularmente",
    "meaningKo": "다니다, 통학·통근하다",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 300,
    "kanji": "交通",
    "displayReading": "こうつう",
    "readings": [
      "こうつう"
    ],
    "meaning": "Giao thông",
    "meaningEn": "Traffic, transportation",
    "meaningFr": "Circulation, transports",
    "meaningEs": "Tráfico, transporte",
    "meaningKo": "교통",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 301,
    "kanji": "普通",
    "displayReading": "ふつう",
    "readings": [
      "ふつう"
    ],
    "meaning": "Bình thường, tàu thường",
    "meaningEn": "Normal, local train",
    "meaningFr": "Ordinaire, train omnibus",
    "meaningEs": "Normal, tren local",
    "meaningKo": "보통, 완행열차",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 290,
    "kanji": "乗る",
    "displayReading": "のる",
    "readings": [
      "のる"
    ],
    "meaning": "Lên xe, đi phương tiện",
    "meaningEn": "Ride, get on",
    "meaningFr": "Monter dans (un véhicule)",
    "meaningEs": "Subir a (un vehículo)",
    "meaningKo": "(탈것에) 타다",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 292,
    "kanji": "乗り物",
    "displayReading": "のりもの",
    "readings": [
      "のりもの"
    ],
    "meaning": "Phương tiện giao thông",
    "meaningEn": "Vehicle",
    "meaningFr": "Moyen de transport",
    "meaningEs": "Medio de transporte",
    "meaningKo": "탈것, 교통수단",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 293,
    "kanji": "乗馬",
    "displayReading": "じょうば",
    "readings": [
      "じょうば"
    ],
    "meaning": "Cưỡi ngựa",
    "meaningEn": "Horseback riding",
    "meaningFr": "Équitation",
    "meaningEs": "Equitación",
    "meaningKo": "승마",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 130,
    "kanji": "銀行",
    "displayReading": "ぎんこう",
    "readings": [
      "ぎんこう"
    ],
    "meaning": "Ngân hàng",
    "meaningEn": "Bank",
    "meaningFr": "Banque",
    "meaningEs": "Banco",
    "meaningKo": "은행",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 131,
    "kanji": "旅行",
    "displayReading": "りょこう",
    "readings": [
      "りょこう"
    ],
    "meaning": "Du lịch",
    "meaningEn": "Travel, trip",
    "meaningFr": "Voyage",
    "meaningEs": "Viaje",
    "meaningKo": "여행",
    "topicId": "n5_05",
    "level": "N5"
  },
  {
    "id": 329,
    "kanji": "学ぶ",
    "displayReading": "まなぶ",
    "readings": [
      "まなぶ"
    ],
    "meaning": "Học hỏi",
    "meaningEn": "Learn, study",
    "meaningFr": "Apprendre, étudier",
    "meaningEs": "Aprender, estudiar",
    "meaningKo": "배우다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 331,
    "kanji": "学校",
    "displayReading": "がっこう",
    "readings": [
      "がっこう"
    ],
    "meaning": "Trường học",
    "meaningEn": "School",
    "meaningFr": "École",
    "meaningEs": "Escuela, colegio",
    "meaningKo": "학교",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 20,
    "kanji": "小学校",
    "displayReading": "しょうがっこう",
    "readings": [
      "しょうがっこう"
    ],
    "meaning": "Trường tiểu học",
    "meaningEn": "Elementary school",
    "meaningFr": "École primaire",
    "meaningEs": "Escuela primaria",
    "meaningKo": "초등학교",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 336,
    "kanji": "中学校",
    "displayReading": "ちゅうがっこう",
    "readings": [
      "ちゅうがっこう"
    ],
    "meaning": "Trường trung học cơ sở",
    "meaningEn": "Junior high school",
    "meaningFr": "Collège",
    "meaningEs": "Escuela secundaria",
    "meaningKo": "중학교",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 249,
    "kanji": "高校",
    "displayReading": "こうこう",
    "readings": [
      "こうこう"
    ],
    "meaning": "Trường trung học phổ thông",
    "meaningEn": "High school",
    "meaningFr": "Lycée",
    "meaningEs": "Instituto, bachillerato",
    "meaningKo": "고등학교",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 18,
    "kanji": "大学",
    "displayReading": "だいがく",
    "readings": [
      "だいがく"
    ],
    "meaning": "Trường đại học",
    "meaningEn": "University",
    "meaningFr": "Université",
    "meaningEs": "Universidad",
    "meaningKo": "대학교",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 330,
    "kanji": "学生",
    "displayReading": "がくせい",
    "readings": [
      "がくせい"
    ],
    "meaning": "Học sinh, sinh viên",
    "meaningEn": "Student",
    "meaningFr": "Étudiant, élève",
    "meaningEs": "Estudiante, alumno",
    "meaningKo": "학생",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 332,
    "kanji": "大学生",
    "displayReading": "だいがくせい",
    "readings": [
      "だいがくせい"
    ],
    "meaning": "Sinh viên đại học",
    "meaningEn": "University student",
    "meaningFr": "Étudiant d'université",
    "meaningEs": "Estudiante universitario",
    "meaningKo": "대학생",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 250,
    "kanji": "高校生",
    "displayReading": "こうこうせい",
    "readings": [
      "こうこうせい"
    ],
    "meaning": "Học sinh cấp 3",
    "meaningEn": "High school student",
    "meaningFr": "Lycéen",
    "meaningEs": "Estudiante de bachillerato",
    "meaningKo": "고등학생",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 338,
    "kanji": "先生",
    "displayReading": "せんせい",
    "readings": [
      "せんせい"
    ],
    "meaning": "Giáo viên, bác sĩ",
    "meaningEn": "Teacher, doctor",
    "meaningFr": "Professeur, médecin",
    "meaningEs": "Profesor, maestro, médico",
    "meaningKo": "선생님, 의사",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 2225,
    "kanji": "生まれる",
    "displayReading": "うまれる",
    "readings": [
      "うまれる"
    ],
    "meaning": "Được sinh ra",
    "meaningEn": "Be born",
    "meaningFr": "Naître",
    "meaningEs": "Nacer",
    "meaningKo": "태어나다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 2226,
    "kanji": "生きる",
    "displayReading": "いきる",
    "readings": [
      "いきる"
    ],
    "meaning": "Sống",
    "meaningEn": "Live, be alive",
    "meaningFr": "Vivre",
    "meaningEs": "Vivir",
    "meaningKo": "살다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 2227,
    "kanji": "生む",
    "displayReading": "うむ",
    "readings": [
      "うむ"
    ],
    "meaning": "Sinh nở",
    "meaningEn": "Give birth",
    "meaningFr": "Donner naissance",
    "meaningEs": "Dar a luz, producir",
    "meaningKo": "낳다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 350,
    "kanji": "誕生日",
    "displayReading": "たんじょうび",
    "readings": [
      "たんじょうび"
    ],
    "meaning": "Sinh nhật",
    "meaningEn": "Birthday",
    "meaningFr": "Anniversaire",
    "meaningEs": "Cumpleaños",
    "meaningKo": "생일",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 142,
    "kanji": "本",
    "displayReading": "ほん",
    "readings": [
      "ほん"
    ],
    "meaning": "Sách",
    "meaningEn": "Book",
    "meaningFr": "Livre",
    "meaningEs": "Libro",
    "meaningKo": "책",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 2230,
    "kanji": "本屋",
    "displayReading": "ほんや",
    "readings": [
      "ほんや"
    ],
    "meaning": "Hiệu sách",
    "meaningEn": "Bookstore",
    "meaningFr": "Librairie",
    "meaningEs": "Librería",
    "meaningKo": "서점, 책방",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 141,
    "kanji": "日本",
    "displayReading": "にほん",
    "readings": [
      "にほん"
    ],
    "meaning": "Nhật Bản",
    "meaningEn": "Japan",
    "meaningFr": "Japon",
    "meaningEs": "Japón",
    "meaningKo": "일본",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 143,
    "kanji": "本当",
    "displayReading": "ほんとう",
    "readings": [
      "ほんとう"
    ],
    "meaning": "Thật sự",
    "meaningEn": "Truth, really",
    "meaningFr": "Vérité, vraiment",
    "meaningEs": "Verdad, de verdad",
    "meaningKo": "정말, 진짜",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 172,
    "kanji": "語る",
    "displayReading": "かたる",
    "readings": [
      "かたる"
    ],
    "meaning": "Kể chuyện",
    "meaningEn": "Tell, narrate",
    "meaningFr": "Raconter",
    "meaningEs": "Contar, narrar",
    "meaningKo": "이야기하다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 170,
    "kanji": "日本語",
    "displayReading": "にほんご",
    "readings": [
      "にほんご"
    ],
    "meaning": "Tiếng Nhật",
    "meaningEn": "Japanese language",
    "meaningFr": "Langue japonaise",
    "meaningEs": "Idioma japonés",
    "meaningKo": "일본어",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 171,
    "kanji": "英語",
    "displayReading": "えいご",
    "readings": [
      "えいご"
    ],
    "meaning": "Tiếng Anh",
    "meaningEn": "English language",
    "meaningFr": "Langue anglaise",
    "meaningEs": "Idioma inglés",
    "meaningKo": "영어",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 2236,
    "kanji": "外国語",
    "displayReading": "がいこくご",
    "readings": [
      "がいこくご"
    ],
    "meaning": "Ngoại ngữ",
    "meaningEn": "Foreign language",
    "meaningFr": "Langue étrangère",
    "meaningEs": "Idioma extranjero",
    "meaningKo": "외국어",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 147,
    "kanji": "母国語",
    "displayReading": "ぼこくご",
    "readings": [
      "ぼこくご"
    ],
    "meaning": "Tiếng mẹ đẻ",
    "meaningEn": "Native language",
    "meaningFr": "Langue maternelle",
    "meaningEs": "Lengua materna",
    "meaningKo": "모국어",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 357,
    "kanji": "文",
    "displayReading": "ぶん",
    "readings": [
      "ぶん"
    ],
    "meaning": "Câu văn",
    "meaningEn": "Sentence, text",
    "meaningFr": "Phrase",
    "meaningEs": "Oración, frase",
    "meaningKo": "문장",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 358,
    "kanji": "文章",
    "displayReading": "ぶんしょう",
    "readings": [
      "ぶんしょう"
    ],
    "meaning": "Đoạn văn, bài văn",
    "meaningEn": "Passage, essay",
    "meaningFr": "Texte, paragraphe",
    "meaningEs": "Texto, párrafo",
    "meaningKo": "글, 문장",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 359,
    "kanji": "作文",
    "displayReading": "さくぶん",
    "readings": [
      "さくぶん"
    ],
    "meaning": "Bài tập làm văn",
    "meaningEn": "Composition, essay",
    "meaningFr": "Rédaction",
    "meaningEs": "Redacción, ensayo",
    "meaningKo": "작문",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 360,
    "kanji": "文化",
    "displayReading": "ぶんか",
    "readings": [
      "ぶんか"
    ],
    "meaning": "Văn hóa",
    "meaningEn": "Culture",
    "meaningFr": "Culture",
    "meaningEs": "Cultura",
    "meaningKo": "문화",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 52,
    "kanji": "読む",
    "displayReading": "よむ",
    "readings": [
      "よむ"
    ],
    "meaning": "Đọc",
    "meaningEn": "Read",
    "meaningFr": "Lire",
    "meaningEs": "Leer",
    "meaningKo": "읽다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 2243,
    "kanji": "読書",
    "displayReading": "どくしょ",
    "readings": [
      "どくしょ"
    ],
    "meaning": "Đọc sách",
    "meaningEn": "Reading books",
    "meaningFr": "Lecture",
    "meaningEs": "Lectura",
    "meaningKo": "독서",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 53,
    "kanji": "見る",
    "displayReading": "みる",
    "readings": [
      "みる"
    ],
    "meaning": "Nhìn, xem",
    "meaningEn": "See, watch, look",
    "meaningFr": "Voir, regarder",
    "meaningEs": "Ver, mirar",
    "meaningKo": "보다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 54,
    "kanji": "見せる",
    "displayReading": "みせる",
    "readings": [
      "みせる"
    ],
    "meaning": "Cho xem",
    "meaningEn": "Show",
    "meaningFr": "Montrer",
    "meaningEs": "Mostrar, enseñar",
    "meaningKo": "보여 주다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 2246,
    "kanji": "見える",
    "displayReading": "みえる",
    "readings": [
      "みえる"
    ],
    "meaning": "Nhìn thấy",
    "meaningEn": "Be visible",
    "meaningFr": "Être visible",
    "meaningEs": "Verse, ser visible",
    "meaningKo": "보이다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 55,
    "kanji": "聞く",
    "displayReading": "きく",
    "readings": [
      "きく"
    ],
    "meaning": "Nghe, hỏi",
    "meaningEn": "Listen, ask",
    "meaningFr": "Écouter, demander",
    "meaningEs": "Escuchar, preguntar",
    "meaningKo": "듣다, 묻다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 2248,
    "kanji": "聞こえる",
    "displayReading": "きこえる",
    "readings": [
      "きこえる"
    ],
    "meaning": "Nghe thấy",
    "meaningEn": "Be audible",
    "meaningFr": "Être audible",
    "meaningEs": "Oírse, ser audible",
    "meaningKo": "들리다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 22,
    "kanji": "新聞",
    "displayReading": "しんぶん",
    "readings": [
      "しんぶん"
    ],
    "meaning": "Tờ báo",
    "meaningEn": "Newspaper",
    "meaningFr": "Journal",
    "meaningEs": "Periódico",
    "meaningKo": "신문",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 56,
    "kanji": "書く",
    "displayReading": "かく",
    "readings": [
      "かく"
    ],
    "meaning": "Viết",
    "meaningEn": "Write",
    "meaningFr": "Écrire",
    "meaningEs": "Escribir",
    "meaningKo": "쓰다, 적다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 2251,
    "kanji": "辞書",
    "displayReading": "じしょ",
    "readings": [
      "じしょ"
    ],
    "meaning": "Từ điển",
    "meaningEn": "Dictionary",
    "meaningFr": "Dictionnaire",
    "meaningEs": "Diccionario",
    "meaningKo": "사전",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 47,
    "kanji": "言う",
    "displayReading": "いう",
    "readings": [
      "いう"
    ],
    "meaning": "Nói",
    "meaningEn": "Say",
    "meaningFr": "Dire",
    "meaningEs": "Decir",
    "meaningKo": "말하다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 48,
    "kanji": "言葉",
    "displayReading": "ことば",
    "readings": [
      "ことば"
    ],
    "meaning": "Từ ngữ, ngôn ngữ",
    "meaningEn": "Word, language",
    "meaningFr": "Mot, langue",
    "meaningEs": "Palabra, idioma",
    "meaningKo": "말, 단어",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 49,
    "kanji": "話す",
    "displayReading": "はなす",
    "readings": [
      "はなす"
    ],
    "meaning": "Nói chuyện",
    "meaningEn": "Speak, talk",
    "meaningFr": "Parler",
    "meaningEs": "Hablar",
    "meaningKo": "이야기하다, 말하다",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 2255,
    "kanji": "話",
    "displayReading": "はなし",
    "readings": [
      "はなし"
    ],
    "meaning": "Câu chuyện",
    "meaningEn": "Story, talk",
    "meaningFr": "Histoire, discussion",
    "meaningEs": "Historia, charla",
    "meaningKo": "이야기",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 51,
    "kanji": "会話",
    "displayReading": "かいわ",
    "readings": [
      "かいわ"
    ],
    "meaning": "Hội thoại",
    "meaningEn": "Conversation",
    "meaningFr": "Conversation",
    "meaningEs": "Conversación",
    "meaningKo": "회화, 대화",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 50,
    "kanji": "電話",
    "displayReading": "でんわ",
    "readings": [
      "でんわ"
    ],
    "meaning": "Điện thoại",
    "meaningEn": "Telephone",
    "meaningFr": "Téléphone",
    "meaningEs": "Teléfono",
    "meaningKo": "전화",
    "topicId": "n5_06",
    "level": "N5"
  },
  {
    "id": 12,
    "kanji": "食べる",
    "displayReading": "たべる",
    "readings": [
      "たべる"
    ],
    "meaning": "Ăn",
    "meaningEn": "Eat",
    "meaningFr": "Manger",
    "meaningEs": "Comer",
    "meaningKo": "먹다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 13,
    "kanji": "食べ物",
    "displayReading": "たべもの",
    "readings": [
      "たべもの"
    ],
    "meaning": "Đồ ăn",
    "meaningEn": "Food",
    "meaningFr": "Nourriture",
    "meaningEs": "Comida, alimento",
    "meaningKo": "음식, 먹을거리",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 14,
    "kanji": "食事",
    "displayReading": "しょくじ",
    "readings": [
      "しょくじ"
    ],
    "meaning": "Bữa ăn, việc ăn uống",
    "meaningEn": "Meal",
    "meaningFr": "Repas",
    "meaningEs": "Comida (acto de comer)",
    "meaningKo": "식사",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 15,
    "kanji": "飲む",
    "displayReading": "のむ",
    "readings": [
      "のむ"
    ],
    "meaning": "Uống",
    "meaningEn": "Drink",
    "meaningFr": "Boire",
    "meaningEs": "Beber",
    "meaningKo": "마시다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 16,
    "kanji": "飲み物",
    "displayReading": "のみもの",
    "readings": [
      "のみもの"
    ],
    "meaning": "Đồ uống",
    "meaningEn": "Beverage, drink",
    "meaningFr": "Boisson",
    "meaningEs": "Bebida",
    "meaningKo": "음료, 마실 것",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 1,
    "kanji": "魚",
    "displayReading": "さかな",
    "readings": [
      "さかな"
    ],
    "meaning": "Cá",
    "meaningEn": "Fish",
    "meaningFr": "Poisson",
    "meaningEs": "Pescado, pez",
    "meaningKo": "물고기, 생선",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 2264,
    "kanji": "生魚",
    "displayReading": "なまざかな",
    "readings": [
      "なまざかな"
    ],
    "meaning": "Cá sống",
    "meaningEn": "Raw fish",
    "meaningFr": "Poisson cru",
    "meaningEs": "Pescado crudo",
    "meaningKo": "날생선",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 2,
    "kanji": "焼き魚",
    "displayReading": "やきざかな",
    "readings": [
      "やきざかな"
    ],
    "meaning": "Cá nướng",
    "meaningEn": "Grilled fish",
    "meaningFr": "Poisson grillé",
    "meaningEs": "Pescado a la parrilla",
    "meaningKo": "생선구이",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 3,
    "kanji": "魚屋",
    "displayReading": "さかなや",
    "readings": [
      "さかなや"
    ],
    "meaning": "Tiệm cá",
    "meaningEn": "Fish shop",
    "meaningFr": "Poissonnerie",
    "meaningEs": "Pescadería",
    "meaningKo": "생선 가게",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 4,
    "kanji": "金魚",
    "displayReading": "きんぎょ",
    "readings": [
      "きんぎょ"
    ],
    "meaning": "Cá vàng",
    "meaningEn": "Goldfish",
    "meaningFr": "Poisson rouge",
    "meaningEs": "Pez dorado",
    "meaningKo": "금붕어",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 5,
    "kanji": "肉",
    "displayReading": "にく",
    "readings": [
      "にく"
    ],
    "meaning": "Thịt",
    "meaningEn": "Meat",
    "meaningFr": "Viande",
    "meaningEs": "Carne",
    "meaningKo": "고기",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 6,
    "kanji": "牛肉",
    "displayReading": "ぎゅうにく",
    "readings": [
      "ぎゅうにく"
    ],
    "meaning": "Thịt bò",
    "meaningEn": "Beef",
    "meaningFr": "Bœuf (viande)",
    "meaningEs": "Carne de res",
    "meaningKo": "소고기",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 7,
    "kanji": "焼き肉",
    "displayReading": "やきにく",
    "readings": [
      "やきにく"
    ],
    "meaning": "Thịt nướng",
    "meaningEn": "Grilled meat (yakiniku)",
    "meaningFr": "Viande grillée (yakiniku)",
    "meaningEs": "Carne asada (yakiniku)",
    "meaningKo": "불고기, 야키니쿠",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 8,
    "kanji": "卵",
    "displayReading": "たまご",
    "readings": [
      "たまご"
    ],
    "meaning": "Trứng",
    "meaningEn": "Egg",
    "meaningFr": "Œuf",
    "meaningEs": "Huevo",
    "meaningKo": "달걀, 알",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 9,
    "kanji": "生卵",
    "displayReading": "なまたまご",
    "readings": [
      "なまたまご"
    ],
    "meaning": "Trứng sống",
    "meaningEn": "Raw egg",
    "meaningFr": "Œuf cru",
    "meaningEs": "Huevo crudo",
    "meaningKo": "날달걀",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 354,
    "kanji": "生ビール",
    "displayReading": "なまビール",
    "readings": [
      "なまビール"
    ],
    "meaning": "Bia tươi",
    "meaningEn": "Draft beer",
    "meaningFr": "Bière pression",
    "meaningEs": "Cerveza de barril",
    "meaningKo": "생맥주",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 2274,
    "kanji": "お茶",
    "displayReading": "おちゃ",
    "readings": [
      "おちゃ"
    ],
    "meaning": "Trà",
    "meaningEn": "Green tea, tea",
    "meaningFr": "Thé vert, thé",
    "meaningEs": "Té verde, té",
    "meaningKo": "차, 녹차",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 2275,
    "kanji": "紅茶",
    "displayReading": "こうちゃ",
    "readings": [
      "こうちゃ"
    ],
    "meaning": "Hồng trà, trà đen",
    "meaningEn": "Black tea",
    "meaningFr": "Thé noir",
    "meaningEs": "Té negro",
    "meaningKo": "홍차",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 119,
    "kanji": "買う",
    "displayReading": "かう",
    "readings": [
      "かう"
    ],
    "meaning": "Mua",
    "meaningEn": "Buy",
    "meaningFr": "Acheter",
    "meaningEs": "Comprar",
    "meaningKo": "사다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 120,
    "kanji": "買い物",
    "displayReading": "かいもの",
    "readings": [
      "かいもの"
    ],
    "meaning": "Mua sắm",
    "meaningEn": "Shopping",
    "meaningFr": "Courses, achats",
    "meaningEs": "Compras",
    "meaningKo": "쇼핑, 장보기",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 238,
    "kanji": "店",
    "displayReading": "みせ",
    "readings": [
      "みせ"
    ],
    "meaning": "Cửa hàng",
    "meaningEn": "Shop, store",
    "meaningFr": "Magasin, boutique",
    "meaningEs": "Tienda",
    "meaningKo": "가게, 상점",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 239,
    "kanji": "店員",
    "displayReading": "てんいん",
    "readings": [
      "てんいん"
    ],
    "meaning": "Nhân viên cửa hàng",
    "meaningEn": "Store clerk",
    "meaningFr": "Vendeur, employé",
    "meaningEs": "Dependiente, vendedor",
    "meaningKo": "점원",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 248,
    "kanji": "高い",
    "displayReading": "たかい",
    "readings": [
      "たかい"
    ],
    "meaning": "Cao, đắt",
    "meaningEn": "Tall, high, expensive",
    "meaningFr": "Haut, cher",
    "meaningEs": "Alto, caro",
    "meaningKo": "높다, 비싸다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 253,
    "kanji": "安い",
    "displayReading": "やすい",
    "readings": [
      "やすい"
    ],
    "meaning": "Rẻ",
    "meaningEn": "Cheap, inexpensive",
    "meaningFr": "Bon marché, pas cher",
    "meaningEs": "Barato, económico",
    "meaningKo": "싸다, 저렴하다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 241,
    "kanji": "多い",
    "displayReading": "おおい",
    "readings": [
      "おおい"
    ],
    "meaning": "Nhiều",
    "meaningEn": "Many, much",
    "meaningFr": "Nombreux, beaucoup",
    "meaningEs": "Muchos, abundante",
    "meaningKo": "많다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 242,
    "kanji": "多分",
    "displayReading": "たぶん",
    "readings": [
      "たぶん"
    ],
    "meaning": "Có lẽ",
    "meaningEn": "Probably, maybe",
    "meaningFr": "Peut-être",
    "meaningEs": "Quizás, tal vez",
    "meaningKo": "아마도",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 243,
    "kanji": "多数",
    "displayReading": "たすう",
    "readings": [
      "たすう"
    ],
    "meaning": "Số đông",
    "meaningEn": "Majority, large number",
    "meaningFr": "Majorité, grand nombre",
    "meaningEs": "Mayoría, gran número",
    "meaningKo": "다수",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 245,
    "kanji": "少ない",
    "displayReading": "すくない",
    "readings": [
      "すくない"
    ],
    "meaning": "Ít",
    "meaningEn": "Few, little",
    "meaningFr": "Peu nombreux",
    "meaningEs": "Pocos, escaso",
    "meaningKo": "적다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 246,
    "kanji": "少し",
    "displayReading": "すこし",
    "readings": [
      "すこし"
    ],
    "meaning": "Một chút",
    "meaningEn": "A little, slightly",
    "meaningFr": "Un peu",
    "meaningEs": "Un poco",
    "meaningKo": "조금, 약간",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 247,
    "kanji": "少年",
    "displayReading": "しょうねん",
    "readings": [
      "しょうねん"
    ],
    "meaning": "Thiếu niên",
    "meaningEn": "Boy, youth",
    "meaningFr": "Jeune garçon",
    "meaningEs": "Chico joven, muchacho",
    "meaningKo": "소년",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 21,
    "kanji": "新しい",
    "displayReading": "あたらしい",
    "readings": [
      "あたらしい"
    ],
    "meaning": "Mới",
    "meaningEn": "New",
    "meaningFr": "Nouveau, neuf",
    "meaningEs": "Nuevo",
    "meaningKo": "새롭다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 23,
    "kanji": "古い",
    "displayReading": "ふるい",
    "readings": [
      "ふるい"
    ],
    "meaning": "Cũ",
    "meaningEn": "Old (objects)",
    "meaningFr": "Vieux, ancien (objet)",
    "meaningEs": "Viejo, antiguo (objeto)",
    "meaningKo": "오래되다, 낡다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 24,
    "kanji": "中古",
    "displayReading": "ちゅうこ",
    "readings": [
      "ちゅうこ"
    ],
    "meaning": "Đồ cũ, hàng đã qua sử dụng",
    "meaningEn": "Secondhand, used",
    "meaningFr": "Occasion, seconde main",
    "meaningEs": "Segunda mano, usado",
    "meaningKo": "중고",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 17,
    "kanji": "大きい",
    "displayReading": "おおきい",
    "readings": [
      "おおきい"
    ],
    "meaning": "To, lớn",
    "meaningEn": "Big, large",
    "meaningFr": "Grand, gros",
    "meaningEs": "Grande",
    "meaningKo": "크다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 19,
    "kanji": "小さい",
    "displayReading": "ちいさい",
    "readings": [
      "ちいさい"
    ],
    "meaning": "Nhỏ, bé",
    "meaningEn": "Small, little",
    "meaningFr": "Petit",
    "meaningEs": "Pequeño",
    "meaningKo": "작다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 2293,
    "kanji": "長い",
    "displayReading": "ながい",
    "readings": [
      "ながい"
    ],
    "meaning": "Dài",
    "meaningEn": "Long",
    "meaningFr": "Long",
    "meaningEs": "Largo",
    "meaningKo": "길다",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 334,
    "kanji": "校長",
    "displayReading": "こうちょう",
    "readings": [
      "こうちょう"
    ],
    "meaning": "Hiệu trưởng",
    "meaningEn": "School principal",
    "meaningFr": "Directeur d'école",
    "meaningEs": "Director de escuela",
    "meaningKo": "교장 선생님",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 2295,
    "kanji": "社長",
    "displayReading": "しゃちょう",
    "readings": [
      "しゃちょう"
    ],
    "meaning": "Giám đốc công ty",
    "meaningEn": "Company president",
    "meaningFr": "Président d'entreprise (PDG)",
    "meaningEs": "Presidente de empresa",
    "meaningKo": "사장님",
    "topicId": "n5_07",
    "level": "N5"
  },
  {
    "id": 200,
    "kanji": "山",
    "displayReading": "やま",
    "readings": [
      "やま"
    ],
    "meaning": "Núi",
    "meaningEn": "Mountain",
    "meaningFr": "Montagne",
    "meaningEs": "Montaña",
    "meaningKo": "산",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 201,
    "kanji": "富士山",
    "displayReading": "ふじさん",
    "readings": [
      "ふじさん"
    ],
    "meaning": "Núi Phú Sĩ",
    "meaningEn": "Mount Fuji",
    "meaningFr": "Mont Fuji",
    "meaningEs": "Monte Fuji",
    "meaningKo": "후지산",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 202,
    "kanji": "火山",
    "displayReading": "かざん",
    "readings": [
      "かざん"
    ],
    "meaning": "Núi lửa",
    "meaningEn": "Volcano",
    "meaningFr": "Volcan",
    "meaningEs": "Volcán",
    "meaningKo": "화산",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 203,
    "kanji": "川",
    "displayReading": "かわ",
    "readings": [
      "かわ"
    ],
    "meaning": "Sông",
    "meaningEn": "River",
    "meaningFr": "Rivière",
    "meaningEs": "Río",
    "meaningKo": "강, 내",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 204,
    "kanji": "小川",
    "displayReading": "おがわ",
    "readings": [
      "おがわ"
    ],
    "meaning": "Suối nhỏ, sông nhỏ",
    "meaningEn": "Stream, brook",
    "meaningFr": "Ruisseau",
    "meaningEs": "Arroyo, riachuelo",
    "meaningKo": "시냇물",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 206,
    "kanji": "大川",
    "displayReading": "おおかわ",
    "readings": [
      "おおかわ"
    ],
    "meaning": "Sông lớn",
    "meaningEn": "Big river",
    "meaningFr": "Grand fleuve",
    "meaningEs": "Río grande",
    "meaningKo": "큰 강",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 205,
    "kanji": "河川",
    "displayReading": "かせん",
    "readings": [
      "かせん"
    ],
    "meaning": "Sông ngòi",
    "meaningEn": "Rivers",
    "meaningFr": "Cours d'eau, rivières",
    "meaningEs": "Ríos",
    "meaningKo": "하천",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 197,
    "kanji": "海",
    "displayReading": "うみ",
    "readings": [
      "うみ"
    ],
    "meaning": "Biển",
    "meaningEn": "Sea, ocean",
    "meaningFr": "Mer, océan",
    "meaningEs": "Mar, océano",
    "meaningKo": "바다",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 199,
    "kanji": "海岸",
    "displayReading": "かいがん",
    "readings": [
      "かいがん"
    ],
    "meaning": "Bờ biển",
    "meaningEn": "Coast, seashore",
    "meaningFr": "Côte, rivage",
    "meaningEs": "Costa, playa",
    "meaningKo": "해안, 바닷가",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 169,
    "kanji": "海外",
    "displayReading": "かいがい",
    "readings": [
      "かいがい"
    ],
    "meaning": "Nước ngoài, hải ngoại",
    "meaningEn": "Overseas, abroad",
    "meaningFr": "Outre-mer, à l'étranger",
    "meaningEs": "En el extranjero, ultramar",
    "meaningKo": "해외",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 193,
    "kanji": "花",
    "displayReading": "はな",
    "readings": [
      "はな"
    ],
    "meaning": "Hoa",
    "meaningEn": "Flower",
    "meaningFr": "Fleur",
    "meaningEs": "Flor",
    "meaningKo": "꽃",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 194,
    "kanji": "花見",
    "displayReading": "はなみ",
    "readings": [
      "はなみ"
    ],
    "meaning": "Ngắm hoa",
    "meaningEn": "Flower viewing (hanami)",
    "meaningFr": "Contemplation des fleurs (hanami)",
    "meaningEs": "Contemplar los cerezos (hanami)",
    "meaningKo": "꽃구경 (하나미)",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 195,
    "kanji": "花火",
    "displayReading": "はなび",
    "readings": [
      "はなび"
    ],
    "meaning": "Pháo hoa",
    "meaningEn": "Fireworks",
    "meaningFr": "Feu d'artifice",
    "meaningEs": "Fuegos artificiales",
    "meaningKo": "불꽃놀이",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 196,
    "kanji": "花瓶",
    "displayReading": "かびん",
    "readings": [
      "かびん"
    ],
    "meaning": "Bình hoa",
    "meaningEn": "Flower vase",
    "meaningFr": "Vase à fleurs",
    "meaningEs": "Florero, jarrón",
    "meaningKo": "꽃병",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 208,
    "kanji": "天気",
    "displayReading": "てんき",
    "readings": [
      "てんき"
    ],
    "meaning": "Thời tiết",
    "meaningEn": "Weather",
    "meaningFr": "Temps (météo)",
    "meaningEs": "Tiempo atmosférico, clima",
    "meaningKo": "날씨",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 209,
    "kanji": "天候",
    "displayReading": "てんこう",
    "readings": [
      "てんこう"
    ],
    "meaning": "Khí hậu",
    "meaningEn": "Weather, climate",
    "meaningFr": "Climat, météo",
    "meaningEs": "Clima",
    "meaningKo": "기후",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 210,
    "kanji": "元気",
    "displayReading": "げんき",
    "readings": [
      "げんき"
    ],
    "meaning": "Khỏe mạnh",
    "meaningEn": "Healthy, energetic",
    "meaningFr": "En forme, bonne santé",
    "meaningEs": "Animado, con buena salud",
    "meaningKo": "건강함, 활기참",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 213,
    "kanji": "空気",
    "displayReading": "くうき",
    "readings": [
      "くうき"
    ],
    "meaning": "Không khí",
    "meaningEn": "Air, atmosphere",
    "meaningFr": "Air, atmosphère",
    "meaningEs": "Aire, atmósfera",
    "meaningKo": "공기, 분위기",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 218,
    "kanji": "雨",
    "displayReading": "あめ",
    "readings": [
      "あめ"
    ],
    "meaning": "Mưa",
    "meaningEn": "Rain",
    "meaningFr": "Pluie",
    "meaningEs": "Lluvia",
    "meaningKo": "비",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 220,
    "kanji": "大雨",
    "displayReading": "おおあめ",
    "readings": [
      "おおあめ"
    ],
    "meaning": "Mưa to",
    "meaningEn": "Heavy rain",
    "meaningFr": "Forte pluie",
    "meaningEs": "Lluvia fuerte",
    "meaningKo": "폭우, 큰비",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 221,
    "kanji": "雨水",
    "displayReading": "あまみず",
    "readings": [
      "あまみず"
    ],
    "meaning": "Nước mưa",
    "meaningEn": "Rainwater",
    "meaningFr": "Eau de pluie",
    "meaningEs": "Agua de lluvia",
    "meaningKo": "빗물",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 233,
    "kanji": "空",
    "displayReading": "そら",
    "readings": [
      "そら"
    ],
    "meaning": "Bầu trời",
    "meaningEn": "Sky",
    "meaningFr": "Ciel",
    "meaningEs": "Cielo",
    "meaningKo": "하늘",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 235,
    "kanji": "青空",
    "displayReading": "あおぞら",
    "readings": [
      "あおぞら"
    ],
    "meaning": "Bầu trời xanh",
    "meaningEn": "Blue sky",
    "meaningFr": "Ciel bleu",
    "meaningEs": "Cielo azul",
    "meaningKo": "푸른 하늘",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 234,
    "kanji": "空港",
    "displayReading": "くうこう",
    "readings": [
      "くうこう"
    ],
    "meaning": "Sân bay",
    "meaningEn": "Airport",
    "meaningFr": "Aéroport",
    "meaningEs": "Aeropuerto",
    "meaningKo": "공항",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 236,
    "kanji": "空っぽ",
    "displayReading": "からっぽ",
    "readings": [
      "からっぽ"
    ],
    "meaning": "Trống rỗng",
    "meaningEn": "Empty",
    "meaningFr": "Vide",
    "meaningEs": "Vacío",
    "meaningKo": "비어 있음",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2321,
    "kanji": "手",
    "displayReading": "て",
    "readings": [
      "て"
    ],
    "meaning": "Bàn tay",
    "meaningEn": "Hand",
    "meaningFr": "Main",
    "meaningEs": "Mano",
    "meaningKo": "손",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 304,
    "kanji": "右手",
    "displayReading": "みぎて",
    "readings": [
      "みぎて"
    ],
    "meaning": "Tay phải",
    "meaningEn": "Right hand",
    "meaningFr": "Main droite",
    "meaningEs": "Mano derecha",
    "meaningKo": "오른손",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 307,
    "kanji": "左手",
    "displayReading": "ひだりて",
    "readings": [
      "ひだりて"
    ],
    "meaning": "Tay trái",
    "meaningEn": "Left hand",
    "meaningFr": "Main gauche",
    "meaningEs": "Mano izquierda",
    "meaningKo": "왼손",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2324,
    "kanji": "上手",
    "displayReading": "じょうず",
    "readings": [
      "じょうず"
    ],
    "meaning": "Giỏi, khéo",
    "meaningEn": "Skillful, good at",
    "meaningFr": "Doué, habile",
    "meaningEs": "Hábil, bueno en",
    "meaningKo": "잘함, 능숙함",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2325,
    "kanji": "下手",
    "displayReading": "へた",
    "readings": [
      "へた"
    ],
    "meaning": "Kém, vụng",
    "meaningEn": "Unskillful, poor at",
    "meaningFr": "Maladroit, peu doué",
    "meaningEs": "Torpe, malo en",
    "meaningKo": "서투름, 못함",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2326,
    "kanji": "足",
    "displayReading": "あし",
    "readings": [
      "あし"
    ],
    "meaning": "Chân",
    "meaningEn": "Foot, leg",
    "meaningFr": "Pied, jambe",
    "meaningEs": "Pie, pierna",
    "meaningKo": "발, 다리",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2327,
    "kanji": "足りる",
    "displayReading": "たりる",
    "readings": [
      "たりる"
    ],
    "meaning": "Đủ",
    "meaningEn": "Be enough, suffice",
    "meaningFr": "Suffire",
    "meaningEs": "Bastar, ser suficiente",
    "meaningKo": "충분하다, 족하다",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2328,
    "kanji": "目",
    "displayReading": "め",
    "readings": [
      "め"
    ],
    "meaning": "Con mắt",
    "meaningEn": "Eye",
    "meaningFr": "Œil",
    "meaningEs": "Ojo",
    "meaningKo": "눈",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2329,
    "kanji": "目的",
    "displayReading": "もくてき",
    "readings": [
      "もくてき"
    ],
    "meaning": "Mục đích",
    "meaningEn": "Purpose, goal",
    "meaningFr": "But, objectif",
    "meaningEs": "Objetivo, propósito",
    "meaningKo": "목적",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2330,
    "kanji": "耳",
    "displayReading": "みみ",
    "readings": [
      "みみ"
    ],
    "meaning": "Cái tai",
    "meaningEn": "Ear",
    "meaningFr": "Oreille",
    "meaningEs": "Oreja, oído",
    "meaningKo": "귀",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2331,
    "kanji": "心",
    "displayReading": "こころ",
    "readings": [
      "こころ"
    ],
    "meaning": "Trái tim, tấm lòng",
    "meaningEn": "Heart, mind",
    "meaningFr": "Cœur, esprit",
    "meaningEs": "Corazón, mente",
    "meaningKo": "마음",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 254,
    "kanji": "安心",
    "displayReading": "あんしん",
    "readings": [
      "あんしん"
    ],
    "meaning": "Yên tâm",
    "meaningEn": "Relief, peace of mind",
    "meaningFr": "Soulagement, tranquillité",
    "meaningEs": "Alivio, tranquilidad",
    "meaningKo": "안심",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2333,
    "kanji": "心配",
    "displayReading": "しんぱい",
    "readings": [
      "しんぱい"
    ],
    "meaning": "Lo lắng",
    "meaningEn": "Worry, anxiety",
    "meaningFr": "Inquiétude, souci",
    "meaningEs": "Preocupación",
    "meaningKo": "걱정, 근심",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2334,
    "kanji": "中心",
    "displayReading": "ちゅうしん",
    "readings": [
      "ちゅうしん"
    ],
    "meaning": "Trung tâm",
    "meaningEn": "Center, core",
    "meaningFr": "Centre",
    "meaningEs": "Centro",
    "meaningKo": "중심",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 325,
    "kanji": "白",
    "displayReading": "しろ",
    "readings": [
      "しろ"
    ],
    "meaning": "Màu trắng",
    "meaningEn": "White (noun)",
    "meaningFr": "Blanc (nom)",
    "meaningEs": "Blanco (sust.)",
    "meaningKo": "하양 (명사)",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 326,
    "kanji": "白い",
    "displayReading": "しろい",
    "readings": [
      "しろい"
    ],
    "meaning": "Trắng",
    "meaningEn": "White (adj)",
    "meaningFr": "Blanc (adj.)",
    "meaningEs": "Blanco (adj.)",
    "meaningKo": "하얗다",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 327,
    "kanji": "白色",
    "displayReading": "しろいろ",
    "readings": [
      "しろいろ"
    ],
    "meaning": "Màu trắng (danh từ)",
    "meaningEn": "White color",
    "meaningFr": "Couleur blanche",
    "meaningEs": "Color blanco",
    "meaningKo": "흰색",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 310,
    "kanji": "赤",
    "displayReading": "あか",
    "readings": [
      "あか"
    ],
    "meaning": "Màu đỏ",
    "meaningEn": "Red (noun)",
    "meaningFr": "Rouge (nom)",
    "meaningEs": "Rojo (sust.)",
    "meaningKo": "빨강 (명사)",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 311,
    "kanji": "赤い",
    "displayReading": "あかい",
    "readings": [
      "あかい"
    ],
    "meaning": "Đỏ",
    "meaningEn": "Red (adj)",
    "meaningFr": "Rouge (adj.)",
    "meaningEs": "Rojo (adj.)",
    "meaningKo": "빨갛다",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 312,
    "kanji": "赤ちゃん",
    "displayReading": "あかちゃん",
    "readings": [
      "あかちゃん"
    ],
    "meaning": "Em bé",
    "meaningEn": "Baby, infant",
    "meaningFr": "Bébé",
    "meaningEs": "Bebé",
    "meaningKo": "아기",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 313,
    "kanji": "赤信号",
    "displayReading": "あかしんごう",
    "readings": [
      "あかしんごう"
    ],
    "meaning": "Đèn đỏ giao thông",
    "meaningEn": "Red traffic light",
    "meaningFr": "Feu rouge",
    "meaningEs": "Semáforo en rojo",
    "meaningKo": "빨간불 (신호)",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 314,
    "kanji": "青",
    "displayReading": "あお",
    "readings": [
      "あお"
    ],
    "meaning": "Màu xanh lam",
    "meaningEn": "Blue (noun)",
    "meaningFr": "Bleu (nom)",
    "meaningEs": "Azul (sust.)",
    "meaningKo": "파랑 (명사)",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 315,
    "kanji": "青い",
    "displayReading": "あおい",
    "readings": [
      "あおい"
    ],
    "meaning": "Xanh lam",
    "meaningEn": "Blue (adj)",
    "meaningFr": "Bleu (adj.)",
    "meaningEs": "Azul (adj.)",
    "meaningKo": "파랗다",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 316,
    "kanji": "青色",
    "displayReading": "あおいろ",
    "readings": [
      "あおいろ"
    ],
    "meaning": "Màu xanh lam (danh từ)",
    "meaningEn": "Blue color",
    "meaningFr": "Couleur bleue",
    "meaningEs": "Color azul",
    "meaningKo": "파란색",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 318,
    "kanji": "青信号",
    "displayReading": "あおしんごう",
    "readings": [
      "あおしんごう"
    ],
    "meaning": "Đèn xanh giao thông",
    "meaningEn": "Green traffic light",
    "meaningFr": "Feu vert",
    "meaningEs": "Semáforo en verde",
    "meaningKo": "파란불 (청신호)",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 319,
    "kanji": "黒",
    "displayReading": "くろ",
    "readings": [
      "くろ"
    ],
    "meaning": "Màu đen",
    "meaningEn": "Black (noun)",
    "meaningFr": "Noir (nom)",
    "meaningEs": "Negro (sust.)",
    "meaningKo": "검정 (명사)",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 320,
    "kanji": "黒い",
    "displayReading": "くろい",
    "readings": [
      "くろい"
    ],
    "meaning": "Đen",
    "meaningEn": "Black (adj)",
    "meaningFr": "Noir (adj.)",
    "meaningEs": "Negro (adj.)",
    "meaningKo": "검다",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 321,
    "kanji": "黒色",
    "displayReading": "くろいろ",
    "readings": [
      "くろいろ"
    ],
    "meaning": "Màu đen (danh từ)",
    "meaningEn": "Black color",
    "meaningFr": "Couleur noire",
    "meaningEs": "Color negro",
    "meaningKo": "검은색",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 322,
    "kanji": "黒板",
    "displayReading": "こくばん",
    "readings": [
      "こくばん"
    ],
    "meaning": "Bảng đen",
    "meaningEn": "Blackboard",
    "meaningFr": "Tableau noir",
    "meaningEs": "Pizarra",
    "meaningKo": "칠판",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 323,
    "kanji": "黒猫",
    "displayReading": "くろねこ",
    "readings": [
      "くろねこ"
    ],
    "meaning": "Mèo đen",
    "meaningEn": "Black cat",
    "meaningFr": "Chat noir",
    "meaningEs": "Gato negro",
    "meaningKo": "검은 고양이",
    "topicId": "n5_08",
    "level": "N5"
  },
  {
    "id": 2351,
    "kanji": "兄",
    "displayReading": "あに",
    "readings": [
      "あに"
    ],
    "meaning": "Anh trai (của mình)",
    "meaningEn": "Older brother (humble)",
    "meaningFr": "Mon grand frère",
    "meaningEs": "Mi hermano mayor",
    "meaningKo": "나의 형·오빠",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2352,
    "kanji": "お兄さん",
    "displayReading": "おにいさん",
    "readings": [
      "おにいさん"
    ],
    "meaning": "Anh trai",
    "meaningEn": "Older brother",
    "meaningFr": "Grand frère (poli)",
    "meaningEs": "Hermano mayor (cortés)",
    "meaningKo": "형·오빠 (높임말)",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2353,
    "kanji": "兄弟",
    "displayReading": "きょうだい",
    "readings": [
      "きょうだい"
    ],
    "meaning": "Anh chị em",
    "meaningEn": "Siblings",
    "meaningFr": "Frères et sœurs",
    "meaningEs": "Hermanos",
    "meaningKo": "형제자매",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2354,
    "kanji": "姉",
    "displayReading": "あね",
    "readings": [
      "あね"
    ],
    "meaning": "Chị gái (của mình)",
    "meaningEn": "Older sister (humble)",
    "meaningFr": "Ma grande sœur",
    "meaningEs": "Mi hermana mayor",
    "meaningKo": "나의 누나·언니",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2355,
    "kanji": "お姉さん",
    "displayReading": "おねえさん",
    "readings": [
      "おねえさん"
    ],
    "meaning": "Chị gái",
    "meaningEn": "Older sister",
    "meaningFr": "Grande sœur (poli)",
    "meaningEs": "Hermana mayor (cortés)",
    "meaningKo": "누나·언니 (높임말)",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2356,
    "kanji": "姉妹",
    "displayReading": "しまい",
    "readings": [
      "しまい"
    ],
    "meaning": "Chị em gái",
    "meaningEn": "Sisters",
    "meaningFr": "Sœurs",
    "meaningEs": "Hermanas",
    "meaningKo": "자매",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2357,
    "kanji": "弟",
    "displayReading": "おとうと",
    "readings": [
      "おとうと"
    ],
    "meaning": "Em trai",
    "meaningEn": "Younger brother",
    "meaningFr": "Petit frère",
    "meaningEs": "Hermano menor",
    "meaningKo": "남동생",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2358,
    "kanji": "妹",
    "displayReading": "いもうと",
    "readings": [
      "いもうと"
    ],
    "meaning": "Em gái",
    "meaningEn": "Younger sister",
    "meaningFr": "Petite sœur",
    "meaningEs": "Hermana menor",
    "meaningKo": "여동생",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2359,
    "kanji": "家",
    "displayReading": "いえ・うち",
    "readings": [
      "いえ",
      "うち"
    ],
    "meaning": "Nhà, gia đình",
    "meaningEn": "House, home",
    "meaningFr": "Maison, foyer",
    "meaningEs": "Casa, hogar",
    "meaningKo": "집",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2360,
    "kanji": "家族",
    "displayReading": "かぞく",
    "readings": [
      "かぞく"
    ],
    "meaning": "Gia đình",
    "meaningEn": "Family",
    "meaningFr": "Famille",
    "meaningEs": "Familia",
    "meaningKo": "가족",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2361,
    "kanji": "親",
    "displayReading": "おや",
    "readings": [
      "おや"
    ],
    "meaning": "Cha mẹ",
    "meaningEn": "Parent",
    "meaningFr": "Parent",
    "meaningEs": "Progenitor (padre o madre)",
    "meaningKo": "부모",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2362,
    "kanji": "両親",
    "displayReading": "りょうしん",
    "readings": [
      "りょうしん"
    ],
    "meaning": "Bố mẹ, song thân",
    "meaningEn": "Both parents",
    "meaningFr": "Les deux parents",
    "meaningEs": "Padres (ambos)",
    "meaningKo": "양친, 부모님",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2363,
    "kanji": "親切",
    "displayReading": "しんせつ",
    "readings": [
      "しんせつ"
    ],
    "meaning": "Thân thiện, tốt bụng",
    "meaningEn": "Kind, friendly",
    "meaningFr": "Aimable, gentil",
    "meaningEs": "Amable, cariñoso",
    "meaningKo": "친절함",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2364,
    "kanji": "親友",
    "displayReading": "しんゆう",
    "readings": [
      "しんゆう"
    ],
    "meaning": "Bạn thân",
    "meaningEn": "Close friend",
    "meaningFr": "Meilleur ami",
    "meaningEs": "Mejor amigo",
    "meaningKo": "절친한 친구",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2365,
    "kanji": "住む",
    "displayReading": "すむ",
    "readings": [
      "すむ"
    ],
    "meaning": "Sinh sống, cư trú",
    "meaningEn": "Live, reside",
    "meaningFr": "Habiter, vivre",
    "meaningEs": "Vivir, residir",
    "meaningKo": "살다, 거주하다",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2366,
    "kanji": "住所",
    "displayReading": "じゅうしょ",
    "readings": [
      "じゅうしょ"
    ],
    "meaning": "Địa chỉ",
    "meaningEn": "Address",
    "meaningFr": "Adresse",
    "meaningEs": "Dirección, domicilio",
    "meaningKo": "주소",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 263,
    "kanji": "仕事",
    "displayReading": "しごと",
    "readings": [
      "しごと"
    ],
    "meaning": "Công việc",
    "meaningEn": "Work, job",
    "meaningFr": "Travail, métier",
    "meaningEs": "Trabajo, empleo",
    "meaningKo": "일, 직업",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2368,
    "kanji": "仕方",
    "displayReading": "しかた",
    "readings": [
      "しかた"
    ],
    "meaning": "Cách làm, phương pháp",
    "meaningEn": "Way, method",
    "meaningFr": "Manière de faire",
    "meaningEs": "Manera de hacer",
    "meaningKo": "하는 방법",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2369,
    "kanji": "働く",
    "displayReading": "はたらく",
    "readings": [
      "はたらく"
    ],
    "meaning": "Làm việc, lao động",
    "meaningEn": "Work, labor",
    "meaningFr": "Travailler",
    "meaningEs": "Trabajar",
    "meaningKo": "일하다",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 137,
    "kanji": "会社",
    "displayReading": "かいしゃ",
    "readings": [
      "かいしゃ"
    ],
    "meaning": "Công ty",
    "meaningEn": "Company",
    "meaningFr": "Entreprise, société",
    "meaningEs": "Empresa, compañía",
    "meaningKo": "회사",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2371,
    "kanji": "社員",
    "displayReading": "しゃいん",
    "readings": [
      "しゃいん"
    ],
    "meaning": "Nhân viên công ty",
    "meaningEn": "Company employee",
    "meaningFr": "Employé d'entreprise",
    "meaningEs": "Empleado de empresa",
    "meaningKo": "회사원",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2372,
    "kanji": "会社員",
    "displayReading": "かいしゃいん",
    "readings": [
      "かいしゃいん"
    ],
    "meaning": "Nhân viên văn phòng",
    "meaningEn": "Office worker",
    "meaningFr": "Employé de bureau",
    "meaningEs": "Oficinista, empleado",
    "meaningKo": "사원, 직원",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2373,
    "kanji": "社会",
    "displayReading": "しゃかい",
    "readings": [
      "しゃかい"
    ],
    "meaning": "Xã hội",
    "meaningEn": "Society",
    "meaningFr": "Société",
    "meaningEs": "Sociedad",
    "meaningKo": "사회",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2374,
    "kanji": "全員",
    "displayReading": "ぜんいん",
    "readings": [
      "ぜんいん"
    ],
    "meaning": "Toàn thể nhân viên / mọi người",
    "meaningEn": "Everyone, all members",
    "meaningFr": "Tout le monde, tous les membres",
    "meaningEs": "Todos los miembros",
    "meaningKo": "전원, 모두",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2375,
    "kanji": "夫",
    "displayReading": "おっと",
    "readings": [
      "おっと"
    ],
    "meaning": "Chồng",
    "meaningEn": "Husband",
    "meaningFr": "Mari",
    "meaningEs": "Esposo, marido",
    "meaningKo": "남편",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2376,
    "kanji": "大丈夫",
    "displayReading": "だいじょうぶ",
    "readings": [
      "だいじょうぶ"
    ],
    "meaning": "Không sao, ổn",
    "meaningEn": "All right, okay",
    "meaningFr": "Ça va, sans problème",
    "meaningEs": "Bien, sin problema",
    "meaningKo": "괜찮음, 문제없음",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2377,
    "kanji": "妻",
    "displayReading": "つま",
    "readings": [
      "つま"
    ],
    "meaning": "Vợ",
    "meaningEn": "Wife",
    "meaningFr": "Épouse, femme",
    "meaningEs": "Esposa, mujer",
    "meaningKo": "아내",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2378,
    "kanji": "夫妻",
    "displayReading": "ふさい",
    "readings": [
      "ふさい"
    ],
    "meaning": "Vợ chồng",
    "meaningEn": "Husband and wife (formal)",
    "meaningFr": "Monsieur et Madame (couple)",
    "meaningEs": "Señor y señora (matrimonio)",
    "meaningKo": "부부 (높임말)",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2379,
    "kanji": "夫婦",
    "displayReading": "ふうふ",
    "readings": [
      "ふうふ"
    ],
    "meaning": "Hai vợ chồng",
    "meaningEn": "Married couple",
    "meaningFr": "Couple marié",
    "meaningEs": "Matrimonio, pareja casada",
    "meaningKo": "부부",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2380,
    "kanji": "結ぶ",
    "displayReading": "むすぶ",
    "readings": [
      "むすぶ"
    ],
    "meaning": "Buộc, nối, kết lại",
    "meaningEn": "Tie, bind, connect",
    "meaningFr": "Nouer, relier",
    "meaningEs": "Atar, unir",
    "meaningKo": "묶다, 맺다",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2381,
    "kanji": "結婚",
    "displayReading": "けっこん",
    "readings": [
      "けっこん"
    ],
    "meaning": "Kết hôn",
    "meaningEn": "Marriage",
    "meaningFr": "Mariage",
    "meaningEs": "Matrimonio, boda",
    "meaningKo": "결혼",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2382,
    "kanji": "結果",
    "displayReading": "けっか",
    "readings": [
      "けっか"
    ],
    "meaning": "Kết quả",
    "meaningEn": "Result, outcome",
    "meaningFr": "Résultat",
    "meaningEs": "Resultado",
    "meaningKo": "결과",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2383,
    "kanji": "歳",
    "displayReading": "さい",
    "readings": [
      "さい"
    ],
    "meaning": "Tuổi",
    "meaningEn": "Years of age",
    "meaningFr": "Ans (âge)",
    "meaningEs": "Años de edad",
    "meaningKo": "살, 세 (나이)",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2384,
    "kanji": "二十歳",
    "displayReading": "はたち",
    "readings": [
      "はたち"
    ],
    "meaning": "20 tuổi",
    "meaningEn": "20 years old",
    "meaningFr": "20 ans",
    "meaningEs": "20 años de edad",
    "meaningKo": "스무 살 (20세)",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2385,
    "kanji": "世界",
    "displayReading": "せかい",
    "readings": [
      "せかい"
    ],
    "meaning": "Thế giới",
    "meaningEn": "World",
    "meaningFr": "Le monde",
    "meaningEs": "El mundo",
    "meaningKo": "세계",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2386,
    "kanji": "世話",
    "displayReading": "せわ",
    "readings": [
      "せわ"
    ],
    "meaning": "Sự chăm sóc, giúp đỡ",
    "meaningEn": "Care, help",
    "meaningFr": "Soin, aide",
    "meaningEs": "Cuidado, ayuda",
    "meaningKo": "보살핌, 신세",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2387,
    "kanji": "彼",
    "displayReading": "かれ",
    "readings": [
      "かれ"
    ],
    "meaning": "Anh ấy, bạn trai",
    "meaningEn": "He, boyfriend",
    "meaningFr": "Lui, petit ami",
    "meaningEs": "Él, novio",
    "meaningKo": "그, 남자친구",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2388,
    "kanji": "彼女",
    "displayReading": "かのじょ",
    "readings": [
      "かのじょ"
    ],
    "meaning": "Cô ấy, bạn gái",
    "meaningEn": "She, girlfriend",
    "meaningFr": "Elle, petite amie",
    "meaningEs": "Ella, novia",
    "meaningKo": "그녀, 여자친구",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 164,
    "kanji": "国",
    "displayReading": "くに",
    "readings": [
      "くに"
    ],
    "meaning": "Đất nước, quốc gia",
    "meaningEn": "Country, nation",
    "meaningFr": "Pays",
    "meaningEs": "País",
    "meaningKo": "나라, 국가",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 166,
    "kanji": "中国",
    "displayReading": "ちゅうごく",
    "readings": [
      "ちゅうごく"
    ],
    "meaning": "Trung Quốc",
    "meaningEn": "China",
    "meaningFr": "Chine",
    "meaningEs": "China",
    "meaningKo": "중국",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2391,
    "kanji": "韓国",
    "displayReading": "かんこく",
    "readings": [
      "かんこく"
    ],
    "meaning": "Hàn Quốc",
    "meaningEn": "South Korea",
    "meaningFr": "Corée du Sud",
    "meaningEs": "Corea del Sur",
    "meaningKo": "한국",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2392,
    "kanji": "米国",
    "displayReading": "べいこく",
    "readings": [
      "べいこく"
    ],
    "meaning": "Nước Mỹ",
    "meaningEn": "United States",
    "meaningFr": "États-Unis",
    "meaningEs": "Estados Unidos",
    "meaningKo": "미국",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 173,
    "kanji": "英国",
    "displayReading": "えいこく",
    "readings": [
      "えいこく"
    ],
    "meaning": "Nước Anh",
    "meaningEn": "United Kingdom",
    "meaningFr": "Royaume-Uni",
    "meaningEs": "Reino Unido",
    "meaningKo": "영국",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2394,
    "kanji": "国際",
    "displayReading": "こくさい",
    "readings": [
      "こくさい"
    ],
    "meaning": "Quốc tế",
    "meaningEn": "International",
    "meaningFr": "International",
    "meaningEs": "Internacional",
    "meaningKo": "국제",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 174,
    "kanji": "英雄",
    "displayReading": "えいゆう",
    "readings": [
      "えいゆう"
    ],
    "meaning": "Anh hùng",
    "meaningEn": "Hero",
    "meaningFr": "Héros",
    "meaningEs": "Héroe",
    "meaningKo": "영웅",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2396,
    "kanji": "主婦",
    "displayReading": "しゅふ",
    "readings": [
      "しゅふ"
    ],
    "meaning": "Nội trợ",
    "meaningEn": "Housewife",
    "meaningFr": "Femme au foyer",
    "meaningEs": "Ama de casa",
    "meaningKo": "주부",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2397,
    "kanji": "主人公",
    "displayReading": "しゅじんこう",
    "readings": [
      "しゅじんこう"
    ],
    "meaning": "Nhân vật chính",
    "meaningEn": "Main character, protagonist",
    "meaningFr": "Personnage principal",
    "meaningEs": "Protagonista",
    "meaningKo": "주인공",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 342,
    "kanji": "先輩",
    "displayReading": "せんぱい",
    "readings": [
      "せんぱい"
    ],
    "meaning": "Tiền bối",
    "meaningEn": "Senior (senpai)",
    "meaningFr": "Aîné, tuteur (senpai)",
    "meaningEs": "Compañero veterano (senpai)",
    "meaningKo": "선배",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2399,
    "kanji": "後輩",
    "displayReading": "こうはい",
    "readings": [
      "こうはい"
    ],
    "meaning": "Hậu bối",
    "meaningEn": "Junior (kohai)",
    "meaningFr": "Cadet (kohai)",
    "meaningEs": "Compañero menor (kohai)",
    "meaningKo": "후배",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2400,
    "kanji": "課長",
    "displayReading": "かちょう",
    "readings": [
      "かちょう"
    ],
    "meaning": "Trưởng phòng ban / tổ trưởng",
    "meaningEn": "Section manager",
    "meaningFr": "Chef de service",
    "meaningEs": "Jefe de sección",
    "meaningKo": "과장",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2401,
    "kanji": "残業",
    "displayReading": "ざんぎょう",
    "readings": [
      "ざんぎょう"
    ],
    "meaning": "Làm thêm giờ, tăng ca",
    "meaningEn": "Overtime work",
    "meaningFr": "Heures supplémentaires",
    "meaningEs": "Horas extras",
    "meaningKo": "잔업, 야근",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2402,
    "kanji": "出張",
    "displayReading": "しゅっちょう",
    "readings": [
      "しゅっちょう"
    ],
    "meaning": "Đi công tác",
    "meaningEn": "Business trip",
    "meaningFr": "Voyage d'affaires",
    "meaningEs": "Viaje de negocios",
    "meaningKo": "출장",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2403,
    "kanji": "就職",
    "displayReading": "しゅうしょく",
    "readings": [
      "しゅうしょく"
    ],
    "meaning": "Xin việc, đi làm",
    "meaningEn": "Finding employment",
    "meaningFr": "Trouver un emploi",
    "meaningEs": "Conseguir empleo",
    "meaningKo": "취직",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2404,
    "kanji": "引っ越し",
    "displayReading": "ひっこし",
    "readings": [
      "ひっこし"
    ],
    "meaning": "Chuyển nhà",
    "meaningEn": "Moving house",
    "meaningFr": "Déménagement",
    "meaningEs": "Mudanza",
    "meaningKo": "이사",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2405,
    "kanji": "挨拶",
    "displayReading": "あいさつ",
    "readings": [
      "あいさつ"
    ],
    "meaning": "Chào hỏi",
    "meaningEn": "Greeting",
    "meaningFr": "Salutation",
    "meaningEs": "Saludo",
    "meaningKo": "인사",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2406,
    "kanji": "相談",
    "displayReading": "そうだん",
    "readings": [
      "そうだん"
    ],
    "meaning": "Trao đổi, bàn bạc, tư vấn",
    "meaningEn": "Consultation, discussion",
    "meaningFr": "Consultation, discussion",
    "meaningEs": "Consulta, consejo",
    "meaningKo": "상담, 상의",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2407,
    "kanji": "連絡",
    "displayReading": "れんらく",
    "readings": [
      "れんらく"
    ],
    "meaning": "Liên lạc",
    "meaningEn": "Contact, notification",
    "meaningFr": "Contact, message",
    "meaningEs": "Contacto, aviso",
    "meaningKo": "연락",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2408,
    "kanji": "紹介",
    "displayReading": "しょうかい",
    "readings": [
      "しょうかい"
    ],
    "meaning": "Giới thiệu",
    "meaningEn": "Introduction",
    "meaningFr": "Présentation",
    "meaningEs": "Presentación",
    "meaningKo": "소개",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 2409,
    "kanji": "結婚式",
    "displayReading": "けっこんしき",
    "readings": [
      "けっこんしき"
    ],
    "meaning": "Lễ cưới",
    "meaningEn": "Wedding ceremony",
    "meaningFr": "Cérémonie de mariage",
    "meaningEs": "Ceremonia de boda",
    "meaningKo": "결혼식",
    "topicId": "n4_01",
    "level": "N4"
  },
  {
    "id": 274,
    "kanji": "朝",
    "displayReading": "あさ",
    "readings": [
      "あさ"
    ],
    "meaning": "Buổi sáng",
    "meaningEn": "Morning",
    "meaningFr": "Matin",
    "meaningEs": "Mañana (parte del día)",
    "meaningKo": "아침",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 276,
    "kanji": "今朝",
    "displayReading": "けさ",
    "readings": [
      "けさ"
    ],
    "meaning": "Sáng nay",
    "meaningEn": "This morning",
    "meaningFr": "Ce matin",
    "meaningEs": "Esta mañana",
    "meaningKo": "오늘 아침",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 275,
    "kanji": "毎朝",
    "displayReading": "まいあさ",
    "readings": [
      "まいあさ"
    ],
    "meaning": "Mỗi sáng",
    "meaningEn": "Every morning",
    "meaningFr": "Chaque matin",
    "meaningEs": "Cada mañana",
    "meaningKo": "매일 아침",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 279,
    "kanji": "昼",
    "displayReading": "ひる",
    "readings": [
      "ひる"
    ],
    "meaning": "Buổi trưa, ban ngày",
    "meaningEn": "Noon, daytime",
    "meaningFr": "Midi, journée",
    "meaningEs": "Mediodía, de día",
    "meaningKo": "낮, 점심",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 281,
    "kanji": "昼休み",
    "displayReading": "ひるやすみ",
    "readings": [
      "ひるやすみ"
    ],
    "meaning": "Giờ nghỉ trưa",
    "meaningEn": "Lunch break",
    "meaningFr": "Pause déjeuner",
    "meaningEs": "Descanso del mediodía",
    "meaningKo": "점심시간",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 282,
    "kanji": "昼寝",
    "displayReading": "ひるね",
    "readings": [
      "ひるね"
    ],
    "meaning": "Ngủ trưa",
    "meaningEn": "Afternoon nap",
    "meaningFr": "Sieste",
    "meaningEs": "Siesta",
    "meaningKo": "낮잠",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 284,
    "kanji": "夜",
    "displayReading": "よる",
    "readings": [
      "よる"
    ],
    "meaning": "Buổi tối, ban đêm",
    "meaningEn": "Night, evening",
    "meaningFr": "Nuit, soir",
    "meaningEs": "Noche",
    "meaningKo": "밤",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2417,
    "kanji": "今夜",
    "displayReading": "こんや",
    "readings": [
      "こんや"
    ],
    "meaning": "Tối nay",
    "meaningEn": "Tonight",
    "meaningFr": "Ce soir, cette nuit",
    "meaningEs": "Esta noche",
    "meaningKo": "오늘 밤",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 285,
    "kanji": "夜景",
    "displayReading": "やけい",
    "readings": [
      "やけい"
    ],
    "meaning": "Cảnh đêm",
    "meaningEn": "Night view",
    "meaningFr": "Vue nocturne",
    "meaningEs": "Vista nocturna",
    "meaningKo": "야경",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 286,
    "kanji": "夜勤",
    "displayReading": "やきん",
    "readings": [
      "やきん"
    ],
    "meaning": "Làm ca đêm",
    "meaningEn": "Night shift",
    "meaningFr": "Travail de nuit",
    "meaningEs": "Turno de noche",
    "meaningKo": "야간 근무",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2420,
    "kanji": "晩",
    "displayReading": "ばん",
    "readings": [
      "ばん"
    ],
    "meaning": "Buổi tối",
    "meaningEn": "Evening, night",
    "meaningFr": "Soir",
    "meaningEs": "Noche, velada",
    "meaningKo": "저녁, 밤",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2421,
    "kanji": "今晩",
    "displayReading": "こんばん",
    "readings": [
      "こんばん"
    ],
    "meaning": "Tối nay",
    "meaningEn": "This evening",
    "meaningFr": "Ce soir",
    "meaningEs": "Esta noche",
    "meaningKo": "오늘 저녁",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2422,
    "kanji": "毎晩",
    "displayReading": "まいばん",
    "readings": [
      "まいばん"
    ],
    "meaning": "Mỗi tối",
    "meaningEn": "Every evening",
    "meaningFr": "Chaque soir",
    "meaningEs": "Cada noche",
    "meaningKo": "매일 저녁",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2423,
    "kanji": "昨日",
    "displayReading": "きのう",
    "readings": [
      "きのう"
    ],
    "meaning": "Hôm qua",
    "meaningEn": "Yesterday",
    "meaningFr": "Hier",
    "meaningEs": "Ayer",
    "meaningKo": "어제",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2424,
    "kanji": "昨年",
    "displayReading": "さくねん",
    "readings": [
      "さくねん"
    ],
    "meaning": "Năm ngoái (trang trọng)",
    "meaningEn": "Last year (formal)",
    "meaningFr": "L'an dernier (formel)",
    "meaningEs": "El año pasado (formal)",
    "meaningKo": "작년 (격식)",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 99,
    "kanji": "去年",
    "displayReading": "きょねん",
    "readings": [
      "きょねん"
    ],
    "meaning": "Năm ngoái",
    "meaningEn": "Last year",
    "meaningFr": "L'année dernière",
    "meaningEs": "El año pasado",
    "meaningKo": "작년",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2426,
    "kanji": "過去",
    "displayReading": "かこ",
    "readings": [
      "かこ"
    ],
    "meaning": "Quá khứ",
    "meaningEn": "The past",
    "meaningFr": "Le passé",
    "meaningEs": "El pasado",
    "meaningKo": "과거",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 177,
    "kanji": "春",
    "displayReading": "はる",
    "readings": [
      "はる"
    ],
    "meaning": "Mùa xuân",
    "meaningEn": "Spring",
    "meaningFr": "Printemps",
    "meaningEs": "Primavera",
    "meaningKo": "봄",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 178,
    "kanji": "春休み",
    "displayReading": "はるやすみ",
    "readings": [
      "はるやすみ"
    ],
    "meaning": "Kỳ nghỉ xuân",
    "meaningEn": "Spring break",
    "meaningFr": "Vacances de printemps",
    "meaningEs": "Vacaciones de primavera",
    "meaningKo": "봄방학",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 179,
    "kanji": "青春",
    "displayReading": "せいしゅん",
    "readings": [
      "せいしゅん"
    ],
    "meaning": "Tuổi thanh xuân",
    "meaningEn": "Youth, springtime of life",
    "meaningFr": "La jeunesse",
    "meaningEs": "Juventud",
    "meaningKo": "청춘",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 181,
    "kanji": "夏",
    "displayReading": "なつ",
    "readings": [
      "なつ"
    ],
    "meaning": "Mùa hè",
    "meaningEn": "Summer",
    "meaningFr": "Été",
    "meaningEs": "Verano",
    "meaningKo": "여름",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 140,
    "kanji": "夏休み",
    "displayReading": "なつやすみ",
    "readings": [
      "なつやすみ"
    ],
    "meaning": "Kỳ nghỉ hè",
    "meaningEn": "Summer vacation",
    "meaningFr": "Vacances d'été",
    "meaningEs": "Vacaciones de verano",
    "meaningKo": "여름방학",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 183,
    "kanji": "初夏",
    "displayReading": "しょか",
    "readings": [
      "しょか"
    ],
    "meaning": "Đầu hè",
    "meaningEn": "Early summer",
    "meaningFr": "Début de l'été",
    "meaningEs": "Principios de verano",
    "meaningKo": "초여름",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 184,
    "kanji": "秋",
    "displayReading": "あき",
    "readings": [
      "あき"
    ],
    "meaning": "Mùa thu",
    "meaningEn": "Autumn, fall",
    "meaningFr": "Automne",
    "meaningEs": "Otoño",
    "meaningKo": "가을",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 185,
    "kanji": "秋風",
    "displayReading": "あきかぜ",
    "readings": [
      "あきかぜ"
    ],
    "meaning": "Gió thu",
    "meaningEn": "Autumn breeze",
    "meaningFr": "Brise d'automne",
    "meaningEs": "Brisa de otoño",
    "meaningKo": "가을바람",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 186,
    "kanji": "秋分",
    "displayReading": "しゅうぶん",
    "readings": [
      "しゅうぶん"
    ],
    "meaning": "Thu phân",
    "meaningEn": "Autumnal equinox",
    "meaningFr": "Équinoxe d'automne",
    "meaningEs": "Equinoccio de otoño",
    "meaningKo": "추분",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 187,
    "kanji": "冬",
    "displayReading": "ふゆ",
    "readings": [
      "ふゆ"
    ],
    "meaning": "Mùa đông",
    "meaningEn": "Winter",
    "meaningFr": "Hiver",
    "meaningEs": "Invierno",
    "meaningKo": "겨울",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 188,
    "kanji": "冬休み",
    "displayReading": "ふゆやすみ",
    "readings": [
      "ふゆやすみ"
    ],
    "meaning": "Kỳ nghỉ đông",
    "meaningEn": "Winter vacation",
    "meaningFr": "Vacances d'hiver",
    "meaningEs": "Vacaciones de invierno",
    "meaningKo": "겨울방학",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 189,
    "kanji": "冬至",
    "displayReading": "とうじ",
    "readings": [
      "とうじ"
    ],
    "meaning": "Đông chí",
    "meaningEn": "Winter solstice",
    "meaningFr": "Solstice d'hiver",
    "meaningEs": "Solsticio de invierno",
    "meaningKo": "동지",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 73,
    "kanji": "四季",
    "displayReading": "しき",
    "readings": [
      "しき"
    ],
    "meaning": "Bốn mùa",
    "meaningEn": "Four seasons",
    "meaningFr": "Les quatre saisons",
    "meaningEs": "Las cuatro estaciones",
    "meaningKo": "사계절",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2440,
    "kanji": "季節",
    "displayReading": "きせつ",
    "readings": [
      "きせつ"
    ],
    "meaning": "Mùa, thời tiết theo mùa",
    "meaningEn": "Season",
    "meaningFr": "Saison",
    "meaningEs": "Estación del año",
    "meaningKo": "계절",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 214,
    "kanji": "晴れ",
    "displayReading": "はれ",
    "readings": [
      "はれ"
    ],
    "meaning": "Trời nắng, trời quang",
    "meaningEn": "Sunny, clear weather",
    "meaningFr": "Beau temps, ensoleillé",
    "meaningEs": "Soleado, buen tiempo",
    "meaningKo": "맑음",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2442,
    "kanji": "晴れる",
    "displayReading": "はれる",
    "readings": [
      "はれる"
    ],
    "meaning": "Hửng nắng, quang đãng",
    "meaningEn": "Clear up (weather)",
    "meaningFr": "S'éclaircir (météo)",
    "meaningEs": "Despejarse el cielo",
    "meaningKo": "(날씨가) 개다, 맑아지다",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 216,
    "kanji": "晴天",
    "displayReading": "せいてん",
    "readings": [
      "せいてん"
    ],
    "meaning": "Trời quang mây tạnh",
    "meaningEn": "Clear sky, fine weather",
    "meaningFr": "Ciel dégagé",
    "meaningEs": "Cielo despejado",
    "meaningKo": "쾌청함",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 223,
    "kanji": "雲",
    "displayReading": "くも",
    "readings": [
      "くも"
    ],
    "meaning": "Mây",
    "meaningEn": "Cloud",
    "meaningFr": "Nuage",
    "meaningEs": "Nube",
    "meaningKo": "구름",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 225,
    "kanji": "雨雲",
    "displayReading": "あまぐも",
    "readings": [
      "あまぐも"
    ],
    "meaning": "Mây mưa",
    "meaningEn": "Rain cloud",
    "meaningFr": "Nuage de pluie",
    "meaningEs": "Nube de lluvia",
    "meaningKo": "비구름",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 226,
    "kanji": "雲海",
    "displayReading": "うんかい",
    "readings": [
      "うんかい"
    ],
    "meaning": "Biển mây",
    "meaningEn": "Sea of clouds",
    "meaningFr": "Mer de nuages",
    "meaningEs": "Mar de nubes",
    "meaningKo": "운해 (구름바다)",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2447,
    "kanji": "曇り",
    "displayReading": "くもり",
    "readings": [
      "くもり"
    ],
    "meaning": "Trời có mây, âm u",
    "meaningEn": "Cloudy weather",
    "meaningFr": "Temps nuageux",
    "meaningEs": "Nublado",
    "meaningKo": "흐림",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 228,
    "kanji": "風",
    "displayReading": "かぜ",
    "readings": [
      "かぜ"
    ],
    "meaning": "Gió",
    "meaningEn": "Wind",
    "meaningFr": "Vent",
    "meaningEs": "Viento",
    "meaningKo": "바람",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 230,
    "kanji": "台風",
    "displayReading": "たいふう",
    "readings": [
      "たいふう"
    ],
    "meaning": "Bão",
    "meaningEn": "Typhoon",
    "meaningFr": "Typhon",
    "meaningEs": "Tifón",
    "meaningKo": "태풍",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 222,
    "kanji": "梅雨",
    "displayReading": "つゆ",
    "readings": [
      "つゆ"
    ],
    "meaning": "Mùa mưa",
    "meaningEn": "Rainy season",
    "meaningFr": "Saison des pluies",
    "meaningEs": "Temporada de lluvias",
    "meaningKo": "장마",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2451,
    "kanji": "雪",
    "displayReading": "ゆき",
    "readings": [
      "ゆき"
    ],
    "meaning": "Tuyết",
    "meaningEn": "Snow",
    "meaningFr": "Neige",
    "meaningEs": "Nieve",
    "meaningKo": "눈 (날씨)",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2452,
    "kanji": "大雪",
    "displayReading": "おおゆき",
    "readings": [
      "おおゆき"
    ],
    "meaning": "Tuyết rơi dày",
    "meaningEn": "Heavy snow",
    "meaningFr": "Forte neige",
    "meaningEs": "Fuerte nevada",
    "meaningKo": "폭설, 큰눈",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2453,
    "kanji": "暑い",
    "displayReading": "あつい",
    "readings": [
      "あつい"
    ],
    "meaning": "Nóng (thời tiết)",
    "meaningEn": "Hot (weather)",
    "meaningFr": "Chaud (météo)",
    "meaningEs": "Caluroso (clima)",
    "meaningKo": "덥다",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2454,
    "kanji": "寒い",
    "displayReading": "さむい",
    "readings": [
      "さむい"
    ],
    "meaning": "Lạnh (thời tiết)",
    "meaningEn": "Cold (weather)",
    "meaningFr": "Froid (météo)",
    "meaningEs": "Frío (clima)",
    "meaningKo": "춥다",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2455,
    "kanji": "暖かい",
    "displayReading": "あたたかい",
    "readings": [
      "あたたかい"
    ],
    "meaning": "Ấm áp",
    "meaningEn": "Warm",
    "meaningFr": "Doux, tiède (météo)",
    "meaningEs": "Cálido, templado (clima)",
    "meaningKo": "따뜻하다 (날씨)",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2456,
    "kanji": "暖房",
    "displayReading": "だんぼう",
    "readings": [
      "だんぼう"
    ],
    "meaning": "Máy sưởi, hệ thống sưởi",
    "meaningEn": "Heater, heating",
    "meaningFr": "Chauffage",
    "meaningEs": "Calefacción",
    "meaningKo": "난방",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2457,
    "kanji": "涼しい",
    "displayReading": "すずしい",
    "readings": [
      "すずしい"
    ],
    "meaning": "Mát mẻ",
    "meaningEn": "Cool, refreshing",
    "meaningFr": "Frais, rafraîchissant",
    "meaningEs": "Fresco, agradable",
    "meaningKo": "시원하다, 선선하다",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2458,
    "kanji": "冷たい",
    "displayReading": "つめたい",
    "readings": [
      "つめたい"
    ],
    "meaning": "Lạnh (đồ vật, chạm vào)",
    "meaningEn": "Cold (to touch)",
    "meaningFr": "Froid (au toucher)",
    "meaningEs": "Frío (al tacto)",
    "meaningKo": "차갑다 (촉감)",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2459,
    "kanji": "冷房",
    "displayReading": "れいぼう",
    "readings": [
      "れいぼう"
    ],
    "meaning": "Điều hòa làm mát",
    "meaningEn": "Air conditioning",
    "meaningFr": "Climatisation",
    "meaningEs": "Aire acondicionado",
    "meaningKo": "냉방",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2460,
    "kanji": "冷蔵庫",
    "displayReading": "れいぞうこ",
    "readings": [
      "れいぞうこ"
    ],
    "meaning": "Tủ lạnh",
    "meaningEn": "Refrigerator",
    "meaningFr": "Réfrigérateur",
    "meaningEs": "Refrigerador, nevera",
    "meaningKo": "냉장고",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2461,
    "kanji": "明るい",
    "displayReading": "あかるい",
    "readings": [
      "あかるい"
    ],
    "meaning": "Sáng sủa, tươi sáng",
    "meaningEn": "Bright, cheerful",
    "meaningFr": "Lumineux, joyeux",
    "meaningEs": "Luminoso, alegre",
    "meaningKo": "밝다, 명랑하다",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2462,
    "kanji": "明日",
    "displayReading": "あした・あす",
    "readings": [
      "あした",
      "あす"
    ],
    "meaning": "Ngày mai",
    "meaningEn": "Tomorrow",
    "meaningFr": "Demain",
    "meaningEs": "Mañana (día siguiente)",
    "meaningKo": "내일",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2463,
    "kanji": "暗い",
    "displayReading": "くらい",
    "readings": [
      "くらい"
    ],
    "meaning": "Tối tăm",
    "meaningEn": "Dark",
    "meaningFr": "Sombre, obscur",
    "meaningEs": "Oscuro",
    "meaningKo": "어둡다",
    "topicId": "n4_02",
    "level": "N4"
  },
  {
    "id": 2464,
    "kanji": "料理",
    "displayReading": "りょうり",
    "readings": [
      "りょうり"
    ],
    "meaning": "Món ăn, nấu ăn",
    "meaningEn": "Cooking, dish",
    "meaningFr": "Cuisine, plat",
    "meaningEs": "Cocina, plato",
    "meaningKo": "요리",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2465,
    "kanji": "材料",
    "displayReading": "ざいりょう",
    "readings": [
      "ざいりょう"
    ],
    "meaning": "Nguyên liệu",
    "meaningEn": "Ingredient, material",
    "meaningFr": "Ingrédient, matériau",
    "meaningEs": "Ingrediente, material",
    "meaningKo": "재료",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2466,
    "kanji": "料金",
    "displayReading": "りょうきん",
    "readings": [
      "りょうきん"
    ],
    "meaning": "Phí, cước phí",
    "meaningEn": "Fee, charge",
    "meaningFr": "Tarif, frais",
    "meaningEs": "Tarifa, precio",
    "meaningKo": "요금",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2467,
    "kanji": "ご飯",
    "displayReading": "ごはん",
    "readings": [
      "ごはん"
    ],
    "meaning": "Cơm, bữa ăn",
    "meaningEn": "Cooked rice, meal",
    "meaningFr": "Riz cuit, repas",
    "meaningEs": "Arroz cocido, comida",
    "meaningKo": "밥, 식사",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 277,
    "kanji": "朝ご飯",
    "displayReading": "あさごはん",
    "readings": [
      "あさごはん"
    ],
    "meaning": "Bữa sáng",
    "meaningEn": "Breakfast",
    "meaningFr": "Petit-déjeuner",
    "meaningEs": "Desayuno",
    "meaningKo": "아침밥",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 280,
    "kanji": "昼ご飯",
    "displayReading": "ひるごはん",
    "readings": [
      "ひるごはん"
    ],
    "meaning": "Bữa trưa",
    "meaningEn": "Lunch",
    "meaningFr": "Déjeuner",
    "meaningEs": "Almuerzo",
    "meaningKo": "점심밥",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2470,
    "kanji": "晩ご飯",
    "displayReading": "ばんごはん",
    "readings": [
      "ばんごはん"
    ],
    "meaning": "Bữa tối",
    "meaningEn": "Dinner",
    "meaningFr": "Dîner",
    "meaningEs": "Cena",
    "meaningKo": "저녁밥",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 278,
    "kanji": "朝食",
    "displayReading": "ちょうしょく",
    "readings": [
      "ちょうしょく"
    ],
    "meaning": "Bữa sáng (trang trọng)",
    "meaningEn": "Breakfast (formal)",
    "meaningFr": "Petit-déjeuner (formel)",
    "meaningEs": "Desayuno (formal)",
    "meaningKo": "아침 식사 (조식)",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 283,
    "kanji": "昼食",
    "displayReading": "ちゅうしょく",
    "readings": [
      "ちゅうしょく"
    ],
    "meaning": "Bữa trưa (trang trọng)",
    "meaningEn": "Lunch (formal)",
    "meaningFr": "Déjeuner (formel)",
    "meaningEs": "Almuerzo (formal)",
    "meaningKo": "점심 식사 (중식)",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 288,
    "kanji": "夕食",
    "displayReading": "ゆうしょく",
    "readings": [
      "ゆうしょく"
    ],
    "meaning": "Bữa tối (trang trọng)",
    "meaningEn": "Dinner (formal)",
    "meaningFr": "Dîner (formel)",
    "meaningEs": "Cena (formal)",
    "meaningKo": "저녁 식사 (석식)",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 289,
    "kanji": "夜食",
    "displayReading": "やしょく",
    "readings": [
      "やしょく"
    ],
    "meaning": "Bữa ăn khuya",
    "meaningEn": "Midnight snack",
    "meaningFr": "Repas de fin de soirée",
    "meaningEs": "Cena tardía",
    "meaningKo": "야식",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2475,
    "kanji": "外食",
    "displayReading": "がいしょく",
    "readings": [
      "がいしょく"
    ],
    "meaning": "Ăn ngoài hàng",
    "meaningEn": "Eating out",
    "meaningFr": "Manger au restaurant",
    "meaningEs": "Comer fuera de casa",
    "meaningKo": "외식",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2476,
    "kanji": "野菜",
    "displayReading": "やさい",
    "readings": [
      "やさい"
    ],
    "meaning": "Rau củ",
    "meaningEn": "Vegetables",
    "meaningFr": "Légumes",
    "meaningEs": "Verduras",
    "meaningKo": "채소, 야채",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 353,
    "kanji": "生野菜",
    "displayReading": "なまやさい",
    "readings": [
      "なまやさい"
    ],
    "meaning": "Rau sống",
    "meaningEn": "Raw vegetables",
    "meaningFr": "Crudités, légumes crus",
    "meaningEs": "Verduras crudas",
    "meaningKo": "생채소",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2478,
    "kanji": "果物",
    "displayReading": "くだもの",
    "readings": [
      "くだもの"
    ],
    "meaning": "Trái cây, hoa quả",
    "meaningEn": "Fruit",
    "meaningFr": "Fruits",
    "meaningEs": "Fruta",
    "meaningKo": "과일",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2479,
    "kanji": "牛",
    "displayReading": "うし",
    "readings": [
      "うし"
    ],
    "meaning": "Con bò",
    "meaningEn": "Cow",
    "meaningFr": "Vache, bœuf",
    "meaningEs": "Vaca, res",
    "meaningKo": "소",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2480,
    "kanji": "牛乳",
    "displayReading": "ぎゅうにゅう",
    "readings": [
      "ぎゅうにゅう"
    ],
    "meaning": "Sữa bò",
    "meaningEn": "Milk",
    "meaningFr": "Lait de vache",
    "meaningEs": "Leche de vaca",
    "meaningKo": "우유",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2481,
    "kanji": "豚",
    "displayReading": "ぶた",
    "readings": [
      "ぶた"
    ],
    "meaning": "Con lợn (heo)",
    "meaningEn": "Pig",
    "meaningFr": "Cochon, porc",
    "meaningEs": "Cerdo",
    "meaningKo": "돼지",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2482,
    "kanji": "豚肉",
    "displayReading": "ぶたにく",
    "readings": [
      "ぶたにく"
    ],
    "meaning": "Thịt lợn",
    "meaningEn": "Pork",
    "meaningFr": "Viande de porc",
    "meaningEs": "Carne de cerdo",
    "meaningKo": "돼지고기",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2483,
    "kanji": "鳥",
    "displayReading": "とり",
    "readings": [
      "とり"
    ],
    "meaning": "Con chim, gà",
    "meaningEn": "Bird, chicken",
    "meaningFr": "Oiseau, volaille",
    "meaningEs": "Pájaro, ave",
    "meaningKo": "새",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2484,
    "kanji": "鳥肉",
    "displayReading": "とりにく",
    "readings": [
      "とりにく"
    ],
    "meaning": "Thịt gà",
    "meaningEn": "Chicken meat",
    "meaningFr": "Viande de poulet",
    "meaningEs": "Carne de pollo",
    "meaningKo": "닭고기",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2485,
    "kanji": "焼き鳥",
    "displayReading": "やきとり",
    "readings": [
      "やきとり"
    ],
    "meaning": "Thịt gà nướng xiên",
    "meaningEn": "Grilled chicken skewers (yakitori)",
    "meaningFr": "Brochettes de poulet (yakitori)",
    "meaningEs": "Brochetas de pollo (yakitori)",
    "meaningKo": "닭꼬치구이 (야키토리)",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2486,
    "kanji": "焼く",
    "displayReading": "やく",
    "readings": [
      "やく"
    ],
    "meaning": "Nướng, rán, đốt",
    "meaningEn": "Grill, bake, roast",
    "meaningFr": "Griller, cuire au four",
    "meaningEs": "Asar, hornear",
    "meaningKo": "굽다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 180,
    "kanji": "春巻き",
    "displayReading": "はるまき",
    "readings": [
      "はるまき"
    ],
    "meaning": "Chả giò, nem rán",
    "meaningEn": "Spring roll",
    "meaningFr": "Rouleau de printemps",
    "meaningEs": "Rollito de primavera",
    "meaningKo": "춘권",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2488,
    "kanji": "作る",
    "displayReading": "つくる",
    "readings": [
      "つくる"
    ],
    "meaning": "Làm, nấu, chế tạo",
    "meaningEn": "Make, cook, create",
    "meaningFr": "Fabriquer, préparer",
    "meaningEs": "Hacer, preparar, fabricar",
    "meaningKo": "만들다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2489,
    "kanji": "切る",
    "displayReading": "きる",
    "readings": [
      "きる"
    ],
    "meaning": "Cắt",
    "meaningEn": "Cut",
    "meaningFr": "Couper",
    "meaningEs": "Cortar",
    "meaningKo": "자르다, 끊다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2490,
    "kanji": "切手",
    "displayReading": "きって",
    "readings": [
      "きって"
    ],
    "meaning": "Tem thư",
    "meaningEn": "Postage stamp",
    "meaningFr": "Timbre-poste",
    "meaningEs": "Sello postal",
    "meaningKo": "우표",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2491,
    "kanji": "切符",
    "displayReading": "きっぷ",
    "readings": [
      "きっぷ"
    ],
    "meaning": "Vé (tàu, xe)",
    "meaningEn": "Ticket",
    "meaningFr": "Billet, ticket",
    "meaningEs": "Billete, boleto",
    "meaningKo": "표, 티켓",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2492,
    "kanji": "大切",
    "displayReading": "たいせつ",
    "readings": [
      "たいせつ"
    ],
    "meaning": "Quan trọng, quý giá",
    "meaningEn": "Important, precious",
    "meaningFr": "Important, précieux",
    "meaningEs": "Importante, valioso",
    "meaningKo": "소중함, 중요함",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2493,
    "kanji": "甘い",
    "displayReading": "あまい",
    "readings": [
      "あまい"
    ],
    "meaning": "Ngọt",
    "meaningEn": "Sweet",
    "meaningFr": "Sucré, doux",
    "meaningEs": "Dulce",
    "meaningKo": "달다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2494,
    "kanji": "辛い",
    "displayReading": "からい",
    "readings": [
      "からい"
    ],
    "meaning": "Cay",
    "meaningEn": "Spicy, hot",
    "meaningFr": "Épicé, piquant",
    "meaningEs": "Picante",
    "meaningKo": "맵다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2495,
    "kanji": "苦い",
    "displayReading": "にがい",
    "readings": [
      "にがい"
    ],
    "meaning": "Đắng",
    "meaningEn": "Bitter",
    "meaningFr": "Amer",
    "meaningEs": "Amargo",
    "meaningKo": "쓰다 (맛)",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2496,
    "kanji": "苦手",
    "displayReading": "にがて",
    "readings": [
      "にがて"
    ],
    "meaning": "Kém, không giỏi, ngại",
    "meaningEn": "Weak at, dislike",
    "meaningFr": "Point faible, ne pas aimer",
    "meaningEs": "Punto débil, no gustar",
    "meaningKo": "서투름, 싫어함",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2497,
    "kanji": "注文",
    "displayReading": "ちゅうもん",
    "readings": [
      "ちゅうもん"
    ],
    "meaning": "Gọi món, đặt hàng",
    "meaningEn": "Order (food, goods)",
    "meaningFr": "Commande (au restaurant)",
    "meaningEs": "Pedido (en restaurante)",
    "meaningKo": "주문",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2498,
    "kanji": "注意",
    "displayReading": "ちゅうい",
    "readings": [
      "ちゅうい"
    ],
    "meaning": "Chú ý, cẩn thận",
    "meaningEn": "Attention, caution",
    "meaningFr": "Attention, prudence",
    "meaningEs": "Atención, cuidado",
    "meaningKo": "주의, 조심",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2499,
    "kanji": "食堂",
    "displayReading": "しょくどう",
    "readings": [
      "しょくどう"
    ],
    "meaning": "Nhà ăn, căng tin",
    "meaningEn": "Cafeteria, dining hall",
    "meaningFr": "Cantine, réfectoire",
    "meaningEs": "Comedor, cafetería",
    "meaningKo": "식당",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 240,
    "kanji": "喫茶店",
    "displayReading": "きっさてん",
    "readings": [
      "きっさてん"
    ],
    "meaning": "Quán cà phê, giải khát",
    "meaningEn": "Coffee shop, cafe",
    "meaningFr": "Salon de thé, café",
    "meaningEs": "Cafetería",
    "meaningKo": "찻집, 카페",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2501,
    "kanji": "酒",
    "displayReading": "さけ",
    "readings": [
      "さけ"
    ],
    "meaning": "Rượu",
    "meaningEn": "Alcohol, sake",
    "meaningFr": "Alcool, saké",
    "meaningEs": "Alcohol, sake",
    "meaningKo": "술",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2502,
    "kanji": "お酒",
    "displayReading": "おさけ",
    "readings": [
      "おさけ"
    ],
    "meaning": "Rượu (lịch sự)",
    "meaningEn": "Alcohol (polite)",
    "meaningFr": "Alcool (poli)",
    "meaningEs": "Bebida alcohólica (cortés)",
    "meaningKo": "술 (높임말)",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2503,
    "kanji": "日本酒",
    "displayReading": "にほんしゅ",
    "readings": [
      "にほんしゅ"
    ],
    "meaning": "Rượu sake Nhật",
    "meaningEn": "Japanese sake",
    "meaningFr": "Saké japonais",
    "meaningEs": "Sake japonés",
    "meaningKo": "일본주 (사케)",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2504,
    "kanji": "味",
    "displayReading": "あじ",
    "readings": [
      "あじ"
    ],
    "meaning": "Mùi vị",
    "meaningEn": "Taste, flavor",
    "meaningFr": "Goût, saveur",
    "meaningEs": "Sabor, gusto",
    "meaningKo": "맛",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2505,
    "kanji": "味噌",
    "displayReading": "みそ",
    "readings": [
      "みそ"
    ],
    "meaning": "Tương miso",
    "meaningEn": "Miso paste",
    "meaningFr": "Pâte miso",
    "meaningEs": "Pasta de miso",
    "meaningKo": "된장 (미소)",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2506,
    "kanji": "和食",
    "displayReading": "わしょく",
    "readings": [
      "わしょく"
    ],
    "meaning": "Ẩm thực Nhật Bản",
    "meaningEn": "Japanese cuisine",
    "meaningFr": "Cuisine japonaise",
    "meaningEs": "Comida japonesa",
    "meaningKo": "일식 (화식)",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 231,
    "kanji": "和風",
    "displayReading": "わふう",
    "readings": [
      "わふう"
    ],
    "meaning": "Phong cách Nhật",
    "meaningEn": "Japanese style",
    "meaningFr": "Style japonais",
    "meaningEs": "Estilo japonés",
    "meaningKo": "일본식",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2508,
    "kanji": "洋食",
    "displayReading": "ようしょく",
    "readings": [
      "ようしょく"
    ],
    "meaning": "Ẩm thực phương Tây",
    "meaningEn": "Western cuisine",
    "meaningFr": "Cuisine occidentale",
    "meaningEs": "Comida occidental",
    "meaningKo": "양식 (서양 요리)",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2509,
    "kanji": "物",
    "displayReading": "もの",
    "readings": [
      "もの"
    ],
    "meaning": "Đồ vật, thứ",
    "meaningEn": "Thing, object",
    "meaningFr": "Objet, chose",
    "meaningEs": "Cosa, objeto",
    "meaningKo": "물건, 것",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 162,
    "kanji": "好物",
    "displayReading": "こうぶつ",
    "readings": [
      "こうぶつ"
    ],
    "meaning": "Món ăn yêu thích",
    "meaningEn": "Favorite food",
    "meaningFr": "Plat préféré",
    "meaningEs": "Comida favorita",
    "meaningKo": "좋아하는 음식",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2511,
    "kanji": "弁当",
    "displayReading": "べんとう",
    "readings": [
      "べんとう"
    ],
    "meaning": "Cơm hộp bento",
    "meaningEn": "Boxed lunch (bento)",
    "meaningFr": "Panier-repas (bento)",
    "meaningEs": "Caja de comida (bento)",
    "meaningKo": "도시락",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2512,
    "kanji": "八百屋",
    "displayReading": "やおや",
    "readings": [
      "やおや"
    ],
    "meaning": "Cửa hàng rau quả",
    "meaningEn": "Greengrocer",
    "meaningFr": "Marchand de fruits et légumes",
    "meaningEs": "Verdulería, frutería",
    "meaningKo": "채소·과일 가게",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2513,
    "kanji": "沸かす",
    "displayReading": "わかす",
    "readings": [
      "わかす"
    ],
    "meaning": "Đun sôi",
    "meaningEn": "Boil (water)",
    "meaningFr": "Faire bouillir",
    "meaningEs": "Hervir (agua)",
    "meaningKo": "(물을) 끓이다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2514,
    "kanji": "煮る",
    "displayReading": "にる",
    "readings": [
      "にる"
    ],
    "meaning": "Ninh, hầm, kho",
    "meaningEn": "Simmer, stew",
    "meaningFr": "Faire mijoter",
    "meaningEs": "Cocer a fuego lento",
    "meaningKo": "삶다, 조리다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2515,
    "kanji": "揚げる",
    "displayReading": "あげる",
    "readings": [
      "あげる"
    ],
    "meaning": "Chiên ngập dầu, rán",
    "meaningEn": "Deep-fry",
    "meaningFr": "Frire",
    "meaningEs": "Freír",
    "meaningKo": "튀기다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2516,
    "kanji": "炒める",
    "displayReading": "いためる",
    "readings": [
      "いためる"
    ],
    "meaning": "Xào",
    "meaningEn": "Stir-fry",
    "meaningFr": "Faire sauter à la poêle",
    "meaningEs": "Saltear",
    "meaningKo": "볶다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2517,
    "kanji": "混ぜる",
    "displayReading": "まぜる",
    "readings": [
      "まぜる"
    ],
    "meaning": "Trộn",
    "meaningEn": "Mix",
    "meaningFr": "Mélanger",
    "meaningEs": "Mezclar",
    "meaningKo": "섞다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2518,
    "kanji": "冷やす",
    "displayReading": "ひやす",
    "readings": [
      "ひやす"
    ],
    "meaning": "Làm lạnh, ướp lạnh",
    "meaningEn": "Chill, cool down",
    "meaningFr": "Refroidir, mettre au frais",
    "meaningEs": "Enfriar",
    "meaningKo": "식히다, 차게 하다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2519,
    "kanji": "温める",
    "displayReading": "あたためる",
    "readings": [
      "あたためる"
    ],
    "meaning": "Hâm nóng",
    "meaningEn": "Warm up, heat up",
    "meaningFr": "Réchauffer",
    "meaningEs": "Calentar",
    "meaningKo": "데우다, 따뜻하게 하다",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2520,
    "kanji": "塩",
    "displayReading": "しお",
    "readings": [
      "しお"
    ],
    "meaning": "Muối",
    "meaningEn": "Salt",
    "meaningFr": "Sel",
    "meaningEs": "Sal",
    "meaningKo": "소금",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2521,
    "kanji": "砂糖",
    "displayReading": "さとう",
    "readings": [
      "さとう"
    ],
    "meaning": "Đường",
    "meaningEn": "Sugar",
    "meaningFr": "Sucre",
    "meaningEs": "Azúcar",
    "meaningKo": "설탕",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2522,
    "kanji": "醤油",
    "displayReading": "しょうゆ",
    "readings": [
      "しょうゆ"
    ],
    "meaning": "Nước tương, xì dầu",
    "meaningEn": "Soy sauce",
    "meaningFr": "Sauce soja",
    "meaningEs": "Salsa de soja",
    "meaningKo": "간장",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2523,
    "kanji": "油",
    "displayReading": "あぶら",
    "readings": [
      "あぶら"
    ],
    "meaning": "Dầu ăn",
    "meaningEn": "Cooking oil",
    "meaningFr": "Huile",
    "meaningEs": "Aceite",
    "meaningKo": "기름",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2524,
    "kanji": "米",
    "displayReading": "こめ",
    "readings": [
      "こめ"
    ],
    "meaning": "Gạo",
    "meaningEn": "Uncooked rice",
    "meaningFr": "Riz cru",
    "meaningEs": "Arroz crudo",
    "meaningKo": "쌀",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 2525,
    "kanji": "皿",
    "displayReading": "さら",
    "readings": [
      "さら"
    ],
    "meaning": "Cái đĩa",
    "meaningEn": "Plate, dish",
    "meaningFr": "Assiette",
    "meaningEs": "Plato",
    "meaningKo": "접시",
    "topicId": "n4_03",
    "level": "N4"
  },
  {
    "id": 159,
    "kanji": "好き",
    "displayReading": "すき",
    "readings": [
      "すき"
    ],
    "meaning": "Thích",
    "meaningEn": "Like, fond of",
    "meaningFr": "Aimer, apprécier",
    "meaningEs": "Gustar",
    "meaningKo": "좋아함",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 160,
    "kanji": "大好き",
    "displayReading": "だいすき",
    "readings": [
      "だいすき"
    ],
    "meaning": "Rất thích",
    "meaningEn": "Love, like very much",
    "meaningFr": "Adorer",
    "meaningEs": "Encantar, gustar mucho",
    "meaningKo": "매우 좋아함",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 161,
    "kanji": "好む",
    "displayReading": "このむ",
    "readings": [
      "このむ"
    ],
    "meaning": "Ưa thích, yêu chuộng",
    "meaningEn": "Prefer, be fond of",
    "meaningFr": "Préférer",
    "meaningEs": "Preferir",
    "meaningKo": "선호함",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 163,
    "kanji": "好意",
    "displayReading": "こうい",
    "readings": [
      "こうい"
    ],
    "meaning": "Thiện ý, lòng tốt",
    "meaningEn": "Goodwill, kindness",
    "meaningFr": "Bienveillance",
    "meaningEs": "Buena voluntad, afecto",
    "meaningKo": "호의",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2530,
    "kanji": "趣味",
    "displayReading": "しゅみ",
    "readings": [
      "しゅみ"
    ],
    "meaning": "Sở thích",
    "meaningEn": "Hobby, pastime",
    "meaningFr": "Loisir, passe-temps",
    "meaningEs": "Afición, pasatiempo",
    "meaningKo": "취미",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2531,
    "kanji": "写す",
    "displayReading": "うつす",
    "readings": [
      "うつす"
    ],
    "meaning": "Chụp ảnh, sao chép",
    "meaningEn": "Photograph, copy",
    "meaningFr": "Photographier, copier",
    "meaningEs": "Fotografiar, copiar",
    "meaningKo": "찍다, 베끼다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2532,
    "kanji": "写真",
    "displayReading": "しゃしん",
    "readings": [
      "しゃしん"
    ],
    "meaning": "Bức ảnh",
    "meaningEn": "Photograph",
    "meaningFr": "Photo",
    "meaningEs": "Fotografía, foto",
    "meaningKo": "사진",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2533,
    "kanji": "写真家",
    "displayReading": "しゃしんか",
    "readings": [
      "しゃしんか"
    ],
    "meaning": "Nhiếp ảnh gia",
    "meaningEn": "Photographer",
    "meaningFr": "Photographe",
    "meaningEs": "Fotógrafo",
    "meaningKo": "사진작가",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2534,
    "kanji": "真",
    "displayReading": "ま",
    "readings": [
      "ま"
    ],
    "meaning": "Thật, chính giữa",
    "meaningEn": "True, exact center",
    "meaningFr": "Vrai, pur",
    "meaningEs": "Verdadero, puro",
    "meaningKo": "참됨, 순수함",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2535,
    "kanji": "真ん中",
    "displayReading": "まんなか",
    "readings": [
      "まんなか"
    ],
    "meaning": "Chính giữa",
    "meaningEn": "Right in the middle",
    "meaningFr": "En plein milieu",
    "meaningEs": "Justo en el centro",
    "meaningKo": "한가운데",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2536,
    "kanji": "映画",
    "displayReading": "えいが",
    "readings": [
      "えいが"
    ],
    "meaning": "Phim điện ảnh",
    "meaningEn": "Movie, film",
    "meaningFr": "Film, cinéma",
    "meaningEs": "Película, cine",
    "meaningKo": "영화",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2537,
    "kanji": "映画館",
    "displayReading": "えいがかん",
    "readings": [
      "えいがかん"
    ],
    "meaning": "Rạp chiếu phim",
    "meaningEn": "Movie theater",
    "meaningFr": "Salle de cinéma",
    "meaningEs": "Cine (sala)",
    "meaningKo": "영화관",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2538,
    "kanji": "漫画",
    "displayReading": "まんが",
    "readings": [
      "まんが"
    ],
    "meaning": "Truyện tranh manga",
    "meaningEn": "Manga, comic",
    "meaningFr": "Manga, bande dessinée",
    "meaningEs": "Manga, cómic",
    "meaningKo": "만화",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2539,
    "kanji": "画家",
    "displayReading": "がか",
    "readings": [
      "がか"
    ],
    "meaning": "Họa sĩ",
    "meaningEn": "Painter, artist",
    "meaningFr": "Artiste peintre",
    "meaningEs": "Pintor, artista",
    "meaningKo": "화가",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2540,
    "kanji": "絵",
    "displayReading": "え",
    "readings": [
      "え"
    ],
    "meaning": "Tranh vẽ",
    "meaningEn": "Picture, painting",
    "meaningFr": "Dessin, tableau",
    "meaningEs": "Dibujo, cuadro",
    "meaningKo": "그림",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2541,
    "kanji": "絵本",
    "displayReading": "えほん",
    "readings": [
      "えほん"
    ],
    "meaning": "Sách tranh",
    "meaningEn": "Picture book",
    "meaningFr": "Livre illustré",
    "meaningEs": "Libro ilustrado",
    "meaningKo": "그림책",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2542,
    "kanji": "歌",
    "displayReading": "うた",
    "readings": [
      "うた"
    ],
    "meaning": "Bài hát",
    "meaningEn": "Song",
    "meaningFr": "Chanson",
    "meaningEs": "Canción",
    "meaningKo": "노래",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2543,
    "kanji": "歌う",
    "displayReading": "うたう",
    "readings": [
      "うたう"
    ],
    "meaning": "Hát",
    "meaningEn": "Sing",
    "meaningFr": "Chanter",
    "meaningEs": "Cantar",
    "meaningKo": "노래하다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2544,
    "kanji": "歌手",
    "displayReading": "かしゅ",
    "readings": [
      "かしゅ"
    ],
    "meaning": "Ca sĩ",
    "meaningEn": "Singer",
    "meaningFr": "Chanteur",
    "meaningEs": "Cantante",
    "meaningKo": "가수",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2545,
    "kanji": "演奏",
    "displayReading": "えんそう",
    "readings": [
      "えんそう"
    ],
    "meaning": "Biểu diễn nhạc cụ",
    "meaningEn": "Musical performance",
    "meaningFr": "Interprétation musicale",
    "meaningEs": "Interpretación musical",
    "meaningKo": "연주",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2546,
    "kanji": "運ぶ",
    "displayReading": "はこぶ",
    "readings": [
      "はこぶ"
    ],
    "meaning": "Vận chuyển, mang vác",
    "meaningEn": "Carry, transport",
    "meaningFr": "Transporter, porter",
    "meaningEs": "Transportar, llevar",
    "meaningKo": "운반하다, 나르다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2547,
    "kanji": "運動",
    "displayReading": "うんどう",
    "readings": [
      "うんどう"
    ],
    "meaning": "Vận động, thể thao",
    "meaningEn": "Exercise, sports",
    "meaningFr": "Sport, exercice physique",
    "meaningEs": "Deporte, ejercicio",
    "meaningKo": "운동",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2548,
    "kanji": "動く",
    "displayReading": "うごく",
    "readings": [
      "うごく"
    ],
    "meaning": "Di chuyển, hoạt động",
    "meaningEn": "Move",
    "meaningFr": "Bouger",
    "meaningEs": "Moverse",
    "meaningKo": "움직이다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2549,
    "kanji": "動物",
    "displayReading": "どうぶつ",
    "readings": [
      "どうぶつ"
    ],
    "meaning": "Động vật",
    "meaningEn": "Animal",
    "meaningFr": "Animal",
    "meaningEs": "Animal",
    "meaningKo": "동물",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2550,
    "kanji": "動物園",
    "displayReading": "どうぶつえん",
    "readings": [
      "どうぶつえん"
    ],
    "meaning": "Sở thú",
    "meaningEn": "Zoo",
    "meaningFr": "Zoo",
    "meaningEs": "Zoológico",
    "meaningKo": "동물원",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2551,
    "kanji": "自動",
    "displayReading": "じどう",
    "readings": [
      "じどう"
    ],
    "meaning": "Tự động",
    "meaningEn": "Automatic",
    "meaningFr": "Automatique",
    "meaningEs": "Automático",
    "meaningKo": "자동",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2552,
    "kanji": "走る",
    "displayReading": "はしる",
    "readings": [
      "はしる"
    ],
    "meaning": "Chạy",
    "meaningEn": "Run",
    "meaningFr": "Courir",
    "meaningEs": "Correr",
    "meaningKo": "달리다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2553,
    "kanji": "泳ぐ",
    "displayReading": "およぐ",
    "readings": [
      "およぐ"
    ],
    "meaning": "Bơi",
    "meaningEn": "Swim",
    "meaningFr": "Nager",
    "meaningEs": "Nadar",
    "meaningKo": "헤엄치다, 수영하다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2554,
    "kanji": "水泳",
    "displayReading": "すいえい",
    "readings": [
      "すいえい"
    ],
    "meaning": "Môn bơi lội",
    "meaningEn": "Swimming",
    "meaningFr": "Natation",
    "meaningEs": "Natación",
    "meaningKo": "수영",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2555,
    "kanji": "野球",
    "displayReading": "やきゅう",
    "readings": [
      "やきゅう"
    ],
    "meaning": "Bóng chày",
    "meaningEn": "Baseball",
    "meaningFr": "Baseball",
    "meaningEs": "Béisbol",
    "meaningKo": "야구",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2556,
    "kanji": "遊ぶ",
    "displayReading": "あそぶ",
    "readings": [
      "あそぶ"
    ],
    "meaning": "Chơi, vui chơi",
    "meaningEn": "Play, hang out",
    "meaningFr": "Jouer, s'amuser",
    "meaningEs": "Jugar, divertirse",
    "meaningKo": "놀다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2557,
    "kanji": "習う",
    "displayReading": "ならう",
    "readings": [
      "ならう"
    ],
    "meaning": "Học (từ ai đó)",
    "meaningEn": "Learn (from someone)",
    "meaningFr": "Apprendre (auprès de qqn)",
    "meaningEs": "Aprender (de un profesor)",
    "meaningKo": "배우다, 익히다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 333,
    "kanji": "学習",
    "displayReading": "がくしゅう",
    "readings": [
      "がくしゅう"
    ],
    "meaning": "Học tập",
    "meaningEn": "Learning, study",
    "meaningFr": "Étude, apprentissage",
    "meaningEs": "Estudio, aprendizaje",
    "meaningKo": "학습",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2559,
    "kanji": "復習",
    "displayReading": "ふくしゅう",
    "readings": [
      "ふくしゅう"
    ],
    "meaning": "Ôn tập",
    "meaningEn": "Review, revision",
    "meaningFr": "Révision",
    "meaningEs": "Repaso",
    "meaningKo": "복습",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2560,
    "kanji": "予習",
    "displayReading": "よしゅう",
    "readings": [
      "よしゅう"
    ],
    "meaning": "Chuẩn bị bài trước",
    "meaningEn": "Lesson preparation",
    "meaningFr": "Préparation des cours",
    "meaningEs": "Preparación de clases",
    "meaningKo": "예습",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2561,
    "kanji": "練習",
    "displayReading": "れんしゅう",
    "readings": [
      "れんしゅう"
    ],
    "meaning": "Luyện tập",
    "meaningEn": "Practice, training",
    "meaningFr": "Entraînement, exercice",
    "meaningEs": "Práctica, entrenamiento",
    "meaningKo": "연습",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2562,
    "kanji": "試す",
    "displayReading": "ためす",
    "readings": [
      "ためす"
    ],
    "meaning": "Thử, thử nghiệm",
    "meaningEn": "Try, test",
    "meaningFr": "Essayer, tester",
    "meaningEs": "Probar, intentar",
    "meaningKo": "시험 삼아 해 보다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2563,
    "kanji": "試合",
    "displayReading": "しあい",
    "readings": [
      "しあい"
    ],
    "meaning": "Trận đấu",
    "meaningEn": "Match, game",
    "meaningFr": "Match, compétition",
    "meaningEs": "Partido, competición",
    "meaningKo": "시합, 경기",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2564,
    "kanji": "合う",
    "displayReading": "あう",
    "readings": [
      "あう"
    ],
    "meaning": "Hợp, vừa vặn, khớp",
    "meaningEn": "Fit, match, suit",
    "meaningFr": "Correspondre, aller bien",
    "meaningEs": "Encajar, quedar bien",
    "meaningKo": "맞다, 어울리다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2565,
    "kanji": "間に合う",
    "displayReading": "まにあう",
    "readings": [
      "まにあう"
    ],
    "meaning": "Kịp giờ",
    "meaningEn": "Be in time",
    "meaningFr": "Arriver à temps",
    "meaningEs": "Llegar a tiempo",
    "meaningKo": "시간에 맞추다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2566,
    "kanji": "都合",
    "displayReading": "つごう",
    "readings": [
      "つごう"
    ],
    "meaning": "Sự thuận tiện, hoàn cảnh",
    "meaningEn": "Convenience, circumstances",
    "meaningFr": "Disponibilité, convenance",
    "meaningEs": "Conveniencia, disponibilidad",
    "meaningKo": "형편, 사정",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2567,
    "kanji": "勝つ",
    "displayReading": "かつ",
    "readings": [
      "かつ"
    ],
    "meaning": "Thắng",
    "meaningEn": "Win",
    "meaningFr": "Gagner",
    "meaningEs": "Ganar",
    "meaningKo": "이기다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2568,
    "kanji": "勝負",
    "displayReading": "しょうぶ",
    "readings": [
      "しょうぶ"
    ],
    "meaning": "Thắng thua, trận đấu",
    "meaningEn": "Victory or defeat, match",
    "meaningFr": "Victoire ou défaite, duel",
    "meaningEs": "Victoria o derrota, duelo",
    "meaningKo": "승부, 겨루기",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2569,
    "kanji": "負ける",
    "displayReading": "まける",
    "readings": [
      "まける"
    ],
    "meaning": "Thua",
    "meaningEn": "Lose",
    "meaningFr": "Perdre",
    "meaningEs": "Perder",
    "meaningKo": "지다, 패하다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 362,
    "kanji": "音",
    "displayReading": "おと",
    "readings": [
      "おと"
    ],
    "meaning": "Âm thanh, tiếng động",
    "meaningEn": "Sound, noise",
    "meaningFr": "Son, bruit",
    "meaningEs": "Sonido, ruido",
    "meaningKo": "소리",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 363,
    "kanji": "音楽",
    "displayReading": "おんがく",
    "readings": [
      "おんがく"
    ],
    "meaning": "Âm nhạc",
    "meaningEn": "Music",
    "meaningFr": "Musique",
    "meaningEs": "Música",
    "meaningKo": "음악",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2572,
    "kanji": "楽器",
    "displayReading": "がっき",
    "readings": [
      "がっき"
    ],
    "meaning": "Nhạc cụ",
    "meaningEn": "Musical instrument",
    "meaningFr": "Instrument de musique",
    "meaningEs": "Instrumento musical",
    "meaningKo": "악기",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 365,
    "kanji": "楽しい",
    "displayReading": "たのしい",
    "readings": [
      "たのしい"
    ],
    "meaning": "Vui vẻ",
    "meaningEn": "Fun, enjoyable",
    "meaningFr": "Amusant, agréable",
    "meaningEs": "Divertido, agradable",
    "meaningKo": "즐겁다, 재미있다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2574,
    "kanji": "楽しむ",
    "displayReading": "たのしむ",
    "readings": [
      "たのしむ"
    ],
    "meaning": "Tận hưởng",
    "meaningEn": "Enjoy",
    "meaningFr": "Profiter de, apprécier",
    "meaningEs": "Disfrutar",
    "meaningKo": "즐기다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2575,
    "kanji": "楽",
    "displayReading": "らく",
    "readings": [
      "らく"
    ],
    "meaning": "Thoải mái, nhàn hạ",
    "meaningEn": "Comfortable, easy",
    "meaningFr": "Confortable, facile",
    "meaningEs": "Cómodo, fácil",
    "meaningKo": "편하다, 수월하다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 368,
    "kanji": "旅",
    "displayReading": "たび",
    "readings": [
      "たび"
    ],
    "meaning": "Chuyến đi, du lịch",
    "meaningEn": "Trip, journey",
    "meaningFr": "Voyage, périple",
    "meaningEs": "Viaje, travesía",
    "meaningKo": "여행",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2577,
    "kanji": "旅館",
    "displayReading": "りょかん",
    "readings": [
      "りょかん"
    ],
    "meaning": "Lữ quán kiểu Nhật",
    "meaningEn": "Japanese-style inn (ryokan)",
    "meaningFr": "Auberge traditionnelle (ryokan)",
    "meaningEs": "Posada tradicional japonesa (ryokan)",
    "meaningKo": "전통 여관 (료칸)",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2578,
    "kanji": "参加",
    "displayReading": "さんか",
    "readings": [
      "さんか"
    ],
    "meaning": "Tham gia",
    "meaningEn": "Participate",
    "meaningFr": "Participer",
    "meaningEs": "Participar",
    "meaningKo": "참가하다",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2579,
    "kanji": "応援",
    "displayReading": "おうえん",
    "readings": [
      "おうえん"
    ],
    "meaning": "Cổ vũ, ủng hộ",
    "meaningEn": "Cheer, support",
    "meaningFr": "Encourager, soutenir",
    "meaningEs": "Animar, apoyar",
    "meaningKo": "응원",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2580,
    "kanji": "見学",
    "displayReading": "けんがく",
    "readings": [
      "けんがく"
    ],
    "meaning": "Tham quan học tập",
    "meaningEn": "Field trip, study visit",
    "meaningFr": "Visite d'étude, observation",
    "meaningEs": "Visita educativa, observación",
    "meaningKo": "견학",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2581,
    "kanji": "美術",
    "displayReading": "びじゅつ",
    "readings": [
      "びじゅつ"
    ],
    "meaning": "Mỹ thuật",
    "meaningEn": "Fine arts",
    "meaningFr": "Beaux-arts",
    "meaningEs": "Bellas artes",
    "meaningKo": "미술",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2582,
    "kanji": "芸術",
    "displayReading": "げいじゅつ",
    "readings": [
      "げいじゅつ"
    ],
    "meaning": "Nghệ thuật",
    "meaningEn": "Art",
    "meaningFr": "Art",
    "meaningEs": "Arte",
    "meaningKo": "예술",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2583,
    "kanji": "技術",
    "displayReading": "ぎじゅつ",
    "readings": [
      "ぎじゅつ"
    ],
    "meaning": "Kỹ thuật",
    "meaningEn": "Technology, technique",
    "meaningFr": "Technologie, technique",
    "meaningEs": "Tecnología, técnica",
    "meaningKo": "기술",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 2584,
    "kanji": "人形劇",
    "displayReading": "にんぎょうげき",
    "readings": [
      "にんぎょうげき"
    ],
    "meaning": "Múa rối",
    "meaningEn": "Puppet show",
    "meaningFr": "Spectacle de marionnettes",
    "meaningEs": "Teatro de marionetas",
    "meaningKo": "인형극",
    "topicId": "n4_04",
    "level": "N4"
  },
  {
    "id": 237,
    "kanji": "町",
    "displayReading": "まち",
    "readings": [
      "まち"
    ],
    "meaning": "Thị trấn, khu phố",
    "meaningEn": "Town, neighborhood",
    "meaningFr": "Ville, quartier",
    "meaningEs": "Ciudad, barrio",
    "meaningKo": "동네, 거리, 마을",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 258,
    "kanji": "広い",
    "displayReading": "ひろい",
    "readings": [
      "ひろい"
    ],
    "meaning": "Rộng",
    "meaningEn": "Wide, spacious",
    "meaningFr": "Vaste, spacieux",
    "meaningEs": "Amplio, espacioso",
    "meaningKo": "넓다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 259,
    "kanji": "広場",
    "displayReading": "ひろば",
    "readings": [
      "ひろば"
    ],
    "meaning": "Quảng trường",
    "meaningEn": "Public square, plaza",
    "meaningFr": "Place publique",
    "meaningEs": "Plaza pública",
    "meaningKo": "광장",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 260,
    "kanji": "広告",
    "displayReading": "こうこく",
    "readings": [
      "こうこく"
    ],
    "meaning": "Quảng cáo",
    "meaningEn": "Advertisement",
    "meaningFr": "Publicité",
    "meaningEs": "Anuncio, publicidad",
    "meaningKo": "광고",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2589,
    "kanji": "場",
    "displayReading": "ば",
    "readings": [
      "ば"
    ],
    "meaning": "Nơi, chỗ, hiện trường",
    "meaningEn": "Place, spot, scene",
    "meaningFr": "Lieu, scène",
    "meaningEs": "Lugar, escena",
    "meaningKo": "장소, 현장",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2590,
    "kanji": "場所",
    "displayReading": "ばしょ",
    "readings": [
      "ばしょ"
    ],
    "meaning": "Địa điểm",
    "meaningEn": "Place, location",
    "meaningFr": "Endroit, emplacement",
    "meaningEs": "Lugar, ubicación",
    "meaningKo": "장소, 곳",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2591,
    "kanji": "工場",
    "displayReading": "こうじょう",
    "readings": [
      "こうじょう"
    ],
    "meaning": "Nhà máy, công xưởng",
    "meaningEn": "Factory, plant",
    "meaningFr": "Usine",
    "meaningEs": "Fábrica",
    "meaningKo": "공장",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2592,
    "kanji": "駐車場",
    "displayReading": "ちゅうしゃじょう",
    "readings": [
      "ちゅうしゃじょう"
    ],
    "meaning": "Bãi đỗ xe",
    "meaningEn": "Parking lot",
    "meaningFr": "Parking",
    "meaningEs": "Estacionamiento, parking",
    "meaningKo": "주차장",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2593,
    "kanji": "所",
    "displayReading": "ところ",
    "readings": [
      "ところ"
    ],
    "meaning": "Nơi chốn, chỗ",
    "meaningEn": "Place, spot",
    "meaningFr": "Lieu, endroit",
    "meaningEs": "Sitio, lugar",
    "meaningKo": "곳, 장소",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2594,
    "kanji": "台所",
    "displayReading": "だいどころ",
    "readings": [
      "だいどころ"
    ],
    "meaning": "Nhà bếp",
    "meaningEn": "Kitchen",
    "meaningFr": "Cuisine (pièce)",
    "meaningEs": "Cocina (habitación)",
    "meaningKo": "부엌",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2595,
    "kanji": "近い",
    "displayReading": "ちかい",
    "readings": [
      "ちかい"
    ],
    "meaning": "Gần",
    "meaningEn": "Near, close",
    "meaningFr": "Proche, près",
    "meaningEs": "Cerca, cercano",
    "meaningKo": "가깝다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2596,
    "kanji": "近所",
    "displayReading": "きんじょ",
    "readings": [
      "きんじょ"
    ],
    "meaning": "Hàng xóm, vùng lân cận",
    "meaningEn": "Neighborhood",
    "meaningFr": "Voisinage",
    "meaningEs": "Vecindario",
    "meaningKo": "이웃, 근처",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2597,
    "kanji": "最近",
    "displayReading": "さいきん",
    "readings": [
      "さいきん"
    ],
    "meaning": "Gần đây",
    "meaningEn": "Recently, lately",
    "meaningFr": "Récemment",
    "meaningEs": "Recientemente",
    "meaningKo": "최근",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2598,
    "kanji": "遠い",
    "displayReading": "とおい",
    "readings": [
      "とおい"
    ],
    "meaning": "Xa",
    "meaningEn": "Far, distant",
    "meaningFr": "Loin, éloigné",
    "meaningEs": "Lejos, lejano",
    "meaningKo": "멀다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2599,
    "kanji": "遠慮",
    "displayReading": "えんりょ",
    "readings": [
      "えんりょ"
    ],
    "meaning": "Khách sáo, ngại ngùng",
    "meaningEn": "Reserve, hesitation",
    "meaningFr": "Retenue, discrétion",
    "meaningEs": "Moderación, reserva",
    "meaningKo": "사양, 삼감",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2600,
    "kanji": "横",
    "displayReading": "よこ",
    "readings": [
      "よこ"
    ],
    "meaning": "Bên cạnh, chiều ngang",
    "meaningEn": "Beside, horizontal",
    "meaningFr": "À côté, horizontal",
    "meaningEs": "Al lado, horizontal",
    "meaningKo": "옆, 가로",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2601,
    "kanji": "角",
    "displayReading": "かど",
    "readings": [
      "かど"
    ],
    "meaning": "Góc phố, góc cạnh",
    "meaningEn": "Street corner, angle",
    "meaningFr": "Coin de rue, angle",
    "meaningEs": "Esquina, ángulo",
    "meaningKo": "모퉁이, 모서리",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2602,
    "kanji": "辺",
    "displayReading": "へん・あたり",
    "readings": [
      "へん",
      "あたり"
    ],
    "meaning": "Vùng lân cận, khu vực",
    "meaningEn": "Vicinity, around",
    "meaningFr": "Environs, alentours",
    "meaningEs": "Alrededores, cercanías",
    "meaningKo": "근처, 일대",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2603,
    "kanji": "島",
    "displayReading": "しま",
    "readings": [
      "しま"
    ],
    "meaning": "Hòn đảo",
    "meaningEn": "Island",
    "meaningFr": "Île",
    "meaningEs": "Isla",
    "meaningKo": "섬",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2604,
    "kanji": "橋",
    "displayReading": "はし",
    "readings": [
      "はし"
    ],
    "meaning": "Cây cầu",
    "meaningEn": "Bridge",
    "meaningFr": "Pont",
    "meaningEs": "Puente",
    "meaningKo": "다리 (교량)",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2605,
    "kanji": "渡る",
    "displayReading": "わたる",
    "readings": [
      "わたる"
    ],
    "meaning": "Băng qua (đường, cầu)",
    "meaningEn": "Cross (a road, bridge)",
    "meaningFr": "Traverser (un pont, une rue)",
    "meaningEs": "Cruzar (un puente o calle)",
    "meaningKo": "(다리·길을) 건너다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2606,
    "kanji": "渡す",
    "displayReading": "わたす",
    "readings": [
      "わたす"
    ],
    "meaning": "Trao tay, đưa cho",
    "meaningEn": "Hand over, pass",
    "meaningFr": "Remettre, tendre",
    "meaningEs": "Entregar, pasar",
    "meaningKo": "건네주다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2607,
    "kanji": "曲がる",
    "displayReading": "まがる",
    "readings": [
      "まがる"
    ],
    "meaning": "Rẽ, quẹo, cong",
    "meaningEn": "Turn, bend",
    "meaningFr": "Tourner, se courber",
    "meaningEs": "Girar, doblar",
    "meaningKo": "돌다, 꺾이다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2608,
    "kanji": "曲",
    "displayReading": "きょく",
    "readings": [
      "きょく"
    ],
    "meaning": "Bản nhạc, ca khúc",
    "meaningEn": "Song, musical piece",
    "meaningFr": "Morceau de musique",
    "meaningEs": "Canción, pieza musical",
    "meaningKo": "곡, 악곡",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2609,
    "kanji": "止まる",
    "displayReading": "とまる",
    "readings": [
      "とまる"
    ],
    "meaning": "Dừng lại (tự động từ)",
    "meaningEn": "Stop (intransitive)",
    "meaningFr": "S'arrêter (intransitif)",
    "meaningEs": "Detenerse (intransitivo)",
    "meaningKo": "멈추다, 서다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2610,
    "kanji": "止める",
    "displayReading": "とめる",
    "readings": [
      "とめる"
    ],
    "meaning": "Làm dừng lại, đỗ xe",
    "meaningEn": "Stop, park (transitive)",
    "meaningFr": "Arrêter, garer (transitif)",
    "meaningEs": "Detener, aparcar (transitivo)",
    "meaningKo": "멈추게 하다, 세우다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2611,
    "kanji": "中止",
    "displayReading": "ちゅうし",
    "readings": [
      "ちゅうし"
    ],
    "meaning": "Hủy bỏ, đình chỉ",
    "meaningEn": "Cancellation, suspension",
    "meaningFr": "Annulation, interruption",
    "meaningEs": "Cancelación, suspensión",
    "meaningKo": "중지, 취소",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2612,
    "kanji": "歩く",
    "displayReading": "あるく",
    "readings": [
      "あるく"
    ],
    "meaning": "Đi bộ",
    "meaningEn": "Walk",
    "meaningFr": "Marcher",
    "meaningEs": "Caminar, andar",
    "meaningKo": "걷다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2613,
    "kanji": "散歩",
    "displayReading": "さんぽ",
    "readings": [
      "さんぽ"
    ],
    "meaning": "Đi dạo",
    "meaningEn": "Stroll, take a walk",
    "meaningFr": "Promenade, balade",
    "meaningEs": "Paseo, caminata",
    "meaningKo": "산책",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2614,
    "kanji": "自転車",
    "displayReading": "じてんしゃ",
    "readings": [
      "じてんしゃ"
    ],
    "meaning": "Xe đạp",
    "meaningEn": "Bicycle",
    "meaningFr": "Vélo, bicyclette",
    "meaningEs": "Bicicleta",
    "meaningKo": "자전거",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2615,
    "kanji": "運転",
    "displayReading": "うんてん",
    "readings": [
      "うんてん"
    ],
    "meaning": "Lái xe",
    "meaningEn": "Driving",
    "meaningFr": "Conduite",
    "meaningEs": "Conducción",
    "meaningKo": "운전",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2616,
    "kanji": "運転手",
    "displayReading": "うんてんしゅ",
    "readings": [
      "うんてんしゅ"
    ],
    "meaning": "Tài xế",
    "meaningEn": "Driver",
    "meaningFr": "Chauffeur, conducteur",
    "meaningEs": "Conductor, chófer",
    "meaningKo": "운전사, 기사",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2617,
    "kanji": "降りる",
    "displayReading": "おりる",
    "readings": [
      "おりる"
    ],
    "meaning": "Xuống xe, bước xuống",
    "meaningEn": "Get off (a vehicle)",
    "meaningFr": "Descendre (d'un véhicule)",
    "meaningEs": "Bajar (de un vehículo)",
    "meaningKo": "(탈것에서) 내리다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2618,
    "kanji": "降る",
    "displayReading": "ふる",
    "readings": [
      "ふる"
    ],
    "meaning": "Rơi (mưa, tuyết)",
    "meaningEn": "Fall (rain, snow)",
    "meaningFr": "Tomber (pluie, neige)",
    "meaningEs": "Caer (lluvia, nieve)",
    "meaningKo": "(비·눈이) 내리다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2619,
    "kanji": "出発",
    "displayReading": "しゅっぱつ",
    "readings": [
      "しゅっぱつ"
    ],
    "meaning": "Xuất phát",
    "meaningEn": "Departure",
    "meaningFr": "Départ",
    "meaningEs": "Salida, partida",
    "meaningKo": "출발",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2620,
    "kanji": "発表",
    "displayReading": "はっぴょう",
    "readings": [
      "はっぴょう"
    ],
    "meaning": "Phát biểu, công bố",
    "meaningEn": "Announcement, presentation",
    "meaningFr": "Annonce, présentation",
    "meaningEs": "Presentación, anuncio",
    "meaningKo": "발표",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2621,
    "kanji": "着く",
    "displayReading": "つく",
    "readings": [
      "つく"
    ],
    "meaning": "Đến nơi",
    "meaningEn": "Arrive",
    "meaningFr": "Arriver",
    "meaningEs": "Llegar",
    "meaningKo": "도착하다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2622,
    "kanji": "着る",
    "displayReading": "きる",
    "readings": [
      "きる"
    ],
    "meaning": "Mặc (áo)",
    "meaningEn": "Wear (clothes)",
    "meaningFr": "Porter (un vêtement)",
    "meaningEs": "Ponerse, llevar puesto (ropa)",
    "meaningKo": "(옷을) 입다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2623,
    "kanji": "到着",
    "displayReading": "とうちゃく",
    "readings": [
      "とうちゃく"
    ],
    "meaning": "Sự đến nơi",
    "meaningEn": "Arrival",
    "meaningFr": "Arrivée",
    "meaningEs": "Llegada",
    "meaningKo": "도착",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2624,
    "kanji": "飛ぶ",
    "displayReading": "とぶ",
    "readings": [
      "とぶ"
    ],
    "meaning": "Bay",
    "meaningEn": "Fly",
    "meaningFr": "Voler",
    "meaningEs": "Volar",
    "meaningKo": "날다",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2625,
    "kanji": "飛行機",
    "displayReading": "ひこうき",
    "readings": [
      "ひこうき"
    ],
    "meaning": "Máy bay",
    "meaningEn": "Airplane",
    "meaningFr": "Avion",
    "meaningEs": "Avión",
    "meaningKo": "비행기",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2626,
    "kanji": "機会",
    "displayReading": "きかい",
    "readings": [
      "きかい"
    ],
    "meaning": "Cơ hội",
    "meaningEn": "Opportunity, chance",
    "meaningFr": "Occasion, opportunité",
    "meaningEs": "Oportunidad, ocasión",
    "meaningKo": "기회",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2627,
    "kanji": "船",
    "displayReading": "ふね",
    "readings": [
      "ふね"
    ],
    "meaning": "Con tàu, thuyền",
    "meaningEn": "Ship, boat",
    "meaningFr": "Bateau, navire",
    "meaningEs": "Barco, buque",
    "meaningKo": "배, 선박",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2628,
    "kanji": "港",
    "displayReading": "みなと",
    "readings": [
      "みなと"
    ],
    "meaning": "Bến cảng",
    "meaningEn": "Port, harbor",
    "meaningFr": "Port",
    "meaningEs": "Puerto",
    "meaningKo": "항구",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2629,
    "kanji": "宿",
    "displayReading": "やど",
    "readings": [
      "やど"
    ],
    "meaning": "Nhà trọ, nơi lưu trú",
    "meaningEn": "Inn, lodging",
    "meaningFr": "Auberge, logement",
    "meaningEs": "Posada, alojamiento",
    "meaningKo": "숙소, 여관",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2630,
    "kanji": "図書館",
    "displayReading": "としょかん",
    "readings": [
      "としょかん"
    ],
    "meaning": "Thư viện",
    "meaningEn": "Library",
    "meaningFr": "Bibliothèque",
    "meaningEs": "Biblioteca",
    "meaningKo": "도서관",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2631,
    "kanji": "美術館",
    "displayReading": "びじゅつかん",
    "readings": [
      "びじゅつかん"
    ],
    "meaning": "Bảo tàng mỹ thuật",
    "meaningEn": "Art museum",
    "meaningFr": "Musée d'art",
    "meaningEs": "Museo de arte",
    "meaningKo": "미술관",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2632,
    "kanji": "体育館",
    "displayReading": "たいいくかん",
    "readings": [
      "たいいくかん"
    ],
    "meaning": "Nhà thi đấu thể thao",
    "meaningEn": "Gymnasium",
    "meaningFr": "Gymnase",
    "meaningEs": "Gimnasio, pabellón",
    "meaningKo": "체육관",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2633,
    "kanji": "予約",
    "displayReading": "よやく",
    "readings": [
      "よやく"
    ],
    "meaning": "Đặt trước",
    "meaningEn": "Reservation",
    "meaningFr": "Réservation",
    "meaningEs": "Reserva",
    "meaningKo": "예약",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2634,
    "kanji": "予定",
    "displayReading": "よてい",
    "readings": [
      "よてい"
    ],
    "meaning": "Dự định, lịch trình",
    "meaningEn": "Plan, schedule",
    "meaningFr": "Programme, prévu",
    "meaningEs": "Plan, horario previsto",
    "meaningKo": "예정",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2635,
    "kanji": "約束",
    "displayReading": "やくそく",
    "readings": [
      "やくそく"
    ],
    "meaning": "Lời hứa, cuộc hẹn",
    "meaningEn": "Promise, appointment",
    "meaningFr": "Promesse, rendez-vous",
    "meaningEs": "Promesa, cita",
    "meaningKo": "약속",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2636,
    "kanji": "地図",
    "displayReading": "ちず",
    "readings": [
      "ちず"
    ],
    "meaning": "Bản đồ",
    "meaningEn": "Map",
    "meaningFr": "Carte, plan",
    "meaningEs": "Mapa, plano",
    "meaningKo": "지도",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2637,
    "kanji": "地下鉄",
    "displayReading": "ちかてつ",
    "readings": [
      "ちかてつ"
    ],
    "meaning": "Tàu điện ngầm",
    "meaningEn": "Subway",
    "meaningFr": "Métro",
    "meaningEs": "Metro, subterráneo",
    "meaningKo": "지하철",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2638,
    "kanji": "地理",
    "displayReading": "ちり",
    "readings": [
      "ちり"
    ],
    "meaning": "Địa lý",
    "meaningEn": "Geography",
    "meaningFr": "Géographie",
    "meaningEs": "Geografía",
    "meaningKo": "지리",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2639,
    "kanji": "地震",
    "displayReading": "じしん",
    "readings": [
      "じしん"
    ],
    "meaning": "Động đất",
    "meaningEn": "Earthquake",
    "meaningFr": "Tremblement de terre",
    "meaningEs": "Terremoto",
    "meaningKo": "지진",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2640,
    "kanji": "公園",
    "displayReading": "こうえん",
    "readings": [
      "こうえん"
    ],
    "meaning": "Công viên",
    "meaningEn": "Park",
    "meaningFr": "Parc",
    "meaningEs": "Parque",
    "meaningKo": "공원",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2641,
    "kanji": "県",
    "displayReading": "けん",
    "readings": [
      "けん"
    ],
    "meaning": "Tỉnh",
    "meaningEn": "Prefecture",
    "meaningFr": "Préfecture (département)",
    "meaningEs": "Prefectura",
    "meaningKo": "현 (행정구역)",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2642,
    "kanji": "市",
    "displayReading": "し",
    "readings": [
      "し"
    ],
    "meaning": "Thành phố",
    "meaningEn": "City",
    "meaningFr": "Municipalité, ville",
    "meaningEs": "Municipio, ciudad",
    "meaningKo": "시 (도시)",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2643,
    "kanji": "市民",
    "displayReading": "しみん",
    "readings": [
      "しみん"
    ],
    "meaning": "Người dân thành phố",
    "meaningEn": "Citizen",
    "meaningFr": "Citoyen",
    "meaningEs": "Ciudadano",
    "meaningKo": "시민",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2644,
    "kanji": "村",
    "displayReading": "むら",
    "readings": [
      "むら"
    ],
    "meaning": "Ngôi làng",
    "meaningEn": "Village",
    "meaningFr": "Village",
    "meaningEs": "Aldea, pueblo",
    "meaningKo": "마을, 촌",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2645,
    "kanji": "田舎",
    "displayReading": "いなか",
    "readings": [
      "いなか"
    ],
    "meaning": "Nông thôn, quê",
    "meaningEn": "Countryside, hometown",
    "meaningFr": "Campagne, province",
    "meaningEs": "Campo, zona rural",
    "meaningKo": "시골, 고향",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 105,
    "kanji": "東京",
    "displayReading": "とうきょう",
    "readings": [
      "とうきょう"
    ],
    "meaning": "Tokyo",
    "meaningEn": "Tokyo",
    "meaningFr": "Tokyo",
    "meaningEs": "Tokio",
    "meaningKo": "도쿄",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 144,
    "kanji": "京都",
    "displayReading": "きょうと",
    "readings": [
      "きょうと"
    ],
    "meaning": "Kyoto",
    "meaningEn": "Kyoto",
    "meaningFr": "Kyoto",
    "meaningEs": "Kioto",
    "meaningKo": "교토",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2648,
    "kanji": "首都",
    "displayReading": "しゅと",
    "readings": [
      "しゅと"
    ],
    "meaning": "Thủ đô",
    "meaningEn": "Capital city",
    "meaningFr": "Capitale",
    "meaningEs": "Capital",
    "meaningKo": "수도",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2649,
    "kanji": "銀",
    "displayReading": "ぎん",
    "readings": [
      "ぎん"
    ],
    "meaning": "Bạc",
    "meaningEn": "Silver",
    "meaningFr": "Argent (métal)",
    "meaningEs": "Plata",
    "meaningKo": "은 (금속)",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2650,
    "kanji": "お土産",
    "displayReading": "おみやげ",
    "readings": [
      "おみやげ"
    ],
    "meaning": "Quà lưu niệm",
    "meaningEn": "Souvenir",
    "meaningFr": "Souvenir (cadeau)",
    "meaningEs": "Recuerdo, suvenir",
    "meaningKo": "기념품, 선물",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2651,
    "kanji": "交通費",
    "displayReading": "こうつうひ",
    "readings": [
      "こうつうひ"
    ],
    "meaning": "Chi phí đi lại",
    "meaningEn": "Transportation fee",
    "meaningFr": "Frais de transport",
    "meaningEs": "Gastos de transporte",
    "meaningKo": "교통비",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2652,
    "kanji": "乗り換え",
    "displayReading": "のりかえ",
    "readings": [
      "のりかえ"
    ],
    "meaning": "Chuyển tuyến tàu/xe",
    "meaningEn": "Transfer (trains/buses)",
    "meaningFr": "Correspondance (train/bus)",
    "meaningEs": "Transbordo (tren/autobús)",
    "meaningKo": "환승, 갈아타기",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2653,
    "kanji": "高速道路",
    "displayReading": "こうそくどうろ",
    "readings": [
      "こうそくどうろ"
    ],
    "meaning": "Đường cao tốc",
    "meaningEn": "Expressway, highway",
    "meaningFr": "Autoroute",
    "meaningEs": "Autopista",
    "meaningKo": "고속도로",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2654,
    "kanji": "交差点",
    "displayReading": "こうさてん",
    "readings": [
      "こうさてん"
    ],
    "meaning": "Ngã tư, giao lộ",
    "meaningEn": "Intersection",
    "meaningFr": "Carrefour, intersection",
    "meaningEs": "Cruce, intersección",
    "meaningKo": "교차로, 사거리",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2655,
    "kanji": "横断歩道",
    "displayReading": "おうだんほどう",
    "readings": [
      "おうだんほどう"
    ],
    "meaning": "Vạch qua đường cho người đi bộ",
    "meaningEn": "Crosswalk",
    "meaningFr": "Passage piéton",
    "meaningEs": "Paso de peatones",
    "meaningKo": "횡단보도",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2656,
    "kanji": "警察",
    "displayReading": "けいさつ",
    "readings": [
      "けいさつ"
    ],
    "meaning": "Cảnh sát",
    "meaningEn": "Police",
    "meaningFr": "Police",
    "meaningEs": "Policía",
    "meaningKo": "경찰",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2657,
    "kanji": "交番",
    "displayReading": "こうばん",
    "readings": [
      "こうばん"
    ],
    "meaning": "Đồn cảnh sát nhỏ",
    "meaningEn": "Police box (koban)",
    "meaningFr": "Poste de police de quartier (koban)",
    "meaningEs": "Puesto policial de barrio (koban)",
    "meaningKo": "파출소 (코반)",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2658,
    "kanji": "市役所",
    "displayReading": "しやくしょ",
    "readings": [
      "しやくしょ"
    ],
    "meaning": "Ủy ban nhân dân thành phố",
    "meaningEn": "City hall",
    "meaningFr": "Mairie, hôtel de ville",
    "meaningEs": "Ayuntamiento, alcaldía",
    "meaningKo": "시청",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2659,
    "kanji": "博物館",
    "displayReading": "はくぶつかん",
    "readings": [
      "はくぶつかん"
    ],
    "meaning": "Bảo tàng",
    "meaningEn": "Museum",
    "meaningFr": "Musée",
    "meaningEs": "Museo",
    "meaningKo": "박물관",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2660,
    "kanji": "水族館",
    "displayReading": "すいぞくかん",
    "readings": [
      "すいぞくかん"
    ],
    "meaning": "Thủy cung",
    "meaningEn": "Aquarium",
    "meaningFr": "Aquarium",
    "meaningEs": "Acuario",
    "meaningKo": "수족관",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2661,
    "kanji": "入場料",
    "displayReading": "にゅうじょうりょう",
    "readings": [
      "にゅうじょうりょう"
    ],
    "meaning": "Vé vào cổng",
    "meaningEn": "Admission fee",
    "meaningFr": "Prix d'entrée",
    "meaningEs": "Precio de entrada",
    "meaningKo": "입장료",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2662,
    "kanji": "出発時間",
    "displayReading": "しゅっぱつじかん",
    "readings": [
      "しゅっぱつじかん"
    ],
    "meaning": "Giờ khởi hành",
    "meaningEn": "Departure time",
    "meaningFr": "Heure de départ",
    "meaningEs": "Hora de salida",
    "meaningKo": "출발 시각",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2663,
    "kanji": "到着時間",
    "displayReading": "とうちゃくじかん",
    "readings": [
      "とうちゃくじかん"
    ],
    "meaning": "Giờ đến nơi",
    "meaningEn": "Arrival time",
    "meaningFr": "Heure d'arrivée",
    "meaningEs": "Hora de llegada",
    "meaningKo": "도착 시각",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2664,
    "kanji": "世界遺産",
    "displayReading": "せかいいさん",
    "readings": [
      "せかいいさん"
    ],
    "meaning": "Di sản thế giới",
    "meaningEn": "World Heritage",
    "meaningFr": "Patrimoine mondial",
    "meaningEs": "Patrimonio de la Humanidad",
    "meaningKo": "세계유산",
    "topicId": "n4_05",
    "level": "N4"
  },
  {
    "id": 2665,
    "kanji": "体",
    "displayReading": "からだ",
    "readings": [
      "からだ"
    ],
    "meaning": "Cơ thể",
    "meaningEn": "Body",
    "meaningFr": "Corps",
    "meaningEs": "Cuerpo",
    "meaningKo": "몸, 신체",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2666,
    "kanji": "体育",
    "displayReading": "たいいく",
    "readings": [
      "たいいく"
    ],
    "meaning": "Thể dục",
    "meaningEn": "Physical education",
    "meaningFr": "Éducation physique",
    "meaningEs": "Educación física",
    "meaningKo": "체육",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2667,
    "kanji": "体調",
    "displayReading": "たいちょう",
    "readings": [
      "たいちょう"
    ],
    "meaning": "Tình trạng sức khỏe",
    "meaningEn": "Physical condition",
    "meaningFr": "Condition physique",
    "meaningEs": "Estado físico",
    "meaningKo": "컨디션, 몸 상태",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2668,
    "kanji": "体重",
    "displayReading": "たいじゅう",
    "readings": [
      "たいじゅう"
    ],
    "meaning": "Cân nặng",
    "meaningEn": "Body weight",
    "meaningFr": "Poids corporel",
    "meaningEs": "Peso corporal",
    "meaningKo": "체중",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2669,
    "kanji": "頭",
    "displayReading": "あたま",
    "readings": [
      "あたま"
    ],
    "meaning": "Cái đầu",
    "meaningEn": "Head",
    "meaningFr": "Tête",
    "meaningEs": "Cabeza",
    "meaningKo": "머리",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2670,
    "kanji": "頭痛",
    "displayReading": "ずつう",
    "readings": [
      "ずつう"
    ],
    "meaning": "Đau đầu",
    "meaningEn": "Headache",
    "meaningFr": "Mal de tête",
    "meaningEs": "Dolor de cabeza",
    "meaningKo": "두통",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2671,
    "kanji": "顔",
    "displayReading": "かお",
    "readings": [
      "かお"
    ],
    "meaning": "Khuôn mặt",
    "meaningEn": "Face",
    "meaningFr": "Visage",
    "meaningEs": "Cara, rostro",
    "meaningKo": "얼굴",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2672,
    "kanji": "首",
    "displayReading": "くび",
    "readings": [
      "くび"
    ],
    "meaning": "Cái cổ",
    "meaningEn": "Neck",
    "meaningFr": "Cou",
    "meaningEs": "Cuello",
    "meaningKo": "목",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2673,
    "kanji": "声",
    "displayReading": "こえ",
    "readings": [
      "こえ"
    ],
    "meaning": "Giọng nói",
    "meaningEn": "Voice",
    "meaningFr": "Voix",
    "meaningEs": "Voz",
    "meaningKo": "목소리",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2674,
    "kanji": "病気",
    "displayReading": "びょうき",
    "readings": [
      "びょうき"
    ],
    "meaning": "Bệnh tật, ốm",
    "meaningEn": "Illness, sickness",
    "meaningFr": "Maladie",
    "meaningEs": "Enfermedad",
    "meaningKo": "병, 질병",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2675,
    "kanji": "病院",
    "displayReading": "びょういん",
    "readings": [
      "びょういん"
    ],
    "meaning": "Bệnh viện",
    "meaningEn": "Hospital",
    "meaningFr": "Hôpital",
    "meaningEs": "Hospital",
    "meaningKo": "병원",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2676,
    "kanji": "入院",
    "displayReading": "にゅういん",
    "readings": [
      "にゅういん"
    ],
    "meaning": "Nhập viện",
    "meaningEn": "Hospitalization",
    "meaningFr": "Hospitalisation",
    "meaningEs": "Hospitalización",
    "meaningKo": "입원",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2677,
    "kanji": "退院",
    "displayReading": "たいいん",
    "readings": [
      "たいいん"
    ],
    "meaning": "Xuất viện",
    "meaningEn": "Hospital discharge",
    "meaningFr": "Sortie d'hôpital",
    "meaningEs": "Alta hospitalaria",
    "meaningKo": "퇴원",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2678,
    "kanji": "大学院",
    "displayReading": "だいがくいん",
    "readings": [
      "だいがくいん"
    ],
    "meaning": "Cao học, sau đại học",
    "meaningEn": "Graduate school",
    "meaningFr": "École doctorale / Master",
    "meaningEs": "Escuela de posgrado",
    "meaningKo": "대학원",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2679,
    "kanji": "医者",
    "displayReading": "いしゃ",
    "readings": [
      "いしゃ"
    ],
    "meaning": "Bác sĩ",
    "meaningEn": "Doctor",
    "meaningFr": "Médecin",
    "meaningEs": "Médico, doctor",
    "meaningKo": "의사",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2680,
    "kanji": "歯医者",
    "displayReading": "はいしゃ",
    "readings": [
      "はいしゃ"
    ],
    "meaning": "Nha sĩ",
    "meaningEn": "Dentist",
    "meaningFr": "Dentiste",
    "meaningEs": "Dentista",
    "meaningKo": "치과의사",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2681,
    "kanji": "医学",
    "displayReading": "いがく",
    "readings": [
      "いがく"
    ],
    "meaning": "Y học",
    "meaningEn": "Medicine (medical science)",
    "meaningFr": "Médecine (science)",
    "meaningEs": "Medicina (ciencia)",
    "meaningKo": "의학",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2682,
    "kanji": "若者",
    "displayReading": "わかもの",
    "readings": [
      "わかもの"
    ],
    "meaning": "Người trẻ tuổi",
    "meaningEn": "Young person",
    "meaningFr": "Les jeunes",
    "meaningEs": "Jóvenes",
    "meaningKo": "젊은이",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2683,
    "kanji": "作者",
    "displayReading": "さくしゃ",
    "readings": [
      "さくしゃ"
    ],
    "meaning": "Tác giả",
    "meaningEn": "Author, creator",
    "meaningFr": "Auteur",
    "meaningEs": "Autor, escritor",
    "meaningKo": "필자, 저자",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2684,
    "kanji": "痛い",
    "displayReading": "いたい",
    "readings": [
      "いたい"
    ],
    "meaning": "Đau",
    "meaningEn": "Painful, sore",
    "meaningFr": "Douloureux, avoir mal",
    "meaningEs": "Doloroso, doler",
    "meaningKo": "아프다",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2685,
    "kanji": "熱",
    "displayReading": "ねつ",
    "readings": [
      "ねつ"
    ],
    "meaning": "Sốt, nhiệt",
    "meaningEn": "Fever, heat",
    "meaningFr": "Fièvre, chaleur",
    "meaningEs": "Fiebre, calor",
    "meaningKo": "열, 열기",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2686,
    "kanji": "熱心",
    "displayReading": "ねっしん",
    "readings": [
      "ねっしん"
    ],
    "meaning": "Nhiệt tình, chăm chỉ",
    "meaningEn": "Enthusiastic, earnest",
    "meaningFr": "Enthousiaste, assidu",
    "meaningEs": "Entusiasta, dedicado",
    "meaningKo": "열심, 성실함",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 232,
    "kanji": "風邪",
    "displayReading": "かぜ",
    "readings": [
      "かぜ"
    ],
    "meaning": "Cảm lạnh",
    "meaningEn": "Cold (illness)",
    "meaningFr": "Rhume",
    "meaningEs": "Resfriado",
    "meaningKo": "감기",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 364,
    "kanji": "薬",
    "displayReading": "くすり",
    "readings": [
      "くすり"
    ],
    "meaning": "Thuốc",
    "meaningEn": "Medicine (drug)",
    "meaningFr": "Médicament",
    "meaningEs": "Medicina, medicamento",
    "meaningKo": "약",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2689,
    "kanji": "薬局",
    "displayReading": "やっきょく",
    "readings": [
      "やっきょく"
    ],
    "meaning": "Hiệu thuốc",
    "meaningEn": "Pharmacy",
    "meaningFr": "Pharmacie",
    "meaningEs": "Farmacia",
    "meaningKo": "약국",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2690,
    "kanji": "寝る",
    "displayReading": "ねる",
    "readings": [
      "ねる"
    ],
    "meaning": "Ngủ",
    "meaningEn": "Sleep, go to bed",
    "meaningFr": "Dormir, se coucher",
    "meaningEs": "Dormir, acostarse",
    "meaningKo": "자다, 눕다",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2691,
    "kanji": "寝坊",
    "displayReading": "ねぼう",
    "readings": [
      "ねぼう"
    ],
    "meaning": "Ngủ quên",
    "meaningEn": "Oversleep",
    "meaningFr": "Panne d'oreiller",
    "meaningEs": "Quedarse dormido",
    "meaningKo": "늦잠",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2692,
    "kanji": "起きる",
    "displayReading": "おきる",
    "readings": [
      "おきる"
    ],
    "meaning": "Thức dậy, xảy ra",
    "meaningEn": "Wake up, happen",
    "meaningFr": "Se lever, se produire",
    "meaningEs": "Levantarse, ocurrir",
    "meaningKo": "일어나다, 발생하다",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2693,
    "kanji": "起こす",
    "displayReading": "おこす",
    "readings": [
      "おこす"
    ],
    "meaning": "Đánh thức",
    "meaningEn": "Wake someone up",
    "meaningFr": "Réveiller quelqu'un",
    "meaningEs": "Despertar a alguien",
    "meaningKo": "깨우다, 일으키다",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2694,
    "kanji": "早起き",
    "displayReading": "はやおき",
    "readings": [
      "はやおき"
    ],
    "meaning": "Dậy sớm",
    "meaningEn": "Waking up early",
    "meaningFr": "Lève-tôt",
    "meaningEs": "Madrugar",
    "meaningKo": "일찍 일어남",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2695,
    "kanji": "疲れる",
    "displayReading": "つかれる",
    "readings": [
      "つかれる"
    ],
    "meaning": "Mệt mỏi",
    "meaningEn": "Get tired",
    "meaningFr": "Être fatigué",
    "meaningEs": "Cansarse",
    "meaningKo": "피곤하다, 지치다",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2696,
    "kanji": "地元",
    "displayReading": "じもと",
    "readings": [
      "じもと"
    ],
    "meaning": "Địa phương, quê nhà",
    "meaningEn": "Local area, hometown",
    "meaningFr": "Région natale, local",
    "meaningEs": "Tierra natal, zona local",
    "meaningKo": "현지, 고장",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2697,
    "kanji": "死ぬ",
    "displayReading": "しぬ",
    "readings": [
      "しぬ"
    ],
    "meaning": "Chết",
    "meaningEn": "Die",
    "meaningFr": "Mourir",
    "meaningEs": "Morir",
    "meaningKo": "죽다",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2698,
    "kanji": "歯",
    "displayReading": "は",
    "readings": [
      "は"
    ],
    "meaning": "Răng",
    "meaningEn": "Tooth, teeth",
    "meaningFr": "Dent",
    "meaningEs": "Diente, muela",
    "meaningKo": "이, 치아",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2699,
    "kanji": "お腹",
    "displayReading": "おなか",
    "readings": [
      "おなか"
    ],
    "meaning": "Bụng",
    "meaningEn": "Stomach, belly",
    "meaningFr": "Ventre, estomac",
    "meaningEs": "Estómago, barriga",
    "meaningKo": "배, 복부",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2700,
    "kanji": "背",
    "displayReading": "せ",
    "readings": [
      "せ"
    ],
    "meaning": "Lưng, chiều cao",
    "meaningEn": "Back, height",
    "meaningFr": "Dos, taille",
    "meaningEs": "Espalda, estatura",
    "meaningKo": "등, 키",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2701,
    "kanji": "診察",
    "displayReading": "しんさつ",
    "readings": [
      "しんさつ"
    ],
    "meaning": "Khám bệnh",
    "meaningEn": "Medical examination",
    "meaningFr": "Consultation médicale",
    "meaningEs": "Consulta médica",
    "meaningKo": "진찰",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2702,
    "kanji": "注射",
    "displayReading": "ちゅうしゃ",
    "readings": [
      "ちゅうしゃ"
    ],
    "meaning": "Tiêm thuốc",
    "meaningEn": "Injection",
    "meaningFr": "Piqûre, injection",
    "meaningEs": "Inyección",
    "meaningKo": "주사",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2703,
    "kanji": "手術",
    "displayReading": "しゅじゅつ",
    "readings": [
      "しゅじゅつ"
    ],
    "meaning": "Phẫu thuật",
    "meaningEn": "Surgery",
    "meaningFr": "Opération chirurgicale",
    "meaningEs": "Cirugía, operación",
    "meaningKo": "수술",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2704,
    "kanji": "お見舞い",
    "displayReading": "おみまい",
    "readings": [
      "おみまい"
    ],
    "meaning": "Thăm người ốm",
    "meaningEn": "Visiting a sick person",
    "meaningFr": "Visite à un malade",
    "meaningEs": "Visitar a un enfermo",
    "meaningKo": "병문안",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2705,
    "kanji": "怪我",
    "displayReading": "けが",
    "readings": [
      "けが"
    ],
    "meaning": "Vết thương, bị thương",
    "meaningEn": "Injury, wound",
    "meaningFr": "Blessure",
    "meaningEs": "Herida, lesión",
    "meaningKo": "부상, 상처",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2706,
    "kanji": "血",
    "displayReading": "ち",
    "readings": [
      "ち"
    ],
    "meaning": "Máu",
    "meaningEn": "Blood",
    "meaningFr": "Sang",
    "meaningEs": "Sangre",
    "meaningKo": "피, 혈액",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2707,
    "kanji": "骨",
    "displayReading": "ほね",
    "readings": [
      "ほね"
    ],
    "meaning": "Xương",
    "meaningEn": "Bone",
    "meaningFr": "Os",
    "meaningEs": "Hueso",
    "meaningKo": "뼈",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2708,
    "kanji": "指",
    "displayReading": "ゆび",
    "readings": [
      "ゆび"
    ],
    "meaning": "Ngón tay",
    "meaningEn": "Finger, toe",
    "meaningFr": "Doigt",
    "meaningEs": "Dedo",
    "meaningKo": "손가락",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2709,
    "kanji": "肩",
    "displayReading": "かた",
    "readings": [
      "かた"
    ],
    "meaning": "Vai",
    "meaningEn": "Shoulder",
    "meaningFr": "Épaule",
    "meaningEs": "Hombro",
    "meaningKo": "어깨",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2710,
    "kanji": "腰",
    "displayReading": "こし",
    "readings": [
      "こし"
    ],
    "meaning": "Hông, thắt lưng",
    "meaningEn": "Waist, lower back",
    "meaningFr": "Hanche, bas du dos",
    "meaningEs": "Cintura, zona lumbar",
    "meaningKo": "허리",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 2711,
    "kanji": "健康",
    "displayReading": "けんこう",
    "readings": [
      "けんこう"
    ],
    "meaning": "Sức khỏe",
    "meaningEn": "Health",
    "meaningFr": "Santé",
    "meaningEs": "Salud",
    "meaningKo": "건강",
    "topicId": "n4_06",
    "level": "N4"
  },
  {
    "id": 355,
    "kanji": "勉強",
    "displayReading": "べんきょう",
    "readings": [
      "べんきょう"
    ],
    "meaning": "Học tập",
    "meaningEn": "Study",
    "meaningFr": "Études, étudier",
    "meaningEs": "Estudiar, estudio",
    "meaningKo": "공부",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 361,
    "kanji": "化学",
    "displayReading": "かがく",
    "readings": [
      "かがく"
    ],
    "meaning": "Hóa học",
    "meaningEn": "Chemistry",
    "meaningFr": "Chimie",
    "meaningEs": "Química",
    "meaningKo": "화학",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2714,
    "kanji": "科学",
    "displayReading": "かがく",
    "readings": [
      "かがく"
    ],
    "meaning": "Khoa học",
    "meaningEn": "Science",
    "meaningFr": "Science",
    "meaningEs": "Ciencia",
    "meaningKo": "과학",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 367,
    "kanji": "留学",
    "displayReading": "りゅうがく",
    "readings": [
      "りゅうがく"
    ],
    "meaning": "Du học",
    "meaningEn": "Study abroad",
    "meaningFr": "Études à l'étranger",
    "meaningEs": "Estudiar en el extranjero",
    "meaningKo": "유학",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 366,
    "kanji": "留学生",
    "displayReading": "りゅうがくせい",
    "readings": [
      "りゅうがくせい"
    ],
    "meaning": "Du học sinh",
    "meaningEn": "International student",
    "meaningFr": "Étudiant étranger",
    "meaningEs": "Estudiante internacional",
    "meaningKo": "유학생",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 372,
    "kanji": "達人",
    "displayReading": "たつじん",
    "readings": [
      "たつじん"
    ],
    "meaning": "Cao thủ, người thành thạo",
    "meaningEn": "Master, expert",
    "meaningFr": "Maître, expert",
    "meaningEs": "Maestro, experto",
    "meaningKo": "달인, 전문가",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2718,
    "kanji": "教える",
    "displayReading": "おしえる",
    "readings": [
      "おしえる"
    ],
    "meaning": "Dạy, chỉ bảo",
    "meaningEn": "Teach, tell",
    "meaningFr": "Enseigner, indiquer",
    "meaningEs": "Enseñar, indicar",
    "meaningKo": "가르치다, 알려 주다",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2719,
    "kanji": "教室",
    "displayReading": "きょうしつ",
    "readings": [
      "きょうしつ"
    ],
    "meaning": "Phòng học",
    "meaningEn": "Classroom",
    "meaningFr": "Salle de classe",
    "meaningEs": "Aula, salón de clases",
    "meaningKo": "교실",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2720,
    "kanji": "教科書",
    "displayReading": "きょうかしょ",
    "readings": [
      "きょうかしょ"
    ],
    "meaning": "Sách giáo khoa",
    "meaningEn": "Textbook",
    "meaningFr": "Manuel scolaire",
    "meaningEs": "Libro de texto",
    "meaningKo": "교과서",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2721,
    "kanji": "会議室",
    "displayReading": "かいぎしつ",
    "readings": [
      "かいぎしつ"
    ],
    "meaning": "Phòng họp",
    "meaningEn": "Meeting room",
    "meaningFr": "Salle de réunion",
    "meaningEs": "Sala de reuniones",
    "meaningKo": "회의실",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2722,
    "kanji": "問題",
    "displayReading": "もんだい",
    "readings": [
      "もんだい"
    ],
    "meaning": "Vấn đề, câu hỏi đề thi",
    "meaningEn": "Problem, exam question",
    "meaningFr": "Problème, question",
    "meaningEs": "Problema, pregunta",
    "meaningKo": "문제",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2723,
    "kanji": "宿題",
    "displayReading": "しゅくだい",
    "readings": [
      "しゅくだい"
    ],
    "meaning": "Bài tập về nhà",
    "meaningEn": "Homework",
    "meaningFr": "Devoirs à la maison",
    "meaningEs": "Tarea, deberes",
    "meaningKo": "숙제",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2724,
    "kanji": "話題",
    "displayReading": "わだい",
    "readings": [
      "わだい"
    ],
    "meaning": "Chủ đề nói chuyện",
    "meaningEn": "Topic of conversation",
    "meaningFr": "Sujet de conversation",
    "meaningEs": "Tema de conversación",
    "meaningKo": "화제, 이야기 주제",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2725,
    "kanji": "質問",
    "displayReading": "しつもん",
    "readings": [
      "しつもん"
    ],
    "meaning": "Câu hỏi, thắc mắc",
    "meaningEn": "Question",
    "meaningFr": "Question",
    "meaningEs": "Pregunta",
    "meaningKo": "질문",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2726,
    "kanji": "答える",
    "displayReading": "こたえる",
    "readings": [
      "こたえる"
    ],
    "meaning": "Trả lời",
    "meaningEn": "Answer (verb)",
    "meaningFr": "Répondre",
    "meaningEs": "Responder, contestar",
    "meaningKo": "대답하다",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2727,
    "kanji": "答え",
    "displayReading": "こたえ",
    "readings": [
      "こたえ"
    ],
    "meaning": "Câu trả lời, đáp án",
    "meaningEn": "Answer (noun)",
    "meaningFr": "Réponse",
    "meaningEs": "Respuesta",
    "meaningKo": "대답, 정답",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2728,
    "kanji": "試験",
    "displayReading": "しけん",
    "readings": [
      "しけん"
    ],
    "meaning": "Kỳ thi",
    "meaningEn": "Exam, test",
    "meaningFr": "Examen",
    "meaningEs": "Examen",
    "meaningKo": "시험",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2729,
    "kanji": "経験",
    "displayReading": "けいけん",
    "readings": [
      "けいけん"
    ],
    "meaning": "Kinh nghiệm",
    "meaningEn": "Experience",
    "meaningFr": "Expérience",
    "meaningEs": "Experiencia",
    "meaningKo": "경험",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2730,
    "kanji": "漢字",
    "displayReading": "かんじ",
    "readings": [
      "かんじ"
    ],
    "meaning": "Chữ Hán (Kanji)",
    "meaningEn": "Kanji",
    "meaningFr": "Kanji",
    "meaningEs": "Kanji",
    "meaningKo": "한자",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2731,
    "kanji": "文字",
    "displayReading": "もじ",
    "readings": [
      "もじ"
    ],
    "meaning": "Chữ viết, ký tự",
    "meaningEn": "Character, letter",
    "meaningFr": "Caractère, lettre",
    "meaningEs": "Carácter, letra",
    "meaningKo": "글자",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2732,
    "kanji": "字",
    "displayReading": "じ",
    "readings": [
      "じ"
    ],
    "meaning": "Chữ cái, nét chữ",
    "meaningEn": "Letter, character",
    "meaningFr": "Lettre, écriture",
    "meaningEs": "Letra, carácter escrito",
    "meaningKo": "문자, 글자",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2733,
    "kanji": "意味",
    "displayReading": "いみ",
    "readings": [
      "いみ"
    ],
    "meaning": "Ý nghĩa",
    "meaningEn": "Meaning",
    "meaningFr": "Sens, signification",
    "meaningEs": "Significado, sentido",
    "meaningKo": "의미, 뜻",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2734,
    "kanji": "意見",
    "displayReading": "いけん",
    "readings": [
      "いけん"
    ],
    "meaning": "Ý kiến",
    "meaningEn": "Opinion",
    "meaningFr": "Avis, opinion",
    "meaningEs": "Opinión",
    "meaningKo": "의견",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2735,
    "kanji": "知る",
    "displayReading": "しる",
    "readings": [
      "しる"
    ],
    "meaning": "Biết",
    "meaningEn": "Know",
    "meaningFr": "Savoir, connaître",
    "meaningEs": "Saber, conocer",
    "meaningKo": "알다",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2736,
    "kanji": "お知らせ",
    "displayReading": "おしらせ",
    "readings": [
      "おしらせ"
    ],
    "meaning": "Thông báo",
    "meaningEn": "Notice, announcement",
    "meaningFr": "Avis, annonce",
    "meaningEs": "Aviso, notificación",
    "meaningKo": "알림, 공지",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2737,
    "kanji": "思う",
    "displayReading": "おもう",
    "readings": [
      "おもう"
    ],
    "meaning": "Nghĩ, cảm thấy",
    "meaningEn": "Think, feel",
    "meaningFr": "Penser, croire",
    "meaningEs": "Pensar, creer",
    "meaningKo": "생각하다",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2738,
    "kanji": "思い出す",
    "displayReading": "おもいだす",
    "readings": [
      "おもいだす"
    ],
    "meaning": "Nhớ lại",
    "meaningEn": "Recall, remember",
    "meaningFr": "Se souvenir, se rappeler",
    "meaningEs": "Recordar, acordarse",
    "meaningKo": "생각해 내다, 떠올리다",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2739,
    "kanji": "考える",
    "displayReading": "かんがえる",
    "readings": [
      "かんがえる"
    ],
    "meaning": "Suy nghĩ, cân nhắc",
    "meaningEn": "Think, consider",
    "meaningFr": "Réfléchir",
    "meaningEs": "Pensar, reflexionar",
    "meaningKo": "생각하다, 궁리하다",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2740,
    "kanji": "考え",
    "displayReading": "かんがえ",
    "readings": [
      "かんがえ"
    ],
    "meaning": "Suy nghĩ, ý tưởng",
    "meaningEn": "Thought, idea",
    "meaningFr": "Idée, réflexion",
    "meaningEs": "Idea, pensamiento",
    "meaningKo": "생각",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2741,
    "kanji": "覚える",
    "displayReading": "おぼえる",
    "readings": [
      "おぼえる"
    ],
    "meaning": "Ghi nhớ, học thuộc",
    "meaningEn": "Memorize, remember",
    "meaningFr": "Mémoriser, retenir",
    "meaningEs": "Memorizar, aprender",
    "meaningKo": "외우다, 기억하다",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2742,
    "kanji": "忘れる",
    "displayReading": "わすれる",
    "readings": [
      "わすれる"
    ],
    "meaning": "Quên",
    "meaningEn": "Forget",
    "meaningFr": "Oublier",
    "meaningEs": "Olvidar",
    "meaningKo": "잊다",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2743,
    "kanji": "忘れ物",
    "displayReading": "わすれもの",
    "readings": [
      "わすれもの"
    ],
    "meaning": "Đồ để quên",
    "meaningEn": "Lost item, forgotten thing",
    "meaningFr": "Objet oublié",
    "meaningEs": "Objeto olvidado",
    "meaningKo": "분실물, 놓고 간 물건",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2744,
    "kanji": "説明",
    "displayReading": "せつめい",
    "readings": [
      "せつめい"
    ],
    "meaning": "Giải thích",
    "meaningEn": "Explanation",
    "meaningFr": "Explication",
    "meaningEs": "Explicación",
    "meaningKo": "설명",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2745,
    "kanji": "小説",
    "displayReading": "しょうせつ",
    "readings": [
      "しょうせつ"
    ],
    "meaning": "Tiểu thuyết",
    "meaningEn": "Novel",
    "meaningFr": "Roman",
    "meaningEs": "Novela",
    "meaningKo": "소설",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2746,
    "kanji": "研究",
    "displayReading": "けんきゅう",
    "readings": [
      "けんきゅう"
    ],
    "meaning": "Nghiên cứu",
    "meaningEn": "Research",
    "meaningFr": "Recherche",
    "meaningEs": "Investigación",
    "meaningKo": "연구",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2747,
    "kanji": "研究室",
    "displayReading": "けんきゅうしつ",
    "readings": [
      "けんきゅうしつ"
    ],
    "meaning": "Phòng nghiên cứu",
    "meaningEn": "Research lab",
    "meaningFr": "Laboratoire de recherche",
    "meaningEs": "Laboratorio de investigación",
    "meaningKo": "연구실",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2748,
    "kanji": "卒業",
    "displayReading": "そつぎょう",
    "readings": [
      "そつぎょう"
    ],
    "meaning": "Tốt nghiệp",
    "meaningEn": "Graduation",
    "meaningFr": "Remise de diplôme, fin d'études",
    "meaningEs": "Graduación",
    "meaningKo": "졸업",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2749,
    "kanji": "授業",
    "displayReading": "じゅぎょう",
    "readings": [
      "じゅぎょう"
    ],
    "meaning": "Giờ học, tiết học",
    "meaningEn": "Class, lesson",
    "meaningFr": "Cours, leçon",
    "meaningEs": "Clase, lección",
    "meaningKo": "수업",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2750,
    "kanji": "産業",
    "displayReading": "さんぎょう",
    "readings": [
      "さんぎょう"
    ],
    "meaning": "Ngành công nghiệp",
    "meaningEn": "Industry",
    "meaningFr": "Industrie",
    "meaningEs": "Industria",
    "meaningKo": "공업",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2751,
    "kanji": "時計",
    "displayReading": "とけい",
    "readings": [
      "とけい"
    ],
    "meaning": "Đồng hồ",
    "meaningEn": "Clock, watch",
    "meaningFr": "Montre, horloge",
    "meaningEs": "Reloj",
    "meaningKo": "시계",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2752,
    "kanji": "計画",
    "displayReading": "けいかく",
    "readings": [
      "けいかく"
    ],
    "meaning": "Kế hoạch",
    "meaningEn": "Plan",
    "meaningFr": "Projet, plan",
    "meaningEs": "Plan, proyecto",
    "meaningKo": "계획",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2753,
    "kanji": "計算",
    "displayReading": "けいさん",
    "readings": [
      "けいさん"
    ],
    "meaning": "Tính toán",
    "meaningEn": "Calculation",
    "meaningFr": "Calcul",
    "meaningEs": "Cálculo",
    "meaningKo": "계산",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2754,
    "kanji": "日記",
    "displayReading": "にっき",
    "readings": [
      "にっき"
    ],
    "meaning": "Nhật ký",
    "meaningEn": "Diary",
    "meaningFr": "Journal intime",
    "meaningEs": "Diario personal",
    "meaningKo": "일기",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2755,
    "kanji": "記事",
    "displayReading": "きじ",
    "readings": [
      "きじ"
    ],
    "meaning": "Bài báo",
    "meaningEn": "News article",
    "meaningFr": "Article de presse",
    "meaningEs": "Artículo de prensa",
    "meaningKo": "기사",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2756,
    "kanji": "記入",
    "displayReading": "きにゅう",
    "readings": [
      "きにゅう"
    ],
    "meaning": "Điền vào (đơn, giấy tờ)",
    "meaningEn": "Fill in (a form)",
    "meaningFr": "Remplir (un formulaire)",
    "meaningEs": "Rellenar (un formulario)",
    "meaningKo": "기입",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2757,
    "kanji": "受付",
    "displayReading": "うけつけ",
    "readings": [
      "うけつけ"
    ],
    "meaning": "Quầy lễ tân, tiếp nhận",
    "meaningEn": "Reception desk",
    "meaningFr": "Accueil, réception",
    "meaningEs": "Recepción",
    "meaningKo": "접수, 안내 데스크",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2758,
    "kanji": "受ける",
    "displayReading": "うける",
    "readings": [
      "うける"
    ],
    "meaning": "Tham dự (kỳ thi), nhận",
    "meaningEn": "Take (an exam), receive",
    "meaningFr": "Passer (un examen), recevoir",
    "meaningEs": "Hacer (un examen), recibir",
    "meaningKo": "(시험을) 치다, 받다",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2759,
    "kanji": "入学",
    "displayReading": "にゅうがく",
    "readings": [
      "にゅうがく"
    ],
    "meaning": "Nhập học",
    "meaningEn": "School entrance",
    "meaningFr": "Entrée à l'école",
    "meaningEs": "Ingreso escolar",
    "meaningKo": "입학",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2760,
    "kanji": "入学式",
    "displayReading": "にゅうがくしき",
    "readings": [
      "にゅうがくしき"
    ],
    "meaning": "Lễ khai giảng, nhập học",
    "meaningEn": "Entrance ceremony",
    "meaningFr": "Cérémonie de rentrée",
    "meaningEs": "Ceremonia de ingreso",
    "meaningKo": "입학식",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2761,
    "kanji": "卒業式",
    "displayReading": "そつぎょうしき",
    "readings": [
      "そつぎょうしき"
    ],
    "meaning": "Lễ tốt nghiệp",
    "meaningEn": "Graduation ceremony",
    "meaningFr": "Cérémonie de remise des diplômes",
    "meaningEs": "Ceremonia de graduación",
    "meaningKo": "졸업식",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2762,
    "kanji": "合格",
    "displayReading": "ごうかく",
    "readings": [
      "ごうかく"
    ],
    "meaning": "Đỗ (kỳ thi)",
    "meaningEn": "Pass (an exam)",
    "meaningFr": "Réussite (à un examen)",
    "meaningEs": "Aprobar (un examen)",
    "meaningKo": "합격",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2763,
    "kanji": "不合格",
    "displayReading": "ふごうかく",
    "readings": [
      "ふごうかく"
    ],
    "meaning": "Trượt (kỳ thi)",
    "meaningEn": "Fail (an exam)",
    "meaningFr": "Échec (à un examen)",
    "meaningEs": "Suspender, fallar",
    "meaningKo": "불합격, 실패",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2764,
    "kanji": "成績",
    "displayReading": "せいせき",
    "readings": [
      "せいせき"
    ],
    "meaning": "Thành tích, điểm số",
    "meaningEn": "Grades, results",
    "meaningFr": "Résultats scolaires, notes",
    "meaningEs": "Calificaciones, notas",
    "meaningKo": "성적",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2765,
    "kanji": "点数",
    "displayReading": "てんすう",
    "readings": [
      "てんすう"
    ],
    "meaning": "Điểm số",
    "meaningEn": "Score, points",
    "meaningFr": "Score, points",
    "meaningEs": "Puntuación, nota",
    "meaningKo": "점수",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2766,
    "kanji": "翻訳",
    "displayReading": "ほんやく",
    "readings": [
      "ほんやく"
    ],
    "meaning": "Biên dịch",
    "meaningEn": "Written translation",
    "meaningFr": "Traduction écrite",
    "meaningEs": "Traducción escrita",
    "meaningKo": "번역",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2767,
    "kanji": "通訳",
    "displayReading": "つうやく",
    "readings": [
      "つうやく"
    ],
    "meaning": "Phiên dịch",
    "meaningEn": "Interpreting",
    "meaningFr": "Interprétation orale",
    "meaningEs": "Interpretación oral",
    "meaningKo": "통역",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2768,
    "kanji": "専門",
    "displayReading": "せんもん",
    "readings": [
      "せんもん"
    ],
    "meaning": "Chuyên môn, chuyên ngành",
    "meaningEn": "Specialty, major",
    "meaningFr": "Spécialité, domaine",
    "meaningEs": "Especialidad",
    "meaningKo": "전공, 전문",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2769,
    "kanji": "教育",
    "displayReading": "きょういく",
    "readings": [
      "きょういく"
    ],
    "meaning": "Giáo dục",
    "meaningEn": "Education",
    "meaningFr": "Éducation",
    "meaningEs": "Educación",
    "meaningKo": "교육",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2770,
    "kanji": "確認",
    "displayReading": "かくにん",
    "readings": [
      "かくにん"
    ],
    "meaning": "Xác nhận",
    "meaningEn": "Confirmation",
    "meaningFr": "Vérification, confirmation",
    "meaningEs": "Confirmación, verificación",
    "meaningKo": "확인",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2771,
    "kanji": "準備",
    "displayReading": "じゅんび",
    "readings": [
      "じゅんび"
    ],
    "meaning": "Chuẩn bị",
    "meaningEn": "Preparation",
    "meaningFr": "Préparation",
    "meaningEs": "Preparación",
    "meaningKo": "준비",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2772,
    "kanji": "申し込む",
    "displayReading": "もうしこむ",
    "readings": [
      "もうしこむ"
    ],
    "meaning": "Đăng ký",
    "meaningEn": "Apply, sign up",
    "meaningFr": "S'inscrire, postuler",
    "meaningEs": "Solicitar, inscribirse",
    "meaningKo": "신청하다",
    "topicId": "n4_07",
    "level": "N4"
  },
  {
    "id": 2773,
    "kanji": "売る",
    "displayReading": "うる",
    "readings": [
      "うる"
    ],
    "meaning": "Bán",
    "meaningEn": "Sell",
    "meaningFr": "Vendre",
    "meaningEs": "Vender",
    "meaningKo": "팔다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2774,
    "kanji": "売り場",
    "displayReading": "うりば",
    "readings": [
      "うりば"
    ],
    "meaning": "Quầy bán hàng",
    "meaningEn": "Sales counter, section",
    "meaningFr": "Rayon, comptoir de vente",
    "meaningEs": "Mostrador, sección de ventas",
    "meaningKo": "매장, 판매대",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2775,
    "kanji": "自動販売機",
    "displayReading": "じどうはんばいき",
    "readings": [
      "じどうはんばいき"
    ],
    "meaning": "Máy bán hàng tự động",
    "meaningEn": "Vending machine",
    "meaningFr": "Distributeur automatique",
    "meaningEs": "Máquina expendedora",
    "meaningKo": "자동판매기",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2776,
    "kanji": "払う",
    "displayReading": "はらう",
    "readings": [
      "はらう"
    ],
    "meaning": "Trả tiền, thanh toán",
    "meaningEn": "Pay",
    "meaningFr": "Payer",
    "meaningEs": "Pagar",
    "meaningKo": "지불하다, 내다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2777,
    "kanji": "貸す",
    "displayReading": "かす",
    "readings": [
      "かす"
    ],
    "meaning": "Cho mượn",
    "meaningEn": "Lend",
    "meaningFr": "Prêter",
    "meaningEs": "Prestar",
    "meaningKo": "빌려주다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2778,
    "kanji": "借りる",
    "displayReading": "かりる",
    "readings": [
      "かりる"
    ],
    "meaning": "Đi mượn",
    "meaningEn": "Borrow",
    "meaningFr": "Emprunter",
    "meaningEs": "Pedir prestado",
    "meaningKo": "빌리다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2779,
    "kanji": "返す",
    "displayReading": "かえす",
    "readings": [
      "かえす"
    ],
    "meaning": "Trả lại",
    "meaningEn": "Return (something)",
    "meaningFr": "Rendre (quelque chose)",
    "meaningEs": "Devolver",
    "meaningKo": "돌려주다, 반납하다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2780,
    "kanji": "返事",
    "displayReading": "へんじ",
    "readings": [
      "へんじ"
    ],
    "meaning": "Hồi âm, trả lời",
    "meaningEn": "Reply, response",
    "meaningFr": "Réponse",
    "meaningEs": "Respuesta, contestación",
    "meaningKo": "답장, 대답",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2781,
    "kanji": "送る",
    "displayReading": "おくる",
    "readings": [
      "おくる"
    ],
    "meaning": "Gửi đi, tiễn",
    "meaningEn": "Send, see off",
    "meaningFr": "Envoyer, raccompagner",
    "meaningEs": "Enviar, acompañar",
    "meaningKo": "보내다, 배웅하다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2782,
    "kanji": "放送",
    "displayReading": "ほうそう",
    "readings": [
      "ほうそう"
    ],
    "meaning": "Phát sóng",
    "meaningEn": "Broadcast",
    "meaningFr": "Diffusion, émission",
    "meaningEs": "Transmisión, emisión",
    "meaningKo": "방송",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2783,
    "kanji": "届く",
    "displayReading": "とどく",
    "readings": [
      "とどく"
    ],
    "meaning": "Được gửi tới, đến nơi",
    "meaningEn": "Arrive, be delivered",
    "meaningFr": "Être livré, parvenir",
    "meaningEs": "Llegar (un envío), alcanzar",
    "meaningKo": "배달되다, 닿다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2784,
    "kanji": "届ける",
    "displayReading": "とどける",
    "readings": [
      "とどける"
    ],
    "meaning": "Giao hàng, gửi tới",
    "meaningEn": "Deliver, send",
    "meaningFr": "Livrer, apporter",
    "meaningEs": "Entregar, llevar",
    "meaningKo": "전달하다, 배달하다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2785,
    "kanji": "品物",
    "displayReading": "しなもの",
    "readings": [
      "しなもの"
    ],
    "meaning": "Hàng hóa, đồ đạc",
    "meaningEn": "Goods, articles",
    "meaningFr": "Marchandise, article",
    "meaningEs": "Artículo, mercancía",
    "meaningKo": "물품",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2786,
    "kanji": "商品",
    "displayReading": "しょうひん",
    "readings": [
      "しょうひん"
    ],
    "meaning": "Sản phẩm",
    "meaningEn": "Product, merchandise",
    "meaningFr": "Produit",
    "meaningEs": "Producto",
    "meaningKo": "상품",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2787,
    "kanji": "服",
    "displayReading": "ふく",
    "readings": [
      "ふく"
    ],
    "meaning": "Quần áo, trang phục",
    "meaningEn": "Clothes",
    "meaningFr": "Vêtements",
    "meaningEs": "Ropa",
    "meaningKo": "옷",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2788,
    "kanji": "洋服",
    "displayReading": "ようふく",
    "readings": [
      "ようふく"
    ],
    "meaning": "Âu phục, quần áo kiểu Tây",
    "meaningEn": "Western clothes",
    "meaningFr": "Vêtements occidentaux",
    "meaningEs": "Ropa occidental",
    "meaningKo": "양복, 서양식 옷",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2789,
    "kanji": "和服",
    "displayReading": "わふく",
    "readings": [
      "わふく"
    ],
    "meaning": "Trang phục truyền thống Nhật",
    "meaningEn": "Japanese traditional clothes",
    "meaningFr": "Vêtements traditionnels japonais",
    "meaningEs": "Ropa tradicional japonesa",
    "meaningKo": "일본 전통 의상 (화복)",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2790,
    "kanji": "紙",
    "displayReading": "かみ",
    "readings": [
      "かみ"
    ],
    "meaning": "Giấy",
    "meaningEn": "Paper",
    "meaningFr": "Papier",
    "meaningEs": "Papel",
    "meaningKo": "종이",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2791,
    "kanji": "手紙",
    "displayReading": "てがみ",
    "readings": [
      "てがみ"
    ],
    "meaning": "Bức thư",
    "meaningEn": "Letter",
    "meaningFr": "Lettre (courrier)",
    "meaningEs": "Carta",
    "meaningKo": "편지",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2792,
    "kanji": "箱",
    "displayReading": "はこ",
    "readings": [
      "はこ"
    ],
    "meaning": "Cái hộp",
    "meaningEn": "Box",
    "meaningFr": "Boîte",
    "meaningEs": "Caja",
    "meaningKo": "상자",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2793,
    "kanji": "袋",
    "displayReading": "ふくろ",
    "readings": [
      "ふくろ"
    ],
    "meaning": "Cái túi",
    "meaningEn": "Bag",
    "meaningFr": "Sac, sachet",
    "meaningEs": "Bolsa",
    "meaningKo": "봉투, 자루",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2794,
    "kanji": "手袋",
    "displayReading": "てぶくろ",
    "readings": [
      "てぶくろ"
    ],
    "meaning": "Găng tay",
    "meaningEn": "Gloves",
    "meaningFr": "Gants",
    "meaningEs": "Guantes",
    "meaningKo": "장갑",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2795,
    "kanji": "色",
    "displayReading": "いろ",
    "readings": [
      "いろ"
    ],
    "meaning": "Màu sắc",
    "meaningEn": "Color",
    "meaningFr": "Couleur",
    "meaningEs": "Color",
    "meaningKo": "색, 색깔",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2796,
    "kanji": "色々",
    "displayReading": "いろいろ",
    "readings": [
      "いろいろ"
    ],
    "meaning": "Đủ loại, nhiều thứ",
    "meaningEn": "Various",
    "meaningFr": "Divers, variés",
    "meaningEs": "Varios, diversos",
    "meaningKo": "여러 가지, 다양한",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2797,
    "kanji": "景色",
    "displayReading": "けしき",
    "readings": [
      "けしき"
    ],
    "meaning": "Phong cảnh",
    "meaningEn": "Scenery, landscape",
    "meaningFr": "Paysage",
    "meaningEs": "Paisaje",
    "meaningKo": "경치, 풍경",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2798,
    "kanji": "形",
    "displayReading": "かたち",
    "readings": [
      "かたち"
    ],
    "meaning": "Hình dạng",
    "meaningEn": "Shape, form",
    "meaningFr": "Forme",
    "meaningEs": "Forma",
    "meaningKo": "모양, 형태",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2799,
    "kanji": "人形",
    "displayReading": "にんぎょう",
    "readings": [
      "にんぎょう"
    ],
    "meaning": "Búp bê",
    "meaningEn": "Doll",
    "meaningFr": "Poupée",
    "meaningEs": "Muñeca",
    "meaningKo": "인형",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2800,
    "kanji": "重い",
    "displayReading": "おもい",
    "readings": [
      "おもい"
    ],
    "meaning": "Nặng",
    "meaningEn": "Heavy",
    "meaningFr": "Lourd",
    "meaningEs": "Pesado",
    "meaningKo": "무겁다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2801,
    "kanji": "重要",
    "displayReading": "じゅうよう",
    "readings": [
      "じゅうよう"
    ],
    "meaning": "Quan trọng",
    "meaningEn": "Important",
    "meaningFr": "Important",
    "meaningEs": "Importante",
    "meaningKo": "중요함",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2802,
    "kanji": "軽い",
    "displayReading": "かるい",
    "readings": [
      "かるい"
    ],
    "meaning": "Nhẹ",
    "meaningEn": "Light (weight)",
    "meaningFr": "Léger",
    "meaningEs": "Ligero, liviano",
    "meaningKo": "가볍다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2803,
    "kanji": "短い",
    "displayReading": "みじかい",
    "readings": [
      "みじかい"
    ],
    "meaning": "Ngắn",
    "meaningEn": "Short",
    "meaningFr": "Court",
    "meaningEs": "Corto",
    "meaningKo": "짧다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2804,
    "kanji": "短所",
    "displayReading": "たんしょ",
    "readings": [
      "たんしょ"
    ],
    "meaning": "Nhược điểm",
    "meaningEn": "Weak point, flaw",
    "meaningFr": "Défaut, point faible",
    "meaningEs": "Defecto, punto débil",
    "meaningKo": "단점",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2805,
    "kanji": "長所",
    "displayReading": "ちょうしょ",
    "readings": [
      "ちょうしょ"
    ],
    "meaning": "Ưu điểm",
    "meaningEn": "Strong point, merit",
    "meaningFr": "Qualité, point fort",
    "meaningEs": "Virtud, punto fuerte",
    "meaningKo": "장점",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2806,
    "kanji": "太い",
    "displayReading": "ふとい",
    "readings": [
      "ふとい"
    ],
    "meaning": "To, dày, mập",
    "meaningEn": "Thick, fat",
    "meaningFr": "Épais, gros",
    "meaningEs": "Grueso",
    "meaningKo": "굵다, 두껍다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2807,
    "kanji": "太る",
    "displayReading": "ふとる",
    "readings": [
      "ふとる"
    ],
    "meaning": "Tăng cân, béo lên",
    "meaningEn": "Gain weight",
    "meaningFr": "Grossir",
    "meaningEs": "Engordar",
    "meaningKo": "살찌다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2808,
    "kanji": "細い",
    "displayReading": "ほそい",
    "readings": [
      "ほそい"
    ],
    "meaning": "Mảnh, gầy, hẹp",
    "meaningEn": "Thin, slender",
    "meaningFr": "Fin, mince",
    "meaningEs": "Delgado, fino",
    "meaningKo": "가늘다, 얇다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2809,
    "kanji": "細かい",
    "displayReading": "こまかい",
    "readings": [
      "こまかい"
    ],
    "meaning": "Chi tiết, nhỏ lẻ",
    "meaningEn": "Detailed, fine",
    "meaningFr": "Détaillé, menu",
    "meaningEs": "Detallado, menudo",
    "meaningKo": "세세하다, 잔돈",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2810,
    "kanji": "特別",
    "displayReading": "とくべつ",
    "readings": [
      "とくべつ"
    ],
    "meaning": "Đặc biệt",
    "meaningEn": "Special",
    "meaningFr": "Spécial",
    "meaningEs": "Especial",
    "meaningKo": "특별함",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2811,
    "kanji": "特に",
    "displayReading": "とくに",
    "readings": [
      "とくに"
    ],
    "meaning": "Đặc biệt là",
    "meaningEn": "Especially",
    "meaningFr": "Surtout, en particulier",
    "meaningEs": "Especialmente",
    "meaningKo": "특히",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2812,
    "kanji": "別れる",
    "displayReading": "わかれる",
    "readings": [
      "わかれる"
    ],
    "meaning": "Chia tay, tạm biệt",
    "meaningEn": "Part ways, separate",
    "meaningFr": "Se séparer",
    "meaningEs": "Separarse, despedirse",
    "meaningKo": "헤어지다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2813,
    "kanji": "別に",
    "displayReading": "べつに",
    "readings": [
      "べつに"
    ],
    "meaning": "Không có gì đặc biệt",
    "meaningEn": "Not particularly",
    "meaningFr": "Pas particulièrement",
    "meaningEs": "Nada en especial",
    "meaningKo": "별로, 특별히",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2814,
    "kanji": "便利",
    "displayReading": "べんり",
    "readings": [
      "べんり"
    ],
    "meaning": "Tiện lợi",
    "meaningEn": "Convenient",
    "meaningFr": "Pratique, commode",
    "meaningEs": "Práctico, conveniente",
    "meaningKo": "편리함",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2815,
    "kanji": "不便",
    "displayReading": "ふべん",
    "readings": [
      "ふべん"
    ],
    "meaning": "Bất tiện",
    "meaningEn": "Inconvenient",
    "meaningFr": "Peu pratique",
    "meaningEs": "Incómodo, poco práctico",
    "meaningKo": "불편함",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2816,
    "kanji": "郵便局",
    "displayReading": "ゆうびんきょく",
    "readings": [
      "ゆうびんきょく"
    ],
    "meaning": "Bưu điện",
    "meaningEn": "Post office",
    "meaningFr": "Bureau de poste",
    "meaningEs": "Oficina de correos",
    "meaningKo": "우체국",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2817,
    "kanji": "利用",
    "displayReading": "りよう",
    "readings": [
      "りよう"
    ],
    "meaning": "Sử dụng, tận dụng",
    "meaningEn": "Use, utilization",
    "meaningFr": "Utilisation",
    "meaningEs": "Uso, utilización",
    "meaningKo": "이용",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2818,
    "kanji": "早い",
    "displayReading": "はやい",
    "readings": [
      "はやい"
    ],
    "meaning": "Sớm",
    "meaningEn": "Early",
    "meaningFr": "Tôt",
    "meaningEs": "Temprano",
    "meaningKo": "이르다 (시간)",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2819,
    "kanji": "速い",
    "displayReading": "はやい",
    "readings": [
      "はやい"
    ],
    "meaning": "Nhanh",
    "meaningEn": "Fast, quick",
    "meaningFr": "Rapide",
    "meaningEs": "Rápido, veloz",
    "meaningKo": "빠르다 (속도)",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2820,
    "kanji": "高速",
    "displayReading": "こうそく",
    "readings": [
      "こうそく"
    ],
    "meaning": "Tốc độ cao, cao tốc",
    "meaningEn": "High speed, express",
    "meaningFr": "Grande vitesse",
    "meaningEs": "Alta velocidad",
    "meaningKo": "고속, 빠른 속도",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2821,
    "kanji": "遅い",
    "displayReading": "おそい",
    "readings": [
      "おそい"
    ],
    "meaning": "Chậm, muộn",
    "meaningEn": "Slow, late",
    "meaningFr": "Lent, tard",
    "meaningEs": "Lento, tarde",
    "meaningKo": "느리다, 늦다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2822,
    "kanji": "遅れる",
    "displayReading": "おくれる",
    "readings": [
      "おくれる"
    ],
    "meaning": "Bị muộn, trễ",
    "meaningEn": "Be late",
    "meaningFr": "Être en retard",
    "meaningEs": "Llegar tarde, retrasarse",
    "meaningKo": "늦다, 지각하다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2823,
    "kanji": "難しい",
    "displayReading": "むずかしい",
    "readings": [
      "むずかしい"
    ],
    "meaning": "Khó",
    "meaningEn": "Difficult, hard",
    "meaningFr": "Difficile",
    "meaningEs": "Difícil",
    "meaningKo": "어렵다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2824,
    "kanji": "易しい",
    "displayReading": "やさしい",
    "readings": [
      "やさしい"
    ],
    "meaning": "Dễ",
    "meaningEn": "Easy, simple",
    "meaningFr": "Facile",
    "meaningEs": "Fácil",
    "meaningKo": "쉽다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2825,
    "kanji": "正しい",
    "displayReading": "ただしい",
    "readings": [
      "ただしい"
    ],
    "meaning": "Đúng, chính xác",
    "meaningEn": "Correct, right",
    "meaningFr": "Correct, juste",
    "meaningEs": "Correcto, justo",
    "meaningKo": "바르다, 옳다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2826,
    "kanji": "お正月",
    "displayReading": "おしょうがつ",
    "readings": [
      "おしょうがつ"
    ],
    "meaning": "Tết Dương lịch",
    "meaningEn": "New Year",
    "meaningFr": "Nouvel An",
    "meaningEs": "Año Nuevo",
    "meaningKo": "설날, 정월",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2827,
    "kanji": "同じ",
    "displayReading": "おなじ",
    "readings": [
      "おなじ"
    ],
    "meaning": "Giống nhau",
    "meaningEn": "Same",
    "meaningFr": "Identique, même",
    "meaningEs": "Igual, el mismo",
    "meaningKo": "같다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2828,
    "kanji": "違う",
    "displayReading": "ちがう",
    "readings": [
      "ちがう"
    ],
    "meaning": "Khác nhau, sai",
    "meaningEn": "Different, wrong",
    "meaningFr": "Être différent, se tromper",
    "meaningEs": "Ser diferente, equivocarse",
    "meaningKo": "다르다, 틀리다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2829,
    "kanji": "間違い",
    "displayReading": "まちがい",
    "readings": [
      "まちがい"
    ],
    "meaning": "Lỗi sai, sự nhầm lẫn",
    "meaningEn": "Mistake, error",
    "meaningFr": "Erreur, faute",
    "meaningEs": "Error, equivocación",
    "meaningKo": "실수, 틀림",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2830,
    "kanji": "良い",
    "displayReading": "よい・いい",
    "readings": [
      "よい",
      "いい"
    ],
    "meaning": "Tốt",
    "meaningEn": "Good",
    "meaningFr": "Bon, bien",
    "meaningEs": "Bueno, bien",
    "meaningKo": "좋다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2831,
    "kanji": "悪い",
    "displayReading": "わるい",
    "readings": [
      "わるい"
    ],
    "meaning": "Xấu, tệ",
    "meaningEn": "Bad",
    "meaningFr": "Mauvais",
    "meaningEs": "Malo",
    "meaningKo": "나쁘다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 356,
    "kanji": "強い",
    "displayReading": "つよい",
    "readings": [
      "つよい"
    ],
    "meaning": "Mạnh, khỏe",
    "meaningEn": "Strong",
    "meaningFr": "Fort",
    "meaningEs": "Fuerte",
    "meaningKo": "강하다, 세다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2833,
    "kanji": "弱い",
    "displayReading": "よわい",
    "readings": [
      "よわい"
    ],
    "meaning": "Yếu",
    "meaningEn": "Weak",
    "meaningFr": "Faible",
    "meaningEs": "Débil",
    "meaningKo": "약하다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2834,
    "kanji": "若い",
    "displayReading": "わかい",
    "readings": [
      "わかい"
    ],
    "meaning": "Trẻ",
    "meaningEn": "Young",
    "meaningFr": "Jeune",
    "meaningEs": "Joven",
    "meaningKo": "젊다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2835,
    "kanji": "値段",
    "displayReading": "ねだん",
    "readings": [
      "ねだん"
    ],
    "meaning": "Giá cả",
    "meaningEn": "Price",
    "meaningFr": "Prix",
    "meaningEs": "Precio",
    "meaningKo": "가격, 값",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2836,
    "kanji": "財布",
    "displayReading": "さいふ",
    "readings": [
      "さいふ"
    ],
    "meaning": "Ví tiền",
    "meaningEn": "Wallet",
    "meaningFr": "Portefeuille",
    "meaningEs": "Cartera, billetera",
    "meaningKo": "지갑",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2837,
    "kanji": "靴",
    "displayReading": "くつ",
    "readings": [
      "くつ"
    ],
    "meaning": "Giày",
    "meaningEn": "Shoes",
    "meaningFr": "Chaussures",
    "meaningEs": "Zapatos",
    "meaningKo": "신발, 구두",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2838,
    "kanji": "傘",
    "displayReading": "かさ",
    "readings": [
      "かさ"
    ],
    "meaning": "Cái ô (dù)",
    "meaningEn": "Umbrella",
    "meaningFr": "Parapluie",
    "meaningEs": "Paraguas",
    "meaningKo": "우산",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2839,
    "kanji": "眼鏡",
    "displayReading": "めがね",
    "readings": [
      "めがね"
    ],
    "meaning": "Kính mắt",
    "meaningEn": "Eyeglasses",
    "meaningFr": "Lunettes",
    "meaningEs": "Gafas, lentes",
    "meaningKo": "안경",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2840,
    "kanji": "割引",
    "displayReading": "わりびき",
    "readings": [
      "わりびき"
    ],
    "meaning": "Giảm giá, chiết khấu",
    "meaningEn": "Discount",
    "meaningFr": "Réduction, remise",
    "meaningEs": "Descuento",
    "meaningKo": "할인",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2841,
    "kanji": "半額",
    "displayReading": "はんがく",
    "readings": [
      "はんがく"
    ],
    "meaning": "Giảm nửa giá",
    "meaningEn": "Half price",
    "meaningFr": "Moitié prix",
    "meaningEs": "Mitad de precio",
    "meaningKo": "반값",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2842,
    "kanji": "現金",
    "displayReading": "げんきん",
    "readings": [
      "げんきん"
    ],
    "meaning": "Tiền mặt",
    "meaningEn": "Cash",
    "meaningFr": "Argent liquide, espèces",
    "meaningEs": "Dinero en efectivo",
    "meaningKo": "현금",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2843,
    "kanji": "領収書",
    "displayReading": "りょうしゅうしょ",
    "readings": [
      "りょうしゅうしょ"
    ],
    "meaning": "Hóa đơn, biên lai",
    "meaningEn": "Receipt",
    "meaningFr": "Reçu, facture",
    "meaningEs": "Recibo",
    "meaningKo": "영수증",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2844,
    "kanji": "預ける",
    "displayReading": "あずける",
    "readings": [
      "あずける"
    ],
    "meaning": "Gửi giữ (hành lý, tiền)",
    "meaningEn": "Deposit, leave in care",
    "meaningFr": "Confier, déposer",
    "meaningEs": "Dejar en depósito, confiar",
    "meaningKo": "맡기다",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2845,
    "kanji": "修理",
    "displayReading": "しゅうり",
    "readings": [
      "しゅうり"
    ],
    "meaning": "Sửa chữa",
    "meaningEn": "Repair",
    "meaningFr": "Réparation",
    "meaningEs": "Reparación",
    "meaningKo": "수리",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2846,
    "kanji": "故障",
    "displayReading": "こしょう",
    "readings": [
      "こしょう"
    ],
    "meaning": "Hỏng hóc (máy móc)",
    "meaningEn": "Breakdown, malfunction",
    "meaningFr": "Panne",
    "meaningEs": "Avería, fallo",
    "meaningKo": "고장",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2847,
    "kanji": "説明書",
    "displayReading": "せつめいしょ",
    "readings": [
      "せつめいしょ"
    ],
    "meaning": "Sách hướng dẫn sử dụng",
    "meaningEn": "Instruction manual",
    "meaningFr": "Mode d'emploi",
    "meaningEs": "Manual de instrucciones",
    "meaningKo": "설명서",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2848,
    "kanji": "家具",
    "displayReading": "かぐ",
    "readings": [
      "かぐ"
    ],
    "meaning": "Đồ nội thất",
    "meaningEn": "Furniture",
    "meaningFr": "Meubles, mobilier",
    "meaningEs": "Muebles",
    "meaningKo": "가구",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2849,
    "kanji": "道具",
    "displayReading": "どうぐ",
    "readings": [
      "どうぐ"
    ],
    "meaning": "Dụng cụ",
    "meaningEn": "Tool",
    "meaningFr": "Outil, ustensile",
    "meaningEs": "Herramienta, utensilio",
    "meaningKo": "도구",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2850,
    "kanji": "鍵",
    "displayReading": "かぎ",
    "readings": [
      "かぎ"
    ],
    "meaning": "Chìa khóa",
    "meaningEn": "Key",
    "meaningFr": "Clé",
    "meaningEs": "Llave",
    "meaningKo": "열쇠",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2851,
    "kanji": "窓",
    "displayReading": "まど",
    "readings": [
      "まど"
    ],
    "meaning": "Cửa sổ",
    "meaningEn": "Window",
    "meaningFr": "Fenêtre",
    "meaningEs": "Ventana",
    "meaningKo": "창문",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2852,
    "kanji": "鏡",
    "displayReading": "かがみ",
    "readings": [
      "かがみ"
    ],
    "meaning": "Cái gương",
    "meaningEn": "Mirror",
    "meaningFr": "Miroir",
    "meaningEs": "Espejo",
    "meaningKo": "거울",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2853,
    "kanji": "布団",
    "displayReading": "ふとん",
    "readings": [
      "ふとん"
    ],
    "meaning": "Chăn đệm kiểu Nhật",
    "meaningEn": "Futon (Japanese bedding)",
    "meaningFr": "Futon (literie japonaise)",
    "meaningEs": "Futón (cama japonesa)",
    "meaningKo": "이불 (후톤)",
    "topicId": "n4_08",
    "level": "N4"
  },
  {
    "id": 2854,
    "kanji": "祭り",
    "displayReading": "まつり",
    "readings": [
      "まつり"
    ],
    "meaning": "Lễ hội",
    "meaningEn": "Festival",
    "meaningFr": "Festival",
    "meaningEs": "Festival",
    "meaningKo": "축제",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2855,
    "kanji": "お祭り",
    "displayReading": "おまつり",
    "readings": [
      "おまつり"
    ],
    "meaning": "Lễ hội (lịch sự)",
    "meaningEn": "Festival (polite)",
    "meaningFr": "Festival (poli)",
    "meaningEs": "Festival (cortés)",
    "meaningKo": "축제 (높임말)",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2856,
    "kanji": "文化祭",
    "displayReading": "ぶんかさい",
    "readings": [
      "ぶんかさい"
    ],
    "meaning": "Lễ hội văn hóa",
    "meaningEn": "Cultural festival",
    "meaningFr": "Festival culturel",
    "meaningEs": "Festival cultural",
    "meaningKo": "문화제, 학교 축제",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2857,
    "kanji": "祝う",
    "displayReading": "いわう",
    "readings": [
      "いわう"
    ],
    "meaning": "Chúc mừng, ăn mừng",
    "meaningEn": "Celebrate",
    "meaningFr": "Fêter, célébrer",
    "meaningEs": "Celebrar, festejar",
    "meaningKo": "축하하다",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2858,
    "kanji": "お祝い",
    "displayReading": "おいわい",
    "readings": [
      "おいわい"
    ],
    "meaning": "Lời chúc / quà mừng",
    "meaningEn": "Celebration, gift",
    "meaningFr": "Félicitations, cadeau",
    "meaningEs": "Felicitación, regalo",
    "meaningKo": "축하, 축하 선물",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2859,
    "kanji": "祝日",
    "displayReading": "しゅくじつ",
    "readings": [
      "しゅくじつ"
    ],
    "meaning": "Ngày lễ quốc gia",
    "meaningEn": "National holiday",
    "meaningFr": "Jour férié",
    "meaningEs": "Día festivo, feriado",
    "meaningKo": "공휴일, 국경일",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2860,
    "kanji": "お礼",
    "displayReading": "おれい",
    "readings": [
      "おれい"
    ],
    "meaning": "Lời cảm ơn, quà cảm ơn",
    "meaningEn": "Gratitude, thank-you gift",
    "meaningFr": "Remerciement",
    "meaningEs": "Agradecimiento",
    "meaningKo": "감사 인사, 사례",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2861,
    "kanji": "失礼",
    "displayReading": "しつれい",
    "readings": [
      "しつれい"
    ],
    "meaning": "Thất lễ, xin phép",
    "meaningEn": "Rudeness, excuse me",
    "meaningFr": "Impolitesse, excusez-moi",
    "meaningEs": "Disculpe, falta de cortesía",
    "meaningKo": "실례",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2862,
    "kanji": "歴史",
    "displayReading": "れきし",
    "readings": [
      "れきし"
    ],
    "meaning": "Lịch sử",
    "meaningEn": "History",
    "meaningFr": "Histoire (science)",
    "meaningEs": "Historia",
    "meaningKo": "역사",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2863,
    "kanji": "昔",
    "displayReading": "むかし",
    "readings": [
      "むかし"
    ],
    "meaning": "Ngày xưa",
    "meaningEn": "Olden days, long ago",
    "meaningFr": "Autrefois",
    "meaningEs": "Antiguamente, hace tiempo",
    "meaningKo": "옛날",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2864,
    "kanji": "昔話",
    "displayReading": "むかしばなし",
    "readings": [
      "むかしばなし"
    ],
    "meaning": "Chuyện cổ tích",
    "meaningEn": "Folktale, old story",
    "meaningFr": "Conte traditionnel",
    "meaningEs": "Cuento tradicional",
    "meaningKo": "옛날이야기",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2865,
    "kanji": "時代",
    "displayReading": "じだい",
    "readings": [
      "じだい"
    ],
    "meaning": "Thời đại",
    "meaningEn": "Era, period",
    "meaningFr": "Époque, ère",
    "meaningEs": "Época, era",
    "meaningKo": "시대",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2866,
    "kanji": "食事代",
    "displayReading": "しょくじだい",
    "readings": [
      "しょくじだい"
    ],
    "meaning": "Tiền ăn",
    "meaningEn": "Meal expense",
    "meaningFr": "Frais de repas",
    "meaningEs": "Gastos de comida",
    "meaningKo": "식비, 밥값",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2867,
    "kanji": "建てる",
    "displayReading": "たてる",
    "readings": [
      "たてる"
    ],
    "meaning": "Xây dựng",
    "meaningEn": "Build, construct",
    "meaningFr": "Construire, bâtir",
    "meaningEs": "Construir, edificar",
    "meaningKo": "짓다, 세우다",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2868,
    "kanji": "建物",
    "displayReading": "たてもの",
    "readings": [
      "たてもの"
    ],
    "meaning": "Tòa nhà, công trình",
    "meaningEn": "Building",
    "meaningFr": "Bâtiment, immeuble",
    "meaningEs": "Edificio",
    "meaningKo": "건물",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2869,
    "kanji": "寺",
    "displayReading": "てら",
    "readings": [
      "てら"
    ],
    "meaning": "Chùa",
    "meaningEn": "Temple",
    "meaningFr": "Temple bouddhiste",
    "meaningEs": "Templo budista",
    "meaningKo": "절, 사찰",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2870,
    "kanji": "お寺",
    "displayReading": "おてら",
    "readings": [
      "おてら"
    ],
    "meaning": "Ngôi chùa",
    "meaningEn": "Buddhist temple",
    "meaningFr": "Temple bouddhiste (poli)",
    "meaningEs": "Templo budista (cortés)",
    "meaningKo": "절, 사찰 (높임말)",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2871,
    "kanji": "神",
    "displayReading": "かみ",
    "readings": [
      "かみ"
    ],
    "meaning": "Thần linh",
    "meaningEn": "God, spirit",
    "meaningFr": "Dieu, divinité",
    "meaningEs": "Dios, deidad",
    "meaningKo": "신",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2872,
    "kanji": "神様",
    "displayReading": "かみさま",
    "readings": [
      "かみさま"
    ],
    "meaning": "Thần linh, Chúa trời",
    "meaningEn": "God (polite)",
    "meaningFr": "Dieu (respectueux)",
    "meaningEs": "Dios (respetuoso)",
    "meaningKo": "하느님, 신 (높임말)",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2873,
    "kanji": "神社",
    "displayReading": "じんじゃ",
    "readings": [
      "じんじゃ"
    ],
    "meaning": "Đền thờ Thần đạo",
    "meaningEn": "Shinto shrine",
    "meaningFr": "Sanctuaire shinto",
    "meaningEs": "Santuario sintoísta",
    "meaningKo": "신사",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2874,
    "kanji": "森",
    "displayReading": "もり",
    "readings": [
      "もり"
    ],
    "meaning": "Rừng rậm",
    "meaningEn": "Dense forest",
    "meaningFr": "Forêt dense",
    "meaningEs": "Bosque denso",
    "meaningKo": "숲, 삼림",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2875,
    "kanji": "森林",
    "displayReading": "しんりん",
    "readings": [
      "しんりん"
    ],
    "meaning": "Rừng cây, lâm nghiệp",
    "meaningEn": "Forest, woods",
    "meaningFr": "Forêt, sylviculture",
    "meaningEs": "Bosque, silvicultura",
    "meaningKo": "삼림",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2876,
    "kanji": "林",
    "displayReading": "はやし",
    "readings": [
      "はやし"
    ],
    "meaning": "Rừng thưa",
    "meaningEn": "Woods, grove",
    "meaningFr": "Bois, bosquet",
    "meaningEs": "Arboleda, bosque",
    "meaningKo": "수풀, 작은 숲",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2877,
    "kanji": "池",
    "displayReading": "いけ",
    "readings": [
      "いけ"
    ],
    "meaning": "Cái ao",
    "meaningEn": "Pond",
    "meaningFr": "Étang",
    "meaningEs": "Estanque",
    "meaningKo": "연못",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2878,
    "kanji": "電池",
    "displayReading": "でんち",
    "readings": [
      "でんち"
    ],
    "meaning": "Pin",
    "meaningEn": "Battery",
    "meaningFr": "Pile, batterie",
    "meaningEs": "Pila, batería",
    "meaningKo": "건전지, 배터리",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2879,
    "kanji": "光",
    "displayReading": "ひかり",
    "readings": [
      "ひかり"
    ],
    "meaning": "Ánh sáng",
    "meaningEn": "Light",
    "meaningFr": "Lumière",
    "meaningEs": "Luz",
    "meaningKo": "빛",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2880,
    "kanji": "光る",
    "displayReading": "ひかる",
    "readings": [
      "ひかる"
    ],
    "meaning": "Tỏa sáng, lấp lánh",
    "meaningEn": "Shine, glitter",
    "meaningFr": "Briller",
    "meaningEs": "Brillar",
    "meaningKo": "빛나다",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2881,
    "kanji": "観光",
    "displayReading": "かんこう",
    "readings": [
      "かんこう"
    ],
    "meaning": "Tham quan, du lịch",
    "meaningEn": "Sightseeing, tourism",
    "meaningFr": "Tourisme",
    "meaningEs": "Turismo",
    "meaningKo": "관광",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2882,
    "kanji": "自然",
    "displayReading": "しぜん",
    "readings": [
      "しぜん"
    ],
    "meaning": "Tự nhiên, thiên nhiên",
    "meaningEn": "Nature, natural",
    "meaningFr": "Nature, naturel",
    "meaningEs": "Naturaleza, natural",
    "meaningKo": "자연",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2883,
    "kanji": "全然",
    "displayReading": "ぜんぜん",
    "readings": [
      "ぜんぜん"
    ],
    "meaning": "Hoàn toàn không",
    "meaningEn": "Not at all, completely",
    "meaningFr": "Pas du tout",
    "meaningEs": "En absoluto, para nada",
    "meaningKo": "전혀",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2884,
    "kanji": "環境",
    "displayReading": "かんきょう",
    "readings": [
      "かんきょう"
    ],
    "meaning": "Môi trường",
    "meaningEn": "Environment",
    "meaningFr": "Environnement",
    "meaningEs": "Medio ambiente, entorno",
    "meaningKo": "환경",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2885,
    "kanji": "星",
    "displayReading": "ほし",
    "readings": [
      "ほし"
    ],
    "meaning": "Ngôi sao",
    "meaningEn": "Star",
    "meaningFr": "Étoile",
    "meaningEs": "Estrella",
    "meaningKo": "별",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2886,
    "kanji": "草",
    "displayReading": "くさ",
    "readings": [
      "くさ"
    ],
    "meaning": "Cỏ",
    "meaningEn": "Grass",
    "meaningFr": "Herbe",
    "meaningEs": "Hierba, césped",
    "meaningKo": "풀",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2887,
    "kanji": "葉",
    "displayReading": "は",
    "readings": [
      "は"
    ],
    "meaning": "Chiếc lá",
    "meaningEn": "Leaf",
    "meaningFr": "Feuille",
    "meaningEs": "Hoja",
    "meaningKo": "잎, 나뭇잎",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2888,
    "kanji": "石",
    "displayReading": "いし",
    "readings": [
      "いし"
    ],
    "meaning": "Hòn đá",
    "meaningEn": "Stone, rock",
    "meaningFr": "Pierre, caillou",
    "meaningEs": "Piedra",
    "meaningKo": "돌",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2889,
    "kanji": "犬",
    "displayReading": "いぬ",
    "readings": [
      "いぬ"
    ],
    "meaning": "Con chó",
    "meaningEn": "Dog",
    "meaningFr": "Chien",
    "meaningEs": "Perro",
    "meaningKo": "개",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2890,
    "kanji": "猫",
    "displayReading": "ねこ",
    "readings": [
      "ねこ"
    ],
    "meaning": "Con mèo",
    "meaningEn": "Cat",
    "meaningFr": "Chat",
    "meaningEs": "Gato",
    "meaningKo": "고양이",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2891,
    "kanji": "馬",
    "displayReading": "うま",
    "readings": [
      "うま"
    ],
    "meaning": "Con ngựa",
    "meaningEn": "Horse",
    "meaningFr": "Cheval",
    "meaningEs": "Caballo",
    "meaningKo": "말 (동물)",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2892,
    "kanji": "虫",
    "displayReading": "むし",
    "readings": [
      "むし"
    ],
    "meaning": "Côn trùng, sâu bọ",
    "meaningEn": "Insect, bug",
    "meaningFr": "Insecte",
    "meaningEs": "Insecto",
    "meaningKo": "벌레, 곤충",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2893,
    "kanji": "咲く",
    "displayReading": "さく",
    "readings": [
      "さく"
    ],
    "meaning": "Nở (hoa)",
    "meaningEn": "Bloom (flowers)",
    "meaningFr": "Fleurir, éclore",
    "meaningEs": "Florecer",
    "meaningKo": "(꽃이) 피다",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2894,
    "kanji": "枯れる",
    "displayReading": "かれる",
    "readings": [
      "かれる"
    ],
    "meaning": "Héo úa, khô héo",
    "meaningEn": "Wither, dry up",
    "meaningFr": "Faner, sécher",
    "meaningEs": "Marchitarse, secarse",
    "meaningKo": "시들다, 마르다",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2895,
    "kanji": "紅葉",
    "displayReading": "こうよう・もみじ",
    "readings": [
      "こうよう",
      "もみじ"
    ],
    "meaning": "Lá đỏ mùa thu",
    "meaningEn": "Autumn foliage",
    "meaningFr": "Feuilles rouges d'automne",
    "meaningEs": "Hojas rojas de otoño",
    "meaningKo": "단풍",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2896,
    "kanji": "桜",
    "displayReading": "さくら",
    "readings": [
      "さくら"
    ],
    "meaning": "Hoa anh đào",
    "meaningEn": "Cherry blossom",
    "meaningFr": "Fleur de cerisier",
    "meaningEs": "Flor de cerezo",
    "meaningKo": "벚꽃",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2897,
    "kanji": "竹",
    "displayReading": "たけ",
    "readings": [
      "たけ"
    ],
    "meaning": "Cây tre",
    "meaningEn": "Bamboo",
    "meaningFr": "Bambou",
    "meaningEs": "Bambú",
    "meaningKo": "대나무",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2898,
    "kanji": "伝統",
    "displayReading": "でんとう",
    "readings": [
      "でんとう"
    ],
    "meaning": "Truyền thống",
    "meaningEn": "Tradition",
    "meaningFr": "Tradition",
    "meaningEs": "Tradición",
    "meaningKo": "전통",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2899,
    "kanji": "習慣",
    "displayReading": "しゅうかん",
    "readings": [
      "しゅうかん"
    ],
    "meaning": "Tập quán, thói quen",
    "meaningEn": "Custom, habit",
    "meaningFr": "Habitude, coutume",
    "meaningEs": "Costumbre, hábito",
    "meaningKo": "습관, 관습",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2900,
    "kanji": "戦争",
    "displayReading": "せんそう",
    "readings": [
      "せんそう"
    ],
    "meaning": "Chiến tranh",
    "meaningEn": "War",
    "meaningFr": "Guerre",
    "meaningEs": "Guerra",
    "meaningKo": "전쟁",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2901,
    "kanji": "政治",
    "displayReading": "せいじ",
    "readings": [
      "せいじ"
    ],
    "meaning": "Chính trị",
    "meaningEn": "Politics",
    "meaningFr": "Politique",
    "meaningEs": "Política",
    "meaningKo": "정치",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2902,
    "kanji": "経済",
    "displayReading": "けいざい",
    "readings": [
      "けいざい"
    ],
    "meaning": "Kinh tế",
    "meaningEn": "Economy",
    "meaningFr": "Économie",
    "meaningEs": "Economía",
    "meaningKo": "경제",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 2903,
    "kanji": "法律",
    "displayReading": "ほうりつ",
    "readings": [
      "ほうりつ"
    ],
    "meaning": "Pháp luật",
    "meaningEn": "Law",
    "meaningFr": "Loi, droit",
    "meaningEs": "Ley, derecho",
    "meaningKo": "법률",
    "topicId": "n4_09",
    "level": "N4"
  },
  {
    "id": 262,
    "kanji": "事",
    "displayReading": "こと",
    "readings": [
      "こと"
    ],
    "meaning": "Việc, chuyện",
    "meaningEn": "Thing, matter",
    "meaningFr": "Chose, affaire",
    "meaningEs": "Cosa, asunto",
    "meaningKo": "일, 것",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 265,
    "kanji": "大事",
    "displayReading": "だいじ",
    "readings": [
      "だいじ"
    ],
    "meaning": "Quan trọng",
    "meaningEn": "Important, serious",
    "meaningFr": "Important",
    "meaningEs": "Importante",
    "meaningKo": "소중함, 중요함",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 266,
    "kanji": "用事",
    "displayReading": "ようじ",
    "readings": [
      "ようじ"
    ],
    "meaning": "Việc bận, việc cần làm",
    "meaningEn": "Errand, business",
    "meaningFr": "Affaire à régler, commission",
    "meaningEs": "Recado, asunto pendiente",
    "meaningKo": "볼일, 용무",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 267,
    "kanji": "事故",
    "displayReading": "じこ",
    "readings": [
      "じこ"
    ],
    "meaning": "Tai nạn",
    "meaningEn": "Accident",
    "meaningFr": "Accident",
    "meaningEs": "Accidente",
    "meaningKo": "사고",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 268,
    "kanji": "火事",
    "displayReading": "かじ",
    "readings": [
      "かじ"
    ],
    "meaning": "Hỏa hoạn",
    "meaningEn": "Fire (disaster)",
    "meaningFr": "Incendie",
    "meaningEs": "Incendio",
    "meaningKo": "화재, 불",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 136,
    "kanji": "会う",
    "displayReading": "あう",
    "readings": [
      "あう"
    ],
    "meaning": "Gặp gỡ",
    "meaningEn": "Meet",
    "meaningFr": "Rencontrer",
    "meaningEs": "Encontrarse, reunirse",
    "meaningKo": "만나다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2910,
    "kanji": "会議",
    "displayReading": "かいぎ",
    "readings": [
      "かいぎ"
    ],
    "meaning": "Cuộc họp",
    "meaningEn": "Meeting, conference",
    "meaningFr": "Réunion",
    "meaningEs": "Reunión",
    "meaningKo": "회의",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2911,
    "kanji": "会場",
    "displayReading": "かいじょう",
    "readings": [
      "かいじょう"
    ],
    "meaning": "Hội trường, địa điểm tổ chức",
    "meaningEn": "Venue, assembly hall",
    "meaningFr": "Lieu de l'événement, salle",
    "meaningEs": "Recinto del evento, sala",
    "meaningKo": "회장, 행사장",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2912,
    "kanji": "始まる",
    "displayReading": "はじまる",
    "readings": [
      "はじまる"
    ],
    "meaning": "Bắt đầu (tự động từ)",
    "meaningEn": "Begin (intransitive)",
    "meaningFr": "Commencer (intransitif)",
    "meaningEs": "Empezar (intransitivo)",
    "meaningKo": "시작되다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2913,
    "kanji": "始める",
    "displayReading": "はじめる",
    "readings": [
      "はじめる"
    ],
    "meaning": "Bắt đầu (tha động từ)",
    "meaningEn": "Start, begin (transitive)",
    "meaningFr": "Commencer (transitif)",
    "meaningEs": "Empezar (transitivo)",
    "meaningKo": "시작하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2914,
    "kanji": "終わる",
    "displayReading": "おわる",
    "readings": [
      "おわる"
    ],
    "meaning": "Kết thúc",
    "meaningEn": "End, finish",
    "meaningFr": "Se terminer, finir",
    "meaningEs": "Terminar, acabar",
    "meaningKo": "끝나다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2915,
    "kanji": "開ける",
    "displayReading": "あける",
    "readings": [
      "あける"
    ],
    "meaning": "Mở (tha động từ)",
    "meaningEn": "Open (transitive)",
    "meaningFr": "Ouvrir (transitif)",
    "meaningEs": "Abrir (transitivo)",
    "meaningKo": "열다 (타동사)",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2916,
    "kanji": "開く",
    "displayReading": "あく・ひらく",
    "readings": [
      "あく",
      "ひらく"
    ],
    "meaning": "Mở ra, tổ chức",
    "meaningEn": "Open (intransitive), hold (an event)",
    "meaningFr": "S'ouvrir, avoir lieu",
    "meaningEs": "Abrirse, celebrarse",
    "meaningKo": "열리다, 개최하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2917,
    "kanji": "閉める",
    "displayReading": "しめる",
    "readings": [
      "しめる"
    ],
    "meaning": "Đóng (tha động từ)",
    "meaningEn": "Close (transitive)",
    "meaningFr": "Fermer (transitif)",
    "meaningEs": "Cerrar (transitivo)",
    "meaningKo": "닫다 (타동사)",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2918,
    "kanji": "閉まる",
    "displayReading": "しまる",
    "readings": [
      "しまる"
    ],
    "meaning": "Đóng lại (tự động từ)",
    "meaningEn": "Close (intransitive)",
    "meaningFr": "Se fermer (intransitif)",
    "meaningEs": "Cerrarse (intransitivo)",
    "meaningKo": "닫히다 (자동사)",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2919,
    "kanji": "立つ",
    "displayReading": "たつ",
    "readings": [
      "たつ"
    ],
    "meaning": "Đứng",
    "meaningEn": "Stand",
    "meaningFr": "Se lever, être debout",
    "meaningEs": "Ponerse de pie",
    "meaningKo": "서다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2920,
    "kanji": "役に立つ",
    "displayReading": "やくにたつ",
    "readings": [
      "やくにたつ"
    ],
    "meaning": "Có ích",
    "meaningEn": "Be useful, helpful",
    "meaningFr": "Être utile",
    "meaningEs": "Ser útil",
    "meaningKo": "도움이 되다, 쓸모 있다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2921,
    "kanji": "座る",
    "displayReading": "すわる",
    "readings": [
      "すわる"
    ],
    "meaning": "Ngồi",
    "meaningEn": "Sit",
    "meaningFr": "S'asseoir",
    "meaningEs": "Sentarse",
    "meaningKo": "앉다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2922,
    "kanji": "待つ",
    "displayReading": "まつ",
    "readings": [
      "まつ"
    ],
    "meaning": "Chờ đợi",
    "meaningEn": "Wait",
    "meaningFr": "Attendre",
    "meaningEs": "Esperar",
    "meaningKo": "기다리다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2923,
    "kanji": "招待",
    "displayReading": "しょうたい",
    "readings": [
      "しょうたい"
    ],
    "meaning": "Mời, lời mời",
    "meaningEn": "Invitation",
    "meaningFr": "Invitation",
    "meaningEs": "Invitación",
    "meaningKo": "초대",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2924,
    "kanji": "持つ",
    "displayReading": "もつ",
    "readings": [
      "もつ"
    ],
    "meaning": "Cầm, mang, sở hữu",
    "meaningEn": "Hold, carry, have",
    "meaningFr": "Tenir, porter, posséder",
    "meaningEs": "Llevar, tener, sostener",
    "meaningKo": "들다, 가지다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 211,
    "kanji": "気持ち",
    "displayReading": "きもち",
    "readings": [
      "きもち"
    ],
    "meaning": "Cảm giác, tâm trạng",
    "meaningEn": "Feeling, mood",
    "meaningFr": "Sentiment, humeur",
    "meaningEs": "Sentimiento, sensación",
    "meaningKo": "기분, 마음",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2926,
    "kanji": "使う",
    "displayReading": "つかう",
    "readings": [
      "つかう"
    ],
    "meaning": "Sử dụng",
    "meaningEn": "Use",
    "meaningFr": "Utiliser",
    "meaningEs": "Usar, utilizar",
    "meaningKo": "쓰다, 사용하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2927,
    "kanji": "大使館",
    "displayReading": "たいしかん",
    "readings": [
      "たいしかん"
    ],
    "meaning": "Đại sứ quán",
    "meaningEn": "Embassy",
    "meaningFr": "Ambassade",
    "meaningEs": "Embajada",
    "meaningKo": "대사관",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2928,
    "kanji": "伝える",
    "displayReading": "つたえる",
    "readings": [
      "つたえる"
    ],
    "meaning": "Truyền đạt, nhắn lại",
    "meaningEn": "Convey, pass on a message",
    "meaningFr": "Transmettre, communiquer",
    "meaningEs": "Transmitir, comunicar",
    "meaningKo": "전하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2929,
    "kanji": "手伝う",
    "displayReading": "てつだう",
    "readings": [
      "てつだう"
    ],
    "meaning": "Giúp đỡ",
    "meaningEn": "Help, assist",
    "meaningFr": "Aider, donner un coup de main",
    "meaningEs": "Ayudar, echar una mano",
    "meaningKo": "돕다, 거들다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2930,
    "kanji": "助ける",
    "displayReading": "たすける",
    "readings": [
      "たすける"
    ],
    "meaning": "Cứu giúp, trợ giúp",
    "meaningEn": "Save, rescue, help",
    "meaningFr": "Sauver, secourir",
    "meaningEs": "Salvar, socorrer",
    "meaningKo": "돕다, 구조하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2931,
    "kanji": "洗う",
    "displayReading": "あらう",
    "readings": [
      "あらう"
    ],
    "meaning": "Rửa, giặt",
    "meaningEn": "Wash",
    "meaningFr": "Laver",
    "meaningEs": "Lavar",
    "meaningKo": "씻다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2932,
    "kanji": "洗濯",
    "displayReading": "せんたく",
    "readings": [
      "せんたく"
    ],
    "meaning": "Giặt giũ",
    "meaningEn": "Laundry",
    "meaningFr": "Lessive",
    "meaningEs": "Colada, lavar la ropa",
    "meaningKo": "세탁, 빨래",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2933,
    "kanji": "掃除",
    "displayReading": "そうじ",
    "readings": [
      "そうじ"
    ],
    "meaning": "Dọn dẹp, quét dọn",
    "meaningEn": "Cleaning",
    "meaningFr": "Ménage, nettoyage",
    "meaningEs": "Limpieza",
    "meaningKo": "청소",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2934,
    "kanji": "集まる",
    "displayReading": "あつまる",
    "readings": [
      "あつまる"
    ],
    "meaning": "Tập trung, tụ họp",
    "meaningEn": "Gather (intransitive)",
    "meaningFr": "Se rassembler (intransitif)",
    "meaningEs": "Reunirse, juntarse",
    "meaningKo": "모이다 (자동사)",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2935,
    "kanji": "集める",
    "displayReading": "あつめる",
    "readings": [
      "あつめる"
    ],
    "meaning": "Sưu tầm, thu thập",
    "meaningEn": "Collect, gather (transitive)",
    "meaningFr": "Rassembler, collectionner",
    "meaningEs": "Reunir, coleccionar",
    "meaningKo": "모으다 (타동사)",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2936,
    "kanji": "決まる",
    "displayReading": "きまる",
    "readings": [
      "きまる"
    ],
    "meaning": "Được quyết định",
    "meaningEn": "Be decided",
    "meaningFr": "Être décidé",
    "meaningEs": "Decidirse, quedar fijado",
    "meaningKo": "정해지다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2937,
    "kanji": "決める",
    "displayReading": "きめる",
    "readings": [
      "きめる"
    ],
    "meaning": "Quyết định",
    "meaningEn": "Decide",
    "meaningFr": "Décider",
    "meaningEs": "Decidir",
    "meaningKo": "정하다, 결정하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2938,
    "kanji": "変わる",
    "displayReading": "かわる",
    "readings": [
      "かわる"
    ],
    "meaning": "Thay đổi (tự động từ)",
    "meaningEn": "Change (intransitive)",
    "meaningFr": "Changer (intransitif)",
    "meaningEs": "Cambiar (intransitivo)",
    "meaningKo": "바뀌다, 변하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2939,
    "kanji": "変える",
    "displayReading": "かえる",
    "readings": [
      "かえる"
    ],
    "meaning": "Thay đổi (tha động từ)",
    "meaningEn": "Change (transitive)",
    "meaningFr": "Changer, modifier (transitif)",
    "meaningEs": "Cambiar (transitivo)",
    "meaningKo": "바꾸다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2940,
    "kanji": "大変",
    "displayReading": "たいへん",
    "readings": [
      "たいへん"
    ],
    "meaning": "Vất vả, rất, nghiêm trọng",
    "meaningEn": "Very, tough, serious",
    "meaningFr": "Très, dur, grave",
    "meaningEs": "Muy, duro, grave",
    "meaningKo": "매우, 힘듦, 큰일",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2941,
    "kanji": "変",
    "displayReading": "へん",
    "readings": [
      "へん"
    ],
    "meaning": "Kỳ lạ, bất thường",
    "meaningEn": "Strange, weird",
    "meaningFr": "Étrange, bizarre",
    "meaningEs": "Extraño, raro",
    "meaningKo": "이상함",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2942,
    "kanji": "直す",
    "displayReading": "なおす",
    "readings": [
      "なおす"
    ],
    "meaning": "Sửa chữa",
    "meaningEn": "Fix, repair",
    "meaningFr": "Réparer, corriger",
    "meaningEs": "Arreglar, corregir",
    "meaningKo": "고치다, 수리하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2943,
    "kanji": "治る",
    "displayReading": "なおる",
    "readings": [
      "なおる"
    ],
    "meaning": "Khỏi bệnh",
    "meaningEn": "Recover, get well",
    "meaningFr": "Guérir",
    "meaningEs": "Curarse, arreglarse",
    "meaningKo": "낫다, 고쳐지다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2944,
    "kanji": "直接",
    "displayReading": "ちょくせつ",
    "readings": [
      "ちょくせつ"
    ],
    "meaning": "Trực tiếp",
    "meaningEn": "Directly",
    "meaningFr": "Directement",
    "meaningEs": "Directamente",
    "meaningKo": "직접",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2945,
    "kanji": "続く",
    "displayReading": "つづく",
    "readings": [
      "つづく"
    ],
    "meaning": "Tiếp tục (tự động từ)",
    "meaningEn": "Continue (intransitive)",
    "meaningFr": "Continuer (intransitif)",
    "meaningEs": "Continuar (intransitivo)",
    "meaningKo": "계속되다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2946,
    "kanji": "続ける",
    "displayReading": "つづける",
    "readings": [
      "つづける"
    ],
    "meaning": "Tiếp tục (tha động từ)",
    "meaningEn": "Continue (transitive)",
    "meaningFr": "Continuer (transitif)",
    "meaningEs": "Continuar (transitivo)",
    "meaningKo": "계속하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2947,
    "kanji": "選ぶ",
    "displayReading": "えらぶ",
    "readings": [
      "えらぶ"
    ],
    "meaning": "Lựa chọn",
    "meaningEn": "Choose, select",
    "meaningFr": "Choisir",
    "meaningEs": "Elegir, seleccionar",
    "meaningKo": "고르다, 선택하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2948,
    "kanji": "選手",
    "displayReading": "せんしゅ",
    "readings": [
      "せんしゅ"
    ],
    "meaning": "Vận động viên, tuyển thủ",
    "meaningEn": "Athlete, player",
    "meaningFr": "Athlète, joueur",
    "meaningEs": "Jugador, atleta",
    "meaningKo": "선수",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2949,
    "kanji": "探す",
    "displayReading": "さがす",
    "readings": [
      "さがす"
    ],
    "meaning": "Tìm kiếm",
    "meaningEn": "Search, look for",
    "meaningFr": "Chercher",
    "meaningEs": "Buscar",
    "meaningKo": "찾다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2950,
    "kanji": "調べる",
    "displayReading": "しらべる",
    "readings": [
      "しらべる"
    ],
    "meaning": "Tra cứu, điều tra",
    "meaningEn": "Look up, investigate",
    "meaningFr": "Rechercher, vérifier",
    "meaningEs": "Investigar, revisar",
    "meaningKo": "조사하다, 찾아보다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2951,
    "kanji": "調子",
    "displayReading": "ちょうし",
    "readings": [
      "ちょうし"
    ],
    "meaning": "Tình trạng, phong độ",
    "meaningEn": "Condition, shape",
    "meaningFr": "État, forme",
    "meaningEs": "Estado, condición",
    "meaningKo": "상태, 컨디션",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2952,
    "kanji": "置く",
    "displayReading": "おく",
    "readings": [
      "おく"
    ],
    "meaning": "Đặt, để",
    "meaningEn": "Put, place",
    "meaningFr": "Poser, placer",
    "meaningEs": "Poner, colocar",
    "meaningKo": "놓다, 두다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2953,
    "kanji": "押す",
    "displayReading": "おす",
    "readings": [
      "おす"
    ],
    "meaning": "Ấn, đẩy",
    "meaningEn": "Push, press",
    "meaningFr": "Pousser, appuyer",
    "meaningEs": "Empujar, presionar",
    "meaningKo": "밀다, 누르다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2954,
    "kanji": "引く",
    "displayReading": "ひく",
    "readings": [
      "ひく"
    ],
    "meaning": "Kéo, tra từ điển",
    "meaningEn": "Pull, look up (in dictionary)",
    "meaningFr": "Tirer, chercher (au dictionnaire)",
    "meaningEs": "Tirar, buscar (en diccionario)",
    "meaningKo": "당기다, (사전을) 찾다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2955,
    "kanji": "呼ぶ",
    "displayReading": "よぶ",
    "readings": [
      "よぶ"
    ],
    "meaning": "Gọi",
    "meaningEn": "Call",
    "meaningFr": "Appeler",
    "meaningEs": "Llamar",
    "meaningKo": "부르다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2956,
    "kanji": "取る",
    "displayReading": "とる",
    "readings": [
      "とる"
    ],
    "meaning": "Lấy, chụp",
    "meaningEn": "Take, get",
    "meaningFr": "Prendre",
    "meaningEs": "Tomar, coger",
    "meaningKo": "집다, 취하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2957,
    "kanji": "撮る",
    "displayReading": "とる",
    "readings": [
      "とる"
    ],
    "meaning": "Chụp ảnh, quay phim",
    "meaningEn": "Take (a photo), shoot (video)",
    "meaningFr": "Prendre (une photo, vidéo)",
    "meaningEs": "Tomar (fotos o vídeos)",
    "meaningKo": "(사진·영상을) 찍다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2958,
    "kanji": "比べる",
    "displayReading": "くらべる",
    "readings": [
      "くらべる"
    ],
    "meaning": "So sánh",
    "meaningEn": "Compare",
    "meaningFr": "Comparer",
    "meaningEs": "Comparar",
    "meaningKo": "비교하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2959,
    "kanji": "消す",
    "displayReading": "けす",
    "readings": [
      "けす"
    ],
    "meaning": "Tắt, xóa",
    "meaningEn": "Turn off, erase",
    "meaningFr": "Éteindre, effacer",
    "meaningEs": "Apagar, borrar",
    "meaningKo": "끄다, 지우다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2960,
    "kanji": "消える",
    "displayReading": "きえる",
    "readings": [
      "きえる"
    ],
    "meaning": "Tắt, biến mất",
    "meaningEn": "Go out, disappear",
    "meaningFr": "S'éteindre, disparaître",
    "meaningEs": "Apagarse, desaparecer",
    "meaningKo": "꺼지다, 사라지다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2961,
    "kanji": "壊れる",
    "displayReading": "こわれる",
    "readings": [
      "こわれる"
    ],
    "meaning": "Bị hỏng, vỡ",
    "meaningEn": "Break (intransitive)",
    "meaningFr": "Se casser (intransitif)",
    "meaningEs": "Romperse, averiarse",
    "meaningKo": "고장 나다, 부서지다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2962,
    "kanji": "壊す",
    "displayReading": "こわす",
    "readings": [
      "こわす"
    ],
    "meaning": "Làm hỏng, phá vỡ",
    "meaningEn": "Break (transitive)",
    "meaningFr": "Casser (transitif)",
    "meaningEs": "Romper (transitivo)",
    "meaningKo": "부수다, 망가뜨리다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2963,
    "kanji": "落とす",
    "displayReading": "おとす",
    "readings": [
      "おとす"
    ],
    "meaning": "Làm rơi",
    "meaningEn": "Drop",
    "meaningFr": "Faire tomber",
    "meaningEs": "Dejar caer",
    "meaningKo": "떨어뜨리다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2964,
    "kanji": "落ちる",
    "displayReading": "おちる",
    "readings": [
      "おちる"
    ],
    "meaning": "Rơi xuống, thi trượt",
    "meaningEn": "Fall, fail (an exam)",
    "meaningFr": "Tomber, échouer (examen)",
    "meaningEs": "Caerse, suspender (examen)",
    "meaningKo": "떨어지다, 낙방하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2965,
    "kanji": "並ぶ",
    "displayReading": "ならぶ",
    "readings": [
      "ならぶ"
    ],
    "meaning": "Xếp hàng",
    "meaningEn": "Line up (intransitive)",
    "meaningFr": "Faire la queue, s'aligner",
    "meaningEs": "Hacer fila, alinearse",
    "meaningKo": "줄 서다, 나란히 서다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2966,
    "kanji": "並べる",
    "displayReading": "ならべる",
    "readings": [
      "ならべる"
    ],
    "meaning": "Sắp xếp, bày biện",
    "meaningEn": "Arrange, line up (transitive)",
    "meaningFr": "Aligner, disposer",
    "meaningEs": "Alinear, colocar en fila",
    "meaningKo": "나란히 놓다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2967,
    "kanji": "飾る",
    "displayReading": "かざる",
    "readings": [
      "かざる"
    ],
    "meaning": "Trang trí",
    "meaningEn": "Decorate",
    "meaningFr": "Décorer",
    "meaningEs": "Decorar",
    "meaningKo": "장식하다, 꾸미다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2968,
    "kanji": "包む",
    "displayReading": "つつむ",
    "readings": [
      "つつむ"
    ],
    "meaning": "Gói, bọc",
    "meaningEn": "Wrap, pack",
    "meaningFr": "Emballer, envelopper",
    "meaningEs": "Envolver, empaquetar",
    "meaningKo": "싸다, 포장하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2969,
    "kanji": "折る",
    "displayReading": "おる",
    "readings": [
      "おる"
    ],
    "meaning": "Gấp, bẻ gãy",
    "meaningEn": "Fold, break",
    "meaningFr": "Plier, casser",
    "meaningEs": "Doblar, partir",
    "meaningKo": "접다, 꺾다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2970,
    "kanji": "片付ける",
    "displayReading": "かたづける",
    "readings": [
      "かたづける"
    ],
    "meaning": "Dọn dẹp, thu gọn",
    "meaningEn": "Tidy up, put away",
    "meaningFr": "Ranger",
    "meaningEs": "Ordenar, recoger",
    "meaningKo": "정리하다, 치우다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2971,
    "kanji": "捨てる",
    "displayReading": "すてる",
    "readings": [
      "すてる"
    ],
    "meaning": "Vứt bỏ",
    "meaningEn": "Throw away",
    "meaningFr": "Jeter",
    "meaningEs": "Tirar, desechar",
    "meaningKo": "버리다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2972,
    "kanji": "拾う",
    "displayReading": "ひろう",
    "readings": [
      "ひろう"
    ],
    "meaning": "Nhặt lên",
    "meaningEn": "Pick up",
    "meaningFr": "Ramasser",
    "meaningEs": "Recoger del suelo",
    "meaningKo": "줍다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2973,
    "kanji": "守る",
    "displayReading": "まもる",
    "readings": [
      "まもる"
    ],
    "meaning": "Bảo vệ, tuân thủ",
    "meaningEn": "Protect, obey",
    "meaningFr": "Protéger, respecter",
    "meaningEs": "Proteger, cumplir",
    "meaningKo": "지키다, 보호하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2974,
    "kanji": "頼む",
    "displayReading": "たのむ",
    "readings": [
      "たのむ"
    ],
    "meaning": "Nhờ vả, gọi món",
    "meaningEn": "Request, ask a favor",
    "meaningFr": "Demander un service, commander",
    "meaningEs": "Pedir un favor, encargar",
    "meaningKo": "부탁하다, 주문하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2975,
    "kanji": "誘う",
    "displayReading": "さそう",
    "readings": [
      "さそう"
    ],
    "meaning": "Rủ rê, mời",
    "meaningEn": "Invite, ask out",
    "meaningFr": "Inviter, proposer",
    "meaningEs": "Invitar, proponer",
    "meaningKo": "권하다, 초대하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2976,
    "kanji": "断る",
    "displayReading": "ことわる",
    "readings": [
      "ことわる"
    ],
    "meaning": "Từ chối",
    "meaningEn": "Refuse, decline",
    "meaningFr": "Refuser",
    "meaningEs": "Rechazar, negarse",
    "meaningKo": "거절하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2977,
    "kanji": "謝る",
    "displayReading": "あやまる",
    "readings": [
      "あやまる"
    ],
    "meaning": "Xin lỗi",
    "meaningEn": "Apologize",
    "meaningFr": "S'excuser",
    "meaningEs": "Disculparse",
    "meaningKo": "사과하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2978,
    "kanji": "褒める",
    "displayReading": "ほめる",
    "readings": [
      "ほめる"
    ],
    "meaning": "Khen ngợi",
    "meaningEn": "Praise",
    "meaningFr": "Complimenter, féliciter",
    "meaningEs": "Elogiar, felicitar",
    "meaningKo": "칭찬하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2979,
    "kanji": "叱る",
    "displayReading": "しかる",
    "readings": [
      "しかる"
    ],
    "meaning": "Mắng, trách phạt",
    "meaningEn": "Scold",
    "meaningFr": "Gronder",
    "meaningEs": "Regañar",
    "meaningKo": "꾸짖다, 혼내다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2980,
    "kanji": "逃げる",
    "displayReading": "にげる",
    "readings": [
      "にげる"
    ],
    "meaning": "Chạy trốn",
    "meaningEn": "Run away, escape",
    "meaningFr": "S'enfuir",
    "meaningEs": "Huir, escapar",
    "meaningKo": "도망가다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2981,
    "kanji": "騒ぐ",
    "displayReading": "さわぐ",
    "readings": [
      "さわぐ"
    ],
    "meaning": "Làm ồn, náo loạn",
    "meaningEn": "Make noise",
    "meaningFr": "Faire du bruit, s'agiter",
    "meaningEs": "Hacer ruido, alborotar",
    "meaningKo": "떠들다, 소란 피우다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2982,
    "kanji": "慣れる",
    "displayReading": "なれる",
    "readings": [
      "なれる"
    ],
    "meaning": "Làm quen, quen thuộc",
    "meaningEn": "Get used to",
    "meaningFr": "S'habituer à",
    "meaningEs": "Acostumbrarse",
    "meaningKo": "익숙해지다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2983,
    "kanji": "育てる",
    "displayReading": "そだてる",
    "readings": [
      "そだてる"
    ],
    "meaning": "Nuôi dưỡng, trồng trọt",
    "meaningEn": "Raise, grow",
    "meaningFr": "Élever, cultiver",
    "meaningEs": "Criar, cultivar",
    "meaningKo": "기르다, 키우다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2984,
    "kanji": "増える",
    "displayReading": "ふえる",
    "readings": [
      "ふえる"
    ],
    "meaning": "Tăng lên",
    "meaningEn": "Increase",
    "meaningFr": "Augmenter",
    "meaningEs": "Aumentar",
    "meaningKo": "늘어나다, 증가하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2985,
    "kanji": "減る",
    "displayReading": "へる",
    "readings": [
      "へる"
    ],
    "meaning": "Giảm xuống",
    "meaningEn": "Decrease",
    "meaningFr": "Diminuer",
    "meaningEs": "Disminuir",
    "meaningKo": "줄어들다, 감소하다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2986,
    "kanji": "鳴る",
    "displayReading": "なる",
    "readings": [
      "なる"
    ],
    "meaning": "Kêu, reo (chuông)",
    "meaningEn": "Ring, sound",
    "meaningFr": "Sonner, retentir",
    "meaningEs": "Sonar",
    "meaningKo": "(소리가) 울리다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2987,
    "kanji": "濡れる",
    "displayReading": "ぬれる",
    "readings": [
      "ぬれる"
    ],
    "meaning": "Bị ướt",
    "meaningEn": "Get wet",
    "meaningFr": "Être mouillé",
    "meaningEs": "Mojarse",
    "meaningKo": "젖다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2988,
    "kanji": "乾く",
    "displayReading": "かわく",
    "readings": [
      "かわく"
    ],
    "meaning": "Khô",
    "meaningEn": "Dry (intransitive)",
    "meaningFr": "Sécher",
    "meaningEs": "Secarse",
    "meaningKo": "마르다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2989,
    "kanji": "割れる",
    "displayReading": "われる",
    "readings": [
      "われる"
    ],
    "meaning": "Bị vỡ",
    "meaningEn": "Break, crack (intransitive)",
    "meaningFr": "Se briser",
    "meaningEs": "Romperse (cristal, plato)",
    "meaningKo": "깨지다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2990,
    "kanji": "折れる",
    "displayReading": "おれる",
    "readings": [
      "おれる"
    ],
    "meaning": "Bị gãy",
    "meaningEn": "Break, snap (intransitive)",
    "meaningFr": "Se casser, se plier",
    "meaningEs": "Partirse, doblarse",
    "meaningKo": "부러지다, 접히다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2991,
    "kanji": "汚れる",
    "displayReading": "よごれる",
    "readings": [
      "よごれる"
    ],
    "meaning": "Bị bẩn",
    "meaningEn": "Get dirty",
    "meaningFr": "Se salir",
    "meaningEs": "Ensuciarse",
    "meaningKo": "더러워지다",
    "topicId": "n4_10",
    "level": "N4"
  },
  {
    "id": 2992,
    "kanji": "笑う",
    "displayReading": "わらう",
    "readings": [
      "わらう"
    ],
    "meaning": "Cười",
    "meaningEn": "Laugh, smile",
    "meaningFr": "Rire, sourire",
    "meaningEs": "Reír, sonreír",
    "meaningKo": "웃다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 2993,
    "kanji": "泣く",
    "displayReading": "なく",
    "readings": [
      "なく"
    ],
    "meaning": "Khóc",
    "meaningEn": "Cry",
    "meaningFr": "Pleurer",
    "meaningEs": "Llorar",
    "meaningKo": "울다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 2994,
    "kanji": "怒る",
    "displayReading": "おこる",
    "readings": [
      "おこる"
    ],
    "meaning": "Tức giận",
    "meaningEn": "Get angry",
    "meaningFr": "Se fâcher",
    "meaningEs": "Enojarse, enfadarse",
    "meaningKo": "화내다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 2995,
    "kanji": "喜ぶ",
    "displayReading": "よろこぶ",
    "readings": [
      "よろこぶ"
    ],
    "meaning": "Vui mừng",
    "meaningEn": "Be glad, rejoice",
    "meaningFr": "Se réjouir",
    "meaningEs": "Alegrarse",
    "meaningKo": "기뻐하다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 2996,
    "kanji": "悲しい",
    "displayReading": "かなしい",
    "readings": [
      "かなしい"
    ],
    "meaning": "Buồn bã",
    "meaningEn": "Sad",
    "meaningFr": "Triste",
    "meaningEs": "Triste",
    "meaningKo": "슬프다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 2997,
    "kanji": "嬉しい",
    "displayReading": "うれしい",
    "readings": [
      "うれしい"
    ],
    "meaning": "Vui sướng",
    "meaningEn": "Happy, glad",
    "meaningFr": "Heureux, ravi",
    "meaningEs": "Feliz, contento",
    "meaningKo": "기쁘다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 2998,
    "kanji": "寂しい",
    "displayReading": "さびしい",
    "readings": [
      "さびしい"
    ],
    "meaning": "Cô đơn, buồn tẻ",
    "meaningEn": "Lonely",
    "meaningFr": "Seul, solitaire",
    "meaningEs": "Solitario, sentir nostalgia",
    "meaningKo": "외롭다, 쓸쓸하다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 2999,
    "kanji": "怖い",
    "displayReading": "こわい",
    "readings": [
      "こわい"
    ],
    "meaning": "Sợ hãi",
    "meaningEn": "Scary, afraid",
    "meaningFr": "Effrayant, avoir peur",
    "meaningEs": "Dar miedo, aterrador",
    "meaningKo": "무섭다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3000,
    "kanji": "驚く",
    "displayReading": "おどろく",
    "readings": [
      "おどろく"
    ],
    "meaning": "Ngạc nhiên",
    "meaningEn": "Be surprised",
    "meaningFr": "Être surpris",
    "meaningEs": "Sorprenderse",
    "meaningKo": "놀라다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3001,
    "kanji": "忙しい",
    "displayReading": "いそがしい",
    "readings": [
      "いそがしい"
    ],
    "meaning": "Bận rộn",
    "meaningEn": "Busy",
    "meaningFr": "Occupé",
    "meaningEs": "Ocupado",
    "meaningKo": "바쁘다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3002,
    "kanji": "暇",
    "displayReading": "ひま",
    "readings": [
      "ひま"
    ],
    "meaning": "Rảnh rỗi",
    "meaningEn": "Free time, not busy",
    "meaningFr": "Temps libre",
    "meaningEs": "Tiempo libre",
    "meaningKo": "한가함, 여가",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3003,
    "kanji": "危ない",
    "displayReading": "あぶない",
    "readings": [
      "あぶない"
    ],
    "meaning": "Nguy hiểm",
    "meaningEn": "Dangerous",
    "meaningFr": "Dangereux",
    "meaningEs": "Peligroso",
    "meaningKo": "위험하다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3004,
    "kanji": "危険",
    "displayReading": "きけん",
    "readings": [
      "きけん"
    ],
    "meaning": "Sự nguy hiểm",
    "meaningEn": "Danger",
    "meaningFr": "Danger",
    "meaningEs": "Peligro",
    "meaningKo": "위험",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 255,
    "kanji": "安全",
    "displayReading": "あんぜん",
    "readings": [
      "あんぜん"
    ],
    "meaning": "An toàn",
    "meaningEn": "Safety, safe",
    "meaningFr": "Sécurité, sûr",
    "meaningEs": "Seguridad, seguro",
    "meaningKo": "안전",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3006,
    "kanji": "保険",
    "displayReading": "ほけん",
    "readings": [
      "ほけん"
    ],
    "meaning": "Bảo hiểm",
    "meaningEn": "Insurance",
    "meaningFr": "Assurance",
    "meaningEs": "Seguro (póliza)",
    "meaningKo": "보험",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3007,
    "kanji": "必ず",
    "displayReading": "かならず",
    "readings": [
      "かならず"
    ],
    "meaning": "Nhất định, chắc chắn",
    "meaningEn": "Surely, without fail",
    "meaningFr": "Sans faute, certainement",
    "meaningEs": "Sin falta, seguramente",
    "meaningKo": "반드시, 꼭",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3008,
    "kanji": "必要",
    "displayReading": "ひつよう",
    "readings": [
      "ひつよう"
    ],
    "meaning": "Cần thiết",
    "meaningEn": "Necessary",
    "meaningFr": "Nécessaire",
    "meaningEs": "Necesario",
    "meaningKo": "필요",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3009,
    "kanji": "要る",
    "displayReading": "いる",
    "readings": [
      "いる"
    ],
    "meaning": "Cần",
    "meaningEn": "Need",
    "meaningFr": "Avoir besoin de",
    "meaningEs": "Necesitar",
    "meaningKo": "필요하다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3010,
    "kanji": "不安",
    "displayReading": "ふあん",
    "readings": [
      "ふあん"
    ],
    "meaning": "Bất an, lo âu",
    "meaningEn": "Uneasy, anxious",
    "meaningFr": "Anxieux, inquiet",
    "meaningEs": "Inquietud, ansiedad",
    "meaningKo": "불안",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3011,
    "kanji": "無理",
    "displayReading": "むり",
    "readings": [
      "むり"
    ],
    "meaning": "Vô lý, quá sức",
    "meaningEn": "Impossible, unreasonable",
    "meaningFr": "Impossible, déraisonnable",
    "meaningEs": "Imposible, excesivo",
    "meaningKo": "무리, 불가능",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3012,
    "kanji": "無料",
    "displayReading": "むりょう",
    "readings": [
      "むりょう"
    ],
    "meaning": "Miễn phí",
    "meaningEn": "Free of charge",
    "meaningFr": "Gratuit",
    "meaningEs": "Gratis, gratuito",
    "meaningKo": "무료",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3013,
    "kanji": "有名",
    "displayReading": "ゆうめい",
    "readings": [
      "ゆうめい"
    ],
    "meaning": "Nổi tiếng",
    "meaningEn": "Famous",
    "meaningFr": "Célèbre",
    "meaningEs": "Famoso",
    "meaningKo": "유명함",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3014,
    "kanji": "全部",
    "displayReading": "ぜんぶ",
    "readings": [
      "ぜんぶ"
    ],
    "meaning": "Toàn bộ, tất cả",
    "meaningEn": "All, entire",
    "meaningFr": "Tout, la totalité",
    "meaningEs": "Todo, la totalidad",
    "meaningKo": "전부, 모두",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3015,
    "kanji": "部屋",
    "displayReading": "へや",
    "readings": [
      "へや"
    ],
    "meaning": "Căn phòng",
    "meaningEn": "Room",
    "meaningFr": "Chambre, pièce",
    "meaningEs": "Habitación, cuarto",
    "meaningKo": "방",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3016,
    "kanji": "部長",
    "displayReading": "ぶちょう",
    "readings": [
      "ぶちょう"
    ],
    "meaning": "Trưởng phòng",
    "meaningEn": "Department manager",
    "meaningFr": "Directeur de département",
    "meaningEs": "Director de departamento",
    "meaningKo": "부장",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3017,
    "kanji": "今度",
    "displayReading": "こんど",
    "readings": [
      "こんど"
    ],
    "meaning": "Lần này, lần tới",
    "meaningEn": "This time, next time",
    "meaningFr": "Cette fois, la prochaine fois",
    "meaningEs": "Esta vez, la próxima vez",
    "meaningKo": "이번, 다음번",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3018,
    "kanji": "一度",
    "displayReading": "いちど",
    "readings": [
      "いちど"
    ],
    "meaning": "Một lần",
    "meaningEn": "Once, one time",
    "meaningFr": "Une fois",
    "meaningEs": "Una vez",
    "meaningKo": "한 번",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3019,
    "kanji": "温度",
    "displayReading": "おんど",
    "readings": [
      "おんど"
    ],
    "meaning": "Nhiệt độ",
    "meaningEn": "Temperature",
    "meaningFr": "Température",
    "meaningEs": "Temperatura",
    "meaningKo": "온도",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3020,
    "kanji": "一回",
    "displayReading": "いっかい",
    "readings": [
      "いっかい"
    ],
    "meaning": "Một lần",
    "meaningEn": "One time",
    "meaningFr": "Une fois (tour)",
    "meaningEs": "Una vez (turno)",
    "meaningKo": "한 번 (회차)",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3021,
    "kanji": "今回",
    "displayReading": "こんかい",
    "readings": [
      "こんかい"
    ],
    "meaning": "Lần này",
    "meaningEn": "This time",
    "meaningFr": "Cette fois-ci",
    "meaningEs": "Esta ocasión",
    "meaningKo": "이번",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3022,
    "kanji": "次回",
    "displayReading": "じかい",
    "readings": [
      "じかい"
    ],
    "meaning": "Lần tới",
    "meaningEn": "Next time",
    "meaningFr": "La prochaine fois",
    "meaningEs": "La próxima ocasión",
    "meaningKo": "다음번",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3023,
    "kanji": "次",
    "displayReading": "つぎ",
    "readings": [
      "つぎ"
    ],
    "meaning": "Tiếp theo",
    "meaningEn": "Next",
    "meaningFr": "Suivant, prochain",
    "meaningEs": "Siguiente, próximo",
    "meaningKo": "다음",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3024,
    "kanji": "一番",
    "displayReading": "いちばん",
    "readings": [
      "いちばん"
    ],
    "meaning": "Nhất, số một",
    "meaningEn": "Number one, best",
    "meaningFr": "Le numéro un, le meilleur",
    "meaningEs": "El número uno, el mejor",
    "meaningKo": "제일, 가장, 1번",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3025,
    "kanji": "番号",
    "displayReading": "ばんごう",
    "readings": [
      "ばんごう"
    ],
    "meaning": "Số hiệu, con số",
    "meaningEn": "Number",
    "meaningFr": "Numéro",
    "meaningEs": "Número",
    "meaningKo": "번호",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3026,
    "kanji": "電話番号",
    "displayReading": "でんわばんごう",
    "readings": [
      "でんわばんごう"
    ],
    "meaning": "Số điện thoại",
    "meaningEn": "Phone number",
    "meaningFr": "Numéro de téléphone",
    "meaningEs": "Número de teléfono",
    "meaningKo": "전화번호",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3027,
    "kanji": "番組",
    "displayReading": "ばんぐみ",
    "readings": [
      "ばんぐみ"
    ],
    "meaning": "Chương trình truyền hình",
    "meaningEn": "TV program",
    "meaningFr": "Émission télévisée",
    "meaningEs": "Programa de televisión",
    "meaningKo": "방송 프로그램",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3028,
    "kanji": "信号",
    "displayReading": "しんごう",
    "readings": [
      "しんごう"
    ],
    "meaning": "Đèn tín hiệu giao thông",
    "meaningEn": "Traffic light",
    "meaningFr": "Feu de signalisation",
    "meaningEs": "Semáforo, señal",
    "meaningKo": "신호등, 신호",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3029,
    "kanji": "方",
    "displayReading": "かた",
    "readings": [
      "かた"
    ],
    "meaning": "Vị (người), cách thức",
    "meaningEn": "Person (polite), way, method",
    "meaningFr": "Personne (poli), manière",
    "meaningEs": "Persona (cortés), manera",
    "meaningKo": "분 (높임말), 방법",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3030,
    "kanji": "夕方",
    "displayReading": "ゆうがた",
    "readings": [
      "ゆうがた"
    ],
    "meaning": "Chiều tối",
    "meaningEn": "Evening, dusk",
    "meaningFr": "Fin d'après-midi, soirée",
    "meaningEs": "Atardecer",
    "meaningKo": "해 질 녘, 저녁때",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3031,
    "kanji": "方法",
    "displayReading": "ほうほう",
    "readings": [
      "ほうほう"
    ],
    "meaning": "Phương pháp",
    "meaningEn": "Method, way",
    "meaningFr": "Méthode, moyen",
    "meaningEs": "Método, manera",
    "meaningKo": "방법",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3032,
    "kanji": "以上",
    "displayReading": "いじょう",
    "readings": [
      "いじょう"
    ],
    "meaning": "Trở lên, trên",
    "meaningEn": "Or more, above",
    "meaningFr": "Ou plus, au-dessus",
    "meaningEs": "O más, superior a",
    "meaningKo": "이상",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3033,
    "kanji": "以下",
    "displayReading": "いか",
    "readings": [
      "いか"
    ],
    "meaning": "Trở xuống, dưới",
    "meaningEn": "Or less, below",
    "meaningFr": "Ou moins, en dessous",
    "meaningEs": "O menos, inferior a",
    "meaningKo": "이하",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3034,
    "kanji": "以内",
    "displayReading": "いない",
    "readings": [
      "いない"
    ],
    "meaning": "Trong vòng, không quá",
    "meaningEn": "Within, less than",
    "meaningFr": "Dans la limite de, moins de",
    "meaningEs": "Dentro de, menos de",
    "meaningKo": "이내",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3035,
    "kanji": "用意",
    "displayReading": "ようい",
    "readings": [
      "ようい"
    ],
    "meaning": "Chuẩn bị",
    "meaningEn": "Preparation",
    "meaningFr": "Préparatifs",
    "meaningEs": "Preparativos",
    "meaningKo": "채비, 준비",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3036,
    "kanji": "将来",
    "displayReading": "しょうらい",
    "readings": [
      "しょうらい"
    ],
    "meaning": "Tương lai",
    "meaningEn": "Future",
    "meaningFr": "Avenir, futur",
    "meaningEs": "Futuro",
    "meaningKo": "장래, 미래",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3037,
    "kanji": "夢",
    "displayReading": "ゆめ",
    "readings": [
      "ゆめ"
    ],
    "meaning": "Giấc mơ, ước mơ",
    "meaningEn": "Dream",
    "meaningFr": "Rêve",
    "meaningEs": "Sueño",
    "meaningKo": "꿈",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3038,
    "kanji": "希望",
    "displayReading": "きぼう",
    "readings": [
      "きぼう"
    ],
    "meaning": "Hy vọng, nguyện vọng",
    "meaningEn": "Hope, wish",
    "meaningFr": "Espoir, souhait",
    "meaningEs": "Esperanza, deseo",
    "meaningKo": "희망",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3039,
    "kanji": "自由",
    "displayReading": "じゆう",
    "readings": [
      "じゆう"
    ],
    "meaning": "Tự do",
    "meaningEn": "Freedom",
    "meaningFr": "Liberté",
    "meaningEs": "Libertad",
    "meaningKo": "자유",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3040,
    "kanji": "理由",
    "displayReading": "りゆう",
    "readings": [
      "りゆう"
    ],
    "meaning": "Lý do",
    "meaningEn": "Reason",
    "meaningFr": "Raison, motif",
    "meaningEs": "Razón, motivo",
    "meaningKo": "이유",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3041,
    "kanji": "平和",
    "displayReading": "へいわ",
    "readings": [
      "へいわ"
    ],
    "meaning": "Hòa bình",
    "meaningEn": "Peace",
    "meaningFr": "Paix",
    "meaningEs": "Paz",
    "meaningKo": "평화",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3042,
    "kanji": "簡単",
    "displayReading": "かんたん",
    "readings": [
      "かんたん"
    ],
    "meaning": "Đơn giản",
    "meaningEn": "Simple, easy",
    "meaningFr": "Simple, facile",
    "meaningEs": "Sencillo, fácil",
    "meaningKo": "간단함, 쉬움",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3043,
    "kanji": "複雑",
    "displayReading": "ふくざつ",
    "readings": [
      "ふくざつ"
    ],
    "meaning": "Phức tạp",
    "meaningEn": "Complex, complicated",
    "meaningFr": "Complexe, compliqué",
    "meaningEs": "Complejo, complicado",
    "meaningKo": "복잡함",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3044,
    "kanji": "丁寧",
    "displayReading": "ていねい",
    "readings": [
      "ていねい"
    ],
    "meaning": "Lịch sự, cẩn thận",
    "meaningEn": "Polite, careful",
    "meaningFr": "Poli, soigneux",
    "meaningEs": "Educado, cuidadoso",
    "meaningKo": "정중함, 꼼꼼함",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3045,
    "kanji": "静か",
    "displayReading": "しずか",
    "readings": [
      "しずか"
    ],
    "meaning": "Yên tĩnh",
    "meaningEn": "Quiet",
    "meaningFr": "Calme, silencieux",
    "meaningEs": "Tranquilo, silencioso",
    "meaningKo": "조용함",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3046,
    "kanji": "賑やか",
    "displayReading": "にぎやか",
    "readings": [
      "にぎやか"
    ],
    "meaning": "Náo nhiệt, đông vui",
    "meaningEn": "Lively, bustling",
    "meaningFr": "Animé, vivant",
    "meaningEs": "Animado, concurrido",
    "meaningKo": "번화함, 활기참",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3047,
    "kanji": "恥ずかしい",
    "displayReading": "はずかしい",
    "readings": [
      "はずかしい"
    ],
    "meaning": "Xấu hổ, ngại ngùng",
    "meaningEn": "Embarrassed, shy",
    "meaningFr": "Gêné, timide, honteux",
    "meaningEs": "Avergonzado, tímido",
    "meaningKo": "부끄럽다, 창피하다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3048,
    "kanji": "羨ましい",
    "displayReading": "うらやましい",
    "readings": [
      "うらやましい"
    ],
    "meaning": "Ghen tị, ngưỡng mộ",
    "meaningEn": "Envious, jealous",
    "meaningFr": "Envieux, jaloux",
    "meaningEs": "Envidiable, dar envidia",
    "meaningKo": "부럽다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3049,
    "kanji": "素晴らしい",
    "displayReading": "すばらしい",
    "readings": [
      "すばらしい"
    ],
    "meaning": "Tuyệt vời",
    "meaningEn": "Wonderful, splendid",
    "meaningFr": "Magnifique, merveilleux",
    "meaningEs": "Maravilloso, estupendo",
    "meaningKo": "멋지다, 훌륭하다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3050,
    "kanji": "珍しい",
    "displayReading": "めずらしい",
    "readings": [
      "めずらしい"
    ],
    "meaning": "Hiếm có, lạ",
    "meaningEn": "Rare, unusual",
    "meaningFr": "Rare, inhabituel",
    "meaningEs": "Raro, poco común",
    "meaningKo": "드물다, 신기하다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3051,
    "kanji": "厳しい",
    "displayReading": "きびしい",
    "readings": [
      "きびしい"
    ],
    "meaning": "Nghiêm khắc, khắc nghiệt",
    "meaningEn": "Strict, severe",
    "meaningFr": "Sévère, strict",
    "meaningEs": "Estricto, severo",
    "meaningKo": "엄격하다, 심하다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3052,
    "kanji": "優しい",
    "displayReading": "やさしい",
    "readings": [
      "やさしい"
    ],
    "meaning": "Hiền lành, tốt bụng",
    "meaningEn": "Kind, gentle",
    "meaningFr": "Doux, gentil",
    "meaningEs": "Amable, tierno",
    "meaningKo": "다정하다, 상냥하다",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3053,
    "kanji": "真面目",
    "displayReading": "まじめ",
    "readings": [
      "まじめ"
    ],
    "meaning": "Chăm chỉ, nghiêm túc",
    "meaningEn": "Serious, earnest",
    "meaningFr": "Sérieux, appliqué",
    "meaningEs": "Serio, aplicado",
    "meaningKo": "성실함, 진지함",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3054,
    "kanji": "適当",
    "displayReading": "てきとう",
    "readings": [
      "てきとう"
    ],
    "meaning": "Phù hợp, qua loa",
    "meaningEn": "Suitable, appropriate",
    "meaningFr": "Adéquat, convenable",
    "meaningEs": "Adecuado, moderado",
    "meaningKo": "적당함",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3055,
    "kanji": "残念",
    "displayReading": "ざんねん",
    "readings": [
      "ざんねん"
    ],
    "meaning": "Đáng tiếc",
    "meaningEn": "Regrettable, unfortunate",
    "meaningFr": "Dommage, regrettable",
    "meaningEs": "Lamentable, qué pena",
    "meaningKo": "아쉬움, 유감",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3056,
    "kanji": "規則",
    "displayReading": "きそく",
    "readings": [
      "きそく"
    ],
    "meaning": "Quy tắc, nội quy",
    "meaningEn": "Rule, regulation",
    "meaningFr": "Règle, règlement",
    "meaningEs": "Regla, norma",
    "meaningKo": "규칙",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3057,
    "kanji": "禁止",
    "displayReading": "きんし",
    "readings": [
      "きんし"
    ],
    "meaning": "Cấm",
    "meaningEn": "Prohibition, ban",
    "meaningFr": "Interdiction",
    "meaningEs": "Prohibición",
    "meaningKo": "금지",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3058,
    "kanji": "非常口",
    "displayReading": "ひじょうぐち",
    "readings": [
      "ひじょうぐち"
    ],
    "meaning": "Lối thoát hiểm",
    "meaningEn": "Emergency exit",
    "meaningFr": "Issue de secours",
    "meaningEs": "Salida de emergencia",
    "meaningKo": "비상구",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3059,
    "kanji": "警察署",
    "displayReading": "けいさつしょ",
    "readings": [
      "けいさつしょ"
    ],
    "meaning": "Sở cảnh sát",
    "meaningEn": "Police station",
    "meaningFr": "Commissariat de police",
    "meaningEs": "Comisaría de policía",
    "meaningKo": "경찰서",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3060,
    "kanji": "消防署",
    "displayReading": "しょうぼうしょ",
    "readings": [
      "しょうぼうしょ"
    ],
    "meaning": "Trạm cứu hỏa",
    "meaningEn": "Fire station",
    "meaningFr": "Caserne de pompiers",
    "meaningEs": "Parque de bomberos",
    "meaningKo": "소방서",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 3061,
    "kanji": "救急車",
    "displayReading": "きゅうきゅうしゃ",
    "readings": [
      "きゅうきゅうしゃ"
    ],
    "meaning": "Xe cứu thương",
    "meaningEn": "Ambulance",
    "meaningFr": "Ambulance",
    "meaningEs": "Ambulancia",
    "meaningKo": "구급차",
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 1001,
    "kanji": "一",
    "displayReading": "Bộ Nhất",
    "displayReadingEn": "Radical 1 · One",
    "displayReadingFr": "Clé 1 · Un",
    "displayReadingEs": "Radical 1 · Uno",
    "displayReadingKo": "부수 1 · 한 일",
    "readings": [
      "Nhất"
    ],
    "meaning": "Một, số một",
    "meaningEn": "One, number one",
    "meaningFr": "Un, chiffre un",
    "meaningEs": "Uno, número uno",
    "meaningKo": "하나, 숫자 1",
    "examples": "一, 七, 三, 上, 下",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1002,
    "kanji": "丨",
    "displayReading": "Bộ Cổn",
    "displayReadingEn": "Radical 2 · Line",
    "displayReadingFr": "Clé 2 · Trait vertical",
    "displayReadingEs": "Radical 2 · Trazo vertical",
    "displayReadingKo": "부수 2 · 뚫을 곤",
    "readings": [
      "Cổn"
    ],
    "meaning": "Nét sổ thẳng",
    "meaningEn": "Vertical stroke",
    "meaningFr": "Trait vertical",
    "meaningEs": "Trazo vertical",
    "meaningKo": "세로획, 뚫다",
    "examples": "中, 串, 豊",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1003,
    "kanji": "丶",
    "displayReading": "Bộ Chủ",
    "displayReadingEn": "Radical 3 · Dot",
    "displayReadingFr": "Clé 3 · Point",
    "displayReadingEs": "Radical 3 · Punto",
    "displayReadingKo": "부수 3 · 점 주",
    "readings": [
      "Chủ"
    ],
    "meaning": "Điểm, chấm",
    "meaningEn": "Dot, point",
    "meaningFr": "Point, goutte",
    "meaningEs": "Punto, gota",
    "meaningKo": "점, 불똥",
    "examples": "主, 丸, 丹",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1004,
    "kanji": "丿",
    "displayReading": "Bộ Phiệt",
    "displayReadingEn": "Radical 4 · Slash",
    "displayReadingFr": "Clé 4 · Trait oblique",
    "displayReadingEs": "Radical 4 · Trazo oblicuo",
    "displayReadingKo": "부수 4 · 삐침 별",
    "readings": [
      "Phiệt"
    ],
    "meaning": "Nét phẩy",
    "meaningEn": "Diagonal slash stroke",
    "meaningFr": "Trait oblique vers la gauche",
    "meaningEs": "Trazo oblicuo hacia la izquierda",
    "meaningKo": "왼쪽 삐침획",
    "examples": "久, 之, 乗",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1005,
    "kanji": "乙 (乚, ⺄)",
    "displayReading": "Bộ Ất",
    "displayReadingEn": "Radical 5 · Second",
    "displayReadingFr": "Clé 5 · Second",
    "displayReadingEs": "Radical 5 · Segundo",
    "displayReadingKo": "부수 5 · 새 을",
    "readings": [
      "Ất"
    ],
    "meaning": "Vị trí thứ 2 trong Thiên Can, uốn cong",
    "meaningEn": "Second Heavenly Stem, bent line",
    "meaningFr": "Deuxième tige céleste, courbe",
    "meaningEs": "Segundo tronco celeste, curva",
    "meaningKo": "천간 을, 굽다, 새",
    "examples": "九, 乱, 乳",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1006,
    "kanji": "亅",
    "displayReading": "Bộ Quyết",
    "displayReadingEn": "Radical 6 · Hook",
    "displayReadingFr": "Clé 6 · Crochet",
    "displayReadingEs": "Radical 6 · Gancho",
    "displayReadingKo": "부수 6 · 갈고리 궐",
    "readings": [
      "Quyết"
    ],
    "meaning": "Nét sổ có móc",
    "meaningEn": "Hooked vertical stroke",
    "meaningFr": "Trait vertical à crochet",
    "meaningEs": "Trazo vertical con gancho",
    "meaningKo": "갈고리 세로획",
    "examples": "了, 予, 事",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1007,
    "kanji": "二",
    "displayReading": "Bộ Nhị",
    "displayReadingEn": "Radical 7 · Two",
    "displayReadingFr": "Clé 7 · Deux",
    "displayReadingEs": "Radical 7 · Dos",
    "displayReadingKo": "부수 7 · 두 이",
    "readings": [
      "Nhị"
    ],
    "meaning": "Số hai",
    "meaningEn": "Number two",
    "meaningFr": "Chiffre deux",
    "meaningEs": "Número dos",
    "meaningKo": "둘, 숫자 2",
    "examples": "二, 五, 井, 亜",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1008,
    "kanji": "亠",
    "displayReading": "Bộ Đầu",
    "displayReadingEn": "Radical 8 · Lid",
    "displayReadingFr": "Clé 8 · Couvercle",
    "displayReadingEs": "Radical 8 · Tapa",
    "displayReadingKo": "부수 8 · 돼지해머리 두",
    "readings": [
      "Đầu"
    ],
    "meaning": "Nắp đậy, phần đầu (không có nghĩa độc lập)",
    "meaningEn": "Lid, cover, head",
    "meaningFr": "Couvercle, sommet",
    "meaningEs": "Tapa, parte superior",
    "meaningKo": "머리, 뚜껑",
    "examples": "亡, 交, 京, 高",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1009,
    "kanji": "人 (亻, 𠆢)",
    "displayReading": "Bộ Nhân",
    "displayReadingEn": "Radical 9 · Person",
    "displayReadingFr": "Clé 9 · Homme",
    "displayReadingEs": "Radical 9 · Persona",
    "displayReadingKo": "부수 9 · 사람 인",
    "readings": [
      "Nhân"
    ],
    "meaning": "Người",
    "meaningEn": "Person, human",
    "meaningFr": "Personne, être humain",
    "meaningEs": "Persona, ser humano",
    "meaningKo": "사람, 인간",
    "examples": "人, 休, 体, 働, 今",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1010,
    "kanji": "儿",
    "displayReading": "Bộ Nhân (nhi)",
    "displayReadingEn": "Radical 10 · Legs",
    "displayReadingFr": "Clé 10 · Jambes",
    "displayReadingEs": "Radical 10 · Piernas",
    "displayReadingKo": "부수 10 · 어진사람 인",
    "readings": [
      "Nhân (nhi)"
    ],
    "meaning": "Người đi, đôi chân",
    "meaningEn": "Walking person, human legs",
    "meaningFr": "Homme qui marche, jambes",
    "meaningEs": "Persona que camina, piernas",
    "meaningKo": "걷는 사람, 다리",
    "examples": "元, 兄, 光, 先",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1011,
    "kanji": "入",
    "displayReading": "Bộ Nhập",
    "displayReadingEn": "Radical 11 · Enter",
    "displayReadingFr": "Clé 11 · Entrer",
    "displayReadingEs": "Radical 11 · Entrar",
    "displayReadingKo": "부수 11 · 들 입",
    "readings": [
      "Nhập"
    ],
    "meaning": "Đi vào",
    "meaningEn": "Enter, go in",
    "meaningFr": "Entrer, pénétrer",
    "meaningEs": "Entrar, penetrar",
    "meaningKo": "들어가다",
    "examples": "入, 全, 両",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1012,
    "kanji": "八 (丷)",
    "displayReading": "Bộ Bát",
    "displayReadingEn": "Radical 12 · Eight",
    "displayReadingFr": "Clé 12 · Huit",
    "displayReadingEs": "Radical 12 · Ocho",
    "displayReadingKo": "부수 12 · 여덟 팔",
    "readings": [
      "Bát"
    ],
    "meaning": "Số tám, chia tách",
    "meaningEn": "Number eight, divide",
    "meaningFr": "Chiffre huit, diviser",
    "meaningEs": "Número ocho, dividir",
    "meaningKo": "여덟, 나누다",
    "examples": "八, 六, 公, 共",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1013,
    "kanji": "冂",
    "displayReading": "Bộ Quynh",
    "displayReadingEn": "Radical 13 · Down box",
    "displayReadingFr": "Clé 13 · Enceinte ouverte",
    "displayReadingEs": "Radical 13 · Recinto abierto",
    "displayReadingKo": "부수 13 · 멀 경",
    "readings": [
      "Quynh"
    ],
    "meaning": "Vùng biên giới, khoảng trống bao quanh",
    "meaningEn": "Wide border, open enclosure",
    "meaningFr": "Frontière lointaine, espace entouré",
    "meaningEs": "Frontera lejana, espacio rodeado",
    "meaningKo": "먼 변방, 둘러싼 공간",
    "examples": "内, 円, 再, 冊",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1014,
    "kanji": "冖",
    "displayReading": "Bộ Mịch",
    "displayReadingEn": "Radical 14 · Cover",
    "displayReadingFr": "Clé 14 · Couvrir",
    "displayReadingEs": "Radical 14 · Cubrir",
    "displayReadingKo": "부수 14 · 민갓머리 멱",
    "readings": [
      "Mịch"
    ],
    "meaning": "Trùm khăn lên, che đậy",
    "meaningEn": "Cover over, cloth cover",
    "meaningFr": "Couvrir d'un voile",
    "meaningEs": "Cubrir con un velo",
    "meaningKo": "덮어 씌우다",
    "examples": "写, 冠, 軍",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1015,
    "kanji": "冫",
    "displayReading": "Bộ Băng",
    "displayReadingEn": "Radical 15 · Ice",
    "displayReadingFr": "Clé 15 · Glace",
    "displayReadingEs": "Radical 15 · Hielo",
    "displayReadingKo": "부수 15 · 이수변 빙",
    "readings": [
      "Băng"
    ],
    "meaning": "Nước đá, lạnh giá",
    "meaningEn": "Ice, cold",
    "meaningFr": "Glace, froid",
    "meaningEs": "Hielo, frío",
    "meaningKo": "얼음, 차갑다",
    "examples": "氷, 冷, 冬, 凍",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1016,
    "kanji": "几",
    "displayReading": "Bộ Kỷ",
    "displayReadingEn": "Radical 16 · Table",
    "displayReadingFr": "Clé 16 · Table basse",
    "displayReadingEs": "Radical 16 · Mesa baja",
    "displayReadingKo": "부수 16 · 안석 궤",
    "readings": [
      "Kỷ"
    ],
    "meaning": "Cái bàn nhỏ, ghế tựa",
    "meaningEn": "Small table, bench",
    "meaningFr": "Petite table, tabouret",
    "meaningEs": "Mesita baja, taburete",
    "meaningKo": "작은 책상, 안석",
    "examples": "机, 凡, 風",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1017,
    "kanji": "凵",
    "displayReading": "Bộ Khảm",
    "displayReadingEn": "Radical 17 · Open box",
    "displayReadingFr": "Clé 17 · Réceptacle",
    "displayReadingEs": "Radical 17 · Receptáculo",
    "displayReadingKo": "부수 17 · 위튼입구 감",
    "readings": [
      "Khảm"
    ],
    "meaning": "Há miệng, hố sâu",
    "meaningEn": "Open mouth, receptacle, pit",
    "meaningFr": "Bouche ouverte, fosse, boîte ouverte",
    "meaningEs": "Boca abierta, foso, caja abierta",
    "meaningKo": "입 벌리다, 구덩이",
    "examples": "出, 凶, 凸, 凹",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1018,
    "kanji": "刀 (刂)",
    "displayReading": "Bộ Đao",
    "displayReadingEn": "Radical 18 · Knife",
    "displayReadingFr": "Clé 18 · Couteau",
    "displayReadingEs": "Radical 18 · Cuchillo",
    "displayReadingKo": "부수 18 · 칼 도",
    "readings": [
      "Đao"
    ],
    "meaning": "Con dao, cắt gọt",
    "meaningEn": "Knife, blade, cut",
    "meaningFr": "Couteau, lame, trancher",
    "meaningEs": "Cuchillo, hoja, cortar",
    "meaningKo": "칼, 베다, 자르다",
    "examples": "刀, 切, 分, 利, 別",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1019,
    "kanji": "力",
    "displayReading": "Bộ Lực",
    "displayReadingEn": "Radical 19 · Power",
    "displayReadingFr": "Clé 19 · Force",
    "displayReadingEs": "Radical 19 · Fuerza",
    "displayReadingKo": "부수 19 · 힘 력",
    "readings": [
      "Lực"
    ],
    "meaning": "Sức mạnh",
    "meaningEn": "Power, strength",
    "meaningFr": "Force, puissance",
    "meaningEs": "Fuerza, potencia",
    "meaningKo": "힘, 권력",
    "examples": "力, 動, 働, 勉, 助",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1020,
    "kanji": "勹",
    "displayReading": "Bộ Bao",
    "displayReadingEn": "Radical 20 · Wrap",
    "displayReadingFr": "Clé 20 · Envelopper",
    "displayReadingEs": "Radical 20 · Envolver",
    "displayReadingKo": "부수 20 · 쌀 포",
    "readings": [
      "Bao"
    ],
    "meaning": "Bao bọc, ôm ấp",
    "meaningEn": "Wrap, embrace",
    "meaningFr": "Envelopper, enlacer",
    "meaningEs": "Envolver, abrazar",
    "meaningKo": "싸다, 감싸 안다",
    "examples": "包, 句, 匂",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1021,
    "kanji": "匕",
    "displayReading": "Bộ Chủy",
    "displayReadingEn": "Radical 21 · Spoon",
    "displayReadingFr": "Clé 21 · Cuillère",
    "displayReadingEs": "Radical 21 · Cuchara",
    "displayReadingKo": "부수 21 · 비수 비",
    "readings": [
      "Chủy"
    ],
    "meaning": "Cái thìa, muỗng",
    "meaningEn": "Spoon, ladle",
    "meaningFr": "Cuillère, louche",
    "meaningEs": "Cuchara, cucharón",
    "meaningKo": "숟가락, 비수",
    "examples": "化, 北, 匙",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1022,
    "kanji": "匚",
    "displayReading": "Bộ Phương",
    "displayReadingEn": "Radical 22 · Right open box",
    "displayReadingFr": "Clé 22 · Coffre",
    "displayReadingEs": "Radical 22 · Cofre",
    "displayReadingKo": "부수 22 · 상자 방",
    "readings": [
      "Phương"
    ],
    "meaning": "Cái hộp, tủ đựng",
    "meaningEn": "Box, cabinet, chest",
    "meaningFr": "Boîte, coffre",
    "meaningEs": "Caja, cofre",
    "meaningKo": "상자, 그릇",
    "examples": "匠, 匹, 区",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1023,
    "kanji": "匸",
    "displayReading": "Bộ Hệ",
    "displayReadingEn": "Radical 23 · Hiding enclosure",
    "displayReadingFr": "Clé 23 · Cacher",
    "displayReadingEs": "Radical 23 · Ocultar",
    "displayReadingKo": "부수 23 · 감출 혜",
    "readings": [
      "Hệ"
    ],
    "meaning": "Che giấu, đậy lại",
    "meaningEn": "Hide, conceal, cover",
    "meaningFr": "Cacher, dissimuler",
    "meaningEs": "Esconder, ocultar",
    "meaningKo": "감추다, 숨기다",
    "examples": "区, 医, 匿",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1024,
    "kanji": "十",
    "displayReading": "Bộ Thập",
    "displayReadingEn": "Radical 24 · Ten",
    "displayReadingFr": "Clé 24 · Dix",
    "displayReadingEs": "Radical 24 · Diez",
    "displayReadingKo": "부수 24 · 열 십",
    "readings": [
      "Thập"
    ],
    "meaning": "Số mười, đầy đủ",
    "meaningEn": "Number ten, complete",
    "meaningFr": "Chiffre dix, complet",
    "meaningEs": "Número diez, completo",
    "meaningKo": "열, 숫자 10, 완전함",
    "examples": "十, 千, 午, 半, 南",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1025,
    "kanji": "卜",
    "displayReading": "Bộ Bốc",
    "displayReadingEn": "Radical 25 · Divination",
    "displayReadingFr": "Clé 25 · Divination",
    "displayReadingEs": "Radical 25 · Adivinación",
    "displayReadingKo": "부수 25 · 점 복",
    "readings": [
      "Bốc"
    ],
    "meaning": "Xem bói",
    "meaningEn": "Divination, fortune-telling",
    "meaningFr": "Divination, présage",
    "meaningEs": "Adivinación, augurio",
    "meaningKo": "점치다, 점괘",
    "examples": "占, 卦, 外",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1026,
    "kanji": "卩 (㔾)",
    "displayReading": "Bộ Tiết",
    "displayReadingEn": "Radical 26 · Seal",
    "displayReadingFr": "Clé 26 · Sceau",
    "displayReadingEs": "Radical 26 · Sello",
    "displayReadingKo": "부수 26 · 병부 절",
    "readings": [
      "Tiết"
    ],
    "meaning": "Đốt tre, con dấu",
    "meaningEn": "Bamboo joint, official seal",
    "meaningFr": "Nœud de bambou, sceau officiel",
    "meaningEs": "Nudo de bambú, sello oficial",
    "meaningKo": "병부, 관인, 무릎 꿇다",
    "examples": "印, 危, 即, 卵",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1027,
    "kanji": "厂",
    "displayReading": "Bộ Hán",
    "displayReadingEn": "Radical 27 · Cliff",
    "displayReadingFr": "Clé 27 · Falaise",
    "displayReadingEs": "Radical 27 · Acantilado",
    "displayReadingKo": "부수 27 · 민엄호 한",
    "readings": [
      "Hán"
    ],
    "meaning": "Sườn núi, vách đá",
    "meaningEn": "Cliff, mountain slope",
    "meaningFr": "Falaise, versant rocheux",
    "meaningEs": "Acantilado, ladera rocosa",
    "meaningKo": "언덕, 기슭, 절벽",
    "examples": "原, 厚, 圧, 歴",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1028,
    "kanji": "厶",
    "displayReading": "Bộ Khư (Tư)",
    "displayReadingEn": "Radical 28 · Private",
    "displayReadingFr": "Clé 28 · Privé",
    "displayReadingEs": "Radical 28 · Privado",
    "displayReadingKo": "부수 28 · 사사 사",
    "readings": [
      "Khư (Tư)"
    ],
    "meaning": "Riêng tư",
    "meaningEn": "Private, personal",
    "meaningFr": "Privé, personnel",
    "meaningEs": "Privado, personal",
    "meaningKo": "사사롭다, 개인",
    "examples": "去, 参, 私",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1029,
    "kanji": "又",
    "displayReading": "Bộ Hựu",
    "displayReadingEn": "Radical 29 · Again",
    "displayReadingFr": "Clé 29 · Encore",
    "displayReadingEs": "Radical 29 · Otra vez",
    "displayReadingKo": "부수 29 · 또 우",
    "readings": [
      "Hựu"
    ],
    "meaning": "Lại nữa, bàn tay phải",
    "meaningEn": "Again, right hand",
    "meaningFr": "À nouveau, main droite",
    "meaningEs": "De nuevo, mano derecha",
    "meaningKo": "또, 다시, 오른손",
    "examples": "又, 友, 反, 取, 受",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1030,
    "kanji": "口",
    "displayReading": "Bộ Khẩu",
    "displayReadingEn": "Radical 30 · Mouth",
    "displayReadingFr": "Clé 30 · Bouche",
    "displayReadingEs": "Radical 30 · Boca",
    "displayReadingKo": "부수 30 · 입 구",
    "readings": [
      "Khẩu"
    ],
    "meaning": "Cái miệng, ăn nói",
    "meaningEn": "Mouth, speech, eating",
    "meaningFr": "Bouche, parole",
    "meaningEs": "Boca, palabra",
    "meaningKo": "입, 말, 출입구",
    "examples": "口, 古, 味, 呼, 問",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1031,
    "kanji": "囗",
    "displayReading": "Bộ Vi",
    "displayReadingEn": "Radical 31 · Enclosure",
    "displayReadingFr": "Clé 31 · Enceinte",
    "displayReadingEs": "Radical 31 · Recinto",
    "displayReadingKo": "부수 31 · 큰입구 위",
    "readings": [
      "Vi"
    ],
    "meaning": "Vây quanh, biên giới",
    "meaningEn": "Enclosure, border, surround",
    "meaningFr": "Enceinte, entourer, frontière",
    "meaningEs": "Recinto cerrado, rodear, frontera",
    "meaningKo": "에워싸다, 테두리",
    "examples": "国, 四, 回, 園, 図",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1032,
    "kanji": "土",
    "displayReading": "Bộ Thổ",
    "displayReadingEn": "Radical 32 · Earth",
    "displayReadingFr": "Clé 32 · Terre",
    "displayReadingEs": "Radical 32 · Tierra",
    "displayReadingKo": "부수 32 · 흙 토",
    "readings": [
      "Thổ"
    ],
    "meaning": "Đất đai",
    "meaningEn": "Earth, soil, land",
    "meaningFr": "Terre, sol",
    "meaningEs": "Tierra, suelo",
    "meaningKo": "흙, 땅, 대지",
    "examples": "土, 地, 場, 坂, 城",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1033,
    "kanji": "士",
    "displayReading": "Bộ Sĩ",
    "displayReadingEn": "Radical 33 · Scholar",
    "displayReadingFr": "Clé 33 · Lettré",
    "displayReadingEs": "Radical 33 · Erudito",
    "displayReadingKo": "부수 33 · 선비 사",
    "readings": [
      "Sĩ"
    ],
    "meaning": "Kẻ sĩ, học giả, chiến binh",
    "meaningEn": "Scholar, gentleman, warrior",
    "meaningFr": "Lettré, érudit, guerrier",
    "meaningEs": "Erudito, letrado, guerrero",
    "meaningKo": "선비, 학자, 무사",
    "examples": "士, 売, 声, 壮",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1034,
    "kanji": "夂",
    "displayReading": "Bộ Trĩ",
    "displayReadingEn": "Radical 34 · Go",
    "displayReadingFr": "Clé 34 · Suivre",
    "displayReadingEs": "Radical 34 · Seguir",
    "displayReadingKo": "부수 34 · 뒤져올 치",
    "readings": [
      "Trĩ"
    ],
    "meaning": "Bước chậm theo sau",
    "meaningEn": "Walk slowly behind",
    "meaningFr": "Marcher lentement derrière",
    "meaningEs": "Caminar despacio detrás",
    "meaningKo": "뒤따라 천천히 걷다",
    "examples": "冬, 各, 条",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1035,
    "kanji": "夊",
    "displayReading": "Bộ Tuy",
    "displayReadingEn": "Radical 35 · Go slowly",
    "displayReadingFr": "Clé 35 · Marcher lentement",
    "displayReadingEs": "Radical 35 · Caminar lento",
    "displayReadingKo": "부수 35 · 천천히걸을 쇠",
    "readings": [
      "Tuy"
    ],
    "meaning": "Đi chậm chạp",
    "meaningEn": "Walk slowly",
    "meaningFr": "Marcher à petits pas",
    "meaningEs": "Caminar a pasos cortos",
    "meaningKo": "발을 끌며 천천히 걷다",
    "examples": "夏, 復, 変",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1036,
    "kanji": "夕",
    "displayReading": "Bộ Tịch",
    "displayReadingEn": "Radical 36 · Evening",
    "displayReadingFr": "Clé 36 · Soir",
    "displayReadingEs": "Radical 36 · Tarde / Noche",
    "displayReadingKo": "부수 36 · 저녁 석",
    "readings": [
      "Tịch"
    ],
    "meaning": "Đêm tối, buổi chiều",
    "meaningEn": "Evening, night",
    "meaningFr": "Soir, crépuscule, nuit",
    "meaningEs": "Atardecer, noche",
    "meaningKo": "저녁, 밤",
    "examples": "夕, 外, 多, 夜, 夢",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1037,
    "kanji": "大",
    "displayReading": "Bộ Đại",
    "displayReadingEn": "Radical 37 · Big",
    "displayReadingFr": "Clé 37 · Grand",
    "displayReadingEs": "Radical 37 · Grande",
    "displayReadingKo": "부수 37 · 큰 대",
    "readings": [
      "Đại"
    ],
    "meaning": "To lớn",
    "meaningEn": "Big, large, great",
    "meaningFr": "Grand, vaste",
    "meaningEs": "Grande, vasto",
    "meaningKo": "크다, 넓다",
    "examples": "大, 天, 太, 夫, 奇",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1038,
    "kanji": "女",
    "displayReading": "Bộ Nữ",
    "displayReadingEn": "Radical 38 · Woman",
    "displayReadingFr": "Clé 38 · Femme",
    "displayReadingEs": "Radical 38 · Mujer",
    "displayReadingKo": "부수 38 · 계집 녀",
    "readings": [
      "Nữ"
    ],
    "meaning": "Phụ nữ, con gái",
    "meaningEn": "Woman, female",
    "meaningFr": "Femme, féminin",
    "meaningEs": "Mujer, femenino",
    "meaningKo": "여자, 여성",
    "examples": "女, 好, 姉, 妹, 始",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1039,
    "kanji": "子",
    "displayReading": "Bộ Tử",
    "displayReadingEn": "Radical 39 · Child",
    "displayReadingFr": "Clé 39 · Enfant",
    "displayReadingEs": "Radical 39 · Niño",
    "displayReadingKo": "부수 39 · 아들 자",
    "readings": [
      "Tử"
    ],
    "meaning": "Con cái, trẻ em",
    "meaningEn": "Child, offspring",
    "meaningFr": "Enfant, descendant",
    "meaningEs": "Niño, hijo, descendiente",
    "meaningKo": "아이, 자식, 자손",
    "examples": "子, 学, 字, 孫, 季",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1040,
    "kanji": "宀",
    "displayReading": "Bộ Miên",
    "displayReadingEn": "Radical 40 · Roof",
    "displayReadingFr": "Clé 40 · Toit",
    "displayReadingEs": "Radical 40 · Techo",
    "displayReadingKo": "부수 40 · 갓머리 면",
    "readings": [
      "Miên"
    ],
    "meaning": "Mái nhà, che chở",
    "meaningEn": "Roof, shelter",
    "meaningFr": "Toit, maison, abri",
    "meaningEs": "Techo, casa, hogar",
    "meaningKo": "지붕, 집",
    "examples": "家, 安, 室, 宿, 守",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1041,
    "kanji": "寸",
    "displayReading": "Bộ Thốn",
    "displayReadingEn": "Radical 41 · Inch",
    "displayReadingFr": "Clé 41 · Pouce",
    "displayReadingEs": "Radical 41 · Pulgada",
    "displayReadingKo": "부수 41 · 마디 촌",
    "readings": [
      "Thốn"
    ],
    "meaning": "Đơn vị đo (tấc), quy tắc",
    "meaningEn": "Inch (unit), rule, measure",
    "meaningFr": "Pouce (mesure), règle",
    "meaningEs": "Pulgada china, medida, regla",
    "meaningKo": "치(길이 단위), 법도",
    "examples": "寸, 寺, 対, 専, 導",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1042,
    "kanji": "小 (⺌, ⺍)",
    "displayReading": "Bộ Tiểu",
    "displayReadingEn": "Radical 42 · Small",
    "displayReadingFr": "Clé 42 · Petit",
    "displayReadingEs": "Radical 42 · Pequeño",
    "displayReadingKo": "부수 42 · 작을 소",
    "readings": [
      "Tiểu"
    ],
    "meaning": "Nhỏ bé",
    "meaningEn": "Small, little",
    "meaningFr": "Petit, menu",
    "meaningEs": "Pequeño, diminuto",
    "meaningKo": "작다, 적다",
    "examples": "小, 少, 尚, 当",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1043,
    "kanji": "尢 (尣)",
    "displayReading": "Bộ Uông",
    "displayReadingEn": "Radical 43 · Lame",
    "displayReadingFr": "Clé 43 · Boiteux",
    "displayReadingEs": "Radical 43 · Cojo",
    "displayReadingKo": "부수 43 · 절름발이 왕",
    "readings": [
      "Uông"
    ],
    "meaning": "Yếu đuối, chân khập khiễng",
    "meaningEn": "Weak, lame leg",
    "meaningFr": "Faible, jambe boiteuse",
    "meaningEs": "Débil, pierna coja",
    "meaningKo": "절름발이, 약하다",
    "examples": "就, 尤",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1044,
    "kanji": "尸",
    "displayReading": "Bộ Thi",
    "displayReadingEn": "Radical 44 · Corpse",
    "displayReadingFr": "Clé 44 · Cadavre",
    "displayReadingEs": "Radical 44 · Cadáver",
    "displayReadingKo": "부수 44 · 주검 시",
    "readings": [
      "Thi"
    ],
    "meaning": "Thây ma, cơ thể nằm",
    "meaningEn": "Corpse, reclining body",
    "meaningFr": "Corps étendu, dépouille",
    "meaningEs": "Cuerpo tendido, restos",
    "meaningKo": "주검, 몸, 지붕",
    "examples": "局, 屋, 届, 居, 層",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1045,
    "kanji": "屮",
    "displayReading": "Bộ Triệt",
    "displayReadingEn": "Radical 45 · Sprout",
    "displayReadingFr": "Clé 45 · Jeune pousse",
    "displayReadingEs": "Radical 45 · Brote",
    "displayReadingKo": "부수 45 · 왼손 좌 / 싹 철",
    "readings": [
      "Triệt"
    ],
    "meaning": "Mầm non mới nhú",
    "meaningEn": "Young sprout, shoot",
    "meaningFr": "Bourgeon, jeune pousse",
    "meaningEs": "Brote, retoño",
    "meaningKo": "새싹, 돋아나다",
    "examples": "屯, 逆",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1046,
    "kanji": "山",
    "displayReading": "Bộ Sơn",
    "displayReadingEn": "Radical 46 · Mountain",
    "displayReadingFr": "Clé 46 · Montagne",
    "displayReadingEs": "Radical 46 · Montaña",
    "displayReadingKo": "부수 46 · 뫼 산",
    "readings": [
      "Sơn"
    ],
    "meaning": "Ngọn núi",
    "meaningEn": "Mountain",
    "meaningFr": "Montagne",
    "meaningEs": "Montaña",
    "meaningKo": "산, 봉우리",
    "examples": "山, 岩, 島, 峠, 岸",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1047,
    "kanji": "巛 (川)",
    "displayReading": "Bộ Xuyên",
    "displayReadingEn": "Radical 47 · River",
    "displayReadingFr": "Clé 47 · Rivière",
    "displayReadingEs": "Radical 47 · Río",
    "displayReadingKo": "부수 47 · 내 천",
    "readings": [
      "Xuyên"
    ],
    "meaning": "Sông ngòi, dòng chảy",
    "meaningEn": "River, stream, flow",
    "meaningFr": "Rivière, cours d'eau",
    "meaningEs": "Río, corriente de agua",
    "meaningKo": "강, 시내, 물줄기",
    "examples": "川, 州, 巡, 巣",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1048,
    "kanji": "工",
    "displayReading": "Bộ Công",
    "displayReadingEn": "Radical 48 · Work",
    "displayReadingFr": "Clé 48 · Travail",
    "displayReadingEs": "Radical 48 · Trabajo",
    "displayReadingKo": "부수 48 · 장인 공",
    "readings": [
      "Công"
    ],
    "meaning": "Người thợ, công việc",
    "meaningEn": "Work, craft, artisan",
    "meaningFr": "Travail, artisan, outil",
    "meaningEs": "Trabajo, artesano, herramienta",
    "meaningKo": "장인, 일, 도구",
    "examples": "工, 左, 差, 巧",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1049,
    "kanji": "己 (已, 巳)",
    "displayReading": "Bộ Kỷ",
    "displayReadingEn": "Radical 49 · Oneself",
    "displayReadingFr": "Clé 49 · Soi-même",
    "displayReadingEs": "Radical 49 · Uno mismo",
    "displayReadingKo": "부수 49 · 몸 기",
    "readings": [
      "Kỷ"
    ],
    "meaning": "Bản thân mình",
    "meaningEn": "Oneself, self",
    "meaningFr": "Soi-même, corps",
    "meaningEs": "Uno mismo, propio cuerpo",
    "meaningKo": "자기, 몸",
    "examples": "己, 巻, 改, 配",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1050,
    "kanji": "巾",
    "displayReading": "Bộ Cân",
    "displayReadingEn": "Radical 50 · Turban",
    "displayReadingFr": "Clé 50 · Étoffe",
    "displayReadingEs": "Radical 50 · Tela",
    "displayReadingKo": "부수 50 · 수건 건",
    "readings": [
      "Cân"
    ],
    "meaning": "Cái khăn, vải vóc",
    "meaningEn": "Cloth, towel, scarf",
    "meaningFr": "Linge, tissu, écharpe",
    "meaningEs": "Paño, tela, pañuelo",
    "meaningKo": "수건, 천, 옷감",
    "examples": "市, 布, 席, 帯, 帰",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1051,
    "kanji": "干",
    "displayReading": "Bộ Can",
    "displayReadingEn": "Radical 51 · Dry",
    "displayReadingFr": "Clé 51 · Sec",
    "displayReadingEs": "Radical 51 · Seco",
    "displayReadingKo": "부수 51 · 방패 간",
    "readings": [
      "Can"
    ],
    "meaning": "Khô ráo, can thiệp, cái khiên",
    "meaningEn": "Dry, interfere, shield",
    "meaningFr": "Sec, bouclier, intervenir",
    "meaningEs": "Seco, escudo, intervenir",
    "meaningKo": "방패, 마르다, 간섭하다",
    "examples": "干, 平, 年, 幸, 幹",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1052,
    "kanji": "幺",
    "displayReading": "Bộ Yêu",
    "displayReadingEn": "Radical 52 · Short thread",
    "displayReadingFr": "Clé 52 · Fil fin",
    "displayReadingEs": "Radical 52 · Hilo fino",
    "displayReadingKo": "부수 52 · 작을 요",
    "readings": [
      "Yêu"
    ],
    "meaning": "Nhỏ nhắn, sợi tơ nhỏ",
    "meaningEn": "Tiny, fine silk thread",
    "meaningFr": "Minuscule, fil de soie fin",
    "meaningEs": "Diminuto, hilo de seda corto",
    "meaningKo": "작다, 가는 실",
    "examples": "幼, 幾, 幻, 幽",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1053,
    "kanji": "广",
    "displayReading": "Bộ Nghiễm",
    "displayReadingEn": "Radical 53 · Dotted cliff",
    "displayReadingFr": "Clé 53 · Toit en pente",
    "displayReadingEs": "Radical 53 · Tejado inclinado",
    "displayReadingKo": "부수 53 · 엄호 엄",
    "readings": [
      "Nghiễm"
    ],
    "meaning": "Mái nhà, tòa nhà",
    "meaningEn": "Slanted roof, building",
    "meaningFr": "Abri sous toit, bâtiment",
    "meaningEs": "Refugio bajo techo, edificio",
    "meaningKo": "돌집, 큰 지붕 건물",
    "examples": "広, 店, 度, 庫, 庭",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1054,
    "kanji": "廴",
    "displayReading": "Bộ Dẫn",
    "displayReadingEn": "Radical 54 · Long stride",
    "displayReadingFr": "Clé 54 · Long pas",
    "displayReadingEs": "Radical 54 · Paso largo",
    "displayReadingKo": "부수 54 · 민책받침 인",
    "readings": [
      "Dẫn"
    ],
    "meaning": "Bước dài",
    "meaningEn": "Long stride, move forward",
    "meaningFr": "Avancer à grands pas",
    "meaningEs": "Avanzar a grandes pasos",
    "meaningKo": "길게 걷다, 나아가다",
    "examples": "建, 延, 廷",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1055,
    "kanji": "廾",
    "displayReading": "Bộ Củng",
    "displayReadingEn": "Radical 55 · Arch",
    "displayReadingFr": "Clé 55 · Mains jointes",
    "displayReadingEs": "Radical 55 · Manos juntas",
    "displayReadingKo": "부수 55 · 스물입발 공",
    "readings": [
      "Củng"
    ],
    "meaning": "Chắp hai tay",
    "meaningEn": "Joined hands",
    "meaningFr": "Joindre les deux mains",
    "meaningEs": "Juntar ambas manos",
    "meaningKo": "두 손으로 받들다",
    "examples": "弁, 弄, 弊",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1056,
    "kanji": "弋",
    "displayReading": "Bộ Dặc",
    "displayReadingEn": "Radical 56 · Shoot",
    "displayReadingFr": "Clé 56 · Tirer à l'arc",
    "displayReadingEs": "Radical 56 · Disparo con arco",
    "displayReadingKo": "부수 56 · 주살 익",
    "readings": [
      "Dặc"
    ],
    "meaning": "Bắn tên, cái cọc",
    "meaningEn": "Shoot arrow, stake",
    "meaningFr": "Flèche à fil, pieu",
    "meaningEs": "Flecha con cuerda, estaca",
    "meaningKo": "주살(줄 달린 화살)",
    "examples": "式, 弐, 鳶",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1057,
    "kanji": "弓",
    "displayReading": "Bộ Cung",
    "displayReadingEn": "Radical 57 · Bow",
    "displayReadingFr": "Clé 57 · Arc",
    "displayReadingEs": "Radical 57 · Arco",
    "displayReadingKo": "부수 57 · 활 궁",
    "readings": [
      "Cung"
    ],
    "meaning": "Cái cung tên",
    "meaningEn": "Bow (weapon)",
    "meaningFr": "Arc (arme)",
    "meaningEs": "Arco (arma)",
    "meaningKo": "활",
    "examples": "弓, 引, 強, 弱, 張",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1058,
    "kanji": "彐 (彑)",
    "displayReading": "Bộ Kệ",
    "displayReadingEn": "Radical 58 · Snout",
    "displayReadingFr": "Clé 58 · Groin",
    "displayReadingEs": "Radical 58 · Hocico",
    "displayReadingKo": "부수 58 · 돼지머리 계",
    "readings": [
      "Kệ"
    ],
    "meaning": "Đầu con nhím / lợn",
    "meaningEn": "Pig's snout / hedgehog head",
    "meaningFr": "Tête de porc / hérisson",
    "meaningEs": "Cabeza de cerdo / erizo",
    "meaningKo": "돼지 머리",
    "examples": "帰, 録, 当, 雪",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1059,
    "kanji": "彡",
    "displayReading": "Bộ Sam",
    "displayReadingEn": "Radical 59 · Bristle",
    "displayReadingFr": "Clé 59 · Poils",
    "displayReadingEs": "Radical 59 · Cerdas / Plumas",
    "displayReadingKo": "부수 59 · 터럭 삼",
    "readings": [
      "Sam"
    ],
    "meaning": "Lông tóc, hoa văn, nét trang trí",
    "meaningEn": "Hair, feathers, pattern",
    "meaningFr": "Poils, plumes, ornement",
    "meaningEs": "Pelo, plumas, adorno",
    "meaningKo": "긴 털, 무늬, 장식",
    "examples": "形, 影, 彩, 彫",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1060,
    "kanji": "彳",
    "displayReading": "Bộ Xích",
    "displayReadingEn": "Radical 60 · Step",
    "displayReadingFr": "Clé 60 · Petit pas",
    "displayReadingEs": "Radical 60 · Paso corto",
    "displayReadingKo": "부수 60 · 두인변 척",
    "readings": [
      "Xích"
    ],
    "meaning": "Bước chân trái, đi lại",
    "meaningEn": "Left step, walk",
    "meaningFr": "Pas du pied gauche, marcher",
    "meaningEs": "Paso con el pie izquierdo, caminar",
    "meaningKo": "조금 걷다, 길",
    "examples": "行, 待, 後, 彼, 役",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1061,
    "kanji": "心 (忄, ⺗)",
    "displayReading": "Bộ Tâm",
    "displayReadingEn": "Radical 61 · Heart",
    "displayReadingFr": "Clé 61 · Cœur",
    "displayReadingEs": "Radical 61 · Corazón",
    "displayReadingKo": "부수 61 · 마음 심",
    "readings": [
      "Tâm"
    ],
    "meaning": "Trái tim, tâm trí, cảm xúc",
    "meaningEn": "Heart, mind, emotion",
    "meaningFr": "Cœur, esprit, émotion",
    "meaningEs": "Corazón, mente, emoción",
    "meaningKo": "마음, 심장, 감정",
    "examples": "心, 思, 忙, 怖, 情",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1062,
    "kanji": "戈",
    "displayReading": "Bộ Qua",
    "displayReadingEn": "Radical 62 · Halberd",
    "displayReadingFr": "Clé 62 · Hallebarde",
    "displayReadingEs": "Radical 62 · Alabarda",
    "displayReadingKo": "부수 62 · 창 과",
    "readings": [
      "Qua"
    ],
    "meaning": "Cây qua (vũ khí cổ)",
    "meaningEn": "Halberd (ancient spear-axe)",
    "meaningFr": "Hallebarde, lance ancienne",
    "meaningEs": "Alabarda, lanza antigua",
    "meaningKo": "창, 무기",
    "examples": "戦, 成, 我, 戒, 戯",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1063,
    "kanji": "戸 (戶)",
    "displayReading": "Bộ Hộ",
    "displayReadingEn": "Radical 63 · Door",
    "displayReadingFr": "Clé 63 · Porte",
    "displayReadingEs": "Radical 63 · Puerta",
    "displayReadingKo": "부수 63 · 지게문 호",
    "readings": [
      "Hộ"
    ],
    "meaning": "Cửa một cánh, hộ gia đình",
    "meaningEn": "Single-leaf door, household",
    "meaningFr": "Porte à un battant, foyer",
    "meaningEs": "Puerta de una hoja, hogar",
    "meaningKo": "외짝 문, 집, 가구",
    "examples": "戸, 所, 戻, 房, 扇",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1064,
    "kanji": "手 (扌, 龵)",
    "displayReading": "Bộ Thủ",
    "displayReadingEn": "Radical 64 · Hand",
    "displayReadingFr": "Clé 64 · Main",
    "displayReadingEs": "Radical 64 · Mano",
    "displayReadingKo": "부수 64 · 손 수",
    "readings": [
      "Thủ"
    ],
    "meaning": "Bàn tay, hành động bằng tay",
    "meaningEn": "Hand, manual action",
    "meaningFr": "Main, action manuelle",
    "meaningEs": "Mano, acción manual",
    "meaningKo": "손, 손동작",
    "examples": "手, 持, 打, 押, 投",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1065,
    "kanji": "支",
    "displayReading": "Bộ Chi",
    "displayReadingEn": "Radical 65 · Branch",
    "displayReadingFr": "Clé 65 · Branche",
    "displayReadingEs": "Radical 65 · Rama",
    "displayReadingKo": "부수 65 · 지탱할 지",
    "readings": [
      "Chi"
    ],
    "meaning": "Cành nhánh, chống đỡ",
    "meaningEn": "Branch, support",
    "meaningFr": "Branche, soutenir",
    "meaningEs": "Rama, sostener",
    "meaningKo": "가지, 지탱하다",
    "examples": "支, 技, 枝",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1066,
    "kanji": "攴 (攵)",
    "displayReading": "Bộ Phộc",
    "displayReadingEn": "Radical 66 · Rap",
    "displayReadingFr": "Clé 66 · Frapper",
    "displayReadingEs": "Radical 66 · Golpear",
    "displayReadingKo": "부수 66 · 칠 복",
    "readings": [
      "Phộc"
    ],
    "meaning": "Đánh khẽ, gõ",
    "meaningEn": "Tap lightly, strike",
    "meaningFr": "Tapoter, frapper légèrement",
    "meaningEs": "Dar golpecitos, golpear",
    "meaningKo": "가볍게 치다, 두드리다",
    "examples": "教, 政, 放, 数, 改",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1067,
    "kanji": "文",
    "displayReading": "Bộ Văn",
    "displayReadingEn": "Radical 67 · Script",
    "displayReadingFr": "Clé 67 · Écriture",
    "displayReadingEs": "Radical 67 · Escritura",
    "displayReadingKo": "부수 67 · 글월 문",
    "readings": [
      "Văn"
    ],
    "meaning": "Văn chương, chữ viết, hoa văn",
    "meaningEn": "Literature, writing, pattern",
    "meaningFr": "Texte, lettres, motif",
    "meaningEs": "Texto, letras, diseño",
    "meaningKo": "글, 문자, 무늬",
    "examples": "文, 対, 紋, 斎",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1068,
    "kanji": "斗",
    "displayReading": "Bộ Đẩu",
    "displayReadingEn": "Radical 68 · Dipper",
    "displayReadingFr": "Clé 68 · Boisseau",
    "displayReadingEs": "Radical 68 · Cucharón",
    "displayReadingKo": "부수 68 · 말 두",
    "readings": [
      "Đẩu"
    ],
    "meaning": "Cái đấu (dụng cụ đong lường)",
    "meaningEn": "Dipper, ladle (measuring unit)",
    "meaningFr": "Louche, mesure à grain",
    "meaningEs": "Cucharón, medida de grano",
    "meaningKo": "말(곡식 단위), 국자",
    "examples": "料, 斜, 斡",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1069,
    "kanji": "斤",
    "displayReading": "Bộ Cân",
    "displayReadingEn": "Radical 69 · Axe",
    "displayReadingFr": "Clé 69 · Hache",
    "displayReadingEs": "Radical 69 · Hacha",
    "displayReadingKo": "부수 69 · 도끼 근",
    "readings": [
      "Cân"
    ],
    "meaning": "Cái rìu, đơn vị cân",
    "meaningEn": "Axe, unit of weight",
    "meaningFr": "Hache, livre (poids)",
    "meaningEs": "Hacha, libra (peso)",
    "meaningKo": "도끼, 근(무게 단위)",
    "examples": "新, 近, 断, 折, 所",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1070,
    "kanji": "方",
    "displayReading": "Bộ Phương",
    "displayReadingEn": "Radical 70 · Square",
    "displayReadingFr": "Clé 70 · Direction",
    "displayReadingEs": "Radical 70 · Dirección",
    "displayReadingKo": "부수 70 · 모 방",
    "readings": [
      "Phương"
    ],
    "meaning": "Phương hướng, vuông vức",
    "meaningEn": "Direction, square",
    "meaningFr": "Direction, carré",
    "meaningEs": "Dirección, cuadrado",
    "meaningKo": "방향, 네모",
    "examples": "方, 旅, 族, 旗, 放",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1071,
    "kanji": "无 (旡)",
    "displayReading": "Bộ Vô",
    "displayReadingEn": "Radical 71 · Not",
    "displayReadingFr": "Clé 71 · Sans",
    "displayReadingEs": "Radical 71 · Sin",
    "displayReadingKo": "부수 71 · 없을 무",
    "readings": [
      "Vô"
    ],
    "meaning": "Không có",
    "meaningEn": "Not, have not",
    "meaningFr": "Ne pas avoir, néant",
    "meaningEs": "No tener, nada",
    "meaningKo": "없다",
    "examples": "既, 無",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1072,
    "kanji": "日",
    "displayReading": "Bộ Nhật",
    "displayReadingEn": "Radical 72 · Sun",
    "displayReadingFr": "Clé 72 · Soleil",
    "displayReadingEs": "Radical 72 · Sol",
    "displayReadingKo": "부수 72 · 날 일",
    "readings": [
      "Nhật"
    ],
    "meaning": "Mặt trời, ngày, thời gian",
    "meaningEn": "Sun, day, time",
    "meaningFr": "Soleil, jour, temps",
    "meaningEs": "Sol, día, tiempo",
    "meaningKo": "해, 날, 시간",
    "examples": "日, 明, 時, 晴, 昨",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1073,
    "kanji": "曰",
    "displayReading": "Bộ Viết",
    "displayReadingEn": "Radical 73 · Say",
    "displayReadingFr": "Clé 73 · Dire",
    "displayReadingEs": "Radical 73 · Decir",
    "displayReadingKo": "부수 73 · 가로 왈",
    "readings": [
      "Viết"
    ],
    "meaning": "Nói rằng",
    "meaningEn": "Say, speak",
    "meaningFr": "Dire, parler",
    "meaningEs": "Decir, hablar",
    "meaningKo": "말하다",
    "examples": "書, 最, 曲, 更",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1074,
    "kanji": "月",
    "displayReading": "Bộ Nguyệt",
    "displayReadingEn": "Radical 74 · Moon",
    "displayReadingFr": "Clé 74 · Lune",
    "displayReadingEs": "Radical 74 · Luna",
    "displayReadingKo": "부수 74 · 달 월",
    "readings": [
      "Nguyệt"
    ],
    "meaning": "Mặt trăng, tháng (hoặc bộ Nhục - thịt)",
    "meaningEn": "Moon, month (or flesh)",
    "meaningFr": "Lune, mois (ou chair)",
    "meaningEs": "Luna, mes (o carne)",
    "meaningKo": "달, 세월 (또는 고기 육)",
    "examples": "月, 朝, 期, 有, 望",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1075,
    "kanji": "木",
    "displayReading": "Bộ Mộc",
    "displayReadingEn": "Radical 75 · Tree",
    "displayReadingFr": "Clé 75 · Arbre",
    "displayReadingEs": "Radical 75 · Árbol",
    "displayReadingKo": "부수 75 · 나무 목",
    "readings": [
      "Mộc"
    ],
    "meaning": "Cây cối, gỗ",
    "meaningEn": "Tree, wood",
    "meaningFr": "Arbre, bois",
    "meaningEs": "Árbol, madera",
    "meaningKo": "나무, 목재",
    "examples": "木, 林, 森, 机, 本",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1076,
    "kanji": "欠",
    "displayReading": "Bộ Khiếm",
    "displayReadingEn": "Radical 76 · Lack",
    "displayReadingFr": "Clé 76 · Bâiller",
    "displayReadingEs": "Radical 76 · Bostezar",
    "displayReadingKo": "부수 76 · 하품 흠",
    "readings": [
      "Khiếm"
    ],
    "meaning": "Khiếm khuyết, ngáp, thiếu thốn",
    "meaningEn": "Lack, yawn, owe",
    "meaningFr": "Manquer, bâiller, devoir",
    "meaningEs": "Faltar, bostezar, deber",
    "meaningKo": "하품하다, 모자라다",
    "examples": "欠, 次, 歌, 飲, 欲",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1077,
    "kanji": "止",
    "displayReading": "Bộ Chỉ",
    "displayReadingEn": "Radical 77 · Stop",
    "displayReadingFr": "Clé 77 · Arrêter",
    "displayReadingEs": "Radical 77 · Detenerse",
    "displayReadingKo": "부수 77 · 그칠 지",
    "readings": [
      "Chỉ"
    ],
    "meaning": "Dừng lại, bàn chân",
    "meaningEn": "Stop, foot",
    "meaningFr": "S'arrêter, empreinte de pied",
    "meaningEs": "Detenerse, huella del pie",
    "meaningKo": "멈추다, 발자국",
    "examples": "止, 正, 歩, 武, 歳",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1078,
    "kanji": "歹 (歺)",
    "displayReading": "Bộ Đãi",
    "displayReadingEn": "Radical 78 · Death",
    "displayReadingFr": "Clé 78 · Os brisé",
    "displayReadingEs": "Radical 78 · Hueso roto",
    "displayReadingKo": "부수 78 · 죽을 사 / 뼈앙상할 알",
    "readings": [
      "Đãi"
    ],
    "meaning": "Xương tàn, chết chóc",
    "meaningEn": "Broken bones, death",
    "meaningFr": "Os brisé, mort, mauvais",
    "meaningEs": "Hueso roto, muerte, malo",
    "meaningKo": "부서진 뼈, 죽음",
    "examples": "死, 残, 殖, 殊",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1079,
    "kanji": "殳",
    "displayReading": "Bộ Thù",
    "displayReadingEn": "Radical 79 · Weapon",
    "displayReadingFr": "Clé 79 · Arme",
    "displayReadingEs": "Radical 79 · Arma",
    "displayReadingKo": "부수 79 · 갖은등글월 수",
    "readings": [
      "Thù"
    ],
    "meaning": "Binh khí dài, đánh đập",
    "meaningEn": "Long polearm, strike",
    "meaningFr": "Bâton de combat, frapper",
    "meaningEs": "Vara de combate, golpear",
    "meaningKo": "창 자루, 치다",
    "examples": "段, 殺, 殿, 設, 役",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1080,
    "kanji": "毋 (母)",
    "displayReading": "Bộ Vô / Mẫu",
    "displayReadingEn": "Radical 80 · Do not",
    "displayReadingFr": "Clé 80 · Ne pas / Mère",
    "displayReadingEs": "Radical 80 · No / Madre",
    "displayReadingKo": "부수 80 · 말 무",
    "readings": [
      "Vô / Mẫu"
    ],
    "meaning": "Chớ, đừng / Người mẹ",
    "meaningEn": "Do not / Mother",
    "meaningFr": "Interdiction / Mère",
    "meaningEs": "Prohibición / Madre",
    "meaningKo": "하지 말다, 금지 / 어머니",
    "examples": "母, 毎, 毒, 貫",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1081,
    "kanji": "比",
    "displayReading": "Bộ Tỷ",
    "displayReadingEn": "Radical 81 · Compare",
    "displayReadingFr": "Clé 81 · Comparer",
    "displayReadingEs": "Radical 81 · Comparar",
    "displayReadingKo": "부수 81 · 견줄 비",
    "readings": [
      "Tỷ"
    ],
    "meaning": "So sánh, kề bên",
    "meaningEn": "Compare, side by side",
    "meaningFr": "Comparer, côte à côte",
    "meaningEs": "Comparar, lado a lado",
    "meaningKo": "비교하다, 나란히 서다",
    "examples": "比, 皆, 昆",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1082,
    "kanji": "毛",
    "displayReading": "Bộ Mao",
    "displayReadingEn": "Radical 82 · Fur",
    "displayReadingFr": "Clé 82 · Fourrure",
    "displayReadingEs": "Radical 82 · Pelaje",
    "displayReadingKo": "부수 82 · 터럭 모",
    "readings": [
      "Mao"
    ],
    "meaning": "Lông, tóc",
    "meaningEn": "Fur, hair",
    "meaningFr": "Poil, fourrure, laine",
    "meaningEs": "Pelo, pelaje, lana",
    "meaningKo": "털, 깃털",
    "examples": "毛, 尾, 筆, 耗",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1083,
    "kanji": "氏",
    "displayReading": "Bộ Thị",
    "displayReadingEn": "Radical 83 · Clan",
    "displayReadingFr": "Clé 83 · Clan",
    "displayReadingEs": "Radical 83 · Clan",
    "displayReadingKo": "부수 83 · 각시 씨",
    "readings": [
      "Thị"
    ],
    "meaning": "Họ, dòng tộc",
    "meaningEn": "Clan, family name",
    "meaningFr": "Clan, nom de famille",
    "meaningEs": "Clan, apellido",
    "meaningKo": "성씨, 가문",
    "examples": "氏, 民, 紙",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1084,
    "kanji": "气",
    "displayReading": "Bộ Khí",
    "displayReadingEn": "Radical 84 · Steam",
    "displayReadingFr": "Clé 84 · Vapeur",
    "displayReadingEs": "Radical 84 · Vapor",
    "displayReadingKo": "부수 84 · 기운 기",
    "readings": [
      "Khí"
    ],
    "meaning": "Hơi, không khí",
    "meaningEn": "Steam, air, breath",
    "meaningFr": "Vapeur, air, souffle",
    "meaningEs": "Vapor, aire, aliento",
    "meaningKo": "기운, 수증기, 공기",
    "examples": "気, 汽, 雰",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1085,
    "kanji": "水 (氵, 氺)",
    "displayReading": "Bộ Thủy",
    "displayReadingEn": "Radical 85 · Water",
    "displayReadingFr": "Clé 85 · Eau",
    "displayReadingEs": "Radical 85 · Agua",
    "displayReadingKo": "부수 85 · 물 수",
    "readings": [
      "Thủy"
    ],
    "meaning": "Nước, chất lỏng",
    "meaningEn": "Water, liquid",
    "meaningFr": "Eau, liquide",
    "meaningEs": "Agua, líquido",
    "meaningKo": "물, 액체",
    "examples": "水, 海, 泳, 洗, 池",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1086,
    "kanji": "火 (灬)",
    "displayReading": "Bộ Hỏa",
    "displayReadingEn": "Radical 86 · Fire",
    "displayReadingFr": "Clé 86 · Feu",
    "displayReadingEs": "Radical 86 · Fuego",
    "displayReadingKo": "부수 86 · 불 화",
    "readings": [
      "Hỏa"
    ],
    "meaning": "Lửa, nhiệt độ",
    "meaningEn": "Fire, heat",
    "meaningFr": "Feu, flamme, chaleur",
    "meaningEs": "Fuego, llama, calor",
    "meaningKo": "불, 열기",
    "examples": "火, 焼, 熱, 燃, 煙",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1087,
    "kanji": "爪 (爫)",
    "displayReading": "Bộ Trảo",
    "displayReadingEn": "Radical 87 · Claw",
    "displayReadingFr": "Clé 87 · Griffe",
    "displayReadingEs": "Radical 87 · Garra",
    "displayReadingKo": "부수 87 · 손톱 조",
    "readings": [
      "Trảo"
    ],
    "meaning": "Móng vuốt",
    "meaningEn": "Claw, nail",
    "meaningFr": "Griffe, ongle",
    "meaningEs": "Garra, uña",
    "meaningKo": "손톱, 발톱",
    "examples": "爪, 愛, 受, 採, 争",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1088,
    "kanji": "父",
    "displayReading": "Bộ Phụ",
    "displayReadingEn": "Radical 88 · Father",
    "displayReadingFr": "Clé 88 · Père",
    "displayReadingEs": "Radical 88 · Padre",
    "displayReadingKo": "부수 88 · 아비 부",
    "readings": [
      "Phụ"
    ],
    "meaning": "Người cha",
    "meaningEn": "Father",
    "meaningFr": "Père",
    "meaningEs": "Padre",
    "meaningKo": "아버지",
    "examples": "父, 釜, 爺",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1089,
    "kanji": "爻",
    "displayReading": "Bộ Hào",
    "displayReadingEn": "Radical 89 · Double X",
    "displayReadingFr": "Clé 89 · Entrecroiser",
    "displayReadingEs": "Radical 89 · Entrecruzar",
    "displayReadingKo": "부수 89 · 점괘 효",
    "readings": [
      "Hào"
    ],
    "meaning": "Hào trong Kinh Dịch, đan xen",
    "meaningEn": "Trigram lines, intertwine",
    "meaningFr": "Lignes croisées, mêler",
    "meaningEs": "Líneas cruzadas, mezclar",
    "meaningKo": "사귀다, 엇갈리다",
    "examples": "爽, 爾",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1090,
    "kanji": "爿 (丬)",
    "displayReading": "Bộ Tường",
    "displayReadingEn": "Radical 90 · Half tree trunk",
    "displayReadingFr": "Clé 90 · Planche",
    "displayReadingEs": "Radical 90 · Tablón",
    "displayReadingKo": "부수 90 · 장수 장 / 조각 널 장",
    "readings": [
      "Tường"
    ],
    "meaning": "Mảnh gỗ, cái giường",
    "meaningEn": "Split wood, bed",
    "meaningFr": "Bois fendu, lit",
    "meaningEs": "Madera partida, cama",
    "meaningKo": "쪼갠 나무, 침상",
    "examples": "壮, 状, 将, 装",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1091,
    "kanji": "片",
    "displayReading": "Bộ Phiến",
    "displayReadingEn": "Radical 91 · Slice",
    "displayReadingFr": "Clé 91 · Tranche",
    "displayReadingEs": "Radical 91 · Lámina",
    "displayReadingKo": "부수 91 · 조각 편",
    "readings": [
      "Phiến"
    ],
    "meaning": "Mảnh, tấm, một phía",
    "meaningEn": "Slice, piece, one side",
    "meaningFr": "Planche, feuillet, morceau",
    "meaningEs": "Tabla, lámina, trozo",
    "meaningKo": "나무 조각, 판",
    "examples": "片, 版, 牌",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1092,
    "kanji": "牙",
    "displayReading": "Bộ Nha",
    "displayReadingEn": "Radical 92 · Fang",
    "displayReadingFr": "Clé 92 · Croc",
    "displayReadingEs": "Radical 92 · Colmillo",
    "displayReadingKo": "부수 92 · 어금니 아",
    "readings": [
      "Nha"
    ],
    "meaning": "Răng nanh",
    "meaningEn": "Fang, tusk",
    "meaningFr": "Croc, défense",
    "meaningEs": "Colmillo",
    "meaningKo": "어금니, 송곳니",
    "examples": "牙, 芽, 邪",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1093,
    "kanji": "牛 (牜)",
    "displayReading": "Bộ Ngưu",
    "displayReadingEn": "Radical 93 · Cow",
    "displayReadingFr": "Clé 93 · Bœuf",
    "displayReadingEs": "Radical 93 · Buey",
    "displayReadingKo": "부수 93 · 소 우",
    "readings": [
      "Ngưu"
    ],
    "meaning": "Con trâu, con bò",
    "meaningEn": "Cow, ox, cattle",
    "meaningFr": "Vache, bœuf, bétail",
    "meaningEs": "Vaca, buey, ganado",
    "meaningKo": "소, 가축",
    "examples": "牛, 物, 特, 牧, 犠",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1094,
    "kanji": "犬 (犭)",
    "displayReading": "Bộ Khuyển",
    "displayReadingEn": "Radical 94 · Dog",
    "displayReadingFr": "Clé 94 · Chien",
    "displayReadingEs": "Radical 94 · Perro",
    "displayReadingKo": "부수 94 · 개 견",
    "readings": [
      "Khuyển"
    ],
    "meaning": "Con chó, loài thú",
    "meaningEn": "Dog, beast",
    "meaningFr": "Chien, fauve",
    "meaningEs": "Perro, fiera",
    "meaningKo": "개, 짐승",
    "examples": "犬, 猫, 独, 犯, 狂",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1095,
    "kanji": "玄",
    "displayReading": "Bộ Huyền",
    "displayReadingEn": "Radical 95 · Profound",
    "displayReadingFr": "Clé 95 · Mystérieux",
    "displayReadingEs": "Radical 95 · Misterioso",
    "displayReadingKo": "부수 95 · 검을 현",
    "readings": [
      "Huyền"
    ],
    "meaning": "Màu đen huyền, huyền bí",
    "meaningEn": "Dark black, mysterious",
    "meaningFr": "Noir profond, mystérieux",
    "meaningEs": "Negro profundo, misterioso",
    "meaningKo": "검다, 현묘하다",
    "examples": "玄, 率, 弦",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1096,
    "kanji": "玉 (王)",
    "displayReading": "Bộ Ngọc",
    "displayReadingEn": "Radical 96 · Jade",
    "displayReadingFr": "Clé 96 · Jade",
    "displayReadingEs": "Radical 96 · Jade",
    "displayReadingKo": "부수 96 · 구슬 옥",
    "readings": [
      "Ngọc"
    ],
    "meaning": "Đá quý, ngọc báu",
    "meaningEn": "Jade, gem, jewel",
    "meaningFr": "Jade, pierre précieuse",
    "meaningEs": "Jade, piedra preciosa",
    "meaningKo": "옥, 보석",
    "examples": "玉, 王, 現, 理, 球",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1097,
    "kanji": "瓜",
    "displayReading": "Bộ Qua",
    "displayReadingEn": "Radical 97 · Melon",
    "displayReadingFr": "Clé 97 · Melon",
    "displayReadingEs": "Radical 97 · Melón",
    "displayReadingKo": "부수 97 · 오이 과",
    "readings": [
      "Qua"
    ],
    "meaning": "Quả dưa",
    "meaningEn": "Melon, gourd",
    "meaningFr": "Melon, courge",
    "meaningEs": "Melón, calabaza",
    "meaningKo": "오이, 참외, 박과",
    "examples": "瓜, 孤, 弧",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1098,
    "kanji": "瓦",
    "displayReading": "Bộ Ngõa",
    "displayReadingEn": "Radical 98 · Tile",
    "displayReadingFr": "Clé 98 · Tuile",
    "displayReadingEs": "Radical 98 · Teja",
    "displayReadingKo": "부수 98 · 기와 와",
    "readings": [
      "Ngõa"
    ],
    "meaning": "Ngói lợp nhà, đồ gốm",
    "meaningEn": "Roof tile, pottery",
    "meaningFr": "Tuile, céramique",
    "meaningEs": "Teja, cerámica",
    "meaningKo": "기와, 도자기",
    "examples": "瓦, 瓶, 瓷",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1099,
    "kanji": "甘",
    "displayReading": "Bộ Cam",
    "displayReadingEn": "Radical 99 · Sweet",
    "displayReadingFr": "Clé 99 · Doux",
    "displayReadingEs": "Radical 99 · Dulce",
    "displayReadingKo": "부수 99 · 달 감",
    "readings": [
      "Cam"
    ],
    "meaning": "Ngọt ngào",
    "meaningEn": "Sweet",
    "meaningFr": "Sucré, doux",
    "meaningEs": "Dulce, sabroso",
    "meaningKo": "달다, 맛있다",
    "examples": "甘, 甚, 某",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1100,
    "kanji": "生",
    "displayReading": "Bộ Sinh",
    "displayReadingEn": "Radical 100 · Life",
    "displayReadingFr": "Clé 100 · Vie",
    "displayReadingEs": "Radical 100 · Vida",
    "displayReadingKo": "부수 100 · 날 생",
    "readings": [
      "Sinh"
    ],
    "meaning": "Sinh sống, sinh ra, tươi sống",
    "meaningEn": "Life, birth, raw",
    "meaningFr": "Naître, vivre, cru",
    "meaningEs": "Nacer, vivir, crudo",
    "meaningKo": "태어나다, 살다, 날것",
    "examples": "生, 産, 星, 性",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1101,
    "kanji": "用",
    "displayReading": "Bộ Dụng",
    "displayReadingEn": "Radical 101 · Use",
    "displayReadingFr": "Clé 101 · Utiliser",
    "displayReadingEs": "Radical 101 · Usar",
    "displayReadingKo": "부수 101 · 쓸 용",
    "readings": [
      "Dụng"
    ],
    "meaning": "Sử dụng, công dụng",
    "meaningEn": "Use, utility",
    "meaningFr": "Utiliser, usage",
    "meaningEs": "Usar, empleo",
    "meaningKo": "쓰다, 사용하다",
    "examples": "用, 庸, 備",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1102,
    "kanji": "田",
    "displayReading": "Bộ Điền",
    "displayReadingEn": "Radical 102 · Field",
    "displayReadingFr": "Clé 102 · Rizière",
    "displayReadingEs": "Radical 102 · Arrozal",
    "displayReadingKo": "부수 102 · 밭 전",
    "readings": [
      "Điền"
    ],
    "meaning": "Ruộng đồng",
    "meaningEn": "Rice field, farmland",
    "meaningFr": "Rizière, champ",
    "meaningEs": "Arrozal, campo de cultivo",
    "meaningKo": "밭, 논",
    "examples": "田, 男, 町, 界, 番",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1103,
    "kanji": "疋 (⺪)",
    "displayReading": "Bộ Sơ (Thất)",
    "displayReadingEn": "Radical 103 · Bolt of cloth",
    "displayReadingFr": "Clé 103 · Rouleau d'étoffe",
    "displayReadingEs": "Radical 103 · Rollo de tela",
    "displayReadingKo": "부수 103 · 짝 필",
    "readings": [
      "Sơ (Thất)"
    ],
    "meaning": "Đơn vị đo vải, bàn chân",
    "meaningEn": "Bolt of cloth, foot",
    "meaningFr": "Rouleau de tissu, pied",
    "meaningEs": "Rollo de tela, pie",
    "meaningKo": "옷감 한 필, 발",
    "examples": "疎, 疑, 楚",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1104,
    "kanji": "疒",
    "displayReading": "Bộ Nạch",
    "displayReadingEn": "Radical 104 · Sickness",
    "displayReadingFr": "Clé 104 · Maladie",
    "displayReadingEs": "Radical 104 · Enfermedad",
    "displayReadingKo": "부수 104 · 병질엄 녁",
    "readings": [
      "Nạch"
    ],
    "meaning": "Bệnh tật, đau ốm",
    "meaningEn": "Sickness, illness",
    "meaningFr": "Maladie, douleur",
    "meaningEs": "Enfermedad, dolor",
    "meaningKo": "병, 질병, 아프다",
    "examples": "病, 痛, 疲, 症, 療",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1105,
    "kanji": "癶",
    "displayReading": "Bộ Bát",
    "displayReadingEn": "Radical 105 · Dotted tent",
    "displayReadingFr": "Clé 105 · Pas écartés",
    "displayReadingEs": "Radical 105 · Pasos abiertos",
    "displayReadingKo": "부수 105 · 필발머리 발",
    "readings": [
      "Bát"
    ],
    "meaning": "Hai bàn chân bước ngược nhau",
    "meaningEn": "Feet stepping apart",
    "meaningFr": "Deux pieds opposés, monter",
    "meaningEs": "Dos pies opuestos, subir",
    "meaningKo": "두 발을 벌리다, 오르다",
    "examples": "発, 登",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1106,
    "kanji": "白",
    "displayReading": "Bộ Bạch",
    "displayReadingEn": "Radical 106 · White",
    "displayReadingFr": "Clé 106 · Blanc",
    "displayReadingEs": "Radical 106 · Blanco",
    "displayReadingKo": "부수 106 · 흰 백",
    "readings": [
      "Bạch"
    ],
    "meaning": "Màu trắng, rõ ràng",
    "meaningEn": "White, clear",
    "meaningFr": "Blanc, clair, pur",
    "meaningEs": "Blanco, claro, puro",
    "meaningKo": "희다, 밝다",
    "examples": "白, 百, 的, 皇, 皆",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1107,
    "kanji": "皮",
    "displayReading": "Bộ Bì",
    "displayReadingEn": "Radical 107 · Skin",
    "displayReadingFr": "Clé 107 · Peau",
    "displayReadingEs": "Radical 107 · Piel",
    "displayReadingKo": "부수 107 · 가죽 피",
    "readings": [
      "Bì"
    ],
    "meaning": "Da, vỏ ngoài",
    "meaningEn": "Skin, hide, bark",
    "meaningFr": "Peau, cuir, écorce",
    "meaningEs": "Piel, cuero, corteza",
    "meaningKo": "가죽, 껍질",
    "examples": "皮, 波, 破, 被",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1108,
    "kanji": "皿",
    "displayReading": "Bộ Mãnh",
    "displayReadingEn": "Radical 108 · Dish",
    "displayReadingFr": "Clé 108 · Plat",
    "displayReadingEs": "Radical 108 · Plato",
    "displayReadingKo": "부수 108 · 그릇 명",
    "readings": [
      "Mãnh"
    ],
    "meaning": "Cái đĩa, bát, đồ đựng",
    "meaningEn": "Dish, plate, vessel",
    "meaningFr": "Assiette, écuelle, récipient",
    "meaningEs": "Plato, cuenco, recipiente",
    "meaningKo": "그릇, 접시",
    "examples": "皿, 血, 盆, 盛, 監",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1109,
    "kanji": "目",
    "displayReading": "Bộ Mục",
    "displayReadingEn": "Radical 109 · Eye",
    "displayReadingFr": "Clé 109 · Œil",
    "displayReadingEs": "Radical 109 · Ojo",
    "displayReadingKo": "부수 109 · 눈 목",
    "readings": [
      "Mục"
    ],
    "meaning": "Con mắt, nhìn ngắm",
    "meaningEn": "Eye, look",
    "meaningFr": "Œil, regarder",
    "meaningEs": "Ojo, mirar",
    "meaningKo": "눈, 보다",
    "examples": "目, 見, 眠, 相, 省",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1110,
    "kanji": "矛",
    "displayReading": "Bộ Mâu",
    "displayReadingEn": "Radical 110 · Spear",
    "displayReadingFr": "Clé 110 · Lance",
    "displayReadingEs": "Radical 110 · Lanza",
    "displayReadingKo": "부수 110 · 창 모",
    "readings": [
      "Mâu"
    ],
    "meaning": "Cây giáo, cây mâu",
    "meaningEn": "Spear, lance",
    "meaningFr": "Lance, pique",
    "meaningEs": "Lanza, pica",
    "meaningKo": "창, 무기",
    "examples": "矛, 柔, 務, 霧",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1111,
    "kanji": "矢",
    "displayReading": "Bộ Thỉ",
    "displayReadingEn": "Radical 111 · Arrow",
    "displayReadingFr": "Clé 111 · Flèche",
    "displayReadingEs": "Radical 111 · Flecha",
    "displayReadingKo": "부수 111 · 화살 시",
    "readings": [
      "Thỉ"
    ],
    "meaning": "Mũi tên",
    "meaningEn": "Arrow, dart",
    "meaningFr": "Flèche",
    "meaningEs": "Flecha",
    "meaningKo": "화살",
    "examples": "矢, 知, 短, 族, 矯",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1112,
    "kanji": "石",
    "displayReading": "Bộ Thạch",
    "displayReadingEn": "Radical 112 · Stone",
    "displayReadingFr": "Clé 112 · Pierre",
    "displayReadingEs": "Radical 112 · Piedra",
    "displayReadingKo": "부수 112 · 돌 석",
    "readings": [
      "Thạch"
    ],
    "meaning": "Đá, tảng đá",
    "meaningEn": "Stone, rock",
    "meaningFr": "Pierre, roche",
    "meaningEs": "Piedra, roca",
    "meaningKo": "돌, 바위",
    "examples": "石, 砂, 研, 破, 確",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1113,
    "kanji": "示 (礻)",
    "displayReading": "Bộ Thị",
    "displayReadingEn": "Radical 113 · Spirit",
    "displayReadingFr": "Clé 113 · Autel",
    "displayReadingEs": "Radical 113 · Altar",
    "displayReadingKo": "부수 113 · 보일 시",
    "readings": [
      "Thị"
    ],
    "meaning": "Thần linh, lễ tế, chỉ bảo",
    "meaningEn": "Spirit, altar, show",
    "meaningFr": "Esprit, rite, montrer",
    "meaningEs": "Espíritu, rito, mostrar",
    "meaningKo": "제단, 신, 보이다",
    "examples": "示, 社, 神, 福, 礼",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1114,
    "kanji": "禸",
    "displayReading": "Bộ Nhựu",
    "displayReadingEn": "Radical 114 · Track",
    "displayReadingFr": "Clé 114 · Empreinte",
    "displayReadingEs": "Radical 114 · Huella",
    "displayReadingKo": "부수 114 · 짐승발자국 유",
    "readings": [
      "Nhựu"
    ],
    "meaning": "Vết chân thú",
    "meaningEn": "Animal footprint",
    "meaningFr": "Trace de pas d'animal",
    "meaningEs": "Rastro de pata animal",
    "meaningKo": "짐승 발자국",
    "examples": "離, 禹, 禽",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1115,
    "kanji": "禾",
    "displayReading": "Bộ Hòa",
    "displayReadingEn": "Radical 115 · Grain",
    "displayReadingFr": "Clé 115 · Céréale",
    "displayReadingEs": "Radical 115 · Cereal",
    "displayReadingKo": "부수 115 · 벼 화",
    "readings": [
      "Hòa"
    ],
    "meaning": "Cây lúa, ngũ cốc",
    "meaningEn": "Grain, rice plant",
    "meaningFr": "Plant de riz, céréale",
    "meaningEs": "Planta de arroz, grano",
    "meaningKo": "벼, 곡식",
    "examples": "秋, 科, 移, 税, 秒",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1116,
    "kanji": "穴",
    "displayReading": "Bộ Huyệt",
    "displayReadingEn": "Radical 116 · Cave",
    "displayReadingFr": "Clé 116 · Grotte",
    "displayReadingEs": "Radical 116 · Cueva",
    "displayReadingKo": "부수 116 · 구멍 혈",
    "readings": [
      "Huyệt"
    ],
    "meaning": "Hang động, cái lỗ",
    "meaningEn": "Cave, hole",
    "meaningFr": "Grotte, trou, cavité",
    "meaningEs": "Cueva, agujero, cavidad",
    "meaningKo": "구멍, 동굴",
    "examples": "穴, 空, 窓, 突, 究",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1117,
    "kanji": "立",
    "displayReading": "Bộ Lập",
    "displayReadingEn": "Radical 117 · Stand",
    "displayReadingFr": "Clé 117 · Debout",
    "displayReadingEs": "Radical 117 · De pie",
    "displayReadingKo": "부수 117 · 설 립",
    "readings": [
      "Lập"
    ],
    "meaning": "Đứng thẳng, thiết lập",
    "meaningEn": "Stand upright, establish",
    "meaningFr": "Se tenir debout, établir",
    "meaningEs": "Estar de pie, establecer",
    "meaningKo": "서다, 세우다",
    "examples": "立, 音, 章, 童, 競",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1118,
    "kanji": "竹 (⺮)",
    "displayReading": "Bộ Trúc",
    "displayReadingEn": "Radical 118 · Bamboo",
    "displayReadingFr": "Clé 118 · Bambou",
    "displayReadingEs": "Radical 118 · Bambú",
    "displayReadingKo": "부수 118 · 대 죽",
    "readings": [
      "Trúc"
    ],
    "meaning": "Cây tre, cây trúc",
    "meaningEn": "Bamboo",
    "meaningFr": "Bambou",
    "meaningEs": "Bambú",
    "meaningKo": "대나무",
    "examples": "竹, 笑, 第, 答, 筆",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1119,
    "kanji": "米",
    "displayReading": "Bộ Mễ",
    "displayReadingEn": "Radical 119 · Rice",
    "displayReadingFr": "Clé 119 · Riz",
    "displayReadingEs": "Radical 119 · Arroz",
    "displayReadingKo": "부수 119 · 쌀 미",
    "readings": [
      "Mễ"
    ],
    "meaning": "Hạt gạo",
    "meaningEn": "Rice grain",
    "meaningFr": "Grain de riz",
    "meaningEs": "Grano de arroz",
    "meaningKo": "쌀, 곡물",
    "examples": "米, 料, 粉, 精, 糖",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1120,
    "kanji": "糸 (糹)",
    "displayReading": "Bộ Mịch",
    "displayReadingEn": "Radical 120 · Silk",
    "displayReadingFr": "Clé 120 · Fil de soie",
    "displayReadingEs": "Radical 120 · Hilo de seda",
    "displayReadingKo": "부수 120 · 실 사",
    "readings": [
      "Mịch"
    ],
    "meaning": "Sợi tơ, dây, sự liên kết",
    "meaningEn": "Silk thread, string, connection",
    "meaningFr": "Fil, soie, lien",
    "meaningEs": "Hilo, seda, cuerda",
    "meaningKo": "실, 비단, 줄",
    "examples": "糸, 紙, 絵, 結, 続",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1121,
    "kanji": "缶",
    "displayReading": "Bộ Phẫu",
    "displayReadingEn": "Radical 121 · Jar",
    "displayReadingFr": "Clé 121 · Jarre",
    "displayReadingEs": "Radical 121 · Tinaja",
    "displayReadingKo": "부수 121 · 장군 부",
    "readings": [
      "Phẫu"
    ],
    "meaning": "Cái bình sành, đồ gốm",
    "meaningEn": "Earthenware jar, pottery",
    "meaningFr": "Jarre en terre cuite",
    "meaningEs": "Vasija de barro",
    "meaningKo": "질그릇, 항아리",
    "examples": "缶, 欠, 陶, 鬱",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1122,
    "kanji": "网 (罒, ⺳)",
    "displayReading": "Bộ Võng",
    "displayReadingEn": "Radical 122 · Net",
    "displayReadingFr": "Clé 122 · Filet",
    "displayReadingEs": "Radical 122 · Red",
    "displayReadingKo": "부수 122 · 그물 망",
    "readings": [
      "Võng"
    ],
    "meaning": "Cái lưới",
    "meaningEn": "Net, web",
    "meaningFr": "Filet",
    "meaningEs": "Red",
    "meaningKo": "그물",
    "examples": "買, 置, 罪, 罰, 署",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1123,
    "kanji": "羊 (⺶, ⺷)",
    "displayReading": "Bộ Dương",
    "displayReadingEn": "Radical 123 · Sheep",
    "displayReadingFr": "Clé 123 · Mouton",
    "displayReadingEs": "Radical 123 · Oveja",
    "displayReadingKo": "부수 123 · 양 양",
    "readings": [
      "Dương"
    ],
    "meaning": "Con cừu, con dê",
    "meaningEn": "Sheep, goat",
    "meaningFr": "Mouton, chèvre",
    "meaningEs": "Oveja, cabra",
    "meaningKo": "양",
    "examples": "羊, 美, 着, 義, 群",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1124,
    "kanji": "羽",
    "displayReading": "Bộ Vũ",
    "displayReadingEn": "Radical 124 · Feather",
    "displayReadingFr": "Clé 124 · Plume",
    "displayReadingEs": "Radical 124 · Pluma",
    "displayReadingKo": "부수 124 · 깃 우",
    "readings": [
      "Vũ"
    ],
    "meaning": "Lông vũ, đôi cánh",
    "meaningEn": "Feather, wings",
    "meaningFr": "Plume, ailes",
    "meaningEs": "Pluma, alas",
    "meaningKo": "깃털, 날개",
    "examples": "羽, 習, 翌, 翻, 翼",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1125,
    "kanji": "老 (耂)",
    "displayReading": "Bộ Lão",
    "displayReadingEn": "Radical 125 · Old",
    "displayReadingFr": "Clé 125 · Vieux",
    "displayReadingEs": "Radical 125 · Anciano",
    "displayReadingKo": "부수 125 · 늙을 로",
    "readings": [
      "Lão"
    ],
    "meaning": "Già cả, người lớn tuổi",
    "meaningEn": "Old, elderly",
    "meaningFr": "Âgé, vieillard",
    "meaningEs": "Viejo, anciano",
    "meaningKo": "늙다, 노인",
    "examples": "老, 考, 者, 孝",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1126,
    "kanji": "而",
    "displayReading": "Bộ Nhi",
    "displayReadingEn": "Radical 126 · And",
    "displayReadingFr": "Clé 126 · Et pourtant",
    "displayReadingEs": "Radical 126 · Y sin embargo",
    "displayReadingKo": "부수 126 · 말이을 이",
    "readings": [
      "Nhi"
    ],
    "meaning": "Mà, râu cằm",
    "meaningEn": "And, beard",
    "meaningFr": "Et pourtant, barbe",
    "meaningEs": "Y sin embargo, barba",
    "meaningKo": "말을 잇다, 수염",
    "examples": "耐, 端, 需",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1127,
    "kanji": "耒",
    "displayReading": "Bộ Lỗi",
    "displayReadingEn": "Radical 127 · Plow",
    "displayReadingFr": "Clé 127 · Charrue",
    "displayReadingEs": "Radical 127 · Arado",
    "displayReadingKo": "부수 127 · 쟁기 뢰",
    "readings": [
      "Lỗi"
    ],
    "meaning": "Cái cày",
    "meaningEn": "Plow",
    "meaningFr": "Charrue, labourer",
    "meaningEs": "Arado, labrar",
    "meaningKo": "쟁기, 밭을 갈다",
    "examples": "耕, 耗, 籍",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1128,
    "kanji": "耳",
    "displayReading": "Bộ Nhĩ",
    "displayReadingEn": "Radical 128 · Ear",
    "displayReadingFr": "Clé 128 · Oreille",
    "displayReadingEs": "Radical 128 · Oreja",
    "displayReadingKo": "부수 128 · 귀 이",
    "readings": [
      "Nhĩ"
    ],
    "meaning": "Cái tai, lắng nghe",
    "meaningEn": "Ear, listen",
    "meaningFr": "Oreille, écouter",
    "meaningEs": "Oreja, escuchar",
    "meaningKo": "귀, 듣다",
    "examples": "耳, 聞, 聴, 職, 聖",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1129,
    "kanji": "聿 (⺻)",
    "displayReading": "Bộ Duật",
    "displayReadingEn": "Radical 129 · Brush",
    "displayReadingFr": "Clé 129 · Pinceau",
    "displayReadingEs": "Radical 129 · Pincel",
    "displayReadingKo": "부수 129 · 붓 율",
    "readings": [
      "Duật"
    ],
    "meaning": "Cây bút viết",
    "meaningEn": "Writing brush",
    "meaningFr": "Pinceau d'écriture",
    "meaningEs": "Pincel de escritura",
    "meaningKo": "붓",
    "examples": "筆, 書, 建, 律, 津",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1130,
    "kanji": "肉 (月)",
    "displayReading": "Bộ Nhục",
    "displayReadingEn": "Radical 130 · Meat",
    "displayReadingFr": "Clé 130 · Chair",
    "displayReadingEs": "Radical 130 · Carne",
    "displayReadingKo": "부수 130 · 고기 육",
    "readings": [
      "Nhục"
    ],
    "meaning": "Thịt, bộ phận cơ thể",
    "meaningEn": "Meat, flesh, body part",
    "meaningFr": "Viande, chair, organe",
    "meaningEs": "Carne, órgano del cuerpo",
    "meaningKo": "고기, 살, 신체 기관",
    "examples": "肉, 腕, 腹, 胸, 育",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1131,
    "kanji": "臣",
    "displayReading": "Bộ Thần",
    "displayReadingEn": "Radical 131 · Minister",
    "displayReadingFr": "Clé 131 · Ministre",
    "displayReadingEs": "Radical 131 · Ministro",
    "displayReadingKo": "부수 131 · 신하 신",
    "readings": [
      "Thần"
    ],
    "meaning": "Bề tôi, quan lại",
    "meaningEn": "Minister, official, retainer",
    "meaningFr": "Ministre, serviteur",
    "meaningEs": "Ministro, súbdito",
    "meaningKo": "신하",
    "examples": "臣, 臨, 堅, 賢",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1132,
    "kanji": "自",
    "displayReading": "Bộ Tự",
    "displayReadingEn": "Radical 132 · Self",
    "displayReadingFr": "Clé 132 · Soi",
    "displayReadingEs": "Radical 132 · Sí mismo",
    "displayReadingKo": "부수 132 · 스스로 자",
    "readings": [
      "Tự"
    ],
    "meaning": "Tự mình, cái mũi",
    "meaningEn": "Self, nose",
    "meaningFr": "Soi-même, nez",
    "meaningEs": "Uno mismo, nariz",
    "meaningKo": "스스로, 코",
    "examples": "自, 息, 臭, 鼻",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1133,
    "kanji": "至",
    "displayReading": "Bộ Chí",
    "displayReadingEn": "Radical 133 · Arrive",
    "displayReadingFr": "Clé 133 · Arriver",
    "displayReadingEs": "Radical 133 · Llegar",
    "displayReadingKo": "부수 133 · 이를 지",
    "readings": [
      "Chí"
    ],
    "meaning": "Đến nơi, cực điểm",
    "meaningEn": "Arrive, reach, extreme",
    "meaningFr": "Arriver, atteindre, sommet",
    "meaningEs": "Llegar, alcanzar, cumbre",
    "meaningKo": "이르다, 도달하다",
    "examples": "至, 到, 致, 室",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1134,
    "kanji": "臼",
    "displayReading": "Bộ Cữu",
    "displayReadingEn": "Radical 134 · Mortar",
    "displayReadingFr": "Clé 134 · Mortier",
    "displayReadingEs": "Radical 134 · Mortero",
    "displayReadingKo": "부수 134 · 절구 구",
    "readings": [
      "Cữu"
    ],
    "meaning": "Cái cối giã gạo",
    "meaningEn": "Mortar (for pounding rice)",
    "meaningFr": "Mortier à piler le riz",
    "meaningEs": "Mortero para moler grano",
    "meaningKo": "절구",
    "examples": "旧, 興, 与, 児",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1135,
    "kanji": "舌",
    "displayReading": "Bộ Thiệt",
    "displayReadingEn": "Radical 135 · Tongue",
    "displayReadingFr": "Clé 135 · Langue",
    "displayReadingEs": "Radical 135 · Lengua",
    "displayReadingKo": "부수 135 · 혀 설",
    "readings": [
      "Thiệt"
    ],
    "meaning": "Cái lưỡi",
    "meaningEn": "Tongue",
    "meaningFr": "Langue",
    "meaningEs": "Lengua",
    "meaningKo": "혀",
    "examples": "舌, 話, 辞, 乱, 舗",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1136,
    "kanji": "舛",
    "displayReading": "Bộ Suyễn",
    "displayReadingEn": "Radical 136 · Oppose",
    "displayReadingFr": "Clé 136 · Opposé",
    "displayReadingEs": "Radical 136 · Opuesto",
    "displayReadingKo": "부수 136 · 어그러질 천",
    "readings": [
      "Suyễn"
    ],
    "meaning": "Sai lầm, trái ngược",
    "meaningEn": "Err, oppose, contrary",
    "meaningFr": "Erreur, s'opposer",
    "meaningEs": "Error, oponerse",
    "meaningKo": "어그러지다, 반대 방향",
    "examples": "舞, 瞬, 隣",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1137,
    "kanji": "舟",
    "displayReading": "Bộ Chu",
    "displayReadingEn": "Radical 137 · Boat",
    "displayReadingFr": "Clé 137 · Bateau",
    "displayReadingEs": "Radical 137 · Barco",
    "displayReadingKo": "부수 137 · 배 주",
    "readings": [
      "Chu"
    ],
    "meaning": "Con thuyền",
    "meaningEn": "Boat, ship",
    "meaningFr": "Barque, navire",
    "meaningEs": "Barca, embarcación",
    "meaningKo": "배, 선박",
    "examples": "舟, 船, 航, 艦, 般",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1138,
    "kanji": "艮",
    "displayReading": "Bộ Cấn",
    "displayReadingEn": "Radical 138 · Stopping",
    "displayReadingFr": "Clé 138 · Arrêt",
    "displayReadingEs": "Radical 138 · Detener",
    "displayReadingKo": "부수 138 · 그칠 간",
    "readings": [
      "Cấn"
    ],
    "meaning": "Dừng lại, quẻ Cấn, cứng đầu",
    "meaningEn": "Stop, stubborn, Gen trigram",
    "meaningFr": "S'arrêter, tenace",
    "meaningEs": "Detenerse, firme",
    "meaningKo": "머무르다, 그치다",
    "examples": "良, 限, 銀, 根, 退",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1139,
    "kanji": "色",
    "displayReading": "Bộ Sắc",
    "displayReadingEn": "Radical 139 · Color",
    "displayReadingFr": "Clé 139 · Couleur",
    "displayReadingEs": "Radical 139 · Color",
    "displayReadingKo": "부수 139 · 빛 색",
    "readings": [
      "Sắc"
    ],
    "meaning": "Màu sắc, dáng vẻ",
    "meaningEn": "Color, appearance",
    "meaningFr": "Couleur, teint, aspect",
    "meaningEs": "Color, rostro, aspecto",
    "meaningKo": "색깔, 빛깔, 기색",
    "examples": "色, 絶, 艶",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1140,
    "kanji": "艸 (艹)",
    "displayReading": "Bộ Thảo",
    "displayReadingEn": "Radical 140 · Grass",
    "displayReadingFr": "Clé 140 · Herbe",
    "displayReadingEs": "Radical 140 · Hierba",
    "displayReadingKo": "부수 140 · 풀 초",
    "readings": [
      "Thảo"
    ],
    "meaning": "Cỏ cây, thực vật",
    "meaningEn": "Grass, plants, herbs",
    "meaningFr": "Herbe, plante",
    "meaningEs": "Hierba, planta",
    "meaningKo": "풀, 식물",
    "examples": "花, 草, 茶, 薬, 葉",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1141,
    "kanji": "虍",
    "displayReading": "Bộ Hô",
    "displayReadingEn": "Radical 141 · Tiger",
    "displayReadingFr": "Clé 141 · Tigre",
    "displayReadingEs": "Radical 141 · Tigre",
    "displayReadingKo": "부수 141 · 범호엄 호",
    "readings": [
      "Hô"
    ],
    "meaning": "Vằn con hổ",
    "meaningEn": "Tiger stripes",
    "meaningFr": "Rayures de tigre",
    "meaningEs": "Rayas de tigre",
    "meaningKo": "호랑이 무늬",
    "examples": "虎, 処, 虚, 慮, 劇",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1142,
    "kanji": "虫",
    "displayReading": "Bộ Trùng",
    "displayReadingEn": "Radical 142 · Insect",
    "displayReadingFr": "Clé 142 · Insecte",
    "displayReadingEs": "Radical 142 · Insecto",
    "displayReadingKo": "부수 142 · 벌레 충",
    "readings": [
      "Trùng"
    ],
    "meaning": "Sâu bọ, côn trùng",
    "meaningEn": "Insect, bug, worm",
    "meaningFr": "Insecte, ver",
    "meaningEs": "Insecto, gusano",
    "meaningKo": "벌레, 곤충",
    "examples": "虫, 蚊, 蛇, 融, 独",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1143,
    "kanji": "血",
    "displayReading": "Bộ Huyết",
    "displayReadingEn": "Radical 143 · Blood",
    "displayReadingFr": "Clé 143 · Sang",
    "displayReadingEs": "Radical 143 · Sangre",
    "displayReadingKo": "부수 143 · 피 혈",
    "readings": [
      "Huyết"
    ],
    "meaning": "Máu",
    "meaningEn": "Blood",
    "meaningFr": "Sang",
    "meaningEs": "Sangre",
    "meaningKo": "피, 혈액",
    "examples": "血, 衆, 脈",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1144,
    "kanji": "行",
    "displayReading": "Bộ Hành",
    "displayReadingEn": "Radical 144 · Walk enclosure",
    "displayReadingFr": "Clé 144 · Marcher",
    "displayReadingEs": "Radical 144 · Caminar",
    "displayReadingKo": "부수 144 · 다닐 행",
    "readings": [
      "Hành"
    ],
    "meaning": "Đi lại, con đường, thực hiện",
    "meaningEn": "Walk, road, carry out",
    "meaningFr": "Aller, carrefour, agir",
    "meaningEs": "Ir, cruce de caminos, actuar",
    "meaningKo": "다니다, 사거리, 행하다",
    "examples": "行, 街, 術, 衛, 衝",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1145,
    "kanji": "衣 (衤)",
    "displayReading": "Bộ Y",
    "displayReadingEn": "Radical 145 · Clothes",
    "displayReadingFr": "Clé 145 · Vêtement",
    "displayReadingEs": "Radical 145 · Ropa",
    "displayReadingKo": "부수 145 · 옷 의",
    "readings": [
      "Y"
    ],
    "meaning": "Quần áo, trang phục",
    "meaningEn": "Clothes, garment",
    "meaningFr": "Vêtement, habit",
    "meaningEs": "Ropa, prenda de vestir",
    "meaningKo": "옷, 의복",
    "examples": "衣, 服, 初, 補, 表",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1146,
    "kanji": "襾 (西, 覀)",
    "displayReading": "Bộ Á",
    "displayReadingEn": "Radical 146 · West",
    "displayReadingFr": "Clé 146 · Couvrir / Ouest",
    "displayReadingEs": "Radical 146 · Cubrir / Oeste",
    "displayReadingKo": "부수 146 · 덮을 아 / 서녘 서",
    "readings": [
      "Á"
    ],
    "meaning": "Che đậy, hướng Tây",
    "meaningEn": "Cover, west",
    "meaningFr": "Recouvrir, ouest",
    "meaningEs": "Cubrir encima, oeste",
    "meaningKo": "덮다, 서쪽",
    "examples": "西, 要, 票, 覆",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1147,
    "kanji": "見",
    "displayReading": "Bộ Kiến",
    "displayReadingEn": "Radical 147 · See",
    "displayReadingFr": "Clé 147 · Voir",
    "displayReadingEs": "Radical 147 · Ver",
    "displayReadingKo": "부수 147 · 볼 견",
    "readings": [
      "Kiến"
    ],
    "meaning": "Nhìn thấy, quan sát",
    "meaningEn": "See, look, observe",
    "meaningFr": "Voir, observer",
    "meaningEs": "Ver, observar",
    "meaningKo": "보다, 관찰하다",
    "examples": "見, 親, 観, 覚, 規",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1148,
    "kanji": "角",
    "displayReading": "Bộ Giác",
    "displayReadingEn": "Radical 148 · Horn",
    "displayReadingFr": "Clé 148 · Corne",
    "displayReadingEs": "Radical 148 · Cuerno",
    "displayReadingKo": "부수 148 · 뿔 각",
    "readings": [
      "Giác"
    ],
    "meaning": "Cái sừng, góc cạnh",
    "meaningEn": "Horn, angle, corner",
    "meaningFr": "Corne, coin, angle",
    "meaningEs": "Cuerno, esquina, ángulo",
    "meaningKo": "뿔, 모서리",
    "examples": "角, 解, 触, 確",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1149,
    "kanji": "言 (訁)",
    "displayReading": "Bộ Ngôn",
    "displayReadingEn": "Radical 149 · Speech",
    "displayReadingFr": "Clé 149 · Parole",
    "displayReadingEs": "Radical 149 · Palabra",
    "displayReadingKo": "부수 149 · 말씀 언",
    "readings": [
      "Ngôn"
    ],
    "meaning": "Lời nói, ngôn ngữ",
    "meaningEn": "Speech, words, language",
    "meaningFr": "Parole, mot, langage",
    "meaningEs": "Palabra, habla, lenguaje",
    "meaningKo": "말, 언어",
    "examples": "言, 語, 話, 読, 記",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1150,
    "kanji": "谷",
    "displayReading": "Bộ Cốc",
    "displayReadingEn": "Radical 150 · Valley",
    "displayReadingFr": "Clé 150 · Vallée",
    "displayReadingEs": "Radical 150 · Valle",
    "displayReadingKo": "부수 150 · 골 곡",
    "readings": [
      "Cốc"
    ],
    "meaning": "Thung lũng, khe núi",
    "meaningEn": "Valley, gorge",
    "meaningFr": "Vallée, ravin",
    "meaningEs": "Valle, barranco",
    "meaningKo": "골짜기, 계곡",
    "examples": "谷, 欲, 浴, 俗, 容",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1151,
    "kanji": "豆",
    "displayReading": "Bộ Đậu",
    "displayReadingEn": "Radical 151 · Bean",
    "displayReadingFr": "Clé 151 · Haricot",
    "displayReadingEs": "Radical 151 · Judía",
    "displayReadingKo": "부수 151 · 콩 두",
    "readings": [
      "Đậu"
    ],
    "meaning": "Hạt đậu, đồ đựng tế lễ",
    "meaningEn": "Bean, sacrificial vessel",
    "meaningFr": "Haricot, vase rituel",
    "meaningEs": "Alubia, frijol, vasija ritual",
    "meaningKo": "콩, 제기(그릇)",
    "examples": "豆, 豊, 頭, 短, 登",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1152,
    "kanji": "豕",
    "displayReading": "Bộ Thỉ",
    "displayReadingEn": "Radical 152 · Pig",
    "displayReadingFr": "Clé 152 · Cochon",
    "displayReadingEs": "Radical 152 · Cerdo",
    "displayReadingKo": "부수 152 · 돼지 시",
    "readings": [
      "Thỉ"
    ],
    "meaning": "Con lợn (heo)",
    "meaningEn": "Pig, hog",
    "meaningFr": "Cochon, sanglier",
    "meaningEs": "Cerdo, jabalí",
    "meaningKo": "돼지, 멧돼지",
    "examples": "豚, 家, 象, 豪, 隊",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1153,
    "kanji": "豸",
    "displayReading": "Bộ Trãi",
    "displayReadingEn": "Radical 153 · Badger",
    "displayReadingFr": "Clé 153 · Blaireau",
    "displayReadingEs": "Radical 153 · Tejón",
    "displayReadingKo": "부수 153 · 발없는벌레 치",
    "readings": [
      "Trãi"
    ],
    "meaning": "Loài thú ăn thịt thân dài",
    "meaningEn": "Badger, long-bodied beast",
    "meaningFr": "Fauve sans cornes, félin",
    "meaningEs": "Fiera sin cuernos, felino",
    "meaningKo": "발 없는 벌레, 맹수",
    "examples": "豹, 貌, 猫, 墾",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1154,
    "kanji": "貝",
    "displayReading": "Bộ Bối",
    "displayReadingEn": "Radical 154 · Shell",
    "displayReadingFr": "Clé 154 · Coquillage",
    "displayReadingEs": "Radical 154 · Concha",
    "displayReadingKo": "부수 154 · 조개 패",
    "readings": [
      "Bối"
    ],
    "meaning": "Vỏ sò, tiền bạc, tài sản",
    "meaningEn": "Cowrie shell, money, wealth",
    "meaningFr": "Cauri, monnaie, richesse",
    "meaningEs": "Concha marina, moneda, riqueza",
    "meaningKo": "조개, 화폐, 재물",
    "examples": "貝, 買, 売, 貯, 財",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1155,
    "kanji": "赤",
    "displayReading": "Bộ Xích",
    "displayReadingEn": "Radical 155 · Red",
    "displayReadingFr": "Clé 155 · Rouge",
    "displayReadingEs": "Radical 155 · Rojo",
    "displayReadingKo": "부수 155 · 붉을 적",
    "readings": [
      "Xích"
    ],
    "meaning": "Màu đỏ",
    "meaningEn": "Red, bare",
    "meaningFr": "Rouge",
    "meaningEs": "Rojo",
    "meaningKo": "붉다, 빨강",
    "examples": "赤, 赦, 赫",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1156,
    "kanji": "走",
    "displayReading": "Bộ Tẩu",
    "displayReadingEn": "Radical 156 · Run",
    "displayReadingFr": "Clé 156 · Courir",
    "displayReadingEs": "Radical 156 · Correr",
    "displayReadingKo": "부수 156 · 달릴 주",
    "readings": [
      "Tẩu"
    ],
    "meaning": "Chạy, di chuyển nhanh",
    "meaningEn": "Run, move fast",
    "meaningFr": "Courir, fuir",
    "meaningEs": "Correr, huir",
    "meaningKo": "달리다",
    "examples": "走, 起, 超, 越, 趣",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1157,
    "kanji": "足 (⻊)",
    "displayReading": "Bộ Túc",
    "displayReadingEn": "Radical 157 · Foot",
    "displayReadingFr": "Clé 157 · Pied",
    "displayReadingEs": "Radical 157 · Pie",
    "displayReadingKo": "부수 157 · 발 족",
    "readings": [
      "Túc"
    ],
    "meaning": "Bàn chân, đầy đủ",
    "meaningEn": "Foot, sufficient",
    "meaningFr": "Pied, jambe, suffire",
    "meaningEs": "Pie, pierna, bastar",
    "meaningKo": "발, 다리, 충분하다",
    "examples": "足, 路, 踊, 跳, 距",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1158,
    "kanji": "身",
    "displayReading": "Bộ Thân",
    "displayReadingEn": "Radical 158 · Body",
    "displayReadingFr": "Clé 158 · Corps",
    "displayReadingEs": "Radical 158 · Cuerpo",
    "displayReadingKo": "부수 158 · 몸 신",
    "readings": [
      "Thân"
    ],
    "meaning": "Thân thể, bản thân",
    "meaningEn": "Body, oneself",
    "meaningFr": "Corps, personne",
    "meaningEs": "Cuerpo, persona",
    "meaningKo": "몸, 신체",
    "examples": "身, 射, 謝, 躯",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1159,
    "kanji": "車",
    "displayReading": "Bộ Xa",
    "displayReadingEn": "Radical 159 · Cart",
    "displayReadingFr": "Clé 159 · Char",
    "displayReadingEs": "Radical 159 · Carro",
    "displayReadingKo": "부수 159 · 수레 차",
    "readings": [
      "Xa"
    ],
    "meaning": "Xe cộ, bánh xe",
    "meaningEn": "Cart, vehicle, wheel",
    "meaningFr": "Voiture, char, roue",
    "meaningEs": "Coche, carro, rueda",
    "meaningKo": "수레, 자동차",
    "examples": "車, 転, 軽, 輪, 軍",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1160,
    "kanji": "辛",
    "displayReading": "Bộ Tân",
    "displayReadingEn": "Radical 160 · Bitter",
    "displayReadingFr": "Clé 160 · Âcre",
    "displayReadingEs": "Radical 160 · Picante / Amargo",
    "displayReadingKo": "부수 160 · 매울 신",
    "readings": [
      "Tân"
    ],
    "meaning": "Cay đắng, vất vả",
    "meaningEn": "Bitter, spicy, hardship",
    "meaningFr": "Épicé, amer, pénible",
    "meaningEs": "Picante, amargo, penoso",
    "meaningKo": "맵다, 괴롭다",
    "examples": "辛, 辞, 弁, 幸, 辟",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1161,
    "kanji": "辰",
    "displayReading": "Bộ Thần",
    "displayReadingEn": "Radical 161 · Morning",
    "displayReadingFr": "Clé 161 · Matin",
    "displayReadingEs": "Radical 161 · Mañana",
    "displayReadingKo": "부수 161 · 별 진",
    "readings": [
      "Thần"
    ],
    "meaning": "Ngôi sao, địa chi Thìn, buổi sớm",
    "meaningEn": "Star, Dragon branch, early morning",
    "meaningFr": "Astre, signe du Dragon, aube",
    "meaningEs": "Astro, signo del Dragón, alba",
    "meaningKo": "별, 때, 용(십이지)",
    "examples": "農, 振, 震, 辱",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1162,
    "kanji": "辵 (辶)",
    "displayReading": "Bộ Sước",
    "displayReadingEn": "Radical 162 · Walk",
    "displayReadingFr": "Clé 162 · Avancer",
    "displayReadingEs": "Radical 162 · Avanzar",
    "displayReadingKo": "부수 162 · 책받침 착",
    "readings": [
      "Sước"
    ],
    "meaning": "Bước đi, di chuyển trên đường",
    "meaningEn": "Walk, move along a road",
    "meaningFr": "Marcher sur la route",
    "meaningEs": "Caminar por el camino",
    "meaningKo": "쉬엄쉬엄 가다, 길",
    "examples": "道, 近, 遠, 進, 運",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1163,
    "kanji": "邑 (阝 phải)",
    "displayReading": "Bộ Ấp",
    "displayReadingEn": "Radical 163 · City",
    "displayReadingFr": "Clé 163 · Cité",
    "displayReadingEs": "Radical 163 · Ciudad",
    "displayReadingKo": "부수 163 · 고을 읍",
    "readings": [
      "Ấp"
    ],
    "meaning": "Vùng đất, làng mạc, đô thị",
    "meaningEn": "City, village, district",
    "meaningFr": "Ville, village, fief",
    "meaningEs": "Ciudad, aldea, territorio",
    "meaningKo": "고을, 마을, 도시",
    "examples": "都, 郡, 部, 郵, 郷",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1164,
    "kanji": "酉",
    "displayReading": "Bộ Dậu",
    "displayReadingEn": "Radical 164 · Wine",
    "displayReadingFr": "Clé 164 · Jarre à vin",
    "displayReadingEs": "Radical 164 · Vasija de vino",
    "displayReadingKo": "부수 164 · 닭 유",
    "readings": [
      "Dậu"
    ],
    "meaning": "Bình rượu, địa chi Dậu",
    "meaningEn": "Wine jar, Rooster branch",
    "meaningFr": "Alcool, fermentation, Coq",
    "meaningEs": "Alcohol, fermentación, Gallo",
    "meaningKo": "술항아리, 술, 닭(십이지)",
    "examples": "酒, 配, 酔, 酸, 医",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1165,
    "kanji": "釆",
    "displayReading": "Bộ Biện",
    "displayReadingEn": "Radical 165 · Distinguish",
    "displayReadingFr": "Clé 165 · Distinguer",
    "displayReadingEs": "Radical 165 · Distinguir",
    "displayReadingKo": "부수 165 · 분별할 변",
    "readings": [
      "Biện"
    ],
    "meaning": "Phân biệt, dấu chân thú",
    "meaningEn": "Distinguish, animal tracks",
    "meaningFr": "Trier, traces d'animaux",
    "meaningEs": "Separar, huellas de animales",
    "meaningKo": "분별하다, 짐승 발자국",
    "examples": "採, 番, 釈, 審",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1166,
    "kanji": "里",
    "displayReading": "Bộ Lý",
    "displayReadingEn": "Radical 166 · Village",
    "displayReadingFr": "Clé 166 · Hameau",
    "displayReadingEs": "Radical 166 · Aldea",
    "displayReadingKo": "부수 166 · 마을 리",
    "readings": [
      "Lý"
    ],
    "meaning": "Làng xóm, đơn vị đo dặm",
    "meaningEn": "Village, unit of distance (ri)",
    "meaningFr": "Village, lieue japonaise",
    "meaningEs": "Pueblo, legua japonesa",
    "meaningKo": "마을, 거리 단위(리)",
    "examples": "里, 重, 野, 量, 黒",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1167,
    "kanji": "金 (釒)",
    "displayReading": "Bộ Kim",
    "displayReadingEn": "Radical 167 · Gold",
    "displayReadingFr": "Clé 167 · Métal",
    "displayReadingEs": "Radical 167 · Metal",
    "displayReadingKo": "부수 167 · 쇠 금",
    "readings": [
      "Kim"
    ],
    "meaning": "Kim loại, vàng, tiền bạc",
    "meaningEn": "Metal, gold, money",
    "meaningFr": "Métal, or, argent",
    "meaningEs": "Metal, oro, dinero",
    "meaningKo": "쇠, 금속, 금, 돈",
    "examples": "金, 鉄, 銀, 鏡, 針",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1168,
    "kanji": "長 (镸)",
    "displayReading": "Bộ Trường",
    "displayReadingEn": "Radical 168 · Long",
    "displayReadingFr": "Clé 168 · Long",
    "displayReadingEs": "Radical 168 · Largo",
    "displayReadingKo": "부수 168 · 긴 장",
    "readings": [
      "Trường"
    ],
    "meaning": "Dài, người đứng đầu, lớn lên",
    "meaningEn": "Long, chief, grow",
    "meaningFr": "Long, chef, grandir",
    "meaningEs": "Largo, jefe, crecer",
    "meaningKo": "길다, 우두머리",
    "examples": "長, 張, 帳, 膨",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1169,
    "kanji": "門",
    "displayReading": "Bộ Môn",
    "displayReadingEn": "Radical 169 · Gate",
    "displayReadingFr": "Clé 169 · Portail",
    "displayReadingEs": "Radical 169 · Portón",
    "displayReadingKo": "부수 169 · 문 문",
    "readings": [
      "Môn"
    ],
    "meaning": "Cổng lớn, cánh cửa",
    "meaningEn": "Gate, door",
    "meaningFr": "Portail, double porte",
    "meaningEs": "Portón, puerta doble",
    "meaningKo": "문, 양쪽 여닫이문",
    "examples": "門, 間, 開, 閉, 聞",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1170,
    "kanji": "阜 (阝 trái)",
    "displayReading": "Bộ Phụ",
    "displayReadingEn": "Radical 170 · Mound",
    "displayReadingFr": "Clé 170 · Tertre",
    "displayReadingEs": "Radical 170 · Montículo",
    "displayReadingKo": "부수 170 · 언덕 부",
    "readings": [
      "Phụ"
    ],
    "meaning": "Gò đất, đồi núi, bậc thang",
    "meaningEn": "Mound, hill, steps",
    "meaningFr": "Colline, talus, rempart",
    "meaningEs": "Colina, terraplén, muralla",
    "meaningKo": "언덕, 둔덕",
    "examples": "院, 階, 陽, 防, 限",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1171,
    "kanji": "隶",
    "displayReading": "Bộ Đãi",
    "displayReadingEn": "Radical 171 · Slave",
    "displayReadingFr": "Clé 171 · Atteindre",
    "displayReadingEs": "Radical 171 · Alcanzar",
    "displayReadingKo": "부수 171 · 미칠 이",
    "readings": [
      "Đãi"
    ],
    "meaning": "Kịp đến, phụ thuộc",
    "meaningEn": "Reach, depend on",
    "meaningFr": "Rattraper, subordonné",
    "meaningEs": "Alcanzar, subordinado",
    "meaningKo": "미치다, 닿다",
    "examples": "隷, 康, 逮",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1172,
    "kanji": "隹",
    "displayReading": "Bộ Chuy",
    "displayReadingEn": "Radical 172 · Short-tailed bird",
    "displayReadingFr": "Clé 172 · Petit oiseau",
    "displayReadingEs": "Radical 172 · Pájaro corto",
    "displayReadingKo": "부수 172 · 새 추",
    "readings": [
      "Chuy"
    ],
    "meaning": "Chim đuôi ngắn",
    "meaningEn": "Short-tailed bird",
    "meaningFr": "Oiseau à queue courte",
    "meaningEs": "Pájaro de cola corta",
    "meaningKo": "꽁지 짧은 새",
    "examples": "集, 雑, 難, 離, 雄",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1173,
    "kanji": "雨 (⻗)",
    "displayReading": "Bộ Vũ",
    "displayReadingEn": "Radical 173 · Rain",
    "displayReadingFr": "Clé 173 · Pluie",
    "displayReadingEs": "Radical 173 · Lluvia",
    "displayReadingKo": "부수 173 · 비 우",
    "readings": [
      "Vũ"
    ],
    "meaning": "Mưa, hiện tượng thời tiết",
    "meaningEn": "Rain, weather phenomena",
    "meaningFr": "Pluie, météo",
    "meaningEs": "Lluvia, clima",
    "meaningKo": "비, 날씨",
    "examples": "雨, 雪, 雲, 電, 霧",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1174,
    "kanji": "青 (靑)",
    "displayReading": "Bộ Thanh",
    "displayReadingEn": "Radical 174 · Blue",
    "displayReadingFr": "Clé 174 · Bleu",
    "displayReadingEs": "Radical 174 · Azul / Verde",
    "displayReadingKo": "부수 174 · 푸를 청",
    "readings": [
      "Thanh"
    ],
    "meaning": "Màu xanh lam/lục, trẻ trung",
    "meaningEn": "Blue, green, young",
    "meaningFr": "Bleu, vert, jeunesse",
    "meaningEs": "Azul, verde, juventud",
    "meaningKo": "푸르다, 파랑, 젊음",
    "examples": "青, 静, 晴, 清, 精",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1175,
    "kanji": "非",
    "displayReading": "Bộ Phi",
    "displayReadingEn": "Radical 175 · Wrong",
    "displayReadingFr": "Clé 175 · Non",
    "displayReadingEs": "Radical 175 · No",
    "displayReadingKo": "부수 175 · 아닐 비",
    "readings": [
      "Phi"
    ],
    "meaning": "Không phải, sai trái",
    "meaningEn": "Wrong, not",
    "meaningFr": "Ne pas être, tort",
    "meaningEs": "No ser, incorrecto",
    "meaningKo": "아니다, 그르다",
    "examples": "非, 悲, 罪, 排, 俳",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1176,
    "kanji": "面",
    "displayReading": "Bộ Diện",
    "displayReadingEn": "Radical 176 · Face",
    "displayReadingFr": "Clé 176 · Visage",
    "displayReadingEs": "Radical 176 · Cara",
    "displayReadingKo": "부수 176 · 낯 면",
    "readings": [
      "Diện"
    ],
    "meaning": "Khuôn mặt, bề mặt",
    "meaningEn": "Face, surface",
    "meaningFr": "Visage, surface",
    "meaningEs": "Cara, rostro, superficie",
    "meaningKo": "얼굴, 표면",
    "examples": "面, 麺, 緬",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1177,
    "kanji": "革",
    "displayReading": "Bộ Cách",
    "displayReadingEn": "Radical 177 · Leather",
    "displayReadingFr": "Clé 177 · Cuir",
    "displayReadingEs": "Radical 177 · Cuero",
    "displayReadingKo": "부수 177 · 가죽 혁",
    "readings": [
      "Cách"
    ],
    "meaning": "Da thú thuộc, cải cách",
    "meaningEn": "Tanned leather, reform",
    "meaningFr": "Cuir brut, réformer",
    "meaningEs": "Cuero crudo, reformar",
    "meaningKo": "다듬은 가죽, 고치다",
    "examples": "革, 靴, 鞄, 覇",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1178,
    "kanji": "韋",
    "displayReading": "Bộ Vi",
    "displayReadingEn": "Radical 178 · Tanned leather",
    "displayReadingFr": "Clé 178 · Cuir souple",
    "displayReadingEs": "Radical 178 · Cuero curtido",
    "displayReadingKo": "부수 178 · 다룸가죽 위",
    "readings": [
      "Vi"
    ],
    "meaning": "Da thuộc mềm, vây quanh",
    "meaningEn": "Soft leather, surround",
    "meaningFr": "Cuir tanné, entourer",
    "meaningEs": "Cuero suave, rodear",
    "meaningKo": "부드러운 가죽, 에워싸다",
    "examples": "韓, 偉, 違, 緯",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1179,
    "kanji": "韭",
    "displayReading": "Bộ Cửu",
    "displayReadingEn": "Radical 179 · Leek",
    "displayReadingFr": "Clé 179 · Ciboule",
    "displayReadingEs": "Radical 179 · Puerro",
    "displayReadingKo": "부수 179 · 부추 구",
    "readings": [
      "Cửu"
    ],
    "meaning": "Rau hẹ",
    "meaningEn": "Leek, chives",
    "meaningFr": "Ciboule, poireau chinois",
    "meaningEs": "Cebolleta, puerro chino",
    "meaningKo": "부추",
    "examples": "韮, 繊",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1180,
    "kanji": "音",
    "displayReading": "Bộ Âm",
    "displayReadingEn": "Radical 180 · Sound",
    "displayReadingFr": "Clé 180 · Son",
    "displayReadingEs": "Radical 180 · Sonido",
    "displayReadingKo": "부수 180 · 소리 음",
    "readings": [
      "Âm"
    ],
    "meaning": "Âm thanh, tiếng động",
    "meaningEn": "Sound, noise",
    "meaningFr": "Son, bruit, musique",
    "meaningEs": "Sonido, ruido, música",
    "meaningKo": "소리, 음악",
    "examples": "音, 暗, 意, 響, 韻",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1181,
    "kanji": "頁",
    "displayReading": "Bộ Hiệt",
    "displayReadingEn": "Radical 181 · Leaf",
    "displayReadingFr": "Clé 181 · Tête / Page",
    "displayReadingEs": "Radical 181 · Cabeza / Página",
    "displayReadingKo": "부수 181 · 머리 혈",
    "readings": [
      "Hiệt"
    ],
    "meaning": "Cái đầu, trang giấy",
    "meaningEn": "Head, page of a book",
    "meaningFr": "Tête, visage, page",
    "meaningEs": "Cabeza, rostro, página",
    "meaningKo": "머리, 얼굴, 페이지",
    "examples": "頭, 顔, 題, 願, 順",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1182,
    "kanji": "風",
    "displayReading": "Bộ Phong",
    "displayReadingEn": "Radical 182 · Wind",
    "displayReadingFr": "Clé 182 · Vent",
    "displayReadingEs": "Radical 182 · Viento",
    "displayReadingKo": "부수 182 · 바람 풍",
    "readings": [
      "Phong"
    ],
    "meaning": "Gió, phong cách",
    "meaningEn": "Wind, style",
    "meaningFr": "Vent, manière",
    "meaningEs": "Viento, estilo",
    "meaningKo": "바람, 풍속",
    "examples": "風, 台, 嵐, 颯",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1183,
    "kanji": "飛",
    "displayReading": "Bộ Phi",
    "displayReadingEn": "Radical 183 · Fly",
    "displayReadingFr": "Clé 183 · Voler",
    "displayReadingEs": "Radical 183 · Volar",
    "displayReadingKo": "부수 183 · 날 비",
    "readings": [
      "Phi"
    ],
    "meaning": "Bay lượn",
    "meaningEn": "Fly, soar",
    "meaningFr": "Voler dans les airs",
    "meaningEs": "Volar por el aire",
    "meaningKo": "날다",
    "examples": "飛, 翻",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1184,
    "kanji": "食 (飠)",
    "displayReading": "Bộ Thực",
    "displayReadingEn": "Radical 184 · Eat",
    "displayReadingFr": "Clé 184 · Manger",
    "displayReadingEs": "Radical 184 · Comer",
    "displayReadingKo": "부수 184 · 밥 식",
    "readings": [
      "Thực"
    ],
    "meaning": "Ăn uống, thức ăn",
    "meaningEn": "Eat, food",
    "meaningFr": "Manger, nourriture",
    "meaningEs": "Comer, comida",
    "meaningKo": "먹다, 밥, 음식",
    "examples": "食, 飲, 飯, 館, 養",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1185,
    "kanji": "首",
    "displayReading": "Bộ Thủ",
    "displayReadingEn": "Radical 185 · Head",
    "displayReadingFr": "Clé 185 · Tête / Cou",
    "displayReadingEs": "Radical 185 · Cabeza / Cuello",
    "displayReadingKo": "부수 185 · 머리 수",
    "readings": [
      "Thủ"
    ],
    "meaning": "Cái đầu, cái cổ, đứng đầu",
    "meaningEn": "Head, neck, leader",
    "meaningFr": "Tête, cou, premier",
    "meaningEs": "Cabeza, cuello, primero",
    "meaningKo": "머리, 목, 으뜸",
    "examples": "首, 道, 導",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1186,
    "kanji": "香",
    "displayReading": "Bộ Hương",
    "displayReadingEn": "Radical 186 · Fragrant",
    "displayReadingFr": "Clé 186 · Parfum",
    "displayReadingEs": "Radical 186 · Fragancia",
    "displayReadingKo": "부수 186 · 향기 향",
    "readings": [
      "Hương"
    ],
    "meaning": "Mùi thơm, hương vị",
    "meaningEn": "Fragrant, aroma",
    "meaningFr": "Parfum, arôme",
    "meaningEs": "Aroma, perfume",
    "meaningKo": "향기",
    "examples": "香, 馨, 馥",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1187,
    "kanji": "馬",
    "displayReading": "Bộ Mã",
    "displayReadingEn": "Radical 187 · Horse",
    "displayReadingFr": "Clé 187 · Cheval",
    "displayReadingEs": "Radical 187 · Caballo",
    "displayReadingKo": "부수 187 · 말 마",
    "readings": [
      "Mã"
    ],
    "meaning": "Con ngựa",
    "meaningEn": "Horse",
    "meaningFr": "Cheval",
    "meaningEs": "Caballo",
    "meaningKo": "말(동물)",
    "examples": "馬, 駅, 駐, 騒, 驚",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1188,
    "kanji": "骨",
    "displayReading": "Bộ Cốt",
    "displayReadingEn": "Radical 188 · Bone",
    "displayReadingFr": "Clé 188 · Os",
    "displayReadingEs": "Radical 188 · Hueso",
    "displayReadingKo": "부수 188 · 뼈 골",
    "readings": [
      "Cốt"
    ],
    "meaning": "Xương cốt",
    "meaningEn": "Bone, skeleton",
    "meaningFr": "Os, squelette",
    "meaningEs": "Hueso, esqueleto",
    "meaningKo": "뼈",
    "examples": "骨, 滑, 髄, 骸",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1189,
    "kanji": "高",
    "displayReading": "Bộ Cao",
    "displayReadingEn": "Radical 189 · Tall",
    "displayReadingFr": "Clé 189 · Haut",
    "displayReadingEs": "Radical 189 · Alto",
    "displayReadingKo": "부수 189 · 높을 고",
    "readings": [
      "Cao"
    ],
    "meaning": "Cao lớn",
    "meaningEn": "Tall, high",
    "meaningFr": "Haut, élevé",
    "meaningEs": "Alto, elevado",
    "meaningKo": "높다",
    "examples": "高, 稿, 橋",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1190,
    "kanji": "髟",
    "displayReading": "Bộ Tiêu",
    "displayReadingEn": "Radical 190 · Hair",
    "displayReadingFr": "Clé 190 · Chevelure",
    "displayReadingEs": "Radical 190 · Cabellera",
    "displayReadingKo": "부수 190 · 터럭 발",
    "readings": [
      "Tiêu"
    ],
    "meaning": "Tóc dài",
    "meaningEn": "Long hair",
    "meaningFr": "Cheveux longs",
    "meaningEs": "Cabello largo",
    "meaningKo": "긴 머리카락",
    "examples": "髪, 髭, 髯",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1191,
    "kanji": "鬥",
    "displayReading": "Bộ Đấu",
    "displayReadingEn": "Radical 191 · Fight",
    "displayReadingFr": "Clé 191 · Combat",
    "displayReadingEs": "Radical 191 · Lucha",
    "displayReadingKo": "부수 191 · 싸울 투",
    "readings": [
      "Đấu"
    ],
    "meaning": "Đánh nhau, tranh đấu",
    "meaningEn": "Fight, struggle",
    "meaningFr": "Lutter, combattre",
    "meaningEs": "Pelear, combatir",
    "meaningKo": "싸우다",
    "examples": "闘, 鬧",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1192,
    "kanji": "鬯",
    "displayReading": "Bộ Sưởng",
    "displayReadingEn": "Radical 192 · Sacrificial wine",
    "displayReadingFr": "Clé 192 · Vin rituel",
    "displayReadingEs": "Radical 192 · Licor ritual",
    "displayReadingKo": "부수 192 · 울창주 창",
    "readings": [
      "Sưởng"
    ],
    "meaning": "Rượu nghệ dùng trong tế lễ",
    "meaningEn": "Herbal sacrificial wine",
    "meaningFr": "Alcool aromatique rituel",
    "meaningEs": "Vino aromático ritual",
    "meaningKo": "향기로운 제사용 술",
    "examples": "鬱",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1193,
    "kanji": "鬲",
    "displayReading": "Bộ Cách",
    "displayReadingEn": "Radical 193 · Cauldron",
    "displayReadingFr": "Clé 193 · Chaudron",
    "displayReadingEs": "Radical 193 · Caldero",
    "displayReadingKo": "부수 193 · 솥 력",
    "readings": [
      "Cách"
    ],
    "meaning": "Cái đỉnh, nồi ba chân",
    "meaningEn": "Three-legged cauldron",
    "meaningFr": "Chaudron tripode",
    "meaningEs": "Caldero de tres patas",
    "meaningKo": "세발솥",
    "examples": "隔, 融, 鬲",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1194,
    "kanji": "鬼",
    "displayReading": "Bộ Quỷ",
    "displayReadingEn": "Radical 194 · Ghost",
    "displayReadingFr": "Clé 194 · Démon",
    "displayReadingEs": "Radical 194 · Demonio",
    "displayReadingKo": "부수 194 · 귀신 귀",
    "readings": [
      "Quỷ"
    ],
    "meaning": "Con quỷ, linh hồn",
    "meaningEn": "Ghost, demon, spirit",
    "meaningFr": "Démon, esprit, fantôme",
    "meaningEs": "Demonio, espíritu, fantasma",
    "meaningKo": "귀신, 도깨비",
    "examples": "鬼, 魂, 魔, 魅, 塊",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1195,
    "kanji": "魚",
    "displayReading": "Bộ Ngư",
    "displayReadingEn": "Radical 195 · Fish",
    "displayReadingFr": "Clé 195 · Poisson",
    "displayReadingEs": "Radical 195 · Pez",
    "displayReadingKo": "부수 195 · 물고기 어",
    "readings": [
      "Ngư"
    ],
    "meaning": "Con cá",
    "meaningEn": "Fish",
    "meaningFr": "Poisson",
    "meaningEs": "Pez, pescado",
    "meaningKo": "물고기, 생선",
    "examples": "魚, 鮮, 鯨, 鯉, 鮭",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1196,
    "kanji": "鳥",
    "displayReading": "Bộ Điểu",
    "displayReadingEn": "Radical 196 · Bird",
    "displayReadingFr": "Clé 196 · Oiseau",
    "displayReadingEs": "Radical 196 · Ave",
    "displayReadingKo": "부수 196 · 새 조",
    "readings": [
      "Điểu"
    ],
    "meaning": "Con chim",
    "meaningEn": "Bird",
    "meaningFr": "Oiseau",
    "meaningEs": "Pájaro, ave",
    "meaningKo": "새",
    "examples": "鳥, 鳴, 島, 鶴, 鶏",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1197,
    "kanji": "鹵",
    "displayReading": "Bộ Lỗ",
    "displayReadingEn": "Radical 197 · Salt",
    "displayReadingFr": "Clé 197 · Sel",
    "displayReadingEs": "Radical 197 · Sal",
    "displayReadingKo": "부수 197 · 소금 鹵(로)",
    "readings": [
      "Lỗ"
    ],
    "meaning": "Đất mặn, muối mỏ",
    "meaningEn": "Salty land, rock salt",
    "meaningFr": "Terre salée, sel gemme",
    "meaningEs": "Tierra salada, sal de roca",
    "meaningKo": "소금, 소금땅",
    "examples": "塩, 鹸",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1198,
    "kanji": "鹿",
    "displayReading": "Bộ Lộc",
    "displayReadingEn": "Radical 198 · Deer",
    "displayReadingFr": "Clé 198 · Cerf",
    "displayReadingEs": "Radical 198 · Ciervo",
    "displayReadingKo": "부수 198 · 사슴 록",
    "readings": [
      "Lộc"
    ],
    "meaning": "Con hươu, con nai",
    "meaningEn": "Deer",
    "meaningFr": "Cerf, daim",
    "meaningEs": "Ciervo, venado",
    "meaningKo": "사슴",
    "examples": "鹿, 麗, 塵, 慶",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1199,
    "kanji": "麥 (麦)",
    "displayReading": "Bộ Mạch",
    "displayReadingEn": "Radical 199 · Wheat",
    "displayReadingFr": "Clé 199 · Blé",
    "displayReadingEs": "Radical 199 · Trigo",
    "displayReadingKo": "부수 199 · 보리 맥",
    "readings": [
      "Mạch"
    ],
    "meaning": "Lúa mạch",
    "meaningEn": "Wheat, barley",
    "meaningFr": "Blé, orge",
    "meaningEs": "Trigo, cebada",
    "meaningKo": "보리, 밀",
    "examples": "麦, 麺, 麹",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1200,
    "kanji": "麻",
    "displayReading": "Bộ Ma",
    "displayReadingEn": "Radical 200 · Hemp",
    "displayReadingFr": "Clé 200 · Chanvre",
    "displayReadingEs": "Radical 200 · Cáñamo",
    "displayReadingKo": "부수 200 · 삼 마",
    "readings": [
      "Ma"
    ],
    "meaning": "Cây gai dầu, tê liệt",
    "meaningEn": "Hemp, numb",
    "meaningFr": "Chanvre, engourdi",
    "meaningEs": "Cáñamo, entumecido",
    "meaningKo": "삼(대마), 마비되다",
    "examples": "麻, 磨, 魔, 摩",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1201,
    "kanji": "黃 (黄)",
    "displayReading": "Bộ Hoàng",
    "displayReadingEn": "Radical 201 · Yellow",
    "displayReadingFr": "Clé 201 · Jaune",
    "displayReadingEs": "Radical 201 · Amarillo",
    "displayReadingKo": "부수 201 · 누를 황",
    "readings": [
      "Hoàng"
    ],
    "meaning": "Màu vàng",
    "meaningEn": "Yellow",
    "meaningFr": "Jaune",
    "meaningEs": "Amarillo",
    "meaningKo": "누렇다, 노란색",
    "examples": "黄, 横, 広",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1202,
    "kanji": "黍",
    "displayReading": "Bộ Thử",
    "displayReadingEn": "Radical 202 · Millet",
    "displayReadingFr": "Clé 202 · Millet",
    "displayReadingEs": "Radical 202 · Mijo",
    "displayReadingKo": "부수 202 · 기장 서",
    "readings": [
      "Thử"
    ],
    "meaning": "Cây kê (lúa nếp)",
    "meaningEn": "Millet",
    "meaningFr": "Millet",
    "meaningEs": "Mijo",
    "meaningKo": "기장(곡식)",
    "examples": "黎, 粘",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1203,
    "kanji": "黑 (黒)",
    "displayReading": "Bộ Hắc",
    "displayReadingEn": "Radical 203 · Black",
    "displayReadingFr": "Clé 203 · Noir",
    "displayReadingEs": "Radical 203 · Negro",
    "displayReadingKo": "부수 203 · 검을 흑",
    "readings": [
      "Hắc"
    ],
    "meaning": "Màu đen",
    "meaningEn": "Black",
    "meaningFr": "Noir, sombre",
    "meaningEs": "Negro, oscuro",
    "meaningKo": "검다, 검은색",
    "examples": "黒, 黙, 点, 墨, 党",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1204,
    "kanji": "黹",
    "displayReading": "Bộ Chỉ",
    "displayReadingEn": "Radical 204 · Embroidery",
    "displayReadingFr": "Clé 204 · Broderie",
    "displayReadingEs": "Radical 204 · Bordado",
    "displayReadingKo": "부수 204 · 바느질할 치",
    "readings": [
      "Chỉ"
    ],
    "meaning": "Thêu thùa, may vá",
    "meaningEn": "Embroidery, needlework",
    "meaningFr": "Broderie, couture",
    "meaningEs": "Bordado, costura",
    "meaningKo": "자수, 바느질",
    "examples": "黻, 黼",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1205,
    "kanji": "黽",
    "displayReading": "Bộ Mãnh",
    "displayReadingEn": "Radical 205 · Frog",
    "displayReadingFr": "Clé 205 · Grenouille",
    "displayReadingEs": "Radical 205 · Rana",
    "displayReadingKo": "부수 205 · 맹꽁이 맹",
    "readings": [
      "Mãnh"
    ],
    "meaning": "Con ếch, cố gắng",
    "meaningEn": "Frog, strive",
    "meaningFr": "Grenouille, s'efforcer",
    "meaningEs": "Rana, esforzarse",
    "meaningKo": "맹꽁이, 개구리, 힘쓰다",
    "examples": "縄, 蠅, 亀",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1206,
    "kanji": "鼎",
    "displayReading": "Bộ Đỉnh",
    "displayReadingEn": "Radical 206 · Tripod",
    "displayReadingFr": "Clé 206 · Trépied",
    "displayReadingEs": "Radical 206 · Trípode",
    "displayReadingKo": "부수 206 · 솥 정",
    "readings": [
      "Đỉnh"
    ],
    "meaning": "Cái đỉnh đồng ba chân",
    "meaningEn": "Three-legged bronze tripod",
    "meaningFr": "Trépied de bronze",
    "meaningEs": "Trípode de bronce",
    "meaningKo": "세발솥",
    "examples": "鼎, 鼐",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1207,
    "kanji": "鼓",
    "displayReading": "Bộ Cổ",
    "displayReadingEn": "Radical 207 · Drum",
    "displayReadingFr": "Clé 207 · Tambour",
    "displayReadingEs": "Radical 207 · Tambor",
    "displayReadingKo": "부수 207 · 북 고",
    "readings": [
      "Cổ"
    ],
    "meaning": "Cái trống, cổ vũ",
    "meaningEn": "Drum, encourage",
    "meaningFr": "Tambour",
    "meaningEs": "Tambor",
    "meaningKo": "북",
    "examples": "鼓, 樹, 喜",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1208,
    "kanji": "鼠",
    "displayReading": "Bộ Thử",
    "displayReadingEn": "Radical 208 · Rat",
    "displayReadingFr": "Clé 208 · Rat",
    "displayReadingEs": "Radical 208 · Rata",
    "displayReadingKo": "부수 208 · 쥐 서",
    "readings": [
      "Thử"
    ],
    "meaning": "Con chuột",
    "meaningEn": "Rat, mouse",
    "meaningFr": "Rat, souris",
    "meaningEs": "Rata, ratón",
    "meaningKo": "쥐",
    "examples": "鼠, 鼬, 竄",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1209,
    "kanji": "鼻",
    "displayReading": "Bộ Tỵ",
    "displayReadingEn": "Radical 209 · Nose",
    "displayReadingFr": "Clé 209 · Nez",
    "displayReadingEs": "Radical 209 · Nariz",
    "displayReadingKo": "부수 209 · 코 비",
    "readings": [
      "Tỵ"
    ],
    "meaning": "Cái mũi",
    "meaningEn": "Nose",
    "meaningFr": "Nez",
    "meaningEs": "Nariz",
    "meaningKo": "코",
    "examples": "鼻, 鼾",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1210,
    "kanji": "齊 (斉)",
    "displayReading": "Bộ Tề",
    "displayReadingEn": "Radical 210 · Even",
    "displayReadingFr": "Clé 210 · Égal",
    "displayReadingEs": "Radical 210 · Igual",
    "displayReadingKo": "부수 210 · 가지런할 제",
    "readings": [
      "Tề"
    ],
    "meaning": "Ngay ngắn, đều đặn",
    "meaningEn": "Even, uniform, neat",
    "meaningFr": "Égal, uniforme, aligné",
    "meaningEs": "Igual, uniforme, alineado",
    "meaningKo": "가지런하다, 같다",
    "examples": "斉, 済, 剤, 斎",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1211,
    "kanji": "齒 (歯)",
    "displayReading": "Bộ Xỉ",
    "displayReadingEn": "Radical 211 · Tooth",
    "displayReadingFr": "Clé 211 · Dent",
    "displayReadingEs": "Radical 211 · Diente",
    "displayReadingKo": "부수 211 · 이 치",
    "readings": [
      "Xỉ"
    ],
    "meaning": "Cái răng",
    "meaningEn": "Tooth",
    "meaningFr": "Dent",
    "meaningEs": "Diente",
    "meaningKo": "이, 치아",
    "examples": "歯, 齢, 噛",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1212,
    "kanji": "龍 (竜)",
    "displayReading": "Bộ Long",
    "displayReadingEn": "Radical 212 · Dragon",
    "displayReadingFr": "Clé 212 · Dragon",
    "displayReadingEs": "Radical 212 · Dragón",
    "displayReadingKo": "부수 212 · 용 룡",
    "readings": [
      "Long"
    ],
    "meaning": "Con rồng",
    "meaningEn": "Dragon",
    "meaningFr": "Dragon",
    "meaningEs": "Dragón",
    "meaningKo": "용",
    "examples": "龍, 竜, 滝, 襲",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1213,
    "kanji": "龜 (亀)",
    "displayReading": "Bộ Quy",
    "displayReadingEn": "Radical 213 · Turtle",
    "displayReadingFr": "Clé 213 · Tortue",
    "displayReadingEs": "Radical 213 · Tortuga",
    "displayReadingKo": "부수 213 · 거북 귀",
    "readings": [
      "Quy"
    ],
    "meaning": "Con rùa",
    "meaningEn": "Turtle, tortoise",
    "meaningFr": "Tortue",
    "meaningEs": "Tortuga",
    "meaningKo": "거북",
    "examples": "亀, 縄",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1214,
    "kanji": "龠",
    "displayReading": "Bộ Dược",
    "displayReadingEn": "Radical 214 · Flute",
    "displayReadingFr": "Clé 214 · Flûte",
    "displayReadingEs": "Radical 214 · Flauta",
    "displayReadingKo": "부수 214 · 피리 약",
    "readings": [
      "Dược"
    ],
    "meaning": "Ống sáo cổ",
    "meaningEn": "Ancient bamboo flute",
    "meaningFr": "Flûte de Pan ancienne",
    "meaningEs": "Flauta antigua",
    "meaningKo": "피리",
    "examples": "躍, 曜, 濯",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TOPICS, KANJI_DATA, RADICALS_DATA, ALL_STUDY_ITEMS };
}
