import React from "react";

const OrderConfirmation = () => {
  // উদাহরণ হিসেবে অর্ডারের ডেটা
  const order = {
    orderId: "12345",
    products: [
      { id: 1, name: "Product 1", price: 100, quantity: 2 },
      { id: 2, name: "Product 2", price: 200, quantity: 1 },
    ],
    total: 400,
    deliveryDetails: {
      name: "John Doe",
      address: "123 Main St, City, Country",
      phone: "123-456-7890",
      email: "john.doe@example.com",
    },
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Order Confirmation</h1>
      <p>Thank you for your order! Your order has been successfully placed.</p>

      {/* Order Summary */}
      <h2>Order Summary</h2>
      <p><strong>Order ID:</strong> {order.orderId}</p>

      {/* Product List */}
      <h3>Products</h3>
      <ul>
        {order.products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.quantity} x ${product.price} = $
            {product.quantity * product.price}
          </li>
        ))}
      </ul>

      {/* Total */}
      <h4>Total: ${order.total}</h4>

      {/* Delivery Details */}
      <h3>Delivery Details</h3>
      <p><strong>Name:</strong> {order.deliveryDetails.name}</p>
      <p><strong>Address:</strong> {order.deliveryDetails.address}</p>
      <p><strong>Phone:</strong> {order.deliveryDetails.phone}</p>
      <p><strong>Email:</strong> {order.deliveryDetails.email}</p>

      {/* Custom Thank You Message */}
      <div style={{ marginTop: "20px", backgroundColor: "#f0f8ff", padding: "10px" }}>
        <h3>Thank You!</h3>
        <p>Your order will be processed and delivered to you shortly. We appreciate your business!</p>
      </div>
    </div>
  );
};

export default OrderConfirmation;
