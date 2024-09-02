import React, { useState } from "react";
import "./Fashion.css";
// import brown from "../images/brown_outfit.jpg";
import green from "../../images/green_outfit.jpg";
import peach from "../../images/peach_outfit.jpg";
import peacock from "../../images/peacock_ourfit.jpg";
// import white from "../images/white_outfit.jpg";
import scarf from "../../images/scarf_outfit.jpg";
import FashionCard from "./FashionCard";
import FashionCara from "./FashionCara";

function Fashion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { src: green, alt: "Green" },
    { src: peach, alt: "Peach" },
    { src: peacock, alt: "Peacock" },
  ];

  const handleSelect = (index) => {
    setActiveIndex(index);
  };
  return (
    <div>
      {/* main-content-fashion */}

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src=''
              className="d-block w-100 carasoul-img"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src=''
              className="d-block w-100 carasoul-img"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src=''
              className="d-block w-100 carasoul-img"
              alt="Third slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* main-content ends */}

      {/* main-content=fashion-1 */}

      <div className="container-fluid main-content-fashion-1 mt-lg-5">
        <div className="row">
          <div className="col-lg-6 col-12 m-0 p-0 d-flex align-items-center justify-content-center pe-lg-3 d-none d-lg-block">
            <img
              src={scarf}
              alt=""
              className="object-fit-cover"
              height={500}
              width="90%"
            />
          </div>
          <div className="col-lg-6 col-12  d-flex justify-content-center align-items-center m-0 p-0 px-lg-0 px-4 h-0 main-content-fashion-1-col-2 ">
            <div className="bg-secondary-subtle d-flex  fashion-text-paragraph w-lg-100 mt-0">
              <p className=" w-75 fw-1 fs-1 pxs-lg-0 ps-4 fashion-text-paragraph-p ">
                Enjoy future proof fashion with ANAURA vast range of fabric
                alternatives
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* main-content-fashion-1-ends */}
      {/* main-content-fashion-2- */}

      <div className="container-fluid main-content-fashion-2 mt-2 mt-lg-5 py-5">
        <p className="fs-1 fw-bold text-center m-0 mt-4 ">
          Creative
          <span className="main-content-fashion-2-before"> Design </span>
        </p>
        <p className="text-center small-text-paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </p>
        <FashionCard />
        
      </div>

      {/* main-content-fashion-2-ends */}

      {/* main-content-fashion-3 */}

      <div className="container-fluid m-0 p-0 main-content-fashion-3 h-100 ">
        <div className="row">
          <div className="col-xl-4 col-lg-5 col-12 m-0 p-0 main-content-fashion-3-column-1 d-flex justify-content-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/62b9/bdeb/801384912b5cc18a843a8289f50512e2?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pdx-goy3exOBWR0QsEPuv2dWH11WrTkl3UryPBwtUsF3tc521eY3ttsGOiy6H0mqnfdnZ7KPefsuGdkY72TPveMy9eyvkSRUsktocexVs7AmvL3AyrthTOKA2Fi-K8COrPee9DhA2KGz6S-cl3owlV7asuylQWM8MBDDCJYTSMQQS2aFsA5Qm7FIaTakqrbZ~XncCnNYk1mma3Kp7EyhR1hBrrwr5uk8E7sKGkiUNzHmD1HP~FpKKMhMEHemw6IGGwZlos2cptw9alw4XLFufrTwA1jLY54bItf6SZMa8IiyxI~EBw2uXsFUNDQ5-EXJ2MDt3KBZcEY48Lv8mPTfMA__ "
              alt=""
              className="img-fashion1 object-fit-cover "
            />
          </div>
          <div className="col-xl-8 col-lg-7 col-12 bg-secondary-subtle d-flex justify-content-center align-items-center m-0 p-0 main-content-fashion-3-column-2">
            <div className="bg-secondary-subtle d-flex  fashion-text-paragraph w-lg-100 mt-0">
              <p className="w-75 fw-1 fs-1 pxs-lg-0 ps-4 fashion-text-paragraph-p ">
                New generation of want brands to take a stand on issues close to
                their hearts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* main-content-fashion-3-ends */}

      {/* text-section-only */}
      <div className="container-fluid m-0 p-0 main-content-fashion-4 my-5 d-flex justify-content-center align-items-center ">
        <p className="fs-1  small-text-paragraph-2 py-5 text-lg-start text-center">
          New generation of want brands to take a stand on issues close to their
          hearts.
        </p>
      </div>

      {/* text-section-only ends */}

      {/* text-section-only product */}
      <div className="container-fluid m-0 p-0 py-5 ps-lg-5 ps-0 bg-secondary-subtle  d-flex justify-content-center justify-content-lg-start align-items-center">
        <div className="row ps-lg-5 ps-0">
          <div className="col-12 ps-lg-5 ps-0">
            <div className="ps-lg-5 ps-0 product">
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: "3.5rem" /* 56px converted to rem */,
                  fontWeight: 600,
                  lineHeight: "4rem",
                }}
                className="fs-1  m-0 p-0 py-1 ps-2"
              >
                SPRING COLLECTION
              </p>
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: "3.5rem" /* 56px converted to rem */,
                  fontWeight: 600,
                  lineHeight: "4rem",
                }}
                className="fs-1  m-0 p-0 py-1 ps-2"
              >
                SUMMER COLLECTION
              </p>
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: "3.5rem" /* 56px converted to rem */,
                  fontWeight: 600,
                  lineHeight: "4rem",
                }}
                className="fs-1  m-0 p-0 py-1 ps-2"
              >
                WINTER COLLECTION
              </p>
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: "3.5rem" /* 56px converted to rem */,
                  fontWeight: 600,
                  lineHeight: "4rem",
                }}
                className="fs-1  m-0 p-0 py-1 ps-2"
              >
                SUSTAINABLE SPORTS WEAR
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* text-section-only product ends */}

      {/* button-section  */}
      <section className="fashion-last">
        <div className="container d-flex  justify-content-center align-items-center">
          <div className="row">
            <div className="col-12  py-5 mt-5 text-center">
              <h1 className="mb-4">We’re here to save mother earth</h1>
              <a href="" className="py-5">
                <button
                  type="button"
                  class="btn btn-outline-dark rounded-pill px-4 mt-4 p-2"
                >
                  Contact Us To Know How
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* button-section ends */}
    </div>
  );
}

export default Fashion;
