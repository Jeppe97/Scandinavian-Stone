import React, { Component } from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import "./styles/DimensionsDSB2.scss";
import {timeSide1, timeSide2, timeBottom} from "./TimerSkiva"
import { methods,length,hight} from "./DimensionsDisc"
import {quarryID} from "./login/Login";

var discID=0;


export class DSB2 extends Component {
  constructor() {
    super();

    this.state = {
      sprängSort0:"",
      sprängSort1:"",
      sprängSort2:"",
      sprängSort3:""
    };


    this.state = { isToggleOn: true };

    this.handleChange0 = this.handleChange0.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);

    this.addSide1 = this.addSide1.bind(this);
    this.addSide2 = this.addSide2.bind(this);
    this.addSideBottom = this.addSideBottom.bind(this);
    this.addDisc = this.addDisc.bind(this);


    this.refreshPage = this.refreshPage.bind(this);

    
  }
  handleChange0(event) {
    this.setState({
      sprängSort0: event.target.value
    });
    return(this.state);
  }

  handleChange1(event) {
    this.setState({
      sprängSort1: event.target.value
    });
    return(this.state);
  }

  handleChange2(event) {
    this.setState({
      sprängSort2: event.target.value
    });
    return(this.state);
  }

  addDisc(){
      fetch(`/insertdisc?quarryID=${quarryID}&mainTime=${0}`)
      .catch(err => console.error(err)) 
      .then(response => response.json())
      .then(function(response){
       discID = response; 
       })
     .then(this.addSide1)
  }
  
  addSide1(){
    if(discID.length){
      fetch(`/insertsidedisc?discID=${discID[0].id}&length1=${length[0]}&height=${hight[0]}&time=${timeSide1}&method=${methods[0]}&sideNr=${1}&nr=${0}&length2=${0}&type=${this.state.sprängSort0}&amount=${0}`)
     .then(this.addSide2)
     .catch(err => console.error(err))
    }
  }

  addSide2(){
    if(discID.length){
    fetch(`/insertsidedisc?discID=${discID[0].id}&length1=${length[1]}&height=${hight[1]}&time=${timeSide2}&method=${methods[1]}&sideNr=${2}&nr=${0}&length2=${0}&type=${this.state.sprängSort1}&amount=${0}`)
    .then(this.addSideBottom)
    .catch(err => console.error(err))
    }
    
  }

  addSideBottom(){
    if(discID.length){
    fetch(`/insertsidedisc?discID=${discID[0].id}&length1=${length[2]}&height=${hight[2]}&time=${timeBottom}&method=${methods[2]}&sideNr=${3}&nr=${0}&length2=${0}&type=${this.state.sprängSort2}&amount=${0}`)
    .catch(err => console.error(err))
    }
  
  }


  refreshPage() {

    window.location.assign("/");
  }

  render() {
    
    return (
      <div>
        <div className="wrapperDSB" id="wrapper">
          <form className="dimension-form 1">
            <h1 className="sides">Sida 1:</h1>
            Antal hål:
            <Slider />
            Längd på hålen:
            <Slider />
            Spräng Sort:{" "}
            <input
              type="text"
              placeholder="Spräng Sort"
              onChange={this.handleChange0}
            />
            Mängd sprängdeg(g):
            <Slider />
          </form>

          <form className="dimension-form 2">
            <h1 className="sides">Sida 2:</h1>
            Antal hål:
            <Slider />
            Längd på hålen:
            <Slider />
            Spräng Sort:{" "}
            <input
              type="text"
              placeholder="Spräng Sort"
              onChange={this.handleChange1}
            />
            Mängd sprängdeg(g):
            <Slider />
          </form>


          <form className="dimension-form 2">
            <h1 className="sides">Botten:</h1>
            Antal hål:
            <Slider />
            Längd på hålen:
            <Slider />
            Spräng Sort:{" "}
            <input
              type="text"
              placeholder="Spräng Sort"
              onChange={this.handleChange2}
            />
            Mängd sprängdeg(g):
            <Slider />
          </form>

          <Link className="nextbtnDSB" to="/">
          <button onClick={this.addDisc} className="nextbtnDSB">Spara</button>
        </Link>
        </div>

        
      </div>
    );
  }

}
export default DSB2;
