# 📝 React Redux Todo App Documentation

This markdown file documents your simple **React + Redux Toolkit** based Todo App with features for adding, updating, and deleting todos.

---

## 🗂 Project Structure

```
src/
├── app/
│   └── store.js
├── components/
│   ├── AddTodo.jsx
│   └── Todos.jsx
├── features/
│   └── todo/
│       └── todoSlice.js
├── App.jsx
├── main.jsx
└── index.css / App.css
```

---

## 🚀 Technologies Used

* React
* Redux Toolkit
* React Redux
* Tailwind CSS (optional styling used)

---


## 🛠️ Setup (Modern Redux with Redux Toolkit)

### Install dependencies

```bash
npm install @reduxjs/toolkit react-redux
```
---

## 📦 State Management with Redux Toolkit

### store.js

```js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
```

### todoSlice.js

```js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Learn Redux" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload.text };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) todo.text = text;
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

---

## ✍️ AddTodo Component

```jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo({ text: input }));
      setInput('');
    }
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a Todo..."
        className="bg-gray-800 rounded text-white px-3 py-1"
      />
      <button type="submit" className="bg-indigo-500 text-white px-6 py-2 rounded">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
```

---

## 📋 Todos Component

```jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleUpdateClick = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id: editId, text: editText }));
    setEditId(null);
    setEditText("");
  };

  const handleCancel = () => {
    setEditId(null);
    setEditText("");
  };

  return (
    <div>
      <h2 className="text-2xl text-white font-bold mb-4">Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center bg-zinc-800 px-4 py-2 mt-2 rounded">
            {editId === todo.id ? (
              <form onSubmit={handleUpdateSubmit} className="flex w-full gap-2">
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-grow bg-gray-700 text-white px-3 py-1 rounded"
                />
                <button type="submit" className="bg-green-600 text-white px-4 py-1 rounded">Save</button>
                <button type="button" onClick={handleCancel} className="bg-gray-500 text-white px-4 py-1 rounded">Cancel</button>
              </form>
            ) : (
              <>
                <span className="text-white">{todo.text}</span>
                <div className="flex gap-2">
                  <button onClick={() => dispatch(removeTodo({ id: todo.id }))} className="bg-red-500 text-white px-4 py-1 rounded">🗑</button>
                  <button onClick={() => handleUpdateClick(todo)} className="bg-blue-500 text-white px-4 py-1 rounded">✏️</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
```

---

## 📘 App.jsx

```jsx
import React from 'react';
import Addtodo from './components/Addtodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Make Todo Today</h1>
      <Addtodo />
      <Todos />
    </div>
  );
}

export default App;
```

---

## 🧩 main.jsx

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

## ✅ Features Implemented

* Add a todo
* Remove a todo
* Update an existing todo
* Reset form after submit
* Cancel update action

---

## 📚 Learnings

* How to use Redux Toolkit (`createSlice`, `configureStore`)
* Dispatching actions and updating state
* Managing local state for form handling
* Clean separation of components and state logic

