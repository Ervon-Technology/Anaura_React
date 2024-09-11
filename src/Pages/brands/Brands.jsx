import React from "react";
import tree from "../../images/tree.png";
import reduce from "../../images/reduce.jpg";
import brandPoster from "../../images/brand/brand-poster.jpg";
import Img1 from '../../images/about/plasticAbout.png';
import SavePlanet from "../Component/SavePlanet/SavePlanet";

const Brands = () => {
  return (
    <div className="brands">
      <div className="container-fluid p-0">
        
        {/* Hero Section */}
        <section 
          className="d-flex justify-content-center align-items-center text-center bg-cover bg-center position-relative" 
          style={{ height: "70vh", backgroundImage: `url(${brandPoster})`, backgroundSize: "cover" }}
        >
          <h1 className="display-4 text-white fw-semibold">
            ANAURA FOR <br />
            <span>BRANDS</span>
          </h1>
        </section>

        {/* First Row */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 mb-4">
                <img src={Img1} alt="" className="w-100 img-fluid" />
              </div>
              <div className="col-lg-6 col-md-12">
                <p className="fs-2 fw-light text-center text-lg-start">
                  New generation wants brands to take a stand on issues close to their hearts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Second Row */}
        <section className="bg-light py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 order-2 order-lg-1 d-flex justify-content-center">
                <p className="display-5 fw-light text-center text-lg-start">
                  How Leading with Responsibility Strengthens Your Brand
                </p>
              </div>
              <div className="col-lg-6 col-md-12 order-1 order-lg-2">
                <div className="px-3 py-4">
                  <p className="lead fw-semibold">
                    88% of consumers said they buy products from a company leading with a purpose.
                  </p>
                  <p className="lead fw-semibold">
                    It's more than environmental or social purpose; it's a toolkit to enhance your brand story.
                  </p>
                  <p className="lead fw-semibold">
                    94% of consumers say it's a brand's responsibility to create products that are not harmful to the earth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third Row */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img src={tree} alt="Eco-Friendly Textiles" className="img-fluid rounded mb-4 mb-md-0" />
              </div>
              <div className="col-md-6">
                <p className="fs-2 fw-light text-center text-lg-start">
                  Stakeholders are increasingly seeking businesses that combine profitability with meaningful impact. With ANAURA, you can easily create and communicate your impact to drive business growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fourth Row */}
        <section className="bg-light py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-1 order-md-2 text-center">
                <img src={reduce} alt="Reduce Plastic" className="img-fluid rounded" />
              </div>
              <div className="col-md-6 order-2 order-md-1">
                <p className="fs-2 fw-light text-center text-lg-start">
                  By reducing your plastic footprint, you’re part of a community that champions the planet and its people. Be an inspiration for your target audience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fifth Row */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img src={tree} alt="Eco-Friendly Textiles" className="img-fluid rounded mb-4 mb-md-0" />
              </div>
              <div className="col-md-6">
                <h6 className="text-muted mb-3 text-uppercase text-lg-start">
                  Make your brand Trustable, Traceable & Sustainable
                </h6>
                <p className="fs-2 fw-light text-lg-start">
                  With Anaura, Anaura comes with quality standardisation certificates. You can trace Anaura back to where it was made: OBP, HBP, or PCR, and it’s made with a sustainable manufacturing process by one of India’s largest integrated manufacturing plants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SavePlanet Component */}
        <SavePlanet />
        
      </div>
    </div>
  );
};

export default Brands;
