import React from 'react';
import { withRouter } from 'react-router';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';

import SignUpForm from '../components/SignUpForm';
import { signIn } from '../actions';

class SignUpFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values)
    this.props.handleSignup({ variables: values })
    .then((response) => {
      console.log("user created")
      this.props.handleSignin({ variables: values })
      .then((response) => {
        console.log(response.data)
        this.props.signInDispatcher(response.data.signinUser.token);
      })
      this.props.router.replace('/');
    })
    .catch((err) => {
      console.error(err);
    });
  }

  render() {
    return (
      <SignUpForm
        onSubmit={this.handleSubmit}
        errors={this.state.errors}
      />
    );
  }
}

const createUser = gql`
  mutation (
    $email: String!,
    $password: String!,
    $firstname: String!,
    $lastname: String!,
    # $emailSubscription: Boolean!
  ) {
    createUser(
      authProvider: {
        email: {
          email: $email,
          password: $password
        }
      },
      firstname: $firstname,
      lastname: $lastname,
      # emailSubscription: $emailSubscription
    ) {
      id
    }
  }
`

const signinUser = gql`
  mutation ($email: String!, $password: String!) {
    signinUser(email: {email: $email, password: $password}) {
      token
    }
  }
`

const withHandleSignup = graphql(createUser, {
  name: "handleSignup",
});

const withHandleSignin = graphql(signinUser, {
  name: "handleSignin",
}

)
const mapDispatchToProps = (dispatch) => ({
  signInDispatcher(token) {
    dispatch(signIn(token));
  }
});

export default compose(
  withRouter,
  connect(null, mapDispatchToProps),
  withHandleSignup,
  withHandleSignin,
)(SignUpFormContainer)
