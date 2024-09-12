import React, { useEffect } from 'react';
import background from '../../videos/background.mp4';
import rudra from '../../images/rudra.svg';
import auara from '../../images/auara.svg';
import about from '../../images/about.png';
import oneOne from '../../images/one-one.png';
import oneTwo from '../../images/one-two.png';
import counter from '../../videos/ocenwast.mp4';
import logo from "../../images/Logo.png";
import ImpactSection from '../Component/ImpactSection/ImpactSection';


import Img2 from '../../images/home/home.svg'
import spring from '../../images/home/spring@2x.svg'

import summer from '../../images/home/summer.svg'
import winter from '../../images/home/winter@2x.svg'
import FactImg from '../../images/home/factories.svg'

import sofa from '../../images/home/furniture@2x.svg'
import carpet from '../../images/home/carpet@2x.svg'
import excarpet from '../../images/home/excarpet@2x.svg'



import Heading2 from '../../fonts/Heading2';
import Marquee from 'react-fast-marquee';

const Home = () => {

  useEffect(() => {
    let counterElement = document.getElementById("counter");
    let initialNumber = 1362000;
    let incrementAmount = 1;
    let incrementInterval = 10; // 10 milliseconds for 100 per second

    let currentNumber = localStorage.getItem("counterNumber")
      ? parseInt(localStorage.getItem("counterNumber"))
      : initialNumber;

    function incrementCounter() {
      currentNumber += incrementAmount;
      counterElement.innerText = currentNumber.toLocaleString("en-US");
      localStorage.setItem("counterNumber", currentNumber);
    }

    counterElement.innerText = currentNumber.toLocaleString("en-US");
    const intervalId = setInterval(incrementCounter, incrementInterval);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="position-relative overflow-hidden d-flex align-items-center" style={{ minHeight: '70vh' }}>
        <video
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={background} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
        <div className="container py-5 text-white" style={{ zIndex: 1 }}>
          <div className="row py-5">
            <div className="col-12">
              <div className="fs-6 text-center mb-3 pt-5">
                ECO-FRIENDLY. SUSTAINABLE. FUTURE-READY.
              </div>
              <div className="display-6 col-12 col-lg-8 mx-auto text-center">
                ANAURA is a sustainable alternative to unsustainable fabrics, building trust, traceability, and sustainability in fashion and home furnishing!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center text-center text-md-start">
            <div className="col-lg-8 col-12 fw-bold mb-4 mb-lg-0">
              <div className="display-5 fw-semibold">
                Trustable. Traceable. Sustainable.
              </div>
            </div>
            <div className="col-lg-2 col-6 mb-3 mb-lg-0">
              <img src={rudra} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-2 col-6">
              <img src={auara} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5" style={{ background: '#ecf6ff' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center mb-4 mb-lg-0">
              {/* <img src={FactImg} className="img-fluid col-8 mx-auto" alt="" /> */}
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className='col-9 mx-auto'>
                <Heading2 text={"About Anaura"} />
                <p className="fs-5 mb-4">
                  Anaura where post-consumer PET bottles are transformed into essential wearable material (rPET fabric) items. With a daily production of 320,000 sq. meters, Anaura epitomizes sustainability and style.
                </p>
                <button className="btn btn-outline-dark rounded-pill px-4 btn-lg border-2 fs-6">About ANAURA</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}

      {/* Grow your brand */}
      <section className="eco-section py-md-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 order-1 order-md-2 text-center mx-auto p-4" style={{ "background-color": "rgb(213, 234, 255)" }}>
              <img
                src={Img2}
                alt="Eco-Friendly Textiles"
                className="img-fluid rounded col-md-10 mx-auto"
              />
            </div>
            <div className="col-md-6 d-flex align-items-center order-2 order-md-1">
              <div className="col-md-10 py-4 mx-auto">

                <Heading2 text={"Grow your brand with ANAURA"} />

                <p className="fs-5 mb-4">We believe brands and consumers should use their purchasing power to further the environmental impact they want to see in the world.</p>

                <button className="btn btn-outline-dark rounded-pill px-4 btn-lg border-2 fs-6">ANAURA For Brands</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Grow your brand */}


      {/* ANAURA FOR FASSION */}
      <section className="eco-section">
        <div className="row align-items-center">
          <img
            src={oneOne}
            alt="Eco-Friendly Textiles"
            className="col-md-4 p-0"
          />
          <div className="col-md-6 d-flex align-items-center order-2 order-md-1 mx-auto">
            <div className="col-md-10 py-4 mx-auto">
              <Heading2 text={"ANAURA Fassion"} />
              <p className="fs-5 mb-4 col-md-8">Enjoy future proof fashion with anaura vast range of fabric alternatives</p>
              <button className="btn btn-outline-dark rounded-pill px-4 btn-lg border-2 fs-6">ANAURA For Brands</button>
              <div className="mt-5">
                <Marquee>
                  <div className="d-flex">
                    <img
                      src={spring}
                      alt="Eco-Friendly Textiles"
                      className="col-md-4 p-0 mx-2" style={{ "width": "10rem" }}
                    />
                    <img
                      src={summer}
                      alt="Eco-Friendly Textiles"
                      className="col-md-4 p-0 mx-2" style={{ "width": "10rem" }}
                    />
                    <img
                      src={winter}
                      alt="Eco-Friendly Textiles"
                      className="col-md-4 p-0 mx-2" style={{ "width": "10rem" }}
                    />
                     <img
                      src={spring}
                      alt="Eco-Friendly Textiles"
                      className="col-md-4 p-0 mx-2" style={{ "width": "10rem" }}
                    />
                    <img
                      src={summer}
                      alt="Eco-Friendly Textiles"
                      className="col-md-4 p-0 mx-2" style={{ "width": "10rem" }}
                    />
                    <img
                      src={winter}
                      alt="Eco-Friendly Textiles"
                      className="col-md-4 p-0 mx-2" style={{ "width": "10rem" }}
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END ANAURA FOR FASSION */}


      {/* ANAURA FOR HOME */}
      <section className="eco-section py-5 my-5">

        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6 d-flex align-items-center mx-auto">
              <div className="col-md-10 py-4 mx-auto">

                <Heading2 text={"ANAURA Home"} />

                <p className="fs-5 mb-4 col-md-8">Step into the future of home fashion with recycled material for Home Furnishing items</p>

                <button className="btn btn-outline-dark rounded-pill px-4 btn-lg border-2 fs-6">Know More ANAURA Home</button>

                <div className="mt-5">
                <Marquee>
                  <div className="d-flex">
                    <img
                      src={sofa}
                      alt="Eco-Friendly Textiles"
                      className="col-md-4 p-0 mx-2" style={{ "width": "10rem" }}
                    />
                    <img
                      src={excarpet}
                      alt="Eco-Friendly Textiles"
                      className="col-md-4 p-0 mx-2" style={{ "width": "10rem" }}
                    />
                    <img
                      src={carpet}
                      alt="Eco-Friendly Textiles"
                      className="col-md-4 p-0 mx-2" style={{ "width": "10rem" }}
                    />
                    <img
                      src={sofa}
                      alt="Eco-Friendly Textiles"
                      className="col-md-4 p-0 mx-2" style={{ "width": "10rem" }}
                    />
                    <img
                      src={excarpet}
                      alt="Eco-Friendly Textiles"
                      className="col-md-4 p-0 mx-2" style={{ "width": "10rem" }}
                    />
                    <img
                      src={carpet}
                      alt="Eco-Friendly Textiles"
                      className="col-md-4 p-0 mx-2" style={{ "width": "10rem" }}
                    />
                 
                  </div>
                </Marquee>
              </div>


              </div>
            </div>

            <div className="col-md-6 text-center">
            <img
                      src={oneOne}
                      alt="Eco-Friendly Textiles"
                      className="col-md-8 p-0 mx-2" 
                    />
            </div>

          </div>

        </div>
      </section>
      {/* END ANAURA FOR HOME */}



      {/* Recycling Counter Section */}
      <section className="position-relative overflow-hidden d-flex align-items-center" style={{ height: '70vh' }}>
        <video className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" autoPlay loop muted playsInline>
          <source src={counter} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
        <div className="container text-white text-center py-5" style={{ zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-12">
              <h3 className="mb-4 flex-wrap fs-1 mx-auto col-10 fw-normal">Recycling 8.8 Million Plastic Bottles Everyday, Slashing 1,40,000 MT of Co2 Emission Annually</h3>
              <h5 className="mb-4 fw-normal">Recycling more than 6000 plastics bottles per minute</h5>
              <div id="counter" className="display-1 fw-bold">1,362,000</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5">
        <div className="container text-center py-5">
          <h2 className="text-uppercase mb-4 fw-light fs-4">GET IN TOUCH</h2>
          <p className="mb-4 fs-1 fw-medium">
            Learn how ANAURA can enhance your<br />brand's eco-story.
          </p>
          <button className="btn btn-outline-dark rounded-pill px-5 py-3 btn-lg">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
