import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

let Preview = props => {
    return props.news.map(n => (
        <div key={n.id} className={"news"}>
            <div className="box">
                <h2 className="title is-4">
                    <NavLink
                        className={"newsHref"}
                        to={"/News/FullNews/" + n.id}
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


export default connect(mapStateToProps)(Preview);
