import React, { Component } from 'react';
import Slider from './Slider';
import { Link } from "react-router-dom";

export class bS2 extends Component {

    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div >
                    <form className="dimension-form 1">
                        <h1 className="sides">Sida 1:</h1>
                        Antal hål:
                <Slider />
                        Mängd sprängdeg:
                <Slider />
                      

                    </form>

                    
                    <form className="dimension-form 2">
                        <h1 className="sides">Sida 2:</h1>
                        Antal hål:
                <Slider />
                        Mängd sprängdeg:
                <Slider />
                        <Link className="btn1" to="/">
                            <button>Spara</button>
                            
                        </Link>
                    </form>
                    
                 
                    
                  
                </div>
            </div>
        );
    }
}
export default bS2;
