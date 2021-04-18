import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/navigation/Header";
import PageNotFound from "./PageNotFound";
import DevicesPage from "./devices/DevicesPage";
import PropTypes from "prop-types";
import "../style/index.css";
import "../style/nav.css";

import SopsPage from "./sops/SopsPage";

import EditDevice from "./device/EditDevicePage";
import EditSop from "./sop/EditSopPage";
import DeviceSop from "./device/DeviceSopPage";
import DeviceCode from "./device/DeviceCode";
import SopDetailPage from "./sop/SopDetailPage";

import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import PrivateRoute from "./common/navigation/PrivateRoute";

import { connect } from "react-redux";

import * as AuthService from "../auth/Auth";
import * as authActions from "../redux/actions/authActions";

class App extends Component {
  componentDidMount() {
    const { loginError, loginSuccess } = this.props;

    AuthService.lock.on("authenticated", (authResult) => {
      AuthService.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          return loginError(error);
        }
        AuthService.setToken(authResult.idToken); // static method
        AuthService.setProfile(profile); // static method
        loginSuccess(profile);
        AuthService.lock.hide();
      });
    });

    AuthService.lock.on("authorization_error", (error) => {
      loginError(error);
    });
  }

  render = () => {
    return (
      <>
        <Header />

        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />

            <PrivateRoute path="/devices/:slug/edit" component={EditDevice} />
            <PrivateRoute path="/devices/create" component={EditDevice} />

            <PrivateRoute path="/sops/:slug/edit" component={EditSop} />
            <PrivateRoute path="/sops/create" component={EditSop} />

            <Route path="/devices/:slug/code" component={DeviceCode} />
            <Route path="/devices/:slug/info" component={EditDevice} />
            <Route path="/devices/:slug/sop" component={DeviceSop} />
            <Route path="/devices" component={DevicesPage} />

            <Route path="/sops/:slug/info" component={SopDetailPage} />
            <Route path="/sops" component={SopsPage} />
            <Route component={PageNotFound} />
          </Switch>
        </main>
      </>
    );
  };
}

App.propTypes = {
  loginError: PropTypes.func.isRequired,
  loginSuccess: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  loginSuccess: (profile) => dispatch(authActions.loginSuccess(profile)),
  loginError: (error) => dispatch(authActions.loginError(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
