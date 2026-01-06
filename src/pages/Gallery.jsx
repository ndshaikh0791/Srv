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
  faCheckCircle,
  faPlus,
  faChevronDown,
  faChevronUp,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Gallery.css';

Modal.setAppElement('#root');

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSubImageIndex, setActiveSubImageIndex] = useState(0);
  const [showMoreAll, setShowMoreAll] = useState(false);
  const [expandedTestimonial, setExpandedTestimonial] = useState(null);

  const albumFilters = [
    { id: 'all', label: 'All Projects' },
    { id: 'mantra_monarch', label: 'Mantra Monarch, Baner' },
    { id: 'amanora_neo_towers', label: 'Amanora Neo Towers, Hadpsar' },
    { id: 'majestic_signature', label: 'Majestic Signature, Baner' },
    { id: 'mankhurd', label: 'Mankhurd, Mumbai' },
    { id: 'kharghar', label: 'Kharghar, Navi Mumbai' },
    { id: 'euro_school', label: 'Euro School, Wakad' },
    { id: 'lodha_woods', label: 'Lodha Woods, Kandivali' },
    { id: 'elina_living', label: 'Elina Living, NIBM' },
    { id: 'kothrud', label: 'Kothrud, Pune' },
    { id: 'karjat_builder', label: 'Builder Sample, Karjat' },
    { id: 'designing', label: 'Designing' },
    { id: 'our_office', label: 'Our Office, Vashi' },
    { id: 'pirangut_bunglow', label: 'Pirangut Bunglow, Pune' }
  ];

  // Gallery Images Data - 更新后的图片路径
  const galleryImages = [
    // Mantra Monarch, Baner - 示例图片
    {
      id: 1,
      albumId: 'mantra_monarch',
      title: 'Mantra Monarch Living Room',
      type: 'Residential',
      location: 'Baner, Pune',
      area: '450 sq.ft',
      description: 'Contemporary living room with custom furniture.',
      image: '/gallery/mantra-monarch-1.jpg',
      projectImages: [
        '/gallery/mantra-monarch-1.jpg',
        '/gallery/mantra-monarch-2.jpg',
        '/gallery/mantra-monarch-3.jpg',
      ],
      features: ['Custom TV Unit', 'False Ceiling', 'Modern Lighting']
    },

    // Amanora Neo Towers, Hadpsar - 示例图片
    {
      id: 2,
      albumId: 'amanora_neo_towers',
      title: 'Amanora Living Area',
      type: 'Residential',
      location: 'Hadpsar, Pune',
      area: '380 sq.ft',
      description: 'Minimal design living area.',
      image: '/gallery/amanora-1.jpg',
      projectImages: [
        '/gallery/amanora-1.jpg',
        '/gallery/amanora-2.jpg',
      ],
      features: ['Minimal Design', 'Smart Storage']
    },

    // Majestic Signature, Baner - 示例图片
    {
      id: 3,
      albumId: 'majestic_signature',
      title: 'Majestic Living Room',
      type: 'Residential',
      location: 'Baner, Pune',
      area: '520 sq.ft',
      description: 'Elegant living area.',
      image: '/gallery/majestic-1.jpg',
      projectImages: [
        '/gallery/majestic-1.jpg',
        '/gallery/majestic-2.jpg',
      ],
      features: ['Bespoke Furniture', 'Art Display']
    },

    // Mankhurd, Mumbai - 示例图片
    {
      id: 4,
      albumId: 'mankhurd',
      title: 'Mankhurd Kitchen',
      type: 'Residential',
      location: 'Mankhurd, Mumbai',
      area: '220 sq.ft',
      description: 'Modern kitchen design.',
      image: '/gallery/mankhurd-1.jpg',
      projectImages: [
        '/gallery/mankhurd-1.jpg',
      ],
      features: ['Island Counter', 'Modern Appliances']
    },

    // Kharghar, Navi Mumbai - 示例图片
    {
      id: 5,
      albumId: 'kharghar',
      title: 'Kharghar Master Bedroom',
      type: 'Residential',
      location: 'Kharghar, Navi Mumbai',
      area: '300 sq.ft',
      description: 'Luxurious master bedroom.',
      image: '/gallery/kharghar-1.jpg',
      projectImages: [
        '/gallery/kharghar-1.jpg',
        '/gallery/kharghar-2.jpg',
      ],
      features: ['Walk-in Wardrobe', 'False Ceiling']
    },

    // Euro School, Wakad - 示例图片
    {
      id: 6,
      albumId: 'euro_school',
      title: 'Euro School Classroom',
      type: 'Commercial',
      location: 'Wakad, Pune',
      area: '500 sq.ft',
      description: 'Educational space design.',
      image: '/gallery/euro-school-1.jpg',
      projectImages: [
        '/gallery/euro-school-1.jpg',
      ],
      features: ['Educational Design', 'Safe Materials']
    },

    // Lodha Woods, Kandivali - 示例图片
    {
      id: 7,
      albumId: 'lodha_woods',
      title: 'Lodha Woods Kitchen',
      type: 'Residential',
      location: 'Kandivali, Mumbai',
      area: '180 sq.ft',
      description: 'Modular kitchen design.',
      image: '/gallery/lodha-1.jpg',
      projectImages: [
        '/gallery/lodha-1.jpg',
        '/gallery/lodha-2.jpg',
      ],
      features: ['Modular Cabinets', 'Granite Counter']
    },

    // Elina Living, NIBM - 示例图片
    {
      id: 8,
      albumId: 'elina_living',
      title: 'Elina Living Kitchen',
      type: 'Residential',
      location: 'NIBM, Pune',
      area: '150 sq.ft',
      description: 'Space-efficient kitchen.',
      image: '/gallery/elina-1.jpg',
      projectImages: [
        '/gallery/elina-1.jpg',
      ],
      features: ['Space Efficient', 'Corner Solutions']
    },

    // Kothrud, Pune - 示例图片
    {
      id: 9,
      albumId: 'kothrud',
      title: 'Kothrud Residence',
      type: 'Residential',
      location: 'Kothrud, Pune',
      area: '600 sq.ft',
      description: 'Complete home interior.',
      image: '/gallery/kothrud-1.jpg',
      projectImages: [
        '/gallery/kothrud-1.jpg',
      ],
      features: ['Complete Interior', 'Custom Furniture']
    },

    // Builder Sample, Karjat - 示例图片
    {
      id: 10,
      albumId: 'karjat_builder',
      title: 'Builder Sample Flat',
      type: 'Residential',
      location: 'Karjat',
      area: '800 sq.ft',
      description: 'Model apartment design.',
      image: '/gallery/karjat-1.jpg',
      projectImages: [
        '/gallery/karjat-1.jpg',
      ],
      features: ['Model Apartment', 'Showcase Design']
    },

    // Designing - 示例图片
    {
      id: 11,
      albumId: 'designing',
      title: 'Design Concepts',
      type: 'Design',
      location: 'Various Locations',
      area: 'Various',
      description: 'Creative design concepts.',
      image: '/gallery/design-1.jpg',
      projectImages: [
        '/gallery/design-1.jpg',
        '/gallery/design-2.jpg',
      ],
      features: ['3D Visualization', 'Concept Design']
    },

    // Our Office, Vashi - 示例图片
    {
      id: 12,
      albumId: 'our_office',
      title: 'Office Reception',
      type: 'Commercial',
      location: 'Vashi, Navi Mumbai',
      area: '200 sq.ft',
      description: 'Professional office space.',
      image: '/gallery/office-1.jpg',
      projectImages: [
        '/gallery/office-1.jpg',
      ],
      features: ['Modern Design', 'Professional Space']
    },

    // Pirangut Bunglow, Pune - 示例图片（精品项目）
    {
      id: 13,
      albumId: 'pirangut_bunglow',
      title: 'Pirangut Luxury Bunglow',
      type: 'Premium Residential',
      location: 'Pirangut, Pune',
      area: '1200 sq.ft',
      description: 'Premium bunglow with luxury finishes.',
      image: '/gallery/pirangut-1.jpg',
      projectImages: [
        '/gallery/pirangut-1.jpg',
        '/gallery/pirangut-2.jpg',
        '/gallery/pirangut-3.jpg',
        '/gallery/pirangut-4.jpg',
      ],
      features: ['Premium Finishes', 'Luxury Design', 'Custom Woodwork', 'Smart Home']
    },
  ];

  // Filter images based on active filter
  const filteredImages = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.albumId === activeFilter);

  // For "All Projects" show only 8 initially, then all when showMoreAll is true
  const displayedImages = activeFilter === 'all'
    ? (showMoreAll ? filteredImages : filteredImages.slice(0, 8))
    : filteredImages; // For specific albums, show all images in that album

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setActiveSubImageIndex(0);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextSubImage = (e) => {
    if (e) e.stopPropagation();
    if (selectedImage.projectImages && selectedImage.projectImages.length > 0) {
      const nextIdx = (activeSubImageIndex + 1) % selectedImage.projectImages.length;
      setActiveSubImageIndex(nextIdx);
    }
  };

  const prevSubImage = (e) => {
    if (e) e.stopPropagation();
    if (selectedImage.projectImages && selectedImage.projectImages.length > 0) {
      const prevIdx = (activeSubImageIndex - 1 + selectedImage.projectImages.length) % selectedImage.projectImages.length;
      setActiveSubImageIndex(prevIdx);
    }
  };

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setShowMoreAll(false); // Reset showMoreAll when filter changes
  };

  const toggleTestimonial = (index) => {
    setExpandedTestimonial(expandedTestimonial === index ? null : index);
  };

  const stats = [
    { number: "500+", label: "Projects Completed", icon: faTrophy },
    { number: "1000+", label: "Happy Customers", icon: faHeart },
    { number: "5+", label: "Years Experience", icon: faCalendarAlt },
    { number: "50+", label: "Expert Team Members", icon: faUsers }
  ];

  const testimonials = [
    {
      name: "Shubham Parikh",
      location: "Majestic Signature",
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
      name: "Pratiksha kale",
      location: "Pune",
      rating: 5,
      comment: "We find srv interiors on Facebook. Have called him for his services . We got matched what exactly we wanted to do in our dream home . We continued with process and got 3d designs and all contractors were with good expertise. Done our home within give timeline. We were happy to introduce him in our society. Thankyou so much Srv Interiors and team ."
    }
  ];

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="hero-bg">
          <div className="hero-overlay"></div>
          <img
            src="/gallery/banner.jpg"
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

      <section className="filter-section">
        <div className="container">
          <div className="filter-container">
            <div className="filter-buttons">
              {albumFilters.map((filter) => (
                <button
                  key={filter.id}
                  className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                  onClick={() => handleFilterChange(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="filter-info">
              <p>
                {activeFilter === 'all' ? (
                  <>
                    Showing <span className="count">{displayedImages.length}</span> projects
                    {!showMoreAll && ' (8 of 13)'}
                  </>
                ) : (
                  <>
                    Showing <span className="count">{displayedImages.length}</span> images from{' '}
                    {albumFilters.find(f => f.id === activeFilter)?.label}
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {displayedImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item"
                style={{ '--i': index }}
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

          {/* Show Explore More button only for "All Projects" filter */}
          {activeFilter === 'all' && !showMoreAll && (
            <div className="explore-more-container">
              <button
                className="explore-more-btn"
                onClick={() => setShowMoreAll(true)}
              >
                <FontAwesomeIcon icon={faPlus} />
                Explore More Projects
              </button>
            </div>
          )}

          {/* Show Show Less button when all projects are shown */}
          {activeFilter === 'all' && showMoreAll && (
            <div className="explore-more-container">
              <button
                className="explore-less-btn"
                onClick={() => setShowMoreAll(false)}
              >
                Show Less Projects
              </button>
            </div>
          )}
        </div>
      </section>

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

      {/* Testimonials Section */}
      <section className="client-testimonials-gallery">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              Happy Customers
            </div>
            <h2 className="section-title">
              What Our <span className="text-highlight">Clients Say</span>
            </h2>
            <p className="section-subtitle1">
              Hear from homeowners and businesses who trusted us with their spaces
            </p>
          </div>

          <div className="testimonials-grid-gallery">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card-gallery ${expandedTestimonial === index ? 'expanded' : ''}`}
              >
                <div className="testimonial-header-gallery">
                  <div className="client-info-top">
                    <div className="client-avatar-top">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="client-details-top">
                      <h4>{testimonial.name}</h4>
                      <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="stars-top">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} />
                    ))}
                  </div>
                </div>

                <div className="testimonial-content-gallery">
                  <p className={`testimonial-text-gallery ${expandedTestimonial === index ? 'expanded' : ''}`}>
                    "{testimonial.comment}"
                  </p>
                  
                  {testimonial.comment.length > 200 && (
                    <button 
                      className="read-more-btn-gallery"
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
        </div>
      </section>

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

            {selectedImage.projectImages && selectedImage.projectImages.length > 1 && (
              <div className="modal-nav">
                <button className="nav-btn prev-btn" onClick={prevSubImage}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="nav-btn next-btn" onClick={nextSubImage}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            )}

            <div className="modal-body">
              <div className="modal-image">
                <img
                  src={
                    selectedImage.projectImages && selectedImage.projectImages.length > 0
                      ? selectedImage.projectImages[activeSubImageIndex]
                      : selectedImage.image
                  }
                  alt={`${selectedImage.title} view ${activeSubImageIndex + 1}`}
                />

                {selectedImage.projectImages && selectedImage.projectImages.length > 1 && (
                  <div className="image-counter">
                    {activeSubImageIndex + 1} / {selectedImage.projectImages.length}
                  </div>
                )}
              </div>

              <div className="modal-info">
                <div className="project-header">
                  <span className="project-category">
                    {selectedImage.title}
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

                <div className="project-actions">
                  <button className="action-btn primary" onClick={() => window.location.href = '/contact'}>
                    Start Similar Project <FontAwesomeIcon icon={faArrowRight} />
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