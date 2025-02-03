import React, { useState } from 'react';
import useTodo from '../store/useTodo';

function Todo() {
  const [input, setInput] = useState('');
  const { todos, addTodo, removeTodo, toggleTodo } = useTodo()

  function handleAddTodo() {
    if (input.trim() !== '') {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div>
      <h1>Vazifalar Ro'yxati</h1>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Vazifa qo'shish"
      />
      <button onClick={handleAddTodo}>Qo'shish</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => toggleTodo(index)}>{todo.completed ? 'Bekor qilish' : 'Bajarish'}</button>
            <button onClick={() => removeTodo(index)}>O'chirish</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo
