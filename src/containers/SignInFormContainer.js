import React from 'react'
import { withRouter } from 'react-router'
import { compose } from "redux"
import { connect } from 'react-redux'

import SignInForm from '../components/SignInForm'
import { withSigninUser } from "../state/modules/auth/gqls"
import { signIn } from '../actions'

class SignInFormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { errors: [] }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values) {
    this.props.handleSigninUser({ variables: values })
    .then((response) => {
      this.props.signInDispatcher(response.data.signinUser.token)
      this.props.router.replace('/')
    })
    .catch((err) => {
      console.log(err)
      console.log(err.name)
      console.log(err.message)
    })
  }

  render() {
    return (
      <SignInForm
        onSubmit={this.handleSubmit}
        errors={this.state.errors}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  signInDispatcher(token) {
    dispatch(signIn(token))
  }
})

export default compose(
  withRouter,
  connect(null, mapDispatchToProps),
  withSigninUser,
)(SignInFormContainer)
