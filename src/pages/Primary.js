import React  from "react";
import Banner from "../components/Banner";
import "../assets/main.css";
import { faSeedling, faLaptopCode , faPeopleRoof} from "@fortawesome/free-solid-svg-icons";
import OurFoundations from "../components/Highlights";
import "../assets/main.css";
import Ecard from "../components/Earlyacard";
import SubjectsOffered from "../components/Subjects";

const Primary = () => {
   const earlySubjects = [
    {
      id: "english",
      name: "English",
      description:
        "At Abasyn University School, we recognize that mastering English is key to thriving in the modern world. Our English curriculum is designed to strengthen students’ reading, writing, listening, and speaking skills. Through a blend of classroom teaching, collaborative projects, and technology-enhanced learning, we ensure that every student engages in ways that match their individual learning style.Our curriculum follows internationally recognized standards, including the Common European Framework of Reference (CEFR), and focuses on practical language use in real-life situations. Alongside language proficiency, we emphasize the development of critical thinking skills, preparing students to navigate today’s fast-paced and ever-changing world.Learning English at our school is both fun and meaningful. Our teachers incorporate interactive activities, games, and multimedia tools to make lessons engaging and effective. Students are also encouraged to join language clubs, debating societies, drama groups, and creative writing workshops to further enhance their communication skills and foster creativity."
    },
    {
      id: "maths",
      name: "Maths",
      description:
        "At Abasyn University School, we aim to make mathematics both engaging and meaningful. Our curriculum is designed to help students build strong numeracy skills, logical thinking, and problem-solving abilities. Through a mix of hands-on activities, collaborative projects, and technology-based learning, we ensure that every student can learn in a way that suits their individual style.Our mathematics program aligns with internationally recognized standards and emphasizes practical applications, helping students understand how math relates to real-life situations. We also focus on developing critical thinking and analytical skills, which are essential for success in today’s dynamic world.Learning math at our school is interactive and fun. Students explore numbers, patterns, shapes, and measurements through games, experiments, and creative problem-solving activities. Our teachers encourage curiosity and experimentation, ensuring that every child builds confidence while discovering the joy of mathematics."
    },
   {
    id: "science",
    name: "Science",
    description:
      "At Abasyn University School, our Science program encourages children to explore, observe, and ask questions about the world around them. Through hands-on experiments, nature walks, and interactive activities, students learn about plants, animals, weather, and basic physical phenomena. This approach helps develop curiosity, critical thinking, and problem-solving skills, while fostering a love for discovery and understanding how things work.\n\nOur science curriculum aligns with internationally recognized standards and emphasizes real-life applications, helping students understand the relevance of scientific concepts in everyday life. Students also engage in collaborative projects and inquiry-based learning, which nurture analytical skills and intellectual confidence.\n\nLearning science at our school is interactive and exciting. Children enjoy experimenting, observing, and discovering patterns in the world around them. Our teachers guide students in making connections between theory and practice, ensuring that learning science is both meaningful and memorable."
  },
  {
    id: "urdu",
    name: "Urdu",
    description:
      "At Abasyn University School, our Urdu program introduces children to the richness and beauty of the Urdu language through storytelling, reading, and creative writing activities. Students build vocabulary, comprehension, and expressive skills in a fun and engaging manner. This program encourages children to enjoy language learning while expressing their thoughts and ideas confidently.\n\nOur Urdu curriculum is designed to balance traditional language skills with creative expression, helping students develop critical thinking, imagination, and communication skills. Through discussions, writing exercises, and interactive reading activities, children learn to use language effectively in various contexts.\n\nLearning Urdu at our school is both enjoyable and educational. Students participate in storytelling sessions, dramatizations, and writing workshops that make language come alive. Our teachers foster a love for reading and writing, ensuring that each child gains confidence and fluency while appreciating the richness of Urdu literature."
  },
  {
    id: "isl",
    name: "Islamiyat",
    description:
      "At Abasyn University School, our Islamiyat program introduces children to Islamic teachings, values, and traditions in an engaging and meaningful way. Students learn about ethics, moral character, and spiritual principles through stories, discussions, and interactive activities. This program nurtures empathy, respect, and understanding while encouraging students to reflect on their actions and choices.\n\nOur curriculum focuses on both knowledge and application, helping children connect Islamic teachings to their everyday lives. Through hands-on projects, group activities, and role-playing, students explore concepts of honesty, kindness, responsibility, and compassion in practical ways.\n\nLearning Islamiyat at our school is interactive and inspiring. Children enjoy participating in discussions, activities, and projects that make lessons relevant and memorable. Our teachers guide students in developing a strong moral foundation while fostering curiosity, reflection, and personal growth."
  },
  {
    id: "arts",
    name: "Arts",
    description:
      "At Abasyn University School, our Arts program inspires children to explore, imagine, and create in a joyful and hands-on way. Through painting, drawing, crafting, and other creative activities, students discover colors, shapes, textures, and patterns while expressing their unique ideas. This program nurtures creativity, self-expression, and confidence.\n\nOur arts curriculum encourages experimentation and problem-solving, helping children develop observation, fine motor skills, and focus. Through individual and collaborative projects, students learn to communicate ideas visually and work creatively with others.\n\nLearning arts at our school is fun, engaging, and meaningful. Children enjoy exploring different materials, techniques, and styles, bringing their imagination to life. Our teachers foster a love for creative expression, ensuring every child experiences joy and confidence while developing artistic skills."
  },
  {
    id: "nazra",
    name: "Nazra",
    description:
      "At Abasyn University School, our Nazra program helps children develop a strong foundation in Quranic reading and recitation. Through guided practice, repetition, and interactive activities, students learn proper pronunciation, fluency, and comprehension. This program instills confidence, discipline, and respect for the teachings of the Quran.\n\nOur curriculum emphasizes gradual learning, ensuring that students progress at their own pace while mastering correct recitation techniques. Through storytelling, discussion, and memorization exercises, children connect the lessons of the Quran with their everyday lives.\n\nLearning Nazra at our school is engaging and inspiring. Students participate in interactive sessions, group recitations, and activities that make learning meaningful and enjoyable. Our teachers guide students with care, helping them develop spiritual growth, focus, and a lifelong appreciation for the Quran."
  },
  {
    id: "gk",
    name: "GK",
    description:
     "At Abasyn University School,we teach GK from grade 1 to 3.Our General Knowledge (GK) program inspires children to explore a wide range of topics and gain awareness about the world around them. Through discussions, quizzes, interactive activities, and projects, students learn about current affairs, history, science, cultures, and everyday life skills. This approach builds curiosity, confidence, and a habit of staying informed.Our GK curriculum is designed to meet international standards and emphasizes practical understanding, enabling students to connect what they learn with real-world situations. Group activities, debates, and research projects further strengthen communication, critical thinking, and problem-solving abilities.Learning GK at our school is exciting and engaging. Children enjoy exploring facts, sharing ideas, and participating in activities that make learning dynamic and enjoyable. Our teachers guide them to broaden their horizons, develop awareness, and build a lifelong love for learning and discovery."
  },
  {
  id: "computer",
  name: "Computer",
  description:
    "At Abasyn University School, our Computer program introduces children to the exciting world of technology and digital literacy. Students learn essential computer skills, including typing, basic software applications, internet safety, and problem-solving using technology. Through hands-on activities and interactive lessons, children develop confidence and competence in navigating digital tools.\n\nOur curriculum emphasizes practical applications of technology, helping students understand how computers and software are used in real-life situations. Collaborative projects and coding exercises foster creativity, logical thinking, and analytical skills, preparing students for the demands of the modern world.\n\nLearning computers at our school is engaging and fun. Children enjoy exploring programs, creating digital projects, and solving challenges that make technology interactive and meaningful. Our teachers guide students in developing skills that enhance their learning, creativity, and problem-solving abilities, ensuring that every child gains a strong foundation in computer literacy."
},
  {
  id: "sst",
  name: "Social Studies",
  description:
    "At Abasyn University School, our Social Studies program for Grades 4 and 5 introduces students to the foundations of history, geography, civics, and culture in an engaging and age-appropriate way. Through stories, discussions, projects, and interactive activities, children learn about their community, country, and the wider world. This helps them understand social values, cultural diversity, and the importance of being responsible citizens.Our Social Studies curriculum is designed to connect classroom learning with real-life experiences, making lessons meaningful and practical. Students explore topics such as heritage, traditions, maps, government, and global awareness, which strengthen their critical thinking, teamwork, and problem-solving skills.At Abasyn University School, learning Social Studies is more than memorizing facts — it is about understanding people, places, and events in ways that spark curiosity and encourage awareness. By the end of Grade 5, students develop a strong foundation that prepares them for higher-level learning and a deeper understanding of society and the world."
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
      imageUrl: "assets/img/kinder.jpg",
      title:"Outdoor Adventures",
      description:"At Abasyn University School, outdoor adventures allow children to explore nature, play freely, and discover the world around them. Through activities like games, teamwork, and exploration, our students build confidence, strengthen social skills, and develop a love for the environment in fun and meaningful ways"
    },
    {
      imageUrl: "assets/img/kinder.jpg",
      title:"Team Work",
      description:"At Abasyn University School, teamwork helps children learn the value of collaboration and respect. By engaging in group activities, projects, and play, students develop communication skills, problem-solving abilities, and a strong sense of responsibility while working together toward shared goals."
    },
    {
      imageUrl: "assets/img/kinder.jpg",
      title:"Fun with Friends",
      description:"At Abasyn University School, children learn the joy of collaboration through activities that encourage friendship, communication, and teamwork. Our teachers guide them in creating meaningful connections, solving problems together, and enjoying shared experiences that make learning both fun and memorable "
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
 <SubjectsOffered title="Subjects Offered" subjects={earlySubjects} />
   </div>
  );
};

export default Primary;
