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
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Gallery.css';

Modal.setAppElement('#root');

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSubImageIndex, setActiveSubImageIndex] = useState(0);
  const [showMoreAll, setShowMoreAll] = useState(false);

  const albumFilters = [
    { id: 'all', label: 'All Projects' },
    { id: 'amanora_neo_towers', label: 'Amanora Neo Towers' },
    { id: 'elina_living', label: 'Elina Living' },
    { id: 'kharghar', label: 'Kharghar' },
    { id: 'lodha_woods', label: 'Lodha Woods' },
    { id: 'majestic_signature_towers', label: 'Majestic Signature Towers' },
    { id: 'mankhurd', label: 'Mankhurd' },
    { id: 'mantra_monarch', label: 'Mantra Monarch' },
    { id: 'our_office', label: 'Our Office' }
  ];

  // Gallery Images Data
  const galleryImages = [
    // Mantra Monarch - 4 cards
    {
      id: 1,
      albumId: 'mantra_monarch',
      title: 'Mantra Monarch Living Room',
      type: 'Residential',
      location: 'Pune',
      area: '450 sq.ft',
      description: 'A stunning contemporary living room with custom furniture and elegant lighting design.',
      image: 'src/assets/Mantra Monarch/IMG_7872.JPG',
      projectImages: [
        'src/assets/Mantra Monarch/IMG_7872.JPG',
        'src/assets/Mantra Monarch/IMG_7874.JPG',
        'src/assets/Mantra Monarch/IMG_7875.JPG',
        'src/assets/Mantra Monarch/IMG_7876.JPG',
        'src/assets/Mantra Monarch/IMG_7877.JPG',
        'src/assets/Mantra Monarch/IMG_7878.JPG',
      ],
      features: ['Custom TV Unit', 'False Ceiling', 'Modern Lighting', 'Premium Furniture']
    },
    {
      id: 2,
      albumId: 'mantra_monarch',
      title: 'Mantra Monarch Bedroom',
      type: 'Residential',
      location: 'Pune',
      area: '280 sq.ft',
      description: 'Elegant master bedroom with custom wardrobe and ambient lighting.',
      image: 'src/assets/Mantra Monarch/IMG_7889.JPG',
      projectImages: [
        'src/assets/Mantra Monarch/IMG_7873.JPG',
        'src/assets/Mantra Monarch/IMG_7880.JPG',
        'src/assets/Mantra Monarch/IMG_7881.JPG',
        'src/assets/Mantra Monarch/IMG_7882.JPG',
        'src/assets/Mantra Monarch/IMG_7882.JPG',
        // 'src/assets/Mantra Monarch/IMG_7889.JPG',
      ],
      features: ['Custom Wardrobe', 'False Ceiling', 'Ambient Lighting', 'Premium Finishes']
    },
    {
      id: 3,
      albumId: 'mantra_monarch',
      title: 'Mantra Monarch Kitchen',
      type: 'Residential',
      location: 'Pune',
      area: '120 sq.ft',
      description: 'Modern modular kitchen with smart storage solutions.',
      image: 'src/assets/Mantra Monarch/IMG_7879.JPG',
      projectImages: [
        'src/assets/Mantra Monarch/IMG_7879.JPG',
        'src/assets/Mantra Monarch/IMG_7890.JPG',
        'src/assets/Mantra Monarch/IMG_7891.JPG',
        'src/assets/Mantra Monarch/IMG_7884.JPG',
      ],
      features: ['Modular Kitchen', 'Smart Storage', 'Granite Counter', 'Chimney Hood']
    },
    {
      id: 4,
      albumId: 'mantra_monarch',
      title: 'Mantra Monarch Bathroom',
      type: 'Residential',
      location: 'Pune',
      area: '80 sq.ft',
      description: 'Luxurious bathroom with modern fixtures and elegant tiles.',
      image: 'src/assets/Mantra Monarch/IMG_7886.JPG',
      projectImages: [
        'src/assets/Mantra Monarch/IMG_7886.JPG',
        'src/assets/Mantra Monarch/IMG_7885.JPG',
        'src/assets/Mantra Monarch/IMG_7887.JPG',
      ],
      features: ['Modern Fixtures', 'Premium Tiles', 'Glass Shower', 'Storage']
    },

    // Amanora Neo Towers - 4 cards
    {
      id: 5,
      albumId: 'amanora_neo_towers',
      title: 'Amanora Living Area',
      type: 'Residential',
      location: 'Mumbai',
      area: '380 sq.ft',
      description: 'Clean lines and minimal design create a peaceful living environment.',
      image: 'src/assets/Amanora_neo_towers/IMG_4023.jpg',
      features: ['Minimal Design', 'Smart Storage', 'Natural Lighting', 'Neutral Palette'],
      projectImages: [
        'src/assets/Amanora_neo_towers/IMG_4023.jpg',
        'src/assets/Amanora_neo_towers/IMG_4030.jpg',
        'src/assets/Amanora_neo_towers/IMG_4031.jpg',
        'src/assets/Amanora_neo_towers/IMG_8176.jpg',
      ],
    },

    {
      id: 6,
      albumId: 'amanora_neo_towers',
      title: 'Amanora Bedroom',
      type: 'Residential',
      location: 'Mumbai',
      area: '220 sq.ft',
      description: 'Cozy bedroom with custom furniture and warm lighting.',
      image: 'src/assets/Amanora_neo_towers/IMG_3999.jpg',
      features: ['Custom Furniture', 'Warm Lighting', 'False Ceiling', 'Storage'],
      projectImages: [
        'src/assets/Amanora_neo_towers/IMG_3974.jpg',
        'src/assets/Amanora_neo_towers/IMG_3975.jpg',
        'src/assets/Amanora_neo_towers/IMG_3999.jpg',
        // 'src/assets/Amanora_neo_towers/IMG_4003.jpg',
      ],
    },
    {
      id: 7,
      albumId: 'amanora_neo_towers',
      title: 'Amanora Dining Area',
      type: 'Residential',
      location: 'Mumbai',
      area: '180 sq.ft',
      description: 'Elegant dining space with modern furniture and lighting.',
      image: 'src/assets/Amanora_neo_towers/IMG_4020.jpg',
      features: ['Modern Furniture', 'Elegant Lighting', 'Wall Decor', 'Space Efficient'],
      projectImages: [
        'src/assets/Amanora_neo_towers/IMG_4020.jpg',
        'src/assets/Amanora_neo_towers/IMG_4030.jpg',
        'src/assets/Amanora_neo_towers/IMG_3980.jpg',
      ],
    },

    // Majestic Signature Towers - 4 cards
    {
      id: 8,
      albumId: 'majestic_signature_towers',
      title: 'Majestic Living Room',
      type: 'Residential',
      location: 'Navi Mumbai',
      area: '520 sq.ft',
      description: 'Elegant living area with bespoke furniture and artistic elements.',
      image: 'src/assets/Majestic_Signature_Towers/IMG_3979.jpg',
      features: ['Bespoke Furniture', 'Art Display', 'Accent Wall', 'Ambient Lighting'],
      projectImages: [
        // 'src/assets/Majestic_Signature_Towers/IMG_3979.jpg',
        'src/assets/Majestic_Signature_Towers/IMG_8175.jpg',
        'src/assets/Majestic_Signature_Towers/IMG_3981.jpg',
        'src/assets/Majestic_Signature_Towers/IMG_8177.jpg',
      ],
    },

    // Lodha Woods - 4 cards
    {
      id: 9,
      albumId: 'lodha_woods',
      title: 'Lodha Woods Kitchen',
      type: 'Residential',
      location: 'Kandivali',
      area: '180 sq.ft',
      description: 'Fully equipped modular kitchen with smart storage solutions and premium finishes.',
      image: 'src/assets/lodha_woods_kandivali/IMG_9465.jpg',
      features: ['Modular Cabinets', 'Granite Counter', 'Smart Storage', 'Chimney Hood'],
      projectImages: [
        'src/assets/lodha_woods_kandivali/IMG_9465.jpg',
        'src/assets/lodha_woods_kandivali/IMG_9469.jpg',
        'src/assets/lodha_woods_kandivali/IMG_9468.jpg',
        'src/assets/lodha_woods_kandivali/IMG_9466.jpg',
      ],
    },
    {
      id: 10,
      albumId: 'lodha_woods',
      title: 'Lodha Woods Living',
      type: 'Residential',
      location: 'Kandivali',
      area: '350 sq.ft',
      description: 'Spacious living area with modern furniture.',
      image: 'src/assets/lodha_woods_kandivali/IMG_2096.jpg',
      features: ['Modern Furniture', 'False Ceiling', 'Entertainment Unit', 'Lighting'],
      projectImages: [
        'src/assets/lodha_woods_kandivali/IMG_2056.jpg',
        'src/assets/lodha_woods_kandivali/IMG_3562.jpg',
        'src/assets/lodha_woods_kandivali/IMG_2094.jpg',
        'src/assets/lodha_woods_kandivali/IMG_2096.jpg',
        'src/assets/lodha_woods_kandivali/IMG_9487.jpg',
      ],
    },
    {
      id: 11,
      albumId: 'lodha_woods',
      title: 'Lodha Woods Bedroom',
      type: 'Residential',
      location: 'Kandivali',
      area: '220 sq.ft',
      description: 'Comfortable bedroom with custom storage.',
      image: 'src/assets/lodha_woods_kandivali/IMG_2436.jpg',
      features: ['Custom Storage', 'False Ceiling', 'Study Corner', 'Lighting'],
      projectImages: [
        'src/assets/lodha_woods_kandivali/IMG_2436.jpg',
        'src/assets/lodha_woods_kandivali/IMG_2460.jpg',
        'src/assets/lodha_woods_kandivali/IMG_2416.jpg',
        'src/assets/lodha_woods_kandivali/IMG_2461.jpg',
        'src/assets/lodha_woods_kandivali/IMG_2462.jpg',
      ],
    },


    // Mankhurd - 4 cards
    {
      id: 12,
      albumId: 'mankhurd',
      title: 'Mankhurd Kitchen',
      type: 'Residential',
      location: 'Mumbai',
      area: '220 sq.ft',
      description: 'State-of-the-art kitchen with island counter and modern appliances.',
      image: 'src/assets/Mankhurd/IMG_9274.PNG',
      features: ['Island Counter', 'Modern Appliances', 'Pull-out Drawers', 'Task Lighting'],
      projectImages: [
        'src/assets/Mankhurd/IMG_9274.PNG',
        'src/assets/Mankhurd/IMG_9275.PNG',
      ],
    },
    {
      id: 13,
      albumId: 'mankhurd',
      title: 'Mankhurd Living',
      type: 'Residential',
      location: 'Mumbai',
      area: '300 sq.ft',
      description: 'Modern living space with elegant furniture.',
      image: 'src/assets/Mankhurd/IMG_8851.PNG',
      features: ['Elegant Furniture', 'False Ceiling', 'TV Unit', 'Lighting'],
      projectImages: [
        'src/assets/Mankhurd/IMG_8851.PNG',
        'src/assets/Mankhurd/IMG_8853.PNG',
        'src/assets/Mankhurd/IMG_9299.PNG',
        'src/assets/Mankhurd/IMG_9413.PNG',
      ],
    },
    {
      id: 14,
      albumId: 'mankhurd',
      title: 'Mankhurd Bedroom',
      type: 'Residential',
      location: 'Mumbai',
      area: '250 sq.ft',
      description: 'Comfortable bedroom with ample storage.',
      image: 'src/assets/Mankhurd/IMG_8856.PNG',
      features: ['Ample Storage', 'False Ceiling', 'Study Table', 'Lighting'],
      projectImages: [
        'src/assets/Mankhurd/IMG_8762.PNG',
        'src/assets/Mankhurd/IMG_8763.PNG',
        'src/assets/Mankhurd/IMG_8856.PNG',
        'src/assets/Mankhurd/IMG_8858.PNG',
        'src/assets/Mankhurd/IMG_9394.PNG',
      ],
    },


    // Elina Living - 4 cards
    {
      id: 15,
      albumId: 'elina_living',
      title: 'Elina Living Kitchen',
      type: 'Residential',
      location: 'Navi Mumbai',
      area: '150 sq.ft',
      description: 'Space-efficient kitchen design with maximum storage and functionality.',
      image: 'src/assets/Elina_living/IMG_8126.JPG',
      features: ['Space Efficient', 'Corner Solutions', 'Wall Cabinets', 'Breakfast Counter'],
      projectImages: [
        'src/assets/Elina_living/IMG_8126.JPG',
        'src/assets/Elina_living/IMG_8127.JPG',
        'src/assets/Elina_living/IMG_8126.JPG',
        'src/assets/Elina_living/IMG_8127.JPG',
      ],
    },
    {
      id: 16,
      albumId: 'elina_living',
      title: 'Elina Living Living Room',
      type: 'Residential',
      location: 'Navi Mumbai',
      area: '280 sq.ft',
      description: 'Cozy living room with modern furniture.',
      image: 'src/assets/Elina_Living/IMG_9983.JPG',
      features: ['Modern Furniture', 'TV Unit', 'Lighting', 'Storage'],
      projectImages: [
        'src/assets/Elina_living/IMG_9983.JPG',
        'src/assets/Elina_living/IMG_9984.JPG',
        'src/assets/Elina_living/IMG_9985.JPG',
        'src/assets/Elina_living/IMG_9986.JPG',
      ],
    },
    {
      id: 17,
      albumId: 'elina_living',
      title: 'Elina Living Bedroom',
      type: 'Residential',
      location: 'Navi Mumbai',
      area: '200 sq.ft',
      description: 'Comfortable bedroom with custom wardrobe.',
      image: 'src/assets/Elina_living/IMG_9991.JPG',
      features: ['Custom Wardrobe', 'False Ceiling', 'Study Corner', 'Lighting'],
      projectImages: [
        'src/assets/Elina_living/IMG_9994.JPG',
        'src/assets/Elina_living/IMG_9996.JPG',
        'src/assets/Elina_living/IMG_9997.JPG',
        'src/assets/Elina_living/IMG_9993.JPG',
      ],
    },
    // 

    // Kharghar - 4 cards
    {
      id: 18,
      albumId: 'kharghar',
      title: 'Kharghar Master Bedroom',
      type: 'Residential',
      location: 'Kharghar',
      area: '300 sq.ft',
      description: 'Luxurious master bedroom with walk-in wardrobe and elegant décor.',
      image: 'src/assets/Kharghar/IMG_2541.JPG',
      features: ['Walk-in Wardrobe', 'False Ceiling', 'Study Corner', 'Dressing Area'],
      projectImages: [
        'src/assets/Kharghar/IMG_7900.PNG',
        'src/assets/Kharghar/IMG_7901.PNG',
        'src/assets/Kharghar/IMG_7902.PNG',
        'src/assets/Kharghar/IMG_7907.PNG',
        'src/assets/Kharghar/IMG_7908.PNG',
        'src/assets/Kharghar/IMG_2541.JPG',
      ],
    },
    {
      id: 19,
      albumId: 'kharghar',
      title: 'Kharghar Living Room',
      type: 'Residential',
      location: 'Kharghar',
      area: '350 sq.ft',
      description: 'Spacious living area with modern furniture.',
      image: 'src/assets/Kharghar/IMG_2540.JPG',
      features: ['Modern Furniture', 'False Ceiling', 'Entertainment Unit', 'Lighting'],
      projectImages: [
        'src/assets/Kharghar/IMG_2540.JPG',
        'src/assets/Kharghar/IMG_2542.JPG',
        'src/assets/Kharghar/IMG_2543.JPG',
        'src/assets/Kharghar/IMG_7903.PNG',
        'src/assets/Kharghar/IMG_7904.PNG',
        'src/assets/Kharghar/IMG_7905.PNG',
        'src/assets/Kharghar/IMG_8011.PNG',
        'src/assets/Kharghar/IMG_8045.JPG',
      ],
    },
    {
      id: 20,
      albumId: 'kharghar',
      title: 'Kharghar Kitchen',
      type: 'Residential',
      location: 'Kharghar',
      area: '180 sq.ft',
      description: 'Modern kitchen with modular design.',
      image: 'src/assets/Kharghar/IMG_2544.JPG',
      features: ['Modular Design', 'Smart Storage', 'Granite Counter', 'Appliances'],
      projectImages: [
        'src/assets/Kharghar/IMG_2544.JPG',
        // 'src/assets/Kharghar/IMG_2545.JPG',
      ],
    },
    {
      id: 21,
      albumId: 'kharghar',
      title: 'Kharghar Guest Bedroom',
      type: 'Residential',
      location: 'Kharghar',
      area: '220 sq.ft',
      description: 'Comfortable guest bedroom with storage.',
      image: 'src/assets/Kharghar/IMG_2541.JPG',
      features: ['Storage Solutions', 'False Ceiling', 'Lighting', 'Furniture'],
      projectImages: [
        'src/assets/Kharghar/IMG_2541.JPG',
        'src/assets/Kharghar/IMG_7900.PNG',
        'src/assets/Kharghar/IMG_7901.PNG',
        'src/assets/Kharghar/IMG_7902.PNG',
        'src/assets/Kharghar/IMG_7906.PNG',
        'src/assets/Kharghar/IMG_7907.PNG',
        'src/assets/Kharghar/IMG_7908.PNG',
        'src/assets/Kharghar/IMG_8025.JPG',
        'src/assets/Kharghar/IMG_8027.JPG',
        'src/assets/Kharghar/IMG_8028.JPG',
        'src/assets/Kharghar/IMG_8029.JPG',
        'src/assets/Kharghar/IMG_8030.JPG',
        'src/assets/Kharghar/IMG_8035.JPG',
        'src/assets/Kharghar/IMG_8037.JPG',
        'src/assets/Kharghar/IMG_8039.JPG',
        'src/assets/Kharghar/IMG_8041.JPG',
      ],
    },

    // Our Office - 4 cards
    {
      id: 22,
      albumId: 'our_office',
      title: 'Office Reception',
      type: 'Commercial',
      location: 'Mumbai',
      area: '200 sq.ft',
      description: 'Modern office reception with elegant design.',
      image: 'src/assets/Our_Office/IMG_6928.PNG',
      features: ['Modern Design', 'Reception Desk', 'Lighting', 'Branding'],
      projectImages: [
        'src/assets/Our_Office/IMG_6924.PNG',
        // 'src/assets/Our_Office/IMG_6925.PNG',
      ],
    },
    {
      id: 23,
      albumId: 'our_office',
      title: 'Workstation Area',
      type: 'Commercial',
      location: 'Mumbai',
      area: '400 sq.ft',
      description: 'Efficient workstation area for team collaboration.',
      image: 'src/assets/Our_Office/IMG_6926.PNG',
      features: ['Ergonomic Chairs', 'Workstations', 'Storage', 'Lighting'],
      projectImages: [
        'src/assets/Our_Office/IMG_6926.PNG',
        // 'src/assets/Our_Office/IMG_6927.PNG',
      ],
    },
    {
      id: 24,
      albumId: 'our_office',
      title: 'Meeting Room',
      type: 'Commercial',
      location: 'Mumbai',
      area: '180 sq.ft',
      description: 'Professional meeting room for client discussions.',
      image: 'src/assets/Our_Office/IMG_6928.PNG',
      features: ['Conference Table', 'AV System', 'Whiteboard', 'Lighting'],
      projectImages: [
        'src/assets/Our_Office/IMG_6928.PNG',
        // 'src/assets/Our_Office/IMG_6929.PNG',
      ],
    },
    {
      id: 25,
      albumId: 'our_office',
      title: 'Manager Cabin',
      type: 'Commercial',
      location: 'Mumbai',
      area: '150 sq.ft',
      description: 'Private cabin for managerial work.',
      image: 'src/assets/Our_Office/IMG_6930.PNG',
      features: ['Private Space', 'Storage', 'Work Desk', 'Lighting'],
      projectImages: [
        'src/assets/Our_Office/IMG_6930.PNG',
        // 'src/assets/Our_Office/IMG_6924.PNG',
      ],
    },
  ];

  // Filter images based on active filter
  const filteredImages = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.albumId === activeFilter);

  // For "All Projects" show only 8 initially, then all when showMoreAll is true
  const displayedImages = activeFilter === 'all'
    ? (showMoreAll ? filteredImages : filteredImages.slice(0, 8))
    : filteredImages.slice(0, 4); // For other filters, show only 4

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

  const stats = [
    { number: "500+", label: "Projects Completed", icon: faTrophy },
    { number: "1000+", label: "Happy Customers", icon: faHeart },
    { number: "5+", label: "Years Experience", icon: faCalendarAlt },
    { number: "50+", label: "Expert Team Members", icon: faUsers }
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
      comment: "Positive: Professionalism, Punctuality, Quality, Responsiveness, Value A special thanks to I’d Sachin v . I approached srvinteriors towards the end of my own house's interior work. There were many mistakes and mis judgements done by my old contractor. We approached Mr. Sachin and he suggested few corrections. He is a knowledgeable, reliable and authentic person upon whom you can have your trust and faith. Now my interior work is at final stage and it's looking really good.Once again thank you for your support and generosity."
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
                Showing <span className="count">{displayedImages.length}</span> {activeFilter === 'all' ? 'projects' : 'images'}
                {activeFilter !== 'all' && ` in ${albumFilters.find(f => f.id === activeFilter)?.label}`}
                {activeFilter === 'all' && !showMoreAll && ' (8 of 32)'}
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

                {/* <div className="project-description">
                  <h3>Project Description</h3>
                  <p>{selectedImage.description}</p>
                </div> */}

                {/* <div className="project-features">
                  <h3>Key Features</h3>
                  <div className="features-grid">
                    {selectedImage.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div> */}

                <div className="project-actions">
                  <button className="action-btn primary" onClick={() => window.location.href = '/contact'}>
                    Start Similar Project <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                  {/* <button className="action-btn secondary" onClick={() => window.open('https://wa.me/918796932990', '_blank')}>
                    <FontAwesomeIcon icon={faStar} /> Get Quote
                  </button> */}
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