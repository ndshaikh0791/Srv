// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Gallery";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* TOP NAVBAR (GLOBAL) */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* GLOBAL FOOTER */}
        <Footer />

        {/* GLOBAL WHATSAPP BUTTON */}
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
