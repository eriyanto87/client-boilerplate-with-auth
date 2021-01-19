import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LandingRoute from "./routes/LandingRoute/LandingRoute";
import RegistrationRoute from "./routes/RegistrationRoute/RegistrationRoute";
import LogInRoute from "./routes/LogInRoute/LogInRoute";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingRoute} />
        <Route path="/registration" component={RegistrationRoute} />
        <Route path="/login" component={LogInRoute} />
      </div>
    );
  }
}

export default App;
