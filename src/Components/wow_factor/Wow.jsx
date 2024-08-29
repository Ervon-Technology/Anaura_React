import React from "react";
import "./Wow.css";
import thumbs from "../../images/Thumbs_up.png";
import time from "../../images/Time.png";
import Msg from "../../images/Messeage.png";
import Graph from "../../images/Graph.png";
import CreativeDesignSection from "../demo/Demo";

function Wow() {
  return (
    <div>
      <div className="container-fluid first-contain-wow"></div>

      <div
        className="container-fluid py-5 "
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mt-lg-5 d-flex flex-column justify-content-center align-items-center p-0 m-0">
              <div className=" p-5 img-wow-div border d-flex flex-column justify-content-center align-items-center mb-4 bg-white">
                <img
                  src={thumbs}
                  alt=""
                  className="img-fluid logo-img-wow  mb-4"
                />
                <p className="pt-3 fs-2">Fastest</p>
              </div>
              <div className="p-5 img-wow-div border d-flex flex-column justify-content-center align-items-center bg-white mb-lg-0 mb-4">
                <img src={time} alt="" className="img-fluid logo-img-wow" />
                <p className="pt-3 fs-2 ">Efficient</p>
              </div>
            </div>

            <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center p-0 m-0">
              <div className=" p-5 img-wow-div border d-flex flex-column justify-content-center align-items-center mb-4 bg-white">
                <img
                  src={Msg}
                  alt=""
                  className="img-fluid logo-img-wow  mb-4"
                />
                <p className="pt-3 fs-2">Startergy</p>
              </div>
              <div className="p-5 img-wow-div border d-flex flex-column justify-content-center align-items-center bg-white  mb-lg-0 mb-4">
                <img src={Graph} alt="" className="img-fluid logo-img-wow" />
                <p className="pt-3 fs-2 ">Relaible</p>
              </div>
            </div>

            <div className="col-lg-6 ps-5">
              <p className=" px-xl-5 fw-bold roots text-lg-start text-center">
                Level up your <br /> Business with Roots
              </p>
              <p className=" pb-4 px-xl-5 wow-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>

              <p className=" px-xl-5 wow-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className=" fw-bold px-xl-5 wow-text">Get a Quote ----</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5 m-0 p-0">
        <div className="row">
          <div className="col-lg-4 col-12 d-flex justify-content-center bg-secondary-subtle wow-col-2">
          
          </div>
          <div className="col-lg-8 col-12 bg-white d-flex justify-content-center align-items-center m-0 p-0 wow-col-2">
            <p className="fs-1 ">
              New generation of want brands to take a stand on issues close to
              their hearts.
            </p>
          </div>
        </div>
      </div>
      <CreativeDesignSection/>
    </div>
  );
}

export default Wow;
