import React  from "react";
import Banner from "../components/Banner";
import "../assets/main.css";
import { faSeedling, faLaptopCode , faPeopleRoof} from "@fortawesome/free-solid-svg-icons";
import OurFoundations from "../components/Highlights";
import "../assets/main.css";
import Ecard from "../components/Earlyacard";
import SubjectsOffered from "../components/Subjects";

const Lowersec = () => {
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
    id: "geo",
    name: "Geography",
    description:
      "At Abasyn University School, our Geography program encourages children to explore the world around them and understand its physical and cultural diversity. Through interactive maps, models, and hands-on activities, students learn about landforms, climates, communities, and ecosystems. This approach develops curiosity, analytical skills, and an understanding of the relationship between people and their environment.\n\nOur geography curriculum aligns with international standards and emphasizes real-life applications, helping students relate geographical concepts to their daily experiences. Collaborative projects and field activities further enhance observation, critical thinking, and problem-solving skills.\n\nLearning geography at our school is engaging and immersive. Children enjoy exploring maps, conducting experiments, and participating in projects that make the subject come alive. Our teachers guide students to understand global connections, encouraging exploration, awareness, and a lasting appreciation for the world."
  },
  {
  id: "computer",
  name: "Computer",
  description:
    "At Abasyn University School, our Computer program introduces children to the exciting world of technology and digital literacy. Students learn essential computer skills, including typing, basic software applications, internet safety, and problem-solving using technology. Through hands-on activities and interactive lessons, children develop confidence and competence in navigating digital tools.\n\nOur curriculum emphasizes practical applications of technology, helping students understand how computers and software are used in real-life situations. Collaborative projects and coding exercises foster creativity, logical thinking, and analytical skills, preparing students for the demands of the modern world.\n\nLearning computers at our school is engaging and fun. Children enjoy exploring programs, creating digital projects, and solving challenges that make technology interactive and meaningful. Our teachers guide students in developing skills that enhance their learning, creativity, and problem-solving abilities, ensuring that every child gains a strong foundation in computer literacy."
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
      title:"Creative Expressions",
      description:"At Abasyn University School, creative activities inspire children to imagine, design, and bring their ideas to life. Whether through art, crafts, or performances, students learn to express themselves, build confidence, and develop problem-solving skills while having fun"
    },
    {
      imageUrl: "assets/img/kinder.jpg",
      title:"Interactive Learning",
      description:"At Abasyn University School, interactive learning helps students connect knowledge with real-life experiences. Through group projects, discussions, and hands-on activities, they strengthen communication, teamwork, and critical thinking in a supportive environment."
    },
    {
      imageUrl: "assets/img/kinder.jpg",
      title:"Physical Well-Being",
      description:"At Abasyn University School, physical activities encourage students to stay active, healthy, and energized. Through sports, games, and fitness exercises, children develop discipline, teamwork, and a strong sense of sportsmanship while having fun."
    },
    ]
  return (
    <div>
      <Banner title="Lower Secondary Years" />
      <div className="container">
        {/* Main description */}
        <div className="Right-section">
          <div className="right-content">
            <h2 className="mt-5" style={{ margin: 0 }}>
              Lower Secondary Foundation
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
            >
           Abasyn University School & College Lower Secondary Programme (AUSC-LSP) is a well-rounded and forward-looking programme designed to prepare students for the academic and personal challenges of secondary education and beyond. The curriculum has been thoughtfully structured to address the developmental needs of learners at this important stage, equipping them with the skills, knowledge, and values essential for long-term success.

The AUSC-LSP offers a broad spectrum of subjects including Mathematics, Science, Social Studies, Languages, Arts, and Physical Education. Teaching and learning at AUSC are centered on interactive, hands-on, and inquiry-driven approaches that inspire curiosity, enhance problem-solving, and build creativity and critical thinking skills.

Our team of dedicated educators focuses on personalized instruction, ensuring that each student’s unique learning style and strengths are recognized and nurtured. We encourage learners to question, explore, and engage actively with the world around them, fostering a genuine passion for knowledge and discovery.

At Abasyn University School & College, we view education as the cornerstone of a meaningful and successful life. By combining personalized guidance with a commitment to holistic development, we provide students with a strong academic foundation and the confidence to achieve their goals and aspirations.
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
   <div>
    <h3 style={{ fontSize: "2rem",marginBottom: "1rem",textAlign:"left", marginLeft:"140px"}}>Learning Through Experiences</h3>
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
        At Abasyn University School, we believe that education goes beyond textbooks and classrooms. By engaging students in outdoor adventures, creative projects, physical activities, and interactive learning, we nurture their curiosity, confidence, and character. These experiences not only build essential life skills but also inspire a lifelong love for learning in fun and meaningful ways.</p>

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

export default Lowersec;
