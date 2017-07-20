import React from "react"
import { Switch, Route } from "react-router-dom"

import Navbar from "./Navbar"
import RequireAuth from "../enhancers/RequireAuth"
import NoMatch from "../pages/NoMatch"
import HomePage from "../pages/HomePage"
import UserSignup from "../pages/UserSignup"
import UserLogin from "../pages/UserLogin"
import Dashboard from "../pages/Dashboard"

export default () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/signup" component={UserSignup} />
      <Route path="/signin" component={UserLogin} />
      <Route path="/dashboard" component={RequireAuth(Dashboard)} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)
