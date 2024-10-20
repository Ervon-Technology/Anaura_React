import React from "react";
import saveEarth from "../../images/our-story/save-earth.jpg";
import story4 from "../../images/our-story/story-4.jpg";
import sustainability from "../../images/our-story/sustainables.jpg";
import SustainabilityImpact from "../Component/SustainabilityImpact/SustainabilityImpact";
import AnauraFeatures from "../Component/AnauraFeatures/AnauraFeatures";
import story1 from "../../images/our-story/story-1.jpg";
import story2 from "../../images/our-story/story-2.jpg";
import story3 from "../../images/our-story/story-3.jpg";

const OurStory = () => {
  return (
    <div className="anaura-page">
      {/* Hero Section */}
      <div
        className="position-relative d-flex align-items-center justify-content-center"
        style={{
          minHeight: "500px",
          backgroundImage: `url(${saveEarth})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="position-absolute w-100 h-100 bg-dark"
          style={{ opacity: 0.6 }}
        ></div>
        <div className="container text-center text-white position-relative z-2 py-5">
          <h2 className="display-4 fw-bold mb-3" style={{ fontSize: "3rem" }}>
            We are earth optimists.
          </h2>
        </div>
      </div>

      <SustainabilityImpact />

      {/* Circular Economy Section */}
      <div className="container py-5">
        <div className="row align-items-center flex-column-reverse flex-md-row-reverse">
          <div className="col-md-6 text-center text-md-start">
            <h6 className="text-uppercase text-secondary mb-3">
              A Circular Economy
            </h6>
            <h2 className="text-dark mb-4 fw-normal">Regenerative by design.</h2>
            <p className="lead">
              Keeping materials and products in circulation for as long as
              possible helps eliminate waste and resource-intensive virgin
              production. We’re collaborating with leading organizations to make
              it happen.
            </p>
          </div>
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={story4}
              width={500}
              alt="Circular economy"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* Champions of Sustainability Section */}
      <div className="bg-light">
        <div className="row align-items-center gx-0">
          {/* Image Column */}
          <div className="col-md-4 mb-4 mb-md-0">
            <img
              src={sustainability}
              alt="Sustainability champions"
              className="img-fluid w-100"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </div>

          {/* Text Column */}
          <div className="col-md-8 text-center text-md-start px-3 px-md-5">
            <div className="container py-5">
              <h5 className="text-secondary mb-3">Champions of Sustainability</h5>
              <h3 className="text-dark mb-4 fw-normal display-6">
                Our partners are extraordinary leaders who inspire other businesses to be good stewards of our planet and future.
              </h3>
              <a
                href="#"
                className="btn btn-outline-dark rounded-pill px-4 py-2 mt-3"
              >
                Meet Our Champions
              </a>
            </div>
          </div>
        </div>
      </div>



      {/* Behind the Scenes Section */}
      <div className="container text-center py-5">
        <h3 className="text-dark mb-4 fw-normal display-6">
          Behind the scenes at ANAURA
        </h3>
        <p className="lead mx-1 mx-md-5">
          We look at every decision through the lens of our three core goals:
          reducing our environmental impact, mainstreaming sustainable fashion,
          and being useful to the planet. If we’re happy we checked those boxes,
          then we greenlight a plan.
        </p>
      </div>


      <AnauraFeatures />

      {/* Reducing Environmental Impact Section */}
      <div className="container py-5">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6 col-lg-7 px-3 pe-0 pe-lg-5 text-center text-md-start">
            <h6 className="text-secondary text-uppercase mb-3">
              Reducing Our Environmental Impact
            </h6>
            <h3 className="text-dark mb-4 fw-normal fs-2">
              Making a difference against Plastic Pollution
            </h3>
            <p className="lead">
              Together, let's reshape the future through innovative recycling. Be part of Rudra Ecovation's journey to a sustainable tomorrow. 
            </p>
          </div>
          <div className="col-md-6 col-lg-5 mb-4 mb-md-0">
            <img
              src={story1}
              alt="fashion1"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* Mainstreaming Sustainable Fiber Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-5 mb-4 mb-md-0">
            <img
              src={story2}
              alt="fashion2"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6 col-lg-7 px-3 ps-0 ps-lg-5 text-center text-md-start">
            <h6 className="text-secondary text-uppercase mb-3">
              Mainstreaming Sustainable Fabric
            </h6>
            <h3 className="text-dark mb-4 fw-normal fs-2">
              We don’t just make ANAURA, we help educate about sustainable
              upcycle Fabric.
            </h3>
            <p className="lead ">
              ANAURA® is made with less carbon, using non-toxic products. It
              reduces global warming potential compared to conventional virgin
              polyester.
            </p>
          </div>
        </div>
      </div>

      {/* Useful to the Planet Section */}
      <div className="container py-5">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6 col-lg-7 px-3 pe-0 pe-lg-5 text-center text-md-start">
            <h6 className="text-secondary text-uppercase mb-3">
              Are We Being Useful To The Planet?
            </h6>
            <h3 className="text-dark mb-4 fw-normal fs-2">
              Our approach is built on transparency and fueled by the desire to
              be helpful.
            </h3>
            <p className="lead ">
              How we do business, who we hire and how we grow are focused on
              what’s good for tomorrow. When it comes to figuring out the future
              of our planet, we’re optimistic collaborators, honest sharers and
              passionate believers.
            </p>
          </div>
          <div className="col-md-6 col-lg-5 mb-4 mb-md-0">
            <img src={story3} alt="fashion3" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
