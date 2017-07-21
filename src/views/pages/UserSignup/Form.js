import React from "react"
import { Field, reduxForm } from "redux-form"
import { Form, Message, Button } from "semantic-ui-react"

import InputField from "../../components/InputField"

const SignUpForm = ({
  error,
  handleSubmit,
  pristine,
  submitting,
  reset,
}) => (
  <Form onSubmit={handleSubmit}>
    {
      error &&
      <Message
        icon="bug"
        header={error}
        negative
      />
    }
    <Field
      type="firstname"
      name="firstname"
      component={InputField}
      placeholder="Firstname"
      label="Firstname"
    />

    <Field
      type="lastname"
      name="lastname"
      component={InputField}
      placeholder="Lastname"
      label="Lastname"
    />

    <Field
      type="email"
      name="email"
      component={InputField}
      placeholder="Email"
      label="Email"
    />

    <Field
      name="password"
      component={InputField}
      type="password"
      placeholder="Mot de passe"
      label="Mot de passe"
    />

    <Button
      type="submit"
      color="green"
      disabled={pristine || submitting}
      fluid
    >
      Sign up
    </Button>
    <p>
      <Button
        type="button"
        disabled={pristine || submitting}
        onClick={reset}
      >
        Effacer
      </Button>
    </p>
  </Form>
)

const validate = (values) => {
  const errors = {}

  if (!values.firstname) {
    errors.firstname = "Required"
  }

  if (!values.lastname) {
    errors.lastname = "Required"
  }

  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }

  if (!values.password) {
    errors.password = "Required"
  } else if (values.password.length <= 3) {
    errors.password = "Must be at least 4 characters"
  }

  return errors
}

export default reduxForm({
  form: "signup",
  validate
})(SignUpForm)
