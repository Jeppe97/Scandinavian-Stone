import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.scss"

/*The menu for a user, can select Primärblock, Skiva, Block or Tillbaka*/
/*When cklicked the buttons activates the link to the next page*/

export default class WorkMethods extends Component {
  render() {
    return (
      <div>
       
        <div className="MainMenu">
          <Link to="/workmethods/dimensions/timer" className="btn1">
            <button>Primärblock</button>
          </Link>
          <Link to="/workmethods/primarySkiva" className="btn1">
            <button>Skiva</button>
          </Link>
          <Link to="/workmethods/primaryBlock" className="btn1">
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
