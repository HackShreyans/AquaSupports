import Layout from "@/components/Layout/Layout";
import React from "react";

const blog = () => {
  return (
    <Layout>
      <div>
        <div id="blog" className="service container-fluid px-4 bg-white py-5">
          <div className="container">
            <div className="section-title row mb-3">
              <h2 className="fw-bolder">Our Blog</h2>
              <p>
                we understand that pure water is the only weapon to fight
                against thousands of diseases out in the real world. With a
                wealth of experiences accumulated, we trade and supply water
                treatment products.
              </p>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="serv-cove rounded bg-white p-2">
                  <img src="images/blog/b1.jpg" alt="" />
                  <div className="p-2">
                    <h5 className="mt-3 fs-7 fw-bold">
                      we trade and supply water treatment products
                    </h5>
                    <span className="float-start fw-bold fs-8">
                      Learn More <i className="bi bi-arrow-right" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="serv-cove rounded bg-white p-2">
                  <img src="images/blog/b2.jpg" alt="" />
                  <div className="p-2">
                    <h5 className="mt-3 fs-7 fw-bold">
                      Top 10 problem if you consume water without filter
                    </h5>
                    <span className="float-start fw-bold fs-8">
                      Learn More <i className="bi bi-arrow-right" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="serv-cove rounded bg-white p-2">
                  <img src="images/blog/b3.jpg" alt="" />
                  <div className="p-2">
                    <h5 className="mt-3 fs-7 fw-bold">
                      Top 10 profit if you consume water with filter
                    </h5>
                    <span className="float-start fw-bold fs-8">
                      Learn More <i className="bi bi-arrow-right" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default blog;
