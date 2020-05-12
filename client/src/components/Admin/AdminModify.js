import React from "react";
import { Link } from "react-router-dom";
import "../styles/MainMenu.scss";

export const AdminModifyData = props => {
  return (
    <div className="MainMenu">
      <Link to="/AdminRemoveData" className="admin-button">
        <button>Ta bort data</button>
      </Link>
      <Link to="/AdminModifyData" className="admin-button">
        <button>Modifiera data</button>
      </Link>
      <Link to="/AdminMainmenu" className="admin-button">
        <button>Tillbaka</button>
      </Link>
    </div>
  );
};
export default AdminModifyData;
