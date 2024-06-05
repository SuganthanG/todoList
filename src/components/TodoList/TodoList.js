import React from 'react';

function ToDoList({ todos, removeTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index} className="todo">
          <span>{todo.text}</span>
          <span>{todo.date}</span>
          <button onClick={() => removeTodo(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
