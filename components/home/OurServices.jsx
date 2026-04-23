import services from "@/data/services.json";
import Link from "next/link";

function OurServices() {
    return (
        <div className="our-services bg-section">
            <div className="container">
                <div className="row section-row">
                    <div className="col-lg-12">
                        {/* Section Title Start */}
                        <div className="section-title section-title-center">
                            <span className="section-sub-title wow fadeInUp">Our Pest Control Services</span>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">
                                Professional Pest Control Services in Patna for Homes & Businesses
                            </h2>
                        </div>
                        {/* Section Title End */}
                    </div>
                </div>
                <div className="row">
                    {services.map((service, index) => (
                        <div key={index} className="col-xl-3 col-md-6">
                            {/* Service Item Start */}
                            <div className="service-item wow fadeInUp">
                                <div className="service-item-header">
                                    <div className="service-item-image">
                                        <a href="service-single.html" data-cursor-text="View">
                                            <figure className="image-anime">
                                                <img src={service.image} alt={service.title} />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="icon-box">
                                        <img src={service.icon} alt={service.title} />
                                    </div>
                                </div>
                                <div className="service-item-body">
                                    <div className="service-item-content">
                                        <h2>
                                            <Link href={`/services/${service.slug}`}>
                                                {service.title}
                                            </Link>
                                        </h2>
                                        <p>{service.short}</p>
                                    </div>
                                    <div className="service-item-btn">
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="readmore-btn"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Service Item End */}
                        </div>
                    ))}
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
                                Get fast, reliable, and affordable pest control services in Patna. Protect your home and business with expert solutions. -
                                <a href="/services">View All Services</a>
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
                                <li>Rated 4.9/5 by 200+ Happy Customers</li>
                            </ul>
                        </div>
                        {/* Section Footer Text End */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices