import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "../redux/user/user.action";
import { createStructuredSelector } from "reselect";
import "./App.css";
import { selectCurrentUser } from "../redux/user/user.selector";
import HomePage from "../pages/homepage/Homepage.component";
import ShopPage from "../pages/shop-page/shop-page.component";
import CheckoutPage from "../pages/checkout/checkout.component";
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
          <Route exact path="/checkout" component={CheckoutPage} />

          <Route
            exact
            path="/sign-in"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchProps)(App);
