
## 🧠 What is Redux?

**Redux** is a predictable state management library for JavaScript apps, commonly used with **React**. It allows you to **manage and centralize the state** of your application in one store.

> Think of Redux as a **global brain** for your app’s state, accessible from any component, without prop drilling.


## 📜 A Brief History of Redux

* **Before Redux**: Developers used **component state** (`useState`) and **Context API** to pass state between components. This worked for small apps but became messy as apps grew.
* **Flux (by Facebook)**: Introduced the **unidirectional data flow** concept, which inspired Redux.
* **Redux (2015)**: Created by **Dan Abramov** and **Andrew Clark**, Redux was inspired by **Flux** and **Elm architecture**. It simplified state management using:

  * A single source of truth (store)
  * Actions
  * Pure functions (reducers)

---

## 🔁 Redux Core Concepts

### 1. **Store**

The global object that holds the entire state of the app.

### 2. **Action**

An object that describes what happened. It must have a `type`.

```js
{
  type: 'ADD_TODO',
  payload: 'Buy milk'
}
```

### 3. **Reducer**

A pure function that takes the previous state and an action, and returns the new state.

```js
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]
    default:
      return state
  }
}
```

### 4. **Dispatch**

A method to send an action to the reducer to update the state.

```js
dispatch({ type: 'ADD_TODO', payload: 'Buy milk' })
```

### 5. **Selector**

A function that extracts data from the Redux store.

---

## 🥉 How Redux Works — Visualization

```plaintext
       +-------------+       dispatch(action)      +---------------+
       |   Component |  -------------------------> |     Store     |
       +-------------+                            +---------------+
                                                         |
                                                         | state change
                                                         v
                                              +---------------------+
                                              |     Reducer         |
                                              +---------------------+
                                                         |
                                                         v
                                              +---------------------+
                                              |    New State        |
                                              +---------------------+
```

---

## 🛠️ Setup (Modern Redux with Redux Toolkit)

### Step 1: Install dependencies

```bash
npm install @reduxjs/toolkit react-redux
```

### Step 2: Create a Redux Slice

```js
// features/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    }
  }
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

### Step 3: Configure Store

```js
// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});
```

### Step 4: Provide Store to App

```jsx
// main.jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### Step 5: Use Redux in Components

```jsx
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todoSlice";

function TodoForm() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAdd = () => {
    dispatch(addTodo("Learn Redux"));
  }

  return <button onClick={handleAdd}>Add</button>
}
```
---
🧩 Async with Redux (Thunk)
```
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async () => {
    const response = await fetch('/api/data');
    return await response.json();
  }
);
```
---
📂 Recommended Folder Structure
```
src/
├── app/
│   └── store.js
├── features/
│   └── todo/
│       ├── todoSlice.js
│       └── TodoComponent.jsx
└── index.js
```
---

## ⚔️ Redux vs Context API

| Feature                | Context API                      | Redux                                  |
| ---------------------- | -------------------------------- | -------------------------------------- |
| **Purpose**            | Prop drilling avoidance          | Global state management                |
| **Scalability**        | Not ideal for large apps         | Designed for large apps                |
| **Boilerplate**        | Less                             | More (but reduced with Redux Toolkit)  |
| **DevTools**           | Limited                          | Advanced Redux DevTools support        |
| **Performance**        | Can cause unnecessary re-renders | Better performance optimization        |
| **Middleware support** | No built-in                      | Built-in middleware (e.g. thunk, saga) |
| **Testing**            | Limited                          | Easy to test pure reducers             |
| **Data Flow**          | One-way                          | Strictly one-way                       |

### 🔍 When to Use Redux?

Use Redux **if**:

* Your app has **complex shared state** (e.g. auth, UI theme, cart, user data).
* You want **predictable state transitions**.
* You need **middleware** (like logging, async handling with Redux Thunk).
* Your team prefers **DevTools debugging and tracing actions**.

Use Context API **if**:

* Your app is **small to medium size**.
* You only need to pass a few values deeply (e.g. user theme, language).
* You want **less boilerplate**.

---

## 🔌 Additional Redux Concepts (Advanced)

* **Redux Thunk**: For async operations like API calls.
* **Redux Toolkit**: Simplifies Redux setup (recommended).
* **Selectors (Reselect)**: For memoized computed state.
* **Middleware**: Extend Redux logic (logging, auth).
* **Redux Persist**: Saves Redux state in localStorage.

---
## 🧪 DevTools

Use [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) for:

* Action logging
* State tracking
* Time-travel debugging

---
## 📚 Resources

* [Redux Docs](https://redux.js.org/)
* [Redux Toolkit Docs](https://redux-toolkit.js.org/)
* [React Redux Docs](https://react-redux.js.org/)

---

## ✅ Summary

* Redux is a powerful global state management library.
* Solves problems of prop drilling, state duplication, and unstructured state logic.
* Ideal for large-scale applications with complex state needs.
* Redux Toolkit has made it easier and less verbose.
* Choose wisely between Redux and Context API based on app complexity.

---
## 🏁 Conclusion
Redux is a powerful tool for managing complex state in large React applications. While Context API works well for smaller apps, Redux excels with performance, middleware, debugging, and scalability.
