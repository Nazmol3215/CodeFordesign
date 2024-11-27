import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductGrid = () => {
  // প্রোডাক্ট লিস্ট
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      image: "https://via.placeholder.com/150",
      description: "High-quality wireless headphones with noise cancellation.",
      price: 120,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Smartphone",
      image: "https://via.placeholder.com/150",
      description: "Latest smartphone with advanced features.",
      price: 899,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Laptop",
      image: "https://via.placeholder.com/150",
      description: "Lightweight laptop with powerful performance.",
      price: 1500,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Smartwatch",
      image: "https://via.placeholder.com/150",
      description: "Feature-packed smartwatch with health tracking.",
      price: 200,
      rating: 4.3,
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Product Grid</h1>

      {/* প্রোডাক্ট গ্রিড */}
      <div className="row">
        {products.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              {/* পণ্যের ছবি */}
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "150px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                {/* পণ্যের নাম */}
                <h5 className="card-title">{product.name}</h5>
                {/* পণ্যের বিবরণ */}
                <p className="card-text text-muted" style={{ fontSize: "14px" }}>
                  {product.description}
                </p>
                <div className="mt-auto">
                  {/* রেটিং */}
                  <p>
                    <strong>Rating:</strong> {product.rating} ⭐
                  </p>
                  {/* মূল্য */}
                  <p>
                    <strong>Price:</strong> ${product.price}
                  </p>
                  <button className="btn btn-primary w-100">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
