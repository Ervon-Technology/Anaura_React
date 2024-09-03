import React from 'react'
import './Sustainability.css'
import HeroSection from '../Component/Heroic/HeroicComponent'
import EcoSection from '../Component/EcoSection/EcoSection'
import ImpactSection from '../Component/ImpactSection/ImpactSection'
import SustainabilityImpact from '../Component/SustainabilityImpact/SustainabilityImpact'
import SavePlanet from '../Component/SavePlanet/SavePlanet'

import Img1 from '../../images/sustainability/plastic.png'
import Img2 from '../../images/sustainability/saveplanet.png'

const Sustainability = () => {
    return (
        <div>
            <main>

                <HeroSection />

                <SustainabilityImpact/>

                <EcoSection imageSrc={Img1}/>

                <ImpactSection imageSrc={Img2}/>
                
                <SavePlanet />

            </main>
        </div>
    )
}

export default Sustainability