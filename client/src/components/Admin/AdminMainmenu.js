import React from "react";
import { Link } from "react-router-dom";
import auth from "../login/auth";

export const AdminMainMenu = props => {
  return (
    <div className="MainMenu">
      <Link className="admin-button" to="/AdminQuarry">
        <button>Statistik</button>
      </Link>
      <Link className="admin-button" to="/AdminModifyData">
        <button>Redigera data</button>
      </Link>
      <a className="admin-button">
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
