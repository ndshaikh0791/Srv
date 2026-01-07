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
    faHeart,
    faEnvelope,
    faChevronDown,
    faChevronUp
} from '@fortawesome/free-solid-svg-icons';
import {
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
    const [expandedTestimonial, setExpandedTestimonial] = useState(null);
    const [showAllTestimonials, setShowAllTestimonials] = useState(false);

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
        // Changed: Scroll to top instead of form since form is removed
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleWhatsApp = () => {
        window.open('https://wa.me/918796932990', '_blank');
    };

    const handleCallNow = () => {
        // FIXED: Make Call Now button active
        window.location.href = 'tel:+918796932990';
    };

    const handleProjectHover = (index) => {
        setActiveProject(index);
    };

    const handleProjectLeave = () => {
        setActiveProject(null);
    };

    const toggleTestimonial = (index) => {
        setExpandedTestimonial(expandedTestimonial === index ? null : index);
    };

    const toggleShowAllTestimonials = () => {
        setShowAllTestimonials(!showAllTestimonials);
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
            image: "/assets/Mantra Monarch/IMG_7877.JPG"
        },
        {
            id: 2,
            title: "Corporate Office",
            type: "Commercial",
            location: "Mumbai",
            area: "5000 sq.ft",
            image: "/assets/Our_Office/IMG_6927.PNG"
        },
        {
            id: 3,
            title: "Luxury Apartment",
            type: "Residential",
            location: "Navi Mumbai",
            area: "1800 sq.ft",
            image: "/assets/Mankhurd/IMG_9985.JPG"
        },
        {
            id: 4,
            title: "Restaurant Design",
            type: "Commercial",
            location: "Pune",
            area: "3000 sq.ft",
            image: "/assets/Majestic_Signature_Towers/IMG_2416.jpg"
        },
        {
            id: 5,
            title: "Premium Villa",
            type: "Residential",
            location: "Mumbai",
            area: "3500 sq.ft",
            image: "/assets/lodha_woods_kandivali/IMG_9491.jpg"
        },
        {
            id: 6,
            title: "Showroom Design",
            type: "Commercial",
            location: "Navi Mumbai",
            area: "4000 sq.ft",
            image: "/assets/Kharghar/IMG_8045.JPG"
        }
    ];

    const testimonials = [
        {
            name: "Shubham Parikh",
            location: "Majestic signature ",
            rating: 5,
            comment: "SRV Interiors delivers exceptional work quality with elegant, contemporary designs. The team is highly professional, detail-oriented, and extremely cooperative throughout the entire process. It was a seamless and satisfying experience working with them."
        },
        {
            name: "Rohit B",
            location: "Mumbai",
            rating: 5,
            comment: "Positive: Professionalism, Punctuality, Quality, Responsiveness, Value A special thanks to I'd Sachin v . I approached srvinteriors towards the end of my own house's interior work. There were many mistakes and mis judgements done by my old contractor. We approached Mr. Sachin and he suggested few corrections. He is a knowledgeable, reliable and authentic person upon whom you can have your trust and faith. Now my interior work is at final stage and it's looking really good.Once again thank you for your support and generosity."
        },
        {
            name: "Anisha Mahadik",
            location: "Bhayandar",
            rating: 5,
            comment: "Positive: ProfessionalismMy 2 BHK flat in Bhayandar designed by Srv Interiors lead by Mr. Sachin v . I found Sachin to be a good family experienced designer with expertise in execution of work. He has designs for all kind of budgets, low to high to very high as per clients requirement. He has excellent set of contractors/labours working with him hence has a very high rate of completing work on time. He has finished my flat interior work as per schedule decided at the start. Quality of material being used is of high standard hence it can last for longer period.Sachin himself monitors all the execution work and I found him to be a reasonable person to deal with. He always listen to the client requirement and provide alternatives as per their desire. He has not only carried out the interior work but also helped in attending some leakage issues in my flat. So I highly recommend Sachin as an Excellent Interior Designer and wish him All the Very Best for all his future projects."
        },
        {
            name: "Vivek Srivastava",
            location: "Pune",
            rating: 5,
            comment: "Positive: Professionalism, Quality, Responsiveness, Value. My interior designer, Sachin and his team was amazing! I didn't know what to expect from this experience but I can tell you that it was above and beyond what I could have hoped for. Sachin was very collaborative and had great suggestions and questions throughout the process. I have already referred multiple persons to srv Interiors bcz of there sure name and the kind of expertise what they bring is commendable. I wish Srv Interiors all the very best."
        },
        {
            name: "Tarun agrwal ",
            location: "Kandivali East",
            rating: 5,
            comment: "We absolutely loved the work done in my home by Mr. Sachin Vishwakarma and his team. They are very professional and made the entire experience amazing. The best part is that they clearly understood our requirements and budget. We are truly overwhelmed by the complete design and execution of our home and same delivered on time.Mr.Sachin V and made entire process hassle free.We highly recommend 'SRV interiors"
        },
        {
            name: "Vinay Bhadra",
            location: "Vidyavihar",
            rating: 5,
            comment: "2bhk , Vidyavihar, we have got reference from siddhi maam for interior execution services. Sachin is quite experience in this field. We have given all requirements and he recommended us things and we agreed on that . Has we move further and got finished in 3months as we were part of execution. We seen Sachin checking details for every kind . And got executed site without any struggle. Everyone was happy with work . We have shared his connect to our family and friends . Hope he will shine one day . Our blessings will be with him and his team . Thankyou Mr Sachin Vishwakarma SRV"
        }, 
        {
            name: "Pratiksha kale",
            location: "Pune",
            rating: 5,
            comment: "We find srv interiors on Facebook. Have called him for his services . We got matched what exactly we wanted to do in our dream home . We continued with process and got 3d designs and all contractors were with good expertise. Done our home within give timeline. We were happy to introduce him in our society. Thankyou so much Srv Interiors and team ."
        }
    ];

    // Display only 4 testimonials initially, or all if showAllTestimonials is true
    const displayedTestimonials = showAllTestimonials ? testimonials : testimonials.slice(0, 4);

    return (
        <div className="page-container">
            {/* Hero Banner */}
            <section className="hero-banner">
                <div className="hero-bg">
                    <div className="hero-overlay"></div>
                </div>

                <div className="hero-content fade-in">
                    <div className="hero-badge">
                        <span>Crafting Dreams Since 2019</span>
                    </div>
                    <h3 className="hero-title">
                        Transform Your Space with <span className="hero-highlight">SRV Interiors</span>
                    </h3>
                    <p className="hero-subtitle">
                        From generations to generations, we bring the art of Vishwakarma to transform your house a home with end-to-end interior solutions.
                    </p>
                    <div className="hero-buttons">
                        {/* FIXED: Call Now Button - Now Active */}
                        <button
                            onClick={handleCallNow}
                            className="btn btn-call-now"
                        >
                            <FontAwesomeIcon icon={faPhone} /> Call Now
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
                            <div className="hero-badge">
                                About Us
                            </div>
                            <h2 className="section-title">
                                Crafting Beautiful Interiors from
                                <span className="text-highlight1"> Generations to Generations</span>
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
                                {/* Fixed: Correct Email Link */}
                                <a 
                                    href="mailto:info@srvinteriors.com" 
                                    className="btn-outline"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = 'mailto:info@srvinteriors.com';
                                    }}
                                >
                                    <FontAwesomeIcon icon={faEnvelope} /> Email Us
                                </a>
                            </div>
                        </div>

                        <div className="about-image">
                            <div className="image-wrapper">
                                <img
                                    src="/assets/Mantra Monarch/IMG_7871.JPG"
                                    alt="Modern Interior Design"
                                    className="fit-image"
                                />
                                {/* Fixed: Experience Badge for mobile view */}
                                <div className="experience-badge">
                                    <span>5+</span>
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
                    <div className="section-header">
                        <h2 className="section-title">
                            Our Premium <span className="title">Services</span>
                        </h2>
                        <p className="section-subtitle">
                            Comprehensive interior solutions for residential and commercial spaces
                        </p>
                        {/* Fixed: Correct email in section subtitle */}
                        {/* <p className="section-subtitle" style={{marginTop: '10px', fontSize: '0.9rem'}}>
                            Email us at: <a href="mailto:info@srvinteriors.com" className="email-link">info@srvinteriors.com</a>
                        </p> */}
                    </div>

                    <div className="services-container">
                        <div className="services-grid">
                            {services.slice(0, 4).map((service, index) => (
                                <div key={index} className="service-card-simple">
                                    {/* Heading - Left Aligned */}
                                    <h3 className="service-heading-left">{service.title}</h3>

                                    {/* Description - Center Aligned */}
                                    <p className="service-desc-center">{service.description}</p>

                                    {/* Icon - Center */}
                                    <div className="service-icon-box">
                                        <FontAwesomeIcon icon={service.icon} className="service-icon-minimal" />
                                    </div>

                                    {/* Features - Center Aligned */}
                                    <div className="service-features-simple">
                                        {service.features.slice(0, 3).map((feature, idx) => (
                                            <div key={idx} className="feature-item-center">
                                                <FontAwesomeIcon icon={faCheckCircle} className="feature-icon-small" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Learn More Button - Center */}
                                    <button className="learn-more-btn">
                                        Learn More
                                        <FontAwesomeIcon icon={faArrowRight} className="btn-arrow" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center">
                        <button className="btn-view-all" onClick={() => window.location.href = '/services'}>
                            View All Services
                        </button>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose-section">
                <div className="container">
                    <div className="section-header fade-in">
                        <div className="hero-badge">
                            Why Choose Us
                        </div>
                        <h2 className="section-title">
                            Why <span className="text-highlight1">SRV Interiors</span> Stands Out
                        </h2>
                        <p className="section-subtitle">
                            We are committed to delivering excellence in every project
                        </p>
                        {/* Fixed: Correct email in section subtitle */}
                        {/* <p className="section-subtitle" style={{marginTop: '10px', fontSize: '0.9rem'}}>
                            Contact: <a href="mailto:support@srvinteriors.com" className="email-link">support@srvinteriors.com</a>
                        </p> */}
                    </div>

                    <div className="features-grid">
                        <div className="feature-card fade-in">
                            <FontAwesomeIcon icon={faShieldAlt} className="feature-icon" />
                            <h3 className="feature-title">Premium Quality</h3>
                            <p className="feature-description">Premium materials with 5-year warranty on all work</p>
                        </div>
                        <div className="feature-card fade-in">
                            <FontAwesomeIcon icon={faUsers} className="feature-icon" />
                            <h3 className="feature-title">Expert Team</h3>
                            <p className="feature-description">Certified designers & skilled craftsmen</p>
                        </div>
                        <div className="feature-card fade-in">
                            <FontAwesomeIcon icon={faClock} className="feature-icon" />
                            <h3 className="feature-title">On-Time Delivery</h3>
                            <p className="feature-description">Strict timeline adherence guaranteed</p>
                        </div>
                        <div className="feature-card fade-in">
                            <FontAwesomeIcon icon={faRocket} className="feature-icon" />
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
                        <div className="hero-badge">
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
                        {projects.slice(0, 4).map((project, index) => (
                            <div
                                key={project.id}
                                className="project-card-minimal fade-in"
                            >
                                <div className="project-image-minimal">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                    />
                                    <div className="project-badge-minimal">
                                        {project.type}
                                    </div>
                                </div>
                                <div className="project-content-minimal">
                                    <h3 className="project-title-minimal">{project.title}</h3>
                                    <div className="project-meta-minimal">
                                        <span className="project-location-minimal">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} /> {project.location}
                                        </span>
                                        <span className="project-area-minimal">
                                            <FontAwesomeIcon icon={faRulerCombined} /> {project.area}
                                        </span>
                                    </div>
                                    <p className="project-description-minimal">
                                        {project.description || "Professional interior design solution with premium finishes"}
                                    </p>
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
                        <div className="hero-badge">
                            Testimonials
                        </div>
                        <h2 className="section-title">
                            What Our <span className="text-highlight1">Clients Say</span>
                        </h2>
                        <p className="section-subtitle">
                            Hear from our satisfied customers across Pune, Mumbai & Navi Mumbai
                        </p>
                    </div>

                    <div className="testimonials-grid">
                        {displayedTestimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`testimonial-card fade-in ${expandedTestimonial === index ? 'expanded' : ''}`}
                            >
                                <div className="testimonial-header">
                                    {/* Client name at top */}
                                    <div className="client-info-top">
                                        <div className="client-avatar-top">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div className="client-details-top">
                                            <h4>{testimonial.name}</h4>
                                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {testimonial.location}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Stars next to name */}
                                    <div className="stars-top">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} />
                                        ))}
                                    </div>
                                </div>

                                <div className="testimonial-content">
                                    <p className={`testimonial-text ${expandedTestimonial === index ? 'expanded' : ''}`}>
                                        "{testimonial.comment}"
                                    </p>
                                    
                                    {testimonial.comment.length > 200 && (
                                        <button 
                                            className="read-more-btn"
                                            onClick={() => toggleTestimonial(index)}
                                        >
                                            {expandedTestimonial === index ? (
                                                <>
                                                    Read Less <FontAwesomeIcon icon={faChevronUp} />
                                                </>
                                            ) : (
                                                <>
                                                    Read More <FontAwesomeIcon icon={faChevronDown} />
                                                </>
                                            )}
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center fade-in" style={{ marginTop: '30px' }}>
                        <button 
                            className="btn-view-all" 
                            onClick={toggleShowAllTestimonials}
                        >
                            {showAllTestimonials ? (
                                <>
                                    Show Less Testimonials <FontAwesomeIcon icon={faChevronUp} />
                                </>
                            ) : (
                                <>
                                    More Testimonials <FontAwesomeIcon icon={faChevronDown} />
                                </>
                            )}
                        </button>
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
                            <button className="btn-cta" onClick={handleCallNow}>
                                <FontAwesomeIcon icon={faPhone} /> Call Now
                            </button>
                            <button className="btn-cta-outline" onClick={handleWhatsApp}>
                                <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                            </button>
                        </div>
                        {/* Fixed: Correct contact email in CTA */}
                        <p style={{marginTop: '20px', opacity: 0.8, fontSize: '0.9rem'}}>
                            Or email us at: <a href="mailto:srvinteriorspune@gmail.com" style={{color: 'white', textDecoration: 'underline'}}>srvinteriorspune@gmail.com</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;