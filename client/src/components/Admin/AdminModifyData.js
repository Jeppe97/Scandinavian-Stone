import React from "react";
import { Link } from "react-router-dom";
import "../styles/MainMenu.scss";

export const AdminModifyData = props => {
  return (
    <div className="MainMenu">
      <Link to="/AdminMainmenu" className="btn1">
        <button>Ta bort data</button>
      </Link>
      <Link to="/AdminMainmenu" className="btn1">
        <button>Modifiera data</button>
      </Link>
      <Link to="/AdminMainmenu" className="btn1">
        <button>Tillbaka</button>
      </Link>
    </div>
  );
};
export default AdminModifyData;
