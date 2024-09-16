import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import collection1 from '../../images/anaura-home/furniture-collection-1.jpg';
import collection2 from '../../images/anaura-home/furniture-collection-2.jpg';
import collection3 from '../../images/anaura-home/furniture-collection-3.jpg';
import collection4 from '../../images/anaura-home/furniture-collection-4.jpg';
import collection5 from '../../images/anaura-home/furniture-collection-5.jpg';
import './homeFashionCard.css';

const HomeFashionCard = () => {
  const outfits = [
    { src: collection1, alt: "collection1" },
    { src: collection2, alt: "collection2" },
    { src: collection3, alt: "collection3" },
    { src: collection4, alt: "collection4" },
    { src: collection5, alt: "collection5" },
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

export default HomeFashionCard;
