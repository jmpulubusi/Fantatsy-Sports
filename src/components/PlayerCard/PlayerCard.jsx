import React from "react";
import StatTable from '../StatTable/StatTable'
import LineChart from "../LineChart/LineChart";
function PlayerCard({ player, stats, team, games}) {
  return (
    <div>
      <h1>
        Player Name: {player.first_name} {player.last_name} 
      </h1>
      <br></br>
      HT: {player.height_feet}' {player.height_inches}"
      <br></br>
      WT: {player.weight_pounds}
      <br></br>
      Team: {team.full_name}
      <br></br>
     Position: {player.position}
      <br></br>
      <StatTable
      stats={stats}
      ></StatTable>
      <LineChart
      games={games}
      player={player}
      >
      
      </LineChart>
      <br></br>
    </div>
  );
}

export default PlayerCard;
