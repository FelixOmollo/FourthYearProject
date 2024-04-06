import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Import the necessary components from react-bootstrap

const About = () => {
    const asideStyle = {
        background: "azure",
        width: "calc(30% - 10px)",
        marginLeft: "10px",
    }

    const gridStyles = {
        backgroundColor: "#f0f0f0",
        padding: "20px",
        marginTop: "20px",
    };

    return (
        <Container>
            <Row>
                {/* Sidebar Component */}
                <Col md={4} style={asideStyle} className='sidebar-component'>
                    <h2>Smart Power Outage Management System: Making Reporting and Repair Easy.</h2>
                    <p>
                        The Smart Power Outage Management System marks a groundbreaking 
                        advancement in the realm of energy infrastructure, tailored specifically 
                        for the dynamic needs of the Kenyan market. 
                    </p>
                    <p>
                        Crafted by Felix Omollo, a visionary final-year Geoinformatics 
                        student at Taita Taveta University, 
                        this innovative system promises to redefine the way power outages 
                        are addressed and managed across the nation.
                    </p>
                    <p>
                        With its cutting-edge features and forward-thinking design, 
                        the Smart Power Outage Management System aims to mitigate disruptions, 
                        enhance efficiency, and ultimately transform the energy landscape in Kenya.
                    </p>
                </Col>

                {/* Grids */}
                <Col md={8}>
                    <Row style={gridStyles}>
                        <h2>Real-time Monitoring</h2>
                        <p>Leveraging state-of-the-art technology, the system provides real-time monitoring of power grids, enabling swift detection and response to outages.</p>
                    </Row>
                    <Row style={{ ...gridStyles, backgroundColor: "#e0e0e0" }}>
                        <h2>Predictive Analytics</h2>
                        <p>Through advanced algorithms, the system can predict potential outage events, allowing for proactive measures to be taken to prevent or minimize disruptions.</p>
                    </Row>
                    <Row style={gridStyles}>
                        <h2>Efficient Communication</h2>
                        <p>The system facilitates seamless communication between utility providers, repair teams, and consumers, ensuring timely updates and transparent information dissemination.</p>
                    </Row>
                    <Row style={{ ...gridStyles, backgroundColor: "#e0e0e0" }}>
                        <h2>Mobile Accessibility</h2>
                        <p>With a user-friendly mobile interface, consumers can report outages, track restoration progress, and receive alerts directly on their smartphones, empowering them to stay informed and engaged.</p>
                    </Row>
                    <Row style={gridStyles}>
                        <h2>Data Visualization</h2>
                        <p>Through intuitive data visualization tools, stakeholders can gain valuable insights into outage patterns, consumption trends, and system performance, facilitating data-driven decision-making and resource allocation.</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
