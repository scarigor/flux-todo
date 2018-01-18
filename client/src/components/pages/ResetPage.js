import React, { Component } from 'react';
import ResetForm from '../Forms/ResetForm/ResetForm';

class ResetPage extends Component {
  submit = data =>
    this.props.userLogin(data).then(() => this.props.history.push('/'))

  render = () => <ResetForm submit={this.submit}/>
}

export default ResetPage
// export default connect(null, { userLogin })(ResetPage);
