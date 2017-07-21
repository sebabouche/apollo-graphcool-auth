import React from "react"
import { Link } from "react-router-dom"
import { Grid } from "semantic-ui-react"

import FormContainer from "./Container"

export default ({ location }) => {
  const { search } = location
  return (
    <div>
      <Grid centered>
        <Grid.Column width={5} textAlign="center">
          <h1>Log in</h1>
          <FormContainer />
        </Grid.Column>
      </Grid>
      <div style={{ textAlign: "center" }}>
        <p>
          Pas encore inscrit.e ?
          { " " }
          <Link
            to={{
              pathname: "/signup",
              search,
            }}
          >
            Rendez-vous sur la page d&apos;inscription
          </Link>
        </p>
      </div>
    </div>
  )
}
