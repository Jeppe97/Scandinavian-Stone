import React from 'react';
import {Link} from 'react-router-dom';

const MainMenu = () => {
    return(
        <div className="MainMenu">
            <Link to="/workmethods"className="btn1">
           <button onClick={ refreshPage } >RÄKNA</button>
           </Link>
           <Link to="/statistics"className="btn1">
           <button onClick={ refreshPage } >STATISTIK</button>
           </Link>
           <Link to="/"className="btn1">
           <button onClick={ refreshPage } >LOGGA UT</button>
           </Link>
        </div>
    );
}
function refreshPage() {
    window.location.assign("/");
}
export default MainMenu;
