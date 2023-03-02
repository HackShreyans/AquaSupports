import Image from 'next/image';
import React from 'react'

const Chooseus = () => {
  return (
    <div className="container-fluid products bg-gray big-padding pt-3">
    <div className="container-xl">
      <div className="section-title row">
        <h2 className="fs-1 fw-bold">Our Services</h2>
        <p>
          We give various services for the repair and maintenance , our company
          water purifier service in Mumbai, Aurangabad, Varanasi, Allahabad,
          Lucknow, Noida &amp; more that is the places where the company has been
          able to gain a large number of client for RO water purifier service,
          these places are more affected due to water scarcity.
        </p>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4 mb-4 col-md-6">
          <div className="cover text-center p-4 shadow-md bg-white">
            <img
              className="w-125"
              src="images/services/flood.png"
              alt=""
            />
            <h2 className="fs-4 fw-bolder mt-4">Home Filtration Systems</h2>
            <p>
              our filteration system is very good and we provide a best
              filteration in over india and its very genuine product and we
              awarded for our product
            </p>
          </div>
        </div>
        <div className="col-lg-4 mb-4 col-md-6">
          <div className="cover text-center p-4 shadow-md bg-white">
            <img
              className="w-125"
              src="images/services/002-drink-water.png"
              alt=""
            />
            <h2 className="fs-4 fw-bolder mt-4">Drinking Water Systems</h2>
            <p>
              DrinkPrime is India's smartest water purifier on rent trusted by 1
              Lakh+ users. It is completely customized based on the input water
              quality in your home.
            </p>
          </div>
        </div>
        <div className="col-lg-4 mb-4 col-md-6">
          <div className="cover text-center p-4 shadow-md bg-white">
            <img
              className="w-125"
              src="images/services/water-heater.png"
              alt=""
            />
            <h2 className="fs-4 fw-bolder mt-4">Problem Water Solution</h2>
            <p>
              safe and healthy drinking water always! Coming along with free
              delivery, installation, maintenance and relocation
            </p>
          </div>
        </div>
        <div className="col-lg-4 mb-4 col-md-6">
          <div className="cover text-center p-4 shadow-md bg-white">
            <img
              className="w-125"
              src="images/services/water-tap.png"
              alt=""
            />
            <h2 className="fs-4 fw-bolder mt-4">Tap Water Filter</h2>
            <p>
              our filteration system is very good and we provide a best
              filteration in over india When you avail it, you also get peace of
              mind with hassle-free maintenance of your purifier
            </p>
          </div>
        </div>
        <div className="col-lg-4 mb-4 col-md-6">
          <div className="cover text-center p-4 shadow-md bg-white">
            <img
              className="w-125"
              src="images/services/001-save-water.png"
              alt=""
            />
            <h2 className="fs-4 fw-bolder mt-4">Shower Water Filter</h2>
            <p>
              e give various services for the repair and maintenance safe and
              healthy drinking water always! Coming along with free delivery
            </p>
          </div>
        </div>
        <div className="col-lg-4 mb-4 col-md-6">
          <div className="cover text-center p-4 shadow-md bg-white">
            <img className="w-125" src="/images/services/ph.png" alt="" />
            <h2 className="fs-4 fw-bolder mt-4">Home Water Test</h2>
            <p>
              When you avail it, you also get peace of mind with hassle-free
              maintenance of your purifier free of cost its very affordable
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Chooseus;