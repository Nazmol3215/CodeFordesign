import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import SkeletonLoader from "./SkeletonLoader";


const FirstThree = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setData([
        { id: 1, name: "Chair", price: "$50" },
        { id: 2, name: "Table", price: "$100" },
        { id: 3, name: "Lamp", price: "$30" },
      ]);
      setIsLoading(false);
    }, 2000); // Simulates a 2-second delay
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Loading and Skeleton Effects</h1>
      {isLoading ? (
        <>
          <LoadingSpinner />
          <SkeletonLoader />
        </>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong> - {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FirstThree;
