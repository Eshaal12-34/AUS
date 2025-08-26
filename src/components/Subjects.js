import React, { useState } from "react";

const SubjectsOffered = ({ title, subjects }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="container my-5"
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px", // fixed max width
      }}
    >
      {/* Title */}
      <h2 className="text-center mb-4">{title}</h2>

      {/* Buttons */}
      <div className="d-flex flex-wrap justify-content-center mb-3">
        {subjects.map((subject, index) => (
          <button
            key={subject.id}
            onClick={() => setActiveIndex(index)}
            style={{
              padding: "0.5rem 1.5rem",
              margin: "0.25rem",
              borderRadius: "20px",
              border: activeIndex === index ? "2px solid #272F54" : "2px solid #ccc",
              backgroundColor: activeIndex === index ? "#272F54" : "white",
              color: activeIndex === index ? "white" : "#333",
              cursor: "pointer",
              transition: "0.8s",
              transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
              whiteSpace: "nowrap",
            }}
          >
            {subject.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        className="p-3 rounded shadow-sm"
        style={{
          border: "2px solid #ccc",
          backgroundColor: "#f8f8f8",
          minHeight: "150px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        }}
      >
        <p style={{ textAlign: "justify", marginBottom: 0 }}>
          {subjects[activeIndex].description}
        </p>
      </div>
    </div>
  );
};

export default SubjectsOffered;
