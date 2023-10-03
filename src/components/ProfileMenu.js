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

  const HomeItem = () => <NavLink to='/'>Home</NavLink>
  const ProjectsItem = () => <NavLink to='/projects' >Projects</NavLink>
  // const ExperienceItem = () => <NavLink to='/experience' >Experience</NavLink>
  const SkillsItem = () => <NavLink to='/stack' >Stack</NavLink>

  return (
    <>
      <MenuIcon 
        className='menu-item title login-icon'
        onClick={handleClick}
      />

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
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
          <MenuItem  onClick={handleClose} >
            <HomeItem />
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ProjectsItem />
          </MenuItem>

          {/* <MenuItem  onClick={handleClose}>
            <ExperienceItem />
          </MenuItem> */}

          <MenuItem onClick={handleClose}>
            <SkillsItem />
          </MenuItem>
        </Menu>
    </>
  );
}

export default ProfileMenu;