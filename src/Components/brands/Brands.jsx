import React from 'react';
import './brands.css';
import tree from '../../images/tree.png';
import reduce from '../../images/reduce.jpg';

const Brands = () => {
  return (
    <div className="brands">
      <div className="container-fluid p-0">
        <section className="brands__section-1 container-fluid p-0">
          <div className="row brands__row">
            <div className="col-8 d-flex justify-content-center align-items-center">
              <h1 className="brands__title ">
                ANAURA FOR <br />
                <span className="brands__title--highlight">BRANDS</span>
              </h1>
            </div>
            <div className="col-4 brands__image p-5"></div>
          </div>
        </section>

        {/* First Row */}
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-5 brands__image--first bg-secondary"></div>
            <div className="col-lg-7 brands__text-container d-flex align-items-center justify-content-center bg-tertiary">
              <p className="brands__text brands__text--section-1">
                New generation of consumers want brands to take a stand on issues close to their hearts.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row brands__second-row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <p className="brands__text brands__text--section-2 ">
              New generation want brands to take a stand on issues close to their hearts.
            </p>
          </div>
          <div className="col-lg-6 px-lg-0 px-5 brands__highlight-text-div " style={{width:"30%"}}>
            <p className="brands__highlight-text">88% of consumers said they buy products from a company leading with a purpose.</p>
            <p className="brands__highlight-text">It's more than environmental or social purpose; it's a toolkit to enhance your brand story.</p>
            <p className="brands__highlight-text">94% of consumers say it's a brand's responsibility to create products that are not harmful to the earth.</p>
          </div>
        </div>

        {/* Third Row */}
        <div className="container p-0 brands__third-row">
          <div className="row no-gutters">
            <div className="col-lg-7 brands__text-container d-flex align-items-center justify-content-center">
              <p className="brands__text brands__text--section-3">
                Stakeholders are increasingly seeking businesses that combine profitability with meaningful impact. With ANAURA, you can easily create and communicate your impact to drive business growth.
              </p>
            </div>
            <div className="col-lg-5 brands__image-container d-flex justify-content-center align-items-center">
              <img src={tree} alt="Tree" className="img-fluid" />
            </div>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="container p-0 brands__fourth-row">
          <div className="row no-gutters">
            <div className="col-lg-5 brands__image-container d-flex justify-content-center align-items-center">
              <img src={reduce} alt="Reduce" className="img-fluid" />
            </div>
            <div className="col-lg-7 brands__text-container d-flex align-items-center justify-content-center">
              <p className="brands__text brands__text--section-4 py-lg-0 py-5">
                By reducing your plastic footprint, you’re part of a community that champions the planet and its people. Be an inspiration for your target audience.
              </p>
            </div>
          </div>
        </div>

        {/* Fifth Row */}
        <div className="container p-0 brands__fifth-row">
          <div className="row no-gutters">
            <div className="col-lg-7 brands__text-container d-flex flex-column  justify-content-center">
              <p className="brands__text brands__text--section-5 px-lg-0 px-5 mx-lg-0 mx-5 text-center">
                Make your brand Trustable, Traceable & Sustainable
              </p>
              <p className="brands__text brands__text--section-5-1">
                With Anaura, Anaura comes with quality standardisation certificates. You can trace Anaura back to where it was made: OBP, HBP, or PCR, and it’s made with a sustainable manufacturing process by one of India’s largest integrated manufacturing plants.
              </p>
            </div>
            <div className="col-lg-5 brands__image-container d-flex justify-content-end ">
              <img src={reduce} alt="Reduce" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
