import React from 'react';

import Img3 from '../../images/sustainability/sustainability.png';
import caro1 from '../../images/sustainability/caro1.png';
import caro2 from '../../images/hows-it-made/seabottle.jpg';
import caro3 from '../../images/sustainability/caro3.png';
import Img1 from '../../images/about/plasticAbout.png';
import Img2 from '../../images/hows-it-made/img2.jpg'
import Img4 from '../../images/hows-it-made/img4.jpg'
import HeroSection from '../Component/Heroic/HeroicComponent';
import AnauraFeatures from '../Component/AnauraFeatures/AnauraFeatures';
import EnvironmentAware from '../Component/EnvironmentAware/EnvironmentAware';
import ProcessGrid from '../Component/ProcessGrid/ProcessGrid';
import SavePlanet from '../Component/SavePlanet/SavePlanet';
import EcoSection from '../Component/EcoSection/EcoSection';
import ImpactSection from '../Component/ImpactSection/ImpactSection';

export default function HowItsMade() {
  return (
    <div>
      <main>
        {/* Hero Section */}
        <HeroSection
          bgImg={Img3}
          title={'We are passionate creators, blending science and sustainability for the Earth.'}
        />

        {/* Environment Aware Section */}
        <EnvironmentAware
          title={""}
          heading={"Only Integrated waste plastic recycle plant in India"}
          body={" We have been the forerunners in transforming Plastic waste into premium, sustainable Materials. These Materials manufactured at our plastic recycling plant weave a future of eco-conscious fashion and empower the creation of sustainable fashion. It’s a metamorphosis from waste to wonder, a testament to circularity and creativity."}
          img1={caro1}
          img2={caro2}
          img3={caro3}
        />

        {/* Process Section */}
        <div className="bg-light">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <p className="display-4 fw-light text-center text-lg-start">
                  Our Process
                </p>
              </div>
              <div className="col-lg-8">
                <p className="lead fw-semibold">
                  PET stands for polyethylene terephthalate serve as the raw material for producing polyester fabrics and other upcycled products. Highlighting our name within the upper echelon of recycled plastic manufacturers in India, we have high-end techniques ready to recycle PET waste into high-quality rPET and subsequently produce upcycled fabric. This recycled fabric rivals the quality of virgin polyester, combining exceptional performance with environmental responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Grid Section */}
        <ProcessGrid />

        {/* Eco Section */}
        <EcoSection imageSrc={Img4} />

        {/* Impact Section */}
        <div style={{ backgroundColor: 'rgb(244, 244, 244)' }}>
          <ImpactSection
            title="Innovating Circular Fashion"
            subtitle="Closing the Loop"
            des="At ANAURA, we believe in the circular economy. By transforming waste into wearable fabrics, we're closing the loop in fashion production. Our approach ensures that materials are not discarded after use but are reimagined and reused, reducing pollution and conserving resources. Together, we can build a future where fashion is truly sustainable."
            imageSrc={Img2}  
          />
        </div>


        <div style={{ backgroundColor: 'rgb(244, 244, 244)' }}>
          <ImpactSection
            title="Embracing Sustainability in Fashion"
            subtitle="Eco-Friendly Textiles"
            des="Our innovative upcycle fabrics are designed to reduce the environmental impact of fashion. By using recycled materials and sustainable production processes, we minimize waste and conserve natural resources. Join us in our mission to create a greener future for fashion—without compromising on style or quality."
            imageSrc={Img1}
          />
        </div>

        <AnauraFeatures />
        {/* SavePlanet Component */}
        <SavePlanet />
      </main>
    </div>
  );
}
