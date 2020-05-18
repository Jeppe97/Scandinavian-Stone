import React, { Component } from "react";
import "../styles/Login.scss";
import auth from "./auth";
import { FormControlLabel } from "@material-ui/core";
/*Class for inlogg. First page of the aplication. Can loggin to admin or user
The name and password used for logging in is controlled against the database */

//Variables
var name = "";
var password = "";
var infoFromDatabase;
var quarryID = 1;
var quarryChoice="";

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:"",
      password:""
      
    }

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);

    this.controlUser=this.controlUser.bind(this);
    this.controlAdmin=this.controlAdmin.bind(this);

    this.newPageAdmin=this.newPageAdmin.bind(this);
    this.newPageUser=this.newPageUser.bind(this);

    this.checkAdmin=this.checkAdmin.bind(this);
    this.checkUser=this.checkUser.bind(this);


  }

  componentDidMount() {
    const adminLoginButton = document.getElementById("admin");
    const userLoginButton = document.getElementById("user");
    const container = document.getElementById("container");

    adminLoginButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    userLoginButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  }
//Handles the name imput
  handleChange1(event){
    this.setState({
      name: event.target.value
    });
    return(this.state);
  }
//Handles the password imput 
  handleChange2(event){
    this.setState({
      password: event.target.value
    });
    return(this.state);
  }

  handleChange3(event){
    name = event;
  }
  handleChange4(event){
    password = event;

  }
  //Sends name and password used for admin, returns 
  controlAdmin(){
    fetch(`/logginadmin?name=${name}&password=${password}`)
    .then(res => res.json())
    .then(function(res){
      infoFromDatabase = res;
     
    })
    .then(this.checkAdmin)
    .catch(err => console.error(err))

  }

  checkAdmin(){
    //if there is some info in the array
     if(infoFromDatabase.length){
        this.newPageAdmin();
     }else {
      alert("Not a valid e-mail address or password");
     }
  }
  //loggin, go to main menu for admin 
  newPageAdmin() {
    auth.login(() => {
      this.props.history.push("/AdminMainmenu");
    });
  }
//gets the quarry id and quarry name if name and password is right
  controlUser(){
    fetch(`/logginuser?name=${name}&password=${password}`)
    .then(res => res.json())
    .then(function(res){
      infoFromDatabase = res;
     
    })
    .then(this.checkUser)
    .catch(err => console.error(err))

  }

  checkUser(){
   //if there is some info in the array, no info= wrong name or password
    if(infoFromDatabase.length){
       quarryID = infoFromDatabase[0].quarryID;
       quarryChoice = infoFromDatabase[0].quarryName;

       this.newPageUser();
    }
    else {
      alert("Not a valid e-mail address");
    }
  }
  //loggin, go to main menu for user
  newPageUser() {
    auth.login(() => {
      this.props.history.push("/mainmenu");
    });
  }


  render() {
    return (
      <div className="container" id="container">
        <div className="form-container admin-container">
          <form action="#">
            <h1>Admin</h1>
            <input type="email" placeholder="Användarnamn"onChange={event =>this.handleChange3(event.target.value)} />
            <input type="password" placeholder="Lösenord"  onChange={event =>this.handleChange4(event.target.value)} />
            <a href="/jebaited" className="forgot-password">
              Glömt ditt lösenord?
            </a>
            <button onClick={this.controlAdmin} >
              Logga In
            </button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Användare</h1>
            <input type="email" placeholder="Användarnamn" onChange={event =>this.handleChange3(event.target.value)}/>
            <input type="password" placeholder="Lösenord" onChange={event =>this.handleChange4(event.target.value)}/>
            <a href="/jebaited" className="forgot-password">
              Glömt ditt lösenord?
            </a>
            <button
              onClick={this.controlUser} >
              Logga In
            </button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Admin</h1>
              <p></p>
              <button className="ghost" id="admin">
                {" "}
                Ändra
              </button>
            </div>

            <div className="overlay-panel overlay-left">
              <h1>Användare</h1>
              <p></p>
              <button className="ghost" id="user">
                {" "}
                Ändra
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
export {quarryID,quarryChoice};