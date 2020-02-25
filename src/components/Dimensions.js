import React, { Component } from 'react';
import Slider from './Slider';

export class Dimensions extends Component {
    render() {
        return (
            <div>
            <form className="dimension-form">
                Höjd: (cm)
                <Slider/>
                Längd: (cm)
                <Slider/>
                 
               <button className="dimbtn1">Arbetsmetod: </button>
            </form>
            </div>
        );
    }
}
export default Dimensions;
