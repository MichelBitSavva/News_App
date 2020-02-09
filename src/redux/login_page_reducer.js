import {getHomePageData} from "../API/api";
import {setTeams, toggleIsFetching} from "./home_page_reducer";
import * as firebase from "firebase";

const UPDATE_LOGIN_FORM = "UPDATE_LOGIN_FORM";
const UPDATE_PASSWORD_FORM = "UPDATE_PASSWORD_FORM";
const UPDATE_USER = "UPDATE_USER";
const SIGN_OUT_USER = "SIGN_OUT_USER";

let initialState = {
    user: {name: "guest", auth: false},
    login: "",
    password: ""
};

const loginPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LOGIN_FORM: {
            return {
                ...state,
                login: action.loginText
            };
        }
        case UPDATE_PASSWORD_FORM: {
            return {
                ...state,
                password: action.passwordText
            };
        }
        case UPDATE_USER: {
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.login,
                    auth: true
                },
                login: "",
                password: ""
            };
        }
        case SIGN_OUT_USER: {
            return {
                ...state,
                user: {
                    ...state.user,
                    auth: false
                }
            };
        }

        default:
            return state;
    }
};

export const updateLoginForm = loginText => ({
    type: UPDATE_LOGIN_FORM,
    loginText: loginText
});
export const updatePasswordForm = passwordText => ({
    type: UPDATE_PASSWORD_FORM,
    passwordText: passwordText
});
export const updateUser= login => ({
    type: UPDATE_USER,
    login: login
});
export const signOutUser = () => ({
    type: SIGN_OUT_USER
});

export const loginFirebaseThunkCreator = (email, password) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res);

                if (res.user) {
                    dispatch(toggleIsFetching(false));
                    dispatch(updateUser(email));
                }
            })
            .catch(error => {
                dispatch(toggleIsFetching(false));
                let errorMessage = error.message;
                alert(errorMessage);
            });
    }
};

export default loginPageReducer;
