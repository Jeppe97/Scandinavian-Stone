import React from "react";
import { Link } from "react-router-dom";
import auth from "../login/auth";

/*Component for admin main menu. This component is displayed when logged into the admin page. It consist of three buttons */

export const AdminMainMenu = props => {
  return (
    <div className="MainMenu">
      <Link className="admin-button" to="/AdminQuarry">
        <button>Statistik</button>
      </Link>
      <Link className="admin-button" to="/AdminModify">
        <button>Redigera data</button>
      </Link>
      <a className="admin-button">
        <button
          onClick={() => { {/*This button calls a function that logs out the admin*/}
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
