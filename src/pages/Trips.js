import React from "react";
import Banner from "../components/Banner";
import Picture from "../components/Picture";
import "../assets/main.css";
import "../assets/scss/_footer.scss"; // Assuming you have a specific SCSS file for Funfair styles

const Trip = () => {
  const pics = [
    { imgUrl: "assets/img/trip/trip1.jpg", description: "A vibrant scene from the Funfair, showcasing the joy and excitement of the event." },
    { imgUrl: "assets/img/trip/trip2.jpg", description: "A vibrant scene from the Funfair, showcasing the joy and excitement of the event." },
    { imgUrl: "assets/img/trip/trip7.jpeg", description: "A vibrant scene from the Funfair, showcasing the joy and excitement of the event." },
    { imgUrl: "assets/img/trip/trip11.jpeg", description: "A vibrant scene from the Funfair, showcasing the joy and excitement of the event." },
    { imgUrl: "assets/img/trip/trip12.jpeg", description: "A vibrant scene from the Funfair, showcasing the joy and excitement of the event." },
    { imgUrl: "assets/img/trip/trip1.jpg", description: "A vibrant scene from the Funfair, showcasing the joy and excitement of the event." },
  ];

  return (
    <>
      <Banner title="Recreational Trip" />

      <section className="funfair-section section-padding">
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
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
          <h2 style={{ margin: 0 }}> Learning Beyond the Classroom</h2>

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
        </div>

        {/* Pictures grid */}
        <section className="funfair-section section-padding" style={{ position: "relative" }}>
          <div className="frame-shape d-none d-lg-block">
            <img
              src="assets/img/frame.png"
              alt="shape-img"
              style={{
                position: "absolute",
                left: "0",
                top: "2%",
                transform: "translateY(-50%)",
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
      </section>
    </>
  );
};

export default Trip;

   
        