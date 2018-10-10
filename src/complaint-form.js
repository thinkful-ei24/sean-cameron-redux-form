
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import "./complaint-form.css";
import {required, nonEmpty, fiveChar, charNumber} from './validators';
import Input from './input';
import {register} from './actions';

class ComplaintForm extends React.Component {
  render() {
    if(this.props.submitSucceeded) {
      return <div>{'Thanks for complaining :)'}</div>
    }
    return (
      <form onSubmit={this.props.handleSubmit(values =>
        this.props.dispatch(register(values))
        )}>
        <Field component={Input} element="input" 
          type="text" name="trackingNumber" id="trackingNumber" label="Tracking Number"
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