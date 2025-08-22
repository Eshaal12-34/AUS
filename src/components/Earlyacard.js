import React from "react";

const Ecard = (props) => {
    return( 
    <div className="container" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
  <div
    className="pic-section"
    style={{
      display: "flex",
      flexWrap: "wrap", 
      alignItems: "flex-start",
      gap: "1rem",
      justifyContent: "flex-start",
    }}
  >
    {/* Left Image */}
    <div
      className="left-content"
      style={{
        flex: "0 0 auto", 
        maxWidth: "400px",
        width: "100%",
      }}
    >
      <img
        src={props.imageUrl}
        className="img-fluid"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          borderRadius: "12px",
          display: "block", 
        }}
        alt="Kinder"
      />
    </div>

    {/* Right Text */}
    <div
      className="right-content"
      style={{
        flex: "1", 
        minWidth: "450px",
      }}
    >
      <h3 style={{ marginTop: 0, display:"flex", alignItems:"flex-start", marginBottom:"0.5rem" }}>{props.title}</h3>
      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.9",
          color: "#444",
          fontWeight: "400",
          textAlign: "justify",
          maxWidth:"400px"
        }}
      >
    {props.description}
      </p>
    </div>
  </div>
</div>
    )
}

export default Ecard;