import Faq from "@/components/Faq";
import About from "@/components/home/About";
import OurProcess from "@/components/home/OurProcess";
import OurProtection from "@/components/home/OurProtection";
import Testimonial from "@/components/home/Testimonial";
import Team from "@/components/Team";
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
            <About />
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
                                    <a href="/contact-us" className="btn-default">
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
                                    your needs. - <a href="/contact-us">Join Us Today</a>
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
                                    <a href="/contact-us">Join Us Today</a>
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
                    <Team/>
                </div>
            </div>
            {/* Our Team Section End */}
            {/* Our Process Section Start */}
            <OurProcess />
            {/* Our Process Section End */}
            {/* Our Protection Section Start */}
            <OurProtection />

            {/* Our Protection Section End */}
            {/* Our Testimonials Section Start */}
            <Testimonial />

            {/* Our Testimonials Section End */}
            {/* Our Faqs Section Start */}
           <Faq />
            {/* Our Faqs Section End */}
        </>

    )
}

export default page