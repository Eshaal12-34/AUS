import React, { useState } from "react";

const SubjectsOffered = ({ title, subjects }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="container my-5"
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        width: "100%",
      }}
    >
      {/* Title */}
      <h2 className="text-center mb-4 fs-3 fs-md-2">{title}</h2>

      {/* Buttons */}
      <div className="d-flex flex-wrap justify-content-center mb-3">
        {subjects.map((subject, index) => (
          <button
  key={subject.id}
  onClick={() => setActiveIndex(index)}
  className="btn"
  style={{
    padding: "0.4rem 1rem", // smaller padding
    margin: "0.25rem",
    borderRadius: "20px",
    border: activeIndex === index ? "2px solid #272F54" : "2px solid #ccc",
    backgroundColor: activeIndex === index ? "#272F54" : "white",
    color: activeIndex === index ? "white" : "#333",
    cursor: "pointer",
    transition: "0.3s ease",
    transform: activeIndex === index ? "scale(1.05)" : "scale(1)",
    fontSize: "0.9rem", // slightly smaller font on mobile
    flex: "0 1 auto", // prevents oversized stretching
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
        }}
      >
        <p className="text-justify fs-6 fs-md-5 mb-0">
          {subjects[activeIndex].description}
        </p>
      </div>
    </div>
  );
};

export default SubjectsOffered;
