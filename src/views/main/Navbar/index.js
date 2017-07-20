import { connect } from "react-redux"
import { browserHistory } from "react-router"

import { signOut } from "../../../state/modules/auth/actions"
import Navbar from "./Navbar"

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
})

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(signOut())
    browserHistory.push("/")
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar)
