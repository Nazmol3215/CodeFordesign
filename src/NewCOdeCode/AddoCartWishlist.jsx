import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import jhkfr from '../Images/goda.png';
import jhkfr1 from '../Images/kfdhgdb.png';
import jhkfr2 from '../Images/uirgredg.png';

// প্রোডাক্ট ডেটা (ডায়নামিক ডেটা)
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 50,
    rating: 4.5,
    image:jhkfr,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 100,
    rating: 4.2,
    image:jhkfr1,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 75,
    rating: 4.8,
    image: jhkfr2 ,
  },
];

const AddoCartWishlist = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Add to Cart ফাংশন
  const handleAddToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
      alert(`${product.name} added to cart!`);
    } else {
      alert(`${product.name} is already in the cart.`);
    }
  };

  // Wishlist ফাংশন
  const handleAddToWishlist = (product) => {
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
      alert(`${product.name} added to wishlist!`);
    } else {
      alert(`${product.name} is already in the wishlist.`);
    }
  };

  return (
    <Container className="my-4">
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> ${product.price}
                </Card.Text>
                <Card.Text>
                  <strong>Rating:</strong> {product.rating} ⭐
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="primary"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => handleAddToWishlist(product)}
                  >
                    Wishlist
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AddoCartWishlist;
