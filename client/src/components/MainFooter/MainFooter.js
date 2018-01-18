import React from 'react'
import { Icon } from 'semantic-ui-react'
import './MainFooter.css'

const MainFooter = () => (
  <footer className="main-footer">
    <a href='https://github.com/scarigor/react-redux-todo'>
      <Icon name='github' size='large'/>
    </a>
    <span>2018</span>
  </footer>
);

export default MainFooter
