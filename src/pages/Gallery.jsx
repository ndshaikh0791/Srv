import React, { useState } from "react";
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


const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showMoreAll, setShowMoreAll] = useState(false);
  const [expandedTestimonial, setExpandedTestimonial] = useState(null);




  const albumFilters = [
    { id: 'all', label: 'All Projects' },
    { id: 'mantra_monarch', label: 'Mantra Monarch' },
    { id: 'amanora_neo_towers', label: 'Amanora Neo Towers' },
    { id: 'majestic_signature', label: 'Majestic Signature' },
    { id: 'mankhurd', label: 'Mankhurd' },
    { id: 'kharghar', label: 'Kharghar' },
    { id: 'euro_school', label: 'Euro School' },
    { id: 'lodha_woods', label: 'Lodha Woods' },
    { id: 'elina_living', label: 'Elina Living' },
    { id: 'kothrud', label: 'Kothrud, Pune' },
    { id: 'karjat_builder', label: 'Builder Sample' },
    { id: 'designing', label: 'Designing' },
    { id: 'our_office', label: 'Our Office' },
    { id: 'pirangut_bunglow', label: 'Pirangut Bunglow' },
    { id: 'restaurant_design', label: 'Restaurant Design' }
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
      // area: '450 sq.ft',
      description: 'Contemporary living room with custom furniture.',
      image: '/assets/Mantra Monarch/IMG_7874.JPG',
      projectImages: [
        '/assets/Mantra Monarch/IMG_7872.JPG',
        '/assets/Mantra Monarch/IMG_7873.JPG',
        '/assets/Mantra Monarch/IMG_7874.JPG',
        '/assets/Mantra Monarch/IMG_7875.JPG',
        '/assets/Mantra Monarch/IMG_7876.JPG',
        '/assets/Mantra Monarch/IMG_7877.JPG',
        '/assets/Mantra Monarch/IMG_7878.JPG',
        '/assets/Mantra Monarch/IMG_7879.JPG',
        '/assets/Mantra Monarch/IMG_7880.JPG',
        '/assets/Mantra Monarch/IMG_7882.JPG',
        '/assets/Mantra Monarch/IMG_7883.JPG',
        '/assets/Mantra Monarch/IMG_7884.JPG',
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
      // area: '380 sq.ft',
      description: 'Minimal design living area.',
      image: '/assets/Amanora_neo_towers/IMG_3974.jpg',
      projectImages: [
        '/assets/Amanora_neo_towers/IMG_3975.jpg',
        '/assets/Amanora_neo_towers/IMG_3978.jpg',
        '/assets/Amanora_neo_towers/IMG_3979.jpg',
        '/assets/Amanora_neo_towers/IMG_3980.jpg',
        '/assets/Amanora_neo_towers/IMG_3981.jpg',
        '/assets/Amanora_neo_towers/IMG_3982.jpg',
        '/assets/Amanora_neo_towers/IMG_3995.jpg',
        '/assets/Amanora_neo_towers/IMG_3997.jpg',
        '/assets/Amanora_neo_towers/IMG_3998.jpg',
        '/assets/Amanora_neo_towers/IMG_3999.jpg',
        '/assets/Amanora_neo_towers/IMG_4002.jpg',
        '/assets/Amanora_neo_towers/IMG_4003.jpg',
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
      // area: '520 sq.ft',
      description: 'Elegant living area.',
      image: '/assets/Majestic_Signature_Towers/IMG_2072.jpg',
      projectImages: [
        '/assets/Majestic_Signature_Towers/IMG_2090.jpg',
        '/assets/Majestic_Signature_Towers/IMG_2093.jpg',
        '/assets/Majestic_Signature_Towers/IMG_4579.jpg',
        '/assets/Majestic_Signature_Towers/IMG_9468.jpg',
        '/assets/Majestic_Signature_Towers/IMG_2416.jpg',
        '/assets/Majestic_Signature_Towers/IMG_9469.jpg',
        '/assets/Majestic_Signature_Towers/IMG_9487.jpg',
        '/assets/Majestic_Signature_Towers/IMG_2454.jpg',
        '/assets/Majestic_Signature_Towers/IMG_2456.jpg',
        '/assets/Majestic_Signature_Towers/IMG_2457.jpg',
        '/assets/Majestic_Signature_Towers/IMG_3562.jpg',
        '/assets/Majestic_Signature_Towers/IMG_9465.jpg',
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
      // area: '220 sq.ft',
      description: 'Modern kitchen design.',
      image: '/assets/Mankhurd/IMG_0116.JPG',
      projectImages: [
        '/assets/Mankhurd/IMG_0117.JPG',
        '/assets/Mankhurd/IMG_9996.JPG',
        '/assets/Mankhurd/IMG_9983.JPG',
        '/assets/Mankhurd/IMG_9984.JPG',
        '/assets/Mankhurd/IMG_9985.JPG',
        '/assets/Mankhurd/IMG_9986.JPG',
        '/assets/Mankhurd/IMG_9990.JPG',
        '/assets/Mankhurd/IMG_9991.JPG',
        '/assets/Mankhurd/IMG_9992.JPG',
        '/assets/Mankhurd/IMG_9994.JPG',
        '/assets/Mankhurd/IMG_9995.JPG',
        '/assets/Mankhurd/IMG_0118.JPG',
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
      // area: '300 sq.ft',
      description: 'Luxurious master bedroom.',
      image: '/assets/Kharghar/IMG_7900.PNG',
      projectImages: [
        '/assets/Kharghar/IMG_7901.PNG',
        '/assets/Kharghar/IMG_7902.PNG',
        '/assets/Kharghar/IMG_7903.PNG',
        '/assets/Kharghar/IMG_7904.PNG',
        '/assets/Kharghar/IMG_7905.PNG',
        '/assets/Kharghar/IMG_7906.PNG',
        '/assets/Kharghar/IMG_7907.PNG',
        '/assets/Kharghar/IMG_7908.PNG',
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
      // area: '500 sq.ft',
      description: 'Educational space design.',
      image: '/assets/Euro_School_Classroom/IMG_8093.JPG',
      projectImages: [
        '/assets/Euro_School_Classroom/IMG_8094.JPG',
        '/assets/Euro_School_Classroom/IMG_8095.JPG',
        '/assets/Euro_School_Classroom/IMG_8096.JPG',
        '/assets/Euro_School_Classroom/IMG_8097.JPG',
        '/assets/Euro_School_Classroom/IMG_8101.JPG',
        '/assets/Euro_School_Classroom/IMG_8102.JPG',
        '/assets/Euro_School_Classroom/IMG_8103.JPG',
        '/assets/Euro_School_Classroom/IMG_8105.JPG',
        '/assets/Euro_School_Classroom/IMG_8106.JPG',
        '/assets/Euro_School_Classroom/IMG_8109.JPG',
        '/assets/Euro_School_Classroom/IMG_8111.JPG',
        '/assets/Euro_School_Classroom/IMG_8112.JPG',
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
      // area: '180 sq.ft',
      description: 'Modular kitchen design.',
      image: '/assets/lodha_woods_kandivali/IMG_2416.jpg',
      projectImages: [
        '/assets/lodha_woods_kandivali/IMG_2096.jpg',
        '/assets/lodha_woods_kandivali/IMG_2056.jpg',
        '/assets/lodha_woods_kandivali/IMG_2416.jpg',
        '/assets/lodha_woods_kandivali/IMG_2436.jpg',
        '/assets/lodha_woods_kandivali/IMG_2446.jpg',
        '/assets/lodha_woods_kandivali/IMG_2460.jpg',
        '/assets/lodha_woods_kandivali/IMG_2461.jpg',
        '/assets/lodha_woods_kandivali/IMG_2462.jpg',
        '/assets/lodha_woods_kandivali/IMG_2463.jpg',
        '/assets/lodha_woods_kandivali/IMG_4578.jpg',
        '/assets/lodha_woods_kandivali/IMG_9465.jpg',
        '/assets/lodha_woods_kandivali/IMG_9471.jpg',
      ],
      features: ['Modular Cabinets', 'Granite Counter']
    },

    // Elina Living, NIBM - 示例图片
    {
      id: 8,
      albumId: 'elina_living',
      title: 'Elina Living ',
      type: 'Residential',
      location: 'NIBM, Pune',
      // area: '150 sq.ft',
      description: 'Space-efficient kitchen.',
      image: '/assets/Elina_living/IMG_8759.PNG',
      projectImages: [
        '/assets/Elina_living/IMG_8760.PNG',
        '/assets/Elina_living/IMG_8762.PNG',
        '/assets/Elina_living/IMG_8763.PNG',
        '/assets/Elina_living/IMG_8851.PNG',
        '/assets/Elina_living/IMG_8855.PNG',
        '/assets/Elina_living/IMG_8857.PNG',
        '/assets/Elina_living/IMG_8858.PNG',
        '/assets/Elina_living/IMG_8861.PNG',
        '/assets/Elina_living/IMG_9275.PNG',
        '/assets/Elina_living/IMG_9276.PNG',
        '/assets/Elina_living/IMG_9414.PNG',
        '/assets/Elina_living/IMG_9417.PNG',
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
      // area: '600 sq.ft',
      description: 'Complete home interior.',
      image: '/assets/Kothrud_pune/Img1.jpeg',
      projectImages: [
        '/assets/Kothrud_pune/Img2.jpeg',
        '/assets/Kothrud_pune/Img3.jpeg',
        '/assets/Kothrud_pune/Img4.jpeg',
        '/assets/Kothrud_pune/Img5.jpeg',
        '/assets/Kothrud_pune/Img6.jpeg',
        '/assets/Kothrud_pune/Img7.jpeg',
        '/assets/Kothrud_pune/Img8.jpeg',
        '/assets/Kothrud_pune/Img9.jpeg',
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
      // area: '800 sq.ft',
      description: 'Model apartment design.',
      image: '/assets/Builder_Sample_Katraj/IMG_0170.PNG',
      projectImages: [
        '/assets/Builder_Sample_Katraj/IMG_0171.PNG',
        '/assets/Builder_Sample_Katraj/IMG_0172.PNG',
        '/assets/Builder_Sample_Katraj/IMG_0173.PNG',
        '/assets/Builder_Sample_Katraj/IMG_0174.PNG',
        '/assets/Builder_Sample_Katraj/IMG_0175.PNG',
        '/assets/Builder_Sample_Katraj/IMG_0176.PNG',
        '/assets/Builder_Sample_Katraj/IMG_0170.PNG',
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
      // area: 'Various',
      description: 'Creative design concepts.',
      image: '/assets/Designing/IMG_0271.JPG',
      projectImages: [
        '/assets/Designing/IMG_0273.JPG',
        '/assets/Designing/IMG_0274.JPG',
        '/assets/Designing/IMG_0275.JPG',
        '/assets/Designing/IMG_0276.JPG',
        '/assets/Designing/IMG_0277.JPG',
        '/assets/Designing/IMG_0278.JPG',
        '/assets/Designing/IMG_0279.JPG',
        '/assets/Designing/IMG_0271.JPG',
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
      // area: '200 sq.ft',
      description: 'Professional office space.',
      image: '/assets/Our_Office/IMG_6924.PNG',
      projectImages: [
        '/assets/Our_Office/IMG_6925.PNG',
        '/assets/Our_Office/IMG_6926.PNG',
        '/assets/Our_Office/IMG_6927.PNG',
        '/assets/Our_Office/IMG_6928.PNG',
        '/assets/Our_Office/IMG_6929.PNG',
        '/assets/Our_Office/IMG_6930.PNG',
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
      // area: '1200 sq.ft',
      description: 'Premium bunglow with luxury finishes.',
      image: '/assets/Pirangut_bunglow/IMG_7913.JPG',
      projectImages: [
        '/assets/Pirangut_bunglow/IMG_7915.JPG',
        '/assets/Pirangut_bunglow/IMG_7931.JPG',
        '/assets/Pirangut_bunglow/IMG_7917.JPG',
        '/assets/Pirangut_bunglow/IMG_7918.JPG',
        '/assets/Pirangut_bunglow/IMG_7919.JPG',
        '/assets/Pirangut_bunglow/IMG_7921.JPG',
        '/assets/Pirangut_bunglow/IMG_7922.JPG',
        '/assets/Pirangut_bunglow/IMG_7923.JPG',
        '/assets/Pirangut_bunglow/IMG_7924.JPG',
        '/assets/Pirangut_bunglow/IMG_7925.JPG',
        '/assets/Pirangut_bunglow/IMG_7929.JPG',
        '/assets/Pirangut_bunglow/IMG_7927.JPG',
        '/assets/Pirangut_bunglow/IMG_7928.JPG',
      ],
      features: ['Premium Finishes', 'Luxury Design', 'Custom Woodwork', 'Smart Home']
    },
    {
      id: 14,
      albumId: 'restaurant_design',
      title: 'Restaurant Design ',
      type: 'Commercial',
      location: 'Restaurant',
      // area: '1200 sq.ft',
      description: 'Premium Restaurent with luxury finishes.',
      image: '/assets/restaurant/Img1.jpeg',
      projectImages: [
        '/assets/restaurant/Img2.jpeg',
        '/assets/restaurant/Img3.jpeg',
        '/assets/restaurant/Img4.jpeg',
        '/assets/restaurant/Img5.jpeg',
        '/assets/restaurant/Img1.jpeg',
      ],
      features: ['Premium Finishes', 'Luxury Design', 'Custom Woodwork', 'Smart Home']
    },
  ];

  // Filter images based on active filter
  const filteredImages = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.albumId === activeFilter);

  // For "All Projects" show only 8 initially, then all when showMoreAll is true
  let displayedImages = [];

  if (activeFilter === 'all') {
    displayedImages = showMoreAll
      ? galleryImages
      : galleryImages.slice(0, 8);
  } else {
    const project = galleryImages.find(
      (img) => img.albumId === activeFilter
    );

    // When a specific category is selected, we show individual photos, 
    // so we don't need the "Project Modal" here.
    displayedImages = project
      ? project.projectImages.map((img, index) => ({
        id: index,
        image: img,
        // No title or type here because these are sub-images
      }))
      : [];
  }




  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSubImageIndex, setActiveSubImageIndex] = useState(0);

  // Close modal handler
  const closeProjectModal = () => {
    setSelectedProject(null);
    setActiveSubImageIndex(0);
  };

  // Navigation for modal images
  const nextSubImage = (e) => {
    e.stopPropagation();
    const images = selectedProject.projectImages;
    setActiveSubImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevSubImage = (e) => {
    e.stopPropagation();
    const images = selectedProject.projectImages;
    setActiveSubImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setShowMoreAll(false);

    setTimeout(() => {
      document
        .querySelector('.gallery-grid-section')
        ?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
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
            src="/assets/Designing/IMG_0275.JPG"
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
                key={index}
                className="gallery-item"
                // Change: Ensure we only trigger the modal when in "all" view
                onClick={() => {
                  if (activeFilter === 'all') {
                    setSelectedProject(image);
                    setActiveSubImageIndex(0); // Reset to first image
                  }
                }}
                style={{ cursor: activeFilter === 'all' ? 'pointer' : 'default' }}
              >
                <div className="image-container">
                  <img src={image.image} alt={image.title} loading="lazy" />

                  {activeFilter === 'all' && (
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <span className="project-type">{image.type}</span>
                        <h3 className="project-title">{image.title}</h3>
                        {/* Change: Added type="button" to prevent any form submission issues */}
                        <button type="button" className="view-project-btn">
                          View Gallery <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>
                  )}
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
              <button className="btn-primary" onClick={() => {window.location.href = '/contact'; window.scrollTo(0, 0);}}>
                Start Your Project <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <button className="btn-outline" onClick={() => window.open('https://wa.me/918796932990', '_blank')}>
                <FontAwesomeIcon icon={faStar} /> Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Project Image Modal */}
      {selectedProject && (
  <div className="project-modal-overlay" onClick={closeProjectModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      
      {/* Close button inside modal-content so it stays on top of the white background */}
      <button className="close-btn" onClick={closeProjectModal}>
        <FontAwesomeIcon icon={faTimes} />
      </button>

      <div className="modal-body">
        {/* Left Side: Image */}
        <div className="modal-image">
          <div className="modal-nav">
             <button className="nav-btn" onClick={prevSubImage}><FontAwesomeIcon icon={faChevronLeft} /></button>
             <button className="nav-btn" onClick={nextSubImage}><FontAwesomeIcon icon={faChevronRight} /></button>
          </div>
          <img 
            src={selectedProject.projectImages[activeSubImageIndex]} 
            alt={selectedProject.title} 
          />
        </div>

        {/* Right Side: Details */}
        <div className="modal-info">
          <span className="project-badge">{selectedProject.type.toUpperCase()}</span>
          <h2 className="modal-title" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            {selectedProject.title}
          </h2>

          <div className="project-details-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <p style={{ color: '#888', fontSize: '0.8rem', marginBottom: '5px' }}>Project Type</p>
              <strong>{selectedProject.type}</strong>
            </div>
            <div>
              <p style={{ color: '#888', fontSize: '0.8rem', marginBottom: '5px' }}>Location</p>
              <strong>{selectedProject.location}</strong>
            </div>
            <div>
              <p style={{ color: '#888', fontSize: '0.8rem', marginBottom: '5px' }}>Area</p>
              <strong>{selectedProject.area || 'N/A'}</strong>
            </div>
            <div>
              <p style={{ color: '#888', fontSize: '0.8rem', marginBottom: '5px' }}>Status</p>
              <strong style={{ color: '#2ecc71' }}>Completed</strong>
            </div>
          </div>

          <button className="btn-primary" onClick={() => window.location.href = '/contact'} style={{ marginTop: '2rem', borderRadius: '50px' }}>
            START SIMILAR PROJECT <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '10px' }} />
          </button>
        </div>
      </div>
    </div>
  </div>
)}


    </div>
  );
};


export default Gallery;