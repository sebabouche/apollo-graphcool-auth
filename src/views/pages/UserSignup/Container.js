import React from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { compose } from "redux"
import { connect } from "react-redux"

import SignUpForm from "./Form"
import { withCreateUser, withSigninUser } from "../../../state/modules/auth/gqls"
import { signIn } from "../../../state/modules/auth/actions"

class SignUpFormContainer extends React.Component {
  static propTypes = {
    handleCreateUser: PropTypes.func.isRequired,
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
    this.props.handleCreateUser({ variables: values })
    .then(() => {
      this.props.handleSigninUser({ variables: values })
      .then((response) => {
        this.props.signInDispatcher(response.data.signinUser.token)
        this.props.history.replace("/")
      })
      .catch((signinErr) => {
        console.log(signinErr)
      })
    })
    .catch((signupErr) => {
      console.log(signupErr)
    })
  }

  render() {
    return (
      <SignUpForm
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
  withCreateUser,
  withSigninUser,
)(SignUpFormContainer)
