import { compose } from "redux"
import { withUserNetworkOnly } from "../../../state/modules/auth/gqls"
import Dashboard from "./Dashboard"

const DashboardPage = compose(
  withUserNetworkOnly,
)(Dashboard)

export default DashboardPage
