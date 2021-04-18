//src : https://app.pluralsight.com/library/courses/react-auth0-authentication-security

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router";

const PrivateRoute = (props) => {
  const { isAuthenticated, auth } = props;

  const login = () => props.login();

  return (
    <Route
      render={(props) => {
        // 1. Redirect to login if not logged in.
        if (!isAuthenticated) return login();

        /*   
        // 2. Display message if user lacks required scope(s).
        if (scopes.length > 0 && !auth.userHasScopes(scopes)) {
          return (
            <h1 className="loading">
              Unauthorized - You need the following scope(s) to view this page:{" "}
              {scopes.join(",")}.
            </h1>
          );
        }
        */

        // 3. Render component
        return <Component auth={auth} {...props} />;
      }}
    />
  );
};

function mapStateToProps(state) {
  const { auth } = state;
  const { isAuthenticated, scopes } = auth;
  return {
    auth,
    isAuthenticated,
    scopes,
  };
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {})(PrivateRoute);
