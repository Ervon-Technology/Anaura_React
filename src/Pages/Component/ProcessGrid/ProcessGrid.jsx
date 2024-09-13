import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ProcessGrid.css'; // Import custom CSS for necessary styles
import cleaning from '../../../images/hows-it-made/pic-1.jpg';
import melting from '../../../images/hows-it-made/pic-2.jpg';
import extruding from '../../../images/hows-it-made/pic-3.jpg';
import fabric from '../../../images/hows-it-made/pic-4.jpg';

const steps = [
  {
    title: 'Cleaning & Sanitising',
    description: 'Cleaning and sanitizing plastic water bottles after removing labels and caps.',
    image: cleaning,
  },
  {
    title: 'Melting into Flakes',
    description: 'Using innovative technology to melt bottles into small flakes.',
    image: melting,
  },
  {
    title: 'Extruding into Fibers',
    description: 'Extruding and melting the flakes into long and short fibers on the spinneret machine.',
    image: extruding,
  },
  {
    title: 'Spinning into Fabric',
    description: 'Spinning fibers into yarn and converting them into polyester fabric and Anaura.',
    image: fabric,
  },
];

const ProcessGrid = () => {
  return (
    <Container className="py-5 process-grid">
      <Row className="g-4"> {/* Bootstrap class for gutters between grid items */}
        {steps.map((step, index) => (
          <Col key={index} xs={12} sm={6} lg={3}> {/* Responsive grid layout */}
            <div className="position-relative process-step text-white text-center">
              <div
                className="step-wrapper d-flex justify-content-center align-items-center"
                style={{ backgroundImage: `url(${step.image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}
              >
                <div className="dark-overlay d-flex flex-column justify-content-center align-items-center p-4">
                  <p className="fs-4 fw-bold mb-3">{step.title}</p> {/* Bootstrap utility classes */}
                  <p className="description fs-6">{step.description}</p> {/* Utility classes for font size */}
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
