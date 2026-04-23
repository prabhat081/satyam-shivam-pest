import services from "@/data/services.json";
import Link from "next/link";
function Footer() {
    return (
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
                                    We are a trusted pest control company in Patna providing safe, effective, and affordable pest control solutions for homes and businesses. Our expert team ensures long-lasting protection using eco-friendly methods.
                                </p>
                            </div>
                            {/* About Footer Content End */}
                            {/* Footer Social links Start */}
                            <div className="footer-social-links">
                                <ul>
                                    {/* <li>
                                        <a href="#">
                                            <i className="fa-brands fa-pinterest-p" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-x-twitter" />
                                        </a>
                                    </li> */}
                                    <li>
                                        <a href="https://www.facebook.com/p/Satyam-shivam-pest-control-100086722754163/" target="__blank">
                                            <i className="fa-brands fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/satyam_shivam_pest_control/?igsh=Mm84Nzl4b3lvNW0w" target="__blank">
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
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/about-us">About Us</a>
                                    </li>
                                    <li>
                                        <a href="/services">Our Services</a>
                                    </li>
                                    <li>
                                        <a href="/gallery">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="/teams">Teams</a>
                                    </li>
                                    <li>
                                        <a href="/contact-us">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            {/* Footer Links End */}
                            {/* Footer Links Start */}
                            <div className="footer-links footer-service-links">
                                <h3>Our Services</h3>
                                <ul>
                                    {services.map((service, index) => (
                                        <li key={index}>
                                            <Link href={`/services/${service.slug}`}>
                                                {service.title}
                                            </Link>
                                        </li>))}

                                </ul>
                            </div>
                            {/* Footer Links End */}
                            {/* Footer Links Start */}
                            <div className="footer-links footer-contact-list-box">
                                <h3>Working Hours</h3>
                                <ul>
                                    <li>Monday - Saturday: 9:00 AM - 7:00 PM</li>
                                    <li>Sunday: Emergency Pest Control Available </li>
                                    <li>Same Day Service</li>
                                    <li>24/7 Support Available </li>
                                </ul>
                                <div className="footer-contact-item-list">
                                    <div className="footer-contact-item">
                                        <div className="icon-box">
                                            <img src="/images/icon-headphone-primary.svg" alt="" />
                                        </div>
                                        <div className="footer-contact-item-content">
                                            <p>Call Us Now</p>
                                            <h4>
                                                <a href="tel:123456789">+(91) 96930 33824</a>
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
                                <img className='rounded' src="/images/logo.png" alt="" />
                            </div>
                            {/* Footer Logo End */}
                            {/* Footer Newsletter Form Start */}
                            <div className="footer-newsletter-form-box">
                                {/* Footer Newsletter Form Title Start */}
                                <div className="footer-newsletter-form-title">
                                    <h3>Get Pest Control Tips & Offers</h3>
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
                            <p>
                                © 2026 Satyam Shivam Pest Control. All Rights Reserved.
                            </p>
                            <p>
                                Website Designed & Developed by{" "}
                                <a
                                    href="https://prabhatwebtechnologies.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Prabhat Web Technologies
                                </a>
                            </p>
                        </div>
                        {/* Footer Copyright Text End */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer