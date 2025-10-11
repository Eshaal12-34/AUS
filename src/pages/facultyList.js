import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Banner from "../components/Banner";

const FacultyList = () => {
  const navigate = useNavigate();
  const { section } = useParams(); 
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
  axios
    .get(`https://backend-fylo.vercel.app/api/faculty/${section}`)
    .then((res) => setFaculty(res.data))
    .catch((err) => console.error("Error fetching faculty:", err));
}, [section]);

  return (
    <>
    <Banner
        title={`${section} Faculty`} 
      />
    <Container className="py-5">
      <Row className="g-4">
        {faculty.map((member) => (
          <Col key={member._id} xs={12} lg={6} xl={4}>
            <Card className="shadow-sm p-2 h-100">
              <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-start">
               <Card.Img
                src={`https://backend-fylo.vercel.app/uploads/${member.image}`} 
                alt={member.name}
                style={{
                  width: "100px", 
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginRight: "15px",
                }}
              />
                <div>
                  <Card.Title className="mb-1">Name: {member.name}</Card.Title>
                  <Card.Text className="text-muted mb-2">
                    Designation: {member.designation}
                  </Card.Text>
                  <Card.Text
                    className="text-muted mb-2"
                    style={{ wordBreak: "break-all" }}
                  >
                    {member.email}
                  </Card.Text>
                  <Button style={{backgroundColor:"#1F668A"}}onClick={() => navigate(`/cv/${member._id}`)}>
                    View Profile
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default FacultyList;
