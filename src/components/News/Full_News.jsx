import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Comments from "./Comments";

let FullNews = props => {
    let currentNews = props.news.find(n => n.id === props.newsId);

    return (
        <div>
            <div className="news">
                <div className="columns ">
                    <div className="column is-full">
                        <h2 className="title">{currentNews.title}</h2>
                    </div>
                </div>

                <div className="columns ">
                    <div className="column is-3">
                        <figure className="image is-200x400">
                            <img alt="" src={currentNews.img}/>
                        </figure>
                    </div>
                    <div className="column">{currentNews.content}</div>
                </div>
            </div>
            <Comments store={props.store}/>
        </div>
    );
};

export default FullNews;
