import React from "react";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./styles/admin.scss";

export default class AdminDropdownMenuQuarry extends React.Component {
  state = {
    anchorEl: null
  };
  handleIndustriesOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleIndustriesClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <button
          className="btn1"
          aria-owns={anchorEl ? "industries-menu" : null}
          aria-haspopup="true"
          variant="contained"
          onClick={this.handleIndustriesOpen}
        >
          Välj Stenbrott
        </button>
        <Menu
          id="industries-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleIndustriesClose}
          PaperProps={{
            style: {
              maxHeight: 2000,
              width: 400
            }
          }}
        >
          <MenuItem
            quarry="/AdminQuarry/Alla-Stenbrott"
            onClick={this.handleIndustriesClose}
            component={Link}
            to="/AdminQuarry/Alla-Stenbrott"
          >
            Alla Stenbrott
          </MenuItem>
          <MenuItem
            quarry="/AdminQuarry/Biskopsgården"
            onClick={this.handleIndustriesClose}
            component={Link}
            to="/AdminQuarry/Biskopsgården"
          >
            Biskopsgården
          </MenuItem>
          <MenuItem
            quarry="/AdminQuarry/Bjärlöv"
            onClick={this.handleIndustriesClose}
            component={Link}
            to="/AdminQuarry/Bjärlöv"
          >
            Bjärlöv
          </MenuItem>
          <MenuItem
            quarry="/AdminQuarry/Brännhult"
            onClick={this.handleIndustriesClose}
            component={Link}
            to="/AdminQuarry/Brännhult"
          >
            Brännhult
          </MenuItem>
          <MenuItem
            quarry="/AdminQuarry/Bårarp"
            onClick={this.handleIndustriesClose}
            component={Link}
            to="/AdminQuarry/Bårarp"
          >
            Bårarp
          </MenuItem>
          <MenuItem
            quarry="/AdminQuarry/Duvhult"
            onClick={this.handleIndustriesClose}
            component={Link}
            to="/AdminQuarry/Duvhult"
          >
            Duvhult
          </MenuItem>
          <MenuItem
            quarry="/AdminQuarry/Ekeröd"
            onClick={this.handleIndustriesClose}
            component={Link}
            to="/AdminQuarry/Ekeröd"
          >
            Ekeröd
          </MenuItem>
          <MenuItem
            quarry="/AdminQuarry/Flivik"
            onClick={this.handleIndustriesClose}
            component={Link}
            to="/AdminQuarry/Flivik"
          >
            Flivik
          </MenuItem>
          <MenuItem
            quarry="/AdminQuarry/Gylsboda"
            onClick={this.handleIndustriesClose}
            component={Link}
            to="/AdminQuarry/Gylsboda"
          >
            Gylsboda
          </MenuItem>
          <MenuItem
            quarry="/AdminQuarry/Hjortsjö"
            onClick={this.handleIndustriesClose}
            component={Link}
            to="/AdminQuarry/Hjortsjö"
          >
            Hjortsjö
          </MenuItem>
          <MenuItem
            quarry="/AdminQuarry/Hägghult"
            onClick={this.handleIndustriesClose}
            component={Link}
            to="/AdminQuarry/Hägghult"
          >
            Hägghult
          </MenuItem>
          <MenuItem
            quarry="/AdminQuarry/Iddefjord_Norway"
            onClick={this.handleIndustriesClose}
            component={Link}
            to="/AdminQuarry/Iddefjord_Norway"
          >
            Iddefjord, Norway
          </MenuItem>
          <MenuItem
            quarry="/AdminQuarry/Kulla"
            onClick={this.handleIndustriesClose}
            component={Link}
            to="/AdminQuarry/Kulla"
          >
            Kulla
          </MenuItem>
          <MenuItem
            quarry="/AdminQuarry/Vånga"
            onClick={this.handleIndustriesClose}
            component={Link}
            to="/AdminQuarry/Vånga"
          >
            Vånga
          </MenuItem>
        </Menu>
        {console.log(window.location.pathname)}

        {window.location.pathname === "/AdminQuarry/Alla-Stenbrott" ? (
          <h1>Alla Stenbrott</h1>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/Biskopsg%C3%A5rden" ? (
          <h1>Biskopsgården</h1>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/Bj%C3%A4rl%C3%B6v" ? (
          <h1>Bjärlöv</h1>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/Br%C3%A4nnhult" ? (
          <h1>Brännhult</h1>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/B%C3%A5rarp" ? (
          <h1>Bårarp</h1>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/Duvhult" ? (
          <h1>Duvhult</h1>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/Eker%C3%B6d" ? (
          <h1>Ekeröd</h1>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/Flivik" ? (
          <h1>Flivik</h1>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/Gylsboda" ? (
          <h1>Gylsboda</h1>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/Hjortsj%C3%B6" ? (
          <h1>Hjortsjö</h1>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/H%C3%A4gghult" ? (
          <h1>Hägghult</h1>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/Iddefjord_Norway" ? (
          <h1>Iddefjord Norway</h1>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/Kulla" ? (
          <h1>Kulla</h1>
        ) : (
          ""
        )}
        {window.location.pathname === "/AdminQuarry/V%C3%A5nga" ? (
          <h1>Vånga</h1>
        ) : (
          ""
        )}
      </div>
    );
  }
}
