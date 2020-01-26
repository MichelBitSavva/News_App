import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import {
    addComments, updateText,
} from "../../redux/news_page_reducer";
import AddComment from "./Add_Comment";
import {connect} from "react-redux";


let mapStateToProps = state => {
    return {
        newCommentText: state.newsPage.newCommentText
    };
};


const AddCommentContainer = connect(mapStateToProps, {addComments, updateText})(AddComment);

export default AddCommentContainer;
