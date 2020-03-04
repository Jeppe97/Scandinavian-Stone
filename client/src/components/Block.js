
//import './style.css';
import React, { Component } from "react"
import { Link } from "react-router-dom"



class Block extends Component {
  constructor() {
    super();


    this.state = {
     Volym: "",
    Vikt: "",
      Kvalite: "",
      Pris:""

    }

    this.state = { isToggleOn: true };

    this.handleChange0 = this.handleChange0.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleClick0 = this.handleClick0.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);


  }
  handleChange0(event) {
    this.setState({
      Volym: event.target.value,

    })
  }

  handleChange1(event) {
    this.setState({
     Vikt: event.target.value,

    })
  }

  handleChange2(event) {
    this.setState({
     Kvalite: event.target.value,

    })
  }

  handleChange3(event) {
    this.setState({
      Pris: event.target.value,

    })
  }

  handleClick0() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  handleClick1() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
    <div className="container container-formD2">
        <div>
          <form>
          Volym(m³): <input type="text" placeholder="Volym(m³)" onChange={this.handleChange0} />

          Vikt(ton): <input type="text" placeholder="Vikt(ton)" onChange={this.handleChange1} />

          Kvalité: <input type="text" placeholder="Kvalité" onChange={this.handleChange2} />

          Pris:   <input type="text" placeholder="Pris" onChange={this.handleChange3} />
         
         
          </form>
        </div >
       <div className="block-grid">
      <Link to="/mainmenu" className="btn1">
          <button onClick={this.handleClick0}>
            {this.state.isToggleOn ? "Spara" : "Sparat"}</button>
      </Link>
      <Link to="/workmethods" className="btn1">
          <button onClick={this.handleClick}>
            {this.setState.isToggleOn = "Avbryt"}</button>
      </Link>
      </div>
  </div>
    )
  }
}
export default Block;