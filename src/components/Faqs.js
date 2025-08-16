import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.2)",
        padding: "18px 15px",
        marginBottom: "12px",
        borderRadius: "8px",
        backgroundColor: "rgba(255,255,255,0.05)",
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4
          style={{
            margin: 0,
            fontSize: "16px",
            fontWeight: "600",
            color: "#fff",
          }}
        >
          {question}
        </h4>
        {isOpen ? <FaMinus color="#fff" /> : <FaPlus color="#fff" />}
      </div>

      <div
        style={{
          maxHeight: isOpen ? "500px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          marginTop: isOpen ? "10px" : "0px",
        }}
      >
        <p
          style={{
            color: "#fff",
            lineHeight: "1.5",
            textAlign: "justify",
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "A Educational Institute Dedicated To Your Success",
      answer:
        "Abasyn University School delivers a comprehensive and rigorous academic program designed to enhance students’ critical thinking, creativity, and leadership abilities. Our committed faculty and staff strive to create a supportive and inspiring learning environment that fosters intellectual curiosity and personal growth. Through innovative teaching strategies, diverse extracurricular opportunities, and personalized attention, Abasyn University School is dedicated to empowering students to achieve their highest academic aspirations and personal goals.",
    },
    {
      question: "Hands-on Learning",
      answer:
        "At Abasyn University School, hands-on learning is at the heart of the educational journey. We are committed to giving students practical, real-world experiences that prepare them for future success. Through activities such as laboratory experiments, field trips, internships, and project-based learning, students are able to apply classroom knowledge to real-life situations. This approach deepens their understanding of subjects while enhancing critical thinking, problem-solving, and teamwork skills. By fostering an engaging, hands-on learning environment, Abasyn University School shapes well-rounded, capable graduates ready to excel in their chosen paths.",
    },
    {
      question: "Character Development & Values",
      answer:
        "At Abasyn University School, education goes beyond academics to focus on shaping students into responsible, compassionate, and ethical individuals. We strive to instill strong moral values such as integrity, respect, empathy, and perseverance in every student. Through value-based lessons, leadership opportunities, and community service initiatives, students learn the importance of making positive contributions to society. This emphasis on character development ensures that our graduates are not only academically capable but also equipped with the principles and mindset needed to lead with honor and serve with purpose.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "60px 15px",
        maxWidth: "1200px",
        margin: "0 auto",
        gap: "20px",
      }}
    >
      {/* Left Image */}
      <div
        style={{
          flex: "1 1 400px",
          minWidth: "300px",
          maxWidth: "500px",
        }}
      >
        <img
          src="assets/img/about/04.png"
          alt="About"
          className="img-fluid"
          style={{
            width: "100%",
            borderRadius: "12px",
            objectFit: "cover",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
        />
      </div>

      {/* Right FAQ Section */}
      <div
        style={{
          flex: "1 1 400px",
          minWidth: "300px",
          maxWidth: "480px",
          backgroundImage: "url('assets/img/algebra.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(31,102,138,0.9)",
            padding: "25px",
            borderRadius: "12px",
            width: "100%",
          }}
        >
          <h2
            style={{
              color: "#fff",
              marginBottom: "25px",
              textAlign: "center",
            }}
          >
            Why Choose Us?
          </h2>

          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
