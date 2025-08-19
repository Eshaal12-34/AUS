import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/scss/_header.scss";
import "../assets/scss/_buttons.scss";
import "../assets/main.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <>

      <>
  {/* Preloader Start */}
  <div id="preloader" className="preloader">
    <div className="animation-preloader">
      <div className="spinner"></div>
      <div className="txt-loading">
        <span data-text-preloader="A" className="letters-loading">
          A
        </span>
        <span data-text-preloader="B" className="letters-loading">
          B
        </span>
        <span data-text-preloader="A" className="letters-loading">
          A
        </span>
        <span data-text-preloader="S" className="letters-loading">
          S
        </span>
        <span data-text-preloader="Y" className="letters-loading">
          Y
        </span>
        <span data-text-preloader="N" className="letters-loading">
          N
        </span>
        <span data-text-preloader="S" className="letters-loading">
          S
        </span>
        <span data-text-preloader="C" className="letters-loading">
          C
        </span>
        <span data-text-preloader="H" className="letters-loading">
          H
        </span>
        <span data-text-preloader="O" className="letters-loading">
          O
        </span>
        <span data-text-preloader="O" className="letters-loading">
          O
        </span>
        <span data-text-preloader="L" className="letters-loading">
          L
        </span>
      </div>
      <p className="text-center">Loading</p>
    </div>
    <div className="loader">
      <div className="row">
        <div className="col-3 loader-section section-left">
          <div className="bg" />
        </div>
        <div className="col-3 loader-section section-left">
          <div className="bg" />
        </div>
        <div className="col-3 loader-section section-right">
          <div className="bg" />
        </div>
        <div className="col-3 loader-section section-right">
          <div className="bg" />
        </div>
      </div>
    </div>
  </div>
</>
      {/* Offcanvas Area */}
  <div className="fix-area">
    <div className="offcanvas__info">
      <div className="offcanvas__wrapper">
        <div className="offcanvas__content">
          <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
            <div className="offcanvas__logo">
              <a href="index.html">
                <img src="assets/img/logo/logo.png" alt="logo-img" />
              </a>
            </div>
            <div className="offcanvas__close">
              <button>
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
        
          <div className="mobile-menu fix mb-3" />
          <div className="offcanvas__contact">
            <h4>Contact Info</h4>
            <ul>
              <li className="d-flex align-items-center">
                <div className="offcanvas__contact-icon">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <div className="offcanvas__contact-text">
                  <a target="_blank" href="#">
                    Main Street, Melbourne, Australia
                  </a>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="offcanvas__contact-icon mr-15">
                  <i className="fal fa-envelope" />
                </div>
                <div className="offcanvas__contact-text">
                  <a href="mailto:info@example.com">
                    <span className="mailto:info@example.com">
                      info@example.com
                    </span>
                  </a>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="offcanvas__contact-icon mr-15">
                  <i className="fal fa-clock" />
                </div>
                <div className="offcanvas__contact-text">
                  <a target="_blank" href="#">
                    Mod-friday, 09am -05pm
                  </a>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="offcanvas__contact-icon mr-15">
                  <i className="far fa-phone" />
                </div>
                <div className="offcanvas__contact-text">
                  <a href="tel:+11002345909">+11002345909</a>
                </div>
              </li>
            </ul>
            <div className="header-button mt-4">
              <a href="contact.html" className="theme-btn text-center">
                <span>
                  Get A Quote
                  <i className="fa-solid fa-arrow-right-long" />
                </span>
              </a>
            </div>
            <div className="social-icon d-flex align-items-center">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="offcanvas__overlay" />
</>


      {/* Header Top Section */}
      <div className="header-top-section">
        <div className="header-top-shape">
          <img src="assets/img/header-top-shape.png" alt="shape-img" />
        </div>
        <div className="container-fluid">
          <div className="header-top-wrapper">
            <ul className="contact-list">
              <li>
                <FontAwesomeIcon icon={faLocationDot} />
               Laki Dehri Road, Peshawar
              </li>
              <li>
                <i className="far fa-envelope" />
                <a href="mailto:info@example.com" className="link">
                  info@examm
                </a>
              </li>
            </ul>
            <div className="social-icon d-flex align-items-center">
              <span>Follow Us On:</span>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <header id="header-sticky" className={`header-1${isSticky ? " sticky" : ""}`}>
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main style-2">
              <div className="header-left">
                <div className="logo">
                  <Link to="/" className="header-logo">
                    <img
                      src="assets/img/logo/logo.png"
                      alt="logo-img"
                      width="100px"
                    />
                  </Link>
                </div>
              </div>

              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-dropdown active menu-thumb">
                          <Link to="/">Home</Link>
                        </li>

                        <li>
                          <Link to="/about-us">
                            About Us
                            <i className="fas fa-angle-down" />
                          </Link>
                          <ul className="submenu">
                            <li><Link to="/vision-mission">Vision & Mission</Link></li>
                             <li><a href="program-details.html">Principal's Message</a></li>
                            <li><Link to="/history">History</Link></li>
                            <li><a href="program-details.html">Achievements</a></li>
                            <li><Link to = "/faculty">Our Faculty</Link></li>
                            <li><a href="program-details.html">Policy</a></li>
                          </ul>
                        </li>

                         <li>
                          <a href="program-details.html">
                            Academics
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="submenu">
                            <li><Link to="/early-years">Early Years</Link></li>
                            <li><a href="program-details.html">Primary</a></li>
                            <li><a href="program-details.html">Secondary</a></li>
                          </ul>
                        </li>

                        <li>
                          <a href="program-details.html">
                            Admissions
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="submenu">
                            <li><a href="program.html">Admission Procedure</a></li>
                            <li><a href="program-carousel.html">Examinations</a></li>
                            <li><a href="program-details.html">Fee Structure</a></li>
                            <li><a href="program-details.html">Scholarships</a></li>
                          </ul>
                        </li>

                        <li>
                          <a>
                            Events
                          </a>
                            <i className="fas fa-angle-down" />
                          <ul className="submenu">
                            <li><Link to="/funfair">FunFair</Link></li>
                            <li><Link to="/trips">Recreational Trips</Link></li>
                            <li><Link to="/annual-day">Annual Day</Link></li>
                            <li><Link to="/farewell">Farewell</Link></li>
                            <li><Link to="/sports-gala">Sports Gala</Link></li>
                            <li><Link to="/student-engagement">Student Engagement</Link></li>
                          </ul>
                        </li>

                        <li>
                          <Link to="/contact-us">Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <a href="#0" className="search-trigger search-icon">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>

                <div className="header__hamburger d-xl-none my-auto">
                  <div className="sidebar__toggle">
                    <i className="fas fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
