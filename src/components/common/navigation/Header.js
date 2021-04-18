import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { FaMicroscope, FaClipboardList, FaUser } from "react-icons/fa";
import PropTypes from "prop-types";

import * as AuthService from "../../../auth/Auth";
import * as authActions from "../../../redux/actions/authActions";

class Header extends Component {
  handleLoginClick = () => {
    AuthService.login();
    this.props.loginRequest();
  };

  handleLogoutClick = () => {
    this.props.logoutSuccess();
    AuthService.logout(); // careful, this is a static method
  };

  render = () => {
    const { auth } = this.props;

    const profile = AuthService.getProfile();

    const profileButton = (
      <NavLink to="/profile" activeClassName="active">
        <span className="navLogo">
          <FaUser />
        </span>
        <span className="navTitle">{profile.name}</span>
      </NavLink>
    );

    const loginButton = (
      <a onClick={this.handleLoginClick}>
        <span className="navLogo">
          <FaUser />
        </span>
        <span className="navTitle">Login</span>
      </a>
    );

    const logoutButton = (
      <a onClick={this.handleLogoutClick}>
        <span className="navLogo">
          <FaUser />
        </span>
        <span className="navTitle">LogOut</span>
      </a>
    );

    return (
      <header>
        <nav>
          {auth.isAuthenticated ? profileButton : loginButton}
          <NavLink to="/devices" activeClassName="active">
            <span className="navLogo">
              <FaMicroscope />
            </span>
            <span className="navTitle">Devices</span>
          </NavLink>
          <NavLink to="/sops" activeClassName="active">
            <span className="navLogo">
              <FaClipboardList />
            </span>
            <span className="navTitle">Sops</span>
          </NavLink>

          {auth.isAuthenticated ? logoutButton : null}
        </nav>
      </header>
    );
  };
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (profile) => dispatch(authActions.loginRequest(profile)),
  logoutSuccess: (profile) => dispatch(authActions.logoutSucces(profile)),
});

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  loginRequest: PropTypes.func.isRequired,
  logoutSuccess: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
