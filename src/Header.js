import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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
                <div>
              <Navbar bg="light" variant="light">
                <Container>
                  <Navbar.Brand href="/">Home</Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link href="/Timer">Timer</Nav.Link>
                    <Nav.Link href="/Counter">Counter</Nav.Link>
                    <Nav.Link href="/Todo">ToDo</Nav.Link>
                    <Nav.Link href="/FunctionalComponent">FunctionalComponent</Nav.Link>
                    <Nav.Link href="/classComponent">classComponent</Nav.Link>
                  </Nav>
                </Container>
              </Navbar>
            </div>
            </>
        );
    }
}
export default Header;