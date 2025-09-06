import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../assets/scss/_team.scss'; 
import '../assets/main.css';

const Gallery = () => {
  const galleryData = [
    { title: "Sports Day", description: "October 2024", imageUrl: "/assets/img/gall/7.jpeg" },
    { title: "School Opening", description: "February 2025", imageUrl: "/assets/img/gall/6.jpeg" },
    { title: "Annual Day", description: "December 2024", imageUrl: "/assets/img/gall/03.jpg"  },
    { title: "Science Exhibition", description: "January 2025", imageUrl: "/assets/img/gall/3.jpg" },
    { title: "Art Competition", description: "December 2024", imageUrl: "/assets/img/gall/4.jpg" },
    { title: "Science Exhibition", description: "January 2025", imageUrl: "/assets/img/gall/5.jpg" },
    { title: "Art Competition", description: "December 2024", imageUrl: "/assets/img/gall/6.jpg" },
    { title: "Science Exhibition", description: "January 2025", imageUrl: "/assets/img/gall/7.jpg" },
    { title: "Art Competition", description: "December 2024", imageUrl: "/assets/img/gall/8.jpg" },
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title mt-60">
            <span>Gallery</span>
            <h2 data-aos="fade-up" data-aos-delay="400">Our Photo Gallery</h2>
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
