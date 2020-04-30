import React, { Component } from 'react';
import Slider from './Slider';
import { Link } from "react-router-dom";
import "./styles/DimensionsSkiva.scss";

var methodSide1 = "";
var methodSide2 ="";
var methodSideBottom = "";

export class DimensionsSkiva extends Component {


    componentDidMount() {
        const drillblow1 = document.getElementById('drillblow1');
        const drillblow2 = document.getElementById('drillblow2');
        const drillblow3 = document.getElementById('drillblow3');

        const drillsaw1 = document.getElementById('drillsaw1');
        const drillsaw2 = document.getElementById('drillsaw2');
        const drillsaw3 = document.getElementById('drillsaw3');


        drillblow1.addEventListener('click', () => {
            drillblow1.classList.add("selected-button");
            drillsaw1.classList.remove("selected-button");
            methodSide1 = "Blasting";
        });
        drillsaw1.addEventListener('click', () => {
            drillblow1.classList.remove("selected-button");
            drillsaw1.classList.add("selected-button");
            methodSide1 = "Sawing";
        });
        drillblow2.addEventListener('click', () => {
            drillblow2.classList.add("selected-button");
            drillsaw2.classList.remove("selected-button");
            methodSide2="Blasting";
        });
        drillsaw2.addEventListener('click', () => {
            drillsaw2.classList.add("selected-button");
            drillblow2.classList.remove("selected-button");
            methodSide2="Sawing";
        });

        drillblow3.addEventListener('click', () => {
            drillblow3.classList.add("selected-button");
            drillsaw3.classList.remove("selected-button");
            methodSideBottom = "Blasting";
        });
        drillsaw3.addEventListener('click', () => {
            drillsaw3.classList.add("selected-button");
            drillblow3.classList.remove("selected-button");
            methodSideBottom = "Sawing";
        });

    }
    render() {
        return (
            <div>
                <div className="wrapper" id="wrapper">
                    <form className="dimension-form 1">
                        <h1 className="sides">Sida 1:</h1>
                        Höjd: (cm)
                <Slider />
                        Längd: (cm)
                <Slider />
                        <Link className="btn1" to="/workmethods/primarySkiva/dimensions">
                            <button className="drillblow" id="drillblow1">Borrning + Sprängning</button>
                            <button className="drillsaw" id="drillsaw1">Borrning + Sågning</button>
                        </Link>
                    </form>

                    <form className="dimension-form 2">
                        <h1 className="sides">Sida 2:</h1>
                        Höjd: (cm)
                <Slider />
                        Längd: (cm)
                <Slider />
                        <Link className="btn1" to="/workmethods/primarySkiva/dimensions">
                            <button className="drillblow" id="drillblow2" >Borrning + Sprängning</button>
                            <button className="drillsaw" id="drillsaw2" >Borrning + Sågning</button>
                        </Link>
                    </form>

                  

                    <form className="dimension-form 2">
                        <h1 className="sides">Botten:</h1>
                        Höjd: (cm)
                <Slider />
                        Längd: (cm)
                <Slider />
                        <Link className="btn1" to="/workmethods/primarySkiva/dimensions">
                            <button className="drillblow" id="drillblow3" >Borrning + Sprängning</button>
                            <button className="drillsaw" id="drillsaw3" >Borrning + Sågning</button>
                        </Link>
                    </form>


                    <Link className="nextbtn" to="/workmethods/primarySkiva/dimensions/DSB2">
                        <button className="nextbtn">Nästa</button>

                    </Link>
                </div>
            </div>
        );
    }
}
export default DimensionsSkiva;
export {methodSide1, methodSide2, methodSideBottom}
