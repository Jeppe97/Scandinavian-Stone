import React from 'react';
import './App.scss';
import Header from './components/Header'
import MainContent from './components/MainContent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import WorkMethods from './components/WorkMethods';
import Statistics from './components/Statistics';


function App() {
  return (
    <div className="App">
      <Header />
      
      <Router>
        <Switch>
        <Route path="/" exact component={MainContent} /> 
        <Route path="/workmethods" component={WorkMethods} />
        <Route path="/statistics" component={Statistics} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
