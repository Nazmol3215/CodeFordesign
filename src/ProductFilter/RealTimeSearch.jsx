import React, { useState } from "react";

const RealTimeSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const products = [
    "Product 1 - Electronics",
    "Product 2 - Furniture",
    "Product 3 - Clothing",
    "Product 4 - Books",
    "Product 1 - Electronics",
    "Product 2 - Furniture",
    "Product 3 - Clothing",
    "Product 4 - Books",
    "Product 1 - Electronics",
    "Product 2 - Furniture",
    "Product 3 - Clothing",
    "Product 4 - Books",
    "Product 1 - Electronics",
    "Product 2 - Furniture",
    "Product 3 - Clothing",
    "Product 4 - Books",
  ];

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h1>Search Products</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={index}>{product}</div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default RealTimeSearch;
