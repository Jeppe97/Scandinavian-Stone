import React from 'react';
import {Link} from 'react-router-dom';
import '../components/styles/MainMenu.scss';
import auth from './login/auth';

export const MainMenu = (props) => {
    return(
        <div className="MainMenu">
            <Link to="/workmethods" className="btn1">
           <button>RÄKNA</button>
           </Link>
           <Link to="/statistics" className="btn1">
           <button >STATISTIK</button>
           </Link>
           {/* <Link className="btn1"> */}
           <a className="btn1">
           <button onClick={() => {
               auth.logout(() => {
                props.history.push("/");
               })
           } } >LOGGA UT</button>
           </a>
           {/* </Link> */}
        </div>
    );
}
function refreshPage() {
    window.location.assign("/");
}
export default MainMenu;
