import React, { useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { GotoTop } from "./utility/GotoTop";
import { useEffect } from "react";

const ScrollTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timeout;
    window.addEventListener("scroll", () => {
      if (window.scrollY) {
        clearTimeout(timeout);
        setShow(true);
      }
      timeout = setTimeout(() => {
        setShow(false);
      }, 3000);
    });
    return window.removeEventListener("scroll", () => {});
  }, []);

const Showbtn = show ? "right-3":"right-[-144px]"

  return (
    <button
      onClick={GotoTop}
      className={`${Showbtn} select-none fixed z-50 bg-baseColor text-white hover:bg-transparent hover:text-baseColor bottom-3 text-3xl outline-none p-1 border-2 border-baseColor rounded-full transition-all`}
    >
      <BsArrowUpShort />
    </button>
  );
};

export default ScrollTopButton;
