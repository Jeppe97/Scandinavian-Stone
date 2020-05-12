import React from "react";
import { Link } from "react-router-dom";
import auth from "../login/auth";

{/*Denna komponent är huvudmenyn för administratöranvändarna. När du har loggat in som en adminanvändare så visas denna komponent som består av tre knappar*/ }

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
          onClick={() => { {/*Denna knapp kallar på en funktion som loggar ut användaren*/}
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
