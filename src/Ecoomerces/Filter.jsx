import React, { useState } from "react";

const Filter = ({ products, setFilteredProducts }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search products..."
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Filter;
