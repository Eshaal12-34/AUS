import React from "react";
import FacultyCard from "../../components/Facultycard";
import Banner from "../../components/Banner";
import "../../assets/main.css";
const PreSchool = () => {
  const data = [
    {
      name: "Laila Saleh",
      imageUrl: "/assets/img/pre-faculty/faculty1.jpeg",
      designation: "Teacher/Incharge/Event Organizer",
      email : "laila@gmail.com"
    },
    {
      name: "Jane Smith",
      imageUrl: "/assets/img/team/01.jpg",
      designation: "Teacher",
      subject: "English",
    },
    {
      name: "Mark Lee",
      imageUrl: "/assets/img/team/01.jpg",
      designation: "Teacher",
      subject: "Science",
    },
    {
      name: "Emma Johnson",
      imageUrl: "/assets/img/team/01.jpg",
      designation: "Teacher",
      subject: "Art",
    },
  ];
  

  return (
    <div>
      <Banner title="Pre School Faculty" />

    <div className="row g-4">
  <div className="col-12 mt-5">
  </div>
  {data.map((member, index) => (
    <div key={index} className="col-md-6 mt-5">
      <FacultyCard
        name={member.name}
        imageUrl={member.imageUrl}
        designation={member.designation}
        email = {member.email}
      />

    </div>
  ))}
</div>
</div>
  );
};

export default PreSchool;
