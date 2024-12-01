import React, { useState } from "react";

// ডেমো প্রোডাক্ট ডেটা
const initialProducts = [
  { id: 1, name: "Wireless Earbuds", price: 50, rating: 4.5, date: "2024-11-01" },
  { id: 2, name: "Smartwatch", price: 100, rating: 4.8, date: "2024-11-10" },
  { id: 3, name: "Gaming Headset", price: 80, rating: 4.0, date: "2024-10-25" },
  { id: 4, name: "Bluetooth Speaker", price: 30, rating: 4.2, date: "2024-10-20" },
  { id: 5, name: "Fitness Tracker", price: 60, rating: 4.7, date: "2024-11-05" },
];

const ProductListWithSort = () => {
  const [products, setProducts] = useState(initialProducts);
  const [sortOption, setSortOption] = useState("price"); // Default sort by price

  // সোর্ট করার ফাংশন
  const handleSort = (option) => {
    setSortOption(option);
    const sortedProducts = [...products];

    if (option === "price") {
      sortedProducts.sort((a, b) => a.price - b.price); // Price Low to High
    } else if (option === "rating") {
      sortedProducts.sort((a, b) => b.rating - a.rating); // Rating High to Low
    } else if (option === "newest") {
      sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date)); // Newest First
    }

    setProducts(sortedProducts);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>

      {/* Sort Options */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="sort">Sort by: </label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="price">Price (Low to High)</option>
          <option value="rating">Rating (High to Low)</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* Product List */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating} ⭐</p>
            <p>Date: {product.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListWithSort;
