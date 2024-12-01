import React, { useState, useEffect } from "react";
import "./LiveChat.css";

// এই কোডে API ইন্টিগ্রেশন এবং টাইপিং স্টেট দেখানো হয়েছে
const LiveChatthree = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", from: "support" },
  ]);
  const [userMessage, setUserMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);  // টাইপিং স্টেট
  const [userName, setUserName] = useState(""); // ইউজারের নাম (অটেনটিকেশন ফিচার)

  // ডেমো API ফেচ ফাংশন (ডেটা ফেচিং)
  const fetchSupportReply = async () => {
    setIsTyping(true);
    // ডেমো রিপ্লাই (অথবা API থেকে আসবে)
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Can you please provide your order number?", from: "support" },
      ]);
      setIsTyping(false);
    }, 1500); // 1.5 সেকেন্ড পরে সাপোর্টের রিপ্লাই
  };

  // ইউজারের মেসেজ পাঠানো
  const sendMessage = () => {
    if (userMessage.trim()) {
      const newMessage = { text: userMessage, from: "user" };
      setMessages([...messages, newMessage]);

      // সাপোর্টের রিপ্লাই ফেচ করা
      fetchSupportReply();

      setUserMessage("");
    }
  };

  // ইউজারের নাম অ্যাসাইন করা
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {/* ইউজারের নাম ইনপুট (অটেনটিকেশন ফিচার) */}
        {!userName ? (
          <div className="user-name-input">
            <input
              type="text"
              placeholder="Enter your name to start"
              value={userName}
              onChange={handleNameChange}
            />
            <button onClick={() => userName && alert("Welcome " + userName)}>
              Start Chat
            </button>
          </div>
        ) : (
          <>
            {/* চ্যাট উইন্ডো */}
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

            {/* টাইপিং স্টেট */}
            {isTyping && (
              <div className="typing-indicator">
                <span>Support is typing...</span>
              </div>
            )}

            {/* মেসেজ পাঠানোর ইনপুট */}
            <div className="chat-input">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Type your message..."
                onFocus={() => setIsTyping(true)} // যখন ইউজার টাইপ করতে শুরু করবে
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LiveChatthree;
