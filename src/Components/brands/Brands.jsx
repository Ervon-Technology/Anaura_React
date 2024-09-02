import React from 'react'
import './brands.css'
import tree from "../../images/tree.png";
import reduce from "../../images/reduce.jpg";


const Brands = () => {
  return (
<div>
        
    <div class="container-fluid p-0">

        <section className=' container-fluid p-0'>
            <div className="row  sec-1">
                <div className="col-8 d-flex justify-content-center align-items-center ">
                <h1 className='sec-1-text'>ANAURA FOR <br /><span className='mx-5 '> 
                BRANDS</span></h1>
                </div>
                <div className="col-4 img p-5"> </div>
            </div>
        </section>

        {/* <!-- First Row --> */}
        <div class="container-fluid p-0">
            <div class="row no-gutters">
                <div class="col-lg-5 gray-background  firstrow-img bg-secondary"></div>
                <div class="col-lg-7 fs-1  d-flex align-items-center justify-content-center bg-tertiary ">
                    <div>
                        <p class="  text-start  text-section ">New generation of  want brands to take a stand on issues close  to their hearts.</p>
                    </div>
                </div>
            </div>
        </div>
    

        {/* <!-- Second Row --> */}
        <div class="row  scecond-row">
            <div class="col-md-6 d-flex align-items-center justify-content-center ">
                <p class=" text-section-2 text-start ">New generation want  brands to take a stand on  issues close to their hearts.</p>
            </div>
            <div class="col-md-6 px-lg-0 px-5">
                <p class=" w-75 small-text">88% of the consumers said they buy products from a company leading with a purpose.</p>
                <p class=" highlight-text small-text w-75">It's more than environmental or social purpose; it's a toolkit to enhance your brand story.</p>
                <p class=" highlight-text small-text w-75">94% of consumers say it's a brand's responsibility to create products that are not harmful to the earth.</p>
            </div>
        </div>

        {/* <!-- Third Row --> */}
        <div class="container p-0 third-row">
            <div class="row no-gutters">

                <div class="col-lg-7 fs-1  d-flex align-items-center justify-content-center ">
                    <div>
                        <p class="  text-start  text-section-3 ">⁠Stakeholders are increasingly seeking businesses that combine 
                            profitability with meaningful impact. 
                            With ANAURA, you can easily create 
                            and communicate your impact to 
                            drive business growth.</p>
                    </div>
                </div>
                <div class="col-lg-5 gray-background   d-flex justify-content-center align-items-center">
                    <img src={tree} alt="" height={400} width={400}className='img-fluid object-fit-cover' />
                </div>
            </div>
        </div>

        {/* <!-- Fourth Row --> */}

        <div class="container p-0 third-row">
            <div class="row no-gutters">
            <div class="col-lg-5 gray-background   d-flex justify-content-center align-items-center">
                    <img src={reduce} alt="" height={600} width={600}className='img-fluid object-fit-cover' />
                </div>
                <div class="col-lg-7 fs-1  d-flex align-items-center justify-content-center ">
                    <div>
                        <p class="  text-start  text-section-4 ">By reducing your plastic footprint, 
                            you’re part of a community that 
                            champions the planet and its people. 
                            Be an inspiration for your target 
                            audience</p>
                    </div>
                </div>
                
            </div>
        </div>
        
        {/* <!-- Fifth row --> */}

        <div class="container p-0 third-row">
            <div class="row no-gutters">

                <div class="col-lg-7 fs-1  d-flex align-items-center justify-content-center ">
                    <div>
                        <p class="  text-start  text-section-5 ">Make your brand Trustable, 
                            Traceable & Sustainable</p>
                        <p class="text-start  w-75 ml-5 text-section-5-1">with Anaura , Anaura comes with quality 
                            standardisation certificates , You can trace Anaura 
                            back to from where it was made OBP , HBP or PCR and 
                            it’s made with sustainable manufacturing process by 
                            one India’s largest integrated manufacturing plants</p>
                    </div>
                </div>
                <div class="col-lg-5 gray-background   d-flex justify-content-center align-items-center">
                    <img src={reduce} alt="" height={600} width={600}className='img-fluid object-fit-cover' />
                </div>
            </div>
        </div>
        

    </div>


      
</div>
  )
}

export default Brands
