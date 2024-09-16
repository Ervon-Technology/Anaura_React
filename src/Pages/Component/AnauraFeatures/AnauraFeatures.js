import React from 'react';
import './AnauraFeatures.css'; // Some minimal custom styles

// Icon imports
import chemicalFreeIcon from '../../../images/AnauraFeatures/chemical-free.png';
import ecoFriendlyIcon from '../../../images/AnauraFeatures/recycle.png';
import skinFriendlyIcon from '../../../images/AnauraFeatures/touch.png';
import breathableFabricIcon from '../../../images/AnauraFeatures/breathable.png';
import co2Icon from '../../../images/AnauraFeatures/plant.png';
import waterSavingIcon from '../../../images/AnauraFeatures/save-energy.png';

const AnauraFeatures = () => {
  const features = [
    { icon: chemicalFreeIcon, text: 'Chemical Free' },
    { icon: ecoFriendlyIcon, text: 'Environment Friendly' },
    { icon: skinFriendlyIcon, text: 'Skin Friendly' },
    { icon: breathableFabricIcon, text: 'Breathable Fabric' },
    { icon: co2Icon, text: 'Saves Co2 emissions' },
    { icon: waterSavingIcon, text: 'Saves Energy & Water Consumption' },
  ];

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        {features.map((feature, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-2 text-center mb-4">
            <div className="feature-item p-3 d-flex flex-column align-items-center justify-content-center">
              <img src={feature.icon} alt={feature.text} className="feature-icon mb-2" />
              <p className="feature-text">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnauraFeatures;
