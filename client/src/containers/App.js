import React from 'react';
import { Switch } from "react-router-dom";
import GuestRoute from '../routes/GuestRoute';
import UserRoute from '../routes/UserRoute';
import LoginPage from '../components/pages/LoginPage'
import MainLayout from '../layouts/MainLayout';
import LoginLayout from '../layouts/LoginLayout';
import SignUpPage from '../components/pages/SignUpPage';
import ResetPage from '../components/pages/ResetPage';
import HomePage from '../components/pages/HomePage';
import Dashboard from '../components/pages/Dashboard';
import './App.css'

const App = () => (
  <div className='app'>
    <Switch>
      <GuestRoute exact path="/" layout={MainLayout} component={HomePage} />
      <GuestRoute path="/login" layout={LoginLayout} component={LoginPage} />
      <GuestRoute path="/signup" layout={LoginLayout} component={SignUpPage} />
      <GuestRoute path="/reset" layout={LoginLayout} component={ResetPage} />
      <UserRoute path="/dashboard" layout={LoginLayout} component={Dashboard} />
    </Switch>
  </div>
);

export default App;
