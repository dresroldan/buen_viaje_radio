import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../images/BV-Logo.png';
import './header.css';

const Header = () => {
  return (
    <nav>
      <Navbar expand="lg" variant="light" className="navbar-custom" fixed="top">
        <Container className="navbar-spacing">
          <Nav.Link
            href="https://www.mixcloud.com/buenviaje_radio/"
            target="_blank"
          >
            mixes
          </Nav.Link>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              alt="Buen Viaje Radio Logo"
              style={{ width: 100, height: 63 }}
            />
          </Navbar.Brand>

          <Nav.Link href="https://www.twitch.tv/buenviajeradio" target="_blank">
            twitch
          </Nav.Link>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Header;
