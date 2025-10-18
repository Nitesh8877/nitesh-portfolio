import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { useAuth } from "../context/authContext";
import { MdAdminPanelSettings } from "react-icons/md";
import { getCurrentDayColors } from "../components/utility/dailyColors";
import { motion } from "framer-motion";


// ==================== HEADER ====================
export const Header = () => {
  const [menubar, setMenubar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuth();
  const [colors, setColors] = useState(null);

  useEffect(() => {
    const dailyColors = getCurrentDayColors();
    setColors(dailyColors);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const LinkItem = [
    { link: "/", name: "Home" },
    { link: "/about", name: "About" },
    { link: "/contact", name: "Contact" },
  ];

  if (!colors) return null;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full shadow-lg transition-all duration-300 bg-white/95 backdrop-blur-md"
    >
      <div className="p-4 flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
            <div className="text-3xl">💻</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <h2
              style={{
                backgroundImage: colors.bg,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-2xl md:text-3xl font-bold"
            >
              NK Ram
            </h2>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-4">
          <ul className="md:flex gap-2 hidden items-center">
            {LinkItem.map((item, index) => {
              const isActive = item.link === pathname;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    className={`relative group py-2 px-3 rounded-lg transition-all duration-300 font-semibold text-gray-700 hover:text-gray-900 ${
                      isActive ? "bg-gray-100" : ""
                    }`}
                    to={item.link}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="underline"
                        className="absolute bottom-0 left-0 h-1 rounded-t bg-green-500 w-full"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}

            {isAuthenticated ? (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/admin"
                  className="flex items-center gap-2 py-2 px-4 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-all font-semibold shadow-lg"
                >
                  <MdAdminPanelSettings size={20} />
                  Admin
                </Link>
              </motion.div>
            ) : (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/login"
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors font-semibold shadow-lg"
                >
                  Login
                </Link>
              </motion.div>
            )}
          </ul>

          {/* Mobile Menu Icon */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-3xl select-none text-gray-700"
            onClick={() => setMenubar(!menubar)}
          >
            {menubar ? <GrFormClose /> : <HiMenuAlt3 />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: menubar ? "100%" : 0, opacity: menubar ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed inset-0 top-20 overflow-hidden z-40"
        onClick={() => setMenubar(false)}
      >
        <motion.ul
          style={{
            backgroundImage: colors.bg,
          }}
          className="flex flex-col gap-6 items-center justify-center h-full w-full py-8"
        >
          {LinkItem.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                className="text-xl font-bold text-white hover:scale-110 transition-transform"
                to={item.link}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}

          {isAuthenticated ? (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: LinkItem.length * 0.1 }}
            >
              <Link
                to="/admin"
                className="text-xl font-bold text-white hover:scale-110 transition-transform flex items-center gap-2"
              >
                <MdAdminPanelSettings size={24} />
                Admin
              </Link>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: LinkItem.length * 0.1 }}
            >
              <Link
                to="/login"
                className="text-xl font-bold text-white hover:scale-110 transition-transform"
              >
                Login
              </Link>
            </motion.div>
          )}
        </motion.ul>
      </motion.div>

      {/* Theme Info Bar - Fixed Contrast */}
      {colors.name && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ delay: 0.5 }}
          className="bg-white/90 backdrop-blur-sm px-4 py-3 text-center border-t-2 hidden md:block"
          style={{ borderColor: colors.font === "#ffffff" ? "#333" : colors.font }}
        >
          <p className="text-sm font-semibold text-gray-800">
            {colors.icon} <span className="font-bold">{colors.name}</span> | Day {Math.floor(Math.random() * 365) + 1} of 365
            {colors.event && <span className="ml-2 text-green-600 font-bold">{colors.event}</span>}
          </p>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
