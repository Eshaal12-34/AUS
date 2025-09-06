import React from "react";
import "../assets/main.css";
import Banner from "../components/Banner";

const fees = [
  { name: "Tuition Fee", percent: 34.21, color: "#4facfe" },
  { name: "Security Fee", percent: 32.89, color: "#43e97b" },
  { name: "Examination Fee", percent: 19.74, color: "#fbc531" },
  { name: "Sports Fee", percent: 6.58, color: "#4facfe" },
  { name: "Stationery Fee", percent: 6.58, color: "#43e97b" },
];

const seniorFee = [
{ name: "Tuition Fee", percent: 41.18, color: "#4facfe" },
  { name: "Security Fee", percent: 29.41, color: "#43e97b" },
  { name: "Examination Fee", percent: 17.65, color: "#fbc531" },
  { name: "Sports Fee", percent: 5.88, color: "#4facfe" },
  { name: "Stationery Fee", percent: 5.88, color: "#43e97b" },
];

const FeeStructure = () => { 
  return (
    <>
    <Banner title="Fee Structure" />

<div className="fee-container">
  <div className="fee-structure">
    <h3>Pre-School Fees</h3>
    {fees.map((fee, index) => (
      <div key={index} className="fee-box">
        <div className="fee-label">
          <span>{fee.name}</span>
          <span>{fee.percent}%</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${fee.percent}%`, backgroundColor: fee.color }}
          ></div>
        </div>
      </div>
    ))}
  </div>

  <div className="fee-structure">
    <h3>Senior-School Fees</h3>
    {seniorFee.map((fee, index) => (
      <div key={index} className="fee-box">
        <div className="fee-label">
          <span>{fee.name}</span>
          <span>{fee.percent}%</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${fee.percent}%`, backgroundColor: fee.color }}
          ></div>
        </div>
      </div>
    ))}
  </div>
</div>
    </>
  );
}

export default FeeStructure


