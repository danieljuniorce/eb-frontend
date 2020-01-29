import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { PublicRoute } from "./public";
import { PrivateRoute } from "./private";

/**
 * Pages
 */
import AuthPage from "../pages/Auth";

const Routes = () => (
  <Router>
    <Switch>
      <PublicRoute path="/auth" component={AuthPage} />
      <PublicRoute path="/" exact component={AuthPage} />
    </Switch>
  </Router>
);

export default Routes;
