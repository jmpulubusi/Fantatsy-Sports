import React, { useState } from "react";
import StatTable from "../StatTable/StatTable";
import LineChart from "../LineChart/LineChart";
import TeamCard from "../TeamCard/TeamCard.jsx";

import "./PlayerCard.scss";


function PlayerCard({ stats, team, games, player }) {
  const totalPoints = games.reduce(function (tot, arr) {
    return tot + arr.pts;
  }, 0);
  const totalAsts = games.reduce(function (tot, arr) {
    return tot + arr.ast;
  }, 0);

  const totalRebs = games.reduce(function (tot, arr) {
    return tot + arr.reb;
  }, 0);
  const totalBlks = games.reduce(function (tot, arr) {
    return tot + arr.blk;
  }, 0);
  const totalStls = games.reduce(function (tot, arr) {
    return tot + arr.stl;
  }, 0);
  const totalFtms = games.reduce(function (tot, arr) {
    return tot + arr.ftm;
  }, 0);
  const totalFgm2 = games.reduce(function (tot, arr) {
    return tot + arr.fgm - arr.fg3m;
  }, 0);
  const totalFgm3 = games.reduce(function (tot, arr) {
    return tot + arr.fg3m;
  }, 0);

  const totalTo = games.reduce(function (tot, arr) {
    return tot + arr.turnover;
  }, 0);

  const fantasyTotal =
    totalFgm3 * 3 +
    totalFgm2 * 2 +
    totalFtms * 1 +
    totalRebs * 1.2 +
    totalAsts * 1.5 +
    totalBlks * 2 +
    totalStls * 2 -
    totalTo;

  const [playerCard, setPlayerCard] = useState([]);
 
  const addPlayer = () => {
    setPlayerCard([
      ...playerCard,
      {
        key: player.id,
        id: player.id,
        playerName: player.first_name + " " + player.last_name,
        playerPoints: totalPoints,
        playerAsts: totalAsts,
        playerRebs: totalRebs,
        playerBlks: totalBlks,
        playerStls: totalStls,
        playerFtm: totalFtms,
        playerFgm2: totalFgm2,
        playerTo: totalTo,
        playerFgm3: totalFgm3,
        playerFantasy: fantasyTotal,
      },
    ]);
  };
  const removePlayer = id => {
    const removedArr = [...playerCard].filter(player => player.id !== id);

    setPlayerCard(removedArr);
  };
  return (
    <div className='player'>
      <div>
        <h1>
          Player Name: <br></br>
          {player.first_name} {player.last_name}
        </h1>
        <br></br>
        HT: {player.height_feet}' {player.height_inches}"<br></br>
        WT: {player.weight_pounds}
        <br></br>
        Team: {team.full_name}
        <br></br>
        Position: {player.position}
        <br></br>
        <button onClick={addPlayer}>Add Player</button>
      </div>

      <StatTable stats={stats} player={player} games={games}></StatTable>
      <LineChart games={games} player={player}></LineChart>

      {playerCard.map((card) => (
        <TeamCard
          id={card.id}
          key={card.id}
          playerName={card.playerName}
          removePlayer={removePlayer}
          playerPoints={card.playerPoints}
          playerAsts={card.playerAsts}
          playerRebs={card.playerRebs}
          playerBlks={card.playerBlks}
          playerStls={card.playerStls}
          playerFtms={card.playerFtm}
          playerFgm2={card.playerFgm2}
          playerFgm3={card.playerFgm3}
          playerTo={card.playerTo}
          playerFantasy={card.playerFantasy}
          
        ></TeamCard>
      ))}
    </div>
  );
}

export default PlayerCard;
