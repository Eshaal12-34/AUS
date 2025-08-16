import React from "react";
import Banner from "../components/Banner";
import '../assets/scss/_about.scss'
import '../assets/scss/_section.scss'
import "../assets/main.css"
import TeamSection from "../components/Team";
import FAQSection from "../components/Faqs";
const About = () => {
    return(

<>
  <Banner
    title = "About-Us"

  />
  {/* About Activities Section Start */}

  <section className="about-activities-section-2 style-2 section-padding" data-aos="fade-up" data-aos-delay="700">
    <div className="bottom-shape">
      <img src="assets/img/section-top-shape-2.png" alt="shape-img" />
    </div>
    <div className="sun-shape">
      <img src="assets/img/client/shape-2.png" alt="shape-img" />
    </div>
    <div className="container-fluid">
      <div className="about-activities-wrapper style-2 mb-55">
        <div className="row g-4">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="activities-image-items">
              <div className="radius-shape">
                <img src="assets/img/about/radius-shape.png" alt="shape-img" />
              </div>
              <div className="circle-shape">
                <img src="assets/img/about/circle.png" alt="shape-img" />
              </div>
            </div>
          </div>
          <FAQSection/>
          {/*<
          div className="col-lg-6">
            <div className="activities-content">
              <div className="section-title">
                <span>About Us</span>
                <h2 data-wow-delay=".3s">
                  Learn to play, converse <br />
                  with confidence.
                </h2>
              </div>
              <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                Luctus. Curabitur nibh justo imperdiet non ex non tempus
                faucibus urna Aliquam at elit vitae dui sagittis maximus eget
                vitae diam In fermentum
              </p>
              <div className="row g-4 mt-4">
                <div
                  className="col-xl-6 col-lg-8 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="icon-items">
                    <div className="icon">
                      <i className="icon-icon-12" />
                    </div>
                    <div className="content">
                      <h5>Sport Program</h5>
                      <p>
                        Aliquam erat volutpat <br /> nullam imperdiet
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-8 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="icon-items">
                    <div className="icon">
                      <i className="icon-icon-13" />
                    </div>
                    <div className="content">
                      <h5>Easy To Learn</h5>
                      <p>
                        Ut vehiculadictumst <br /> maecenas ante.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-author">
                <div className="author-image wow fadeInUp" data-wow-delay=".3s">
                  <img src="assets/img/about/author.png" alt="author-img" />
                  <div className="content">
                    <h6>Ronald Richards</h6>
                    <p>Co, Founder</p>
                  </div>
                </div>
                <div className="author-icon wow fadeInUp" data-wow-delay=".5s">
                  <div className="icon">
                    <i className="fa-solid fa-phone" />
                  </div>
                  <div className="content">
                    <span>Call Us Now</span>
                    <h5>
                      <a href="tel:+2085550112">+208-555-0112</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>*/}

        </div>
      </div>
    </div>
  </section>
  {/* Feature Value Section Start */}
  <section className="feature-value-section fix section-padding section-bg-2">
    <div className="shape-1">
      <img src="assets/img/value/shape-1.png" alt="shape-img" />
    </div>
    <div className="shape-2 float-bob-x">
      <img src="assets/img/value/shape-2.png" alt="shape-img" />
    </div>
    <div className="container">
      <div className="section-title text-center">
        <span className="wow fadeInUp">Our values</span>
        <h2 className="wow fadeInUp" data-wow-delay=".3s">
          Best School for Your Child’s Growth <br />and Success
        </h2>
      </div>
      <div className="row">
        <div className="col-xl-4 col-lg-6">
          <div className="feature-value-items">
            <div className="value-icon-items wow fadeInUp" data-wow-delay=".3s">
              <div className="icon">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <div className="content">
                <h5>Comprehensive Education </h5>
                <p>
                  From early years to Grade 10, we ensure complete academic excellence.
                </p>
              </div>
            </div>
            <div className="value-icon-items wow fadeInUp" data-wow-delay=".5s">
              <div className="icon color-2">
               <i class="fas fa-shield-alt"></i>
              </div>
              <div className="content">
                <h5>Safe & Supportive Environment</h5>
                <p>
                  A secure, respectful space where students feel encouraged to learn and grow.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay=".4s">
          <div className="feature-value-items">
            <div className="feature-value-image">
              <img src="assets/img/cta/cta-2.png" alt="img" />
              <div className="value-shape">
                <img src="assets/img/cta/cta-shape-2.png" alt="shape-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6">
          <div className="feature-value-items">
            <div
              className="value-icon-items style-2 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="content">
                <h5>Qualified & Dedicated Teachers</h5>
                <p>
                  Experienced educators committed to inspiring curiosity and lifelong learning in every child.
                </p>
              </div>
              <div className="icon color-3">
              <i class="fas fa-chalkboard-teacher"></i>
              </div>
            </div>
            <div
              className="value-icon-items style-2 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="content">
                <h5>Character & Leadership</h5>
                <p>
                  Building integrity, confidence, and responsibility for success in school and life.
                </p>
              </div>
              <div className="icon color-2 color-4">
               <i class="fas fa-handshake"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <TeamSection/>
</>
)
};
export default About;