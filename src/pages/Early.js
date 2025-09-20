import React  from "react";
import Banner from "../components/Banner";
import "../assets/main.css";
import { faPuzzlePiece, faPaintBrush, faUsers } from "@fortawesome/free-solid-svg-icons";
import OurFoundations from "../components/Highlights";
import "../assets/main.css";
import Ecard from "../components/Earlyacard";
import SubjectsOffered from "../components/Subjects";

const Early = () => {
   const earlySubjects = [
    {
      id: "english",
      name: "English",
      description:
        "our English program is designed to spark curiosity and nurture a love for language. Children are introduced to the fundamentals of listening, speaking, reading, and writing through play-based and interactive activities that make learning fun and engaging.Reading is introduced through age-appropriate picture books, phonics activities, and shared reading sessions, which lay the foundation for strong literacy skills. Early writing experiences focus on letter recognition and simple sentence formation, encouraging children to express their ideas creatively.By combining structured learning with creative play, we ensure that every child develops not only language skills but also confidence and curiosity that will benefit them throughout their educational journey"
    },
    {
      id: "maths",
      name: "Maths",
      description:
        "our Mathematics program focuses on developing numeracy skills, logical thinking, and problem-solving abilities in a fun and engaging way. Children explore numbers, shapes, patterns, and measurements through hands-on activities, games, and interactive learning.Our approach encourages children to count, compare, and recognize patterns, helping them build a strong foundation for future mathematical concepts. By integrating play-based learning, we ensure that every child enjoys discovering the world of numbers while developing confidence and critical thinking skills."
    },
    {
      id: "science",
      name: "Science",
      description:
        "our Science program encourages children to explore, observe, and ask questions about the world around them. Through hands-on experiments, nature walks, and interactive activities, children learn about plants, animals, weather, and basic physical phenomena.This approach helps develop curiosity, critical thinking, and problem-solving skills, while fostering a love for discovery and understanding how things work. Children gain confidence in exploring ideas and making connections between their experiences and scientific concepts."
    },
    {
      id: "arts",
      name: "Arts",
      description:
        "Our Arts program inspires young children to explore, imagine, and create in a joyful and hands-on way. Through painting, drawing, crafting, and fun art activities, children discover colors, shapes, textures, and patterns while expressing their unique ideas. Each activity encourages curiosity, experimentation, and self-expression, helping little learners develop fine motor skills, focus, and confidence.By blending creativity with play, our program makes learning through art exciting and meaningful. Children enjoy exploring different materials, working on group projects, and bringing their imagination to life. This early exposure to the arts nurtures not only creativity but also problem-solving, observation, and critical thinking skills, laying a strong foundation for lifelong learning and a love for creative expression."
    }
  ];

  const highlight = [
    {
      icon: faPuzzlePiece,
      title: "Play Based Learning",
      description:
        "Learning through play helps children explore, imagine, and grow in a fun and engaging way.",
      bgColor: "#FDE2E2",
    },
    {
      icon: faPaintBrush,
      title: "Creativity & Expression",
      description:
        "Encouraging self-expression through art, play, and imagination.",
      bgColor: "#E6F7FF",
    },
    {
      icon: faUsers,
      title: "Social Development",
      description:
        "Building friendships, teamwork, and strong communication skills.",
      bgColor: "#EDEEEF",
    },
  ];
  const activities = [
    {
      imageUrl: "assets/img/early2.png",
      title:"Height Activity",
      description:"At Abasyn University School, our early year students learn through fun activities that spark curiosity. In the Height Activity, children measure themselves and friends, discovering how everyone grows differently. This playful exercise introduces the concept of measurement while building confidence, teamwork, and awareness of growth in a joyful way."
    },
     {
     imageUrl: "assets/img/early3.jpeg",
      title:"Hands-On Learning",
      description:"At Abasyn University School, our early year students learn through hands-on tasks that make them active participants in their growth. While working on classroom activities, children explore, create, and practice skills that build focus, independence, and confidence. These experiences help them value effort and teamwork while enjoying a supportive, engaging environment."
    },
     {
      imageUrl: "assets/img/early3.png",
      title:"Color Recognition",
      description:"At AUS, our early year students explore the world of colors through interactive Color Recognition Activities. Using flashcards, toys, and everyday objects, children identify and name colors in a fun, engaging way. This activity supports cognitive development while strengthening observation, memory, and communication skills, making learning exciting and meaningful."
    },
  ]
  return (
    <div>
      <Banner title="Early Years" />
    <div className="container">
      {/* Main Description */}
     <div className="row align-items-center mt-4">
  <div className="col-lg-6 order-lg-2 mb-3 mb-lg-0"> 
    <img
      src="assets/img/earlypic.png"
      alt="Early Years"
      width={300}
      className="img-fluid rounded"
      data-aos="fade-up"
      data-aos-delay="300"
    />
  </div>
  <div className="col-lg-6 order-lg-1">
   <h2
  className="mt-0"
  style={{
    whiteSpace: "nowrap",
    fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", // scales between mobile & desktop
  }}
>
  Early Years Foundations
</h2>

<p
  style={{
    fontSize: "clamp(1rem, 1.8vw, 1.1rem)", // responsive font size
    lineHeight: "1.7",
    color: "#444",
    fontWeight: "400",
    textAlign: "justify",
    marginTop: "0.5rem",
    maxWidth: "900px", // keeps text readable on big screens
  }}
  data-aos="fade-up" data-aos-delay="400"
>
  At Abasyn University School, the Early Years program is designed to provide
  children with a strong foundation for lifelong learning. We believe that the
  first years of a child’s education are the most important, as they shape
  curiosity, creativity, and confidence. Our approach combines structured
  learning with play-based activities, allowing children to explore, imagine,
  and develop essential skills in a joyful environment. With a focus on
  language, numeracy, social interaction, and creativity, we ensure that every
  child receives the care and attention they need to thrive. Our experienced
  teachers create a safe, nurturing space where children feel valued, respected,
  and encouraged to express themselves. By fostering independence and a love for
  learning, we prepare our students not only for academic success but also for
  personal growth, teamwork, and future challenges.
</p>

  </div>
</div>


      {/* Our Foundations */}
      <div
  className="container-fluid my-5 p-5 rounded"
  style={{
    backgroundColor: "#F4EEE5",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
  }}
>
  <h2 className="text-center mb-4" style={{ fontSize: "2.5rem" }}>
    Our Foundations
  </h2>
  <div className="row g-4 justify-content-center">
    {highlight.map((item, index) => (
      <div key={index} className="col-sm-6 col-md-4 col-lg-3">
        <OurFoundations
          icon={item.icon}
          title={item.title}
          description={item.description}
          bgColor={item.bgColor}
        />
      </div>
    ))}
  </div>
</div>

      {/* Different Way of Learning */}
      <div className="row justify-content-center mt-5">
  <div className="col-lg-8">
    <h3 className="mb-3 text-center text-md-start" data-aos="fade-up" data-aos-delay="400">
      A Different Way of Learning and Teaching
    </h3>
    <p 
      className="text-justify text-center text-md-start fs-6 fs-md-5"
      style={{ lineHeight: "1.9", color: "#444", fontWeight: "400" }} data-aos="fade-up" data-aos-delay="400"
    >
      At Abasyn University School, children explore learning through indoor and outdoor
      activities that reflect their interests, preferences, and curiosity. By engaging
      students in what they enjoy, our teachers help them develop essential skills and
      introduce new concepts within meaningful and purposeful contexts.
    </p>
  </div>
</div>

    </div>

    <div>
      {activities.map((item,index) =>(
         <Ecard 
           key = {index}
           imageUrl = {item.imageUrl}
           title = {item.title}
           description = {item.description}
         />
      ))}
    </div>
 <SubjectsOffered title="Subjects Offered" subjects={earlySubjects} />
   </div>
  );
};

export default Early;
