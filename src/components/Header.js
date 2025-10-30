import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/_header.scss";
import "../assets/scss/_buttons.scss";
import "../assets/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
    document.body.style.overflow = !isOffcanvasOpen ? 'hidden' : 'unset';
  };

  const closeOffcanvas = () => {
    setIsOffcanvasOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      {/* Offcanvas Area */}
      <div className={`fix-area ${isOffcanvasOpen ? 'show-menu' : ''}`}>
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link to="/" onClick={closeOffcanvas}>
                    <img src="/assets/img/logo/logo.png" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={closeOffcanvas}>
                    <FontAwesomeIcon icon={faTimes} style={{color:"white"}} />
                  </button>
                </div>
              </div>
              
              <div className="mobile-menu fix mb-3" />
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link to="/contact-us">
                        Laki Dehri Road, Peshawar
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:abasynschool@abasyn.edu.pk">
                        <span>abasynschool@abasyn.edu.pk</span>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+091-258-8777">+091-258-8777</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link to="/contact-us" className="theme-btn text-center" onClick={closeOffcanvas}>
                    <span>
                     Contact Us
                      <i className="fa-solid fa-arrow-right-long" />
                    </span>
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="https://www.facebook.com/share/19hYixwkuP/">
                    <i className="fab fa-facebook-f" />
                  </a>
                 
                  <a href="https://www.youtube.com/@abasynuniversityschoolcoll2033">
                    <i className="fab fa-youtube" />
                  </a>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`offcanvas__overlay ${isOffcanvasOpen ? 'active' : ''}`} onClick={closeOffcanvas} />

      {/* Header Top Section */}
      <div className="header-top-section">
        <div className="header-top-shape">
          <img src="/assets/img/header-top-shape.png" alt="shape-img" />
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
                <a href="mailto:abasynschool@abasyn.edu.pk" className="link">
                 abasynschool@abasyn.edu.pk

                </a>
              </li>
            </ul>
            <div className="social-icon d-flex align-items-center">
              <span>Follow Us On:</span>
              <a href="https://www.facebook.com/share/19hYixwkuP/"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.youtube.com/@abasynuniversityschoolcoll2033"><i className="fab fa-youtube"></i></a>
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
                      src="/assets/img/logo/logo.png"
                      alt="logo-img"
                      width="100px"
                    />
                  </Link>
                </div>
              </div>

              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="mean__menu-wrapper d-none d-xl-block">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-dropdown active menu-thumb">
                          <Link to="/">Home</Link>
                        </li>

                        <li className="has-dropdown">
                         
                            <a>About</a>
                            <i className="fas fa-angle-down" />
                       
                          <ul className="submenu">
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/vision-mission">Vision & Mission</Link></li>
                            <li><Link to="/message">Messages</Link></li>
                            <li><Link to="/history">History</Link></li>
                            <li><Link to="/parent-teacher-interaction">Parent-Teacher Interaction</Link></li>
                            <li><Link to="/faculty">Our Faculty</Link></li>
                          </ul>
                        </li>

                        <li className="has-dropdown">
                          <a>Academics</a>
                          <i className="fas fa-angle-down" />
                          <ul className="submenu">
                            <li><Link to="/early-years">Early Years</Link></li>
                            <li><Link to="/primary-year">Primary</Link></li>
                            <li className="has-dropdown">
                              Secondary
                              <ul className="submenu nested">
                                <li><Link to="/lower-secondary-year">Lower Secondary (6–7)</Link></li>
                                <li><Link to="/higher-secondary-year">Higher Secondary (8–10)</Link></li>
                              </ul>
                            </li>
                          </ul>
                        </li>

                        <li className="has-dropdown">
                          <a>
                            Admissions
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="submenu">
                            <li><Link to="/admission-policy">Admission Policy</Link></li>
                            <li><a href="/examination-system">Examinations</a></li>
                            <li><Link to="/fee-structure">Fee Structure</Link></li>
                            <li><Link to="/scholarships">Scholarships</Link></li>
                          </ul>
                        </li>

                        <li className="has-dropdown">
                          <a>
                            Events
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="submenu">
                            <li><Link to="/funfair">FunFair</Link></li>
                            <li><Link to="/trips">Recreational Trips</Link></li>
                            <li><Link to="/annual-day">Annual Day</Link></li>
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

                <div className="header__hamburger d-xl-none my-auto">
                  <div className="sidebar__toggle" onClick={toggleOffcanvas}>
                    <FontAwesomeIcon icon={faBars} />
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