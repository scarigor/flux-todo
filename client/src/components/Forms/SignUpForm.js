import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Checkbox, Form, Button } from 'semantic-ui-react';
import isEmail from 'validator/lib/isEmail';
import InlineError from '../Messages/InlineError';
import _ from 'lodash';

class SignupForm extends Component {
  state = {
    data: {
      email: '',
      password: '',
    },
    pw_confirmed: false,
    isChecked: false,
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onToggle = () =>
    this.setState({
      ...this.state, isChecked: !this.state.isChecked
    })


  onSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate(this.state.data);

    this.setState({ errors });

    if (_.isEmpty(errors)) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  onPasswordConfirm = (e) => {
    const { password } = this.state.data;

    if (e.target.value === password) {
      this.setState({
        ...this.state, pw_confirmed: true
      })
    } else { this.setState({
        ...this.state, pw_confirmed: false
      })
    }
  }

  validate = data => {
    const errors = {};
    const { pw_confirmed } = this.state

    if (!isEmail(data.email)) errors.email = 'Invalid email';
    if (!data.password) errors.password = 'Cant be blank!';
    if (!pw_confirmed) errors.pw_confirm = 'Passwords do not match!';

    return errors;
  };

  render() {
    const { data, errors, loading, isChecked, pw_confirmed } = this.state;

    return (
      <Form className='form' onSubmit={this.onSubmit} loading={loading}>
        <Header as='h3'>Sign Up</Header>
        <Form.Field error={!!errors.email}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='example@email.com'
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>

        <Form.Field error={!!errors.password}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={data.password}
            onChange={this.onChange}
            placeholder='Password'
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>

        <Form.Field error={!!errors.pw_confirm}>
          <input
            type='password'
            onChange={this.onPasswordConfirm}
            placeholder='Confirm password'
          />
          {!pw_confirmed &&  <InlineError text={errors.pw_confirm} />}
        </Form.Field>

        <Form.Field>
          <Checkbox
            checked={isChecked}
            onChange={this.onToggle}
            label='Я согласен с правилами использования'
          />
        </Form.Field>

        <Button disabled={!isChecked} primary>Sign Up</Button>
      </Form>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;
