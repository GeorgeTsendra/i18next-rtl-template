const express = require("express");
const app = express();
const PORT = 5001;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/invoices", (req, res) => {
  const data = [
    {
      id: "#AHGA68",
      customer_name: "Jacob Marcus",
      date: "23/09/2022",
      total_amount: "$100",
      payable_amount: "$50",
      due: "$50",
    },
    {
      id: "#AHGA69",
      customer_name: "Jacob Marcus",
      date: "23/09/2022",
      total_amount: "$100",
      payable_amount: "$50",
      due: "$50",
    },
    {
      id: "#AHGA70",
      customer_name: "Jacob Marcus",
      date: "23/09/2022",
      total_amount: "$100",
      payable_amount: "$50",
      due: "$50",
    },
    {
      id: "#AHGA71",
      customer_name: "Jacob Marcus",
      date: "23/09/2022",
      total_amount: "$100",
      payable_amount: "$50",
      due: "$50",
    },
    {
      id: "#AHGA72",
      customer_name: "Jacob Marcus",
      date: "23/09/2022",
      total_amount: "$100",
      payable_amount: "$50",
      due: "$50",
    },
    {
      id: "#AHGA73",
      customer_name: "Jacob Marcus",
      date: "23/09/2022",
      total_amount: "$100",
      payable_amount: "$50",
      due: "$50",
    },
    {
      id: "#AHGA74",
      customer_name: "Jacob Marcus",
      date: "23/09/2022",
      total_amount: "$100",
      payable_amount: "$50",
      due: "$50",
    },
  ];
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
