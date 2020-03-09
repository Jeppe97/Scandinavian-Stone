import React from "react";
import { Link } from "react-router-dom";
import auth from "./login/auth";

export const AdminMainMenu = props => {
  return (
    <div className="MainMenu">
      <Link className="btn1" to="/AdminQuarry">
        <button>Statistik</button>
      </Link>
      <Link className="btn1" to="/AdminModifyData">
        <button>Redigera data</button>
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
  );
};

export default AdminMainMenu;
