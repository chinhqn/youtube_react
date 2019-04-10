import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const styles = theme => ({
    paper: {
        height: 140,
        padding: theme.spacing.unit * 1,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    second: {
        height: 90,
        padding: theme.spacing.unit * 1,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});
class VideoList extends Component {
    constructor(props) {
        super(props);
            this.state = {
        };
    }
    

    render(){
        const { classes } = this.props;
        const { videos } = this.props;
        
        const list = videos.map((value, items) => {
            let imgUrl = value.snippet.thumbnails.default.url;
            let title = value.snippet.title;
            let date = value.snippet.publishedAt;
            return (
                <ListItem key={items} alignItems="flex-start">
                    <img src={imgUrl} />
                    <ListItemText primary={title} secondary={date} />
                </ListItem>
            )
        })
        return (
            <List className={classes.root}> 
                {list}
            </List>
        );
    }
}
VideoList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VideoList);

