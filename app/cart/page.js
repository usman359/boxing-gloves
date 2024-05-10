import React from "react";
import Banner from "../component/cart/Banner";
import CartComponent from "../component/cart/CartComponent";
import Header from "../component/Nav/Header";

export default function page() {
  return (
    <div>
      <Banner />
      <CartComponent />
    </div>
  );
}
