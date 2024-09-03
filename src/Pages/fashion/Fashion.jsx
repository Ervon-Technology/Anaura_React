import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import green from "../../images/green_outfit.jpg";
import peach from "../../images/peach_outfit.jpg";
import peacock from "../../images/peacock_ourfit.jpg";
import scarf from "../../images/scarf_outfit.jpg";
import FashionCard from "./FashionCard";
import './Fashion.css'

function Fashion2() {

  const slides = [
    { src: green, alt: "Green" },
    { src: peach, alt: "Peach" },
    { src: peacock, alt: "Peacock" },
  ];

  return (
    <div>
      {/* Mobile Carousel Section */}
      <div
        id="mobileCarousel"
        className="carousel slide d-lg-none"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={slide.src} className="d-block w-100" alt={slide.alt} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mobileCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
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
        className="carousel slide d-none d-lg-block"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          {/* Add your slides here */}
          <div className="carousel-item active">
            <div className="d-block w-100" style={{ height: "400px", backgroundColor: "#f5f5f5" }}>
              <h3 className="text-center pt-5">Slide 1 Content</h3>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-block w-100" style={{ height: "400px", backgroundColor: "#e0e0e0" }}>
              <h3 className="text-center pt-5">Slide 2 Content</h3>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-block w-100" style={{ height: "400px", backgroundColor: "#ccc" }}>
              <h3 className="text-center pt-5">Slide 3 Content</h3>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#desktopTabletCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#desktopTabletCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Main Content Section */}
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-lg-6 d-none d-lg-flex justify-content-center">
            <img src={scarf} alt="Scarf Outfit" className="img-fluid rounded" />
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <h2 className="display-5">Enjoy future-proof fashion with ANAURA's vast range of fabric alternatives</h2>
          </div>
        </div>
      </div>

      {/* Creative Design Section */}
      <div className="container mt-5 py-5 text-center">
        <h2 className="fw-bold">Creative <span className="text-primary">Design</span></h2>
        <p className="text-muted">Explore the latest trends in fashion with our curated collection.</p>
        <FashionCard />
      </div>

      {/* Stand for Issues Section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4 col-12 d-flex justify-content-center">
            <img
              src={peach}
              alt="Fashion"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-8 col-12 d-flex justify-content-center align-items-center bg-light text-center text-lg-start p-4">
            <p className="fs-1">New generation of want brands to take a stand on issues close to their hearts.</p>
          </div>
        </div>
      </div>

      {/* Collections Section */}
      <div className="container-fluid py-5 text-center bg-light">
        <div className="container">
          <h2 className="display-4 mb-4">SPRING COLLECTION</h2>
          <h2 className="display-4 mb-4">SUMMER COLLECTION</h2>
          <h2 className="display-4 mb-4">WINTER COLLECTION</h2>
          <h2 className="display-4">SUSTAINABLE SPORTS WEAR</h2>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="text-center py-5 bg-light">
        <div className="container">
          <h1 className="mb-4">We’re here to save mother earth</h1>
          <a href="#" className="btn btn-outline-dark rounded-pill px-4 mt-4">Contact Us To Know How</a>
        </div>
      </section>
    </div>
  );
}

export default Fashion2;
