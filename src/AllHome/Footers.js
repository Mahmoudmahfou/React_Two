/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function Footers() {
  return (
    <div>
      {/* <!-- start footer --> */}
      <footer className="bg-dark text-white text-lg-start">
        {/* <!-- Grid container --> */}
        <div className="container p-4">
          {/* <!--Grid row--> */}
          <div className="row">
            {/* <!--Grid column--> */}
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h2 className="text-success border-bottom pb-2">Mahfouz Shop</h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li className="pb-2 pt-2">
                  <i className="fas fa-map-marker-alt fa-fw"></i>
                  p123 Consectetur at ligula 10660
                </li>
                <li className="pb-2">
                  <i className="fa fa-phone fa-fw"></i>
                  <a
                    className="mahmoud text-decoration-none text-light"
                    href="tel:011-27-499-215">
                    011-27-499-215
                  </a>
                </li>
                <li className="pb-2">
                  <i className="fa fa-envelope fa-fw"></i>
                  <a
                    className="mahmoud text-decoration-none text-light"
                    href="ma7898032@gmail.com">
                    ma7898032@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h2 className="text-uppercase border-bottom pb-2">Products</h2>
              <ul className="list-unstyled mb-2">
                <li className="pb-2 pt-2">
                  <a
                    href="#!"
                    className="mahmoud text-white text-decoration-none">
                    Luxury
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#!"
                    className="mahmoud text-white text-decoration-none">
                    Sport Wear
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#!"
                    className="mahmoud text-white text-decoration-none">
                    Men's Shoes
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#!"
                    className="mahmoud text-white text-decoration-none">
                    Women's Shoes
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#!"
                    className="mahmoud text-white text-decoration-none">
                    Popular Dress
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#!"
                    className="mahmoud text-white text-decoration-none">
                    Gym Accessories
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#!"
                    className="mahmoud text-white text-decoration-none">
                    Sport Shoes
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h2 className="text-uppercase mb-2 border-bottom pb-2">
                Further Info
              </h2>
              <ul className="list-unstyled">
                <li className="pb-2 pt-2">
                  <a
                    href="#!"
                    className="mahmoud text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#!"
                    className="mahmoud text-white text-decoration-none">
                    About Us
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#!"
                    className="mahmoud text-white text-decoration-none">
                    Shop Locations
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#!"
                    className="mahmoud text-white text-decoration-none">
                    FAQs
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#!"
                    className="mahmoud text-white text-decoration-none">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* start icons & input button */}
        <div className="w-75 m-auto row text-light mb-5 pb-4">
          <div className="col-12 mb-3">
            <div className="w-100 my-3 border-top border-light"></div>
          </div>
          <div className="col-auto me-auto">
            <ul className="list-inline text-left footer-icons">
              <li className="ahmed p-1 list-inline-item border border-light rounded-circle text-center">
                <a
                  className="text-light text-decoration-none"
                  target="_blank"
                  href="http://facebook.com/">
                  <i className="fab fa-facebook-f fa-lg fa-fw"></i>
                </a>
              </li>
              <li className="ahmed p-1 list-inline-item border border-light rounded-circle text-center">
                <a
                  className="text-light text-decoration-none"
                  target="_blank"
                  href="https://www.instagram.com/">
                  <i className="fab fa-instagram fa-lg fa-fw"></i>
                </a>
              </li>
              <li className="ahmed p-1 list-inline-item border border-light rounded-circle text-center">
                <a
                  className="text-light text-decoration-none"
                  target="_blank"
                  href="https://twitter.com/">
                  <i className="fab fa-twitter fa-lg fa-fw "></i>
                </a>
              </li>
              <li className="ahmed p-1 list-inline-item border border-light rounded-circle text-center">
                <a
                  className="text-light text-decoration-none"
                  target="_blank"
                  href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin fa-lg fa-fw"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <label className="sr-only" for="subscribeEmail">
              Email address
            </label>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control bg-dark border-light"
                id="subscribeEmail"
                placeholder="Email address"
              />
              <div className="input-group-text btn btn-success bg-success text-light">
                Subscribe
              </div>
            </div>
          </div>
        </div>
        {/* End icons & input button */}

        {/* <!-- Copyright --> */}
        <div className="Copyright text-center p-3">
          © 2020 Copyright:
          <a
            className="mahmoud text-decoration-none text-white"
            href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- End footer --> */}
    </div>
  );
}
export default Footers;
