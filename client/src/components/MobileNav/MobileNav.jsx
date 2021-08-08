import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./Mobile.css"
import {NavLink} from "react-router-dom"

const options = [

 <NavLink to="/">Home</NavLink>,
<NavLink to="/sign-in">Signin</NavLink>,
<NavLink to="/sign-up">Signup</NavLink>,
<NavLink to="/categories">Popular Topics</NavLink>,
<NavLink to="/threads">Threads</NavLink>
];

// const unauthenticatedOptions = (
//     <>
//     <NavLink to="/">Home</NavLink>
//     <NavLink to ="sign-in">Sign In</NavLink>
//     <NavLink to ="/sign-up">Sign Up</NavLink>
//     <NavLink to ="/threads">Threads</NavLink>
//     </>
// )

// const alwaysOptions = (
//     <>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/threads-gaming">Gaming</NavLink>
//       <NavLink to ="/threads-comic">Comic</NavLink>
//       {/* <NavLink to=""></NavLink> */}
//     </>
//   )

//   const authenticatedOptions = (
//     <>
//       <NavLink to="/sign-out">Sign Out</NavLink>
  
//       {/* Don't need correct? */}
//       <NavLink to="/categories">Threads</NavLink>
//       <NavLink to="/threads-create">Create Thread</NavLink>
  
//     </>
//   )

const ITEM_HEIGHT = 48;

export default function LongMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className = "bar">
            
        
        <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
        >
            <MoreVertIcon className="color"/>
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
                width: '20ch',
            },
            }}
        >
            {options.map((option, index) => (
            <MenuItem key={`MenuItem-${index}`} selected={option === 'Pyxis'} onClick={handleClose}>
                {option}
            </MenuItem>
            ))}
        </Menu>

        </div>
    );
}