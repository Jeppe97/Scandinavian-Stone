import React, { Component } from 'react';
import Slider from './Slider';
import { Link } from "react-router-dom";

export class Dimensions extends Component {

    constructor() {
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.refreshPage = this.refreshPage.bind(this)
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
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
    refreshPage() {
        window.location.reload();
    }

    render() {
        return (
            <div>
                Sida 1
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
                                    <Link to="/">
                                        <button onClick={ this.refreshPage }> Sågning </button>
                                        <button onClick={ this.refreshPage }> Sprängning </button>
                                        <button onClick={ this.refreshPage }> Borrning </button>
                                    </Link>
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
