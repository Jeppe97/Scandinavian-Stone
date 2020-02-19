import React from 'react';
import './App.scss';
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WorkMethods from './components/WorkMethods';
import Statistics from './components/Statistics';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MainMenu from './components/MainMenu';
import Login from "./components/login/Login";

function App() {
  return (
    <div className="app-container">
      <CSSTransition in={true} appear={true} timeout={800} classNames="fade">
        <TransitionGroup>
        <Header />
          <Router>
            <Route render={({ location }) => (
              <TransitionGroup>
                <CSSTransition key={location.key} timeout={450} classNames="fade">
                  <Switch location={location}>
                    <Route path="/" exact component={Login} />
                    <Route path="/mainmenu" exact component={MainMenu} />
                    <Route path="/workmethods" component={WorkMethods} />
                    <Route path="/statistics" component={Statistics} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )} />
        </Router>
        </TransitionGroup>
        </CSSTransition>
    </div>
  );
}
export default App;
