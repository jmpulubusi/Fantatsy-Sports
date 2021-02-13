import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import GamesCard from "../components/GamesCard/GamesCard";

const API = "https://www.balldontlie.io/api/v1/games?dates[]=";
const currentDate = moment().format("YYYY-MM-DD");
const Games = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(currentDate);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API}${date}`)
      .then((res) => {
        setGames(res.data.data);
        console.log(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [date]);
  function nextDate() {
    axios
      .get(`${API}${date}`)
      .then(() => {
        setDate((prevDate) =>
          moment(prevDate).add(1, "d").format("YYYY-MM-DD")
        );
        setLoading(false);
        console.log(date);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function lastDate() {
    axios
      .get(`${API}${date}`)
      .then(() => {
        setDate((prevDate) =>
          moment(prevDate).subtract(1, "d").format("YYYY-MM-DD")
        );
        setLoading(false);
        console.log(date);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <h1>Games</h1>
      <button onClick={nextDate}>+</button>
      <button onClick={lastDate}>-</button>
      {loading && <p>Loading...</p>}
      {!loading &&
        games.map((content) => (
          <GamesCard
            key={content.id}
            homeTeam={content.home_team}
            homeTeamScore={content.home_team_score}
            visitorTeamScore={content.visitor_team_score}
            visitorTeam={content.visitor_team}
            status={content.status}
            time={content.time}
            id={content.id}
          ></GamesCard>
        ))}
    </div>
  );
};

export default Games;
