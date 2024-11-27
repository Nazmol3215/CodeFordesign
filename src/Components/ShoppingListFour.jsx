import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ShoppingListFour = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  // পণ্য যুক্ত করা
  const addProduct = () => {
    if (newProduct.name && newProduct.price) {
      setProducts([
        ...products,
        { ...newProduct, id: Date.now() }, // Unique ID
      ]);
      setNewProduct({ name: "", price: "", description: "" }); // Clear input
    }
  };

  // পণ্য ডিলিট করা
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // পণ্য এডিট করা
  const editProduct = (id) => {
    const product = products.find((product) => product.id === id);
    setNewProduct(product);
    setProducts(products.filter((product) => product.id !== id));
  };

  // সার্চ ফিল্টার
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Product Shopping List</h1>

      {/* নতুন পণ্য যোগ করা */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
        </div>
        <div className="col-md-4 mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
        </div>
        <div className="col-md-4 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary w-100" onClick={addProduct}>
            Add Product
          </button>
        </div>
      </div>

      {/* সার্চ বক্স */}
      <div className="row mb-4">
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Search Product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* প্রোডাক্ট তালিকা */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-md-6 mb-4" key={product.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">
                    <strong>Price:</strong> ${product.price}
                  </p>
                  <p className="card-text">{product.description}</p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-success"
                      onClick={() => editProduct(product.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ShoppingListFour;
