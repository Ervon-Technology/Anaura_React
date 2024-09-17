import React from 'react'
import './about.css'

import HeroSection from '../Component/Heroic/HeroicComponent';
import SectionTwo from '../Component/SectionTwo/SectionTwo';
import AboutUsSection from '../Component/AboutUsSection/AboutUsSection';
import AnauraFeatures from '../Component/AnauraFeatures/AnauraFeatures';
import CraftingSection from '../Component/CraftingSection/CraftingSection';
import SavePlanet from '../Component/SavePlanet/SavePlanet';
import gallery1 from '../../images/about/gallery-1.jpg'
import gallery2 from '../../images/about/gallery-2.jpg'
import gallery3 from '../../images/about/gallery-3.jpg'
import gallery4 from '../../images/about/gallery-4.jpg'

import Certification1 from '../../images/about/Certification-1.png';
import Certification2 from '../../images/about/Certification-2.png';
import Certification3 from '../../images/about/Certification-3.png';
import Certification4 from '../../images/about/Certification-4.png';
import Certification5 from '../../images/about/Certification-5.png';


import BgHeroic from '../../images/about/about-heroic.png'

const About = () => {
    return (
        <div>
            <main>
                
                <HeroSection 
                    bgImg={BgHeroic} 
                    title={'We are passionate creators, blending science and sustainability for the Earth.'} 
                />

                <SectionTwo />

                <AboutUsSection />

                <AnauraFeatures />

                <CraftingSection />

                <section>
                    <div class="row p-0 w-100">
                        <div class="col-3 p-0">
                            <img src={gallery1} alt="" class="w-100 h-100 object-fit-cover img-fluid" />
                        </div>
                        <div class="col-3 p-0">
                            <img src={gallery2} alt="" class="w-100 h-100 object-fit-cover img-fluid" />
                        </div>
                        <div class="col-3 p-0">
                            <img src={gallery3} alt="" class="w-100 h-100 object-fit-cover img-fluid" />
                        </div>
                        <div class="col-3 p-0">
                            <img src={gallery4} alt="" class="w-100 h-100 object-fit-cover img-fluid" />
                        </div>
                    </div>
                </section>

                <section className="certification-section py-5">
                    <div className="container text-center">
                        <h2 className="mb-4 display-6">Our Certifications</h2>
                        <div className="row justify-content-center g-4">
                            <div className="col-lg-2 col-md-4 col-6 mb-4 certification-item">
                                <div className="certification-card">
                                    <img src={Certification1} alt="Certification 1" className="img-fluid certification-img" />
                                    <div className="certification-overlay">
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 mb-4 certification-item">
                                <div className="certification-card">
                                    <img src={Certification2} alt="Certification 2" className="img-fluid certification-img" />
                                    <div className="certification-overlay">
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 mb-4 certification-item">
                                <div className="certification-card">
                                    <img src={Certification3} alt="Certification 3" className="img-fluid certification-img" />
                                    <div className="certification-overlay">
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 mb-4 certification-item">
                                <div className="certification-card">
                                    <img src={Certification4} alt="Certification 4" className="img-fluid certification-img" />
                                    <div className="certification-overlay">
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 mb-4 certification-item">
                                <div className="certification-card">
                                    <img src={Certification5} alt="Certification 5" className="img-fluid certification-img" />
                                    <div className="certification-overlay">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <SavePlanet />

            </main>
        </div>
    )
}

export default About