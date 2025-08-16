import React from "react";

const Banner = (props) => {
  return (
    <>
      {/* Breadcrumb Section Start */}
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: 'url("assets/img/breadcrumb.png")' }}
      >
        <div className="line-shape">
          <img src="assets/img/breadcrumb-shape/line.png" alt="shape-img" />
        </div>
        <div className="plane-shape float-bob-y">
          <img src="assets/img/breadcrumb-shape/plane.png" alt="shape-img" />
        </div>
        <div className="doll-shape float-bob-x">
          <img src="assets/img/breadcrumb-shape/doll.png" alt="shape-img" />
        </div>
        <div className="parasuit-shape float-bob-y">
          <img src="assets/img/breadcrumb-shape/parasuit.png" alt="shape-img" />
        </div>
        <div className="frame-shape">
          <img src="assets/img/breadcrumb-shape/frame.png" alt="shape-img" />
        </div>
        <div className="bee-shape float-bob-x">
          <img src="assets/img/breadcrumb-shape/bee.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="page-heading">
            <h1 data-aos="fade-up" data-aos-delay="700">
              {props.title}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
