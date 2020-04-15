import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "../styles/admin.scss";
import AdminQuarryButton from "./AdminQuarryButton"
export default class AdminDropdownMenuQuarry extends React.Component {
  state = {
    anchorEl: null,
    
  };
  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  refreshPage = () => {
    window.location.reload(false);
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <BrowserRouter>
        <button
          className="btn1"
          aria-owns={anchorEl ? "menu" : null}
          aria-haspopup="true"
          variant="contained"
          onClick={this.handleOpen}
        >
          Välj Stenbrott
        </button>
        
        <Menu
          id="industries-menu"
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
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/AdminQuarry/Alla-Stenbrott"
          >
            Alla Stenbrott
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/AdminQuarry/Biskopsgården"
          >
            Biskopsgården
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/AdminQuarry/Bjärlöv"
          >
            Bjärlöv
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/AdminQuarry/Brännhult"
          >
            Brännhult
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/AdminQuarry/Bårarp"
          >
            Bårarp
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/AdminQuarry/Duvhult"
          >
            Duvhult
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/AdminQuarry/Ekeröd"
          >
            Ekeröd
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/AdminQuarry/Flivik"
          >
            Flivik
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/AdminQuarry/Gylsboda"
          >
            Gylsboda
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/AdminQuarry/Hjortsjö"
          >
            Hjortsjö
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/AdminQuarry/Hägghult"
          >
            Hägghult
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/AdminQuarry/Iddefjord_Norway"
          >
            Iddefjord, Norway
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/AdminQuarry/Kulla"
          >
            Kulla
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/AdminQuarry/Vånga"
          >
            Vånga
          </MenuItem>
          
        </Menu>
        </BrowserRouter>
        

        {window.location.pathname === "/AdminQuarry/Alla-Stenbrott" ? (
            <AdminQuarryButton quarry="Alla-Stenbrott" path="/AdminQuarry/Alla-Stenbrott"/>                                     
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/Biskopsg%C3%A5rden" ? (
          <AdminQuarryButton quarry="Biskopsgården" path="/AdminQuarry/Alla-Stenbrott"/>  
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/Bj%C3%A4rl%C3%B6v" ? (
        
            <AdminQuarryButton quarry="Bjärlöv" path="/AdminQuarry/Alla-Stenbrott"/>  
         
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/Br%C3%A4nnhult" ? (
           <AdminQuarryButton quarry="Brännhult" path="/AdminQuarry/Alla-Stenbrott"/>     
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/B%C3%A5rarp" ? (
          
          <AdminQuarryButton quarry="Bårarp" path="/AdminQuarry/Alla-Stenbrott"/>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/Duvhult" ? (
          
           <AdminQuarryButton quarry="Duvhult" path="/AdminQuarry/Alla-Stenbrott"/>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/Eker%C3%B6d" ? (
          
           <AdminQuarryButton quarry="Ekeröd" path="/AdminQuarry/Alla-Stenbrott"/>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/Flivik" ? (
          
           <AdminQuarryButton quarry="Flivik" path="/AdminQuarry/Alla-Stenbrott"/>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/Gylsboda" ? (
          
           <AdminQuarryButton quarry="Gylsboda" path="/AdminQuarry/Alla-Stenbrott"/>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/Hjortsj%C3%B6" ? (
          
           <AdminQuarryButton quarry="Hjortsjö" path="/AdminQuarry/Alla-Stenbrott"/>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/H%C3%A4gghult" ? (
          
           <AdminQuarryButton quarry="Hägghult" path="/AdminQuarry/Alla-Stenbrott"/>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/Iddefjord_Norway" ? (
         
           <AdminQuarryButton quarry="Iddefjord Norway" path="/AdminQuarry/Alla-Stenbrott"/>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/Kulla" ? (
          
           <AdminQuarryButton quarry="Kulla" path="/AdminQuarry/Alla-Stenbrott"/>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/V%C3%A5nga" ? (
          
          <AdminQuarryButton quarry="Vånga" path="/AdminQuarry/Alla-Stenbrott"/>
        ) : (
          ""
        )}
      </div>
    );
  }
}
