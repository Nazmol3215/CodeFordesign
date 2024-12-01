import React, { useState, useEffect } from "react";

const ShoppingCart = () => {
  // ডিফল্ট প্রোডাক্টের তালিকা (উদাহরণ)
  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 150 },
  ];

  // শপিং কার্টের স্টেট
  const [cart, setCart] = useState(() => {
    // Local Storage থেকে পূর্ববর্তী কার্ট ডেটা পড়ুন, যদি থাকে
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // কার্ট আপডেট হলে Local Storage এ সেভ করা
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // কার্টে প্রোডাক্ট যোগ করা
  const addToCart = (product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);
      if (productExists) {
        // যদি প্রোডাক্ট আগে থেকেই কার্টে থাকে, তার কুইন্টিটি বাড়িয়ে দাও
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // নতুন প্রোডাক্ট কার্টে যোগ করো
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // কার্ট থেকে প্রোডাক্ট সরানো
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // মোট মূল্য হিসাব করা
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      {/* প্রোডাক্ট তালিকা */}
      <div>
        <h3>Available Products</h3>
        <div>
          {products.map((product) => (
            <div key={product.id} style={{ marginBottom: "10px" }}>
              <p>
                <strong>{product.name}</strong> - ${product.price}
              </p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* কার্টের ডেটা */}
      <div>
        <h3>Your Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} style={{ marginBottom: "10px" }}>
                <p>
                  <strong>{item.name}</strong> - ${item.price} x {item.quantity}
                </p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
            {/* মোট মূল্য */}
            <div>
              <h4>Total: ${calculateTotal()}</h4>
            </div>
          </div>
        )}
      </div>

      {/* চেকআউট বাটন */}
      <div>
        {cart.length > 0 && (
          <button style={{ marginTop: "20px" }}>Proceed to Checkout</button>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
