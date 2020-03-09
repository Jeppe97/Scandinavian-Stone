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
import DimensionsSkiva from "./components/DimensionsSkiva";
import bS2 from "./components/borrSåg2";
import { ProtectedRoute } from "./components/login/protected-route";
import AdminMainMenu from "./components/AdminMainmenu";
import AdminQuarry from "./components/AdminQuarry";
import AdminDropdownMenuQuarry from "./components/AdminDropdownMenuQuarry";
import AdminDropdownMenuPlace from "./components/AdminDropdownMenuPlace";
import AdminModifyData from "./components/AdminModifyData";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/mainmenu" component={MainMenu} />
          <ProtectedRoute
            exact
            path="/AdminMainmenu"
            component={AdminMainMenu}
          />
          <ProtectedRoute exact path="/workmethods" component={WorkMethods} />
          <ProtectedRoute exact path="/AdminQuarry" component={AdminQuarry} />
          <ProtectedRoute
            exact
            path="/AdminModifyData"
            component={AdminModifyData}
          />
          <ProtectedRoute
            exact
            path="/AdminDropdownMenuQuarry"
            component={AdminDropdownMenuQuarry}
          />
          <ProtectedRoute
            exact
            path="/AdminDropdownMenuPlace"
            component={AdminDropdownMenuPlace}
          />
          <ProtectedRoute exact path="/workmethods/block" component={Block} />
          <ProtectedRoute exact path="/workmethods/primary" component={Timer} />
          <ProtectedRoute
            exact
            path="/workmethods/primary/dimensions"
            component={Dimensions}
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
            path="/workmethods/primarySkiva/dimensions/bS2"
            component={bS2}
          />

          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
