import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Statistics extends Component {
  render() {
    return (
      <div>
        <div className="MainMenu">
          <h1>Statistik placeholder</h1>

          <Link to="/mainmenu" className="btn1">
            <button>Tillbaka</button>
          </Link>
        </div>
      </div>
    );
  }
}
function refreshPage() {
  window.location.assign("/");
}
