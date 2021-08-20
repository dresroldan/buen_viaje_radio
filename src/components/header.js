import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../images/BV-Logo.png';
// import Logo2 from '../images/bvradiologo.png';
import './header.css';

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={navbar ? 'navbar active' : 'navbar'}
    >
      <Container className="navbar-spacing">
        <Nav.Link
          href="https://www.mixcloud.com/buenviaje_radio/"
          target="_blank"
          // className={navbar ? 'nav-link active' : 'nav-link'}
          className="nav-link"
          rel="noreferrer"
        >
          mixes
        </Nav.Link>
        <Navbar.Brand href="/">
          <img src={Logo} alt="Buen Viaje Radio Logo" style={{ width: 100 }} />
          {/* {navbar ? (
            <img
              src={Logo2}
              alt="Buen Viaje Radio Logo"
              style={{ width: 100,  }}
            />
          ) : (
            <img
              src={Logo}
              alt="Buen Viaje Radio Logo"
              style={{ width: 100,  }}
            />
          )} */}
        </Navbar.Brand>

        <Nav.Link
          href="https://www.twitch.tv/buenviajeradio"
          target="_blank"
          rel="noreferrer"
          // className={navbar ? 'nav-link active' : 'nav-link'}
          className="nav-link"
        >
          twitch
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default Header;
