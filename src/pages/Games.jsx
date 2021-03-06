import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import GamesCard from "../components/GamesCard/GamesCard";
import Calander from "../components/Calander/Calander";
import Dropdown from "react-bootstrap/Dropdown";

import "./Games.scss";

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

  function selectDate(value) {
    axios
      .get(`${API}${date}`)
      .then(async () => {
        setDate(value);
        setLoading(false);
        console.log(value);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <h1 className='games'>Games</h1>

      <div className='games__nav'>
        <Dropdown>
          <Dropdown.Toggle variant='success' id='dropdown-basic'>
            Calendar
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Calander date={date} select={selectDate} />
          </Dropdown.Menu>
        </Dropdown>
        <button onClick={lastDate}>-</button>
        <h3>{moment(date).format("MMMM Do YYYY")}</h3>
        <button onClick={nextDate}>+</button>
      </div>

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
            homeLogo={content.home_team.abbreviation}
            visitorLogo={content.visitor_team.abbreviation}
            id={content.id}
          ></GamesCard>
        ))}
    </div>
  );
};

export default Games;
