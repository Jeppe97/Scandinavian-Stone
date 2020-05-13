import React, { Component } from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import "./styles/DimensionsDSB2.scss";
import "./styles/navbar.scss"
import {timeSide1, timeSide2, timeBottom} from "./TimerSkiva";
import { height,length,methods} from "./DimensionsDisc";
import {quarryID} from "./login/Login";
import {mainTime} from "./Header";

var discID=0;


export class DSB2 extends Component {
  
  constructor() {
    super();

    this.state = {
    AntalHål0:"",
    AntalHål1:"",
    AntalHål2:"",
  

    LängdPåHål0:"",
    LängdPåHål1:"",
    LängdPåHål2:"",
 

    SprängSort0:"",
    SprängSort1:"",
    SprängSort2:"",


    MängdSprängDeg0:"",
    MängdSprängDeg1:"",
    MängdSprängDeg2:"",



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

    
    this.addSide1 = this.addSide1.bind(this);
    this.addSide2 = this.addSide2.bind(this);
    this.addSideBottom = this.addSideBottom.bind(this);
    this.addDisc = this.addDisc.bind(this);


    
    
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
      LängdPåHål0: event.target.value
    });
    return(this.state);
  }

  handleChange4(event) {
    this.setState({
      LängdPåHål1: event.target.value
    });
    return(this.state);
  }

  handleChange5(event) {
    this.setState({
      LängdPåHål2: event.target.value
    });
    return(this.state);
  }


   handleChange6(event) {
    this.setState({
      SprängSort0: event.target.value
    });
    return(this.state);
  }

  handleChange7(event) {
    this.setState({
      SprängSort1: event.target.value
    });
    return(this.state);

  }

  handleChange8(event) {
    this.setState({
      SprängSort2: event.target.value
    });
    return(this.state);
  }


  handleChange9(event) {
    this.setState({
      MängdSprängDeg0: event.target.value
    });
    return(this.state);
  }

  handleChange10(event) {
    this.setState({
      MängdSprängDeg1: event.target.value
    });
    return(this.state);

  }

  handleChange11(event) {
    this.setState({
      MängdSprängDeg2: event.target.value
    });
    return(this.state);
  }

  addDisc(){
    fetch(`/insertdisc?quarryID=${quarryID}&mainTime=${mainTime}`)
    .catch(err => console.error(err)) 
    .then(response => response.json())
    .then(function(response){
     discID = response; 
     })
   .then(this.addSide1)
}

addSide1(){
  if(discID.length){
    fetch(`/insertsidedisc?discID=${discID[0].id}&length1=${length[0]}&height=${height[0]}&time=${timeSide1}&method=${methods[0]}&sideNr=${1}&nr=${this.state.AntalHål0}&length2=${this.state.LängdPåHål0}&type=${this.state.SprängSort0}&amount=${this.state.MängdSprängDeg0}`)
   .then(this.addSide2)
   .catch(err => console.error(err))
  }
}

addSide2(){
  if(discID.length){
  fetch(`/insertsidedisc?discID=${discID[0].id}&length1=${length[1]}&height=${height[1]}&time=${timeSide2}&method=${methods[1]}&sideNr=${2}&nr=${this.state.AntalHål1}&length2=${this.state.LängdPåHål1}&type=${this.state.SprängSort1}&amount=${this.state.MängdSprängDeg1}`)
  .then(this.addSideBottom)
  .catch(err => console.error(err))
  }
  
}

addSideBottom(){
  if(discID.length){
  fetch(`/insertsidedisc?discID=${discID[0].id}&length1=${length[2]}&height=${height[2]}&time=${timeBottom}&method=${methods[2]}&sideNr=${3}&nr=${this.state.AntalHål2}&length2=${this.state.LängdPåHål2}&type=${this.state.SprängSort2}&amount=${this.state.MängdSprängDeg2}`)
  .catch(err => console.error(err))
  }

}



  refreshPage() {
    window.location.assign("/");
  }
 
  render() {
    return (
      <div>
     
        <div className="wrapperDim" id="wrapper">
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
              onChange={this.handleChange3}
            />
          
            <input
              type="text"
              placeholder="Sprängmedel"
              onChange={this.handleChange6}
            />
       
       <input
              type="text"
              placeholder="Mängd Sprängdeg"
              onChange={this.handleChange9}
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
              onChange={this.handleChange4}
            />
          
            <input
              type="text"
              placeholder="Sprängmedel"
              onChange={this.handleChange7}
            />
       
       <input
              type="text"
              placeholder="Mängd Sprängmedel"
              onChange={this.handleChange10}
            />
          </form>


          <form className="dimension-form 2">
            <h1 className="sides">Botten:</h1>
            <input
              type="text"
              placeholder="Antal Hål"
              onChange={this.handleChange2}
            />
            <input
              type="text"
              placeholder="Längd på Hål"
              onChange={this.handleChange5}
            />
          
            <input
              type="text"
              placeholder="Sprängmedel"
              onChange={this.handleChange8}
            />
       
       <input
              type="text"
              placeholder="Mängd Sprängmedel"
              onChange={this.handleChange11}
            />
          </form>
          <div className="btn-field">
          <Link to="/workmethods" className="btn1 save">
              <button onClick={this.addDisc}>Spara</button>
            </Link>
            <Link to="/workmethods" className="btn1 cancel">
              <button >Avbryt</button>
            </Link>
            </div>
        </div>







        
      </div>
    );
  }
}
export default DSB2;
