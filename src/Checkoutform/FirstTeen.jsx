import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import ShippingInfo from "./ShippingInfo";
import PaymentInfo from "./PaymentInfo";
import Stepper from "./Stepper";



const FirstTeen = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    alert("Form submitted successfully!");
    console.log(formData);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <Stepper step={step} />
      {step === 1 && <PersonalInfo formData={formData} handleChange={handleChange} nextStep={nextStep} />}
      {step === 2 && <ShippingInfo formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <PaymentInfo formData={formData} handleChange={handleChange} prevStep={prevStep} handleSubmit={handleSubmit} />}
    </div>
  );
};

export default FirstTeen;
