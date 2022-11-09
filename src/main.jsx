import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import TodoContainer from './components/TodoContainer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>To-Do Applet</h1>
    <TodoContainer />
  </React.StrictMode>,
);
