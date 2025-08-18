import React from "react";
import Banner from "../components/Banner";
import Picture from "../components/Picture";
import "../assets/main.css";
import "../assets/scss/_footer.scss"; // Assuming you have a specific SCSS file for Funfair styles

const Trip = () => {
  const pics = [
    { imgUrl: "assets/img/about/01.jpg", description: "A vibrant scene from the Funfair, showcasing the joy and excitement of the event." },
    { imgUrl: "assets/img/about/01.jpg", description: "A vibrant scene from the Funfair, showcasing the joy and excitement of the event." },
    { imgUrl: "assets/img/about/01.jpg", description: "A vibrant scene from the Funfair, showcasing the joy and excitement of the event." },
    { imgUrl: "assets/img/about/01.jpg", description: "A vibrant scene from the Funfair, showcasing the joy and excitement of the event." },
    { imgUrl: "assets/img/about/01.jpg", description: "A vibrant scene from the Funfair, showcasing the joy and excitement of the event." },
    { imgUrl: "assets/img/about/01.jpg", description: "A vibrant scene from the Funfair, showcasing the joy and excitement of the event." },
  ];

  return (
    <>
      <Banner title="Recreational Trips" />

      {/* Intro Section */}
      <section className="funfair-section section-padding" style={{ position: "relative" }}>
        {/* Floating bus */}
        <div className="bus-shape float-bob-x">
          <img 
            src="assets/img/about/bus.png" 
            alt="shape-img"
            style={{
              position: "absolute",
              top: "-40px",  
              right: "4%", 
              width: "140px",
              height: "auto",
            }}
          />
        </div>

        {/* Heading */}
        <h2 style={{ margin: 0, textAlign: "center" }}>
          Learning Beyond the Classroom
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.9",
            color: "#444",
            textAlign: "center",
            maxWidth: "800px",
            margin: "20px auto 30px auto",
            padding: "0 15px",
            fontWeight: "400",
          }}
        >
          At our school, recreational trips are more than just outings—they are opportunities to learn, explore, and grow together. These trips allow students to relax, connect with friends, and discover the world outside their textbooks. From historical sites to natural landscapes, every journey helps students build confidence, teamwork, and lasting memories while making learning enjoyable.
        </p>
      </section>

      {/* Pictures Section */}
      <section className="funfair-section section-padding" style={{ position: "relative" }}>

        {/* Frame shape */}
  
          <div className="frame-shape">
        <img src="assets/img/frame.png" alt="shape-img"   
        style={{
                position: "absolute",
                left: "0",  
                top: "10%",  
                transform: "translateY(-50%)", 
                width: "290px", 
                height: "auto",
            }}/>
        </div>
        {/* Pictures grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            maxWidth: "900px",
            margin: "0 auto",
            position: "relative",
            zIndex: "1",
          }}
        >
          {pics.map((pic, index) => (
            <Picture
              key={index}
              imgUrl={pic.imgUrl}
              description={pic.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Trip;
