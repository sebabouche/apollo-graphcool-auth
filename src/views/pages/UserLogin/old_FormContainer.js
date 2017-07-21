import React from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { compose } from "redux"
import { connect } from "react-redux"

import UserLoginForm from "./Form"
import { withSigninUser } from "../../../state/modules/auth/gqls"
import { signIn } from "../../../state/modules/auth/actions"

class UserLoginFormContainer extends React.Component {
  static propTypes = {
    handleSigninUser: PropTypes.func.isRequired,
    signInDispatcher: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = { errors: [] }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values) {
    this.props.handleSigninUser({ variables: values })
    .then(({ data }) => {
      this.props.signInDispatcher(data.signinUser.token)
      this.props.history.replace("/")
    })
    .catch((err) => {
      console.log(err.name)
      console.log(err.message)
      // this.setState({
      //   errors: ["There was an error signin in.",]
      // })
    })
  }

  render() {
    return (
      <UserLoginForm
        onSubmit={this.handleSubmit}
        errors={this.state.errors}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signInDispatcher(token) {
    dispatch(signIn(token))
  },
})

export default compose(
  withRouter,
  connect(null, mapDispatchToProps),
  withSigninUser,
)(UserLoginFormContainer)
