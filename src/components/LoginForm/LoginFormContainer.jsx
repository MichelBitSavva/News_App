import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import * as firebase from "firebase/app";
import firebaseConfig from "../../firebase.config";
import "firebase/auth";
import {connect} from "react-redux";
import {
    loginFirebaseThunkCreator,
    updateLoginForm,
    updatePasswordForm,
    updateUser
} from "../../redux/login_page_reducer";
import LoginForm from "./LoginForm";
import {withRouter} from "react-router-dom";
import Preloader from "../Common/Preloader/Preloader";
import {toggleIsFetching} from "../../redux/home_page_reducer";

class LoginFormContainer extends React.Component {
    componentDidMount() {
        !firebase.apps.length
            ? firebase.initializeApp(firebaseConfig)
            : firebase.app();
    }

    loginFirebase = e => {
        e.preventDefault();
        this.props.loginFirebaseThunkCreator(this.props.login, this.props.password);
        this.props.history.push("/");

    };



    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <Preloader/>
                ) : (
                    <LoginForm
                        login={this.props.login}
                        password={this.props.password}
                        updateLoginForm={this.props.updateLoginForm}
                        updatePasswordForm={this.props.updatePasswordForm}
                        updateUser={this.props.updateUser}
                        history={this.props.history}
                        loginFirebase={this.loginFirebase}
                    />
                )}
            </>
        );
    }
}

let mapStateToProps = state => {
    return {
        login: state.loginPage.login,
        password: state.loginPage.password,
        isFetching: state.homePage.isFetching
    };
};

let LoginFormContain = connect(mapStateToProps, {
    toggleIsFetching,
    updateLoginForm,
    updatePasswordForm,
    updateUser,
    loginFirebaseThunkCreator
})(LoginFormContainer);

export default withRouter(LoginFormContain);
