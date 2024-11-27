import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const orders = [
  {
    id: 1,
    date: "2024-11-20",
    details: [
      { name: "Laptop", quantity: 1, price: 1000 },
      { name: "Mouse", quantity: 2, price: 40 },
    ],
    shippingAddress: "123 Main Street, Dhaka, Bangladesh",
  },
  {
    id: 2,
    date: "2024-11-18",
    details: [
      { name: "T-Shirt", quantity: 3, price: 75 },
      { name: "Shoes", quantity: 1, price: 120 },
    ],
    shippingAddress: "45 Market Street, Chittagong, Bangladesh",
  },
  {
    id: 3,
    date: "2024-11-15",
    details: [
      { name: "Phone", quantity: 1, price: 800 },
      { name: "Charger", quantity: 1, price: 50 },
    ],
    shippingAddress: "678 City Avenue, Sylhet, Bangladesh",
  },
];

const AppTwoenty = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Shopping History</h2>

      {/* Orders List */}
      {orders.map((order) => (
        <div className="card mb-4" key={order.id}>
          <div className="card-header d-flex justify-content-between">
            <span><strong>Order ID:</strong> {order.id}</span>
            <span><strong>Date:</strong> {order.date}</span>
          </div>
          <div className="card-body">
            <h5 className="card-title">Order Details</h5>
            <ul className="list-group mb-3">
              {order.details.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between"
                >
                  <div>
                    <strong>{item.name}</strong> (x{item.quantity})
                  </div>
                  <div>${item.price * item.quantity}</div>
                </li>
              ))}
            </ul>
            <h5>Shipping Address</h5>
            <p>{order.shippingAddress}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppTwoenty;
