import React, { Component } from 'react';
import { Link } from "react-router-dom";

/*Page for removing data in the database (not implemented) */
export class AdminModifyData extends Component {

  constructor() {
    super();

    this.state = {
      ID: "",
    };

    this.state = { isToggleOn: true };

    this.handleChange0 = this.handleChange0.bind(this);

  }
  handleChange0(event) {
    //set the state to the imput (ID number)
    this.setState({
      ID: event.target.value
    });
  }
  render() {
    return (
      <div>

        <div className="wrapperSides" id="wrapper">
          <form className="dimension-form 1">
            <h1 className="sides">Mata in ID nummret på inmatningen du vill ta bort:</h1>
            {/*Imput for the id nummer you want to delete */}
            <input
              type="text"
              placeholder="ID"
              onChange={this.handleChange0}
            />
            <button>Godkänn</button>
          </form>
          
          <Link to="/AdminMainmenu" className="btn1">
            <button>Tillbaka</button>
          </Link>

        </div>
      </div>
    );
  }

};
export default AdminModifyData;
