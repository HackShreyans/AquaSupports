import React from "react";

const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src="images/slider/s1.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-md-block">
              <div className="row">
                <div className="col-lg-6 animate__animated animate__bounceInLeft text-start">
                  <h1 className="fs-12 fw-bolder text-start">
                    Water Filter <br />
                    <span className="text-primary">online shop</span>
                  </h1>
                  <p className="text-dark d-none d-md-block text-start">
                    Aqua support is a brand new company. It provides you
                    services like water purifier, AC repair, a repair
                    installation of commercial and industrial water treatment.
                    We give various services for the repair and maintenance ,
                    our company water purifier service in Mumbai, Aurangabad,
                    Varanasi, Allahabad, Lucknow, Noida &amp; more that is the
                    places where the company has been able to gain a large
                    number of client for RO water purifier service
                  </p>
                  <div className="d-inline-block pt-5 text-start d-none d-lg-block">
                    <button className="btn btn-primary shadow fs-5 fw-bolder px-5 py-2">
                      Buy Now
                    </button>
                    <button className="btn btn-outline-primary ms-4 shadow fs-5 fw-bolder px-5 py-2">
                      Buy Now
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 animate__animated animate__bounceInRight d-none d-lg-block">
                  <img className="w-100" src="images/sp1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="images/slider/s2.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-md-block">
              <div className="row">
                <div className="col-lg-6 animate__animated animate__bounceInLeft">
                  <h1 className="fs-12 fw-bolder text-start">
                    Aqua Filter <br />
                    <span className="text-primary">online shop</span>
                  </h1>
                  <p className="d-none d-md-block text-dark text-start">
                    At Aqua support India, we understand that pure water is the
                    only weapon to fight against thousands of diseases out in
                    the real world. With a wealth of experiences accumulated, we
                    trade and supply water treatment products
                  </p>
                  <div className="d-inline-block pt-5 text-start d-none d-lg-block">
                    <button className="btn btn-primary shadow fs-5 fw-bolder px-5 py-2">
                      Buy Now
                    </button>
                    <button className="btn btn-outline-primary ms-4 shadow fs-5 fw-bolder px-5 py-2">
                      Buy Now
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 animate__animated animate__bounceInRight d-none d-lg-block">
                  <img className="w-100" src="images/sp2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">
            <i className="bi fs-4 text-dark bi-chevron-left" />
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true">
            <i className="bi fs-4 text-dark bi-chevron-right" />
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
