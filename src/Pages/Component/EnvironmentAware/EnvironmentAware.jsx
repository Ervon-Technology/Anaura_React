import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EnvironmentAware = ({img1, img2, img3}) => {
  return (
    <div>
      <div className='container py-5'>
        <div className='text-center'>
          <p className='fs-2'>Tackling Environmental Challenges</p>
        </div>
        <div className='mx-auto col-md-10 py-5 px-3'>
          <div className="row">
            <div className="col-md-7 p-md-4" style={{ backgroundColor: "rgb(235, 235, 235)" }}>
              <div className="p-4">
                <p className="font-weight-normal fs-3 fw-bold mb-4">Pioneering Sustainable Solutions</p>
                <p className="fs-5">
                  Anaura is at the forefront of reducing the carbon footprint caused by plastic waste and organizing the unorganized plastic waste market in India. Our initiative extends to the production of Biomass Briquettes and high-quality recycled products. By investing in these forward-thinking solutions, we are promoting a niche line of eco-friendly products, enhancing sustainability, and ensuring end-to-end traceability.
                </p>
              </div>
            </div>
            <div className="col-md-5 p-0 px-md-1">
              <Carousel indicators={true} controls={false}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentAware;
