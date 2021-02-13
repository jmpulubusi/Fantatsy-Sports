import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

function LineChart({ games }) {
  const [chartData, setChartData] = useState();

  function chart() {
    let empPts = [];
    let empGames = [];
    let empAsts = [];
    let empRebs = [];
    for (const dataObj of games) {
      empPts.push(parseInt(dataObj.pts));
      empGames.push(parseInt(dataObj.game.date));
      empAsts.push(parseInt(dataObj.ast));
      empRebs.push(parseInt(dataObj.reb));
    }

    setChartData({
      labels: empGames,
      datasets: [
        {
          label: "Points",
          data: empPts,
          backgroundColor: ["rgba(75, 192 , 192, 0.7)"],
          borderWidth: 1,
          fill: false,
          borderColor: ["rgba(75, 192 , 192, 0.7)"],
        },

        {
          label: "Ast",
          data: empAsts,

          borderWidth: 1,
          fill: false,
          borderColor: ["rgba(90, 19 , 192, 0.7)"],
        },
        {
          label: "Reb",
          data: empRebs,

          borderWidth: 1,
          fill: false,
          borderColor: ["rgba(93, 100 , 180, 0.7)"],
        },
      ],
    });
  }
  useEffect(() => {
    chart();
  }, [games]);

  return (
    <div>
      <h2>Per Game</h2>
      <Line
        data={chartData}
        height={100}
        width={50}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}

export default LineChart;
