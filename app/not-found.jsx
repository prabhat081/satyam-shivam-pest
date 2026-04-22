import React from 'react'
import Link from 'next/link'

function NotFound() {
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
                                    Page not found
                                </h1>
                                <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link href="/">Return Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            404 error page
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
            {/* error Page start */}
            <div className="error-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="error-page-image wow fadeInUp">
                                <img src="images/404-error-img.png" alt="" />
                            </div>
                            <div className="error-page-content">
                                <div className="section-title">
                                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                                        Oops! page not found
                                    </h2>
                                </div>
                                <div className="error-page-content-body">
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        The page you are looking for does not exist.
                                    </p>
                                    <a
                                        className="btn-default wow fadeInUp"
                                        data-wow-delay="0.4s"
                                        href="./"
                                    >
                                        Back to Homepage
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* error Page end */}
        </>

    )
}

export default NotFound;