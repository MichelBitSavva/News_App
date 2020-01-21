import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import {connect} from "react-redux";

const Comment = props => {
  return props.comments.map(c => (
    <article className="media">
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{c.name}</strong>
            <br />
            {c.message}
          </p>
        </div>
      </div>
      <hr />
    </article>
  ));
};

let mapStateToProps = state => {
    return {
        comments: state.newsPage.comments
    };
};

export default connect(mapStateToProps)(Comment);
