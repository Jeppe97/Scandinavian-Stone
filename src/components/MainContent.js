
//import './style.css';
import React, { Component } from "react"
import { Link } from "react-router-dom"



class MainContent extends Component {
  constructor() {
    super();


    this.state = {
      Höjd: "",
      Bredd: "",
      Längd: "",
  
     

    }
    this.state = { isToggleOn: true };

    this.handleChange0 = this.handleChange0.bind(this)
    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleClick0 = this.handleClick0.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);


  }
  handleChange0(event) {
    this.setState({
      Höjd: event.target.value,

    })
  }

  handleChange1(event) {
    this.setState({
      Bredd: event.target.value,

    })
  }

  handleChange2(event) {
    this.setState({
      Längd: event.target.value,

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
      <div className="container container-form">
        <div>
          <form>
            Höjd:   <input type="text" placeholder="Höjd" onChange={this.handleChange0} />
            Bredd: <input type="text" placeholder="Bredd" onChange={this.handleChange1} />
            Längd: <input type="text" placeholder="Längd" onChange={this.handleChange2} />
          </form>
        </div>
        <Link to="/mainmenu" className="btn1">
          <button onClick={this.handleClick0} className="form-buttons-primary">
            {this.state.isToggleOn ? "Spara" : "Sparat"}</button>
        </Link>
        <Link to="/workmethods" className="btn1">
          <button onClick={this.handleClick} className="form-buttons-primary">
          {this.state.isToggleOn = "Avbryt"}</button>
        </Link>
      </div>
    )
  }
}
export default MainContent;