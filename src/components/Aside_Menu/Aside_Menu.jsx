import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as firebase from "firebase";
import { signOutUser } from "../../redux/login_page_reducer";
import {MdHome} from "react-icons/md";
import {IoMdFootball, IoMdLogIn} from "react-icons/io";
import {GiNewspaper} from "react-icons/gi";
import {AiOutlineProfile} from "react-icons/ai";

const AsideMenu = props => {
  let signOutUser = () => {
    props.signOutUser();
  };

  return (
    <aside className="menu ">
      <ul className="menu-list is-size-5-desktop	 has-text-centered has-text-weight-bold has-text-black-bis">
        <li>
          <NavLink activeClassName="nav" to="/">
            <MdHome/>  Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav" to="/LastRounds">
            <IoMdFootball/>  Results
          </NavLink>
        </li>
        <li>
          <NavLink to="/News">
            <GiNewspaper/>  News
          </NavLink>
        </li>
        <li>
          {props.user.auth === true ? (
            <NavLink to="/Profile"><AiOutlineProfile/> Profile</NavLink>
          ) : null}
        </li>
        <li>
          {props.user.auth === true ? (
            <button
              className="button"
              onClick={() =>
                firebase
                  .auth()
                  .signOut()
                  .then(function() {
                    // Sign-out successful.
                    signOutUser();
                    props.history.push("/");
                  })
                  .catch(function(error) {

                  })
              }
            >
              Logout
            </button>
          ) : (
            <NavLink to="/Login"><IoMdLogIn/> Login</NavLink>
          )}
        </li>
        <li>
          {props.user.auth === true ? (
            <p> Hello, {props.user.name}!</p>
          ) : (
            <p> Hello, guest! </p>
          )}
        </li>
      </ul>
    </aside>
  );
};

let mapStateToProps = state => {
  return {
    user: state.loginPage.user
  };
};

export default withRouter(connect(mapStateToProps, { signOutUser })(AsideMenu));
