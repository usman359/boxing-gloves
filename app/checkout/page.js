"use client";
import React, { useEffect } from "react";
import Header from "../component/Nav/Header";
// import Checkout from "../component/Checkout/checkout";
import Footer from "../component/Nav/Footer";
import CheckoutComponent from "../component/Checkout/Checkout";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

export default function page() {
  const { items, setItems } = useAppContext();
  const router = useRouter();
  useEffect(() => {
    if (items.length === 0) {
      router.push("/");
    }
  }, []);
  return (
    <>
      <CheckoutComponent />
    </>
  );
}
