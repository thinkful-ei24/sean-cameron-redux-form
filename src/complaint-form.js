
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import "./complaint-form.css";

class ComplaintForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values =>
        this.props.dispatch(register(values))
        )}>
        <label htmlFor="tracking">Tracking number</label>
        <Field component="input" type="text" name="tracking" id="tracking" />
        <label htmlFor="issue-dropdown">What is your issue?</label>
        <Field component="select" name="issue-dropdown" id="issue-dropdown">
          <option>My delivery hasn't arrived</option>
          <option>The wrong item was delivered</option>
          <option>Part of my order was missing</option>
          <option>Some of my order arrived damaged</option>
          <option>Other (give details below)</option>
        </Field>
        <label htmlFor="details">Give more details (optional)</label>
        <Field component="textarea" name="details" id="details" />
        <button type="submit">Submit</button>
      </form>
    );
    }
}

export default reduxForm({
  form: 'complaint'
})(ComplaintForm);