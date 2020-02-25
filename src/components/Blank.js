import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Blank extends Component {
    render() {
        return (
            <div>
                <Link to="/workmethods/primary/dimensions" className="btn1">
                <button>
                    Ta mig vidare
                </button>
                </Link>
            </div>
        );
    }
}

export default Blank;
