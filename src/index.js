import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        // reference to the parents constructor function
        super(props);

        // Only time we do direct assignment to this.state
        this.state = { lat: null, errorMessage: '' };

        // dont want this call in render because how much render gets called
        window.navigator.geolocation.getCurrentPosition(
            // successful callback
            (position) => {
                // we called setState
                this.setState({ lat: position.coords.latitude });

                // NEVER WANT TO DO THIS
                // this.state.lat = position.coords.latitude
            },
            // failed callback
            (error) => {
                this.setState({ errorMessage: error.message });
            }
        );
    }

    // React says we have to define render!!
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitue: {this.state.lat}</div>
        }
        return <div>Loading...</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));