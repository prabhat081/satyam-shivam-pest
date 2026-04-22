import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Pest Control Services in Patna",
  description:
    "Get professional pest control services in Patna including termite, mosquito, cockroach, and rodent control with guaranteed results.",
  path: "/services",
});

function page() {
    return (
        <>
            {/* Page Header Section Start */}
            <div className="page-header bg-section parallaxie">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Page Header Box Start */}
                            <div className="page-header-box">
                                <h1 className="text-anime-style-3" data-cursor="-opaque">
                                    Our services
                                </h1>
                                <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="./">home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            services
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            {/* Page Header Box End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Header Section End */}
            {/* Page Services Start */}
            <div className="page-services">
                <div className="container">
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
                                        <p>Complete home pest control solutions to eliminate termites, cockroaches, mosquitoes, and other common household pests safely and effectively.</p>
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
                                        <p>Advanced bed bug removal services using safe and proven methods to ensure complete elimination and long-term protection.</p>
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
                                        <p>Effective treatment to remove cockroaches and ants from kitchens, bathrooms, and hidden areas with long-lasting results.</p>
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
                                        <p>Protect your property from termite damage with our professional anti-termite treatment and preventive solutions.</p>
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
                            <div className="service-item wow fadeInUp">
                                <div className="service-item-header">
                                    <div className="service-item-image">
                                        <a href="service-single.html" data-cursor-text="View">
                                            <figure className="image-anime">
                                                <img src="images/service-5.jpg" alt="" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="icon-box">
                                        <img src="images/icon-service-5.svg" alt="" />
                                    </div>
                                </div>
                                <div className="service-item-body">
                                    <div className="service-item-content">
                                        <h2>
                                            <a href="service-single.html">Rodent Control</a>
                                        </h2>
                                        <p>Safe and effective rat and mouse control services to protect your home and business from health risks and damage.</p>
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
                                                <img src="images/service-6.jpg" alt="" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="icon-box">
                                        <img src="images/icon-service-6.svg" alt="" />
                                    </div>
                                </div>
                                <div className="service-item-body">
                                    <div className="service-item-content">
                                        <h2>
                                            <a href="service-single.html">General Pest Control</a>
                                        </h2>
                                        <p>Comprehensive pest control solutions for all types of pests using eco-friendly and modern treatment techniques.</p>
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
                                                <img src="images/service-7.jpg" alt="" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="icon-box">
                                        <img src="images/icon-service-7.svg" alt="" />
                                    </div>
                                </div>
                                <div className="service-item-body">
                                    <div className="service-item-content">
                                        <h2>
                                            <a href="service-single.html">Mosquito Control</a>
                                        </h2>
                                        <p>Reduce mosquito breeding and protect your family from diseases with our effective mosquito control treatments.</p>
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
                                                <img src="images/service-8.jpg" alt="" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="icon-box">
                                        <img src="images/icon-service-8.svg" alt="" />
                                    </div>
                                </div>
                                <div className="service-item-body">
                                    <div className="service-item-content">
                                        <h2>
                                            <a href="service-single.html">Spider Control</a>
                                        </h2>
                                        <p>Eliminate spiders and prevent re-infestation with safe and professional spider control services.</p>
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
                    </div>
                </div>
            </div>
            {/* Page Services End */}
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
                                                            <h3>Amit Singh</h3>
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
                                                            <h3>Michael Brown</h3>
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
                                                            <h3>Kristin Watson</h3>
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
            {/* Our Faqs Section Start */}
            <div className="our-faqs">
                <div className="container">
                    <div className="row section-row align-items-center">
                        <div className="col-xl-6">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <span className="section-sub-title wow fadeInUp">
                                    Frequently Asked Questions
                                </span>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">
                                    Helpful information to guide your pest control decision
                                </h2>
                            </div>
                            {/* Section Title End */}
                        </div>
                        <div className="col-xl-6">
                            {/* Section Content Button Start */}
                            <div className="section-content-btn">
                                {/* Section Title Content Start */}
                                <div
                                    className="section-title-content wow fadeInUp"
                                    data-wow-delay="0.2s"
                                >
                                    <p>
                                        Yes, we use eco-friendly and government-approved pest control
                                        chemicals that are safe for children, pets, and the environment
                                        our treatments are carefully selected to effectively eliminate
                                        pests.
                                    </p>
                                </div>
                                {/* Section Title Content End */}
                                {/* Section Button Start */}
                                <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                                    <a href="faqs.html" className="btn-default">
                                        View all FAQ's
                                    </a>
                                </div>
                                {/* Section Button End */}
                            </div>
                            {/* Section Content Button End */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-5">
                            {/* Faq Image Box Start */}
                            <div className="faq-image-box wow fadeInUp">
                                {/* Faq Image Start */}
                                <div className="faq-image">
                                    <figure className="image-anime">
                                        <img src="images/faq-image.jpg" alt="" />
                                    </figure>
                                </div>
                                {/* Faq Image End */}
                                {/* Faq Client Box Start */}
                                <div className="faq-client-box">
                                    {/* Faq Client Box Header Start */}
                                    <div className="faq-client-box-header">
                                        {/* Satisfy Client Images Start */}
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
                                        </div>
                                        {/* Satisfy Client Images End */}
                                        {/* Faq Client Box Rating Start */}
                                        <div className="faq-client-box-rating">
                                            <h2>
                                                <span className="counter">20</span>k+
                                            </h2>
                                        </div>
                                        {/* Faq Client Box Rating End */}
                                    </div>
                                    {/* Faq Client Box Header End */}
                                    {/* Faq Client Box Body Start */}
                                    <div className="faq-client-box-body">
                                        <p>
                                            The Preferred Pest Control Partner for 5,000+ Homes &amp;
                                            Businesses
                                        </p>
                                    </div>
                                    {/* Faq Client Box Body End */}
                                </div>
                                {/* Faq Client Box End */}
                            </div>
                            {/* Faq Image Box End */}
                        </div>
                        <div className="col-xl-7">
                            {/* FAQ Accordion Start */}
                            <div className="faq-accordion" id="accordion">
                                {/* FAQ Item Start */}
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading1">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse1"
                                            aria-expanded="true"
                                            aria-controls="collapse1"
                                        >
                                            1. Do you use eco-friendly and approved pest control
                                            chemicals?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse1"
                                        className="accordion-collapse collapse show"
                                        role="region"
                                        aria-labelledby="heading1"
                                        data-bs-parent="#accordion"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                Yes, we use eco-friendly and government-approved pest
                                                control chemicals that are safe for children, pets, and the
                                                environment our treatments are carefully selected to
                                                effectively eliminate pests.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* FAQ Item End */}
                                {/* FAQ Item Start */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading2">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse2"
                                            aria-expanded="false"
                                            aria-controls="collapse2"
                                        >
                                            2. How often should pest control services be scheduled
                                            annually?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse2"
                                        className="accordion-collapse collapse"
                                        role="region"
                                        aria-labelledby="heading2"
                                        data-bs-parent="#accordion"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                Yes, we use eco-friendly and government-approved pest
                                                control chemicals that are safe for children, pets, and the
                                                environment our treatments are carefully selected to
                                                effectively eliminate pests.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* FAQ Item End */}
                                {/* FAQ Item Start */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="heading3">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse3"
                                            aria-expanded="false"
                                            aria-controls="collapse3"
                                        >
                                            3. What preparation is required before starting pest control
                                            treatment?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse3"
                                        className="accordion-collapse collapse"
                                        role="region"
                                        aria-labelledby="heading3"
                                        data-bs-parent="#accordion"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                Yes, we use eco-friendly and government-approved pest
                                                control chemicals that are safe for children, pets, and the
                                                environment our treatments are carefully selected to
                                                effectively eliminate pests.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* FAQ Item End */}
                                {/* FAQ Item Start */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="accordion-header" id="heading4">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse4"
                                            aria-expanded="false"
                                            aria-controls="collapse4"
                                        >
                                            4. Do you offer follow-up inspections after pest treatment
                                            completion?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse4"
                                        className="accordion-collapse collapse"
                                        role="region"
                                        aria-labelledby="heading4"
                                        data-bs-parent="#accordion"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                Yes, we use eco-friendly and government-approved pest
                                                control chemicals that are safe for children, pets, and the
                                                environment our treatments are carefully selected to
                                                effectively eliminate pests.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* FAQ Item End */}
                                {/* FAQ Item Start */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                    <h2 className="accordion-header" id="heading5">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapse5"
                                            aria-expanded="false"
                                            aria-controls="collapse5"
                                        >
                                            5. Can pests return after completing the pest control
                                            treatment?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapse5"
                                        className="accordion-collapse collapse"
                                        role="region"
                                        aria-labelledby="heading5"
                                        data-bs-parent="#accordion"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                Yes, we use eco-friendly and government-approved pest
                                                control chemicals that are safe for children, pets, and the
                                                environment our treatments are carefully selected to
                                                effectively eliminate pests.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* FAQ Item End */}
                            </div>
                            {/* FAQ Accordion End */}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default page