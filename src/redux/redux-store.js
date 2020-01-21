import {combineReducers, createStore} from "redux";
import newsPageReducer from "./news_page_reducer";
import resultsPageReducer from "./result_page_reducer";
import homePageReducer from "./home_page_reducer";
import loginPageReducer from "./login_page_reducer";

let reducers = combineReducers({
    newsPage:newsPageReducer,
    resultsPage:resultsPageReducer,
    homePage:homePageReducer,
    loginPage:loginPageReducer
});

let store = createStore(reducers);

window.store = store;
export default store;