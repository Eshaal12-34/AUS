import React from "react";
import "../assets/main.css";

const Picture = ({ imgUrl, description }) => {
  const containerStyle = {
    width: "100%",
    maxWidth: "100%",     
    aspectRatio: "4 / 3", 
    margin: "10px auto",
    overflow: "hidden",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "12px",
  };

  const descriptionStyle = {
    marginTop: "8px",
    fontSize: "1rem", // scales with root font size
    fontWeight: "500",
    textAlign: "center",
    color: "#333",
    fontFamily: "Poppins, sans-serif",
  };

  return (
    <div style={{ textAlign: "center", cursor: "pointer" }}>
      <div className="hover-box" style={containerStyle}>
        <img src={imgUrl} alt="Picture" style={imageStyle} />
      </div>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

export default Picture;
