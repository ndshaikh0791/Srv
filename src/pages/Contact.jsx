import React from "react";
import "../styles/Contact.css";
import { MapPin, Phone, Mail, Globe, MessageCircle, Clock, Send } from "lucide-react";

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
          <h1 className="banner-title">Contact <span className="hero-highlight">Us</span></h1>
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
              <div className="contact-icon-wrapper">
                <Phone size={20} />
              </div>
              <div className="contact-details">
                <p className="contact-label">Phone</p>
                <p className="contact-detail">+91 96232 81727</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <Mail size={20} />
              </div>
              <div className="contact-details">
                <p className="contact-label">Email</p>
                <p className="contact-detail">connectsrvinteriors@gmail.com</p>
              </div>
            </div>

            {/* <div className="contact-item">
              <div className="contact-icon-wrapper"><Globe size={20} /></div>
              <div className="contact-details">
                <p className="contact-label">Website</p>
                <p className="contact-detail">www.interiordesign.com</p>
              </div>
            </div> */}
            <div className="contact-item whatsapp-box">
              <div className="contact-icon-wrapper whatsapp-icon">
                < MessageCircle size={20} />
              </div>
              <div className="contact-details">
                <p className="contact-label">WhatsApp</p>
                <p className="contact-detail">8796932990</p>
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
        <section className="locations-section">
          <div className="section-header">
            <h2 className="locations-title">Our Locations</h2>
            <p className="locations-subtitle">Visit our offices across Maharashtra</p>
          </div>

          <div className="locations-grid">
            {/* Pune Card - Head Office */}
            <div className="location-card" data-aos="fade-up">
              <div className="card-header head-office">
                <div className="header-text">
                  <h3>Pune</h3>
                  <p>Narhe</p>
                </div>
                <span className="badge">Head Office</span>
              </div>
              <div className="card-body">
                <div className="info-row">
                  <div className="icon-box"><MapPin size={18} /></div>
                  <div>
                    <label>ADDRESS</label>
                    <p>Narhe, Pune, Maharashtra</p>
                  </div>
                </div>
                <div className="info-row">
                  <div className="icon-box"><Phone size={18} /></div>
                  <div>
                    <label>PHONE</label>
                    <p>+91 8796932990</p>
                  </div>
                </div>
                <div className="info-row">
                  <div className="icon-box"><Clock size={18} /></div>
                  <div>
                    <label>TIMING</label>
                    <p>Mon-Sat: 10AM-7PM</p>
                  </div>
                </div>
                <div className="card-actions">
                  <button className="whatsapp-btn"><MessageCircle size={16} /> WhatsApp</button>
                  <button className="directions-btn"><Send size={16} /> Directions</button>
                </div>
              </div>
            </div>

            {/* Mumbai Card */}
            <div className="location-card" data-aos="fade-up" data-aos-delay="100">
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
                    <p>Kandivali West, Mumbai, Maharashtra</p>
                  </div>
                </div>
                <div className="info-row">
                  <div className="icon-box"><Phone size={18} /></div>
                  <div>
                    <label>PHONE</label>
                    <p>+91 8796932990</p>
                  </div>
                </div>
                <div className="info-row">
                  <div className="icon-box"><Clock size={18} /></div>
                  <div>
                    <label>TIMING</label>
                    <p>Mon-Sat: 10AM-7PM</p>
                  </div>
                </div>
                <div className="card-actions">
                  <button className="whatsapp-btn"><MessageCircle size={16} /> WhatsApp</button>
                  <button className="directions-btn"><Send size={16} /> Directions</button>
                </div>
              </div>
            </div>

            {/* Navi Mumbai Card */}
            <div className="location-card" data-aos="fade-up" data-aos-delay="200">
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
                    <p>Sanpada, Navi Mumbai, Maharashtra</p>
                  </div>
                </div>
                <div className="info-row">
                  <div className="icon-box"><Phone size={18} /></div>
                  <div>
                    <label>PHONE</label>
                    <p>+91 9623037137</p>
                  </div>
                </div>
                <div className="info-row">
                  <div className="icon-box"><Clock size={18} /></div>
                  <div>
                    <label>TIMING</label>
                    <p>Mon-Sat: 10AM-7PM</p>
                  </div>
                </div>
                <div className="card-actions">
                  <button className="whatsapp-btn"><MessageCircle size={16} /> WhatsApp</button>
                  <button className="directions-btn"><Send size={16} /> Directions</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
