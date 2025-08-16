import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../assets/scss/_team.scss'; // contains team styling
import '../assets/main.css';

const Gallery = () => {
  const galleryData = [
    { title: "Sports Day", description: "March 2025", imageUrl: "/assets/img/team/01.jpg" },
    { title: "Funfair", description: "February 2025", imageUrl: "/assets/img/team/01.jpg" },
    { title: "Science Exhibition", description: "January 2025", imageUrl: "/assets/img/team/01.jpg" },
    { title: "Art Competition", description: "December 2024", imageUrl: "/assets/img/team/01.jpg" },
    { title: "Science Exhibition", description: "January 2025", imageUrl: "/assets/img/team/01.jpg" },
    { title: "Art Competition", description: "December 2024", imageUrl: "/assets/img/team/01.jpg" },
    { title: "Science Exhibition", description: "January 2025", imageUrl: "/assets/img/team/01.jpg" },
    { title: "Art Competition", description: "December 2024", imageUrl: "/assets/img/team/01.jpg" },
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title mt-60">
            <span>Gallery</span>
            <h2>Our Photo Gallery</h2>
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },  // Mobile
            721: { slidesPerView: 3 },  // Tablet & small laptops
            1401: { slidesPerView: 4 }, // Large desktops
          }}
        >
          {galleryData.map((item, index) => (
            <SwiperSlide key={index}>
              <Card
                title={<span className="team-title">{item.title}</span>}
                imageUrl={item.imageUrl}
                description={<span className="team-desc">{item.description}</span>}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
