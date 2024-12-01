import React from "react";

const RequestList = ({ requests }) => {
  return (
    <div>
      <h2>Requests List</h2>
      {requests.length === 0 ? (
        <p>No requests submitted yet.</p>
      ) : (
        <ul>
          {requests.map((request, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <strong>Name:</strong> {request.name} <br />
              <strong>Order ID:</strong> {request.orderId} <br />
              <strong>Reason:</strong> {request.reason} <br />
              <strong>Status:</strong> {request.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RequestList;
