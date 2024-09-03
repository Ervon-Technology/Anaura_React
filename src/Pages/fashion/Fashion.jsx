import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import green from "../../images/green_outfit.jpg";
import peach from "../../images/peach_outfit.jpg";
import peacock from "../../images/peacock_ourfit.jpg";
import scarf from "../../images/scarf_outfit.jpg";
import laptopImage1 from "../../images/carousal-1.jpg"; 
import laptopImage2 from "../../images/carousal-2.jpg";
import laptopImage3 from "../../images/carousal-3.jpg";
import FashionCard from "./FashionCard";
import SavePlanet from "../Component/SavePlanet/SavePlanet";
import './Fashion.css';

function Fashion2() {

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
          className="carousel-control-prev relative top-50"
          type="button"
          data-bs-target="#mobileCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next relative top-50"
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
          className="carousel-control-prev relative top-50"
          type="button"
          data-bs-target="#desktopTabletCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next relative top-50"
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
          <div className="col-lg-6 d-none d-lg-flex ">
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
        <h2 className="fw-semibold display-5">Creative <span className="text-primary">Design</span></h2>
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
            <p className="display-5">New generation of want brands to take a stand on issues close to their hearts.</p>
          </div>
        </div>
      </div>

      {/* Collections Section */}
      <div className="container-fluid mt-5 py-5 text-center bg-light">
        <div className="container my-5">
          <h2 className="display-4 mb-4">SPRING COLLECTION</h2>
          <h2 className="display-4 mb-4">WINTER COLLECTION</h2>
          <h2 className="display-4 mb-4">SUMMER COLLECTION</h2>
          <h2 className="display-4">SUSTAINABLE SPORTS WEAR</h2>
        </div>
      </div>

      <SavePlanet />
    </div>
  );
}

export default Fashion2;
