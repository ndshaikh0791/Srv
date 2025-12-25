import React from 'react';
import styles from './SRVHeader.module.css';

const SRVHeader = () => {
  return (
    <div className={styles.mainContainer}>
      {/* Top Announcement Bar */}
      <div className={styles.announcementBar}>
        Crafting Dreams Since 2019
      </div>

      {/* Navigation Header */}
      <header className={styles.mainHeader}>
        <div className={styles.headerContainer}>
          {/* Logo */}
          <div className={styles.logo}>
            SRV Interiors
          </div>

          {/* Navigation Menu */}
          <nav className={styles.navContainer}>
            <ul className={styles.navMenu}>
              <li><a href="#" className={styles.navLink}>Home</a></li>
              <li><a href="#" className={styles.navLink}>About</a></li>
              <li><a href="#" className={styles.navLink}>Services</a></li>
              <li><a href="#" className={styles.navLink}>Locations</a></li>
              <li><a href="#" className={styles.navLink}>Contact</a></li>
            </ul>
          </nav>

          {/* Call Now Button */}
          <button className={styles.callNowBtn}>
            Call Now
          </button>

          {/* Mobile Menu Button */}
          <button className={styles.mobileMenuBtn}>
            <svg className={styles.menuIcon} viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className={styles.heroSection}
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80)'
        }}
      >
        {/* Gradient Overlay */}
        <div className={styles.heroOverlay}></div>
        
        {/* Hero Content */}
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h2 className={styles.heroTitle}>
              Transform Your Space with <span className={styles.highlight}>SRV Interiors</span>
            </h2>
            <p className={styles.heroDescription}>
              From generations to generations, we bring the art of Vishwakarma craftsmanship to transform your house into a home with end-to-end interior solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className={styles.ctaButtons}>
              <button className={styles.whatsappBtn}>
                <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.298-.018-.458.13-.606.134-.134.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.297-.01-.47-.01-.173 0-.429.064-.652.319-.223.25-.862.862-.862 2.106 0 1.242.906 2.44 1.032 2.603.125.163 1.782 2.72 4.318 3.815.603.262 1.074.42 1.44.536.605.187 1.154.16 1.588.097.484-.071 1.488-.608 1.698-1.197.21-.59.21-1.095.147-1.197-.062-.102-.223-.163-.52-.313z"/>
                </svg>
                Chat on WhatsApp
              </button>
              <button className={styles.exploreBtn}>
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SRVHeader;