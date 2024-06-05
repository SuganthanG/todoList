import React, { useState } from 'react';
import ToDoForm from './TodoForm';
import ToDoList from './TodoList';

function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([ ...todos, todo ]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((data, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default Todo;
