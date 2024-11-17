import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Doughut: React.FC = () => {
  const data = {
    labels: [
      "New",
      "Rejected",
      "To approve prices",
      "Waiting for client",
      "Client rejected",
    ],
    datasets: [
      {
        data: [15, 15, 25, 15, 5],
        backgroundColor: [
          "#008000",
          "#ff0000",
          "#0000ff",
          "#add8e6",
          "#00008b",
        ],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "70%", // Устанавливаем "выемку" для создания кольцевого эффекта
    plugins: {
      legend: {
        display: false, // Отключаем легенду по умолчанию
      },
      tooltip: {
        enabled: true,
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
      <h3>REQUEST SPLIT BY STATUS</h3>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ position: "relative", width: "200px" }}>
          <Doughnut data={data} options={options} />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            150
          </div>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ color: "#008000" }}>● New - 15%</li>
            <li style={{ color: "#ff0000" }}>● Rejected - 15%</li>
            <li style={{ color: "#0000ff" }}>● To approve prices - 25%</li>
            <li style={{ color: "#add8e6" }}>● Waiting for client - 15%</li>
            <li style={{ color: "#00008b" }}>● Client rejected - 5%</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Doughut;

