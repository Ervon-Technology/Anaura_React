import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import peacock from "../../images/fashion/peacock_ourfit.jpg";
import white from "../../images/fashion/white_outfit.jpg";
import scarf from "../../images/fashion/scarf_outfit.jpg";
import suit from "../../images/fashion/suit_outfit.jpg";
import casual from "../../images/fashion/casual_outfit.jpg";
import './FashionCard.css';

const FashionCard = () => {
  const outfits = [
    { src: peacock, alt: "Peacock Outfit" },
    { src: suit, alt: "Suit Outfit" },
    { src: scarf, alt: "Scarf Outfit" },
    { src: casual, alt: "Casual Outfit" },
    { src: white, alt: "White Outfit" },
  ];

  return (
    <div className="scroll-container d-flex justify-content-start justify-content-md-center">
      <div className="card-container">
        {outfits.map((outfit, index) => (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <img src={outfit.src} alt={outfit.alt} className="card-img-top rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FashionCard;
