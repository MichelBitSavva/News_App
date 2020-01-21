import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Provider from "react-redux/es/components/Provider";



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
