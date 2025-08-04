
Let’s **break this down step-by-step** so you can understand **how the Context API works in our project**.

---

## 🔍 What is Context API?

In simple terms:

> The **Context API** lets you share state or data across components without passing props manually at every level.

Think of it like a **global store** (like a backpack) that any component can use or update directly, no matter how deep in the tree it is.

---

## 🔧 Problem Without Context API

Imagine you're not using Context. To pass `todos`, `addTodo`, etc., from `App` to `TodoForm` and `TodoItem`, you’d need to do:

```jsx
<App>
  <TodoForm 
    addTodo={addTodo} 
  />
  <TodoItem 
    todos={todos}
    updateTodo={...}
    ...
  />
</App>
```

Now if `TodoItem` has a child → grandchild → etc. — you’ll have to keep passing props through each level. This is called **prop drilling**.

---

## ✅ What Context API Does Instead

It **creates a central store**, and you can use data/functions from it *anywhere*, without passing props manually.

---

## 🔩 Your App Structure with Context API

```
App.jsx
│
├── <TodoProvider> — [ Wraps the app ]
│     Provides: todos, addTodo, updateTodo, etc.
│
├── TodoForm — Uses useTodo() to access addTodo
│
└── TodoItem — Uses useTodo() to access todo list functions
```

---

## 🧠 Let's Understand Each File One by One

---

### 1️⃣ `TodoContext.js`

```js
import { createContext, useContext } from "react";

// 1. Create context with default structure
export const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {}
});

// 2. Create custom hook for consuming context
export const useTodo = () => useContext(TodoContext);

// 3. Export Provider
export const TodoProvider = TodoContext.Provider;
```

📌 **Purpose**:

* `TodoContext`: creates a shared context
* `useTodo()`: shortcut to `useContext(TodoContext)`
* `TodoProvider`: wraps the app and shares data

---

### 2️⃣ `App.jsx` — Context Provider Setup

```jsx
<TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
  {/* Now any child component can access these using useTodo() */}
  <TodoForm />
  <TodoItem />
</TodoProvider>
```

📌 Here, `TodoProvider` wraps the entire app and makes the value (state + functions) **globally available** to any child component.

---

### 3️⃣ `TodoForm.jsx` — Add New Todos

```jsx
const { addTodo } = useTodo(); // consume the context

const add = (e) => {
  e.preventDefault();
  addTodo({ todo, completed: false }); // add new todo
}
```

📌 **Purpose**: When user submits form → `addTodo()` is called from the context → updates global state.

---

### 4️⃣ `TodoItem.jsx` — Display / Edit / Delete Todos

```jsx
const { updateTodo, deleteTodo, toggleComplete } = useTodo();
```

📌 **Purpose**:

* `updateTodo`: edits the task
* `deleteTodo`: removes it
* `toggleComplete`: marks complete/incomplete

---

### 5️⃣ `contexts/index.js` (barrel export)

```js
export { TodoContext, TodoProvider, useTodo } from "./TodoContext";
```

This allows simplified import like:

```js
import { useTodo } from "../contexts";
```

---

## 💡 Summary (Why We Use Context API)

| Benefit                 | Description                                           |
| ----------------------- | ----------------------------------------------------- |
| ✅ No prop drilling      | Don't pass props manually through multiple components |
| ✅ Global data access    | Access/update todos from anywhere                     |
| ✅ Cleaner code          | Central state & logic                                 |
| ✅ Scalable architecture | Easy to add new features                              |

---

## 🎓 Real Life Analogy

> Imagine Context API as a **WiFi router** in your home. All your devices (components) can connect to it without needing cables (props) from the source (App).

If you didn’t have WiFi (Context), you’d need cables going to every device (prop drilling) — messy and inconvenient.

---

## ✅ Final Tip

If your app is small, props are okay. But as it grows, **Context API or other state managers (Redux, Zustand, etc.)** become necessary.

---

