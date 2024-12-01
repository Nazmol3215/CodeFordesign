import React, { useState } from "react";
import "./LiveChat.css";

const LiveChat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", from: "support" },
  ]);
  const [userMessage, setUserMessage] = useState("");

  // ইউজার মেসেজ পাঠানোর ফাংশন
  const sendMessage = () => {
    if (userMessage.trim()) {
      const newMessage = { text: userMessage, from: "user" };
      setMessages([...messages, newMessage]);

      // সাপোর্টের রিপ্লাই (ডেমো রিপ্লাই)
      setTimeout(() => {
        const reply = { text: "Can you please provide your order number?", from: "support" };
        setMessages((prevMessages) => [...prevMessages, reply]);
      }, 1000); // 1 সেকেন্ড পর সাপোর্টের রিপ্লাই

      setUserMessage("");
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        <div className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.from}`}
              style={{
                textAlign: msg.from === "user" ? "right" : "left",
              }}
            >
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
