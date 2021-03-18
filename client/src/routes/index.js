import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//pages
import PublicPage from '../pages/PublicPage'
import LoginPage from '../pages/LoginPage'
import Dashboard from '../pages/Dashboard'

// Auth
import ProvideAuth from './Auth' 

//route
import Private from './Private'

//component
import AuthButton from '../components/AuthButton'
import InfinateScrolling from "../pages/InfinateScrolling";

const Routes = () => {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <AuthButton />

          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard Page</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/public">
              <PublicPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/feed">
              <InfinateScrolling />
            </Route>
            <Private path="/dashboard">
              <Dashboard />
            </Private>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default Routes;
