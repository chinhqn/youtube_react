import React, { Component } from 'react';
import {Paper} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
class SearchBar extends Component {
    
    render() {
        const {styles} = this.props
        return (
            <InputBase
                placeholder="Search…"
                onChange={this.handleChange}
                // classes={{
                //     root: classes.inputRoot,
                //     input: classes.inputInput,
                // }}
            />
        )
    }
}

export default SearchBar;