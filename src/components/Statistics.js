import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Statistics extends Component {
    render() {
        return (
            <div>
                <div className="MainMenu">

                    <h1>STATS BRO</h1>

                    <Link to="/">
                        <button>Tillbaka</button>
                    </Link>
                </div>
            </div>
        )
    }
}
