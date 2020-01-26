import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { connect } from "react-redux";
import FullNews from "./Full_News";
import { withRouter } from "react-router-dom";
import { setCurrentNews } from "../../redux/news_page_reducer";

class FullNewsContainer extends React.Component {
  componentDidMount() {
    let newsId = +this.props.match.params.newsId;
    let currentNews = this.props.news.find(n => n.id === newsId);
    this.props.setCurrentNews(currentNews);
  }

  render() {
    return <FullNews {...this.props} currentNews={this.props.currentNews} />;
  }
}

let mapStateToProps = state => {
  return {
    news: state.newsPage.news,
    currentNews: state.newsPage.currentNews
  };
};

export default connect(mapStateToProps, { setCurrentNews })(
  withRouter(FullNewsContainer)
);
