import React from "react";

const products = [
  { id: 1, name: "Product 1", price: "$50", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", price: "$75", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", price: "$100", image: "https://via.placeholder.com/150" },
];

const ProductSection = () => {
  return (
    <div className="product-section py-5" id="products">
      <div className="container">
        <h2 className="text-center mb-4">Our Products</h2>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card mb-4">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <a href="#" className="btn btn-outline-primary">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
