import React from "react";

const SkeletonLoader = () => {
  return (
    <div>
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#eee",
            height: "20px",
            width: "80%",
            margin: "10px auto",
            borderRadius: "4px",
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        />
      ))}
      <style>
        {`
          @keyframes pulse {
            0% { background-color: #eee; }
            50% { background-color: #ddd; }
            100% { background-color: #eee; }
          }
        `}
      </style>
    </div>
  );
};

export default SkeletonLoader;
