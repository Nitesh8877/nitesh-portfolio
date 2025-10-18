import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { useAuth } from "../context/authContext";
import { MdAdminPanelSettings } from "react-icons/md";
import { getCurrentDayColors } from "../components/utility/dailyColors";
import { motion } from "framer-motion";


// ==================== FOOTER ====================
export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [colors, setColors] = useState(null);

  useEffect(() => {
    const dailyColors = getCurrentDayColors();
    setColors(dailyColors);
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setTimeout(() => {
      setSubscribed(true);
      setEmail("");
      setLoading(false);
      setTimeout(() => setSubscribed(false), 3000);
    }, 1000);
  };

  if (!colors) return null;

  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white border-t-4 py-16"
      style={{ borderColor: colors.font === "#ffffff" ? "#333" : colors.font }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-12 p-8 rounded-2xl shadow-lg bg-gradient-to-r from-green-50 to-blue-50"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">📬 Stay Updated</h3>
          <p className="text-gray-700 mb-6">Get latest updates on projects and blog posts</p>
          <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-green-500 focus:outline-none text-gray-900"
              disabled={loading}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-bold disabled:opacity-50"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </motion.button>
          </form>
          {subscribed && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 font-semibold mt-3"
            >
              ✅ Successfully subscribed!
            </motion.p>
          )}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Nitesh Kumar Ram
            </h2>
            <p className="text-gray-700 font-medium">🚀 Full Stack Developer | 💻 Problem Solver | 🌐 Tech Enthusiast</p>
            <p className="text-gray-600 text-sm mt-4">📍 Chandigarh, Punjab | 🏢 Techabet Backend Developer</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-gray-700 hover:text-green-600 transition font-medium"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
  initial={{ x: -10, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ delay: 0.4 }}
>
  <h4 className="font-bold text-lg mb-4 text-gray-900">Services</h4>
  <ul className="space-y-2 text-sm text-gray-700">
    <li>⚛️ MERN Stack Development</li>
    <li>⛓️ Blockchain Development</li>
    <li>🐍 Python Development</li>
    <li>🧪 Unit Testing & QA</li>
    <li>✨ Web Development</li>
    <li>🎨 UI/UX Design</li>
    <li>📱 Responsive Design</li>
    <li>🚀 Performance Optimization</li>
    <li>🔧 API Integration</li>
  </ul>
</motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="font-bold text-lg mb-4 text-gray-900">Contact</h4>
            <div className="space-y-3 text-gray-700">
              <p>📧 kumarnitesh88441@gmail.com</p>
              <p>📱 +91-XXXX-XXXX</p>
              <p>📍 Chandigarh, Punjab, India</p>
              <div className="flex gap-3 mt-4">
                <a href="#" className="text-2xl hover:scale-110 transition">🔗</a>
                <a href="#" className="text-2xl hover:scale-110 transition">💻</a>
                <a href="#" className="text-2xl hover:scale-110 transition">🎓</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-gray-200 my-8"></div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center space-y-2"
        >
          <p className="text-lg font-semibold text-gray-900">
            &copy; {year} Nitesh Kumar Ram. All Rights Reserved
          </p>
          <p className="text-sm text-gray-600">
            Made with ❤️ using React, Tailwind CSS & Framer Motion
          </p>
          <p className="text-xs text-gray-500 pt-2">
            Today's Theme: <span className="font-bold text-gray-700">{colors.name}</span> {colors.icon}
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};


export default Footer;