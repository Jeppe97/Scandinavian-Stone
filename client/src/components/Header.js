import React, { Component } from "react";
import "./styles/Header.scss";

var mainTime =0;

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
  componentDidMount() {
    const stopButton = document.getElementById("reset");
    const header = document.getElementById("header");
    
    const root = document.getElementById("root");
    
    var box = document.createElement("div");
    var form1 = document.createElement("form");
    var textfield1 = document.createElement("input");
    var cBox1 = document.createElement("input");
    var cBox2 = document.createElement("input");
    var cBox3 = document.createElement("input");


    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    var reasonHeader = document.createElement("h3");
    var reasonLabel = document.createElement("label");
    var reasonLabelCBox1 = document.createElement("label");
    var reasonLabelCBox2 = document.createElement("label");
    var reasonLabelCBox3 = document.createElement("label");


    var checkbox1 = document.createElement("button");
    var checkbox2 = document.createElement("button");
    var checkbox3 = document.createElement("button");
    
    box.className = "popup";
    checkbox1.className = "btn1";
    checkbox2.className = "btn1";
    checkbox3.className = "btn1";
    form1.className = "form";

    reasonHeader.style.gridColumn = "1/3";
    checkbox1.style.gridColumn = "1/3";

    //Positions the popup in the center of the screen ALWAYS.
    

    textfield1.id = "reason";

    checkbox1.innerText="Spara";
    checkbox2.innerText="Tja";
    checkbox3.innerText="Tjo";
    reasonLabel.textContent = "Övrigt: ";
    reasonLabelCBox1.textContent = "Driftstopp ";
    reasonLabelCBox2.textContent = "Lunch ";
    reasonLabelCBox3.textContent = "Oväder ";

    reasonHeader.textContent = "Andledning till stopp:";

    textfield1.setAttribute("type", "text");
    cBox1.setAttribute("type", "checkbox");
    cBox2.setAttribute("type", "checkbox");
    cBox3.setAttribute("type", "checkbox");

    reasonLabel.setAttribute("for", "reason");

    form1.appendChild(reasonHeader);
    form1.appendChild(reasonLabelCBox1);
    form1.appendChild(cBox1);
    form1.appendChild(reasonLabelCBox2);
    form1.appendChild(cBox2);
    form1.appendChild(reasonLabelCBox3);
    form1.appendChild(cBox3);
    
    form1.appendChild(reasonLabel);
    form1.appendChild(textfield1);
    
   
    checkbox1.addEventListener("click", function() {

      form1.removeChild(checkbox1);
      box.removeChild(form1);
      root.removeChild(box);
     
    })

    stopButton.addEventListener("click", () => {
      var boxWidth
      var boxHeight

      if(window.innerWidth < 1000){
        boxWidth = 500;
        boxHeight = 500;
      }
      else{
        boxWidth = 500;
        boxHeight = 500;
      }

      box.style.height = boxHeight + 'px';
      box.style.width =  boxWidth + 'px';
      box.style.top = ((windowHeight/2) - (boxHeight/2)) + "px";

      form1.appendChild(checkbox1);
      box.appendChild(form1);
      root.appendChild(box);

    });

   
  }
  handleClick = () => {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer);
        mainTime=(Math.round((this.state.runningTime / 1000) % 60));
        console.log(mainTime + " main time");
      } else {
        const startTime = Date.now() - this.state.runningTime;
        this.timer = setInterval(() => {
          this.setState({ runningTime: Date.now() - startTime });
        });
        mainTime=(Math.round((this.state.runningTime / 1000) % 60));
        console.log(mainTime + " main time");
      }
      return { status: !state.status };
    });
  };
  handleReset = () => {
    clearInterval(this.timer);
    this.setState({ runningTime: 0, status: false });
    mainTime=0;
  };
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { status, runningTime } = this.state;

    return (
       <div className="Header" id="header">
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
}

export default Header;
export {mainTime};