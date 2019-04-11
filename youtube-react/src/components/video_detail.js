import React, { Component } from 'react';
import {Paper} from '@material-ui/core';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 'auto',
        padding: theme.spacing.unit * 1,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    img: {
        width: 280,
        height: 135,
    }
});
class VideoDetail extends Component {
    state = {
        spacing: '16',
    };

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        });
    };

    render() {
        const { classes } = this.props;
        const {video} = this.props;
        if (!video) {
            return "<div>Loading ...</div>";
        }
        const videoId = video.id.videoId;
        const url = `https://www.youtube.com/embed/${videoId}`;
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <iframe width="100%" height="auto" src={url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {video.snippet.title}
                        </Typography>
                        <Typography component="p">
                            {video.snippet.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        )
    }
}
VideoDetail.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(VideoDetail);