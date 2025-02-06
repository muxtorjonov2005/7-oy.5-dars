import React, { useState } from "react";
import useTodo from "../store/useTodo";

function Todo() {
  const [input, setInput] = useState("");
  const { todos, addTodo, removeTodo, toggleTodo } = useTodo();

  function handleAddTodo() {
    if (input.trim() !== "" && input.length > 4) {
      addTodo(input);
      setInput("");
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-center font-semibold text-xl">Vazifalar Ro'yxati</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Vazifa qo'shish"
          className="p-2"
        />
        <button onClick={handleAddTodo} className="p-2 bg-blue-500 rounded text-white">Qo'shish</button>
      </div>
      <ul className="flex flex-col gap-4">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between"
          >
            <p className="text-lg capitalize" style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</p>
            <div className="flex gap-2">
              <button onClick={() => toggleTodo(index)} className="p-2 rounded text-white" style={{backgroundColor: todo.completed ? 'orange' : 'green' }}>
                {todo.completed ? "Bekor qilish" : "Bajarish"}
              </button>
              <button onClick={() => removeTodo(index)} className="p-2 rounded bg-red-500 text-white">O'chirish</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
