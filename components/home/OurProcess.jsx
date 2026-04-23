import React from 'react'

function OurProcess() {
  return (
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
  )
}

export default OurProcess