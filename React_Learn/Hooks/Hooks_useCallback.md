
---

# 📘 React `useCallback`

---

## 🔹 What is `useCallback`?

**`useCallback`** is a React Hook that **memorizes a function**, so that it doesn’t get recreated every time the component re-renders — **unless its dependencies change**.

### 🔧 Syntax

```jsx
const memoizedCallback = useCallback(() => {
  // your logic
}, [dependencies]);
```

---

## 🧠 Real-Life Analogy

> Think of `useCallback` like saving a number in your phone's speed dial —
> instead of typing the number again and again (creating a new function),
> you store it and reuse it.

---

## 🔍 Why Do We Use `useCallback`?

In React:

* Every time a component re-renders, **all functions inside it are recreated**.
* If you pass those new functions to **child components** or **event handlers**, React might **unnecessarily re-render** child components.
* `useCallback` helps you **avoid unnecessary re-renders** by **reusing the same function** if dependencies haven't changed.

---

## 🛠️ Use Cases

| Use Case                    | Why use `useCallback`?                          |
| --------------------------- | ----------------------------------------------- |
| Prevent unnecessary renders | If a child depends on a function via `props`    |
| Expensive logic             | Re-creating the function costs performance      |
| Stable function reference   | For event handlers, timers, memoized components |

---

## ✅ Basic Example Without `useCallback`

```jsx
import { useState } from 'react';

function Counter({ onClick }) {
  console.log("🔁 Counter re-rendered");
  return <button onClick={onClick}>Click Me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Counter onClick={handleClick} />
    </>
  );
}
```

In this case:

* Every time the parent (`App`) re-renders, `handleClick` is **recreated**.
* So `Counter` sees a **new function** and re-renders too, even if the logic didn’t change.

---

## ✅ Solution With `useCallback`

```jsx
import { useState, useCallback } from 'react';

function Counter({ onClick }) {
  console.log("🔁 Counter re-rendered");
  return <button onClick={onClick}>Click Me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // no dependencies → won't change on re-renders

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Counter onClick={handleClick} />
    </>
  );
}
```

📌 Now `handleClick` is **memoized** and doesn’t cause `Counter` to re-render on each parent update.

---

## 🧪 Another Example – with Dependencies

```jsx
import { useState, useCallback } from 'react';

function useLogger(value) {
  return useCallback(() => {
    console.log("Logging value:", value);
  }, [value]);
}

function App() {
  const [input, setInput] = useState("");

  const logInput = useLogger(input);

  return (
    <>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something"
      />
      <button onClick={logInput}>Log</button>
    </>
  );
}
```

📌 `logInput` is only recreated when `input` changes. Efficient and optimized!

---

## 🧠 Summary

| Feature         | Description                                  |
| --------------- | -------------------------------------------- |
| Purpose         | Prevent function re-creation on every render |
| Returns         | Memoized version of the function             |
| Triggers update | Only when dependencies change                |
| Common with     | `React.memo`, expensive computations         |

---

## ⚠️ When NOT to Use `useCallback`

* **Avoid overusing it** for **every function**.
* It’s useful when:

  * You **pass functions to children**
  * There’s a **performance concern**

Otherwise, it might make your code more complex with no benefit.

---

## ✅ Bonus Tip: Pair with `React.memo`

```jsx
const Child = React.memo(({ onClick }) => {
  console.log("🔁 Child rendered");
  return <button onClick={onClick}>Click Child</button>;
});
```

* Now, the child only re-renders **if `onClick` (from parent) changes**.
* `useCallback` ensures that doesn’t happen unless dependencies change.

---
