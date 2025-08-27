import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import {
  faPenFancy,
  faFileAlt,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import Banner from "../components/Banner";

const Policy = () => {
  return (
    <>
      <Banner title="Admission Policy" />

      <section
        style={{
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "800",
              color: "#2d3748",
              marginBottom: "15px",
            }}
          >
            Our Admission Policy
          </h2>
          <p
            style={{
              color: "#4a5568",
              fontSize: "18px",
              maxWidth: "650px",
              margin: "0 auto 50px auto",
              lineHeight: "1.7",
            }}
            data-aos="fade-up" data-aos-delay="400"
          >
            We ensure a transparent and fair admission process to help students
            join our academic journey with ease.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
              textAlign: "left",
            }}
          >
            {/* Entrance Test */}
            <div
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "30px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                borderTop: "5px solid #3b82f6",
                transition: "all 0.3s ease",
              }}
            >
              <FontAwesomeIcon
                icon={faPenFancy}
                style={{ color: "#3b82f6", fontSize: "40px", marginBottom: "20px" }}
              />
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  color: "#1a202c",
                  marginBottom: "10px",
                }}
              >
                Written Entrance Test
              </h3>
              <p style={{ color: "#4a5568", lineHeight: "1.6" }}>
                Admission is offered on the basis of a written entrance test,
                with the syllabus provided in advance to facilitate preparation.
              </p>
            </div>

            {/* School Leaving Certificate */}
            <div
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "30px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                borderTop: "5px solid #10b981",
                transition: "all 0.3s ease",
              }}
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={{ color: "#10b981", fontSize: "40px", marginBottom: "20px" }}
              />
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  color: "#1a202c",
                  marginBottom: "10px",
                }}
              >
                School Leaving Certificate
              </h3>
              <p style={{ color: "#4a5568", lineHeight: "1.6" }}>
                Submission of a School Leaving Certificate from the previous
                institution is mandatory at the time of admission.
              </p>
            </div>

            {/* Latest Report Card */}
            <div
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "30px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                borderTop: "5px solid #8b5cf6",
                transition: "all 0.3s ease",
              }}
            >
              <FontAwesomeIcon
                icon={faClipboardCheck}
                style={{ color: "#8b5cf6", fontSize: "40px", marginBottom: "20px" }}
              />
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  color: "#1a202c",
                  marginBottom: "10px",
                }}
              >
                Latest Report Card
              </h3>
              <p style={{ color: "#4a5568", lineHeight: "1.6" }}>
                Applicants must also provide the latest report card to verify
                academic progress and eligibility.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div style={{ marginTop: "60px" }}>
            <Link to="/contact-us"
                 style={{
                display: "inline-block",
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                color: "#fff",
                fontSize: "18px",
                fontWeight: "600",
                padding: "14px 36px",
                borderRadius: "50px",
                textDecoration: "none",
                boxShadow: "0 6px 15px rgba(59,130,246,0.4)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 10px 20px rgba(59,130,246,0.6)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 6px 15px rgba(59,130,246,0.4)")
              }
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Policy;
