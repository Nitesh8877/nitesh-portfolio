// src/App.jsx - Updated
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

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-center" />
      <ScrollTopComponent />
      <ScrollTopButton />
      <Header />
      <section className="bg-slate-100 flex flex-col items-center justify-between min-h-screen">
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
        </Routes>
      </section>
      <Footer />
    </AuthProvider>
  );
}

export default App;