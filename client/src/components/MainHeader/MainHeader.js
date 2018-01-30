import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { connect } from "react-redux";
import './MainHeader.css'
import _ from 'lodash';
import { userLogout } from '../../actions/auth';

const MainHeader = props => (
  <header className="main-header">
    <Logo/>
    { props.isAuthenticated ?
      <Link to='/login'>Login</Link> :
      <Link to='/login' onClick={() => props.userLogout()}>Logout</Link>
    }
  </header>
);

const mapStateToProps = state => ({
    isAuthenticated: _.isEmpty(state.auth.user)
});

export default connect(mapStateToProps, { userLogout })(MainHeader);
