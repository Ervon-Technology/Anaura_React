import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ProcessGrid.css'; // Import custom CSS for necessary styles
import cleaning from '../../../images/hows-it-made/pic-1.webp';
import melting from '../../../images/hows-it-made/pic-2.jpg';
import extruding from '../../../images/hows-it-made/pic-3.jpeg';
import fabric from '../../../images/hows-it-made/pic-4.jpg';

const steps = [
  {
    title: 'Bottle to Flakes',
    description: '',
    image: cleaning,
  },
  {
    title: 'Flakes to Fibers',
    description: '',
    image: melting,
  },
  {
    title: 'Fibers to Yarn',
    description: '',
    image: extruding,
  },
  {
    title: 'Yarn to Upcycle Fabrics',
    description: '',
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
