// src/components/EventsDisplayLive.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getCurrentDayColors, getDayOfYear } from "../components/utility/dailyColors";
import { getEventsByDay, getCategoryColor, getUpcomingEvents } from "../data/eventsData";

export const EventsDisplayLive = () => {
  const [liveTime, setLiveTime] = useState(new Date());
  const [todayEvents, setTodayEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [colors, setColors] = useState(null);
  const [dayOfYear, setDayOfYear] = useState(0);
  const [timeUntilNextEvent, setTimeUntilNextEvent] = useState("");

  // Update live time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Load colors, day, and events
  useEffect(() => {
    const dayNum = getDayOfYear();
    setDayOfYear(dayNum);

    const dailyColors = getCurrentDayColors();
    setColors(dailyColors);

    // Get events for today
    const events = getEventsByDay(dayNum);
    setTodayEvents(events);

    // Get upcoming events
    const upcoming = getUpcomingEvents(dayNum);
    setUpcomingEvents(upcoming.slice(0, 5));
  }, []);

  // Calculate time until next event
  useEffect(() => {
    const calculateTimeUntilNextEvent = () => {
      const now = new Date();
      const nextEventTime = new Date();
      
      if (todayEvents.length > 0) {
        const nextEvent = todayEvents[0];
        const [hours, minutes] = nextEvent.time.match(/\d+/g);
        nextEventTime.setHours(parseInt(hours), parseInt(minutes), 0);

        if (nextEventTime < now) {
          // Next event is tomorrow
          nextEventTime.setDate(nextEventTime.getDate() + 1);
        }

        const diff = nextEventTime - now;
        const hours_left = Math.floor(diff / 3600000);
        const minutes_left = Math.floor((diff % 3600000) / 60000);
        const seconds_left = Math.floor((diff % 60000) / 1000);

        setTimeUntilNextEvent(
          `${hours_left.toString().padStart(2, "0")}:${minutes_left
            .toString()
            .padStart(2, "0")}:${seconds_left.toString().padStart(2, "0")}`
        );
      }
    };

    calculateTimeUntilNextEvent();
    const timer = setInterval(calculateTimeUntilNextEvent, 1000);
    return () => clearInterval(timer);
  }, [todayEvents]);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!colors) return null;

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            📅 Today's Events & Live Timer
          </h2>
          <p className="text-gray-700 text-lg font-semibold">
            {colors.icon} {colors.name} - Day {dayOfYear} of 365
          </p>
        </motion.div>

        {/* Live Time & Date Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-12 p-8 rounded-2xl shadow-lg bg-white border-4 border-green-300"
        >
          <div className="grid md:grid-cols-4 gap-6">
            {/* Live Clock */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-green-50 via-white to-green-50 p-6 rounded-xl border-2 border-green-200 text-center"
            >
              <p className="text-gray-700 font-bold text-sm mb-2">⏰ Live Time</p>
              <motion.p
                key={liveTime.getSeconds()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl font-bold text-green-600 font-mono"
              >
                {formatTime(liveTime)}
              </motion.p>
              <p className="text-xs text-gray-600 mt-1">IST</p>
            </motion.div>

            {/* Today's Date */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6 rounded-xl border-2 border-blue-200 text-center"
            >
              <p className="text-gray-700 font-bold text-sm mb-2">📆 Today</p>
              <p className="text-lg font-bold text-blue-600">
                {formatDate(liveTime)}
              </p>
              <p className="text-xs text-gray-600 mt-1">Day {dayOfYear}</p>
            </motion.div>

            {/* Time Until Next Event */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-50 via-white to-purple-50 p-6 rounded-xl border-2 border-purple-200 text-center"
            >
              <p className="text-gray-700 font-bold text-sm mb-2">⏳ Next Event</p>
              <motion.p
                key={timeUntilNextEvent}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="text-3xl font-bold text-purple-600 font-mono"
              >
                {timeUntilNextEvent}
              </motion.p>
              <p className="text-xs text-gray-600 mt-1">Hours:Minutes:Secs</p>
            </motion.div>

            {/* Theme Info */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{ backgroundImage: colors.bg }}
              className="p-6 rounded-xl text-white border-2 text-center shadow-lg"
            >
              <p className="font-bold text-sm mb-2">🎨 Today's Theme</p>
              <p className="text-xl font-bold">{colors.name}</p>
              <p className="text-xs opacity-90 mt-1">
                {colors.event || "Regular Day"}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Today's Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 flex items-center gap-2">
            🚀 Events for Today
            {todayEvents.length > 0 && (
              <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                {todayEvents.length} Events
              </span>
            )}
          </h3>

          {todayEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {todayEvents.map((event, idx) => {
                const categoryColor = getCategoryColor(event.category);
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="bg-white rounded-xl shadow-lg p-6 border-l-4 hover:shadow-2xl transition-all"
                    style={{ borderColor: categoryColor.bg }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-sm font-bold text-gray-500">⏱️ {event.time}</p>
                        <h4 className="text-xl font-bold text-gray-900 mt-1">
                          {event.name}
                        </h4>
                      </div>
                      <motion.span whileHover={{ scale: 1.1 }} className="text-2xl">
                        {event.emoji || "📌"}
                      </motion.span>
                    </div>

                    <p className="text-gray-600 mb-4">{event.description}</p>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        style={{
                          backgroundColor: categoryColor.bg,
                          color: categoryColor.text,
                        }}
                        className="px-4 py-2 rounded-full text-sm font-semibold capitalize cursor-pointer transition-all"
                      >
                        {event.category}
                      </motion.span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
                      >
                        Add to Calendar
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl text-center border-2 border-blue-200"
            >
              <p className="text-2xl mb-2">📭</p>
              <p className="text-lg font-semibold text-gray-700">
                No events scheduled for today
              </p>
              <p className="text-gray-600 mt-2">Check upcoming events below!</p>
            </motion.div>
          )}
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 flex items-center gap-2">
            🔮 Upcoming Events
            {upcomingEvents.length > 0 && (
              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                {upcomingEvents.length} Events
              </span>
            )}
          </h3>

          {upcomingEvents.length > 0 ? (
            <div className="space-y-4">
              {upcomingEvents.map((event, idx) => {
                const categoryColor = getCategoryColor(event.category);
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="bg-white rounded-lg shadow-md p-5 border-l-4 hover:shadow-lg transition-all flex items-center justify-between"
                    style={{ borderColor: categoryColor.bg }}
                  >
                    <div className="flex-1 flex items-center gap-3">
                      <span className="text-2xl">{event.emoji || "📌"}</span>
                      <div>
                        <h4 className="font-bold text-gray-900">{event.name}</h4>
                        <p className="text-sm text-gray-600">
                          ⏱️ {event.time} | 📂 {event.category}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      style={{
                        backgroundColor: categoryColor.bg,
                        color: categoryColor.text,
                      }}
                      className="px-4 py-2 rounded-lg text-sm font-semibold capitalize ml-4"
                    >
                      {event.category}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl text-center border-2 border-purple-200"
            >
              <p className="text-2xl mb-2">🔭</p>
              <p className="text-lg font-semibold text-gray-700">
                No upcoming events
              </p>
              <p className="text-gray-600 mt-2">Check back later!</p>
            </motion.div>
          )}
        </motion.div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 text-center"
        >
          <p className="text-gray-700 font-semibold mb-3">📊 Event Statistics</p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-green-600">
                {todayEvents.length}
              </p>
              <p className="text-sm text-gray-600">Today's Events</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">
                {upcomingEvents.length}
              </p>
              <p className="text-sm text-gray-600">Upcoming</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-600">{dayOfYear}</p>
              <p className="text-sm text-gray-600">Day of Year</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsDisplayLive;