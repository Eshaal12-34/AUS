import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FacultyCard = ({ name, imageUrl, designation, subjects }) => {
  return (
    <div
      className="faculty-card card shadow-sm h-100 border-0" 
      style={{
        borderRadius: "10px",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.12)";
      }}
    >
    <div className="d-flex flex-column flex-md-row align-items-center p-3">
    {/* Image */}
    <img
      src={imageUrl}
      alt={name}
      className="img-fluid mb-3 mb-md-0"
      style={{
        width: "100px",
        height: "120px",
        objectFit: "cover",
        borderRadius: "8px",
        border: "3px solid #1f668a",
        flexShrink: 0,
      }}
    />

    {/* Content */}
    <div className="ms-md-3 text-center text-md-start flex-grow-1">
      <h5 className="mb-1 fw-bold">{name}</h5>
      <p className="mb-2 fst-italic text-muted">{designation}</p>
      {subjects && subjects.length > 0 && (
        <p className="mb-0 fw-semibold" style={{ fontSize: "0.95rem" }}>
          <span style={{ color: "#0C59BB" }}>Subjects:</span>{" "}
          {subjects.join(", ")}
        </p>
      )}
    </div>
</div>

    </div>
  );
};

export default FacultyCard;
