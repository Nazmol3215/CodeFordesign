import React from "react";
import { Line } from "react-chartjs-2";

const ChartExample = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return (
    <div style={{ width: "600px", margin: "0 auto" }}>
      <h3>Sales Over Time</h3>
      <Line data={data} />
    </div>
  );
};

export default ChartExample;
