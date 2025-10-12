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
    <Banner
    title={`Profile of ${cvData.name}`} // ✅ fixed
    />
    <div className="container mt-5">
      <div className="row justify-content-center mb-5">
        <div className="col-md-8 shadow p-4 rounded border border-success">
          {/* Top Row: Info Left, Image Right */}
          <div className="row align-items-center">
            {/* Image first on small, right side on medium+ */}
            <div className="col-md-4 text-center order-1 order-md-2">
             {cvData.image && (
              <img
                src={cvData.image}
                alt={cvData.name}
                className="img-fluid"
                style={{
                  width: "112px",
                  height: "150px",
                  objectFit: "cover",
                }}
              />
            )}
            </div>

            {/* Text second on small, left side on medium+ */}
            <div className="col-md-8 order-2 order-md-1 text-sm-center text-md-start">
              <p>
                <strong className="text-green">Email:</strong> {cvData.email}
              </p>
              <p>
                <strong className="text-green">Section:</strong>{" "}
                {cvData.section /* or department if still using that */}
              </p>
              <p>
                <strong className="text-green">Designation:</strong>{" "}
                {cvData.designation}
              </p>
            </div>
          </div>

          <hr className="my-4" />

          {/* Education Section */}
          <h4 className="text-success mb-3">Education</h4>
          <ul className="list-group mb-4 text-start">
            {cvData.education?.map((edu, i) => (
              <li key={i} className="list-group-item">
                <strong>{edu.degree}</strong> in{" "}
                <strong>{edu.subject}</strong> from {edu.institute}{" "}
                {edu.gpa && <> (GPA/Percentage {edu.gpa})</>}
                <br />
                <span className="text-muted">{edu.duration}</span>
              </li>
            ))}
          </ul>

          {/* Experience Section */}
          <h4 className="text-success mb-3">Experience</h4>
          <ul className="list-group text-start">
            {cvData.experience?.map((exp, i) => (
              <li key={i} className="list-group-item">
                <strong>{exp.title}</strong> at {exp.organization}
                <br />
                <span className="text-muted">
                  <strong>Years/Duration:</strong> {exp.years}
                </span>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </div>
    </>
  );
};

export default CvDetails;
