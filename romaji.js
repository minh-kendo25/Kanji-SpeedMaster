// Kanji Kachi - Romaji to Hiragana Converter
// Faithful JavaScript port of Android RomajiConverter.kt

const RomajiConverter = (() => {
  const romajiMap = {
    // 4 chars
    "ttsu": "っつ", "cchi": "っち", "sshi": "っし",
    "nnya": "んにゃ", "nnyu": "んにゅ", "nnyo": "んにょ",
    // 3 chars
    "nna": "んな", "nni": "んに", "nnu": "んぬ", "nne": "んね", "nno": "んの",
    "kya": "きゃ", "kyu": "きゅ", "kyo": "きょ",
    "sha": "しゃ", "shu": "しゅ", "sho": "しょ", "she": "しぇ",
    "sya": "しゃ", "syu": "しゅ", "syo": "しょ",
    "cha": "ちゃ", "chu": "ちゅ", "cho": "ちょ", "che": "ちぇ",
    "tya": "ちゃ", "tyu": "ちゅ", "tyo": "ちょ",
    "nya": "にゃ", "nyu": "にゅ", "nyo": "にょ",
    "hya": "ひゃ", "hyu": "ひゅ", "hyo": "ひょ",
    "mya": "みゃ", "myu": "みゅ", "myo": "みょ",
    "rya": "りゃ", "ryu": "りゅ", "ryo": "りょ",
    "gya": "ぎゃ", "gyu": "ぎゅ", "gyo": "ぎょ",
    "jya": "じゃ", "jyu": "じゅ", "jyo": "じょ",
    "bya": "びゃ", "byu": "びゅ", "byo": "びょ",
    "pya": "ぴゃ", "pyu": "ぴゅ", "pyo": "ぴょ",
    "tsu": "つ", "shi": "し", "chi": "ち",
    "dzu": "づ", "dzi": "ぢ",
    "zya": "じゃ", "zyu": "じゅ", "zyo": "じょ",
    "xtu": "っ", "ltu": "っ",
    "xtsu": "っ", "ltsu": "っ",
    // 2 chars
    "ka": "か", "ki": "き", "ku": "く", "ke": "け", "ko": "こ",
    "sa": "さ", "si": "し", "su": "す", "se": "せ", "so": "そ",
    "ta": "た", "ti": "ち", "tu": "つ", "te": "て", "to": "と",
    "na": "な", "ni": "に", "nu": "ぬ", "ne": "ね", "no": "の",
    "ha": "は", "hi": "ひ", "fu": "ふ", "hu": "ふ", "he": "へ", "ho": "ほ",
    "ma": "ま", "mi": "み", "mu": "む", "me": "め", "mo": "も",
    "ya": "や", "yu": "ゆ", "yo": "よ",
    "ra": "ら", "ri": "り", "ru": "る", "re": "れ", "ro": "ろ",
    "wa": "わ", "wo": "を",
    "ga": "が", "gi": "ぎ", "gu": "ぐ", "ge": "げ", "go": "ご",
    "za": "ざ", "zi": "じ", "zu": "ず", "ze": "ぜ", "zo": "ぞ",
    "ja": "じゃ", "ji": "じ", "ju": "じゅ", "jo": "じょ", "je": "じぇ",
    "da": "だ", "di": "ぢ", "du": "づ", "de": "で", "do": "ど",
    "ba": "ば", "bi": "び", "bu": "ぶ", "be": "べ", "bo": "ぼ",
    "pa": "ぱ", "pi": "ぴ", "pu": "ぷ", "pe": "ぺ", "po": "ぽ",
    "fa": "ふぁ", "fi": "ふぃ", "fe": "ふぇ", "fo": "ふぉ",
    "nn": "ん", "n'": "ん",
    "xa": "ぁ", "xi": "ぃ", "xu": "ぅ", "xe": "ぇ", "xo": "ぉ",
    "la": "ぁ", "li": "ぃ", "lu": "ぅ", "le": "ぇ", "lo": "ぉ",
    // 1 char
    "a": "あ", "i": "い", "u": "う", "e": "え", "o": "お",
    "-": "ー"
  };

  const doubleConsonants = new Set([
    'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'
  ]);
  const vowelOrYChars = new Set(['a', 'e', 'i', 'o', 'u', 'y']);

  function convertRomajiToHiragana(text) {
    if (!text) return "";
    let s = text.normalize("NFKC").toLowerCase().replace(/’/g, "'");
    let res = "";
    let i = 0;
    while (i < s.length) {
      // 4 chars
      if (i + 4 <= s.length) {
        const sub4 = s.substring(i, i + 4);
        if (romajiMap[sub4]) {
          res += romajiMap[sub4];
          i += 4;
          continue;
        }
      }
      // 3 chars
      if (i + 3 <= s.length) {
        const sub3 = s.substring(i, i + 3);
        if (romajiMap[sub3]) {
          res += romajiMap[sub3];
          i += 3;
          continue;
        }
      }
      // Double consonant
      if (i + 1 < s.length && s[i] === s[i + 1] && doubleConsonants.has(s[i])) {
        res += "っ";
        i += 1;
        continue;
      }
      // 2 chars
      if (i + 2 <= s.length) {
        const sub2 = s.substring(i, i + 2);
        if (romajiMap[sub2]) {
          res += romajiMap[sub2];
          i += 2;
          continue;
        }
      }
      // m before b or p -> ん
      if (s[i] === 'm' && i + 1 < s.length && (s[i + 1] === 'b' || s[i + 1] === 'p')) {
        res += "ん";
        i += 1;
        continue;
      }
      // n before consonant or end of word
      if (s[i] === 'n') {
        const next = i + 1 < s.length ? s[i + 1] : null;
        if (!next || (!vowelOrYChars.has(next) && next !== 'n')) {
          res += "ん";
          i += 1;
          continue;
        }
      }
      // 1 char
      if (romajiMap[s[i]]) {
        res += romajiMap[s[i]];
        i += 1;
        continue;
      }
      // Passthrough
      res += s[i];
      i += 1;
    }
    return res;
  }

  function katakanaToHiragana(text) {
    if (!text) return "";
    let res = "";
    for (let i = 0; i < text.length; i++) {
      const code = text.charCodeAt(i);
      if (code >= 0x30A1 && code <= 0x30F6) {
        res += String.fromCharCode(code - 0x60);
      } else {
        res += text[i];
      }
    }
    return res;
  }

  function normalizeJapanese(text) {
    if (!text) return "";
    const stripped = text.normalize("NFKC").replace(/[〜~:\s]/g, "");
    return katakanaToHiragana(stripped).toLowerCase();
  }

  return {
    convert: convertRomajiToHiragana,
    katakanaToHiragana,
    normalize: normalizeJapanese
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RomajiConverter;
}
