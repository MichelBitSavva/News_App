import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import {connect} from "react-redux";
import FullNews from "./Full_News";


class FullNewsContainer extends React.Component {

    render() {
        return <FullNews news={this.props.news}
                         newsId={this.props.newsId}
        />;
    }
}

let mapStateToProps = state => {
    return {
        news: state.newsPage.news,
        newsId: state.newsPage.newsId
    };
};


export default connect(mapStateToProps)(FullNewsContainer);






