/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Product() {
  return (
    <div>
      {/* <!-- start Featured Product --> */}
      <div className="featured_Product pb-5" id="Product">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-3 mt-5">
              <h2 className="text-center">Featured Product</h2>
            </div>
            <div className="col-md-12 mb-5">
              <p className="text-center">
                Reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla
                <br />
                pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
            {/* <!-- start cards imges --> */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                    className="card-img-top"
                    alt="Skyscrapers"
                  />
                  <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                      </li>
                      <p className="text-secondary text-right opacity-75">
                        $240.00
                      </p>
                    </ul>
                    <h3 className="card-title">Card title</h3>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                  <div className="card-footer pt-0 border-0">
                    <small className="text-secondary opacity-75">
                      Reviews (24)
                    </small>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                    className="card-img-top"
                    alt="Skyscrapers"
                  />
                  <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                      </li>
                      <p className="text-secondary text-right opacity-75">
                        $240.00
                      </p>
                    </ul>
                    <h3 className="card-title">Card title</h3>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                  <div className="card-footer pt-0 border-0">
                    <small className="text-secondary opacity-75">
                      Reviews (24)
                    </small>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                    className="card-img-top"
                    alt="Skyscrapers"
                  />
                  <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                      </li>
                      <p className="text-secondary text-right opacity-75">
                        $240.00
                      </p>
                    </ul>
                    <h3 className="card-title">Card title</h3>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                  <div className="card-footer pt-0 border-0">
                    <small className="text-secondary opacity-75">
                      Reviews (24)
                    </small>
                  </div>
                </div>
              </div>
              {/* <!-- End cards imges --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Featured Product --> */}
      <section className="pb-5">
        <div className="text-center">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-5">
              <div className="card">
                <div
                  className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                    className="w-100"
                  />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-dark ms-2">NEW</span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{backgroundColor:" rgba(251, 251, 251, 0.15);"}}></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-2">Denim shirt</h5>
                  </a>
                  <a href="" className="text-reset ">
                    <p>Shirt</p>
                  </a>
                  <h6 className="mb-3 price">120$</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                    className="w-100"
                  />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-primary ms-2">
                            bestseller
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{backgroundColor:" rgba(251, 251, 251, 0.15);"}}></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-2">Sweatshirt</h5>
                  </a>
                  <a href="" className="text-reset ">
                    <p>Sport wear</p>
                  </a>
                  <h6 className="mb-3 price">139$</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg"
                    className="w-100"
                  />
                  <a href="#!">
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{backgroundColor:" rgba(251, 251, 251, 0.15);"}}></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-2">Grey blouse</h5>
                  </a>
                  <a href="" className="text-reset ">
                    <p>Sport wear</p>
                  </a>
                  <h6 className="mb-3 price">99$</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-zoom ripple"
                  data-mdb-ripple-color="light">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
                    className="w-100"
                  />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge sale-badge ms-2">-10%</span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{backgroundColor:" rgba(251, 251, 251, 0.15);"}}></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-2">Black jacket</h5>
                  </a>
                  <a href="" className="text-reset ">
                    <p>Outwear</p>
                  </a>
                  <h6 className="mb-3 price">
                    <s>199$</s>
                    <strong className="ms-2 sale">179$</strong>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                    className="w-100"
                  />
                  <a href="#!">
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{backgroundColor:" rgba(251, 251, 251, 0.15);"}}></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-2">Sweatshirt</h5>
                  </a>
                  <a href="" className="text-reset ">
                    <p>Sport wear</p>
                  </a>
                  <h6 className="mb-3 price">139$</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg"
                    className="w-100"
                  />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-success ms-2">Eco</span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{backgroundColor:" rgba(251, 251, 251, 0.15);"}}></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-2">Grey blouse</h5>
                  </a>
                  <a href="" className="text-reset ">
                    <p>Sport wear</p>
                  </a>
                  <h6 className="mb-3 price">99$</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-zoom ripple"
                  data-mdb-ripple-color="light">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
                    className="w-100"
                  />
                  <a href="#!">
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{backgroundColor: "rgba(251, 251, 251, 0.15);"}}></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-2">Black jacket</h5>
                  </a>
                  <a href="" className="text-reset">
                    <p>Outwear</p>
                  </a>
                  <h6 className="mb-3 price">199$</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <div
                  className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                    className="w-100"
                  />
                  <a href="#!">
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{backgroundColor: "rgba(251, 251, 251, 0.15);"}}></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-2">Denim shirt</h5>
                  </a>
                  <a href="" className="text-reset ">
                    <p>Shirt</p>
                  </a>
                  <h6 className="mb-3 price">120$</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Product;
