import React from "react";
import tree from "../../images/tree.png";
import reduce from "../../images/reduce.jpg";
import brandPoster from "../../images/brand-poster.png";

import Img1 from '../../images/about/plasticAbout.png';
import SavePlanet from "../Component/SavePlanet/SavePlanet";

const Brands = () => {
  return (
    <div className="brands">
      <div className="container-fluid p-0">
        <section className="d-flex justify-content-center align-items-center text-center bg-cover bg-center position-relative" style={{ height: "70vh", backgroundImage: `url(${brandPoster})`, backgroundSize: "cover" }}>
          <h1 className="display-4">
            ANAURA FOR <br />
            <span>BRANDS</span>
          </h1>
        </section>

        {/* First Row */}
        <section class="py-5">
          <div class="container py-5">
            <div class="row">
              <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
                <img src={Img1} alt="" class="w-100 img-fluid " />
              </div>
              <div class="col-lg-6 col-md-12 d-flex align-items-center">
                <p
                  class="fs-2 col-lg-9 col-md-10 col-sm-12 ps-lg-5 fw-light py-md-5 py-md-0 text-center text-lg-start">
                  New generation wants brands to take a stand on issues close to their hearts.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*  */}

        {/* Second Row */}
        <div className="" style={{ backgroundColor: "rgb(235, 235, 235)" }}>
          <div className="row g-3 p-md-5">
            <div className="col-lg-6 d-flex align-items-center justify-content-center p-lg-5 ">
              <p class="display-4  ps-lg-5 fw-light py-md-5 py-md-0 text-center text-lg-start">
                How Leading with Responsibility Strengthens Your Brand
              </p>
            </div>
            <div className="col-lg-6 px-lg-0 px-lg-5 py-lg-5 ">
              <div className="p-lg-5 p-3 ">
                <p className="lead mt-4 fw-semibold">88% of consumers said they buy products from a company leading with a purpose.</p>
                <p className="lead mt-4 fw-semibold">It's more than environmental or social purpose; it's a toolkit to enhance your brand story.</p>
                <p className="lead mt-4 fw-semibold">94% of consumers say it's a brand's responsibility to create products that are not harmful to the earth.</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <section className="py-5" >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src={tree}
                  alt="Eco-Friendly Textiles"
                  className="img-fluid rounded col-md-10 mx-auto mb-4 mb-md-0"
                />
              </div>
              <div className="col-md-6 d-flex align-item-center">
                <div className='col-md-10 mx-auto'>

                  <p
                    class="fs-2 fw-light py-md-5 py-md-0 text-center text-lg-start">Stakeholders are increasingly seeking businesses that combine profitability with meaningful impact. With ANAURA, you can easily create and communicate your impact to drive business growth.</p>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  */}

        {/*  */}
        <div style={{ "background-color": "rgb(244, 244, 244)" }}>

          <section className="eco-section py-md-5">
            <div className="container py-5">
              <div className="row align-items-center">
                <div className="col-md-6 order-1 order-md-2 text-center">
                  <img
                    src={reduce}
                    alt="Eco-Friendly Textiles"
                    className="img-fluid rounded col-md-10"
                  />
                </div>
                <div className="col-md-6 d-flex align-items-center order-2 order-md-1">
                  <div className="col-md-10 py-4">
                    <p
                      class="fs-2 fw-light py-md-5 py-md-0 text-center text-lg-start">By reducing your plastic footprint, you’re part of a community that champions the planet and its people. Be an inspiration for your target audience.</p>

                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/*  */}

      
        {/*  */}
        <section className="py-5" >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img
                  src={tree}
                  alt="Eco-Friendly Textiles"
                  className="img-fluid rounded col-md-10 mx-auto mb-4 mb-md-0"
                />
              </div>
              <div className="col-md-6 d-flex align-item-center">
                <div className='col-md-10 mx-auto'>
                  <h6 className="text-muted mb-3 text-uppercase text-start"> Make your brand Trustable, Traceable & Sustainable</h6>
                  <p
                    class="fs-2 fw-light text-lg-start"> With Anaura, Anaura comes with quality standardisation certificates. You can trace Anaura back to where it was made: OBP, HBP, or PCR, and it’s made with a sustainable manufacturing process by one of India’s largest integrated manufacturing plants.</p>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  */}

        <SavePlanet />

      </div>
    </div>
  );
};

export default Brands;
