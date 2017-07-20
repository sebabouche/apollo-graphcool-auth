import { compose } from "react-apollo"
import { withUserNetworkOnly } from "../state/modules/auth/gqls"
import DashboardPage from '../components/DashboardPage'

const DashboardPageContainer = compose(
  withUserNetworkOnly,
)(DashboardPage)

export default DashboardPageContainer
