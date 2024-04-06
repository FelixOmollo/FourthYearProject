import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <p>&copy; 2024 SPORRMS. All rights reserved. | Omollo </p>
          </Col>
        </Row>
      </Container>
      <style>
        {`
          footer {
            position: fixed;
            bottom: 0;
            width: 100%;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;