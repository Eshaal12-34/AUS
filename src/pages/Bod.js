import React from "react";
import Banner from "../components/Banner";

const Bod = () => {
  return (
    <>
      <Banner title="Board Of Directors" />

      <div className="container my-5">
        {/* Introductory Text */}
        <div
          className="text-center mb-5"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <h2 className="fw-bold mb-3">Meet Our Board of Directors</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "800px", lineHeight: "1.8" }}>
            The Board of Directors plays a vital role in shaping the vision and strategic 
            direction of our institution. With their vast experience, dedication, and 
            leadership, they ensure that we continue to uphold our core values of 
            excellence, innovation, and integrity — guiding the school towards a 
            brighter future for all our students.
          </p>
        </div>

        {/* Directors Grid */}
        <div className="row justify-content-center text-center g-4">
          {/* Director 1 */}
          <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="200">
            <div className="card border-0 shadow-lg rounded-4 p-3 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="assets/img/directors.jpeg"
                  alt="Director 1"
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </div>
              <hr className="mx-auto my-3 w-50" />
              <h5 className="card-title mb-0">Director</h5>
            </div>
          </div>

          {/* Director 2 */}
          <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="300">
            <div className="card border-0 shadow-lg rounded-4 p-3 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="assets/img/history.jpg"
                  alt="Director 2"
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </div>
              <hr className="mx-auto my-3 w-50" />
              <h5 className="card-title mb-0">Director</h5>
            </div>
          </div>

          {/* Director 3 */}
          <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="400">
            <div className="card border-0 shadow-lg rounded-4 p-3 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="assets/img/director3.jpeg"
                  alt="Director 3"
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </div>
              <hr className="mx-auto my-3 w-50" />
              <h5 className="card-title mb-0">Director</h5>
            </div>
          </div>

          {/* Director 4 */}
          <div className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="500">
            <div className="card border-0 shadow-lg rounded-4 p-3 h-100">
              <div className="d-flex justify-content-center">
                <img
                  src="assets/img/director4.jpeg"
                  alt="Director 4"
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </div>
              <hr className="mx-auto my-3 w-50" />
              <h5 className="card-title mb-0">Director</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bod;
