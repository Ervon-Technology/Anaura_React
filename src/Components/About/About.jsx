import React from 'react'
import './about.css'
import Brand from "../../images/brand-1.jpg";

const About = () => {
  return (
    <div>
    <main>

        {/* <!-- Heroic Section --> */}
        <section>
            <div class="container-fluid hero ">
                <div class="py-5"></div>
                <div class="py-5 " >
                    <h3 class="display-6 py-5 my-5 text-center col-lg-8 col-md-10 col-sm-12 mx-auto text-white ">
                        We are passionate creators, blending science and sustainability for the Earth.
                    </h3>
                </div>
                <div class="py-5"></div>
            </div>
        </section>
        {/* <!-- End of Heroic --> */}

        {/* <!-- about Section 2 --> */}
        <section class="py-5 ab-2" >
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
                        <img src="https://s3-alpha-sig.figma.com/img/55ef/eace/f0f74fa591d0e7245f581b5a793fcc01?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nr7yfbcQ2isd9YikRBOx47DT3by18lYU7P42CnxqvDOoQMxSbff~nSNb4f-T3ASgb-202E9tqi~VejxtFXlhR9Z0Jae-naRZrljGuFp1dBMlsQ66qR3FOLMmnjAaKpLRRXpQCHE2l3RVzqdfRIJgFUBpUVk06tassJwFiXvjtBv047VRqgNlf-v0mQuosjvbBg~887PcRAC5qhMPUWj0cQB2Ac7KE~H8Gx-NadQBBEPsUJNWLGy0iKu-SwkQQQHXzb1V0rRkuKtZF-jUkxtnhE75xOyyaAeNNu4jZfZUM8~GTXFOOZFFKkdNNmi-yFMCcE5EnsdNV1P9gSLXDKd1zQ__" alt="" class="w-100 img-fluid me-5"/>
                    </div>
                    <div class="col-lg-6 col-md-12 d-flex align-items-center">
                        <p
                            class="fs-2 col-lg-9 col-md-10 col-sm-12 ps-lg-5 fw-light py-5 py-md-0 text-center text-lg-start">
                            By reducing your plastic footprint, you’re part of a community that champions the planet and
                            its people. Be an inspiration for your target audience
                        </p>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End of Heroic Section 2 --> */}

        <section class="py-5">
            <div class="container py-5">
                <div class="row">
                    <div class="col-lg-4">

                        <p class="mb-4 fs-1">About Us</p>

                        <div class="nav flex-column nav-pills me-3 col-md-8" id="v-pills-tab" role="tablist"
                            aria-orientation="vertical">
                            <div class="fs-4 my-3 pb-3 ps-0" style={{ borderBottom: '2px dotted rgb(105, 105, 105)' }} id="v-pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-home" type="div" role="tab" aria-controls="v-pills-home"
                                aria-selected="true">Anaura</div>
                            <div class="fs-4 my-3 pb-3 ps-0" style={{ borderBottom: '2px dotted rgb(105, 105, 105)' }} id="v-pills-profile-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-profile" type="div" role="tab"
                                aria-controls="v-pills-profile" aria-selected="false">Mission</div>
                            <div class="fs-4 my-3 pb-3 ps-0" style={{ borderBottom: '2px dotted rgb(105, 105, 105)' }} id="v-pills-disabled-tab" data-bs-toggle="pill"
                                data-bs-target="#v-pills-disabled" type="div" role="tab"
                                aria-controls="v-pills-disabled" aria-selected="false">Vission</div>
                           
                        </div>



                    </div>
                    <div class="col-lg-8 mt-5 mt-lg-0">

                        <div class="col-md-11">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                aria-labelledby="v-pills-home-tab" tabindex="0">
                                <h1 class="mb-4 fs-1">Recruitment for Creative People</h1>
                                <p class="fs-5 lh-base">
                                    At Anaura, we blend sustainability with style by offering premium, eco-friendly fabrics made from recycled materials. As a part of Rudra Ecovation, one of India's largest PET bottle recyclers, our mission is to replace unsustainable fabrics with beautiful, responsible alternatives. Our innovative processes create soft, breathable textiles that are both luxurious and environmentally conscious. Anaura is committed to conserving resources, reducing waste, and contributing to a sustainable future, all while providing high-quality products for the fashion industry.
                                </p>
                            </div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                aria-labelledby="v-pills-profile-tab" tabindex="0">
                                <p class="fs-5 lh-base">
                                Anaura is committed to promoting sustainability through innovative textile solutions by recycling PET bottles into high-quality fabrics. Their mission is to reduce environmental impact by creating eco-friendly, stylish, and durable products that contribute to a circular economy.</p>
                            </div>
                            <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel"
                                aria-labelledby="v-pills-disabled-tab" tabindex="0">
                                <p class="fs-5 lh-base">
                                    Anaura envisions a world where sustainable practices are at the forefront of the fashion industry. They strive to lead by example, inspiring others to adopt eco-conscious approaches and creating a future where waste is minimized, and natural resources are preserved for generations to come.
                                </p>
                            </div>
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                aria-labelledby="v-pills-messages-tab" tabindex="0">

                            </div>
                            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
                                aria-labelledby="v-pills-settings-tab" tabindex="0">

                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </section>

        {/* <!-- heroic --> */}
        <section className='crafting'> 

            <div class="container ">

                <div class="py-5 ">
                    <div class="display-6 py-5 my-5  col-lg-8 col-md-10 col-sm-12">
                        <h1 class="mb-4">Crafting a Better Future Together</h1>
                        <p class="fs-5 lh-base">At Anaura we Transform recycled materials into stylish sustainable
                            products that
                            make a
                            positive impact. join us in creating a better future - were innovation meets responsibility
                        </p>
                    </div>
                </div>

            </div>
        </section>
        {/* <!-- End of Heroic --> */}

        {/* <!-- heroic --> */}
        <section>
            <div class="container"></div>
        </section>
        {/* <!-- End of Heroic --> */}

        {/* <!-- heroic --> */}
        <section>
            <div class="row p-0">
                <div class="col-6 p-0">
                    <img src="https://s3-alpha-sig.figma.com/img/8e86/2ef4/b04aa145fdb0d21bae205dd2ebd8f789?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JF11L1qDRIemkEXRMYxy~tD-EiepLZRr6RGYN8kkj~4gTiuFBWO23TMRcjLx4ZndKToLlqb-0zytvLHMcLkOXVsYJj8xnStQ3YG4nbz8cCWWpsi71GyYQF3EADoga-BdbAm4~dj1vefhA1xFW~9YV01do3K5-fJJ77YODlg0X0DPpV0~TgrORY7BQF6raTUFRmfnZ~nHeA70Mp~DyHg-aRyxio6fqNFXSQvP16PK0rYGB3E10-fER0agdy1NvFuubRQFIKRov619wopLyIMfQIMKoKjoNlzB1COchurfiNHPDolaacw-JUDnuTEmwA0W1coyVIPijpvE54sma9PvMw__" alt="" class="w-100 h-100 object-fit-cover img-fluid"/>
                </div>
                <div class="col-3 p-0">
                    <img src={Brand} alt="" class="w-100 h-100 object-fit-cover img-fluid"/>
                </div>
                <div class="col-3 p-0">
                    <img src="https://s3-alpha-sig.figma.com/img/cae2/ecf5/ed561df87b05573f77a6eb0076312aad?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fu4tGxVN6~0JSHSs9QLBKR-GuZOj1O3SFjtY07h-oICKfXYENiiYrWT6BSVXAzsiIcNv8cNuWA8RR3TQ657J4BIiUYZFR2gCYKBdWHvBy6roNWnmAR7owJwxOZ1L2vwfZVxtaiN6CPpa2k5D1yc7JNLCzAa5KaqkgiVchISY2-Xq3J2qFBisJ-DxumppbZpaPCQYZTIz2cQOqDOCHSbEFHQTTjc2nvhYyFYamhrJJsbK08ur4P4kiTvkVsy9kHm-GfnjU1JwiTlMlHy8zhCuSM8vSb4pQFJAjds~ha1PCzEfCEmRkVqywXx6mqES-bgoCJlXgbjDVTOVmkWXwAIBaQ__" alt="" class="w-100 h-100 object-fit-cover img-fluid"/>
                </div>
            </div>
        </section>
        {/* <!-- End of Heroic --> */}

        {/* <!-- heroic --> */}
        <section className='hero-last'>
            <div className="container d-flex  justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12  py-5 mt-3 text-center">
                    <h1 className='ml-5'>We’re here to save mother earth</h1>
                    <button className=' mt-3 rounded-pill btn btn-outline-light text-dark border abtbtn rounded-pill px-4'>Contact Us To Know How</button>
                    </div>
    
                </div>
                

            </div>

        </section>
        {/* <!-- End of Heroic --> */}

    </main>





    </div>
  )
}

export default About
