import React, { useState } from 'react';
import './TrackOrder.css';

const TrackOrder = () => {
  // অর্ডার স্ট্যাটাসের ডাটা (একটি ডেমো স্ট্যাটাস)
  const [orderStatus, setOrderStatus] = useState("Shipped"); // স্ট্যাটাস পরিবর্তন করতে পারবেন (Order Placed, Shipped, In Transit, Delivered)

  // স্ট্যাটাস স্টেপস
  const steps = ["Order Placed", "Shipped", "In Transit", "Delivered"];

  // স্ট্যাটাসের ইনডেক্স বের করা
  const currentStepIndex = steps.indexOf(orderStatus);

  return (
    <div className="track-order-container">
      <h2>Track Your Order</h2>
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`progress-step ${index <= currentStepIndex ? 'active' : ''}`}
          >
            <div className="step-circle">{index + 1}</div>
            <div className="step-label">{step}</div>
          </div>
        ))}
      </div>

      <div className="order-status">
        <p>Current Status: <strong>{orderStatus}</strong></p>
      </div>

      <div className="status-change">
        <button onClick={() => setOrderStatus("Order Placed")}>Order Placed</button>
        <button onClick={() => setOrderStatus("Shipped")}>Shipped</button>
        <button onClick={() => setOrderStatus("In Transit")}>In Transit</button>
        <button onClick={() => setOrderStatus("Delivered")}>Delivered</button>
      </div>
    </div>
  );
};

export default TrackOrder;
