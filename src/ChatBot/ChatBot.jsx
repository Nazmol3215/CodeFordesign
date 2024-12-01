import React, { useState, useEffect } from "react";

const RuleBasedChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Welcome to our store. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  // রুল-বেসড জবাব তৈরির ফাংশন
  const generateBotResponse = (userMessage) => {
    let response = "I'm sorry, I don't understand that. Can you try asking in another way?";

    // রুল অনুযায়ী জবাব
    if (userMessage.toLowerCase().includes("suggest")) {
      response = "Here are some popular products: Laptop, Mobile, Headphone, Chair, Table.";
    } else if (userMessage.toLowerCase().includes("laptop")) {
      response = "We have laptops starting from $500. Check out our latest collections!";
    } else if (userMessage.toLowerCase().includes("feedback")) {
      response = "Thank you for your interest in providing feedback. Please type your feedback below.";
    } else if (userMessage.toLowerCase().includes("thank")) {
      response = "You're welcome! Let us know if you need any further assistance.";
    } else if (userMessage.toLowerCase().includes("hoda")) {
      response = " hoda is the best person for eveyOne";
    }

    return response;
  };

  // মেসেজ সাবমিট করা
  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = { sender: "user", text: input };

      // ব্যবহারকারীর মেসেজ যোগ করা
      setMessages((prev) => [...prev, userMessage]);

      // বটের রেসপন্স যোগ করা
      const botMessage = { sender: "bot", text: generateBotResponse(input) };
      setTimeout(() => {
        setMessages((prev) => [...prev, botMessage]);
      }, 500);

      setInput("");
    }
  };

  // স্ক্রল নিচে নিয়ে আসা
  useEffect(() => {
    const chatBox = document.getElementById("chat-box");
    chatBox.scrollTop = chatBox.scrollHeight;
  }, [messages]);

  return (
    <div style={styles.container}>
      <h2>ChatBot</h2>
      <div id="chat-box" style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.sender === "user" ? "#daf8e3" : "#f0f0f0",
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage} style={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

// CSS স্টাইলস
const styles = {
  container: {
    width: "400px",
    margin: "20px auto",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  chatBox: {
    height: "300px",
    overflowY: "auto",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginBottom: "10px",
    backgroundColor: "#fff",
  },
  message: {
    padding: "8px 12px",
    margin: "5px 0",
    borderRadius: "8px",
    maxWidth: "70%",
    wordWrap: "break-word",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  sendButton: {
    padding: "8px 16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default RuleBasedChatBot;
