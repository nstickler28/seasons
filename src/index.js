import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

class App extends React.Component {
    // refactored and shortened so we don't have to declare constructor and call super
    // or set this.state
    state = { lat: null, errorMessage: '' };


    // constructor(props) {
    //     // reference to the parents constructor function
    //     super(props);

    //     // Only time we do direct assignment to this.state
    //     this.state = { lat: null, errorMessage: '' };
    // }



    // lifecycle method
    componentDidMount() {
        // dont want this call in render because how much render gets called
        window.navigator.geolocation.getCurrentPosition(
            // successful callback
            (position) => this.setState({ lat: position.coords.latitude }),

            // NEVER WANT TO DO THIS
            // this.state.lat = position.coords.latitude

            // failed callback
            (error) => this.setState({ errorMessage: error.message })
        );
    }

    // // lifecycle method
    // componentDidUpdate() {
    //     console.log('My component was just updated - it rendered!');
    // }

    // React says we have to define render!!
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Loading message="Please accept location request" />
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));