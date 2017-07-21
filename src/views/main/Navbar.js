import React from "react"
import { withRouter } from "react-router-dom"
import { compose } from "redux"
import { connect } from "react-redux"
import { Menu } from "semantic-ui-react"

import history from "../../utils/history"
import { signOut } from "../../state/modules/auth/actions"
import MenuItem from "../components/MenuItem"

const Navbar = ({
  logout,
  authenticated,
}) => {
  const innerLogout = (e) => {
    e.preventDefault()
    logout()
  }

  const HomeNav = () =>
    <MenuItem
      activeOnlyWhenExact
      to={{ pathname: "/" }}
      label="Wunjo"
    />

  const links = (
    (authenticated) ? (
      <Menu.Menu>
        <HomeNav />
        <MenuItem
          icon="log out"
          onClick={innerLogout}
          label="Log out"
        />
      </Menu.Menu>
    ) : (
      <Menu.Menu>
        <HomeNav />
        <MenuItem
          activeOnlyWhenExact
          icon="sign in"
          to={{ pathname: "/signin" }}
          label="Log in"
        />
        <MenuItem
          activeOnlyWhenExact
          icon="checkmark"
          to={{ pathname: "/signup" }}
          label="Sign up"
        />
      </Menu.Menu>
    )
  )

  return (
    <Menu>
      { links }
    </Menu>
  )
}

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
