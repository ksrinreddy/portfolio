import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useGlobalContext } from "./context";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollTopBtn from "./components/ScrollTopBtn";

const App = () => {
  const { isSidebarOpen, scrollHeight } = useGlobalContext();

  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      {!isSidebarOpen && scrollHeight > 500 && <ScrollTopBtn />}
    </BrowserRouter>
  );
};

export default App;
