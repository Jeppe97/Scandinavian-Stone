import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import WorkMethods from "./components/WorkMethods";
import Statistics from "./components/Statistics";
import MainMenu from "./components/MainMenu";
import Login from "./components/login/Login";
import Dimensions from "./components/Dimensions";
import Timer from "./components/Timer";
import TimerSkiva from "./TimerSkiva";
import Block from "./components/Block";
import DimensionsSkiva from "./components/DimensionsDisc";
import DSB2 from "./components/DSB2";
import DSB4 from "./components/DSB4";
import { ProtectedRoute } from "./components/login/protected-route";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/mainmenu" component={MainMenu} />
          <ProtectedRoute exact path="/workmethods" component={WorkMethods} />
          <ProtectedRoute exact path="/workmethods/block" component={Block} />
          <ProtectedRoute exact path="/workmethods/primary" component={Timer} />
          <ProtectedRoute
            exact
            path="/workmethods/primary/dimensions"
            component={Dimensions}
          />
          <ProtectedRoute
            exact
            path="/workmethods/primary/dimensions/DSB4"
            component={DSB4}
          />
          <ProtectedRoute path="/statistics" component={Statistics} />
          <ProtectedRoute
            exact
            path="/workmethods/primarySkiva"
            component={TimerSkiva}
          />
          <ProtectedRoute
            exact
            path="/workmethods/primarySkiva/dimensions"
            component={DimensionsSkiva}
          />
          <ProtectedRoute
            exact
            path="/workmethods/primarySkiva/dimensions/DSB2"
            component={DSB2}
          />

          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
