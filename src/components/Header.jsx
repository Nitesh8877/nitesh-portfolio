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

// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { HiMenuAlt3, HiX } from "react-icons/hi";
// import { useAuth } from "../context/authContext";
// import { MdAdminPanelSettings, MdWork, MdPerson, MdContactMail } from "react-icons/md";
// import { HiHome } from "react-icons/hi";
// import { getCurrentDayColors } from "../components/utility/dailyColors";
// import { motion, AnimatePresence } from "framer-motion";

// // ==================== PERFECTED HEADER ====================
// export const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const { pathname } = useLocation();
//   const { isAuthenticated, user } = useAuth();
//   const [colors, setColors] = useState(null);

//   useEffect(() => {
//     const dailyColors = getCurrentDayColors();
//     setColors(dailyColors);

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setMobileMenuOpen(false);
//   }, [pathname]);

//   const navigationItems = [
//     { 
//       link: "/", 
//       name: "Home", 
//       icon: <HiHome className="text-lg" /> 
//     },
//     { 
//       link: "/about", 
//       name: "About", 
//       icon: <MdPerson className="text-lg" /> 
//     },
//     { 
//       link: "/projects", 
//       name: "Projects", 
//       icon: <MdWork className="text-lg" /> 
//     },
//     { 
//       link: "/contact", 
//       name: "Contact", 
//       icon: <MdContactMail className="text-lg" /> 
//     },
//   ];

//   if (!colors) return null;

//   return (
//     <motion.header
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className={`fixed top-0 z-50 w-full transition-all duration-500 ${
//         isScrolled 
//           ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/5 border-b border-gray-100/80" 
//           : "bg-white/80 backdrop-blur-lg shadow-lg shadow-black/5"
//       }`}
//     >
//       {/* Main Navigation */}
//       <nav className="relative">
//         <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//           <div className="flex items-center justify-between h-16 lg:h-20">
            
//             {/* Logo */}
//             <motion.div 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center gap-3"
//             >
//               <Link to="/" className="flex items-center gap-3 group">
//                 <motion.div
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.6 }}
//                   className="relative"
//                 >
//                   <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
//                     <span className="text-white font-bold text-lg">NK</span>
//                   </div>
//                   <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
//                 </motion.div>
//                 <div className="flex flex-col">
//                   <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
//                     NK Ram
//                   </h1>
//                   <p className="text-xs text-gray-500 font-medium">Full Stack Developer</p>
//                 </div>
//               </Link>
//             </motion.div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-1">
//               {navigationItems.map((item, index) => {
//                 const isActive = pathname === item.link;
//                 return (
//                   <motion.div
//                     key={item.name}
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <Link
//                       to={item.link}
//                       className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 group ${
//                         isActive 
//                           ? "text-blue-600 bg-blue-50/80" 
//                           : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80"
//                       }`}
//                     >
//                       {item.icon}
//                       {item.name}
                      
//                       {isActive && (
//                         <motion.div
//                           layoutId="activeIndicator"
//                           className="absolute inset-0 bg-blue-50/80 border border-blue-100 rounded-xl -z-10"
//                           transition={{ type: "spring", duration: 0.6 }}
//                         />
//                       )}
                      
//                       {/* Hover effect */}
//                       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     </Link>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* Desktop Auth Section */}
//             <div className="hidden lg:flex items-center gap-3">
//               {isAuthenticated ? (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="flex items-center gap-3"
//                 >
//                   <div className="text-right mr-2">
//                     <p className="text-sm font-semibold text-gray-800">{user?.name || "Admin"}</p>
//                     <p className="text-xs text-gray-500">Welcome back!</p>
//                   </div>
//                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Link
//                       to="/admin"
//                       className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300"
//                     >
//                       <MdAdminPanelSettings size={18} />
//                       Dashboard
//                     </Link>
//                   </motion.div>
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="flex items-center gap-3"
//                 >
//                   <Link
//                     to="/login"
//                     className="px-6 py-2.5 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
//                   >
//                     Login
//                   </Link>
//                 </motion.div>
//               )}
//             </div>

//             {/* Mobile Menu Button */}
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="lg:hidden p-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
//             >
//               {mobileMenuOpen ? (
//                 <HiX className="text-2xl text-gray-700" />
//               ) : (
//                 <HiMenuAlt3 className="text-2xl text-gray-700" />
//               )}
//             </motion.button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <>
//               {/* Backdrop */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
//               />
              
//               {/* Menu Panel */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95, x: "100%" }}
//                 animate={{ opacity: 1, scale: 1, x: 0 }}
//                 exit={{ opacity: 0, scale: 0.95, x: "100%" }}
//                 transition={{ type: "spring", duration: 0.5 }}
//                 className="lg:hidden fixed top-0 right-0 w-80 h-full bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/20 border-l border-gray-100 z-50"
//               >
//                 <div className="flex flex-col h-full">
//                   {/* Header */}
//                   <div className="p-6 border-b border-gray-100">
//                     <div className="flex items-center gap-3 mb-2">
//                       <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
//                         <span className="text-white font-bold text-lg">NK</span>
//                       </div>
//                       <div>
//                         <h2 className="text-lg font-bold text-gray-800">NK Ram</h2>
//                         <p className="text-sm text-gray-500">Full Stack Developer</p>
//                       </div>
//                     </div>
//                     {isAuthenticated && (
//                       <p className="text-sm text-green-600 font-medium">
//                         👋 Welcome back, {user?.name || "Admin"}!
//                       </p>
//                     )}
//                   </div>

//                   {/* Navigation Items */}
//                   <div className="flex-1 p-6">
//                     <nav className="space-y-2">
//                       {navigationItems.map((item, index) => {
//                         const isActive = pathname === item.link;
//                         return (
//                           <motion.div
//                             key={item.name}
//                             initial={{ opacity: 0, x: 20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: index * 0.1 }}
//                           >
//                             <Link
//                               to={item.link}
//                               className={`flex items-center gap-3 p-3 rounded-xl font-semibold transition-all duration-300 ${
//                                 isActive
//                                   ? "bg-blue-50 text-blue-600 border border-blue-100"
//                                   : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//                               }`}
//                             >
//                               <div className={`p-2 rounded-lg ${
//                                 isActive ? "bg-blue-100" : "bg-gray-100"
//                               }`}>
//                                 {item.icon}
//                               </div>
//                               {item.name}
//                             </Link>
//                           </motion.div>
//                         );
//                       })}
//                     </nav>
//                   </div>

//                   {/* Auth Section */}
//                   <div className="p-6 border-t border-gray-100">
//                     {isAuthenticated ? (
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.4 }}
//                         className="space-y-3"
//                       >
//                         <Link
//                           to="/admin"
//                           className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg"
//                         >
//                           <MdAdminPanelSettings size={18} />
//                           Admin Dashboard
//                         </Link>
//                       </motion.div>
//                     ) : (
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.4 }}
//                         className="space-y-3"
//                       >
//                         <Link
//                           to="/login"
//                           className="block w-full py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white text-center rounded-xl font-semibold shadow-lg"
//                         >
//                           Login
//                         </Link>
//                       </motion.div>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             </>
//           )}
//         </AnimatePresence>
//       </nav>

//       {/* Theme Info Bar */}
//       {colors.name && (
//         <motion.div
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: "auto" }}
//           transition={{ delay: 0.8 }}
//           className="bg-gradient-to-r from-blue-50 to-purple-50 border-y border-gray-200/60 hidden lg:block"
//         >
//           <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//             <div className="py-2 flex items-center justify-center gap-3 text-sm">
//               <span className="flex items-center gap-2 text-gray-700">
//                 <span className="text-lg">{colors.icon}</span>
//                 <span className="font-semibold text-gray-800">{colors.name}</span>
//                 <span className="text-gray-500">•</span>
//                 <span className="text-gray-600">Day {Math.floor(Math.random() * 365) + 1} of 365</span>
//               </span>
//               {colors.event && (
//                 <>
//                   <span className="text-gray-500">•</span>
//                   <span className="text-green-600 font-semibold">{colors.event}</span>
//                 </>
//               )}
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </motion.header>
//   );
// };

// export default Header;