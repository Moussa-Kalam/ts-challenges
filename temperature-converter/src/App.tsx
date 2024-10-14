import React, { Component } from 'react';
import './App.css';
import TemperatureConverter from './TemperatureConverter';

class App extends Component {
    render() {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100 border">
                <TemperatureConverter />
            </div>
        );
    }
}

export default App;
