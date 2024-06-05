import React, { useState } from 'react';

function ToDoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !date) return;
    addTodo({
      text: value,
      date: date,
      isCompleted: false,
    });
    setValue('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add new todo"
      />
      <input
        type="date"
        className="input"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ToDoForm;
