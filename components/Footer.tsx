import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="inner">
        <div className="container">
          <div className="row">
            <div className="col-md-3 foot-about">
              <h4>About US</h4>
              <p>
                Aqua support is a brand new company. It provides you services
                like water purifier, AC repair, a repair installation of
                commercial and industrial water treatment
              </p>
              <ul>
                <li>
                  Address: Anuarg singh S1/118K chhuppepur central jail road , Varanasi , Uttar
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
                  <img src="images/album/a6.jpg" alt="" />
                </div>
                <div className="detail">
                  <p>we trade and supply water treatment products</p>
                </div>
              </div>
              <div className="post-row">
                <div className="image">
                  <img src="images/album/a5.jpg" alt="" />
                </div>
                <div className="detail">
                  <p>Top 10 problem if you consume water without filter</p>
                </div>
              </div>
              <div className="post-row">
                <div className="image">
                  <img src="images/album/a4.jpg" alt="" />
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
                installation of commercial and industrial water treatment.
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
                  <span
                    className="input-group-text bg-primary"
                    id="basic-addon2"
                  >
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
      
     
      <div className="copy">
        <div className="container">
          <a href="https://www.linkedin.com/in/shreyans-mishra-3b48ba1a3/">
            2022 © All Rights Reserved | Designed and Developed by Shreyans
            Mishra
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
