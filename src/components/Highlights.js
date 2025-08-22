import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OurFoundations = (props) => {
  return (
    <div className="foundation-card"
      style={{
        backgroundColor: props.bgColor,
        borderRadius: "20px",
        padding: "2rem",
        boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
        textAlign: "center",
        transition: "transform 0.3s ease",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 1rem",
        }}
      >
        <FontAwesomeIcon icon={props.icon} size="lg" color="#1E3A8A" />
      </div>
      <h3 style={{ marginTop: "0.5rem", fontSize: "1.5rem", color: "#333" }}>
        {props.title}
      </h3>
      <p style={{ color: "#555", lineHeight: "1.6", marginTop: "0.5rem" }}>
        {props.description}
      </p>
    </div>
  );
};

export default OurFoundations;
