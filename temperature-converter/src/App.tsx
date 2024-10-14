
import React, { Component } from "react";

interface TempConverterState {
    fahrenheit: string;
    celsius: string;
}

class TemperatureConverter extends Component<{}, TempConverterState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            fahrenheit: "",
            celsius: "",
        };
    }

    handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fahrenheit = e.target.value;
        const celsius = fahrenheit ? ((parseFloat(fahrenheit) - 32) * 5) / 9 : "";
        this.setState({ fahrenheit, celsius: celsius.toString() });
    };

    handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const celsius = e.target.value;
        const fahrenheit = celsius ? (parseFloat(celsius) * 9) / 5 + 32 : "";
        this.setState({ celsius, fahrenheit: fahrenheit.toString() });
    };

    render() {
        return (
            <div>
                <h1>Farenheit to Celsius</h1>
                <div>
                    <label>Fahrenheit: </label>
                    <input
                        type="number"
                        value={this.state.fahrenheit}
                        onChange={this.handleFahrenheitChange}
                    />
                </div>
                <div>
                    <label>Celsius: </label>
                    <input
                        type="number"
                        value={this.state.celsius}
                        onChange={this.handleCelsiusChange}
                    />
                </div>
            </div>
        );
    }
}

export default TemperatureConverter;
