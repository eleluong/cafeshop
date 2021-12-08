import React from 'react';
import { AppBar, Toolbar, IconButton,  Menu, MenuItem, Typography  } from '@material-ui/core';
import { Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/glass.png';
import useStyles from './styles';
const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position ="fixed" className = {classes.appBar} color = "inherit">
                <Toolbar>
                    <Typography variant = "h6" className = {classes.title} color = "inherit">
                        <img src = {logo} alt = "Commerce.js" height = "25px" className = {classes.image}/>
                        Commerce.js
                    </Typography>
                    <div className = {classes.grow} />
                    <div className = {classes.menuButton}>
                        <IconButton aria-label ="Show cart items" color = "inherit">
                            <Badge badgeContent = {2} color = "secondary" >
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
