import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LandingRoute from "./routes/LandingRoute/LandingRoute";
import RegistrationRoute from "./routes/RegistrationRoute/RegistrationRoute";
import LogInRoute from "./routes/LogInRoute/LogInRoute";
import DashboardRoute from "./routes/DashboardRoute/DashboardRoute";
import NotFoundRoute from "./routes/NotFoundRoute/NotFoundRoute";
import PrivateRoute from "./routes/PrivateRoute/PrivateRoute";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingRoute} />
          <Route path="/registration" component={RegistrationRoute} />
          <Route path="/login" component={LogInRoute} />
          <PrivateRoute path="/dashboard" component={DashboardRoute} />
          <Route component={NotFoundRoute} />
        </Switch>
      </div>
    );
  }
}

export default App;
