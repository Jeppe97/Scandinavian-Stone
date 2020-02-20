import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const options = [
  'Alla Stenbrott',
  'Biskopsgården',
  'Bjärlöv',
  'Brännhult',
  'Bårarp',
  'Duvhult',
  'Ekeröd',
  'Flivik',
  'Gylsboda',
  'Hjortsjö',
  'Hägghult',
  'Iddefjord, Norway',
  'Kulla',
  'Vånga',
];
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
    <div>
      <Button aria-controls="admin-quarry-menu" variant="contained" aria-haspopup="true" onClick={handleClick}>
      Välj stenbrott
    </Button> 
      <Menu
        id="admin-quarry-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 50,
            width: 200,
          },
        }}
      >
        {options.map(option => (
          <MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem>
          
        ))}
      </Menu>
    </div>  
  );
}