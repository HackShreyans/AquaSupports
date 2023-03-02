import React from "react";
import Image from "next/image";

const Aboutus = () => {
  return (
    <>
      <div className="about-us big-padding">
        <div className="container-lg">
          <div className="section-title">
            <p>Help us to Achieve our Goal</p>
            <h2>About Our Company</h2>
          </div>
          <div className="about-row row">
            <div className="col-md-7">
              <div className="abut-detail fs-6">
                <p className="mb-3">
                  Aqua support is a brand new company. It provides you services
                  like water purifier, AC repair, a repair installation of
                  commercial and industrial water treatment. We give various
                  services for the repair and maintenance
                </p>
                <p className="mb-3">
                  At Aqua support India, we understand that pure water is the
                  only weapon to fight against thousands of diseases out in the
                  real world. With a wealth of experiences accumulated, we trade
                  and supply water treatment products.
                </p>
                <p className="mb-4">
                  RO Care India is one of the popular &amp; trusted brands in
                  the field of water purifier. We are running independently and
                  deals in all types of water purifier service such as RO
                  installation, RO repair &amp; maintenance services. We offer
                  domestic, commercial, and industrial water purifier in various
                  capacity.
                </p>
              </div>
            </div>
            <div className="col-md-5 p-4">
              <img src="images/sp1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
