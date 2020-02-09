import {applyMiddleware, combineReducers, createStore} from "redux";
import newsPageReducer from "./news_page_reducer";
import resultsPageReducer from "./result_page_reducer";
import homePageReducer from "./home_page_reducer";
import loginPageReducer from "./login_page_reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    newsPage: newsPageReducer,
    resultsPage: resultsPageReducer,
    homePage: homePageReducer,
    loginPage: loginPageReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;