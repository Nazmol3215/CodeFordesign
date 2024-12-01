import React from 'react';
import { useShoppingCart } from './ShoppingCartContext';

const OrderConfirmationTwo = () => {
  const { cart } = useShoppingCart();

  const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Order Confirmation</h2>
      <p>Thank you for your order! Your order has been successfully placed.</p>

      <h3>Order Summary</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
          </li>
        ))}
      </ul>

      <h4>Total: ${total}</h4>

      <div>
        <h3>Delivery Details</h3>
        <p>Name: John Doe</p>
        <p>Address: 123 Main St, City, Country</p>
        <p>Phone: 123-456-7890</p>
        <p>Email: john.doe@example.com</p>
      </div>

      <div style={{ marginTop: "20px", backgroundColor: "#f0f8ff", padding: "10px" }}>
        <h3>Thank You!</h3>
        <p>Your order will be processed and delivered to you shortly. We appreciate your business!</p>
      </div>
    </div>
  );
};

export default OrderConfirmationTwo;
