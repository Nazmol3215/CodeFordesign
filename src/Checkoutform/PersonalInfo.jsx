import React from "react";

const PersonalInfo = ({ formData, handleChange, nextStep }) => {
  const { name, email } = formData;

  const handleNext = () => {
    if (!name || !email) {
      alert("Please fill all fields!");
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleChange} />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default PersonalInfo;
