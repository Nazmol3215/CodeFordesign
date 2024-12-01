import React, { useState } from "react";
import lfh from "../Images/kfdhgdb.png"

const ProductDetail = () => {
  // জুম ফিচারের জন্য স্টেট
  const [zoom, setZoom] = useState(false);

  // জুম ইন/আউট হ্যান্ডলার
  const handleMouseEnter = () => setZoom(true);
  const handleMouseLeave = () => setZoom(false);

  // ৩৬০° ভিউয়ার ইমেজ লিস্ট
  const images360 = [
    "https://via.placeholder.com/400x400/ff0000?text=Image+1",
    "https://via.placeholder.com/400x400/00ff00?text=Image+2",
    "https://via.placeholder.com/400x400/0000ff?text=Image+3",
    "https://via.placeholder.com/400x400/ffff00?text=Image+4",
    "https://via.placeholder.com/400x400/ff00ff?text=Image+5",
    "https://via.placeholder.com/400x400/00ffff?text=Image+6",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // ৩৬০° ভিউ চেঞ্জ করার জন্য হ্যান্ডলার
  const handle360Change = (index) => {
    setCurrentImage(index);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* ৩৬০° ভিউ */}
      <div>
        <h3>360° View of Product</h3>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          {images360.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product View ${index + 1}`}
              style={{
                width: "50px",
                height: "50px",
                margin: "5px",
                cursor: "pointer",
                border: currentImage === index ? "2px solid black" : "none",
              }}
              onClick={() => handle360Change(index)}
            />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <img
            src={images360[currentImage]}
            alt={`Product ${currentImage + 1}`}
            style={{
              width: "400px",
              height: "400px",
              border: "1px solid #ddd",
              transition: "transform 0.25s ease",
            }}
          />
        </div>
      </div>

      {/* ইমেজ জুম ফিচার */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h3>Image Zoom Feature</h3>
        <div
          style={{
            display: "inline-block",
            position: "relative",
            overflow: "hidden",
            width: "400px",
            height: "400px",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src= {lfh}
            alt="Product"
            style={{
              width: "100%",
              height: "100%",
              transform: zoom ? "scale(2)" : "scale(1)",
              transition: "transform 0.2s ease-in-out",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
