import React from "react";
import tree from "../../images/tree.png";
import reduce from "../../images/reduce.jpg";
import brandPoster from "../../images/brand-poster.png";
import './brands.css'

const Brands = () => {
  return (
    <div className="brands">
      <div className="container-fluid p-0">
        <section className="d-flex justify-content-center align-items-center text-center bg-cover bg-center position-relative" style={{ height: "70vh", backgroundImage: `url(${brandPoster})`, backgroundSize: "cover" }}>
          <h1 className="fw-bold" style={{ fontSize: "3.5rem", lineHeight: "4rem", color: "#606060" }}>
            ANAURA FOR <br />
            <span>BRANDS</span>
          </h1>
        </section>

        {/* First Row */}
        <div className="row g-0">
          <div className="col-lg-4 first-img" style={{ backgroundImage: `url('https://s3-alpha-sig.figma.com/img/b51f/7bb1/c8073257b8a0c12c39a520bf3a61754c?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OEpNKxzxsZZgUS3MLts50w6bCa0afC5oSb-DQ188j7gr5Qpk~XC6TlmRB8bnQZUb4MmSql4ntpQTQkvQx0d53FfmTgHVYU73xpKhGj-onDvT0viUyyV2aKCwnTxRaptNGww7Q5Opp3BZrsfc10LeZ~smjfdxnIMhk1Qs3HYyza6XfmTSFbcxV2dQwPQLnazn72a85W4viAFXPqlEv9lPMHcHE~IzAWei9al14I5BTOt9Y0zasyP9kTIdKnBNhsEjHk-vaUxOjxILqUmeHddfQjEw-yGuHmaP45vow0iQhPH2iKaD8aEcE3AjdoxF9ugPllAYnSHxY2ZK83IRuSCbzA__')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '95vh' }}>
          </div>
          <div className="col-lg-8 d-flex align-items-center bg-lightblue p-5">
            <p className="display-5 p-lg-5">New generation of consumers want brands to take a stand on issues close to their hearts.</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="row g-3 p-lg-5 p-2">
          <div className="col-lg-6 d-flex align-items-center justify-content-center p-lg-5 ">
            <p className="display-5 mt-lg-0 mt-5 p-lg-0  p-3">
              New generation want brands to take a stand on issues close to their hearts.
            </p>
          </div>
          <div className="col-lg-6 px-lg-0 px-lg-5 py-lg-5 p-lg-0 p-md-2 p-2">
            <div className="p-lg-5 p-3">
              <p className="lead mt-lg-4">88% of consumers said they buy products from a company leading with a purpose.</p>
              <p className="lead mt-lg-4">It's more than environmental or social purpose; it's a toolkit to enhance your brand story.</p>
              <p className="lead mt-lg-4">94% of consumers say it's a brand's responsibility to create products that are not harmful to the earth.</p>
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div className="row g-3 py-lg-0 py-5">
          <div className="col-lg-7 d-flex align-items-center justify-content-center">
            <p className="fs-2 text-start  px-lg-4 px-5 stack">
              Stakeholders are increasingly seeking businesses that combine profitability with meaningful impact. With ANAURA, you can easily create and communicate your impact to drive business growth.
            </p>
          </div>
          <div className="col-lg-5 d-flex justify-content-center">
            <img src={tree} alt="Tree" className="img-fluid img" />
          </div>
        </div>

        {/* Fourth Row */}
        <div className="row g-3" style={{ paddingTop: "100px" }}>
          <div className="col-lg-6 d-flex justify-content-center">
            <img src={reduce} alt="Reduce" className="img-fluid object-fit-cover img" style={{ maxHeight: "300px", maxWidth: "100%", height: "auto", width: "auto" }} />
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <p className="fs-2 text-start  p-5 stack">
              By reducing your plastic footprint, you’re part of a community that champions the planet and its people. Be an inspiration for your target audience.
            </p>
          </div>
        </div>

        {/* Fifth Row */}
        <div className="row g-3 px-5 mt-lg-5 mb-5 pb-5 fifth-row" style={{ paddingTop: "100px" }}>
          <div className="col-lg-7 d-flex flex-column justify-content-center px-lg-5 ">
            <p className="fs-1 text-start px-md-4 px-0 stack">
              Make your brand Trustable, Traceable & Sustainable
            </p>
            <p className="fs-4 text-start px-md-4 px-1 py-lg-0 py-4  stack">
              With Anaura, Anaura comes with quality standardisation certificates. You can trace Anaura back to where it was made: OBP, HBP, or PCR, and it’s made with a sustainable manufacturing process by one of India’s largest integrated manufacturing plants.
            </p>
          </div>
          <div className="col-lg-5 d-flex justify-content-center">
            <img src={reduce} alt="Reduce" className="img-fluid object-fit-cover" style={{ maxHeight: "300px", maxWidth: "100%", height: "auto", width: "auto" }} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Brands;
