import React, { useState } from "react";
import "./UserProfile.css";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("orders");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <div className="tabs">
        <button
          className={activeTab === "orders" ? "tab active" : "tab"}
          onClick={() => handleTabClick("orders")}
        >
          Order History
        </button>
        <button
          className={activeTab === "wishlist" ? "tab active" : "tab"}
          onClick={() => handleTabClick("wishlist")}
        >
          Wishlist
        </button>
        <button
          className={activeTab === "saved" ? "tab active" : "tab"}
          onClick={() => handleTabClick("saved")}
        >
          Saved Items
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "orders" && (
          <div>
            <h2>Order History</h2>
            <ul>
              <li>Order #1: Chair - $120</li>
              <li>Order #2: Desk - $200</li>
              <li>Order #3: Lamp - $45</li>
            </ul>
          </div>
        )}
        {activeTab === "wishlist" && (
          <div>
            <h2>Wishlist</h2>
            <ul>
              <li>Luxury Sofa</li>
              <li>Office Chair</li>
              <li>Standing Desk</li>
            </ul>
          </div>
        )}
        {activeTab === "saved" && (
          <div>
            <h2>Saved Items</h2>
            <ul>
              <li>Wooden Table</li>
              <li>Modern Bookshelf</li>
              <li>Gaming Chair</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
