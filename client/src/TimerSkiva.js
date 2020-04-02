import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./components/styles/Skiva.scss";

class TimerSkiva extends Component {
  constructor() {
    super();

    this.state = {
      status: false,
      runningTime0: 0,
      runningTime1: 0
    };

    this.handleClick0 = this.handleClick0.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);

    this.handleReset0 = this.handleReset0.bind(this);
    this.handleReset1 = this.handleReset1.bind(this);
  }

  handleClick0 = () => {
    this.setState(state => {
      if (state.status0) {
        clearInterval(this.timer0);
      } else {
        const startTime0 = Date.now() - this.state.runningTime0;
        this.timer0 = setInterval(() => {
          this.setState({ runningTime0: Date.now() - startTime0 });
        });
      }
      return { status0: !state.status0 };
    });
  };

  handleClick1 = () => {
    this.setState(state => {
      if (state.status1) {
        clearInterval(this.timer1);
      } else {
        const startTime1 = Date.now() - this.state.runningTime1;
        this.timer1 = setInterval(() => {
          this.setState({ runningTime1: Date.now() - startTime1 });
        });
      }
      return { status1: !state.status1 };
    });
  };

  handleReset0 = () => {
    clearInterval(this.timer0);
    this.setState({ runningTime0: 0, status0: false });
  };

  handleReset1 = () => {
    clearInterval(this.timer1);
    this.setState({ runningTime1: 0, status1: false });
  };

  componentWillUnmount0() {
    clearInterval(this.timer0);
  }
  componentWillUnmount1() {
    clearInterval(this.timer1);
  }

  render() {
    const { status0, status1, runningTime0, runningTime1 } = this.state;
    return (
      <div>
        <div className="container container-formD2">
          <div className="timer-grid3">
            <p className="watchText">Sida 1:</p>
            <div className="test">
              {(Math.round(runningTime0) / 1000 / 60) << 0}:
              {Math.round((runningTime0 / 1000) % 60)}
            </div>
            <button className="timerbtn" id="start" onClick={this.handleClick0}>
              {status0 ? "Paus" : "Start"}
            </button>
            <button className="timerbtn" id="reset" onClick={this.handleReset0}>
              Reset
            </button>

            <p className="watchText">Sida 2:</p>
            <div className="test">
              {(Math.round(runningTime1) / 1000 / 60) << 0}:
              {Math.round((runningTime1 / 1000) % 60)}
            </div>
            <button className="timerbtn" id="start" onClick={this.handleClick1}>
              {status1 ? "Paus" : "Start"}
            </button>
            <button className="timerbtn" id="reset" onClick={this.handleReset1}>
              Reset
            </button>
          </div>
          <div className="timer-grid2">
            <Link to="/workmethods/primarySkiva/dimensions" className="btn1">
              <button>Spara</button>
            </Link>
            <Link to="/workmethods" className="btn1">
              <button>Avbryt</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default TimerSkiva;
