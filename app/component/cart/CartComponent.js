"use client";
import React from "react";
import { useAppContext } from "@/context/AppContext";
import { Box, ButtonBase, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

import DeleteIcon from "@mui/icons-material/Delete";
import getStripe from "@/lib/getStripe";
export default function CartComponent() {
  const { items, setItems } = useAppContext();
  const router = useRouter();
  const handleQuantityChange = (e, itemId) => {
    const newQuantity = parseInt(e.target.value, 10);
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setItems(updatedItems);
  };

  const totalPricePerItem = (item) =>
    parseFloat(item.priceRange) * item.quantity;
  const totalSum = items.reduce(
    (acc, item) => acc + totalPricePerItem(item),
    0
  );

  const handleRemove = (product) => {
    const newItems = items.filter((item) => item.id !== product);
    setItems(newItems);
  };

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: items }),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    // toast.loading("Redirecting...");
    console.log(data);

    stripe.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <div className="f_cart_area pt-110 mb-100">
      <div className="container">
        {items.length !== 0 ? (
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12">
              <div className="cart_table">
                <table>
                  <tr>
                    <td>Product</td>
                    <td></td>
                    <td>price</td>
                    <td>Quantity</td>
                    <td>Size</td>
                    <td>Color</td>
                    <td>Total</td>
                  </tr>
                  <tbody>
                    {items.map((item) => {
                      return (
                        <tr className="max-width-set">
                          <td>
                            <img src="assets/img/desc/3-500x500.jpg" alt="" />
                          </td>
                          <td>{item.name}</td>
                          <td>$ {item.priceRange}</td>
                          <td>
                            <div className="viewcontent__action single_action pt-30">
                              <span>
                                <input
                                  type="number"
                                  placeholder="1"
                                  value={item.quantity}
                                  onChange={(e) =>
                                    handleQuantityChange(e, item.id)
                                  }
                                />
                              </span>
                            </div>
                          </td>
                          <td>{item.size}</td>
                          <td>{item.color}</td>

                          <td>${totalPricePerItem(item).toFixed(2)}</td>
                          <td className="width-set">
                            <IconButton onClick={() => handleRemove(item.id)}>
                              <DeleteIcon sx={{ color: "#fc4a1a" }} />
                            </IconButton>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="cart__acount">
                <h5>Cart totals</h5>
                <table>
                  <tr className="first-child">
                    <td>Subtotal</td>
                    <td>$ {totalSum.toFixed(2)}</td>
                  </tr>
                  <tr className="first-child lastchild">
                    <td>Shipping</td>
                    <td>
                      Enter your address to view shipping options <br />
                      Calculate shipping
                    </td>
                  </tr>
                  <tr className="first-child">
                    <td>Total</td>
                    <td>$ {totalSum.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <a onClick={handleCheckout}>
                        <input type="submit" value="procced to checkout" />
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <Box>
            <Typography variant="h3">Your Cart is Empty!</Typography>
          </Box>
        )}
      </div>
    </div>
  );
}
