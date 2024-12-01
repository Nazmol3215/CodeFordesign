import React, { createContext, useState, useContext } from 'react';

// Context তৈরি করা
const ShoppingCartContext = createContext();

// Context Provider কম্পোনেন্ট
export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);
      if (productExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <ShoppingCartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

// Context থেকে ডেটা আনার জন্য হুক
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};


