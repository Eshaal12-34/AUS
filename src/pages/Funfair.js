import React from "react";
import Banner from "../components/Banner";
import Picture from "../components/Picture";
import "../assets/main.css";
import "../assets/scss/_footer.scss"; 

const Funfair = () => {
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
      <Banner title="Funfair" />

      <section className="funfair-section section-padding">
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <img
            src="assets/img/balloon.jpg"
            alt="balloon"
            className="balloon d-none d-lg-block"
            style={{
              position: "absolute",
              top: "-40px",
              right: "1%",
              width: "140px",
              height: "auto",
            }}
          />

          {/* Heading */}
          <h2 style={{ margin: 0 }}>A Celebration of Joy</h2>

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
           The Abasyn School Funfair was an exciting and unforgettable event that brought together students, teachers, and families for a day filled with joy and laughter. The school grounds were transformed into a colorful carnival, featuring food stalls, thrilling games, creative activities, and vibrant performances. From delicious treats to stage shows, every corner was alive with energy and happiness. The Funfair not only provided entertainment but also created a strong sense of community, where parents, teachers, and students shared wonderful moments together. It was truly a day of celebration, showcasing the talent, creativity, and spirit of Abasyn School.
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
                top: "10%",
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

export default Funfair;
