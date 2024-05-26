import  { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GotoTop } from "./GotoTop";
const ScrollTopComponent = () => {
  const location = useLocation();
  useEffect(() => {
    return GotoTop()
  }, [location]);
};

export default ScrollTopComponent;
