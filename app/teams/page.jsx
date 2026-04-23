import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Pest Control Experts Team in Patna",
  description:
    "Meet our experienced pest control team in Patna specializing in termite, mosquito, cockroach, and rodent control services.",
  path: "/team",
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
                                    Our team
                                </h1>
                                <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="./">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Our Expert Team
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
            {/* page Team Start */}
            <div className="page-team">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            {/* Team Item Start */}
                            <div className="team-item wow fadeInUp">
                                <div className="team-item-image">
                                    <a
                                        href="#"
                                        className="image-anime"
                                        data-cursor-text="View"
                                    >
                                        <figure>
                                            <img src="/images/ceo.jpeg" alt="" />
                                        </figure>
                                    </a>
                                </div>
                                <div className="team-item-content">
                                    <h2>
                                        <a href="#">Shambhu Kumar</a>
                                    </h2>
                                    <p>Chief Pest Control Officer</p>
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
                        <div className="col-xl-4 col-md-6">
                            {/* Team Item Start */}
                            <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="team-item-image">
                                    <a
                                        href="#"
                                        className="image-anime"
                                        data-cursor-text="View"
                                    >
                                        <figure>
                                            <img src="images/director.jpeg" alt="director" />
                                        </figure>
                                    </a>
                                </div>
                                <div className="team-item-content">
                                    <h2>
                                        <a href="#">Rekha Kumari</a>
                                    </h2>
                                    <p>Sales Mangaer</p>
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
                        <div className="col-xl-4 col-md-6">
                            {/* Team Item Start */}
                            <div className="team-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="team-item-image">
                                    <a
                                        href="#"
                                        className="image-anime"
                                        data-cursor-text="View"
                                    >
                                        <figure>
                                            <img src="images/techinican.jpeg" alt="techinican" />
                                        </figure>
                                    </a>
                                </div>
                                <div className="team-item-content">
                                    <h2>
                                        <a href="#">Rajkapoor Kumar</a>
                                    </h2>
                                    <p>Techican</p>
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
                    </div>
                </div>
            </div>
            {/* page Team End */}
        </>

    )
}

export default page