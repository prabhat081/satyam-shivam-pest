import React from 'react'

function About() {
    return (
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
    )
}

export default About