

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeFashionCard from "./homeFashionCard";
import furniture1 from "../../images/anaura-home/furniture-1.png";
import furniture2 from "../../images/anaura-home/furniture-2.png";
import homefurnitures from "../../images/anaura-home/home-furnitures.jpg";
import carpets from "../../images/anaura-home/carpets.jpg";
import exhibitioncarpets from "../../images/anaura-home/exhibition-carpets.jpg";
import furniturecarousal1 from "../../images/anaura-home/furniture-carousal-1.jpg";
import furniturecarousal2 from "../../images/anaura-home/furniture-carousal-2.jpg";
import furniturecarousal3 from "../../images/anaura-home/furniture-carousal-3.jpg";
import mobilecarousal1 from "../../images/anaura-home/mobile-carousal.avif";
import mobilecarousal2 from "../../images/anaura-home/mobile-carousal-2.avif";
import mobilecarousal3 from "../../images/anaura-home/mobile-carousal-3.avif";

import collection1 from "../../images/anaura-home/furniture-collection-1.jpg";
import collection2 from "../../images/anaura-home/carpets-collection.jpg";
import collection3 from "../../images/anaura-home/exhibition-carpets-collection.jpg";

import SavePlanet from "../Component/SavePlanet/SavePlanet";
import "./anauraHome.css";
import AnauraFeatures from "../Component/AnauraFeatures/AnauraFeatures";

function AnauraHome() {
  // Images for the mobile carousel
  const mobileSlides = [
    { src: mobilecarousal1, alt: "mobilecarousal1" },
    { src: mobilecarousal2, alt: "mobilecarousal2" },
    { src: mobilecarousal3, alt: "mobilecarousal3" },
  ];

  // Images for the laptop/tablet carousel
  const desktopTabletSlides = [
    { src: furniturecarousal1, alt: "Furniture Carousal 1" },
    { src: furniturecarousal2, alt: "Furniture Carousal 2" },
    { src: furniturecarousal3, alt: "Furniture Carousal 3" },
  ];
  const collections = [
    { name: "HOME FURNITURES", image: homefurnitures },
    { name: "CARPETS", image: carpets },
    { name: "EXHIBITION CARPETS", image: exhibitioncarpets },
  ];

  const mobileCollections = [
    { name: "HOME FURNITURES", image: collection1 },
    { name: "CARPETS", image: collection2 },
    { name: "EXHIBITION CARPETS", image: collection3 },
  ];

  const [activeCollectionIndex, setActiveCollectionIndex] = useState(0);
  const [activeMobileCollectionIndex, setActiveMobileCollectionIndex] = useState(0);

  // Automatically change the background image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCollectionIndex((prevIndex) => (prevIndex + 1) % collections.length);
    }, 4000); // Change the image every 3 seconds
    return () => clearInterval(interval);
  }, [collections.length]);

  // Automatically change the background image for mobile collections every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMobileCollectionIndex((prevIndex) => (prevIndex + 1) % mobileCollections.length);
    }, 4000); // Change the image every 3 seconds
    return () => clearInterval(interval);
  }, [mobileCollections.length]);

  const handleMouseEnter = (index) => {
    setActiveCollectionIndex(index);
  };

  const handleMobileMouseEnter = (index) => {
    setActiveMobileCollectionIndex(index);
  };

  return (
    <div>
      {/* Mobile Carousel Section */}
      <div
        id="mobileCarousel"
        className="carousel slide d-md-none"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          {mobileSlides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={slide.src} className="d-block w-100" alt={slide.alt} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev relative"
          type="button"
          data-bs-target="#mobileCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next relative"
          type="button"
          data-bs-target="#mobileCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Laptop and Tablet Carousel Section */}
      <div
        id="desktopTabletCarousel"
        className="carousel slide d-none d-md-block"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          {desktopTabletSlides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item  ${index === 0 ? "active" : ""}`}
            >
              <img
                src={slide.src}
                className="d-block object-fit-cover w-100"
                alt={slide.alt}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev relative "
          type="button"
          data-bs-target="#desktopTabletCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next relative"
          type="button"
          data-bs-target="#desktopTabletCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Main Content Section */}
      <div className="container mt-5 pt-5">
        <div className="row align-items-center">
          <div className="col-lg-6 d-none d-lg-flex">
            <img
              src={furniture1}
              alt="furniture-1"
              className="img-fluid rounded"
              style={{ height: "600px", width: "550px", objectFit: "cover" }}
            />
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <h2 className="display-5">
              Enjoy future-proof furniture with ANAURA's vast range of fabric
              alternatives
            </h2>
          </div>
        </div>
      </div>

      {/* Creative Design Section */}
      <div
        className="my-5 py-5 text-center"
        style={{ backgroundColor: "rgb(235, 235, 235)" }}
      >
        <h2 className="fw-semibold display-5">
          Creative <span className="text-danger">Design</span>
        </h2>
        <p className="text-muted mb-5">
          Explore the latest trends in fashion with our curated collection.
        </p>
        <HomeFashionCard />
      </div>

      {/* Stand for Issues Section */}
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-lg-6 d-none d-lg-flex">
            <img
              src={furniture2}
              alt="furniture-2"
              className="img-fluid rounded"
              style={{ height: "600px", width: "550px", objectFit: "cover" }}
            />
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <p className="display-5">
              Anaura offers a diverse range of upcycled materials, perfect for
              every season's furniture and sustainable home decor.
            </p>
          </div>
        </div>
      </div>

      {/* Collections Section for Tablets/Laptops */}
      <div
        className="container-fluid mt-5 py-5 bg-light position-relative d-none d-md-block"
        style={{
          height: "700px",
          backgroundImage: `url(${collections[activeCollectionIndex].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        {/* Black overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Black background with 60% opacity
          }}
        ></div>

        <div
          className="container my-5 position-relative text-white"
          style={{
            zIndex: 1, // Ensure the text is on top of the black overlay
          }}
        >
          {collections.map((collection, index) => (
            <h2
              key={index}
              className={`display-5 w-100 w-lg-50 mb-4 ${
                index === activeCollectionIndex
                  ? "text-danger fw-semibold"
                  : " text-white fw-normal"
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              style={{
                cursor: "pointer",
              }}
            >
              {collection.name}
            </h2>
          ))}
        </div>
      </div>

      {/* Collections Section for Mobile */}
      <div
        className="container-fluid mt-5 py-5 bg-light position-relative d-md-none"
        style={{
          height: "700px",
          backgroundImage: `url(${mobileCollections[activeMobileCollectionIndex].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        {/* Black overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Black background with 60% opacity
          }}
        ></div>

        <div
          className="container my-5 position-relative text-white"
          style={{
            zIndex: 1, // Ensure the text is on top of the black overlay
          }}
        >
          {mobileCollections.map((collection, index) => (
            <h2
              key={index}
              className={`display-5 w-100 w-lg-50 mb-4 ${
                index === activeMobileCollectionIndex
                  ? "text-danger fw-semibold"
                  : " text-white fw-normal"
              }`}
              onMouseEnter={() => handleMobileMouseEnter(index)}
              style={{
                cursor: "pointer",
              }}
            >
              {collection.name}
            </h2>
          ))}
        </div>
      </div>




      <AnauraFeatures />
      
      <SavePlanet />
    </div>
  );
}

export default AnauraHome;
