import React from 'react';
import { useShoppingCart } from './ShoppingCartContext';

const ShoppingCart = () => {
  const { cart, addToCart, removeFromCart } = useShoppingCart();

  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 150 },
  ];

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        <h3>Available Products</h3>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.name} - ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.name} - ${item.price} x {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <p>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
