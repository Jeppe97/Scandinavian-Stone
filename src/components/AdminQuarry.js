import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AdminDropdownMenuQuarry from "./AdminDropdownMenuQuarry"
import AdminDropdownMenuPlace from "./AdminDropdownMenuPlace"

export default class AdminQuarry extends Component {
    render() {
        return (
            <div>
                <div className="MainMenu">                   
                    <AdminDropdownMenuQuarry />
                    <AdminDropdownMenuPlace />
                    <Link to="/">
                        <button>Tillbaka</button>
                    </Link>
                </div>
            </div>
        )
    }
}

