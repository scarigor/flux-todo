import React, { Component } from 'react';
import LoginForm from '../Forms/LoginForm/LoginForm';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  submit = data =>
    this.props.login(data).then(() => this.props.history.push('/'))

  render() {
    return (
      <LoginForm submit={this.submit}/>
    );
  }

}

export default connect(null, { login })(LoginPage);
