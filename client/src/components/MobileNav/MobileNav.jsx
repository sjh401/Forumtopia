import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./Mobile.css"
import {Link} from "react-router-dom"

const options = [
//   "Home",
//   "Signup",
//   "Signin"
<Link to="/">Home</Link>,
<Link to="/sign-in">Signin</Link>,
<Link to ="/sign-up">Signup</Link>,
<Link to="/threads">Threads</Link>,
<Link to ="/create-post">Create a post</Link>
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
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
                {console.log(option)}
            </MenuItem>
            ))}
        </Menu>
        
        </div>
    );
}