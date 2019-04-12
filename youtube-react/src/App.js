import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import Footer from './components/footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    onSearchTerm = (data) => {
        console.log(data);
    }

    render() {
        return (
            <div>
                <Main onSearchTerm={this.onSearchTerm} />
                <Footer/>
            </div>
        );
    }
}

export default App;
