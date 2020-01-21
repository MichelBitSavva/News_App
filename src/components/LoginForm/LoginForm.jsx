import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import "firebase/auth";

const LoginForm = props => {
  let userEmail = React.createRef();
  let userPassword = React.createRef();

  let updateLoginForm = () => {
    let loginText = userEmail.current.value;
    props.updateLoginForm(loginText);
  };

  let updatePasswordForm = () => {
    let passwordText = userPassword.current.value;
    props.updatePasswordForm(passwordText);
  };

  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <div className="field">
          <p className="control has-icons-left">
            <input
              onChange={updateLoginForm}
              ref={userEmail}
              className="input"
              type="email"
              value={props.login}
              placeholder="Email"
            />
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              onChange={updatePasswordForm}
              ref={userPassword}
              className="input"
              type="password"
              value={props.password}
              placeholder="Password"
            />
          </p>
        </div>
        <div className="field">
          <p className="control has-text-centered">
            <button
              onClick={props.loginFirebase}
              className="button is-medium is-success"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
