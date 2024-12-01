import React, { useState, useEffect } from "react";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate API Data
  const allProducts = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: (Math.random() * 100).toFixed(2),
  }));

  // Load initial products
  useEffect(() => {
    setProducts(allProducts.slice(0, visibleCount));
  }, [visibleCount]);

  // Handle "Load More" button click
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  // Handle infinite scrolling
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100 &&
      !isLoading
    ) {
      setIsLoading(true);
      setTimeout(() => {
        setVisibleCount((prevCount) => prevCount + 10);
        setIsLoading(false);
      }, 1000); // Simulate API delay
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}

      {/* Load More Button */}
      {visibleCount < allProducts.length && (
        <button className="load-more" onClick={handleLoadMore}>
          Load More
        </button>
      )}

      {/* Loading Spinner */}
      {isLoading && <p className="loading">Loading more products...</p>}
    </div>
  );
};

export default ProductList;
