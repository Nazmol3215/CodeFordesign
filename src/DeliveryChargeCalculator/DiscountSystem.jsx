import React, { useState } from "react";

const DiscountSystem = () => {
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState("");

  // স্ট্যাটিক কুপন ডেটা
  const coupons = {
    SAVE10: { type: "flat", amount: 10 }, // Flat $10 discount
    BUY1GET1: { type: "bogo", amount: 50 }, // Buy One Get One Free (50% off)
    NAZMOL: { type: "bogo", amount: 70 }, // Buy One Get One Free (50% off)
    HODA: { type: "bogo", amount: 10 }, // Buy One Get One Free (50% off)
  };

  const handleApplyCoupon = () => {
    if (coupons[coupon]) {
      const couponData = coupons[coupon];

      if (couponData.type === "flat") {
        setDiscount(couponData.amount);
        setMessage(`Flat discount of $${couponData.amount} applied!`);
      } else if (couponData.type === "bogo") {
        setDiscount(couponData.amount);
        setMessage("Buy One Get One Free applied! (50% off)");
      }
    } else {
      setDiscount(0);
      setMessage("Invalid coupon code!");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Dynamic Discount & Coupon System</h2>
      <div>
        <label htmlFor="coupon">Enter Coupon Code:</label>
        <input
          type="text"
          id="coupon"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value.toUpperCase())}
          placeholder="Enter your coupon code"
          style={{ marginLeft: "10px", padding: "5px" }}
        />
        <button
          onClick={handleApplyCoupon}
          style={{
            marginLeft: "10px",
            padding: "5px 10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Apply
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h4>Message:</h4>
        <p>{message}</p>
        <h4>Discount:</h4>
        <p>${discount}</p>
      </div>
    </div>
  );
};

export default DiscountSystem;
