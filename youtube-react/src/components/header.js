import React, { Component } from 'react'
import {AppBar, Toolbar, Typography, IconButton, InputBase  } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return(
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Open drawer">
                        <MenuIcon />
                    </IconButton>
                    <Typography  variant="h6" color="inherit" noWrap>
                        Youtube
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}
export default Header;