import React from "react";
import "../assets/scss/_testimonial.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialItem = ({ description, bgColor }) => (
  <div className="testimonial-item" style={{ backgroundColor: bgColor }}>
    <p className="testimonial-text">{description}</p>
    <hr className="testimonial-divider" />

    {/* Bubble Tail */}
    <div
      className="speech-tail"
      style={{
        borderTop: `20px solid ${bgColor}`,
      }}
    />
  </div>
);

const Testimonial = () => {
  const testi = [
    {
      description:
        "Our child feels safe and encouraged here, and we truly appreciate the school’s focus on both academic excellence and personal development.",
      bgColor: "#2f4661",
    },
    {
      description:
        "The school’s communication with parents is excellent, and the teachers always go above and beyond to help our child succeed.",
      bgColor: "#6d9ba4",
    },
    {
      description:
        "We love how this school fosters creativity, confidence, and respect in our child, motivating them every morning.",
      bgColor: "#2e6e44",
    },
    {
      description:
        "From day one, the school staff made us feel welcome, and our child’s progress here exceeds all expectations.",
      bgColor: "#2f4661",
    },
    {
      description:
        "Being part of this community brings us peace of mind, knowing our child is supported by caring teachers.",
      bgColor: "#6d9ba4",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } },
      { breakpoint: 576, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  return (
    <section className="testimonial-section">
      <div className="section-title text-center">
        <span>Testimonials</span>
        <h2>
          Parents' words are the key <br /> to happy kids
        </h2>
      </div>

      <div className="testimonial-container">
        <Slider {...settings}>
          {testi.map((item, index) => (
            <TestimonialItem
              key={index}
              description={item.description}
              bgColor={item.bgColor}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
