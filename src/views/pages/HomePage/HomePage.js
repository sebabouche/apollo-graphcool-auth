import React from "react"

import LandingPage from "./LandingPage"
import Dashboard from "../Dashboard"

export default (props) => (
  props.authenticated ? <Dashboard /> : <LandingPage />
)
