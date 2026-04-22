import ContactForm from '@/components/ContactForm'
import React from 'react'

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
                                    Contact us
                                </h1>
                                <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="./">home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            contact us
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
            {/* Page Contact Us Start */}
            <div className="page-contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Contact Info List Start */}
                            <div className="contact-info-list">
                                {/* Contact Info Item Start  */}
                                <div className="contact-info-item wow fadeInUp">
                                    <div className="contact-info-item-image">
                                        <figure className="image-anime">
                                            <img src="images/contact-info-item-image-1.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="contact-info-item-body">
                                        <div className="icon-box">
                                            <img src="images/icon-headphone-primary.svg" alt="" />
                                        </div>
                                        <div className="contact-info-item-content">
                                            <p>Call Our Experts</p>
                                            <h2>
                                                <a href="tel:9693033824">+(91) 9693033824</a>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                {/* Contact Info Item End  */}
                                {/* Contact Info Item Start  */}
                                <div
                                    className="contact-info-item wow fadeInUp"
                                    data-wow-delay="0.2s"
                                >
                                    <div className="contact-info-item-image">
                                        <figure className="image-anime">
                                            <img src="images/contact-info-item-image-2.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="contact-info-item-body">
                                        <div className="icon-box">
                                            <img src="images/icon-mail-primary.svg" alt="" />
                                        </div>
                                        <div className="contact-info-item-content">
                                            <p>Send Your Query</p>
                                            <h2>
                                                <a href="mailto:satyamshivampestcontrol@gmail.com">satyamshivampestcontrol@gmail.com</a>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                {/* Contact Info Item End  */}
                                {/* Contact Info Item Start  */}
                                <div
                                    className="contact-info-item wow fadeInUp"
                                    data-wow-delay="0.4s"
                                >
                                    <div className="contact-info-item-image">
                                        <figure className="image-anime">
                                            <img src="images/contact-info-item-image-3.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div className="contact-info-item-body">
                                        <div className="icon-box">
                                            <img src="images/icon-location-primary.svg" alt="" />
                                        </div>
                                        <div className="contact-info-item-content">
                                            <p>Visit Our Office</p>
                                            <h2><small>Kanti factory road,new colony,mahatma gandhi nagar Patna, Bihar 800020</small></h2>
                                        </div>
                                    </div>
                                </div>
                                {/* Contact Info Item End  */}
                            </div>
                            {/* Contact Info List End */}
                        </div>
                        <div className="col-xl-6">
                            {/* Contact Us Image Box Start */}
                            <div className="contact-us-image-box wow fadeInUp">
                                {/* Contact Us Image Start */}
                                <div className="contact-us-image">
                                    <figure className="image-anime">
                                        <img src="images/contact-us-image.jpg" alt="" />
                                    </figure>
                                </div>
                                {/* Contact Us Image End */}
                                {/* Working Hour Box Start */}
                                <div className="working-hour-box">
                                    <h3>Working Hours:</h3>
                                    <ul>
                                        <li>Monday - Saturday: 9:00 AM - 7:00 PM</li>
                                        <li>Sunday: Emergency Pest Control Services Available</li>
                                        <li>Same-Day Service</li>
                                        <li>Fast Response Team</li>
                                        <li>Trusted by 200+ Clients</li>
                                    </ul>
                                </div>
                                {/* Working Hour Box End */}
                            </div>
                            {/* Contact Us Image Box End */}
                        </div>
                        <div className="col-xl-6">
                            {/* Contact Us Form Start */}
                            <div className="contact-us-form">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <span className="section-sub-title wow fadeInUp">Contact Us</span>
                                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                                        Get Fast & Reliable Pest Control Services in Patna
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        Looking for trusted pest control services in Patna?
                                        Our expert team provides effective solutions for termite, mosquito, cockroach, rat, and other pest problems using safe and modern techniques.

                                        We ensure fast response, eco-friendly treatments, and long-lasting protection for your home and business. Book your service today and experience hassle-free pest control.
                                    </p>
                                </div>
                                {/* Section Title End */}
                                {/* Contact Form Start */}
                                <div className="contact-form">
                                   <ContactForm />
                                </div>
                                {/* Contact Form End */}
                            </div>
                            {/* Contact Us Form End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Contact Us End */}
            {/* Google Map Start */}
            <div className="google-map">
                <div className="container">
                    <div className="row section-row">
                        <div className="col-lg-12">
                            {/* Section Title Start */}
                            <div className="section-title section-title-center">
                                <span className="section-sub-title wow fadeInUp">Find Us Easily in Patna</span>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">
                                    We are located in Mahatma Gandhi Nagar, Patna. Visit us or call for quick service.
                                </h2>
                            </div>
                            {/* Section Title End */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Google Map Start */}
                            <div className="google-map-iframe wow fadeInUp" data-wow-delay="0.2s">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28784.07966402598!2d85.17932599901121!3d25.604585347919194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x18d2d44b6f7a6002!2sSatyam%20Shivam%20Pest%20Control%20Services!5e0!3m2!1sen!2sin!4v1662910797679!5m2!1sen!2sin"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                            {/* Google Map End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Google Map End */}
        </>

    )
}

export default page