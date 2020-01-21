import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setNewsIdActionCreator } from "../../redux/news_page_reducer";

let Preview = props => {
  return props.news.map(n => (
    <div key={n.id} className={"news"}>
      <div className="box">
        <h2 className="title is-4">
          <NavLink
            onClick={() => {
              props.setNewsId(n.id);
            }}
            className={"newsHref"}
            to="/News/FullNews"
          >
            {n.title}
          </NavLink>
        </h2>
        <p>{n.subtitle} </p>
      </div>
    </div>
  ));
};

let mapStateToProps = state => {
  return {
    news: state.newsPage.news
  };
};

let mapDispatchToProps = dispatch => {
  return {
    setNewsId: id => {
      dispatch(setNewsIdActionCreator(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
