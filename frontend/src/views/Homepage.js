import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import coverImage from './coverImage.jpg';
import { Link } from 'react-router-dom';


function Homepage() {
  return (
    <Card className="bg-dark text-white" style={{ backgroundImage: `url(${coverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Card.ImgOverlay>
        <Card.Title style={{ color: 'black', marginTop: '20px' }}>Welcome to SPORRMS: Your Smart Power Outage Management Solution</Card.Title>

        <Container style={{ color: 'black',margin: '50px 20px 50px 20px'}}>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <p>Welcome to SPORRMS, your comprehensive solution for managing power outages with intelligence and efficiency. SPORRMS is designed to revolutionize the way you handle power disruptions, providing you with the tools and insights you need to minimize downtime, streamline communication, and enhance operational efficiency.</p>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <p>Whether you're a utility provider, facility manager, or homeowner, SPORRMS empowers you to make informed decisions and take proactive measures to mitigate the impact of outages.</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <p>With SPORRMS, you can proactively monitor, analyze, and respond to outages in real-time, ensuring that you stay ahead of the curve and minimize disruptions to your operations.</p>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <p>Sign Up here and let's usher in a new era together, leaving behind the old boring phone calls.</p>
              <Button style={{ margin: '0 10px 0 0' }} variant="primary" as={Link} to="/signup-form">SIGN UP</Button>
              <Button variant="primary" as={Link} to="/login-form">Login</Button>
            </Col>
          </Row>
        </Container>

      </Card.ImgOverlay>
    </Card>
  );
}

export default Homepage;