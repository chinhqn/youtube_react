import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
    
    render() {
        return (
            <div>
                <Header />
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;
