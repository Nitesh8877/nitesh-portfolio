import  { useState } from "react";
import { Link,useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";

const Header = () => {
  const [menubar, setMenubar] = useState(false);
  const {pathname} = useLocation()
  
  const LinkItem = [
    { link: "/", name: "Home" },
    { link: "/about", name: "About" },
    { link: "/contact", name: "Contact" },
  ];
  const handleMenu = () => {
    setMenubar((prev) => !prev);
  };
  return (
    <header className=" border-baseColor border-b-2 sticky top-0 z-20 bg-slate-100 w-full">
      <div className="p-3 flex text-primary items-center justify-between max-w-7xl  mx-auto">
        <Link to="/">
          <h2 className="text-3xl">Nitesh Kumar Ram</h2>
        </Link>
        <ul className="md:flex gap-3 hidden">
          {LinkItem.map((item, index) => {
            const color = item.link === pathname;
            const textColor = color ? "text-baseColor" : ""
            return (
              <Link
                className={`${textColor} text-base md:text-xl relative`}
                key={index}
                to={item.link}
              >
                {item.name}
              </Link>
            );
          })}
        </ul>
        <Link
          className="md:hidden block text-4xl select-none"
          onClick={handleMenu}
        >
          {menubar ? <GrFormClose /> : <HiMenuAlt3 />}
        </Link>

        <div
          className={`${
            menubar ? "w-full" : "w-0"
          } overflow-hidden fixed  drop-shadow-md inset-0 md:hidden transition-all delay-50 z-10`}
          onClick={handleMenu}
        >
          <ul className="flex flex-col gap-4 items-center justify-center h-full bg-baseColor  w-3/4 ">
            {LinkItem.map((item, index) => {
              return (
                <Link
                  className="text-xl text-white md:text-2xl"
                  key={index}
                  to={item.link}
                >
                  {item.name}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
