import React from 'react';
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoContent from '../TodoContent/TodoContent'
import './TodoApp.css';

const TodoApp = () => (
  <div className='todo-app'>
    <TodoHeader />
    <TodoContent />
  </div>
);

export default TodoApp;
