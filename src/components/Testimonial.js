import React from "react";
import "../assets/scss/_testimonial.scss";
import "../assets/main.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialItem = ({ description, bgColor }) => (
  <div
    className="testimonial-item"
    style={{
      backgroundColor: bgColor,
      padding: "2rem 2.5rem 2.5rem",
      borderRadius: "25px",
      color: "white",
      minHeight: "300px", // same height for all
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "relative",
      margin: "0 10px",
    }}
  >
    <p className="testimonial-text" style={{ flexGrow: 1 }}>
      {description}
    </p>

    <hr className="testimonial-divider" />

    {/* Speech bubble tail */}
    <div
      style={{
        position: "absolute",
        bottom: "-20px",
        left: "40px",
        width: 0,
        height: 0,
        borderTop: `20px solid ${bgColor}`,
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
      }}
    ></div>
  </div>
);


const Testimonial = () => {
  const testi = [
    {
      description:
        "We are extremely happy with this school; the teachers are very supportive, nurturing, and dedicated, which makes our child excited to learn and grow every single day.",
      bgColor: "#2e6e44",
    },
    {
      description:
        "Our child feels safe and encouraged here, and we truly appreciate the school’s focus on both academic excellence and personal development in a friendly environment.",
      bgColor: "#2f4661",
    },
    {
      description:
        "The school’s communication with parents is excellent, and the teachers always go above and beyond to help our child succeed academically and emotionally with kindness.",
      bgColor: "#6d9ba4",
    },
    {
      description:
        "We love how this school fosters creativity, confidence, and respect in our child, creating a positive atmosphere that motivates them to attend school happily every morning.",
      bgColor: "#2e6e44",
    },
    {
      description:
        "From day one, the school staff made us feel welcome, and our child’s progress and happiness here exceed all our expectations consistently throughout the year.",
      bgColor: "#2f4661",
    },
    {
      description:
        "Being part of this community has brought us peace of mind, knowing our child is supported by caring teachers in a safe, inspiring, and motivating environment.",
      bgColor: "#6d9ba4",
    },
  ];

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 4 } },
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="testimonial-section">
      <div className="bee-shape float-bob-y">
        <img src="assets/img/testi-bee-shape.png" alt="shape-img" />
      </div>

      <div className="section-title text-center">
        <span className="wow fadeInUp" style={{ marginTop: "140px" }}>
          testimonials
        </span>
        <h2 className="wow fadeInUp" data-wow-delay=".3s">
          Parents' words are the key <br /> to happy kids
        </h2>
      </div>

      <div className="container">
        <Slider {...settings}>
          {testi.map((item, index) => (
            <div key={index} style={{ padding: "0 10px", height: "100%" }}>
              {/* ✅ wrapper ensures equal slide height */}
              <TestimonialItem
                description={item.description}
                bgColor={item.bgColor}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
