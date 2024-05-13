"use client";
import React, { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";

let newItems = [];

export default function Cart() {
  const { items, setItems, addToCart, open, setOpen } = useAppContext();

  console.log(items);

  const router = useRouter();
  const handleClose = () => {
    setOpen(false);
  };

  const handleRemove = (product) => {
    const newItems = items.filter((item) => item.id !== product);
    setItems(newItems);
    // console.log(addToCart);
  };

  const totalPrice = items.reduce(
    (acc, item) => acc + parseFloat(item.priceRange) * item.quantity,
    0
  );

  useEffect(function () {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    // console.log(cartItems);
    cartItems?.length > 0 && setItems(cartItems);
  }, []);

  return (
    <>
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <Box
          p={2}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          sx={{ height: "100%" }}
        >
          <Box sx={{ position: "absolute", right: 0, top: 0 }}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          {items.length > 0 ? (
            <>
              <div className="cart-text">
                <h3 className="mb-40">Shopping cart</h3>

                {items.map((item) => {
                  return (
                    <Box display="flex" gap={3} mt={2} key={item.id}>
                      <Box sx={{ border: "1px solid grey" }}>
                        {/* <img src={item.images.primary} style={{ width: 200 }} /> */}
                        <img
                          src={item.selectedColorImage}
                          style={{ width: 200 }}
                        />
                      </Box>
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        justifyContent="space-around"
                      >
                        <Box>
                          <Typography variant="h5">{item.name}</Typography>
                          <Typography variant="body1">
                            {item.quantity} × {item.priceRange}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="body1">
                            {item.color} , {item.size}
                          </Typography>
                        </Box>
                        <Box>
                          <Button
                            variant="outlined"
                            onClick={() => handleRemove(item.id)}
                            sx={{ border: "1px solid #fc4a1a" }}
                          >
                            Remove
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </div>

              <Box>
                <Box mt={3}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="h3">Subtotal:</Typography>
                    <Typography
                      variant="h3"
                      sx={{ color: "#fc4a1a !important" }}
                    >
                      € {totalPrice}
                    </Typography>
                  </Box>
                  <Box
                    mt={2}
                    display="flex"
                    flexDirection="column"
                    gap={3}
                    sx={{ width: "100%" }}
                  >
                    <Button
                      size="large"
                      variant="outlined"
                      sx={{ border: "1px solid #fc4a1a" }}
                      onClick={() => router.push("/cart")}
                    >
                      View Cart
                    </Button>

                    {/* <Button
                      size="large"
                      variant="outlined"
                      sx={{ border: "1px solid #fc4a1a" }}
                      // onClick={() => router.push("/checkout")}
                    >
                      Checkout
                    </Button> */}
                  </Box>
                </Box>
              </Box>
            </>
          ) : (
            <Box p={3}>
              <Typography variant="h4">Your Cart is Empty!</Typography>
            </Box>
          )}
        </Box>
      </Drawer>
    </>
  );
}
