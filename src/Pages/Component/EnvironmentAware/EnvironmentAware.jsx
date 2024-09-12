import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EnvironmentAware = ({ title, heading, body, img1, img2, img3 }) => {
  return (
    <div>
      <div className="container py-5">
        {/* Title Section */}
        <div className="text-center mb-4">
          {title && <p className="fs-2">{title}</p>}
        </div>

        {/* Main Content Section */}
        <div className="mx-auto col-md-10">
          <div className="row align-items-stretch">
            {/* Carousel Section */}
            <div className="col-xl-5 col-lg-6 order-1 order-lg-2 p-0 mb-4 mb-lg-0 d-flex align-items-stretch">
              <Carousel indicators={true} controls={false} className="mx-auto w-100 d-flex align-items-stretch">
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid"
                    src={img1}
                    alt="First slide"
                    style={{ objectFit: 'cover', maxHeight: '100%' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid"
                    src={img2}
                    alt="Second slide"
                    style={{ objectFit: 'cover', maxHeight: '100%' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid"
                    src={img3}
                    alt="Third slide"
                    style={{ objectFit: 'cover', maxHeight: '100%' }}
                  />
                </Carousel.Item>
              </Carousel>
            </div>

            {/* Text Section */}
            <div className="col-xl-7 col-lg-6 order-2 order-lg-1 p-5 p-lg-4 p-xl-5  d-flex align-items-stretch" style={{ backgroundColor: "rgb(235, 235, 235)" }}>
              <div className="p-2 p-lg-0 p-xl-2 text-center text-lg-start d-flex align-items-center w-100">
                <div>
                  {heading && <p className="font-weight-normal fs-3 fw-bold mb-4">{heading}</p>}
                  {body && <p className="fs-5">{body}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentAware;
