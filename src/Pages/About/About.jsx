import React from 'react'
import './about.css'
import Brand from "../../images/brand-1.jpg";
import HeroSection from '../Component/Heroic/HeroicComponent';
import SectionTwo from '../Component/SectionTwo/SectionTwo';
import AboutUsSection from '../Component/AboutUsSection/AboutUsSection';
import CraftingSection from '../Component/CraftingSection/CraftingSection';
import SavePlanet from '../Component/SavePlanet/SavePlanet';

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
                        <div class="col-6 p-0">
                            <img src="https://s3-alpha-sig.figma.com/img/8e86/2ef4/b04aa145fdb0d21bae205dd2ebd8f789?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JF11L1qDRIemkEXRMYxy~tD-EiepLZRr6RGYN8kkj~4gTiuFBWO23TMRcjLx4ZndKToLlqb-0zytvLHMcLkOXVsYJj8xnStQ3YG4nbz8cCWWpsi71GyYQF3EADoga-BdbAm4~dj1vefhA1xFW~9YV01do3K5-fJJ77YODlg0X0DPpV0~TgrORY7BQF6raTUFRmfnZ~nHeA70Mp~DyHg-aRyxio6fqNFXSQvP16PK0rYGB3E10-fER0agdy1NvFuubRQFIKRov619wopLyIMfQIMKoKjoNlzB1COchurfiNHPDolaacw-JUDnuTEmwA0W1coyVIPijpvE54sma9PvMw__" alt="" class="w-100 h-100 object-fit-cover img-fluid" />
                        </div>
                        <div class="col-3 p-0">
                            <img src={Brand} alt="" class="w-100 h-100 object-fit-cover img-fluid" />
                        </div>
                        <div class="col-3 p-0">
                            <img src="https://s3-alpha-sig.figma.com/img/cae2/ecf5/ed561df87b05573f77a6eb0076312aad?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fu4tGxVN6~0JSHSs9QLBKR-GuZOj1O3SFjtY07h-oICKfXYENiiYrWT6BSVXAzsiIcNv8cNuWA8RR3TQ657J4BIiUYZFR2gCYKBdWHvBy6roNWnmAR7owJwxOZ1L2vwfZVxtaiN6CPpa2k5D1yc7JNLCzAa5KaqkgiVchISY2-Xq3J2qFBisJ-DxumppbZpaPCQYZTIz2cQOqDOCHSbEFHQTTjc2nvhYyFYamhrJJsbK08ur4P4kiTvkVsy9kHm-GfnjU1JwiTlMlHy8zhCuSM8vSb4pQFJAjds~ha1PCzEfCEmRkVqywXx6mqES-bgoCJlXgbjDVTOVmkWXwAIBaQ__" alt="" class="w-100 h-100 object-fit-cover img-fluid" />
                        </div>
                    </div>
                </section>

                <SavePlanet />

            </main>
        </div>
    )
}

export default About