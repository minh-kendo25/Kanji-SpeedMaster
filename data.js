// Kanji Kachi - Complete Vocabulary and Radicals Dataset
// Total Kanji: 1061 (N5: 350, N4: 711)
// Total Radicals: 214 (214 Bộ thủ Khang Hy)
// Total Dataset Items: 1275

const TOPICS = [
  {
    "id": "n5_01",
    "level": "N5",
    "title": "Số đếm & Tiền tệ",
    "count": 39
  },
  {
    "id": "n5_02",
    "level": "N5",
    "title": "Thời gian & Lịch",
    "count": 72
  },
  {
    "id": "n5_03",
    "level": "N5",
    "title": "Con người & Gia đình",
    "count": 36
  },
  {
    "id": "n5_04",
    "level": "N5",
    "title": "Phương hướng & Vị trí",
    "count": 37
  },
  {
    "id": "n5_05",
    "level": "N5",
    "title": "Giao thông & Di chuyển",
    "count": 30
  },
  {
    "id": "n5_06",
    "level": "N5",
    "title": "Trường học & Giao tiếp",
    "count": 43
  },
  {
    "id": "n5_07",
    "level": "N5",
    "title": "Ẩm thực & Mua sắm",
    "count": 38
  },
  {
    "id": "n5_08",
    "level": "N5",
    "title": "Thiên nhiên, Màu sắc & Cơ thể",
    "count": 55
  },
  {
    "id": "n4_01",
    "level": "N4",
    "title": "Gia đình mở rộng, Xã hội & Nghề nghiệp",
    "count": 59
  },
  {
    "id": "n4_02",
    "level": "N4",
    "title": "Bốn mùa, Buổi trong ngày & Thời tiết",
    "count": 54
  },
  {
    "id": "n4_03",
    "level": "N4",
    "title": "Ẩm thực, Nấu nướng & Nhà hàng",
    "count": 62
  },
  {
    "id": "n4_04",
    "level": "N4",
    "title": "Sở thích, Văn hóa & Thể thao",
    "count": 59
  },
  {
    "id": "n4_05",
    "level": "N4",
    "title": "Đô thị, Giao thông & Du lịch",
    "count": 80
  },
  {
    "id": "n4_06",
    "level": "N4",
    "title": "Sức khỏe, Cơ thể & Bệnh viện",
    "count": 47
  },
  {
    "id": "n4_07",
    "level": "N4",
    "title": "Trường học, Thi cử & Tư duy",
    "count": 61
  },
  {
    "id": "n4_08",
    "level": "N4",
    "title": "Mua sắm, Đồ vật & Tính chất",
    "count": 81
  },
  {
    "id": "n4_09",
    "level": "N4",
    "title": "Lễ hội, Lịch sử & Tự nhiên mở rộng",
    "count": 50
  },
  {
    "id": "n4_10",
    "level": "N4",
    "title": "Động từ hành động & Sinh hoạt hằng ngày",
    "count": 88
  },
  {
    "id": "n4_11",
    "level": "N4",
    "title": "Cảm xúc, An toàn & Khái niệm cốt lõi",
    "count": 70
  },
  {
    "id": "rad_1_stroke",
    "level": "RADICALS",
    "title": "Bộ 1 nét (6 bộ)",
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
    "topicId": "n4_11",
    "level": "N4"
  }
];

const RADICALS_DATA = [
  {
    "id": 1001,
    "kanji": "一",
    "displayReading": "Bộ Nhất",
    "readings": [
      "Nhất"
    ],
    "meaning": "Một, số một",
    "examples": "一, 七, 三, 上, 下",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1002,
    "kanji": "丨",
    "displayReading": "Bộ Cổn",
    "readings": [
      "Cổn"
    ],
    "meaning": "Nét sổ thẳng",
    "examples": "中, 串, 豊",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1003,
    "kanji": "丶",
    "displayReading": "Bộ Chủ",
    "readings": [
      "Chủ"
    ],
    "meaning": "Điểm, chấm",
    "examples": "主, 丸, 丹",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1004,
    "kanji": "丿",
    "displayReading": "Bộ Phiệt",
    "readings": [
      "Phiệt"
    ],
    "meaning": "Nét phẩy",
    "examples": "久, 之, 乗",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1005,
    "kanji": "乙 (乚, ⺄)",
    "displayReading": "Bộ Ất",
    "readings": [
      "Ất"
    ],
    "meaning": "Vị trí thứ 2 trong Thiên Can, uốn cong",
    "examples": "九, 乱, 乳",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1006,
    "kanji": "亅",
    "displayReading": "Bộ Quyết",
    "readings": [
      "Quyết"
    ],
    "meaning": "Nét sổ có móc",
    "examples": "了, 予, 事",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1007,
    "kanji": "二",
    "displayReading": "Bộ Nhị",
    "readings": [
      "Nhị"
    ],
    "meaning": "Số hai",
    "examples": "二, 五, 井, 亜",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1008,
    "kanji": "亠",
    "displayReading": "Bộ Đầu",
    "readings": [
      "Đầu"
    ],
    "meaning": "Nắp đậy, phần đầu (không có nghĩa độc lập)",
    "examples": "亡, 交, 京, 高",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1009,
    "kanji": "人 (亻, 𠆢)",
    "displayReading": "Bộ Nhân",
    "readings": [
      "Nhân"
    ],
    "meaning": "Người",
    "examples": "人, 休, 体, 働, 今",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1010,
    "kanji": "儿",
    "displayReading": "Bộ Nhân (nhi)",
    "readings": [
      "Nhân (nhi)"
    ],
    "meaning": "Người đi, đôi chân",
    "examples": "元, 兄, 光, 先",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1011,
    "kanji": "入",
    "displayReading": "Bộ Nhập",
    "readings": [
      "Nhập"
    ],
    "meaning": "Đi vào",
    "examples": "入, 全, 両",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1012,
    "kanji": "八 (丷)",
    "displayReading": "Bộ Bát",
    "readings": [
      "Bát"
    ],
    "meaning": "Số tám, chia tách",
    "examples": "八, 六, 公, 共",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1013,
    "kanji": "冂",
    "displayReading": "Bộ Quynh",
    "readings": [
      "Quynh"
    ],
    "meaning": "Vùng biên giới, khoảng trống bao quanh",
    "examples": "内, 円, 再, 冊",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1014,
    "kanji": "冖",
    "displayReading": "Bộ Mịch",
    "readings": [
      "Mịch"
    ],
    "meaning": "Trùm khăn lên, che đậy",
    "examples": "写, 冠, 軍",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1015,
    "kanji": "冫",
    "displayReading": "Bộ Băng",
    "readings": [
      "Băng"
    ],
    "meaning": "Nước đá, lạnh giá",
    "examples": "氷, 冷, 冬, 凍",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1016,
    "kanji": "几",
    "displayReading": "Bộ Kỷ",
    "readings": [
      "Kỷ"
    ],
    "meaning": "Cái bàn nhỏ, ghế tựa",
    "examples": "机, 凡, 風",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1017,
    "kanji": "凵",
    "displayReading": "Bộ Khảm",
    "readings": [
      "Khảm"
    ],
    "meaning": "Há miệng, hố sâu",
    "examples": "出, 凶, 凸, 凹",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1018,
    "kanji": "刀 (刂)",
    "displayReading": "Bộ Đao",
    "readings": [
      "Đao"
    ],
    "meaning": "Con dao, cắt gọt",
    "examples": "刀, 切, 分, 利, 別",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1019,
    "kanji": "力",
    "displayReading": "Bộ Lực",
    "readings": [
      "Lực"
    ],
    "meaning": "Sức mạnh",
    "examples": "力, 動, 働, 勉, 助",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1020,
    "kanji": "勹",
    "displayReading": "Bộ Bao",
    "readings": [
      "Bao"
    ],
    "meaning": "Bao bọc, ôm ấp",
    "examples": "包, 句, 匂",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1021,
    "kanji": "匕",
    "displayReading": "Bộ Chủy",
    "readings": [
      "Chủy"
    ],
    "meaning": "Cái thìa, muỗng",
    "examples": "化, 北, 匙",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1022,
    "kanji": "匚",
    "displayReading": "Bộ Phương",
    "readings": [
      "Phương"
    ],
    "meaning": "Cái hộp, tủ đựng",
    "examples": "匠, 匹, 区",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1023,
    "kanji": "匸",
    "displayReading": "Bộ Hệ",
    "readings": [
      "Hệ"
    ],
    "meaning": "Che giấu, đậy lại",
    "examples": "区, 医, 匿",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1024,
    "kanji": "十",
    "displayReading": "Bộ Thập",
    "readings": [
      "Thập"
    ],
    "meaning": "Số mười, đầy đủ",
    "examples": "十, 千, 午, 半, 南",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1025,
    "kanji": "卜",
    "displayReading": "Bộ Bốc",
    "readings": [
      "Bốc"
    ],
    "meaning": "Xem bói",
    "examples": "占, 卦, 外",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1026,
    "kanji": "卩 (㔾)",
    "displayReading": "Bộ Tiết",
    "readings": [
      "Tiết"
    ],
    "meaning": "Đốt tre, con dấu",
    "examples": "印, 危, 即, 卵",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1027,
    "kanji": "厂",
    "displayReading": "Bộ Hán",
    "readings": [
      "Hán"
    ],
    "meaning": "Sườn núi, vách đá",
    "examples": "原, 厚, 圧, 歴",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1028,
    "kanji": "厶",
    "displayReading": "Bộ Khư (Tư)",
    "readings": [
      "Khư (Tư)"
    ],
    "meaning": "Riêng tư",
    "examples": "去, 参, 私",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1029,
    "kanji": "又",
    "displayReading": "Bộ Hựu",
    "readings": [
      "Hựu"
    ],
    "meaning": "Lại nữa, bàn tay phải",
    "examples": "又, 友, 反, 取, 受",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1030,
    "kanji": "口",
    "displayReading": "Bộ Khẩu",
    "readings": [
      "Khẩu"
    ],
    "meaning": "Cái miệng, ăn nói",
    "examples": "口, 古, 味, 呼, 問",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1031,
    "kanji": "囗",
    "displayReading": "Bộ Vi",
    "readings": [
      "Vi"
    ],
    "meaning": "Vây quanh, biên giới",
    "examples": "国, 四, 回, 園, 図",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1032,
    "kanji": "土",
    "displayReading": "Bộ Thổ",
    "readings": [
      "Thổ"
    ],
    "meaning": "Đất đai",
    "examples": "土, 地, 場, 坂, 城",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1033,
    "kanji": "士",
    "displayReading": "Bộ Sĩ",
    "readings": [
      "Sĩ"
    ],
    "meaning": "Kẻ sĩ, học giả, chiến binh",
    "examples": "士, 売, 声, 壮",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1034,
    "kanji": "夂",
    "displayReading": "Bộ Trĩ",
    "readings": [
      "Trĩ"
    ],
    "meaning": "Bước chậm theo sau",
    "examples": "冬, 各, 条",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1035,
    "kanji": "夊",
    "displayReading": "Bộ Tuy",
    "readings": [
      "Tuy"
    ],
    "meaning": "Đi chậm chạp",
    "examples": "夏, 復, 変",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1036,
    "kanji": "夕",
    "displayReading": "Bộ Tịch",
    "readings": [
      "Tịch"
    ],
    "meaning": "Đêm tối, buổi chiều",
    "examples": "夕, 外, 多, 夜, 夢",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1037,
    "kanji": "大",
    "displayReading": "Bộ Đại",
    "readings": [
      "Đại"
    ],
    "meaning": "To lớn",
    "examples": "大, 天, 太, 夫, 奇",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1038,
    "kanji": "女",
    "displayReading": "Bộ Nữ",
    "readings": [
      "Nữ"
    ],
    "meaning": "Phụ nữ, con gái",
    "examples": "女, 好, 姉, 妹, 始",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1039,
    "kanji": "子",
    "displayReading": "Bộ Tử",
    "readings": [
      "Tử"
    ],
    "meaning": "Con cái, trẻ em",
    "examples": "子, 学, 字, 孫, 季",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1040,
    "kanji": "宀",
    "displayReading": "Bộ Miên",
    "readings": [
      "Miên"
    ],
    "meaning": "Mái nhà, che chở",
    "examples": "家, 安, 室, 宿, 守",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1041,
    "kanji": "寸",
    "displayReading": "Bộ Thốn",
    "readings": [
      "Thốn"
    ],
    "meaning": "Đơn vị đo (tấc), quy tắc",
    "examples": "寸, 寺, 対, 専, 導",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1042,
    "kanji": "小 (⺌, ⺍)",
    "displayReading": "Bộ Tiểu",
    "readings": [
      "Tiểu"
    ],
    "meaning": "Nhỏ bé",
    "examples": "小, 少, 尚, 当",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1043,
    "kanji": "尢 (尣)",
    "displayReading": "Bộ Uông",
    "readings": [
      "Uông"
    ],
    "meaning": "Yếu đuối, chân khập khiễng",
    "examples": "就, 尤",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1044,
    "kanji": "尸",
    "displayReading": "Bộ Thi",
    "readings": [
      "Thi"
    ],
    "meaning": "Thây ma, cơ thể nằm",
    "examples": "局, 屋, 届, 居, 層",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1045,
    "kanji": "屮",
    "displayReading": "Bộ Triệt",
    "readings": [
      "Triệt"
    ],
    "meaning": "Mầm non mới nhú",
    "examples": "屯, 逆",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1046,
    "kanji": "山",
    "displayReading": "Bộ Sơn",
    "readings": [
      "Sơn"
    ],
    "meaning": "Ngọn núi",
    "examples": "山, 岩, 島, 峠, 岸",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1047,
    "kanji": "巛 (川)",
    "displayReading": "Bộ Xuyên",
    "readings": [
      "Xuyên"
    ],
    "meaning": "Sông ngòi, dòng chảy",
    "examples": "川, 州, 巡, 巣",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1048,
    "kanji": "工",
    "displayReading": "Bộ Công",
    "readings": [
      "Công"
    ],
    "meaning": "Người thợ, công việc",
    "examples": "工, 左, 差, 巧",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1049,
    "kanji": "己 (已, 巳)",
    "displayReading": "Bộ Kỷ",
    "readings": [
      "Kỷ"
    ],
    "meaning": "Bản thân mình",
    "examples": "己, 巻, 改, 配",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1050,
    "kanji": "巾",
    "displayReading": "Bộ Cân",
    "readings": [
      "Cân"
    ],
    "meaning": "Cái khăn, vải vóc",
    "examples": "市, 布, 席, 帯, 帰",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1051,
    "kanji": "干",
    "displayReading": "Bộ Can",
    "readings": [
      "Can"
    ],
    "meaning": "Khô ráo, can thiệp, cái khiên",
    "examples": "干, 平, 年, 幸, 幹",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1052,
    "kanji": "幺",
    "displayReading": "Bộ Yêu",
    "readings": [
      "Yêu"
    ],
    "meaning": "Nhỏ nhắn, sợi tơ nhỏ",
    "examples": "幼, 幾, 幻, 幽",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1053,
    "kanji": "广",
    "displayReading": "Bộ Nghiễm",
    "readings": [
      "Nghiễm"
    ],
    "meaning": "Mái nhà, tòa nhà",
    "examples": "広, 店, 度, 庫, 庭",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1054,
    "kanji": "廴",
    "displayReading": "Bộ Dẫn",
    "readings": [
      "Dẫn"
    ],
    "meaning": "Bước dài",
    "examples": "建, 延, 廷",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1055,
    "kanji": "廾",
    "displayReading": "Bộ Củng",
    "readings": [
      "Củng"
    ],
    "meaning": "Chắp hai tay",
    "examples": "弁, 弄, 弊",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1056,
    "kanji": "弋",
    "displayReading": "Bộ Dặc",
    "readings": [
      "Dặc"
    ],
    "meaning": "Bắn tên, cái cọc",
    "examples": "式, 弐, 鳶",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1057,
    "kanji": "弓",
    "displayReading": "Bộ Cung",
    "readings": [
      "Cung"
    ],
    "meaning": "Cái cung tên",
    "examples": "弓, 引, 強, 弱, 張",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1058,
    "kanji": "彐 (彑)",
    "displayReading": "Bộ Kệ",
    "readings": [
      "Kệ"
    ],
    "meaning": "Đầu con nhím / lợn",
    "examples": "帰, 録, 当, 雪",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1059,
    "kanji": "彡",
    "displayReading": "Bộ Sam",
    "readings": [
      "Sam"
    ],
    "meaning": "Lông tóc, hoa văn, nét trang trí",
    "examples": "形, 影, 彩, 彫",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1060,
    "kanji": "彳",
    "displayReading": "Bộ Xích",
    "readings": [
      "Xích"
    ],
    "meaning": "Bước chân trái, đi lại",
    "examples": "行, 待, 後, 彼, 役",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1061,
    "kanji": "心 (忄, ⺗)",
    "displayReading": "Bộ Tâm",
    "readings": [
      "Tâm"
    ],
    "meaning": "Trái tim, tâm trí, cảm xúc",
    "examples": "心, 思, 忙, 怖, 情",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1062,
    "kanji": "戈",
    "displayReading": "Bộ Qua",
    "readings": [
      "Qua"
    ],
    "meaning": "Cây qua (vũ khí cổ)",
    "examples": "戦, 成, 我, 戒, 戯",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1063,
    "kanji": "戸 (戶)",
    "displayReading": "Bộ Hộ",
    "readings": [
      "Hộ"
    ],
    "meaning": "Cửa một cánh, hộ gia đình",
    "examples": "戸, 所, 戻, 房, 扇",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1064,
    "kanji": "手 (扌, 龵)",
    "displayReading": "Bộ Thủ",
    "readings": [
      "Thủ"
    ],
    "meaning": "Bàn tay, hành động bằng tay",
    "examples": "手, 持, 打, 押, 投",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1065,
    "kanji": "支",
    "displayReading": "Bộ Chi",
    "readings": [
      "Chi"
    ],
    "meaning": "Cành nhánh, chống đỡ",
    "examples": "支, 技, 枝",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1066,
    "kanji": "攴 (攵)",
    "displayReading": "Bộ Phộc",
    "readings": [
      "Phộc"
    ],
    "meaning": "Đánh khẽ, gõ",
    "examples": "教, 政, 放, 数, 改",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1067,
    "kanji": "文",
    "displayReading": "Bộ Văn",
    "readings": [
      "Văn"
    ],
    "meaning": "Văn chương, chữ viết, hoa văn",
    "examples": "文, 対, 紋, 斎",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1068,
    "kanji": "斗",
    "displayReading": "Bộ Đẩu",
    "readings": [
      "Đẩu"
    ],
    "meaning": "Cái đấu (dụng cụ đong lường)",
    "examples": "料, 斜, 斡",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1069,
    "kanji": "斤",
    "displayReading": "Bộ Cân",
    "readings": [
      "Cân"
    ],
    "meaning": "Cái rìu, đơn vị cân",
    "examples": "新, 近, 断, 折, 所",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1070,
    "kanji": "方",
    "displayReading": "Bộ Phương",
    "readings": [
      "Phương"
    ],
    "meaning": "Phương hướng, vuông vức",
    "examples": "方, 旅, 族, 旗, 放",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1071,
    "kanji": "无 (旡)",
    "displayReading": "Bộ Vô",
    "readings": [
      "Vô"
    ],
    "meaning": "Không có",
    "examples": "既, 無",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1072,
    "kanji": "日",
    "displayReading": "Bộ Nhật",
    "readings": [
      "Nhật"
    ],
    "meaning": "Mặt trời, ngày, thời gian",
    "examples": "日, 明, 時, 晴, 昨",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1073,
    "kanji": "曰",
    "displayReading": "Bộ Viết",
    "readings": [
      "Viết"
    ],
    "meaning": "Nói rằng",
    "examples": "書, 最, 曲, 更",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1074,
    "kanji": "月",
    "displayReading": "Bộ Nguyệt",
    "readings": [
      "Nguyệt"
    ],
    "meaning": "Mặt trăng, tháng (hoặc bộ Nhục - thịt)",
    "examples": "月, 朝, 期, 有, 望",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1075,
    "kanji": "木",
    "displayReading": "Bộ Mộc",
    "readings": [
      "Mộc"
    ],
    "meaning": "Cây cối, gỗ",
    "examples": "木, 林, 森, 机, 本",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1076,
    "kanji": "欠",
    "displayReading": "Bộ Khiếm",
    "readings": [
      "Khiếm"
    ],
    "meaning": "Khiếm khuyết, ngáp, thiếu thốn",
    "examples": "欠, 次, 歌, 飲, 欲",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1077,
    "kanji": "止",
    "displayReading": "Bộ Chỉ",
    "readings": [
      "Chỉ"
    ],
    "meaning": "Dừng lại, bàn chân",
    "examples": "止, 正, 歩, 武, 歳",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1078,
    "kanji": "歹 (歺)",
    "displayReading": "Bộ Đãi",
    "readings": [
      "Đãi"
    ],
    "meaning": "Xương tàn, chết chóc",
    "examples": "死, 残, 殖, 殊",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1079,
    "kanji": "殳",
    "displayReading": "Bộ Thù",
    "readings": [
      "Thù"
    ],
    "meaning": "Binh khí dài, đánh đập",
    "examples": "段, 殺, 殿, 設, 役",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1080,
    "kanji": "毋 (母)",
    "displayReading": "Bộ Vô / Mẫu",
    "readings": [
      "Vô / Mẫu"
    ],
    "meaning": "Chớ, đừng / Người mẹ",
    "examples": "母, 毎, 毒, 貫",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1081,
    "kanji": "比",
    "displayReading": "Bộ Tỷ",
    "readings": [
      "Tỷ"
    ],
    "meaning": "So sánh, kề bên",
    "examples": "比, 皆, 昆",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1082,
    "kanji": "毛",
    "displayReading": "Bộ Mao",
    "readings": [
      "Mao"
    ],
    "meaning": "Lông, tóc",
    "examples": "毛, 尾, 筆, 耗",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1083,
    "kanji": "氏",
    "displayReading": "Bộ Thị",
    "readings": [
      "Thị"
    ],
    "meaning": "Họ, dòng tộc",
    "examples": "氏, 民, 紙",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1084,
    "kanji": "气",
    "displayReading": "Bộ Khí",
    "readings": [
      "Khí"
    ],
    "meaning": "Hơi, không khí",
    "examples": "気, 汽, 雰",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1085,
    "kanji": "水 (氵, 氺)",
    "displayReading": "Bộ Thủy",
    "readings": [
      "Thủy"
    ],
    "meaning": "Nước, chất lỏng",
    "examples": "水, 海, 泳, 洗, 池",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1086,
    "kanji": "火 (灬)",
    "displayReading": "Bộ Hỏa",
    "readings": [
      "Hỏa"
    ],
    "meaning": "Lửa, nhiệt độ",
    "examples": "火, 焼, 熱, 燃, 煙",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1087,
    "kanji": "爪 (爫)",
    "displayReading": "Bộ Trảo",
    "readings": [
      "Trảo"
    ],
    "meaning": "Móng vuốt",
    "examples": "爪, 愛, 受, 採, 争",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1088,
    "kanji": "父",
    "displayReading": "Bộ Phụ",
    "readings": [
      "Phụ"
    ],
    "meaning": "Người cha",
    "examples": "父, 釜, 爺",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1089,
    "kanji": "爻",
    "displayReading": "Bộ Hào",
    "readings": [
      "Hào"
    ],
    "meaning": "Hào trong Kinh Dịch, đan xen",
    "examples": "爽, 爾",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1090,
    "kanji": "爿 (丬)",
    "displayReading": "Bộ Tường",
    "readings": [
      "Tường"
    ],
    "meaning": "Mảnh gỗ, cái giường",
    "examples": "壮, 状, 将, 装",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1091,
    "kanji": "片",
    "displayReading": "Bộ Phiến",
    "readings": [
      "Phiến"
    ],
    "meaning": "Mảnh, tấm, một phía",
    "examples": "片, 版, 牌",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1092,
    "kanji": "牙",
    "displayReading": "Bộ Nha",
    "readings": [
      "Nha"
    ],
    "meaning": "Răng nanh",
    "examples": "牙, 芽, 邪",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1093,
    "kanji": "牛 (牜)",
    "displayReading": "Bộ Ngưu",
    "readings": [
      "Ngưu"
    ],
    "meaning": "Con trâu, con bò",
    "examples": "牛, 物, 特, 牧, 犠",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1094,
    "kanji": "犬 (犭)",
    "displayReading": "Bộ Khuyển",
    "readings": [
      "Khuyển"
    ],
    "meaning": "Con chó, loài thú",
    "examples": "犬, 猫, 独, 犯, 狂",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1095,
    "kanji": "玄",
    "displayReading": "Bộ Huyền",
    "readings": [
      "Huyền"
    ],
    "meaning": "Màu đen huyền, huyền bí",
    "examples": "玄, 率, 弦",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1096,
    "kanji": "玉 (王)",
    "displayReading": "Bộ Ngọc",
    "readings": [
      "Ngọc"
    ],
    "meaning": "Đá quý, ngọc báu",
    "examples": "玉, 王, 現, 理, 球",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1097,
    "kanji": "瓜",
    "displayReading": "Bộ Qua",
    "readings": [
      "Qua"
    ],
    "meaning": "Quả dưa",
    "examples": "瓜, 孤, 弧",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1098,
    "kanji": "瓦",
    "displayReading": "Bộ Ngõa",
    "readings": [
      "Ngõa"
    ],
    "meaning": "Ngói lợp nhà, đồ gốm",
    "examples": "瓦, 瓶, 瓷",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1099,
    "kanji": "甘",
    "displayReading": "Bộ Cam",
    "readings": [
      "Cam"
    ],
    "meaning": "Ngọt ngào",
    "examples": "甘, 甚, 某",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1100,
    "kanji": "生",
    "displayReading": "Bộ Sinh",
    "readings": [
      "Sinh"
    ],
    "meaning": "Sinh sống, sinh ra, tươi sống",
    "examples": "生, 産, 星, 性",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1101,
    "kanji": "用",
    "displayReading": "Bộ Dụng",
    "readings": [
      "Dụng"
    ],
    "meaning": "Sử dụng, công dụng",
    "examples": "用, 庸, 備",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1102,
    "kanji": "田",
    "displayReading": "Bộ Điền",
    "readings": [
      "Điền"
    ],
    "meaning": "Ruộng đồng",
    "examples": "田, 男, 町, 界, 番",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1103,
    "kanji": "疋 (⺪)",
    "displayReading": "Bộ Sơ (Thất)",
    "readings": [
      "Sơ (Thất)"
    ],
    "meaning": "Đơn vị đo vải, bàn chân",
    "examples": "疎, 疑, 楚",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1104,
    "kanji": "疒",
    "displayReading": "Bộ Nạch",
    "readings": [
      "Nạch"
    ],
    "meaning": "Bệnh tật, đau ốm",
    "examples": "病, 痛, 疲, 症, 療",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1105,
    "kanji": "癶",
    "displayReading": "Bộ Bát",
    "readings": [
      "Bát"
    ],
    "meaning": "Hai bàn chân bước ngược nhau",
    "examples": "発, 登",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1106,
    "kanji": "白",
    "displayReading": "Bộ Bạch",
    "readings": [
      "Bạch"
    ],
    "meaning": "Màu trắng, rõ ràng",
    "examples": "白, 百, 的, 皇, 皆",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1107,
    "kanji": "皮",
    "displayReading": "Bộ Bì",
    "readings": [
      "Bì"
    ],
    "meaning": "Da, vỏ ngoài",
    "examples": "皮, 波, 破, 被",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1108,
    "kanji": "皿",
    "displayReading": "Bộ Mãnh",
    "readings": [
      "Mãnh"
    ],
    "meaning": "Cái đĩa, bát, đồ đựng",
    "examples": "皿, 血, 盆, 盛, 監",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1109,
    "kanji": "目",
    "displayReading": "Bộ Mục",
    "readings": [
      "Mục"
    ],
    "meaning": "Con mắt, nhìn ngắm",
    "examples": "目, 見, 眠, 相, 省",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1110,
    "kanji": "矛",
    "displayReading": "Bộ Mâu",
    "readings": [
      "Mâu"
    ],
    "meaning": "Cây giáo, cây mâu",
    "examples": "矛, 柔, 務, 霧",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1111,
    "kanji": "矢",
    "displayReading": "Bộ Thỉ",
    "readings": [
      "Thỉ"
    ],
    "meaning": "Mũi tên",
    "examples": "矢, 知, 短, 族, 矯",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1112,
    "kanji": "石",
    "displayReading": "Bộ Thạch",
    "readings": [
      "Thạch"
    ],
    "meaning": "Đá, tảng đá",
    "examples": "石, 砂, 研, 破, 確",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1113,
    "kanji": "示 (礻)",
    "displayReading": "Bộ Thị",
    "readings": [
      "Thị"
    ],
    "meaning": "Thần linh, lễ tế, chỉ bảo",
    "examples": "示, 社, 神, 福, 礼",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1114,
    "kanji": "禸",
    "displayReading": "Bộ Nhựu",
    "readings": [
      "Nhựu"
    ],
    "meaning": "Vết chân thú",
    "examples": "離, 禹, 禽",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1115,
    "kanji": "禾",
    "displayReading": "Bộ Hòa",
    "readings": [
      "Hòa"
    ],
    "meaning": "Cây lúa, ngũ cốc",
    "examples": "秋, 科, 移, 税, 秒",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1116,
    "kanji": "穴",
    "displayReading": "Bộ Huyệt",
    "readings": [
      "Huyệt"
    ],
    "meaning": "Hang động, cái lỗ",
    "examples": "穴, 空, 窓, 突, 究",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1117,
    "kanji": "立",
    "displayReading": "Bộ Lập",
    "readings": [
      "Lập"
    ],
    "meaning": "Đứng thẳng, thiết lập",
    "examples": "立, 音, 章, 童, 競",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1118,
    "kanji": "竹 (⺮)",
    "displayReading": "Bộ Trúc",
    "readings": [
      "Trúc"
    ],
    "meaning": "Cây tre, cây trúc",
    "examples": "竹, 笑, 第, 答, 筆",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1119,
    "kanji": "米",
    "displayReading": "Bộ Mễ",
    "readings": [
      "Mễ"
    ],
    "meaning": "Hạt gạo",
    "examples": "米, 料, 粉, 精, 糖",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1120,
    "kanji": "糸 (糹)",
    "displayReading": "Bộ Mịch",
    "readings": [
      "Mịch"
    ],
    "meaning": "Sợi tơ, dây, sự liên kết",
    "examples": "糸, 紙, 絵, 結, 続",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1121,
    "kanji": "缶",
    "displayReading": "Bộ Phẫu",
    "readings": [
      "Phẫu"
    ],
    "meaning": "Cái bình sành, đồ gốm",
    "examples": "缶, 欠, 陶, 鬱",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1122,
    "kanji": "网 (罒, ⺳)",
    "displayReading": "Bộ Võng",
    "readings": [
      "Võng"
    ],
    "meaning": "Cái lưới",
    "examples": "買, 置, 罪, 罰, 署",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1123,
    "kanji": "羊 (⺶, ⺷)",
    "displayReading": "Bộ Dương",
    "readings": [
      "Dương"
    ],
    "meaning": "Con cừu, con dê",
    "examples": "羊, 美, 着, 義, 群",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1124,
    "kanji": "羽",
    "displayReading": "Bộ Vũ",
    "readings": [
      "Vũ"
    ],
    "meaning": "Lông vũ, đôi cánh",
    "examples": "羽, 習, 翌, 翻, 翼",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1125,
    "kanji": "老 (耂)",
    "displayReading": "Bộ Lão",
    "readings": [
      "Lão"
    ],
    "meaning": "Già cả, người lớn tuổi",
    "examples": "老, 考, 者, 孝",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1126,
    "kanji": "而",
    "displayReading": "Bộ Nhi",
    "readings": [
      "Nhi"
    ],
    "meaning": "Mà, râu cằm",
    "examples": "耐, 端, 需",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1127,
    "kanji": "耒",
    "displayReading": "Bộ Lỗi",
    "readings": [
      "Lỗi"
    ],
    "meaning": "Cái cày",
    "examples": "耕, 耗, 籍",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1128,
    "kanji": "耳",
    "displayReading": "Bộ Nhĩ",
    "readings": [
      "Nhĩ"
    ],
    "meaning": "Cái tai, lắng nghe",
    "examples": "耳, 聞, 聴, 職, 聖",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1129,
    "kanji": "聿 (⺻)",
    "displayReading": "Bộ Duật",
    "readings": [
      "Duật"
    ],
    "meaning": "Cây bút viết",
    "examples": "筆, 書, 建, 律, 津",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1130,
    "kanji": "肉 (月)",
    "displayReading": "Bộ Nhục",
    "readings": [
      "Nhục"
    ],
    "meaning": "Thịt, bộ phận cơ thể",
    "examples": "肉, 腕, 腹, 胸, 育",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1131,
    "kanji": "臣",
    "displayReading": "Bộ Thần",
    "readings": [
      "Thần"
    ],
    "meaning": "Bề tôi, quan lại",
    "examples": "臣, 臨, 堅, 賢",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1132,
    "kanji": "自",
    "displayReading": "Bộ Tự",
    "readings": [
      "Tự"
    ],
    "meaning": "Tự mình, cái mũi",
    "examples": "自, 息, 臭, 鼻",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1133,
    "kanji": "至",
    "displayReading": "Bộ Chí",
    "readings": [
      "Chí"
    ],
    "meaning": "Đến nơi, cực điểm",
    "examples": "至, 到, 致, 室",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1134,
    "kanji": "臼",
    "displayReading": "Bộ Cữu",
    "readings": [
      "Cữu"
    ],
    "meaning": "Cái cối giã gạo",
    "examples": "旧, 興, 与, 児",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1135,
    "kanji": "舌",
    "displayReading": "Bộ Thiệt",
    "readings": [
      "Thiệt"
    ],
    "meaning": "Cái lưỡi",
    "examples": "舌, 話, 辞, 乱, 舗",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1136,
    "kanji": "舛",
    "displayReading": "Bộ Suyễn",
    "readings": [
      "Suyễn"
    ],
    "meaning": "Sai lầm, trái ngược",
    "examples": "舞, 瞬, 隣",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1137,
    "kanji": "舟",
    "displayReading": "Bộ Chu",
    "readings": [
      "Chu"
    ],
    "meaning": "Con thuyền",
    "examples": "舟, 船, 航, 艦, 般",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1138,
    "kanji": "艮",
    "displayReading": "Bộ Cấn",
    "readings": [
      "Cấn"
    ],
    "meaning": "Dừng lại, quẻ Cấn, cứng đầu",
    "examples": "良, 限, 銀, 根, 退",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1139,
    "kanji": "色",
    "displayReading": "Bộ Sắc",
    "readings": [
      "Sắc"
    ],
    "meaning": "Màu sắc, dáng vẻ",
    "examples": "色, 絶, 艶",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1140,
    "kanji": "艸 (艹)",
    "displayReading": "Bộ Thảo",
    "readings": [
      "Thảo"
    ],
    "meaning": "Cỏ cây, thực vật",
    "examples": "花, 草, 茶, 薬, 葉",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1141,
    "kanji": "虍",
    "displayReading": "Bộ Hô",
    "readings": [
      "Hô"
    ],
    "meaning": "Vằn con hổ",
    "examples": "虎, 処, 虚, 慮, 劇",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1142,
    "kanji": "虫",
    "displayReading": "Bộ Trùng",
    "readings": [
      "Trùng"
    ],
    "meaning": "Sâu bọ, côn trùng",
    "examples": "虫, 蚊, 蛇, 融, 独",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1143,
    "kanji": "血",
    "displayReading": "Bộ Huyết",
    "readings": [
      "Huyết"
    ],
    "meaning": "Máu",
    "examples": "血, 衆, 脈",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1144,
    "kanji": "行",
    "displayReading": "Bộ Hành",
    "readings": [
      "Hành"
    ],
    "meaning": "Đi lại, con đường, thực hiện",
    "examples": "行, 街, 術, 衛, 衝",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1145,
    "kanji": "衣 (衤)",
    "displayReading": "Bộ Y",
    "readings": [
      "Y"
    ],
    "meaning": "Quần áo, trang phục",
    "examples": "衣, 服, 初, 補, 表",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1146,
    "kanji": "襾 (西, 覀)",
    "displayReading": "Bộ Á",
    "readings": [
      "Á"
    ],
    "meaning": "Che đậy, hướng Tây",
    "examples": "西, 要, 票, 覆",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1147,
    "kanji": "見",
    "displayReading": "Bộ Kiến",
    "readings": [
      "Kiến"
    ],
    "meaning": "Nhìn thấy, quan sát",
    "examples": "見, 親, 観, 覚, 規",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1148,
    "kanji": "角",
    "displayReading": "Bộ Giác",
    "readings": [
      "Giác"
    ],
    "meaning": "Cái sừng, góc cạnh",
    "examples": "角, 解, 触, 確",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1149,
    "kanji": "言 (訁)",
    "displayReading": "Bộ Ngôn",
    "readings": [
      "Ngôn"
    ],
    "meaning": "Lời nói, ngôn ngữ",
    "examples": "言, 語, 話, 読, 記",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1150,
    "kanji": "谷",
    "displayReading": "Bộ Cốc",
    "readings": [
      "Cốc"
    ],
    "meaning": "Thung lũng, khe núi",
    "examples": "谷, 欲, 浴, 俗, 容",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1151,
    "kanji": "豆",
    "displayReading": "Bộ Đậu",
    "readings": [
      "Đậu"
    ],
    "meaning": "Hạt đậu, đồ đựng tế lễ",
    "examples": "豆, 豊, 頭, 短, 登",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1152,
    "kanji": "豕",
    "displayReading": "Bộ Thỉ",
    "readings": [
      "Thỉ"
    ],
    "meaning": "Con lợn (heo)",
    "examples": "豚, 家, 象, 豪, 隊",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1153,
    "kanji": "豸",
    "displayReading": "Bộ Trãi",
    "readings": [
      "Trãi"
    ],
    "meaning": "Loài thú ăn thịt thân dài",
    "examples": "豹, 貌, 猫, 墾",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1154,
    "kanji": "貝",
    "displayReading": "Bộ Bối",
    "readings": [
      "Bối"
    ],
    "meaning": "Vỏ sò, tiền bạc, tài sản",
    "examples": "貝, 買, 売, 貯, 財",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1155,
    "kanji": "赤",
    "displayReading": "Bộ Xích",
    "readings": [
      "Xích"
    ],
    "meaning": "Màu đỏ",
    "examples": "赤, 赦, 赫",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1156,
    "kanji": "走",
    "displayReading": "Bộ Tẩu",
    "readings": [
      "Tẩu"
    ],
    "meaning": "Chạy, di chuyển nhanh",
    "examples": "走, 起, 超, 越, 趣",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1157,
    "kanji": "足 (⻊)",
    "displayReading": "Bộ Túc",
    "readings": [
      "Túc"
    ],
    "meaning": "Bàn chân, đầy đủ",
    "examples": "足, 路, 踊, 跳, 距",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1158,
    "kanji": "身",
    "displayReading": "Bộ Thân",
    "readings": [
      "Thân"
    ],
    "meaning": "Thân thể, bản thân",
    "examples": "身, 射, 謝, 躯",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1159,
    "kanji": "車",
    "displayReading": "Bộ Xa",
    "readings": [
      "Xa"
    ],
    "meaning": "Xe cộ, bánh xe",
    "examples": "車, 転, 軽, 輪, 軍",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1160,
    "kanji": "辛",
    "displayReading": "Bộ Tân",
    "readings": [
      "Tân"
    ],
    "meaning": "Cay đắng, vất vả",
    "examples": "辛, 辞, 弁, 幸, 辟",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1161,
    "kanji": "辰",
    "displayReading": "Bộ Thần",
    "readings": [
      "Thần"
    ],
    "meaning": "Ngôi sao, địa chi Thìn, buổi sớm",
    "examples": "農, 振, 震, 辱",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1162,
    "kanji": "辵 (辶)",
    "displayReading": "Bộ Sước",
    "readings": [
      "Sước"
    ],
    "meaning": "Bước đi, di chuyển trên đường",
    "examples": "道, 近, 遠, 進, 運",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1163,
    "kanji": "邑 (阝 phải)",
    "displayReading": "Bộ Ấp",
    "readings": [
      "Ấp"
    ],
    "meaning": "Vùng đất, làng mạc, đô thị",
    "examples": "都, 郡, 部, 郵, 郷",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1164,
    "kanji": "酉",
    "displayReading": "Bộ Dậu",
    "readings": [
      "Dậu"
    ],
    "meaning": "Bình rượu, địa chi Dậu",
    "examples": "酒, 配, 酔, 酸, 医",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1165,
    "kanji": "釆",
    "displayReading": "Bộ Biện",
    "readings": [
      "Biện"
    ],
    "meaning": "Phân biệt, dấu chân thú",
    "examples": "採, 番, 釈, 審",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1166,
    "kanji": "里",
    "displayReading": "Bộ Lý",
    "readings": [
      "Lý"
    ],
    "meaning": "Làng xóm, đơn vị đo dặm",
    "examples": "里, 重, 野, 量, 黒",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1167,
    "kanji": "金 (釒)",
    "displayReading": "Bộ Kim",
    "readings": [
      "Kim"
    ],
    "meaning": "Kim loại, vàng, tiền bạc",
    "examples": "金, 鉄, 銀, 鏡, 針",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1168,
    "kanji": "長 (镸)",
    "displayReading": "Bộ Trường",
    "readings": [
      "Trường"
    ],
    "meaning": "Dài, người đứng đầu, lớn lên",
    "examples": "長, 張, 帳, 膨",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1169,
    "kanji": "門",
    "displayReading": "Bộ Môn",
    "readings": [
      "Môn"
    ],
    "meaning": "Cổng lớn, cánh cửa",
    "examples": "門, 間, 開, 閉, 聞",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1170,
    "kanji": "阜 (阝 trái)",
    "displayReading": "Bộ Phụ",
    "readings": [
      "Phụ"
    ],
    "meaning": "Gò đất, đồi núi, bậc thang",
    "examples": "院, 階, 陽, 防, 限",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1171,
    "kanji": "隶",
    "displayReading": "Bộ Đãi",
    "readings": [
      "Đãi"
    ],
    "meaning": "Kịp đến, phụ thuộc",
    "examples": "隷, 康, 逮",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1172,
    "kanji": "隹",
    "displayReading": "Bộ Chuy",
    "readings": [
      "Chuy"
    ],
    "meaning": "Chim đuôi ngắn",
    "examples": "集, 雑, 難, 離, 雄",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1173,
    "kanji": "雨 (⻗)",
    "displayReading": "Bộ Vũ",
    "readings": [
      "Vũ"
    ],
    "meaning": "Mưa, hiện tượng thời tiết",
    "examples": "雨, 雪, 雲, 電, 霧",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1174,
    "kanji": "青 (靑)",
    "displayReading": "Bộ Thanh",
    "readings": [
      "Thanh"
    ],
    "meaning": "Màu xanh lam/lục, trẻ trung",
    "examples": "青, 静, 晴, 清, 精",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1175,
    "kanji": "非",
    "displayReading": "Bộ Phi",
    "readings": [
      "Phi"
    ],
    "meaning": "Không phải, sai trái",
    "examples": "非, 悲, 罪, 排, 俳",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1176,
    "kanji": "面",
    "displayReading": "Bộ Diện",
    "readings": [
      "Diện"
    ],
    "meaning": "Khuôn mặt, bề mặt",
    "examples": "面, 麺, 緬",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1177,
    "kanji": "革",
    "displayReading": "Bộ Cách",
    "readings": [
      "Cách"
    ],
    "meaning": "Da thú thuộc, cải cách",
    "examples": "革, 靴, 鞄, 覇",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1178,
    "kanji": "韋",
    "displayReading": "Bộ Vi",
    "readings": [
      "Vi"
    ],
    "meaning": "Da thuộc mềm, vây quanh",
    "examples": "韓, 偉, 違, 緯",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1179,
    "kanji": "韭",
    "displayReading": "Bộ Cửu",
    "readings": [
      "Cửu"
    ],
    "meaning": "Rau hẹ",
    "examples": "韮, 繊",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1180,
    "kanji": "音",
    "displayReading": "Bộ Âm",
    "readings": [
      "Âm"
    ],
    "meaning": "Âm thanh, tiếng động",
    "examples": "音, 暗, 意, 響, 韻",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1181,
    "kanji": "頁",
    "displayReading": "Bộ Hiệt",
    "readings": [
      "Hiệt"
    ],
    "meaning": "Cái đầu, trang giấy",
    "examples": "頭, 顔, 題, 願, 順",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1182,
    "kanji": "風",
    "displayReading": "Bộ Phong",
    "readings": [
      "Phong"
    ],
    "meaning": "Gió, phong cách",
    "examples": "風, 台, 嵐, 颯",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1183,
    "kanji": "飛",
    "displayReading": "Bộ Phi",
    "readings": [
      "Phi"
    ],
    "meaning": "Bay lượn",
    "examples": "飛, 翻",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1184,
    "kanji": "食 (飠)",
    "displayReading": "Bộ Thực",
    "readings": [
      "Thực"
    ],
    "meaning": "Ăn uống, thức ăn",
    "examples": "食, 飲, 飯, 館, 養",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1185,
    "kanji": "首",
    "displayReading": "Bộ Thủ",
    "readings": [
      "Thủ"
    ],
    "meaning": "Cái đầu, cái cổ, đứng đầu",
    "examples": "首, 道, 導",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1186,
    "kanji": "香",
    "displayReading": "Bộ Hương",
    "readings": [
      "Hương"
    ],
    "meaning": "Mùi thơm, hương vị",
    "examples": "香, 馨, 馥",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1187,
    "kanji": "馬",
    "displayReading": "Bộ Mã",
    "readings": [
      "Mã"
    ],
    "meaning": "Con ngựa",
    "examples": "馬, 駅, 駐, 騒, 驚",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1188,
    "kanji": "骨",
    "displayReading": "Bộ Cốt",
    "readings": [
      "Cốt"
    ],
    "meaning": "Xương cốt",
    "examples": "骨, 滑, 髄, 骸",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1189,
    "kanji": "高",
    "displayReading": "Bộ Cao",
    "readings": [
      "Cao"
    ],
    "meaning": "Cao lớn",
    "examples": "高, 稿, 橋",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1190,
    "kanji": "髟",
    "displayReading": "Bộ Tiêu",
    "readings": [
      "Tiêu"
    ],
    "meaning": "Tóc dài",
    "examples": "髪, 髭, 髯",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1191,
    "kanji": "鬥",
    "displayReading": "Bộ Đấu",
    "readings": [
      "Đấu"
    ],
    "meaning": "Đánh nhau, tranh đấu",
    "examples": "闘, 鬧",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1192,
    "kanji": "鬯",
    "displayReading": "Bộ Sưởng",
    "readings": [
      "Sưởng"
    ],
    "meaning": "Rượu nghệ dùng trong tế lễ",
    "examples": "鬱",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1193,
    "kanji": "鬲",
    "displayReading": "Bộ Cách",
    "readings": [
      "Cách"
    ],
    "meaning": "Cái đỉnh, nồi ba chân",
    "examples": "隔, 融, 鬲",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1194,
    "kanji": "鬼",
    "displayReading": "Bộ Quỷ",
    "readings": [
      "Quỷ"
    ],
    "meaning": "Con quỷ, linh hồn",
    "examples": "鬼, 魂, 魔, 魅, 塊",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1195,
    "kanji": "魚",
    "displayReading": "Bộ Ngư",
    "readings": [
      "Ngư"
    ],
    "meaning": "Con cá",
    "examples": "魚, 鮮, 鯨, 鯉, 鮭",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1196,
    "kanji": "鳥",
    "displayReading": "Bộ Điểu",
    "readings": [
      "Điểu"
    ],
    "meaning": "Con chim",
    "examples": "鳥, 鳴, 島, 鶴, 鶏",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1197,
    "kanji": "鹵",
    "displayReading": "Bộ Lỗ",
    "readings": [
      "Lỗ"
    ],
    "meaning": "Đất mặn, muối mỏ",
    "examples": "塩, 鹸",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1198,
    "kanji": "鹿",
    "displayReading": "Bộ Lộc",
    "readings": [
      "Lộc"
    ],
    "meaning": "Con hươu, con nai",
    "examples": "鹿, 麗, 塵, 慶",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1199,
    "kanji": "麥 (麦)",
    "displayReading": "Bộ Mạch",
    "readings": [
      "Mạch"
    ],
    "meaning": "Lúa mạch",
    "examples": "麦, 麺, 麹",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1200,
    "kanji": "麻",
    "displayReading": "Bộ Ma",
    "readings": [
      "Ma"
    ],
    "meaning": "Cây gai dầu, tê liệt",
    "examples": "麻, 磨, 魔, 摩",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1201,
    "kanji": "黃 (黄)",
    "displayReading": "Bộ Hoàng",
    "readings": [
      "Hoàng"
    ],
    "meaning": "Màu vàng",
    "examples": "黄, 横, 広",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1202,
    "kanji": "黍",
    "displayReading": "Bộ Thử",
    "readings": [
      "Thử"
    ],
    "meaning": "Cây kê (lúa nếp)",
    "examples": "黎, 粘",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1203,
    "kanji": "黑 (黒)",
    "displayReading": "Bộ Hắc",
    "readings": [
      "Hắc"
    ],
    "meaning": "Màu đen",
    "examples": "黒, 黙, 点, 墨, 党",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1204,
    "kanji": "黹",
    "displayReading": "Bộ Chỉ",
    "readings": [
      "Chỉ"
    ],
    "meaning": "Thêu thùa, may vá",
    "examples": "黻, 黼",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1205,
    "kanji": "黽",
    "displayReading": "Bộ Mãnh",
    "readings": [
      "Mãnh"
    ],
    "meaning": "Con ếch, cố gắng",
    "examples": "縄, 蠅, 亀",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1206,
    "kanji": "鼎",
    "displayReading": "Bộ Đỉnh",
    "readings": [
      "Đỉnh"
    ],
    "meaning": "Cái đỉnh đồng ba chân",
    "examples": "鼎, 鼐",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1207,
    "kanji": "鼓",
    "displayReading": "Bộ Cổ",
    "readings": [
      "Cổ"
    ],
    "meaning": "Cái trống, cổ vũ",
    "examples": "鼓, 樹, 喜",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1208,
    "kanji": "鼠",
    "displayReading": "Bộ Thử",
    "readings": [
      "Thử"
    ],
    "meaning": "Con chuột",
    "examples": "鼠, 鼬, 竄",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1209,
    "kanji": "鼻",
    "displayReading": "Bộ Tỵ",
    "readings": [
      "Tỵ"
    ],
    "meaning": "Cái mũi",
    "examples": "鼻, 鼾",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1210,
    "kanji": "齊 (斉)",
    "displayReading": "Bộ Tề",
    "readings": [
      "Tề"
    ],
    "meaning": "Ngay ngắn, đều đặn",
    "examples": "斉, 済, 剤, 斎",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1211,
    "kanji": "齒 (歯)",
    "displayReading": "Bộ Xỉ",
    "readings": [
      "Xỉ"
    ],
    "meaning": "Cái răng",
    "examples": "歯, 齢, 噛",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1212,
    "kanji": "龍 (竜)",
    "displayReading": "Bộ Long",
    "readings": [
      "Long"
    ],
    "meaning": "Con rồng",
    "examples": "龍, 竜, 滝, 襲",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1213,
    "kanji": "龜 (亀)",
    "displayReading": "Bộ Quy",
    "readings": [
      "Quy"
    ],
    "meaning": "Con rùa",
    "examples": "亀, 縄",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1214,
    "kanji": "龠",
    "displayReading": "Bộ Dược",
    "readings": [
      "Dược"
    ],
    "meaning": "Ống sáo cổ",
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
    "topicId": "n4_11",
    "level": "N4"
  },
  {
    "id": 1001,
    "kanji": "一",
    "displayReading": "Bộ Nhất",
    "readings": [
      "Nhất"
    ],
    "meaning": "Một, số một",
    "examples": "一, 七, 三, 上, 下",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1002,
    "kanji": "丨",
    "displayReading": "Bộ Cổn",
    "readings": [
      "Cổn"
    ],
    "meaning": "Nét sổ thẳng",
    "examples": "中, 串, 豊",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1003,
    "kanji": "丶",
    "displayReading": "Bộ Chủ",
    "readings": [
      "Chủ"
    ],
    "meaning": "Điểm, chấm",
    "examples": "主, 丸, 丹",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1004,
    "kanji": "丿",
    "displayReading": "Bộ Phiệt",
    "readings": [
      "Phiệt"
    ],
    "meaning": "Nét phẩy",
    "examples": "久, 之, 乗",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1005,
    "kanji": "乙 (乚, ⺄)",
    "displayReading": "Bộ Ất",
    "readings": [
      "Ất"
    ],
    "meaning": "Vị trí thứ 2 trong Thiên Can, uốn cong",
    "examples": "九, 乱, 乳",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1006,
    "kanji": "亅",
    "displayReading": "Bộ Quyết",
    "readings": [
      "Quyết"
    ],
    "meaning": "Nét sổ có móc",
    "examples": "了, 予, 事",
    "topicId": "rad_1_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1007,
    "kanji": "二",
    "displayReading": "Bộ Nhị",
    "readings": [
      "Nhị"
    ],
    "meaning": "Số hai",
    "examples": "二, 五, 井, 亜",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1008,
    "kanji": "亠",
    "displayReading": "Bộ Đầu",
    "readings": [
      "Đầu"
    ],
    "meaning": "Nắp đậy, phần đầu (không có nghĩa độc lập)",
    "examples": "亡, 交, 京, 高",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1009,
    "kanji": "人 (亻, 𠆢)",
    "displayReading": "Bộ Nhân",
    "readings": [
      "Nhân"
    ],
    "meaning": "Người",
    "examples": "人, 休, 体, 働, 今",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1010,
    "kanji": "儿",
    "displayReading": "Bộ Nhân (nhi)",
    "readings": [
      "Nhân (nhi)"
    ],
    "meaning": "Người đi, đôi chân",
    "examples": "元, 兄, 光, 先",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1011,
    "kanji": "入",
    "displayReading": "Bộ Nhập",
    "readings": [
      "Nhập"
    ],
    "meaning": "Đi vào",
    "examples": "入, 全, 両",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1012,
    "kanji": "八 (丷)",
    "displayReading": "Bộ Bát",
    "readings": [
      "Bát"
    ],
    "meaning": "Số tám, chia tách",
    "examples": "八, 六, 公, 共",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1013,
    "kanji": "冂",
    "displayReading": "Bộ Quynh",
    "readings": [
      "Quynh"
    ],
    "meaning": "Vùng biên giới, khoảng trống bao quanh",
    "examples": "内, 円, 再, 冊",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1014,
    "kanji": "冖",
    "displayReading": "Bộ Mịch",
    "readings": [
      "Mịch"
    ],
    "meaning": "Trùm khăn lên, che đậy",
    "examples": "写, 冠, 軍",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1015,
    "kanji": "冫",
    "displayReading": "Bộ Băng",
    "readings": [
      "Băng"
    ],
    "meaning": "Nước đá, lạnh giá",
    "examples": "氷, 冷, 冬, 凍",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1016,
    "kanji": "几",
    "displayReading": "Bộ Kỷ",
    "readings": [
      "Kỷ"
    ],
    "meaning": "Cái bàn nhỏ, ghế tựa",
    "examples": "机, 凡, 風",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1017,
    "kanji": "凵",
    "displayReading": "Bộ Khảm",
    "readings": [
      "Khảm"
    ],
    "meaning": "Há miệng, hố sâu",
    "examples": "出, 凶, 凸, 凹",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1018,
    "kanji": "刀 (刂)",
    "displayReading": "Bộ Đao",
    "readings": [
      "Đao"
    ],
    "meaning": "Con dao, cắt gọt",
    "examples": "刀, 切, 分, 利, 別",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1019,
    "kanji": "力",
    "displayReading": "Bộ Lực",
    "readings": [
      "Lực"
    ],
    "meaning": "Sức mạnh",
    "examples": "力, 動, 働, 勉, 助",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1020,
    "kanji": "勹",
    "displayReading": "Bộ Bao",
    "readings": [
      "Bao"
    ],
    "meaning": "Bao bọc, ôm ấp",
    "examples": "包, 句, 匂",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1021,
    "kanji": "匕",
    "displayReading": "Bộ Chủy",
    "readings": [
      "Chủy"
    ],
    "meaning": "Cái thìa, muỗng",
    "examples": "化, 北, 匙",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1022,
    "kanji": "匚",
    "displayReading": "Bộ Phương",
    "readings": [
      "Phương"
    ],
    "meaning": "Cái hộp, tủ đựng",
    "examples": "匠, 匹, 区",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1023,
    "kanji": "匸",
    "displayReading": "Bộ Hệ",
    "readings": [
      "Hệ"
    ],
    "meaning": "Che giấu, đậy lại",
    "examples": "区, 医, 匿",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1024,
    "kanji": "十",
    "displayReading": "Bộ Thập",
    "readings": [
      "Thập"
    ],
    "meaning": "Số mười, đầy đủ",
    "examples": "十, 千, 午, 半, 南",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1025,
    "kanji": "卜",
    "displayReading": "Bộ Bốc",
    "readings": [
      "Bốc"
    ],
    "meaning": "Xem bói",
    "examples": "占, 卦, 外",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1026,
    "kanji": "卩 (㔾)",
    "displayReading": "Bộ Tiết",
    "readings": [
      "Tiết"
    ],
    "meaning": "Đốt tre, con dấu",
    "examples": "印, 危, 即, 卵",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1027,
    "kanji": "厂",
    "displayReading": "Bộ Hán",
    "readings": [
      "Hán"
    ],
    "meaning": "Sườn núi, vách đá",
    "examples": "原, 厚, 圧, 歴",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1028,
    "kanji": "厶",
    "displayReading": "Bộ Khư (Tư)",
    "readings": [
      "Khư (Tư)"
    ],
    "meaning": "Riêng tư",
    "examples": "去, 参, 私",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1029,
    "kanji": "又",
    "displayReading": "Bộ Hựu",
    "readings": [
      "Hựu"
    ],
    "meaning": "Lại nữa, bàn tay phải",
    "examples": "又, 友, 反, 取, 受",
    "topicId": "rad_2_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1030,
    "kanji": "口",
    "displayReading": "Bộ Khẩu",
    "readings": [
      "Khẩu"
    ],
    "meaning": "Cái miệng, ăn nói",
    "examples": "口, 古, 味, 呼, 問",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1031,
    "kanji": "囗",
    "displayReading": "Bộ Vi",
    "readings": [
      "Vi"
    ],
    "meaning": "Vây quanh, biên giới",
    "examples": "国, 四, 回, 園, 図",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1032,
    "kanji": "土",
    "displayReading": "Bộ Thổ",
    "readings": [
      "Thổ"
    ],
    "meaning": "Đất đai",
    "examples": "土, 地, 場, 坂, 城",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1033,
    "kanji": "士",
    "displayReading": "Bộ Sĩ",
    "readings": [
      "Sĩ"
    ],
    "meaning": "Kẻ sĩ, học giả, chiến binh",
    "examples": "士, 売, 声, 壮",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1034,
    "kanji": "夂",
    "displayReading": "Bộ Trĩ",
    "readings": [
      "Trĩ"
    ],
    "meaning": "Bước chậm theo sau",
    "examples": "冬, 各, 条",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1035,
    "kanji": "夊",
    "displayReading": "Bộ Tuy",
    "readings": [
      "Tuy"
    ],
    "meaning": "Đi chậm chạp",
    "examples": "夏, 復, 変",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1036,
    "kanji": "夕",
    "displayReading": "Bộ Tịch",
    "readings": [
      "Tịch"
    ],
    "meaning": "Đêm tối, buổi chiều",
    "examples": "夕, 外, 多, 夜, 夢",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1037,
    "kanji": "大",
    "displayReading": "Bộ Đại",
    "readings": [
      "Đại"
    ],
    "meaning": "To lớn",
    "examples": "大, 天, 太, 夫, 奇",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1038,
    "kanji": "女",
    "displayReading": "Bộ Nữ",
    "readings": [
      "Nữ"
    ],
    "meaning": "Phụ nữ, con gái",
    "examples": "女, 好, 姉, 妹, 始",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1039,
    "kanji": "子",
    "displayReading": "Bộ Tử",
    "readings": [
      "Tử"
    ],
    "meaning": "Con cái, trẻ em",
    "examples": "子, 学, 字, 孫, 季",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1040,
    "kanji": "宀",
    "displayReading": "Bộ Miên",
    "readings": [
      "Miên"
    ],
    "meaning": "Mái nhà, che chở",
    "examples": "家, 安, 室, 宿, 守",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1041,
    "kanji": "寸",
    "displayReading": "Bộ Thốn",
    "readings": [
      "Thốn"
    ],
    "meaning": "Đơn vị đo (tấc), quy tắc",
    "examples": "寸, 寺, 対, 専, 導",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1042,
    "kanji": "小 (⺌, ⺍)",
    "displayReading": "Bộ Tiểu",
    "readings": [
      "Tiểu"
    ],
    "meaning": "Nhỏ bé",
    "examples": "小, 少, 尚, 当",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1043,
    "kanji": "尢 (尣)",
    "displayReading": "Bộ Uông",
    "readings": [
      "Uông"
    ],
    "meaning": "Yếu đuối, chân khập khiễng",
    "examples": "就, 尤",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1044,
    "kanji": "尸",
    "displayReading": "Bộ Thi",
    "readings": [
      "Thi"
    ],
    "meaning": "Thây ma, cơ thể nằm",
    "examples": "局, 屋, 届, 居, 層",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1045,
    "kanji": "屮",
    "displayReading": "Bộ Triệt",
    "readings": [
      "Triệt"
    ],
    "meaning": "Mầm non mới nhú",
    "examples": "屯, 逆",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1046,
    "kanji": "山",
    "displayReading": "Bộ Sơn",
    "readings": [
      "Sơn"
    ],
    "meaning": "Ngọn núi",
    "examples": "山, 岩, 島, 峠, 岸",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1047,
    "kanji": "巛 (川)",
    "displayReading": "Bộ Xuyên",
    "readings": [
      "Xuyên"
    ],
    "meaning": "Sông ngòi, dòng chảy",
    "examples": "川, 州, 巡, 巣",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1048,
    "kanji": "工",
    "displayReading": "Bộ Công",
    "readings": [
      "Công"
    ],
    "meaning": "Người thợ, công việc",
    "examples": "工, 左, 差, 巧",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1049,
    "kanji": "己 (已, 巳)",
    "displayReading": "Bộ Kỷ",
    "readings": [
      "Kỷ"
    ],
    "meaning": "Bản thân mình",
    "examples": "己, 巻, 改, 配",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1050,
    "kanji": "巾",
    "displayReading": "Bộ Cân",
    "readings": [
      "Cân"
    ],
    "meaning": "Cái khăn, vải vóc",
    "examples": "市, 布, 席, 帯, 帰",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1051,
    "kanji": "干",
    "displayReading": "Bộ Can",
    "readings": [
      "Can"
    ],
    "meaning": "Khô ráo, can thiệp, cái khiên",
    "examples": "干, 平, 年, 幸, 幹",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1052,
    "kanji": "幺",
    "displayReading": "Bộ Yêu",
    "readings": [
      "Yêu"
    ],
    "meaning": "Nhỏ nhắn, sợi tơ nhỏ",
    "examples": "幼, 幾, 幻, 幽",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1053,
    "kanji": "广",
    "displayReading": "Bộ Nghiễm",
    "readings": [
      "Nghiễm"
    ],
    "meaning": "Mái nhà, tòa nhà",
    "examples": "広, 店, 度, 庫, 庭",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1054,
    "kanji": "廴",
    "displayReading": "Bộ Dẫn",
    "readings": [
      "Dẫn"
    ],
    "meaning": "Bước dài",
    "examples": "建, 延, 廷",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1055,
    "kanji": "廾",
    "displayReading": "Bộ Củng",
    "readings": [
      "Củng"
    ],
    "meaning": "Chắp hai tay",
    "examples": "弁, 弄, 弊",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1056,
    "kanji": "弋",
    "displayReading": "Bộ Dặc",
    "readings": [
      "Dặc"
    ],
    "meaning": "Bắn tên, cái cọc",
    "examples": "式, 弐, 鳶",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1057,
    "kanji": "弓",
    "displayReading": "Bộ Cung",
    "readings": [
      "Cung"
    ],
    "meaning": "Cái cung tên",
    "examples": "弓, 引, 強, 弱, 張",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1058,
    "kanji": "彐 (彑)",
    "displayReading": "Bộ Kệ",
    "readings": [
      "Kệ"
    ],
    "meaning": "Đầu con nhím / lợn",
    "examples": "帰, 録, 当, 雪",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1059,
    "kanji": "彡",
    "displayReading": "Bộ Sam",
    "readings": [
      "Sam"
    ],
    "meaning": "Lông tóc, hoa văn, nét trang trí",
    "examples": "形, 影, 彩, 彫",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1060,
    "kanji": "彳",
    "displayReading": "Bộ Xích",
    "readings": [
      "Xích"
    ],
    "meaning": "Bước chân trái, đi lại",
    "examples": "行, 待, 後, 彼, 役",
    "topicId": "rad_3_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1061,
    "kanji": "心 (忄, ⺗)",
    "displayReading": "Bộ Tâm",
    "readings": [
      "Tâm"
    ],
    "meaning": "Trái tim, tâm trí, cảm xúc",
    "examples": "心, 思, 忙, 怖, 情",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1062,
    "kanji": "戈",
    "displayReading": "Bộ Qua",
    "readings": [
      "Qua"
    ],
    "meaning": "Cây qua (vũ khí cổ)",
    "examples": "戦, 成, 我, 戒, 戯",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1063,
    "kanji": "戸 (戶)",
    "displayReading": "Bộ Hộ",
    "readings": [
      "Hộ"
    ],
    "meaning": "Cửa một cánh, hộ gia đình",
    "examples": "戸, 所, 戻, 房, 扇",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1064,
    "kanji": "手 (扌, 龵)",
    "displayReading": "Bộ Thủ",
    "readings": [
      "Thủ"
    ],
    "meaning": "Bàn tay, hành động bằng tay",
    "examples": "手, 持, 打, 押, 投",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1065,
    "kanji": "支",
    "displayReading": "Bộ Chi",
    "readings": [
      "Chi"
    ],
    "meaning": "Cành nhánh, chống đỡ",
    "examples": "支, 技, 枝",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1066,
    "kanji": "攴 (攵)",
    "displayReading": "Bộ Phộc",
    "readings": [
      "Phộc"
    ],
    "meaning": "Đánh khẽ, gõ",
    "examples": "教, 政, 放, 数, 改",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1067,
    "kanji": "文",
    "displayReading": "Bộ Văn",
    "readings": [
      "Văn"
    ],
    "meaning": "Văn chương, chữ viết, hoa văn",
    "examples": "文, 対, 紋, 斎",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1068,
    "kanji": "斗",
    "displayReading": "Bộ Đẩu",
    "readings": [
      "Đẩu"
    ],
    "meaning": "Cái đấu (dụng cụ đong lường)",
    "examples": "料, 斜, 斡",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1069,
    "kanji": "斤",
    "displayReading": "Bộ Cân",
    "readings": [
      "Cân"
    ],
    "meaning": "Cái rìu, đơn vị cân",
    "examples": "新, 近, 断, 折, 所",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1070,
    "kanji": "方",
    "displayReading": "Bộ Phương",
    "readings": [
      "Phương"
    ],
    "meaning": "Phương hướng, vuông vức",
    "examples": "方, 旅, 族, 旗, 放",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1071,
    "kanji": "无 (旡)",
    "displayReading": "Bộ Vô",
    "readings": [
      "Vô"
    ],
    "meaning": "Không có",
    "examples": "既, 無",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1072,
    "kanji": "日",
    "displayReading": "Bộ Nhật",
    "readings": [
      "Nhật"
    ],
    "meaning": "Mặt trời, ngày, thời gian",
    "examples": "日, 明, 時, 晴, 昨",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1073,
    "kanji": "曰",
    "displayReading": "Bộ Viết",
    "readings": [
      "Viết"
    ],
    "meaning": "Nói rằng",
    "examples": "書, 最, 曲, 更",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1074,
    "kanji": "月",
    "displayReading": "Bộ Nguyệt",
    "readings": [
      "Nguyệt"
    ],
    "meaning": "Mặt trăng, tháng (hoặc bộ Nhục - thịt)",
    "examples": "月, 朝, 期, 有, 望",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1075,
    "kanji": "木",
    "displayReading": "Bộ Mộc",
    "readings": [
      "Mộc"
    ],
    "meaning": "Cây cối, gỗ",
    "examples": "木, 林, 森, 机, 本",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1076,
    "kanji": "欠",
    "displayReading": "Bộ Khiếm",
    "readings": [
      "Khiếm"
    ],
    "meaning": "Khiếm khuyết, ngáp, thiếu thốn",
    "examples": "欠, 次, 歌, 飲, 欲",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1077,
    "kanji": "止",
    "displayReading": "Bộ Chỉ",
    "readings": [
      "Chỉ"
    ],
    "meaning": "Dừng lại, bàn chân",
    "examples": "止, 正, 歩, 武, 歳",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1078,
    "kanji": "歹 (歺)",
    "displayReading": "Bộ Đãi",
    "readings": [
      "Đãi"
    ],
    "meaning": "Xương tàn, chết chóc",
    "examples": "死, 残, 殖, 殊",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1079,
    "kanji": "殳",
    "displayReading": "Bộ Thù",
    "readings": [
      "Thù"
    ],
    "meaning": "Binh khí dài, đánh đập",
    "examples": "段, 殺, 殿, 設, 役",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1080,
    "kanji": "毋 (母)",
    "displayReading": "Bộ Vô / Mẫu",
    "readings": [
      "Vô / Mẫu"
    ],
    "meaning": "Chớ, đừng / Người mẹ",
    "examples": "母, 毎, 毒, 貫",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1081,
    "kanji": "比",
    "displayReading": "Bộ Tỷ",
    "readings": [
      "Tỷ"
    ],
    "meaning": "So sánh, kề bên",
    "examples": "比, 皆, 昆",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1082,
    "kanji": "毛",
    "displayReading": "Bộ Mao",
    "readings": [
      "Mao"
    ],
    "meaning": "Lông, tóc",
    "examples": "毛, 尾, 筆, 耗",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1083,
    "kanji": "氏",
    "displayReading": "Bộ Thị",
    "readings": [
      "Thị"
    ],
    "meaning": "Họ, dòng tộc",
    "examples": "氏, 民, 紙",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1084,
    "kanji": "气",
    "displayReading": "Bộ Khí",
    "readings": [
      "Khí"
    ],
    "meaning": "Hơi, không khí",
    "examples": "気, 汽, 雰",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1085,
    "kanji": "水 (氵, 氺)",
    "displayReading": "Bộ Thủy",
    "readings": [
      "Thủy"
    ],
    "meaning": "Nước, chất lỏng",
    "examples": "水, 海, 泳, 洗, 池",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1086,
    "kanji": "火 (灬)",
    "displayReading": "Bộ Hỏa",
    "readings": [
      "Hỏa"
    ],
    "meaning": "Lửa, nhiệt độ",
    "examples": "火, 焼, 熱, 燃, 煙",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1087,
    "kanji": "爪 (爫)",
    "displayReading": "Bộ Trảo",
    "readings": [
      "Trảo"
    ],
    "meaning": "Móng vuốt",
    "examples": "爪, 愛, 受, 採, 争",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1088,
    "kanji": "父",
    "displayReading": "Bộ Phụ",
    "readings": [
      "Phụ"
    ],
    "meaning": "Người cha",
    "examples": "父, 釜, 爺",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1089,
    "kanji": "爻",
    "displayReading": "Bộ Hào",
    "readings": [
      "Hào"
    ],
    "meaning": "Hào trong Kinh Dịch, đan xen",
    "examples": "爽, 爾",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1090,
    "kanji": "爿 (丬)",
    "displayReading": "Bộ Tường",
    "readings": [
      "Tường"
    ],
    "meaning": "Mảnh gỗ, cái giường",
    "examples": "壮, 状, 将, 装",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1091,
    "kanji": "片",
    "displayReading": "Bộ Phiến",
    "readings": [
      "Phiến"
    ],
    "meaning": "Mảnh, tấm, một phía",
    "examples": "片, 版, 牌",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1092,
    "kanji": "牙",
    "displayReading": "Bộ Nha",
    "readings": [
      "Nha"
    ],
    "meaning": "Răng nanh",
    "examples": "牙, 芽, 邪",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1093,
    "kanji": "牛 (牜)",
    "displayReading": "Bộ Ngưu",
    "readings": [
      "Ngưu"
    ],
    "meaning": "Con trâu, con bò",
    "examples": "牛, 物, 特, 牧, 犠",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1094,
    "kanji": "犬 (犭)",
    "displayReading": "Bộ Khuyển",
    "readings": [
      "Khuyển"
    ],
    "meaning": "Con chó, loài thú",
    "examples": "犬, 猫, 独, 犯, 狂",
    "topicId": "rad_4_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1095,
    "kanji": "玄",
    "displayReading": "Bộ Huyền",
    "readings": [
      "Huyền"
    ],
    "meaning": "Màu đen huyền, huyền bí",
    "examples": "玄, 率, 弦",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1096,
    "kanji": "玉 (王)",
    "displayReading": "Bộ Ngọc",
    "readings": [
      "Ngọc"
    ],
    "meaning": "Đá quý, ngọc báu",
    "examples": "玉, 王, 現, 理, 球",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1097,
    "kanji": "瓜",
    "displayReading": "Bộ Qua",
    "readings": [
      "Qua"
    ],
    "meaning": "Quả dưa",
    "examples": "瓜, 孤, 弧",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1098,
    "kanji": "瓦",
    "displayReading": "Bộ Ngõa",
    "readings": [
      "Ngõa"
    ],
    "meaning": "Ngói lợp nhà, đồ gốm",
    "examples": "瓦, 瓶, 瓷",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1099,
    "kanji": "甘",
    "displayReading": "Bộ Cam",
    "readings": [
      "Cam"
    ],
    "meaning": "Ngọt ngào",
    "examples": "甘, 甚, 某",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1100,
    "kanji": "生",
    "displayReading": "Bộ Sinh",
    "readings": [
      "Sinh"
    ],
    "meaning": "Sinh sống, sinh ra, tươi sống",
    "examples": "生, 産, 星, 性",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1101,
    "kanji": "用",
    "displayReading": "Bộ Dụng",
    "readings": [
      "Dụng"
    ],
    "meaning": "Sử dụng, công dụng",
    "examples": "用, 庸, 備",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1102,
    "kanji": "田",
    "displayReading": "Bộ Điền",
    "readings": [
      "Điền"
    ],
    "meaning": "Ruộng đồng",
    "examples": "田, 男, 町, 界, 番",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1103,
    "kanji": "疋 (⺪)",
    "displayReading": "Bộ Sơ (Thất)",
    "readings": [
      "Sơ (Thất)"
    ],
    "meaning": "Đơn vị đo vải, bàn chân",
    "examples": "疎, 疑, 楚",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1104,
    "kanji": "疒",
    "displayReading": "Bộ Nạch",
    "readings": [
      "Nạch"
    ],
    "meaning": "Bệnh tật, đau ốm",
    "examples": "病, 痛, 疲, 症, 療",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1105,
    "kanji": "癶",
    "displayReading": "Bộ Bát",
    "readings": [
      "Bát"
    ],
    "meaning": "Hai bàn chân bước ngược nhau",
    "examples": "発, 登",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1106,
    "kanji": "白",
    "displayReading": "Bộ Bạch",
    "readings": [
      "Bạch"
    ],
    "meaning": "Màu trắng, rõ ràng",
    "examples": "白, 百, 的, 皇, 皆",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1107,
    "kanji": "皮",
    "displayReading": "Bộ Bì",
    "readings": [
      "Bì"
    ],
    "meaning": "Da, vỏ ngoài",
    "examples": "皮, 波, 破, 被",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1108,
    "kanji": "皿",
    "displayReading": "Bộ Mãnh",
    "readings": [
      "Mãnh"
    ],
    "meaning": "Cái đĩa, bát, đồ đựng",
    "examples": "皿, 血, 盆, 盛, 監",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1109,
    "kanji": "目",
    "displayReading": "Bộ Mục",
    "readings": [
      "Mục"
    ],
    "meaning": "Con mắt, nhìn ngắm",
    "examples": "目, 見, 眠, 相, 省",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1110,
    "kanji": "矛",
    "displayReading": "Bộ Mâu",
    "readings": [
      "Mâu"
    ],
    "meaning": "Cây giáo, cây mâu",
    "examples": "矛, 柔, 務, 霧",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1111,
    "kanji": "矢",
    "displayReading": "Bộ Thỉ",
    "readings": [
      "Thỉ"
    ],
    "meaning": "Mũi tên",
    "examples": "矢, 知, 短, 族, 矯",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1112,
    "kanji": "石",
    "displayReading": "Bộ Thạch",
    "readings": [
      "Thạch"
    ],
    "meaning": "Đá, tảng đá",
    "examples": "石, 砂, 研, 破, 確",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1113,
    "kanji": "示 (礻)",
    "displayReading": "Bộ Thị",
    "readings": [
      "Thị"
    ],
    "meaning": "Thần linh, lễ tế, chỉ bảo",
    "examples": "示, 社, 神, 福, 礼",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1114,
    "kanji": "禸",
    "displayReading": "Bộ Nhựu",
    "readings": [
      "Nhựu"
    ],
    "meaning": "Vết chân thú",
    "examples": "離, 禹, 禽",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1115,
    "kanji": "禾",
    "displayReading": "Bộ Hòa",
    "readings": [
      "Hòa"
    ],
    "meaning": "Cây lúa, ngũ cốc",
    "examples": "秋, 科, 移, 税, 秒",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1116,
    "kanji": "穴",
    "displayReading": "Bộ Huyệt",
    "readings": [
      "Huyệt"
    ],
    "meaning": "Hang động, cái lỗ",
    "examples": "穴, 空, 窓, 突, 究",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1117,
    "kanji": "立",
    "displayReading": "Bộ Lập",
    "readings": [
      "Lập"
    ],
    "meaning": "Đứng thẳng, thiết lập",
    "examples": "立, 音, 章, 童, 競",
    "topicId": "rad_5_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1118,
    "kanji": "竹 (⺮)",
    "displayReading": "Bộ Trúc",
    "readings": [
      "Trúc"
    ],
    "meaning": "Cây tre, cây trúc",
    "examples": "竹, 笑, 第, 答, 筆",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1119,
    "kanji": "米",
    "displayReading": "Bộ Mễ",
    "readings": [
      "Mễ"
    ],
    "meaning": "Hạt gạo",
    "examples": "米, 料, 粉, 精, 糖",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1120,
    "kanji": "糸 (糹)",
    "displayReading": "Bộ Mịch",
    "readings": [
      "Mịch"
    ],
    "meaning": "Sợi tơ, dây, sự liên kết",
    "examples": "糸, 紙, 絵, 結, 続",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1121,
    "kanji": "缶",
    "displayReading": "Bộ Phẫu",
    "readings": [
      "Phẫu"
    ],
    "meaning": "Cái bình sành, đồ gốm",
    "examples": "缶, 欠, 陶, 鬱",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1122,
    "kanji": "网 (罒, ⺳)",
    "displayReading": "Bộ Võng",
    "readings": [
      "Võng"
    ],
    "meaning": "Cái lưới",
    "examples": "買, 置, 罪, 罰, 署",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1123,
    "kanji": "羊 (⺶, ⺷)",
    "displayReading": "Bộ Dương",
    "readings": [
      "Dương"
    ],
    "meaning": "Con cừu, con dê",
    "examples": "羊, 美, 着, 義, 群",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1124,
    "kanji": "羽",
    "displayReading": "Bộ Vũ",
    "readings": [
      "Vũ"
    ],
    "meaning": "Lông vũ, đôi cánh",
    "examples": "羽, 習, 翌, 翻, 翼",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1125,
    "kanji": "老 (耂)",
    "displayReading": "Bộ Lão",
    "readings": [
      "Lão"
    ],
    "meaning": "Già cả, người lớn tuổi",
    "examples": "老, 考, 者, 孝",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1126,
    "kanji": "而",
    "displayReading": "Bộ Nhi",
    "readings": [
      "Nhi"
    ],
    "meaning": "Mà, râu cằm",
    "examples": "耐, 端, 需",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1127,
    "kanji": "耒",
    "displayReading": "Bộ Lỗi",
    "readings": [
      "Lỗi"
    ],
    "meaning": "Cái cày",
    "examples": "耕, 耗, 籍",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1128,
    "kanji": "耳",
    "displayReading": "Bộ Nhĩ",
    "readings": [
      "Nhĩ"
    ],
    "meaning": "Cái tai, lắng nghe",
    "examples": "耳, 聞, 聴, 職, 聖",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1129,
    "kanji": "聿 (⺻)",
    "displayReading": "Bộ Duật",
    "readings": [
      "Duật"
    ],
    "meaning": "Cây bút viết",
    "examples": "筆, 書, 建, 律, 津",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1130,
    "kanji": "肉 (月)",
    "displayReading": "Bộ Nhục",
    "readings": [
      "Nhục"
    ],
    "meaning": "Thịt, bộ phận cơ thể",
    "examples": "肉, 腕, 腹, 胸, 育",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1131,
    "kanji": "臣",
    "displayReading": "Bộ Thần",
    "readings": [
      "Thần"
    ],
    "meaning": "Bề tôi, quan lại",
    "examples": "臣, 臨, 堅, 賢",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1132,
    "kanji": "自",
    "displayReading": "Bộ Tự",
    "readings": [
      "Tự"
    ],
    "meaning": "Tự mình, cái mũi",
    "examples": "自, 息, 臭, 鼻",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1133,
    "kanji": "至",
    "displayReading": "Bộ Chí",
    "readings": [
      "Chí"
    ],
    "meaning": "Đến nơi, cực điểm",
    "examples": "至, 到, 致, 室",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1134,
    "kanji": "臼",
    "displayReading": "Bộ Cữu",
    "readings": [
      "Cữu"
    ],
    "meaning": "Cái cối giã gạo",
    "examples": "旧, 興, 与, 児",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1135,
    "kanji": "舌",
    "displayReading": "Bộ Thiệt",
    "readings": [
      "Thiệt"
    ],
    "meaning": "Cái lưỡi",
    "examples": "舌, 話, 辞, 乱, 舗",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1136,
    "kanji": "舛",
    "displayReading": "Bộ Suyễn",
    "readings": [
      "Suyễn"
    ],
    "meaning": "Sai lầm, trái ngược",
    "examples": "舞, 瞬, 隣",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1137,
    "kanji": "舟",
    "displayReading": "Bộ Chu",
    "readings": [
      "Chu"
    ],
    "meaning": "Con thuyền",
    "examples": "舟, 船, 航, 艦, 般",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1138,
    "kanji": "艮",
    "displayReading": "Bộ Cấn",
    "readings": [
      "Cấn"
    ],
    "meaning": "Dừng lại, quẻ Cấn, cứng đầu",
    "examples": "良, 限, 銀, 根, 退",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1139,
    "kanji": "色",
    "displayReading": "Bộ Sắc",
    "readings": [
      "Sắc"
    ],
    "meaning": "Màu sắc, dáng vẻ",
    "examples": "色, 絶, 艶",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1140,
    "kanji": "艸 (艹)",
    "displayReading": "Bộ Thảo",
    "readings": [
      "Thảo"
    ],
    "meaning": "Cỏ cây, thực vật",
    "examples": "花, 草, 茶, 薬, 葉",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1141,
    "kanji": "虍",
    "displayReading": "Bộ Hô",
    "readings": [
      "Hô"
    ],
    "meaning": "Vằn con hổ",
    "examples": "虎, 処, 虚, 慮, 劇",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1142,
    "kanji": "虫",
    "displayReading": "Bộ Trùng",
    "readings": [
      "Trùng"
    ],
    "meaning": "Sâu bọ, côn trùng",
    "examples": "虫, 蚊, 蛇, 融, 独",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1143,
    "kanji": "血",
    "displayReading": "Bộ Huyết",
    "readings": [
      "Huyết"
    ],
    "meaning": "Máu",
    "examples": "血, 衆, 脈",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1144,
    "kanji": "行",
    "displayReading": "Bộ Hành",
    "readings": [
      "Hành"
    ],
    "meaning": "Đi lại, con đường, thực hiện",
    "examples": "行, 街, 術, 衛, 衝",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1145,
    "kanji": "衣 (衤)",
    "displayReading": "Bộ Y",
    "readings": [
      "Y"
    ],
    "meaning": "Quần áo, trang phục",
    "examples": "衣, 服, 初, 補, 表",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1146,
    "kanji": "襾 (西, 覀)",
    "displayReading": "Bộ Á",
    "readings": [
      "Á"
    ],
    "meaning": "Che đậy, hướng Tây",
    "examples": "西, 要, 票, 覆",
    "topicId": "rad_6_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1147,
    "kanji": "見",
    "displayReading": "Bộ Kiến",
    "readings": [
      "Kiến"
    ],
    "meaning": "Nhìn thấy, quan sát",
    "examples": "見, 親, 観, 覚, 規",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1148,
    "kanji": "角",
    "displayReading": "Bộ Giác",
    "readings": [
      "Giác"
    ],
    "meaning": "Cái sừng, góc cạnh",
    "examples": "角, 解, 触, 確",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1149,
    "kanji": "言 (訁)",
    "displayReading": "Bộ Ngôn",
    "readings": [
      "Ngôn"
    ],
    "meaning": "Lời nói, ngôn ngữ",
    "examples": "言, 語, 話, 読, 記",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1150,
    "kanji": "谷",
    "displayReading": "Bộ Cốc",
    "readings": [
      "Cốc"
    ],
    "meaning": "Thung lũng, khe núi",
    "examples": "谷, 欲, 浴, 俗, 容",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1151,
    "kanji": "豆",
    "displayReading": "Bộ Đậu",
    "readings": [
      "Đậu"
    ],
    "meaning": "Hạt đậu, đồ đựng tế lễ",
    "examples": "豆, 豊, 頭, 短, 登",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1152,
    "kanji": "豕",
    "displayReading": "Bộ Thỉ",
    "readings": [
      "Thỉ"
    ],
    "meaning": "Con lợn (heo)",
    "examples": "豚, 家, 象, 豪, 隊",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1153,
    "kanji": "豸",
    "displayReading": "Bộ Trãi",
    "readings": [
      "Trãi"
    ],
    "meaning": "Loài thú ăn thịt thân dài",
    "examples": "豹, 貌, 猫, 墾",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1154,
    "kanji": "貝",
    "displayReading": "Bộ Bối",
    "readings": [
      "Bối"
    ],
    "meaning": "Vỏ sò, tiền bạc, tài sản",
    "examples": "貝, 買, 売, 貯, 財",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1155,
    "kanji": "赤",
    "displayReading": "Bộ Xích",
    "readings": [
      "Xích"
    ],
    "meaning": "Màu đỏ",
    "examples": "赤, 赦, 赫",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1156,
    "kanji": "走",
    "displayReading": "Bộ Tẩu",
    "readings": [
      "Tẩu"
    ],
    "meaning": "Chạy, di chuyển nhanh",
    "examples": "走, 起, 超, 越, 趣",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1157,
    "kanji": "足 (⻊)",
    "displayReading": "Bộ Túc",
    "readings": [
      "Túc"
    ],
    "meaning": "Bàn chân, đầy đủ",
    "examples": "足, 路, 踊, 跳, 距",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1158,
    "kanji": "身",
    "displayReading": "Bộ Thân",
    "readings": [
      "Thân"
    ],
    "meaning": "Thân thể, bản thân",
    "examples": "身, 射, 謝, 躯",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1159,
    "kanji": "車",
    "displayReading": "Bộ Xa",
    "readings": [
      "Xa"
    ],
    "meaning": "Xe cộ, bánh xe",
    "examples": "車, 転, 軽, 輪, 軍",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1160,
    "kanji": "辛",
    "displayReading": "Bộ Tân",
    "readings": [
      "Tân"
    ],
    "meaning": "Cay đắng, vất vả",
    "examples": "辛, 辞, 弁, 幸, 辟",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1161,
    "kanji": "辰",
    "displayReading": "Bộ Thần",
    "readings": [
      "Thần"
    ],
    "meaning": "Ngôi sao, địa chi Thìn, buổi sớm",
    "examples": "農, 振, 震, 辱",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1162,
    "kanji": "辵 (辶)",
    "displayReading": "Bộ Sước",
    "readings": [
      "Sước"
    ],
    "meaning": "Bước đi, di chuyển trên đường",
    "examples": "道, 近, 遠, 進, 運",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1163,
    "kanji": "邑 (阝 phải)",
    "displayReading": "Bộ Ấp",
    "readings": [
      "Ấp"
    ],
    "meaning": "Vùng đất, làng mạc, đô thị",
    "examples": "都, 郡, 部, 郵, 郷",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1164,
    "kanji": "酉",
    "displayReading": "Bộ Dậu",
    "readings": [
      "Dậu"
    ],
    "meaning": "Bình rượu, địa chi Dậu",
    "examples": "酒, 配, 酔, 酸, 医",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1165,
    "kanji": "釆",
    "displayReading": "Bộ Biện",
    "readings": [
      "Biện"
    ],
    "meaning": "Phân biệt, dấu chân thú",
    "examples": "採, 番, 釈, 審",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1166,
    "kanji": "里",
    "displayReading": "Bộ Lý",
    "readings": [
      "Lý"
    ],
    "meaning": "Làng xóm, đơn vị đo dặm",
    "examples": "里, 重, 野, 量, 黒",
    "topicId": "rad_7_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1167,
    "kanji": "金 (釒)",
    "displayReading": "Bộ Kim",
    "readings": [
      "Kim"
    ],
    "meaning": "Kim loại, vàng, tiền bạc",
    "examples": "金, 鉄, 銀, 鏡, 針",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1168,
    "kanji": "長 (镸)",
    "displayReading": "Bộ Trường",
    "readings": [
      "Trường"
    ],
    "meaning": "Dài, người đứng đầu, lớn lên",
    "examples": "長, 張, 帳, 膨",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1169,
    "kanji": "門",
    "displayReading": "Bộ Môn",
    "readings": [
      "Môn"
    ],
    "meaning": "Cổng lớn, cánh cửa",
    "examples": "門, 間, 開, 閉, 聞",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1170,
    "kanji": "阜 (阝 trái)",
    "displayReading": "Bộ Phụ",
    "readings": [
      "Phụ"
    ],
    "meaning": "Gò đất, đồi núi, bậc thang",
    "examples": "院, 階, 陽, 防, 限",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1171,
    "kanji": "隶",
    "displayReading": "Bộ Đãi",
    "readings": [
      "Đãi"
    ],
    "meaning": "Kịp đến, phụ thuộc",
    "examples": "隷, 康, 逮",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1172,
    "kanji": "隹",
    "displayReading": "Bộ Chuy",
    "readings": [
      "Chuy"
    ],
    "meaning": "Chim đuôi ngắn",
    "examples": "集, 雑, 難, 離, 雄",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1173,
    "kanji": "雨 (⻗)",
    "displayReading": "Bộ Vũ",
    "readings": [
      "Vũ"
    ],
    "meaning": "Mưa, hiện tượng thời tiết",
    "examples": "雨, 雪, 雲, 電, 霧",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1174,
    "kanji": "青 (靑)",
    "displayReading": "Bộ Thanh",
    "readings": [
      "Thanh"
    ],
    "meaning": "Màu xanh lam/lục, trẻ trung",
    "examples": "青, 静, 晴, 清, 精",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1175,
    "kanji": "非",
    "displayReading": "Bộ Phi",
    "readings": [
      "Phi"
    ],
    "meaning": "Không phải, sai trái",
    "examples": "非, 悲, 罪, 排, 俳",
    "topicId": "rad_8_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1176,
    "kanji": "面",
    "displayReading": "Bộ Diện",
    "readings": [
      "Diện"
    ],
    "meaning": "Khuôn mặt, bề mặt",
    "examples": "面, 麺, 緬",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1177,
    "kanji": "革",
    "displayReading": "Bộ Cách",
    "readings": [
      "Cách"
    ],
    "meaning": "Da thú thuộc, cải cách",
    "examples": "革, 靴, 鞄, 覇",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1178,
    "kanji": "韋",
    "displayReading": "Bộ Vi",
    "readings": [
      "Vi"
    ],
    "meaning": "Da thuộc mềm, vây quanh",
    "examples": "韓, 偉, 違, 緯",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1179,
    "kanji": "韭",
    "displayReading": "Bộ Cửu",
    "readings": [
      "Cửu"
    ],
    "meaning": "Rau hẹ",
    "examples": "韮, 繊",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1180,
    "kanji": "音",
    "displayReading": "Bộ Âm",
    "readings": [
      "Âm"
    ],
    "meaning": "Âm thanh, tiếng động",
    "examples": "音, 暗, 意, 響, 韻",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1181,
    "kanji": "頁",
    "displayReading": "Bộ Hiệt",
    "readings": [
      "Hiệt"
    ],
    "meaning": "Cái đầu, trang giấy",
    "examples": "頭, 顔, 題, 願, 順",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1182,
    "kanji": "風",
    "displayReading": "Bộ Phong",
    "readings": [
      "Phong"
    ],
    "meaning": "Gió, phong cách",
    "examples": "風, 台, 嵐, 颯",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1183,
    "kanji": "飛",
    "displayReading": "Bộ Phi",
    "readings": [
      "Phi"
    ],
    "meaning": "Bay lượn",
    "examples": "飛, 翻",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1184,
    "kanji": "食 (飠)",
    "displayReading": "Bộ Thực",
    "readings": [
      "Thực"
    ],
    "meaning": "Ăn uống, thức ăn",
    "examples": "食, 飲, 飯, 館, 養",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1185,
    "kanji": "首",
    "displayReading": "Bộ Thủ",
    "readings": [
      "Thủ"
    ],
    "meaning": "Cái đầu, cái cổ, đứng đầu",
    "examples": "首, 道, 導",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1186,
    "kanji": "香",
    "displayReading": "Bộ Hương",
    "readings": [
      "Hương"
    ],
    "meaning": "Mùi thơm, hương vị",
    "examples": "香, 馨, 馥",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1187,
    "kanji": "馬",
    "displayReading": "Bộ Mã",
    "readings": [
      "Mã"
    ],
    "meaning": "Con ngựa",
    "examples": "馬, 駅, 駐, 騒, 驚",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1188,
    "kanji": "骨",
    "displayReading": "Bộ Cốt",
    "readings": [
      "Cốt"
    ],
    "meaning": "Xương cốt",
    "examples": "骨, 滑, 髄, 骸",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1189,
    "kanji": "高",
    "displayReading": "Bộ Cao",
    "readings": [
      "Cao"
    ],
    "meaning": "Cao lớn",
    "examples": "高, 稿, 橋",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1190,
    "kanji": "髟",
    "displayReading": "Bộ Tiêu",
    "readings": [
      "Tiêu"
    ],
    "meaning": "Tóc dài",
    "examples": "髪, 髭, 髯",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1191,
    "kanji": "鬥",
    "displayReading": "Bộ Đấu",
    "readings": [
      "Đấu"
    ],
    "meaning": "Đánh nhau, tranh đấu",
    "examples": "闘, 鬧",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1192,
    "kanji": "鬯",
    "displayReading": "Bộ Sưởng",
    "readings": [
      "Sưởng"
    ],
    "meaning": "Rượu nghệ dùng trong tế lễ",
    "examples": "鬱",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1193,
    "kanji": "鬲",
    "displayReading": "Bộ Cách",
    "readings": [
      "Cách"
    ],
    "meaning": "Cái đỉnh, nồi ba chân",
    "examples": "隔, 融, 鬲",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1194,
    "kanji": "鬼",
    "displayReading": "Bộ Quỷ",
    "readings": [
      "Quỷ"
    ],
    "meaning": "Con quỷ, linh hồn",
    "examples": "鬼, 魂, 魔, 魅, 塊",
    "topicId": "rad_9_10_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1195,
    "kanji": "魚",
    "displayReading": "Bộ Ngư",
    "readings": [
      "Ngư"
    ],
    "meaning": "Con cá",
    "examples": "魚, 鮮, 鯨, 鯉, 鮭",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1196,
    "kanji": "鳥",
    "displayReading": "Bộ Điểu",
    "readings": [
      "Điểu"
    ],
    "meaning": "Con chim",
    "examples": "鳥, 鳴, 島, 鶴, 鶏",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1197,
    "kanji": "鹵",
    "displayReading": "Bộ Lỗ",
    "readings": [
      "Lỗ"
    ],
    "meaning": "Đất mặn, muối mỏ",
    "examples": "塩, 鹸",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1198,
    "kanji": "鹿",
    "displayReading": "Bộ Lộc",
    "readings": [
      "Lộc"
    ],
    "meaning": "Con hươu, con nai",
    "examples": "鹿, 麗, 塵, 慶",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1199,
    "kanji": "麥 (麦)",
    "displayReading": "Bộ Mạch",
    "readings": [
      "Mạch"
    ],
    "meaning": "Lúa mạch",
    "examples": "麦, 麺, 麹",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1200,
    "kanji": "麻",
    "displayReading": "Bộ Ma",
    "readings": [
      "Ma"
    ],
    "meaning": "Cây gai dầu, tê liệt",
    "examples": "麻, 磨, 魔, 摩",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1201,
    "kanji": "黃 (黄)",
    "displayReading": "Bộ Hoàng",
    "readings": [
      "Hoàng"
    ],
    "meaning": "Màu vàng",
    "examples": "黄, 横, 広",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1202,
    "kanji": "黍",
    "displayReading": "Bộ Thử",
    "readings": [
      "Thử"
    ],
    "meaning": "Cây kê (lúa nếp)",
    "examples": "黎, 粘",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1203,
    "kanji": "黑 (黒)",
    "displayReading": "Bộ Hắc",
    "readings": [
      "Hắc"
    ],
    "meaning": "Màu đen",
    "examples": "黒, 黙, 点, 墨, 党",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1204,
    "kanji": "黹",
    "displayReading": "Bộ Chỉ",
    "readings": [
      "Chỉ"
    ],
    "meaning": "Thêu thùa, may vá",
    "examples": "黻, 黼",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1205,
    "kanji": "黽",
    "displayReading": "Bộ Mãnh",
    "readings": [
      "Mãnh"
    ],
    "meaning": "Con ếch, cố gắng",
    "examples": "縄, 蠅, 亀",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1206,
    "kanji": "鼎",
    "displayReading": "Bộ Đỉnh",
    "readings": [
      "Đỉnh"
    ],
    "meaning": "Cái đỉnh đồng ba chân",
    "examples": "鼎, 鼐",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1207,
    "kanji": "鼓",
    "displayReading": "Bộ Cổ",
    "readings": [
      "Cổ"
    ],
    "meaning": "Cái trống, cổ vũ",
    "examples": "鼓, 樹, 喜",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1208,
    "kanji": "鼠",
    "displayReading": "Bộ Thử",
    "readings": [
      "Thử"
    ],
    "meaning": "Con chuột",
    "examples": "鼠, 鼬, 竄",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1209,
    "kanji": "鼻",
    "displayReading": "Bộ Tỵ",
    "readings": [
      "Tỵ"
    ],
    "meaning": "Cái mũi",
    "examples": "鼻, 鼾",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1210,
    "kanji": "齊 (斉)",
    "displayReading": "Bộ Tề",
    "readings": [
      "Tề"
    ],
    "meaning": "Ngay ngắn, đều đặn",
    "examples": "斉, 済, 剤, 斎",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1211,
    "kanji": "齒 (歯)",
    "displayReading": "Bộ Xỉ",
    "readings": [
      "Xỉ"
    ],
    "meaning": "Cái răng",
    "examples": "歯, 齢, 噛",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1212,
    "kanji": "龍 (竜)",
    "displayReading": "Bộ Long",
    "readings": [
      "Long"
    ],
    "meaning": "Con rồng",
    "examples": "龍, 竜, 滝, 襲",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1213,
    "kanji": "龜 (亀)",
    "displayReading": "Bộ Quy",
    "readings": [
      "Quy"
    ],
    "meaning": "Con rùa",
    "examples": "亀, 縄",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  },
  {
    "id": 1214,
    "kanji": "龠",
    "displayReading": "Bộ Dược",
    "readings": [
      "Dược"
    ],
    "meaning": "Ống sáo cổ",
    "examples": "躍, 曜, 濯",
    "topicId": "rad_11_17_stroke",
    "level": "RADICALS",
    "isRadical": true
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TOPICS, KANJI_DATA, RADICALS_DATA, ALL_STUDY_ITEMS };
}
