import React, { useState } from "react";
import "./FilterSlider.css";

const FilterSlider = () => {
  const [isOpen, setIsOpen] = useState(false); // স্লাইডার ওপেন বা ক্লোজ
  const [selectedCategory, setSelectedCategory] = useState("all"); // ফিল্টার ক্যাটেগরি
  const items = [
    { id: 1, name: "Red Shirt", category: "clothing" },
    { id: 2, name: "Blue Jeans", category: "clothing" },
    { id: 3, name: "Wireless Mouse", category: "electronics" },
    { id: 4, name: "Smartphone", category: "electronics" },
    { id: 5, name: "Cooking Pot", category: "kitchen" },
  ];

  // ফিল্টার করা রেজাল্ট
  const filteredItems = items.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="filter-slider-container">
      {/* Filter Button */}
      <button className="filter-button" onClick={() => setIsOpen(true)}>
        Open Filters
      </button>

      {/* Slide-in Filter Menu */}
      <div className={`filter-slider ${isOpen ? "open" : ""}`}>
        <button className="close-button" onClick={() => setIsOpen(false)}>
          ×
        </button>
        <h3>Filter by Category</h3>
        <div className="filter-options">
          <button onClick={() => setSelectedCategory("all")}>All</button>
          <button onClick={() => setSelectedCategory("clothing")}>
            Clothing
          </button>
          <button onClick={() => setSelectedCategory("electronics")}>
            Electronics
          </button>
          <button onClick={() => setSelectedCategory("kitchen")}>
            Kitchen
          </button>
        </div>
      </div>

      {/* Filtered Results */}
      <div className="filtered-results">
        <h3>Filtered Items:</h3>
        {filteredItems.map((item) => (
          <div key={item.id} className="item">
            {item.name} - <em>{item.category}</em>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSlider;
