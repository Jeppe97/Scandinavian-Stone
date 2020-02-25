import React from 'react';
import './App.scss';
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WorkMethods from './components/WorkMethods';
import Statistics from './components/Statistics';
import MainMenu from './components/MainMenu';
import Login from "./components/login/Login";
import Stopwatch from "./timer"
import Blank from './components/Blank';
import Dimensions from './components/Dimensions';

function App() {
  return (
    
    <div className="app-container">
      
       
       <Header />
          <Router>
                  <Switch >
                    <Route path="/" exact component={Login} />
                    <Route path="/mainmenu" exact component={MainMenu} />
                    <Route path="/workmethods" exact component={WorkMethods} />
                    <Route path="/workmethods/primary" exact component={Blank} />
                    <Route path="/workmethods/primary/dimensions" exact component={Dimensions} />
                    <Route path="/statistics" component={Statistics} />
                    <Route path="/workmethods/timer" component={Stopwatch} />
                   

                  </Switch>
        </Router>
    </div>
  );
}

export default App;
