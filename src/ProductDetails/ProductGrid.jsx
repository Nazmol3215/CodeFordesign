import React, { useState } from "react";

const ProductGrid = () => {
  const [viewMode, setViewMode] = useState("grid"); // "grid" বা "list" ভিউ মোড

  // স্ট্যাটিক প্রোডাক্ট ডেটা
  const products = [
    { id: 1, name: "Product A", price: 5000, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product B", price: 6000, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product C", price: 7000, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Product D", price: 8000, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Product E", price: 9000, image: "https://via.placeholder.com/150" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Responsive Product Layout</h2>

      {/* টগল বাটন */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setViewMode("grid")}
          style={{
            padding: "10px",
            marginRight: "10px",
            backgroundColor: viewMode === "grid" ? "#007bff" : "#ddd",
            color: viewMode === "grid" ? "white" : "black",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Grid View
        </button>
        <button
          onClick={() => setViewMode("list")}
          style={{
            padding: "10px",
            backgroundColor: viewMode === "list" ? "#007bff" : "#ddd",
            color: viewMode === "list" ? "white" : "black",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          List View
        </button>
      </div>

      {/* প্রোডাক্ট ভিউ */}
      <div
        className={viewMode === "grid" ? "grid-view" : "list-view"}
        style={{
          display: "grid",
          gridTemplateColumns: viewMode === "grid" ? "repeat(auto-fit, minmax(200px, 1fr))" : "1fr",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "5px",
              display: "flex",
              flexDirection: viewMode === "grid" ? "column" : "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: viewMode === "grid" ? "100%" : "100px",
                height: viewMode === "grid" ? "150px" : "100px",
                objectFit: "cover",
              }}
            />
            <div>
              <h4 style={{ margin: "0 0 10px 0" }}>{product.name}</h4>
              <p style={{ margin: "0" }}>৳{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
