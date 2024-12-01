import React, { useState } from "react";

const DeliveryTimeEstimator = () => {
  const [location, setLocation] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");

  const locationTimes = {
    "Dhaka": "1-2 days",
    "Chittagong": "2-3 days",
    "Sylhet": "3-4 days",
    "Khulna": "2-3 days",
  };

  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setLocation(selectedLocation);
    setEstimatedTime(locationTimes[selectedLocation] || "Unknown");
  };

  return (
    <div>
      <h2>Delivery Time Estimation</h2>
      <select value={location} onChange={handleLocationChange}>
        <option value="">Select Location</option>
        {Object.keys(locationTimes).map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>
      <p>Estimated Delivery Time: {estimatedTime}</p>
    </div>
  );
};

export default DeliveryTimeEstimator;
