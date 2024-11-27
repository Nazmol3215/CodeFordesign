import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-section text-center py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <h1 className="display-4">Welcome to GaltSand</h1>
        <p className="lead">Discover premium products crafted for you.</p>
        <a href="#products" className="btn btn-primary">
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
