import React, { Component } from 'react';
import Slider from './Slider';
import { Link } from "react-router-dom";
import "./styles/DSB.scss";
import { methods,length,hight} from "./Dimensions"
import {timeSide1, timeSide2, timeSide3, timeBottom} from "./Timer";
import {quarryID} from "./login/Login";

var primaryID=0;

export class DSB4 extends Component {

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
        this.handleChange3 = this.handleChange3.bind(this);
        
        this.addSide1 = this.addSide1.bind(this);
        this.addSide2 = this.addSide2.bind(this);
        this.addSide3 = this.addSide3.bind(this);
        this.addSideBottom = this.addSideBottom.bind(this);
        this.addPrimary=this.addPrimary.bind(this);
        

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
    
      handleChange3(event) {
        this.setState({
          sprängSort3: event.target.value
        });
        return(this.state);
      }

    refreshPage() {
        window.location.assign("/");
    }

    addPrimary(){
        fetch(`/insertprimary?quarryID=${quarryID}&mainTime=${0}`)
        .then(response => response.json())
        .then(function(response){
         primaryID = response;
         })
         .then(this.addSide1)
        .catch(err => console.error(err)) 
      
    }
    
  addSide1(){
    if(primaryID.length){
      fetch(`/insertsideprimary?primaryID=${primaryID[0].id}&length1=${length[0]}&height=${hight[0]}&time=${timeSide1}&method=${methods[0]}&sideNr=${1}&nr=${0}&length2=${0}&type=${this.state.sprängSort0}&amount=${0}`)
     .then(this.addSide2)
     .catch(err => console.error(err))
    }
  }

  addSide2(){
    if(primaryID.length){
    fetch(`/insertsideprimary?primaryID=${primaryID[0].id}&length1=${length[1]}&height=${hight[1]}&time=${timeSide2}&method=${methods[1]}&sideNr=${2}&nr=${0}&length2=${0}&type=${this.state.sprängSort1}&amount=${0}`)
    .then(this.addSide3)
    .catch(err => console.error(err))
    }
    
  }
    
  addSide3(){
    if(primaryID.length){
    fetch(`/insertsideprimary?primaryID=${primaryID[0].id}&length1=${length[2]}&height=${hight[2]}&time=${timeSide3}&method=${methods[2]}&sideNr=${3}&nr=${0}&length2=${0}&type=${this.state.sprängSort2}&amount=${0}`)
    .then(this.addSideBottom)
    .catch(err => console.error(err))
    }
    
  }
  addSideBottom(){
    if(primaryID.length){
    fetch(`/insertsideprimary?primaryID=${primaryID[0].id}&length1=${length[3]}&height=${hight[3]}&time=${timeBottom}&method=${methods[3]}&sideNr=${4}&nr=${0}&length2=${0}&type=${this.state.sprängSort3}&amount=${0}`)
    .catch(err => console.error(err))
    }
    
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

                    <form className="dimension-form 3">
                        <h1 className="sides">Sida 3:</h1>
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

                    <form className="dimension-form 4">
                        <h1 className="sides">Botten: </h1>
                        Antal hål:
            <Slider />
            Längd på hålen:
            <Slider />
            Spräng Sort:{" "}
            <input
              type="text"
              placeholder="Spräng Sort"
              onChange={this.handleChange3}
            />
            Mängd sprängdeg(g):
            <Slider />
                    </form>
                    <Link className="nextbtn" to="/">
                    <button onClick={this.addPrimary} className="nextbtn">Spara</button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default DSB4;
