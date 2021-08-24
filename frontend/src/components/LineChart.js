import React from "react";
import { Line } from "react-chartjs-2";

export default function LineChart({ contacts }) {
  let trade = [];
  let high = [];
  let low = [];
  let open = [];
  let close = [];
  contacts?.map((r) => {
    return (
      trade.push(r.trade_code),
      high.push(r.high),
      low.push(r.low),
      open.push(r.open),
      close.push(r.close)
    );
  });
  console.log(trade);
  const data = {
    labels: trade,
    datasets: [
      {
        label: "High Dataset",
        data: high,
        borderColor: ["rgba(255, 206, 86, 02)"],
        pointBorderColor: ["rgba(255, 206, 86, 02)"],
        backgroundColor: ["rgba(255, 206, 86, 02)"],
        pointBackgroundColor: ["rgba(255, 206, 86, 02)"],
      },
      {
        label: "Low Dataset",
        data: low,
        borderColor: ["rgb(237, 28, 0)"],
        pointBorderColor: ["rgb(237, 28, 0)"],
        backgroundColor: ["rgb(237, 28, 0)"],
        pointBackgroundColor: ["rgb(237, 28, 0)"],
      },
      {
        label: "Open Dataset",
        data: open,
        borderColor: ["rgb(35, 99, 21)"],
        pointBorderColor: ["rgb(35, 99, 21)"],
        backgroundColor: ["rgb(35, 99, 21)"],
        pointBackgroundColor: ["rgb(35, 99, 21)"],
      },
      {
        label: "Close Dataset",
        data: close,
        borderColor: ["rgb(28, 119, 138)"],
        pointBorderColor: ["rgb(28, 119, 138)"],
        backgroundColor: ["rgb(28, 119, 138)"],
        pointBackgroundColor: ["rgb(28, 119, 138)"],
      },
    ],
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Line Chart</h1>
      <div className="Chart">
        <Line data={data} />
      </div>
    </div>
  );
}
