import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="contact-info">
            <span>📞 +971 50 123 4567</span>
            <span>✉️ info@srvinteriors.ae</span>
            <span>📍 Dubai, UAE</span>
          </div>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="main-nav">
        <div className="nav-container">
          {/* Logo - Left */}
          <Link to="/" className="logo">
            SRV <span>Interiors</span>
          </Link>

          {/* Menu - Right */}
          <div className="nav-menu">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/about" className="nav-link">ABOUT</Link>
            <Link to="/services" className="nav-link">SERVICES</Link>
            <Link to="/gallery" className="nav-link">GALLERY</Link>
            <Link to="/contact" className="nav-link">CONTACT</Link>
            
            {/* CTA Button */}
            <Link to="/contact" className="cta-button">
              GET A QUOTE
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;