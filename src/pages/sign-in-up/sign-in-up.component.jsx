import React from "react";

import "./sign-in-up.style.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
export const SignInUp = () => {
  return (
    <div className="sign-in-up">
      <SignIn />
      <SignUp />
    </div>
  );
};
