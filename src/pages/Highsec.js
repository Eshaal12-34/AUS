import React from "react";
import Card from "../components/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../assets/scss/_team.scss'; 
import '../assets/main.css';
import Banner from "../components/Banner";
import Picture from "../components/Picture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaChalkboardTeacher, FaGraduationCap, FaHandsHelping, FaHeart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { 
  faClipboardCheck, 
  faChalkboardTeacher, 
  faLightbulb, 
  faComments 
} from "@fortawesome/free-solid-svg-icons";


const Higher = () => {
  const Pics = [
    {
      imgUrl: "assets/img/highh1.JPG",
      description: "Huzaifa Aqeel",
      marks: "1096",
    },
    {
      imgUrl: "assets/img/highh1.JPG",
      description: "Ali Khan",
      marks: "1085",
    },
    {
      imgUrl: "assets/img/highh1.JPG",
      description: "Ayesha Noor",
      marks: "1072",
    },
  ];

    const Alumni = [
    { title: "Sports Day", description: "October 2024", imageUrl: "/assets/img/gallery/01.jpg" },
    { title: "School Opening", description: "February 2025", imageUrl: "/assets/img/gallery/02.jpg" },
    { title: "Annual Day", description: "December 2024", imageUrl: "/assets/img/gallery/03.jpg"  },
    { title: "Science Exhibition", description: "January 2025", imageUrl: "/assets/img/team/01.jpg" },
    { title: "Art Competition", description: "December 2024", imageUrl: "/assets/img/team/01.jpg" },
    { title: "Science Exhibition", description: "January 2025", imageUrl: "/assets/img/team/01.jpg" },
    { title: "Art Competition", description: "December 2024", imageUrl: "/assets/img/team/01.jpg" },
  ];

  return (
    <>
      <Banner title="Higher Secondary" />
      <div className="container">
        <div className="Achievers">
          <h2 className="text-center my-4 mt-5" data-aos="fade-up" data-aos-delay="400">Our Board High Achievers 2025</h2>
          <div className="row">
            {Pics.map((pic, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <Picture
                  imgUrl={pic.imgUrl}
                  description={pic.description}
                  marks={pic.marks}
                />
              </div>
            ))}
          </div>
         </div>
         {/*Curriculum */}
            <div className="Curri">
            <h3 className="mt-5 mb-5 fs-2" data-aos="fade-up" data-aos-delay="400">Our Curriculum & Academic Approach</h3>
            <p data-aos="fade-up" data-aos-delay="400" style={{ fontSize: "18px", lineHeight: "1.8", color: "#444", maxWidth: "900px", margin: "0 auto 50px", textAlign: "center" }}>
                At Abasyn University School, our Higher Secondary program (Classes 8–10) is designed not only to prepare students for
                board examinations but also to build confidence, discipline, and critical thinking. Our approach combines structured
                assessments, personalized mentoring, and continuous feedback, ensuring that every learner receives the guidance and
                encouragement needed to excel academically and personally.
            </p>

            <div className="row text-left" data-aos="fade-up" data-aos-delay="400">
            {/* Regular Tests & Assessments */}
            <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card-box d-flex flex-column h-100 p-4 shadow-sm rounded">
                <FontAwesomeIcon
                    icon={faClipboardCheck}
                    style={{ color: "#D19165", fontSize: "36px", marginBottom: "15px" }}
                />
                <h3 className="fs-5 fw-semibold mb-2">Regular Tests & Assessments</h3>
                <p className="text-muted flex-grow-1" style={{ lineHeight: "1.6" }}>
                    Weekly and monthly evaluations are conducted to strengthen concepts, track progress, and bridge learning gaps early.
                </p>
                </div>
            </div>

            {/* Teacher Mentoring */}
            <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card-box d-flex flex-column h-100 p-4 shadow-sm rounded">
                <FontAwesomeIcon
                    icon={faChalkboardTeacher}
                    style={{ color: "#10b981", fontSize: "36px", marginBottom: "15px" }}
                />
                <h3 className="fs-5 fw-semibold mb-2">Teacher Mentoring</h3>
                <p className="text-muted flex-grow-1" style={{ lineHeight: "1.6" }}>
                    Dedicated faculty members provide one-on-one mentoring, academic guidance, and personal support to every student.
                </p>
                </div>
            </div>

            {/* Skill Development */}
            <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card-box d-flex flex-column h-100 p-4 shadow-sm rounded">
                <FontAwesomeIcon
                    icon={faLightbulb}
                    style={{ color: "#385469", fontSize: "36px", marginBottom: "15px" }}
                />
                <h3 className="fs-5 fw-semibold mb-2">Skill Development</h3>
                <p className="text-muted flex-grow-1" style={{ lineHeight: "1.6" }}>
                    We nurture problem-solving, communication, and critical thinking skills alongside academics to prepare students for the future.
                </p>
                </div>
            </div>

            {/* Continuous Feedback */}
            <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card-box d-flex flex-column h-100 p-4 shadow-sm rounded">
                <FontAwesomeIcon
                    icon={faComments}
                    style={{ color: "#ECBC7E", fontSize: "36px", marginBottom: "15px" }}
                />
                <h3 className="fs-5 fw-semibold mb-2">Continuous Feedback</h3>
                <p className="text-muted flex-grow-1" style={{ lineHeight: "1.6" }}>
                    Parents stay informed with regular report cards, progress meetings, and ongoing communication with teachers.
                </p>
                </div>
            </div>
            </div>
            <section className="student-support py-5" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="container" data-aos="fade-up" data-aos-delay="400">
        <h2 className="text-center mb-4" style={{ fontWeight: "700", color: "#2c3e50" }}>
          Student Support & Guidance
        </h2>
        <p className="text-center mb-5" style={{ color: "#555", fontSize: "1.1rem" }}>
          At <strong>Abasyn University School</strong>, we provide comprehensive support to help every student thrive academically and personally.
        </p>
        <div className="row g-4">
          <div className="col-md-6 d-flex">
            <FaChalkboardTeacher size={40} className="me-3 text-primary" />
            <div>
              <h5 style={{ fontWeight: "600" }}>Academic Mentorship</h5>
              <p style={{ color: "#555" }}>
                Personalized guidance from experienced teachers to help students excel in board exams and internal assessments.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <FaGraduationCap size={40} className="me-3 text-success" />
            <div>
              <h5 style={{ fontWeight: "600" }}>Career Counseling</h5>
              <p style={{ color: "#555" }}>
                Professional counseling sessions to help students choose the right streams, colleges, and career paths for their future.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <FaHandsHelping size={40} className="me-3 text-warning" />
            <div>
              <h5 style={{ fontWeight: "600" }}>Extra Support Programs</h5>
              <p style={{ color: "#555" }}>
                Special coaching, remedial classes, and study resources for students who need extra help in any subject.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <FaHeart size={40} className="me-3 text-danger" />
            <div>
              <h5 style={{ fontWeight: "600" }}>Emotional & Social Support</h5>
              <p style={{ color: "#555" }}>
                A safe and nurturing environment where students can discuss challenges, build confidence, and develop life skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="team-section">
      <div className="container">
  <div className="section-title mt-60 text-center">
    <h2 data-aos="fade-up" data-aos-delay="400">Our Alumni</h2>
  </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },  // Mobile
            721: { slidesPerView: 3 },  // Tablet & small laptops
            1401: { slidesPerView: 4 }, // Large desktops
          }}
        >
          {Alumni.map((item, index) => (
            <SwiperSlide key={index}>
              <Card
                title={<span className="team-title">{item.title}</span>}
                imageUrl={item.imageUrl}
                description={<span className="team-desc">{item.description}</span>}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
        </div>
     </div>
    </>
  );
};

export default Higher;
