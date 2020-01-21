import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { connect } from "react-redux";

const TitleResult = props => {
  return <h2 className="title">{props.name}</h2>;
};

let mapStateToProps = state => {
  return {
    name: state.resultsPage.name
  };
};

export default connect(mapStateToProps)(TitleResult);
