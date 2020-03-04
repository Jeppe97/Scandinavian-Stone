import React, { Component } from 'react';
import Slider from './Slider';
import { Link } from "react-router-dom";

export class Dimensions extends Component {

    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <form className="dimension-form 1">
                        <h1 className="sides">Sida 1:</h1>
                        Höjd: (cm)
                <Slider />
                        Längd: (cm)
                <Slider />
                        <Link className="btn1" to="/workmethods/primary/dimensions">
                            <button>Borrning + Sprängning</button>
                            <button>Borrning + Sågning</button>
                        </Link>
                    </form>

                    <form className="dimension-form 2">
                        <h1 className="sides">Sida 2:</h1>
                        Höjd: (cm)
                <Slider />
                        Längd: (cm)
                <Slider />
                        <Link className="btn1" to="/">
                            <button>Borrning + Sprängning</button>
                            <button>Borrning + Sågning</button>
                        </Link>
                    </form>

                    <form className="dimension-form 3">
                        <h1 className="sides">Sida 3:</h1>
                        Höjd: (cm)
                <Slider />
                        Längd: (cm)
                <Slider />
                        <Link className="btn1" to="/">
                            <button>Borrning + Sprängning</button>
                            <button>Borrning + Sågning</button>
                        </Link>
                    </form>

                    <form className="dimension-form 4">
                        <h1 className="sides">Sida 4:</h1>
                        Höjd: (cm)
                <Slider />
                        Längd: (cm)
                <Slider />
                        <Link className="btn1" to="/">
                            <button>Borrning + Sprängning</button>
                            <button>Borrning + Sågning</button>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}
export default Dimensions;
