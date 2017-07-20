import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import Landing from "../Landing"
import Dashboard from "../Dashboard"

const Home = props => (
  props.authenticated ? <Dashboard /> : <Landing />
)

Home.propTypes = {
  authenticated: PropTypes.bool,
}

Home.defaultProps = {
  authenticated: false,
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
})

export default connect(mapStateToProps)(Home)
