import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./Mobile.css"
import { Link } from "react-router-dom"

const ITEM_HEIGHT = 48;

export default function LongMenu({user}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div className="bar">
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon className="icon-color" />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 150,
          },
        }}
      >

          <MenuItem onClick={handleClose}>
            <Link to="/" className="mobile-nav-text"><div>Home</div></Link>
          </MenuItem>
          {user ? 
            <div>
            <MenuItem onClick={handleClose}>
              <Link to={`/user-profile/${user?.id}`} className="mobile-nav-text"><div>User Profile</div></Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/create-post" className="mobile-nav-text"><div>Create a post</div></Link>
            </MenuItem> 
            </div>
            :
            <div>
            <MenuItem onClick={handleClose}>
              <Link to="/sign-in" className="mobile-nav-text"><div>Sign In</div></Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/sign-in" className="mobile-nav-text"><div>Sign Up</div></Link>
            </MenuItem>
            </div>
          }
      </Menu>
    </div>
  );
}