import { Component } from "react";
import axios from "axios";
import PlayerCard from "../PlayerCard/PlayerCard";

class SearchBar extends Component {
  state = {
    playerName: null,
    playerStats: [],
    playerTeam: [],
    playerGames: [],
    player: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.getPlayerId();
    console.log(this.state.playerName);
  };

  handleChange = (e) => {
    const replace = e.target.value.split(" ").join("_");
    if (replace.length > 0) {
      this.setState({ ...this.state, playerName: replace });
    }
  };

  getPlayerId = () => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`
      )
      .then((res) => {
        console.log(res.data.data[0]);
        console.log(res.data.data[0].team);
        if (res.data.data[0] === undefined) {
          alert("this player is unavalible or doesnt exist");
        } else if (res.data.data.length > 1) {
          alert("Please specify player name!");
        }

        this.getPlayerStats(res.data.data[0].id)
        this.getPlayerGames(res.data.data[0].id)
        this.setState({ ...this.state, playerTeam: res.data.data[0].team });
        this.setState({ ...this.state ,player: res.data.data[0] });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getPlayerGames = (playerId) => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/stats?seasons[]=2020&player_ids[]=${playerId}`
      )
      .then(async (res) => {
        this.setState({ playerGames: res.data.data });
        console.log(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getPlayerStats = (playerId) => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/season_averages?[]=2020&player_ids[]=${playerId}`
        
      )
      .then(async (res) => {
        console.log(res.data.data);
        this.setState({ playerStats: res.data.data[0] });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getPlayerId();
    this.getPlayerStats();
    this.getPlayerGames();
  }
  //    componentDidUpdate(){
  //  axios
  //    .get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`)

  //   .then((res) => {
  //     if (this.state.playerName !== this.state.playerStats[0].id) //if the ids dont match then the new id gets selected and that renders to the mainvideo component
  //       this.setState({ playerName: res.data.data });
  //   }); }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
              placeholder='please enter player name'
            />
          </label>
          <input type='submit' value='Submit' />
          <PlayerCard
            player={this.state.player}
            stats={this.state.playerStats}
            team={this.state.playerTeam}
            games={this.state.playerGames}
          ></PlayerCard>
        </form>
      </div>
    );
  }
}
export default SearchBar;
