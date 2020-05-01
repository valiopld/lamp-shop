import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";

import { ReactComponent as Logo } from "../../assets/logoCrown.svg";

export const Header = () => {
  return (
    <div className="Header">
      <Link className="logo-container" to="/">
        <Logo calssName="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        <Link className="option" to="/sign-in">
          SIGN IN
        </Link>
      </div>
    </div>
  );
};
