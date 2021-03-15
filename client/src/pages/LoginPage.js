import React from "react";
import { useAuth } from "../routes/Auth";
import { useHistory, useLocation } from "react-router-dom";

const LoginPage = () => {
  let history = useHistory();
  let locationn = useLocation();
  /* eslint-disable */

  let auth = useAuth();

  let { from } = locationn.state || { from: { pathname: "/" } };
  let login = () => {
    console.log("location: ", location);
    location = "http://localhost:3200/login";
    //     // history.push('http://localhost:3200/login')
    //     location = "http://localhost:3200/login"
    //     // auth.signin(() => {
    //     // history.replace(from);
    //     // });
  };
  return (
    <div>
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={login}>Log in</button>
      </div>
    </div>
  );
};
export default LoginPage;
