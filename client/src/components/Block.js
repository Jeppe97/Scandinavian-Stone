//import './style.css';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.scss"
import {timeSide1, timeSide2, timeSide3,timeBottom} from "./TimerBlock";
import { methods,length,depth} from "./DimensionsBlock"
import {quarryID} from "./login/Login";

var blockID=0;

class Block extends Component {
  constructor() {
    super();

    this.state = {
      Volym: "",
      Vikt: "",
      Kvalite: "",
      Pris: ""
    };

    this.state = { isToggleOn: true };

    this.handleChange0 = this.handleChange0.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);

    this.handleClick0 = this.handleClick0.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);

    this.addSide1 = this.addSide1.bind(this);
    this.addSide2 = this.addSide2.bind(this);
    this.addSide3 = this.addSide3.bind(this);
    this.addSideBottom = this.addSideBottom.bind(this);
    this.addBlock=this.addBlock.bind(this);
    this.addMeasure=this.addMeasure.bind(this);
  }
  handleChange0(event) {
    this.setState({
      Volym: event.target.value
    });
    return(this.state);
  }

  handleChange1(event) {
    this.setState({
      Vikt: event.target.value
    });
    return(this.state);
  }

  handleChange2(event) {
    this.setState({
      Kvalite: event.target.value
    });
    return(this.state);
  }

  handleChange3(event) {
    this.setState({
      Pris: event.target.value
    });
    return(this.state);
  }

  handleClick0() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    return(this.state);
  }

  handleClick1() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    return(this.state);
  }

  //adds a new block
  addBlock(){
    console.log("adding a block");
    fetch(`/insertblock?quarryID=${quarryID}&mainTime=${0}}`)
    .then(response => response.json())
    .then(function(response){
    blockID = response
    
  })
  .then(this.addMeasure)
  .catch(err => console.error(err))

}
//adds the measure for a block
addMeasure(){
  if(blockID.length){
    console.log("adding measure");
    fetch(`/insertmeasure?blockID=${blockID[0].id}&volume=${this.state.Volym}&weight=${this.state.Vikt}&quality=${this.state.Kvalite}&price=${this.state.Pris}`)
    .then(this.addSide1)
    .catch(err => console.error(err))
  } 

}
//adds info about the first side of a block
addSide1(){
  if(blockID.length){
  fetch(`/insertsideblock?blockID=${blockID[0].id}&length=${length[0]}&height=${depth[0]}&time=${timeSide1}&method=${methods[0]}&sideNr=${1}`)
     .then(this.addSide2)
  }
}
//adds info about the second side of a block
addSide2(){
  if(blockID.length){
  fetch(`/insertsideblock?blockID=${blockID[0].id}&length=${length[1]}&height=${depth[1]}&time=${timeSide2}&method=${methods[1]}&sideNr=${2}`)
   
  .then(this.addSide3)
  .catch(err => console.error(err))
  }
  
}
addSide3(){
  if(blockID.length){
  fetch(`/insertsideblock?blockID=${blockID[0].id}&length=${length[2]}&height=${depth[2]}&time=${timeSide3}&method=${methods[2]}&sideNr=${3}`)
   
  .then(this.addSideBottom)
  .catch(err => console.error(err))
  }
  
}
//adds info about the last side of a block
addSideBottom(){
  if(blockID.length){
  fetch(`/insertsideblock?blockID=${blockID[0].id}&length=${length[3]}&height=${depth[3]}&time=${timeBottom}&method=${methods[3]}&sideNr=${4}`)

  .catch(err => console.error(err))
  }

}

  render() {
    return (
      <div>
      <div className="wrapper-block-reporting">
          <form>
            Volym(m³):{" "}
            <input
              type="text"
              placeholder="Volym(m³)"
              onChange={this.handleChange0}
            />
            Vikt(ton):{" "}
            <input
              type="text"
              placeholder="Vikt(ton)"
              onChange={this.handleChange1}
            />
            Kvalité:{" "}
            <input
              type="text"
              placeholder="Kvalité"
              onChange={this.handleChange2}
            />
            Pris:{" "}
            <input
              type="text"
              placeholder="Pris"
              onChange={this.handleChange3}
            />
          </form>
        <div className="btn-field">
          <Link to="/mainmenu" className="btn1 savebtn">
            <button onClick={this.addBlock}>
              {this.state.isToggleOn ? "Spara" : "Sparat"}
            </button>
          </Link>
          <Link to="/workmethods" className="btn1 cancelbtn">
            <button onClick={this.handleClick}>
              {(this.setState.isToggleOn = "Avbryt")}
            </button>
          </Link>
        </div>
      </div>
      </div>
    );
  }
}
export default Block;
