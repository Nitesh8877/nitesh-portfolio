// src/App.jsx - Enhanced with Daily Colors
import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import "react-lazy-load-image-component/src/effects/blur.css";
import ScrollTopComponent from "./components/utility/ScrollTopComponent";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ScrollTopButton from "./components/ScrollTopButton";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "../src/context/authContext";
import { getCurrentDayColors, getDayOfYear } from "../src/components/utility/dailyColors";
import { motion } from "framer-motion";
import DataViewer from "./pages/DataViewer";

function App() {
  const [dailyColors, setDailyColors] = useState(null);
  const [dayOfYear, setDayOfYear] = useState(0);

  useEffect(() => {
    // Get current day's colors
    const colors = getCurrentDayColors();
    const day = getDayOfYear();
    setDailyColors(colors);
    setDayOfYear(day);

    // Update colors every midnight
    const timer = setInterval(() => {
      const newColors = getCurrentDayColors();
      const newDay = getDayOfYear();
      setDailyColors(newColors);
      setDayOfYear(newDay);
    }, 60000); // Check every minute

    return () => clearInterval(timer);
  }, []);

  if (!dailyColors) return null;

  return (
    <AuthProvider>
      <Toaster position="top-center" />
      <ScrollTopComponent />
      <ScrollTopButton />

      {/* Main Content with Daily Background */}
      <motion.div
        key={dayOfYear}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: dailyColors.bg,
          color: dailyColors.font,
        }}
        className="min-h-screen transition-all duration-1000"
      >
        <Header />

        {/* Daily Event Notification */}
        {dailyColors.event && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 bg-white/95 backdrop-blur-md shadow-2xl rounded-full px-6 py-3 hidden md:flex items-center gap-3"
          >
            <span className="text-2xl">{dailyColors.icon}</span>
            <span className="font-bold text-gray-900">{dailyColors.event}</span>
            <span className="text-sm text-gray-600">• Day {dayOfYear + 1}</span>
          </motion.div>
        )}

        <section className="bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm flex flex-col items-center justify-between min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
                path="/data-viewer"
                element={
                  <ProtectedRoute>
                    <DataViewer />
                  </ProtectedRoute>
                }
              />
              
          </Routes>
        </section>

        <Footer />
      </motion.div>
    </AuthProvider>
  );
}

export default App;