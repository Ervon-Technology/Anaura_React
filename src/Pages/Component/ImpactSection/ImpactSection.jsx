import React from 'react';
const ImpactSection = ({ title, subtitle, des, imageSrc }) => {
  return (
    <section className="eco-section py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 d-flex flex-column justify-content-center text-center text-md-start mb-4 mb-md-0">
            <div className="col-md-10 mx-auto">
            {subtitle && (
              <h6 className="text-muted mb-3 text-uppercase">{subtitle}</h6>
            )}
            {title && (
              <p className="font-weight-normal display-6 mb-4">{title}</p>
            )}
            {des && <p className="fs-5 mb-5">{des}</p>}
          </div>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={imageSrc}
              alt="Eco-Friendly Textiles"
              className="img-fluid rounded"
            />
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
