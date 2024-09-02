import React from "react";
import "./FashionCard.css";
import peacock from "../../images/peacock_ourfit.jpg";
import white from "../../images/white_outfit.jpg";
import scarf from "../../images/scarf_outfit.jpg";

const FashionCard = () => {
  return (
    <div className="card-section">
      <div className="card-container">
        <div className="card">
          <img
            src={peacock}
            alt="Peacock Outfit"
            className="img-fluid"
          />
        </div>
        <div className="card">
          <img
            src={scarf}
            alt="Scarf Outfit"
            className="img-fluid"
          />
        </div>
        <div className="card">
          <img
            src={white}
            alt="White Outfit"
            className="img-fluid"
            
          />
        </div>
        <div className="card">
          <img
            src={scarf}
            alt="Scarf Outfit"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default FashionCard;
