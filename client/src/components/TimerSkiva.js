import { Link } from "react-router-dom";
import "./styles/Skiva.scss";
import React, {Component} from 'react';

var timeSide1 = 0;
var timeSide2 = 0;
var timeBottom = 0;

class TimerSkiva extends Component {
  constructor() {
    super();

    this.state = {
      status: false,
      runningTime0: 0,
      runningTime1: 0,
      runningTime2: 0
    };

    this.handleClick0 = this.handleClick0.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    
    this.handleReset0 = this.handleReset0.bind(this);
    this.handleReset1 = this.handleReset1.bind(this);

    this.handleReset0 = this.handleReset0.bind(this);
    this.handleReset1 = this.handleReset1.bind(this);
    this.handleReset2 = this.handleReset2.bind(this);

    this.saveTime = this.saveTime.bind(this);
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

  handleClick2 = () => {
    this.setState(state => {
      if (state.status2) {
        clearInterval(this.timer2);
      } else {
        const startTime2 = Date.now() - this.state.runningTime2;
        this.timer2 = setInterval(() => {
          this.setState({ runningTime2: Date.now() - startTime2 });
        });
      }
      return { status2: !state.status2 };
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

  handleReset2 = () => {
    clearInterval(this.timer2);
    this.setState({ runningTime2: 0, status2: false });
  };

  componentWillUnmount0() {
    clearInterval(this.timer0);
  }
  componentWillUnmount1() {
    clearInterval(this.timer1);
  }

  componentWillUnmount2() {
    clearInterval(this.timer2);
  }

  saveTime(){

    timeSide1=(Math.round((this.state.runningTime0 / 1000) % 60));
    timeSide2=(Math.round((this.state.runningTime1 / 1000) % 60));
    timeBottom=(Math.round((this.state.runningTime2 / 1000) % 60));
    console.log(timeSide1 + " " + timeSide2 + " " + timeBottom);

  }

  render() {
    const { status0, status1, status2 ,runningTime0, runningTime1, runningTime2 } = this.state;
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


            <p className="watchText">Botten:</p>
            <div className="test">
              {(Math.round(runningTime2) / 1000 / 60) << 0}:
              {Math.round((runningTime2 / 1000) % 60)}
            </div>
            <button className="timerbtn" id="start" onClick={this.handleClick2}>
              {status2 ? "Paus" : "Start"}
            </button>
            <button className="timerbtn" id="reset" onClick={this.handleReset2}>
              Reset
            </button>

          </div>
          <div className="timer-grid2">
            <Link to="/workmethods/primarySkiva/dimensions" className="btn1">
              <button onClick={this.saveTime}>Spara</button>
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
export {timeSide1, timeSide2, timeBottom};
