import React from 'react'
import { useAuth } from './Auth'
import {
    Route,
    Redirect,
  } from "react-router-dom";
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const Private = ({ children, ...rest }) => {
    let auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}
export default Private