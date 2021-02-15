import React from "react";
import "./GamesCard.scss";
import * as nba from  "nba-api-client";
export default function Gamescard({
  homeTeam,
  visitorTeam,
  time,
  id,
  homeTeamScore,
  visitorTeamScore,
  status,
  homeLogo,
  visitorLogo,
}) {
  return (
    
    <div key={id} className='game'>
      <div>
        <img
          src={nba.getTeamLogoURLs(homeLogo)[1]}
          alt='TeamLogo'
          className='game__logo'
        />
        <h5>{homeTeam.full_name}</h5>
        <p>{homeTeamScore}</p>
      </div>
      <div>
        <h3>{status}</h3>
        <p>{time}</p>
      </div>
      <div>
        <img
          src={nba.getTeamLogoURLs(visitorLogo)[0]}
          alt='TeamLogo'
          className='game__logo'
        />
        <h5>{visitorTeam.full_name}</h5>
        <p>{visitorTeamScore}</p>
      </div>
    </div>
  );
}
