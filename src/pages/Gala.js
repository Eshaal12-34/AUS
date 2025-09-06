import React from "react";
import Banner from "../components/Banner";
import Picture from "../components/Picture";

const Sports = () => {   
   const pics = [
    {
      imgUrl: "assets/img/sports/sports1.jpeg",
    },
    {
      imgUrl: "assets/img/sports/sports2.jpeg"
    },
    {
     imgUrl: "assets/img/sports/sports5.jpeg",
    },
     {
      imgUrl: "assets/img/sports/sports4.jpeg",
    },
    {
      imgUrl: "assets/img/sports/sports3.jpeg",
    },
    {
       imgUrl: "assets/img/sports/sports6.jpeg",
    },
  ];

  return (
    <>
      <Banner title="Sports Gala" />
      <section className="farewell-section section-padding position-relative">
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

          <section className="funfair-section section-padding" style={{ position: "relative" }}>
          <div className="frame-shape d-none d-lg-block">
            <img
              src="assets/img/frame.png"
              alt="shape-img"
              style={{
                position: "absolute",
                left: "0",
                top: "10%",
                transform: "translateY(-85%)",
                width: "290px",
                height: "auto",
              }}
            />
          </div>

          <div className="funfair-grid">
            {pics.map((pic, index) => (
              <Picture key={index} imgUrl={pic.imgUrl} description={pic.description} />
            ))}
          </div>
        </section>
        </div>
      </section>
    </>
    )
}

export default Sports;