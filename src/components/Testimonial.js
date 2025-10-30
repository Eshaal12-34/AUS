import React from "react";
import "../assets/scss/_testimonial.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const TestimonialItem = ({ description, bgColor }) => (
  <div className="testimonial-item" style={{ backgroundColor: bgColor }}>
    <p className="testimonial-text">{description}</p>
    <hr className="testimonial-divider" />
  </div>
);

const Testimonial = () => {
  const testi = [
    { description: "Our child feels safe and encouraged here, and we truly appreciate the school’s focus on both academic excellence and personal development.", bgColor: "#2f4661" },
    { description: "The school’s communication with parents is excellent, and the teachers always go above and beyond to help our child succeed.", bgColor: "#6d9ba4" },
    { description: "We love how this school fosters creativity, confidence, and respect in our child, motivating them every morning.", bgColor: "#2e6e44" },
    { description: "From day one, the school staff made us feel welcome, and our child’s progress here exceeds all expectations.", bgColor: "#2f4661" },
    { description: "Being part of this community brings us peace of mind, knowing our child is supported by caring teachers.", bgColor: "#6d9ba4" },
    { description: "The teachers are incredibly supportive and always go the extra mile to ensure students understand and enjoy learning.", bgColor: "#2f4661" },
    { description: "We love the school’s balanced approach—our child is thriving academically while also growing socially and emotionally.", bgColor: "#2e6e44" },
    { description: "From day one, the staff has made our family feel welcome. The focus on character development alongside studies is outstanding.", bgColor: "#2f4661" },
  ];

  return (
    <section className="testimonial-section">
      <div className="section-title text-center">
        <span>Testimonials</span>
        <h2>
          Parents' words are the key <br /> to happy kids
        </h2>
      </div>

      <div className="testimonial-container">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
          1200: { slidesPerView: 3, spaceBetween: 30 },
          992: { slidesPerView: 2, spaceBetween: 20 },
          576: { slidesPerView: 1, spaceBetween: 15 },
          0: { slidesPerView: 1, spaceBetween: 10 },
        }}

        >
          {testi.map((item, index) => (
            <SwiperSlide key={index}>
              <TestimonialItem description={item.description} bgColor={item.bgColor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
