import React from 'react';
import './App.scss';
import Header from './components/Header'
import AdminMainContent from './components/AdminMainContent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AdminQuarry from './components/AdminQuarry';
import Statistics from './components/Statistics';
import WorkMethods from './components/WorkMethods';
import AdminDropdownMenuQuarry from './components/AdminDropdownMenuQuarry';
import AdminMaterial from "./components/AdminMaterial"

function App() {
  return (
    <div className="App">
      <Header />
      
      <Router>
        <Switch>
        <Route path="/" exact component={AdminMainContent} /> 
        <Route path="/AdminQuarry" component={AdminQuarry} />
        <Route path="/workmethods" component={WorkMethods} />
        <Route path="/AdminMaterial" component={AdminMaterial} />
        <Route path="/AdminDropdownMenuQuarry" component={AdminDropdownMenuQuarry} />
        <Route path="/statistics" component={Statistics} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
