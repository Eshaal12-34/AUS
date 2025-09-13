import React from "react";
import { Link } from "react-router-dom";
import '../assets/scss/_hero.scss';
import Testimonial from "../components/Testimonial";
import Gallery from "../components/Gallery";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";



const Home = () => {

  return (
    <>
      {/* Hero Section Start */}
      <section className="hero-section hero-1 fix">
        <div className="bottom-shape" style={{marginTop: "-100px"}}>
          <img src="assets/img/hero/bottom.png" alt="shape-img"/>
        </div>
        <div className="parasuit-shape float-bob-y">
          <img src="assets/img/hero/parasuit.png" alt="shape-img" />
        </div>
        <div className="left-shape">
          <img src="assets/img/hero/left.png" alt="shape-img" />
        </div>
        <div className="book-shape float-bob-x">
          <img src="assets/img/hero/book.png" alt="shape-img" />
        </div>
        <div className="pencil-shape">
          <img src="assets/img/hero/pencil.png" alt="shape-img" />
        </div>
        <div className="bee-shape float-bob-y">
          <img src="assets/img/hero/bee.png" alt="shape-img" />
        </div>
        <div className="right-shape">
          <img src="assets/img/hero/right.png" alt="shape-img" />
        </div>
        <div className="star-shape">
          <img src="assets/img/hero/star.png" alt="shape-img" />
        </div>

        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h5 data-aos="fade-up">Abasyn University School </h5>
                <h1 data-aos="fade-up" data-aos-delay="300">
                  Kids' Promising <br /> <span>Tomorrow</span> Ahead
                </h1>
                <p data-aos="fade-up" data-aos-delay="500" style={{textAlign:"justify"}}>
                Abasyn University School and College offers quality education from matric to intermediate levels in Science and Arts.
                The school emphasizes academic excellence, discipline, and character building.
                It provides modern facilities including science and computer labs, and a well-equipped library.
                Students actively participate in co-curricular and extracurricular activities throughout the year.
                Experienced teachers ensure students get individual attention and a supportive learning environment.
                </p>
                <div className="hero-button ">
                  <Link to="contact-us"
                    className="theme-btn"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    Apply Today <i className="fa-solid fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image" data-aos="fade-up" data-aos-delay="400">
                <img src="assets/img/hero/01.png" alt="hero-img"/>
                <div className="hero-shape">
                  <img src="assets/img/hero/hero-shape.png" alt="shape-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Start */}
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
                  <div className="about-image" data-aos="fade-up" data-aos-delay="300">
                    <img src="assets/img/news/assembly.jpg" alt="about-img" />
                  </div>
                  <div className="about-image-2" data-aos="fade-up" data-aos-delay="300">
                    <img src="assets/img/about/02.png" alt="about-img" />
                  </div>
                  <div className="border-shape-1">
                    <img src="assets/img/about/border-shape-1.png" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span data-aos="fade-up">About us</span>
                    <h2 data-aos="fade-up" data-aos-delay="300">
                      Top Choice for Children
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0" data-aos="fade-up" data-aos-delay="500" style={{textAlign:"justify"}}>
            At Abasyn University School, we’re committed to shaping well-rounded, confident learners. Our blend of academics, safety, and personal care makes us the trusted choice for parents.
                  </p>
                  <div className="about-list">
                    <ul data-aos="fade-up" data-aos-delay="300">
                      <li>
                        <i className="fa-regular fa-circle-check" />
                       Quality Education 
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-check" />
                        Safe Environment
                      </li>
                    </ul>
                    <ul data-aos="fade-up" data-aos-delay="500">
                      <li>
                        <i className="fa-regular fa-circle-check" />
                        Modern Facilities
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-check" />
                        Personal Growth
                      </li>
                    </ul>
                  </div>
                  <div className="about-author">
                    <div className="about-button" data-aos="fade-up" data-aos-delay="300">
                      <Link to="/about-us" className="theme-btn">
                        Explore More <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                    <div className="author-icon" data-aos="fade-up" data-aos-delay="500">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section Start */}
      <section className="program-section section-padding section-bg-2 fix" data-aos="fade-up" data-aos-delay="300">
        <div className="top-shape">
          <img src="assets/img/section-top-shape.png" alt="shape-img" />
        </div>
        <div className="bottom-shape">
          <img src="assets/img/section-bottom-shape.png" alt="shape-img" />
        </div>
        <div className="mask-shape float-bob-x">
          <img src="assets/img/program/mask.png" alt="shape-img" />
        </div>
        <div className="pencil-shape">
          <img src="assets/img/program/pencil.png" alt="shape-img" />
        </div>
        <div className="mask-shape-2">
          <img src="assets/img/program/mask-2.png" alt="shape-img" />
        </div>
        <div className="compass-shape">
          <img src="assets/img/program/compass.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title text-center mt-60">
            <span data-aos="fade-up">Facilities</span>
            <h2 data-aos="fade-up" data-aos-delay="300">
              Facilities That Empower <br /> Every Student
            </h2>
          </div>
          <div className="row">
            {/* Program 1 */}
            <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="program-box-items">
                <div className="program-bg" />
                <div className="program-image">
                  <img src="assets/img/program/01.jpg" alt="img" />
                </div>
                <div className="program-content text-center">
                  <h4><a href="program-details.html">Science Labs</a></h4>
                  <p >Hands-on experiments in physics, chemistry, and biology that turn curiosity into real discovery.</p>
                </div>
              </div>
            </div>
            {/* Program 2 */}
            <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="program-box-items">
                <div className="program-bg bg-2" />
                <div className="program-image">
                  <img src="assets/img/program/02.jpg" alt="img" />
                </div>
                <div className="program-content text-center">
                  <h4><a href="program-details.html">Computer Lab</a></h4>
                  <p> Modern computers and software empower students to learn, create, and innovate with technology.</p>
                </div>
              </div>
            </div>
            {/* Program 3 */}
            <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="700">
              <div className="program-box-items">
                <div className="program-bg bg-3" />
                <div className="program-image">
                  <img src="assets/img/program/03.jpg" alt="img" />
                </div>
                <div className="program-content text-center style-2">
                  <h4><a href="program-details.html">library</a></h4>
                  <p> A quiet, resource-rich space where students read, research, and grow their knowledge daily.</p>

                </div>
              </div>
            </div>
          </div>
        </div>


      
      </section>
<section className="about-activities-section section-padding pt-0">
  <div className="pencil-shape">
    <img src="assets/img/about/pencil.png" alt="shape-img" />
  </div>
  <div className="zebra-shape float-bob-y">
    <img src="assets/img/about/zebra.png" alt="shape-img" />
  </div>
  <div className="container">
    <div className="about-activities-wrapper">
      <div className="row g-4">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
          <div className="activities-img-items">
            <div className="activities-image">
              <img src="assets/img/activites.jpg" alt="img" />
            </div>
            <div className="radius-shape">
              <img src="assets/img/about/radius-shape-1.png" alt="img" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="activities-content">
            <div className="section-title">
              <span className="wow fadeInUp">Our Best Activities</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Engaging Activities That Spark Joy and Learning
              </h2>
            </div>
            <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
              From creative arts to exciting outdoor play, our activities
              inspire curiosity, teamwork, joyful learning, and endless
              discovery every day..
            </p>
            <div className="row g-4 mt-4">
              <div
                className="col-xl-6 col-lg-8 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon-items">
                  <div className="icon box-color-1">
                    <i className="fas fa-book-open" />
                  </div>
                  <div className="content">
                    <h5>Reading</h5>
                    <p>Building knowledge and imagination</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-8 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon-items">
                  <div className="icon box-color-3">
                      <i class="fa fa-paint-brush"></i>
                  </div>
                  <div className="content">
                    <h5>Arts &amp; Crafts</h5>
                    <p>Spark creativity with arts and crafts</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-8 col-md-6 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="icon-items">
                  <div className="icon box-color-2">
                    <i className="fas fa-basketball-ball" />
                  </div>
                  <div className="content">
                    <h5> Sports &amp; Games</h5>
                    <p>Build teamwork and fitness skills.</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-8 col-md-6 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="icon-items">
                  <div className="icon box-color-4">
                    <i className="fas fa-atom" />
                  </div>
                  <div className="content">
                    <h5>STEM Fun </h5>
                    <p>Explore science with exciting activities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/*Teamsection
<TeamSection/>
*/}
<div className="my-5">
      <h2 className="text-center">Meet Our Staff</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-75 mx-auto"
      >
        <SwiperSlide>
          <img
            src="assets/img/staff.jpg"
            className="d-block mx-auto img-fluid"
            alt="staff1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="assets/img/staff2.jpg"
            className="d-block mx-auto img-fluid"
            alt="staff2"
          />
        </SwiperSlide>
      </Swiper>
    </div>


{/*Testimonial section*/}
<Testimonial/>


{/*CTA section*/}
<section
  className="cta-section fix section-padding bg-cover"
  style={{ backgroundImage: 'url("assets/img/cta/cta-bg.jpg")' }}
>
  <div className="plane-shape">
    <img src="assets/img/cta/plane.png" alt="img" />
  </div>
  <div className="pencil-shape">
    <img src="assets/img/cta/pencil.png" alt="img" />
  </div>
  <div className="container">
    <div className="cta-wrapper">
      <div className="row justify-content-between">
        <div className="col-lg-6">
          <div className="section-title">
            <span className="text-white wow fadeInUp">Get your quality</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Come and be Part of <br /> Our Latest Session
            </h2>
          </div>
          <div
            className="cta-button mt-4 mt-md-0 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <Link to="/contact-us" className="theme-btn bg-white">
              Apply Now <i className="fa-solid fa-arrow-right-long" />
            </Link>
          </div>
        </div>
        <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
          <div className="cta-image">
            <img src="assets/img/cta.png" alt="cta-img" className="img-fluid" />
            <div className="cta-shape">
              <img src="assets/img/cta/cta-shape.png" alt="img"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<>
  {/* News Section Start */}
  <section className="news-section section-padding fix">
    <div className="container">
      <div className="section-title-area">
        <div className="section-title">
          <span className="wow fadeInUp">Our Events</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
          School Happenings
          </h2>
        </div>
      </div>
      <div className="news-wrapper">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="news-single-items">
              <div className="news-image">
                <img src="assets/img/news/sports.jpg" alt="news-img" />
              </div>
              <div className="news-content">
                <div style={{display:"flex", gap:"5px", justifyContent:"center"}}> 
                  <div>
                   <i class="fas fa-football-ball" style= {{color: "#FF0000"}}></i>
                  </div>
                <h3>
                  <a href="news-details.html">
                    School Sports Day
                  </a>
                </h3>
                </div>
                <p style={{textAlign:"justify"}}>
                  Abasyn School proudly hosted its Annual School Sports Day, where students showcased their athletic skills in a variety of games and competitions. The event encouraged teamwork, healthy competition, and school spirit, making it a memorable occasion for everyone.
                </p>
                {/*
                <div className="post-author-items">
                  <div className="post-items">
                    <div className="thumb">
                      <img src="assets/img/news/author.png" alt="img" />
                    </div>
                    <div className="content">
                      <span>By Admin</span>
                      <h6>Ronald Richards</h6>
                    </div>
                  </div>
                  <a href="news-details.html" className="theme-btn">
                    Read More <i className="fa-solid fa-arrow-right-long" />
                  </a>
                </div>*/}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-8 mt-5 mt-xl-0">  
  <div className="news-right-items wow fadeInUp" data-wow-delay=".4s">  
    <div className="news-thumb text-center">   {/* Added text-center here */}
      <img src="assets/img/news/4.jpg" alt="img" className="d-inline-block" /> {/* img-fluid + d-inline-block */}
    </div>  
    <div className="news-content">  
      <div style={{display:"flex", gap:"5px", justifyContent:"center"}}>  
        <div>  
          <i className="fas fa-bus" style={{color: "#FF0000"}}></i>  
        </div>  
        <h3>  
          <a href="news-details.html">  
            Recreational Trip  
          </a>  
        </h3>  
      </div>  
      <p style={{textAlign:"justify"}}>  
        An exciting day filled with fun, adventure, and learning beyond the classroom. Our students enjoyed activities, games, and bonding moments in a refreshing outdoor environment.  
      </p>  
    </div>  
  </div>  

  <div className="news-right-items wow fadeInUp" data-wow-delay=".6s">  
    <div className="news-thumb text-center">   {/* Added text-center here */}
      <img src="assets/img/news/03.jpg" alt="img" className="d-inline-block" /> {/* img-fluid + d-inline-block */}
    </div>  
    <div className="news-content">  
      <div style={{display:"flex", gap:"5px", justifyContent:"center"}}>  
        <div>  
          <i className="fas fa-smile-beam" style={{color: "#FF0000"}}></i>  
        </div>  
        <h3>  
          <a href="news-details.html">  
            Funfair Festivities<br />  
          </a>  
        </h3>  
      </div>  
      <p style={{textAlign:"justify"}}>  
        Our annual Funfair brought students, teachers, and families together for a day full of laughter, exciting games, delicious treats, and colorful stalls — creating memories that will last a lifetime.  
      </p>  
    </div>  
  </div>  
</div>

        </div>
      </div>
    </div>
  </section>
 
</>  
<Gallery/>
</>

  );
};

export default Home;
