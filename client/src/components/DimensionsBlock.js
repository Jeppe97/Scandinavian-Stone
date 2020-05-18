import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.scss"
import "./styles/Block.scss"
/*This class handles the imput values and method choice for the dimensions of a block */

//Arrays for the depth, length and methods 
var methods = ["","","",""];
var depth =[0,0,0,0];
var length =[0,0,0,0];

export default class DimensionsBlock extends Component {
  refreshPage() {
    window.location.assign("/");
  }

  constructor() {
    super();

    this.state = {
     Djup1: "",
      Djup2: "",
      Djup3: "",
      Djup4: "",

      Längd1: "",
      Längd2:"",
      Längd3:"",
      Längd4:""
    };
  

  this.state = { isToggleOn: true };

    /*Handles the imput from text fields  */
  this.handleChange0 = this.handleChange0.bind(this);
  this.handleChange1 = this.handleChange1.bind(this);
  this.handleChange2 = this.handleChange2.bind(this);
  this.handleChange3 = this.handleChange3.bind(this);
  this.handleChange4 = this.handleChange4.bind(this);
  this.handleChange5 = this.handleChange5.bind(this);
  this.handleChange6 = this.handleChange6.bind(this);
  this.handleChange7 = this.handleChange7.bind(this);

  this.handleClick0 = this.handleClick0.bind(this);
  this.handleClick1 = this.handleClick1.bind(this);

  //Saves information to variables that is exported 
  this.saveInfo = this.saveInfo.bind(this);
}
  /*Handles the imput depth for the four sides of a block  */
handleChange0(event) {
  this.setState({
    Djup1: event.target.value
  });
  return(this.state);
}

handleChange1(event) {
  this.setState({
    Djup2: event.target.value
  });
  return(this.state);
}

handleChange2(event) {
  this.setState({
    Djup3: event.target.value
  });
  return(this.state);
}

handleChange6(event) {
  this.setState({
    Djup4: event.target.value
  });
  return(this.state);
}

  /*Handles the imput for length of the four sides of a block  */
handleChange3(event) {
  this.setState({
    Längd1: event.target.value
  });
  return(this.state);
}

handleChange4(event) {
  this.setState({
    Längd2: event.target.value
  });
  return(this.state);
}

handleChange5(event) {
  this.setState({
    Längd3: event.target.value
  });
  return(this.state);
}

handleChange7(event) {
  this.setState({
    Längd4: event.target.value
  });
  return(this.state);
}


handleClick0() {
  this.setState(state => ({
    isToggleOn: !state.isToggleOn
  }));
}

handleClick1() {
  this.setState(state => ({
    isToggleOn: !state.isToggleOn
  }));

}

//Saves the imputs in arrays 
saveInfo(){
  depth[0]=this.state.Djup1;
  depth[1]=this.state.Djup2;
  depth[2]=this.state.Djup3;
  depth[3]=this.state.Djup4;

  length[0]=this.state.Längd1;
  length[1]=this.state.Längd2;
  length[2]=this.state.Längd3;
  length[3]=this.state.Längd4;

}


  componentDidMount() {
    const drillblow1 = document.getElementById("drillblow1");
    const drillblow2 = document.getElementById("drillblow2");
    const drillblow3 = document.getElementById("drillblow3");
    const drillblow4 = document.getElementById("drillblow4");
    const drillsaw1 = document.getElementById("drillsaw1");
    const drillsaw2 = document.getElementById("drillsaw2");
    const drillsaw3 = document.getElementById("drillsaw3");
    const drillsaw4 = document.getElementById("drillsaw4");

/*Adds event listener to the method bottoms, enlightens the button when pressed, saves the method in a array */
//The methods choises: Blasting and Sawing, for the first side
    drillblow1.addEventListener("click", () => {
      drillblow1.classList.add("selected-button");
      drillsaw1.classList.remove("selected-button");
      methods.splice(0, 1, 'Blasting');
    });
    drillsaw1.addEventListener("click", () => {
      drillblow1.classList.remove("selected-button");
      drillsaw1.classList.add("selected-button");
      methods.splice(0, 1, 'Sawing');
    });
          
    //Method choice for the second side 
    drillblow2.addEventListener("click", () => {
      drillblow2.classList.add("selected-button");
      drillsaw2.classList.remove("selected-button");
      methods.splice(1, 1, 'Blasting');
    });
    drillsaw2.addEventListener("click", () => {
      drillsaw2.classList.add("selected-button");
      drillblow2.classList.remove("selected-button");
      methods.splice(1, 1, 'Sawing');
    });

    //Method choice for the third side 
    drillblow3.addEventListener("click", () => {
      drillblow3.classList.add("selected-button");
      drillsaw3.classList.remove("selected-button");
      methods.splice(2, 1, 'Blasting');
    });
    drillsaw3.addEventListener("click", () => {
      drillsaw3.classList.add("selected-button");
      drillblow3.classList.remove("selected-button");
      methods.splice(2, 1, 'Sawing');
    });

    //Method choice for the bottom side 
    drillblow4.addEventListener("click", () => {
      drillblow4.classList.add("selected-button");
      drillsaw4.classList.remove("selected-button");
      methods.splice(3, 1, 'Blasting');
    });
    drillsaw4.addEventListener("click", () => {
      drillsaw4.classList.add("selected-button");
      drillblow4.classList.remove("selected-button");
      methods.splice(3, 1, 'Sawing');
    });
  }
  render() {
    return (
      <div>
       
        <div className="wrapper-block" id="wrapper">
          
          {/*Displayes the imput values and method choice for side 1. The user enters height and length in a text field 
          and selects a mehod with a button click*/}
          <form className="dimension-form 1">
            <h1 className="sides">Sida 1:</h1>
            {/*Text field input for Depth (side 1), handleChange0 handles the imput */}
            <input
              type="text"
              placeholder="Djup"
              onChange={this.handleChange0}
            />
          {/*Text field input for Längd (side 1), handleChange3 handles the imput */}
           <input
              type="text"
              placeholder="Längd"
              onChange={this.handleChange3}
            />
            {/*Button click (side 1) method choise, the button handles the click */}
            <Link className="btn1" to="/workmethods/primaryBlock/dimensions">
              <button className="drillblow" id="drillblow1">
                Borrning + Sprängning
              </button>
              <button className="drillsaw" id="drillsaw1">
                Borrning + Sågning
              </button>
            </Link>
          </form>
          {/*Imput values and method choice for side 2*/}
          <form className="dimension-form 2">
            <h1 className="sides">Sida 2:</h1>
            <input
              type="text"
              placeholder="Djup"
              onChange={this.handleChange1}
            />
           <input
              type="text"
              placeholder="Längd"
              onChange={this.handleChange4}
            />
            <Link className="btn1" to="/workmethods/primaryBlock/dimensions">
              <button className="drillblow" id="drillblow2">
                Borrning + Sprängning
              </button>
              <button className="drillsaw" id="drillsaw2">
                Borrning + Sågning
              </button>
            </Link>
          </form>
          {/*Imput values and method choice for side 3*/}
          <form className="dimension-form 3">
            <h1 className="sides">Sida 3:</h1>
            <input
              type="text"
              placeholder="Djup"
              onChange={this.handleChange2}
            />
            <input
              type="text"
              placeholder="Längd"
              onChange={this.handleChange5}
            />
            <Link className="btn1" to="/workmethods/primaryBlock/dimensions">
              <button className="drillblow" id="drillblow3">
                Borrning + Sprängning
              </button>
              <button className="drillsaw" id="drillsaw3">
                Borrning + Sågning
              </button>
            </Link>
          </form>
          {/*Imput values and method choice for side 2*/}
          <form className="dimension-form 4">
            <h1 className="sides">Botten: </h1>
            <input
              type="text"
              placeholder="Djup"
              onChange={this.handleChange6}
            />
            <input
              type="text"
              placeholder="Längd"
              onChange={this.handleChange7}
            />
            <Link className="btn1" to="/workmethods/primaryBlock/dimensions">
              <button className="drillblow" id="drillblow4">
                Borrning + Sprängning
              </button>
              <button className="drillsaw" id="drillsaw4">
                Borrning + Sågning
              </button>
            </Link>
          </form>
          {/*Link to next page, saveInfo saves the values in arrays*/}
          <Link className="nextbtn" to="/workmethods/block">
            <button className="nextbtn" onClick={this.saveInfo}>
              Nästa
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export {depth,length,methods}