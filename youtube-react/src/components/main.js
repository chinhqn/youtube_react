import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

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
    second: {
        height: 90,
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
    img: {
        width: 280,
        height: 135,
    
    }
});
const images = [
    {
        url: '/static/images/grid-list/breakfast.jpg',
        title: 'Breakfast',
        width: '40%',
    },
    {
        url: '/static/images/grid-list/burgers.jpg',
        title: 'Burgers',
        width: '30%',
    },
    {
        url: '/static/images/grid-list/camera.jpg',
        title: 'Camera',
        width: '30%',
    },
];
class Main extends React.Component {
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

        return (
            <div className={classes.root}>
                <Grid container spacing={24} className={classes.content}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <img className={classes.img} src="http://loremflickr.com/300/200" />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.second}>xs=12 sm=6</Paper>
                    </Grid>
                    {[0, 1, 2, 3].map(value => {
                        return (
                            <Grid key={value} item xs={6} sm={3}>
                                <Paper className={classes.paper}>xs=6 sm=3</Paper>
                            </Grid> 
                        )   
                    })}
                </Grid>
                </div>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);