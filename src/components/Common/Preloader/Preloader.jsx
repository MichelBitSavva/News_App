import React from "react";
import loader from "../../../assets/images/loader.svg";


let Preloader = () => {
    return (
        <div className="preloader">
            <img src={loader} alt="preloader"/>
        </div>
    );
};

export default Preloader;