
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import "./complaint-form.css";

class ComplaintForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values =>
        console.log(values)
        )}>
        <label htmlFor="tracking">Tracking number</label>
        <Field component="input" type="text" name="tracking" id="tracking" />
        <label htmlFor="issue">What is your issue?</label>
        <Field component="select" name="issue" id="issue">
          <option value='not-delivered'>My delivery hasn't arrived</option>
          <option value='wrong-item'>The wrong item was delivered</option>
          <option value='missing-part'>Part of my order was missing</option>
          <option value='damaged'>Some of my order arrived damaged</option>
          <option value='other'>Other (give details below)</option>
        </Field>
        <label htmlFor="details">Give more details (optional)</label>
        <Field component="textarea" name="details" id="details" />
        <button type="submit">Submit</button>
      </form>
    );
    }
}

export default reduxForm({
  form: 'complaint',
  initialValues: {
    issue: 'not-delivered'
  }
})(ComplaintForm);