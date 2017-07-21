import React from "react"
import { Switch, Route } from "react-router-dom"
import { Sidebar, Segment } from "semantic-ui-react"

import SidebarMenu from "./SidebarMenu"
import SidebarToggle from "./SidebarToggle"
import RequireAuth from "../enhancers/RequireAuth"
import NoMatch from "../pages/NoMatch"
import Home from "../pages/Home"
import UserSignup from "../pages/UserSignup"
import UserLogin from "../pages/UserLogin"
import Dashboard from "../pages/Dashboard"

export default () => (
  <div>
    <Sidebar.Pushable as={Segment}>
      <SidebarMenu />
      <Sidebar.Pusher>
        <SidebarToggle />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={UserSignup} />
          <Route path="/signin" component={UserLogin} />
          <Route path="/dashboard" component={RequireAuth(Dashboard)} />
          <Route component={NoMatch} />
        </Switch>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </div>
)
