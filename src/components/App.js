import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "../pages/homepage/Homepage.component";
import ShopPage from "../pages/shop-page/shop-page.component";
import { SignInUp } from "../pages/sign-in-up/sign-in-up.component";
import { Header } from "./header/header.component";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
