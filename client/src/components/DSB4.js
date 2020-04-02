import React, { Component } from 'react';
import Slider from './Slider';
import { Link } from "react-router-dom";
import "./styles/DSB.scss";

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
        
      }
      handleChange0(event) {
        this.setState({
          sprängSort0: event.target.value
        });
      }
    
      handleChange1(event) {
        this.setState({
          sprängSort1: event.target.value
        });

      }
    
      handleChange2(event) {
        this.setState({
          sprängSort2: event.target.value
        });
      }
    
      handleChange3(event) {
        this.setState({
          sprängSort3: event.target.value
        });

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
                    <button onClick={this.refreshPage} className="nextbtn">Spara</button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default DSB4;
