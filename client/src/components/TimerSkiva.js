import { Link } from "react-router-dom";
import "./styles/timer.scss";
import React, {Component} from 'react';
/*This class handles the three timers for a disc. The user will measuer the time it takes to process each side*/

//Stores the times for the sides on a disc in these variables 
var timeSide1 = 0;
var timeSide2 = 0;
var timeBottom = 0;

class TimerSkiva extends Component {
  constructor() {
    super();
    //State that handles the times 
    this.state = {
      status: false,
      runningTime0: 0,
      runningTime1: 0,
      runningTime2: 0
    };
    //Handles when the users starts/paus the timer 
    this.handleClick0 = this.handleClick0.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    
    this.handleReset0 = this.handleReset0.bind(this);
    this.handleReset1 = this.handleReset1.bind(this);
    
    //Resets the timer to zero
    this.handleReset0 = this.handleReset0.bind(this);
    this.handleReset1 = this.handleReset1.bind(this);
    this.handleReset2 = this.handleReset2.bind(this);

    this.saveTime = this.saveTime.bind(this);
  }
//Stores the time in variables, devides the times by / 1000 and %60 since the timer uses milliseconds
  saveTime(){
    
    timeSide1=(Math.round((this.state.runningTime0 / 1000) % 60));
    timeSide2=(Math.round((this.state.runningTime1 / 1000) % 60));
    timeBottom=(Math.round((this.state.runningTime2 / 1000) % 60));
    console.log(timeSide1 + " " + timeSide2 + " " + timeBottom);

  }
//Starts or pause the first timer depending on the state. If the timer is paused it will start, or if its started it will be paused
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
//Starts or pause the second timer
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
//Starts or pause the third timer 
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

  
/*Restes the timers (visualy on the page and the state value)*/
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

/*Cleares the time when the page is loaded*/
  componentWillUnmount0() {
    clearInterval(this.timer0);
  }
  componentWillUnmount1() {
    clearInterval(this.timer1);
  }
  componentWillUnmount2() {
    clearInterval(this.timer2);
  }

  refreshPage() {
    window.location.assign("/");
  }
  render() {
    const { status0, status1, status2 ,runningTime0, runningTime1, runningTime2 } = this.state;
    return (
      <div>
            
        <div className="container-form-timer">
           {/*Timer for side 1*/}
            <p className="watchText">Sida 1:</p>
            <div className="counter">
              {(Math.round(runningTime0) / 1000 / 60) << 0}:
              {Math.round((runningTime0 / 1000) % 60)}
            </div>
            {/*When the button "Start/Pause" is clicked it starts/pauses depending on the current state */}
            <button className="timerbtn start" id="start" onClick={this.handleClick0}>
              {status0 ? "Paus" : "Start"}
            </button>

            {/*When the button "Reset" is clicked the timer will be reset*/}
            <button className="timerbtn reset" id="reset" onClick={this.handleReset0}>
            Nollställ
            </button>

            {/*The timer for the second side*/}
            <p className="watchText">Sida 2:</p>
            <div className="counter">
              {(Math.round(runningTime1) / 1000 / 60) << 0}:
              {Math.round((runningTime1 / 1000) % 60)}
            </div>
            <button className="timerbtn start" id="start" onClick={this.handleClick1}>
              {status1 ? "Paus" : "Start"}
            </button>
            <button className="timerbtn reset" id="reset" onClick={this.handleReset1}>
            Nollställ
            </button>

            {/*The timer for the bottom side*/}
            <p className="watchText">Botten:</p>
            <div className="counter">
              {(Math.round(runningTime2) / 1000 / 60) << 0}:
              {Math.round((runningTime2 / 1000) % 60)}
            </div>
            <button className="timerbtn start" id="start" onClick={this.handleClick2}>
              {status2 ? "Paus" : "Start"}
            </button>
            <button className="timerbtn reset" id="reset" onClick={this.handleReset2}>
              Nollställ
            </button>

          {/*When the clicking on the "Save" button, the times will be saved and the user will be sent to the dimensionDisc page*/}
          <Link className="btn1 savebtn" to="/workmethods/primarySkiva/dimensions">
          <button onClick={this.saveTime}>Spara</button>
        </Link>

        {/*When the clicking on the "Avbrut" button, the user will be sent to the workmethod page*/}
        <Link to="/workmethods" className="btn1 cancelbtn">
          <button>Avbryt</button>
        </Link>
        </div>
      </div>
    );
  }
}
export default TimerSkiva;
export {timeSide1, timeSide2, timeBottom};