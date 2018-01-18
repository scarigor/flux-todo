import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Checkbox, Form, Button } from 'semantic-ui-react';
import isEmail from 'validator/lib/isEmail';
// import InlineError from '../messages/InlineError';

class SignupForm extends Component {
  state = {
    data: {
      email: '',
      password: '',
      password_check: '',
    },
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
    // console.log(this.state.data.checked)


  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);

    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  isFilled(data) {
    for (let field of Object.keys(data)) {
      if (!data[field]) return false
    }
    return true;
  }

  validate = data => {
    const errors = {};

    if (!isEmail(data.email)) errors.email = 'Invalid email';
    if (!data.password) errors.password = 'Cant be blank';

    return errors;
  };

  render() {
    const { data, errors, loading, isChecked } = this.state,
          isFilled = this.isFilled(data) && isChecked;

    return (
      <Form className='form' onSubmit={this.onSubmit} loading={loading}>
        <Header as='h3'>Sign Up</Header>
        <Form.Field error={!!errors.email}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='email@email.com'
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <h1>Lol</h1>}
          {/* {errors.email && <InlineError text={errors.email} />} */}
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
          {errors.password && <h1>Lol</h1>}
          {/* {errors.password && <InlineError text={errors.password} />} */}
        </Form.Field>

        <Form.Field error={!!errors.password}>
          <input
            type='password'
            id='password_check'
            name='password_check'
            value={data.password_check}
            onChange={this.onChange}
            placeholder='Repeat password'
          />
          {errors.password && <h1>Lol</h1>}
          {/* {errors.password && <InlineError text={errors.password} />} */}
        </Form.Field>

        <Form.Field>
          <Checkbox
            checked={data.isChecked}
            onChange={this.onToggle}
            label='Я согласен с правилами использования'
          />
        </Form.Field>

        <Button disabled={!isFilled} primary>Sign Up</Button>
      </Form>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;
