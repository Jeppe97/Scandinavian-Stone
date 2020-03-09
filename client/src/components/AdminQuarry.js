import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import AdminDropdownMenuQuarry from "./AdminDropdownMenuQuarry";
import AdminDropdownMenuPlace from "./AdminDropdownMenuPlace";

export default class AdminQuarry extends Component {
  render() {
    return (
      <div>
        <div className="MainMenu">
          <BrowserRouter>
            <AdminDropdownMenuQuarry />
          </BrowserRouter>
          {/*<AdminDropdownMenuPlace />*/}
          <Link className="btn1" to="/AdminQuarry">
            <button>Godkänn</button>
          </Link>
          <Link className="btn1" to="/AdminMainmenu">
            <button>Tillbaka</button>
          </Link>
        </div>
      </div>
    );
  }
}
