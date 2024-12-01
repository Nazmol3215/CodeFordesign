import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="mb-3">
            <h5>{item.name}</h5>
            <p>Price: ${item.price}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
