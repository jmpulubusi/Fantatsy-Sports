import React from "react";
import "./GamesCard.scss";
export default function Gamescard({
  homeTeam,
  visitorTeam,
  time,
  id,
  homeTeamScore,
  visitorTeamScore,
  status,
}) {
  return (
    <div key={id} className='games'>
      <div>
        <h5>{homeTeam.full_name}</h5>
        <p>{homeTeamScore}</p>
      </div>
      <div>
        <h3>{status}</h3>
        <p>{time}</p>
      </div>
      <div>
        <h5>{visitorTeam.full_name}</h5>
        <p>{visitorTeamScore}</p>
      </div>
    </div>
  );
}
