import React, { useState } from "react";

const GiftWrapOption = () => {
  const [isGiftWrapSelected, setIsGiftWrapSelected] = useState(false);
  const [giftMessage, setGiftMessage] = useState("");

  // গিফট র‍্যাপ সিলেক্ট করার ফাংশন
  const handleGiftWrapChange = () => {
    setIsGiftWrapSelected(!isGiftWrapSelected);
  };

  // গিফট মেসেজ টাইপ করার ফাংশন
  const handleMessageChange = (e) => {
    setGiftMessage(e.target.value);
  };

  return (
    <div className="gift-wrap-option">
      <h3>Gift Wrap Option</h3>

      <label htmlFor="gift-wrap" className="gift-wrap-label">
        <input
          type="checkbox"
          id="gift-wrap"
          checked={isGiftWrapSelected}
          onChange={handleGiftWrapChange}
        />
        <span>Choose gift wrap</span>
      </label>

      {isGiftWrapSelected && (
        <div className="gift-message">
          <label htmlFor="gift-message" className="message-label">
            <span>Gift Message (Optional)</span>
            <textarea
              id="gift-message"
              placeholder="Enter your gift message"
              value={giftMessage}
              onChange={handleMessageChange}
              rows="4"
              maxLength="250"
            />
          </label>
        </div>
      )}

      <div className="summary">
        <h4>Order Summary:</h4>
        <p>Gift Wrap: {isGiftWrapSelected ? "Yes" : "No"}</p>
        <p>Gift Message: {giftMessage ? giftMessage : "No message"}</p>
      </div>
    </div>
  );
};

export default GiftWrapOption;
