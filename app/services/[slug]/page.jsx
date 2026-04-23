import React from 'react'
import { notFound } from "next/navigation";

import services from "@/data/services.json";
import Link from 'next/link';
import Image from 'next/image';
/* ✅ SEO */
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) return {};

    return {
        title: service.seo.title,
        description: service.seo.description,
    };
}

/* ✅ STATIC PATH */
export async function generateStaticParams() {
    return services.map((s) => ({
        slug: s.slug,
    }));
}

async function page({ params }) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) return notFound();
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
                                    {service.title}
                                </h1>
                                <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <Link href="/services">Services</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            {service.title}
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
            {/* Page Service Single Start */}
            <div className="page-service-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            {/* Page Single Sidebar Start */}
                            <div className="page-single-sidebar">
                                {/* Page Category List Start */}
                                <div className="page-category-list wow fadeInUp">
                                    <h2 className="page-category-list-title">Explore Our Services</h2>
                                    <ul>
                                        {services.map((s) => (
                                            <li key={s.slug}>
                                                <Link href={`/services/${s.slug}`}>
                                                    {s.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Page Category List End */}
                                {/* Sidebar CTA Box Start */}
                                <div
                                    className="sidebar-cta-box wow fadeInUp"
                                    data-wow-delay="0.25s"
                                >
                                    <div className="sidebar-cta-content-box">

                                        <div className="sidebar-cta-logo">
                                            <img src="/images/logo.svg" alt="Satyam Shivam Pest Control" />
                                        </div>

                                        <div className="sidebar-cta-content">
                                            <h2>Need Pest Control Service?</h2>

                                            <ul>
                                                <li>Mon - Sat: 9:00 AM - 7:00 PM</li>
                                                <li>Kanti Factory Road, Patna, Bihar - 800020</li>
                                                <li>
                                                    <a href="mailto:satyamshivampestcontrol@gmail.com">
                                                        satyamshivampestcontrol@gmail.com
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="sidebar-cta-contact-item">
                                            <div className="icon-box">
                                                <img src="/images/icon-headphone-primary.svg" alt="Call Pest Control" />
                                            </div>

                                            <div className="sidebar-cta-contact-content">
                                                <h3>
                                                    <a href="tel:+917352671666">
                                                        +91 7352671666
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="sidebar-cta-btn">
                                        <a href="/contact-us">Book Service Now</a>
                                    </div>
                                </div>
                                {/* Sidebar CTA Box End */}
                            </div>
                            {/* Page Single Sidebar End */}
                        </div>
                        <div className="col-lg-8">
                            {/* Service Single Content Start */}
                            <div className="service-single-content">
                                {/* Page Single Image Start */}
                                <div className="page-single-image">
                                    <figure className="image-anime">
                                        <Image
                                            key={service.slug}
                                            src={service.image}
                                            alt={service.title}
                                            width={800}
                                            height={500}
                                            unoptimized
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                    </figure>
                                </div>
                                {/* Page Single Image End */}
                                {/* Service Entry Start */}
                                <div className="service-entry">
                                    <p className="wow fadeInUp">
                                        {service.content.intro}
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        {service.short}
                                    </p>
                                    {/* Service Entry Box Start */}
                                    <div className="service-info-box">
                                        <h2 className="text-anime-style-3">
                                            {service.title} Details
                                        </h2>
                                        <p className="wow fadeInUp">
                                            {service.content.intro}
                                        </p>
                                        {/* Service Entry Image Content Start */}
                                        <div className="service-entry-image-content">
                                            {/* Service Entry Item List Start */}
                                            <div className="service-entry-item-list">
                                                {/* Service Entry Item Start */}
                                                <div className="service-entry-item wow fadeInUp">
                                                    <div className="icon-box">
                                                        <img src="/images/icon-service-info-1.svg" alt="" />
                                                    </div>
                                                    <div className="service-entry-item-content">
                                                        <h3>Red itchy bite mark on skin</h3>
                                                        <p>
                                                            Small red itchy bite marks on the skin common sign of
                                                            pest activity.
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* Service Entry Item End */}
                                                {/* Service Entry Item Start */}
                                                <div
                                                    className="service-entry-item wow fadeInUp"
                                                    data-wow-delay="0.2s"
                                                >
                                                    <div className="icon-box">
                                                        <img src="/images/icon-service-info-2.svg" alt="" />
                                                    </div>
                                                    <div className="service-entry-item-content">
                                                        <h3>Blood stains on bedsheets</h3>
                                                        <p>
                                                            Small red itchy bite marks on the skin common sign of
                                                            pest activity.
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* Service Entry Item End */}
                                            </div>
                                            {/* Service Entry Item List End */}
                                            {/* Service Entry Image Start */}
                                            <div className="service-entry-image">
                                                <figure className="image-anime">
                                                    <img src="/images/service-entry-image.jpg" alt="" />
                                                </figure>
                                            </div>
                                            {/* Service Entry Image End */}
                                        </div>
                                        {/* Service Entry Image Content End */}
                                    </div>
                                    {/* Service Entry Box End */}
                                    {/* Service Process Box Start */}
                                    <div className="service-process-box">
                                        <h2 className="text-anime-style-3">
                                            Our bed bug treatment process
                                        </h2>
                                        <p className="wow fadeInUp">
                                            Our bed bug treatment process is designed to eliminate
                                            infestations completely and prevent their return. We begin
                                            with a detailed inspection to identify hiding spots,
                                            infestation severity, and affected areas. Based on our
                                            findings.
                                        </p>
                                        {/* Service Process Item List Start */}
                                        <div className="service-process-item-list">
                                            {/* Service Process Item Start */}
                                            <div
                                                className="service-process-item wow fadeInUp"
                                                data-wow-delay="0.2s"
                                            >
                                                <div className="service-process-item-no">
                                                    <span>01</span>
                                                </div>
                                                <div className="service-process-item-content">
                                                    <h3>Detailed Inspection</h3>
                                                    <p>
                                                        Our technicians conduct a thorough inspection to
                                                        identify infestation levels and hiding spots.
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Service Process Item End */}
                                            {/* Service Process Item Start */}
                                            <div
                                                className="service-process-item wow fadeInUp"
                                                data-wow-delay="0.4s"
                                            >
                                                <div className="service-process-item-no">
                                                    <span>02</span>
                                                </div>
                                                <div className="service-process-item-content">
                                                    <h3>Treatment Plan</h3>
                                                    <p>
                                                        Our technicians conduct a thorough inspection to
                                                        identify infestation levels and hiding spots.
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Service Process Item End */}
                                            {/* Service Process Item Start */}
                                            <div
                                                className="service-process-item wow fadeInUp"
                                                data-wow-delay="0.6s"
                                            >
                                                <div className="service-process-item-no">
                                                    <span>03</span>
                                                </div>
                                                <div className="service-process-item-content">
                                                    <h3>Follow-Up</h3>
                                                    <p>
                                                        Our technicians conduct a thorough inspection to
                                                        identify infestation levels and hiding spots.
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Service Process Item End */}
                                        </div>
                                        {/* Service Process Item List End */}
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
                                                <li>Over 4200 Reviews</li>
                                            </ul>
                                        </div>
                                        {/* Section Footer Text End */}
                                    </div>
                                    {/* Service Process Box End */}
                                    {/* Service Treatment Box Start */}
                                    <div className="service-treatment-box">
                                        <h2 className="text-anime-style-3">
                                            Why choose our bed bug treatment
                                        </h2>
                                        <p className="wow fadeInUp">
                                            Our bed bug treatment is trusted for its effectiveness,
                                            safety, and long-lasting results. With experienced technicians
                                            and advanced treatment methods, we ensure complete elimination
                                            of bed bugs at every life stage.
                                        </p>
                                        {/* Service Treatment Image Video Start */}
                                        <div
                                            className="service-treatment-image-video wow fadeInUp"
                                            data-wow-delay="0.2s"
                                        >
                                            <div className="service-treatment-image">
                                                <figure className="image-anime">
                                                    <img src="/images/service-treatment-image.jpg" alt="" />
                                                </figure>
                                            </div>
                                            <div className="video-play-button">
                                                <a
                                                    href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                                                    className="popup-video"
                                                    data-cursor-text="Play"
                                                >
                                                    <i className="fa-solid fa-play" />
                                                </a>
                                            </div>
                                        </div>
                                        {/* Service Treatment Image Video End */}
                                        {/* Service Treatment List Start */}
                                        <div
                                            className="service-treatment-list wow fadeInUp"
                                            data-wow-delay="0.4s"
                                        >
                                            <ul>
                                                <li>Advanced treatment technology</li>
                                                <li>Complete elimination all life stages</li>
                                                <li>Guaranteed customer satisfaction</li>
                                            </ul>
                                        </div>
                                        {/* Service Treatment List End */}
                                    </div>
                                    {/* Service Treatment Box End */}
                                </div>
                                {/* Service Entry End */}
                                {/* Page Single FAQs Start */}
                                <div className="page-single-faqs">
                                    {/* Section Title Start */}
                                    <div className="section-title">
                                        <h2 className="text-anime-style-3" data-cursor="-opaque">
                                            Frequently asked questions
                                        </h2>
                                    </div>
                                    {/* Section Title End */}
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
                                                    1. Do you offer one-time and recurring pest control plans?
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
                                                        We believe quality pest control should be affordable and
                                                        straightforward. Our plans come with upfront pricing,
                                                        flexible options, and clear explanations so you always
                                                        know.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                        {/* FAQ Item Start */}
                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.2s"
                                        >
                                            <h2 className="accordion-header" id="heading2">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse2"
                                                    aria-expanded="false"
                                                    aria-controls="collapse2"
                                                >
                                                    2. Are your treatments safe for children and pets?
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
                                                        We believe quality pest control should be affordable and
                                                        straightforward. Our plans come with upfront pricing,
                                                        flexible options, and clear explanations so you always
                                                        know.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                        {/* FAQ Item Start */}
                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.4s"
                                        >
                                            <h2 className="accordion-header" id="heading3">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse3"
                                                    aria-expanded="false"
                                                    aria-controls="collapse3"
                                                >
                                                    3. Do you provide commercial pest control services?
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
                                                        We believe quality pest control should be affordable and
                                                        straightforward. Our plans come with upfront pricing,
                                                        flexible options, and clear explanations so you always
                                                        know.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                        {/* FAQ Item Start */}
                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.6s"
                                        >
                                            <h2 className="accordion-header" id="heading4">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse4"
                                                    aria-expanded="false"
                                                    aria-controls="collapse4"
                                                >
                                                    4. Will I need to leave my home during treatment?
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
                                                        We believe quality pest control should be affordable and
                                                        straightforward. Our plans come with upfront pricing,
                                                        flexible options, and clear explanations so you always
                                                        know.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                        {/* FAQ Item Start */}
                                        <div
                                            className="accordion-item wow fadeInUp"
                                            data-wow-delay="0.8s"
                                        >
                                            <h2 className="accordion-header" id="heading5">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse5"
                                                    aria-expanded="false"
                                                    aria-controls="collapse5"
                                                >
                                                    5. Do you offer pest control for new constructions?
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
                                                        We believe quality pest control should be affordable and
                                                        straightforward. Our plans come with upfront pricing,
                                                        flexible options, and clear explanations so you always
                                                        know.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                    </div>
                                    {/* FAQ Accordion End */}
                                </div>
                                {/* Page Single FAQs End */}
                            </div>
                            {/* Service Single Content End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Service Single End */}
        </>

    )
}

export default page