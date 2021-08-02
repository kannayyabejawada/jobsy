import React from 'react';

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        };
    }


    componentDidMount() {
        this.timerID = setInterval(
            () => this.setState({
                date: new Date()
            }), 1000
        );
    }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    render() {
        return (
            <>
                <h1>Timer</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </>
        );
    }
}

export default Timer;