import React from 'react';

const ImpactSection = ({ imageSrc }) => {
  return (
    <section className="eco-section py-md-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 order-1 order-md-2">
            <img
              src={imageSrc}
              alt="Eco-Friendly Textiles"
              className="img-fluid rounded col-md-10 mx-auto"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center order-2 order-md-1">
            <div className="col-md-10 py-4">
              <h6 className="text-muted mb-3 text-uppercase">Is Our Impact Meaningful?</h6>
              <p className="font-weight-normal display-6 mb-4">Guided by Integrity, Driven by a Purposeful Vision.</p>
              <p className="fs-5 mb-5">
                At Anaura, every decision—from our business operations to our team selection and growth—prioritizes the well-being of our planet.
                We are hopeful partners, committed to transparency and driven by a shared belief in a sustainable future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
