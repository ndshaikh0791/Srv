import React, { useState, useEffect } from "react";
import '../styles/Home.css'

// Import icons
const FaWhatsapp = () => <span className="icon">✆</span>;
const FaArrowRight = () => <span className="icon">→</span>;
const FaStar = () => <span className="icon">★</span>;
const FaCheckCircle = () => <span className="icon">✓</span>;
const FaTrophy = () => <span className="icon">🏆</span>;
const FaUsers = () => <span className="icon">👥</span>;
const FaClock = () => <span className="icon">🕒</span>;
const FaShieldAlt = () => <span className="icon">🛡️</span>;
const FaThumbsUp = () => <span className="icon">👍</span>;
const FaHome = () => <span className="icon">🏠</span>;
const FaCouch = () => <span className="icon">🛋️</span>;
const FaKitchenSet = () => <span className="icon">🔪</span>;
const FaBath = () => <span className="icon">🛁</span>;
const FaPaintRoller = () => <span className="icon">🎨</span>;
const FaRulerCombined = () => <span className="icon">📏</span>;
const FaBuilding = () => <span className="icon">🏢</span>;

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeService, setActiveService] = useState(null);

    useEffect(() => {
        setIsVisible(true);
        
        // Add scroll animation
        const handleScroll = () => {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToForm = () => {
        document.getElementById('inquiry-form').scrollIntoView({ behavior: 'smooth' });
    };

    const handleServiceClick = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    const services = [
        {
            title: "Residential Interiors",
            description: "Complete home makeovers with personalized designs",
            longDescription: "Transform your living space into a masterpiece. We specialize in creating beautiful, functional homes that reflect your personality and lifestyle. From living rooms to bedrooms, we design every corner with perfection.",
            icon: <FaHome />,
            image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Commercial Spaces",
            description: "Professional workspace designs",
            longDescription: "Create inspiring work environments that boost productivity and reflect your brand identity. We design offices, retail spaces, restaurants, and commercial establishments.",
            icon: <FaBuilding />,
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Modular Furniture",
            description: "Custom-designed furniture solutions",
            longDescription: "Get bespoke furniture that fits your space perfectly. Our modular designs are flexible, functional, and aesthetically pleasing, crafted with premium materials.",
            icon: <FaCouch />,
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Kitchen Design",
            description: "Modern & functional kitchen spaces",
            longDescription: "Design your dream kitchen with our expert team. We create functional, beautiful kitchens with smart storage solutions and premium finishes.",
            icon: <FaKitchenSet />,
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Bathroom Design",
            description: "Luxury bathroom solutions",
            longDescription: "Transform your bathroom into a spa-like retreat. We design luxurious bathrooms with attention to detail, quality fixtures, and elegant finishes.",
            icon: <FaBath />,
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Space Planning",
            description: "Optimized space utilization",
            longDescription: "Maximize your space potential with intelligent design solutions. We analyze your space and create layouts that enhance functionality and aesthetics.",
            icon: <FaRulerCombined />,
            image: "https://images.unsplash.com/photo-1503387769-00a112127ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    const testimonials = [
        { name: "Rahul Sharma", location: "Mumbai", rating: 5 },
        { name: "Priya Patel", location: "Delhi", rating: 5 },
        { name: "Amit Verma", location: "Bangalore", rating: 5 },
        { name: "Sneha Kapoor", location: "Chennai", rating: 5 },
        { name: "Vikram Singh", location: "Hyderabad", rating: 5 },
        { name: "Anjali Reddy", location: "Pune", rating: 5 }
    ];

    return (
        <div className="page-container">
            {/* Hero Banner */}
            <section className="hero-banner">
                <div className="hero-bg">
                    <div className="hero-overlay"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                        alt="Luxury Interior Design" 
                    />
                </div>
                
                <div className="hero-content fade-in">
                    <h1 className="hero-title">
                        Crafting <span className="hero-highlight">Dream</span> Spaces
                    </h1>
                    <p className="hero-subtitle">
                        Where luxury meets comfort, and dreams find their home. 
                        Transform your space with SRV Interiors' premium designs.
                    </p>
                    <div className="hero-buttons">
                        <button 
                            onClick={scrollToForm}
                            className="btn btn-primary"
                        >
                            Explore Services <FaArrowRight />
                        </button>
                        <button 
                            onClick={scrollToForm}
                            className="btn btn-secondary"
                        >
                            Get Free Consultation
                        </button>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <div className="scroll-circle">
                        <div className="scroll-dot"></div>
                    </div>
                </div>
            </section>

            {/* About SRV Interiors */}
            <section className="about-section">
                <div className="container">
                    <div className="about-grid fade-in">
                        <div className="about-image">
                            <div className="image-wrapper">
                                <img 
                                    src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    alt="Modern Interior Design" 
                                />
                                <div className="experience-badge">
                                    <span>15+ Years</span>
                                    <p>Experience</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="about-content">
                            <h2 className="section-title">
                                About <span className="text-highlight">SRV Interiors</span>
                            </h2>
                            <p className="section-description">
                                With over 15 years of excellence in interior design, SRV Interiors has been 
                                transforming spaces across India. Our passion lies in creating environments 
                                that reflect your personality while ensuring functionality and comfort.
                            </p>
                            <p className="section-description">
                                We blend traditional craftsmanship with modern aesthetics to deliver spaces 
                                that tell your unique story. Every project is a masterpiece crafted with 
                                precision and passion.
                            </p>
                            
                            <div className="stats-grid">
                                <div className="stat-item">
                                    <div className="stat-number">500+</div>
                                    <div className="stat-label">Projects</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">98%</div>
                                    <div className="stat-label">Satisfaction</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">50+</div>
                                    <div className="stat-label">Designers</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">15+</div>
                                    <div className="stat-label">Years</div>
                                </div>
                            </div>
                            
                            <button className="btn-about" onClick={scrollToForm}>
                                Discover Our Story <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose SRV Interiors */}
            <section className="why-choose-section">
                <div className="container">
                    <div className="section-header fade-in">
                        <h2 className="section-title">
                            Why Choose <span className="text-highlight">SRV Interiors</span>
                        </h2>
                        <p className="section-subtitle">
                            We stand out with our commitment to quality, innovation, and customer satisfaction.
                        </p>
                    </div>
                    
                    <div className="features-grid">
                        <div className="feature-card fade-in">
                            <div className="feature-icon">
                                <FaShieldAlt />
                            </div>
                            <h3 className="feature-title">Premium Quality</h3>
                            <p className="feature-description">Premium materials with 5-year warranty on all our work</p>
                        </div>
                        <div className="feature-card fade-in">
                            <div className="feature-icon">
                                <FaUsers />
                            </div>
                            <h3 className="feature-title">Expert Team</h3>
                            <p className="feature-description">Certified designers & skilled craftsmen</p>
                        </div>
                        <div className="feature-card fade-in">
                            <div className="feature-icon">
                                <FaClock />
                            </div>
                            <h3 className="feature-title">On-Time Delivery</h3>
                            <p className="feature-description">Strict timeline adherence guaranteed</p>
                        </div>
                        <div className="feature-card fade-in">
                            <div className="feature-icon">
                                <FaThumbsUp />
                            </div>
                            <h3 className="feature-title">End-to-End</h3>
                            <p className="feature-description">Complete service from concept to completion</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <section className="services-section" id="services">
                <div className="container">
                    <div className="section-header fade-in">
                        <h2 className="section-title">
                            Our <span className="text-highlight">Services</span>
                        </h2>
                        <p className="section-subtitle">
                            Comprehensive interior solutions for residential and commercial spaces.
                        </p>
                    </div>
                    
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div 
                                key={index}
                                className={`service-card fade-in ${activeService === index ? 'active' : ''}`}
                                onClick={() => handleServiceClick(index)}
                            >
                                <div className="service-image">
                                    <img 
                                        src={service.image} 
                                        alt={service.title}
                                    />
                                    <div className="service-overlay"></div>
                                    <div className="service-icon">
                                        {service.icon}
                                    </div>
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                    <div className={`service-expand ${activeService === index ? 'expanded' : ''}`}>
                                        <p className="service-long-description">{service.longDescription}</p>
                                        <button className="service-view-btn">
                                            View Details <FaArrowRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Work */}
            <section className="projects-section">
                <div className="container">
                    <div className="section-header fade-in">
                        <h2 className="section-title">
                            Our <span className="text-highlight">Work</span>
                        </h2>
                        <p className="section-subtitle">
                            Explore our portfolio of stunning interior transformations.
                        </p>
                    </div>
                    
                    <div className="projects-grid">
                        {[1, 2, 3, 4, 5, 6].map((project) => (
                            <div 
                                key={project}
                                className="project-card fade-in"
                            >
                                <div className="project-image">
                                    <img 
                                        src={`https://images.unsplash.com/photo-16155293283${project === 1 ? '31' : project === 2 ? '32' : project === 3 ? '33' : project === 4 ? '34' : project === 5 ? '35' : '36'}-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} 
                                        alt={`Project ${project}`}
                                    />
                                    <div className="project-overlay">
                                        <div className="project-content">
                                            <h3>Modern Luxury Villa</h3>
                                            <p>Complete interior transformation</p>
                                            <button className="view-project-btn">
                                                View Project <FaArrowRight />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-info">
                                    <h3>Project {project}</h3>
                                    <p>Residential Interior</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center fade-in">
                        <button className="view-gallery-btn">
                            View Complete Gallery <FaArrowRight />
                        </button>
                    </div>
                </div>
            </section>

            {/* Client Testimonials */}
            <section className="testimonials-section">
                <div className="container">
                    <div className="section-header fade-in">
                        <h2 className="section-title">
                            Client <span className="text-highlight">Testimonials</span>
                        </h2>
                        <p className="section-subtitle">
                            What our happy clients say about us
                        </p>
                    </div>
                    
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={index}
                                className="testimonial-card fade-in"
                            >
                                <div className="stars">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                                <p className="testimonial-text">
                                    "SRV Interiors transformed our home beyond expectations. Their attention 
                                    to detail and professionalism was outstanding! Highly recommended."
                                </p>
                                <div className="client-info">
                                    <div className="client-avatar">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div className="client-details">
                                        <h4>{testimonial.name}</h4>
                                        <p>{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Inquiry Form */}
            <section className="inquiry-section" id="inquiry-form">
                <div className="container">
                    <div className="form-container fade-in">
                        <div className="form-wrapper">
                            <div className="form-image">
                                <img 
                                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    alt="Design Consultation"
                                />
                            </div>
                            
                            <div className="form-content">
                                <h2 className="form-title">
                                    Get Your <span className="text-highlight">Free Consultation</span>
                                </h2>
                                <p className="form-description">
                                    Fill out the form and our design expert will contact you within 24 hours.
                                </p>
                                
                                <form className="form">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            placeholder="Full Name" 
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="email" 
                                            placeholder="Email Address" 
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="tel" 
                                            placeholder="Phone Number" 
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <select className="form-select">
                                            <option>Select Service</option>
                                            <option>Residential Interiors</option>
                                            <option>Commercial Interiors</option>
                                            <option>Modular Furniture</option>
                                            <option>Kitchen Design</option>
                                            <option>Bathroom Design</option>
                                            <option>Complete Renovation</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <textarea 
                                            placeholder="Your Requirements" 
                                            rows="4"
                                            className="form-textarea"
                                        ></textarea>
                                    </div>
                                    <button 
                                        type="submit"
                                        className="submit-btn"
                                    >
                                        Submit Request <FaArrowRight />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;