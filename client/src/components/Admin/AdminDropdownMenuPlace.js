import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link, BrowserRouter } from "react-router-dom";
import "../styles/admin.scss";
import "../styles/MainMenu.scss";


export default class AdminDropdownMenuPlace extends React.Component {
  constructor(props){
    super(props);
  }
  state = {
    anchorEl: null
    
  };
 
  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  

  render() {
    const { anchorEl } = this.state;

    return (
      <div className="MainMenu">
        <BrowserRouter>
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
              maxHeight: 500,
              width: 400
            }
          }}
        >
          {console.log(this.props.path)}
          <MenuItem 
          onClick={this.handleClose}
          component={Link}
          to={this.props.path + "/0"}
          >0</MenuItem>
          <MenuItem 
          onClick={this.handleClose}
          component={Link}
          to={this.props.path + "/1"}>1</MenuItem>
          <MenuItem 
          onClick={this.handleClose}
          component={Link}
          to={this.props.path + "/2"}
          >2</MenuItem>
          <MenuItem 
          onClick={this.handleClose}
          component={Link}
          to={this.props.path + "/3"}
          >3</MenuItem>
          <MenuItem onClick={this.handleClose}
          component={Link}
          to={this.props.path + "/4"}
          >4</MenuItem>
          <MenuItem onClick={this.handleClose}
          component={Link}
          to={this.props.path + "/5"}
          >5</MenuItem>
          <MenuItem onClick={this.handleClose}
          component={Link}
          to={this.props.path + "/6"}
          >6</MenuItem>
          <MenuItem onClick={this.handleClose}
          component={Link}
          to={this.props.path + "/7"}
          >7</MenuItem>
        </Menu>
        </BrowserRouter>
      </div>
    );
  }
}
