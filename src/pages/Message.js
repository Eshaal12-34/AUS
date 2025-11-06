import React from "react";
import Banner from "../components/Banner";
import "../assets/main.css";

const Message = () => {
  return (
    <>
      <Banner title="Messages" />

      {/* Director's Message */}
      <div className="container my-5">
        <h2
          className="section-title text-center mb-5"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Director's Message
        </h2>

        {/* Director Row */}
        <div className="row align-items-center gy-4" data-aos="fade-up" data-aos-delay="200">
          {/* Image */}
          <div className="col-md-5" data-aos="fade-up" data-aos-delay="300">
            <img
              src="assets/img/director4.png"
              alt="Director"
              className="img-fluid rounded shadow w-100"
              style={{ objectFit: "cover",  }}
            />
          </div>

          {/* Text */}
          <div className="col-md-7" data-aos="fade-up" data-aos-delay="400">
            <p className="fs-6 fs-md-5" style={{ textAlign: "justify", lineHeight: "1.8" }}>
              Our school was founded with the vision of uplifting society by equipping students with knowledge 
              and skills that prepare them for a successful future. Since its establishment in 2018, the 
              institution has proudly guided hundreds of students through their board examinations. Many of 
              them are now pursuing higher education at esteemed national and international universities, 
              while others have begun contributing to the IT industry.
            </p>
            <br/>
            <p className="fs-6 fs-md-5" style={{ textAlign: "justify", lineHeight: "1.8" }}>
              In addition to academic excellence, we place a strong emphasis on preparing our students 
              for the demands of the modern world. This is the era of technology, where expertise in 
              software development, web technologies, mobile application development, cybersecurity, and 
              artificial intelligence is in high demand. Recognizing this need, we have established 
              state-of-the-art computer laboratories and introduced specialized IT courses for our students.
            </p>
            <br/>
            <p className="fs-6 fs-md-5" style={{ textAlign: "justify", lineHeight: "1.8" }}>
              Through these initiatives, we aim to equip our learners with practical, market-relevant 
              skills that will empower them to thrive as professionals and freelancers, offering valuable
              services to both national and international clients. It is our firm belief that by 
              nurturing talent and fostering innovation, we can contribute meaningfully to the progress 
              of society.
            </p>
          </div>
        </div>
      </div>

      {/* Principal's Message */}
      <div className="container my-5">
        <h2 className="section-title text-center mb-5" data-aos="fade-up" data-aos-delay="300">
          Principal's Message
        </h2>

        <div className="row align-items-center gy-4" data-aos="fade-up" data-aos-delay="200">
          <div className="col-md-5" data-aos="fade-up" data-aos-delay="300">
            <img
              src="assets/img/principal.JPG"
              alt="Principal"
              className="img-fluid rounded shadow w-100"
              style={{ objectFit: "cover", maxHeight: "400px" }}
            />
          </div>

          <div className="col-md-7" data-aos="fade-up" data-aos-delay="400">
            <p className="fs-6 fs-md-5" style={{ textAlign: "justify", lineHeight: "1.8" }}>
              Learning is not just about acquiring knowledge; it must bring about a positive transformation 
              in one’s character and outlook on life. True education refines our thoughts, strengthens our 
              values, and inspires us to act with integrity. Those who aspire to reach the pinnacle of success 
              must nurture qualities of positivity, hard work, and discipline from the very beginning, for 
              these are the foundations upon which great achievements are built. 
              The younger generation carries the responsibility of shaping a better tomorrow — a world where 
              peace, compassion, and happiness are not exceptions but the norm. By dedicating themselves to 
              continuous learning, ethical conduct, and service to humanity, today’s youth can become the 
              torchbearers of hope and progress, guiding society toward a brighter and more harmonious future. 
              In this journey, every step towards knowledge is also a step towards wisdom. Let us strive to use 
              that wisdom to create a legacy that will inspire generations to come.
            </p>
          </div>
        </div>
      </div>

      {/* Vice Principal's Message */}
      <div className="container my-5">
        <h2 className="section-title text-center mb-5" data-aos="fade-up" data-aos-delay="300">
          Vice Principal's Message
        </h2>

        <div className="row align-items-center gy-4" data-aos="fade-up" data-aos-delay="200">
          <div className="col-md-5" data-aos="fade-up" data-aos-delay="300">
            <img
              src="assets/img/VP.jpeg"
              alt="Vice Principal"
              className="img-fluid rounded shadow w-100"
              style={{ objectFit: "cover", maxHeight: "400px" }}
            />
          </div>

          <div className="col-md-7" data-aos="fade-up" data-aos-delay="400">
            <p className="fs-6 fs-md-5" style={{ textAlign: "justify", lineHeight: "1.8" }}>
              At our school, we believe that true education goes beyond textbooks and classrooms. It is about 
              nurturing well-rounded individuals who are confident, resilient, and capable of meeting every 
              challenge life presents. We encourage you to play an active role in your child’s development, 
              guiding and supporting them as they grow into responsible and compassionate human beings. 
              Our school places equal emphasis on academics, sports, IT, and the arts, ensuring that every child 
              discovers and develops their unique talents. We aim to create an environment where curiosity is 
              celebrated, creativity is encouraged, and values are instilled alongside knowledge. 
              By providing opportunities for leadership, teamwork, and problem-solving, we prepare students not 
              just to pass exams, but to excel in life. 
              We are committed to building a strong partnership between parents, teachers, and students, as we 
              believe that true success comes when we all work together. With your support, we strive to instill 
              in every child a love for learning, a respect for others, and the confidence to pursue their dreams. 
              Together, let us work hand in hand to groom our children into individuals who are not only 
              successful in their studies but also equipped with the skills, values, and confidence needed to 
              thrive in every aspect of life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
