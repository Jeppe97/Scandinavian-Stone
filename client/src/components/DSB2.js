import React, { Component } from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import "./styles/DimensionsDSB2.scss";
import {timeSide1, timeSide2, timeBottom} from "./TimerSkiva"
import {methodSide1, methodSide2, methodSideBottom} from "./DimensionsDisc"
import { methodSide3 } from "./Dimensions";


export class DSB2 extends Component {
  constructor() {
    super();

    this.state = {
      sprängSort0:"",
      sprängSort1:"",
      sprängSort2:"",
      sprängSort3:"",
      discs: [],
    };


    this.state = { isToggleOn: true };

    this.handleChange0 = this.handleChange0.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);

    this.componentDidMount = this.componentDidMount.bind(this);
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

  componentDidMount() {
    fetch('/getdisc')
        .then(res => res.json())
        .then(discs => this.setState({ discs }, () => console.log('DiscID fetched', discs)));
  }

//add a new disc 
  addDisc = _ =>{
    var {discs} = this.state;
    fetch(`/disc/instert?discNumber=${discs}`)
    .then(this.addSide1)
    .catch(err => console.error(err))
    
  }

//add values fro one of the discs sides
  addSide1 = _ =>{
    console.log("adding disc side");
    var discArrayID = this.state.discs.map((disc) => disc.discID);
    var discID = discArrayID.pop() + 1; // +1 beacause of newly added block
    console.log("disc id" + discID);
    var blastingTemp1 = this.state.sprängSort0;

    fetch(`/side/instert?discID=${discID}&sideNumber=${1}&time=${timeSide1}&hight=${0}&length=${0}&method=${methodSide1}&nrOfHoles=${0}&lengthHoles=${0}&blastingSort=${blastingTemp1}&amount=${0}`)
    .then(this.getQuarry)
    .catch(err => console.error(err))
 
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
