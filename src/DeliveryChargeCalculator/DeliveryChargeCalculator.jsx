import React, { useState } from "react";

const DeliveryChargeCalculator = () => {
  const [location, setLocation] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState(0);

  const locationCharges = {
    "Dhaka": 150,
    "Chittagong": 100,
    "Sylhet": 120,
    "Khulna": 80,
  };

  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setLocation(selectedLocation);
    setDeliveryCharge(locationCharges[selectedLocation] || 0);
  };

  return (
    <div>
      <h2>Calculate Delivery Charge</h2>
      <select value={location} onChange={handleLocationChange}>
        <option value="">Select Location</option>
        {Object.keys(locationCharges).map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>
      <p>Delivery Charge: {deliveryCharge} ৳</p>
    </div>
  );
};

export default DeliveryChargeCalculator;
