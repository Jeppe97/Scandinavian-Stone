import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './styles/admin.scss';
import './styles/MainMenu.scss';


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
      <div className='MainMenu'>
       <button className='btn1'
          aria-owns={anchorEl ? 'place-menu' : null}
          aria-haspopup="true" variant="contained"
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