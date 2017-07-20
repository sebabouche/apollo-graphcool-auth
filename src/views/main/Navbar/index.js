import { compose } from "redux"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import history from "../../../utils/history"
import { signOut } from "../../../state/modules/auth/actions"
import Navbar from "./Navbar"

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
})

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(signOut())
    // TODO check this
    history.push("/")
  },
})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Navbar)
