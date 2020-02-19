import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../styles/Login.scss";

export class Login extends Component {    
    render(){
        return(
    <div className ="container" id="container">
             <div className="form-container admin-container">
                        <form>
                            <h1>Admin</h1>
                            <input type="email" placeholder="Användarnamn" />
                            <input type="password" placeholder="Lösenord" />
                            <a href="#">Glömt ditt lösenord?</a>
                            <Link to="/mainmenu" className="btn1">
                            <button>Logga In</button>
                            </Link>

                        </form>
            </div>

            <div className="form-container sign-in-container">
                        <form>
                            <h1>Användare</h1>
                            <input type="email" placeholder="Användarnamn" />
                            <input type="password" placeholder="Lösenord" />
                            <a href="#">Glömt ditt lösenord?</a>
                            <Link to="/mainmenu" className="btn1">
                            <button>Logga In</button>
                            </Link>
                        </form>
            </div>
            
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <h1>Admin</h1>
                        <p></p>
                        <button className="ghost" id="admin"> Ändra</button>
                    </div>

                    <div className="overlay-panel overlay-left">
                        <h1>Användare</h1>
                        <p></p>
                        <button className="ghost" id="user"> Ändra</button>
                    </div>
                </div>
            </div>
    </div>
        );
    }
}
window.onload=function(){
    const adminLoginButton = document.getElementById('admin');
    const userLoginButton = document.getElementById('user');
    const container = document.getElementById('container');

    adminLoginButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });
    
    userLoginButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
}

export default Login;

