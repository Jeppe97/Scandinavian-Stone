import React from 'react';
import './App.scss';
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import WorkMethods from './components/WorkMethods';
import Statistics from './components/Statistics';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import MainMenu from './components/MainMenu';


function App() {
  return (
    <div className="app-container">
    <CSSTransition in={true} appear={true} timeout={800} classNames="fade">
      <Header />
      </CSSTransition>
      
      <Router>

      <CSSTransition in={true} appear={true} timeout={800} classNames="fade">
      <Route render={({location}) => (
        <TransitionGroup>
        <CSSTransition key={location.key} timeout={450} classNames="fade">
        <Switch location={location}>
        <Route path="/" exact component={MainMenu} /> 
        <Route path="/workmethods" component={WorkMethods} />
        <Route path="/statistics" component={Statistics} />
        </Switch>
        </CSSTransition>
        </TransitionGroup>
        )} />
        </CSSTransition>
      </Router>
    </div>
  );
}

export default App;
