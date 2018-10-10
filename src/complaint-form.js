
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import "./complaint-form.css";
import {required, nonEmpty, fiveChar, charNumber} from './validators';
import Input from './input';

class ComplaintForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values =>
        console.log(values)
        )}>
        <Field component={Input} element="input" 
          type="text" name="tracking" id="tracking" label="Tracking Number"
          validate={[required, nonEmpty, fiveChar, charNumber]} />
        <Field component={Input} element="select" name="issue" id="issue"
          label="What is your issue?">
          <option value='not-delivered'>My delivery hasn't arrived</option>
          <option value='wrong-item'>The wrong item was delivered</option>
          <option value='missing-part'>Part of my order was missing</option>
          <option value='damaged'>Some of my order arrived damaged</option>
          <option value='other'>Other (give details below)</option>
        </Field>
        <Field component={Input} element="textarea" name="details" id="details"
          label="Give more details (optional)" />
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