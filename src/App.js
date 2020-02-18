import React from 'react';
import './App.scss';
import Header from './components/Header'
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import WorkMethods from './components/WorkMethods';


function App() {
  return (
    <div className="App">
      <Header />
      
      <Router>
        <Switch>
        <Route path="/" exact component={MainContent} /> 
        <Route path="/workmethods" component={WorkMethods} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
