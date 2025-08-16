import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";

const Faculty = () => {
  return (
    <div>
      <Banner title="Our Faculty" />

      <div
        className="section-title"
        style={{
          maxWidth: "800px",
          margin: "50px auto",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            fontSize: "2.2rem",
            fontWeight: "700",
            color: "#1f668a",
            marginBottom: "20px",
          }}
        >
          Meet Our Dedicated Faculty
        </h2>

        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.9",
            color: "#444",
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 30px auto",
            padding: "0 15px",
            fontWeight: "400",
          }}
        >
          Our faculty members are more than educators—they are mentors,
          innovators, and lifelong learners committed to inspiring every student.
          With diverse expertise and a passion for teaching, they create an
          environment where curiosity thrives, values are nurtured, and potential
          is transformed into achievement.
        </p>

        <div
          className="class-section"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            
          }}
        >
          <div className="box">
            <Link to="/pre-school">
              <h3>Pre-School</h3>
            </Link>
          </div>
          <div className="box">
            <Link to="/primary-school">
              <h3>Primary School</h3>
            </Link>
          </div>
          <div className="box">
            <Link to="/secondary-school">
              <h3>Secondary School</h3>
            </Link>
          </div>
          <div className="box">
            <Link to="/high-school">
              <h3>High School</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
