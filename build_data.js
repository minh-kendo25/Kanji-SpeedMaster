const fs = require('fs');
const path = require('path');

const kanjiPath = 'D:\\Kanji Kachi\\app\\src\\main\\assets\\kanji_data.json';
const radicalsPath = 'D:\\Kanji Kachi\\app\\src\\main\\assets\\radicals_data.json';

const kanjiData = JSON.parse(fs.readFileSync(kanjiPath, 'utf8'));
const radicalsData = JSON.parse(fs.readFileSync(radicalsPath, 'utf8'));

// Topic Catalog
const TOPICS = [
  { id: "n5_01", level: "N5", title: "Số đếm & Tiền tệ", titleEn: "Numbers & Currency", count: 0 },
  { id: "n5_02", level: "N5", title: "Thời gian & Lịch", titleEn: "Time & Calendar", count: 0 },
  { id: "n5_03", level: "N5", title: "Con người & Gia đình", titleEn: "People & Family", count: 0 },
  { id: "n5_04", level: "N5", title: "Phương hướng & Vị trí", titleEn: "Directions & Positions", count: 0 },
  { id: "n5_05", level: "N5", title: "Giao thông & Di chuyển", titleEn: "Transport & Movement", count: 0 },
  { id: "n5_06", level: "N5", title: "Trường học & Giao tiếp", titleEn: "School & Communication", count: 0 },
  { id: "n5_07", level: "N5", title: "Ẩm thực & Mua sắm", titleEn: "Food & Shopping", count: 0 },
  { id: "n5_08", level: "N5", title: "Thiên nhiên, Màu sắc & Cơ thể", titleEn: "Nature, Colors & Body", count: 0 },
  { id: "n4_01", level: "N4", title: "Gia đình mở rộng, Xã hội & Nghề nghiệp", titleEn: "Extended Family, Society & Work", count: 0 },
  { id: "n4_02", level: "N4", title: "Bốn mùa, Buổi trong ngày & Thời tiết", titleEn: "Seasons, Times of Day & Weather", count: 0 },
  { id: "n4_03", level: "N4", title: "Ẩm thực, Nấu nướng & Nhà hàng", titleEn: "Cooking, Dining & Restaurants", count: 0 },
  { id: "n4_04", level: "N4", title: "Sở thích, Văn hóa & Thể thao", titleEn: "Hobbies, Culture & Sports", count: 0 },
  { id: "n4_05", level: "N4", title: "Đô thị, Giao thông & Du lịch", titleEn: "City, Transit & Travel", count: 0 },
  { id: "n4_06", level: "N4", title: "Sức khỏe, Cơ thể & Bệnh viện", titleEn: "Health, Body & Hospital", count: 0 },
  { id: "n4_07", level: "N4", title: "Trường học, Thi cử & Tư duy", titleEn: "School, Exams & Thinking", count: 0 },
  { id: "n4_08", level: "N4", title: "Mua sắm, Đồ vật & Tính chất", titleEn: "Shopping, Objects & Qualities", count: 0 },
  { id: "n4_09", level: "N4", title: "Lễ hội, Lịch sử & Tự nhiên mở rộng", titleEn: "Festivals, History & Nature", count: 0 },
  { id: "n4_10", level: "N4", title: "Động từ hành động & Sinh hoạt hằng ngày", titleEn: "Action Verbs & Daily Life", count: 0 },
  { id: "n4_11", level: "N4", title: "Cảm xúc, An toàn & Khái niệm cốt lõi", titleEn: "Emotions, Safety & Core Concepts", count: 0 },
  { id: "rad_1_stroke", level: "RADICALS", title: "Bộ 1 nét (6 bộ)", titleEn: "1-Stroke Radicals (6)", range: [1001, 1006], count: 6 },
  { id: "rad_2_stroke", level: "RADICALS", title: "Bộ 2 nét (23 bộ)", titleEn: "2-Stroke Radicals (23)", range: [1007, 1029], count: 23 },
  { id: "rad_3_stroke", level: "RADICALS", title: "Bộ 3 nét (31 bộ)", titleEn: "3-Stroke Radicals (31)", range: [1030, 1060], count: 31 },
  { id: "rad_4_stroke", level: "RADICALS", title: "Bộ 4 nét (34 bộ)", titleEn: "4-Stroke Radicals (34)", range: [1061, 1094], count: 34 },
  { id: "rad_5_stroke", level: "RADICALS", title: "Bộ 5 nét (23 bộ)", titleEn: "5-Stroke Radicals (23)", range: [1095, 1117], count: 23 },
  { id: "rad_6_stroke", level: "RADICALS", title: "Bộ 6 nét (29 bộ)", titleEn: "6-Stroke Radicals (29)", range: [1118, 1146], count: 29 },
  { id: "rad_7_stroke", level: "RADICALS", title: "Bộ 7 nét (20 bộ)", titleEn: "7-Stroke Radicals (20)", range: [1147, 1166], count: 20 },
  { id: "rad_8_stroke", level: "RADICALS", title: "Bộ 8 nét (9 bộ)", titleEn: "8-Stroke Radicals (9)", range: [1167, 1175], count: 9 },
  { id: "rad_9_10_stroke", level: "RADICALS", title: "Bộ 9 - 10 nét (19 bộ)", titleEn: "9–10 Stroke Radicals (19)", range: [1176, 1194], count: 19 },
  { id: "rad_11_17_stroke", level: "RADICALS", title: "Bộ 11 - 17 nét (20 bộ)", titleEn: "11–17 Stroke Radicals (20)", range: [1195, 1214], count: 20 }
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
    readings: item.readings || [item.displayReading],
    meaning: item.meaning,
    meaningEn: item.meaningEn || item.meaning,
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
