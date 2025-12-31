// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import { Phone } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body scroll
    if (!isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+918796932990'; // Updated with your number
  };

  // Close menu when clicking outside or changing route
  useEffect(() => {
    const closeMenu = () => {
      setIsMenuOpen(false);
      document.body.classList.remove('menu-open');
    };

    // Close menu on route change
    closeMenu();

    // Close menu on escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeMenu();
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [location]);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo Section - Updated to match footer */}
          <div className="nav-logo">
            <Link to="/" className="logo-link">
              {/* <FontAwesomeIcon icon={faHome} className="logo-icon" /> */}
              <span className="logo-text">
                <span className="logo-srv">SRV</span>
                <span className="logo-interiors"> INTERIORS</span>
              </span>
            </Link>
          </div>

          {/* Call Now Button - Mobile (outside menu) */}
          <button className="call-now-btn mobile-call" onClick={handleCallNow} aria-label="Call Now">
            <Phone size={18} />
          </button>

          {/* Navigation Menu */}
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${
                      location.pathname === item.path ? 'active' : ''
                    }`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      document.body.classList.remove('menu-open');
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Call Now Button - Desktop */}
            <button className="call-now-btn desktop-only" onClick={handleCallNow}>
              <Phone size={18} />
              <span>Call Now</span>
            </button>
          </div>

          {/* Hamburger Menu */}
          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      <div 
        className={`nav-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={() => {
          setIsMenuOpen(false);
          document.body.classList.remove('menu-open');
        }}
      />
    </>
  );
};

export default Navbar;