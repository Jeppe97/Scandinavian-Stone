import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WorkMethods from "./components/WorkMethods";
import MainMenu from "./components/MainMenu";
import Login from "./components/login/Login";
import Dimensions from "./components/Dimensions";
import DimensionsSkiva from "./components/DimensionsDisc";
import DimensionsBlock from "./components/DimensionsBlock";
import Timer from "./components/Timer";
import TimerBlock from "./components/TimerBlock"
import bS2 from "./components/drillSaw2";
import { ProtectedRoute } from "./components/login/protected-route";
import AdminMainMenu from "./components/Admin/AdminMainmenu";
import AdminQuarry from "./components/Admin/AdminQuarry";
import AdminDropdownMenuQuarry from "./components/Admin/AdminDropdownMenuQuarry";
import AdminDropdownMenuPlace from "./components/Admin/AdminDropdownMenuPlace";
import AdminModify from "./components/Admin/AdminModify";
import AdminModifyData from "./components/Admin/AdminModifyData";
import AdminRemoveData from "./components/Admin/AdminRemoveData";
import AdminStatistics from "./components/Admin/AdminStatistics";
import TimerSkiva from "./components/TimerSkiva";
import Block from "./components/Block";
import DSB2 from "./components/DSB2";
import DSB4 from "./components/DSB4";
import UserStatistics from "./components/UserStatistics";

/* the path and the right content, when using a link for a page the right page(content) will be displayed*/
function App() {
  return (
    <div className="app-container">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/mainmenu" component={MainMenu} />
          <ProtectedRoute exact path="/AdminMainmenu" component={AdminMainMenu} />
          <ProtectedRoute exact path="/Admin-statistics" component={AdminStatistics} />
          <ProtectedRoute exact path="/AdminQuarry" component={AdminQuarry} />
          <ProtectedRoute exact path="/AdminModifyData" component={AdminModifyData} />
          <ProtectedRoute exact path="/AdminModify" component={AdminModify} />
          <ProtectedRoute exact path="/AdminRemoveData" component={AdminRemoveData} />
          <ProtectedRoute exact path="/AdminDropdownMenuQuarry" component={AdminDropdownMenuQuarry} />
          <ProtectedRoute exact path="/AdminDropdownMenuPlace" component={AdminDropdownMenuPlace} />
          <ProtectedRoute exact path="/workmethods" component={WorkMethods} />
          <ProtectedRoute exact path="/workmethods/primary" component={Timer} />
          <ProtectedRoute exact path="/workmethods/primary/dimensions" component={Dimensions} />
          <ProtectedRoute exact path="/workmethods/block" component={Block} />
          <ProtectedRoute exact path="/workmethods/dimensions" component={Dimensions} />
          <ProtectedRoute exact path="/workmethods/dimensions/timer" component={Timer} />
          <ProtectedRoute exact path="/workmethods/dimensions/DSB4" component={DSB4} />
          <ProtectedRoute exact path="/workmethods/primarySkiva" component={TimerSkiva} />
          <ProtectedRoute exact path="/workmethods/primaryBlock" component={TimerBlock} />
          <ProtectedRoute exact path="/workmethods/primarySkiva/dimensions" component={DimensionsSkiva} />
          <ProtectedRoute exact path="/workmethods/primaryBlock/dimensions" component={DimensionsBlock} />
          <ProtectedRoute exact path="/workmethods/primarySkiva/dimensions/bS2" component={bS2} />
          <ProtectedRoute exact path="/workmethods/primarySkiva/dimensions/DSB2" component={DSB2} />
        
          <ProtectedRoute exact path="/userStatistics" component={UserStatistics} />

          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
