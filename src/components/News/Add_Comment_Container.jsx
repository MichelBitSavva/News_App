import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import {
  addCommentsActionCreator,
  updateTextActionCreator
} from "../../redux/news_page_reducer";
import AddComment from "./Add_Comment";
import {connect} from "react-redux";


let mapStateToProps = state => {
  return {
    newCommentText: state.newsPage.newCommentText
  };
};
let mapDispatchToProps = dispatch => {
  return {
    addComments: () => {
      dispatch(addCommentsActionCreator());
    },
    updateText: (com) => {
      dispatch(updateTextActionCreator(com));
    }
  };
};

const AddCommentContainer = connect(mapStateToProps,mapDispatchToProps)(AddComment);

export default AddCommentContainer;
