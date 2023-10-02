/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Cardes() {
  return (
    <div>
      {/* <!-- start cards & Details --> */}
      <div className="products mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">Categories of The Month</h2>
            </div>
            <div className="col-md-12">
              <p className="text-center">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui
                <br />
                officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="Images/category_img_01.jpg"
                className="rounded-circle img-fluid border"
                alt="img"
              />
              <h4 className="text-center mb-3 mt-3">Watches</h4>
              <p className="text-center">
                <a className="btn btn-success">Go Shop</a>
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="Images/category_img_02.jpg"
                className="rounded-circle img-fluid border"
                alt="img"
              />
              <h4 className="text-center mb-3 mt-3">Shoes</h4>
              <p className="text-center">
                <a className="btn btn-success">Go Shop</a>
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="Images/category_img_03.jpg"
                className="rounded-circle img-fluid border"
                alt="img"
              />
              <h4 className="text-center mb-3 mt-3">Accessories</h4>
              <p className="text-center">
                <a className="btn btn-success">Go Shop</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End cards & Details --> */}
    </div>
  );
}
export default Cardes;
