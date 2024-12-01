import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product, cart, setCart, wishlist, setWishlist }) => {
  const handleAddToCart = () => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
      alert(`${product.name} added to cart!`);
    } else {
      alert(`${product.name} is already in the cart.`);
    }
  };

  const handleAddToWishlist = () => {
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
      alert(`${product.name} added to wishlist!`);
    } else {
      alert(`${product.name} is already in the wishlist.`);
    }
  };

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
        <Card.Text><strong>Rating:</strong> {product.rating} ⭐</Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
          <Button variant="secondary" onClick={handleAddToWishlist}>Wishlist</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
