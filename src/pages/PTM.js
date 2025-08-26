import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faComments } from "@fortawesome/free-solid-svg-icons";
import Banner from "../components/Banner";

const PTM = () => {
  return (
    <>
      <Banner title="Parent-Teacher Interaction" />

      <div
        className="container my-5"
        style={{ maxWidth: "1000px", padding: "2rem" }}
      >
        <h2
          className="text-center mb-5"
          style={{ fontSize: "2.5rem", color: "#385469" }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Fostering Strong Parent–Teacher Collaboration
        </h2>
        <div className="row align-items-center">
          <div
            className="col-lg-6 mb-4 mb-lg-0 text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src="assets/img/ptm.png"
              alt="Parent-Teacher Interaction"
              style={{
                width: "100%",
                borderRadius: "15px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <p style={{ textAlign: "justify", lineHeight: "1.7", marginBottom: "1.5rem" }}>
              At Abasyn University School, we highly value strong communication
              between parents and teachers, recognizing it as a cornerstone for each
              student’s success. To facilitate meaningful dialogue, Saturdays are
              dedicated for parents to meet with teachers, providing an opportunity
              to discuss academic progress, personal development, and overall well-being.
            </p>

            <p style={{ textAlign: "justify", lineHeight: "1.7", marginBottom: "2rem" }}>
              We firmly believe that open communication between the school and
              parents plays a crucial role in helping every child realize their full
              potential. These interactions not only allow teachers to share insights
              about students’ learning journeys but also empower parents to actively
              support and guide their children.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "#e0f0ff",
                  padding: "1rem",
                  borderRadius: "12px",
                  flex: "1 1 45%",
                }}
              >
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  style={{ fontSize: "2rem", color: "#1e3a8a", marginBottom: "0.5rem" }}
                />
                <strong>Saturday Meetings</strong>
                <span style={{ fontSize: "0.9rem", textAlign: "center" }}>
                  Discuss academic progress and overall development
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "#e0f0ff",
                  padding: "1rem",
                  borderRadius: "12px",
                  flex: "1 1 45%",
                }}
              >
                <FontAwesomeIcon
                  icon={faComments}
                  style={{ fontSize: "2rem", color: "#1e3a8a", marginBottom: "0.5rem" }}
                />
                <strong>Open Communication</strong>
                <span style={{ fontSize: "0.9rem", textAlign: "center" }}>
                  Build a strong partnership between school and parents
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PTM;
