import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";


const RoundResults = props => {
    return props.rounds.map(round => (
        <table className="table is-bordered is-striped is-narrow is-fullwidth" key={round.id}>
            <thead>
            <tr className="roundName">
                <th>{round.name}</th>
            </tr>
            <tr>
                <th>Date</th>
                <th>Teams</th>
                <th>Score</th>
            </tr>
            </thead>
            <tbody>
            {round.matches.map(match => (
                <tr key={match.id}>

                    <td>{match.date}</td>
                    <td>{match.team1.name + " - " + match.team2.name}</td>
                    <td>{match.score1 + " - " + match.score2}</td>
                </tr>
            ))}
            </tbody>
        </table>
    ));
};

export default RoundResults;
