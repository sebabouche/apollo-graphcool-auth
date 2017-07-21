import React from "react"
import PropTypes from "prop-types"
import { compose } from "redux"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import {
  Sidebar,
  Menu,
  Icon,
} from "semantic-ui-react"

import uiActions from "../../state/modules/ui/actions"
import authActions from "../../state/modules/auth/actions"
import MenuItem from "../components/MenuItem"

const SidebarMenu = ({
  authenticated,
  showSidebar,
  toggleSidebar,
  logout
}) => (
  <Sidebar
    as={Menu}
    animation="overlay"
    width="thin"
    visible={showSidebar}
    icon="labeled"
    vertical
    inverted
  >
    <MenuItem
      onClick={toggleSidebar}
      icon="chevron circle left"
    />
    {/* <MenuItem
      to="/"
      icon="home"
      label="Home"
    /> */}
    { authenticated ?
      <div>
        <MenuItem
          onClick={logout}
          icon="log out"
          label="Log out"
        />
      </div>
    :
      <div>
        <MenuItem
          to="/signin"
          icon="sign in"
          label="Log In"
        />
        <MenuItem
          to="/signup"
          icon="checkmark"
          label="Sign up"
        />
      </div>
    }
  </Sidebar>
)

SidebarMenu.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  showSidebar: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  showSidebar: state.ui.showSidebar,
  authenticated: state.auth.authenticated,
})

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(authActions.signOut())
    // TODO check this
    history.push("/")
  },
  toggleSidebar() {
    dispatch(uiActions.toggleSidebar())
  },
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(SidebarMenu)
