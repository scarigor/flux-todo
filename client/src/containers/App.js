import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route } from "react-router-dom";
import LoginPage from '../components/pages/LoginPage'
import HomePage from '../components/pages/HomePage'
import './App.css'

const App = () => (
  <div className='todo-app'>
    <Route path='/' exact component={HomePage} />
    <Route path='/login' exact component={LoginPage} />
  </div>
)

export default App
