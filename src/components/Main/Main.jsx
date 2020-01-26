import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import AsideMenu from "../Aside_Menu/Aside_Menu";
import LastRounds from "../Result/Last_Rounds";
import News from "../News/News";
import Profile from "../Profile/Profile";
import {Route} from "react-router-dom";
import HomeContainer from "../Home/HomeContainer";
import LoginFormContain from "../LoginForm/LoginFormContainer";
import FullNewsContainer from "../News/Full_News_Container";

const Main = () => {
    return (
        <div className="columns is-gapless main-column">
            <div className="column  has-background-primary is-2">
                <AsideMenu/>
            </div>

            <div className="column">
                <Route path="/" exact render={() => <HomeContainer/>}/>
                <Route path="/LastRounds" render={() => <LastRounds/>}/>
                <Route path="/News" exact render={() => <News/>}/>
                <Route path="/News/FullNews/:newsId" render={() => <FullNewsContainer/>}/>
                <Route path="/Profile" render={() => <Profile/>}/>
                <Route path="/Login" render={() => <LoginFormContain/>}/>
            </div>
        </div>
    );
};

export default Main;
