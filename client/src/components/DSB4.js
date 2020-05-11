import React, { Component } from 'react';
import Slider from './Slider';
import { Link } from "react-router-dom";
import "./styles/DSB.scss";
import "./styles/navbar.scss"
import {depth,length,methods} from "./Dimensions"
import {timeSide1, timeSide2, timeSide3, timeBottom} from "./Timer";
import {quarryID} from "./login/Login";

var primaryID=0;

export class DSB4 extends Component {

    constructor() {
        super();
    
        this.state = {
        AntalHål0:"",
        AntalHål1:"",
        AntalHål2:"",
        AntalHål3:"",

        LängdPåHål0:"",
        LängdPåHål1:"",
        LängdPåHål2:"",
        LängdPåHål3:"",

        SprängSort0:"",
        SprängSort1:"",
        SprängSort2:"",
        SprängSort3:"",

        MängdSprängDeg0:"",
        MängdSprängDeg1:"",
        MängdSprängDeg2:"",
        MängdSprängDeg3:"",


        };
    
        this.state = { isToggleOn: true };
    
        this.handleChange0 = this.handleChange0.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);

        this.handleChange4 = this.handleChange4.bind(this);
        this.handleChange5 = this.handleChange5.bind(this);
        this.handleChange6 = this.handleChange6.bind(this);
        this.handleChange7 = this.handleChange7.bind(this);
        

        this.handleChange8 = this.handleChange8.bind(this);
        this.handleChange9 = this.handleChange9.bind(this);
        this.handleChange10 = this.handleChange10.bind(this);
        this.handleChange11 = this.handleChange11.bind(this);
        

        this.handleChange12 = this.handleChange12.bind(this);
        this.handleChange13 = this.handleChange13.bind(this);
        this.handleChange14 = this.handleChange14.bind(this);
        this.handleChange15 = this.handleChange15.bind(this);

                
        this.addSide1 = this.addSide1.bind(this);
        this.addSide2 = this.addSide2.bind(this);
        this.addSide3 = this.addSide3.bind(this);
        this.addSideBottom = this.addSideBottom.bind(this);
        this.addPrimary=this.addPrimary.bind(this);
        
        
      }
      handleChange0(event) {
        this.setState({
          AntalHål0: event.target.value
        });
        return(this.state);
      }
    
      handleChange1(event) {
        this.setState({
          AntalHål1: event.target.value
        });
        return(this.state);

      }
    
      handleChange2(event) {
        this.setState({
          AntalHål2: event.target.value
        });
        return(this.state);
      }
    
      handleChange3(event) {
        this.setState({
          AntalHål3: event.target.value
        });
        return(this.state);
      }


      handleChange4(event) {
        this.setState({
          LängdPåHål0: event.target.value
        });
        return(this.state);
      }
    
      handleChange5(event) {
        this.setState({
          LängdPåHål1: event.target.value
        });
        return(this.state);
      }
    
      handleChange6(event) {
        this.setState({
          LängdPåHål2: event.target.value
        });
        return(this.state);
      }
    
      handleChange7(event) {
        this.setState({
          LängdPåHål3: event.target.value
        });
        return(this.state);
      }


       handleChange8(event) {
        this.setState({
          SprängSort0: event.target.value
        });
        return(this.state);
      }
    
      handleChange9(event) {
        this.setState({
          SprängSort1: event.target.value
        });
        return(this.state);
      }
    
      handleChange10(event) {
        this.setState({
          SprängSort2: event.target.value
        });
        return(this.state);
      }
    
      handleChange11(event) {
        this.setState({
          SprängSort3: event.target.value
        });
        return(this.state);
      }

      handleChange12(event) {
        this.setState({
          MängdSprängDeg0: event.target.value
        });
        return(this.state);
      }
    
      handleChange13(event) {
        this.setState({
          MängdSprängDeg1: event.target.value
        });
        return(this.state);
      }
    
      handleChange14(event) {
        this.setState({
          MängdSprängDeg2: event.target.value
        });
        return(this.state);
      }
    
      handleChange15(event) {
        this.setState({
          MängdSprängDeg3: event.target.value
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
    fetch(`/insertsideprimary?primaryID=${primaryID[0].id}&length1=${length[0]}&height=${depth[0]}&time=${timeSide1}&method=${methods[0]}&sideNr=${1}&nr=${this.state.AntalHål0}&length2=${this.state.LängdPåHål0}&type=${this.state.SprängSort0}&amount=${this.state.MängdSprängDeg0}`)
   .then(this.addSide2)
   .catch(err => console.error(err))
  }
}

addSide2(){
  if(primaryID.length){
  fetch(`/insertsideprimary?primaryID=${primaryID[0].id}&length1=${length[1]}&height=${depth[1]}&time=${timeSide2}&method=${methods[1]}&sideNr=${2}&nr=${this.state.AntalHål1}&length2=${this.state.LängdPåHål1}&type=${this.state.SprängSort1}&amount=${this.state.MängdSprängDeg1}`)
  .then(this.addSide3)
  .catch(err => console.error(err))
  }
  
}
  
addSide3(){
  if(primaryID.length){
  fetch(`/insertsideprimary?primaryID=${primaryID[0].id}&length1=${length[2]}&height=${depth[2]}&time=${timeSide3}&method=${methods[2]}&sideNr=${3}&nr=${this.state.AntalHål2}&length2=${this.state.LängdPåHål2}&type=${this.state.SprängSort2}&amount=${this.state.MängdSprängDeg2}`)
  .then(this.addSideBottom)
  .catch(err => console.error(err))
  }
  
}
addSideBottom(){
  if(primaryID.length){
  fetch(`/insertsideprimary?primaryID=${primaryID[0].id}&length1=${length[3]}&height=${depth[3]}&time=${timeBottom}&method=${methods[3]}&sideNr=${4}&nr=${this.state.AntalHål3}&length2=${this.state.LängdPåHål3}&type=${this.state.SprängSort3}&amount=${this.state.MängdSprängDeg3}`)
  .catch(err => console.error(err))
  }
  
}
   
    render() {

        return (
            <div>
              
                <div className="wrapperDSB" id="wrapper">
                    <form className="dimension-form 1">
                        <h1 className="sides">Sida 1:</h1>
                        <input
              type="text"
              placeholder="Antal Hål"
              onChange={this.handleChange0}
            />
            <input
              type="text"
              placeholder="Längd på Hål"
              onChange={this.handleChange4}
            />
          
            <input
              type="text"
              placeholder="Sprängmedel"
              onChange={this.handleChange8}
            />
       
       <input
              type="text"
              placeholder="Mängd Sprängmedel"
              onChange={this.handleChange12}
            />
                    </form>




                    <form className="dimension-form 2">
                        
                        <h1 className="sides">Sida 2:</h1>
                        <input
              type="text"
              placeholder="Antal Hål"
              onChange={this.handleChange1}
            />
            <input
              type="text"
              placeholder="Längd på Hål"
              onChange={this.handleChange5}
            />
          
            <input
              type="text"
              placeholder="Sprängmedel"
              onChange={this.handleChange9}
            />
       
       <input
              type="text"
              placeholder="Mängd Sprängmedel"
              onChange={this.handleChange13}
            />
                    </form>


                    <form className="dimension-form 3">
                        
                        <h1 className="sides">Sida 3:</h1>
                        <input
              type="text"
              placeholder="Antal Hål"
              onChange={this.handleChange2}
            />
            <input
              type="text"
              placeholder="Längd på Hål"
              onChange={this.handleChange6}
            />
          
            <input
              type="text"
              placeholder="Sprängmedel"
              onChange={this.handleChange10}
            />
       
       <input
              type="text"
              placeholder="Mängd Sprängmedel"
              onChange={this.handleChange14}
            />
                    </form>

                    <form className="dimension-form 4">
                        <h1 className="sides">Botten: </h1>
                        <input
              type="text"
              placeholder="Antal Hål"
              onChange={this.handleChange3}
            />
            <input
              type="text"
              placeholder="Längd på Hål"
              onChange={this.handleChange7}
            />
          
            <input
              type="text"
              placeholder="Sprängmedel"
              onChange={this.handleChange11}
            />
       
       <input
              type="text"
              placeholder="Mängd Sprängmedel"
              onChange={this.handleChange15}
            />
                    </form>
                    <Link className="nextbtn" to="/workmethods/primary">
                    <button  className="nextbtn" onClick={this.addPrimary} >Spara</button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default DSB4;
