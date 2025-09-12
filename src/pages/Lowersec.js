import React  from "react";
import Banner from "../components/Banner";
import "../assets/main.css";
import { faSeedling, faLaptopCode , faPeopleRoof} from "@fortawesome/free-solid-svg-icons";
import OurFoundations from "../components/Highlights";
import "../assets/main.css";
import SubjectsOffered from "../components/Subjects";

const Lowersec = () => {
   const middleSubjects = [
  {
    id: "english",
    name: "English",
    description:
      "At Abasyn University School, the English curriculum for Grades 6–7 is designed to build strong communication skills and critical thinking. Students work on advanced reading comprehension, structured writing, grammar, and vocabulary development. They also practice listening and speaking through debates, presentations, and group discussions. The program follows international standards such as CEFR, ensuring that students are prepared for both academic success and real-world communication. Literature study, creative writing, and drama activities help learners express themselves confidently while developing a deeper appreciation of the language."
  },
  {
    id: "maths",
    name: "Maths",
    description:
      "Our Mathematics program for Grades 6–7 emphasizes logical reasoning, analytical skills, and problem-solving. Students explore fractions, ratios, percentages, geometry, algebra, and data handling with a focus on practical applications. Through hands-on projects, puzzles, and technology-based exercises, learners connect mathematical concepts to real-life situations. The curriculum encourages curiosity and independent thinking, helping students gain confidence in tackling challenging problems while building a strong foundation for higher-level mathematics."
  },
  {
    id: "science",
    name: "Science",
    description:
      "The Science curriculum for middle school encourages students to question, investigate, and discover. In Grades 6–7, learners study life sciences, earth sciences, and basic principles of physics and chemistry. They conduct experiments, analyze results, and apply the scientific method to understand how things work. The program emphasizes environmental awareness, innovation, and problem-solving, preparing students to make connections between classroom learning and the world around them."
  },
  {
    id: "urdu",
    name: "Urdu",
    description:
      "Our Urdu program for Grades 6–7 develops strong reading, writing, and communication skills while deepening students’ understanding of Urdu literature and culture. Students engage with prose, poetry, and drama, enhancing vocabulary and comprehension. Writing tasks such as essays, letters, and stories strengthen creative and formal expression. Class discussions, debates, and presentations help students express their ideas fluently and confidently in their national language."
  },
  {
    id: "isl",
    name: "Islamiyat",
    description:
      "The Islamiyat curriculum for Grades 6–7 introduces students to Islamic beliefs, values, and practices in greater depth. Learners study Seerah, Islamic history, and key teachings from the Quran and Hadith. Emphasis is placed on applying Islamic principles such as honesty, kindness, and responsibility in daily life. Through reflection, discussions, and projects, students strengthen their spiritual growth, moral character, and understanding of Islam’s relevance in the modern world."
  },
  {
    id: "Mutal-e-Quran",
    name: "Nazra",
    description:
      "In Grades 6–7, the Nazra program helps students improve their fluency, Tajweed, and understanding of the Quran. Alongside recitation, emphasis is placed on learning the meaning and context of selected Surahs, enabling students to apply Quranic teachings in their daily lives. Group recitations, memorization, and guided discussions foster respect, discipline, and a deeper spiritual connection to the Holy Quran."
  },
  {
    id: "geo",
    name: "Geography",
    description:
      "Geography in Grades 6–7 focuses on developing students’ knowledge of the physical and human world. Learners study landforms, climates, natural resources, populations, and global issues such as sustainability. Map reading, fieldwork, and project-based activities encourage observation, research, and analytical skills. Students gain a broader perspective on how human and natural systems interact, preparing them to understand and engage with global challenges."
  },
  {
    id: "history",
    name: "History",
    description:
      "The History curriculum for Grades 6–7 introduces learners to ancient civilizations, world history, and the history of the subcontinent. Students explore important events, movements, and personalities that shaped societies. Through timelines, research projects, and critical discussions, they develop skills in analysis, comparison, and evidence-based reasoning. The program encourages students to connect past events with present realities, fostering awareness and informed citizenship."
  },
  {
    id: "computer",
    name: "Computer",
    description:
      "Our Computer program for Grades 6–7 equips students with essential digital skills for the 21st century. Learners practice word processing, presentations, spreadsheets, and safe internet usage while also being introduced to coding and problem-solving. They explore how technology is applied in real-world situations through projects, digital design, and collaborative tasks. The program fosters creativity, logical thinking, and confidence, preparing students for advanced ICT learning in higher grades."
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
  return (
    <div>
      <Banner title="Lower Secondary Years" />
      <div className="container">
        {/* Main description */}
        <div className="Right-section">
          <div className="right-content">
            <h2 className="mt-5" style={{ margin: 0 }} data-aos="fade-up" data-aos-delay="400">
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
              data-aos="fade-up" data-aos-delay="400"
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
      <div className="row justify-content-center">
  <div className="col-lg-10 col-xl-8">
    <h3 className="mb-3 text-center text-md-start fs-3">
      Our Little Explorers in Action
    </h3>
    <p 
      className="
        text-justify 
        text-center text-md-start 
        fs-6 fs-md-5 
        lh-lg lh-md-xl 
        text-secondary
      "
      data-aos="fade-up" data-aos-delay="400"
    >
      At Abasyn University School, we believe that education goes beyond textbooks and classrooms. 
      By engaging students in outdoor adventures, creative projects, physical activities, and 
      interactive learning, we nurture their curiosity, confidence, and character. These experiences 
      not only build essential life skills but also inspire a lifelong love for learning in fun and 
      meaningful ways.
    </p>
  </div>
</div>
 <SubjectsOffered title="Subjects Offered" subjects={middleSubjects} />
   </div>
  );
};

export default Lowersec;

