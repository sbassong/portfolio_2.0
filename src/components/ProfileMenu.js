import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';


const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);


  return (
    <>
      <MenuIcon 
        className='menu-item title login-icon'
        onClick={handleClick}
      />

        <Menu
          anchorEl={anchorEl}
          id="profile-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          paper={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1,
              '& .MuiSvgIcon-root': {
                width: 25,
                height: 25,
                ml: -0.5,
                color: 'background.default',
                mr: 1,
              },
            },
          }}
          transformOrigin={{ horizontal: 'left', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        >
        <NavLink to="/">
          <MenuItem onClick={handleClose} >Home</MenuItem>
        </NavLink>

        <NavLink to="/projects">
          <MenuItem onClick={handleClose} >Projects</MenuItem>
        </NavLink>

        <NavLink to="/stack">
          <MenuItem onClick={handleClose} >Stack</MenuItem>
        </NavLink>
        </Menu>
    </>
  );
}

export default ProfileMenu;