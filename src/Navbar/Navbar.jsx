import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <div className="logo">LOGO</div>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button>🔍</button>
        </div>
        <div className="cart-icon">🛒</div>
      </div>
    </header>
  );
};

export default Navbar;
