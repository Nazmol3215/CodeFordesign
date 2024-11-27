import React, { useState } from "react";


const ShoppingCart = () => {
  const [cart, setCart] = useState([]); // কার্টের জন্য স্টেট
  const [products] = useState([
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 150 },
    { id: 3, name: "Product C", price: 200 },
  ]); // প্রোডাক্ট লিস্ট

  // কার্টে পণ্য যোগ করার ফাংশন
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // কার্ট থেকে পণ্য বাদ দেওয়ার ফাংশন
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // কার্টের মোট মূল্য গণনার ফাংশন
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Shopping Cart</h2>

      {/* প্রোডাক্ট লিস্ট */}
      <div>
        <h3>Products</h3>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h4>{product.name}</h4>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* কার্ট */}
      <div>
        <h3>Cart</h3>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        ) : (
          <p>Cart is empty</p>
        )}
      </div>

      {/* মোট মূল্য */}
      <div>
        <h3>Total Price: ${calculateTotalPrice()}</h3>
      </div>
    </div>
  );
};

export default ShoppingCart;
