import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AnauraFeatures from "../Component/AnauraFeatures/AnauraFeatures";
import green from "../../images/fashion/green_outfit.jpg";
import peach from "../../images/fashion/peach_outfit.jpg";
import peacock from "../../images/fashion/peacock_ourfit.jpg";
import scarf from "../../images/fashion/scarf_outfit.jpg";
import laptopImage1 from "../../images/fashion/carousal-1.jpg"; 
import laptopImage2 from "../../images/fashion/carousal-2.jpg";
import laptopImage3 from "../../images/fashion/carousal-3.jpg";
import springImage from "../../images/fashion/spring_collection.jpg";
import winterImage from "../../images/fashion/winter_collection.jpg";
import summerImage from "../../images/fashion/summer_collection.jpg";
import mobilesummer from "../../images/fashion/mobile-summers.jpg";
import mobilewinter from "../../images/fashion/mobile-winters.jpg";
import mobilespring from "../../images/fashion/mobile-spring.jpg";
import FashionCard from "./FashionCard";
import SavePlanet from "../Component/SavePlanet/SavePlanet";
import './Fashion.css';

function Fashion() {
  // Images for the mobile carousel
  const mobileSlides = [
    { src: green, alt: "Green Outfit" },
    { src: peach, alt: "Peach Outfit" },
    { src: peacock, alt: "Peacock Outfit" },
  ];

  // Images for the laptop/tablet carousel
  const desktopTabletSlides = [
    { src: laptopImage1, alt: "Laptop Outfit 1" },
    { src: laptopImage2, alt: "Laptop Outfit 2" },
    { src: laptopImage3, alt: "Laptop Outfit 3" },
  ];

  const collections = [
    { name: "SPRING COLLECTION", image: springImage },
    { name: "WINTER COLLECTION", image: winterImage },
    { name: "SUMMER COLLECTION", image: summerImage },
  ];

  const mobileCollections = [
    { name: "SPRING COLLECTION", image: mobilespring },
    { name: "WINTER COLLECTION", image: mobilewinter },
    { name: "SUMMER COLLECTION", image: mobilesummer },
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
          className="carousel-control-prev relative "
          type="button"
          data-bs-target="#mobileCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next relative "
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
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={slide.src} className="d-block w-100" alt={slide.alt} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev relative"
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
              src={scarf} 
              alt="Scarf Outfit" 
              className="img-fluid rounded"
              style={{ height: "600px", width: "550px", objectFit: "cover" }}
            />
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <h2 className="display-5">Enjoy future-proof fashion with ANAURA's vast range of fabric alternatives</h2>
          </div>
        </div>
      </div>

      {/* Creative Design Section */}
      <div className="container mt-5 py-5 text-center">
        <h2 className="fw-semibold display-5">Creative <span className="text-danger">Design</span></h2>
        <p className="text-muted mb-5">Explore the latest trends in fashion with our curated collection.</p>
        <FashionCard />
      </div>

      {/* Stand for Issues Section */}
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-lg-6 d-none d-lg-flex">
            <img
              src={peach}
              alt="Fashion"
              className="img-fluid rounded"
              style={{ height: "600px", width: "550px", objectFit: "cover" }}
            />
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <p className="display-5">Anaura offers a diverse range of upcycled fabrics, for every season fashion and sustainable sportswear</p>
          </div>
        </div>
      </div>

      <AnauraFeatures />

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
              className={`display-5 w-75 mb-4 ${
                index === activeCollectionIndex
                  ? "text-danger fw-normal"
                  : "fw-normal"
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              style={{ cursor: "pointer" }}
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
            <h1
              key={index}
              className={`mb-4 ${
                index === activeMobileCollectionIndex
                  ? "text-danger fw-normal"
                  : "fw-normal"
              }`}
              onMouseEnter={() => handleMobileMouseEnter(index)}
              style={{ cursor: "pointer" }}
            >
              {collection.name}
            </h1>
          ))}
        </div>
      </div>

      <SavePlanet />
    </div>
  );
}

export default Fashion;
