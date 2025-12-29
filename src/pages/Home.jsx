import React, { useState, useEffect } from "react";
import '../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faArrowRight, 
  faStar,
  faCheckCircle,
  faTrophy,
  faUsers,
  faClock,
  faShieldAlt,
  faThumbsUp,
  faHome,
  faCouch,
  faKitchenSet,
  faBath,
  faPaintRoller,
  faRulerCombined,
  faBuilding,
  faMapMarkerAlt,
  faCalendarAlt,
  faRocket,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { 
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';


const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeService, setActiveService] = useState(null);
    const [activeProject, setActiveProject] = useState(null);

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

    const handleWhatsApp = () => {
        window.open('https://wa.me/918796932990', '_blank');
    };

    const handleServiceClick = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    const handleProjectHover = (index) => {
        setActiveProject(index);
    };

    const handleProjectLeave = () => {
        setActiveProject(null);
    };

    const services = [
        {
            title: "Modular Kitchen",
            description: "Custom-designed modular kitchens",
            longDescription: "We create stunning modular kitchens that combine functionality with aesthetics. From smart storage solutions to premium finishes, we design kitchens that make cooking a pleasure.",
            icon: faKitchenSet,
            features: ["Custom Cabinetry", "Smart Storage", "Premium Finishes", "Efficient Layout"]
        },
        {
            title: "Bedroom Interiors",
            description: "Personalized bedroom designs",
            longDescription: "Transform your bedroom into a peaceful retreat. We design bedrooms that reflect your personality with custom wardrobes, elegant lighting, and comfortable layouts.",
            icon: faHome,
            features: ["Custom Wardrobes", "Lighting Design", "Space Optimization", "Color Schemes"]
        },
        {
            title: "Living Room Design",
            description: "Elegant living spaces",
            longDescription: "Create the perfect space for relaxation and entertainment. Our living room designs blend comfort with style, featuring custom furniture and artistic elements.",
            icon: faCouch,
            features: ["Custom Furniture", "TV Units", "False Ceiling", "Lighting"]
        },
        {
            title: "Office Interiors",
            description: "Professional workspace design",
            longDescription: "Boost productivity with thoughtfully designed office spaces. We create inspiring work environments that reflect your brand identity and enhance collaboration.",
            icon: faBuilding,
            features: ["Workstations", "Conference Rooms", "Reception Areas", "Cafeteria"]
        },
        {
            title: "Bathroom Renovation",
            description: "Luxury bathroom makeovers",
            longDescription: "Turn your bathroom into a spa-like sanctuary. We specialize in luxury bathroom renovations with premium fittings, elegant tiles, and smart storage.",
            icon: faBath,
            features: ["Premium Fittings", "Waterproofing", "Tiling Work", "Storage Solutions"]
        },
        {
            title: "Civil Work",
            description: "Complete construction solutions",
            longDescription: "From structural changes to complete renovations, we handle all civil work with precision and quality. Our team ensures every detail meets the highest standards.",
            icon: faRulerCombined,
            features: ["Structural Work", "Plumbing", "Electrical", "Finishing"]
        }
    ];

    const projects = [
        {
            id: 1,
            title: "Modern Villa Interiors",
            type: "Residential",
            location: "Pune",
            area: "2500 sq.ft",
            image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Corporate Office",
            type: "Commercial",
            location: "Mumbai",
            area: "5000 sq.ft",
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Luxury Apartment",
            type: "Residential",
            location: "Navi Mumbai",
            area: "1800 sq.ft",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Restaurant Design",
            type: "Commercial",
            location: "Pune",
            area: "3000 sq.ft",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            title: "Premium Villa",
            type: "Residential",
            location: "Mumbai",
            area: "3500 sq.ft",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            title: "Showroom Design",
            type: "Commercial",
            location: "Navi Mumbai",
            area: "4000 sq.ft",
            image: "https://images.unsplash.com/photo-1503387769-00a112127ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    const testimonials = [
        { 
            name: "Rahul Sharma", 
            location: "Pune", 
            rating: 5,
            comment: "SRV Interiors transformed our 3BHK apartment beautifully. Their attention to detail and professionalism was outstanding!"
        },
        { 
            name: "Priya Patel", 
            location: "Mumbai", 
            rating: 5,
            comment: "Our modular kitchen turned out exactly as we imagined. The team was very responsive and delivered on time."
        },
        { 
            name: "Amit Verma", 
            location: "Navi Mumbai", 
            rating: 5,
            comment: "Excellent work on our office interiors. The design boosted employee productivity and impressed our clients."
        },
        { 
            name: "Sneha Kapoor", 
            location: "Pune", 
            rating: 5,
            comment: "The bedroom interiors are stunning! SRV Interiors understood our requirements perfectly."
        },
        { 
            name: "Vikram Singh", 
            location: "Mumbai", 
            rating: 5,
            comment: "Complete home renovation done flawlessly. Quality materials and skilled workers."
        },
        { 
            name: "Anjali Reddy", 
            location: "Navi Mumbai", 
            rating: 5,
            comment: "Best interior designers in Pune! They completed our project within budget and timeline."
        }
    ];

    // const stats = [
        // { number: "500+", label: "Projects Completed", icon: faTrophy },
        // { number: "98%", label: "Client Satisfaction", icon: faHeart },
        // { number: "15+", label: "Years Experience", icon: faCalendarAlt },
        // { number: "50+", label: "Expert Designers", icon: faUsers }
    // ];

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
                    <div className="hero-badge">
                        <span>Since 2019</span>
                    </div>
                    <h3 className="hero-title">
                        Transform Your Space with <span className="hero-highlight">SRV Interiors</span>
                    </h3>
                    <p className="hero-subtitle">
                      From generations to generations, we bring the art of Vishwakarma craftsmanship to transform your house into a home with end-to-end interior solutions.
                    </p>
                    <div className="hero-buttons">
                        <button 
                            onClick={scrollToForm}
                            className="btn btn-primary"
                        >
                            Get Free Quote <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                        <button 
                            onClick={handleWhatsApp}
                            className="btn btn-whatsapp" 
                        >
                            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Now
                        </button>
                    </div>
                </div>
            </section>

            {/* About SRV Interiors */}
            <section className="about-section">
                <div className="container">
                    <div className="about-grid fade-in">
                        <div className="about-content">
                            <div className="section-badge">
                                About Us
                            </div>
                            <h2 className="section-title">
                                Crafting Beautiful Interiors from 
                                <span className="text-highlight"> Generations to Generations</span>
                            </h2>
                            <p className="section-description">
                                At SRV Interiors, we blend traditional craftsmanship with modern aesthetics 
                                to create spaces that tell your unique story. Established in 2019, we have 
                                been transforming homes and offices across Pune, Mumbai, and Navi Mumbai.
                            </p>
                            
                            <div className="about-points">
                                <div className="point">
                                    <FontAwesomeIcon icon={faCheckCircle} className="point-icon" />
                                    <div>
                                        <h4>Your Dream, Our Creation</h4>
                                        <p>We bring your vision to life with precision and creativity</p>
                                    </div>
                                </div>
                                <div className="point">
                                    <FontAwesomeIcon icon={faCheckCircle} className="point-icon" />
                                    <div>
                                        <h4>Premium Quality Materials</h4>
                                        <p>Using only the best materials for lasting durability</p>
                                    </div>
                                </div>
                                <div className="point">
                                    <FontAwesomeIcon icon={faCheckCircle} className="point-icon" />
                                    <div>
                                        <h4>Timely Project Delivery</h4>
                                        <p>We respect your time with strict deadline adherence</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="about-buttons">
                                <button className="btn-about" onClick={scrollToForm}>
                                    <FontAwesomeIcon icon={faArrowRight} /> Get Free Consultation
                                </button>
                                <button className="btn-outline" onClick={handleWhatsApp}>
                                    <FontAwesomeIcon icon={faWhatsapp} /> Chat on WhatsApp
                                </button>
                            </div>
                        </div>
                        
                        <div className="about-image">
                            <div className="image-wrapper">
                                <img 
                                    src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    alt="Modern Interior Design" 
                                />
                                <div className="experience-badge">
                                    <span>15+</span>
                                    <p>Years Excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <section className="services-section" id="services">
                <div className="container">
                    <div className="section-header fade-in">
                        <div className="section-badge">
                            What We Do
                        </div>
                        <h2 className="section-title">
                            Our <span className="text-highlight">Premium Services</span>
                        </h2>
                        <p className="section-subtitle">
                            Comprehensive interior solutions for residential and commercial spaces
                        </p>
                    </div>
                    
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div 
                                key={index}
                                className={`service-card fade-in ${activeService === index ? 'active' : ''}`}
                                onClick={() => handleServiceClick(index)}
                                onMouseEnter={() => handleServiceClick(index)}
                                onMouseLeave={() => setActiveService(null)}
                            >
                                <div className="service-header">
                                    <div className="service-icon">
                                        <FontAwesomeIcon icon={service.icon} />
                                    </div>
                                    <h3 className="service-title">{service.title}</h3>
                                </div>
                                <p className="service-description">{service.description}</p>
                                
                                <div className={`service-details ${activeService === index ? 'expanded' : ''}`}>
                                    <p className="service-long-description">{service.longDescription}</p>
                                    
                                    <div className="service-features">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="feature-tag">
                                                <FontAwesomeIcon icon={faCheckCircle} /> {feature}
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <button className="service-action-btn">
                                        Get Quote <FontAwesomeIcon icon={faArrowRight} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center fade-in">
                        <button className="btn-view-all" onClick={scrollToForm}>
                            View All Services <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose-section">
                <div className="container">
                    <div className="section-header fade-in">
                        <div className="section-badge">
                            Why Choose Us
                        </div>
                        <h2 className="section-title">
                            Why <span className="text-highlight">SRV Interiors</span> Stands Out
                        </h2>
                        <p className="section-subtitle">
                            We are committed to delivering excellence in every project
                        </p>
                    </div>
                    
                    <div className="features-grid">
                        <div className="feature-card fade-in">
                            <div className="feature-icon">
                                <FontAwesomeIcon icon={faShieldAlt} />
                            </div>
                            <h3 className="feature-title">Premium Quality</h3>
                            <p className="feature-description">Premium materials with 5-year warranty on all work</p>
                        </div>
                        <div className="feature-card fade-in">
                            <div className="feature-icon">
                                <FontAwesomeIcon icon={faUsers} />
                            </div>
                            <h3 className="feature-title">Expert Team</h3>
                            <p className="feature-description">Certified designers & skilled craftsmen</p>
                        </div>
                        <div className="feature-card fade-in">
                            <div className="feature-icon">
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <h3 className="feature-title">On-Time Delivery</h3>
                            <p className="feature-description">Strict timeline adherence guaranteed</p>
                        </div>
                        <div className="feature-card fade-in">
                            <div className="feature-icon">
                                <FontAwesomeIcon icon={faRocket} />
                            </div>
                            <h3 className="feature-title">End-to-End Service</h3>
                            <p className="feature-description">Complete service from concept to completion</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Projects */}
            <section className="projects-section">
                <div className="container">
                    <div className="section-header fade-in">
                        <div className="section-badge">
                            Our Portfolio
                        </div>
                        <h2 className="section-title">
                            Featured <span className="text-highlight">Projects</span>
                        </h2>
                        <p className="section-subtitle">
                            Explore our portfolio of stunning interior transformations
                        </p>
                    </div>
                    
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div 
                                key={project.id}
                                className={`project-card fade-in ${activeProject === index ? 'active' : ''}`}
                                onMouseEnter={() => handleProjectHover(index)}
                                onMouseLeave={handleProjectLeave}
                            >
                                <div className="project-image">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                    />
                                    <div className="project-overlay">
                                        <div className="project-content">
                                            <h3>{project.title}</h3>
                                            <div className="project-meta">
                                                <span><FontAwesomeIcon icon={faMapMarkerAlt} /> {project.location}</span>
                                                <span>{project.area}</span>
                                            </div>
                                            <button className="view-project-btn">
                                                View Project <FontAwesomeIcon icon={faArrowRight} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-info">
                                    <span className="project-type">{project.type}</span>
                                    <h3>{project.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center fade-in">
                        <button className="btn-view-all" onClick={() => window.location.href = '/projects'}>
                            View All Projects <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Client Testimonials */}
            <section className="testimonials-section">
                <div className="container">
                    <div className="section-header fade-in">
                        <div className="section-badge">
                            Testimonials
                        </div>
                        <h2 className="section-title">
                            What Our <span className="text-highlight">Clients Say</span>
                        </h2>
                        <p className="section-subtitle">
                            Hear from our satisfied customers across Pune, Mumbai & Navi Mumbai
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
                                        <FontAwesomeIcon key={i} icon={faStar} />
                                    ))}
                                </div>
                                <p className="testimonial-text">
                                    "{testimonial.comment}"
                                </p>
                                <div className="client-info">
                                    <div className="client-avatar">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div className="client-details">
                                        <h4>{testimonial.name}</h4>
                                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content fade-in">
                        <h2 className="cta-title">
                            Ready to Transform Your Space?
                        </h2>
                        <p className="cta-subtitle">
                            Get a free consultation with our design experts today
                        </p>
                        <div className="cta-buttons">
                            <button className="btn-cta" onClick={scrollToForm}>
                                <FontAwesomeIcon icon={faPhone} /> Call Now
                            </button>
                            <button className="btn-cta-outline" onClick={handleWhatsApp}>
                                <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inquiry Form */}
            <section className="inquiry-section" id="inquiry-form">
                <div className="container">
                    <div className="form-container fade-in">
                        <div className="form-header">
                            <div className="section-badge">
                                Get Free Quote
                            </div>
                            <h2 className="form-title">
                                Get Your <span className="text-highlight">Free Consultation</span>
                            </h2>
                            <p className="form-description">
                                Fill out the form and our design expert will contact you within 24 hours
                            </p>
                        </div>
                        
                        <form className="form">
                            <div className="form-grid">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        placeholder="Full Name" 
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="email" 
                                        placeholder="Email Address" 
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="tel" 
                                        placeholder="Phone Number" 
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <select className="form-select" required>
                                        <option value="">Select Service</option>
                                        <option>Modular Kitchen</option>
                                        <option>Bedroom Interiors</option>
                                        <option>Living Room Design</option>
                                        <option>Office Interiors</option>
                                        <option>Bathroom Renovation</option>
                                        <option>Civil Work</option>
                                        <option>Complete Home Makeover</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <textarea 
                                    placeholder="Your Requirements & Budget" 
                                    rows="4"
                                    className="form-textarea"
                                    required
                                ></textarea>
                            </div>
                            
                            <div className="form-footer">
                                <button 
                                    type="submit"
                                    className="submit-btn"
                                >
                                    Submit Request <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                                <p className="form-note">
                                    By submitting, you agree to our Terms & Privacy Policy
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;