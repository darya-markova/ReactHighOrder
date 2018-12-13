import React, { Component } from 'react';
import DisplayTheSecretComponent from './components/DisplayTheSecretComponent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello world </h1>
                <DisplayTheSecretComponent />
            </div>
        );
    }
}

export default App;
