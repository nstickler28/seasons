import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        // reference to the parents constructor function
        super(props);

        this.state = { lat: null };
    }

    // React says we have to define render!!
    render() {
        window.navigator.geolocation.getCurrentPosition(
            // successful callback
            (position) => console.log(position),
            // failed callback
            (error) => console.log(error)
        );
        return <div>Latitude: </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));