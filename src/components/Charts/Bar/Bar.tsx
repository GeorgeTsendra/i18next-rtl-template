import React, { useState } from "react";
import { Bar as BarComponent } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Bar: React.FC = () => {
  const [timePeriod, setTimePeriod] = useState("week");

  const data = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        data: [200, 500, 1500, 1200, 1000, 800, 300],
        backgroundColor: "rgba(128, 128, 128, 0.5)",
        borderColor: "rgba(128, 128, 128, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        type: "linear" as const,
        beginAtZero: true,
        ticks: {
          stepSize: 500,
        },
        grid: {
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "400px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h3>SPENDING TREND</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* //@ts-ignore */}
        <BarComponent data={data} options={options} />
        <select
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
          style={{ padding: "5px", fontSize: "16px" }}
        >
          <option value="week">week</option>
          <option value="month">month</option>
          <option value="quarter">quarter</option>
          <option value="year">year</option>
        </select>
      </div>
    </div>
  );
};

export default Bar;
