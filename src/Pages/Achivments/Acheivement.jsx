import React from "react";
import "./Achievement.css";
import love from "../../images/love.jpg";
import earth from "../../images/earth.jpg";

function Acheivement() {
  return (
    <div>
      <div className="container-fluid first-contain"></div>

      <div className="container-fluid sec-contain py-3 d-flex justify-content-center flex-column">
        <p className="header text-center">Achievement of Roots</p>
        <p className=" text-center fs-5 sec-contain-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has industry's
        </p>
      </div>

      <div className="container  mb-5 third-contain">
        <div className="row">
          <div className="col-lg-6  d-flex justify-content-center order-lg-1 order-2 ">
            <p className="px-5 sec-contain-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center order-lg-2 order-1 pb-lg-0 pb-3">
            <img
              src="https://dummyimage.com/600x400/000/fff"
              alt=""
              className="w-100 img-fluid"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid  py-lg-5 ">
        <div className="row">
          <div className="col-lg-4 pb-lg-0 pb-3">
            <div>
              <img
                src="https://dummyimage.com/600x400/000/fff"
                alt=""
                className="w-100 img-fluid"
              />
              <p className="fs-lg-3 fs-4 ps-lg-4 m-0 text-center pt-lg-0 pt-4">Kiss Kington</p>
              <p className="fs-lg-4 fs-5 ps-lg-4 m-0 text-center ">Architecture Head</p>
            </div>
          </div>
          <div className="col-lg-4 pb-lg-0 pb-3">
            <div>
              <img
                src="https://dummyimage.com/600x400/000/fff"
                alt=""
                className="w-100 img-fluid pt-md-0 pt-4"
              />
              <p className="fs-3 fs-4 ps-lg-4 m-0 text-center pt-lg-0 pt-4">Paul James</p>
              <p className="fs-4 fs-5 ps-lg-4 m-0 text-center">Company Secretary</p>
            </div>
          </div>
          <div className="col-lg-4 pb-lg-0 pb-3 ">
            <div>
              <p className=" header text-start m-0 px-5">Behind ANAURA</p>
              <p className="fs-lg-2 fs-5 start px-5 sec-contain-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has industry's
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-lg-5 mb-lg-5 py-3 third-contain">
        <div className="row">
          <div className="col-lg-6  d-flex justify-content-center align-items-center order-lg-1 order-2 ">
            <p className=" px-5 sec-contain-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center order-lg-2 order-1 pb-lg-0 pb-3">
            <img
              src="https://dummyimage.com/600x400/000/fff"
              alt=""
              className=" img-fluid"
              height={300}
              width={400}
            />
          </div>
        </div>
      </div>

      <div className="container  mt-lg-5 mb-lg-5 py-5 third-contain">
        <div className="row">
          <div className="col-lg-6  d-flex justify-content-center align-items-center order-2 ">
            <p className=" px-5 sec-contain-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center order-1 pb-lg-0 pb-3">
          <img
              src={love}
              alt=""
              className="obkect-fit-cover img-fluid"
              height={300}
              width={400}
            />
          </div>
        </div>
      </div>

      <div className="container  mt-lg-5 mb-5 third-contain py-5">
        <div className="row">
          <div className="col-lg-6  d-flex justify-content-center align-items-center order-lg-1 order-2 ">
            <p className=" px-5 sec-contain-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center order-lg-2 order-1 pb-lg-0 pb-3">
            <img
              src={earth}
              alt=""
              className="obkect-fit-cover img-fluid"
              height={280}
              width={400}
            />
          </div>
        </div>
      </div>
    </div>  );
}

export default Acheivement;
