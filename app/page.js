import About from "@/components/home/About";
import OurProcess from "@/components/home/OurProcess";
import OurProtection from "@/components/home/OurProtection";
import OurServices from "@/components/home/OurServices";
import Testimonial from "@/components/home/Testimonial";
import services from "@/data/services.json";
import Link from "next/link";
export default function Home() {
  return (
    <>

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
                    Trusted Pest Control Experts in Patna
                  </span>
                  <h1 className="text-anime-style-3" data-cursor="-opaque">
                    Professional Pest Control Services for Safe & Pest-Free Living
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    We provide expert termite, cockroach, mosquito, and rodent control
                    services in Patna using advanced and eco-friendly solutions.
                    Get fast, reliable, and long-lasting pest protection for your home
                    and business.
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
                      <h2>Safe & Eco-Friendly Treatments</h2>
                    </div>
                  </div>
                  {/* Hero Info Item End */}
                  {/* Hero Info Item Start */}
                  <div className="hero-body-item">
                    <div className="icon-box">
                      <img src="images/icon-hero-body-item-2.svg" alt="" />
                    </div>
                    <div className="hero-body-item-content">
                      <h2>Same Day Pest Control Service</h2>
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
                    <a href="/contact-us" className="btn-default btn-highlighted">
                      Book Pest Control Service Now
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
                    <p>See How We Work</p>
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
         <About />
      {/* About Us Section Start */}
      {/* Our Services Section Start */}
      <OurServices />
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
                <span className="section-sub-title wow fadeInUp">Why Choose Us</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Why We Are the Most Trusted Pest Control Service in Patna
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
                  <h3>Safe for Family & Pets</h3>
                  <p>We use eco-friendly and government-approved pest control treatments that are safe for children, pets, and the environment.</p>
                </div>
                <div className="feature-item-list">
                  <ul>
                    <li>Child-Safe Treatment Method</li>
                    <li>Low-Odor & Non-Toxic Solutions</li>
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
                  <h3>Advanced Pest Inspection & Detection</h3>
                  <p>We use modern tools and expert techniques to identify pest problems from the root and provide effective solutions.</p>
                </div>
                <div className="feature-item-list">
                  <ul>
                    <li>Detailed Site Inspection</li>
                    <li>Targeted Treatment Planning</li>
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
                  <h3>Fast & Same-Day Service</h3>
                  <p>Get quick response and same-day pest control services in Patna to protect your home and business instantly.</p>
                </div>
                <div className="feature-item-list">
                  <ul>
                    <li>Emergency Pest Control Available</li>
                    <li>Quick Response Team</li>
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
                  <h3>Affordable & Transparent Pricing</h3>
                  <p>We offer budget-friendly pest control services with no hidden charges and complete transparency.</p>
                </div>
                <div className="feature-item-list">
                  <ul>
                    <li>No Hidden Costs</li>
                    <li>Value for Money Services</li>
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
                  <h3>Certified & Experienced Pest Control Professionals in Patna</h3>
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
     <OurProtection />
      {/* Our Protection Section End */}
      {/* Our Process Section Start */}
     <OurProcess />
      {/* Our Process Section End */}
    
      {/* Our Testimonials Section Start */}
      <Testimonial />
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
                  <a href="#" data-cursor-text="View">
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
                      <a href="#">
                        Top 5 Common Household Pests and Solutions
                      </a>
                    </h2>
                  </div>
                  {/* Post Item Content End */}
                  {/* Post Item Button Start*/}
                  <div className="post-item-btn">
                    <a href="#" className="readmore-btn">
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
                  <a href="#" data-cursor-text="View">
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
                      <a href="#">
                        Eco-Friendly Pest Control: Safe for Family and Pets
                      </a>
                    </h2>
                  </div>
                  {/* Post Item Content End */}
                  {/* Post Item Button Start*/}
                  <div className="post-item-btn">
                    <a href="#" className="readmore-btn">
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
                  <a href="#" data-cursor-text="View">
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
                      <a href="#">
                        Seasonal Pest Control Tips for Year-Round Protection
                      </a>
                    </h2>
                  </div>
                  {/* Post Item Content End */}
                  {/* Post Item Button Start*/}
                  <div className="post-item-btn">
                    <a href="#" className="readmore-btn">
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

    </>

  );
}
