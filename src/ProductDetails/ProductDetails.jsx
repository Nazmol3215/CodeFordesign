import React from "react";

const ProductDetails = () => {
  const product = {
    name: "Modern Chair",
    description:
      "This is a beautifully designed modern chair, perfect for any home or office.",
    price: 120,
    category: "Furniture",
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
    </div>
  );
};

export default ProductDetails;
