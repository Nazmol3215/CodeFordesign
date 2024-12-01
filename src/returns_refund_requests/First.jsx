import React, { useState } from "react";
import RequestForm from "./RequestForm";
import RequestList from "./RequestList";




const First = () => {
  const [requests, setRequests] = useState([]);

  // Add a new request
  const addRequest = (newRequest) => {
    setRequests([...requests, newRequest]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Return & Refund System (Demo)</h1>
      <RequestForm addRequest={addRequest} />
      <RequestList requests={requests} />
    </div>
  );
};

export default First;
