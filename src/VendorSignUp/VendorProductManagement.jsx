import React, { useState } from "react";

const VendorProductManagement = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে API কল করলে, প্রোডাক্ট ডাটাবেসে সেভ হবে।
    console.log("Product added: ", product);
  };

  return (
    <div className="container">
      <h2>Product Management</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            className="form-control"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default VendorProductManagement;
