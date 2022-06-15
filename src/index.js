import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        // successful callback
        (position) => console.log(position),
        // failed callback
        (error) => console.log(error)
    );
    return <div>Hi there!</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));