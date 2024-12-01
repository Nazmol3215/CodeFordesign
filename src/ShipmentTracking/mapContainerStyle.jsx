import React, { useState, useEffect } from "react";
import { Stepper, Step, StepLabel, Typography, Snackbar, Alert } from "@mui/material";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

// Google Maps Configuration
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};
const center = { lat: 23.8103, lng: 90.4125 }; // Dhaka, Bangladesh

// শিপমেন্ট স্ট্যাটাস
const shipmentSteps = ["Order Placed", "Processing", "Shipped", "Out for Delivery", "Delivered"];

const ShipmentTracking = () => {
  const [currentStep, setCurrentStep] = useState(0); // বর্তমান স্ট্যাটাস
  const [notification, setNotification] = useState(null); // নোটিফিকেশন মেসেজ
  const [shipmentLocation, setShipmentLocation] = useState(center); // শিপমেন্ট লোকেশন

  // Google Maps Script লোড
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your Google Maps API key
  });

  // ফেক লাইভ আপডেট (ডামি ডেটা)
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < shipmentSteps.length - 1) {
        setCurrentStep((prevStep) => prevStep + 1);
        setShipmentLocation({
          lat: shipmentLocation.lat + 0.01, // প্রতিবার লোকেশন পরিবর্তন
          lng: shipmentLocation.lng + 0.01,
        });
        setNotification(`Status updated: ${shipmentSteps[currentStep + 1]}`);
      } else {
        clearInterval(interval);
      }
    }, 5000); // প্রতি ৫ সেকেন্ডে আপডেট

    return () => clearInterval(interval);
  }, [currentStep, shipmentLocation]);

  // নোটিফিকেশন বন্ধ করা
  const handleCloseNotification = () => {
    setNotification(null);
  };

  return (
    <div style={styles.container}>
      <Typography variant="h4" gutterBottom>
        Shipment Tracking (Without Backend)
      </Typography>

      {/* স্ট্যাটাস দেখানোর জন্য স্টেপার */}
      <Stepper activeStep={currentStep} alternativeLabel>
        {shipmentSteps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* বর্তমান স্ট্যাটাস */}
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Current Status: {shipmentSteps[currentStep]}
      </Typography>

    

      {/* লাইভ নোটিফিকেশন */}
      <Snackbar
        open={!!notification}
        autoHideDuration={4000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseNotification} severity="info" sx={{ width: "100%" }}>
          {notification}
        </Alert>
      </Snackbar>
    </div>
  );
};

// CSS স্টাইল
const styles = {
  container: {
    width: "80%",
    margin: "20px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
};

export default ShipmentTracking;
