import React from 'react';
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


export default class AdminDropdownMenuPlace extends React.Component {
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
          aria-owns={anchorEl ? 'place-menu' : null}
          aria-haspopup="true" variant="contained"
          onClick={this.handleIndustriesOpen}
        >
         Välj Plats
        </BootstrapButton>
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
          <MenuItem  onClick={this.handleIndustriesClose} >0</MenuItem>
          <MenuItem  onClick={this.handleIndustriesClose} >1</MenuItem>
          <MenuItem  onClick={this.handleIndustriesClose} >2</MenuItem>
          <MenuItem  onClick={this.handleIndustriesClose} >3</MenuItem>
          <MenuItem  onClick={this.handleIndustriesClose} >4</MenuItem>
          <MenuItem  onClick={this.handleIndustriesClose} >5</MenuItem>
          <MenuItem  onClick={this.handleIndustriesClose} >6</MenuItem>
          <MenuItem  onClick={this.handleIndustriesClose} >7</MenuItem>
      </Menu>
      </div>
    )}}