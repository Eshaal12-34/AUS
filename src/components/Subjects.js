import React, { useState } from "react";

const SubjectsOffered = ({ title, subjects }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>{title}</h2>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem", flexWrap: "wrap" }}>
        {subjects.map((subject, index) => (
          <button
            key={subject.id}
            onClick={() => setActiveIndex(index)}
            style={{
              padding: "0.5rem 1.5rem",
              margin: "0.25rem",
              borderRadius: "20px",
              border: activeIndex === index ? "2px solid #272F54" : "2px solid #ccc",
              backgroundColor: activeIndex === index ? "#272F54": "white",
              color: activeIndex === index ? "white" : "#333",
              cursor: "pointer",
              transition: "0.8s",
              transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
            }}
          >
            {subject.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        style={{
          padding: "1.5rem",
          border: "2px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "#f8f8f8",
          minHeight: "150px",
          boxShadow:"0 4px 10px rgba(0,0,0,0.15)",
        }}
      >
       <p style={{ textAlign: "justify" }}>{subjects[activeIndex].description}</p>
      </div>
    </div>
  );
};

export default SubjectsOffered;
