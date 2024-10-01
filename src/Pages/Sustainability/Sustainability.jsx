import React from 'react'
import './Sustainability.css'
import HeroSection from '../Component/Heroic/HeroicComponent'
import EcoSection from '../Component/EcoSection/EcoSection'
import ImpactSection from '../Component/ImpactSection/ImpactSection'
import SustainabilityImpact from '../Component/SustainabilityImpact/SustainabilityImpact'
import SavePlanet from '../Component/SavePlanet/SavePlanet'

import Img1 from '../../images/sustainability/plastic.png'
import Img2 from '../../images/sustainability/saveplanet.png'

import caro1 from '../../images/sustainability/caro1.png'
import caro2 from '../../images/hows-it-made/seabottle.jpg'
import caro3 from '../../images/sustainability/caro3.png'

import Img3 from '../../images/sustainability/sustainability.png'
import EnvironmentAware from '../Component/EnvironmentAware/EnvironmentAware'
import AnauraFeatures from '../Component/AnauraFeatures/AnauraFeatures'

const Sustainability = () => {
    return (
        <div>
            <main>

                <HeroSection bgImg={Img3} title={'We are passionate creators, blending science and sustainability for the Earth.'} />

                <SustainabilityImpact/>

                <EnvironmentAware 
                title={"Tackling Environmental Challenges"}
                heading={"Pioneering Sustainable Solutions"}
                body={"Anaura is at the forefront of reducing the carbon footprint caused by plastic waste and organizing the unorganized plastic waste market in India. Our initiative extends to the production of Biomass Briquettes and high-quality recycled products. By investing in these forward-thinking solutions, we are promoting a niche line of eco-friendly products, enhancing sustainability, and ensuring end-to-end traceability."}
                img1={caro1} 
                img2={caro2} 
                img3={caro3}/>

                <EcoSection imageSrc={Img1}/>

                <div style={{"background-color": "rgb(244, 244, 244)"}}>
                    <ImpactSection 
                    subtitle={"Is Our Impact Meaningful?"}
                    title={"Guided by Integrity, Driven by a Purposeful Vision."}
                    des={"At Anaura, every decision—from our business operations to our team selection and growth—prioritizes the well-being of our planet.We are hopeful partners, committed to transparency and driven by a shared belief in a sustainable future."}
                    imageSrc={Img2}/>
                </div>
                

                <AnauraFeatures />

                <SavePlanet />

            </main>
        </div>
    )
}

export default Sustainability