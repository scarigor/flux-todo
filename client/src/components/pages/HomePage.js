import React from 'react';
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoContent from '../TodoContent/TodoContent'

const HomePage = props => {
  return (
    <div>
      <TodoHeader />
      <TodoContent />
    </div>
  )
}

export default HomePage
