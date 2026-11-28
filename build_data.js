const fs = require('fs');
const path = require('path');

const kanjiPath = 'D:\\Kanji Kachi\\app\\src\\main\\assets\\kanji_data.json';
const radicalsPath = 'D:\\Kanji Kachi\\app\\src\\main\\assets\\radicals_data.json';

const kanjiData = JSON.parse(fs.readFileSync(kanjiPath, 'utf8'));
const radicalsData = JSON.parse(fs.readFileSync(radicalsPath, 'utf8'));

// Topic Catalog
const TOPICS = [
  { id: "n5_01", level: "N5", title: "Số đếm & Tiền tệ", titleEn: "Numbers & Currency", titleFr: "Nombres et Monnaie", titleEs: "Números y Moneda", titleKo: "숫자 및 화폐", count: 0 },
  { id: "n5_02", level: "N5", title: "Thời gian & Lịch", titleEn: "Time & Calendar", titleFr: "Temps et Calendrier", titleEs: "Tiempo y Calendario", titleKo: "시간 및 달력", count: 0 },
  { id: "n5_03", level: "N5", title: "Con người & Gia đình", titleEn: "People & Family", titleFr: "Personnes et Famille", titleEs: "Personas y Familia", titleKo: "사람 및 가족", count: 0 },
  { id: "n5_04", level: "N5", title: "Phương hướng & Vị trí", titleEn: "Directions & Positions", titleFr: "Directions et Positions", titleEs: "Direcciones y Posiciones", titleKo: "방향 및 위치", count: 0 },
  { id: "n5_05", level: "N5", title: "Giao thông & Di chuyển", titleEn: "Transport & Movement", titleFr: "Transports et Déplacements", titleEs: "Transporte y Desplazamiento", titleKo: "교통 및 이동", count: 0 },
  { id: "n5_06", level: "N5", title: "Trường học & Giao tiếp", titleEn: "School & Communication", titleFr: "École et Communication", titleEs: "Escuela y Comunicación", titleKo: "학교 및 의사소통", count: 0 },
  { id: "n5_07", level: "N5", title: "Ẩm thực & Mua sắm", titleEn: "Food & Shopping", titleFr: "Alimentation et Achats", titleEs: "Comida y Compras", titleKo: "음식 및 쇼핑", count: 0 },
  { id: "n5_08", level: "N5", title: "Thiên nhiên, Màu sắc & Cơ thể", titleEn: "Nature, Colors & Body", titleFr: "Nature, Couleurs et Corps", titleEs: "Naturaleza, Colores y Cuerpo", titleKo: "자연, 색깔 및 신체", count: 0 },
  { id: "n4_01", level: "N4", title: "Gia đình mở rộng, Xã hội & Nghề nghiệp", titleEn: "Extended Family, Society & Work", titleFr: "Famille élargie, Société et Travail", titleEs: "Familia, Sociedad y Trabajo", titleKo: "가족, 사회 및 직업", count: 0 },
  { id: "n4_02", level: "N4", title: "Bốn mùa, Buổi trong ngày & Thời tiết", titleEn: "Seasons, Times of Day & Weather", titleFr: "Saisons, Moments et Météo", titleEs: "Estaciones, Día y Clima", titleKo: "사계절, 하루 및 날씨", count: 0 },
  { id: "n4_03", level: "N4", title: "Ẩm thực, Nấu nướng & Nhà hàng", titleEn: "Cooking, Dining & Restaurants", titleFr: "Cuisine, Repas et Restaurants", titleEs: "Cocina, Comidas y Restaurantes", titleKo: "요리, 식사 및 식당", count: 0 },
  { id: "n4_04", level: "N4", title: "Sở thích, Văn hóa & Thể thao", titleEn: "Hobbies, Culture & Sports", titleFr: "Loisirs, Culture et Sports", titleEs: "Aficiones, Cultura y Deportes", titleKo: "취미, 문화 및 스포츠", count: 0 },
  { id: "n4_05", level: "N4", title: "Đô thị, Giao thông & Du lịch", titleEn: "City, Transit & Travel", titleFr: "Ville, Transports et Voyages", titleEs: "Ciudad, Transporte y Viajes", titleKo: "도시, 교통 및 여행", count: 0 },
  { id: "n4_06", level: "N4", title: "Sức khỏe, Cơ thể & Bệnh viện", titleEn: "Health, Body & Hospital", titleFr: "Santé, Corps et Hôpital", titleEs: "Salud, Cuerpo y Hospital", titleKo: "건강, 신체 및 병원", count: 0 },
  { id: "n4_07", level: "N4", title: "Trường học, Thi cử & Tư duy", titleEn: "School, Exams & Thinking", titleFr: "École, Examens et Réflexion", titleEs: "Escuela, Exámenes y Pensamiento", titleKo: "학교, 시험 및 사고", count: 0 },
  { id: "n4_08", level: "N4", title: "Mua sắm, Đồ vật & Tính chất", titleEn: "Shopping, Objects & Qualities", titleFr: "Achats, Objets et Qualités", titleEs: "Compras, Objetos y Cualidades", titleKo: "쇼핑, 사물 및 성질", count: 0 },
  { id: "n4_09", level: "N4", title: "Lễ hội, Lịch sử & Tự nhiên mở rộng", titleEn: "Festivals, History & Nature", titleFr: "Festivals, Histoire et Nature", titleEs: "Festivales, Historia y Naturaleza", titleKo: "축제, 역사 및 자연", count: 0 },
  { id: "n4_10", level: "N4", title: "Động từ hành động & Sinh hoạt hằng ngày", titleEn: "Action Verbs & Daily Life", titleFr: "Verbes d'action et Quotidien", titleEs: "Verbos de Acción y Vida Diaria", titleKo: "동작 동사 및 일상생활", count: 0 },
  { id: "n4_11", level: "N4", title: "Cảm xúc, An toàn & Khái niệm cốt lõi", titleEn: "Emotions, Safety & Core Concepts", titleFr: "Émotions, Sécurité et Concepts clés", titleEs: "Emociones, Seguridad y Conceptos Clave", titleKo: "감정, 안전 및 핵심 개념", count: 0 },
  { id: "rad_1_stroke", level: "RADICALS", title: "Bộ 1 nét (6 bộ)", titleEn: "1-Stroke Radicals (6)", titleFr: "Clés à 1 trait (6)", titleEs: "Radicales de 1 trazo (6)", titleKo: "1획 부수 (6개)", range: [1001, 1006], count: 6 },
  { id: "rad_2_stroke", level: "RADICALS", title: "Bộ 2 nét (23 bộ)", titleEn: "2-Stroke Radicals (23)", titleFr: "Clés à 2 traits (23)", titleEs: "Radicales de 2 trazos (23)", titleKo: "2획 부수 (23개)", range: [1007, 1029], count: 23 },
  { id: "rad_3_stroke", level: "RADICALS", title: "Bộ 3 nét (31 bộ)", titleEn: "3-Stroke Radicals (31)", titleFr: "Clés à 3 traits (31)", titleEs: "Radicales de 3 trazos (31)", titleKo: "3획 부수 (31개)", range: [1030, 1060], count: 31 },
  { id: "rad_4_stroke", level: "RADICALS", title: "Bộ 4 nét (34 bộ)", titleEn: "4-Stroke Radicals (34)", titleFr: "Clés à 4 traits (34)", titleEs: "Radicales de 4 trazos (34)", titleKo: "4획 부수 (34개)", range: [1061, 1094], count: 34 },
  { id: "rad_5_stroke", level: "RADICALS", title: "Bộ 5 nét (23 bộ)", titleEn: "5-Stroke Radicals (23)", titleFr: "Clés à 5 traits (23)", titleEs: "Radicales de 5 trazos (23)", titleKo: "5획 부수 (23개)", range: [1095, 1117], count: 23 },
  { id: "rad_6_stroke", level: "RADICALS", title: "Bộ 6 nét (29 bộ)", titleEn: "6-Stroke Radicals (29)", titleFr: "Clés à 6 traits (29)", titleEs: "Radicales de 6 trazos (29)", titleKo: "6획 부수 (29개)", range: [1118, 1146], count: 29 },
  { id: "rad_7_stroke", level: "RADICALS", title: "Bộ 7 nét (20 bộ)", titleEn: "7-Stroke Radicals (20)", titleFr: "Clés à 7 traits (20)", titleEs: "Radicales de 7 trazos (20)", titleKo: "7획 부수 (20개)", range: [1147, 1166], count: 20 },
  { id: "rad_8_stroke", level: "RADICALS", title: "Bộ 8 nét (9 bộ)", titleEn: "8-Stroke Radicals (9)", titleFr: "Clés à 8 traits (9)", titleEs: "Radicales de 8 trazos (9)", titleKo: "8획 부수 (9개)", range: [1167, 1175], count: 9 },
  { id: "rad_9_10_stroke", level: "RADICALS", title: "Bộ 9 - 10 nét (19 bộ)", titleEn: "9–10 Stroke Radicals (19)", titleFr: "Clés à 9–10 traits (19)", titleEs: "Radicales de 9–10 trazos (19)", titleKo: "9~10획 부수 (19개)", range: [1176, 1194], count: 19 },
  { id: "rad_11_17_stroke", level: "RADICALS", title: "Bộ 11 - 17 nét (20 bộ)", titleEn: "11–17 Stroke Radicals (20)", titleFr: "Clés à 11–17 traits (20)", titleEs: "Radicales de 11–17 trazos (20)", titleKo: "11~17획 부수 (20개)", range: [1195, 1214], count: 20 }
];

// Enrich kanji items with level
const enrichedKanji = kanjiData.map(item => {
  const level = item.topicId && item.topicId.startsWith('n4') ? 'N4' : 'N5';
  return {
    id: item.id,
    kanji: item.kanji,
    displayReading: item.displayReading,
    readings: item.readings || [item.displayReading],
    meaning: item.meaning,
    meaningEn: item.meaningEn || item.meaning,
    meaningFr: item.meaningFr || item.meaningEn || item.meaning,
    meaningEs: item.meaningEs || item.meaningEn || item.meaning,
    meaningKo: item.meaningKo || item.meaningEn || item.meaning,
    topicId: item.topicId || (level === 'N5' ? 'n5_01' : 'n4_01'),
    level: level
  };
});

// Enrich radicals
const enrichedRadicals = radicalsData.map(item => {
  let topicId = 'rad_1_stroke';
  for (const t of TOPICS) {
    if (t.range && item.id >= t.range[0] && item.id <= t.range[1]) {
      topicId = t.id;
      break;
    }
  }
  return {
    id: item.id,
    kanji: item.kanji,
    displayReading: item.displayReading,
    displayReadingEn: item.displayReadingEn || item.displayReading,
    displayReadingFr: item.displayReadingFr || item.displayReadingEn || item.displayReading,
    displayReadingEs: item.displayReadingEs || item.displayReadingEn || item.displayReading,
    displayReadingKo: item.displayReadingKo || item.displayReadingEn || item.displayReading,
    readings: item.readings || [item.displayReading],
    meaning: item.meaning,
    meaningEn: item.meaningEn || item.meaning,
    meaningFr: item.meaningFr || item.meaningEn || item.meaning,
    meaningEs: item.meaningEs || item.meaningEn || item.meaning,
    meaningKo: item.meaningKo || item.meaningEn || item.meaning,
    examples: item.examples || '',
    topicId: topicId,
    level: 'RADICALS',
    isRadical: true
  };
});

// Update topic counts
TOPICS.forEach(topic => {
  if (topic.level === 'RADICALS') {
    topic.count = enrichedRadicals.filter(r => r.topicId === topic.id).length;
  } else {
    topic.count = enrichedKanji.filter(k => k.topicId === topic.id).length;
  }
});

// All items combined
const ALL_ITEMS = [...enrichedKanji, ...enrichedRadicals];

const outputContent = `// Kanji Kachi - Complete Vocabulary and Radicals Dataset
// Total Kanji: ${enrichedKanji.length} (N5: ${enrichedKanji.filter(k => k.level === 'N5').length}, N4: ${enrichedKanji.filter(k => k.level === 'N4').length})
// Total Radicals: ${enrichedRadicals.length} (214 Bộ thủ Khang Hy)
// Total Dataset Items: ${ALL_ITEMS.length}

const TOPICS = ${JSON.stringify(TOPICS, null, 2)};

const KANJI_DATA = ${JSON.stringify(enrichedKanji, null, 2)};

const RADICALS_DATA = ${JSON.stringify(enrichedRadicals, null, 2)};

const ALL_STUDY_ITEMS = ${JSON.stringify(ALL_ITEMS, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TOPICS, KANJI_DATA, RADICALS_DATA, ALL_STUDY_ITEMS };
}
`;

fs.writeFileSync('d:\\japs\\data.js', outputContent, 'utf8');
console.log('Successfully generated d:\\japs\\data.js with ' + ALL_ITEMS.length + ' items.');
