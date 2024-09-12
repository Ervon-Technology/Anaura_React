import React from 'react';

const ImpactSection = ({ title, subtitle, des, imageSrc }) => {
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
              { subtitle && (<h6 className="text-muted mb-3 text-uppercase">{subtitle}</h6>)}
              { title && ( <p className="font-weight-normal display-6 mb-4">{title}</p> )}
              { des && ( <p className="fs-5 mb-5">{des}</p> )}             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
