import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
//Это  заглушка, так как API с ограниченным количеством вызовов
// let Home = props => {
//   return (
//     <table className="table is-bordered is-striped is-narrow is-fullwidth">
//       <thead>
//         <tr>
//           <th>Rank</th>
//           <th>Team Name</th>
//           <th>
//             Match
//             <br /> Played
//           </th>
//           <th>Win</th>
//           <th>Draw</th>
//           <th>Lose</th>
//           <th>GF</th>
//           <th>GA</th>
//           <th>Points</th>
//         </tr>
//       </thead>
//     </table>
//   );
// };

let Home = props => {
  return (
    <table className="table is-bordered is-striped is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Team Name</th>
          <th>
            Match
            <br /> Played
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
        {props.teams.map(team => (
          <tr key ={team.id}>
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
        ))}
      </tbody>
    </table>
  );
};

export default Home;
