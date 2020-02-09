import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import {connect} from "react-redux";
import {
    clearTeams, setTeamsThunkCreator,
} from "../../redux/home_page_reducer";
import Home from "./Home";
import Preloader from "../Common/Preloader/Preloader";

class HomeContainer extends React.Component {
    componentDidMount() {
        this.props.setTeamsThunkCreator();
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



export default connect(mapStateToProps,
    {setTeamsThunkCreator, clearTeams} )(HomeContainer);
