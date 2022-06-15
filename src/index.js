import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        // reference to the parents constructor function
        super(props);

        // Only time we do direct assignment to this.state
        this.state = { lat: null };

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
            (error) => console.log(error)
        );
    }

    // React says we have to define render!!
    render() {
        return <div>Latitude: {this.state.lat}</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));