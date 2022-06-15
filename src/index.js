import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
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