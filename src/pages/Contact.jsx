import React from "react";
import "../styles/Contact.css";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, Calendar } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918796932990', '_blank');
  };

  const handleDirectionsClick = (location) => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
    window.open(mapsUrl, '_blank');
  };

  const handleCallClick = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:connectsrvinteriors@gmail.com';
  };

  return (
    <div className="page-container">
      {/* Banner Section */}
      <div className="contact-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">Get in <span className="hero-highlight">Touch</span></h1>
          <p className="banner-subtitle">
            Let's transform your space into a masterpiece. Connect with us for premium interior solutions.
          </p>
        </div>
      </div>

      <div className="contact-content">
        {/* Contact Information - Full Width */}
        <section className="contact-info-fullwidth">
          <div className="section-header">
            <h2 className="locations-title">Contact Information</h2>
            <p className="locations-subtitle">Reach out to us through any of these channels</p>
          </div>

          <div className="contact-info-grid">
            {/* Phone */}
            <div 
              className="contact-info-card"
              onClick={() => handleCallClick('+918796932990')}
            >
              <div className="card-icon-wrapper phone-icon">
                <Phone size={28} />
              </div>
              <h3>Phone</h3>
              <p className="contact-detail-main">+91 87969 32990</p>
              <p className="contact-detail-secondary">+91 96230 37137</p>
              <p className="contact-description">Instant consultation available</p>
              <button className="contact-action-btn phone-btn">
                Call Now
              </button>
            </div>

            {/* Email */}
            <div 
              className="contact-info-card"
              onClick={handleEmailClick}
            >
              <div className="card-icon-wrapper email-icon">
                <Mail size={28} />
              </div>
              <h3>Email</h3>
              <p className="contact-detail-main">connectsrvinteriors@gmail.com</p>
              <p className="contact-description">Send detailed project queries</p>
              <button className="contact-action-btn email-btn">
                Send Email
              </button>
            </div>

            {/* WhatsApp */}
            <div 
              className="contact-info-card whatsapp-card"
              onClick={handleWhatsAppClick}
            >
              <div className="card-icon-wrapper whatsapp-icon">
                <MessageCircle size={28} />
              </div>
              <h3>WhatsApp</h3>
              <p className="contact-detail-main">+91 87969 32990</p>
              <p className="contact-description">Quick response within minutes</p>
              <button className="contact-action-btn whatsapp-action-btn">
                Message Now
              </button>
            </div>

            {/* Visit */}
            <div className="contact-info-card visit-card">
              <div className="card-icon-wrapper visit-icon">
                <Calendar size={28} />
              </div>
              <h3>Visit Office</h3>
              <p className="contact-detail-main">Pune • Mumbai • Navi Mumbai</p>
              <p className="contact-description">Schedule a showroom visit</p>
              <button 
                className="contact-action-btn visit-btn"
                onClick={handleWhatsAppClick}
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Business Hours */}
         <div className="business-hours-section">
  <div className="hours-content">
    <div className="hours-header">
      <div className="clock-icon-wrapper">
        <Clock size={32} />
      </div>
      <h3>Business Hours</h3>
      <p className="hours-subtitle">We're always here to serve you better</p>
    </div>
    
    <div className="hours-grid">
      <div className="hour-item">
        <div className="hour-icon">
          <div className="icon-circle">
            <Calendar size={20} />
          </div>
        </div>
        <div className="hour-details">
          <span className="day">Monday - Saturday</span>
          <span className="time">9:00 AM - 8:00 PM</span>
          <span className="hour-note">Regular consultation hours</span>
        </div>
      </div>
      
      <div className="hour-item">
        <div className="hour-icon">
          <div className="icon-circle">
            <Clock size={20} />
          </div>
        </div>
        <div className="hour-details">
          <span className="day">Sunday</span>
          <span className="time">By Appointment Only</span>
          <span className="hour-note">Prior booking required</span>
        </div>
      </div>
      
      <div className="hour-item emergency">
        <div className="hour-icon">
          <div className="icon-circle emergency-icon">
            <Phone size={20} />
          </div>
        </div>
        <div className="hour-details">
          <span className="day">Emergency Service</span>
          <span className="time">24/7 Available</span>
          <span className="hour-note">Call anytime for urgent projects</span>
        </div>
        <div className="emergency-badge">Hotline</div>
      </div>
    </div>
    
    <div className="hours-footer">
      <div className="footer-info">
        <div className="info-item">
          <div className="info-icon">
            <MessageCircle size={18} />
          </div>
          <span>WhatsApp Support: 10:00 AM - 10:00 PM</span>
        </div>
        <div className="info-item">
          <div className="info-icon">
            <Mail size={18} />
          </div>
          <span>Email Response: Within 24 hours</span>
        </div>
      </div>
      <button 
        className="hours-cta-btn"
        onClick={() => handleCallClick('+918796932990')}
      >
        <Phone size={18} />
        Call Emergency
      </button>
    </div>
  </div>
  
  {/* Decorative Elements */}
  <div className="hours-decoration">
    <div className="decoration-circle"></div>
    <div className="decoration-square"></div>
  </div>
</div>
        </section>

        {/* Contact Methods Section */}
        {/* <section className="contact-methods">
          <div className="section-header">
            <h2 className="locations-title">Contact Methods</h2>
            <p className="locations-subtitle">Choose your preferred way to connect with us</p>
          </div> */}

          {/* <div className="methods-grid">
            {/* Call Us */}
            {/* <div className="method-card">
              <div className="method-icon"> */} 
                {/* <Phone size={30} /> */}
              {/* </div>
              <h3>Call Us</h3>
              <p>Speak directly with our design experts for instant consultation and project queries.</p>
              <button 
                className="method-btn"
                onClick={() => handleCallClick('+918796932990')}
              >
                Call Now
              </button>
            </div> */}

            {/* WhatsApp */}
            {/* <div className="method-card">
              <div className="method-icon">
                <MessageCircle size={30} />
              </div>
              <h3>WhatsApp</h3>
              <p>Send us images of your space for quick design suggestions and instant quotes.</p>
              <button 
                className="method-btn"
                onClick={handleWhatsAppClick}
              >
                Message Now
              </button>
            </div> */}

            {/* Visit Office */}
            {/* <div className="method-card">
              <div className="method-icon">
                <Calendar size={30} />
              </div>
              <h3>Visit Office</h3>
              <p>Schedule a visit to our showroom to see materials, samples, and completed projects.</p>
              <button 
                className="method-btn"
                onClick={handleWhatsAppClick}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </section> */}

        {/* Locations Section */}
        <section className="locations-section">
          <div className="section-header">
            <h2 className="locations-title">Our Locations</h2>
            <p className="locations-subtitle">Visit our offices across Maharashtra</p>
          </div>

          <div className="locations-grid">
            {/* Pune - Head Office */}
            <div className="location-card">
              <div className="card-header head-office">
                <div className="header-text">
                  <h3>Pune</h3>
                  <p>Narhe (Head Office)</p>
                </div>
                <span className="badge">Main Office</span>
              </div>
              <div className="card-body">
                <div className="info-row">
                  <div className="icon-box"><MapPin size={18} /></div>
                  <div>
                    <label>ADDRESS</label>
                    <p>Narhe, Pune, Maharashtra 411041</p>
                  </div>
                </div>
                <div className="info-row">
                  <div className="icon-box"><Phone size={18} /></div>
                  <div>
                    <label>PHONE</label>
                    <p>+91 87969 32990</p>
                    <p>+91 96230 37137</p>
                  </div>
                </div>
                <div className="info-row">
                  <div className="icon-box"><Clock size={18} /></div>
                  <div>
                    <label>TIMING</label>
                    <p>Mon-Sat: 10:00 AM - 7:00 PM</p>
                    <p>Sun: By Appointment</p>
                  </div>
                </div>
                <div className="card-actions">
                  <button 
                    className="whatsapp-btn"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle size={16} /> WhatsApp
                  </button>
                  <button 
                    className="directions-btn"
                    onClick={() => handleDirectionsClick("Narhe Pune Maharashtra")}
                  >
                    <Send size={16} /> Directions
                  </button>
                </div>
              </div>
            </div>

            {/* Mumbai */}
            <div className="location-card">
              <div className="card-header standard">
                <div className="header-text">
                  <h3>Mumbai</h3>
                  <p>Kandivali West</p>
                </div>
              </div>
              <div className="card-body">
                <div className="info-row">
                  <div className="icon-box"><MapPin size={18} /></div>
                  <div>
                    <label>ADDRESS</label>
                    <p>Kandivali West, Mumbai, Maharashtra 400067</p>
                  </div>
                </div>
                <div className="info-row">
                  <div className="icon-box"><Phone size={18} /></div>
                  <div>
                    <label>PHONE</label>
                    <p>+91 87969 32990</p>
                  </div>
                </div>
                <div className="info-row">
                  <div className="icon-box"><Clock size={18} /></div>
                  <div>
                    <label>TIMING</label>
                    <p>Mon-Sat: 10:00 AM - 7:00 PM</p>
                    <p>By Appointment Only</p>
                  </div>
                </div>
                <div className="card-actions">
                  <button 
                    className="whatsapp-btn"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle size={16} /> WhatsApp
                  </button>
                  <button 
                    className="directions-btn"
                    onClick={() => handleDirectionsClick("Kandivali West Mumbai")}
                  >
                    <Send size={16} /> Directions
                  </button>
                </div>
              </div>
            </div>

            {/* Navi Mumbai */}
            <div className="location-card">
              <div className="card-header standard">
                <div className="header-text">
                  <h3>Navi Mumbai</h3>
                  <p>Sanpada</p>
                </div>
              </div>
              <div className="card-body">
                <div className="info-row">
                  <div className="icon-box"><MapPin size={18} /></div>
                  <div>
                    <label>ADDRESS</label>
                    <p>Sanpada, Navi Mumbai, Maharashtra 400705</p>
                  </div>
                </div>
                <div className="info-row">
                  <div className="icon-box"><Phone size={18} /></div>
                  <div>
                    <label>PHONE</label>
                    <p>+91 96230 37137</p>
                  </div>
                </div>
                <div className="info-row">
                  <div className="icon-box"><Clock size={18} /></div>
                  <div>
                    <label>TIMING</label>
                    <p>Mon-Sat: 10:00 AM - 7:00 PM</p>
                    <p>Consultation by Appointment</p>
                  </div>
                </div>
                <div className="card-actions">
                  <button 
                    className="whatsapp-btn"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle size={16} /> WhatsApp
                  </button>
                  <button 
                    className="directions-btn"
                    onClick={() => handleDirectionsClick("Sanpada Navi Mumbai")}
                  >
                    <Send size={16} /> Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.9911249999997!2d73.8262!3d18.4798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI4JzQ3LjIiTiA3M8KwNDknMzQuMyJF!5e0!3m2!1sen!2sin!4v1690123456789!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SRV Interiors Location"
            ></iframe>
            <div className="map-overlay">
              <div className="map-info">
                <h3>Visit Our Showroom</h3>
                <p>Experience our designs firsthand at our Pune showroom</p>
                <a 
                  href="https://maps.app.goo.gl/qhxBsMzJ36Pqiwwj9?g_st=ipc" 
                  className="map-btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="contact-cta">
          <div className="cta-content">
            <h2>Ready to Transform Your Space?</h2>
            <p>Contact us today for a free consultation and design estimate.</p>
            <div className="cta-buttons">
              <button 
                className="cta-btn primary"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle size={20} /> WhatsApp Consultation
              </button>
              <button 
                className="cta-btn secondary"
                onClick={() => handleCallClick('+918796932990')}
              >
                <Phone size={20} /> Call Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;