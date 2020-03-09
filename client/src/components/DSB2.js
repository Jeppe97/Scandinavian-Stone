import React, { Component } from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import "./styles/DSB.scss";

export class DSB2 extends Component {
  constructor() {
    super();

    this.state = {};
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
            Spräng sort:
            <Slider />
            Mängd sprängdeg:
            <Slider />
          </form>

          <form className="dimension-form 2">
            <h1 className="sides">Sida 2:</h1>
            Antal hål:
            <Slider />
            Längd på hålen:
            <Slider />
            Spräng sort:
            <Slider />
            Mängd sprängdeg:
            <Slider />
          </form>
          <Link className="nextbtnDSB" to="/">
          <button onClick={this.refreshPage} className="nextbtnDSB">Spara</button>
        </Link>
        </div>
        
      </div>
    );
  }
}
export default DSB2;
