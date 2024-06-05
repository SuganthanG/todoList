import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes,Link} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import ToDoList from './components/TodoList';
import './styles.css'
function App() {
  return (
    <div className="wrapper">
      <ToDoList />
    </div>
  );
}

export default App;