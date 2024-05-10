import React from "react";

export default function TopProduct() {
  return (
    <div className="show-case lightblue pt-125">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="section-wrapper text-center mb-35">
              <h4 className="sub-title">Bestseller products</h4>
              <h2 className="section-title text-white">
                Nike Air Force 1 Sage Low LX
              </h2>
              <p className="d-none d-lg-block">
                Commodo sociosqu venenatis cras dolor sagittis integer luctus
                sem primis
                <br />
                eget maecenas sed urna malesuada.
              </p>
            </div>
          </div>
          <div className="case-info text-center">
            <span className="offer-text d-none d-lg-block">
              hot deal<i className="far fa-stars"></i>
            </span>
            <h2 className="back1-text d-none d-lg-block">top</h2>
            <h2 className="back-text d-none d-lg-block">limited</h2>
            <a href="shop.html">
              <img
                className="banar-product"
                src="assets/img/product/product4.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
