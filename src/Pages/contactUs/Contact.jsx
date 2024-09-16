import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="contact-content">
          <div className="container text-center">
            <h1 className="hero-title">Get In Touch</h1>
            <p className="hero-subtitle">Let's build a sustainable future together</p>
            <a href="#" className="btn main-btn text-white">Start Conversation</a>
          </div>
        </div>
      </div>

      <div className="form-section py-5">
        <div className="container form-container px-5">
          <h2 className="text-center mb-4">Contact Us</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">First Name*</label>
              <input type="text" id="name" className="form-control form-input" placeholder="Enter your first name" />
            </div>
            <div className="col-md-6">
              <label htmlFor="lname" className="form-label">Last Name*</label>
              <input type="text" id="lname" className="form-control form-input" placeholder="Enter your last name" />
            </div>
          </div>
          <div className="row g-4 pt-4">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email Address*</label>
              <input type="email" id="email" className="form-control form-input" placeholder="Enter your email address" />
            </div>
            <div className="col-md-6">
              <label htmlFor="company" className="form-label">Company Name*</label>
              <input type="text" id="company" className="form-control form-input" placeholder="Enter your company name" />
            </div>
          </div>
          <div className="row g-4 pt-4">
            <div className="col-md-6">
              <label htmlFor="job" className="form-label">Job Title*</label>
              <input type="text" id="job" className="form-control form-input" placeholder="Enter your job title" />
            </div>
            <div className="col-md-6">
              <label htmlFor="company-size" className="form-label">Company Size*</label>
              <input type="text" id="company-size" className="form-control form-input" placeholder="Enter company size" />
            </div>
          </div>
          <div className="row g-4 pt-4">
            <div className="col-md-6">
              <label htmlFor="country" className="form-label">Country*</label>
              <input type="text" id="country" className="form-control form-input" placeholder="Enter your country" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inquiry" className="form-label">Nature of Inquiry*</label>
              <input type="text" id="inquiry" className="form-control form-input" placeholder="Enter the nature of your inquiry" />
            </div>
          </div>
          <div className="row g-4 pt-4">
            <div className="col-12">
              <label htmlFor="details" className="form-label">Inquiry Details</label>
              <textarea id="details" className="form-control form-input" placeholder="Enter details about your inquiry" rows="4"></textarea>
            </div>
          </div>
          <div className="text-center pt-5">
            <button className="btn submit-btn border border-2 border-black fw-semibold px-5 py-2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
