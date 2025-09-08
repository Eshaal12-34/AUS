import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher, faHeadphones, faComments } from "@fortawesome/free-solid-svg-icons";
import "../assets/main.css";
import Banner from "../components/Banner";

const Examination = () => {
  return (
    <>   <Banner title="Examination System"/>
    <div className="timeline-container">
      <h2 className="timeline-title" data-aos="fade-up" data-aos-delay="400">Academic Structure</h2>

      <div className="timeline">
        {/* KG–VI */}
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Classes KG – VI</h3>
            <p data-aos="fade-up" data-aos-delay="400">
              The academic year is structured into <b>four quarters</b>. Each quarter includes carefully designed assessments that monitor student progress and provide timely feedback for improvement.
            </p>
          </div>
        </div>

        {/* VII–X */}
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Classes VII – X</h3>
            <p data-aos="fade-up" data-aos-delay="400">
              Students participate in <b>Mid-Term and Final Examinations</b>, which help build a strong foundation and ensure readiness for board-level education.
            </p>
          </div>
        </div>

        {/* Conceptual */}
          <div className="timeline-item col-12 col-md-6 col-lg-12">
      <div className="timeline-content">
        <h3>Conceptual Assessments</h3>
        <p data-aos="fade-up" data-aos-delay="400">
          In addition to traditional exams, students engage in <b>interactive assessments</b> such as presentations, listening exercises, and discussions. These activities foster confidence, enhance communication skills, and prepare students for future challenges.
        </p>

        {/* Circles / Dots */}
        <div className="timeline-dot d-flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="400">
          <div className="circle d-flex align-items-center gap-2 p-2 rounded-circle bg-light">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="fa-icon" />
            Presentations
          </div>
          <div className="circle d-flex align-items-center gap-2 p-2 rounded-circle bg-light">
            <FontAwesomeIcon icon={faHeadphones} className="fa-icon" />
            Listening Assessments
          </div>
          <div className="circle d-flex align-items-center gap-2 p-2 rounded-circle bg-light">
            <FontAwesomeIcon icon={faComments} className="fa-icon" />
            Conversations
          </div>
        </div>
      </div>
    </div>

      </div>
    </div>
    </>
  );
};

export default Examination;
