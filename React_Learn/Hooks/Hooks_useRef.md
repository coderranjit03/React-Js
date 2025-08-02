
---

# 📘 `useRef` in React 

---

## 🧠 What is `useRef`?

In simple words:

> **`useRef`** gives you a way to **hold a reference** to a **DOM element** or **store mutable values** that **don't cause re-render** when changed.

---

## 🛠️ Syntax

```jsx
const refContainer = useRef(initialValue);
```

* `refContainer.current` holds the value.
* You can **read/write** to `.current` without re-rendering.

---

## 🧪 Real-Life Analogies

### 📌 Example 1: Bookmark

You put a **bookmark** in a book to **remember a page** — but the book doesn’t change (re-render) when you change the bookmark.

`useRef` is like that bookmark.

### 📌 Example 2: Stopwatch

You use a **stopwatch** to track time, but your room doesn't change when the stopwatch runs — it just keeps counting. That’s `useRef`.

---

## 🧪 Use Cases of `useRef`

| Use Case                            | Example                            |
| ----------------------------------- | ---------------------------------- |
| Accessing DOM directly              | Focus input, scroll, etc.          |
| Storing mutable values (like a box) | Timer ID, previous value, etc.     |
| Persist values between renders      | Count renders without re-rendering |

---

## ✅ 1. Accessing DOM Elements (e.g., Focus Input)

```jsx
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); // 🔍 Focus the input box
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enter your name" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
```

📌 Real-life: Like saying *“When I click the button, put the cursor in the input box.”*

---

## ✅ 2. Track Previous Value

```jsx
import { useEffect, useRef, useState } from "react";

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  });

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

📌 It remembers the **previous value** even after the component updates!

---

## ✅ 3. Timer Example (Storing setInterval ID)

```jsx
import { useRef, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef();

  const start = () => {
    intervalRef.current = setInterval(() => {
      setTime(t => t + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <h2>Time: {time}</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}
```

📌 Use `useRef` to store timer ID that **won’t cause re-renders** when changed.

---

## ✅ 4. Store Value Without Re-rendering

```jsx
import { useState, useRef } from "react";

function RenderCounter() {
  const [input, setInput] = useState("");
  const renderCount = useRef(1);

  renderCount.current++;

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <p>Renders: {renderCount.current}</p>
    </div>
  );
}
```

📌 `renderCount` increases, but doesn’t cause another render.

---

## 📌 Summary Table

| Feature                | `useRef` Details                             |
| ---------------------- | -------------------------------------------- |
| Returns                | `{ current: value }` object                  |
| Triggers re-render?    | ❌ No                                         |
| Useful for             | DOM refs, storing data across renders        |
| Common use cases       | Focus input, store intervals, previous state |
| Lives between renders? | ✅ Yes                                        |

---

## ✅ Key Differences

| Concept             | `useRef`                             | `useState`             |
| ------------------- | ------------------------------------ | ---------------------- |
| Triggers re-render? | ❌ No                                 | ✅ Yes                  |
| Mutable?            | ✅ Yes (via `.current`)               | ✅ Yes (via `setState`) |
| Use case            | Store DOM refs, timer IDs, prev data | UI data                |

---

