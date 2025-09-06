import React from "react";
import Banner from "../components/Banner";
import Picture from "../components/Picture";
import "../assets/main.css";
import "../assets/scss/_footer.scss"; 

const Engage = () => {
  const pics = [
    { imgUrl: "assets/img/se/se.jpeg", description: "A vibrant scene from the Funfair, showcasing the joy and excitement of the event." },
    { imgUrl: "assets/img/se/se1.jpeg", description: "A vibrant scene from the Funfair, showcasing the joy and excitement of the event." },
    { imgUrl:  "assets/img/se/se2.jpeg", description: "A vibrant scene from the Funfair, showcasing the joy and excitement of the event." },
    { imgUrl:  "assets/img/se/se3.jpeg", description: "A vibrant scene from the Funfair, showcasing the joy and excitement of the event." },
    { imgUrl:  "assets/img/se/se4.jpeg", description: "A vibrant scene from the Funfair, showcasing the joy and excitement of the event." },
    { imgUrl:  "assets/img/se/se5.jpeg", description: "A vibrant scene from the Funfair, showcasing the joy and excitement of the event." },
  ];

  return (
    <>
      <Banner title="Student Engagement" />

      <section className="funfair-section section-padding">
        <div className="container" style={{ position: "relative", textAlign: "center" }}>

          {/* Heading */}
          <h2 style={{ margin: 0 }}>Empowering Voices</h2>

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
           At Abasyn University School, student engagement is at the heart of learning. Through interactive 
           activities, leadership opportunities, and collaborative projects, students are encouraged to share 
           ideas, take initiative, and actively participate in shaping their educational journey. This approach builds confidence, responsibility, and creativity, 
           ensuring that every student feels valued and empowered to contribute both inside and outside the classroom.
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
                top: "5%",
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

export default Engage;
