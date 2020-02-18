import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class WorkMethods extends Component {
    render() {
        return (
            <div>
            <div className="MainMenu">
            <Link to="/workmethods">
           <button>Primärblock</button>
           </Link>
           <Link to="/workmethods">
           <button>Skiva</button>
           </Link>
           <Link to="/workmethods">
           <button>Block</button>
           </Link>
           <Link to="/">
           <button>Tillbaka</button>
           </Link>
            </div>
            </div>
        )
    }
}
