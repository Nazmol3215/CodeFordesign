import React from "react";

const VendorPerformanceReport = () => {
  return (
    <div className="container">
      <h2>Vendor Performance Report</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Sales Overview</h4>
          <div className="card">
            <div className="card-body">
              <p>Total Sales: $5000</p>
              <p>Total Orders: 150</p>
              <p>Commission Earned: $500</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Ratings and Reviews</h4>
          <div className="card">
            <div className="card-body">
              <p>Average Rating: 4.5/5</p>
              <p>Total Reviews: 200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorPerformanceReport;
