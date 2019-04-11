import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import VideoDetail from './video_detail';
import VideoList from './video_list';
import VideoListItem from './video_list_item';
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
            videos: []
        }
    }

    componentWillMount = () => {
        console.log(this.props)
    }

    componentDidMount = () => {
        console.log(this.props)
    }

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        });
    };

    render() {
        const { classes, videos } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24} className={classes.content}>
                    <Grid item xs={12}>
                        <VideoDetail video={videos[0]} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <VideoList videos={videos} />
                    </Grid>
                    <VideoListItem />
                </Grid>
            </div>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);