import React from "react";
import Banner from "../components/Banner";
import "../assets/main.css";  
import "../assets/scss/_about.scss"; 
import "../assets/scss/_section.scss";

const About = () => {
  return (
    <section className="about-section section-padding">
      <div className="bus-shape float-bob-x">
        <img src="assets/img/about/bus.png" alt="shape-img" />
      </div>
      <div className="girl-shape float-bob-y">
        <img src="assets/img/about/girl.png" alt="shape-img" />
      </div>
      <div className="dot-shape">
        <img src="assets/img/about/dot.png" alt="shape-img" />
      </div> 
      <div className="container">
        <div className="about-wrapper mb-40">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-image-items">
               <div className="about-image wow fadeInUp" data-wow-delay=".3s">
                  <img src="assets/img/about/02.jpg" alt="about-img" />
                </div>
                <div className="about-image-2">
                  <img src="assets/img/about/02.png" alt="about-img" />
                  <div className="icon-box">
                    <img src="assets/img/about/icon-1.svg" alt="icon-img" />
                  </div>
                </div> 
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <h6 className="wow fadeInUp">About Kidsa</h6>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Best Early Learning & <br />
                    Kids School
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Mauris tempus cursus massa et efficitur. Donec vel tristique sem, vel cursus 
                  tortor. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent 
                  per conubia nostra, per inceptos himenaeos.
                </p>
                <div className="about-author">
                  {/* <div className="about-author-thumb">
                    <img src="assets/img/about/author.png" alt="author-img" />
                  </div> */}
                  <div className="about-author-content">
                    <h5>John Doe</h5>
                    <p>Founder & CEO</p>
                  </div>
                </div>
                <div className="about-button mt-5">
                  <a href="about.html" className="theme-btn">
                    Learn More <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Counter Section */}
        <div className="counter-section">
          <div className="row g-4">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="counter-items text-center">
                {/* <div className="counter-image">
                  <img src="assets/img/counter/icon-1.svg" alt="counter-icon" />
                </div> */}
                <div className="counter-content">
                  <h3><span className="count">100</span>+</h3>
                  <p>Total Students</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="counter-items text-center">
                {/* <div className="counter-image">
                  <img src="assets/img/counter/icon-2.svg" alt="counter-icon" />
                </div> */}
                <div className="counter-content">
                  <h3><span className="count">50</span>+</h3>
                  <p>Qualified Teachers</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="counter-items text-center">
                {/* <div className="counter-image">
                  <img src="assets/img/counter/icon-3.svg" alt="counter-icon" />
                </div> */}
                <div className="counter-content">
                  <h3><span className="count">30</span>+</h3>
                  <p>New Classes</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="counter-items text-center">
                {/* <div className="counter-image">
                  <img src="assets/img/counter/icon-4.svg" alt="counter-icon" />
                </div> */}
                <div className="counter-content">
                  <h3><span className="count">15</span>+</h3>
                  <p>Awards Won</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
