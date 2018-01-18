import React from 'react';
import MainHeader from '../components/MainHeader/MainHeader'
import MainFooter from '../components/MainFooter/MainFooter'

const MainLayout = props => (
  <div className='layout-main'>
    <MainHeader/>
    {props.children}
    <MainFooter/>
  </div>
);

export default MainLayout;
