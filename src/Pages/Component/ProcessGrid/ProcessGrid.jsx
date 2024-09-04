import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ProcessGrid.css'; // Import custom CSS for additional styles

const steps = [
  {
    icon: '🧴',
    title: 'Cleaning & Sanitising',
    description: 'Cleaning and sanitizing plastic water bottles after removing labels and caps.',
    image: 'cleaning.jpg', // Add path to your background image
  },
  {
    icon: '♻️',
    title: 'Melting into Flakes',
    description: 'Using innovative technology to melt bottles into small flakes.',
    image: 'melting.jpg',
  },
  {
    icon: '🧵',
    title: 'Extruding into Fibers',
    description: 'Extruding and melting the flakes into long and short fibers on the spinneret machine.',
    image: 'extruding.jpg',
  },
  {
    icon: '👕',
    title: 'Spinning into Fabric',
    description: 'Spinning fibers into yarn and converting them into polyester fabric and Anaura.',
    image: 'fabric.jpg',
  },
];

const ProcessGrid = () => {
  return (
    <Container className="process-grid">
      <Row>
        {steps.map((step, index) => (
          <Col key={index} xs={12} sm={6} md={6} lg={3} className="process-step">
            <div className="step-wrapper" style={{ backgroundImage: `url(${step.image})` }}>
              <div className="dark-overlay p-4">
                <div className="icon">{step.icon}</div>
                <p className='fs-4'>{step.title}</p>
                <div className="description">
                  <p>{step.description}</p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProcessGrid;
