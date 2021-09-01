import React from "react";
import { Switch, Route } from "react-router-dom";

import SignUp from "./SignUp"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import Dashboard from "./Dashboard";
import ForgotPassword from './ForgotPassword'
import UpdateProfile from "./UpdateProfile";
import ProductScreen from "../components/ProductScreen";
import HomePage from "../components/HomePage";
import CartScreen from "../components/CartScreen";
import Galeryy from "../components/Galeryy"
import ContactUs from "../components/ContactUs"
import About from "../components/About"

function AppRouter() {
  return (
    <Switch>

      {/* <PrivateRoute exact path="/" component={HomePage} /> */}
      <Route exact path="/" component={HomePage} />
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/cart/:id?" component={CartScreen} />
      <Route path="/login" component={Login} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/updateProfile" component={UpdateProfile} />
      <Route path="/gallery" component={Galeryy} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/about" component={About} />
    </Switch>

  )
}

export default AppRouter;
