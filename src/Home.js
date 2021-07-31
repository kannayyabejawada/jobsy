import React from 'react';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        };
    }

    render() {
        return (
            <>
                <h1>Home</h1>
            </>
        );
    }
}

export default Home;