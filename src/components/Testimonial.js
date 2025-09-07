import React from "react";
 import '../assets/scss/_testimonial.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialItem = ({ description, bgColor }) => (
  <div
    className="testimonial-item"
    style={{
      backgroundColor: bgColor,
      borderRadius: "25px",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "relative",
      margin: "0 10px",
      height: "100%",
      padding: "2rem 1.5rem 2.5rem"
    }}
  >
    <p className="testimonial-text">{description}</p>

    <hr className="testimonial-divider" />

    {/* Speech bubble tail */}
    <div
      className="speech-tail"
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
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '40px'
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false
        }
      }
    ]
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
        <h2 className="wow fadeInUp mb-4" data-wow-delay=".3s">
          Parents' words are the key <br /> to happy kids
        </h2>
      </div>

      <div className="container">
        <Slider {...settings}>
          {testi.map((item, index) => (
            <div key={index}>
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