import React, { Component } from 'react';
import './App.css';

import YTSearch from 'youtube-api-search';

import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
const API_KEY = 'AIzaSyB6_5qfkLODfrm1g64DVEfPX7-3-rFfGjs';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        };
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos})
        });
    }
    render() {
        const { videos } = this.state;
        return (
            <div>
                <Header />
                <Main videos={videos}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
