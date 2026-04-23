import React from 'react'

function Faq() {
    return (
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
                                <a href="#" className="btn-default">
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
    )
}

export default Faq