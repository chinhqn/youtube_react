import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import VideoListItem from "./video_list_item";
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
                videoChange: ''
        };
    }
    
    onVideoSelect = (param) => {
        console.log(param, 'param')
        this.setState({
            videoChange: param,
        })
        this.props.onVideoSelect(param)
    }

    render(){
        const { classes } = this.props;
        const { videos, onVideoSelect } = this.props;

        console.log(onVideoSelect, 'video_list')
        const VideoItem = videos.map((video) => {
            return (
                <VideoListItem key={video.etag} video={video} onVideoSelectChange={this.onVideoSelect} />
            )
        })
        return (
            <List className={classes.root}> 
                {VideoItem}
            </List>
        );
    }
}
VideoList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VideoList);

