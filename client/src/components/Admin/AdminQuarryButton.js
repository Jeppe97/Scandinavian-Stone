import React,{Component} from "react";
import { Link } from "react-router-dom";
import AdminDropdownMenuPlace from "./AdminDropdownMenuPlace"

var quarryChoice = "";

export default class AdminQuarryButton extends Component  {
   constructor(props)
   {
       super(props);
       this.state = {
           path : this.props.path,
           quarry: this.props.quarry,
           place: this.props.place           

       }

   }
   static defaultProps = {
       displayQuarry: "Vald Stenbrott:",
       displayPlace: "Vald Plats:",
       place: "0",
       quarry: "N/A"
   }
    render(){

    quarryChoice = this.props.quarry;

    return (
       <div>
           <AdminDropdownMenuPlace path={this.props.path}/>
           <Link to="/Admin-statistics">
           <h1>{this.props.displayQuarry + " " +this.props.quarry}</h1>
           
           <button
          className="btn1"          
          >
          Godkänn
        </button>
        </Link>
       </div>
   ) 

}
}
export {quarryChoice}