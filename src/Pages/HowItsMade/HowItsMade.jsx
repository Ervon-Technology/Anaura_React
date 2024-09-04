import React from 'react'
import './HowItsMade.css';

import Img3 from '../../images/sustainability/sustainability.png'
import caro1 from '../../images/sustainability/caro1.png'
import caro2 from '../../images/sustainability/caro2.png'
import caro3 from '../../images/sustainability/caro3.png'
import Img1 from '../../images/about/plasticAbout.png'

import HeroSection from '../Component/Heroic/HeroicComponent';
import SustainabilityImpact from '../Component/SustainabilityImpact/SustainabilityImpact';
import EnvironmentAware from '../Component/EnvironmentAware/EnvironmentAware';
import ProcessGrid from '../Component/ProcessGrid/ProcessGrid';
import SavePlanet from '../Component/SavePlanet/SavePlanet';
import EcoSection from '../Component/EcoSection/EcoSection';
import ImpactSection from '../Component/ImpactSection/ImpactSection';

export default function HowItsMade() {
    return (
        <div>
            <main>
                <HeroSection bgImg={Img3} title={'We are passionate creators, blending science and sustainability for the Earth.'} />

                <EnvironmentAware
                    title={""}
                    heading={"Leading Plastic recycling company in India makes top textiles from plastic waste"}
                    body={" We have been the forerunners in transforming PET waste into premium, sustainable textiles. These textiles manufactured at our plastic recycling plant weave a future of eco-conscious fashion and empower the creation of sustainable homeware. It’s a metamorphosis from waste to wonder, a testament to circularity and creativity."}
                    img1={caro1}
                    img2={caro2}
                    img3={caro3} />


                {/*  */}
                <div className="" style={{ backgroundColor: "rgb(235, 235, 235)" }}>
                    <div className="row g-3 p-md-5">
                        <div className="col-lg-4 p-lg-5 ">
                            <p class="display-4  fw-light  text-center text-lg-start">
                            Our Process
                            </p>
                        </div>
                        <div className="col-lg-8 px-lg-0 px-lg-5 py-lg-5 ">
                            <div className="">
                                <p className="lead  fw-semibold">PET stands for polyethylene terephthalate serve as the raw material for producing polyester fabrics and other upcycled products. Highlighting our name within the upper echelon of recycled plastic manufacturers in India, we have high-end techniques ready to recycle PET waste into high-quality rPET and subsequently produce upcycled fabric. This recycled fabric rivals the quality of virgin polyester, combining exceptional performance with environmental responsibility.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ProcessGrid/>
                {/*  */}
               

            


                <EcoSection imageSrc={Img1}/>

                <div style={{"background-color": "rgb(244, 244, 244)"}}>
                    <ImpactSection imageSrc={Img1}/>
                </div>
                
                <EcoSection imageSrc={Img1}/>

                {/*  */}

                <SavePlanet />


            </main>



        </div>
    )
}
