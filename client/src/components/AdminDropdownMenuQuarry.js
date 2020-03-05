import React from 'react';
import { Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {  withStyles } from '@material-ui/core/styles';
import './styles/admin.scss';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: '2em',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: '5px 10px',
    },
    '&:active': {
      boxShadow: '5px 10px',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);


export default class AdminDropdownMenuQuarry extends React.Component {
  state ={
    anchorEl: null,
  }
  handleIndustriesOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
    
  };

  handleIndustriesClose = () => {
    this.setState({ anchorEl: null });
  };

  
  render() {
    const { anchorEl } = this.state;

    return (
      <div>
       <BootstrapButton
          aria-owns={anchorEl ? 'industries-menu' : null}
          aria-haspopup="true" variant="contained"
          onClick={this.handleIndustriesOpen}
        >
         Välj Stenbrott
        </BootstrapButton>
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
          <MenuItem quarry = '/AdminQuarry/Alla-Stenbrott' onClick={this.handleIndustriesClose}  component={Link} to='/AdminQuarry/Alla-Stenbrott'>Alla Stenbrott</MenuItem>
          <MenuItem quarry = '/AdminQuarry/Biskopsgården' onClick={this.handleIndustriesClose} component={Link} to='/AdminQuarry/Biskopsgården'>Biskopsgården</MenuItem>
          <MenuItem quarry = '/AdminQuarry/Bjärlöv' onClick={this.handleIndustriesClose} component={Link} to='/AdminQuarry/Bjärlöv'>Bjärlöv</MenuItem>
          <MenuItem quarry = '/AdminQuarry/Brännhult' onClick={this.handleIndustriesClose} component={Link} to='/AdminQuarry/Brännhult'>Brännhult</MenuItem>
          <MenuItem quarry = '/AdminQuarry/Bårarp' onClick={this.handleIndustriesClose} component={Link} to='/AdminQuarry/Bårarp'>Bårarp</MenuItem>
          <MenuItem quarry = '/AdminQuarry/Duvhult' onClick={this.handleIndustriesClose} component={Link} to='/AdminQuarry/Duvhult'>Duvhult</MenuItem>
          <MenuItem quarry = '/AdminQuarry/Ekeröd' onClick={this.handleIndustriesClose} component={Link} to='/AdminQuarry/Ekeröd'>Ekeröd</MenuItem>
          <MenuItem quarry = '/AdminQuarry/Flivik' onClick={this.handleIndustriesClose} component={Link} to='/AdminQuarry/Flivik'>Flivik</MenuItem>
          <MenuItem quarry = '/AdminQuarry/Gylsboda' onClick={this.handleIndustriesClose} component={Link} to='/AdminQuarry/Gylsboda'>Gylsboda</MenuItem>
          <MenuItem quarry = '/AdminQuarry/Hjortsjö' onClick={this.handleIndustriesClose} component={Link} to='/AdminQuarry/Hjortsjö'>Hjortsjö</MenuItem>
          <MenuItem quarry = '/AdminQuarry/Hägghult' onClick={this.handleIndustriesClose} component={Link} to='/AdminQuarry/Hägghult'>Hägghult</MenuItem>
          <MenuItem quarry = '/AdminQuarry/Iddefjord_Norway' onClick={this.handleIndustriesClose} component={Link} to='/AdminQuarry/Iddefjord_Norway'>Iddefjord, Norway</MenuItem>
          <MenuItem quarry = '/AdminQuarry/Kulla' onClick={this.handleIndustriesClose} component={Link} to='/AdminQuarry/Kulla'>Kulla</MenuItem>
          <MenuItem quarry = '/AdminQuarry/Vånga' onClick={this.handleIndustriesClose} component={Link} to='/AdminQuarry/Vånga'>Vånga</MenuItem>
      </Menu>
      {console.log(window.location.pathname)}

      
      

  
    {window.location.pathname === '/AdminQuarry/Alla-Stenbrott' ? ( <h3>Alla Stenbrott</h3>): "" }
    {window.location.pathname === '/AdminQuarry/Biskopsg%C3%A5rden' ? ( <h3>Biskopsgården</h3>): "" }
    {window.location.pathname === '/AdminQuarry/Bj%C3%A4rl%C3%B6v' ? ( <h3>Bjärlöv</h3>): "" }
    {window.location.pathname === '/AdminQuarry/Br%C3%A4nnhult' ? ( <h3>Brännhult</h3>): "" }
    {window.location.pathname === '/AdminQuarry/B%C3%A5rarp' ? ( <h3>Bårarp</h3>): "" }
    {window.location.pathname === '/AdminQuarry/Duvhult' ? ( <h3>Duvhult</h3>): "" }
    {window.location.pathname === '/AdminQuarry/Eker%C3%B6d' ? ( <h3>Ekeröd</h3>): "" }
    {window.location.pathname === '/AdminQuarry/Flivik' ? ( <h3>Flivik</h3>): "" }
    {window.location.pathname === '/AdminQuarry/Gylsboda' ? ( <h3>Gylsboda</h3>): "" }
    {window.location.pathname === '/AdminQuarry/Hjortsj%C3%B6' ? ( <h3>Hjortsjö</h3>): "" }
    {window.location.pathname === '/AdminQuarry/H%C3%A4gghult' ? ( <h3>Hägghult</h3>): "" }
    {window.location.pathname === '/AdminQuarry/Iddefjord_Norway' ? ( <h3>Iddefjord Norway</h3>): "" }
    {window.location.pathname === '/AdminQuarry/Kulla' ? ( <h3>Kulla</h3>): "" }
    {window.location.pathname === '/AdminQuarry/V%C3%A5nga' ? ( <h3>Vånga</h3>): "" }
      </div>
    )}}