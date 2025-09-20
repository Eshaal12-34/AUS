import React  from "react";
import Banner from "../components/Banner";
import "../assets/main.css";
import { faSeedling, faLaptopCode , faPeopleRoof} from "@fortawesome/free-solid-svg-icons";
import OurFoundations from "../components/Highlights";
import "../assets/main.css";
import Ecard from "../components/Earlyacard";
import SubjectsOffered from "../components/Subjects";

const Primary = () => {
  const primarySubjects = [
  {
    id: "english",
    name: "English",
    description:
      "At Abasyn University School, our English program helps students develop strong reading, writing, listening, and speaking skills. Lessons are taught through stories, poems, and creative writing activities that spark imagination. Students also take part in role plays, group discussions, and simple projects to build confidence in communication. Our curriculum follows international standards and focuses on practical language use. Teachers use interactive methods such as games and multimedia tools to make learning fun. Along with language, we encourage critical thinking and creativity. This helps students build a strong foundation in English for higher learning."
  },
  {
    id: "maths",
    name: "Maths",
    description:
      "Our Mathematics program is designed to make learning numbers enjoyable and meaningful. Students build numeracy, logical reasoning, and problem-solving skills through fun activities. Concepts such as shapes, patterns, measurements, and basic operations are taught with games and real-life examples. Group projects and hands-on experiments help children explore math in practical ways. We follow international standards to ensure a solid foundation. Teachers encourage curiosity and creative thinking during lessons. By the end of primary, students gain confidence and enjoy discovering the world of mathematics."
  },
  {
    id: "science",
    name: "Science",
    description:
      "The Science program encourages children to explore, question, and discover the world around them. Through experiments, nature walks, and projects, students learn about plants, animals, weather, and simple physical concepts. Lessons are designed to make science exciting and easy to understand. Teachers focus on building observation and problem-solving skills. Students are also encouraged to work in groups and share their ideas. Our curriculum highlights the real-life application of science in everyday life. This approach makes science both meaningful and memorable."
  },
  {
    id: "urdu",
    name: "Urdu",
    description:
      "Our Urdu program introduces students to the richness of their national language. Children develop reading, writing, and speaking skills through storytelling, poems, and short essays. Teachers encourage creativity with activities like role plays, dramatizations, and writing workshops. The curriculum balances traditional skills with modern approaches to expression. Students learn to share their ideas confidently in Urdu. Class discussions help improve vocabulary and comprehension. By the end of primary, students build fluency and appreciation for Urdu literature and culture."
  },
  {
    id: "isl",
    name: "Islamiyat",
    description:
      "The Islamiyat curriculum helps children understand Islamic teachings and values in a simple way. Students learn about honesty, kindness, and respect through stories and discussions. Teachers connect lessons to everyday life, helping children apply values in practice. Activities such as role-playing and group work make the subject interactive. Students also explore the life of the Prophet (PBUH) and basic Islamic history. The program encourages reflection and moral development. This ensures children build a strong spiritual and ethical foundation."
  },
  {
    id: "arts",
    name: "Arts",
    description:
      "Our Arts program inspires creativity and imagination in young learners. Students explore painting, drawing, and crafting while experimenting with colors and shapes. The curriculum encourages children to express themselves visually and build confidence. Lessons also develop fine motor skills and observation. Teachers guide students in both individual and group projects. Through creative activities, children learn problem-solving and teamwork. The program helps every child discover joy and self-expression in art."
  },
  {
    id: "nazra",
    name: "Nazra",
    description:
      "The Nazra program builds a strong foundation in Quranic reading and recitation. Students practice fluency and correct pronunciation through guided lessons. Teachers focus on Tajweed rules and gradual learning. Group recitations and memorization exercises help improve confidence. Lessons also highlight the meaning and values from selected Surahs. Students are encouraged to connect Quranic teachings to daily life. This program nurtures respect, discipline, and spiritual growth."
  },
  {
    id: "gk",
    name: "GK",
    description:
      "Our General Knowledge (GK) program for Grades 1–3 develops awareness about the world. Students explore topics in science, history, culture, and current affairs. Learning takes place through stories, quizzes, and interactive discussions. Teachers encourage curiosity by connecting lessons to everyday life. Activities such as group debates and projects help build confidence. The program also strengthens critical thinking and communication. By learning GK, students develop a habit of staying informed and curious."
  },
  {
    id: "computer",
    name: "Computer",
    description:
      "Our Computer program introduces children to digital literacy in a fun way. Students learn typing, basic software use, and internet safety. Lessons include hands-on activities that build problem-solving and creativity. Teachers guide students in making simple digital projects. The curriculum highlights how technology is used in real life. Early exposure to coding fosters logical thinking. This program ensures children gain confidence and a strong foundation in computer skills."
  },
  {
    id: "sst",
    name: "Social Studies",
    description:
      "Social Studies for Grades 4–5 introduces history, geography, and civics. Students learn about their community, country, and the wider world. Teachers use stories, maps, and projects to make lessons engaging. The curriculum highlights values such as responsibility and respect for diversity. Group activities build teamwork and problem-solving skills. Students also explore culture, heritage, and traditions. This subject prepares them for deeper understanding of society in later grades."
  }
];


  const highlight = [
    {
      icon: faSeedling,
      title: "Early Learning Approach",
      description:
        "Our Early Learning Approach focuses on building curiosity, creativity, and confidence in young learners through play-based and interactive methods.",
      bgColor: "#FDE2E2",
    },
    {
      icon: faLaptopCode ,
      title: "Digital Learning Environment",
      description:
        "We provide a modern digital learning environment that integrates technology to make education engaging, accessible, and future-ready",
      bgColor: "#E6F7FF",
    },
    {
      icon: faPeopleRoof,
      title: "Parental Involvement and Reflection",
      description:
        "We actively involve parents in the learning journey and encourage reflection to build stronger connections between home and school",
      bgColor: "#EDEEEF",
    },
  ];
  const activities = [
    {
      imageUrl: "assets/img/primary.jpeg",
      title:"Outdoor Adventures",
      description:"At our School, we make learning directions fun and engaging for our early year students through the East and West Activity. Children are introduced to the idea of the sun rising in the East and setting in the West with the help of simple stories, songs, and colorful props. By using playful role-plays and movement-based games, students actively participate in finding and walking toward East and West, making the concept easy to understand and remember.This activity not only teaches children about directions but also helps develop their spatial awareness, teamwork, and confidence."
    },
    {
      imageUrl: "assets/img/primary2.jpeg",
      title:"Team Work",
      description:"At our School, we encourage students to develop strong literacy skills through well-structured Reading Activities. Learners are guided to read with understanding, expression, and confidence using a variety of age-appropriate texts, novels, and informational materials. Through group reading, discussions, and guided practice, they not only strengthen their vocabulary and comprehension but also build a deeper love for books and knowledge.This activity goes beyond just reading words—it helps students think critically, analyze ideas, and connect lessons to real-life situations. By engaging in regular reading practice, they develop focus, imagination, and communication skills that support their academic success."
    },
      {
      imageUrl: "assets/img/primary3.jpeg",
      title:"Fun with Friends",
      description:"At our School, we encourage students to practice and improve their writing skills through creative and structured Writing Activities. Learners are guided to write with clarity, neatness, and confidence using different exercises such as journaling, story writing, and note-taking. Through regular practice and teacher support, they not only enhance their handwriting and sentence formation but also learn to express their thoughts in an organized and meaningful way.This activity goes beyond just putting words on paper—it helps students develop creativity, critical thinking, and self-expression. "
    },
    ]
  return (
    <div>
      <Banner title="Primary Years" />
      <div className="container">
        {/* Main description */}
        <div className="Right-section">
          <div className="right-content">
            <h2 className="mt-5" style={{ margin: 0 }}>
              Primary Years Foundation
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.9",
                color: "#444",
                maxWidth: "1000px",
                margin: "20px auto 30px auto",
                padding: "0 15px",
                fontWeight: "400",
                textAlign: "justify",
              }}
              data-aos="fade-up" data-aos-delay="400"
            >
            Welcome to Abasyn University School & College!
            We provide a dynamic Primary Years Programme (PYP) that supports children in their most formative years. With a carefully designed curriculum and a team of dedicated teachers, we create a safe, engaging, and inspiring environment where learning becomes a joyful journey.
            Our programme includes English, Mathematics, Science, Social Studies, Geography, Languages, Arts, ICT, and Physical Education, ensuring a balanced and well-rounded education. We focus on developing curiosity, creativity, problem-solving, and critical thinking skills—qualities that help students thrive in academics and in life.
            At Abasyn, every child receives personal attention and encouragement to reach their full potential. We believe education is not only about success in school but also about shaping confident, responsible, and compassionate individuals. Choose Abasyn University School & College—and see your child grow, learn, and shine.
            </p>
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
    data-aos="fade-up" data-aos-delay="400"
  >
    Our Aims
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
   <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <h3 className="mb-3 text-center text-md-start fs-3">
            Our Little Explorers in Action
          </h3>
          <p 
            className="text-justify text-center text-md-start fs-6 fs-md-5"
            style={{ lineHeight: "1.9", color: "#444", fontWeight: "400" }}
            data-aos="fade-up" data-aos-delay="400"
          >
            We believe learning happens best through joy and exploration. Here’s a glimpse 
            of our children discovering, creating, and growing every day.
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
 <SubjectsOffered title="Subjects Offered" subjects={primarySubjects} />
   </div>
  );
};

export default Primary;
