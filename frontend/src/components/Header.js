import React from 'react'
import { Navbar, Nav, Container, Row} from 'react-bootstrap'
function Header() {
  return (
    <header>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Birds Lookup</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/search"><i className='fas fa-user'></i>Search</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>    
    </header>
  )
}

export default Header