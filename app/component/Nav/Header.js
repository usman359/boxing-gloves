"use client";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import React from "react";

export default function Header() {
  const { items, setItems, addToCart, setOpen } = useAppContext();

  return (
    <>
      <header className="header-area">
        <div className="gota_bottom position-sticky">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 d-none d-sm-block"></div>
              <div className="col-xl-8 col-lg-8 col-md-4 col-sm-4">
                <div className="sidemenu sidemenu-1 d-lg-none d-md-block">
                  <a className="open">
                    <i className="fal fa-bars"></i>
                  </a>
                </div>
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <Link href="/">Home </Link>
                      </li>
                      <li className="position-static" href="/">
                        <Link href="/">Shop</Link>
                      </li>

                      <li>
                        <Link className="d-none d-xl-block" href="/">
                          <img
                            className="pl-50 pr-50"
                            src="assets/img/logo/logo1.png"
                            width={180}
                            // height={00}
                            alt=""
                          />
                        </Link>
                      </li>

                      <li>
                        <Link href="/">contact us </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                <div className="gota_cart gotat_cart_1 text-end">
                  <a onClick={() => setOpen(true)}>
                    <i className="fal fa-shopping-cart"></i>My Bag
                    {items.length > 0 && (
                      <span className="counter">({items.length})</span>
                    )}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="fix">
        <div className="side-info">
          <button className="side-info-close">
            <i className="fal fa-times"></i>
          </button>
          <div className="side-info-content">
            <div className="mobile-menu"></div>
            <div className="contact-infos mb-30">
              <div className="contact-list mb-30">
                <h4>Office Address</h4>
                <p>123/A, Miranda City Likaoli Prikano, Dope</p>
              </div>
              <div className="contact-list mb-30">
                <h4>Phone Number</h4>
                <p>+0989 7876 9865 9</p>
                <p>+(090) 8765 86543 85</p>
              </div>
              <div className="contact-list mb-30">
                <h4>Email Address</h4>
                <p>
                  <a
                    href="../../../cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="f59c9b939ab5908d9498859990db969a98"
                  >
                    [email&#160;protected]
                  </a>
                </p>
                <p>
                  <a
                    href="../../../cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="e4819c8589948881ca89858d88a48c9189ca878b89"
                  >
                    [email&#160;protected]
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-overlay"></div>
    </>
  );
}
