import React from "react";

const Ecard = (props) => {
  return (
    <div className="container my-5">
      <div className="row align-items-start g-4">
        
        {/* Left Image */}
        <div className="col-12 col-md-5">
          <img
            src={props.imageUrl}
            className="img-fluid rounded shadow-sm"
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
            alt="Kinder"
          />
        </div>

        {/* Right Text */}
        <div className="col-12 col-md-4">
          <h3 data-aos="fade-up" data-aos-delay="400" className="mb-3">{props.title}</h3>
          <p data-aos="fade-up" data-aos-delay="400" className="text-justify" style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#444", fontWeight: "400" }}>
            {props.description}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Ecard;
