import React from "react";
import "./checkout.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { selectCartTotal } from "../../redux/cart/cart.selector";

import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({ cartItems, total }) => {
  const headerEls = ["Product", "Description", "Quantity", "Price", "Remove"];

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        {headerEls.map((el, i) => (
          <div key={i} className="header-block">
            <span>{el}</span>
          </div>
        ))}
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
