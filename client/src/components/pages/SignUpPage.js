import React, { Component } from 'react';
import SignUpForm from '../Forms/SignUpForm';
import { connect } from 'react-redux';
import { getLoadingStatus } from '../../reducers/auth';
import { userSignUp } from '../../actions/auth';

class SignUpPage extends Component {
  submit = data => {
    this.props.userSignUp(data)
  }

  render = () =>
     <SignUpForm
      isLoading={this.props.isLoading}
      submit={this.submit}
    />
}

const mapStateToProps = state => ({
  isLoading: getLoadingStatus(state)
})

export default connect(mapStateToProps, { userSignUp })(SignUpPage);
