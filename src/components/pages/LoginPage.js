import React, { Component } from 'react';
import LoginForm from '../Forms/LoginForm/LoginForm';

class LoginPage extends Component {
  constructor(props) {
    super(props);

  }

  submit = (data) => {
    console.log(data)
  }

  render() {
    return (
      <LoginForm submit={this.submit}/>
    );
  }

}

export default LoginPage;
