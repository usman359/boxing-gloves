"use client";

import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe="pk_test_51P1TbjRpQuDaLH0usWUticHLwhL5LYXD9YOmyUelBH5B9s4QyycJxxRJMtj1GhCYZMJThXbelgQTm9WWJ089VzkC00gAkgh9sg"
      successUrl="http://localhost:3000/success"
      cancelUrl="http://localhost:3000/"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={false}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}
