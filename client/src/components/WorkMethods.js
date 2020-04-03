import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class WorkMethods extends Component {
  render() {
    return (
      <div>
        <div className="MainMenu">
<<<<<<< HEAD
          <Link to="/workmethods/primary" className="btn1">
=======
          <Link to="/workmethods/dimensions" className="btn1">
>>>>>>> 1ad328b25c2a347e5f87a5abcb0e0058e9f5f0c9
            <button>Primärblock</button>
          </Link>
          <Link to="/workmethods/primarySkiva" className="btn1">
            <button>Skiva</button>
          </Link>
<<<<<<< HEAD
          <Link to="/workmethods/primaryBlock" className="btn1">
=======
          <Link to="/workmethods/block" className="btn1">
>>>>>>> 1ad328b25c2a347e5f87a5abcb0e0058e9f5f0c9
            <button>Block</button>
          </Link>
          <Link to="/mainmenu" className="btn1">
            <button>Tillbaka</button>
          </Link>
        </div>
      </div>
    );
  }
}
