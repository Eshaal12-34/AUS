import React from "react";
import Banner from "../components/Banner";
import Carousel from "../components/Carasouel";

const Sports = () => {   
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
      <Banner title="Sports Gala" />
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
          <h2 className="mb-4">Fuel the Spirit</h2>
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
            Abasyn University School’s Sports Gala is more than just a day of games—it is a vibrant celebration of energy, teamwork, and determination. 
            The event brings together students from all grades to participate in a wide range of athletic activities, from track races to exciting team sports. It not only highlights physical fitness and competitive spirit but also instills values of discipline, unity, and resilience. Parents and teachers join in to cheer, making the gala a memorable occasion that inspires confidence, strengthens friendships, and promotes a healthy lifestyle for every student.
          </p>

          {/* Responsive Carousel */}
          <div className="mx-auto" style={{ maxWidth: "1000px" }}>
            <Carousel slides={slidesData} />
          </div>
        </div>
      </section>
    </>
    )
}

export default Sports;