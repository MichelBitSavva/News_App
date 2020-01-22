import React, {Component} from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import RoundResults from "./Subtitle_Res";
import TitleResult from "./Title_Res";
import {connect} from "react-redux";


class LastRounds extends Component {
    render() {
        return (
            <div className="container general">
                <TitleResult/>
                <RoundResults rounds={this.props.rounds}
                />
            </div>
        );
    }
}


let mapStateToProps = state => {
    return {
        rounds: state.resultsPage.rounds
    };
};

export default connect(mapStateToProps)(LastRounds);
