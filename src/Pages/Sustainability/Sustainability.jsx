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
import caro2 from '../../images/sustainability/caro2.png'
import caro3 from '../../images/sustainability/caro3.png'

import Img3 from '../../images/sustainability/sustainability.png'
import EnvironmentAware from '../Component/EnvironmentAware/EnvironmentAware'

const Sustainability = () => {
    return (
        <div>
            <main>

                <HeroSection bgImg={Img3} title={'We are passionate creators, blending science and sustainability for the Earth.'} />

                <SustainabilityImpact/>

                <EnvironmentAware img1={caro1} img2={caro2} img3={caro3}/>

                <EcoSection imageSrc={Img1}/>

                <div style={{"background-color": "rgb(244, 244, 244)"}}>
                    <ImpactSection imageSrc={Img2}/>
                </div>
                
                <SavePlanet />

            </main>
        </div>
    )
}

export default Sustainability