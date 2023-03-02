import React from 'react'

const Contactus = () => {
  return (
    <>
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
  {/*- ############ Footer Starts Here ################## */}
  <footer>
    <div className="inner">
      <div className="container">
        <div className="row">
          <div className="col-md-3 foot-about">
            <h4>About US</h4>
            <p>
              Aqua support is a brand new company. It provides you services like
              water purifier, AC repair, a repair installation of commercial and
              industrial water treatment
            </p>
            <ul>
              <li>
                Address: Santosh singh SH-8/31-H Shivpur , Varanasi , Uttar
                Pradesh.
              </li>
              <li>Email Address: aquacares360@gmail.com</li>
              <li>Phone:+91 8299521580</li>
            </ul>
          </div>
          <div className="col-md-3 foot-post">
            <h4>Latest Posts</h4>
            <div className="post-row">
              <div className="image">
                <img src="assets/images/album/a6.jpg" alt="" />
              </div>
              <div className="detail">
                <p>we trade and supply water treatment products </p>
              </div>
            </div>
            <div className="post-row">
              <div className="image">
                <img src="assets/images/album/a5.jpg" alt="" />
              </div>
              <div className="detail">
                <p>Top 10 problem if you consume water without filter </p>
              </div>
            </div>
            <div className="post-row">
              <div className="image">
                <img src="assets/images/album/a4.jpg" alt="" />
              </div>
              <div className="detail">
                <p>Top 10 profit if you consume water with filter</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 foot-services">
            <h4>Top Category</h4>
            <ul>
              <li>
                <a href="">Target Statergy</a>
              </li>
              <li>
                <a href="">Web Analytics</a>
              </li>
              <li>
                <a href="">Page Monitering</a>
              </li>
              <li>
                <a href="">Page Optimization</a>
              </li>
              <li>
                <a href="">Target Statergy</a>
              </li>
              <li>
                <a href="">Email Marketing</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 foot-news">
            <h4>News Letter</h4>
            <p>
              provides you services like water purifier, AC repair, a repair
              installation of commercial and industrial water treatment.{" "}
            </p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control mb-0"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <span className="input-group-text bg-primary" id="basic-addon2">
                  <i className="bi text-white bi-send" />
                </span>
              </div>
            </div>
            <ul>
              <li>
                <i className="bi bi-facebook" />
              </li>
              <li>
                <i className="bi bi-twitter" />
              </li>
              <li>
                <i className="bi bi-instagram" />
              </li>
              <li>
                <i className="bi bi-linkedin" />
              </li>
              <li>
                <i className="bi bi-pinterest" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div className="copy">
    <div className="container">
      <a href="https://www.smarteyeapps.com/">
        2022 © All Rights Reserved | Designed and Developed by Shreyans Mishra
      </a>
    </div>
  </div>
</>

  )
}

export default Contactus