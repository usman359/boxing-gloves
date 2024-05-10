"use client";
import { useAppContext } from "@/context/AppContext";
import { Box, Button, ButtonBase, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";

import Zoom from "@mui/material/Zoom";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

let currentCartIndex;

export default function Product() {
  const [productDetail, setProductDetail] = useState({});
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [productcolor, setProductcolor] = useState(null); // State for quantity
  const [productsize, setProductsize] = useState("12oz"); // State for quantity

  const { items, addToCart, openDialog, setOpenDialog } = useAppContext();

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleSetOpenDialog = (details, index) => {
    setOpenDialog(true);
    setProductDetail(details);
    currentCartIndex = index;
    // console.log(currentCart);
  };

  return (
    <div className="categories_area pt-85 mb-150">
      <div className="container-fluid">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="section-wrapper text-center mb-35">
            <h2 className="section-title">Explore Our Bestsellers</h2>
            <p>
              Commodo sociosqu venenatis cras dolor sagittis integer luctus sem
              primis
              <br />
              eget maecenas sed urna malesuada.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
              >
                <div
                  className="product-item swiper-slide wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <div className="product">
                    <div className="product__thumb">
                      <a
                        className="view"
                        onClick={(event) => {
                          handleSetOpenDialog(product, index);
                        }}
                      >
                        <img
                          className="product-primary"
                          src={product.images.primary}
                          alt="product_image"
                          // width={"400px"}
                          // height={"400px"}
                        />
                        <img
                          className="product-secondary"
                          src={product.images.secondary}
                          alt="product_image"
                          // width={"400px"}
                          // height={"400px"}
                        />
                      </a>

                      <div className="product-info mb-10">
                        <div className="product_category">
                          <span>{product.category}</span>
                        </div>
                      </div>
                      <div className="product__name">
                        <h4>
                          <a>{product.name}</a>
                        </h4>
                        <div className="pro-price">
                          <p className="p-absoulute pr-1">
                            <span>€ {product.priceRange}</span>
                          </p>
                          <a className="p-absoulute pr-2">View Product</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* overlay popup*/}

      <Dialog
        fullWidth
        maxWidth="lg"
        onClose={(event, reason) => {
          setOpenDialog(false);
        }}
        open={openDialog}
        TransitionComponent={Zoom}
        TransitionProps={{
          timeout: {
            enter: 500,
            exit: 200,
          },
        }}
        sx={{
          backdropFilter: "blur(10px)",
        }}
        PaperProps={{
          sx: {
            "&.MuiPaper-root": {
              borderRadius: "30px",
              pb: 3,
              // height: '10',
            },
          },
        }}
      >
        <ButtonBase
          onClick={() => setOpenDialog(false)}
          sx={{
            position: "absolute",
            right: "20px",
            top: "20px",
            border: "3px solid #fc4a1a",
            borderRadius: "50% !important",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <CloseIcon sx={{ color: "#fc4a1a" }} />
        </ButtonBase>

        {productDetail && (
          <DialogContent>
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-5">
                <div className="quickview">
                  <div className="quickview__thumb">
                    {/* <img src={productDetail?.images?.primary} alt="" /> */}
                    {productcolor ? (
                      <img
                        src={
                          currentCartIndex === 0
                            ? `assets/img/product/with_laces/${productcolor}.png`
                            : `assets/img/product/without_laces/${productcolor}.png`
                        }
                        alt="Boxing gloves with and without laces"
                      />
                    ) : (
                      <img src={productDetail?.images?.primary} alt="" />
                    )}
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-7">
                <div className="viewcontent">
                  <div className="viewcontent__header">
                    <h2>{productDetail.name}</h2>
                  </div>
                  <div className="viewcontent__price">
                    <h4>
                      <span>€</span>
                      {productDetail.priceRange}
                    </h4>
                  </div>
                  <div className="viewcontent__stock">
                    <h4>
                      Available :<span> In stock</span>
                    </h4>
                  </div>
                  <div className="viewcontent__details">
                    <p>
                      Anlor sit amet, consectetur adipiscing elit. Fusce
                      condimentum est lacus, non pretium risus lacinia vel.
                      Fusce eget turpis orci.
                    </p>
                  </div>
                  <Box>
                    <Box mb={3} display="flex" gap={4} alignItems="center">
                      <Typography variant="h5" sx={{ flex: 0.2 }}>
                        Color:
                      </Typography>
                      <Box display="flex" gap={3} sx={{ flex: 0.4 }}>
                        {color.map((item) => {
                          return (
                            <ButtonBase
                              onClick={() => setProductcolor(item)}
                              sx={{
                                background: item,
                                width: "30px",
                                height: "30px",
                                border:
                                  productcolor === item && "3px solid grey",
                              }}
                            />
                          );
                        })}
                      </Box>
                    </Box>
                  </Box>
                  <Box display="flex" gap={4} alignItems="center" mb={3}>
                    <Typography variant="h5" sx={{ flex: 0.2 }}>
                      Size:
                    </Typography>
                    <select
                      name="country"
                      className="viewcontent__actioninput"
                      onChange={(e) => setProductsize(e.target.value)}
                    >
                      {sizes.map((size, index) => (
                        <option key={index} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </Box>

                  <Box display="flex" gap={4} alignItems="center">
                    <Typography variant="h5" sx={{ flex: 0.2 }}>
                      Quantity:
                    </Typography>
                    <input
                      className="viewcontent__actioninput"
                      type="number"
                      placeholder="1"
                      value={quantity}
                      onChange={handleQuantityChange}
                    />
                  </Box>
                  <Box mb={2} mt={6} sx={{ width: "50%" }}>
                    <Button
                      fullWidth
                      sx={{
                        padding: "10px 15px",
                        background: "#fc4a1a",
                        color: "white !important",
                        textTransform: "capitalize",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: 600,
                        "&:hover": {
                          background: "#ff7e47", // Change background color on hover
                          cursor: "pointer", // Change cursor to pointer on hover
                        },
                        "&:disabled": {
                          background: "grey", // Change background color when disabled
                          cursor: "not-allowed", // Change cursor to not-allowed when disabled
                        },
                      }}
                      disabled={
                        items.find((item) => item.id === productDetail.id) ||
                        !productcolor ||
                        !productsize
                      }
                      onClick={() =>
                        addToCart(
                          productDetail,
                          quantity,
                          productcolor,
                          productsize
                        )
                      }
                    >
                      {items.find((item) => item.id === productDetail.id)
                        ? "Already Added!"
                        : !productcolor || !productsize
                        ? "Please select a color and a Size"
                        : "Add to cart"}
                    </Button>
                  </Box>
                  {/* <div className="viewcontent__footer">
                    <ul>
                      <li>Category:</li>
                      <li>SKU:</li>
                      <li>Brand:</li>
                    </ul>
                    <ul>
                      <li>Watches</li>
                      <li>2584-MK63</li>
                      <li>Brenda</li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}

const products = [
  {
    id: "price_1P1U2eRpQuDaLH0uHk04e9xo",
    price_id: "price_1P1U2eRpQuDaLH0uHk04e9xo",
    name: "Glove 1",
    category: "Sports, Gloves",
    priceRange: "100",
    images: {
      // primary: "assets/img/product/glove2.jpg",
      // secondary: "assets/img/product/glove2.jpg",
      // primary: "assets/img/product/boxer-product-5.png",
      // secondary: "assets/img/product/boxer-product-5.png",
      primary: "assets/img/product/with_laces/black.png",
      secondary: "assets/img/product/with_laces/black.png",
    },
  },
  {
    id: "price_1P1VWwRpQuDaLH0umpZGGFnU",
    price_id: "price_1P1VWwRpQuDaLH0umpZGGFnU",
    name: "Glove 2",
    category: "Sports, Gloves",
    priceRange: "120",
    images: {
      // primary: "assets/img/product/glove1.jpg",
      // secondary: "assets/img/product/glove1.jpg",
      primary: "assets/img/product/without_laces/black.png",
      secondary: "assets/img/product/without_laces/black.png",
    },
  },

  // Add more dummy product objects here as needed
];

const sizes = ["12oz", "14oz", "16oz"];
const color = ["black", "red", "silver", "blue"];
