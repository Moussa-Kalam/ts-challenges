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
            <div className="px-10 py-16 w-2/5 mx-auto bg-white rounded-xl shadow-md space-y-6">
                <h1 className="text-center text-4xl font-bold mb-4">Temperature Converter</h1>
                <div className="flex flex-col space-y-6">
                    <div>
                        <label className="block font-semibold text-gray-700">Fahrenheit</label>
                        <input
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            type="number"
                            value={this.state.fahrenheit}
                            onChange={this.handleFahrenheitChange}
                        />
                    </div>
                    <div>
                        <label className="block font-semibold text-gray-700">Celsius</label>
                        <input
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            type="number"
                            value={this.state.celsius}
                            onChange={this.handleCelsiusChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TemperatureConverter;
