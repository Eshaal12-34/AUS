import React from "react";
import "../assets/main.css";
import Banner from "../components/Banner";

const FeeStructure = () => {
  return (
    <>
      <Banner title="Fee Structure" />

      <div className="container my-5">
        <div className="row g-4">
          {/* Pre-School Fees */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card shadow-lg rounded-3 border-0">
              <div
                className="card-header text-white text-center fw-bold"
                style={{ backgroundColor: "#385469" }}
              >
                Pre-School Fee Structure
              </div>
              <div className="card-body p-0">
                <table className="table table-striped table-hover mb-0 text-center align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>Fee Type</th>
                      <th>Amount (PKR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tuition Fee</td>
                      <td>5200</td>
                    </tr>
                    <tr>
                      <td>Security Fee (refundable)</td>
                      <td>5000</td>
                    </tr>
                    <tr>
                      <td>Examination Fee</td>
                      <td>3000</td>
                    </tr>
                    <tr>
                      <td>Sports Fee</td>
                      <td>1000</td>
                    </tr>
                    <tr>
                      <td>Stationery Fee</td>
                      <td>1000</td>
                    </tr>
                    <tr className="fw-bold table-primary">
                      <td>Total Amount</td>
                      <td>15,200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Senior-School Fees */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card shadow-lg rounded-3 border-0">
              <div
                className="card-header text-white text-center fw-bold"
                style={{ backgroundColor: "#385469" }}
              >
                Senior-School Fee Structure
              </div>
              <div className="card-body p-0">
                <table className="table table-striped table-hover mb-0 text-center align-middle">
                  <thead className="table-dark">
                    <tr>
                      <th>Fee Type</th>
                      <th>Amount (PKR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tuition Fee</td>
                      <td>7000</td>
                    </tr>
                    <tr>
                      <td>Security Fee (refundable)</td>
                      <td>5000</td>
                    </tr>
                    <tr>
                      <td>Examination Fee</td>
                      <td>3000</td>
                    </tr>
                    <tr>
                      <td>Sports Fee</td>
                      <td>1000</td>
                    </tr>
                    <tr>
                      <td>Stationery Fee</td>
                      <td>1000</td>
                    </tr>
                    <tr className="fw-bold table-primary">
                      <td>Total Amount</td>
                      <td>17000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default FeeStructure;
