import React from 'react'

function Header() {
  return (
     <header className="main-header">
            <div className="header-sticky bg-section">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        {/* Logo Start */}
                        <a className="navbar-brand" href="./">
                            <img src="/images/logo.png" alt="Logo" width={200} className="rounded" />
                        </a>
                        {/* Logo End */}
                        {/* Main Menu Start */}
                        <div className="collapse navbar-collapse main-menu">
                            <div className="nav-menu-wrapper">
                                <ul className="navbar-nav mr-auto" id="menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="./">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/about-us">
                                            About Us
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/services">
                                            Services
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/gallery">
                                            Gallery
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/teams">
                                            Teams
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/contact-us">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* Header Btn Start */}
                            <div className="header-btn">
                                <a href="contact.html" className="btn-default btn-highlighted">
                                    Start Free Trial
                                </a>
                            </div>
                            {/* Header Btn End */}
                        </div>
                        {/* Main Menu End */}
                        <div className="navbar-toggle" />
                    </div>
                </nav>
                <div className="responsive-menu" />
            </div>
        </header>
  )
}

export default Header