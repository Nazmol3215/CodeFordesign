import React from "react";
import "./ProductGrid.css";

const ProductGridTwo = () => {
  const products = [
    { id: 1, name: "Red Shirt", price: "$20", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Blue Jeans", price: "$40", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Wireless Mouse", price: "$15", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Smartphone", price: "$300", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </div>
          <div className="hover-buttons">
            <button className="cart-button">Add to Cart</button>
            <button className="wishlist-button">Wishlist</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGridTwo;
