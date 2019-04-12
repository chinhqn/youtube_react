
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import VideoDetail from './video_detail';
import VideoList from './video_list';
import YTSearch from 'youtube-api-search';
import Header from './header';
const API_KEY = 'AIzaSyB6_5qfkLODfrm1g64DVEfPX7-3-rFfGjs';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        padding: theme.spacing.unit * 1,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    
    control: {
        padding: theme.spacing.unit * 1,
    },
    demo: {
        paddingTop: 10
    },
    content: {
        width: 'auto',
        margin: 0
    },
    
});
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectVideo: null
        };
        this.videoSeach('sontung');
    }

    videoSeach = (term) => {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectVideo: videos[0]
            })
        });
    }
    selectVideo = (video) => {
        this.setState({
            selectVideo : video
        })
    }
    render() {
        const { classes } = this.props;
        const { videos, selectVideo } = this.state;
        return (
            <div className={classes.root}>
                <Header onSearchTermChange={(term) => this.videoSeach(term)} />
                <Grid container spacing={24} className={classes.content}>
                    <Grid item xs={12}>
                        <VideoDetail video={selectVideo} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <VideoList 
                            videos={videos}
                            onVideoSelect={this.selectVideo}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);