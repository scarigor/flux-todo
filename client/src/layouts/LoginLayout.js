import React from 'react';
import MainHeader from '../components/MainHeader/MainHeader'

const LoginLayout = props => (
  <div className='layout-login'>
    <MainHeader/>
    {props.children}
  </div>
);

export default LoginLayout;
