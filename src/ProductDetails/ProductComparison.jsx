import React, { useState } from "react";

const ProductComparison = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  // স্ট্যাটিক প্রোডাক্ট ডেটা
  const products = [
    {
      id: 1,
      name: "Product A",
      price: 5000,
      brand: "Brand X",
      rating: 4.5,
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      id: 2,
      name: "Product B",
      price: 5500,
      brand: "Brand Y",
      rating: 4.2,
      features: ["Feature 1", "Feature 4", "Feature 5"],
    },
    {
      id: 3,
      name: "Product C",
      price: 6000,
      brand: "Brand Z",
      rating: 4.7,
      features: ["Feature 2", "Feature 3", "Feature 6"],
    },
  ];

  // প্রোডাক্ট সিলেকশন হ্যান্ডলার
  const handleSelectProduct = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else if (selectedProducts.length < 3) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      alert("You can compare up to 3 products only!");
    }
  };

  // সিলেক্টেড প্রোডাক্ট ডেটা
  const selectedProductDetails = products.filter((product) =>
    selectedProducts.includes(product.id)
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Product Comparison</h2>

      {/* প্রোডাক্ট লিস্ট */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "5px",
              textAlign: "center",
              width: "150px",
              backgroundColor: selectedProducts.includes(product.id)
                ? "#e6f7ff"
                : "white",
              cursor: "pointer",
            }}
            onClick={() => handleSelectProduct(product.id)}
          >
            <h4>{product.name}</h4>
            <p>৳{product.price}</p>
            <p>Brand: {product.brand}</p>
            <p>Rating: {product.rating}⭐</p>
          </div>
        ))}
      </div>

      {/* তুলনা টেবিল */}
      {selectedProducts.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Comparison Table</h3>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "10px",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                  Specification
                </th>
                {selectedProductDetails.map((product) => (
                  <th
                    key={product.id}
                    style={{ border: "1px solid #ddd", padding: "10px" }}
                  >
                    {product.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  Price
                </td>
                {selectedProductDetails.map((product) => (
                  <td
                    key={product.id}
                    style={{ border: "1px solid #ddd", padding: "10px" }}
                  >
                    ৳{product.price}
                  </td>
                ))}
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  Brand
                </td>
                {selectedProductDetails.map((product) => (
                  <td
                    key={product.id}
                    style={{ border: "1px solid #ddd", padding: "10px" }}
                  >
                    {product.brand}
                  </td>
                ))}
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  Rating
                </td>
                {selectedProductDetails.map((product) => (
                  <td
                    key={product.id}
                    style={{ border: "1px solid #ddd", padding: "10px" }}
                  >
                    {product.rating}⭐
                  </td>
                ))}
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  Features
                </td>
                {selectedProductDetails.map((product) => (
                  <td
                    key={product.id}
                    style={{ border: "1px solid #ddd", padding: "10px" }}
                  >
                    {product.features.join(", ")}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductComparison;
