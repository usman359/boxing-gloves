import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51P1TbjRpQuDaLH0usWUticHLwhL5LYXD9YOmyUelBH5B9s4QyycJxxRJMtj1GhCYZMJThXbelgQTm9WWJ089VzkC00gAkgh9sg"
    );
  }

  return stripePromise;
};

export default getStripe;
