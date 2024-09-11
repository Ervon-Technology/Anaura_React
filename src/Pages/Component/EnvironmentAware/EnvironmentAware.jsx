import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EnvironmentAware = ({ title, heading, body, img1, img2, img3 }) => {
  return (
    <div>
      <div className='container py-5'>
        {/* Title Section */}
        <div className='text-center'>
          {title && <p className='fs-2'>{title}</p>}
        </div>

        {/* Main Content Section */}
        <div className='mx-auto col-md-10 py-5 px-3'>
          <div className="row">
            {/* Text Section */}
            <div className="col-md-7 p-md-4 mb-4 mb-md-0" style={{ backgroundColor: "rgb(235, 235, 235)" }}>
              <div className="p-4">
                {heading && <p className="font-weight-normal fs-3 fw-bold mb-4">{heading}</p>}
                {body && <p className="fs-5">{body}</p>}
              </div>
            </div>

            {/* Carousel Section */}
            <div className="col-md-5 p-0 px-md-1">
              <Carousel indicators={true} controls={false}>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid"
                    src={img1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid"
                    src={img2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid"
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
