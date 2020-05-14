import React from "react";
import "./stripe-button.style.scss";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

export const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_vkBsePMCkXzwyEmQbuuq6CM500x6OsNrVo";
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Successfull");
      })
      .catch((error) => {
        console.log("Payment Failure", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure you used the provided credit cart"
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Lamp Shop Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
