import React from "react";

export default function Banner() {
  return (
    <div
      className="page-layout"
      style={{ backgroundImage: `url("assets/img/slider/cart.jpg")` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="breadcrumb-area text-center">
              <h2 className="page-title">Cart</h2>
              <div className="breadcrumb-menu">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a>Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a>cart</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
