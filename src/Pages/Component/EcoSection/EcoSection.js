import React from 'react';

const EcoSection = ({ imageSrc }) => {
  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={imageSrc}
              alt="Eco-Friendly Textiles"
              className="img-fluid rounded"
              style={{ maxHeight: '500px', objectFit: 'cover', width: 'auto' }}
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="col-md-10 mx-auto text-center text-md-start">
              <h6 className="text-muted mb-3 text-uppercase">
                Championing Eco-Friendly Materials
              </h6>
              <p className="font-weight-normal display-6 mb-4">
                Innovating Beyond recycleing, upcycling for sustainablility
              </p>
              <p className="fs-5 mb-5">
                At Anaura, our Products are crafted with a lower carbon footprint,
                free from harmful chemicals. Compared to traditional virgin
                polyester, we significantly reduce global warming potential.
                We’re not just about creating sustainable materials; we’re about
                inspiring change. Our nationwide outreach program
                empowers brands and consumers to adopt planet-friendly
                practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoSection;
