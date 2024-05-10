import React from "react";
import Header from "./component/Nav/Header";
import Cart from "./component/Nav/Cart";
import Hero from "./component/Home/Hero";
import Feature from "./component/Home/Feature";
import Product from "./component/Home/Product";
import TopProduct from "./component/Home/TopProduct";
import Footer from "./component/Nav/Footer";
import { Typography } from "@mui/material";

export default function page() {
  return (
    <div>
      <Cart />
      <Hero />
      <Feature />
      <Product />
    </div>
  );
}
