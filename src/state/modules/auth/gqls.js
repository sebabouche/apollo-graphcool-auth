import { graphql } from "react-apollo"
import gql from 'graphql-tag'

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

export const withCreateUser = graphql(createUser, {
  name: "handleCreateUser",
})

export const withSigninUser = graphql(signinUser, {
  name: "handleSigninUser",
})
