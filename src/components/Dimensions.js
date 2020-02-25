import React, { Component } from 'react';
import Slider from './Slider';

export class Dimensions extends Component {

    constructor() {
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }
    closeMenu() {

        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }
    changeBackground(e) {
        e.target.style.background = 'red';
    }

    render() {
        return (
            <div>
                <form className="dimension-form">
                    Höjd: (cm)
                <Slider />
                    Längd: (cm)
                <Slider />

                    <button onClick={this.showMenu} className="dimbtn1">
                        Välj Arbetsmetod:
                    </button>

                    {
                        this.state.showMenu
                        ? (
                            <div className="menu-active">
                            <button> Sågning </button>
                            <button> Sprängning </button>
                            <button> Borrning </button>
                        </div>
                        )
                        : (
                            null
                        )
                    }
                </form>
            </div>
        );
    }
}
export default Dimensions;
