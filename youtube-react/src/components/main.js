import React, { Component } from 'react';
import SearchBar from './search_bar';
import VideoDetail from './video_detail';
import VideoListItem from './video_list_item';
import VideoList from './video_list';
import {Grid } from '@material-ui/core';

const styles = {
    paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10
    }
}
class Main extends Component {
    constructor(props) {
        super(props);
            this.state = {
        };
    }
    render = () => {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <SearchBar styles={styles} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <VideoDetail styles={styles} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <VideoListItem styles={styles} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default Main;

