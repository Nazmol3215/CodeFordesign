import React from "react";

const Stepper = ({ step }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div>Step {step} of 3</div>
      <progress value={step} max="3" style={{ width: "100%" }}></progress>
    </div>
  );
};

export default Stepper;
