import React, { useState } from "react";

const DeliveryLocationSystem = () => {
  const [location, setLocation] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [deliveryTime, setDeliveryTime] = useState("");

  // এলাকাভিত্তিক ডেলিভারি চার্জ এবং টাইম
  const deliveryData = {
    Dhaka: { charge: 50, time: "1-2 Days" },
    Chattogram: { charge: 100, time: "2-3 Days" },
    Sylhet: { charge: 120, time: "3-4 Days" },
  };

  const handleLocationChange = (e) => {
    const loc = e.target.value;
    setLocation(loc);

    if (deliveryData[loc]) {
      setDeliveryCharge(deliveryData[loc].charge);
      setDeliveryTime(deliveryData[loc].time);
    } else {
      setDeliveryCharge(0);
      setDeliveryTime("Not Available");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Location-Based Delivery System</h2>
      <div>
        <label htmlFor="location">Select Your Location:</label>
        <select
          id="location"
          value={location}
          onChange={handleLocationChange}
          style={{ marginLeft: "10px", padding: "5px" }}
        >
          <option value="">--Select Location--</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chattogram">Chattogram</option>
          <option value="Sylhet">Sylhet</option>
        </select>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h4>Delivery Charge:</h4>
        <p>{deliveryCharge ? `৳${deliveryCharge}` : "N/A"}</p>
        <h4>Estimated Delivery Time:</h4>
        <p>{deliveryTime}</p>
      </div>
    </div>
  );
};

export default DeliveryLocationSystem;
