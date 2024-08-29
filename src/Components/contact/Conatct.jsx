import React from 'react'
import './contact.css'

const Conatct = () => {
  return (
    <div>
      <div>
      
      <div className="container-fluid main-container-background">
        <div className="pt-5"></div>
        <div className="pt-5"></div>
        <div className="pt-lg-5 pt-0"></div>
        <div className="pt-lg-5 pt-0"></div>
        <div className="pt-lg-5 pt-0"></div>
        
        {/* button */}
        <div className="container text-center">
            <a href="#" className="btn fst-btn pt-md-3">GET IN TOUCH</a>
        </div>
        <div className="pt-5"></div>
        <div className="pt-md-5"></div>
        {/* some text */}
        <div className="container d-flex justify-content-center">
            <p className=' text-light text-center someText'>Learn how ANAURA can enhance your brand's eco-story.</p>
        </div>
        <div className="pt-5"></div>
        <div className="pt-md-4"></div>
        
        {/* form */}
        <div className="container bg-light fom-container">
            <div className="row pt-4">
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">FIRST NAME*</label>
                    <input type="text" name="" id="name"  className='form-control'/>
                </div>
                <div className="col-md-6 pt-3 pt-md-0">
                    <label htmlFor="Lname" className="form-label">LAST NAME*</label>
                    <input type="text" name="" id="Lname"  className='form-control'/>
                </div>
            </div>
            <div className="row pt-4">
                <div className="col-md-6">
                    <label htmlFor="EMAIL" className="form-label">EMAIL ADDRESS*</label>
                    <input type="email" name="" id="EMAIL"  className='form-control'/>
                </div>
                <div className="col-md-6 pt-3 pt-md-0">
                    <label htmlFor="Cname" className="form-label">COMPANY NAME*</label>
                    <input type="text" name="" id="Cname"  className='form-control'/>
                </div>
            </div>
            <div className="row pt-4">
                <div className="col-md-6">
                    <label htmlFor="jt" className="form-label">JOB TITLE*</label>
                    <input type="text" name="" id="jt"  className='form-control'/>
                </div>
                <div className="col-md-6 pt-3 pt-md-0">
                    <label htmlFor="cs" className="form-label">COMPANY SIZE*</label>
                    <input type="text" name="" id="cs"  className='form-control'/>
                </div>
            </div>
            <div className="row pt-4">
                <div className="col-md-6">
                    <label htmlFor="C" className="form-label">COUNTRY*</label>
                    <input type="text" name="" id="C"  className='form-control'/>
                </div>
                <div className="col-md-6 pt-3 pt-md-0">
                    <label htmlFor="NQ" className="form-label">NATURE OF INQUIRY*</label>
                    <input type="text" name="" id="NQ"  className='form-control'/>
                </div>
            </div>
            <div className="col-12  pt-3 pt-md-0">
            <label htmlFor="NQ" className="form-label">INQUIRY DETAILS</label>
            <input type="text" name="" id="NQ"  className='form-control changed-inp'/>
            </div>
            <div className='text-center pt-5 mt-4'>
            <a href="#" className="btn snd-btn pt-2">Send</a>
            <div className="pt-5"></div>
            </div>
        </div>
        <div className="pt-5"></div>
        <div className="pt-5"></div>
        <div className="pt-5"></div>
        <div className="pt-5"></div>
      </div>
    </div>
    </div>
  )
}

export default Conatct
