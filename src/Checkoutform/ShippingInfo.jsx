import React from "react";

const ShippingInfo = ({ formData, handleChange, nextStep, prevStep }) => {
  const { address, city } = formData;

  const handleNext = () => {
    if (!address || !city) {
      alert("Please fill all fields!");
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <h2>Shipping Information</h2>
      <div>
        <label>Address:</label>
        <input type="text" name="address" value={address} onChange={handleChange} />
      </div>
      <div>
        <label>City:</label>
        <input type="text" name="city" value={city} onChange={handleChange} />
      </div>
      <button onClick={prevStep}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ShippingInfo;
