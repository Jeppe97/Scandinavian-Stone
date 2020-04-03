<<<<<<< HEAD
import React from "react";
import "./styles/Header.scss";

function Header() {
  return (
    <div className="Header">
      <div className="CompanyName">Scandinavian Stone</div>
      <div className="QuarryName">Bjärlöv</div>
    </div>
  );
=======
import React, { Component } from "react";
import "./styles/Header.scss";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      status: false,
      runningTime: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleClick = () => {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - this.state.runningTime;
        this.timer = setInterval(() => {
          this.setState({ runningTime: Date.now() - startTime });
        });
      }
      return { status: !state.status };
    });
  };
  handleReset = () => {
    clearInterval(this.timer);
    this.setState({ runningTime: 0, status: false });
  };
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { status, runningTime } = this.state;
    return (
       <div className="Header">
        <p className="watchText">Huvudtimer:</p>
        <div className="test">
          {(Math.round(runningTime) / 1000 / 60) << 0}:
          {Math.round((runningTime / 1000) % 60)}
        </div>
        <button className="timerbtn" id="start" onClick={this.handleClick}>
          {status ? "Paus" : "Start"}
        </button>
        <button className="timerbtn" id="reset" onClick={this.handleReset}>
          Nollställ
        </button>
      </div>
    );
  }
>>>>>>> 1ad328b25c2a347e5f87a5abcb0e0058e9f5f0c9
}

export default Header;
