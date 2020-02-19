import React from 'react';
import {Link} from 'react-router-dom';
import '../components/styles/MainMenu.scss';

const MainMenu = () => {
    return(
        <div className="MainMenu">
            <Link to="/workmethods">
           <button>RÄKNA</button>
           </Link>
           <Link to="/statistics">
           <button>STATISTIK</button>
           </Link>
           <Link to="/workmethods">
           <button>LOGGA UT</button>
           </Link>
        </div>
    );
}

export default MainMenu;
