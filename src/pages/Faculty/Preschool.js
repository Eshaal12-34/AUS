import React from "react";
import FacultyCard from "../../components/Facultycard";
import Banner from "../../components/Banner";
import "../../assets/main.css";
const PreSchool = () => {
  const data = [
    {
      name: "John Doe",
      imageUrl: "/assets/img/team/01.jpg",
      designation: "Teacher",
      subject: "Mathematics",
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
        subjects={member.subject ? [member.subject] : []}
      />

    </div>
  ))}
</div>
</div>
  );
};

export default PreSchool;
