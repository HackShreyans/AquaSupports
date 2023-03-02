import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      <header>
    <div id="menu-jk" className="nav-part shadow-md bg-white navcol">
      <div className="container-lg">
        <div className="row p-2">
          <div className="col-lg-3 p-2">
            <Link href="/">
              <img className="max-230" src="images/logo.jpg" alt="" />
            </Link>
            <Link
            href="/"
              data-bs-toggle="collapse"
              data-bs-target="#menu"
              className="float-end d-lg-none pt-1 ps-3"
            >
              <i className="bi pt-1 fs-1 cp bi-list" />
            </Link>
          </div>
          <div id="menu" className="col-lg-9 d-none pt-1 d-lg-block">
            <ul className="fw-bold nacul fs-7">
              <li className="float-start p-3 px-4">
                <Link href="/">Home</Link>
              </li>
              <li className="float-start p-3 px-4">
                <Link href="about-us">About Us</Link>
              </li>
              <li className="float-start p-3 px-4">
                <Link href="product">Products</Link>
              </li>
              <li className="float-start p-3 px-4">
                <Link href="blog">Blog</Link>
              </li>
              <li className="float-start p-3 px-4">
                <Link href="contact">Contact Us</Link>
              </li>
              <li className="float-end d-none d-md-block pt-2">
                <button className="btn fw-bolder px-4 py-2 btn-primary">
                  Send a Request
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  </div>
  )
}

export default Navbar