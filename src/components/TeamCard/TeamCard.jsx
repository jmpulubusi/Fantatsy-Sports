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
        Player Name
        <br></br>
        {playerName}
      </h2>
      <p>
        Points<br></br> {playerPoints}
      </p>
      <p>
        {" "}
        Ast <br></br>
        {playerAsts}
      </p>
      <p>
        {" "}
        Reb<br></br> {playerRebs}
      </p>
      <p>
        Blk<br></br> {playerBlks}
      </p>
      <p>
        {" "}
        Stl <br></br>
        {playerStls}
      </p>
      <p>
        {" "}
        Ftm <br></br>
        {playerFtms}
      </p>
      <p>
        2pm<br></br> {playerFgm2}
      </p>
      <p>
        3pm<br></br>
        {playerFgm3}
      </p>
      <p>
        Turnovers<br></br> {playerTo}
      </p>
      <p className='team__fantasy'>
        {" "}
        Fpts<br></br> {playerFantasy}
      </p>
      <button onClick={() => removePlayer(id)}>Delete</button>
    </div>
  );
};

export default TeamCard;
