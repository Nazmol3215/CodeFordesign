import React, { useState, useEffect } from "react";
import "./OfferBanner.css";

const OfferBanner = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Calculate remaining time
  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = endTime - now;

    if (difference > 0) {
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null; // Offer expired
    }
  }

  // Update timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  if (!timeLeft) {
    return (
      <div className="offer-banner expired">
        <h2>Sorry! The Offer Has Expired!</h2>
      </div>
    );
  }

  return (
    <div className="offer-banner">
      <h2>🔥 Limited Time Offer! Don't Miss Out! 🔥</h2>
      <p>
        Time Left:{" "}
        <span>
          {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
        </span>
      </p>
    </div>
  );
};

export default OfferBanner;
