import React, { useState } from "react";
import "./MegaMenu.css";

const MegaMenu = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      name: "Electronics",
      subCategories: ["Mobile Phones", "Laptops", "Cameras", "Headphones"],
    },
    {
      name: "Clothing",
      subCategories: ["Men's Wear", "Women's Wear", "Kids' Wear", "Accessories"],
    },
    {
      name: "Furniture",
      subCategories: ["Sofas", "Beds", "Dining Tables", "Chairs"],
    },
  ];

  const handleCategoryClick = (index) => {
    setActiveCategory(activeCategory === index ? null : index); // Toggle category
  };

  return (
    <nav className="mega-menu">
      <ul className="menu">
        {categories.map((category, index) => (
          <li
            key={index}
            className="menu-item"
            onMouseEnter={() => setActiveCategory(index)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <span onClick={() => handleCategoryClick(index)}>
              {category.name}
            </span>
            <div
              className={`submenu ${
                activeCategory === index ? "expanded" : ""
              }`}
            >
              <ul>
                {category.subCategories.map((subCategory, subIndex) => (
                  <li key={subIndex} className="submenu-item">
                    {subCategory}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MegaMenu;
