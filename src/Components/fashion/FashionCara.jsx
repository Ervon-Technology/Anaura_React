import React from "react";
import peacock from "../../images/peacock_ourfit.jpg";
import white from "../../images/white_outfit.jpg";
import scarf from "../../images/scarf_outfit.jpg";

function FashionCara() {
  return (
    <div>
      <div className=" card-container-carasoul d-lg-block d-none">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={scarf}
                className="d-block w-100 carasoul-img"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src={white}
                className="d-block w-100 carasoul-img"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src={peacock}
                className="d-block w-100 carasoul-img"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src={scarf}
                className="d-block w-100 carasoul-img"
                alt="Fourth slide"
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
      </div>
    </div>
  );
}

export default FashionCara;
