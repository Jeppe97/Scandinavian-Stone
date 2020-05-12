import React from "react";
import { Link } from "react-router-dom";
import "./styles/MainMenu.scss";
import auth from "./login/auth";
import "./styles/navbar.scss"

export const MainMenu = props => {
  return (
  <div>

    <div className="MainMenu">
      <Link to="/workmethods" className="btn1">
        <button>RÄKNA</button>
      </Link>
      <Link to="/userStatistics" className="btn1">
        <button>STATISTIK</button>
      </Link>
      <a className="btn1">
        <button
          onClick={() => {
            auth.logout(() => {
              props.history.push("/");
            });
          }}
        >
          LOGGA UT
        </button>
      </a>
    </div>
    </div>
  );
};

export default MainMenu;
