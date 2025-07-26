import React, { useState } from 'react';
import './App.css'; // Make sure to style your components

function App() {
  // State for the counter
  const [count, setCount] = useState(0);

  // State for the name input
  const [name, setName] = useState('');

  // State for the todo list
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  // Increment function
  const increment = () => setCount(count + 1);

  // Decrement function
  const decrement = () => setCount(count - 1);

  // Reset function
  const reset = () => setCount(0);

  // Add todo function
  const addTodo = () => {
    if (todoInput.trim() === '') return; // Prevent empty todos
    setTodos([...todos, todoInput]);
    setTodoInput('');
  };

  // Remove todo function
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>React Assessment</h1>

      {/* Counter Section */}
      <div>
        <h2>Counter</h2>
        <div>{count}</div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
      </div>

      {/* Greeting Section */}
      <div>
        <h2>Greeting</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Todo List Section */}
      <div>
        <h2>Todo List</h2>
        <input
          type="text"
          placeholder="Add a new todo"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => removeTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
  </div>
  </div>
  );
  }
export default App;

