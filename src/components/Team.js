import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../assets/main.css';

const TeamSection = () => {
  const team = [
    { title: "John Doe", imageUrl: "/assets/img/team/01.jpg", description: "Expert in Math" },
    { title: "Jane Smith", imageUrl: "/assets/img/team/02.jpg", description: "Expert in Science" },
    { title: "Michael Johnson", imageUrl: "/assets/img/team/03.jpg", description: "Expert in Physics" },
    { title: "Emily Brown", imageUrl: "/assets/img/team/04.jpg", description: "Expert in Chemistry" },
    { title: "David Lee", imageUrl: "/assets/img/team/01.jpg", description: "Expert in Biology" }
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title" style={{ marginTop: "120px" }}>
            <span>Our Teachers</span>
            <h2>Meet Our Staff</h2>
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },     // Mobile
            721: { slidesPerView: 3 },     // Tablets & small laptops
            1401: { slidesPerView: 4 },    // Large desktops
          }}
        >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <Card
                title={member.title}
                imageUrl={member.imageUrl}
                description={member.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};


export default TeamSection;