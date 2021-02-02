import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Dropdown } from "react-dropdown";

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
      function formatDate(d)
 {
  empGames= new Date()
  var dd = empGames.getDate(); 
  var mm = empGames.getMonth()+1;
  var yyyy = empGames.getFullYear(); 
  if(dd<10){dd='0'+dd} 
  if(mm<10){mm='0'+mm};
  return d = dd+'/'+mm+'/'+yyyy
}
    
    setChartData({
      labels: empGames,
      datasets: [
        {
          label: "points",
          data: empPts,
          backgroundColor: ["rgba(75, 192 , 192, 0.7)"],
          borderWidth: 1,
          fill: false
        },

        {
          label: "ast",
          data: empAsts,
          backgroundColor: ["rgba(90, 19 , 192, 0.7)"],
          borderWidth: 1,
          fill: false
        },
        {
          label: "reb",
          data: empRebs,
          backgroundColor: ["red"],
          borderWidth: 1,
          fill: false
        },
      ],
    });
  }
  useEffect(() => {
    chart();
  }, [games]);
  console.log(chartData);
  return (
    <div>
      <Line
        data={chartData}
        height={200}
        width={50}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}

export default LineChart;
