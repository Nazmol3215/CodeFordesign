import React, { useState } from "react";
import Pagination from "./Pagination";

const Seven = () => {
  // ডেটাসেট
  const totalItems = 50; // মোট আইটেম সংখ্যা
  const itemsPerPage = 5; // প্রতিটি পেজে কতগুলো আইটেম থাকবে
  const [currentItems, setCurrentItems] = useState([]);

  // ডেটা ফিল্টার করার জন্য ফাংশন
  const handlePageChange = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // ডেমো ডেটা
    const items = Array.from({ length: totalItems }, (_, i) => `Item ${i + 1}`);
    setCurrentItems(items.slice(startIndex, endIndex));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Pagination Example</h1>

      {/* কারেন্ট আইটেম */}
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* পেজিনেশন */}
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Seven;
