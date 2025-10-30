import React from "react";
import Banner from "../components/Banner";
import "../assets/main.css";

const VisionMission = () => {
  return (
    <>
      <Banner title="Vision & Mission" />
      <div className="container">
        {/* Vision Section */}
        <h2
          className="section-title mt-5 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Our Vision
        </h2>
        <div className="row align-items-center mt-4">
          <div
            className="col-lg-6 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src="assets/img/vision.jpg"
              alt="Vision"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <p style={{ textAlign: "justify" }}>
              At Abasyn University School, our vision is to create a nurturing,
              inclusive, and stimulating environment where every student is
              encouraged and inspired to achieve their fullest potential. We are
              committed to providing a holistic education that goes beyond
              academic excellence, integrating moral values, creativity, critical
              thinking, and emotional intelligence into every aspect of learning.
              Our goal is to equip students with the skills, mindset, and
              confidence to navigate and contribute positively to an ever-changing,
              interconnected world. We emphasize the importance of integrity,
              resilience, empathy, and collaboration, ensuring that our students
              can tackle global challenges with ethical judgment and determination.
              At Abasyn University School, we believe education is more than
              acquiring knowledge; it is about shaping well-rounded individuals
              who can think critically, act responsibly, and embrace diversity. We
              are dedicated to nurturing not only the intellectual growth of our
              students but also their emotional, social, and moral development,
              preparing them to become leaders, innovators, and change-makers who
              will leave a meaningful impact on society and the world.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <h2
          className="section-title mt-5 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Our Mission
        </h2>
        <div className="row align-items-center mt-4 flex-lg-row-reverse">
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
            <img
              src="assets/img/mission.jpg"
              alt="Mission"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <p style={{ textAlign: "justify" }}>
       At Abasyn University School, our mission is to cultivate a dynamic learning community that empowers students to reach their highest potential through academic rigor, character development, and innovative thinking. We are dedicated to fostering intellectual curiosity, creativity, and lifelong learning while nurturing values of respect, empathy, and social responsibility. Our goal is to provide students with the knowledge, skills, and confidence to excel in an ever-evolving world, preparing them to be responsible global citizens and future leaders. Through collaboration between educators, students, and families, we aim to create an inclusive environment that celebrates diversity and encourages personal growth. We strive to inspire every learner to pursue excellence, embrace challenges, and make meaningful contributions to their communities and the wider world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisionMission;
