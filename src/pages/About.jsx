import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About SRV Interiors</h1>
          <p>
            Transforming spaces into elegant, functional, and timeless interiors.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-container">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              SRV Interiors is a premium interior design company based in Dubai,
              delivering creative and customized interior solutions for
              residential and commercial spaces.
            </p>

            <h2>Our Mission</h2>
            <p>
              Our mission is to design spaces that reflect your personality,
              lifestyle, and aspirations while maintaining superior quality and
              attention to detail.
            </p>

            <h2>Why Choose Us</h2>
            <ul>
              <li>✔️ Experienced Interior Designers</li>
              <li>✔️ Premium Quality Materials</li>
              <li>✔️ Timely Project Delivery</li>
              <li>✔️ Transparent Pricing</li>
            </ul>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Interior Design"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="stats-container">
          <div className="stat-box">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-box">
            <h3>250+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-box">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;