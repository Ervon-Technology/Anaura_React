import React, { useEffect } from 'react';
import background from '../../videos/background.mp4';
import rudra from '../../images/rudra.svg';
import auara from '../../images/auara.svg';
import about from '../../images/about.png';
import oneOne from '../../images/one-one.png';
import oneTwo from '../../images/one-two.png';
import counter from '../../videos/ocenwast.mp4';
import logo from "../../images/Logo.png";

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
      <section className="position-relative overflow-hidden d-flex align-items-center">
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
        <div className="row py-5 text-white" style={{ zIndex: 1 }}>
          <div className="col-12">
            <div className="py-5"></div>
            <div className="fs-6 text-center mb-3 pt-5">
              ECO-FRIENDLY. SUSTAINABLE. FUTURE-READY.
            </div>
            <div className="display-6 col-8 mx-auto text-center">
              ANAURA is a sustainable alternative to unsustainable fabrics, building trust, traceability and sustainability in fashion and home furnishing!
            </div>
            <div className="py-5"></div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center text-center text-md-start">
            <div className="col-md-8 col-12 fw-bold mb-4 mb-md-0">
              <div className="display-5 fw-semibold">
                Trustable. Traceable. Sustainable.
              </div>
            </div>
            <div className="col-md-2 col-6 mb-3 mb-md-0">
              <img src={rudra} alt="" className="img-fluid" />
            </div>
            <div className="col-md-2 col-6">
              <img src={auara} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5" style={{ background: 'linear-gradient(to bottom, #000000, #808080)', height: '100vh', width: '100%' }}>
        <div className="container text-white p-4">
          <div className="row">
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img src={about} className="img-fluid" alt="" />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h2 className="mb-3">About Anaura</h2>
                <p className="fs-5 mb-4">
                  Anaura where post-consumer PET bottles are transformed into essential wearable material (rPET fabric) items. With a daily production of 320,000 sq. meters, Anaura epitomize sustainability and style. Our skin-friendly, flexible, and durable materials ensure both comfort and longevity
                </p>
                <button className="btn btn-outline-light rounded-pill px-4 btn-lg">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 my-3 d-flex flex-column justify-content-center">
              <div>
                <h1 className="display-6 fw-semibold mb-3">ANAURA FASHION</h1>
                <p className="lead col-md-8 mb-4">Enjoy future proof fashion with anaura vast range of fabric alternatives</p>
                <button className="btn btn-outline-dark rounded-pill px-4 btn-lg">Know More</button>
              </div>
            </div>
            <div className="col-md-6 my-3">
              <div className="row">
                <div className="col-6">
                  <img src={oneOne} alt="" className="w-100" />
                </div>
                <div className="col-6">
                  <img src={oneTwo} alt="" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-md-6 my-3">
              <div className="row">
                <div className="col-6">
                  <img src={oneTwo} alt="" className="w-100" />
                </div>
                <div className="col-6">
                  <img src={oneOne} alt="" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-md-6 my-3 d-flex flex-column justify-content-center">
              <div className="mx-2">
                <h1 className="display-6 fw-semibold mb-3">ANAURA HOME</h1>
                <p className="lead col-8">Step into the future of home fashion with recycled material for Home Furnishing items</p>
                <button className="btn btn-outline-dark rounded-pill px-4 btn-lg">Know More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative overflow-hidden d-flex align-items-center" style={{ height: '70vh' }}>
      <video className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" autoPlay loop muted playsInline>
          <source src={counter} type="video/mp4" /> {/* Use the imported video file */}
          Your browser does not support the video tag.
        </video>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
        <div className="container text-white text-center py-5" style={{ zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-12">
              <h3 className="mb-4 flex flex-wrap video-text fs-1 mx-auto col-10 fw-normal">Recycling 8.8 Million Plastic Bottles Everyday, Slashing 1,40,000 MT of Co2 Emission Annually</h3>
              <h5 className="mb-4 fw-normal">Recycling more than 6000 plastics bottles per minute</h5>
              <div id="counter" className="display-1 fw-bold">1,362,000</div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5">
      <div class="container text-center py-5">
        <h2 class="text-uppercase mb-4 fw-light fs-4">GET IN TOUCH</h2>
        <p class=" mb-4 fs-1 fw-medium">
          Learn how ANAURA can enhance your<br />brand's eco-story.
        </p>
        <button class="btn btn-outline-dark rounded-pill px-5 py-3 btn-lg">
          Contact Us
        </button>
      </div>
    </section>

    <footer class="container-fluid border-top">
    <div class="row pt-5 pb-4">
      <div class="col-xl-6 col-lg-5 col-md-12 col-sm-12 text-center my-4 my-md-0 text-lg-start">
        <img src={logo} alt="ANAURA Future-Proof Fashion" class="img-fluid ms-lg-5"
          style={{ maxWidth: '300px' }}/>
      </div>
      <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 mt-4 mt-lg-0 text-center  text-lg-start ">
        <ul class="list-unstyled">
          <li class="mb-4">
            <a href="#" class="text-decoration-none text-dark fw-semibold">Discover ANAURA</a>
          </li>
          <li class="mb-4">
            <a href="#" class="text-decoration-none text-dark fw-semibold">About us</a>
          </li>
          <li class="mb-4">
            <a href="#" class="text-decoration-none text-dark fw-semibold">How it's made</a>
          </li>
        </ul>
      </div>
      <div class="col-xl-2 ps-xl-0 col-lg-3 ps-lg-5 col-md-4 col-sm-6 mt-4 mt-lg-0 text-center  text-lg-start">
        <ul class="list-unstyled">
          <li class="mb-4">
            <a href="#" class="text-decoration-none text-dark fw-semibold">Anaura for brands</a>
          </li>
          <li class="mb-4">
            <a href="#" class="text-decoration-none text-dark fw-semibold">ANAURA Our Ocean</a>
          </li>
          <li class="mb-4">
            <a href="#" class="text-decoration-none text-dark fw-semibold">Sustainability</a>
          </li>
        </ul>
      </div>
      <div class="col-xl-2 col-lg-2 col-md-4 col-sm-12 mt-4 mt-lg-0 text-center  text-lg-start">
        <ul class="list-unstyled">
          <li class="mb-4">
            <a href="#" class="text-decoration-none text-dark fw-semibold">W.O.W Factor</a>
          </li>
          <li class="mb-4">
            <a href="#" class="text-decoration-none text-dark fw-semibold">Our Story</a>
          </li>
          <li class="mb-4">
            <a href="#" class="text-decoration-none text-dark fw-semibold">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row py-3 bg-dark text-light px-4">
      <div class="col-md-8 text-center text-md-start">
        <small class="text-secondary">
          &copy;2023 Anaura. All rights reserved. |
          <a href="#" class="text-secondary">Privacy Policy</a>
        </small>
      </div>
      <div class="col-md-4 text-center text-md-end mt-3 mt-md-0">
        <a href="#" class="text-light me-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram"
            viewBox="0 0 16 16">
            <path
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
          </svg>
        </a>
        <a href="#" class="text-light">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin"
            viewBox="0 0 16 16">
            <path
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
  
    </div>
  );
}

export default Home;
