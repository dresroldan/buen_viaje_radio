import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col className="text-center py-3">
            <ul>
              <li>
                <a href="mailto:hellobuenviaje@gmail.com">BOOKING</a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/buenviaje_djs"
                  target="_blank"
                  rel="noreferrer"
                >
                  INSTAGRAM
                </a>
              </li>
            </ul>

            <p className="copyright-text"> &copy; 2022 buen viaje</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
