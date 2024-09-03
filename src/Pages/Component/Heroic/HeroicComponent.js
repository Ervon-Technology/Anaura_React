import React from 'react';
import './HeroSection.css'; // Import the CSS file for custom styling

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className='container py-5'>
        <div className="hero-overlay"></div>
        <div className="hero-content py-5">
          <div className="col-md-9 col-12 mx-auto text-center py-5">
          <div className="py-5  my-5 py-md-0">
            <h1 className="display-3">We are passionate creators, blending science and sustainability for the Earth.</h1>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
