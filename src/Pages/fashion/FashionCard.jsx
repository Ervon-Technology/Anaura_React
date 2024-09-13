import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import peacock from "../../images/fashion/peacock_ourfit.jpg";
import white from "../../images/fashion/white_outfit.jpg";
import scarf from "../../images/fashion/scarf_outfit.jpg";
import './FashionCard.css'

const FashionCard = () => {
  const outfits = [
    { src: peacock, alt: "Peacock Outfit" },
    { src: scarf, alt: "Scarf Outfit" },
    { src: white, alt: "White Outfit" },
  ];

  return (
    <div className="d-flex justify-content-start justify-content-md-center overflow-auto">
      <div className="d-flex gap-4">
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
