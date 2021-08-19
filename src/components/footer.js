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
                <a href="instagram.com">EMAIL</a>
              </li>
              <li>
                <a href="instagram.com">INSTAGRAMs</a>
              </li>
            </ul>

            <p className="copyright-text"> &copy; 2021 Buen Viaje Radio</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
