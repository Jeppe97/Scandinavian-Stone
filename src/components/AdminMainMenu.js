import React from 'react';
import {Link} from 'react-router-dom';
const AdminMainMenu = () => {
    return(
        <div className="MainMenu">
            <Link to="/AdminQuarry">
           <button>STENBROTT</button>
           </Link>
           <Link to="/AdminMaterial">
           <button>MATERIAL</button>
           </Link>
           <Link to="/workmethods">
           <button>LOGGA UT</button>
           </Link>
        </div>
    );
}

export default AdminMainMenu;
