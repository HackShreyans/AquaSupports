import Layout from '@/components/Layout/Layout';
import React from 'react'


const contactus = () => {
  return (
    <Layout>
    
  <div className="page-nav no-margin row">
    <div className="container">
      <div className="row">
        <h2 className="text-start"> Contact Us</h2>
        <ul>
          <li>
            {" "}
            <a href="#">
              <i className="bi bi-house-door" /> Home
            </a>
          </li>
          <li>
            <i className="bi bi-chevron-double-right pe-2" /> Contact Us
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/* ##################### Our Products Starts Here #################### */}
  <div style={{ marginTop: 0 }} className="row no-margin">
    <iframe
      style={{ width: "100%" }}
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249759.19784092825!2d79.10145254589841!3d12.009924873581818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1448883859107"
      height={450}
    />
  </div>
  <div className="row contact-rooo big-padding no-margin">
    <div className="container">
      <div className="row">
        <div style={{ padding: 20 }} className="col-sm-7">
          <h2 className="fs-4 fw-bold">Contact Form</h2> <br />
          <div className="row cont-row">
            <div className="col-sm-3">
              <label>Enter Name </label>
              <span>:</span>
            </div>
            <div className="col-sm-8">
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                className="form-control input-sm"
              />
            </div>
          </div>
          <div className="row cont-row">
            <div className="col-sm-3">
              <label>Email Address </label>
              <span>:</span>
            </div>
            <div className="col-sm-8">
              <input
                type="text"
                name="name"
                placeholder="Enter Email Address"
                className="form-control input-sm"
              />
            </div>
          </div>
          <div className="row cont-row">
            <div className="col-sm-3">
              <label>Mobile Number</label>
              <span>:</span>
            </div>
            <div className="col-sm-8">
              <input
                type="text"
                name="name"
                placeholder="Enter Mobile Number"
                className="form-control input-sm"
              />
            </div>
          </div>
          <div className="row cont-row">
            <div className="col-sm-3">
              <label>Enter Message</label>
              <span>:</span>
            </div>
            <div className="col-sm-8">
              <textarea
                rows={5}
                placeholder="Enter Your Message"
                className="form-control input-sm"
                defaultValue={""}
              />
            </div>
          </div>
          <div style={{ marginTop: 10 }} className="row">
            <div style={{ paddingTop: 10 }} className="col-sm-3">
              <label />
            </div>
            <div className="col-sm-8">
              <button className="btn btn-primary btn-sm">Send Message</button>
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <div style={{ margin: 50 }} className="serv">
            <h2 className="fs-4 fw-bold" style={{ marginTop: 10 }}>
              Address
            </h2>
            Santosh singh SH-8/31-H <br />
            Shivpur , Varanasi , <br />
            Uttar Pradesh.
            <br />
            Phone:+91 8299521580
            <br />
            Email:aquacares360@gmail.com
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
  

</Layout>

  )
}

export default contactus;