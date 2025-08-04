

### 🧠 What is Context API?

In simple terms:

> **Context API is a way to share data globally** across components **without passing props manually** at every level (called *prop drilling*).

---

### 🧵 Real-Life Analogy:

Imagine your **Wi-Fi router** is placed in a house.

* Without context: Every device (TV, laptop, phone) needs its own **cable** from the internet source. Clumsy!
* With context: Just place a Wi-Fi router (context), and all devices connect wirelessly. Clean & efficient!

---

### 💡 When to Use Context API?

* When **many components** need access to the **same global state** (e.g., theme, user auth, language, cart items, todos).
* When **prop drilling becomes hard to manage**.

---

## 🔧 Core Building Blocks of Context API

| Concept         | Description                              |
| --------------- | ---------------------------------------- |
| `createContext` | Creates a context object                 |
| `Provider`      | Supplies the context value               |
| `useContext`    | Allows components to consume the context |

---

## 🛠️ Step-by-Step with Full Concept:

Let’s go **step-by-step** with **your Todo App as example**.

---

### 1. `createContext` – Creates a Context Object

```js
import { createContext } from "react";

export const TodoContext = createContext(defaultValue);
```

🔹 `createContext()` returns an object with:

* `.Provider` – gives the context value to components
* `.Consumer` – older way to access context (not used anymore; use `useContext` instead)

---

### 2. `Provider` – Passes Down the Data

You wrap the part of your app with:

```js
<TodoContext.Provider value={{ todos, addTodo, ... }}>
   <App />
</TodoContext.Provider>
```

🔹 This value becomes **available to all children components**—no prop drilling.

---

### 3. `useContext` – Accessing the Context Value

```js
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const { addTodo } = useContext(TodoContext);
```

This gives direct access to values like `addTodo`, `todos`, etc.

---

## ✅ Using Custom Hook for Cleaner Code

You did it like this:

```js
export const useTodo = () => {
    return useContext(TodoContext);
}
```

Now you can simply do:

```js
const { addTodo } = useTodo();
```

🔥 This is more readable & reusable.

---

## ⚙️ Full Lifecycle in Your Example

Let’s understand how **everything flows together**.

### Step-by-step:

1. **Context File Setup** (`TodoContext.js`):

   * You created context using `createContext`.
   * Exported the context and a `useTodo` custom hook.

2. **Provider in App.jsx**:

   * You initialized state in `App.jsx` using `useState`.
   * Wrapped everything in `<TodoProvider value={...}>`.

3. **Consumer Components** (`TodoForm.jsx`, `TodoItem.jsx`):

   * Used `useTodo()` to access & update todos.
   * Components didn't need props—everything was shared via context.

---

## 🔁 Why Not Just Use Props?

Because with deep component trees:

```jsx
<App>
  <Wrapper>
    <Container>
      <TodoForm addTodo={addTodo} />
    </Container>
  </Wrapper>
</App>
```

You’d need to pass props down 3 levels. 😩
**Context avoids this problem.** ✅

---

## 🧠 Concept Deep Dive

Let’s explore **every concept in-depth**:

---

### 🔸 `defaultValue` in createContext

```js
const MyContext = createContext("Guest")
```

If the component **using `useContext` is not wrapped in a Provider**, it will use this default value.

---

### 🔸 `Provider` Value Can Be Anything

You can pass:

* A single variable (e.g., `value={user}`)
* An object (e.g., `value={{user, setUser}}`)
* Even functions

---

### 🔸 Context is Global, Not App-wide

If you wrap a specific component tree in Provider:

```js
<ThemeContext.Provider>
  <ComponentTree />
</ThemeContext.Provider>
```

Only components inside `ComponentTree` will have access.
So **where you wrap** matters.

---

### 🔸 Performance Optimization Tips

Context can **re-render all children** when the value changes.

To optimize:

* Split large context into smaller ones (e.g., `AuthContext`, `ThemeContext`)
* Use `useMemo` around context value:

```js
const value = useMemo(() => ({todos, addTodo}), [todos])
```

---

## 🧩 Real Use Cases of Context API

| Use Case       | Example                                |
| -------------- | -------------------------------------- |
| Auth           | Store `user` object, `isAuthenticated` |
| Theme Switcher | Light / Dark mode                      |
| Language       | i18n / Locale data                     |
| Global Todos   | As in your project                     |
| Cart           | E-commerce cart logic                  |

---

## ✨ Summary Table

| Feature           | Description                          |
| ----------------- | ------------------------------------ |
| `createContext()` | Creates a new Context                |
| `Provider`        | Provides context to child components |
| `useContext()`    | Hook to consume the context          |
| Custom Hook       | Cleaner access using `useContext`    |
| Global State      | Useful for auth, todos, theme, etc.  |
| Optimization      | Split context & use `useMemo`        |

---

## 🧪 Bonus: Visual Flow

```
[ App ]
  └── TodoProvider (provides context)
        ├── TodoForm (adds todo)
        └── TodoItem (reads/updates/deletes todo)
```

---

## 🛠 Code Snippet Recap

```js
// TodoContext.js
export const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext);

// App.jsx
<TodoProvider value={{todos, addTodo}} >
  <TodoForm />
</TodoProvider>

// TodoForm.jsx
const { addTodo } = useTodo();
```

---
