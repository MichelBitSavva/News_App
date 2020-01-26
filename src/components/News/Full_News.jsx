import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Comments from "./Comments";
import Preloader from "../Common/Preloader/Preloader";

let FullNews = props => {
    if (!props.currentNews) {
        return <Preloader/>;
    }

    return (
        <div>
            <div className="news">
                <div className="columns ">
                    <div className="column is-full">
                        <h2 className="title">{props.currentNews.title}</h2>
                    </div>
                </div>

                <div className="columns ">
                    <div className="column is-3">
                        <figure className="image is-200x400">
                            <img alt="" src={props.currentNews.img}/>
                        </figure>
                    </div>
                    <div className="column">{props.currentNews.content}</div>
                </div>
            </div>
            <Comments store={props.store}/>
        </div>
    );
};

export default FullNews;
