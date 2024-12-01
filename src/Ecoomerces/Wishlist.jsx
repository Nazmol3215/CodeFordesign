import React from "react";

const Wishlist = ({ wishlist }) => {
  return (
    <div>
      <h2>Wishlist</h2>
      {wishlist.length > 0 ? (
        wishlist.map((item) => (
          <div key={item.id} className="mb-3">
            <h5>{item.name}</h5>
            <p>Price: ${item.price}</p>
          </div>
        ))
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
