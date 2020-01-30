import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";


const Home = props => {
    const tableElement = props.teams.map(team => (
        <tr key={team.team_id}>
            <td>{team.rank}</td>
            <td>{team.teamName}</td>
            <td>{team.all.matchsPlayed}</td>
            <td>{team.all.win}</td>
            <td>{team.all.draw}</td>
            <td>{team.all.lose}</td>
            <td>{team.all.goalsFor}</td>
            <td>{team.all.goalsAgainst}</td>
            <td>{team.points}</td>
        </tr>
    ));
    return (
        <table className="table is-bordered is-striped is-narrow is-fullwidth">
            <thead>
            <tr>
                <th>Rank</th>
                <th>Team Name</th>
                <th>
                    Match
                    <br/> Played
                </th>
                <th>Win</th>
                <th>Draw</th>
                <th>Lose</th>
                <th>GF</th>
                <th>GA</th>
                <th>Points</th>
            </tr>
            </thead>
            <tbody>
            {tableElement}
            </tbody>
        </table>
    );
};

export default Home;
