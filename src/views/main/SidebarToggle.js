import React from "react"
import { connect } from "react-redux"
import { Button, Icon } from "semantic-ui-react"

import uiActions from "../../state/modules/ui/actions"

const SidebarToggle = ({ toggleSidebar }) => (
  <Button icon onClick={toggleSidebar}>
    <Icon name="chevron circle right" />
  </Button>
)

export default connect(null, uiActions)(SidebarToggle)
