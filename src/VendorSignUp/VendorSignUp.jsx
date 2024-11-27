import React, { useState } from "react";

const VendorSignUp = () => {
  const [vendorDetails, setVendorDetails] = useState({
    name: "",
    email: "",
    password: "",
    storeName: "",
    storeDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendorDetails({
      ...vendorDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে API কল করলে, ভেন্ডরের তথ্য ডাটাবেসে সেভ হবে।
    console.log("Vendor details submitted: ", vendorDetails);
  };

  return (
    <div className="container">
      <h2>Vendor Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={vendorDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={vendorDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={vendorDetails.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Store Name</label>
          <input
            type="text"
            className="form-control"
            name="storeName"
            value={vendorDetails.storeName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Store Description</label>
          <textarea
            className="form-control"
            name="storeDescription"
            value={vendorDetails.storeDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default VendorSignUp;
