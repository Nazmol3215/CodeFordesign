import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../Ecoomerces/ProductCard"
import Cart from "../Ecoomerces/Cart";
import Wishlist from "../Ecoomerces/Wishlist";
import Filter from "../Ecoomerces/Filter";

// ডাইনামিক প্রোডাক্ট ডেটা
const productsData = [
  { id: 1, name: "Wireless Headphones", price: 50, rating: 4.5, image: "https://via.placeholder.com/300x200" },
  { id: 2, name: "Smart Watch", price: 100, rating: 4.2, image: "https://via.placeholder.com/300x200" },
  { id: 3, name: "Bluetooth Speaker", price: 75, rating: 4.8, image: "https://via.placeholder.com/300x200" },
  { id: 4, name: "Laptop Stand", price: 40, rating: 4.1, image: "https://via.placeholder.com/300x200" },
  { id: 5, name: "Keyboard", price: 30, rating: 4.7, image: "https://via.placeholder.com/300x200" },
];

const MainAll = () => {
  const [cart, setCart] = useState([]); // কার্ট
  const [wishlist, setWishlist] = useState([]); // উইশলিস্ট
  const [filteredProducts, setFilteredProducts] = useState(productsData); // ফিল্টার করা প্রোডাক্ট

  return (
    <Router>
      <div className="container my-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <Link className="navbar-brand" to="/">E-Commerce</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/cart">Cart ({cart.length})</Link>
            <Link className="nav-link" to="/wishlist">Wishlist ({wishlist.length})</Link>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter
                  products={productsData}
                  setFilteredProducts={setFilteredProducts}
                />
                <div className="row">
                  {filteredProducts.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                      <ProductCard
                        product={product}
                        cart={cart}
                        setCart={setCart}
                        wishlist={wishlist}
                        setWishlist={setWishlist}
                      />
                    </div>
                  ))}
                </div>
              </>
            }
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/wishlist" element={<Wishlist wishlist={wishlist} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MainAll;
