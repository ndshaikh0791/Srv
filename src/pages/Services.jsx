import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight, 
  faCheckCircle, 
  faLightbulb,
  faPaintRoller,
  faHammer,
  faRulerCombined,
  faHome,
  faCouch,
  faBed,
  faBath,
  faBuilding,
  faPhone,
  faCalendarAlt,
  faClipboardCheck,
  faHandshake,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);

  // Core Services Data
  const coreServices = [
    {
      id: 1,
      title: "Modular Kitchen",
      description: "Custom-designed modular kitchens that combine functionality with stunning aesthetics. From modern materials to classic designs, we create kitchens that inspire culinary creativity.",
      features: [
        "Granite Countertops",
        "Smart Storage",
        "Premium Cabinets",
        "Modern Appliances",
        "Pull-out Systems",
        "Waterproofing"
      ],
      image: "/assets/Elina_living/IMG_8861.PNG",
      icon: faHome
    },
    {
      id: 2,
      title: "Bedroom Interiors",
      description: "Transform your bedroom into a peaceful sanctuary with our elegant design solutions and premium furnishings. We create spaces that promote rest and relaxation.",
      features: [
        "Custom Wardrobes",
        "Lighting Design",
        "False Ceiling",
        "Storage Solutions",
        "Wall Paneling",
        "Color Schemes"
      ],
      image: "/assets/Mantra Monarch/IMG_7880.JPG",
      icon: faBed
    },
    {
      id: 3,
      title: "Living Room Design",
      description: "Create impressive living spaces that reflect your personality and provide comfort for family and guests. Our designs balance aesthetics with functionality.",
      features: [
        "TV Units",
        "Wall Treatments",
        "Sofa Sets",
        "Decorative Lighting",
        "False Ceiling",
        "Wall Paneling"
      ],
      image: "/assets/Mankhurd/IMG_9983.JPG",
      icon: faCouch
    },
    {
      id: 4,
      title: "Office Interiors",
      description: "Modern workspace design with ergonomic furniture and optimized layouts. Create productive environments that inspire creativity and collaboration.",
      features: [
        "Workstations",
        "Conference Rooms",
        "Reception Areas",
        "Cafeteria Design",
        "Lighting Solutions",
        "Acoustic Treatment"
      ],
      image: "/assets/Our_Office/IMG_6925.PNG",
      icon: faBuilding
    }
  ];

  // Additional Services
  const additionalServices = [
    {
      id: 5,
      title: "Bathroom Renovation",
      description: "Modern bathroom design with premium fixtures and finishes. Transform your bathroom into a luxurious spa-like retreat.",
      features: ["Premium Fittings", "Tiling Work", "Waterproofing", "Vanity Units"],
      icon: faBath,
      color: "#7A1F2B"
    },
    {
      id: 6,
      title: "Painting & Textures",
      description: "Professional painting services with designer textures and finishes. Enhance your walls with beautiful colors and effects.",
      features: ["Textured Walls", "Premium Paints", "Color Consultation", "Wallpaper"],
      icon: faPaintRoller,
      color: "#7A1F2B"
    },
    {
      id: 7,
      title: "Lighting Solutions",
      description: "Ambient and task lighting design for every space. Create the perfect mood with strategic lighting arrangements.",
      features: ["LED Lighting", "False Ceiling", "Dimmer Systems", "Spot Lights"],
      icon: faLightbulb,
      color: "#7A1F2B"
    },
    {
      id: 8,
      title: "Civil Work",
      description: "Complete civil construction and renovation services. Structural changes and building work with precision.",
      features: ["Structural Work", "Plumbing", "Electrical", "Finishing"],
      icon: faHammer,
      color: "#7A1F2B"
    }
  ];

  // Design Process Steps
  const designProcess = [
    {
      id: 1,
      title: "Consultation",
      description: "Free consultation to understand your requirements, preferences, and budget.",
      icon: faCalendarAlt
    },
    {
      id: 2,
      title: "Design",
      description: "3D interior designs and floor plans for your approval with realistic visualization.",
      icon: faRulerCombined
    },
    {
      id: 3,
      title: "Quotation",
      description: "Detailed quotation with transparent pricing and material specifications.",
      icon: faClipboardCheck
    },
    {
      id: 4,
      title: "Execution",
      description: "Professional execution with regular updates and strict quality checks.",
      icon: faHammer
    },
    {
      id: 5,
      title: "Handover",
      description: "Smooth handover with complete documentation and warranty details.",
      icon: faHandshake
    },
    {
      id: 6,
      title: "Support",
      description: "1 year warranty on workmanship and after-sales service support.",
      icon: faHeadset
    }
  ];

  // Service Categories
  const serviceCategories = [
    { id: 'all', label: 'All Services' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'renovation', label: 'Renovation' },
    { id: 'civil', label: 'Civil Work' }
  ];

  // Handle WhatsApp click
  const handleWhatsApp = () => {
    window.open('https://wa.me/918796932990', '_blank');
  };

  // Handle Get Quote
  const handleGetQuote = (serviceName) => {
    window.open(`https://wa.me/918796932990?text=Hi, I'm interested in ${serviceName} service. Can you provide a quote?`, '_blank');
  };

  return (
    <div className="services-page">
      {/* Hero Banner */}
      <section className="services-hero">
        <div className="hero-bg">
          <div className="hero-overlay"></div>
          <img 
            src="/assets/Mantra Monarch/IMG_7888.JPG" 
            alt="Services Banner" 
          />
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <span>What We Offer</span>
          </div>
          <h1 className="hero-title">
            Our <span className="hero-highlight">Services</span>
          </h1>
          <p className="hero-subtitle">
            End-to-End Interior & Civil Solutions for Your Dream Space
          </p>
          <div className="hero-buttons">
            <button 
              className="btn-primary"
              onClick={() => document.getElementById('core-services').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <button 
              className="btn-whatsapp"
              onClick={handleWhatsApp}
            >
              <FontAwesomeIcon icon={faWhatsapp} /> Get Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="core-services" id="core-services">
        <div className="container">
          <div className="section-header">
            <div className="hero-badge">
              Premium Solutions
            </div>
            <h2 className="section-title">
              Complete <span className="text-highlight1">Interior Solutions</span>
            </h2>
            <p className="section-subtitle1">
              We provide comprehensive interior design services that transform your space into a masterpiece
            </p>
          </div>

          <div className="services-tabs">
            <div className="tab-buttons">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  className={`tab-btn ${activeTab === category.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="core-services-grid">
            {coreServices.map((service, index) => (
              <div 
                key={service.id}
                className={`service-card ${index % 2 === 1 ? 'reverse' : ''}`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="service-image">
                  <img 
                    src={service.image} 
                    alt={service.title}
                  />
                  <div className="service-badge">
                    <FontAwesomeIcon icon={service.icon} />
                    <span>Premium Service</span>
                  </div>
                </div>
                
                <div className="service-content">
                  <div className="service-header">
                    <div className="service-icon">
                      <FontAwesomeIcon icon={service.icon} />
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  
                  <p className="service-description">
                    {service.description}
                  </p>
                  
                  <div className="service-features">
                    <h4>Key Features:</h4>
                    <div className="features-grid">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="feature-item">
                          <FontAwesomeIcon icon={faCheckCircle} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="service-actions">
                    <button 
                      className="btn-inquiry"
                      onClick={() => handleGetQuote(service.title)}
                    >
                      Get Inquiry <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <button 
                      className="btn-call"
                      onClick={() => window.location.href = 'tel:+918796932990'}
                    >
                      <FontAwesomeIcon icon={faPhone} /> Call Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="additional-services">
        <div className="container">
          <div className="section-header">
            <div className="hero-badge">
              More Services
            </div>
            <h2 className="section-title">
              Additional <span className="text-highlight1">Offerings</span>
            </h2>
            <p className="section-subtitle1">
              Comprehensive solutions for all your interior and construction needs
            </p>
          </div>
          
          <div className="additional-grid">
            {additionalServices.map((service) => (
              <div 
                key={service.id}
                className="additional-card"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="additional-icon" style={{ backgroundColor: service.color }}>
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3 className="additional-title">{service.title}</h3>
                <p className="additional-description">{service.description}</p>
                <div className="additional-features">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <button 
                  className="btn-learn-more"
                  onClick={() => handleGetQuote(service.title)}
                >
                  Learn More <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="design-process">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              Our Methodology
            </div>
            <h2 className="section-title">
              Our <span className="text-highlight1">Design Process</span>
            </h2>
            <p className="section-subtitle">
              A systematic approach to ensure perfection in every project
            </p>
          </div>
          
          <div className="process-timeline">
            {designProcess.map((step, index) => (
              <div key={step.id} className="process-step">
                <div className="step-number">{index + 1}</div>
                <div className="step-content">
                  <div className="step-icon">
                    <FontAwesomeIcon icon={step.icon} />
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                {index < designProcess.length - 1 && (
                  <div className="step-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-services">
        <div className="container">
          <div className="section-header">
            <div className="hero-badge">
              Why Choose Us
            </div>
            <h2 className="section-title">
              Why <span className="text-highlight1">SRV Interiors</span>
            </h2>
            <p className="section-subtitle">
              We stand out with our commitment to quality and customer satisfaction
            </p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
              <h3>15+ Years Experience</h3>
              <p>Decades of expertise in interior design and execution</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <h3>500+ Projects</h3>
              <p>Successfully completed projects across Pune, Mumbai & Navi Mumbai</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <h3>End-to-End Service</h3>
              <p>From design to execution and after-sales support</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <h3>1 Year Warranty</h3>
              <p>Comprehensive warranty on all our workmanship</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Start Your <span className="text">Project?</span>
            </h2>
            <p className="cta-subtitle">
              Contact us today for a free consultation and quote
            </p>
            <div className="cta-buttons">
              <button 
                className="btn-cta-primary"
                onClick={handleWhatsApp}
              >
                <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Quote
              </button>
              <button 
                className="btn-cta-secondary"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <button 
                className="btn-cta-outline"
                onClick={() => window.location.href = 'tel:+918796932990'}
              >
                <FontAwesomeIcon icon={faPhone} /> Call Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;