import React, { Component } from 'react';
import {Paper} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    paper: {
        height: 140,
        padding: theme.spacing.unit * 1,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});
class VideoListItem extends Component {


    render() {
        const {classes} = this.props
        return (
            <div></div>
            // <Paper className={classes.paper}>xs=6 sm=3</Paper>
        )
    }
}
VideoListItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VideoListItem);