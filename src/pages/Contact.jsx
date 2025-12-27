import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! We'll get back to you within 24 hours.");
  };

  return (
    <div className="page-container">
      {/* Full Width Banner Image */}
      <div className="contact-banner">
        <div className="banner-overlay">
          <h1 className="banner-title">Contact Us</h1>
          <p className="banner-subtitle">Let's Discuss Your Dream Interior Project</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-grid">
          {/* Contact Form Section */}
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <p className="form-description">We'll get back to you within 24 hours.</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input 
                  type="text" 
                  id="fullName" 
                  placeholder="Enter your name"
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email"
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea 
                  id="message" 
                  placeholder="Tell us about your order requirements..."
                  rows="4"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="contact-info-section">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <div className="contact-icon-wrapper">📞</div>
              <div className="contact-details">
                <p className="contact-label">Phone</p>
                <p className="contact-detail">+91 96232 81727</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">✉️</div>
              <div className="contact-details">
                <p className="contact-label">Email</p>
                <p className="contact-detail">interiorservice@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">🌐</div>
              <div className="contact-details">
                <p className="contact-label">Website</p>
                <p className="contact-detail">www.interiordesign.com</p>
              </div>
            </div>

            <div className="business-hours">
              <h3>Business Hours</h3>
              <p><strong>Mon - Sat:</strong> 9:00 AM - 8:00 PM</p>
              <p><strong>Sun:</strong> By Appointment Only</p>
            </div>
          </div>
        </div>

        {/* Locations Section */}
        <div className="locations-section">
          <h2 className="locations-title">Our Locations</h2>
          <p className="locations-subtitle">Visit our offices across Maharashtra</p>

          <div className="locations-grid">
            <div className="location-card">
              <div className="location-icon">🏢</div>
              <h3>Pune Office</h3>
              <p className="location-address">Kothrud, Pune, Maharashtra</p>
              <div className="location-info">
                <span className="info-label">Phone:</span>
                <span className="info-value">+91 92232 92290</span>
              </div>
              <div className="location-info">
                <span className="info-label">Office ID:</span>
                <span className="info-value">645-PPA</span>
              </div>
              <button className="location-btn">Get Directions</button>
            </div>

            <div className="location-card">
              <div className="location-icon">🏢</div>
              <h3>Mumbai Office</h3>
              <p className="location-address">Kandivali West, Mumbai, Maharashtra</p>
              <div className="location-info">
                <span className="info-label">Phone:</span>
                <span className="info-value">+91 92232 92290</span>
              </div>
              <div className="location-info">
                <span className="info-label">Office ID:</span>
                <span className="info-value">645-PPA</span>
              </div>
              <button className="location-btn">Get Directions</button>
            </div>

            <div className="location-card">
              <div className="location-icon">🏢</div>
              <h3>Navi Mumbai Office</h3>
              <p className="location-address">Seawoods, Navi Mumbai, Maharashtra</p>
              <div className="location-info">
                <span className="info-label">Phone:</span>
                <span className="info-value">+91 92232 92273</span>
              </div>
              <div className="location-info">
                <span className="info-label">Office ID:</span>
                <span className="info-value">645-PPA</span>
              </div>
              <button className="location-btn">Get Directions</button>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="map-container">
            <iframe
              title="Our Offices Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5819711823816!2d73.81065307490341!3d18.5063814873549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf12458d7879%3A0x8c3914e9f9b05142!2sKothrud%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "15px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
