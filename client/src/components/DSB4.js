import React, { Component } from 'react';
import Slider from './Slider';
import { Link } from "react-router-dom";
import "./styles/DSB.scss";
import "./styles/navbar.scss"

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

        sprängSort0:"",
        sprängSort1:"",
        sprängSort2:"",
        sprängSort3:"",

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
        
        
      }
      handleChange0(event) {
        this.setState({
          AntalHål0: event.target.value
        });
      }
    
      handleChange1(event) {
        this.setState({
          AntalHål1: event.target.value
        });

      }
    
      handleChange2(event) {
        this.setState({
          AntalHål2: event.target.value
        });
      }
    
      handleChange3(event) {
        this.setState({
          AntalHål3: event.target.value
        });

      }


      handleChange4(event) {
        this.setState({
          LängdPåHål0: event.target.value
        });
      }
    
      handleChange5(event) {
        this.setState({
          LängdPåHål1: event.target.value
        });

      }
    
      handleChange6(event) {
        this.setState({
          LängdPåHål2: event.target.value
        });
      }
    
      handleChange7(event) {
        this.setState({
          LängdPåHål3: event.target.value
        });

      }


       handleChange8(event) {
        this.setState({
          SprängSort0: event.target.value
        });
      }
    
      handleChange9(event) {
        this.setState({
          SprängSort1: event.target.value
        });

      }
    
      handleChange10(event) {
        this.setState({
          SprängSort2: event.target.value
        });
      }
    
      handleChange11(event) {
        this.setState({
          SprängSort3: event.target.value
        });

      }

      handleChange12(event) {
        this.setState({
          MängdSprängDeg0: event.target.value
        });
      }
    
      handleChange13(event) {
        this.setState({
          MängdSprängDeg1: event.target.value
        });

      }
    
      handleChange14(event) {
        this.setState({
          MängdSprängDeg2: event.target.value
        });
      }
    
      handleChange15(event) {
        this.setState({
          MängdSprängDeg3: event.target.value
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
              placeholder="Spräng Sort"
              onChange={this.handleChange8}
            />
       
       <input
              type="text"
              placeholder="Mängd Sprängdeg"
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
              placeholder="Spräng Sort"
              onChange={this.handleChange9}
            />
       
       <input
              type="text"
              placeholder="Mängd Sprängdeg"
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
              placeholder="Spräng Sort"
              onChange={this.handleChange10}
            />
       
       <input
              type="text"
              placeholder="Mängd Sprängdeg"
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
              placeholder="Spräng Sort"
              onChange={this.handleChange11}
            />
       
       <input
              type="text"
              placeholder="Mängd Sprängdeg"
              onChange={this.handleChange15}
            />
                    </form>
                    <Link className="nextbtn" to="/workmethods">
                    <button  className="nextbtn">Spara</button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default DSB4;
