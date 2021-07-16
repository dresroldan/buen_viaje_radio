import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p className="copyright-text">Copyright &copy; Buen Viaje Radio</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
