import React from 'react';
import { Link } from 'react-router-dom';
import './styles/MainMenu.scss';
import auth from './login/auth';
var choiceMainMenu="";

//import {value1} from './login/Login';

export const MainMenu = (props) => {

        function handleClick1(){
            choiceMainMenu="Räkna";
            console.log('CLICKED' + choiceMainMenu);
           
        }
        function handleClick2(){
            choiceMainMenu="Statistik";
            console.log('CLICKED' + choiceMainMenu);
           
        }
        
    return (
            
       
        <div className="MainMenu">

            <Link to="/workmethods" className="btn1">
                <button onClick={handleClick1}>RÄKNA</button>


            </Link>
            <Link to="/statistics" className="btn1">
                <button button onClick={handleClick2} >STATISTIK</button>
            </Link>
            <a className="btn1">
                <button onClick={() => {
                    auth.logout(() => {
                        props.history.push("/");
                    })
                }} >LOGGA UT</button>
            </a>
        </div>
    );
}
function refreshPage() {
    window.location.assign("/");
    
}

export default MainMenu;

export {choiceMainMenu};
