// Dummy Events Data for Portfolio
// Location: Chandigarh, Punjab | Company: Techabet

export const EVENTS_DATA = {
  // January
  1: [
    { id: 1, time: "12:00 AM", name: "New Year Celebration", description: "Start the year fresh with new goals", category: "celebration" },
    { id: 2, time: "10:00 AM", name: "Morning Motivation", description: "Daily motivation session", category: "motivation" },
  ],
  2: [
    { id: 3, time: "09:00 AM", name: "Coding Challenge", description: "Daily coding problem", category: "challenge" },
  ],
  3: [
    { id: 4, time: "02:00 PM", name: "Team Standup", description: "Daily team meeting", category: "meeting" },
  ],
  5: [
    { id: 5, time: "03:00 PM", name: "Tech Workshop", description: "Learn new technologies", category: "workshop" },
  ],
  
  // February
  14: [
    { id: 6, time: "06:00 PM", name: "Valentine's Day", description: "Spread love and kindness", category: "celebration" },
    { id: 7, time: "08:00 PM", name: "Movie Night", description: "Romantic movie screening", category: "entertainment" },
  ],
  15: [
    { id: 8, time: "10:00 AM", name: "Project Deadline", description: "Submit your projects", category: "deadline" },
  ],
  
  // March
  8: [
    { id: 9, time: "08:00 AM", name: "Women's Day", description: "Celebrate women empowerment", category: "celebration" },
    { id: 10, time: "11:00 AM", name: "Inspirational Talk", description: "Woman entrepreneur session", category: "seminar" },
  ],
  15: [
    { id: 11, time: "01:00 PM", name: "Hackathon", description: "24-hour coding competition", category: "challenge" },
  ],
  18: [
    { id: 12, time: "07:00 PM", name: "Holi Celebration", description: "Festival of colors", category: "celebration" },
    { id: 13, time: "09:00 PM", name: "Bonfire Party", description: "Traditional celebration", category: "entertainment" },
  ],
  
  // April
  22: [
    { id: 14, time: "07:00 AM", name: "Earth Day", description: "Save our planet", category: "awareness" },
    { id: 15, time: "02:00 PM", name: "Tree Planting", description: "Environmental activity", category: "volunteer" },
  ],
  
  // May
  31: [
    { id: 16, time: "06:00 AM", name: "Buddha Purnima", description: "Birth of Buddha", category: "celebration" },
    { id: 17, time: "10:00 AM", name: "Meditation Session", description: "Peaceful meditation", category: "wellness" },
  ],
  
  // July
  5: [
    { id: 18, time: "09:00 AM", name: "Teachers Day", description: "Celebrate teachers", category: "celebration" },
  ],
  15: [
    { id: 19, time: "03:00 PM", name: "Summer Camp", description: "Fun learning activities", category: "camp" },
  ],
  
  // August
  15: [
    { id: 20, time: "08:00 AM", name: "Independence Day", description: "Celebrate freedom", category: "national" },
    { id: 21, time: "05:00 PM", name: "Patriotic Rally", description: "Unity and harmony", category: "event" },
  ],
  
  // September
  5: [
    { id: 22, time: "10:00 AM", name: "Teachers Appreciation", description: "Thank the educators", category: "appreciation" },
  ],
  15: [
    { id: 23, time: "01:00 PM", name: "Janmashtami", description: "Birth of Lord Krishna", category: "celebration" },
  ],
  
  // October
  2: [
    { id: 24, time: "07:00 AM", name: "Gandhi Jayanti", description: "Father of the nation", category: "national" },
  ],
  25: [
    { id: 25, time: "06:00 PM", name: "Diwali", description: "Festival of lights", category: "celebration" },
    { id: 26, time: "08:00 PM", name: "Fireworks", description: "Diwali celebration", category: "entertainment" },
  ],
  
  // November
  1: [
    { id: 27, time: "09:00 AM", name: "Diwali Countdown", description: "Festive season begins", category: "celebration" },
  ],
  15: [
    { id: 28, time: "02:00 PM", name: "Tech Conference", description: "Annual tech summit", category: "conference" },
  ],
  
  // December
  25: [
    { id: 29, time: "12:00 AM", name: "Merry Christmas", description: "Spread joy and cheer", category: "celebration" },
    { id: 30, time: "06:00 PM", name: "Christmas Party", description: "Festive gathering", category: "party" },
  ],
  31: [
    { id: 31, time: "11:59 PM", name: "New Year Eve", description: "Countdown to new year", category: "celebration" },
  ],
};

// Category Colors
export const CATEGORY_COLORS = {
  celebration: { bg: "#FF6B6B", text: "#ffffff" },
  challenge: { bg: "#4ECDC4", text: "#ffffff" },
  meeting: { bg: "#45B7D1", text: "#ffffff" },
  workshop: { bg: "#96CEB4", text: "#ffffff" },
  entertainment: { bg: "#FFEAA7", text: "#1a1a1a" },
  deadline: { bg: "#DFE6E9", text: "#1a1a1a" },
  seminar: { bg: "#A29BFE", text: "#ffffff" },
  motivation: { bg: "#74B9FF", text: "#ffffff" },
  awareness: { bg: "#55EFC4", text: "#1a1a1a" },
  volunteer: { bg: "#81ECEC", text: "#1a1a1a" },
  wellness: { bg: "#FD79A8", text: "#ffffff" },
  camp: { bg: "#FDCB6E", text: "#1a1a1a" },
  national: { bg: "#FF6348", text: "#ffffff" },
  event: { bg: "#9B59B6", text: "#ffffff" },
  appreciation: { bg: "#1ABC9C", text: "#ffffff" },
  party: { bg: "#E74C3C", text: "#ffffff" },
  conference: { bg: "#2C3E50", text: "#ffffff" },
};

/**
 * Get events for a specific day
 */
export const getEventsByDay = (day) => {
  return EVENTS_DATA[day] || [];
};

/**
 * Get all events
 */
export const getAllEvents = () => {
  const allEvents = [];
  Object.entries(EVENTS_DATA).forEach(([day, events]) => {
    events.forEach((event) => {
      allEvents.push({
        ...event,
        day: parseInt(day),
      });
    });
  });
  return allEvents;
};

/**
 * Get upcoming events (next 7 days)
 */
export const getUpcomingEvents = (currentDay) => {
  const upcoming = [];
  for (let i = 0; i < 7; i++) {
    const day = (currentDay + i - 1) % 365 + 1;
    const events = getEventsByDay(day);
    if (events.length > 0) {
      upcoming.push(...events.map((e) => ({ ...e, day })));
    }
  }
  return upcoming;
};

/**
 * Get events by category
 */
export const getEventsByCategory = (category) => {
  return getAllEvents().filter((event) => event.category === category);
};

/**
 * Get category color
 */
export const getCategoryColor = (category) => {
  return CATEGORY_COLORS[category] || { bg: "#BDC3C7", text: "#1a1a1a" };
};

/**
 * Subscribe to newsletter
 */
export const subscribeToNewsletter = async (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: `Successfully subscribed ${email}`,
        subscriber: {
          email,
          subscribedAt: new Date().toISOString(),
        },
      });
    }, 1000);
  });
};

/**
 * Get subscriber stats
 */
export const getSubscriberStats = () => {
  return {
    totalSubscribers: 1250,
    thisMonth: 156,
    thisWeek: 34,
    growth: "12.5%",
  };
};