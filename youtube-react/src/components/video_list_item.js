
import React, { Component } from 'react';
import {Paper} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const styles = theme => ({
    paper: {
        height: 140,
        padding: theme.spacing.unit * 1,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class VideoListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            video : [],
            onVideoSelect: null
        };
        this.myRef = React.createRef();
    }
    componentWillMount = () => {
        this.setState({
            video : this.props.video,
        })
    }
    componentDidMount() {
        console.log(this.myRef.current);
        // this.myRef.scrollTo(0, 0);
    }
    onVideoSelect = () => {
        this.props.onVideoSelectChange(this.state.video);
        window.scrollTo(0,0);
    }
    render() {
        const {classes, video} = this.props;
        let imgUrl = video.snippet.thumbnails.default.url;
        let title = video.snippet.title;
        let date = new Date(video.snippet.publishedAt).toLocaleString();
        return(
                <ListItem  onClick={this.onVideoSelect} ref={this.myRef} alignItems="flex-start">
                    <img src={imgUrl} />
                    <ListItemText primary={title} secondary={date} />
                </ListItem>
        )
    }
}
VideoListItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VideoListItem);