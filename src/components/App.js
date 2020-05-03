import React from "react";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "../redux/user/user.action";
import "./App.css";

import HomePage from "../pages/homepage/Homepage.component";
import ShopPage from "../pages/shop-page/shop-page.component";
import { SignInUp } from "../pages/sign-in-up/sign-in-up.component";
import Header from "./header/header.component";
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snap) => {
          setCurrentUser({
            id: snap.id,
            ...snap.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
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
}

const mapDispatchProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchProps)(App);
