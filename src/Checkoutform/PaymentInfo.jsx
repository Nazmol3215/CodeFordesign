import React from "react";

const PaymentInfo = ({ formData, handleChange, prevStep, handleSubmit }) => {
  const { cardNumber, expiration, cvv } = formData;

  const handleFinalSubmit = () => {
    if (!cardNumber || !expiration || !cvv) {
      alert("Please fill all fields!");
    } else {
      handleSubmit();
    }
  };

  return (
    <div>
      <h2>Payment Information</h2>
      <div>
        <label>Card Number:</label>
        <input type="text" name="cardNumber" value={cardNumber} onChange={handleChange} />
      </div>
      <div>
        <label>Expiration:</label>
        <input type="text" name="expiration" value={expiration} onChange={handleChange} />
      </div>
      <div>
        <label>CVV:</label>
        <input type="text" name="cvv" value={cvv} onChange={handleChange} />
      </div>
      <button onClick={prevStep}>Back</button>
      <button onClick={handleFinalSubmit}>Submit</button>
    </div>
  );
};

export default PaymentInfo;
