import { create } from 'zustand';

const useTodo = create((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({
    todos: [...state.todos, { text: todo, completed: false }]
  })),
  removeTodo: (index) => set((state) => ({
    todos: state.todos.filter((_, i) => i !== index)
  })),
  toggleTodo: (index) => set((state) => ({
    todos: state.todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    )
  })),
}));

export default useTodo
