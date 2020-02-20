import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class WorkMethods extends Component {
    render() {
        return (
            <div>
                <div className="MainMenu">
                    <Link to="/workmethods" className="btn1">
                        <button>Primärblock</button>
                    </Link>
                    <Link to="/workmethods" className="btn1">
                        <button>Skiva</button>
                    </Link>
                    <Link to="/workmethods" className="btn1">
                        <button>Block</button>
                    </Link>
                    <Link className="btn1">
                        <button onClick={ refreshPage }>Tillbaka</button>
                    </Link>
                </div>
            </div>
        )
    }
}
function refreshPage() {
    window.location.assign("/");
}
