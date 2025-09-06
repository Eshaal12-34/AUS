import React from "react";
import Banner from "../components/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FaClock, FaCheckCircle, FaBookOpen, FaArrowRight } from "react-icons/fa";

const Scholarship = () => {
  return (
    <>
      <Banner title="Scholarship" />

      <div className="container my-5">
        {/* About Section */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <h2 className="mb-3 text-center text-md-start fs-2 fw-bold">
              About The Scholarship
            </h2>
            <p
              className="text-center text-md-start fs-6 fs-md-5"
              style={{ lineHeight: "1.9", color: "#444", fontWeight: "400" }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Our Scholarship Program is designed for dedicated students of
              class 9 & 10. The award is based purely on merit judged through an
              entry test.
            </p>
          </div>
        </div>

        {/* Eligibility Section */}
        <section className="mt-5 row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <h2 className="mb-3 text-center text-md-start fs-2 fw-bold">
              Eligibility
            </h2>
            <ul className="list-unstyled text-center text-md-start">
              <li className="mb-2">
                <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                Open to Class 9 & 10 students only
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                Must appear in the entry test
              </li>
            </ul>
          </div>
        </section>

        {/* Entry Test Section */}
        <section className="mt-5 row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <h2 className="mb-3 text-center text-md-start fs-2 fw-bold">
              Entry Test Information
            </h2>

            <div className="text-center text-md-start">
              {/* Subjects */}
              <div className="d-flex align-items-start mb-4">
                <FaBookOpen size={24} color="#1E3A8A" className="me-3 mt-1" />
                <div>
                  <h4 className="mb-1 fw-semibold">Subjects</h4>
                  <p
                    className="mb-0 col-md-4"
                    style={{ color: "#444", fontWeight: "400" }}
                  >
                    The entry test includes Physics, Chemistry, (Biology /
                    Computer Science – optional), English, and Urdu.
                  </p>
                </div>
              </div>

              {/* Scholarship Criteria */}
              <div className="d-flex align-items-start mb-4">
                <FaCheckCircle
                  size={24}
                  color="#1E3A8A"
                  className="me-3 mt-1"
                />
                <div>
                  <h4 className="mb-1 fw-semibold">Scholarship Criteria</h4>
                  <p
                    className="mb-0"
                    style={{ color: "#444", fontWeight: "400" }}
                  >
                    94 & above
                    <FaArrowRight className="ms-2 text-primary" /> 100%
                    Scholarship
                  </p>
                  <p
                    className="mb-0"
                    style={{ color: "#444", fontWeight: "400" }}
                  >
                    92 – 94
                    <FaArrowRight className="ms-2 text-primary" /> 50%
                    Scholarship
                  </p>
                  <p
                    className="mb-0"
                    style={{ color: "#444", fontWeight: "400" }}
                  >
                    10% fee wavier for Hafiz-e-Quran
                  </p>
                </div>
              </div>

              {/* Duration */}
              <div className="d-flex align-items-start mb-4">
                <FaClock size={24} color="#1E3A8A" className="me-3 mt-1" />
                <div>
                  <h4 className="mb-1 fw-semibold">Duration of Test</h4>
                  <p
                    className="mb-0"
                    style={{ color: "#444", fontWeight: "400" }}
                  >
                    2 Hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Scholarship;
