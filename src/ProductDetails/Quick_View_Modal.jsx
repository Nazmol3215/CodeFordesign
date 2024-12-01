import React, { useState } from "react";

const ProductCard = ({ product }) => {
  // কুইক ভিউ মডালের জন্য স্টেট
  const [showModal, setShowModal] = useState(false);

  // মডাল বন্ধ করা
  const closeModal = () => setShowModal(false);

  // মডাল ওপেন করা
  const openModal = () => setShowModal(true);

  return (
    <div style={{ display: "inline-block", margin: "10px" }}>
      {/* প্রোডাক্ট কার্ড */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          width: "200px",
          cursor: "pointer",
        }}
        onClick={openModal}
      >
        <img
          src={`https://via.placeholder.com/150`}
          alt={product.name}
          style={{ width: "100%" }}
        />
        <h4>{product.name}</h4>
        <p>Price: ${product.price}</p>
      </div>

      {/* কুইক ভিউ মডাল */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "8px",
              width: "500px",
              position: "relative",
            }}
          >
            {/* মডাল কন্টেন্ট */}
            <h3>{product.name}</h3>
            <img
              src={`https://via.placeholder.com/350`}
              alt={product.name}
              style={{ width: "100%", marginBottom: "20px" }}
            />
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "#ccc",
                border: "none",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const FirstAll = () => {
  const products = [
    {
      name: "T-shirt",
      price: 500,
      description: "A comfortable cotton t-shirt.",
    },
    {
      name: "Sneakers",
      price: 1000,
      description: "Stylish and comfortable sneakers.",
    },
    {
      name: "Jacket",
      price: 1500,
      description: "Warm winter jacket for cold days.",
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
};

export default FirstAll;
