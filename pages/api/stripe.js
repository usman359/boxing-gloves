import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51P1TbjRpQuDaLH0uBCNsxd9j2Vj9NKyKp5RRHchyxuVzpBMsqLiYmigvs3mhX8Lnbb4EeK12JyXf0GLpNHJMUJpT00xv7uiJyq"
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card", "klarna"],
        billing_address_collection: "required",
        // shipping_options: [{ shipping_rate: "shr_1Kn3IaEnylLNWUqj5rqhg9oV" }],
        line_items: req.body.items.map((item) => {
          const img = item.images.primary;

          return {
            // price_id: item.price_id,
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [
                  "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ],
                description: `Size: 12oz, Color: red`, // Add size and color in the description
                metadata: {
                  // Or you can add it in the metadata
                  size: "12oz",
                  color: "red",
                },
              },
              unit_amount: item.priceRange * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      };

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
