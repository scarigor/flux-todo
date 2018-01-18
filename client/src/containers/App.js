import React from 'react';
import { Route, Switch } from "react-router-dom";

import LoginPage from '../components/pages/LoginPage'
import SignUpPage from '../components/pages/SignUpPage'
import ResetPage from '../components/pages/ResetPage'
import HomePage from '../components/pages/HomePage'

import MainHeader from '../components/MainHeader/MainHeader'
import MainFooter from '../components/MainFooter/MainFooter'

import MainLayout from '../layouts/MainLayout';
import LoginLayout from '../layouts/LoginLayout';

import AppRoute from '../routes/AppRoute';

import './App.css'

const App = () => (
  <div className='app'>
    <Switch>
      <AppRoute exact path="/" layout={MainLayout} component={HomePage} />
      <AppRoute path="/login" layout={LoginLayout} component={LoginPage} />
      <AppRoute path="/signup" layout={LoginLayout} component={SignUpPage} />
      <AppRoute path="/reset" layout={LoginLayout} component={ResetPage} />
    </Switch>
  </div>
)

export default App;
