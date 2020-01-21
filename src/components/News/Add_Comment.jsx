import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";



const AddComment = props => {

  let commentText = React.createRef();

  let addComment = () => {
    props.addComments();
  };

  let onChangeComment = () => {
    let com = commentText.current.value;
    props.updateText(com)
  };

  return (
    <article className="media">
      <div className="media-content">
        <div className="field">
          <p className="control">
            <textarea
              onChange={onChangeComment}
              ref={commentText}
              className="textarea"
              value={props.newCommentText}
              placeholder="Add a comment..."
            />
          </p>
        </div>
        <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <button onClick={addComment} className="button is-info">
                Submit
              </button>
            </div>
          </div>
        </nav>
      </div>
    </article>
  );
};
export default AddComment;
