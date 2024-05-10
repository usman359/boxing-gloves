"use client";
import { useAppContext } from "@/context/AppContext";
import getStripe from "@/lib/getStripe";
import { Typography } from "@mui/material";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";

const CheckoutComponent = () => {
  const { items, addToCart, openDialog, setOpenDialog } = useAppContext();
  const totalSum = items.reduce(
    (acc, item) => acc + parseFloat(item.priceRange) * item.quantity,
    0
  );
  const handleCheckout = async () => {
    const stripe = await getStripe();
    console.log(items);
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
    <div className="checkout_area pt-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7 col-md-12">
            <div className="checkout_form mb-100">
              <form>
                <div className="row mb-30">
                  <Typography variant="h3" fontWeight={800}>
                    Details
                  </Typography>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="checkout__wrap">
                      <label>
                        First name <span>*</span>
                      </label>
                      <input type="text" name="fname" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="checkout__wrap">
                      <label>
                        Last name <span>*</span>
                      </label>
                      <input type="text" name="lname" />
                    </div>
                  </div>
                </div>

                <div className="checkout__wrap">
                  <label>
                    Country / Region <span>*</span>
                  </label>
                  <select name="country">
                    {countryNames.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="checkout__wrap">
                  <label>
                    Street address <span>*</span>
                  </label>
                  <input
                    className="mb-20"
                    type="text"
                    name="add1"
                    placeholder="house number and street number"
                  />
                  <input
                    type="text"
                    name="add2"
                    placeholder="apartment,suite,unit,etc.(optional)"
                  />
                </div>
                <div className="checkout__wrap">
                  <label>
                    Town / City *<span></span>
                  </label>
                  <input type="text" name="town" />
                </div>
                <div className="checkout__wrap">
                  <label>
                    County (optional)<span></span>
                  </label>
                  <input type="text" name="country" />
                </div>
                <div className="checkout__wrap">
                  <label>
                    Postcode<span>*</span>
                  </label>
                  <input type="text" name="postcode" />
                </div>
                <div className="checkout__wrap">
                  <label>
                    Phone <span>*</span>
                  </label>
                  <input type="text" name="phone" />
                </div>
                <div className="checkout__wrap">
                  <label>
                    Email address <span>*</span>
                  </label>
                  <input type="email" name="email" />
                </div>
                <div className="checkout__wrap-2 pt-20">
                  <input type="checkbox" name="check1" />
                  <span>Create an account?</span>
                </div>
                <div className="checkout__wrap-2 pt-20">
                  <input type="checkbox" name="check2" />
                  <span>Ship to a different address?</span>
                </div>
                <div className="checkout__wrap">
                  <label>
                    Order notes (optional) <span></span>
                  </label>
                  <textarea
                    name="ordernote"
                    placeholder="Note about your order, e.g special note for delivery"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
          {items.length > 0 && (
            <div className="col-xl-5 col-lg-5 col-md-12">
              <div className="cart__acount ml-50">
                <h5>Your order</h5>
                <table>
                  {items.map((item) => {
                    return (
                      <tr className="first-child-2">
                        <td>product</td>
                        <td>
                          {item.name} <span>× {item.quantity}</span>
                        </td>
                      </tr>
                    );
                  })}

                  <tr className="first-child-2">
                    <td>Subtotal</td>
                    <td className="lightbluee">$ {totalSum}</td>
                  </tr>
                  <tr className="first-child lastchild">
                    <td>Shipping</td>
                    <td>Enter your address to view shipping options. </td>
                  </tr>
                  <tr className="first-child-2">
                    <td>Total</td>
                    <td className="lightbluee">$ {totalSum}</td>
                  </tr>
                </table>
                <div className="checkout__accordion mt-30">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Check payments
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Please send a check to Store Name, Store Street, Store
                          Town, Store State / County, Store Postcode.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Cash on delivery
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Pay with cash upon delivery.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          PayPal
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">Cash on delivery</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="terms pt-50 pb-20">
                  <p>
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy
                  </p>
                  <div className="check_term">
                    <input type="checkbox" />
                    <p>
                      I have read and agree to the website terms and conditions{" "}
                      <span>*</span>
                    </p>
                  </div>
                  <div className="order-button">
                    <button type="submit" onClick={handleCheckout}>
                      place order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;

const countryNames = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
