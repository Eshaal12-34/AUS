import React from "react";
import Banner from "../components/Banner";
import "../assets/main.css";
import Highlights from "../components/Highlights";

const Early = () => {
      const highlight = [
    {
      title: "Play Based Learning",
      description:
        "Learning through play helps children explore, imagine, and grow in a fun and engaging way.",
      bgColor: "#FBC4C4",
      imgUrl: "assets/img/annual.JPG",
    },
     {
      title: "Creativity and Expression",
      description:
        "We inspire children to express themselves freely, explore their imagination, and develop unique ideas through creative activities.",
      bgColor: "#FFF5E1",
       imgUrl: "assets/img/annual.JPG",
    },
     {
      title: "Social Development",
      description:
        "Children learn to communicate, share, and build friendships, developing important social skills in a supportive environment",
      bgColor: "#CFFFE5",
      imgUrl: "assets/img/annual.JPG",
    },
]
    return (
        <div>
            <Banner title="Early Years" />
            <div className="container">
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
            textAlign: "center",
            maxWidth: "800px",
            margin: "20px auto 30px auto",
            padding: "0 15px",
            fontWeight: "400",
            textAlign: "justify",
            }}
        >
          The Early Years program at Abasyn University School lays the foundation for a lifelong love of 
          learning. In a safe, caring, and stimulating environment, young learners are encouraged to explore, 
          question, and create. Our approach blends play-based learning with structured activities that 
          strengthen early literacy, numeracy, and communication skills while nurturing confidence and 
          independence.Beyond academics, the program focuses on holistic growth—helping children develop social
          skills, emotional awareness, and creativity through art, music, storytelling, and interactive play. 
          With personalized attention from dedicated teachers, every child is supported to discover their 
          unique strengths and prepare for a smooth transition into primary education.
        </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" style={{marginTop: "80px"}}>
        <img src="assets/img/team/01.jpg" alt="Vision" />
        </div>
    </div>
</div>
<h2 className="mb-5">Key Highlights</h2>
<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "25px", marginTop: "10px" }}>
       {highlight.map((item, index) => (
        <Highlights
          key={index}
          title={item.title}
          description={item.description}
          bgColor={item.bgColor}
          imgUrl={item.imgUrl}
        />
        ))}
       </div>
</div>
    );
}

export default Early;