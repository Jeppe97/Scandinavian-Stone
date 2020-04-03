import React, { Component } from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";

export class Dimensions extends Component {
  refreshPage() {
    window.location.assign("/");
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

    drillblow1.addEventListener("click", () => {
      drillblow1.classList.add("selected-button");
      drillsaw1.classList.remove("selected-button");
    });
    drillsaw1.addEventListener("click", () => {
      drillblow1.classList.remove("selected-button");
      drillsaw1.classList.add("selected-button");
    });
    drillblow2.addEventListener("click", () => {
      drillblow2.classList.add("selected-button");
      drillsaw2.classList.remove("selected-button");
    });
    drillsaw2.addEventListener("click", () => {
      drillsaw2.classList.add("selected-button");
      drillblow2.classList.remove("selected-button");
    });
    drillblow3.addEventListener("click", () => {
      drillblow3.classList.add("selected-button");
      drillsaw3.classList.remove("selected-button");
    });
    drillsaw3.addEventListener("click", () => {
      drillsaw3.classList.add("selected-button");
      drillblow3.classList.remove("selected-button");
    });
    drillblow4.addEventListener("click", () => {
      drillblow4.classList.add("selected-button");
      drillsaw4.classList.remove("selected-button");
    });
    drillsaw4.addEventListener("click", () => {
      drillsaw4.classList.add("selected-button");
      drillblow4.classList.remove("selected-button");
    });
  }
  render() {
    return (
      <div>
        <div className="wrapper" id="wrapper">
          <form className="dimension-form 1">
            <h1 className="sides">Sida 1:</h1>
<<<<<<< HEAD
            Höjd: (cm)
            <Slider />
            Längd: (cm)
            <Slider />
            <Link className="btn1" to="/workmethods/primary/dimensions">
=======
            Djup: (cm)
            <Slider />
            Längd: (cm)
            <Slider />
            <Link className="btn1" to="/workmethods/dimensions">
>>>>>>> 1ad328b25c2a347e5f87a5abcb0e0058e9f5f0c9
              <button className="drillblow" id="drillblow1">
                Borrning + Sprängning
              </button>
              <button className="drillsaw" id="drillsaw1">
                Borrning + Sågning
              </button>
            </Link>
          </form>

          <form className="dimension-form 2">
            <h1 className="sides">Sida 2:</h1>
<<<<<<< HEAD
            Höjd: (cm)
            <Slider />
            Längd: (cm)
            <Slider />
            <Link className="btn1" to="/workmethods/primary/dimensions">
=======
            Djup: (cm)
            <Slider />
            Längd: (cm)
            <Slider />
            <Link className="btn1" to="/workmethods/dimensions">
>>>>>>> 1ad328b25c2a347e5f87a5abcb0e0058e9f5f0c9
              <button className="drillblow" id="drillblow2">
                Borrning + Sprängning
              </button>
              <button className="drillsaw" id="drillsaw2">
                Borrning + Sågning
              </button>
            </Link>
          </form>

          <form className="dimension-form 3">
            <h1 className="sides">Sida 3:</h1>
<<<<<<< HEAD
            Höjd: (cm)
            <Slider />
            Längd: (cm)
            <Slider />
            <Link className="btn1" to="/workmethods/primary/dimensions">
=======
            Djup: (cm)
            <Slider />
            Längd: (cm)
            <Slider />
            <Link className="btn1" to="/workmethods/dimensions">
>>>>>>> 1ad328b25c2a347e5f87a5abcb0e0058e9f5f0c9
              <button className="drillblow" id="drillblow3">
                Borrning + Sprängning
              </button>
              <button className="drillsaw" id="drillsaw3">
                Borrning + Sågning
              </button>
            </Link>
          </form>

          <form className="dimension-form 4">
            <h1 className="sides">Botten: </h1>
<<<<<<< HEAD
            Höjd: (cm)
            <Slider />
            Längd: (cm)
            <Slider />
            <Link className="btn1" to="/workmethods/primary/dimensions">
=======
            Djup: (cm)
            <Slider />
            Längd: (cm)
            <Slider />
            <Link className="btn1" to="/workmethods/dimensions">
>>>>>>> 1ad328b25c2a347e5f87a5abcb0e0058e9f5f0c9
              <button className="drillblow" id="drillblow4">
                Borrning + Sprängning
              </button>
              <button className="drillsaw" id="drillsaw4">
                Borrning + Sågning
              </button>
            </Link>
          </form>
<<<<<<< HEAD
          <Link className="nextbtn" to="/">
            <button onClick={this.refreshPage} className="nextbtn">
=======
          <Link className="nextbtn" to="/workmethods/dimensions/timer">
            <button className="nextbtn">
>>>>>>> 1ad328b25c2a347e5f87a5abcb0e0058e9f5f0c9
              Nästa
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Dimensions;
