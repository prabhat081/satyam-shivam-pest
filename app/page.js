export default function Home() {
  return (
    <>
      {/* Preloader Start */}
      {/* <div className="preloader">
        <div className="loading-container">
          <div className="loading" />
          <div id="loading-icon">
            <img src="images/loader.svg" alt="" />
          </div>
        </div>
      </div> */}
      {/* Preloader End */}
      {/* Header Start */}
      <header className="main-header">
        <div className="header-sticky bg-section">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              {/* Logo Start */}
              <a className="navbar-brand" href="./">
                <img src="images/logo.png" alt="Logo" width={200} className="rounded" />
              </a>
              {/* Logo End */}
              {/* Main Menu Start */}
              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item submenu">
                      <a className="nav-link" href="./">
                        Home
                      </a>
                      <ul>
                        <li className="nav-item">
                          <a className="nav-link" href="index.html">
                            Home - Version 1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="index-2.html">
                            Home - Version 2
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="index-3.html">
                            Home - Version 3
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="services.html">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="blog.html">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item submenu">
                      <a className="nav-link" href="#">
                        Pages
                      </a>
                      <ul>
                        <li className="nav-item">
                          <a className="nav-link" href="service-single.html">
                            Service Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="blog-single.html">
                            Blog Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="projects.html">
                            Projects
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="project-single.html">
                            Project Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="team.html">
                            Our Team
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="team-single.html">
                            Team Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="pricing.html">
                            Pricing Plan
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="testimonials.html">
                            Testimonials
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="image-gallery.html">
                            Image Gallery
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="video-gallery.html">
                            Video Gallery
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="faqs.html">
                            FAQs
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="404.html">
                            404
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Header Btn Start */}
                <div className="header-btn">
                  <a href="contact.html" className="btn-default btn-highlighted">
                    Start Free Trial
                  </a>
                </div>
                {/* Header Btn End */}
              </div>
              {/* Main Menu End */}
              <div className="navbar-toggle" />
            </div>
          </nav>
          <div className="responsive-menu" />
        </div>
      </header>
      {/* Header End */}
      {/* Hero Section Start */}
      <div className="hero bg-section dark-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Hero Content Start */}
              <div className="hero-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">
                    Trusted Pest Professionals
                  </span>
                  <h1 className="text-anime-style-3" data-cursor="-opaque">
                    Protecting homes with expert pest control
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Our trained specialists uses advanced, eco-friendly solutions to
                    tackle everything from termites and rodents to mosquitoes and
                    cockroaches.
                  </p>
                </div>
                {/* Section Title End */}
                {/* Hero Item List Start */}
                <div
                  className="hero-body-item-list wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  {/* Hero Info Item Start */}
                  <div className="hero-body-item">
                    <div className="icon-box">
                      <img src="images/icon-hero-body-item-1.svg" alt="" />
                    </div>
                    <div className="hero-body-item-content">
                      <h2>Safe &amp; Eco-Friendly Treatments</h2>
                    </div>
                  </div>
                  {/* Hero Info Item End */}
                  {/* Hero Info Item Start */}
                  <div className="hero-body-item">
                    <div className="icon-box">
                      <img src="images/icon-hero-body-item-2.svg" alt="" />
                    </div>
                    <div className="hero-body-item-content">
                      <h2>Safe &amp; Eco-Friendly Treatments</h2>
                    </div>
                  </div>
                  {/* Hero Info Item End */}
                </div>
                {/* Hero Item List End */}
                {/* Hero Content Footer Start */}
                <div
                  className="hero-content-footer wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  {/* Hero Button Start */}
                  <div className="hero-btn">
                    <a href="contact.html" className="btn-default btn-highlighted">
                      Get Pest Free Today
                    </a>
                  </div>
                  {/* Hero Button End */}
                  {/* Video Play Button Start */}
                  <div className="video-play-button">
                    <a
                      href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                      className="popup-video"
                      data-cursor-text="Play"
                    >
                      <i className="fa-solid fa-play" />
                    </a>
                    <p>Watch Video</p>
                  </div>
                  {/* Video Play Button End */}
                </div>
                {/* Hero Content Footer End */}
              </div>
              {/* Hero Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}
      {/* Our Partner Slider Start */}
      <div className="our-partner-slider bg-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              {/* Partner Slider Box Start */}
              <div className="partner-slider-box">
                {/* Partner Slider Title Start */}
                <div className="partner-slider-title">
                  <h3>
                    Your trusted partner for a healthier, safer, and pest-free
                    living environment.
                  </h3>
                </div>
                {/* Partner Slider Title End */}
                {/* Partner Logo Slider Start */}
                <div className="partner-logo-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      {/* Partner Logo Start */}
                      <div className="swiper-slide">
                        <div className="partner-logo">
                          <img src="images/icon-partner-logo-1.svg" alt="" />
                        </div>
                      </div>
                      {/* Partner Logo End */}
                      {/* Partner Logo Start */}
                      <div className="swiper-slide">
                        <div className="partner-logo">
                          <img src="images/icon-partner-logo-2.svg" alt="" />
                        </div>
                      </div>
                      {/* Partner Logo End */}
                      {/* Partner Logo Start */}
                      <div className="swiper-slide">
                        <div className="partner-logo">
                          <img src="images/icon-partner-logo-3.svg" alt="" />
                        </div>
                      </div>
                      {/* Partner Logo End */}
                      {/* Partner Logo Start */}
                      <div className="swiper-slide">
                        <div className="partner-logo">
                          <img src="images/icon-partner-logo-4.svg" alt="" />
                        </div>
                      </div>
                      {/* Partner Logo End */}
                      {/* Partner Logo Start */}
                      <div className="swiper-slide">
                        <div className="partner-logo">
                          <img src="images/icon-partner-logo-1.svg" alt="" />
                        </div>
                      </div>
                      {/* Partner Logo End */}
                      {/* Partner Logo Start */}
                      <div className="swiper-slide">
                        <div className="partner-logo">
                          <img src="images/icon-partner-logo-2.svg" alt="" />
                        </div>
                      </div>
                      {/* Partner Logo End */}
                      {/* Partner Logo Start */}
                      <div className="swiper-slide">
                        <div className="partner-logo">
                          <img src="images/icon-partner-logo-3.svg" alt="" />
                        </div>
                      </div>
                      {/* Partner Logo End */}
                      {/* Partner Logo Start */}
                      <div className="swiper-slide">
                        <div className="partner-logo">
                          <img src="images/icon-partner-logo-4.svg" alt="" />
                        </div>
                      </div>
                      {/* Partner Logo End */}
                    </div>
                  </div>
                </div>
                {/* Partner Logo Slider End */}
              </div>
              {/* Partner Slider Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Partner Slider End */}
      {/* About Us Section Start */}
      <div className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              {/* About Us Image Box Start */}
              <div className="about-us-image-box">
                {/* About Us Image Start */}
                <div className="about-us-image image-1">
                  <figure className="image-anime reveal">
                    <img src="images/about-us-image-1.jpg" alt="" />
                  </figure>
                </div>
                {/* About Us Image End */}
                {/* About Us Image Start */}
                <div className="about-us-image image-2">
                  <figure className="image-anime reveal">
                    <img src="images/about-us-image-2.jpg" alt="" />
                  </figure>
                </div>
                {/* About Us Image End */}
              </div>
              {/* About Us Image Box End */}
            </div>
            <div className="col-xl-6">
              {/* About Us Content Start */}
              <div className="about-us-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">About Us</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Dedicated to protecting your home from pests
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Dedicated to protecting your home from pests Our mission is to
                    provide comprehensive and reliable pest control solutions that
                    ensure the safety and comfort of your home.
                  </p>
                </div>
                {/* Section Title End */}
                {/* About Us Body Start */}
                <div className="about-us-body-box">
                  {/* About Counter Box Start */}
                  <div
                    className="about-counter-box wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="about-counter-image">
                      <figure className="image-anime">
                        <img src="images/about-counter-image.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="about-counter-box-content">
                      <h2>
                        <span className="counter">25</span>+
                      </h2>
                      <p>
                        Providing expert pest control solutions for over a decade.
                      </p>
                    </div>
                  </div>
                  {/* About Counter Box End */}
                  {/* About Us Info Box Start */}
                  <div
                    className="about-us-info-box wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="about-us-info-content">
                      <p>
                        Dedicated to protecting your home from pests - Our mission
                        is to provide comprehensive.
                      </p>
                      <ul>
                        <li>Certified &amp; Experienced Technicians</li>
                        <li>Advanced Detection &amp; Removal Methods</li>
                        <li>Transparent Pricing &amp; No Hidden Costs</li>
                      </ul>
                    </div>
                    <div className="about-us-info-btn">
                      <a href="about.html" className="btn-default">
                        Learn More About
                      </a>
                    </div>
                  </div>
                  {/* About Us Info Box End */}
                </div>
                {/* About Us Body End */}
              </div>
              {/* About Us Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section Start */}
      {/* Our Services Section Start */}
      <div className="our-services bg-section">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              {/* Section Title Start */}
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Our Services</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Safe and reliable pest control services solutions
                </h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp">
                <div className="service-item-header">
                  <div className="service-item-image">
                    <a href="service-single.html" data-cursor-text="View">
                      <figure className="image-anime">
                        <img src="images/service-1.jpg" alt="" />
                      </figure>
                    </a>
                  </div>
                  <div className="icon-box">
                    <img src="images/icon-service-1.svg" alt="" />
                  </div>
                </div>
                <div className="service-item-body">
                  <div className="service-item-content">
                    <h2>
                      <a href="service-single.html">Residential Pest Control</a>
                    </h2>
                    <p>Our residential solutions common household pests.</p>
                  </div>
                  <div className="service-item-btn">
                    <a href="service-single.html" className="readmore-btn">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              {/* Service Item End */}
            </div>
            <div className="col-xl-3 col-md-6">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="service-item-header">
                  <div className="service-item-image">
                    <a href="service-single.html" data-cursor-text="View">
                      <figure className="image-anime">
                        <img src="images/service-2.jpg" alt="" />
                      </figure>
                    </a>
                  </div>
                  <div className="icon-box">
                    <img src="images/icon-service-2.svg" alt="" />
                  </div>
                </div>
                <div className="service-item-body">
                  <div className="service-item-content">
                    <h2>
                      <a href="service-single.html">Bed Bug Treatment</a>
                    </h2>
                    <p>Our residential solutions common household pests.</p>
                  </div>
                  <div className="service-item-btn">
                    <a href="service-single.html" className="readmore-btn">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              {/* Service Item End */}
            </div>
            <div className="col-xl-3 col-md-6">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="service-item-header">
                  <div className="service-item-image">
                    <a href="service-single.html" data-cursor-text="View">
                      <figure className="image-anime">
                        <img src="images/service-3.jpg" alt="" />
                      </figure>
                    </a>
                  </div>
                  <div className="icon-box">
                    <img src="images/icon-service-3.svg" alt="" />
                  </div>
                </div>
                <div className="service-item-body">
                  <div className="service-item-content">
                    <h2>
                      <a href="service-single.html">Cockroach &amp; Ant Control</a>
                    </h2>
                    <p>Our residential solutions common household pests.</p>
                  </div>
                  <div className="service-item-btn">
                    <a href="service-single.html" className="readmore-btn">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              {/* Service Item End */}
            </div>
            <div className="col-xl-3 col-md-6">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="service-item-header">
                  <div className="service-item-image">
                    <a href="service-single.html" data-cursor-text="View">
                      <figure className="image-anime">
                        <img src="images/service-4.jpg" alt="" />
                      </figure>
                    </a>
                  </div>
                  <div className="icon-box">
                    <img src="images/icon-service-4.svg" alt="" />
                  </div>
                </div>
                <div className="service-item-body">
                  <div className="service-item-content">
                    <h2>
                      <a href="service-single.html">Termite Control</a>
                    </h2>
                    <p>Our residential solutions common household pests.</p>
                  </div>
                  <div className="service-item-btn">
                    <a href="service-single.html" className="readmore-btn">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              {/* Service Item End */}
            </div>
            <div className="col-lg-12">
              {/* Section Footer Text Start */}
              <div
                className="section-footer-text section-satisfy-img wow fadeInUp"
                data-wow-delay="0.4s"
              >
                {/* Satisfy Client Images Start */}
                <div className="satisfy-client-images">
                  <div className="satisfy-client-image">
                    <figure className="image-anime">
                      <img src="images/author-1.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="satisfy-client-image add-more">
                    <img src="images/icon-phone-primary.svg" alt="" />
                  </div>
                </div>
                {/* Satisfy Client Images End */}
                <p>
                  Advanced pest control solutions for safe, clean, and protected
                  spaces - <a href="services.html">View All Services</a>
                </p>
                <ul>
                  <li>
                    <span className="counter">4.9</span>/5
                  </li>
                  <li>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </li>
                  <li>Over 4200 Reviews</li>
                </ul>
              </div>
              {/* Section Footer Text End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Services Section End */}
      {/* Why Choose Us Section Start */}
      <div className="why-choose-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              {/* Why Choose Content Start */}
              <div className="why-choose-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">
                    Why Choose Us
                  </span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Why choose us for reliable affordable pest control
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    {" "}
                    Our experienced technicians use proven methods and eco-friendly
                    treatments to deliver reliable, long-lasting results. With
                    transparent pricing.
                  </p>
                </div>
                {/* Section Title End */}
                {/* Why Choose Items List Start */}
                <div
                  className="why-choose-item-list wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  {/* Why Choose Item Start */}
                  <div className="why-choose-item">
                    <div className="icon-box">
                      <img src="images/icon-why-choose-item-1.svg" alt="" />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>Safe for Children</h3>
                      <p>
                        Our pest control designed to be safe for children, ensuring.
                      </p>
                    </div>
                  </div>
                  {/* Why Choose Item End */}
                  {/* Why Choose Item Start */}
                  <div className="why-choose-item">
                    <div className="icon-box">
                      <img src="images/icon-why-choose-item-2.svg" alt="" />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>Transparent Pricing</h3>
                      <p>
                        Our pest control designed to be safe for children, ensuring.
                      </p>
                    </div>
                  </div>
                  {/* Why Choose Item End */}
                </div>
                {/* Why Choose Items List End */}
                {/* Why Choose Author Box Start */}
                <div
                  className="why-choose-author-box wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="why-choose-author-image">
                    <figure className="image-anime">
                      <img src="images/why-choose-author-image.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="why-choose-author-content">
                    <h3>Rahul Mehta - Pest Technician</h3>
                    <p>
                      “Award-winning pest control company with 25+ years of trusted
                      experience.”
                    </p>
                  </div>
                </div>
                {/* Why Choose Author Box End */}
              </div>
              {/* Why Choose Content End */}
            </div>
            <div className="col-xl-6">
              {/* Why Choose Image Box Start */}
              <div className="why-choose-images wow fadeInUp" data-wow-delay="0.2s">
                {/* Why Choose Image Box 1 Start */}
                <div className="why-choose-image-box-1">
                  {/* Why Choose Image 1 Start */}
                  <div className="why-choose-image">
                    <figure>
                      <img src="images/why-choose-image-1.png" alt="" />
                    </figure>
                  </div>
                  {/* Why Choose Image 1 End */}
                </div>
                {/* Why Choose Image Box 1 End */}
                {/* Why Choose Image Box 2 Start */}
                <div className="why-choose-image-box-2">
                  {/* Why Choose Image Start */}
                  <div className="why-choose-image">
                    <figure className="image-anime">
                      <img src="images/why-choose-image-2.jpg" alt="" />
                    </figure>
                  </div>
                  {/* Why Choose Image End */}
                  {/* Why Choose Counter Box Start */}
                  <div className="why-choose-counter-box">
                    <h2>
                      <span className="counter">95</span>%
                    </h2>
                    <p>Pest Control Success Rate</p>
                  </div>
                  {/* Why Choose Counter Box End */}
                </div>
                {/* Why Choose Image Box 2 End */}
              </div>
              {/* Why Choose Image Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section End */}
      {/* Our Features Section Start */}
      <div className="our-feature bg-section dark-section parallaxie">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              {/* Section Title Start */}
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Core Feature</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Core features that set our pest control services apart
                </h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6">
              {/* Feature Item Start */}
              <div className="feature-item wow fadeInUp">
                <div className="icon-box">
                  <img src="images/icon-feature-1.svg" alt="" />
                </div>
                <div className="feature-item-content">
                  <h3>Safe for Children</h3>
                  <p>We use carefully selected, that are tough on pests while.</p>
                </div>
                <div className="feature-item-list">
                  <ul>
                    <li>Child-Safe Treatment Method</li>
                    <li>Low-Odor, Safe Applications</li>
                  </ul>
                </div>
              </div>
              {/* Feature Item End */}
            </div>
            <div className="col-xl-3 col-md-6">
              {/* Feature Item Start */}
              <div className="feature-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="icon-box">
                  <img src="images/icon-feature-2.svg" alt="" />
                </div>
                <div className="feature-item-content">
                  <h3>Advanced Pest Detection</h3>
                  <p>We use carefully selected, that are tough on pests while.</p>
                </div>
                <div className="feature-item-list">
                  <ul>
                    <li>Carefully Tested Products</li>
                    <li>Family Service Standards</li>
                  </ul>
                </div>
              </div>
              {/* Feature Item End */}
            </div>
            <div className="col-xl-3 col-md-6">
              {/* Feature Item Start */}
              <div className="feature-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="icon-box">
                  <img src="images/icon-feature-3.svg" alt="" />
                </div>
                <div className="feature-item-content">
                  <h3>Same-Day Service</h3>
                  <p>We use carefully selected, that are tough on pests while.</p>
                </div>
                <div className="feature-item-list">
                  <ul>
                    <li>Child-Approved Solutions</li>
                    <li>Safe Indoor Applications</li>
                  </ul>
                </div>
              </div>
              {/* Feature Item End */}
            </div>
            <div className="col-xl-3 col-md-6">
              {/* Feature Item Start */}
              <div className="feature-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="icon-box">
                  <img src="images/icon-feature-4.svg" alt="" />
                </div>
                <div className="feature-item-content">
                  <h3>Transparent Pricing</h3>
                  <p>We use carefully selected, that are tough on pests while.</p>
                </div>
                <div className="feature-item-list">
                  <ul>
                    <li>Minimal Exposure Methods</li>
                    <li>Health-Conscious Treatments</li>
                  </ul>
                </div>
              </div>
              {/* Feature Item End */}
            </div>
            <div className="col-lg-12">
              {/* Comapany Support Slider Start */}
              <div
                className="company-supports-slider-box wow fadeInUp"
                data-wow-delay="0.2s"
              >
                {/* Comapany Support Content Start */}
                <div className="company-supports-content">
                  <hr />
                  <h3>Certified and Licensed Pest Control Experts</h3>
                  <hr />
                </div>
                {/* Comapany Support Content End */}
                {/* Partner Logo Slider Start */}
                <div className="partner-logo-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      {/* Partner Logo Start */}
                      <div className="swiper-slide">
                        <div className="partner-logo">
                          <img
                            src="images/icon-company-supports-logo-1.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      {/* Partner Logo End */}
                      {/* Partner Logo Start */}
                      <div className="swiper-slide">
                        <div className="partner-logo">
                          <img
                            src="images/icon-company-supports-logo-2.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      {/* Partner Logo End */}
                      {/* Partner Logo Start */}
                      <div className="swiper-slide">
                        <div className="partner-logo">
                          <img
                            src="images/icon-company-supports-logo-3.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      {/* Partner Logo End */}
                      {/* Partner Logo Start */}
                      <div className="swiper-slide">
                        <div className="partner-logo">
                          <img
                            src="images/icon-company-supports-logo-4.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      {/* Partner Logo End */}
                      {/* Partner Logo Start */}
                      <div className="swiper-slide">
                        <div className="partner-logo">
                          <img
                            src="images/icon-company-supports-logo-1.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      {/* Partner Logo End */}
                      {/* Partner Logo Start */}
                      <div className="swiper-slide">
                        <div className="partner-logo">
                          <img
                            src="images/icon-company-supports-logo-2.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      {/* Partner Logo End */}
                      {/* Partner Logo Start */}
                      <div className="swiper-slide">
                        <div className="partner-logo">
                          <img
                            src="images/icon-company-supports-logo-3.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      {/* Partner Logo End */}
                      {/* Partner Logo Start */}
                      <div className="swiper-slide">
                        <div className="partner-logo">
                          <img
                            src="images/icon-company-supports-logo-4.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      {/* Partner Logo End */}
                    </div>
                  </div>
                </div>
                {/* Partner Logo Slider End */}
              </div>
              {/* Comapany Support Slider End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Features Section End */}
      {/* Our Protection Section Start */}
      <div className="our-protection">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              {/* Section Title Start */}
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">
                  Protected / Safety
                </span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Protecting your home with expert pest control
                </h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* Protection Item List Start */}
              <div className="protection-item-list">
                {/* Protection Item Start */}
                <div className="protection-item wow fadeInUp">
                  <div className="protection-item-image">
                    <figure>
                      <img src="images/protection-item-image-1.png" alt="" />
                    </figure>
                  </div>
                  <div className="protection-item-content">
                    <h3>Cockroaches</h3>
                  </div>
                </div>
                {/* Protection Item End */}
                {/* Protection Item Start */}
                <div className="protection-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="protection-item-image">
                    <figure>
                      <img src="images/protection-item-image-2.png" alt="" />
                    </figure>
                  </div>
                  <div className="protection-item-content">
                    <h3>Mosquitoes</h3>
                  </div>
                </div>
                {/* Protection Item End */}
                {/* Protection Item Start */}
                <div className="protection-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="protection-item-image">
                    <figure>
                      <img src="images/protection-item-image-3.png" alt="" />
                    </figure>
                  </div>
                  <div className="protection-item-content">
                    <h3>Bed Bugs</h3>
                  </div>
                </div>
                {/* Protection Item End */}
                {/* Protection Item Start */}
                <div className="protection-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="protection-item-image">
                    <figure>
                      <img src="images/protection-item-image-4.png" alt="" />
                    </figure>
                  </div>
                  <div className="protection-item-content">
                    <h3>Spiders</h3>
                  </div>
                </div>
                {/* Protection Item End */}
                {/* Protection Item Start */}
                <div className="protection-item wow fadeInUp" data-wow-delay="0.8s">
                  <div className="protection-item-image">
                    <figure>
                      <img src="images/protection-item-image-5.png" alt="" />
                    </figure>
                  </div>
                  <div className="protection-item-content">
                    <h3>Termites</h3>
                  </div>
                </div>
                {/* Protection Item End */}
              </div>
              {/* Protection Item List End */}
              {/* Protection Counter Box Start */}
              <div className="protection-counter-box wow fadeInUp">
                {/* Protection Counter Title Box Start */}
                <div className="company-supports-content">
                  <hr />
                  <h3>Amazing Facts About Common Pests</h3>
                  <hr />
                </div>
                {/* Protection Counter Title Box End */}
                {/* Protection Counter Item List Start */}
                <div className="protection-counter-item-list">
                  {/* Protection Counter Item Start */}
                  <div className="protection-counter-item">
                    <div className="icon-box">
                      <img src="images/icon-protection-counter-item-1.svg" alt="" />
                    </div>
                    <div className="protection-counter-item-content">
                      <h2>
                        <span className="counter">95</span>%
                      </h2>
                      <p>Pest Control Success Rate</p>
                    </div>
                  </div>
                  {/* Protection Counter Item End */}
                  {/* Protection Counter Item Start */}
                  <div className="protection-counter-item">
                    <div className="icon-box">
                      <img src="images/icon-protection-counter-item-2.svg" alt="" />
                    </div>
                    <div className="protection-counter-item-content">
                      <h2>
                        <span className="counter">4.5</span>K
                      </h2>
                      <p>Cockroaches exist worldwide</p>
                    </div>
                  </div>
                  {/* Protection Counter Item End */}
                  {/* Protection Counter Item Start */}
                  <div className="protection-counter-item">
                    <div className="icon-box">
                      <img src="images/icon-protection-counter-item-3.svg" alt="" />
                    </div>
                    <div className="protection-counter-item-content">
                      <h2>
                        <span className="counter">24</span>/7
                      </h2>
                      <p>Termites work nonstops</p>
                    </div>
                  </div>
                  {/* Protection Counter Item End */}
                  {/* Protection Counter Item Start */}
                  <div className="protection-counter-item">
                    <div className="icon-box">
                      <img src="images/icon-protection-counter-item-4.svg" alt="" />
                    </div>
                    <div className="protection-counter-item-content">
                      <h2>
                        <span className="counter">300</span>
                      </h2>
                      <p>Eggs a single female mosquito</p>
                    </div>
                  </div>
                  {/* Protection Counter Item End */}
                </div>
                {/* Protection Counter Item List End */}
              </div>
              {/* Protection Counter Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Protection Section End */}
      {/* Our Process Section Start */}
      <div className="our-process bg-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 order-xl-1 order-2">
              {/* Our Process Content Start */}
              <div className="our-process-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">
                    Pest Control Process
                  </span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Our Pest Control Process for Safe &amp; Effective Results
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    {" "}
                    Our experienced technicians use proven methods and eco-friendly
                    treatments to deliver reliable, long-lasting results. With
                    transparent pricing.
                  </p>
                </div>
                {/* Section Title End */}
                {/* Process Body List Start */}
                <div
                  className="process-body-list wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <ul>
                    <li>Certified &amp; Experienced Technicians</li>
                    <li>Long-term prevention &amp; monitoring</li>
                  </ul>
                </div>
                {/* Process Body List End */}
                {/* Process Step Item List Start */}
                <div
                  className="process-step-item-list wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  {/* Process Step Item Start */}
                  <div className="process-step-item">
                    <div className="process-step-item-no">
                      <h3>01</h3>
                    </div>
                    <div className="process-step-item-content">
                      <h3>Inspection</h3>
                      <p>Identify pest activity and entry points.</p>
                    </div>
                  </div>
                  {/* Process Step Item End */}
                  {/* Process Step Item Start */}
                  <div className="process-step-item">
                    <div className="process-step-item-no">
                      <h3>02</h3>
                    </div>
                    <div className="process-step-item-content">
                      <h3>Treatment Plan</h3>
                      <p>Identify pest activity and entry points.</p>
                    </div>
                  </div>
                  {/* Process Step Item End */}
                  {/* Process Step Item Start */}
                  <div className="process-step-item">
                    <div className="process-step-item-no">
                      <h3>03</h3>
                    </div>
                    <div className="process-step-item-content">
                      <h3>Safe Application</h3>
                      <p>Identify pest activity and entry points.</p>
                    </div>
                  </div>
                  {/* Process Step Item End */}
                </div>
                {/* How Work Item List End */}
                {/* Section Footer Text Start */}
                <div className="section-footer-text wow fadeInUp">
                  <ul>
                    <li>
                      <span className="counter">4.9</span>/5
                    </li>
                    <li>
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </li>
                    <li>Our 4200 Reviews</li>
                  </ul>
                </div>
                {/* Section Footer Text End */}
              </div>
              {/* Our Process Content End */}
            </div>
            <div className="col-xl-6 order-xl-2 order-1">
              {/* Process Image Box Start */}
              <div className="process-image-box wow fadeInUp" data-wow-delay="0.2s">
                {/* Process Image Start */}
                <div className="process-image">
                  <figure className="image-anime">
                    <img src="images/process-image.jpg" alt="" />
                  </figure>
                </div>
                {/* Process Image End */}
                {/* Client CTA Box Start */}
                <div className="client-cta-box">
                  {/* Client CTA Box Header Start */}
                  <div className="client-cta-box-header">
                    <h2>
                      <span className="counter">4.9</span>/5
                    </h2>
                    <p>
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </p>
                  </div>
                  {/* Client CTA Box Header End */}
                  {/* Client CTA Box Body Start */}
                  <div className="client-cta-box-body">
                    <div className="satisfy-client-images">
                      <div className="satisfy-client-image">
                        <figure className="image-anime">
                          <img src="images/author-1.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="satisfy-client-image">
                        <figure className="image-anime">
                          <img src="images/author-2.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="satisfy-client-image">
                        <figure className="image-anime">
                          <img src="images/author-3.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="satisfy-client-image">
                        <figure className="image-anime">
                          <img src="images/author-4.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="satisfy-client-image add-more">
                        <i className="fa fa-solid fa-plus" />
                      </div>
                    </div>
                    <div className="client-cta-body-content">
                      <p>5k+ Our Customers</p>
                    </div>
                  </div>
                  {/* Client CTA Box Body End */}
                </div>
                {/* Client CTA Box End */}
              </div>
              {/* Process Image Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Process Section End */}
      {/* Our Pricing Section Start */}
      <div className="our-pricing">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              {/* Section Title Start */}
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Pricing Plan</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Customized pricing plans for your pest control needs
                </h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              {/* Pricing Item Start */}
              <div className="pricing-item wow fadeInUp" data-wow-delay="0.2s">
                {/* Pricing Item Header Start */}
                <div className="pricing-item-header">
                  <div className="pricing-item-title">
                    <span>Basic Protection Plan</span>
                  </div>
                  <div className="pricing-header-content">
                    <div className="pricing-item-content">
                      <h2>
                        $39 <sub>/Per Month</sub>
                      </h2>
                      <p>This plan provide esential pest control with safe.</p>
                    </div>
                    <div className="pricing-item-btn">
                      <a href="contact.html" className="btn-default">
                        Get Started
                      </a>
                    </div>
                  </div>
                  <div className="pricing-item-bg-image">
                    <figure>
                      <img src="images/pricing-item-bg-image-1.png" alt="" />
                    </figure>
                  </div>
                </div>
                {/* Pricing Item Header Start */}
                {/* Pricing Item Body Start */}
                <div className="pricing-item-body">
                  <h3>What Included Features:</h3>
                  <ul>
                    <li>Control for ants, cockroaches &amp; spiders</li>
                    <li>Coverage for common insect &amp; rodents</li>
                    <li>Long-term prevention &amp; monitoring</li>
                    <li>Entry point identification &amp; prevention</li>
                  </ul>
                </div>
                {/* Pricing Item Body End */}
              </div>
              {/* Pricing Item End */}
            </div>
            <div className="col-xl-4 col-md-6">
              {/* Pricing Item Start */}
              <div className="pricing-item wow fadeInUp" data-wow-delay="0.4s">
                {/* Pricing Item Header Start */}
                <div className="pricing-item-header">
                  <div className="pricing-item-title">
                    <span>Basic Protection Plan</span>
                  </div>
                  <div className="pricing-header-content">
                    <div className="pricing-item-content">
                      <h2>
                        $59 <sub>/Per Month</sub>
                      </h2>
                      <p>This plan provide esential pest control with safe.</p>
                    </div>
                    <div className="pricing-item-btn">
                      <a href="contact.html" className="btn-default">
                        Get Started
                      </a>
                    </div>
                  </div>
                  <div className="pricing-item-bg-image">
                    <figure>
                      <img src="images/pricing-item-bg-image-2.png" alt="" />
                    </figure>
                  </div>
                </div>
                {/* Pricing Item Header Start */}
                {/* Pricing Item Body Start */}
                <div className="pricing-item-body">
                  <h3>What Included Features:</h3>
                  <ul>
                    <li>Control for ants, cockroaches &amp; spiders</li>
                    <li>Coverage for common insect &amp; rodents</li>
                    <li>Long-term prevention &amp; monitoring</li>
                    <li>Entry point identification &amp; prevention</li>
                  </ul>
                </div>
                {/* Pricing Item Body End */}
              </div>
              {/* Pricing Item End */}
            </div>
            <div className="col-xl-4 col-md-6">
              {/* Pricing Item Start */}
              <div className="pricing-item wow fadeInUp" data-wow-delay="0.6s">
                {/* Pricing Item Header Start */}
                <div className="pricing-item-header">
                  <div className="pricing-item-title">
                    <span>Basic Protection Plan</span>
                  </div>
                  <div className="pricing-header-content">
                    <div className="pricing-item-content">
                      <h2>
                        $89 <sub>/Per Month</sub>
                      </h2>
                      <p>This plan provide esential pest control with safe.</p>
                    </div>
                    <div className="pricing-item-btn">
                      <a href="contact.html" className="btn-default">
                        Get Started
                      </a>
                    </div>
                  </div>
                  <div className="pricing-item-bg-image">
                    <figure>
                      <img src="images/pricing-item-bg-image-3.png" alt="" />
                    </figure>
                  </div>
                </div>
                {/* Pricing Item Header Start */}
                {/* Pricing Item Body Start */}
                <div className="pricing-item-body">
                  <h3>What Included Features:</h3>
                  <ul>
                    <li>Control for ants, cockroaches &amp; spiders</li>
                    <li>Coverage for common insect &amp; rodents</li>
                    <li>Long-term prevention &amp; monitoring</li>
                    <li>Entry point identification &amp; prevention</li>
                  </ul>
                </div>
                {/* Pricing Item Body End */}
              </div>
              {/* Pricing Item End */}
            </div>
            <div className="col-lg-12">
              {/* Pricing Benefits List Start */}
              <div
                className="pricing-benefit-list wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <ul>
                  <li>
                    <img src="images/icon-pricing-benefit-1.svg" alt="" />
                    Get 30 day free trial
                  </li>
                  <li>
                    <img src="images/icon-pricing-benefit-2.svg" alt="" />
                    No any hidden fees pay
                  </li>
                  <li>
                    <img src="images/icon-pricing-benefit-3.svg" alt="" />
                    You can cancel anytime
                  </li>
                </ul>
              </div>
              {/* Pricing Benefits List End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Pricing Section End */}
      {/* Our Testimonials Section Start */}
      <div className="our-testimonials bg-section dark-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              {/* Testimonial Image Box Start */}
              <div className="testimonial-image-box wow fadeInUp">
                {/* Testimonial Image Start */}
                <div className="testimonial-image">
                  <figure className="image-anime">
                    <img src="images/testimonial-image.jpg" alt="" />
                  </figure>
                </div>
                {/* Testimonial Image End */}
                {/* Client CTA Box Start */}
                <div className="client-cta-box">
                  {/* Client CTA Box Header Start */}
                  <div className="client-cta-box-header">
                    <h2>
                      <span className="counter">4.9</span>/5
                    </h2>
                    <p>
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </p>
                  </div>
                  {/* Client CTA Box Header End */}
                  {/* Client CTA Box Body Start */}
                  <div className="client-cta-box-body">
                    <div className="satisfy-client-images">
                      <div className="satisfy-client-image">
                        <figure className="image-anime">
                          <img src="images/author-1.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="satisfy-client-image">
                        <figure className="image-anime">
                          <img src="images/author-2.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="satisfy-client-image">
                        <figure className="image-anime">
                          <img src="images/author-3.jpg" alt="" />
                        </figure>
                      </div>
                      <div className="satisfy-client-image add-more">
                        <i className="fa fa-solid fa-plus" />
                      </div>
                    </div>
                    <div className="client-cta-body-content">
                      <p>5k+ Our Customers</p>
                    </div>
                  </div>
                  {/* Client CTA Box Body End */}
                </div>
                {/* Client CTA Box End */}
              </div>
              {/* Testimonial Image Box End */}
            </div>
            <div className="col-xl-6">
              {/* Testimonial Content Box Start */}
              <div className="testimonial-content-box">
                {/* Section Title Start */}
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">
                    What Client Says
                  </span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    What our customers say about pest control
                  </h2>
                </div>
                {/* Section Title End */}
                {/* Testimonial Slider Start */}
                <div
                  className="testimonial-slider wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="swiper">
                    <div className="swiper-wrapper" data-cursor-text="Drag">
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        {/* Testimonial Item Start */}
                        <div className="testimonial-item">
                          {/* Testimonial Item Header Start */}
                          <div className="testimonial-item-header">
                            <div className="testimonial-item-rating">
                              <i className="fa fa-solid fa-star" />
                              <i className="fa fa-solid fa-star" />
                              <i className="fa fa-solid fa-star" />
                              <i className="fa fa-solid fa-star" />
                              <i className="fa fa-solid fa-star" />
                            </div>
                            <div className="testimonial-item-content">
                              <p>
                                “Excellent service from start to finish. The team
                                was professional, punctual and completely eliminated
                                our pest problem. Highly recommended reliable &amp;
                                affordable pest control services. They follow safety
                                standards strictly, which is crucial for our
                                business. Very happy with the results. The
                                technicians were knowledgeable &amp; explained
                                everything clearly. Fast response.!”
                              </p>
                            </div>
                          </div>
                          {/* Testimonial Item Header End */}
                          {/* Testimonial Item Author Start */}
                          <div className="testimonial-item-author">
                            <div className="testimonial-author-image">
                              <figure className="image-anime">
                                <img src="images/author-1.jpg" alt="" />
                              </figure>
                            </div>
                            <div className="testimonial-author-content">
                              <h2>Amit Singh</h2>
                              <p>Warehouse Supervisor</p>
                            </div>
                          </div>
                          {/* Testimonial Item Author End */}
                        </div>
                        {/* Testimonial Item End */}
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        {/* Testimonial Item Start */}
                        <div className="testimonial-item">
                          {/* Testimonial Item Header Start */}
                          <div className="testimonial-item-header">
                            <div className="testimonial-item-rating">
                              <i className="fa fa-solid fa-star" />
                              <i className="fa fa-solid fa-star" />
                              <i className="fa fa-solid fa-star" />
                              <i className="fa fa-solid fa-star" />
                              <i className="fa fa-solid fa-star" />
                            </div>
                            <div className="testimonial-item-content">
                              <p>
                                “Excellent service from start to finish. The team
                                was professional, punctual and completely eliminated
                                our pest problem. Highly recommended reliable &amp;
                                affordable pest control services. They follow safety
                                standards strictly, which is crucial for our
                                business. Very happy with the results. The
                                technicians were knowledgeable &amp; explained
                                everything clearly. Fast response.!”
                              </p>
                            </div>
                          </div>
                          {/* Testimonial Item Header End */}
                          {/* Testimonial Item Author Start */}
                          <div className="testimonial-item-author">
                            <div className="testimonial-author-image">
                              <figure className="image-anime">
                                <img src="images/author-2.jpg" alt="" />
                              </figure>
                            </div>
                            <div className="testimonial-author-content">
                              <h2>Michael Brown</h2>
                              <p>Chief Executive</p>
                            </div>
                          </div>
                          {/* Testimonial Item Author End */}
                        </div>
                        {/* Testimonial Item End */}
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        {/* Testimonial Item Start */}
                        <div className="testimonial-item">
                          {/* Testimonial Item Header Start */}
                          <div className="testimonial-item-header">
                            <div className="testimonial-item-rating">
                              <i className="fa fa-solid fa-star" />
                              <i className="fa fa-solid fa-star" />
                              <i className="fa fa-solid fa-star" />
                              <i className="fa fa-solid fa-star" />
                              <i className="fa fa-solid fa-star" />
                            </div>
                            <div className="testimonial-item-content">
                              <p>
                                “Excellent service from start to finish. The team
                                was professional, punctual and completely eliminated
                                our pest problem. Highly recommended reliable &amp;
                                affordable pest control services. They follow safety
                                standards strictly, which is crucial for our
                                business. Very happy with the results. The
                                technicians were knowledgeable &amp; explained
                                everything clearly. Fast response.!”
                              </p>
                            </div>
                          </div>
                          {/* Testimonial Item Header End */}
                          {/* Testimonial Item Author Start */}
                          <div className="testimonial-item-author">
                            <div className="testimonial-author-image">
                              <figure className="image-anime">
                                <img src="images/author-3.jpg" alt="" />
                              </figure>
                            </div>
                            <div className="testimonial-author-content">
                              <h2>Kristin Watson</h2>
                              <p>Pest Control Technician</p>
                            </div>
                          </div>
                          {/* Testimonial Item Author End */}
                        </div>
                        {/* Testimonial Item End */}
                      </div>
                      {/* Testimonial Slide End */}
                    </div>
                    <div className="testimonial-pagination" />
                  </div>
                </div>
                {/* Testimonial Slider End */}
              </div>
              {/* Testimonial Content Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Testimonials Section End */}
      {/* Our Blog Section Start */}
      <div className="our-blog">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              {/* Section Title Start */}
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Latest Blog</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Stay updated with our pest control knowledge center
                </h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              {/* Post Overlay Item Start */}
              <div className="post-overlay-item wow fadeInUp" data-wow-delay="0.2s">
                {/* Post Featured Image Start */}
                <div className="post-featured-image">
                  <a href="blog-single.html" data-cursor-text="View">
                    <figure>
                      <img src="images/post-1.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Post Featured Image End */}
                {/* Post Item Body Start */}
                <div className="post-item-body">
                  {/* Post Item Content Start */}
                  <div className="post-item-content">
                    <h2>
                      <a href="blog-single.html">
                        Top 5 Common Household Pests and Solutions
                      </a>
                    </h2>
                  </div>
                  {/* Post Item Content End */}
                  {/* Post Item Button Start*/}
                  <div className="post-item-btn">
                    <a href="blog-single.html" className="readmore-btn">
                      read more
                    </a>
                  </div>
                  {/* Post Item Button End*/}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Overlay Item End */}
            </div>
            <div className="col-xl-4 col-md-6">
              {/* Post Overlay Item Start */}
              <div className="post-overlay-item wow fadeInUp" data-wow-delay="0.4s">
                {/* Post Featured Image Start */}
                <div className="post-featured-image">
                  <a href="blog-single.html" data-cursor-text="View">
                    <figure>
                      <img src="images/post-2.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Post Featured Image End */}
                {/* Post Item Body Start */}
                <div className="post-item-body">
                  {/* Post Item Content Start */}
                  <div className="post-item-content">
                    <h2>
                      <a href="blog-single.html">
                        Eco-Friendly Pest Control: Safe for Family and Pets
                      </a>
                    </h2>
                  </div>
                  {/* Post Item Content End */}
                  {/* Post Item Button Start*/}
                  <div className="post-item-btn">
                    <a href="blog-single.html" className="readmore-btn">
                      read more
                    </a>
                  </div>
                  {/* Post Item Button End*/}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Overlay Item End */}
            </div>
            <div className="col-xl-4 col-md-6">
              {/* Post Overlay Item Start */}
              <div className="post-overlay-item wow fadeInUp" data-wow-delay="0.6s">
                {/* Post Featured Image Start */}
                <div className="post-featured-image">
                  <a href="blog-single.html" data-cursor-text="View">
                    <figure>
                      <img src="images/post-3.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Post Featured Image End */}
                {/* Post Item Body Start */}
                <div className="post-item-body">
                  {/* Post Item Content Start */}
                  <div className="post-item-content">
                    <h2>
                      <a href="blog-single.html">
                        Seasonal Pest Control Tips for Year-Round Protection
                      </a>
                    </h2>
                  </div>
                  {/* Post Item Content End */}
                  {/* Post Item Button Start*/}
                  <div className="post-item-btn">
                    <a href="blog-single.html" className="readmore-btn">
                      read more
                    </a>
                  </div>
                  {/* Post Item Button End*/}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Overlay Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Blog Section End */}
      {/* Main Footer Start */}
      <footer className="main-footer bg-section dark-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              {/* About Footer Start */}
              <div className="about-footer">
                {/* About Footer Content Start */}
                <div className="about-footer-content">
                  <h2>About Our Company</h2>
                  <p>
                    We are a trusted pest control service provider offering safe,
                    effective, and solutions homes and businesses.
                  </p>
                </div>
                {/* About Footer Content End */}
                {/* Footer Social links Start */}
                <div className="footer-social-links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Footer Social links End */}
              </div>
              {/* About Footer End */}
            </div>
            <div className="col-xl-9">
              {/* Footer Links Box Start */}
              <div className="footer-links-box">
                {/* Footer Links Start */}
                <div className="footer-links footer-quick-links">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="services.html">Our Services</a>
                    </li>
                    <li>
                      <a href="projects.html">Our Projects</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing Plans</a>
                    </li>
                  </ul>
                </div>
                {/* Footer Links End */}
                {/* Footer Links Start */}
                <div className="footer-links footer-service-links">
                  <h3>Our Services</h3>
                  <ul>
                    <li>
                      <a href="service-single.html">Residential Pest Control</a>
                    </li>
                    <li>
                      <a href="service-single.html">Bed Bug Treatment</a>
                    </li>
                    <li>
                      <a href="service-single.html">Commercial Pest Control</a>
                    </li>
                    <li>
                      <a href="service-single.html">Cockroach &amp; Ant Control</a>
                    </li>
                    <li>
                      <a href="service-single.html">Mosquito Control</a>
                    </li>
                  </ul>
                </div>
                {/* Footer Links End */}
                {/* Footer Links Start */}
                <div className="footer-links footer-contact-list-box">
                  <h3>Working Hours</h3>
                  <ul>
                    <li>Monday - Saturday: 9:00 AM - 7:00 PM</li>
                    <li>Sunday: Emergency Services Available</li>
                  </ul>
                  <div className="footer-contact-item-list">
                    <div className="footer-contact-item">
                      <div className="icon-box">
                        <img src="images/icon-headphone-primary.svg" alt="" />
                      </div>
                      <div className="footer-contact-item-content">
                        <p>Contact Us!</p>
                        <h4>
                          <a href="tel:123456789">+(123) 456-789</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Footer Links End */}
              </div>
              {/* Footer Links Box End */}
            </div>
            <div className="col-lg-12">
              {/* Footer Cta Box Start */}
              <div className="footer-cta-box">
                {/* Footer Logo Start */}
                <div className="footer-logo">
                  <img src="images/logo.svg" alt="" />
                </div>
                {/* Footer Logo End */}
                {/* Footer Newsletter Form Start */}
                <div className="footer-newsletter-form-box">
                  {/* Footer Newsletter Form Title Start */}
                  <div className="footer-newsletter-form-title">
                    <h3>Newsletter Subscription</h3>
                  </div>
                  {/* Footer Newsletter Form Title End */}
                  {/* Footer Newsletter Form Button Start */}
                  <div className="footer-newsletter-form">
                    <form id="newslettersForm" action="#" method="POST">
                      <div className="form-group">
                        <input
                          type="email"
                          name="mail"
                          className="form-control"
                          id="mail"
                          placeholder="Enter Your E-mail"
                          required=""
                        />
                        <button
                          type="submit"
                          className="btn-default btn-highlighted"
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* Footer Newsletter Form Button End */}
                </div>
                {/* Footer Newsletter Form End */}
              </div>
              {/* Footer Cta Box End */}
            </div>
            <div className="col-lg-12">
              {/* Footer Copyright Text Start */}
              <div className="footer-copyright-text">
                <p>Copyright © 2025 All Rights Reserved.</p>
              </div>
              {/* Footer Copyright Text End */}
            </div>
          </div>
        </div>
      </footer>
      {/* Main Footer End */}
    </>

  );
}
