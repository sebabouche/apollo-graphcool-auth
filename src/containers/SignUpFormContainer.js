import React from 'react'
import { withRouter } from 'react-router'
import { compose } from 'react-apollo'
import gql from 'graphql-tag'
import { connect } from 'react-redux'

import SignUpForm from '../components/SignUpForm'
import { withCreateUser, withSigninUser } from "../state/modules/auth/gqls"
import { signIn } from '../actions'

class SignUpFormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { errors: [] }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values) {
    console.log(values)
    this.props.handleCreateUser({ variables: values })
    .then((response) => {
      console.log("user created")
      this.props.handleSigninUser({ variables: values })
      .then((response) => {
        console.log(response.data)
        this.props.signInDispatcher(response.data.signinUser.token)
      })
      this.props.router.replace('/')
    })
    .catch((err) => {
      console.error(err)
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

const mapDispatchToProps = (dispatch) => ({
  signInDispatcher(token) {
    dispatch(signIn(token))
  }
})

export default compose(
  withRouter,
  connect(null, mapDispatchToProps),
  withCreateUser,
  withSigninUser,
)(SignUpFormContainer)
