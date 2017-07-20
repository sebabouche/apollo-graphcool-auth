import { graphql, gql } from "react-apollo"

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
export const withCreateUser = graphql(createUser, {
  name: "handleCreateUser",
})


const signinUser = gql`
  mutation ($email: String!, $password: String!) {
    signinUser(email: {email: $email, password: $password}) {
      token
    }
  }
`
export const withSigninUser = graphql(signinUser, {
  name: "handleSigninUser",
})

const userQuery = gql`
  query {
    user {
      id
      firstname
      lastname
      email
    }
  }
`
export const withUser = graphql(userQuery)
export const withUserNetworkOnly = graphql(
  userQuery, {
    options: { fetchPolicy: 'network-only' },
  },
)
