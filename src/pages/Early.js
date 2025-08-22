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
      imageUrl: "assets/img/kinder.jpg",
      title:"Circle Time",
      description:"At Abasyn University School, children explore learning through indoor and outdoor activities that reflect their interests, preferences, and curiosity. By engaging students in what they enjoy, our teachers help them develop essential skills and introduce new concepts within meaningful and purposeful contexts."
    },
     {
      imageUrl: "assets/img/kinder.jpg",
      title:"Circle Time",
      description:"At Abasyn University School, children explore learning through indoor and outdoor activities that reflect their interests, preferences, and curiosity. By engaging students in what they enjoy, our teachers help them develop essential skills and introduce new concepts within meaningful and purposeful contexts."
    },
     {
      imageUrl: "assets/img/kinder.jpg",
      title:"Circle Time",
      description:"At Abasyn University School, children explore learning through indoor and outdoor activities that reflect their interests, preferences, and curiosity. By engaging students in what they enjoy, our teachers help them develop essential skills and introduce new concepts within meaningful and purposeful contexts."
    },
  ]
  return (
    <div>
      <Banner title="Early Years" />
      <div className="container">
        {/* Main description */}
        <div className="Right-section">
          <div className="right-content">
            <h2 className="mt-5" style={{ margin: 0 }}>
              Early Years Foundations
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.9",
                color: "#444",
                maxWidth: "800px",
                margin: "20px auto 30px auto",
                padding: "0 15px",
                fontWeight: "400",
                textAlign: "justify",
              }}
            >
            At Abasyn University School, the Early Years program is designed to provide children with a strong foundation for lifelong learning. We believe that the first years of a child’s education are the most important, as they shape curiosity, creativity, and confidence. Our approach combines structured learning with play-based activities, allowing children to explore, imagine, and develop essential skills in a joyful environment. With a focus on language, numeracy, social interaction, and creativity, we ensure that every child receives the care and attention they need to thrive. Our experienced teachers create a safe, nurturing space where children feel valued, respected, and encouraged to express themselves. By fostering independence and a love for learning, we prepare 
            our students not only for academic success but also for personal growth, teamwork, and future challenges.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="300" style={{ marginTop: "100px" }}>
            <img src="assets/img/team/01.jpg" alt="Vision" />
          </div>
        </div>
      </div>
<div style={{ backgroundColor: "#F4EEE5", padding: "4rem 2rem",marginTop: "4rem",marginBottom: "4rem", borderRadius: "20px", boxShadow: "0 6px 15px rgba(0,0,0,0.1)" }}>
  <h2
    style={{
      fontSize: "2.5rem",
      marginBottom: "2rem",
      textAlign: "center",
    }}
  >
    Our Foundations
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1.5rem",
      maxWidth: "1000px",
      margin: "0 auto",
    }}
  >
    {highlight.map((item, index) => (
      <OurFoundations
        key={index}
        icon={item.icon}
        title={item.title}
        description={item.description}
        bgColor={item.bgColor}
      />
    ))}
  </div>
</div>
   <div>
    <h3 style={{ fontSize: "2rem",marginBottom: "1rem",textAlign:"left", marginLeft:"140px"}}>A Different Way of Learning and Teaching</h3>
    <p
     style={{
         fontSize: "1.1rem",
         lineHeight: "1.9",
         color: "#444",
         maxWidth: "800px",
         marginLeft: "130px",
         padding: "0 15px",
         fontWeight: "400",
         textAlign: "justify",
              }}
    >
      At Abasyn University School, children explore learning through indoor and outdoor activities that reflect their interests, preferences, and curiosity.
      By engaging students in what they enjoy, our teachers help them develop essential skills and introduce new concepts within meaningful and purposeful contexts.</p>

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
