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
      title: 'Mantra Monarch',
      type: 'Residential',
      location: 'Pune',
      area: '450 sq.ft',
      description: 'A stunning contemporary living room with custom furniture and elegant lighting design.',
      // MAIN IMAGE for the grid
      image: 'src/assets/Mantra Monarch/IMG_7871.JPG',
      // SUB-IMAGES for the modal slider
      projectImages: [
        'src/assets/Mantra Monarch/IMG_7871.JPG',
        'src/assets/Mantra Monarch/IMG_7872.JPG', 
        'src/assets/Mantra Monarch/IMG_7873.JPG', 
        'src/assets/Mantra Monarch/IMG_7874.JPG', 
        'src/assets/Mantra Monarch/IMG_7875.JPG', 
        'src/assets/Mantra Monarch/IMG_7876.JPG', 
        'src/assets/Mantra Monarch/IMG_7877.JPG', 
        'src/assets/Mantra Monarch/IMG_7878.JPG', 
        'src/assets/Mantra Monarch/IMG_7879.JPG', 
        'src/assets/Mantra Monarch/IMG_7880.JPG', 
        'src/assets/Mantra Monarch/IMG_7881.JPG', 
        'src/assets/Mantra Monarch/IMG_7882.JPG', 
        'src/assets/Mantra Monarch/IMG_7883.JPG', 
        'src/assets/Mantra Monarch/IMG_7884.JPG', 
        'src/assets/Mantra Monarch/IMG_7885.JPG', 
        'src/assets/Mantra Monarch/IMG_7886.JPG', 
        'src/assets/Mantra Monarch/IMG_7887.JPG', 
        'src/assets/Mantra Monarch/IMG_7888.JPG', 
        'src/assets/Mantra Monarch/IMG_7889.JPG', 
        'src/assets/Mantra Monarch/IMG_7890.JPG', 
        'src/assets/Mantra Monarch/IMG_7890.JPG', 
        'src/assets/Mantra Monarch/IMG_7891.JPG'
      ],
      features: ['Custom TV Unit', 'False Ceiling', 'Modern Lighting', 'Premium Furniture']
    },
    {
      id: 2,
      category: 'living',
      title: 'Amanora Neo Towers',
      type: 'Residential',
      location: 'Mumbai',
      area: '380 sq.ft',
      description: 'Clean lines and minimal design create a peaceful living environment.',
      image: 'src/assets/Amanora_neo_towers/IMG_4023.jpg',
      features: ['Minimal Design', 'Smart Storage', 'Natural Lighting', 'Neutral Palette'],
      projectImages: [
        'src/assets/Amanora_neo_towers/IMG_3974.jpg',
        'src/assets/Amanora_neo_towers/IMG_3975.jpg', 
        'src/assets/Amanora_neo_towers/IMG_3980.jpg', 
        'src/assets/Amanora_neo_towers/IMG_3996.jpg', 
        'src/assets/Amanora_neo_towers/IMG_3999.jpg', 
        'src/assets/Amanora_neo_towers/IMG_4003.jpg', 
        // 'src/assets/Amanora_neo_towers/IMG_4006.jpg', 
        'src/assets/Amanora_neo_towers/IMG_4020.jpg', 
        'src/assets/Amanora_neo_towers/IMG_4023.jpg', 
        'src/assets/Amanora_neo_towers/IMG_4030.jpg', 
        'src/assets/Amanora_neo_towers/IMG_4031.jpg', 
        'src/assets/Amanora_neo_towers/IMG_8176.JPG', 

      ],
    },
    {
      id: 3,
      category: 'living',
      title: 'Majestic Signature Towers',
      type: 'Residential',
      location: 'Navi Mumbai',
      area: '520 sq.ft',
      description: 'Elegant living area with bespoke furniture and artistic elements.',
      image: 'src/assets/Majestic_Signature_Towers/IMG_3979.jpg',
      features: ['Bespoke Furniture', 'Art Display', 'Accent Wall', 'Ambient Lighting'],
      projectImages: [
        'src/assets/Majestic_Signature_Towers/IMG_3979.jpg',
        'src/assets/Majestic_Signature_Towers/IMG_8175.jpg',
        'src/assets/Majestic_Signature_Towers/IMG_8177.jpg',
        'src/assets/Majestic_Signature_Towers/IMG_3981.jpg'
      ],
    },

    // Kitchen Images
    {
      id: 4,
      category: 'kitchen',
      title: 'Lodha Woods',
      type: 'Residential',
      location: 'kandivali',
      area: '180 sq.ft',
      description: 'Fully equipped modular kitchen with smart storage solutions and premium finishes.',
      image: 'src/assets/lodha_woods_kandivali/IMG_2462.jpg',
      features: ['Modular Cabinets', 'Granite Counter', 'Smart Storage', 'Chimney Hood'],
      projectImages: [
        'src/assets/lodha_woods_kandivali/IMG_2056.jpg',
        'src/assets/lodha_woods_kandivali/IMG_2094.jpg',
        'src/assets/lodha_woods_kandivali/IMG_2096.jpg',
        'src/assets/lodha_woods_kandivali/IMG_2416.jpg',
        'src/assets/lodha_woods_kandivali/IMG_2436.jpg',
        'src/assets/lodha_woods_kandivali/IMG_2446.jpg',
        'src/assets/lodha_woods_kandivali/IMG_2460.jpg',
        'src/assets/lodha_woods_kandivali/IMG_2461.jpg',
        'src/assets/lodha_woods_kandivali/IMG_2462.jpg',
        'src/assets/lodha_woods_kandivali/IMG_2463.jpg',
        'src/assets/lodha_woods_kandivali/IMG_3562.jpg',
        'src/assets/lodha_woods_kandivali/IMG_4578_(1).jpg',
        'src/assets/lodha_woods_kandivali/IMG_4578.jpg',
        'src/assets/lodha_woods_kandivali/IMG_9465.jpg',
        'src/assets/lodha_woods_kandivali/IMG_9466.jpg',
        'src/assets/lodha_woods_kandivali/IMG_9468.jpg',
        'src/assets/lodha_woods_kandivali/IMG_9469.jpg',
        'src/assets/lodha_woods_kandivali/IMG_9471.jpg',
        'src/assets/lodha_woods_kandivali/IMG_9487.jpg',
        'src/assets/lodha_woods_kandivali/IMG_9491.jpg',
        
      ],
    },
    {
      id: 5,
      category: 'kitchen',
      title: 'Mankhurd',
      type: 'Residential',
      location: 'Mumbai',
      area: '220 sq.ft',
      description: 'State-of-the-art kitchen with island counter and modern appliances.',
      image: 'src/assets/Mankhurd/IMG_8763.PNG',
      features: ['Island Counter', 'Modern Appliances', 'Pull-out Drawers', 'Task Lighting'],
      projectImages: [
        'src/assets/Mankhurd/IMG_8761.PNG',
        'src/assets/Mankhurd/IMG_8762.PNG',
        'src/assets/Mankhurd/IMG_8763.PNG',
        'src/assets/Mankhurd/IMG_8851.PNG',
        'src/assets/Mankhurd/IMG_8853.PNG',
        'src/assets/Mankhurd/IMG_8856.PNG',
        'src/assets/Mankhurd/IMG_8857.PNG',
        'src/assets/Mankhurd/IMG_8858.PNG',
        'src/assets/Mankhurd/IMG_9274.PNG',
        'src/assets/Mankhurd/IMG_9275.PNG',
        'src/assets/Mankhurd/IMG_9299.PNG',
        'src/assets/Mankhurd/IMG_9394.PNG',
        'src/assets/Mankhurd/IMG_9413.PNG',
        'src/assets/Mankhurd/IMG_9417.PNG',
        
      ],
    },
    {
      id: 6,
      category: 'living',
      title: 'Elina Living',
      type: 'Residential',
      location: 'Navi Mumbai',
      area: '150 sq.ft',
      description: 'Space-efficient kitchen design with maximum storage and functionality.',
      image: 'src/assets/Elina_Living/IMG_8126.JPG',
      features: ['Space Efficient', 'Corner Solutions', 'Wall Cabinets', 'Breakfast Counter'],
      projectImages: [
        'src/assets/Elina_Living/IMG_8126.JPG',
        'src/assets/Elina_Living/IMG_8127.JPG',
        'src/assets/Elina_Living/IMG_9983.JPG',
        'src/assets/Elina_Living/IMG_9984.JPG',
        'src/assets/Elina_Living/IMG_9985.JPG',
        'src/assets/Elina_Living/IMG_9986.JPG',
        'src/assets/Elina_Living/IMG_9990.JPG',
        'src/assets/Elina_Living/IMG_9991.JPG',
        'src/assets/Elina_Living/IMG_9992.JPG',
        'src/assets/Elina_Living/IMG_9993.JPG',
        'src/assets/Elina_Living/IMG_9994.JPG',
        'src/assets/Elina_Living/IMG_9995.JPG',
        'src/assets/Elina_Living/IMG_9996.JPG',
        'src/assets/Elina_Living/IMG_9997.JPG',
      ],
    },

    // Bedroom Images
    {
      id: 7,  
      category: 'bedroom',
      title: 'Khargar',
      type: 'Residential',
      location: 'Kharghar',
      area: '300 sq.ft',
      description: 'Luxurious master bedroom with walk-in wardrobe and elegant décor.',
      image: 'src/assets/Kharghar/IMG_2540.JPG',
      features: ['Walk-in Wardrobe', 'False Ceiling', 'Study Corner', 'Dressing Area'],
      projectImages: [
        'src/assets/Kharghar/IMG_2540.JPG',
        'src/assets/Kharghar/IMG_2541.JPG',
        'src/assets/Kharghar/IMG_2542.JPG',
        'src/assets/Kharghar/IMG_2543.JPG',
        'src/assets/Kharghar/IMG_2544.JPG',
        'src/assets/Kharghar/IMG_2545.JPG',
        'src/assets/Kharghar/IMG_7900.PNG',
        'src/assets/Kharghar/IMG_7901.PNG',
        'src/assets/Kharghar/IMG_7902.PNG',
        'src/assets/Kharghar/IMG_7903.PNG',
        'src/assets/Kharghar/IMG_7904.PNG',
        'src/assets/Kharghar/IMG_7905.PNG',
        'src/assets/Kharghar/IMG_7906.PNG',
        'src/assets/Kharghar/IMG_7907.PNG',
        'src/assets/Kharghar/IMG_7908.PNG',
        'src/assets/Kharghar/IMG_8011.PNG',
        'src/assets/Kharghar/IMG_8025.JPG',
        'src/assets/Kharghar/IMG_8027.JPG',
        'src/assets/Kharghar/IMG_8028.JPG',
        'src/assets/Kharghar/IMG_8029.JPG',
        'src/assets/Kharghar/IMG_8030.JPG',
        'src/assets/Kharghar/IMG_8031.JPG',
        'src/assets/Kharghar/IMG_8032.JPG',
        'src/assets/Kharghar/IMG_8033.JPG',
        'src/assets/Kharghar/IMG_8035.JPG',
        'src/assets/Kharghar/IMG_8037.JPG',
        'src/assets/Kharghar/IMG_8039.JPG',
        'src/assets/Kharghar/IMG_8041.JPG',
        'src/assets/Kharghar/IMG_8042.JPG',
        'src/assets/Kharghar/IMG_8045.JPG',
        'src/assets/Kharghar/IMG_8046.JPG',
        'src/assets/Kharghar/IMG_8047.JPG',
        'src/assets/Kharghar/IMG_8179.JPG',
        'src/assets/Kharghar/IMG_8180.JPG',
        'src/assets/Kharghar/IMG_8180.JPG',
      ],
    },
    {
      id: 8,
      category: 'office',
      title: 'Our Office',
      type: 'Residential',
      location: 'Mumbai',
      area: '200 sq.ft',
      description: 'Colorful and functional kids bedroom with study area and storage.',
      image: 'src/assets/Our_Office/IMG_6928.PNG',
      features: ['Study Desk', 'Storage Beds', 'Colorful Theme', 'Play Area'],
      projectImages: [
        'src/assets/Our_Office/IMG_6924.PNG',
        'src/assets/Our_Office/IMG_6925.PNG',
        'src/assets/Our_Office/IMG_6926.PNG',
        'src/assets/Our_Office/IMG_6927.PNG',
        'src/assets/Our_Office/IMG_6928.PNG',
        'src/assets/Our_Office/IMG_6929.PNG',
        'src/assets/Our_Office/IMG_6930.PNG',
        
      ],
      
    },
    // {
    //   id: 9,
    //   category: 'bedroom',
    //   title: 'Contemporary Bedroom',
    //   type: 'Residential',
    //   location: 'Navi Mumbai',
    //   area: '280 sq.ft',
    //   description: 'Modern bedroom design with minimal aesthetics and smart lighting.',
    //   image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //   features: ['Minimal Design', 'Smart Lighting', 'Built-in Wardrobe', 'Balcony Access']
    // },

    // // Office Images
    // {
    //   id: 10,
    //   category: 'office',
    //   title: 'Corporate Office Space',
    //   type: 'Commercial',
    //   location: 'Pune',
    //   area: '5000 sq.ft',
    //   description: 'Modern corporate office with collaborative spaces and premium finishes.',
    //   image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //   features: ['Workstations', 'Conference Room', 'Reception', 'Cafeteria']
    // },
    // {
    //   id: 11,
    //   category: 'office',
    //   title: 'Startup Office',
    //   type: 'Commercial',
    //   location: 'Mumbai',
    //   area: '2500 sq.ft',
    //   description: 'Creative office space for startups with flexible work areas.',
    //   image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //   features: ['Open Plan', 'Meeting Pods', 'Breakout Area', 'Creative Zone']
    // },

    // // Bathroom Images
    // {
    //   id: 12,
    //   category: 'bathroom',
    //   title: 'Luxury Bathroom',
    //   type: 'Residential',
    //   location: 'Pune',
    //   area: '120 sq.ft',
    //   description: 'Premium bathroom with luxurious fittings and spa-like amenities.',
    //   image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //   features: ['Rain Shower', 'Jacuzzi', 'Premium Tiles', 'Vanity Unit']
    // },

    // // Commercial Images
    // {
    //   id: 13,
    //   category: 'commercial',
    //   title: 'Restaurant Interiors',
    //   type: 'Commercial',
    //   location: 'Mumbai',
    //   area: '3000 sq.ft',
    //   description: 'Upscale restaurant with elegant dining area and bar counter.',
    //   image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //   features: ['Dining Area', 'Bar Counter', 'Kitchen', 'Private Dining']
    // },
    // {
    //   id: 14,
    //   category: 'commercial',
    //   title: 'Showroom Design',
    //   type: 'Commercial',
    //   location: 'Navi Mumbai',
    //   area: '4000 sq.ft',
    //   description: 'Modern showroom with display areas and customer lounge.',
    //   image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //   features: ['Display Units', 'Lighting', 'Customer Lounge', 'Cash Counter']
    // }
  ];

  const [activeSubImageIndex, setActiveSubImageIndex] = useState(0);
  // Filter images based on active filter
  const filteredImages = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  // Open modal with image details
  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setActiveSubImageIndex(0); // Reset to first sub-image
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Navigate to next sub-image WITHIN the current project
  const nextSubImage = (e) => {
    if (e) e.stopPropagation();
    if (selectedImage.projectImages && selectedImage.projectImages.length > 0) {
      const nextIdx = (activeSubImageIndex + 1) % selectedImage.projectImages.length;
      setActiveSubImageIndex(nextIdx);
    }
  };

  // Navigate to previous sub-image WITHIN the current project
  const prevSubImage = (e) => {
    if (e) e.stopPropagation();
    if (selectedImage.projectImages && selectedImage.projectImages.length > 0) {
      const prevIdx = (activeSubImageIndex - 1 + selectedImage.projectImages.length) % selectedImage.projectImages.length;
      setActiveSubImageIndex(prevIdx);
    }
  };
  //   // Navigate to next image
  //   const nextSubImage = (e) => {
  //   e.stopPropagation();
  //   const nextIdx = (activeSubImageIndex + 1) % selectedImage.projectImages.length;
  //   setActiveSubImageIndex(nextIdx);
  // };

  //   // Navigate to previous image
  //   const prevSubImage = (e) => {
  //   e.stopPropagation();
  //   const prevIdx = (activeSubImageIndex - 1 + selectedImage.projectImages.length) % selectedImage.projectImages.length;
  //   setActiveSubImageIndex(prevIdx);
  // };
  // Statistics data
  const stats = [
    { number: "500+", label: "Projects Completed", icon: faTrophy },
    { number: "1000+", label: "Happy Customers", icon: faHeart },
    { number: "5+", label: "Years Experience", icon: faCalendarAlt },
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
            src="src/assets/Elina_living/IMG_9984.JPG" 
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
              Years of <span className="text-highlight1">Excellence</span>
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

            {/* Navigation specifically for the project's internal images */}
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