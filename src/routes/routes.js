import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { PublicRoute } from "./public";
import { PrivateRoute } from "./private";

/**
 * Pages
 */
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

const Routes = () => (
  <Router>
    <Switch>
      <PublicRoute path="/login" component={Login} />
      <PublicRoute path="/" exact component={Login} />
      <PublicRoute path="/register" component={Register} />

      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
);

export default Routes;
