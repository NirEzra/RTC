import React from "react";
import { Switch, Route } from "react-router-dom";

import SignUp from "../firebaseAuth/SignUp"
import Login from "../firebaseAuth/Login"
import PrivateRoute from "../firebaseAuth/PrivateRoute"
import Dashboard from "../firebaseAuth/Dashboard";
import ForgotPassword from '../firebaseAuth/ForgotPassword'
import UpdateProfile from "../firebaseAuth/UpdateProfile";
import ProductScreen from "./ProductScreen";
import HomePage from "./HomePage";
import CartScreen from "./CartScreen";
import Galeryy from "./Galeryy"
import ContactUs from "./ContactUs"
import About from "./About"

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
