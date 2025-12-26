import React, { useState, useEffect } from 'react';
import '../styles/Footer.css';

// Icons (simple)
const FaHome = () => <i>🏠</i>;
const FaPhone = () => <i>📞</i>;
const FaEnvelope = () => <i>✉️</i>;
const FaArrowRight = () => <i>→</i>;
const FaArrowUp = () => <i>↑</i>;

// Social
const FaWhatsapp = () => <i>🟢</i>;
const FaInstagram = () => <i>📸</i>;
const FaFacebook = () => <i>📘</i>;
const FaCall = () => <i>📞</i>;

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">

            {/* Brand */}
            <div className="footer-brand">
              <a href="/" className="footer-logo">
                <FaHome /> SRV Interiors
              </a>
              <p className="footer-description">
                Premium interior solutions with elegant design and flawless execution.
              </p>

              <div className="footer-social">
                <a href="#" className="social-icon"><FaWhatsapp /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
                <a href="#" className="social-icon"><FaFacebook /></a>
                <a href="tel:+919876543210" className="social-icon"><FaCall /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="/"><FaArrowRight /> Home</a></li>
                <li><a href="/about"><FaArrowRight /> About</a></li>
                <li><a href="/services"><FaArrowRight /> Services</a></li>
                <li><a href="/projects"><FaArrowRight /> Projects</a></li>
                <li><a href="/contact"><FaArrowRight /> Contact</a></li>
              </ul>
            </div>

            {/* Contact + Newsletter */}
            <div>
              <h4 className="footer-heading">Contact Info</h4>
              <ul className="contact-info-list">
                <li>
                  <FaPhone />
                  <div>
                    <a href="tel:+919876543210">+91 98765 43210</a><br />
                    <a href="tel:+911234567890">+91 12345 67890</a>
                  </div>
                </li>
                <li>
                  <FaEnvelope />
                  <div>
                    <a href="mailto:info@srvinteriors.com">info@srvinteriors.com</a><br />
                    <a href="mailto:support@srvinteriors.com">support@srvinteriors.com</a>
                  </div>
                </li>
              </ul>

              <h4 className="footer-heading">Newsletter</h4>
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="newsletter-btn">Subscribe</button>
              </form>
            </div>

          </div>

          {/* Bottom */}
          <div className="footer-bottom">
            © 2025 SRV Interiors. All Rights Reserved.
          </div>
        </div>
      </footer>

      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default Footer;
