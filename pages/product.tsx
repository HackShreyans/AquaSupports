import Layout from "@/components/Layout/Layout";
import React from "react";

const product = () => {
  return (
    <Layout>
      <div>
        <div className="container-fluid products big-padding px-3 bg-gray">
          <div className="container-xl">
            <div className="section-title row">
              <h2 className="fs-1 fw-bold">Our Productes</h2>
              <p>
                RO Care India is one of the popular &amp; trusted brands in the
                field of water purifier. We are running independently and deals
                in all types of water purifier service such as RO installation,
                RO repair &amp; maintenance services.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 mb-4">
                <a href="detail.html">
                  <div className="product bg-white p-4 text-center shadow-md">
                    <img
                      className="mah-150"
                      src="images/product/p4.webp"
                      alt=""
                    />
                    <div className="d-inline-block">
                      <h4 className="fw-bolder fs-5 mt-4">Heat Boat Wifi</h4>
                      <span className="fw-bolder fs-4">85$</span>
                      <span className="text-muted text-decoration-line-through">
                        105$
                      </span>
                    </div>
                    <div className="d-inline-block mt-3">
                      <button className="btn btn-primary px-5">Buy Now</button>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-4 mb-4">
                <a href="detail.html">
                  <div className="product bg-white p-4 text-center shadow-md">
                    <img
                      className="mah-150"
                      src="images/product/p1.webp"
                      alt=""
                    />
                    <div className="d-inline-block">
                      <h4 className="fw-bolder fs-5 mt-4">Xpress And Clean</h4>
                      <span className="fw-bolder fs-4">85$</span>
                      <span className="text-muted text-decoration-line-through">
                        105$
                      </span>
                    </div>
                    <div className="d-inline-block mt-3">
                      <button className="btn btn-primary px-5">Buy Now</button>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-4 mb-4">
                <a href="detail.html">
                  <div className="product bg-white p-4 text-center shadow-md">
                    <img
                      className="mah-150"
                      src="images/product/p2.webp"
                      alt=""
                    />
                    <div className="d-inline-block">
                      <h4 className="fw-bolder fs-5 mt-4">Fitness Pluse</h4>
                      <span className="fw-bolder fs-4">85$</span>
                      <span className="text-muted text-decoration-line-through">
                        105$
                      </span>
                    </div>
                    <div className="d-inline-block mt-3">
                      <button className="btn btn-primary px-5">Buy Now</button>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-4 mb-4">
                <a href="detail.html">
                  <div className="product bg-white p-4 text-center shadow-md">
                    <img
                      className="mah-150"
                      src="images/product/p3.webp"
                      alt=""
                    />
                    <div className="d-inline-block">
                      <h4 className="fw-bolder fs-5 mt-4">Alkaline Ultra</h4>
                      <span className="fw-bolder fs-4">85$</span>
                      <span className="text-muted text-decoration-line-through">
                        105$
                      </span>
                    </div>
                    <div className="d-inline-block mt-3">
                      <button className="btn btn-primary px-5">Buy Now</button>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default product;
