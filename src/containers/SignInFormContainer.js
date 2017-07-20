import React from "react"
import { withRouter } from "react-router"
import { compose } from "redux"
import { connect } from "react-redux"

import SignInForm from "../components/SignInForm"
import { withSigninUser } from "../state/modules/auth/gqls"
import { signIn } from "../actions"

class SignInFormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { errors: [] }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values) {
    this.props.handleSigninUser({ variables: values })
    .then(({ data }) => {
      if (data.signinUser.errors.length <= 0) {
        this.props.signInDispatcher(data.signinUser.token)
        this.props.router.replace("/")
      } else {
        console.log("Not there")
        this.setState({
          errors: data.signinUser.errors
        })
      }
    })
    .catch((err) => {
      console.log(err.name)
      console.log(err.message)
      this.setState({
        errors: ["There was an error signin in.",]
      })
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
