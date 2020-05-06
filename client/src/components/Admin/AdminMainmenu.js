import React from "react";
import { Link } from "react-router-dom";
import auth from "../login/auth";

{/*Denna komponent är huvudmenyn för administratöranvändarna. När du har loggat in som en adminanvändare så visas denna komponent som består av tre knappar*/ }

export const AdminMainMenu = props => {
  return (
    <div className="MainMenu">
      <Link className="btn1" to="/AdminQuarry">
        <button>Statistik</button> {/*Denna knapp tar dig till Statistikkomponenten*/}
      </Link>
      <Link className="btn1" to="/AdminModify">
        <button>Redigera data</button>{/*Denna knapp tar dig till komponenten där du kan redigiera data*/}
      </Link>
      <a className="btn1">
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
