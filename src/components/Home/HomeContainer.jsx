import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import {connect} from "react-redux";
import {
    clearTeams, setTeams, toggleIsFetching,
} from "../../redux/home_page_reducer";
import Home from "./Home";
import Preloader from "../Common/Preloader/Preloader";
import {getHomePageData} from "../../API/api";

class HomeContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        getHomePageData()
            .then(data => {
                this.props.toggleIsFetching(false);
                console.log(data);
                this.props.setTeams(data.api.standings[0]);
            })
            .catch(error => {
                console.log(error);
            });
    }
    componentWillUnmount() {
        this.props.clearTeams()
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



export default connect(mapStateToProps, {setTeams, toggleIsFetching, clearTeams} )(HomeContainer);
