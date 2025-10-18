// src/components/Header.jsx - Updated
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { useAuth } from "../context/authContext";
import { MdAdminPanelSettings } from "react-icons/md";

const Header = () => {
  const [menubar, setMenubar] = useState(false);
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuth();
  
  const LinkItem = [
    { link: "/", name: "Home" },
    { link: "/about", name: "About" },
    { link: "/contact", name: "Contact" },
  ];

  const handleMenu = () => {
    setMenubar((prev) => !prev);
  };

  return (
    <header className="border-baseColor border-b-2 sticky top-0 z-20 bg-slate-100 w-full shadow-md">
      <div className="p-3 flex text-primary items-center justify-between max-w-7xl mx-auto">
        <Link to="/">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-baseColor to-green-600 bg-clip-text text-transparent">
            Nitesh Kumar Ram
          </h2>
        </Link>

        <div className="flex items-center gap-4">
          <ul className="md:flex gap-5 hidden items-center">
            {LinkItem.map((item, index) => {
              const color = item.link === pathname;
              const textColor = color ? "text-baseColor font-semibold" : "text-gray-700";
              return (
                <Link
                  className={`${textColor} text-lg hover:text-baseColor transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-baseColor after:transition-all`}
                  key={index}
                  to={item.link}
                >
                  {item.name}
                </Link>
              );
            })}
            
            {isAuthenticated ? (
              <Link
                to="/admin"
                className={`${pathname === '/admin' ? 'text-baseColor' : 'text-gray-700'} text-lg hover:text-baseColor transition-colors flex items-center gap-1`}
              >
                <MdAdminPanelSettings size={24} />
                Admin
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-baseColor text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                Login
              </Link>
            )}
          </ul>

          <Link
            className="md:hidden block text-4xl select-none"
            onClick={handleMenu}
          >
            {menubar ? <GrFormClose /> : <HiMenuAlt3 />}
          </Link>
        </div>

        <div
          className={`${
            menubar ? "w-full" : "w-0"
          } overflow-hidden fixed drop-shadow-md inset-0 md:hidden transition-all delay-50 z-10`}
          onClick={handleMenu}
        >
          <ul className="flex flex-col gap-6 items-center justify-center h-full bg-gradient-to-br from-baseColor to-green-600 w-3/4">
            {LinkItem.map((item, index) => {
              return (
                <Link
                  className="text-xl text-white font-medium hover:scale-110 transition-transform"
                  key={index}
                  to={item.link}
                >
                  {item.name}
                </Link>
              );
            })}
            
            {isAuthenticated ? (
              <Link
                to="/admin"
                className="text-xl text-white font-medium hover:scale-110 transition-transform flex items-center gap-2"
              >
                <MdAdminPanelSettings size={24} />
                Admin
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-xl text-white font-medium hover:scale-110 transition-transform"
              >
                Login
              </Link>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;