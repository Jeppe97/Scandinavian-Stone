import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class AdminMaterial extends Component {
    render() {
        return (
            <div>
                <div className="MainMenu">

                    <Link to="/">
                        <button>LÄGG TILL MATERIAL</button>
                    </Link>
                    <Link to="/">
                        <button>ÄNDRA MATERIAL</button>
                    </Link>
                    <Link to="/">
                        <button>TA BORT MATERIAL</button>
                    </Link>
                    <Link to="/">
                        <button>Tillbaka</button>
                    </Link>
                </div>
            </div>
        )
    }
}
