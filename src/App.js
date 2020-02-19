import React from 'react';
import "./login/Login.scss";
import Login from "./login/Login";
import Footer from "./login/Footer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainMenu from './login/MainMenu';

function App() {
  return (
    <Router>
    <div className="app-container">
    <Switch>
     <Route path="/" exact component={Login} />
     <Route path="/mainmenu" component={MainMenu} />
     </Switch>
     <Footer />
    </div>
    </Router>
  );
}
export default App;
