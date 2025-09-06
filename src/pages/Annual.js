import React from "react";
import Banner from "../components/Banner";
import Picture from "../components/Picture";
import "../assets/main.css";
import "../assets/scss/_footer.scss"; // Assuming you have a specific SCSS file for Funfair styles

const Annual = () => {
    const pics = [
    { imgUrl: "assets/img/annual/annual1.jpeg" },
    { imgUrl:"assets/img/annual/annual2.jpeg"},
    { imgUrl: "assets/img/annual/annual3.jpeg" },
    { imgUrl: "assets/img/annual/annual4.jpeg" },
    { imgUrl: "assets/img/annual/annual5.jpeg" },
    { imgUrl: "assets/img/annual/annual6.jpeg" },
     { imgUrl: "assets/img/annual/annual7.jpeg" },
    { imgUrl: "assets/img/annual/annual88.jpeg"},
    { imgUrl: "assets/img/annual/annual9.jpeg"},
  ];



  return (
    <>
      <Banner title="Annual Day" />

      <section className="funfair-section section-padding">
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <img
            src="assets/img/trophy.jpg"
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
          <h2 style={{ margin: 0 }}>Achieving Together</h2>

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
           Abasyn University School’s Annual Day provides students with a platform to showcase their talents and boost their confidence. It also offers an opportunity for parents to actively participate, encouraging not only their own children but all students as they perform on stage.
           The Annual Day marks the culmination of the academic year, celebrating both the achievements of the students and the school. It is a moment to appreciate teamwork, reflect on shared values, and take pride in what Abasyn University School stands for.
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

export default Annual;;
