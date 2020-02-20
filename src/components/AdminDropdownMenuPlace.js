import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const places = [
  0,1,2,3,4,5,6,7
]

const ITEM_HEIGHT = 48;

export default function AdminDropdownMenuQuarry() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
      <Button  aria-controls="admin-position-menu" variant="contained" aria-haspopup="true" onClick={handleClick}>
      Välj Plats
    </Button> 
      <Menu
        id="admin-position-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 50,
            width: 100,
          },
        }}
      >
        {places.map(place => (
          <MenuItem key={place} onClick={handleClose}>
            {place}
          </MenuItem>
        ))}
      </Menu>   
    </div>   
  );
}