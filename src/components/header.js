import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Logo from '../images/BV-Logo.png';
import './header.css';

const Header = () => {
  return (
    <nav>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="navbar-custom"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              alt="Buen Viaje Radio Logo"
              style={{ width: 100, height: 63 }}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navbar-toggler"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/about">about</Nav.Link>
              <Nav.Link eventKey={2} href="/about">
                photos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Header;
