import React from 'react';
import {Link} from 'react-router-dom';
import '../components/styles/MainMenu.scss';

const MainMenu = () => {
    return(
        <div className="MainMenu">
            <Link to="/workmethods" className="btn1">
           <button>RÄKNA</button>
           </Link>
           <Link to="/statistics" className="btn1">
           <button >STATISTIK</button>
           </Link>
           <Link className="btn1">
           <button onClick={ refreshPage }>LOGGA UT</button>
           </Link>
        </div>
    );
}
function refreshPage() {
    window.location.assign("/");
}
export default MainMenu;
