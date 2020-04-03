import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./styles/admin.scss";
import "./styles/MainMenu.scss";
const path = 0;
export default class AdminDropdownMenuPlace extends React.Component {
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
      <div className="MainMenu">
        <button
          className="btn1"
          aria-owns={anchorEl ? "place-menu" : null}
          aria-haspopup="true"
          variant="contained"
          onClick={this.handleIndustriesOpen}
        >
          Välj Plats
        </button>
        <Menu
          id="place-menu"
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
          <MenuItem onClick={this.handleIndustriesClose} path="0">0</MenuItem>
          <MenuItem onClick={this.handleIndustriesClose} path="1">1</MenuItem>
          <MenuItem onClick={this.handleIndustriesClose} path="2">2</MenuItem>
          <MenuItem onClick={this.handleIndustriesClose} path="3">3</MenuItem>
          <MenuItem onClick={this.handleIndustriesClose} path="4">4</MenuItem>
          <MenuItem onClick={this.handleIndustriesClose} path="5">5</MenuItem>
          <MenuItem onClick={this.handleIndustriesClose} path="6">6</MenuItem>
          <MenuItem onClick={this.handleIndustriesClose} path="7">7</MenuItem>
        </Menu>
        {console.log(path)}
        {path === "0" ? (
          <h1>Plats 0</h1>
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
