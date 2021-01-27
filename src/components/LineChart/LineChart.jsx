import React from 'react'
import { Line } from 'react-chartjs-2'

function LineChart({games, player}) {
  console.log(games)
  return (
    
    <div>
 <Line 
 data={{
   labels: [(player.first_name + '' + player.last_name)],
   datasets: [{
     data: games.map((pts) => {
      pts=pts.pts
    }),
   }]
   
 
 }}
 height={400}
 width={600}
 options={{
   maintainAspectRatio: false
 }}
 />
    </div>
  );
}

export default LineChart;