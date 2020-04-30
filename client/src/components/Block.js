//import './style.css';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {timeSide1, timeSide2, timeBottom} from "./TimerBlock";
import {methodSide1,methodSide2,methodSideBottom} from "./DimensionsBlock"

class Block extends Component {
  constructor() {
    super();

    this.state = {
      Volym: "",
      Vikt: "",
      Kvalite: "",
      Pris: "",
      blocks: [],
     
    };

    this.state = { isToggleOn: true };

    this.handleChange0 = this.handleChange0.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);

    this.handleClick0 = this.handleClick0.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    
    this.componentDidMount=this.componentDidMount.bind(this);

    this.addBlock = this.addBlock.bind(this);
    this.addBlockSide1 = this.addBlockSide1.bind(this);
    this.addBlockSide2 = this.addBlockSide2.bind(this);
    this.addBlockSideBottom = this.addBlockSideBottom.bind(this);
  
   
  }
 
  componentDidMount() {
    // get all the old blocks
    console.log("getting the blocks ");
    fetch('/getblock')
        .then(res => res.json())
        .then(blocks => this.setState({ blocks }, () => console.log('blocks fetched', blocks)));
  }

  addBlock = _ =>{
    //add a new block for this 
    console.log("Adding a block");
   // var {blocks} = this.state;
    fetch(`/block/instert?mainTime=${1}`)
    .then(this.addBlockSide1)
    .then(this.addBlockSide2)
    .then(this.addBlockSideBottom)
    
    .catch(err => console.error(err))
    
  }

  addBlockSide1 = _ =>{
    var blockArrayID = this.state.blocks.map((block) => block.blockID);
    var blockID = blockArrayID.pop() + 1; // +1 beacause of newly addes block
    console.log("block id" + blockID);
    var volumeTemp = this.state.Volym;
    var weightTemp = this.state.Vikt;
    var qualityTemp = this.state.Kvalite;
    var priceTemp = this.state.Pris; 
   
    fetch(`/blockside/instert?blockID=${blockID}&sideNumber=${1}&time=${timeSide1}&method=${methodSide1}&volume=${volumeTemp}&weight=${weightTemp}&quality=${qualityTemp}&price=${priceTemp}`)
    .then(response => response.json())
    .catch(err => console.error(err))

  }

  addBlockSide2 = _ =>{
    var blockArrayID = this.state.blocks.map((block) => block.blockID);
    var blockID = blockArrayID.pop() + 1; // +1 beacause of newly addes block

    var volumeTemp = this.state.Volym;
    var weightTemp = this.state.Vikt;
    var qualityTemp = this.state.Kvalite;
    var priceTemp = this.state.Pris; 
 
    fetch(`/blockside/instert?blockID=${blockID}&sideNumber=${2}&time=${timeSide2}&method=${methodSide2}&volume=${volumeTemp}&weight=${weightTemp}&quality=${qualityTemp}&price=${priceTemp}`)
    .then(response => response.json())
    .catch(err => console.error(err))

  }

  addBlockSideBottom = _ =>{
    var blockArrayID = this.state.blocks.map((block) => block.blockID);
    var blockID = blockArrayID.pop() + 1; // +1 beacause of newly addes block

    var volumeTemp = this.state.Volym;
    var weightTemp = this.state.Vikt;
    var qualityTemp = this.state.Kvalite;
    var priceTemp = this.state.Pris; 
    
    fetch(`/blockside/instert?blockID=${blockID}&sideNumber=${3}&time=${timeBottom}&method=${methodSideBottom}&volume=${volumeTemp}&weight=${weightTemp}&quality=${qualityTemp}&price=${priceTemp}`)
    .then(response => response.json())
    .catch(err => console.error(err))

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
  }

  handleClick1() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }


  render() {
    
    return (
      <div className="container container-formD2">

        <div>
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
        </div>
        <div className="block-grid">
          <Link to="/mainmenu" className="btn1">
            <button onClick={e => { this.addBlock(); this.handleClick0(e) }}>
            {this.state.isToggleOn ? "Spara" : "Sparat"}
            </button>
          </Link>
          <Link to="/workmethods" className="btn1">
            <button onClick={this.handleClick}>
              {(this.setState.isToggleOn = "Avbryt")}
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Block;
