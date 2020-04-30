import React from "react";
import Menu from "@material-ui/core/Menu";
import { Link, BrowserRouter } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import "../styles/admin.scss";
import "../styles/MainMenu.scss";

var locatonQuarry = "";

export default class AdminDropdownMenuPlace extends React.Component {
  constructor(props)
  {
    super(props);
    {
      this.state = {
        quarry: props.quarry,
        anchorEl: null,
        place: props.place
      }
    }
  }
  static defaultProps = {
    displayQuarry: "Vald Stenbrott:",
    displayPlace: "Vald Plats:",
    place: "0",
    quarry: "N/A"
  }

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

 HandleZero = () => {
  this.setState({place :0, anchorEl: null}
    )
 };
 HandleOne = () => {
   
  this.setState({place :1,anchorEl: null},
  () => {
   console.log("felfelfel " + this.state.place)
 }
  )
 };
 HandleTwo = () => {
   
  this.setState({place :2,anchorEl: null},
  () => {
   console.log("felfelfel " + this.state.place)
 }
  )
 };
 HandleThree = () => {
   
  this.setState({place :3,anchorEl: null},
  () => {
   console.log("felfelfel " + this.state.place)
 }
  )
 };
 HandleFour = () => {
   
  this.setState({place :4,anchorEl: null},
  () => {
   console.log("felfelfel " + this.state.place)
 }
  )
 };
 HandleFive = () => {
   
  this.setState({place :5,anchorEl: null},
  () => {
   console.log("felfelfel " + this.state.place)
 }
  )
 };
 HandleSix = () => {
   
  this.setState({place :6,anchorEl: null},
  () => {
   console.log("felfelfel " + this.state.place)
 }
  )
 };
 HandleSeven = () => {
   
  this.setState({place :7,anchorEl: null},
  () => {
   console.log("felfelfel " + this.state.place)
 }
  )
 };


  render() {
    const { anchorEl } = this.state;

    locatonQuarry = this.props.place;

    return (
      <div className="MainMenu">
        <button
          className="btn1"
          aria-owns={anchorEl ? "place-menu" : null}
          aria-haspopup="true"
          variant="contained"
          onClick={this.handleOpen}
        >
          Välj Plats
        </button>
        <Menu
          id="place-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: 2000,
              width: 400
            }
          }}
        >
          <MenuItem onClick={this.HandleZero}>0</MenuItem>
          <MenuItem onClick={this.HandleOne } >1</MenuItem>
          <MenuItem onClick={this.HandleTwo} >2</MenuItem>
          <MenuItem onClick={this.HandleThree} >3</MenuItem>
          <MenuItem onClick={this.HandleFour} >4</MenuItem>
          <MenuItem onClick={this.HandleFive} >5</MenuItem>
          <MenuItem onClick={this.HandleSix} >6</MenuItem>
          <MenuItem onClick={this.HandleSeven} >7</MenuItem>
        </Menu>
        {/*console.log(path)}
        {/*path === "1" ? (
          <h1>Plats 0</h1>
        ) : (
          ""
        )*/}
        <h1>{this.props.displayPlace + " " +this.state.place}</h1>
      </div>
    );
  }
}
export {locatonQuarry};