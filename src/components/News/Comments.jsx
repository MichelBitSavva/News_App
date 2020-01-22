import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Comment from "./Comment";
import AddCommentContainer from "./Add_Comment_Container";

const Comments = props => {
    return (
        <div className="comments">
            <div className="columns">
                <div className="column is-full ">
                    <h3 className="subtitle">
                        <strong>Your comments: </strong>
                    </h3>
                </div>
            </div>
            <Comment/>
            <AddCommentContainer/>
        </div>
    );
};
export default Comments;
