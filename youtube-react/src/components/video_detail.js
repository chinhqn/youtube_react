import React, { Component } from 'react';
import {Paper} from '@material-ui/core';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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
        const { spacing } = this.state;
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <Paper className={classes.paper}>
                <Slider {...settings}>
                    <div>
                        <img className={classes.img} src="http://loremflickr.com/300/200" />
                    </div>
                    <div>
                        <img className={classes.img} src="http://loremflickr.com/300/100" />
                    </div>
                    <div>
                        <img className={classes.img} src="http://loremflickr.com/300/150" />
                    </div>
                    <div>
                        <img className={classes.img} src="http://loremflickr.com/300/300" />
                    </div>
                    <div>
                        <img className={classes.img} src="http://loremflickr.com/300/400" />
                    </div>
                    <div>
                        <img className={classes.img} src="http://loremflickr.com/300/35000" />
                    </div>
                </Slider>
            </Paper>
        )
    }
}
VideoDetail.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(VideoDetail);