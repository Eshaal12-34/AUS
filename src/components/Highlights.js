import React from "react";

const Highlights = ({ description, bgColor, title, imgUrl }) => {
  return (
    <div
      className="highlight-card"
      style={{
        backgroundColor: bgColor || "#f8f9fa",
        padding: "2rem",
        borderRadius: "20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        maxWidth: "350px",
        textAlign: "center",
      }}
    >
      <h3 style={{ marginBottom: "1rem", fontWeight: "600", color: "#333", fontWeight: "bold"
       }}>
        {title}
      </h3>

      {imgUrl && (
        <img
          src={imgUrl}
          alt="Highlight"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "1rem",
          }}
        />
      )}

      <p style={{ textAlign: "justify", color: "#385469", fontSize: "1rem" }}>
        {description}
      </p>
    </div>
  );
};

export default Highlights;
