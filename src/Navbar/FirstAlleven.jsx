import React from "react";
import "./App.css";
import Navbar from "./Navbar";
function FirstAlleven() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="content">
          <h1>Welcome to the Website</h1>
          <p>Scroll down to see the sticky navbar in action!</p>
          <div style={{ height: "1500px" }}>Content goes here...</div>
        </div>
      </main>
    </div>
  );
}

export default FirstAlleven;
