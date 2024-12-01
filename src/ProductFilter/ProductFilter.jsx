import React, { useState } from "react";

const ProductFilter = () => {
  const [filters, setFilters] = useState({
    category: "all",
    price: 1000,
    rating: 1,
  });

  const products = [
    { id: 1, name: "Product 1", category: "electronics", price: 500, rating: 4 },
    { id: 2, name: "Product 2", category: "furniture", price: 800, rating: 5 },
    { id: 3, name: "Product 3", category: "electronics", price: 200, rating: 3 },
    { id: 4, name: "Product 4", category: "furniture", price: 500, rating: 6 },
    { id: 5, name: "Product 5", category: "furniture", price: 100, rating: 5 },
    { id: 3, name: "Product 6", category: "electronics", price: 100, rating: 6 },
    { id: 1, name: "Product 1", category: "electronics", price: 500, rating: 4 },
    { id: 2, name: "Product 2", category: "furniture", price: 500, rating: 5 },
    { id: 3, name: "Product 3", category: "electronics", price: 900, rating: 3 },
    { id: 4, name: "Product 4", category: "electronics", price: 500, rating: 6 },
    { id: 5, name: "Product 5", category: "furniture", price: 1000, rating: 5 },
    { id: 3, name: "Product 6", category: "furniture", price: 100, rating: 6 },
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: name === "price" || name === "rating" ? parseInt(value) : value,
    }));
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      filters.category === "all" || product.category === filters.category;
    const matchesPrice = product.price <= filters.price;
    const matchesRating = product.rating >= filters.rating;
    return matchesCategory && matchesPrice && matchesRating;
  });

  return (
    <div>
      <h1>Product Filter</h1>

      {/* Filters */}
      <div>
        <label>
          Category:
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
          </select>
        </label>

        <label>
          Price Range: {filters.price}
          <input
            type="range"
            name="price"
            min="0"
            max="1000"
            step="100"
            value={filters.price}
            onChange={handleFilterChange}
          />
        </label>

        <label>
          Minimum Rating:
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            value={filters.rating}
            onChange={handleFilterChange}
          />
        </label>
      </div>

      {/* Product List */}
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              {product.name} - {product.category}, ${product.price}, Rating:{" "}
              {product.rating}
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;
