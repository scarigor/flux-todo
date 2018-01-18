import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './MainHeader.css'

const MainHeader = () => (
  <header className="main-header">
    <Logo/>
    <Link to='/login'>Login</Link>
  </header>
);

export default MainHeader
