import React, { Component } from 'react';
import './App.css';

import YTSearch from 'youtube-api-search';

import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';

const API_KEY = 'AIzaSyB6_5qfkLODfrm1g64DVEfPX7-3-rFfGjs';

const styles =  {
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
        };
        YTSearch({key: API_KEY, term: 'surfboards'}, function(videos){
            this.setState({videos})
        });
    }
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer style={styles.stickToBottom}/>
            </div>
        );
    }
}

export default App;
