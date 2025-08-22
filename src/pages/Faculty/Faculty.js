import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Banner from "../../components/Banner";

const Faculty = () => {
  const navigate = useNavigate();

  // Use slug for clean URLs
  const sections = [
    { name: "Pre-School", slug: "pre-school" },
    { name: "Primary", slug: "primary" },
    { name: "Secondary", slug: "secondary" },
  ];

  return (
    <>
      <Banner
        title="Our Faculty"
        description="Our school is proud to have dedicated faculty members across all sections, guiding students to achieve their full potential."
        bgImage="assets/img/all-img/about-banner.jpg"
      />

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
        </p>
      </div>

      <Container className="about-area my-md-5 my-2">
        <Row className="g-4">
          {sections.map((section, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Card
                className="h-100 shadow-lg border-0 hover-shadow"
                style={{ transition: "transform 0.3s" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Card.Body className="text-center">
                  {/* Circle with first letter */}
                  <div
                    className="rounded-circle text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      fontSize: "1.5rem",
                      backgroundColor: "#0E6537",
                    }}
                  >
                    {section.name[0]}
                  </div>

                  {/* Section Title */}
                  <Card.Title>{section.name} Section</Card.Title>
                  <Card.Text className="text-muted">
                    Click below to explore faculty members of this section.
                  </Card.Text>

                  {/* Explore Button */}
                  <Button
                    variant="outline-primary"
                    className="custom-btn"
                    onClick={() => navigate(`/faculty/${section.slug}`)}
                  >
                    Explore
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Faculty;
