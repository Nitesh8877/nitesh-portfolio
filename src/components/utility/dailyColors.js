// ✅ DYNAMICALLY GENERATED 365 Days Color System
// Location: Chandigarh, Punjab | Company: Techabet | Position: Backend Developer
// Perfect Font Contrast for All Days

// Color Palette - rotates through these 16 beautiful gradients
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
];

// Festival Dates with Special Celebration Colors
const FESTIVALS = {
  1: { 
    name: "New Year", 
    icon: "🎆", 
    event: "Happy New Year!",
    bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    font: "#ffffff"
  },
  20: { 
    name: "Republic Day", 
    icon: "🇮🇳", 
    event: "Happy Republic Day!",
    bg: "linear-gradient(135deg, #ff6b35 0%, #004e89 100%)",
    font: "#ffffff"
  },
  33: { 
    name: "Valentine's Day", 
    icon: "❤️", 
    event: "Happy Valentine's Day!",
    bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    font: "#ffffff"
  },
  61: { 
    name: "Women's Day", 
    icon: "👩", 
    event: "Happy Women's Day!",
    bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    font: "#1a1a1a"
  },
  78: { 
    name: "Holi Festival", 
    icon: "🎨", 
    event: "Happy Holi!",
    bg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    font: "#1a1a1a"
  },
  114: { 
    name: "Earth Day", 
    icon: "🌍", 
    event: "Happy Earth Day!",
    bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    font: "#1a1a1a"
  },
  152: { 
    name: "Buddha Purnima", 
    icon: "🙏", 
    event: "Buddha Purnima!",
    bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    font: "#1a1a1a"
  },
  183: { 
    name: "Teachers Day", 
    icon: "👨‍🏫", 
    event: "Happy Teachers Day!",
    bg: "linear-gradient(135deg, #ffa751 0%, #ffe259 100%)",
    font: "#1a1a1a"
  },
  229: { 
    name: "Diwali", 
    icon: "🪔", 
    event: "Happy Diwali!",
    bg: "linear-gradient(135deg, #ffa751 0%, #ffe259 100%)",
    font: "#1a1a1a"
  },
  299: { 
    name: "Christmas", 
    icon: "🎄", 
    event: "Merry Christmas!",
    bg: "linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)",
    font: "#ffffff"
  },
  365: { 
    name: "New Year Eve", 
    icon: "🎉", 
    event: "Happy New Year Eve!",
    bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    font: "#ffffff"
  },
};

// Month Information
const MONTHS_DATA = {
  1: { name: "January", days: 31 },
  2: { name: "February", days: 29 }, // Handle leap year
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
 * Dynamically Generate All 365 Days
 * @returns {Object} Complete color scheme for all 365 days
 */
const generateAllColors365 = () => {
  const colors = {};
  let dayCounter = 1;

  for (let month = 1; month <= 12; month++) {
    const monthDays = MONTHS_DATA[month].days;
    const monthName = MONTHS_DATA[month].name;

    for (let day = 1; day <= monthDays; dayCounter++, day++) {
      // Check if this day is a festival
      const festival = FESTIVALS[dayCounter];

      if (festival) {
        // Use festival colors
        colors[dayCounter] = {
          day: dayCounter,
          date: `${monthName} ${day}`,
          monthNum: month,
          dayOfMonth: day,
          name: `${festival.icon} ${festival.name}`,
          icon: festival.icon,
          bg: festival.bg,
          font: festival.font,
          event: festival.event,
          isFestival: true,
        };
      } else {
        // Use rotating palette
        const paletteIndex = (dayCounter - 1) % COLOR_PALETTE.length;
        const color = COLOR_PALETTE[paletteIndex];

        colors[dayCounter] = {
          day: dayCounter,
          date: `${monthName} ${day}`,
          monthNum: month,
          dayOfMonth: day,
          name: `Day ${dayCounter}`,
          icon: "📅",
          bg: color.bg,
          font: color.font,
          event: null,
          isFestival: false,
        };
      }
    }
  }

  return colors;
};

// Generate all colors once
export const COLORS_365 = generateAllColors365();

/**
 * Get current day of year (1-365)
 */
export const getDayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

/**
 * Get colors for current day
 */
export const getCurrentDayColors = () => {
  const dayOfYear = getDayOfYear();
  const colorIndex = dayOfYear === 0 ? 1 : dayOfYear;
  return COLORS_365[colorIndex] || COLORS_365[1];
};

/**
 * Get colors for specific day
 */
export const getColorByDay = (day) => {
  if (day < 1 || day > 365) return COLORS_365[1];
  return COLORS_365[day];
};

/**
 * Get all colors
 */
export const getAllColors = () => COLORS_365;

/**
 * Get festival information
 */
export const getFestivalInfo = (day) => {
  return FESTIVALS[day] || null;
};

/**
 * Check if a day is festival
 */
export const isFestival = (day) => {
  return FESTIVALS[day] !== undefined;
};

/**
 * Get all festivals
 */
export const getAllFestivals = () => {
  return Object.entries(FESTIVALS).map(([day, info]) => ({
    day: parseInt(day),
    ...info,
  }));
};

/**
 * Get colors for a specific month
 */
export const getMonthColors = (month) => {
  let startDay = 1;
  for (let i = 1; i < month; i++) {
    startDay += MONTHS_DATA[i].days;
  }
  const endDay = startDay + MONTHS_DATA[month].days - 1;
  
  const monthColors = {};
  for (let day = startDay; day <= endDay; day++) {
    monthColors[day] = COLORS_365[day];
  }
  return monthColors;
};

/**
 * Export colors as CSV (useful for documentation)
 */
export const exportAsCSV = () => {
  let csv = "Day,Date,Month,Name,Festival,Font Color,Background\n";
  
  for (let day = 1; day <= 365; day++) {
    const color = COLORS_365[day];
    csv += `${color.day},"${color.date}",${color.monthNum},"${color.name}",${color.isFestival},"${color.font}","${color.bg}"\n`;
  }
  
  return csv;
};

/**
 * Get statistics
 */
export const getColorStats = () => {
  const festivals = Object.keys(FESTIVALS).length;
  const regularDays = 365 - festivals;
  const uniqueGradients = COLOR_PALETTE.length;
  
  return {
    totalDays: 365,
    festivals,
    regularDays,
    uniqueGradients,
    colorsPerPalette: uniqueGradients,
  };
};

// Export a human-readable list as string
export const getFullList365String = () => {
  let list = "✅ ALL 365 DAYS COLOR SCHEME\n";
  list += "================================\n\n";
  
  let currentMonth = 0;
  for (let day = 1; day <= 365; day++) {
    const color = COLORS_365[day];
    
    if (color.monthNum !== currentMonth) {
      currentMonth = color.monthNum;
      list += `\n📅 ${MONTHS_DATA[currentMonth].name.toUpperCase()}\n`;
      list += "---\n";
    }
    
    const emoji = color.isFestival ? "🎉" : "📆";
    list += `${emoji} Day ${day} (${color.date}): ${color.name} | Font: ${color.font}\n`;
  }
  
  return list;
};