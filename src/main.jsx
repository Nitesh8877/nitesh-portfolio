import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UseContextHook from "./hook/useContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UseContextHook>
      <App />
      </UseContextHook>
    </BrowserRouter>
  </React.StrictMode>
);
