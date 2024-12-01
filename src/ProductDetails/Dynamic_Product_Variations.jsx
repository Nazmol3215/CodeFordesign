import React, { useState } from "react";

const ProductVariations = () => {
  const [selectedColor, setSelectedColor] = useState("Red"); // ডিফল্ট কালার
  const [selectedSize, setSelectedSize] = useState("M"); // ডিফল্ট সাইজ

  // প্রোডাক্টের কালার অপশন
  const colors = [
    { name: "Red", hex: "#FF0000", image: "https://via.placeholder.com/200/FF0000" },
    { name: "Blue", hex: "#0000FF", image: "https://via.placeholder.com/200/0000FF" },
    { name: "Green", hex: "#008000", image: "https://via.placeholder.com/200/008000" },
  ];

  // প্রোডাক্টের সাইজ অপশন
  const sizes = ["S", "M", "L", "XL"];

  // সিলেক্ট করা কালার অনুযায়ী ইমেজ পাওয়া
  const selectedColorImage = colors.find((color) => color.name === selectedColor)?.image;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Dynamic Product Variations</h2>

      {/* প্রোডাক্ট ইমেজ */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src={selectedColorImage}
          alt={selectedColor}
          style={{ width: "200px", height: "200px", border: "1px solid #ddd" }}
        />
      </div>

      {/* কালার অপশন */}
      <div style={{ marginBottom: "20px" }}>
        <h4>Select Color:</h4>
        <div style={{ display: "flex", gap: "10px" }}>
          {colors.map((color) => (
            <div
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: color.hex,
                border: selectedColor === color.name ? "3px solid black" : "1px solid #ddd",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* সাইজ অপশন */}
      <div>
        <h4>Select Size:</h4>
        <div style={{ display: "flex", gap: "10px" }}>
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              style={{
                padding: "10px 15px",
                border: selectedSize === size ? "2px solid black" : "1px solid #ddd",
                backgroundColor: selectedSize === size ? "#007bff" : "white",
                color: selectedSize === size ? "white" : "black",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* সিলেক্ট করা ভ্যারিয়েশন দেখানো */}
      <div style={{ marginTop: "20px" }}>
        <h4>Selected Variation:</h4>
        <p>
          <strong>Color:</strong> {selectedColor} | <strong>Size:</strong> {selectedSize}
        </p>
      </div>
    </div>
  );
};

export default ProductVariations;
