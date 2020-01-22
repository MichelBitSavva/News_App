import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import {connect} from "react-redux";
import FullNews from "./Full_News";

let mapStateToProps = state => {
    return {
        news: state.newsPage.news,
        newsId: state.newsPage.newsId
    };
};

const FullNewsContainer = connect(mapStateToProps)(FullNews);

export default FullNewsContainer;
