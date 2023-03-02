import Layout from "@/components/Layout/Layout";
import Navbar from "../components/Navbar";

const aboutus = () => {
  return (
    <Layout>
      <div className="page-nav no-margin row">
        <div className="container">
          <div className="row">
            <h2 className="text-start">About Our Company</h2>
            <ul>
              <li>
                <a href="#">
                  <i className="bi bi-house-door" /> Home
                </a>
              </li>
              <li>
                <i className="bi bi-chevron-double-right pe-2" /> About Us
              </li>
            </ul>
          </div>
        </div>
      </div>
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
                  services for the repair and maintenance At Aqua support India,
                  we understand that pure water is the only weapon to fight
                  against thousands of diseases out in the real world.
                </p>
                <p className="mb-3">
                  With a wealth of experiences accumulated, we trade and supply
                  water treatment products. RO Care India is one of the popular
                  &amp; trusted brands in the field of water purifier. We are
                  running independently and deals in all types of water purifier
                  service such as RO installation
                </p>
                <p className="mb-4">
                  RO repair &amp; maintenance services. We offer domestic,
                  commercial, and industrial water purifier in various capacity.
                </p>
              </div>
            </div>
            <div className="col-md-5 p-4">
              <img src="images/sp1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="out-team container-fluid big-padding bg-gray">
        <div className="container">
          <div className="row section-title">
            <h2>Our Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque consectetur
            </p>
          </div>
          <div className="team-row row">
            <div className="col-md-3 mb-4">
              <div className="teamc shadow-md text-center bg-white p-2">
                <img src="images/team/1.jpg" alt="" />
                <h4 className="fs-5 mt-3 fw-bolder mb-0">Manoj Parikar</h4>
                <span className="fs-8">CEO Shaw Analysis</span>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="teamc shadow-md text-center bg-white p-2">
                <img src="images/team/2.jpg" alt="" />
                <h4 className="fs-5 mt-3 fw-bolder mb-0">James Anderson</h4>
                <span className="fs-8">CEO Shaw Analysis</span>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="teamc shadow-md text-center bg-white p-2">
                <img src="images/team/3.jpg" alt="" />
                <h4 className="fs-5 mt-3 fw-bolder mb-0">Pream Vikij</h4>
                <span className="fs-8">CEO Shaw Analysis</span>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="teamc shadow-md text-center bg-white p-2">
                <img src="images/team/4.jpg" alt="" />
                <h4 className="fs-5 mt-3 fw-bolder mb-0">Andrew Preson</h4>
                <span className="fs-8">CEO Shaw Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*- ############ Footer Starts Here ################## */}
    
    </Layout>
  );
};

export default aboutus;
