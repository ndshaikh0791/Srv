import React from "react";
import "../styles/About.css";
import { Home, Users, Calendar, Award } from "lucide-react";
import { Heart, ShieldCheck, Star, Trophy } from "lucide-react";


const About = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-overlay">
          <span className="about-badge">Our Story</span>

          <h1>
            About <span>SRV Interiors</span>
          </h1>

          <p className="about-subtitle">
            Since 2019, SRV Interiors has created timeless, functional spaces that blend elegant design with precision craftsmanship, reflecting each client’s unique lifestyle.
          </p>
        </div>
      </section>
{/* STATS BAR */}
<section className="about-stats">
  <div className="stats-container">

    <div className="stat-box">
      <div className="stat-icon-wrapper">
        <Home size={32} strokeWidth={1.5} />
      </div>
      <h3>100+</h3>
      <p>Projects Completed</p>
    </div>

    <div className="stat-box">
      <div className="stat-icon-wrapper">
        <Users size={32} strokeWidth={1.5} />
      </div>
      <h3>100+</h3>
      <p>Happy Clients</p>
    </div>

    <div className="stat-box">
      <div className="stat-icon-wrapper">
        <Calendar size={32} strokeWidth={1.5} />
      </div>
      <h3>5+</h3>
      <p>Years Experience</p>
    </div>

    <div className="stat-box">
      <div className="stat-icon-wrapper">
        <Award size={32} strokeWidth={1.5} />
      </div>
      <h3>3</h3>
      <p>Locations</p>
    </div>

  </div>
</section>

      {/* HERITAGE SECTION */}
      <section className="heritage-section">
        <div className="heritage-container">

          {/* LEFT CONTENT */}
          <div className="heritage-content">
            <span className="heritage-badge">Our Heritage</span>

            <h2 className="heritage-title">
              Vishwakarma Legacy, <span>Modern Vision</span>
            </h2>


            <p>
              We come from the revered Vishwakarma background, where craftsmanship
              and artistry have been our family's legacy for generations. Our
              ancestors were the master craftsmen who built magnificent
              structures, and we carry forward this proud tradition.
            </p>

            <p>
              Founded on 27th April 2019 by ID Sachin R Vishwakarma, SRV Interiors
              was born from a dream to blend traditional craftsmanship with
              contemporary design. Our mission is simple:{" "}
              <strong>You Dream, We Create.</strong>
            </p>

            <p>
              Today, with 100+ successfully completed projects and three
              locations across Maharashtra, we continue to transform houses into
              homes with the same dedication and passion that has been in our
              blood for generations.
            </p>

            {/* FOUNDER CARD */}
            <div className="founder-card">
              <img
                src="src/assets/Mantra Monarch/IMG_7871.JPG"
                alt="Founder"
              />
              <div>
                <h4>ID Sachin R Vishwakarma</h4>
                <span>Founder & Lead Interior Designer</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="heritage-image">
            <img
              src="src/assets/lodha_woods_kandivali/IMG_2446.jpg"
              alt="Founder"
            />

            <div className="experience-badge">
              <h3>5+</h3>
              <p>Years of Excellence</p>
            </div>
          </div>

        </div>
      </section>


      {/* CORE VALUES SECTION */}
      <section className="core-values-section">
        <div className="core-values-header">
          <span className="core-values-badge">What Drives Us</span>
          <h2 className="core-values-title">
            Our Core <span>Values</span>
          </h2>
        </div>

        <div className="core-values-grid">

          <div className="core-value-card">
            <div className="core-icon">
              <Heart size={22} />
            </div>
            <h4>Passion for Excellence</h4>
            <p>
              We pour our heart into every project, ensuring each design reflects our
              commitment to perfection.
            </p>
          </div>

          <div className="core-value-card">
            <div className="core-icon">
              <ShieldCheck size={22} />
            </div>
            <h4>Trust & Transparency</h4>
            <p>
              Honest pricing, clear timelines, and open communication throughout your
              journey with us.
            </p>
          </div>

          <div className="core-value-card">
            <div className="core-icon">
              <Star size={22} />
            </div>
            <h4>Quality Craftsmanship</h4>
            <p>
              Premium materials and skilled artisans ensure your interiors stand the
              test of time.
            </p>
          </div>

          <div className="core-value-card">
            <div className="core-icon">
              <Trophy size={22} />
            </div>
            <h4>Client Success</h4>
            <p>
              Your satisfaction is our ultimate goal. We don’t stop until you’re
              absolutely delighted.
            </p>
          </div>

        </div>
      </section>

      {/* MILESTONES & ACHIEVEMENTS */}
      <section className="timeline-section">
        <div className="timeline-header">
          <span className="timeline-badge">Our Journey</span>
          <h2 className="timeline-title">
            Milestones & <span>Achievements</span>
          </h2>
        </div>

        <div className="timeline">
          {/* ITEM 1 */}
          <div className="timeline-item left">
            <div className="timeline-content">
              <span className="year">2019</span>
              <h4>SRV Interiors Founded</h4>
              <p>
                Started our journey in Pune with a vision to transform spaces.
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="timeline-item right">
            <div className="timeline-content">
              <span className="year">2020</span>
              <h4>First 25 Projects</h4>
              <p>
                Completed our first 25 residential interior projects.
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="timeline-item left">
            <div className="timeline-content">
              <span className="year">2021</span>
              <h4>Expanded to Mumbai</h4>
              <p>
                Opened our Kandivali West, Mumbai branch.
              </p>
            </div>
          </div>

          {/* ITEM 4 */}
          <div className="timeline-item right">
            <div className="timeline-content">
              <span className="year">2022</span>
              <h4>50+ Happy Clients</h4>
              <p>
                Reached the milestone of 50 satisfied customers.
              </p>
            </div>
          </div>

          {/* ITEM 5 */}
          <div className="timeline-item left">
            <div className="timeline-content">
              <span className="year">2024</span>
              <h4>100+ Projects</h4>
              <p>
                Successfully completed over 100 interior design projects.
              </p>
            </div>
          </div>
        </div>
      </section>





    </div>
  );
};

export default About;
