import React from "react";
import "./TrendingAndRecommended.css";

const TrendingAndRecommended = () => {
  // ডেটা
  const trendingProducts = [
    { id: 1, name: "Wireless Earbuds", price: "$50", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Smartwatch", price: "$100", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Gaming Headset", price: "$80", image: "https://via.placeholder.com/150" },
  ];

  const recommendedProducts = [
    { id: 4, name: "Bluetooth Speaker", price: "$30", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Fitness Tracker", price: "$60", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Laptop Stand", price: "$25", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="product-sections">
      {/* Trending Products */}
      <div className="section">
        <h2>Trending Products</h2>
        <div className="product-slider">
          {trendingProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h4>{product.name}</h4>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Products */}
      <div className="section">
        <h2>Recommended for You</h2>
        <div className="product-slider">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h4>{product.name}</h4>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingAndRecommended;
