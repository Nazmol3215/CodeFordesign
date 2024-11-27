import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminDashboard = () => {
  // ডেমো ডেটা
  const products = [
    { id: 1, name: "Wireless Headphones", price: 120 },
    { id: 2, name: "Smartphone", price: 899 },
    { id: 3, name: "Laptop", price: 1500 },
    { id: 4, name: "Smartwatch", price: 200 },
  ];

  const orders = [
    { id: 101, customer: "John Doe", total: 350, status: "Delivered" },
    { id: 102, customer: "Jane Smith", total: 450, status: "Pending" },
    { id: 103, customer: "Sam Wilson", total: 700, status: "Shipped" },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Admin Dashboard</h1>

      {/* ইন্ট্রোডাক্টরি ফিচার */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card text-white bg-primary">
            <div className="card-body">
              <h5 className="card-title">Total Products</h5>
              <p className="card-text">{products.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success">
            <div className="card-body">
              <h5 className="card-title">Total Orders</h5>
              <p className="card-text">{orders.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-info">
            <div className="card-body">
              <h5 className="card-title">Revenue</h5>
              <p className="card-text">${orders.reduce((acc, order) => acc + order.total, 0)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* পণ্য তালিকা */}
      <div className="mb-4">
        <h3>Product List</h3>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* অর্ডার তালিকা */}
      <div>
        <h3>Order List</h3>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
