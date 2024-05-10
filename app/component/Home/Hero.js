import { Box } from "@mui/material";
import React from "react";

export default function Hero() {
  return (
    <Box pt={30} pb={40} className="bgclr2">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 offset-xl-1 col-lg-5 col-md-5">
            <div className="left_text text-right">
              <img
                className="changevalu3"
                src="assets/img/slider/slider-shape1.png"
                alt=""
              />
              <img
                className="changevalu2"
                src="assets/img/slider/slider-dot-shape1.png"
                alt=""
              />
              <img
                className=""
                src="assets/img/slider/slider-circle-1.png"
                alt=""
              />
              <img
                className="common-absoulute changevalue"
                src="assets/img/slider/slider-text1.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-5 col-md-5">
            <div className="righ-images">
              <img
                className="common-absoulute ab-1 d-none d-sm-block blurFilter"
                // src="assets/img/slider/slider-shoe-2.png"
                src="assets/img/boxer/boxer-small-min.png"
                alt=""
                height={"350px"}
                width={"350px"}
              />
              <img
                className="common-absoulute ab-2 d-none d-sm-block"
                // src="assets/img/slider/slider-shoe-1.png"
                src="assets/img/boxer/boxer-large-min.png"
                // src="assets/img/boxer/040.png"
                alt=""
                height={"900px"}
                width={"900px"}
              />
              <img
                className="common-absoulute ab-3"
                src="assets/img/slider/slider-shape2.png"
                alt=""
              />
              <img
                className="common-absoulute ab-4"
                src="assets/img/slider/slider-shape5.png"
                alt=""
              />
              <img
                className="common-absoulute ab-5"
                src="assets/img/slider/slider-shape3.png"
                alt=""
              />
              <img
                className="common-absoulute ab-6"
                src="assets/img/slider/slider-shape1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
