import React, {Component} from 'react';
import { Message, Button, Checkbox, Form } from 'semantic-ui-react'
import Validator from 'validator';
import InlineError from '../../Messages/InlineError/InlineError'
import './LoginFrom.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: '',
        password: ''
      },
      loading: false,
      errors: {}
    }
  }

  validate = data => {
    const errors = {}
    if (!Validator.isEmail(data.email))
      errors.email = 'Invalid email!'
    if (!data.password)
      errors.password = 'Cant be blank!'
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
      <Form className='login-form' onSubmit={this.handleSubmit}>

        {errors.global && <Message negative header={errors.global} />}

        <Form.Field error={!!errors.email}>
          <label htmlFor='email'>Email</label>
          <input onChange={this.handleChange} id='email' name='email' type='email' placeholder='Введите адрес эл. почты' value={data.email}/> {errors.email && <InlineError text={errors.email}/>}
        </Form.Field>

        <Form.Field error={!!errors.password}>
          <label htmlFor='password'> Пароль</label>
          <input onChange={this.handleChange} id='password' name='password' type='password' placeholder='Введите пароль' value={data.password}/> {errors.password && <InlineError text={errors.password}/>}
        </Form.Field>

        <Form.Field>
          <Checkbox label='Я согласен с правилами использования'/>
        </Form.Field>
        <Button primary type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default LoginForm;
