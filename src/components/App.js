import React from "react";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

import "./App.css";

import HomePage from "../pages/homepage/Homepage.component";
import ShopPage from "../pages/shop-page/shop-page.component";
import { SignInUp } from "../pages/sign-in-up/sign-in-up.component";
import { Header } from "./header/header.component";
class App extends React.Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snap) => {
          this.setState({
            currentUser: {
              id: snap.id,
              ...snap.data(),
            },
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
