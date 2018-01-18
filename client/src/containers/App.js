import React from 'react';
import { Route } from "react-router-dom";
import LoginPage from '../components/pages/LoginPage'
import SignUpPage from '../components/pages/SignUpPage'
import ResetPage from '../components/pages/ResetPage'
import HomePage from '../components/pages/HomePage'
import MainHeader from '../components/MainHeader/MainHeader'
import MainFooter from '../components/MainFooter/MainFooter'
import './App.css'

const App = () => (
  <div className='app'>
    <MainHeader/>
    <Route path='/' exact component={HomePage} />
    <Route path='/login' exact component={LoginPage} />
    <Route path='/signup' exact component={SignUpPage} />
    <Route path='/reset' exact component={ResetPage} />
    <MainFooter/>
  </div>
)

export default App
