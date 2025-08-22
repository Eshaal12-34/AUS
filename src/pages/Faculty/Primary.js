// src/pages/Faculty/Primary.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../../components/Banner"

function Primary() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/faculty/primary")
      .then((res) => {
        setTeachers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching primary teachers:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-5">Loading teachers...</p>;

  return (
    <div className="container py-5">
      <Banner title="Faculty"/>
      <div className="row">
        {teachers.length > 0 ? (
          teachers.map((teacher) => (
            <div className="col-md-4 mb-4" key={teacher._id}>
              <div className="card shadow-sm h-100">
                {teacher.image && (
                  <img
                    src={`http://localhost:5000/uploads/${teacher.image}`}
                    className="card-img-top"
                    alt={teacher.name}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{teacher.name}</h5>
                  <p className="card-text">
                    <strong>Designation:</strong> {teacher.designation}
                    <br />
                    <strong>Email:</strong> {teacher.email}
                  </p>

                  {teacher.education?.length > 0 && (
                    <>
                      <h6>Education:</h6>
                      <ul>
                        {teacher.education.map((edu, idx) => (
                          <li key={idx}>
                            {edu.degree} – {edu.institute}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {teacher.experience?.length > 0 && (
                    <>
                      <h6>Experience:</h6>
                      <ul>
                        {teacher.experience.map((exp, idx) => (
                          <li key={idx}>
                            {exp.title} – {exp.organization} ({exp.years} years)
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {teacher.languages?.length > 0 && (
                    <p>
                      <strong>Languages:</strong> {teacher.languages.join(", ")}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No teachers found in Primary section.</p>
        )}
      </div>
    </div>
  );
}

export default Primary;
