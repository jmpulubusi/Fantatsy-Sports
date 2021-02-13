import React from "react";

import Table from "react-bootstrap/Table";
import "./StatTable.scss";

const StatTable = ({ stats }) => {
  return (
    <div>
      <Table className=' '>
        <thead>
          <tr>
            <th scope='col'>Season</th>
            <th scope='col'>GP</th>
            <th scope='col'>Min</th>
            <th scope='col'>FGM</th>
            <th scope='col'>FGA</th>
            <th scope='col'>Fg3m</th>
            <th scope='col'>Fg3a</th>
            <th scope='col'>Ftm</th>
            <th scope='col'>Fta</th>
            <th scope='col'>Oreb</th>
            <th scope='col'>Dreb</th>
            <th scope='col'>Reb</th>
            <th scope='col'>Ast</th>
            <th scope='col'>Stl</th>
            <th scope='col'>Blk</th>
            <th scope='col'>TO</th>
            <th scope='col'>Pf</th>
            <th scope='col'>Pts</th>
            <th scope='col'>FG%</th>
            <th scope='col'>FG3%</th>
            <th scope='col'>Ft%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>{stats.season}</th>
            <th scope='row'>{stats.games_played}</th>
            <th scope='row'>{stats.min}</th>
            <th scope='col'>{stats.fgm}</th>
            <th scope='col'>{stats.fga}</th>
            <th scope='col'>{stats.fg3m}</th>
            <th scope='col'>{stats.fg3a}</th>
            <th scope='col'>{stats.ftm}</th>
            <th scope='col'>{stats.fta}</th>
            <th scope='col'>{stats.oreb}</th>
            <th scope='col'>{stats.dreb}</th>
            <th scope='col'>{stats.reb}</th>
            <th scope='col'>{stats.ast}</th>
            <th scope='col'>{stats.stl}</th>
            <th scope='col'>{stats.blk}</th>
            <th scope='col'>{stats.turnover}</th>
            <th scope='col'>{stats.pf}</th>
            <th scope='col'>{stats.pts}</th>
            <th scope='col'>{Math.round(stats.fg_pct * 100)}</th>
            <th scope='col'>{Math.round(stats.fg3_pct * 100)}</th>
            <th scope='col'>{Math.round(stats.ft_pct * 100)}</th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default StatTable;
