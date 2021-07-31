import React from 'react';

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        };
    }

    render() {
        return (
            <>
                <h1>Footer</h1>
            </>
        );
    }
}

export default Footer;