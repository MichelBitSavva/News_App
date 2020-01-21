import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { connect } from "react-redux";
import { addSetStateActionCreator } from "../../redux/home_page_reducer";
import Home from "./Home";
import * as axios from "axios";

class HomeContainer extends React.Component {
  componentDidMount() {
    axios({
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v2/leagueTable/8",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "d345025205msh37e4267543ffcaap1ae228jsnd488f984db22"
      }
    })
      .then(response => {
          console.log(response);
        this.props.setTeams(response.data.api.standings[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return <Home  teams={this.props.teams} />;
  }
}

let mapStateToProps = state => {
  return {
    teams: state.homePage.teams
  };
};
let mapDispatchToProps = dispatch => {
  return {
    setTeams: teams => {
      dispatch(addSetStateActionCreator(teams));
    }
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
