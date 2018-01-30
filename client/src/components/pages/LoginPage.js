import React, { Component } from 'react';
import LoginForm from '../Forms/LoginForm';
import { connect } from 'react-redux';
import { userLogin } from '../../actions/auth';

class LoginPage extends Component {
  submit = data => {
    this.props.userLogin(data)
  }

  render = () => <LoginForm submit={this.submit}/>
}

export default connect(null, { userLogin })(LoginPage);
