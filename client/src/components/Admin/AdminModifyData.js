import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/MainMenu.scss";

export class AdminModifyData extends Component  {
    render() {
        return (
            <div>
             
              
                <div className="wrapperDSB" id="wrapper">
                    <form className="dimension-form 1">
                        <h1 className="sides">Mata in ID nummret på inmatningen du vill Modifiera:</h1>
                        <input
              type="text"
              placeholder="ID"
              onChange={this.handleChange0}
            />
            
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
