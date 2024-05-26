import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import "react-lazy-load-image-component/src/effects/blur.css";
import ScrollTopComponent from "./components/utility/ScrollTopComponent";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollTopButton from "./components/ScrollTopButton";

function App() {
  return (
    <>
      <Toaster />
      <ScrollTopComponent />
      <ScrollTopButton />
      <Header />
      <section className="bg-slate-100 flex flex-col items-center justify-between ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
