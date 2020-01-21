import React from "react";
import "./App.css";
import HeaderWraper from "./components/Header/Header_wraper";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";


let App = () => {
    return (
        <div className="App">
            <HeaderWraper />
            <Main />
            <Footer />
        </div>
    );
};

export default App;
