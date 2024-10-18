import React from 'react';
import Img1 from '../../../images/about/plasticAbout.png';

const SectionTwo = () => {
    return (

        <section class="py-5">
            <div class="container py-5">
                <div class="row">
                    <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
                        <img src={Img1} alt="" class="w-100 img-fluid " />
                    </div>
                    <div class="col-lg-6 col-md-12 d-flex align-items-center">
                        <p
                            class="h3 col-lg-9 col-md-10 col-sm-12 ps-lg-5 fw-light py-md-5 py-md-0 text-center text-lg-start">
                            By reducing your plastic footprint, you’re part of a community that champions the planet and
                            its people. Be an inspiration for your target audience
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default SectionTwo;
