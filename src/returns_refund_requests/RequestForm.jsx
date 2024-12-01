import React, { useState } from "react";

const RequestForm = ({ addRequest }) => {
  const [formData, setFormData] = useState({
    name: "",
    orderId: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.orderId && formData.reason) {
      addRequest({ ...formData, status: "Pending" });
      setFormData({ name: "", orderId: "", reason: "" }); // Reset form
    } else {
      alert("All fields are required!");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Order ID:</label>
        <input
          type="text"
          name="orderId"
          value={formData.orderId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Reason for Return/Refund:</label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default RequestForm;
