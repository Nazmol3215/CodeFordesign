import React, { useState } from "react";
import "./MultiLayoutView.css";

// ডেমো ডেটা
const products = [
  { id: 1, name: "Wireless Earbuds", price: "$50" },
  { id: 2, name: "Smartwatch", price: "$100" },
  { id: 3, name: "Gaming Headset", price: "$80" },
  { id: 4, name: "Bluetooth Speaker", price: "$30" },
  { id: 5, name: "Fitness Tracker", price: "$60" },
];

const MultiLayoutView = () => {
  const [viewMode, setViewMode] = useState("grid"); // Default Grid View

  return (
    <div className="multi-layout-view">
      {/* ভিউ টগল বাটন */}
      <div className="view-toggle">
        <button
          className={viewMode === "grid" ? "active" : ""}
          onClick={() => setViewMode("grid")}
        >
          Grid View
        </button>
        <button
          className={viewMode === "list" ? "active" : ""}
          onClick={() => setViewMode("list")}
        >
          List View
        </button>
      </div>

      {/* প্রোডাক্ট লিস্ট */}
      <div className={`product-container ${viewMode}`}>
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiLayoutView;
