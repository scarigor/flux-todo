import React, { Component } from 'react';
import SignUpForm from '../Forms/SignUpForm/SignUpForm';
import { connect } from 'react-redux';
import { userSignUp } from '../../actions/auth';

class SignUpPage extends Component {
  submit = data =>
    this.props.userSignUp(data).then(() => this.props.history.push('/'))

  render = () => <SignUpForm submit={this.submit}/>
}

export default connect(null, { userSignUp })(SignUpPage);
