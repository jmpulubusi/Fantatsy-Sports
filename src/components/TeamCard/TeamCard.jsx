import React from "react";
import "./TeamCard.scss";
const TeamCard = ({
  playerName,

  playerPoints,
  playerAsts,
  playerRebs,
  playerBlks,
  playerStls,
  playerFtms,
  playerFgm2,
  playerTo,
  playerFgm3,
  playerFantasy,
  id,
  removePlayer,
}) => {
  return (
    <div className='team' id={id} key={id}>
      <h2>
        Player Name:
        <br></br>
        {playerName}
      </h2>
      Points: {playerPoints}
      Ast: {playerAsts}
      Reb: {playerRebs}
      Blk: {playerBlks}
      Stl: {playerStls}
      Ftm: {playerFtms}
      2pm: {playerFgm2}
      3pm: {playerFgm3}
      Turnovers: {playerTo}
      Fpts: {playerFantasy}
      <button onClick={() => removePlayer(id)}>Delete</button>
    </div>
  );
};

export default TeamCard;
