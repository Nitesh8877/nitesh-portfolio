// colors365_2025.js
// ✅ 2025 EDITION - 365-Day Color System (accurate 2025 festival dates)
// Location: Chandigarh, Punjab | Company: Techabet | Position: Backend Developer
// Includes Guru Nanak Jayanti as birthday (5 Nov 2025) and other 2025 dates.
// NOTE: Lunar festivals (Eid, Diwali some years, etc.) may vary by local moon sighting.
// Sources used to set 2025 dates are recorded in the assistant session.

const COLOR_PALETTE = [
  { bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", font: "#ffffff" },
  { bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", font: "#ffffff" },
  { bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)", font: "#ffffff" },
  { bg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #ff6b9d 0%, #c06c84 100%)", font: "#ffffff" },
  { bg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #0984e3 0%, #74b9ff 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #00b894 0%, #55efc4 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #fdcb6e 0%, #f39c12 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #e17055 0%, #d63031 100%)", font: "#ffffff" },
  { bg: "linear-gradient(135deg, #2d3436 0%, #636e72 100%)", font: "#ffffff" },
  { bg: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)", font: "#ffffff" },

  // Additional gradients (total >40)
  { bg: "linear-gradient(135deg, #8360c3 0%, #2ebf91 100%)", font: "#ffffff" },
  { bg: "linear-gradient(135deg, #FFAFBD 0%, #ffc3a0 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #a770ef 0%, #cf8bf3 100%)", font: "#ffffff" },
  { bg: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #fbc2eb 0%, #a18cd1 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)", font: "#ffffff" },
  { bg: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)", font: "#ffffff" },
  { bg: "linear-gradient(135deg, #30E8BF 0%, #FF8235 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #4b6cb7 0%, #182848 100%)", font: "#ffffff" },
  { bg: "linear-gradient(135deg, #FDBB2D 0%, #22C1C3 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #FBD3E9 0%, #BB377D 100%)", font: "#ffffff" },
  { bg: "linear-gradient(135deg, #7F7FD5 0%, #86A8E7 50%, #91EAE4 100%)", font: "#ffffff" },
  { bg: "linear-gradient(135deg, #E0C3FC 0%, #8EC5FC 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #B2FEFA 0%, #0ED2F7 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #FAD0C4 0%, #FFD1FF 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #DCE35B 0%, #45B649 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #F7971E 0%, #FFD200 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #36D1DC 0%, #5B86E5 100%)", font: "#ffffff" },
  { bg: "linear-gradient(135deg, #EE9CA7 0%, #FFDDE1 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #A8FF78 0%, #78FFD6 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #FC5C7D 0%, #6A82FB 100%)", font: "#ffffff" },
  { bg: "linear-gradient(135deg, #FFC3A0 0%, #FFAFBD 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #4CE0B3 0%, #C779D0 100%)", font: "#1a1a1a" },
  { bg: "linear-gradient(135deg, #636363 0%, #a2ab58 100%)", font: "#ffffff" },
  { bg: "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)", font: "#ffffff" }
];

const MONTHS_DATA = {
  1: { name: "January", days: 31 },
  2: { name: "February", days: 29 }, // keep 29 for leap handling
  3: { name: "March", days: 31 },
  4: { name: "April", days: 30 },
  5: { name: "May", days: 31 },
  6: { name: "June", days: 30 },
  7: { name: "July", days: 31 },
  8: { name: "August", days: 31 },
  9: { name: "September", days: 30 },
  10: { name: "October", days: 31 },
  11: { name: "November", days: 30 },
  12: { name: "December", days: 31 },
};

/**
 * FESTIVALS_ARRAY for 2025 (month/day specified)
 * - type: "festival" | "birthday" | "awareness" | "observance"
 * - bg & font optional (palette assigned automatically if omitted)
 *
 * Important: Lunar festivals (Eid, some Diwali observance variants) can vary by sighting.
 * The dates below are set to the widely-published 2025 dates.
 */
const FESTIVALS_ARRAY = [
  // Jan
  { month: 1, day: 1, name: "New Year", icon: "🎆", event: "Happy New Year 2025!", type: "observance", bg: COLOR_PALETTE[0].bg, font: COLOR_PALETTE[0].font },
  { month: 1, day: 12, name: "Swami Vivekananda Jayanti", icon: "🧠", event: "Swami Vivekananda Jayanti", type: "birthday", bg: COLOR_PALETTE[5].bg, font: COLOR_PALETTE[5].font },
  { month: 1, day: 14, name: "Makar Sankranti / Pongal", icon: "🌾", event: "Happy Makar Sankranti / Pongal!", type: "festival", bg: COLOR_PALETTE[4].bg, font: COLOR_PALETTE[4].font },
  { month: 1, day: 23, name: "Netaji Subhas Chandra Bose Jayanti", icon: "🇮🇳", event: "Netaji Jayanti", type: "birthday", bg: COLOR_PALETTE[8].bg, font: COLOR_PALETTE[8].font },
  { month: 1, day: 26, name: "Republic Day", icon: "🇮🇳", event: "Happy Republic Day!", type: "observance", bg: "linear-gradient(135deg, #ff9933 0%, #ffffff 50%, #138808 100%)", font: "#000000" },

  // Feb
  { month: 2, day: 14, name: "Valentine's Day", icon: "❤️", event: "Happy Valentine's Day!", type: "observance", bg: COLOR_PALETTE[1].bg, font: COLOR_PALETTE[1].font },
  { month: 2, day: 26, name: "Maha Shivaratri", icon: "🕉️", event: "Maha Shivaratri", type: "festival", bg: COLOR_PALETTE[14].bg, font: COLOR_PALETTE[14].font },

  // Mar
  // Holika Dahan: 13 Mar 2025, Holi (Dhulandi): 14 Mar 2025
  { month: 3, day: 13, name: "Holika Dahan (Choti Holi)", icon: "🔥", event: "Holika Dahan", type: "festival", bg: COLOR_PALETTE[8].bg, font: COLOR_PALETTE[8].font },
  { month: 3, day: 14, name: "Holi (Dhulandi)", icon: "🎨", event: "Happy Holi!", type: "festival", bg: COLOR_PALETTE[8].bg, font: COLOR_PALETTE[8].font },

  // Apr
  // Good Friday: 18 Apr 2025 (Western Christian date)
  { month: 4, day: 6, name: "Ram Navami", icon: "🙏", event: "Ram Navami (2025)", type: "festival", bg: COLOR_PALETTE[25].bg, font: COLOR_PALETTE[25].font },
  { month: 4, day: 18, name: "Good Friday", icon: "✝️", event: "Good Friday", type: "observance", bg: COLOR_PALETTE[14].bg, font: COLOR_PALETTE[14].font },
  { month: 4, day: 22, name: "Earth Day", icon: "🌍", event: "Happy Earth Day!", type: "awareness", bg: COLOR_PALETTE[2].bg, font: COLOR_PALETTE[2].font },

  // May
  { month: 5, day: 1, name: "International Workers' Day", icon: "👷", event: "May Day", type: "observance", bg: COLOR_PALETTE[12].bg, font: COLOR_PALETTE[12].font },
  { month: 5, day: 7, name: "Rabindranath Tagore Jayanti", icon: "🖋️", event: "Tagore Jayanti", type: "birthday", bg: COLOR_PALETTE[24].bg, font: COLOR_PALETTE[24].font },

  // Jun
  // Eid al-Adha (Bakrid) widely reported as 6 Jun 2025; local moons may shift it.
  { month: 6, day: 6, name: "Eid al-Adha (Bakrid)", icon: "🕌", event: "Eid al-Adha (Bakrid) 2025", type: "festival", bg: COLOR_PALETTE[2].bg, font: COLOR_PALETTE[2].font },
  { month: 6, day: 21, name: "International Day of Yoga", icon: "🧘", event: "International Yoga Day", type: "observance", bg: COLOR_PALETTE[29].bg, font: COLOR_PALETTE[29].font },

  // Jul
  { month: 7, day: 1, name: "Doctor's Day (India)", icon: "🩺", event: "Doctor's Day", type: "observance", bg: COLOR_PALETTE[18].bg, font: COLOR_PALETTE[18].font },

  // Aug
  { month: 8, day: 15, name: "Independence Day", icon: "🇮🇳", event: "Happy Independence Day!", type: "observance", bg: "linear-gradient(135deg, #ff9933 0%, #ffffff 50%, #138808 100%)", font: "#000000" },
  { month: 8, day: 19, name: "World Photography Day", icon: "📸", event: "World Photography Day", type: "observance", bg: COLOR_PALETTE[16].bg, font: COLOR_PALETTE[16].font },

  // Sep
  { month: 9, day: 5, name: "Teachers' Day (India)", icon: "👨‍🏫", event: "Happy Teachers Day!", type: "observance", bg: COLOR_PALETTE[12].bg, font: COLOR_PALETTE[12].font },

  // Oct
  // Diwali (Lakshmi Puja) — Kashi Vidwat and many sources list Oct 20, 2025 as the correct observance
  { month: 10, day: 20, name: "Diwali (Lakshmi Puja) - 2025", icon: "🪔", event: "Happy Diwali!", type: "festival", bg: COLOR_PALETTE[2].bg, font: COLOR_PALETTE[2].font },
  // (Some sources discuss Oct 21 due to Amavasya spanning both days — local practice may vary)

  { month: 10, day: 2, name: "Gandhi Jayanti", icon: "👓", event: "Gandhi Jayanti", type: "birthday", bg: COLOR_PALETTE[26].bg, font: COLOR_PALETTE[26].font },
  { month: 10, day: 15, name: "APJ Abdul Kalam Birthday", icon: "🚀", event: "Dr. A.P.J. Abdul Kalam Birthday", type: "birthday", bg: COLOR_PALETTE[23].bg, font: COLOR_PALETTE[23].font },

  // Nov
  // Guru Nanak Jayanti (Gurpurab) — set to 5 Nov 2025 (published widely for 2025)
  { month: 11, day: 5, name: "Guru Nanak Jayanti (Gurpurab)", icon: "🪯", event: "Guru Nanak Jayanti — Birthday of Guru Nanak Dev Ji", type: "birthday", bg: COLOR_PALETTE[13].bg, font: COLOR_PALETTE[13].font },
  { month: 11, day: 14, name: "Children's Day (Nehru)", icon: "👶", event: "Children's Day (Jawaharlal Nehru Birthday)", type: "birthday", bg: COLOR_PALETTE[27].bg, font: COLOR_PALETTE[27].font },

  // Dec
  { month: 12, day: 1, name: "World AIDS Day", icon: "🩸", event: "World AIDS Day", type: "awareness", bg: COLOR_PALETTE[31] ? COLOR_PALETTE[31].bg : COLOR_PALETTE[11].bg, font: COLOR_PALETTE[31] ? COLOR_PALETTE[31].font : COLOR_PALETTE[11].font },
  { month: 12, day: 25, name: "Christmas", icon: "🎄", event: "Merry Christmas!", type: "festival", bg: COLOR_PALETTE[19].bg, font: COLOR_PALETTE[19].font },
  { month: 12, day: 31, name: "New Year Eve", icon: "🎉", event: "Happy New Year Eve!", type: "observance", bg: COLOR_PALETTE[0].bg, font: COLOR_PALETTE[0].font },

  // Eid al-Fitr (end of Ramadan) widely reported as Mar 31, 2025 in many sources (actual day depends on moon sighting)
  { month: 3, day: 31, name: "Eid al-Fitr (Ramzan Eid)", icon: "🕌", event: "Eid al-Fitr (2025) — subject to local moon sighting", type: "festival", bg: COLOR_PALETTE[2].bg, font: COLOR_PALETTE[2].font },

  // Additional notable birthdays & observances (some duplicates intentionally left for quick filtering)
  { month: 4, day: 15, name: "Satyajit Ray Birthday", icon: "🎬", event: "Satyajit Ray Birthday", type: "birthday", bg: COLOR_PALETTE[21].bg, font: COLOR_PALETTE[21].font },
  { month: 11, day: 19, name: "Guru Nanak (alternate lunar Kartik Purnima observance placeholder)", icon: "🪯", event: "Alternate Guru Nanak observance note", type: "observance", bg: COLOR_PALETTE[13].bg, font: COLOR_PALETTE[13].font }
];

/* ---------- Utilities (unchanged public API) ---------- */

const monthDayToDayOfYear = (month, day) => {
  if (!MONTHS_DATA[month]) return null;
  if (day < 1 || day > MONTHS_DATA[month].days) return null;
  let d = 0;
  for (let m = 1; m < month; m++) d += MONTHS_DATA[m].days;
  d += day;
  return d;
};

const buildFestivalsMap = () => {
  const map = {};
  for (const f of FESTIVALS_ARRAY) {
    const dayOfYear = monthDayToDayOfYear(f.month, f.day);
    if (!dayOfYear) continue;
    map[dayOfYear] = {
      month: f.month,
      day: f.day,
      name: f.name,
      icon: f.icon,
      event: f.event,
      type: f.type || "festival",
      bg: f.bg || null,
      font: f.font || null,
      dayOfYear
    };
  }
  return map;
};

const FESTIVALS = buildFestivalsMap();

const generateAllColors365 = () => {
  const colors = {};
  let counter = 1;
  for (let month = 1; month <= 12; month++) {
    const monthDays = MONTHS_DATA[month].days;
    const monthName = MONTHS_DATA[month].name;
    for (let day = 1; day <= monthDays; day++, counter++) {
      const festival = FESTIVALS[counter];
      if (festival) {
        let bg = festival.bg;
        let font = festival.font;
        if (!bg || !font) {
          const paletteIndex = (counter - 1) % COLOR_PALETTE.length;
          bg = bg || COLOR_PALETTE[paletteIndex].bg;
          font = font || COLOR_PALETTE[paletteIndex].font;
        }
        colors[counter] = {
          day: counter,
          date: `${monthName} ${day}, 2025`,
          monthNum: month,
          dayOfMonth: day,
          name: `${festival.icon || "🎉"} ${festival.name}`,
          icon: festival.icon || "🎉",
          bg,
          font,
          event: festival.event || null,
          isFestival: true,
          type: festival.type || "festival",
        };
      } else {
        const paletteIndex = (counter - 1) % COLOR_PALETTE.length;
        const color = COLOR_PALETTE[paletteIndex];
        colors[counter] = {
          day: counter,
          date: `${monthName} ${day}, 2025`,
          monthNum: month,
          dayOfMonth: day,
          name: `Day ${counter}`,
          icon: "📅",
          bg: color.bg,
          font: color.font,
          event: null,
          isFestival: false,
          type: "regular",
        };
      }
    }
  }
  return colors;
};

export const COLORS_365 = generateAllColors365();

/* ---------- Public API (unchanged) ---------- */

export const getDayOfYear = (date = new Date()) => {
  const now = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day === 0 ? 1 : day; // 1..365
};

export const getCurrentDayColors = (date = new Date()) => {
  const dayOfYear = getDayOfYear(date);
  return COLORS_365[dayOfYear] || COLORS_365[1];
};

export const getColorByDay = (day) => {
  if (!Number.isInteger(day) || day < 1 || day > 365) return COLORS_365[1];
  return COLORS_365[day];
};

export const getAllColors = () => COLORS_365;

export const getFestivalInfo = (input) => {
  if (typeof input === "number") return FESTIVALS[input] || null;
  if (input && typeof input === "object") {
    const dayOfYear = monthDayToDayOfYear(input.month, input.day);
    if (!dayOfYear) return null;
    return FESTIVALS[dayOfYear] || null;
  }
  return null;
};

export const isFestival = (day) => {
  return FESTIVALS[day] !== undefined;
};

export const getAllFestivals = () => {
  return Object.entries(FESTIVALS).map(([day, info]) => ({
    day: parseInt(day),
    ...info
  }));
};

export const getMonthColors = (month) => {
  if (!MONTHS_DATA[month]) return {};
  let startDay = 1;
  for (let i = 1; i < month; i++) startDay += MONTHS_DATA[i].days;
  const endDay = startDay + MONTHS_DATA[month].days - 1;
  const result = {};
  for (let d = startDay; d <= endDay; d++) result[d] = COLORS_365[d];
  return result;
};

export const exportAsCSV = () => {
  let csv = "Day,Date,Month,DayName,Type,Festival,Font Color,Background\n";
  for (let d = 1; d <= 365; d++) {
    const c = COLORS_365[d];
    csv += `${c.day},"${c.date}",${c.monthNum},"${c.name}",${c.type},${c.isFestival},"${c.font}","${c.bg}"\n`;
  }
  return csv;
};

export const getColorStats = () => {
  const festivalsCount = Object.keys(FESTIVALS).length;
  return {
    totalDays: 365,
    festivals: festivalsCount,
    regularDays: 365 - festivalsCount,
    uniqueGradients: COLOR_PALETTE.length,
  };
};

export const getFullList365String = () => {
  let out = "✅ ALL 365 DAYS COLOR SCHEME (2025)\n================================\n\n";
  let currentMonth = 0;
  for (let d = 1; d <= 365; d++) {
    const c = COLORS_365[d];
    if (c.monthNum !== currentMonth) {
      currentMonth = c.monthNum;
      out += `\n📅 ${MONTHS_DATA[currentMonth].name.toUpperCase()}\n---\n`;
    }
    const emoji = c.isFestival ? (c.type === "birthday" ? "🎂" : "🎉") : "📆";
    out += `${emoji} Day ${d} (${c.date}): ${c.name} | Type: ${c.type} | Font: ${c.font}\n`;
  }
  return out;
};

export default {
  COLOR_PALETTE,
  FESTIVALS_ARRAY,
  FESTIVALS,
  MONTHS_DATA,
  COLORS_365,
  getDayOfYear,
  getCurrentDayColors,
  getColorByDay,
  getAllColors,
  getFestivalInfo,
  isFestival,
  getAllFestivals,
  getMonthColors,
  exportAsCSV,
  getColorStats,
  getFullList365String,
};
