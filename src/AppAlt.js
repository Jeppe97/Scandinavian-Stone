import React, {Component} from 'react';
import Header from './components/Header.js'
import MainContent from './components/MainContent.js'
import Footer from './components/Footer.js'

import {Switch, Route, BrowserRouter as Router} from "react-router-dom" 

class AppAlt extends Component {
    constructor(){
    super();
    this.state={}
    }

    render(){
        return(

            <Router>
                <Header/>
                <Switch>
                    <Route path="/" exact component={MainContent} />
                </Switch>
                <Footer/>
            </Router>

        )
    }
    
}

export default AppAlt;