import { generateSEO } from "@/lib/seo";

/**
 * ✅ SEO META FOR ABOUT PAGE
 */
export const metadata = generateSEO({
    title: "About Pest Control Company in Patna",
    description:
        "Learn about Satyam Shivam Pest Control, a trusted pest control company in Patna providing termite, mosquito, cockroach & rodent control services with guaranteed results.",
    path: "/about",
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
                                    About us
                                </h1>
                                <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="./">home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            about us
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
                                        Trusted Pest Control Experts Protecting Homes & Businesses in Patna
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        We are a leading pest control company in Patna, providing reliable and effective solutions for termite, mosquito, cockroach,
                                        and rodent problems. Our mission is to create safe, hygienic, and pest-free environments for homes and businesses using advanced and eco-friendly treatment methods.
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
                                                Delivering trusted pest control services with proven results and customer satisfaction.
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
                                                We focus on delivering high-quality pest control services with safety, reliability, and long-term protection. Our team uses modern techniques and industry-approved solutions to ensure complete pest elimination.
                                            </p>
                                            <ul>
                                                <li>Certified & Experienced Technicians </li>
                                                <li>Advanced Pest Detection & Treatment </li>
                                                <li>Affordable Pricing with No Hidden Charges</li>
                                                <li>100% Customer Satisfaction Guarantee</li>
                                            </ul>
                                        </div>
                                        <div className="about-us-info-btn">
                                            <a href="/contact-us" className="btn-default">
                                                Contact Now
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
            {/* Our Approach Section Start */}
            <div className="our-approach bg-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            {/* Approach Image Box Start */}
                            <div className="approach-image-box">
                                {/* Our Approach Image Start */}
                                <div className="our-approach-image">
                                    <figure className="image-anime reveal">
                                        <img src="images/our-approach-image.jpg" alt="" />
                                    </figure>
                                </div>
                                {/* Our Approach Image End */}
                                {/* Vision Mission Boxes Start */}
                                <div className="vision-mission-boxes">
                                    {/* Vision Mission Item Start */}
                                    <div className="vision-mission-item wow fadeInUp">
                                        <div className="icon-box">
                                            <img src="images/icon-mission.svg" alt="" />
                                        </div>
                                        <div className="vision-mission-item-content">
                                            <h3>Our Mission</h3>
                                            <p>
                                                Our mission is to provide safe, effective, and affordable pest control services in Patna while ensuring complete customer satisfaction and long-term protection.
                                            </p>
                                        </div>
                                    </div>
                                    {/* Vision Mission Item End */}
                                    {/* Vision Mission Item Start */}
                                    <div
                                        className="vision-mission-item wow fadeInUp"
                                        data-wow-delay="0.2s"
                                    >
                                        <div className="icon-box">
                                            <img src="images/icon-vision.svg" alt="" />
                                        </div>
                                        <div className="vision-mission-item-content">
                                            <h3>Our Vision</h3>
                                            <p>
                                                Our vision is to become the most trusted pest control company in Bihar by delivering innovative, eco-friendly, and reliable pest management solutions.
                                            </p>
                                        </div>
                                    </div>
                                    {/* Vision Mission Item End */}
                                </div>
                                {/* Vision Mission Boxes End */}
                            </div>
                            {/* Approach Image Box End */}
                        </div>
                        <div className="col-xl-6">
                            {/* Our Approach Content Box Start */}
                            <div className="our-approach-content-box">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <span className="section-sub-title wow fadeInUp">
                                        Our Approach
                                    </span>
                                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                                        Our proven approach to effective pest control
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        Our approach is based on thorough inspection, targeted treatment, and preventive strategies. We focus on eliminating pests from the root and preventing future infestations using safe and advanced techniques tailored to your needs.
                                    </p>
                                </div>
                                {/* Section Title End */}
                                {/* Approach Item List Start */}
                                <div
                                    className="approach-item-list wow fadeInUp"
                                    data-wow-delay="0.4s"
                                >
                                    {/* Approach Item Start */}
                                    <div className="approach-item">
                                        <div className="icon-box">
                                            <img src="images/icon-approach-item-1.svg" alt="" />
                                        </div>
                                        <div className="approach-item-content">
                                            <h3>Advanced Pest Control Technology </h3>
                                        </div>
                                    </div>
                                    {/* Approach Item End */}
                                    {/* Approach Item Start */}
                                    <div className="approach-item">
                                        <div className="icon-box">
                                            <img src="images/icon-approach-item-2.svg" alt="" />
                                        </div>
                                        <div className="approach-item-content">
                                            <h3>Detailed Inspection & Root Cause Analysis </h3>
                                        </div>
                                    </div>
                                    {/* Approach Item End */}
                                </div>
                                {/* Approach Item List End */}
                                {/* Approach Skill Item List Start */}
                                <div className="approach-skill-item-list">
                                    {/* Skills Progress Bar Start */}
                                    <div className="skills-progress-bar">
                                        {/* Skill Item Start */}
                                        <div className="skillbar" data-percent="75%">
                                            <div className="skill-data">
                                                <div className="skill-title">Businesses Protected</div>
                                                <div className="skill-no">75%</div>
                                            </div>
                                            <div className="skill-progress">
                                                <div className="count-bar" />
                                            </div>
                                        </div>
                                        {/* Skill Item End */}
                                    </div>
                                    {/* Skills Progress Bar End */}
                                    {/* Skills Progress Bar Start */}
                                    <div className="skills-progress-bar">
                                        {/* Skill Item Start */}
                                        <div className="skillbar" data-percent="90%">
                                            <div className="skill-data">
                                                <div className="skill-title">Pest Elimination Rate</div>
                                                <div className="skill-no">90%</div>
                                            </div>
                                            <div className="skill-progress">
                                                <div className="count-bar" />
                                            </div>
                                        </div>
                                        {/* Skill Item End */}
                                    </div>
                                    {/* Skills Progress Bar End */}
                                </div>
                                {/* Approach Skill Item List End */}
                                {/* Our Approach Button Start */}
                                <div
                                    className="our-approach-btn wow fadeInUp"
                                    data-wow-delay="0.6s"
                                >
                                    <a href="contact.html" className="btn-default">
                                        Contact Us
                                    </a>
                                </div>
                                {/* Our Approach Button End */}
                            </div>
                            {/* Our Approach Content Box End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Approach Section End */}
            {/* Who We Are Section Start */}
            <div className="who-we-are">
                <div className="container">
                    <div className="row section-row">
                        <div className="col-lg-12">
                            {/* Section Title Start */}
                            <div className="section-title section-title-center">
                                <span className="section-sub-title wow fadeInUp">Who We Are</span>
                                <h2 className="text-anime-style-3">
                                    Experienced Professionals Delivering Reliable Pest Control in Patna
                                </h2>
                            </div>
                            {/* Section Title End */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            {/* Who We Are Item Start */}
                            <div className="who-we-are-item wow fadeInUp" data-wow-delay="0.2s">
                                {/* Who We Item Header Start */}
                                <div className="who-we-item-header">
                                    <div className="icon-box">
                                        <img src="images/icon-who-we-are-item-1.svg" alt="" />
                                    </div>
                                    <div className="who-we-item-image">
                                        <img src="images/who-we-are-image-1.png" alt="" />
                                    </div>
                                </div>
                                {/* Who We Item Header End */}
                                {/* Who We Item Body Start */}
                                <div className="who-we-item-body">
                                    {/* Who We Item Content Start */}
                                    <div className="who-we-item-content">
                                        <h3>
                                            Experienced technicians delivering reliable pest control
                                        </h3>
                                        <p>
                                            Experienced technicians providing reliable pest control solutions using modern tools and proven techniques for effective results.
                                        </p>
                                    </div>
                                    {/* Who We Item Content End */}
                                    {/* Who We Body List Start */}
                                    <div className="who-we-body-list">
                                        <ul>
                                            <li>Certified</li>
                                            <li>Effective</li>
                                            <li>Safe</li>
                                        </ul>
                                    </div>
                                    {/* Who We Body List End */}
                                </div>
                                {/* Who We Item Body End */}
                            </div>
                            {/* Who We Are Item End */}
                        </div>
                        <div className="col-xl-4 col-md-6">
                            {/* Who We Are Item Start */}
                            <div className="who-we-are-item wow fadeInUp" data-wow-delay="0.4s">
                                {/* Who We Item Header Start */}
                                <div className="who-we-item-header">
                                    <div className="icon-box">
                                        <img src="images/icon-who-we-are-item-2.svg" alt="" />
                                    </div>
                                    <div className="who-we-item-image">
                                        <img src="images/who-we-are-image-2.png" alt="" />
                                    </div>
                                </div>
                                {/* Who We Item Header End */}
                                {/* Who We Item Body Start */}
                                <div className="who-we-item-body">
                                    {/* Who We Item Content Start */}
                                    <div className="who-we-item-content">
                                        <h3>Advanced methods for long-lasting pest protection</h3>
                                        <p>
                                            We use advanced and eco-friendly methods to ensure long-lasting pest protection for your home and business.
                                        </p>
                                    </div>
                                    {/* Who We Item Content End */}
                                    {/* Who We Body List Start */}
                                    <div className="who-we-body-list">
                                        <ul>
                                            <li>Certified</li>
                                            <li>Effective</li>
                                            <li>Safe</li>
                                        </ul>
                                    </div>
                                    {/* Who We Body List End */}
                                </div>
                                {/* Who We Item Body End */}
                            </div>
                            {/* Who We Are Item End */}
                        </div>
                        <div className="col-xl-4 col-md-6">
                            {/* Who We Are Item Start */}
                            <div className="who-we-are-item wow fadeInUp" data-wow-delay="0.6s">
                                {/* Who We Item Header Start */}
                                <div className="who-we-item-header">
                                    <div className="icon-box">
                                        <img src="images/icon-who-we-are-item-3.svg" alt="" />
                                    </div>
                                    <div className="who-we-item-image">
                                        <img src="images/who-we-are-image-3.png" alt="" />
                                    </div>
                                </div>
                                {/* Who We Item Header End */}
                                {/* Who We Item Body Start */}
                                <div className="who-we-item-body">
                                    {/* Who We Item Content Start */}
                                    <div className="who-we-item-content">
                                        <h3>Residential and commercial pest management experts</h3>
                                        <p>
                                            Specialized in both residential and commercial pest control services across Patna and nearby areas.
                                        </p>
                                    </div>
                                    {/* Who We Item Content End */}
                                    {/* Who We Body List Start */}
                                    <div className="who-we-body-list">
                                        <ul>
                                            <li>Certified</li>
                                            <li>Effective</li>
                                            <li>Safe</li>
                                        </ul>
                                    </div>
                                    {/* Who We Body List End */}
                                </div>
                                {/* Who We Item Body End */}
                            </div>
                            {/* Who We Are Item End */}
                        </div>
                        <div className="col-lg-12">
                            {/* Section Footer Text Start */}
                            <div
                                className="section-footer-text section-satisfy-img wow fadeInUp"
                                data-wow-delay="0.2s"
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
                                    Connect with our team for professional pest solutions tailored to
                                    your needs. - <a href="contact.html">Join Us Today</a>
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
                                    <li>Our 4200 Reviews</li>
                                </ul>
                            </div>
                            {/* Section Footer Text End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Who We Are Section End */}
            {/* Our Achievements Section start */}
            <div className="our-achievements bg-section dark-section parallaxie">
                <div className="container">
                    <div className="row section-row">
                        <div className="col-lg-12">
                            {/* Section title Start */}
                            <div className="section-title section-title-center">
                                <span className="section-sub-title wow fadeInUp">Achievements</span>
                                <h2 className="text-anime-style-3">
                                    Our Achievements & Trusted Pest Control Excellence
                                </h2>
                            </div>
                            {/* Section title End */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            {/* Achievement Item Start */}
                            <div className="achievement-item wow fadeInUp">
                                {/* Achievement Item Image Start */}
                                <div className="achievement-item-image">
                                    <img src="images/achievement-image-1.png" alt="" />
                                </div>
                                {/* Achievement Item Image End */}
                                {/* Achievement Item Title Start */}
                                <div className="achievement-item-year">
                                    <h2>200+</h2>
                                </div>
                                {/* Achievement Item Title End */}
                                {/* Achievement Item Content Start */}
                                <div className="achievement-item-content">
                                    <h3>Happy Clients  </h3>
                                </div>
                                {/* Achievement Item Content End */}
                            </div>
                            {/* Achievement Item End */}
                        </div>
                        <div className="col-xl-3 col-md-6">
                            {/* Achievement Item Start */}
                            <div className="achievement-item wow fadeInUp" data-wow-delay="0.2s">
                                {/* Achievement Item Image Start */}
                                <div className="achievement-item-image">
                                    <img src="images/achievement-image-2.png" alt="" />
                                </div>
                                {/* Achievement Item Image End */}
                                {/* Achievement Item Title Start */}
                                <div className="achievement-item-year">
                                    <h2>500+</h2>
                                </div>
                                {/* Achievement Item Title End */}
                                {/* Achievement Item Content Start */}
                                <div className="achievement-item-content">
                                    <h3>Projects Completed  </h3>
                                </div>
                                {/* Achievement Item Content End */}
                            </div>
                            {/* Achievement Item End */}
                        </div>
                        <div className="col-xl-3 col-md-6">
                            {/* Achievement Item Start */}
                            <div className="achievement-item wow fadeInUp" data-wow-delay="0.4s">
                                {/* Achievement Item Image Start */}
                                <div className="achievement-item-image">
                                    <img src="images/achievement-image-3.png" alt="" />
                                </div>
                                {/* Achievement Item Image End */}
                                {/* Achievement Item Title Start */}
                                <div className="achievement-item-year">
                                    <h2>5+</h2>
                                </div>
                                {/* Achievement Item Title End */}
                                {/* Achievement Item Content Start */}
                                <div className="achievement-item-content">
                                    <h3>Years Experience  </h3>
                                </div>
                                {/* Achievement Item Content End */}
                            </div>
                            {/* Achievement Item End */}
                        </div>
                        <div className="col-xl-3 col-md-6">
                            {/* Achievement Item Start */}
                            <div className="achievement-item wow fadeInUp" data-wow-delay="0.6s">
                                {/* Achievement Item Image Start */}
                                <div className="achievement-item-image">
                                    <img src="images/achievement-image-4.png" alt="" />
                                </div>
                                {/* Achievement Item Image End */}
                                {/* Achievement Item Title Start */}
                                <div className="achievement-item-year">
                                    <h2>100%</h2>
                                </div>
                                {/* Achievement Item Title End */}
                                {/* Achievement Item Content Start */}
                                <div className="achievement-item-content">
                                    <h3>Satisfaction Guarantee</h3>
                                </div>
                                {/* Achievement Item Content End */}
                            </div>
                            {/* Achievement Item End */}
                        </div>
                        <div className="col-lg-12">
                            {/* Section Footer Text Start */}
                            <div
                                className="section-footer-text wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                <p>
                                    <span>Free</span>Connect with our team for professional pest
                                    solutions tailored to your needs. -{" "}
                                    <a href="contact.html">Join Us Today</a>
                                </p>
                            </div>
                            {/* Section Footer Text End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Achievements Section End */}
            {/* Our Team Section Start */}
            <div className="our-team">
                <div className="container">
                    <div className="row section-row">
                        <div className="col-lg-12">
                            {/* section title start */}
                            <div className="section-title section-title-center">
                                <span className="section-sub-title wow fadeInUp">Our Team</span>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">
                                    Dedicated experts delivering reliable pest control
                                </h2>
                            </div>
                            {/* section title end */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            {/* Team Item Start */}
                            <div className="team-item wow fadeInUp">
                                <div className="team-item-image">
                                    <a
                                        href="team-single.html"
                                        className="image-anime"
                                        data-cursor-text="View"
                                    >
                                        <figure>
                                            <img src="images/team-1.jpg" alt="" />
                                        </figure>
                                    </a>
                                </div>
                                <div className="team-item-content">
                                    <h2>
                                        <a href="team-single.html">Shambhu Kumar</a>
                                    </h2>
                                    <p>Marketing Head </p>
                                </div>
                                <div className="team-social-list">
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
                            </div>
                            {/* Team Item End */}
                        </div>
                        <div className="col-xl-3 col-md-6">
                            {/* Team Item Start */}
                            <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="team-item-image">
                                    <a
                                        href="team-single.html"
                                        className="image-anime"
                                        data-cursor-text="View"
                                    >
                                        <figure>
                                            <img src="images/team-2.jpg" alt="" />
                                        </figure>
                                    </a>
                                </div>
                                <div className="team-item-content">
                                    <h2>
                                        <a href="team-single.html">Rekha Kumari</a>
                                    </h2>
                                    <p>Sales Manager</p>
                                </div>
                                <div className="team-social-list">
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
                            </div>
                            {/* Team Item End */}
                        </div>
                        <div className="col-xl-3 col-md-6">
                            {/* Team Item Start */}
                            <div className="team-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="team-item-image">
                                    <a
                                        href="team-single.html"
                                        className="image-anime"
                                        data-cursor-text="View"
                                    >
                                        <figure>
                                            <img src="images/team-3.jpg" alt="" />
                                        </figure>
                                    </a>
                                </div>
                                <div className="team-item-content">
                                    <h2>
                                        <a href="team-single.html">Darlene Robertson</a>
                                    </h2>
                                    <p>Senior Pest Control Technician</p>
                                </div>
                                <div className="team-social-list">
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
                            </div>
                            {/* Team Item End */}
                        </div>
                        <div className="col-xl-3 col-md-6">
                            {/* Team Item Start */}
                            <div className="team-item wow fadeInUp" data-wow-delay="0.8s">
                                <div className="team-item-image">
                                    <a
                                        href="team-single.html"
                                        className="image-anime"
                                        data-cursor-text="View"
                                    >
                                        <figure>
                                            <img src="images/team-4.jpg" alt="" />
                                        </figure>
                                    </a>
                                </div>
                                <div className="team-item-content">
                                    <h2>
                                        <a href="team-single.html">Brooklyn Simmons</a>
                                    </h2>
                                    <p>Field Operations Manager</p>
                                </div>
                                <div className="team-social-list">
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
                            </div>
                            {/* Team Item End */}
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
                                    Connect with our team for professional pest solutions tailored to
                                    your needs. - <a href="contact.html">Join Us Today</a>
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
                                    <li>Our 4200 Reviews</li>
                                </ul>
                            </div>
                            {/* Section Footer Text End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Team Section End */}
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
                                        Our Simple & Effective Pest Control Process
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
                                            <p>Identify pest problem and affected areas</p>
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
                                            <p>Customized solution based on infestation.</p>
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
                                            <p>Eco-friendly and effective pest removal.</p>
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
                                    Complete Protection from All Types of Pests
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
                                        What Our Customers Say About Our Pest Control Services
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
                                                Yes, we use government-approved and eco-friendly pest control chemicals that are safe for children, pets, and the environment.
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
                                                We recommend pest control services every 3–6 months depending on infestation level and property type.
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
                                                Basic cleaning and covering food items is recommended before treatment. Our team will guide you.
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
                                                Yes, we provide follow-up inspections and support to ensure complete pest control.
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
                                                In some cases pests may return, but we provide preventive solutions and warranty-based services.
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
            {/* Our Faqs Section End */}
        </>

    )
}

export default page