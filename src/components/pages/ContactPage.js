import React from 'react'
import { set, assign } from 'lodash/object'
import Helmet from 'react-helmet'
import { Segment } from 'semantic-ui-react'
import classNames from 'classnames'

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        values: {
          fullName: '',
          email: '',
          message: ''
        },
        errors: {}
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    alert(JSON.stringify(this.state.form.values));
  }

  clearError(fieldName) {
    this.setState(set(
      assign({}, this.state),
      ['form', 'errors', fieldName],
      false
    ));
  }

  changeError(fieldName) {
    this.setState(set(
      assign({}, this.state),
      ['form', 'errors', fieldName],
      true
    ));
  }

  handleChange(fieldName) {
    return (e) => {
      switch(fieldName) {
        case 'fullName':
          this.clearError(fieldName);

          if (e.target.value.length < 3)
            this.changeError(fieldName);
          break;

        case 'email':
          this.clearError(fieldName);

          if (e.target.value.length < 3)
            this.changeError(fieldName);
          break;

        case 'message':
          this.clearError(fieldName);

          if (e.target.value.length < 3)
            this.changeError(fieldName);
          break;
      }

      this.setState(set(
        assign({}, this.state),
        ['form', 'values', fieldName],
        e.target.value
      ))
    }
  }

  render() {
    const {fullName, email, message} = this.state.form.values;

    return (
      <div>
        <Segment>
          <h2>Contact</h2>
          <form className="ui form"  onSubmit={this.onSubmit}>
            <div className="ui field">
              <Text
                inputType="text"
                label="Full name"
                name="fullName"
                value={fullName}
                error={this.state.form.errors.fullName}
                onChange={this.handleChange('fullName')}
              />
              <Text
                inputType="email"
                label="Email"
                name="email"
                value={email}
                error={this.state.form.errors.email}
                onChange={this.handleChange('email')}
              />
              <TextArea
                label="Message"
                name="message"
                value={message}
                error={this.state.form.errors.message}
                onChange={this.handleChange('message')}
              />
            </div>
            <input className="ui button primary" type="submit" value="submit" />
          </form>
          <Helmet title="Contact to Company"/>
        </Segment>
      </div>
    )
  }
}

export default ContactPage

const Text  = ({inputType, value, label, name, error, onChange}) => (
  <div className={classNames('ui field', { error })}>
    <label htmlFor={name}>{label}:</label>
    <input
      name={name}
      id={name}
      className="ui input"
      type={inputType}
      value={value}
      onChange={onChange}
    />
  </div>
);

const TextArea  = ({label, value, name, error, onChange}) => (
  <div className={classNames('ui field', { error })}>
    <label htmlFor={name}>{label}:</label>
    <textarea
      name={name}
      id={name}
      className="ui input"
      value={value}
      onChange={onChange}
    />
  </div>
);
