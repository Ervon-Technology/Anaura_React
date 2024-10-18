import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'
import background from '../../videos/rudraheroic.mp4';
import AnauraFeatures from '../Component/AnauraFeatures/AnauraFeatures';
import AboutAnaura from '../../images/home/about-anaura.mp4'
import AboutAnaura2 from '../../images/home/about-anaura2.mp4'
import oneOne from '../../images/one-one.png';
import counter from '../../videos/ocenwast.mp4';
import CarpetsImg from '../../images/anaura-home/carpets.jpg';
import recyleFabric from '../../images/home/recycleFabric.png';
import bottlecaprecycling from '../../images/home/bottle-cap-recycling.jpg'

import GrowYourBrand from '../../images/home/grow-your-brand.jpg';
import spring from '../../images/home/spring.png';
import summer from '../../images/home/summer.png';
import winter from '../../images/home/winter.png';


import furnishing from '../../images/home/home-furnishings.jpg'
import carpet from '../../images/home/carpet.jpg'
import exhibitioncarpet from '../../images/home/exhibition-carpet.jpg'
// import sofa from '../../images/home/furniture@2x.svg';
// import excarpet from '../../images/home/excarpet@2x.svg';

import Heading2 from '../../fonts/Heading2';
import Marquee from 'react-fast-marquee';


import AnauraHomeImg from '../../images/home/anaura-home.jpg';
import AnauraFashionImg from '../../images/home/anaura-fashion.jpg';
import AnauraAthleisureImg from '../../images/home/anaura-athleisure.jpg';


const Home = () => {

  useEffect(() => {
    let counterElement = document.getElementById("counter");
    let initialNumber = 11362000245; // The initial number you want
    let incrementAmount = 1;
    let incrementInterval = 10; // 10 milliseconds for 100 per second

    // Check if the local storage is set to a smaller value than the initial number
    let currentNumber = localStorage.getItem("counterNumber")
      ? Math.max(parseInt(localStorage.getItem("counterNumber")), initialNumber)
      : initialNumber;

    // Update the local storage if the currentNumber is less than the initial number
    localStorage.setItem("counterNumber", currentNumber);

    function incrementCounter() {
      currentNumber += incrementAmount;
      counterElement.innerText = currentNumber.toLocaleString("en-US");
      localStorage.setItem("counterNumber", currentNumber);
    }

    // Ensure the large number is displayed correctly on initial load
    counterElement.innerText = currentNumber.toLocaleString("en-US");

    const intervalId = setInterval(incrementCounter, incrementInterval);

    return () => clearInterval(intervalId);
  }, []);


    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    const slides = [
      {
        image: AnauraHomeImg,
        captionTitle: 'Anaura Home',
        captionText: 'Stylish and contemporary home decor and furnishings designed to elevate living spaces with elegance and comfort.',
      },
      {
        image: AnauraFashionImg,
        captionTitle: 'Anaura Fashion',
        captionText: 'Trendsetting, versatile fashion that blends timeless elegance with modern trends for every occasion.',
      },
      {
        image: AnauraAthleisureImg,
        captionTitle: 'Anaura Athleisure',
        captionText: 'Fashion-forward activewear that combines comfort, style, and performance, perfect for both workouts and casual wear.',
      },
    ];
  

  return (
    <div style={{ overflowX: 'hidden' }}>
      
     
      
      {/* <section id="slider-section" className="full-screen-carousel">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        fade
        interval={2000} // Set automatic sliding
        nextIcon={<span className="carousel-control-next-icon" />}
        prevIcon={<span className="carousel-control-prev-icon" />}
      >
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx} className="carousel-item-custom">
            <div className="overlay "></div>
            <img
              className="d-block w-100"
              src={slide.image}
              alt={`Slide ${idx + 1}`}
              style={{ objectFit: 'cover', width: '100vw', height: '100vh' }}
            />
            <Carousel.Caption className="carousel-caption-custom">
              <h3>{slide.captionTitle}</h3>
              <p>{slide.captionText}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section> */}

     {/* Hero Section */}
     <section className="position-relative overflow-hidden d-flex align-items-center" style={{ minHeight: '90vh' }}>
        <video
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={AboutAnaura} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
        <div className="container py-5 text-white" style={{ zIndex: 1 }}>
          
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 px-3 px-md-5" style={{ background: '#ecf6ff' }}>
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-6 text-center mb-4 d-flex align-items-center mb-lg-0">
              {/* Video set to autoplay, loop, muted, and larger */}
              <video className="col-12 col-md-10 col-lg-12   mx-auto" autoPlay muted loop playsInline style={{ maxHeight: '400px' }}>
                <source src={AboutAnaura2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="col-md-10 mx-auto">
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


      

      {/* ANAURA FOR FASHION */}
      <section className="eco-section " style={{ background: "#e4f2ff" }}>
        <div className="row align-items-center">
          <img
            src={oneOne}
            alt="Fashion"
            className="col-md-5 d-none d-md-block p-0 img-fluid"
            style={{ maxHeight: '36rem', objectFit: 'cover', objectPosition: 'top left' }}
          />
          <div className="col-md-7 d-flex align-items-center mx-auto">
            <div className="col-md-10 py-4 mx-auto px-4 px-md-0 px-lg-5">
              <Heading2 text={"ANAURA Fashion"} />
              <p className="fs-5 mb-4 col-md-12">Enjoy future-proof fashion with Anaura's vast range of fabric alternatives.</p>
              <button className="btn btn-outline-dark rounded-pill px-4 btn-lg border-2 fs-6">ANAURA For Brands</button>
              <div className="mt-5">
                <Marquee gradient={false}>
                  <div className="d-flex justify-content-center">
                    <img src={spring} alt="Spring" className="mx-1 img-fluid" style={{ width: '13rem', height: '150px', objectFit: 'cover' }} />
                    <img src={summer} alt="Summer" className="mx-1 img-fluid" style={{ width: '13rem', height: '150px', objectFit: 'cover' }} />
                    <img src={winter} alt="Winter" className="mx-1 img-fluid" style={{ width: '13rem', height: '150px', objectFit: 'cover' }} />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANAURA FOR HOME */}
      <section className="eco-section py-5 my-0 my-md-5 px-3 px-md-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 d-flex align-items-center mx-auto">
              <div className="col-lg-10 py-4 mx-auto">
                <Heading2 text={"ANAURA Home"} />
                <p className="fs-5 mb-4 col-md-12">Step into the future of home fashion with recycled material for Home Furnishing items.</p>
                <button className="btn btn-outline-dark rounded-pill px-4 btn-lg border-2 fs-6">Know More ANAURA Home</button>
                <div className="mt-5">
                  <Marquee gradient={false}>
                    <div className="d-flex justify-content-center">
                      <img src={furnishing} alt="Home furnishing" className="mx-1 img-fluid" style={{ width: '16rem' }} />
                      <img src={carpet} alt="Carpet" className="mx-1 img-fluid" style={{ width: '16rem' }} />
                      <img src={exhibitioncarpet} alt=" Exhibition Carpet" className="mx-1 img-fluid" style={{ width: '16rem' }} />
                    </div>
                  </Marquee>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center d-none d-md-block">
              <img
                src={CarpetsImg}
                alt="Carpets"
                className="w-100 p-0 img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grow your brand */}
      <section className="eco-section py-md-5 px-3 px-md-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-1 order-lg-2 text-center mx-auto">
              <img
                src={GrowYourBrand}
                alt="Eco-Friendly Textiles"
                className="img-fluid  mx-auto col-md-10"
              />
            </div>
            <div className="col-lg-6 d-flex align-items-center order-2 order-lg-1">
              <div className="col-md-10 py-4 mx-auto">
                <Heading2 text={"Grow your brand with ANAURA"} />
                <p className="fs-5 mb-4">We believe brands and consumers should use their purchasing power to further the environmental impact they want to see in the world.</p>
                <button className="btn btn-outline-dark rounded-pill px-4 btn-lg border-2 fs-6">ANAURA For Brands</button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <div id="counter" className="display-1 fw-bold">11,362,000,245</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Row */}
      <section className="py-5 px-3 px-md-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img src={recyleFabric} alt="Recycle Fabric" className="col-10 rounded mb-4 mb-md-0 img-fluid" />
            </div>
            <div className="col-md-6">
              <div className="col-md-10 py-4 mx-auto">
                <h6 className="text-muted mb-3 text-uppercase text-lg-start">
                  Make your brand Trustable, Traceable & Sustainable
                </h6>
                <p className="fs-5 mb-4">
                  With Anaura, Anaura comes with quality standardisation certificates. You can trace Anaura back to where it was made: OBP, HBP, or PCR, and it’s made with a sustainable manufacturing process by one of India’s largest integrated manufacturing plants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottle CAp Recycling  */}
      <section className="eco-section" style={{ background: "#e4f2ff", padding: '2rem 0' }}>
  <div className="container">
    <div className="row align-items-center">
      {/* Content Column - Left */}
      <div className="col-md-7 d-flex align-items-center mx-auto">
        <div className="col-md-10 py-4 mx-auto px-2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#045518] mb-3">
            From Bottle Caps to PP Granules
          </h2>
          <p className="fs-5 mb-3">
            Anaura transforms discarded bottle caps into high-quality PP granules, which are then used to manufacture a wide range of durable products.
          </p>
          <p className="fs-5 mb-4">
            Our innovative recycling approach reduces plastic waste and supports the production of eco-friendly, sustainable products.
          </p>
          <button className="btn btn-outline-dark rounded-pill px-4 btn-lg border-2 fs-6">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Column - Right */}
      <div className="col-md-5">
        <img
          src={bottlecaprecycling}
          alt="Recycling bottle caps to PP granules"
          className="img-fluid rounded-lg shadow-lg"
          style={{ maxHeight: '36rem', objectFit: 'cover', objectPosition: 'top left' }}
        />
      </div>
    </div>

    {/* Raw Materials and Their Applications */}
    <div className="row mt-5">
      <div className="col-md-12 text-center">
        <h2 className="text-xl font-bold text-[#045518] mb-3">
          PP Granules and Their Applications
        </h2>
        <p className="fs-5 mb-4">
          Explore how our recycled PP granules are reshaping industries:
        </p>
      </div>
    </div>

    <div className="row text-center" style={{ background: '#f7f9fc', padding: '2rem 0', borderRadius: '10px' }}>
      {/* List of Raw Materials and Uses with fixed height */}
      {[
        {
          title: 'Plastic Chairs',
          description: 'Manufactured from durable PP granules, ideal for everyday use.',
          icon: '🪑', // Example icon for chairs
        },
        {
          title: 'Plastic Crates',
          description: 'Strong and durable crates used for transportation and storage.',
          icon: '📦', // Example icon for crates
        },
        {
          title: 'Auto Parts',
          description: 'PP granules are molded into essential components in the automotive industry.',
          icon: '🚗', // Example icon for auto parts
        },
      ].map((item, index) => (
        <div key={index} className="col-md-4 mb-4 d-flex justify-content-center">
          <div className="border p-4 rounded shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 d-flex flex-column justify-content-between" style={{ height: '250px' }}>
            <div className="flex items-center justify-center mb-2" style={{ fontSize: '2rem' }}>
              {item.icon}
            </div>
            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
            <p className="text-gray-700">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>








      <AnauraFeatures />

      {/* Contact Section */}
      <section className="py-5 px-3 px-md-5" style={{ background: '#ecf6ff' }}>
        <div className="container text-center py-5">
          <h2 className="text-uppercase mb-4 fw-light fs-4">GET IN TOUCH</h2>
          <p className="mb-4 fs-1 fw-medium" style={{ lineHeight: '1.6' }}>
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
