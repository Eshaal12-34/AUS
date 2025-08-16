import React from "react";
import '../assets/scss/_testimonial.scss';
import '../assets/main.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialItem = ({ description, bgColor }) => (
  <div
    className="testimonial-item"
    style={{
      backgroundColor: bgColor,
      position: "relative",
      padding: "2rem 2.5rem 1rem",
      borderRadius: "70px 20px 10px 20px",
      color: "white",
    }}
  >
    <div
      style={{
        position: "absolute",
        bottom: "-25px",
        left: "25px",
        width: 0,
        height: 0,
        borderTop: `25px solid ${bgColor}`,
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
      }}
    ></div>

    <p className="testimonial-text">
      {description}
    </p>
    <hr className="testimonial-divider" />
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
    speed: 1000,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 1080, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="testimonial-section">
      <div className="bee-shape float-bob-y">
        <img src="assets/img/testi-bee-shape.png" alt="shape-img" />
      </div>
      <div className="section-title text-center">
        <span
          className="wow fadeInUp"
          style={{ marginTop: "140px" }}
        >
          testimonials
        </span>
        <h2 className="wow fadeInUp" data-wow-delay=".3s">
          Parents' words are the key <br /> to happy kids
        </h2>
      </div>

      <Slider {...settings}>
        {testi.map((item, index) => (
          <TestimonialItem
            key={index}
            description={item.description}
            bgColor={item.bgColor}
          />
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;
