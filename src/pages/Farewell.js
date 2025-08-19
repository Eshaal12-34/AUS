import React from "react";
import Banner from "../components/Banner";
import Carousel from "../components/Carasouel";

const Farewell = () => {   
  const slidesData = [
    {
      imgUrl: "assets/img/annual.JPG",
      title: "Last Day Memories",
      description: "Capturing the joy of our farewell day.",
    },
    {
      imgUrl: "assets/img/about/01.jpg",
      title: "Last Day Memories",
      description: "Capturing the joy of our farewell day.",
    },
    {
      imgUrl: "assets/img/about/01.jpg",
      title: "Last Day Memories",
      description: "Capturing the joy of our farewell day.",
    },
  ];

  return (
    <>
      <Banner title="Farewell Ceremony" />
      <section className="farewell-section section-padding position-relative">
        <div className="frame-shape d-none d-md-block">
          <img
            src="assets/img/frame.png"
            alt="shape-img"
            className="img-fluid"
            style={{
              position: "absolute",
              left: "0",
              top: "30%",
              transform: "translateY(-50%)",
              maxWidth: "250px",
              height: "auto",
              zIndex: "-1",
            }}
          />
        </div>

        <div className="container text-center">
          <h2 className="mb-4">Farewell Ceremony Highlights</h2>
          <p
            className="mx-auto mb-5"
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#444",
              maxWidth: "800px",
              padding: "0 15px",
              fontWeight: "400",
            }}
          >
            “Farewells at Abasyn University School are always remembered as a
            beautiful tradition of joy, reflection, and togetherness. It is a
            time when students celebrate their journey, honor their friendships,
            and bid goodbye with love, laughter, and cherished memories. More
            than just an event, it is a moment that stays in the hearts of
            students, teachers, and friends forever.”
          </p>

          {/* Responsive Carousel */}
          <div className="mx-auto" style={{ maxWidth: "1000px" }}>
            <Carousel slides={slidesData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Farewell;
