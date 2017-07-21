import React from "react"
import { Grid } from "semantic-ui-react"
import { Link } from "react-router-dom"

import Container from "./Container"

export default ({ location: { search } }) => (
  <Grid centered>
    <Grid.Column width={5} textAlign="center">
      <h1>Inscription</h1>
      <Container />
      <div>
        <p>
          Vous avez déjà un compte ?
          { " " }
          <Link
            to={{
              pathname: "/signin",
              search,
            }}
          >
            Rendez-vous sur la page de connexion
          </Link>
        </p>
      </div>
    </Grid.Column>
  </Grid>
)
