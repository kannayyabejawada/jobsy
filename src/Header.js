import React from 'react';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        };
    }

    render() {
        return (
            <>  
                <h1>Header</h1>
            </>
        );
    }
}
export default Header;