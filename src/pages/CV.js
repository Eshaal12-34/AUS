import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Banner from "../components/Banner";

const CvDetails = () => {
  const { id } = useParams();
  const [cvData, setCvData] = useState(null);

  useEffect(() => {
    const fetchCV = async () => {
      try {
        const res = await axios.get(
          `https://backend-fylo.vercel.app/api/faculty/cv/${id}`
        );
        setCvData(res.data);
      } catch (error) {
        console.error("Error fetching CV:", error);
      }
    };

    fetchCV();
  }, [id]);

  if (!cvData) {
    return <p className="text-center mt-5">Loading CV details...</p>;
  }

  return (
    <>
      <Banner title={`Profile of ${cvData.name}`} />

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 shadow-lg p-4 rounded-4 border border-success bg-white">
            {/* Top Row: Info & Image */}
            <div className="row align-items-center g-4">
              {/* Image Section */}
              <div className="col-12 col-md-4 text-center">
                {cvData.image ? (
                  <img
                    src={cvData.image}
                    alt={cvData.name}
                    className="img-fluid shadow rounded-3"
                    style={{
                      width: "140px",
                      height: "180px",
                      objectFit: "cover",
                      border: "3px solid #1F668A",
                    }}
                  />
                ) : (
                  <div
                    className="d-flex align-items-center justify-content-center border rounded-3"
                    style={{
                      width: "140px",
                      height: "180px",
                      backgroundColor: "#f0f0f0",
                      color: "#999",
                      margin: "0 auto",
                    }}
                  >
                    No Image
                  </div>
                )}
              </div>

              {/* Info Section */}
              <div className="col-12 col-md-8 text-center text-md-start">
                <h3 className="fw-bold mb-2">{cvData.name}</h3>
                <p className="mb-1">
                  <strong className="text-success">Email:</strong>{" "}
                  {cvData.email}
                </p>
                <p className="mb-1">
                  <strong className="text-success">Section:</strong>{" "}
                  {cvData.section}
                </p>
                <p className="mb-0">
                  <strong className="text-success">Designation:</strong>{" "}
                  {cvData.designation}
                </p>
              </div>
            </div>

            <hr className="my-4" />

            {/* Education Section */}
            <h4 className="text-success mb-3 text-center text-md-start">
              Education
            </h4>
            <ul className="list-group mb-4 text-start">
              {cvData.education?.length > 0 ? (
                cvData.education.map((edu, i) => (
                  <li
                    key={i}
                    className="list-group-item border-0 border-bottom py-3"
                  >
                    <strong>{edu.degree}</strong> in{" "}
                    <strong>{edu.subject}</strong> from {edu.institute}
                    {edu.gpa && <> (GPA: {edu.gpa})</>}
                    <div className="text-muted small mt-1">
                      <strong>Duration:</strong> {edu.duration}
                    </div>
                  </li>
                ))
              ) : (
                <p className="text-muted">No education details available.</p>
              )}
            </ul>

            {/* Experience Section */}
            <h4 className="text-success mb-3 text-center text-md-start">
              Experience
            </h4>
            <ul className="list-group text-start">
              {cvData.experience?.length > 0 ? (
                cvData.experience.map((exp, i) => (
                  <li
                    key={i}
                    className="list-group-item border-0 border-bottom py-3"
                  >
                    <strong>{exp.title}</strong> at {exp.organization}
                    <div className="text-muted small mt-1">
                      <strong>Duration:</strong> {exp.years}
                    </div>
                  </li>
                ))
              ) : (
                <p className="text-muted">No experience details available.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CvDetails;
