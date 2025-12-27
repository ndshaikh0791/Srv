import React, { useState, useEffect } from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faPhone, 
  faEnvelope, 
  faArrowRight, 
  faArrowUp,
  faUtensils,
  faBed,
  faCouch,
  faBuilding,
  faBath,
  faHammer
} from '@fortawesome/free-solid-svg-icons';
import { 
  faWhatsapp, 
  faInstagram, 
  faFacebook 
} from '@fortawesome/free-brands-svg-icons';

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
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  const services = [
    { name: 'Modular Kitchen', icon: faUtensils },
    { name: 'Bedroom Interiors', icon: faBed },
    { name: 'Living Room Design', icon: faCouch },
    { name: 'Office Interiors', icon: faBuilding },
    { name: 'Bathroom Renovation', icon: faBath },
    { name: 'Civil Work', icon: faHammer }
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">

            {/* Brand Section */}
            <div className="footer-brand">
             <a href="/" className="footer-logo">
  <span className="logo-text">
    <span className="logo-srv">SRV</span>
    <span className="logo-interiors"> Interiors</span>
  </span>
</a>
              <p className="footer-tagline">
                Crafting beautiful interiors from generations to generations. Your dream, our creation.
              </p>
              <p className="footer-description">
                Premium interior solutions with elegant design and flawless execution since 2019.
              </p>

              <div className="footer-social">
                <a href="https://wa.me/918796932990" className="social-icon" title="WhatsApp">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="#" className="social-icon" title="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="social-icon" title="Facebook">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="tel:+918796932990" className="social-icon" title="Call">
                  <FontAwesomeIcon icon={faPhone} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="/"><FontAwesomeIcon icon={faArrowRight} /> Home</a></li>
                <li><a href="/about"><FontAwesomeIcon icon={faArrowRight} /> About Us</a></li>
                <li><a href="/services"><FontAwesomeIcon icon={faArrowRight} /> Services</a></li>
                <li><a href="/gallery"><FontAwesomeIcon icon={faArrowRight} /> Gallery</a></li>
                <li><a href="/contact"><FontAwesomeIcon icon={faArrowRight} /> Contact</a></li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="footer-heading">Our Services</h4>
              <ul className="services-list">
                {services.map((service, index) => (
                  <li key={index}>
                    {/* <FontAwesomeIcon icon={service.icon} className="service-icon" /> */}
                    {service.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h4 className="footer-heading">Contact Info</h4>
              <ul className="contact-info-list">
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <div className="contact-details">
                    <a href="tel:+918796932990">+91 87969 32990</a>
                    <a href="tel:+919623037137">+91 96230 37137</a>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <div className="contact-details">
                    <a href="mailto:srvinteriorspune@gmail.com">srvinteriorspune@gmail.com</a>
                  </div>
                </li>
              </ul>

              <h4 className="footer-heading">Locations</h4>
              <p className="locations-text">
                Pune • Mumbai • Navi Mumbai
              </p>

              {/* <h4 className="footer-heading">Newsletter</h4>
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
              </form> */}
            </div>

          </div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            © 2019 - 2025 SRV Interiors. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button> */}
    </>
  );
};

export default Footer;