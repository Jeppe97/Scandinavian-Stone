import React, { Component } from 'react'
import { Link } from 'react-router-dom';
var choiceWorkMethods ="";

export default class WorkMethods extends Component {
  
    handleClick1(){
        choiceWorkMethods="Primär";
        console.log('CLICKED' + choiceWorkMethods);
       
    }
    handleClick2(){
        choiceWorkMethods="Skiva";
        console.log('CLICKED' + choiceWorkMethods);
       
    }

    handleClick3(){
        choiceWorkMethods="Block";
        console.log('CLICKED' + choiceWorkMethods);
       
    }

    render() {
        return (
            <div>
                <div className="MainMenu">
                    
                    <Link to="/workmethods/primary" className="btn1">
                        <button onClick={this.handleClick1}>Primär</button>
                    </Link>
                    <Link to="/workmethods" className="btn1">
                        <button onClick={this.handleClick2}>Skiva</button>
                    </Link>
                    <Link to="/workmethods" className="btn1">
                        <button onClick={this.handleClick3}>Block</button>
                    </Link>
                    <Link to="/mainmenu" className="btn1">
                        <button>Tillbaka</button>
                    </Link>
                </div>
            </div>
        )
    }
}
console.log('in work methods : ');
export {choiceWorkMethods}