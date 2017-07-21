import React from "react"
import PropTypes from "prop-types"
import { Form, Label } from "semantic-ui-react"

const FieldLabel = ({ error, warning }) =>
  <Label basic color={(error && "red") || (warning && "yellow")} pointing>{error}</Label>

FieldLabel.propTypes = {
  error: PropTypes.string,
  warning: PropTypes.string,
}

FieldLabel.defaultProps = {
  error: undefined,
  warning: undefined,
}

const InputField = (
  {
    input,
    label,
    type, meta: { touched, error, warning },
  },
) => (
  <Form.Field>
    <label htmlFor={input.name}>{label}</label>
    <div>
      <Form.Input
        {...input}
        placeholder={label}
        type={type}
        error={touched && error ? true : null}
      />
      {touched && (error || warning) && <FieldLabel error={error} warning={warning} />}
    </div>
  </Form.Field>
)

InputField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
}

export default InputField
