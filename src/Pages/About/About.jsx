import React from 'react'
import './about.css'
import Brand from "../../images/brand-1.jpg";
import HeroSection from '../Component/Heroic/HeroicComponent';
import SectionTwo from '../Component/SectionTwo/SectionTwo';
import AboutUsSection from '../Component/AboutUsSection/AboutUsSection';
import CraftingSection from '../Component/CraftingSection/CraftingSection';
import SavePlanet from '../Component/SavePlanet/SavePlanet';
import gallery1 from '../../images/about/gallery-1.jpg'
import gallery2 from '../../images/about/gallery-2.jpg'
import gallery3 from '../../images/about/gallery-3.jpg'
import gallery4 from '../../images/about/gallery-4.jpg'

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

                <SavePlanet />

            </main>
        </div>
    )
}

export default About