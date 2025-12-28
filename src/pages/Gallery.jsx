import React, { useState } from "react";
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight, 
  faTimes, 
  faChevronLeft, 
  faChevronRight,
  faHeart,
  faUsers,
  faCalendarAlt,
  faTrophy,
  faStar,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Gallery.css';

// Set app element for accessibility
Modal.setAppElement('#root');

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter categories
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'living', label: 'Living Room' },
    { id: 'kitchen', label: 'Modular Kitchen' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'office', label: 'Office Interiors' },
    { id: 'bathroom', label: 'Bathroom' },
    { id: 'commercial', label: 'Commercial' }
  ];

  // Gallery images data
  const galleryImages = [
    // Living Room Images
    { 
      id: 1, 
      category: 'living',
      title: 'Modern Luxury Living Room',
      type: 'Residential',
      location: 'Pune',
      area: '450 sq.ft',
      description: 'A stunning contemporary living room with custom furniture and elegant lighting design.',
      image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Custom TV Unit', 'False Ceiling', 'Modern Lighting', 'Premium Furniture']
    },
    { 
      id: 2, 
      category: 'living',
      title: 'Minimalist Living Space',
      type: 'Residential',
      location: 'Mumbai',
      area: '380 sq.ft',
      description: 'Clean lines and minimal design create a peaceful living environment.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Minimal Design', 'Smart Storage', 'Natural Lighting', 'Neutral Palette']
    },
    { 
      id: 3, 
      category: 'living',
      title: 'Contemporary Lounge',
      type: 'Residential',
      location: 'Navi Mumbai',
      area: '520 sq.ft',
      description: 'Elegant living area with bespoke furniture and artistic elements.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Bespoke Furniture', 'Art Display', 'Accent Wall', 'Ambient Lighting']
    },

    // Kitchen Images
    { 
      id: 4, 
      category: 'kitchen',
      title: 'Modular Kitchen Design',
      type: 'Residential',
      location: 'Pune',
      area: '180 sq.ft',
      description: 'Fully equipped modular kitchen with smart storage solutions and premium finishes.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Modular Cabinets', 'Granite Counter', 'Smart Storage', 'Chimney Hood']
    },
    { 
      id: 5, 
      category: 'kitchen',
      title: 'Modern Kitchen Setup',
      type: 'Residential',
      location: 'Mumbai',
      area: '220 sq.ft',
      description: 'State-of-the-art kitchen with island counter and modern appliances.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Island Counter', 'Modern Appliances', 'Pull-out Drawers', 'Task Lighting']
    },
    { 
      id: 6, 
      category: 'kitchen',
      title: 'Compact Modular Kitchen',
      type: 'Residential',
      location: 'Navi Mumbai',
      area: '150 sq.ft',
      description: 'Space-efficient kitchen design with maximum storage and functionality.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Space Efficient', 'Corner Solutions', 'Wall Cabinets', 'Breakfast Counter']
    },

    // Bedroom Images
    { 
      id: 7, 
      category: 'bedroom',
      title: 'Master Bedroom Suite',
      type: 'Residential',
      location: 'Pune',
      area: '300 sq.ft',
      description: 'Luxurious master bedroom with walk-in wardrobe and elegant décor.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Walk-in Wardrobe', 'False Ceiling', 'Study Corner', 'Dressing Area']
    },
    { 
      id: 8, 
      category: 'bedroom',
      title: 'Kids Bedroom',
      type: 'Residential',
      location: 'Mumbai',
      area: '200 sq.ft',
      description: 'Colorful and functional kids bedroom with study area and storage.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Study Desk', 'Storage Beds', 'Colorful Theme', 'Play Area']
    },
    { 
      id: 9, 
      category: 'bedroom',
      title: 'Contemporary Bedroom',
      type: 'Residential',
      location: 'Navi Mumbai',
      area: '280 sq.ft',
      description: 'Modern bedroom design with minimal aesthetics and smart lighting.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Minimal Design', 'Smart Lighting', 'Built-in Wardrobe', 'Balcony Access']
    },

    // Office Images
    { 
      id: 10, 
      category: 'office',
      title: 'Corporate Office Space',
      type: 'Commercial',
      location: 'Pune',
      area: '5000 sq.ft',
      description: 'Modern corporate office with collaborative spaces and premium finishes.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Workstations', 'Conference Room', 'Reception', 'Cafeteria']
    },
    { 
      id: 11, 
      category: 'office',
      title: 'Startup Office',
      type: 'Commercial',
      location: 'Mumbai',
      area: '2500 sq.ft',
      description: 'Creative office space for startups with flexible work areas.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Open Plan', 'Meeting Pods', 'Breakout Area', 'Creative Zone']
    },

    // Bathroom Images
    { 
      id: 12, 
      category: 'bathroom',
      title: 'Luxury Bathroom',
      type: 'Residential',
      location: 'Pune',
      area: '120 sq.ft',
      description: 'Premium bathroom with luxurious fittings and spa-like amenities.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Rain Shower', 'Jacuzzi', 'Premium Tiles', 'Vanity Unit']
    },

    // Commercial Images
    { 
      id: 13, 
      category: 'commercial',
      title: 'Restaurant Interiors',
      type: 'Commercial',
      location: 'Mumbai',
      area: '3000 sq.ft',
      description: 'Upscale restaurant with elegant dining area and bar counter.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Dining Area', 'Bar Counter', 'Kitchen', 'Private Dining']
    },
    { 
      id: 14, 
      category: 'commercial',
      title: 'Showroom Design',
      type: 'Commercial',
      location: 'Navi Mumbai',
      area: '4000 sq.ft',
      description: 'Modern showroom with display areas and customer lounge.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Display Units', 'Lighting', 'Customer Lounge', 'Cash Counter']
    }
  ];

  // Filter images based on active filter
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  // Open modal with image details
  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Navigate to next image
  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  // Navigate to previous image
  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  // Statistics data
  const stats = [
    { number: "500+", label: "Projects Completed", icon: faTrophy },
    { number: "1000+", label: "Happy Customers", icon: faHeart },
    { number: "15+", label: "Years Experience", icon: faCalendarAlt },
    { number: "50+", label: "Expert Team Members", icon: faUsers }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Pune",
      project: "3BHK Interior",
      comment: "SRV Interiors transformed our home beautifully. Their attention to detail is remarkable!"
    },
    {
      name: "Priya Sharma",
      location: "Mumbai",
      project: "Modular Kitchen",
      comment: "Excellent work on our kitchen. The design is both functional and beautiful."
    },
    {
      name: "Amit Patel",
      location: "Navi Mumbai",
      project: "Office Interior",
      comment: "Professional team, on-time delivery, and stunning results. Highly recommended!"
    }
  ];

  return (
    <div className="gallery-page">
      {/* Hero Banner */}
      <section className="gallery-hero">
        <div className="hero-bg">
          <div className="hero-overlay"></div>
          <img 
            src="https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Gallery Banner" 
          />
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <span>Our Portfolio</span>
          </div>
          <h1 className="hero-title">
            Explore Our <span className="hero-highlight">Stunning</span> Work
          </h1>
          <p className="hero-subtitle">
            Browse through our collection of beautifully designed spaces that showcase 
            our expertise in interior design and execution.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-container">
            <div className="filter-buttons">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            
            <div className="filter-info">
              <p>
                Showing <span className="count">{filteredImages.length}</span> projects
                {activeFilter !== 'all' && ` in ${filters.find(f => f.id === activeFilter)?.label}`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => openModal(image, index)}
              >
                <div className="image-container">
                  <img 
                    src={image.image} 
                    alt={image.title}
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <span className="project-type">{image.type}</span>
                      <h3 className="project-title">{image.title}</h3>
                      <div className="project-meta">
                        <span><FontAwesomeIcon icon={faCheckCircle} /> {image.location}</span>
                        <span>{image.area}</span>
                      </div>
                      <button className="view-project-btn">
                        View Project <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              Our Journey
            </div>
            <h2 className="section-title">
              Years of <span className="text-highlight">Excellence</span>
            </h2>
            <p className="section-subtitle">
              Building beautiful spaces and lasting relationships since 2019
            </p>
          </div>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <FontAwesomeIcon icon={stat.icon} />
                </div>
                <div className="stat-content">
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="client-testimonials">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              Happy Customers
            </div>
            <h2 className="section-title">
              What Our <span className="text-highlight">Clients Say</span>
            </h2>
            <p className="section-subtitle">
              Hear from homeowners and businesses who trusted us with their spaces
            </p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
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
                    <p>{testimonial.location} • {testimonial.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gallery-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Transform Your Space?
            </h2>
            <p className="cta-subtitle">
              Let's discuss your project and create something beautiful together
            </p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={() => window.location.href = '/contact'}>
                Start Your Project <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <button className="btn-outline" onClick={() => window.open('https://wa.me/918796932990', '_blank')}>
                <FontAwesomeIcon icon={faStar} /> Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Modal
        isOpen={!!selectedImage}
        onRequestClose={closeModal}
        className="image-modal"
        overlayClassName="modal-overlay"
      >
        {selectedImage && (
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            
            <div className="modal-nav">
              <button className="nav-btn prev-btn" onClick={prevImage}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className="nav-btn next-btn" onClick={nextImage}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="modal-image">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                />
              </div>
              
              <div className="modal-info">
                <div className="project-header">
                  <span className="project-category">
                    {filters.find(f => f.id === selectedImage.category)?.label}
                  </span>
                  <h2 className="project-title">{selectedImage.title}</h2>
                </div>
                
                <div className="project-meta-grid">
                  <div className="meta-item">
                    <span className="meta-label">Project Type</span>
                    <span className="meta-value">{selectedImage.type}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Location</span>
                    <span className="meta-value">{selectedImage.location}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Area</span>
                    <span className="meta-value">{selectedImage.area}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Status</span>
                    <span className="meta-value status-completed">Completed</span>
                  </div>
                </div>
                
                <div className="project-description">
                  <h3>Project Description</h3>
                  <p>{selectedImage.description}</p>
                </div>
                
                <div className="project-features">
                  <h3>Key Features</h3>
                  <div className="features-grid">
                    {selectedImage.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="project-actions">
                  <button className="action-btn primary" onClick={() => window.location.href = '/contact'}>
                    Start Similar Project <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                  <button className="action-btn secondary" onClick={() => window.open('https://wa.me/918796932990', '_blank')}>
                    <FontAwesomeIcon icon={faStar} /> Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Gallery;