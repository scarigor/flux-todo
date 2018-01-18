import React, { Component } from 'react';
import { Header, Message, Button, Form } from 'semantic-ui-react'
import Validator from 'validator';
import InlineError from '../Messages/InlineError'

class ResetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: '',
      },
      loading: false,
      errors: {}
    }
  }

  validate = data => {
    const errors = {}
    if (!Validator.isEmail(data.email))
      errors.email = 'Invalid email!'
    return errors
  }

  handleChange = e => this.setState({
    data: {
      ...this.state.data,
      [e.target.name]: e.target.value
    }
  })

  handleSubmit = () => {
    const errors = this.validate(this.state.data)
    this.setState({errors})

    if (Object.keys(errors).length === 0) {
      this.props
        .submit(this.state.data)
        .catch(error => this.setState({errors: error.response.data.errors}))
    }
  }

  render() {
    const { data, errors } = this.state
    return (
      <Form className='form' onSubmit={this.handleSubmit}>
        <Header as='h3'>Reset password</Header>

        {errors.global && <Message negative header={errors.global} />}

        <Form.Field error={!!errors.email}>
          <label htmlFor='email'>Email</label>
          <input
            onChange={this.handleChange}
            id='email'
            name='email'
            type='email'
            placeholder='Введите адрес эл. почты'
            value={data.email}
          /> {errors.email && <InlineError text={errors.email}/>}
        </Form.Field>

        <Button primary type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default ResetForm;
