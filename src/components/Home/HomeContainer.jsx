import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import {connect} from "react-redux";
import { setTeams, toggleIsFetching,
} from "../../redux/home_page_reducer";
import Home from "./Home";
import * as axios from "axios";
import Preloader from "../Common/Preloader/Preloader";

class HomeContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
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
                this.props.toggleIsFetching(false);
                console.log(response);
                this.props.setTeams(response.data.api.standings[0]);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Home teams={this.props.teams}/>}

        </>
    }
}

let mapStateToProps = state => {
    return {
        teams: state.homePage.teams,
        isFetching: state.homePage.isFetching
    };
};



export default connect(mapStateToProps, {setTeams, toggleIsFetching} )(HomeContainer);
